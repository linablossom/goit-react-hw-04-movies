(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{20:function(e,n,t){"use strict";t(0);var a=t(2),c=t(1);n.a=function(e){var n=e.routes,t=e.basePath,r=void 0===t?"":t;return Object(c.jsx)(a.c,{children:n.map((function(e){var n=e.path,t=e.component,i=e.exact;return Object(c.jsx)(a.a,{path:r+n,component:t,exact:i},n)}))})}},21:function(e,n,t){"use strict";var a,c=t(18),r=t(26),i=(t(0),t(8)),o=t(9).a.nav(a||(a=Object(i.a)(["\n  display: flex;\n  align-items: center;\n\n  .navList {\n    display: flex;\n  }\n\n  .navItem {\n  }\n\n  .navItem + .navItem {\n    margin-left: 20px;\n  }\n\n  .activeNavLink {\n    color: white;\n  }\n"]))),s=t(10),l=t(1),u=["routes","basePath","prevPath"];n.a=function(e){var n=e.routes,t=e.basePath,a=void 0===t?"":t,i=e.prevPath,j=Object(r.a)(e,u);return Object(l.jsx)(o,Object(c.a)(Object(c.a)({},j),{},{children:Object(l.jsx)("ul",{className:"navList",children:n.filter((function(e){return!!e.name})).map((function(e){var n=e.name,t=e.path,c=e.exact;return Object(l.jsx)("li",{className:"navItem",children:Object(l.jsx)(s.b,{activeClassName:"activeNavLink",to:{pathname:a+t,state:{prevPath:i}},exact:c,children:n})},t)}))})}))}},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a,c,r=t(0),i=t.n(r),o=t(22),s=t.n(o),l=t(10),u=t(8),j=t(9),h=j.a.header(a||(a=Object(u.a)(["\n  height: 80px;\n  font-size: 25px;\n  font-weight: 700;\n  background-color: teal;\n  color: #0e0f0f;\n"]))),b=t(21),m=[{name:"Home",path:"/",exact:!0,component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,75))}))},{name:"Movies",path:"/movies",exact:!0,component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,77))}))},{path:"/movies/:movieId",component:i.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,76))}))}],v=t(1),p=function(){return Object(v.jsx)(h,{children:Object(v.jsx)(b.a,{routes:m})})},f=t(20),x=j.a.main(c||(c=Object(u.a)(["\n  color: #fff;\n"]))),d=function(){return Object(v.jsx)(x,{children:Object(v.jsx)(f.a,{routes:m})})},O=function(){return Object(v.jsxs)(r.Suspense,{fallback:Object(v.jsx)("div",{children:"Loading.."}),children:[Object(v.jsx)(p,{}),Object(v.jsx)(d,{})]})};t(38);s.a.render(Object(v.jsx)(l.a,{children:Object(v.jsx)(O,{})}),document.getElementById("root"))}},[[39,2,3]]]);
//# sourceMappingURL=main.bf6e49bc.chunk.js.map