(()=>{var e={};e.id=343,e.ids=[343],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},6074:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d});var s=r(70260),n=r(28203),o=r(25155),a=r.n(o),i=r(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["dashborad",{children:["(auth)",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2666)),"D:\\Dagtal-Agenced\\src\\app\\dashborad\\(auth)\\register\\page.jsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,88777)),"D:\\Dagtal-Agenced\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Dagtal-Agenced\\src\\app\\dashborad\\(auth)\\register\\page.jsx"],u={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/dashborad/(auth)/register/page",pathname:"/dashborad/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},62364:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},48796:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},17831:(e,t,r)=>{Promise.resolve().then(r.bind(r,2666))},48095:(e,t,r)=>{Promise.resolve().then(r.bind(r,1990))},49930:(e,t,r)=>{Promise.resolve().then(r.bind(r,4546)),Promise.resolve().then(r.bind(r,71556)),Promise.resolve().then(r.bind(r,4034))},12978:(e,t,r)=>{Promise.resolve().then(r.bind(r,66462)),Promise.resolve().then(r.bind(r,67463)),Promise.resolve().then(r.bind(r,2918))},79334:(e,t,r)=>{"use strict";var s=r(58686);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})},1990:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(45512),n=r(58009),o=r(9600),a=r.n(o),i=r(28531),l=r.n(i),d=r(79334);let c=()=>{let[e,t]=(0,n.useState)(null),r=(0,d.useRouter)(),o=async e=>{e.preventDefault();let s=e.target[0].value,n=e.target[1].value,o=e.target[2].value;try{let e=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,email:n,password:o})});201===e.status&&r.push("/dashboard/login?success=Account has been created")}catch(e){t(e),console.log(e)}};return(0,s.jsxs)("div",{className:a().container,children:[(0,s.jsx)("h1",{className:a().title,children:"Create an Account"}),(0,s.jsx)("h2",{className:a().subtitle,children:"Please sign up to see the dashboard."}),(0,s.jsxs)("form",{onSubmit:o,className:a().form,children:[(0,s.jsx)("input",{type:"text",placeholder:"Username",required:!0,className:a().input}),(0,s.jsx)("input",{type:"text",placeholder:"Email",required:!0,className:a().input}),(0,s.jsx)("input",{type:"password",placeholder:"Password",required:!0,className:a().input}),(0,s.jsx)("button",{className:a().button,children:"Register"}),e&&"Something went wrong!"]}),(0,s.jsx)("span",{className:a().or,children:"- OR -"}),(0,s.jsx)(l(),{className:a().link,href:"/dashboard/login",children:"Login with an existing account"})]})}},66462:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var s=r(45512),n=r(90993);r(58009);let o=({children:e})=>(0,s.jsx)(n.SessionProvider,{children:e})},67463:(e,t,r)=>{"use strict";r.d(t,{default:()=>v});var s=r(45512),n=r(28531),o=r.n(n),a=r(58009),i=r(28122),l=r.n(i),d=r(96128),c=r.n(d),u=r(2918);let h=()=>{let{toggle:e,mode:t}=(0,a.useContext)(u.D);return(0,s.jsxs)("div",{className:c().container,onClick:e,children:[(0,s.jsx)("div",{className:c().icon,children:"\uD83C\uDF19"}),(0,s.jsx)("div",{className:c().icon,children:"\uD83D\uDD06"}),(0,s.jsx)("div",{className:c().ball,style:"light"===t?{left:"2px"}:{right:"2px"}})]})};var p=r(90993);let m=[{id:1,title:"Home",url:"/"},{id:2,title:"Portfolio",url:"/portfolio"},{id:3,title:"Blog",url:"/blog"},{id:4,title:"About",url:"/about"},{id:5,title:"Contact",url:"/contact"},{id:6,title:"Dashboard",url:"/dashborad"}],v=()=>{let e=(0,p.useSession)();return(0,s.jsxs)("div",{className:l().container,children:[(0,s.jsx)(o(),{href:"/",className:l().logo,children:"lamamia"}),(0,s.jsxs)("div",{className:l().links,children:[(0,s.jsx)(h,{}),m.map(e=>(0,s.jsx)(o(),{href:e.url,className:l().link,children:e.title},e.id)),"authenticated"===e.status&&(0,s.jsx)("button",{className:l().logout,onClick:p.signOut,children:"Logout"})]})]})}},2918:(e,t,r)=>{"use strict";r.d(t,{D:()=>o,ThemeProvider:()=>a});var s=r(45512),n=r(58009);let o=(0,n.createContext)(),a=({children:e})=>{let[t,r]=(0,n.useState)("dark");return(0,s.jsx)(o.Provider,{value:{toggle:()=>{r(e=>"dark"===e?"light":"dark")},mode:t},children:(0,s.jsx)("div",{className:`theme ${t}`,children:e})})}},9600:e=>{e.exports={container:"page_container__qlUk6",form:"page_form__rKia3",input:"page_input__OTKKT",button:"page_button__o5fya"}},96128:e=>{e.exports={container:"darkModeToggle_container__hh__c",icon:"darkModeToggle_icon__7ilz8",ball:"darkModeToggle_ball__PQ1tQ"}},28122:e=>{e.exports={container:"navbar_container__2tPvI",logo:"navbar_logo__xb9op",links:"navbar_links__s_ntP",logout:"navbar_logout__KF_5v"}},2666:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\app\\\\dashborad\\\\(auth)\\\\register\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\app\\dashborad\\(auth)\\register\\page.jsx","default")},88777:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>c});var s=r(62740),n=r(71556);r(61135);var o=r(75819),a=r.n(o);r(76301);let i=()=>(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:"2024 Fhad, All righis reseved"})});var l=r(4034),d=r(4546);let c={title:"Lama Dev",description:"This is the description"};function u({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:a().className,children:(0,s.jsx)(l.ThemeProvider,{children:(0,s.jsx)(d.default,{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(n.default,{}),e,(0,s.jsx)(i,{})]})})})})})}},4546:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\compoents\\\\AuthProvider\\\\AuthProvider.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\compoents\\AuthProvider\\AuthProvider.jsx","default")},71556:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\compoents\\\\navbar\\\\Navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\compoents\\navbar\\Navbar.jsx","default")},4034:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>n});var s=r(46760);(0,s.registerClientReference)(function(){throw Error("Attempted to call ThemeContext() from the server but ThemeContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\context\\ThemeContext.js","ThemeContext");let n=(0,s.registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\context\\ThemeContext.js","ThemeProvider")},70440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(88077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},61135:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,131,77],()=>r(6074));module.exports=s})();