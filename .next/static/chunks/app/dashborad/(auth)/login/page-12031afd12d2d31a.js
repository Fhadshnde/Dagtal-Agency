(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{2903:(e,s,t)=>{Promise.resolve().then(t.bind(t,3172))},6046:(e,s,t)=>{"use strict";var a=t(6658);t.o(a,"useRouter")&&t.d(s,{useRouter:function(){return a.useRouter}}),t.o(a,"useSearchParams")&&t.d(s,{useSearchParams:function(){return a.useSearchParams}})},3172:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var a=t(5155),r=t(2115),n=t(8133),l=t.n(n),u=t(2615),i=t(6046),o=t(8173),c=t.n(o);let d=e=>{let{url:s}=e,t=(0,u.useSession)(),n=(0,i.useRouter)(),o=(0,i.useSearchParams)(),[d,_]=(0,r.useState)(""),[g,h]=(0,r.useState)("");return((0,r.useEffect)(()=>{_(o.get("error")),h(o.get("success"))},[o]),"loading"===t.status)?(0,a.jsx)("p",{children:"Loading..."}):("authenticated"===t.status&&(null==n||n.push("/dashboard")),(0,a.jsxs)("div",{className:l().container,children:[(0,a.jsx)("h1",{className:l().title,children:g||"Welcome Back"}),(0,a.jsx)("h2",{className:l().subtitle,children:"Please sign in to see the dashboard."}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault();let s=e.target[0].value,t=e.target[1].value;(0,u.signIn)("credentials",{email:s,password:t})},className:l().form,children:[(0,a.jsx)("input",{type:"text",placeholder:"Email",required:!0,className:l().input}),(0,a.jsx)("input",{type:"password",placeholder:"Password",required:!0,className:l().input}),(0,a.jsx)("button",{className:l().button,children:"Login"}),d&&d]}),(0,a.jsx)("button",{onClick:()=>{(0,u.signIn)("google")},className:l().button+" "+l().google,children:"Login with Google"}),(0,a.jsx)("span",{className:l().or,children:"- OR -"}),(0,a.jsx)(c(),{className:l().link,href:"/dashboard/register",children:"Create new account"})]}))};function _(){return(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:(0,a.jsx)(d,{})})}},8133:e=>{e.exports={container:"page_container__d7_2f",title:"page_title__10D4Q",subtitle:"page_subtitle__tRDiu",form:"page_form__1BgmC",input:"page_input__QALcU",button:"page_button__6Vm4Z",or:"page_or__Zqz2n",link:"page_link__FLcSk",google:"page_google__p95AW"}}},e=>{var s=s=>e(e.s=s);e.O(0,[446,173,615,441,517,358],()=>s(2903)),_N_E=e.O()}]);