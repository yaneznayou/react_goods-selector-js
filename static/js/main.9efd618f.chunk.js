(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=(c(9),c(10),c(1)),r=c(0),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var e=Object(o.useState)("Jam"),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("main",{className:"section container",children:[Object(r.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c?"".concat(c," is selected"):"No goods selected",c&&Object(r.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return s("")}})]}),Object(r.jsx)("table",{className:"table",children:Object(r.jsx)("tbody",{children:i.map((function(e){var t=e===c,n=t?"has-background-success-light":"";return Object(r.jsxs)("tr",{"data-cy":"Good",className:n,children:[Object(r.jsx)("td",{children:Object(r.jsx)("button",{"data-cy":t?"RemoveButton":"AddButton",type:"button",className:"button ".concat(t?"is-info":""),onClick:function(){return s(t?"":e)},children:t?"-":"+"})}),Object(r.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:e})]},e)}))})})]})};n.a.render(Object(r.jsx)(l,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.9efd618f.chunk.js.map