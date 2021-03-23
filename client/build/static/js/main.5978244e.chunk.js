(this["webpackJsonpluuk-gg"]=this["webpackJsonpluuk-gg"]||[]).push([[0],{107:function(e,t,n){},166:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(45),c=n.n(s),r=n(9),i=n(28),l=n(13),o=n(72),d=n(50),b=Object(d.b)({name:"store",initialState:{error:"",slack:{online:!1,messages:[]},github:{total:0,contributions:{}}},reducers:{set:function(e,t){return Object(o.a)(Object(o.a)({},e),t.payload)},addMessage:function(e,t){e.slack.messages.push(t.payload)},setOnline:function(e,t){e.slack.online=t.payload}}}),j=b.actions,u=b.reducer,h=Object(d.a)({reducer:u,devTools:!0,middleware:Object(d.c)()}),p=i.c,m=(n(107),n(108),n(112),n(12)),O=(n(166),n(1)),v=function(){return Object(O.jsxs)("div",{className:"Dashboard",children:[Object(O.jsxs)("div",{className:"intro",children:[Object(O.jsxs)("p",{children:["This is an example of how to build a complex web application. Feel free to explore each page and download the source code available on"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/LuukvE/Luuk.gg",children:"Github"}),". The client is written in"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.typescriptlang.org",children:"Typescript"})," ","and uses"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://reactjs.org",children:"React"}),". The API is written for"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://nodejs.org",children:"NodeJS"})," ","and runs on"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://aws.amazon.com/ec2",children:"AWS EC2"}),".",Object(O.jsx)("br",{}),"If you need tips on how to develop apps or just want to chat, use the"," ",Object(O.jsx)(m.a,{to:"/messenger",children:"Messenger"})," page,"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/luukvanegeraat",children:"LinkedIn"})," ","or"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:l.vanegeraat@gmail.com",children:"l.vanegeraat@gmail.com"}),"."]}),Object(O.jsx)("img",{src:"/luuk.jpg",alt:""})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)(m.a,{className:"icon",to:"/career",children:[Object(O.jsx)("i",{className:"fas fa-code"})," Career"]}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Implements the"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://docs.github.com/en/graphql",children:"Github GraphQL API"})," ","and"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://developers.google.com/maps",children:"Google Maps API"})]}),Object(O.jsx)("li",{children:"Displays the number of code contributions I made on a calendar"}),Object(O.jsx)("li",{children:"Displays a world map with markers of places I worked at"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)(m.a,{className:"icon",to:"/cooking",children:[Object(O.jsx)("i",{className:"fas fa-utensils"})," Cooking"]}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Implements the"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://developers.google.com/identity/protocols/oauth2",children:"Google oAuth API"})," ","and"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://aws.amazon.com/s3",children:"AWS S3 API"})]}),Object(O.jsx)("li",{children:"Displays a list of recipes with filters and sort options"}),Object(O.jsx)("li",{children:"Users can submit new recipes when signed in"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)(m.a,{className:"icon",to:"/messenger",children:[Object(O.jsx)("i",{className:"fab fa-slack"})," Messenger"]}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Implements the"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://api.slack.com",children:"Slack API"})," ","and"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",children:"Websocket API"})]}),Object(O.jsx)("li",{children:"Users can chat with me in real-time"}),Object(O.jsx)("li",{children:"Displays my Slack online status"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)(m.a,{className:"icon",to:"/meeting",children:[Object(O.jsx)("i",{className:"fas fa-video"})," Meeting"]}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Implements the"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.twilio.com/docs/usage/api",children:"Twilio API"})," ","and"," ",Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API",children:"WebRTC API"})]}),Object(O.jsx)("li",{children:"Users can have a 1:1 meeting with video/audio"}),Object(O.jsx)("li",{children:"Displays a sharable room link to invite others"})]})]})]})},f=n(27),g=(n(169),n(182)),x=n(175),y=n(96),k=n(97),S=n(47),w=function(e){var t=Object(i.b)(),n=Object(a.useState)(!0),s=Object(f.a)(n,2),c=s[0],r=s[1],l="".concat("https://api.luuk.gg").replace("http://","ws://").replace("https://","wss://");e.current=e.current||new WebSocket(l);var o=Object(a.useCallback)((function(t){var n,a,s;(null===(n=e.current)||void 0===n?void 0:n.readyState)===(null===(a=e.current)||void 0===a?void 0:a.OPEN)&&(null===(s=e.current)||void 0===s||s.send(JSON.stringify({text:t})))}),[e]);return Object(a.useEffect)((function(){var n,a;null===(n=e.current)||void 0===n||n.addEventListener("open",(function(e){r(!1)})),null===(a=e.current)||void 0===a||a.addEventListener("message",(function(e){var n=JSON.parse(e.data);if("boolean"===typeof n.online)return t(j.setOnline(n.online));t(j.addMessage(n))}))}),[e,t]),{loading:c,send:o}},N=function(e){var t=e.socket,n=w(t),s=n.loading,c=n.send,r=Object(a.useState)(""),i=Object(f.a)(r,2),l=i[0],o=i[1],d=Object(a.useState)(0),b=Object(f.a)(d,2),j=b[0],u=b[1],h=p((function(e){return e.slack})),m=h.messages,v=h.online;return Object(O.jsxs)("div",{className:"Messenger",children:[Object(O.jsxs)("div",{className:"message luuk  ".concat(v?"online":"offline"),children:[Object(O.jsx)("img",{src:"/luuk.jpg",alt:""}),Object(O.jsxs)("p",{children:["You can write a message directly to my Slack app from this page. I am currently"," ",v?"online":"offline",". If I respond too slowly you can send me your email address and I can respond later."]})]}),m.map((function(e,t){return Object(O.jsxs)("div",{className:"message ".concat(e.sender.toLowerCase()," ").concat(v?"online":"offline"),children:["Luuk"===e.sender&&Object(O.jsx)("img",{src:"/luuk.jpg",alt:""}),"You"===e.sender&&Object(O.jsx)("small",{children:Object(g.a)(Object(x.a)(e.date),"HH:mm")}),Object(O.jsx)("p",{children:e.text}),"Luuk"===e.sender&&Object(O.jsx)("small",{children:Object(g.a)(Object(x.a)(e.date),"HH:mm")}),"You"===e.sender&&Object(O.jsx)("b",{className:"user-icon",children:Object(O.jsx)("i",{className:"fas fa-user"})})]},t)})),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),!s&&l&&(c(l),o(""),u(j+1))},children:[Object(O.jsx)(y.a.Control,{value:l,onChange:function(e){o(e.target.value)}}),Object(O.jsx)(k.a,{disabled:s,children:j>Object.keys(m).length?Object(O.jsx)(S.a,{animation:"border"}):Object(O.jsx)("span",{children:Object(O.jsx)("i",{className:"fas fa-paper-plane"})})})]})]})},M=(n(171),n(176)),C=n(177),I=n(178),L=n(179),A=n(180),E=n(183),D=n(184),T=n(181),J=n(71),R=n.n(J),P=n(95),H=function(){var e=Object(i.b)(),t=Object(a.useRef)(null),n=Object(a.useState)(!1),s=Object(f.a)(n,2),c=s[0],r=s[1];return{loading:c,getContributions:Object(a.useCallback)(Object(P.a)(R.a.mark((function n(){var a,s,c,i,l;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.current&&(null===(a=t.current)||void 0===a||a.abort()),r(!0),s=t.current=new AbortController,c=s.signal,n.prev=3,n.next=6,fetch("".concat("https://api.luuk.gg","/github"),{signal:c,method:"GET",headers:{"Content-Type":"application/json"}});case 6:if(i=n.sent,!c.aborted){n.next=9;break}return n.abrupt("return",{aborted:!0});case 9:return r(!1),n.next=12,i.json();case 12:if(l=n.sent,!(i.status>=300)){n.next=16;break}return e(j.set({error:"".concat(i.url,"\n\n").concat(JSON.stringify(l,null,2))})),n.abrupt("return",{error:l});case 16:return e(j.set({github:l})),n.abrupt("return",{response:l});case 20:return n.prev=20,n.t0=n.catch(3),r(!1),n.abrupt("return",{error:n.t0});case 24:case"end":return n.stop()}}),n,null,[[3,20]])}))),[e])}};var _=function(){var e=Object(r.g)(),t=Object(r.h)();return{setQuery:function(n){var a=new URLSearchParams(t.search),s={};a.forEach((function(e,t){s[t]=e})),Object.keys(n).forEach((function(e){n[e]?s[e]="".concat(n[e]):delete s[e]})),e.push({pathname:e.location.pathname,search:new URLSearchParams(s).toString()})},query:Object(a.useMemo)((function(){var e=new URLSearchParams(t.search),n={};return e.forEach((function(e,t){n[t]=e})),n}),[t.search])}},W=(n(173),[{title:"Bayes E-Sport Solutions",position:{lat:52.5101722600148,lng:13.401322741873111},content:'<div class="content">\n      <h4>Bayes E-Sports Solutions</h4>\n      <h5>Lead Typescript Developer</h5>\n      <div class="sub"><span>Berlin</span> January 2020 - Current</div>\n      <p>I lead the development of applications that manage and visualise esports-related data.</p>\n      <div><b>Typescript</b> <b>React</b> <b>SCSS</b> <b>HTML</b></div>\n    </div>'},{title:"Fearless Apps",position:{lat:51.924440486528425,lng:4.477718813659339},content:'<div class="content">\n      <h4>Fearless Apps</h4>\n      <h5>Typescript Developer and Co-Owner</h5>\n      <div class="sub"><span>Rotterdam</span> July 2017 - Current</div>\n      <p>My brother and I build high performance, data-rich applications by using cutting edge web technologies.</p>\n      <div><b>Javascript</b> <b>React</b> <b>React Native</b> <b>NodeJS</b> <b>MongoDB</b> <b>SCSS</b> <b>HTML</b></div>\n    </div>'},{title:"SkillsTown",position:{lat:51.44449613801224,lng:5.474178762822659},content:'<div class="content">\n      <h4>SkillsTown</h4>\n      <h5>Web Application Developer</h5>\n      <div class="sub"><span>Eindhoven</span> May 2019 - December 2019</div>\n      <p>I created software and provided support for all SkillsTown IT services. I was the lead developer in four major projects: Video Feedback Pro, Essential Editor, Skin Editor and Request for Change.</p>\n      <div><b>Javascript</b> <b>Svelte</b> <b>PHP</b> <b>SQL</b> <b>NoSQL</b> <b>SCSS</b> <b>HTML</b></div>\n    </div>'},{title:"De Nationale Hypotheekbond",position:{lat:52.324694976902215,lng:4.953558104788068},content:'<div class="content">\n      <h4>De Nationale Hypotheekbond</h4>\n      <h5>Web Application Developer</h5>\n      <div class="sub"><span>Amsterdam</span> August 2018 - March 2019</div>\n      <p>I set up a new React-based application stack and implemented it in six calculation tools used by both customers and professionals.</p>\n      <div><b>Javascript</b> <b>React</b> <b>SCSS</b> <b>HTML</b></div>\n    </div>'},{title:"Software Skills",position:{lat:57.70624580247781,lng:11.973183906521754},content:'<div class="content">\n      <h4>Software Skills</h4>\n      <h5>Web Application Developer</h5>\n      <div class="sub"><span>Gothenburg</span> September 2015 - July 2017</div>\n      <p>I maintained and improved multiple modern web applications that provide services to customers and test candidates. I did full stack development on all applications the company owns and runs.</p>\n      <div><b>Javascript</b> <b>AngularJS</b> <b>NodeJS</b> <b>MongoDB</b> <b>MySQL</b> <b>SCSS</b> <b>HTML</b></div>\n    </div>'},{title:"Bullingdon Research Limited",position:{lat:51.53937117655123,lng:-.1497240397359964},content:'<div class="content">\n      <h4>Bullingdon Research Limited</h4>\n      <h5>Front-End Developer</h5>\n      <div class="sub"><span>London</span> April 2012 - September 2012</div>\n      <p>Bullingdon Research created a data-visualisation app for finance experts which consists of 27 pages, 9 page types. It uses multiple HTML5 features and an incredible design.</p>\n      <div><b>Javascript</b> <b>BackboneJS</b> <b>NodeJS</b> <b>SCSS</b> <b>HTML</b></div>\n    </div>'},{title:"Dutch Didit",position:{lat:52.27894337089385,lng:5.164929035341137},content:'<div class="content">\n      <h4>Dutch Didit</h4>\n      <h5>Front-End Developer</h5>\n      <div class="sub"><span>Bussum</span> July 2011 - April 2012</div>\n      <p>Dutch Didit created a predication game, with leader boards, monthly prizes, score calculations, questions and answers, account system and it supports multiple languages. This app was later sold to a leading Dutch news paper.</p>\n      <div><b>Javascript</b> <b>CSS</b> <b>HTML</b></div>\n    </div>'},{title:"Strait Solutions",position:{lat:51.90343336211668,lng:4.349339392447792},content:'<div class="content">\n      <h4>Strait Solutions</h4>\n      <h5>Front-End Developer</h5>\n      <div class="sub"><span>Rotterdam</span> May 2010 - August 2010</div>\n      <p>Strait Solutions developed websites, designs and campaigns for customers.</p>\n      <div><b>Javascript</b> <b>CSS</b> <b>HTML</b></div>\n    </div>'},{title:"Self-Employed",position:{lat:51.82482446611012,lng:4.654893816741138},content:'<div class="content">\n      <h4>Self-Employed</h4>\n      <h5>The Boy That Builds Websites</h5>\n      <div class="sub"><span>Zwijndrecht</span> May 2007 - November 2009</div>\n      <p>I founded Lukosite in order to practise my skills on real projects.</p>\n      <div><b>Javascript</b> <b>CSS</b> <b>HTML</b></div>\n    </div>'}]),B=function(){var e=Object(a.useRef)(null),t=Object(a.useCallback)((function(){var t=window.google.maps,n=new t.Map(e.current,{zoom:5,center:{lat:54.5,lng:7}}),a=new t.InfoWindow({content:"",maxWidth:400});W.forEach((function(e,s){var c=new t.Marker({position:e.position,title:e.title,map:n});0===s&&(a.setContent(e.content),a.open(n,c)),c.addListener("click",(function(){a.close(),a.setContent(e.content),a.open(n,c)}))}))}),[]);return Object(a.useLayoutEffect)((function(){var n;e.current||(e.current=document.querySelector(".GoogleMap-container"),e.current||(e.current=document.createElement("div"),e.current.classList.add("GoogleMap-container"),document.body.appendChild(e.current))),null===(n=e.current)||void 0===n||n.classList.remove("hide");var a=window;if(!a.initMap){a.initMap=t;var s=document.createElement("script");s.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAQryMcx3lNzb3m8qQq5Ch5eezAubR9lbY","&callback=initMap&libraries=&v=weekly"),s.async=!0,document.body.appendChild(s)}return function(){var t;null===(t=e.current)||void 0===t||t.classList.add("hide")}}),[t]),Object(O.jsx)("div",{className:"GoogleMap",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{className:"far fa-building"})," Employment History"]})})},G=function(){var e=_(),t=e.query,n=e.setQuery,s=H(),c=s.getContributions,r=s.loading,i=p((function(e){return e.github})),l=i.total,o=i.contributions,d=t.date?Object(M.a)("".concat(t.date,"-01")):new Date,b=Object(C.a)(Object(I.a)(d),{weekStartsOn:1}),j=Object(L.a)(Object(A.a)(d),{weekStartsOn:1}),u=Object(E.a)(j,b);return Object(a.useEffect)((function(){c()}),[c]),r?Object(O.jsx)("div",{className:"Career",children:Object(O.jsx)(S.a,{animation:"border"})}):Object(O.jsxs)("div",{className:"Career",children:[Object(O.jsxs)("div",{className:"calendar-heading",children:[Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{className:"fab fa-github"})," Github Activity"]}),Object(O.jsxs)("div",{className:"switch-month",children:[Object(O.jsx)("span",{onClick:function(){n({date:Object(g.a)(Object(D.a)(d,{months:1}),"yyyy-MM")})},className:"icon",children:Object(O.jsx)("i",{className:"fas fa-chevron-left"})}),Object(O.jsx)("div",{className:"center",children:Object(g.a)(d,"MMMM yyyy")}),Object(O.jsx)("span",{onClick:function(){n({date:Object(g.a)(Object(T.a)(d,{months:1}),"yyyy-MM")})},className:"icon",children:Object(O.jsx)("i",{className:"fas fa-chevron-right"})})]}),Object(O.jsxs)("span",{className:"total",children:[(new Intl.NumberFormat).format(l)," contributions since 2011"]})]}),Object(O.jsx)("div",{className:"weekdays",children:new Array(7).fill(null).map((function(e,t){return Object(O.jsx)("div",{children:Object(g.a)(new Date(2018,0,t+1),"EEEE")},t)}))}),new Array(Math.ceil(u/7)).fill(null).map((function(e,t){return Object(O.jsx)("div",{className:"week",children:new Array(7).fill(null).map((function(e,n){var a=Object(T.a)(b,{days:7*t+n}),s=Object(g.a)(a,"yyyy-MM-dd"),c=Object(g.a)(a,"MM")===Object(g.a)(d,"MM");return Object(O.jsxs)("div",{className:"day".concat(c?"":" not-current-month").concat(void 0!==o[s]?" level-".concat(Math.ceil((o[s]>15?15:o[s])/3)):""),children:[Object(O.jsx)("span",{children:Object(g.a)(a,"d")}),!!o[s]&&Object(O.jsxs)("div",{children:[o[s],Object(O.jsxs)("small",{children:["Contribution",1!==o[s]&&"s"]})]})]},n)}))},t)})),Object(O.jsx)(B,{})]})},z=function(){var e=Object(a.useRef)(null);return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)(m.a,{to:"/",className:"logo",children:"Luuk.gg"}),Object(O.jsxs)(m.a,{exact:!0,to:"/",children:[Object(O.jsx)("i",{className:"fas fa-th-large"})," Dashboard"]}),Object(O.jsxs)(m.a,{to:"/career",children:[Object(O.jsx)("i",{className:"fas fa-code"})," Career"]}),Object(O.jsxs)(m.a,{to:"/cooking",children:[Object(O.jsx)("i",{className:"fas fa-utensils"})," Cooking"]}),Object(O.jsxs)(m.a,{to:"/messenger",children:[Object(O.jsx)("i",{className:"fab fa-slack"})," Messenger"]}),Object(O.jsxs)(m.a,{to:"/meeting",children:[Object(O.jsx)("i",{className:"fas fa-video"})," Meeting"]})]}),Object(O.jsx)("main",{children:Object(O.jsxs)(r.d,{children:[Object(O.jsx)(r.b,{path:"/messenger",children:Object(O.jsx)(N,{socket:e})}),Object(O.jsx)(r.b,{path:"/career",children:Object(O.jsx)(G,{})}),Object(O.jsx)(r.b,{path:"/",children:Object(O.jsx)(v,{})}),Object(O.jsx)(r.a,{to:"/"})]})})]})},q=Object(l.a)();c.a.render(Object(O.jsx)(r.c,{history:q,children:Object(O.jsx)(i.a,{store:h,children:Object(O.jsx)(z,{})})}),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.5978244e.chunk.js.map