import{_ as X}from"./DlAUqK2U.js";import{c as S,e as D,f as b,d as A,v as J,Q as $,l as Z,aA as Ee,aB as Ae,J as g,t as R,h as P,a8 as M,g as pe,i as w,aC as Pe,aD as H,K as N,B as j,r as x,o as V,aE as Te,O as Oe,F as Me,aF as Y,b as ee,az as Ne,w as I,T as Fe,n as z,L as Re,m as Ce,a9 as fe}from"./Pye1XLt_.js";import ve from"./xxjGkkLl.js";import{_ as je}from"./DYxHDhjt.js";const Be={},Le={viewBox:"0 0 2 2",class:"mx-2 inline h-0.5 w-0.5 fill-current","aria-hidden":"true"};function He(e,t){return S(),D("svg",Le,t[0]||(t[0]=[b("circle",{cx:"1",cy:"1",r:"1"},null,-1)]))}const Ue=X(Be,[["render",He]]),Ke={class:"flex items-center justify-center gap-x-6 bg-primary-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"},Ve={class:"text-sm leading-6 text-white"},Ye=["href"],We={key:0,class:"font-semibold hidden sm:block"},qe={class:"hidden sm:flex flex-1 justify-end items-center"},ze=A({__name:"Banner",setup(e){const t=J().header.banner,r=$(()=>{const l=t==null?void 0:t.link;return l||"#"}),a=Z("showBanner",()=>!0);function o(){a.value=!1}return(l,n)=>{var p,v,f,s;const u=Ue,i=ve;return Ee((S(),D("div",Ke,[b("p",Ve,[b("a",{href:g(r),target:"_blank",class:"inline-flex items-center gap-1"},[(p=g(t))!=null&&p.brandText?(S(),D("strong",We,R(g(t).brandText),1)):P("",!0),(v=g(t))!=null&&v.brandText?(S(),M(u,{key:1,class:"hidden sm:block"})):P("",!0),pe(" "+R((f=g(t))==null?void 0:f.text)+" ",1),w(i,{class:"hidden sm:block w-5 h-5",name:"tabler:arrow-right"})],8,Ye)]),b("div",qe,[b("button",{onClick:o,type:"button",class:"w-5 h-5"},[n[0]||(n[0]=b("span",{class:"sr-only"},"Dismiss",-1)),w(i,{name:"tabler:x",class:"h-5 w-5 text-white","aria-hidden":"true"})])])],512)),[[Ae,g(a)&&((s=g(t))==null?void 0:s.show)]])}}});var oe;let Ge=Symbol("headlessui.useid"),Qe=0;const B=(oe=Pe)!=null?oe:function(){return H(Ge,()=>`${++Qe}`)()};function h(e){var t;if(e==null||e.value==null)return null;let r=(t=e.value.$el)!=null?t:e.value;return r instanceof Node?r:null}function C(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,C),a}var Xe=Object.defineProperty,Je=(e,t,r)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,se=(e,t,r)=>(Je(e,typeof t!="symbol"?t+"":t,r),r);let Ze=class{constructor(){se(this,"current",this.detect()),se(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},te=new Ze;function ne(e){if(te.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let G=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Q=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Q||{}),et=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(et||{}),tt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(tt||{});function me(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(G)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var re=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(re||{});function ae(e,t=0){var r;return e===((r=ne(e))==null?void 0:r.body)?!1:C(t,{0(){return e.matches(G)},1(){let a=e;for(;a!==null;){if(a.matches(G))return!0;a=a.parentElement}return!1}})}function ge(e){let t=ne(e);N(()=>{t&&!ae(t.activeElement,0)&&rt(e)})}var nt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(nt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function rt(e){e==null||e.focus({preventScroll:!0})}let at=["textarea","input"].join(",");function lt(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,at))!=null?r:!1}function be(e,t=r=>r){return e.slice().sort((r,a)=>{let o=t(r),l=t(a);if(o===null||l===null)return 0;let n=o.compareDocumentPosition(l);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ot(e,t){return st(me(),t,{relativeTo:e})}function st(e,t,{sorted:r=!0,relativeTo:a=null,skipElements:o=[]}={}){var l;let n=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,u=Array.isArray(e)?r?be(e):e:me(e);o.length>0&&u.length>1&&(u=u.filter(c=>!o.includes(c))),a=a??n.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(a))-1;if(t&4)return Math.max(0,u.indexOf(a))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=t&32?{preventScroll:!0}:{},f=0,s=u.length,d;do{if(f>=s||f+s<=0)return 0;let c=p+f;if(t&16)c=(c+s)%s;else{if(c<0)return 3;if(c>=s)return 1}d=u[c],d==null||d.focus(v),f+=i}while(d!==n.activeElement);return t&6&&lt(d)&&d.select(),2}function ut(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function it(){return/Android/gi.test(window.navigator.userAgent)}function ct(){return ut()||it()}function K(e,t,r){te.isServer||j(a=>{document.addEventListener(e,t,r),a(()=>document.removeEventListener(e,t,r))})}function dt(e,t,r){te.isServer||j(a=>{window.addEventListener(e,t,r),a(()=>window.removeEventListener(e,t,r))})}function pt(e,t,r=$(()=>!0)){function a(l,n){if(!r.value||l.defaultPrevented)return;let u=n(l);if(u===null||!u.getRootNode().contains(u))return;let i=function p(v){return typeof v=="function"?p(v()):Array.isArray(v)||v instanceof Set?v:[v]}(e);for(let p of i){if(p===null)continue;let v=p instanceof HTMLElement?p:h(p);if(v!=null&&v.contains(u)||l.composed&&l.composedPath().includes(v))return}return!ae(u,re.Loose)&&u.tabIndex!==-1&&l.preventDefault(),t(l,u)}let o=x(null);K("pointerdown",l=>{var n,u;r.value&&(o.value=((u=(n=l.composedPath)==null?void 0:n.call(l))==null?void 0:u[0])||l.target)},!0),K("mousedown",l=>{var n,u;r.value&&(o.value=((u=(n=l.composedPath)==null?void 0:n.call(l))==null?void 0:u[0])||l.target)},!0),K("click",l=>{ct()||o.value&&(a(l,()=>o.value),o.value=null)},!0),K("touchend",l=>a(l,()=>l.target instanceof HTMLElement?l.target:null),!0),dt("blur",l=>a(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ue(e,t){if(e)return e;let r=t??"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function he(e,t){let r=x(ue(e.value.type,e.value.as));return V(()=>{r.value=ue(e.value.type,e.value.as)}),j(()=>{var a;r.value||h(t)&&h(t)instanceof HTMLButtonElement&&!((a=h(t))!=null&&a.hasAttribute("type"))&&(r.value="button")}),r}function ie(e){return[e.screenX,e.screenY]}function ft(){let e=x([-1,-1]);return{wasMoved(t){let r=ie(t);return e.value[0]===r[0]&&e.value[1]===r[1]?!1:(e.value=r,!0)},update(t){e.value=ie(t)}}}function vt({container:e,accept:t,walk:r,enabled:a}){j(()=>{let o=e.value;if(!o||a!==void 0&&!a.value)return;let l=ne(e);if(!l)return;let n=Object.assign(i=>t(i),{acceptNode:t}),u=l.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,n,!1);for(;u.nextNode();)r(u.currentNode)})}var L=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(L||{}),mt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(mt||{});function F({visible:e=!0,features:t=0,ourProps:r,theirProps:a,...o}){var l;let n=xe(a,r),u=Object.assign(o,{props:n});if(e||t&2&&n.static)return q(u);if(t&1){let i=(l=n.unmount)==null||l?0:1;return C(i,{0(){return null},1(){return q({...o,props:{...n,hidden:!0,style:{display:"none"}}})}})}return q(u)}function q({props:e,attrs:t,slots:r,slot:a,name:o}){var l,n;let{as:u,...i}=gt(e,["unmount","static"]),p=(l=r.default)==null?void 0:l.call(r,a),v={};if(a){let f=!1,s=[];for(let[d,c]of Object.entries(a))typeof c=="boolean"&&(f=!0),c===!0&&s.push(d);f&&(v["data-headlessui-state"]=s.join(" "))}if(u==="template"){if(p=ye(p??[]),Object.keys(i).length>0||Object.keys(t).length>0){let[f,...s]=p??[];if(!bt(f)||s.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(t)).map(m=>m.trim()).filter((m,k,_)=>_.indexOf(m)===k).sort((m,k)=>m.localeCompare(k)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let d=xe((n=f.props)!=null?n:{},i,v),c=Te(f,d,!0);for(let m in d)m.startsWith("on")&&(c.props||(c.props={}),c.props[m]=d[m]);return c}return Array.isArray(p)&&p.length===1?p[0]:p}return Oe(u,Object.assign({},i,v),{default:()=>p})}function ye(e){return e.flatMap(t=>t.type===Me?ye(t.children):[t])}function xe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let a of e)for(let o in a)o.startsWith("on")&&typeof a[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(a[o])):t[o]=a[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(a=>[a,void 0])));for(let a in r)Object.assign(t,{[a](o,...l){let n=r[a];for(let u of n){if(o instanceof Event&&o.defaultPrevented)return;u(o,...l)}}});return t}function gt(e,t=[]){let r=Object.assign({},e);for(let a of t)a in r&&delete r[a];return r}function bt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let _e=Symbol("Context");var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function we(){return H(_e,null)}function Se(e){Y(_e,e)}var y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(y||{});function ht(e){throw new Error("Unexpected object: "+e)}var E=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(E||{});function yt(e,t){let r=t.resolveItems();if(r.length<=0)return null;let a=t.resolveActiveIndex(),o=a??-1;switch(e.focus){case 0:{for(let l=0;l<r.length;++l)if(!t.resolveDisabled(r[l],l,r))return l;return a}case 1:{o===-1&&(o=r.length);for(let l=o-1;l>=0;--l)if(!t.resolveDisabled(r[l],l,r))return l;return a}case 2:{for(let l=o+1;l<r.length;++l)if(!t.resolveDisabled(r[l],l,r))return l;return a}case 3:{for(let l=r.length-1;l>=0;--l)if(!t.resolveDisabled(r[l],l,r))return l;return a}case 4:{for(let l=0;l<r.length;++l)if(t.resolveId(r[l],l,r)===e.id)return l;return a}case 5:return null;default:ht(e)}}var xt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xt||{});let ke=Symbol("DisclosureContext");function le(e){let t=H(ke,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,le),r}return t}let Ie=Symbol("DisclosurePanelContext");function _t(){return H(Ie,null)}let wt=A({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:t,attrs:r}){let a=x(e.defaultOpen?0:1),o=x(null),l=x(null),n={buttonId:x(`headlessui-disclosure-button-${B()}`),panelId:x(`headlessui-disclosure-panel-${B()}`),disclosureState:a,panel:o,button:l,toggleDisclosure(){a.value=C(a.value,{0:1,1:0})},closeDisclosure(){a.value!==1&&(a.value=1)},close(u){n.closeDisclosure();let i=u?u instanceof HTMLElement?u:u.value instanceof HTMLElement?h(u):h(n.button):h(n.button);i==null||i.focus()}};return Y(ke,n),Se($(()=>C(a.value,{0:T.Open,1:T.Closed}))),()=>{let{defaultOpen:u,...i}=e,p={open:a.value===0,close:n.close};return F({theirProps:i,ourProps:{},slot:p,slots:t,attrs:r,name:"Disclosure"})}}}),St=A({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:a}){let o=le("DisclosureButton"),l=_t(),n=$(()=>l===null?!1:l.value===o.panelId.value);V(()=>{n.value||e.id!==null&&(o.buttonId.value=e.id)}),ee(()=>{n.value||(o.buttonId.value=null)});let u=x(null);a({el:u,$el:u}),n.value||j(()=>{o.button.value=u.value});let i=he($(()=>({as:e.as,type:t.type})),u);function p(){var s;e.disabled||(n.value?(o.toggleDisclosure(),(s=h(o.button))==null||s.focus()):o.toggleDisclosure())}function v(s){var d;if(!e.disabled)if(n.value)switch(s.key){case y.Space:case y.Enter:s.preventDefault(),s.stopPropagation(),o.toggleDisclosure(),(d=h(o.button))==null||d.focus();break}else switch(s.key){case y.Space:case y.Enter:s.preventDefault(),s.stopPropagation(),o.toggleDisclosure();break}}function f(s){switch(s.key){case y.Space:s.preventDefault();break}}return()=>{var s;let d={open:o.disclosureState.value===0},{id:c,...m}=e,k=n.value?{ref:u,type:i.value,onClick:p,onKeydown:v}:{id:(s=o.buttonId.value)!=null?s:c,ref:u,type:i.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||h(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:p,onKeydown:v,onKeyup:f};return F({ourProps:k,theirProps:m,slot:d,attrs:t,slots:r,name:"DisclosureButton"})}}}),kt=A({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:a}){let o=le("DisclosurePanel");V(()=>{e.id!==null&&(o.panelId.value=e.id)}),ee(()=>{o.panelId.value=null}),a({el:o.panel,$el:o.panel}),Y(Ie,o.panelId);let l=we(),n=$(()=>l!==null?(l.value&T.Open)===T.Open:o.disclosureState.value===0);return()=>{var u;let i={open:o.disclosureState.value===0,close:o.close},{id:p,...v}=e,f={id:(u=o.panelId.value)!=null?u:p,ref:o.panel};return F({ourProps:f,theirProps:v,slot:i,attrs:t,slots:r,features:L.RenderStrategy|L.Static,visible:n.value,name:"DisclosurePanel"})}}}),ce=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function de(e){var t,r;let a=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return a;let l=!1;for(let u of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))u.remove(),l=!0;let n=l?(r=o.innerText)!=null?r:"":a;return ce.test(n)&&(n=n.replace(ce,"")),n}function It(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let a=r.split(" ").map(o=>{let l=document.getElementById(o);if(l){let n=l.getAttribute("aria-label");return typeof n=="string"?n.trim():de(l).trim()}return null}).filter(Boolean);if(a.length>0)return a.join(", ")}return de(e).trim()}function $t(e){let t=x(""),r=x("");return()=>{let a=h(e);if(!a)return"";let o=a.innerText;if(t.value===o)return r.value;let l=It(a).trim().toLowerCase();return t.value=o,r.value=l,l}}var Dt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Dt||{}),Et=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Et||{});function At(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let $e=Symbol("MenuContext");function W(e){let t=H($e,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,W),r}return t}let Pt=A({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let a=x(1),o=x(null),l=x(null),n=x([]),u=x(""),i=x(null),p=x(1);function v(s=d=>d){let d=i.value!==null?n.value[i.value]:null,c=be(s(n.value.slice()),k=>h(k.dataRef.domRef)),m=d?c.indexOf(d):null;return m===-1&&(m=null),{items:c,activeItemIndex:m}}let f={menuState:a,buttonRef:o,itemsRef:l,items:n,searchQuery:u,activeItemIndex:i,activationTrigger:p,closeMenu:()=>{a.value=1,i.value=null},openMenu:()=>a.value=0,goToItem(s,d,c){let m=v(),k=yt(s===E.Specific?{focus:E.Specific,id:d}:{focus:s},{resolveItems:()=>m.items,resolveActiveIndex:()=>m.activeItemIndex,resolveId:_=>_.id,resolveDisabled:_=>_.dataRef.disabled});u.value="",i.value=k,p.value=c??1,n.value=m.items},search(s){let d=u.value!==""?0:1;u.value+=s.toLowerCase();let c=(i.value!==null?n.value.slice(i.value+d).concat(n.value.slice(0,i.value+d)):n.value).find(k=>k.dataRef.textValue.startsWith(u.value)&&!k.dataRef.disabled),m=c?n.value.indexOf(c):-1;m===-1||m===i.value||(i.value=m,p.value=1)},clearSearch(){u.value=""},registerItem(s,d){let c=v(m=>[...m,{id:s,dataRef:d}]);n.value=c.items,i.value=c.activeItemIndex,p.value=1},unregisterItem(s){let d=v(c=>{let m=c.findIndex(k=>k.id===s);return m!==-1&&c.splice(m,1),c});n.value=d.items,i.value=d.activeItemIndex,p.value=1}};return pt([o,l],(s,d)=>{var c;f.closeMenu(),ae(d,re.Loose)||(s.preventDefault(),(c=h(o))==null||c.focus())},$(()=>a.value===0)),Y($e,f),Se($(()=>C(a.value,{0:T.Open,1:T.Closed}))),()=>{let s={open:a.value===0,close:f.closeMenu};return F({ourProps:{},theirProps:e,slot:s,slots:t,attrs:r,name:"Menu"})}}}),Tt=A({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:a}){var o;let l=(o=e.id)!=null?o:`headlessui-menu-button-${B()}`,n=W("MenuButton");a({el:n.buttonRef,$el:n.buttonRef});function u(f){switch(f.key){case y.Space:case y.Enter:case y.ArrowDown:f.preventDefault(),f.stopPropagation(),n.openMenu(),N(()=>{var s;(s=h(n.itemsRef))==null||s.focus({preventScroll:!0}),n.goToItem(E.First)});break;case y.ArrowUp:f.preventDefault(),f.stopPropagation(),n.openMenu(),N(()=>{var s;(s=h(n.itemsRef))==null||s.focus({preventScroll:!0}),n.goToItem(E.Last)});break}}function i(f){switch(f.key){case y.Space:f.preventDefault();break}}function p(f){e.disabled||(n.menuState.value===0?(n.closeMenu(),N(()=>{var s;return(s=h(n.buttonRef))==null?void 0:s.focus({preventScroll:!0})})):(f.preventDefault(),n.openMenu(),At(()=>{var s;return(s=h(n.itemsRef))==null?void 0:s.focus({preventScroll:!0})})))}let v=he($(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var f;let s={open:n.menuState.value===0},{...d}=e,c={ref:n.buttonRef,id:l,type:v.value,"aria-haspopup":"menu","aria-controls":(f=h(n.itemsRef))==null?void 0:f.id,"aria-expanded":n.menuState.value===0,onKeydown:u,onKeyup:i,onClick:p};return F({ourProps:c,theirProps:d,slot:s,attrs:t,slots:r,name:"MenuButton"})}}}),Ot=A({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:a}){var o;let l=(o=e.id)!=null?o:`headlessui-menu-items-${B()}`,n=W("MenuItems"),u=x(null);a({el:n.itemsRef,$el:n.itemsRef}),vt({container:$(()=>h(n.itemsRef)),enabled:$(()=>n.menuState.value===0),accept(s){return s.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}});function i(s){var d;switch(u.value&&clearTimeout(u.value),s.key){case y.Space:if(n.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),n.search(s.key);case y.Enter:if(s.preventDefault(),s.stopPropagation(),n.activeItemIndex.value!==null){let c=n.items.value[n.activeItemIndex.value];(d=h(c.dataRef.domRef))==null||d.click()}n.closeMenu(),ge(h(n.buttonRef));break;case y.ArrowDown:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.Next);case y.ArrowUp:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.Previous);case y.Home:case y.PageUp:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.First);case y.End:case y.PageDown:return s.preventDefault(),s.stopPropagation(),n.goToItem(E.Last);case y.Escape:s.preventDefault(),s.stopPropagation(),n.closeMenu(),N(()=>{var c;return(c=h(n.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case y.Tab:s.preventDefault(),s.stopPropagation(),n.closeMenu(),N(()=>ot(h(n.buttonRef),s.shiftKey?Q.Previous:Q.Next));break;default:s.key.length===1&&(n.search(s.key),u.value=setTimeout(()=>n.clearSearch(),350));break}}function p(s){switch(s.key){case y.Space:s.preventDefault();break}}let v=we(),f=$(()=>v!==null?(v.value&T.Open)===T.Open:n.menuState.value===0);return()=>{var s,d;let c={open:n.menuState.value===0},{...m}=e,k={"aria-activedescendant":n.activeItemIndex.value===null||(s=n.items.value[n.activeItemIndex.value])==null?void 0:s.id,"aria-labelledby":(d=h(n.buttonRef))==null?void 0:d.id,id:l,onKeydown:i,onKeyup:p,role:"menu",tabIndex:0,ref:n.itemsRef};return F({ourProps:k,theirProps:m,slot:c,attrs:t,slots:r,features:L.RenderStrategy|L.Static,visible:f.value,name:"MenuItems"})}}}),O=A({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:r,expose:a}){var o;let l=(o=e.id)!=null?o:`headlessui-menu-item-${B()}`,n=W("MenuItem"),u=x(null);a({el:u,$el:u});let i=$(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===l:!1),p=$t(u),v=$(()=>({disabled:e.disabled,get textValue(){return p()},domRef:u}));V(()=>n.registerItem(l,v)),ee(()=>n.unregisterItem(l)),j(()=>{n.menuState.value===0&&i.value&&n.activationTrigger.value!==0&&N(()=>{var _,U;return(U=(_=h(u))==null?void 0:_.scrollIntoView)==null?void 0:U.call(_,{block:"nearest"})})});function f(_){if(e.disabled)return _.preventDefault();n.closeMenu(),ge(h(n.buttonRef))}function s(){if(e.disabled)return n.goToItem(E.Nothing);n.goToItem(E.Specific,l)}let d=ft();function c(_){d.update(_)}function m(_){d.wasMoved(_)&&(e.disabled||i.value||n.goToItem(E.Specific,l,0))}function k(_){d.wasMoved(_)&&(e.disabled||i.value&&n.goToItem(E.Nothing))}return()=>{let{disabled:_,...U}=e,De={active:i.value,disabled:_,close:n.closeMenu};return F({ourProps:{id:l,ref:u,role:"menuitem",tabIndex:_===!0?void 0:-1,"aria-disabled":_===!0?!0:void 0,onClick:f,onFocus:s,onPointerenter:c,onMouseenter:c,onPointermove:m,onMousemove:m,onPointerleave:k,onMouseleave:k},theirProps:{...r,...U},slot:De,attrs:r,slots:t,name:"MenuItem"})}}});function Mt(e,t){return S(),D("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[b("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}const Nt={class:"px-1 py-1"},Ft={class:"text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"},Rt={key:0,class:"px-1 py-1"},Ct={key:1,class:"px-1 py-1"},jt={key:2,class:"px-1 py-1"},Bt={key:3,class:"px-1 py-1"},Lt={key:4,class:"px-1 py-1"},Ht=A({__name:"YandexUserName",setup(e){const t=()=>Z("YaAuthAccessToken"),r=Ne({}),a=x(0),o=$(()=>{const l=t();return l.value?a.value==2?r.value.real_name||r.value.display_name:a.value==-1&&a.value==-2?"Ошибка получения данных":(a.value==1||(a.value=1,$fetch("https://login.yandex.ru/info?format=json",{onRequest({request:n,options:u}){u.headers.set("Authorization",l.value)},onRequestError({request:n,options:u,error:i}){a.value=-1,console.error(i)},onResponse({request:n,response:u,options:i}){a.value=2,r.value=u._data},onResponseError({request:n,response:u,options:i}){a.value=-2,console.error(u)}})),"Обновление данных..."):(a.value=0,"Вы не авторизованы")});return(l,n)=>(S(),M(g(Pt),{as:"div",class:"z-30 relative inline-block text-left"},{default:I(()=>[b("div",null,[w(g(Tt),{class:"inline-flex justify-center rounded-md bg-indigo-300 px-4 py-1 hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"},{default:I(()=>[pe(R(g(o)),1),g(a)?(S(),M(g(Mt),{key:0,class:"-mr-2 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100","aria-hidden":"true"})):P("",!0)]),_:1})]),w(Fe,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:I(()=>[w(g(Ot),{class:"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none bg-white dark:bg-gray-700"},{default:I(()=>[b("div",Nt,[w(g(O),{disabled:""},{default:I(()=>[b("span",Ft," Статус: "+R(g(a)),1)]),_:1})]),g(a)==0?(S(),D("div",Rt,[w(g(O),{disabled:""},{default:I(()=>n[0]||(n[0]=[b("span",{class:"text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"}," Воспользуйтесь кнопкой быстрой авторизации ",-1)])),_:1}),w(g(O),null,{default:I(({active:u})=>[b("button",{class:z([u?"bg-violet-500 text-white":"bg-violet-100 dark:bg-violet-950 text-gray-900 dark:text-gray-100","group flex w-full items-center rounded-md px-2 py-2 text-sm"])}," или формой авторизации ",2)]),_:1})])):P("",!0),g(a)==1?(S(),D("div",Ct,[w(g(O),{disabled:""},{default:I(()=>n[1]||(n[1]=[b("span",{class:"text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"}," Авторизация... ",-1)])),_:1})])):P("",!0),g(a)==2?(S(),D("div",jt,[w(g(O),null,{default:I(({active:u})=>[b("button",{class:z([u?"bg-violet-500 text-white":"bg-violet-100 dark:bg-violet-950 text-gray-900 dark:text-gray-100","group flex w-full items-center rounded-md px-2 py-2 text-sm"])}," Сохранить ключ доступа ",2)]),_:1})])):P("",!0),g(a)==2?(S(),D("div",Bt,[w(g(O),{disabled:""},{default:I(()=>n[2]||(n[2]=[b("span",{class:"text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"}," Ключ хранится на Вашем компьютере и передаётся при обращениях к сервисам. ",-1)])),_:1}),w(g(O),{disabled:""},{default:I(()=>n[3]||(n[3]=[b("span",{class:"text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"}," На сервере ключ доступа не сохраняется. ",-1)])),_:1})])):P("",!0),g(a)<0?(S(),D("div",Lt,[w(g(O),{disabled:""},{default:I(()=>n[4]||(n[4]=[b("span",{class:"text-gray-900 dark:text-gray-100 group flex w-full items-center rounded-md px-2 py-2 text-sm"}," В процессе авторизации возникла ошибка. ",-1)])),_:1})])):P("",!0)]),_:1})]),_:1})]),_:1}))}}),Ut=["id"],Kt=A({__name:"YandexLoginButton",props:{view:{type:String,default:"button"},parentId:{type:String,default:"yandex-id-container"},buttonView:{type:String,default:"icon"},buttonTheme:{type:String,default:"light"},buttonSize:{type:String,default:"m"},buttonBorderRadius:{type:Number,default:0},buttonIcon:{type:String,default:"ya"},customBorderWidth:{type:Number,default:1}},setup(e){Re({script:[{src:"https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"}]});const t=e,r=x(!1),a=Ce();return window.YaAuthSuggest.init({client_id:a.public.yandexClientID,response_type:"token",redirect_uri:a.public.yandexClientRedirect},a.public.url,{view:t.view,parentId:t.parentId,buttonView:t.buttonView,buttonTheme:t.buttonTheme,buttonSize:t.buttonSize,buttonBorderRadius:t.buttonBorderRadius,buttonIcon:t.buttonIcon,customBorderWidth:t.customBorderWidth}).then(o=>{r.value=!0,o.handler().then(l=>{const n=Z("YaAuthAccessToken",()=>l.access_token);console.debug("YaAuthAccessTokenState",n),r.value=!1}).catch(l=>console.error("Обработка ошибки",l))}),(o,l)=>(S(),D("div",{id:e.parentId,class:z(["flex",[g(r)?"":"hidden"]])},null,10,Ut))}}),Vt={class:"flex justify-start items-center gap-2"},Yt={class:"relative flex h-12 justify-between w-screen"},Wt={class:"absolute left-0 flex items-center sm:hidden"},qt={class:"flex items-center max-sm:hidden m-2 w-screen"},zt={class:"flex items-center space-x-2 rtl:space-x-reverse"},Gt=A({__name:"Navbar",setup(e){const t=J().header;return(r,a)=>{const o=ve,l=je,n=Ht,u=Kt;return S(),M(g(wt),{as:"nav",class:"bg-white dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600"},{default:I(({open:i})=>{var p,v;return[b("div",Vt,[b("div",Yt,[b("div",Wt,[w(g(St),{class:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"},{default:I(()=>[a[0]||(a[0]=b("span",{class:"absolute -inset-0.5"},null,-1)),a[1]||(a[1]=b("span",{class:"sr-only"},"Open main menu",-1)),i?(S(),M(o,{key:1,name:"tabler:x",class:"block h-6 w-6","aria-hidden":"true"})):(S(),M(o,{key:0,name:"tabler:baseline-density-medium",class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),b("div",qt,[a[2]||(a[2]=b("div",{class:"flex items-center space-x-2 mr-auto"}," Menu ",-1)),b("div",zt,[(v=(p=g(t))==null?void 0:p.navbar)!=null&&v.colorModeSelector?(S(),M(l,{key:0})):P("",!0),w(n),w(u)])])])]),w(g(kt),{class:"sm:hidden"},{default:I(()=>a[3]||(a[3]=[b("div",{class:"space-y-1 pb-4 pt-2"}," DisclosurePanel ",-1)])),_:1})]}),_:1})}}}),Qt={class:"border-t dark:border-gray-600 font-display","aria-labelledby":"footer-heading"},Xt={class:"mt-16 border-t border-gray-900/10 dark:border-gray-600 pt-8 sm:mt-20 lg:mt-24"},Jt={class:"text-xs leading-5 text-gray-500"},Zt=A({__name:"Footer",setup(e){const t=J();return(r,a)=>(S(),D("footer",Qt,[b("div",Xt,[b("p",Jt,"© "+R(new Date().getFullYear())+" "+R(g(t).general.title)+" Все права защищены.",1)])]))}}),en={},tn={class:"font-display grid min-h-screen grid-rows-[auto,auto,1fr,auto] bg-white dark:bg-gray-800 transition-colors"};function nn(e,t){const r=ze,a=Gt,o=Zt;return S(),D("div",tn,[w(r),w(a),fe(e.$slots,"default"),w(o)])}const rn=X(en,[["render",nn]]),an={};function ln(e,t){const r=rn;return S(),D("div",null,[w(r,null,{default:I(()=>[fe(e.$slots,"default")]),_:3})])}const pn=X(an,[["render",ln]]);export{pn as default};