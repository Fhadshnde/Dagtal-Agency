(()=>{var e={};e.id=220,e.ids=[220],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},70710:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=s(70260),i=s(28203),o=s(25155),n=s.n(o),a=s(67292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);s.d(t,l);let d=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,91229)),"D:\\Dagtal-Agenced\\src\\app\\about\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,88777)),"D:\\Dagtal-Agenced\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Dagtal-Agenced\\src\\app\\about\\page.jsx"],m={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},61343:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,59607,23)),Promise.resolve().then(s.t.bind(s,71066,23))},98295:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,28531,23)),Promise.resolve().then(s.t.bind(s,41902,23))},62364:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,13219,23)),Promise.resolve().then(s.t.bind(s,34863,23)),Promise.resolve().then(s.t.bind(s,25155,23)),Promise.resolve().then(s.t.bind(s,40802,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,48530,23)),Promise.resolve().then(s.t.bind(s,88921,23))},48796:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,66959,23)),Promise.resolve().then(s.t.bind(s,33875,23)),Promise.resolve().then(s.t.bind(s,88903,23)),Promise.resolve().then(s.t.bind(s,57174,23)),Promise.resolve().then(s.t.bind(s,84178,23)),Promise.resolve().then(s.t.bind(s,87190,23)),Promise.resolve().then(s.t.bind(s,61365,23))},49930:(e,t,s)=>{Promise.resolve().then(s.bind(s,4546)),Promise.resolve().then(s.bind(s,71556)),Promise.resolve().then(s.bind(s,4034))},12978:(e,t,s)=>{Promise.resolve().then(s.bind(s,66462)),Promise.resolve().then(s.bind(s,67463)),Promise.resolve().then(s.bind(s,2918))},66462:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var r=s(45512),i=s(90993);s(58009);let o=({children:e})=>(0,r.jsx)(i.SessionProvider,{children:e})},67463:(e,t,s)=>{"use strict";s.d(t,{default:()=>v});var r=s(45512),i=s(28531),o=s.n(i),n=s(58009),a=s(28122),l=s.n(a),d=s(96128),c=s.n(d),m=s(2918);let u=()=>{let{toggle:e,mode:t}=(0,n.useContext)(m.D);return(0,r.jsxs)("div",{className:c().container,onClick:e,children:[(0,r.jsx)("div",{className:c().icon,children:"\uD83C\uDF19"}),(0,r.jsx)("div",{className:c().icon,children:"\uD83D\uDD06"}),(0,r.jsx)("div",{className:c().ball,style:"light"===t?{left:"2px"}:{right:"2px"}})]})};var p=s(90993);let h=[{id:1,title:"Home",url:"/"},{id:2,title:"Portfolio",url:"/portfolio"},{id:3,title:"Blog",url:"/blog"},{id:4,title:"About",url:"/about"},{id:5,title:"Contact",url:"/contact"},{id:6,title:"Dashboard",url:"/dashborad"}],v=()=>{let e=(0,p.useSession)();return(0,r.jsxs)("div",{className:l().container,children:[(0,r.jsx)(o(),{href:"/",className:l().logo,children:"lamamia"}),(0,r.jsxs)("div",{className:l().links,children:[(0,r.jsx)(u,{}),h.map(e=>(0,r.jsx)(o(),{href:e.url,className:l().link,children:e.title},e.id)),"authenticated"===e.status&&(0,r.jsx)("button",{className:l().logout,onClick:p.signOut,children:"Logout"})]})]})}},2918:(e,t,s)=>{"use strict";s.d(t,{D:()=>o,ThemeProvider:()=>n});var r=s(45512),i=s(58009);let o=(0,i.createContext)(),n=({children:e})=>{let[t,s]=(0,i.useState)("dark");return(0,r.jsx)(o.Provider,{value:{toggle:()=>{s(e=>"dark"===e?"light":"dark")},mode:t},children:(0,r.jsx)("div",{className:`theme ${t}`,children:e})})}},65321:e=>{e.exports={container:"page_container__eSsIu",imgContainer:"page_imgContainer__FfVYb",img:"page_img__ZI6Oh",imgText:"page_imgText__oV57V",textContainer:"page_textContainer__OWOgs",item:"page_item__sC5OY",desc:"page_desc__jYi7G"}},27650:e=>{e.exports={container:"button_container__nsMLp"}},96128:e=>{e.exports={container:"darkModeToggle_container__hh__c",icon:"darkModeToggle_icon__7ilz8",ball:"darkModeToggle_ball__PQ1tQ"}},28122:e=>{e.exports={container:"navbar_container__2tPvI",logo:"navbar_logo__xb9op",links:"navbar_links__s_ntP",logout:"navbar_logout__KF_5v"}},91229:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(62740);s(76301);var i=s(65321),o=s.n(i),n=s(35635),a=s(33012);let l=()=>(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsxs)("div",{className:o().imgContainer,children:[(0,r.jsx)(n.default,{src:"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",fill:!0,alt:"",className:o().img}),(0,r.jsxs)("div",{className:o().imgText,children:[(0,r.jsx)("h1",{className:o().imgTitle,children:"Digital Storytellers"}),(0,r.jsx)("h2",{className:o().imgDesc,children:"Handcrafting award winning digital experiences"})]})]}),(0,r.jsxs)("div",{className:o().textContainer,children:[(0,r.jsxs)("div",{className:o().item,children:[(0,r.jsx)("h1",{className:o().title,children:"Who Are We?"}),(0,r.jsxs)("p",{className:o().desc,children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae. A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet?"]})]}),(0,r.jsxs)("div",{className:o().item,children:[(0,r.jsx)("h1",{className:o().title,children:"What We Do?"}),(0,r.jsxs)("p",{className:o().desc,children:["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. - Creative Illustrations",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," - Dynamic Websites",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," - Fast and Handy",(0,r.jsx)("br",{}),(0,r.jsx)("br",{})," - Mobile Apps"]}),(0,r.jsx)(a.A,{url:"/contact",text:"Contact"})]})]})]})},88777:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m,metadata:()=>c});var r=s(62740),i=s(71556);s(61135);var o=s(75819),n=s.n(o);s(76301);let a=()=>(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:"2024 Fhad, All righis reseved"})});var l=s(4034),d=s(4546);let c={title:"Lama Dev",description:"This is the description"};function m({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:n().className,children:(0,r.jsx)(l.ThemeProvider,{children:(0,r.jsx)(d.default,{children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(i.default,{}),e,(0,r.jsx)(a,{})]})})})})})}},4546:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\compoents\\\\AuthProvider\\\\AuthProvider.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\compoents\\AuthProvider\\AuthProvider.jsx","default")},33012:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(62740);s(76301);var i=s(27650),o=s.n(i),n=s(59607),a=s.n(n);let l=({text:e,url:t})=>(0,r.jsx)(a(),{href:t,children:(0,r.jsx)("button",{className:o().container,children:e})})},71556:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\compoents\\\\navbar\\\\Navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\compoents\\navbar\\Navbar.jsx","default")},4034:(e,t,s)=>{"use strict";s.d(t,{ThemeProvider:()=>i});var r=s(46760);(0,r.registerClientReference)(function(){throw Error("Attempted to call ThemeContext() from the server but ThemeContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\context\\ThemeContext.js","ThemeContext");let i=(0,r.registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\context\\ThemeContext.js","ThemeProvider")},70440:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(88077);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},61135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,131,77,626],()=>s(70710));module.exports=r})();