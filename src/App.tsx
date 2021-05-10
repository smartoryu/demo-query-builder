import "./App.scss";
import "react-awesome-query-builder/lib/css/styles.css";
// import "react-awesome-query-builder/lib/css/compact_styles.css"; //optional, for more compact styles

import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Query,
  Builder,
  Utils as QbUtils,
  BuilderProps,
  ImmutableTree,
  Config,
  JsonGroup,
} from "react-awesome-query-builder";
import AntdConfig from "react-awesome-query-builder/lib/config/antd";
// import _ from "lodash";

export default function App() {
  const InitialConfig = AntdConfig;

  const configs: Config = {
    ...InitialConfig,

    // change settings label
    settings: {
      ...InitialConfig.settings,
      addRuleLabel: "Add Rule",
      addGroupLabel: "Add Group",
      delGroupLabel: "Delete Group",
      notLabel: "NOT",
    },

    // change conjunctions label
    conjunctions: {
      ...InitialConfig.conjunctions,
      AND: { ...InitialConfig.conjunctions.AND, label: "AND" },
      OR: { ...InitialConfig.conjunctions.OR, label: "OR" },
    },

    // set all the query builder's field within fields object below
    fields: {
      name: {
        label: "Name",
        type: "text",
        valueSources: ["value"],
        preferWidgets: ["text"],
      },
      qty: {
        label: "Qty",
        type: "number",
        fieldSettings: {
          min: 0,
        },
        valueSources: ["value"],
        preferWidgets: ["number"],
      },
      price: {
        label: "Price",
        type: "number",
        valueSources: ["value"],
        fieldSettings: {
          min: 10,
          max: 100,
        },
        preferWidgets: ["slider", "rangeslider"],
      },
      color: {
        label: "Color",
        type: "select",
        valueSources: ["value"],
        fieldSettings: {
          listValues: [
            { value: "yellow", title: "Yellow" },
            { value: "green", title: "Green" },
            { value: "orange", title: "Orange" },
          ],
        },
      },
      is_promotion: {
        label: "Promo?",
        type: "boolean",
        operators: ["equal"],
        valueSources: ["value"],
      },
    },
  };

  // set initial value for empty query builder
  const initialQueryValue: JsonGroup = {
    id: QbUtils.uuid(),
    type: "group",
    children1: {
      "b99ab988-0123-4456-b89a-b17956f89e96": {
        type: "rule",
        properties: {
          field: null,
          operator: null,
          value: [],
          valueSrc: [],
          valueType: [],
        },
      },
    },
  };

  const [tree, setTree] = useState<ImmutableTree>(
    QbUtils.checkTree(QbUtils.loadTree(initialQueryValue), configs)
  );
  const [config, setConfig] = useState<Config>(configs);

  const onChange = (immutableTree: ImmutableTree, config: Config) => {
    // Tip: for better performance you can apply `throttle` - see `examples/demo`
    // this.setState({tree: immutableTree, config: config});
    setTree(immutableTree);
    setConfig(config);

    // TODO find out what the heck throttle is?! currently have no clue
    // _.throttle(() => {
    //   setTree(immutableTree);
    //   setConfig(config);
    // }, 100);

    const jsonTree = QbUtils.getTree(immutableTree);
    console.log(jsonTree);
    // `jsonTree` can be saved to backend, and later loaded to `initialQueryValue`
  };

  return (
    <div className="App">
      <Helmet>
        <title>Demo Query Builder</title>
      </Helmet>

      <div className="App-body">
        <div className="awesome-query-builder">
          <Query
            {...config}
            value={tree}
            onChange={(tree, config) => onChange(tree, config)}
            renderBuilder={(props) => <RenderBuilder {...props} />}
          />

          <RenderResult immutableTree={tree} config={config} />
        </div>
      </div>
    </div>
  );
}

const RenderBuilder = (props: BuilderProps) => (
  <div className="query-builder-container" style={{ padding: 10 }}>
    <div className="query-builder">
      <Builder {...props} />
    </div>
  </div>
);

const RenderResult = ({
  immutableTree,
  config,
}: {
  immutableTree: ImmutableTree;
  config: Config;
}) => (
  <div className="query-builder-result">
    <div>
      Query string:{" "}
      <pre>{JSON.stringify(QbUtils.queryString(immutableTree, config))}</pre>
    </div>
    <div>
      SQL where:{" "}
      <pre>{JSON.stringify(QbUtils.sqlFormat(immutableTree, config))}</pre>
    </div>
    {/* <div>
      JsonLogic:{" "}
      <pre>{JSON.stringify(QbUtils.jsonLogicFormat(immutableTree, config))}</pre>
    </div>
    <div>
      Tree: <pre>{JSON.stringify(QbUtils.getTree(immutableTree))}</pre>
    </div> */}
  </div>
);
