(()=>{var e={};e.id=423,e.ids=[423],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},26774:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var n=r(70260),a=r(28203),i=r(25155),o=r.n(i),s=r(67292),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u=["",{children:["dashborad",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,31746)),"D:\\Dagtal-Agenced\\src\\app\\dashborad\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,88777)),"D:\\Dagtal-Agenced\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Dagtal-Agenced\\src\\app\\dashborad\\page.jsx"],c={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/dashborad/page",pathname:"/dashborad",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},62364:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,13219,23)),Promise.resolve().then(r.t.bind(r,34863,23)),Promise.resolve().then(r.t.bind(r,25155,23)),Promise.resolve().then(r.t.bind(r,40802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,48530,23)),Promise.resolve().then(r.t.bind(r,88921,23))},48796:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,66959,23)),Promise.resolve().then(r.t.bind(r,33875,23)),Promise.resolve().then(r.t.bind(r,88903,23)),Promise.resolve().then(r.t.bind(r,57174,23)),Promise.resolve().then(r.t.bind(r,84178,23)),Promise.resolve().then(r.t.bind(r,87190,23)),Promise.resolve().then(r.t.bind(r,61365,23))},94947:(e,t,r)=>{Promise.resolve().then(r.bind(r,31746))},9019:(e,t,r)=>{Promise.resolve().then(r.bind(r,96569))},49930:(e,t,r)=>{Promise.resolve().then(r.bind(r,4546)),Promise.resolve().then(r.bind(r,71556)),Promise.resolve().then(r.bind(r,4034))},12978:(e,t,r)=>{Promise.resolve().then(r.bind(r,66462)),Promise.resolve().then(r.bind(r,67463)),Promise.resolve().then(r.bind(r,2918))},79334:(e,t,r)=>{"use strict";var n=r(58686);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},10681:(e,t,r)=>{"use strict";var n=r(58009),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,o=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!a(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),a=n[0].inst,d=n[1];return s(function(){a.value=r,a.getSnapshot=t,u(a)&&d({inst:a})},[e,r,t]),o(function(){return u(a)&&d({inst:a}),e(function(){u(a)&&d({inst:a})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d},94924:(e,t,r)=>{"use strict";e.exports=r(10681)},96569:(e,t,r)=>{"use strict";let n;r.r(t),r.d(t,{default:()=>ei});var a=r(45512),i=r(58009),o=r(44360),s=r.n(o),l=r(94924),u=Object.prototype.hasOwnProperty;let d=new WeakMap,c=()=>{},f=c(),p=Object,h=e=>e===f,m=e=>"function"==typeof e,g=(e,t)=>({...e,...t}),v=e=>m(e.then),b={},x={},_="undefined"!=typeof document,y=()=>!1,E=(e,t)=>{let r=d.get(e);return[()=>!h(t)&&e.get(t)||b,n=>{if(!h(t)){let a=e.get(t);t in x||(x[t]=a),r[5](t,g(a,n),a||b)}},r[6],()=>!h(t)&&t in x?x[t]:!h(t)&&e.get(t)||b]},P=!0,[j,C]=[c,c],T={initFocus:e=>(_&&document.addEventListener("visibilitychange",e),j("focus",e),()=>{_&&document.removeEventListener("visibilitychange",e),C("focus",e)}),initReconnect:e=>{let t=()=>{P=!0,e()},r=()=>{P=!1};return j("online",t),j("offline",r),()=>{C("online",t),C("offline",r)}}},w=!i.useId,D=e=>y()?window.requestAnimationFrame(e):setTimeout(e,1),R=(0,i.useEffect),k="undefined"!=typeof navigator&&navigator.connection,A=false,N=new WeakMap,S=(e,t)=>p.prototype.toString.call(e)===`[object ${t}]`,O=0,V=e=>{let t,r;let n=typeof e,a=S(e,"Date"),i=S(e,"RegExp"),o=S(e,"Object");if(p(e)!==e||a||i)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=N.get(e))return t;if(t=++O+"~",N.set(e,t),Array.isArray(e)){for(r=0,t="@";r<e.length;r++)t+=V(e[r])+",";N.set(e,t)}if(o){t="#";let n=p.keys(e).sort();for(;!h(r=n.pop());)h(e[r])||(t+=r+":"+V(e[r])+",");N.set(e,t)}}return t},L=e=>{if(m(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?V(e):"",t]},I=0,M=()=>++I;var q={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function F(...e){let[t,r,n,a]=e,i=g({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{}),o=i.populateCache,s=i.rollbackOnError,l=i.optimisticData,u=e=>"function"==typeof s?s(e):!1!==s,c=i.throwOnError;if(m(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(p))}return p(r);async function p(r){let a;let[s]=L(r);if(!s)return;let[p,g]=E(t,s),[b,x,_,y]=d.get(t),P=()=>{let e=b[s];return(m(i.revalidate)?i.revalidate(p().data,r):!1!==i.revalidate)&&(delete _[s],delete y[s],e&&e[0])?e[0](2).then(()=>p().data):p().data};if(e.length<3)return P();let j=n,C=M();x[s]=[C,0];let T=!h(l),w=p(),D=w.data,R=w._c,k=h(R)?D:R;if(T&&g({data:l=m(l)?l(k,D):l,_c:k}),m(j))try{j=j(k)}catch(e){a=e}if(j&&v(j)){if(j=await j.catch(e=>{a=e}),C!==x[s][0]){if(a)throw a;return j}a&&T&&u(a)&&(o=!0,g({data:k,_c:f}))}if(o&&!a&&(m(o)?g({data:o(j,k),error:f,_c:f}):g({data:j,error:f,_c:f})),x[s][1]=M(),Promise.resolve(P()).then(()=>{g({_c:f})}),a){if(c)throw a;return}return j}}let $=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},G=(e,t)=>{if(!d.has(e)){let r=g(T,t),n={},a=F.bind(f,e),i=c,o={},s=(e,t)=>{let r=o[e]||[];return o[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},l=(t,r,n)=>{e.set(t,r);let a=o[t];if(a)for(let e of a)e(r,n)},u=()=>{!d.has(e)&&d.set(e,[n,{},{},{},a,l,s])};return u(),[e,a,u,i]}return[e,d.get(e)[4]]},[U,z]=G(new Map),K=g({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:(e,t,r,n,a)=>{let i=r.errorRetryCount,o=a.retryCount,s=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;(h(i)||!(o>i))&&setTimeout(n,s,a)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:function e(t,r){var n,a;if(t===r)return!0;if(t&&r&&(n=t.constructor)===r.constructor){if(n===Date)return t.getTime()===r.getTime();if(n===RegExp)return t.toString()===r.toString();if(n===Array){if((a=t.length)===r.length)for(;a--&&e(t[a],r[a]););return -1===a}if(!n||"object"==typeof t){for(n in a=0,t)if(u.call(t,n)&&++a&&!u.call(r,n)||!(n in r)||!e(t[n],r[n]))return!1;return Object.keys(r).length===a}}return t!=t&&r!=r},isPaused:()=>!1,cache:U,mutate:z,fallback:{}},{isOnline:()=>P,isVisible:()=>{let e=_&&document.visibilityState;return h(e)||"hidden"!==e}}),W=(e,t)=>{let r=g(e,t);if(t){let{use:n,fallback:a}=e,{use:i,fallback:o}=t;n&&i&&(r.use=n.concat(i)),a&&o&&(r.fallback=g(a,o))}return r},Y=(0,i.createContext)({}),J=[],Q=e=>m(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],X=()=>g(K,(0,i.useContext)(Y)),Z=J.concat(e=>(t,r,n)=>{let a=r&&((...e)=>{let[n]=L(t),[,,,a]=d.get(U);if(n.startsWith("$inf$"))return r(...e);let i=a[n];return h(i)?r(...e):(delete a[n],i)});return e(t,a,n)}),B=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},H=()=>{};H(),new WeakMap;let ee=i.use||(e=>{switch(e.status){case"pending":throw e;case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}}),et={dedupe:!0};p.defineProperty(e=>{let{value:t}=e,r=(0,i.useContext)(Y),n=m(t),a=(0,i.useMemo)(()=>n?t(r):t,[n,r,t]),o=(0,i.useMemo)(()=>n?a:W(r,a),[n,r,a]),s=a&&a.provider,l=(0,i.useRef)(f);s&&!l.current&&(l.current=G(s(o.cache||U),a));let u=l.current;return u&&(o.cache=u[0],o.mutate=u[1]),R(()=>{if(u)return u[2]&&u[2](),u[3]},[]),(0,i.createElement)(Y.Provider,g(e,{value:o}))},"defaultValue",{value:K});let er=(n=(e,t,r)=>{let{cache:n,compare:a,suspense:o,fallbackData:s,revalidateOnMount:u,revalidateIfStale:c,refreshInterval:p,refreshWhenHidden:b,refreshWhenOffline:x,keepPreviousData:_}=r,[y,P,j,C]=d.get(n),[T,D]=L(e),k=(0,i.useRef)(!1),A=(0,i.useRef)(!1),N=(0,i.useRef)(T),S=(0,i.useRef)(t),O=(0,i.useRef)(r),V=()=>O.current,I=()=>V().isVisible()&&V().isOnline(),[$,G,U,z]=E(n,T),K=(0,i.useRef)({}).current,W=h(s)?h(r.fallback)?f:r.fallback[T]:s,Y=(e,t)=>{for(let r in K)if("data"===r){if(!a(e[r],t[r])&&(!h(e[r])||!a(ei,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},J=(0,i.useMemo)(()=>{let e=!!T&&!!t&&(h(u)?!V().isPaused()&&!o&&!1!==c:u),r=t=>{let r=g(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=$(),a=z(),i=r(n),s=n===a?i:r(a),l=i;return[()=>{let e=r($());return Y(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>s]},[n,T]),Q=(0,l.useSyncExternalStore)((0,i.useCallback)(e=>U(T,(t,r)=>{Y(r,t)||e()}),[n,T]),J[0],J[1]),X=!k.current,Z=y[T]&&y[T].length>0,H=Q.data,er=h(H)?W&&v(W)?ee(W):W:H,en=Q.error,ea=(0,i.useRef)(er),ei=_?h(H)?ea.current:H:er,eo=(!Z||!!h(en))&&(X&&!h(u)?u:!V().isPaused()&&(o?!h(er)&&c:h(er)||c)),es=!!(T&&t&&X&&eo),el=h(Q.isValidating)?es:Q.isValidating,eu=h(Q.isLoading)?es:Q.isLoading,ed=(0,i.useCallback)(async e=>{let t,n;let i=S.current;if(!T||!i||A.current||V().isPaused())return!1;let o=!0,s=e||{},l=!j[T]||!s.dedupe,u=()=>w?!A.current&&T===N.current&&k.current:T===N.current,d={isValidating:!1,isLoading:!1},c=()=>{G(d)},p=()=>{let e=j[T];e&&e[1]===n&&delete j[T]},g={isValidating:!0};h($().data)&&(g.isLoading=!0);try{if(l&&(G(g),r.loadingTimeout&&h($().data)&&setTimeout(()=>{o&&u()&&V().onLoadingSlow(T,r)},r.loadingTimeout),j[T]=[i(D),M()]),[t,n]=j[T],t=await t,l&&setTimeout(p,r.dedupingInterval),!j[T]||j[T][1]!==n)return l&&u()&&V().onDiscarded(T),!1;d.error=f;let e=P[T];if(!h(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return c(),l&&u()&&V().onDiscarded(T),!1;let s=$().data;d.data=a(s,t)?s:t,l&&u()&&V().onSuccess(t,T,r)}catch(r){p();let e=V(),{shouldRetryOnError:t}=e;!e.isPaused()&&(d.error=r,l&&u()&&(e.onError(r,T,e),(!0===t||m(t)&&t(r))&&(!V().revalidateOnFocus||!V().revalidateOnReconnect||I())&&e.onErrorRetry(r,T,e,e=>{let t=y[T];t&&t[0]&&t[0](q.ERROR_REVALIDATE_EVENT,e)},{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return o=!1,c(),!0},[T,n]),ec=(0,i.useCallback)((...e)=>F(n,N.current,...e),[]);if(R(()=>{S.current=t,O.current=r,h(H)||(ea.current=H)}),R(()=>{if(!T)return;let e=ed.bind(f,et),t=0,r=B(T,y,(r,n={})=>{if(r==q.FOCUS_EVENT){let r=Date.now();V().revalidateOnFocus&&r>t&&I()&&(t=r+V().focusThrottleInterval,e())}else if(r==q.RECONNECT_EVENT)V().revalidateOnReconnect&&I()&&e();else if(r==q.MUTATE_EVENT)return ed();else if(r==q.ERROR_REVALIDATE_EVENT)return ed(n)});return A.current=!1,N.current=T,k.current=!0,G({_k:D}),eo&&(h(er),e()),()=>{A.current=!0,r()}},[T]),R(()=>{let e;function t(){let t=m(p)?p($().data):p;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!$().error&&(b||V().isVisible())&&(x||V().isOnline())?ed(et).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[p,b,x,T]),(0,i.useDebugValue)(ei),o&&h(er)&&T){if(!w)throw Error("Fallback data is required when using Suspense in SSR.");S.current=t,O.current=r,A.current=!1;let e=C[T];if(h(e)||ee(ec(e)),h(en)){let e=ed(et);h(ei)||(e.status="fulfilled",e.value=!0),ee(e)}else throw en}return{mutate:ec,get data(){return K.data=!0,ei},get error(){return K.error=!0,en},get isValidating(){return K.isValidating=!0,el},get isLoading(){return K.isLoading=!0,eu}}},function(...e){let t=X(),[r,a,i]=Q(e),o=W(t,i),s=n,{use:l}=o,u=(l||[]).concat(Z);for(let e=u.length;e--;)s=u[e](s);return s(r,a||o.fetcher||null,o)});var en=r(90993),ea=r(79334);let ei=()=>{let{data:e,status:t}=(0,en.useSession)(),r=(0,ea.useRouter)(),{data:n,mutate:o,error:l,isLoading:u}=er("authenticated"===t?`/api/posts?username=${e?.user?.name}`:null,(...e)=>fetch(...e).then(e=>e.json()));(0,i.useEffect)(()=>{"unauthenticated"===t&&r.push("/dashboard/login")},[t,r]);let d=async t=>{t.preventDefault();let r=t.target[0].value,n=t.target[1].value,a=t.target[2].value;try{await fetch("/api/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r,desc:n,content:a,username:e.user.name})}),o(),t.target.reset()}catch(e){console.log(e)}},c=async e=>{try{await fetch(`/api/posts/${e}`,{method:"DELETE"}),o()}catch(e){console.log(e)}};return"loading"===t?(0,a.jsx)("p",{children:"Loading..."}):"authenticated"===t?(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsx)("div",{className:s().posts,children:u?"loading":n?.map(e=>a.jsxs("div",{className:s().post,children:[a.jsx("h2",{className:s().postTitle,children:e.title}),a.jsx("p",{children:e.desc}),a.jsx("span",{className:s().delete,onClick:()=>c(e._id),children:"X"})]},e._id))}),(0,a.jsxs)("form",{className:s().new,onSubmit:d,children:[(0,a.jsx)("h1",{children:"Add New Post"}),(0,a.jsx)("input",{type:"text",placeholder:"Title",className:s().input}),(0,a.jsx)("input",{type:"text",placeholder:"Desc",className:s().input}),(0,a.jsx)("textarea",{placeholder:"Content",className:s().textArea,cols:"30",rows:"10"}),(0,a.jsx)("button",{className:s().button,children:"Send"})]})]}):null}},66462:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var n=r(45512),a=r(90993);r(58009);let i=({children:e})=>(0,n.jsx)(a.SessionProvider,{children:e})},67463:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var n=r(45512),a=r(28531),i=r.n(a),o=r(58009),s=r(28122),l=r.n(s),u=r(96128),d=r.n(u),c=r(2918);let f=()=>{let{toggle:e,mode:t}=(0,o.useContext)(c.D);return(0,n.jsxs)("div",{className:d().container,onClick:e,children:[(0,n.jsx)("div",{className:d().icon,children:"\uD83C\uDF19"}),(0,n.jsx)("div",{className:d().icon,children:"\uD83D\uDD06"}),(0,n.jsx)("div",{className:d().ball,style:"light"===t?{left:"2px"}:{right:"2px"}})]})};var p=r(90993);let h=[{id:1,title:"Home",url:"/"},{id:2,title:"Portfolio",url:"/portfolio"},{id:3,title:"Blog",url:"/blog"},{id:4,title:"About",url:"/about"},{id:5,title:"Contact",url:"/contact"},{id:6,title:"Dashboard",url:"/dashborad"}],m=()=>{let e=(0,p.useSession)();return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)(i(),{href:"/",className:l().logo,children:"lamamia"}),(0,n.jsxs)("div",{className:l().links,children:[(0,n.jsx)(f,{}),h.map(e=>(0,n.jsx)(i(),{href:e.url,className:l().link,children:e.title},e.id)),"authenticated"===e.status&&(0,n.jsx)("button",{className:l().logout,onClick:p.signOut,children:"Logout"})]})]})}},2918:(e,t,r)=>{"use strict";r.d(t,{D:()=>i,ThemeProvider:()=>o});var n=r(45512),a=r(58009);let i=(0,a.createContext)(),o=({children:e})=>{let[t,r]=(0,a.useState)("dark");return(0,n.jsx)(i.Provider,{value:{toggle:()=>{r(e=>"dark"===e?"light":"dark")},mode:t},children:(0,n.jsx)("div",{className:`theme ${t}`,children:e})})}},44360:e=>{e.exports={container:"page_container__nfYnh",posts:"page_posts__yHGtg",post:"page_post__ZYiVK",imgContainer:"page_imgContainer__nuqY9",img:"page_img__t0Z5T",delete:"page_delete__qtQ5Y",new:"page_new__wZniV",input:"page_input__IuUtw",textArea:"page_textArea__e3K81",button:"page_button__XiBV5"}},96128:e=>{e.exports={container:"darkModeToggle_container__hh__c",icon:"darkModeToggle_icon__7ilz8",ball:"darkModeToggle_ball__PQ1tQ"}},28122:e=>{e.exports={container:"navbar_container__2tPvI",logo:"navbar_logo__xb9op",links:"navbar_links__s_ntP",logout:"navbar_logout__KF_5v"}},31746:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\app\\\\dashborad\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\app\\dashborad\\page.jsx","default")},88777:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var n=r(62740),a=r(71556);r(61135);var i=r(75819),o=r.n(i);r(76301);let s=()=>(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:"2024 Fhad, All righis reseved"})});var l=r(4034),u=r(4546);let d={title:"Lama Dev",description:"This is the description"};function c({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:o().className,children:(0,n.jsx)(l.ThemeProvider,{children:(0,n.jsx)(u.default,{children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(a.default,{}),e,(0,n.jsx)(s,{})]})})})})})}},4546:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\compoents\\\\AuthProvider\\\\AuthProvider.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\compoents\\AuthProvider\\AuthProvider.jsx","default")},71556:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Dagtal-Agenced\\\\src\\\\compoents\\\\navbar\\\\Navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\compoents\\navbar\\Navbar.jsx","default")},4034:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>a});var n=r(46760);(0,n.registerClientReference)(function(){throw Error("Attempted to call ThemeContext() from the server but ThemeContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\context\\ThemeContext.js","ThemeContext");let a=(0,n.registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Dagtal-Agenced\\src\\context\\ThemeContext.js","ThemeProvider")},70440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(88077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},61135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,131,77],()=>r(26774));module.exports=n})();