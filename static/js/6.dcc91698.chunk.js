(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{76:function(e,t,a){"use strict";a.r(t);var n,r=a(45),c=a.n(r),s=a(46),i=a(41),o=a(42),l=a(44),u=a(43),h=a(8),p=a(0),d=a.n(p),b=a(20),j=a(47),v=a.n(j),O=a(1),m=[{name:"Cast",path:"/cast",exact:!0,component:function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cast:[],id:451048},e.loadCast=Object(s.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.props.match.params.movieId,t.next=4,v.a.get("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=24f3be077b2e648be81bca41e098d522"));case 4:n=t.sent,e.setState({cast:n.data.cast}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadCast()}},{key:"render",value:function(){return Object(O.jsx)("ul",{children:this.state.cast.map((function(e){var t=e.cast_id,a=e.profile_path,n=e.original_name,r=e.character,c=e.name;return Object(O.jsxs)("li",{children:[a?Object(O.jsx)("img",{src:"https://www.themoviedb.org/t/p/w138_and_h175_face/"+a,alt:c}):null,n?Object(O.jsx)("p",{children:n}):null,r?Object(O.jsxs)("p",{children:["Character: ",r]}):null]},"cast-".concat(t))}))})}}]),a}(p.Component)},{name:"Reviews",path:"/reviews",exact:!0,component:function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={reviews:[],id:451048,authorId:""},e.getReview=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("https://api.themoviedb.org/3/movie/".concat(e.state.id,"/reviews?api_key=24f3be077b2e648be81bca41e098d522"));case 3:a=t.sent,e.setState({reviews:a.data.results}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getReview()}},{key:"render",value:function(){return Object(O.jsx)("ul",{children:this.state.reviews.map((function(e){var t=e.id,a=e.author,n=e.content;return Object(O.jsxs)("li",{children:[Object(O.jsxs)("h4",{children:["Author: ",a]}),Object(O.jsx)("p",{children:n})]},"review-".concat(t))}))})}}]),a}(p.Component)}],f=a(21),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.poster_path,a=e.title,n=e.release_date,r=e.vote_average,c=e.overview,s=e.genres,i=new Date(n).getFullYear(),o=Math.floor(10*+r),l=s.map((function(e){return e.name})).join(", ");return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("button",{type:"button",onClick:this.props.goBack,children:"\u2190 Go back"}),Object(O.jsxs)("article",{children:[t?Object(O.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"+t,alt:a}):null,Object(O.jsxs)("h2",{children:[a||null," (",i||null,")"]}),o?Object(O.jsxs)("p",{children:["User score: ",o,"%"]}):null,Object(O.jsx)("h3",{children:"Overview"}),c?Object(O.jsx)("p",{children:c}):null,Object(O.jsx)("h4",{children:"Genres"}),l?Object(O.jsx)("p",{children:l}):null]}),Object(O.jsx)("p",{children:"Additional information"})]})}}]),a}(p.Component),g=a(9),w=Object(g.a)(f.a)(n||(n=Object(h.a)(["\n  ul {\n    display: flex;\n    flex-direction: column;\n    list-style: square;\n  }\n  li {\n    color: red;\n    margin: 10px 0 0 20px;\n  }\n"]))),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!1,loading:!1,details:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),t=this.props.match.params.movieId,e.next=5,v.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=24f3be077b2e648be81bca41e098d522"));case 5:a=e.sent,this.setState({details:a.data,loading:!1,loaded:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!this.state.loaded||this.state.loading)return null;var t=(this.props.location.state||{}).prevPath;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{details:this.state.details,goBack:function(){return e.props.history.push(t)}}),Object(O.jsx)(w,{routes:m,basePath:this.props.match.url,prevPath:t}),Object(O.jsx)(b.a,{routes:m,basePath:this.props.match.path})]})}}]),a}(d.a.Component);t.default=k}}]);
//# sourceMappingURL=6.dcc91698.chunk.js.map