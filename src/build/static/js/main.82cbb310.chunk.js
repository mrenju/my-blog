(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{17:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(25);var c=n(1),r=n.n(c),s=n(19),a=n.n(s),i=(n(30),n(20)),o=n(21),j=n(24),u=n(23),l=(n(17),n(0)),b=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Hello, welcome to my page"}),Object(l.jsx)("p",{children:"first paragraph"}),Object(l.jsx)("p",{children:"Second paragraph"})]})},h=n(8),d=n(2),x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"About me"})})},O=function(e){var t=e.articles;return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsxs)(h.b,{to:"/article/".concat(e.name),children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("p",{children:e.content[0].substring(0,150)})]},t)}))})},m=[{name:"learn-react",title:"Learn React",content:["Welcome to react!!"]},{name:"learn-node",title:"Learn Node",content:["not Welcome to react!!"]}],p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Articles list"}),Object(l.jsx)(O,{articles:m})]})},f=n(7),v=n.n(f),g=n(10),y=n(12),A=function(e){var t=e.comments;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsx)("h4",{children:e.username}),Object(l.jsx)("p",{children:e.text})]},t)}))]})},C=function(){return Object(l.jsx)("h1",{children:"404: Page Not Found"})},F=function(e){var t=e.articleName,n=e.upvotes,c=e.setArticleInfo,r=function(){var e=Object(g.a)(v.a.mark((function e(){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvotes"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"upvotes-section",children:[Object(l.jsx)("button",{onClick:function(){return r()},children:"Add Upvote"}),Object(l.jsxs)("p",{children:["This post has been upvoted ",n," times"]})]})},w=function(e){var t=e.articleName,n=e.setArticleInfo,r=Object(c.useState)(""),s=Object(y.a)(r,2),a=s[0],i=s[1],o=Object(c.useState)(""),j=Object(y.a)(o,2),u=j[0],b=j[1],h=function(){var e=Object(g.a)(v.a.mark((function e(){var c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:a,text:u}),headers:{"Content-Type":"application/json"}});case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,n(r),i(""),b("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"add-comment-form",children:[Object(l.jsx)("h3",{children:"Add a comment"}),Object(l.jsxs)("label",{children:["Name:",Object(l.jsx)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)("label",{children:["Comment:",Object(l.jsx)("textarea",{rows:"4",cols:"50",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(l.jsx)("button",{onClick:function(){return h()},children:"Add comment"})]})},N=function(e){var t=e.match.params.name,n=m.find((function(e){return e.name===t})),r=Object(c.useState)({upvotes:0,comments:[]}),s=Object(y.a)(r,2),a=s[0],i=s[1];if(Object(c.useEffect)((function(){(function(){var e=Object(g.a)(v.a.mark((function e(){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),i(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return Object(l.jsx)(C,{});var o=m.filter((function(e){return e.name!==t}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:n.title}),Object(l.jsx)(F,{articleName:t,upvotes:a.upvotes,setArticleInfo:i}),n.content.map((function(e,t){return Object(l.jsx)("p",{children:e},t)})),Object(l.jsx)(A,{comments:a.comments}),Object(l.jsx)(w,{articleName:t,setArticleInfo:i}),Object(l.jsx)("h3",{children:"Other Articles:"}),Object(l.jsx)(O,{articles:o})]})},k=function(){return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{id:"nav-list",children:[Object(l.jsx)("li",{class:"active",children:Object(l.jsx)(h.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(h.b,{to:"/articles-list",children:"Articles"})}),Object(l.jsx)("li",{style:{float:"right"},children:Object(l.jsx)(h.b,{to:"/about",children:"About"})})]})})},S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(l.jsx)(h.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(k,{}),Object(l.jsx)("div",{id:"page-body",children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/",component:b,exact:!0}),Object(l.jsx)(d.a,{path:"/about",component:x,exact:!0}),Object(l.jsx)(d.a,{path:"/articles-list",component:p,exact:!0}),Object(l.jsx)(d.a,{path:"/article/:name",component:N,exact:!0}),Object(l.jsx)(d.a,{component:C})]})})]})})}}]),n}(c.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.82cbb310.chunk.js.map