import{v as w,Q as S,av as k,aw as F,d as x,u as C,D as A,O as I,ax as R,ay as P}from"./Pye1XLt_.js";const W=Object.freeze({left:0,top:0,width:16,height:16}),T=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),N=Object.freeze({...W,...T});Object.freeze({...N,body:"",hidden:!1});function B(e,n){let s=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in n)s+=" "+o+'="'+n[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+s+">"+e+"</svg>"}const E=/(-?[0-9.]*[0-9]+[0-9.]*)/g,L=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function v(e,n,s){if(n===1)return e;if(s=s||100,typeof e=="number")return Math.ceil(e*n*s)/s;if(typeof e!="string")return e;const o=e.split(E);if(o===null||!o.length)return e;const t=[];let r=o.shift(),a=L.test(r);for(;;){if(a){const c=parseFloat(r);isNaN(c)?t.push(r):t.push(Math.ceil(c*n*s)/s)}else t.push(r);if(r=o.shift(),r===void 0)return t.join("");a=!a}}function M(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function V(e){return"data:image/svg+xml,"+M(e)}function D(e){return'url("'+V(e)+'")'}function _(e){const[n,s,o,t]=e;if(o!==t){const r=Math.max(o,t);return[n-(r-o)/2,s-(r-t)/2,r,r]}return e}const G=Object.freeze({width:null,height:null}),H=Object.freeze({...G,...T});function U(e,n="defs"){let s="";const o=e.indexOf("<"+n);for(;o>=0;){const t=e.indexOf(">",o),r=e.indexOf("</"+n);if(t===-1||r===-1)break;const a=e.indexOf(">",r);if(a===-1)break;s+=e.slice(t+1,r).trim(),e=e.slice(0,o).trim()+e.slice(a+1)}return{defs:s,content:e}}function K(e,n){return e?"<defs>"+e+"</defs>"+n:n}function Q(e,n,s){const o=U(e);return K(o.defs,n+o.content+s)}const J=e=>e==="unset"||e==="undefined"||e==="none";function X(e,n){const s={...N,...e},o={...H,...n},t={left:s.left,top:s.top,width:s.width,height:s.height};let r=s.body;[s,o].forEach(g=>{const f=[],q=g.hFlip,O=g.vFlip;let h=g.rotate;q?O?h+=2:(f.push("translate("+(t.width+t.left).toString()+" "+(0-t.top).toString()+")"),f.push("scale(-1 1)"),t.top=t.left=0):O&&(f.push("translate("+(0-t.left).toString()+" "+(t.height+t.top).toString()+")"),f.push("scale(1 -1)"),t.top=t.left=0);let m;switch(h<0&&(h-=Math.floor(h/4)*4),h=h%4,h){case 1:m=t.height/2+t.top,f.unshift("rotate(90 "+m.toString()+" "+m.toString()+")");break;case 2:f.unshift("rotate(180 "+(t.width/2+t.left).toString()+" "+(t.height/2+t.top).toString()+")");break;case 3:m=t.width/2+t.left,f.unshift("rotate(-90 "+m.toString()+" "+m.toString()+")");break}h%2===1&&(t.left!==t.top&&(m=t.left,t.left=t.top,t.top=m),t.width!==t.height&&(m=t.width,t.width=t.height,t.height=m)),f.length&&(r=Q(r,'<g transform="'+f.join(" ")+'">',"</g>"))});const a=o.width,c=o.height,i=t.width,l=t.height;let u,d;a===null?(d=c===null?"1em":c==="auto"?l:c,u=v(d,i/l)):(u=a==="auto"?i:a,d=c===null?v(u,l/i):c==="auto"?l:c);const y={},z=(g,f)=>{J(f)||(y[g]=f.toString())};z("width",u),z("height",d);const $=[t.left,t.top,i,l];return y.viewBox=$.join(" "),{attributes:y,viewBox:$,body:r}}function Y(e){const n={display:"inline-block",width:"1em",height:"1em"},s=e.varName;switch(e.pseudoSelector&&(n.content="''"),e.mode){case"background":s&&(n["background-image"]="var(--"+s+")"),n["background-repeat"]="no-repeat",n["background-size"]="100% 100%";break;case"mask":n["background-color"]="currentColor",s&&(n["mask-image"]=n["-webkit-mask-image"]="var(--"+s+")"),n["mask-repeat"]=n["-webkit-mask-repeat"]="no-repeat",n["mask-size"]=n["-webkit-mask-size"]="100% 100%";break}return n}function Z(e,n){const s={},o=n.varName,t=X(e);let r=t.viewBox;r[2]!==r[3]&&(n.forceSquare?r=_(r):s.width=v("1em",r[2]/r[3]));const a=B(t.body.replace(/currentColor/g,n.color||"black"),{viewBox:`${r[0]} ${r[1]} ${r[2]} ${r[3]}`,width:`${r[2]}`,height:`${r[3]}`}),c=D(a);if(o)s["--"+o]=c;else switch(n.mode){case"background":s["background-image"]=c;break;case"mask":s["mask-image"]=s["-webkit-mask-image"]=c;break}return s}const b={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function ee(e,n="expanded"){const s=[];for(let o=0;o<e.length;o++){const{selector:t,rules:r}=e[o];let c=(t instanceof Array?t.join(n==="compressed"?",":", "):t)+b.selectorStart[n],i=!0;for(const l in r)i||(c+=";"),c+=b.rule[n].replace("{key}",l)+r[l],i=!1;c+=b.selectorEnd[n],s.push(c)}return s.join(n==="compressed"?"":`
`)}function te(e,n={}){const s=n.customise?n.customise(e.body):e.body,o=n.mode||(n.color||!s.includes("currentColor")?"background":"mask");let t=n.varName;t===void 0&&o==="mask"&&(t="svg");const r={...n,mode:o,varName:t};o==="background"&&delete r.varName;const a={...n.rules,...Y(r),...Z({...N,...e,body:s},r)},c=n.iconSelector||".icon";return ee([{selector:c,rules:a}],r.format)}async function ne(e,n){if(!e)return null;const s=k(e);if(s)return s;let o;const t=F(e).catch(()=>(console.warn(`[Icon] failed to load icon \`${e}\``),null));return n>0?await Promise.race([t,new Promise(r=>{o=setTimeout(()=>{console.warn(`[Icon] loading icon \`${e}\` timed out after ${n}ms`),r()},n)})]).finally(()=>clearTimeout(o)):await t,k(e)}function j(e){const n=w().icon,s=(n.collections||[]).sort((o,t)=>t.length-o.length);return S(()=>{var a;const o=e(),t=o.startsWith(n.cssSelectorPrefix)?o.slice(n.cssSelectorPrefix.length):o,r=((a=n.aliases)==null?void 0:a[t])||t;if(!r.includes(":")){const c=s.find(i=>r.startsWith(i+"-"));return c?c+":"+r.slice(c.length+1):r}return r})}let p;function se(e){return e.replace(/([^\w-])/g,"\\$1")}function oe(){if(p)return p;p=new Set;const e=s=>{if(s=s.replace(/^:where\((.*)\)$/,"$1").trim(),s.startsWith("."))return s},n=s=>{if(s!=null&&s.length)for(const o of s){o!=null&&o.cssRules&&n(o.cssRules);const t=o==null?void 0:o.selectorText;if(typeof t=="string"){const r=e(t);r&&p.add(r)}}};if(typeof document<"u")for(const s of document.styleSheets)try{const o=s.cssRules||s.rules;n(o)}catch{}return p}const re=x({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(e){const n=C(),s=w().icon,o=S(()=>e.name?s.cssSelectorPrefix+e.name:"");function t(c){var u,d;if(!c)return;const i=k(c);if(i)return i;const l=(d=(u=n.payload)==null?void 0:u.data)==null?void 0:d[c];if(l)return R(c,l),l}const r=S(()=>"."+se(o.value));function a(c,i=!0){let l=r.value;s.cssWherePseudo&&(l=`:where(${l})`);const u=te(c,{iconSelector:l,format:"compressed",customise:e.customize});return s.cssLayer&&i?`@layer ${s.cssLayer} { ${u} }`:u}{const c=oe();async function i(l){if(c.has(r.value)||typeof document>"u")return;const u=document.createElement("style");u.textContent=a(l);const d=document.head.querySelector('style, link[rel="stylesheet"]');d?document.head.insertBefore(u,d):document.head.appendChild(u),c.add(r.value)}A(()=>e.name,()=>{if(c.has(r.value))return;const l=t(e.name);l?i(l):ne(e.name,s.fetchTimeout).then(u=>{u&&i(u)}).catch(()=>null)},{immediate:!0})}return()=>I("span",{class:["iconify",o.value]})}}),ce=x({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},async setup(e,{slots:n}){const s=C();w().icon;const o=j(()=>e.name),t="i-"+o.value;if(o.value){const r=s.payload.data[t];r&&R(o.value,r)}return()=>I(P,{icon:o.value,ssr:!0,customise:e.customize},n)}}),ae=x({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},async setup(e,{slots:n}){const s=C(),o=w().icon,t=j(()=>e.name),r=S(()=>{var i;return((i=s.vueApp)==null?void 0:i.component(t.value))||((e.mode||o.mode)==="svg"?ce:re)}),a=S(()=>{const i=e.size||o.size;return i?{fontSize:Number.isNaN(+i)?i:i+"px"}:null}),c=e.customize||o.customize;return()=>I(r.value,{...o.attrs,name:t.value,class:o.class,style:a.value,customize:c},n)}});export{ae as default};
