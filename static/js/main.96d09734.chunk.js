(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),o=function(e){var t=e.todos,c=e.todo,s=e.onTodo,a=c?c.id:0;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:e.id===a?"has-background-info-light":"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:e.id===a?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})},d=function(e){var t=e.filterByStatus,c=e.setFilterByStatus,s=e.query,a=e.setQuery;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function r(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=500,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var j,u=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},b=function(e){var t=e.todo,c=e.onTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),o=a[0],d=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,r("/users/".concat(e))).then((function(e){return d(e)}))}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),o?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]}):Object(i.jsx)(u,{})]})};!function(e){e.Active="active",e.Completed="completed"}(j||(j={}));var h=function(){var e,t,c=Object(l.useState)([]),s=Object(n.a)(c,2),a=s[0],h=s[1],m=Object(l.useState)(null),O=Object(n.a)(m,2),x=O[0],f=O[1],p=Object(l.useState)("all"),N=Object(n.a)(p,2),v=N[0],y=N[1],g=Object(l.useState)(""),k=Object(n.a)(g,2),S=k[0],C=k[1],w=function(e){f(e)};switch(v){case j.Active:e=a.filter((function(e){return!e.completed}));break;case j.Completed:e=a.filter((function(e){return e.completed}));break;default:e=a}return t=S?e.filter((function(e){return t=e.title,c=S,t.toLowerCase().includes(c.trim().toLowerCase());var t,c})):e,Object(l.useEffect)((function(){r("/todos").then((function(e){return h(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(d,{filterByStatus:v,setFilterByStatus:y,query:S,setQuery:C})}),Object(i.jsx)("div",{className:"block",children:a.length>0?Object(i.jsx)(o,{todos:t,todo:x,onTodo:w}):Object(i.jsx)(u,{})})]})})}),x&&Object(i.jsx)(b,{todo:x,onTodo:w})]})};a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.96d09734.chunk.js.map