(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{24:function(e,n,t){"use strict";t(0);var a=t(2),c=t(1);n.a=function(e){var n=e.routes,t=e.basePath,r=void 0===t?"":t;return Object(c.jsx)(a.c,{children:n.map((function(e){var n=e.path,t=e.component,i=e.exact;return Object(c.jsx)(a.a,{path:r+n,component:t,exact:i},n)}))})}},25:function(e,n,t){"use strict";var a,c=t(18),r=t(30),i=(t(0),t(8)),o=t(9).a.nav(a||(a=Object(i.a)(["\n  display: flex;\n  align-items: center;\n\n  .navList {\n    display: flex;\n  }\n\n  .navItem {\n  }\n\n  .navItem + .navItem {\n    margin-left: 20px;\n  }\n\n  .activeNavLink {\n    color: white;\n  }\n"]))),s=t(10),l=t(1),u=["routes","basePath"];n.a=function(e){var n=e.routes,t=e.basePath,a=void 0===t?"":t,i=Object(r.a)(e,u);return Object(l.jsx)(o,Object(c.a)(Object(c.a)({},i),{},{children:Object(l.jsx)("ul",{className:"navList",children:n.filter((function(e){return!!e.name})).map((function(e){var n=e.name,t=e.path,c=e.exact;return Object(l.jsx)("li",{className:"navItem",children:Object(l.jsx)(s.b,{activeClassName:"activeNavLink",to:a+t,exact:c,children:n})},t)}))})}))}},42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a,c,r=t(0),i=t.n(r),o=t(26),s=t.n(o),l=t(10),u=t(20),j=t(21),b=t(23),h=t(22),m=t(8),v=t(9),f=v.a.header(a||(a=Object(m.a)(["\n  height: 80px;\n  font-size: 25px;\n  font-weight: 700;\n  background-color: teal;\n  color: #0e0f0f;\n"]))),d=t(25),p=[{name:"Home",path:"/",exact:!0,component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,75))}))},{name:"Movies",path:"/movies",exact:!0,component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,77))}))},{path:"/movies/:movieId",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,76))}))}],x=t(1),O=function(){return Object(x.jsx)(f,{children:Object(x.jsx)(d.a,{routes:p})})},g=t(24),y=v.a.main(c||(c=Object(m.a)(["\n  color: #fff;\n"]))),k=function(){return Object(x.jsx)(y,{children:Object(x.jsx)(g.a,{routes:p})})},w=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).state={trending:[]},e}return Object(j.a)(t,[{key:"render",value:function(){return Object(x.jsxs)(r.Suspense,{fallback:Object(x.jsx)("div",{children:"Loading.."}),children:[Object(x.jsx)(O,{}),Object(x.jsx)(k,{})]})}}]),t}(r.Component);t(42);s.a.render(Object(x.jsx)(l.a,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[43,2,3]]]);
//# sourceMappingURL=main.8916745b.chunk.js.map