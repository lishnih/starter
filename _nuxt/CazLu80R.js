import i from"./3TtBCpQD.js";import{l as g,d as p,u as f,r as k,p as _,e as o,f as c,M as a,F as y,Q as u,i as h}from"./AtfJofND.js";const b=()=>g("color-mode").value,B=p({__name:"ColorSelector",setup(x){const d=f(),r=k(!1);d.hook("page:loading:end",()=>r.value=!0);const e=b(),t=_().ui.icons;function m(){e.value==="dark"?e.preference="light":e.preference="dark"}return(C,v)=>{var l,s;const n=i;return o(),c("button",{onClick:m,class:"flex justify-center items-center border rounded-full w-8 h-8 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-gray-500 transition-all"},[a(r)?(o(),c(y,{key:0},[a(e).value==="light"?(o(),u(n,{key:0,"aria-label":"toggle dark mode",name:((l=a(t))==null?void 0:l.dark)??"material-symbols:dark-mode"},null,8,["name"])):(o(),u(n,{key:1,"aria-label":"toggle light mode",name:((s=a(t))==null?void 0:s.light)??"material-symbols:light-mode"},null,8,["name"]))],64)):h("",!0)])}}});export{B as _,b as u};
