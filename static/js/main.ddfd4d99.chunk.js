(this["webpackJsonpdemo-query-builder"]=this["webpackJsonpdemo-query-builder"]||[]).push([[0],{231:function(e,t,l){},232:function(e,t,l){},437:function(e,t,l){"use strict";l.r(t);var r=l(9),n=l.n(r),i=(l(231),l(168)),c=l(21),a=(l(232),l(233),l(0)),u=l(218),s=l(38),o=l(221),b=l.n(o),d=l(15);function j(){var e=b.a,t=Object(c.a)(Object(c.a)({},e),{},{settings:Object(c.a)(Object(c.a)({},e.settings),{},{addRuleLabel:"Add Rule",addGroupLabel:"Add Group",delGroupLabel:"Delete Group",notLabel:"NOT"}),conjunctions:Object(c.a)(Object(c.a)({},e.conjunctions),{},{AND:Object(c.a)(Object(c.a)({},e.conjunctions.AND),{},{label:"AND"}),OR:Object(c.a)(Object(c.a)({},e.conjunctions.OR),{},{label:"OR"})}),fields:{name:{label:"Name",type:"text",valueSources:["value"],preferWidgets:["text"]},qty:{label:"Qty",type:"number",fieldSettings:{min:0},valueSources:["value"],preferWidgets:["number"]},price:{label:"Price",type:"number",valueSources:["value"],fieldSettings:{min:10,max:100},preferWidgets:["slider","rangeslider"]},color:{label:"Color",type:"select",valueSources:["value"],fieldSettings:{listValues:[{value:"yellow",title:"Yellow"},{value:"green",title:"Green"},{value:"orange",title:"Orange"}]}},is_promotion:{label:"Promo?",type:"boolean",operators:["equal"],valueSources:["value"]}}}),l={id:s.Utils.uuid(),type:"group",children1:{"b99ab988-0123-4456-b89a-b17956f89e96":{type:"rule",properties:{field:null,operator:null,value:[],valueSrc:[],valueType:[]}}}},r=Object(a.useState)(s.Utils.checkTree(s.Utils.loadTree(l),t)),n=Object(i.a)(r,2),o=n[0],j=n[1],v=Object(a.useState)(t),g=Object(i.a)(v,2),m=g[0],y=g[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u.a,{children:Object(d.jsx)("title",{children:"Demo Query Builder"})}),Object(d.jsx)("div",{className:"App-body",children:Object(d.jsxs)("div",{className:"awesome-query-builder",children:[Object(d.jsx)(s.Query,Object(c.a)(Object(c.a)({},m),{},{value:o,onChange:function(e,t){return function(e,t){j(e),y(t);var l=s.Utils.getTree(e);console.log(l)}(e,t)},renderBuilder:function(e){return Object(d.jsx)(O,Object(c.a)({},e))}})),Object(d.jsx)(p,{immutableTree:o,config:m})]})})]})}var O=function(e){return Object(d.jsx)("div",{className:"query-builder-container",style:{padding:10},children:Object(d.jsx)("div",{className:"query-builder",children:Object(d.jsx)(s.Builder,Object(c.a)({},e))})})},p=function(e){var t=e.immutableTree,l=e.config;return Object(d.jsxs)("div",{className:"query-builder-result",children:[Object(d.jsxs)("div",{children:["Query string:"," ",Object(d.jsx)("pre",{children:JSON.stringify(s.Utils.queryString(t,l))})]}),Object(d.jsxs)("div",{children:["SQL where:"," ",Object(d.jsx)("pre",{children:JSON.stringify(s.Utils.sqlFormat(t,l))})]})]})},v=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,439)).then((function(t){var l=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;l(e),r(e),n(e),i(e),c(e)}))};n.a.render(Object(d.jsx)(j,{}),document.getElementById("root")),v()}},[[437,1,2]]]);
//# sourceMappingURL=main.ddfd4d99.chunk.js.map