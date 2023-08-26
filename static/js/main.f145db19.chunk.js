(this.webpackJsonpworkfolio=this.webpackJsonpworkfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),s=n(1),i=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(a.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: light)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="http://harsh-chhantbar.github.io/",j="HC.",h="Harsh Chhantbar",d="Software Engineer",b="I'm an enthusiastic and experienced software engineer, specialising in crafting robust and scalable web applications using GO and PHP. My skill set includes developing RESTful APIs, integrating third-party services, and optimising overall system performance. A lifelong learner, I am eager to explore new technologies and methodologies that will contribute to the success of the projects I work on.",u="https://example.com",m={linkedin:"https://www.linkedin.com/in/harsh-chhantbar/",github:"https://github.com/harsh-chhantbar"},p=[{name:"Game APP",description:"Develop REST API and Admin panel for managing all game app data. The scope includes implementing essential CRUD operations to handle various aspects of the gaming app's data. Additionally, enhancing the functionality and user experience.",stack:["PHP-Laravel","Bootstrap","MySQL","jQuery","Postman API Doc"]},{name:"Social Media APP",description:"Build REST API for a social media app. This platform lets users easily upload videos and images to AWS S3, with automatic compression before sending. The app also supports both group chats and one-on-one messaging, making interactions fun and personalised.",stack:["PHP-Laravel","AWS S3","FCM","MySQL","Postman API Doc"]},{name:"Reward and Recognition SPA",description:"Developed REST API for rewards and recognition single page app, This app offers Google Authentication, CRUD operation, certification generation and role based access control (RBAC) features.",stack:["Go","PostgresSQL","GORM","AWS S3","Docker","Swagger Doc"]}],O=["HTML","CSS","Bootstrap","PHP","Laravel","Go","JavaScript","jQuery","Vue.js","Git","Docker","Swagger","Postman","PostgreSQL","MySQL"],f="harshchhantbar.dev@gmail.com",x=n(16),g=n.n(x),k=n(14),v=n.n(k),N=n(18),_=n.n(N),S=n(17),w=n.n(S),P=(n(28),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(s.useState)(!1),o=Object(a.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,f?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(i.jsx)(v.a,{}):Object(i.jsx)(g.a,{})}),Object(i.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(w.a,{}):Object(i.jsx)(_.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(P,{})]})}),y=n(11),A=n.n(y),E=n(19),I=n.n(E),L=(n(33),function(){var e=h,t=d,n=b,c=u,a=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:n&&n}),Object(i.jsxs)("div",{className:"about__contact center",children:[c&&Object(i.jsx)("a",{href:c,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(A.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(I.a,{})})]})]})]})}),R=n(7),T=n.n(R),D=n(20),H=n.n(D),M=(n(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},T()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(A.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(H.a,{})})]})}),G=(n(36),function(){return p.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(i.jsx)(M,{project:e},T()())}))})]}):null}),Q=(n(37),function(){return O.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),B=n(21),J=n.n(B),W=(n(38),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(J.a,{fontSize:"large"})})}):null}),F=(n(39),function(){return f?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(f),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/harsh-chhantbar",className:"link footer__link",children:"Created By Harsh Chhantbar"})})}),z=(n(41),function(){var e=Object(s.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(C,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(L,{}),Object(i.jsx)(G,{}),Object(i.jsx)(Q,{}),Object(i.jsx)(F,{})]}),Object(i.jsx)(W,{}),Object(i.jsx)(U,{})]})});n(42);Object(c.render)(Object(i.jsx)(r,{children:Object(i.jsx)(z,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f145db19.chunk.js.map