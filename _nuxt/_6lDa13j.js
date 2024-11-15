import{_ as pe}from"./03DryPaZ.js";import{r as k,J as f,d as E,K as H,L as K,o as C,c as M,M as x,y as S,D as ce,N as q,F as U,O as ve,q as fe,e as $,f as A,g as p,j as N,w as P,h as W,P as J,Q as me,n as G,t as D,R as be,S as ge,U as ye}from"./AtfJofND.js";import{u as he}from"./idPrAAit.js";import{A as j,i as B,o as V,O as we,a as _e,E as ke,b as R,c as I,P as z,N as L,T as Q,d as xe}from"./Ac5V6Rdp.js";function Oe(e,t,l){let n=k(l==null?void 0:l.value),r=f(()=>e.value!==void 0);return[f(()=>r.value?e.value:n.value),function(s){return r.value||(n.value=s),t==null?void 0:t(s)}]}var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});let Se=E({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:l}){return()=>{var n;let{features:r,...s}=e,o={"aria-hidden":(r&2)===2?!0:(n=s["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return j({ourProps:o,theirProps:s,slot:{},attrs:l,slots:t,name:"Hidden"})}}});function Z(e={},t=null,l=[]){for(let[n,r]of Object.entries(e))te(l,ee(t,n),r);return l}function ee(e,t){return e?e+"["+t+"]":t}function te(e,t,l){if(Array.isArray(l))for(let[n,r]of l.entries())te(e,ee(t,n.toString()),r);else l instanceof Date?e.push([t,l.toISOString()]):typeof l=="boolean"?e.push([t,l?"1":"0"]):typeof l=="string"?e.push([t,l]):typeof l=="number"?e.push([t,`${l}`]):l==null?e.push([t,""]):Z(l,t,e)}function Re(e){var t,l;let n=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(n){for(let r of n.elements)if(r!==e&&(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image")){r.click();return}(l=n.requestSubmit)==null||l.call(n)}}let le=Symbol("DescriptionContext");function Ee(){let e=K(le,null);if(e===null)throw new Error("Missing parent");return e}function ae({slot:e=k({}),name:t="Description",props:l={}}={}){let n=k([]);function r(s){return n.value.push(s),()=>{let o=n.value.indexOf(s);o!==-1&&n.value.splice(o,1)}}return H(le,{register:r,slot:e,name:t,props:l}),f(()=>n.value.length>0?n.value.join(" "):void 0)}let $e=E({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l}){var n;let r=(n=e.id)!=null?n:`headlessui-description-${B()}`,s=Ee();return C(()=>M(s.register(r))),()=>{let{name:o="Description",slot:m=k({}),props:i={}}=s,{...g}=e,y={...Object.entries(i).reduce((c,[w,b])=>Object.assign(c,{[w]:x(b)}),{}),id:r};return j({ourProps:y,theirProps:g,slot:m.value,attrs:t,slots:l,name:o})}}}),re=Symbol("LabelContext");function ne(){let e=K(re,null);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return e}function oe({slot:e={},name:t="Label",props:l={}}={}){let n=k([]);function r(s){return n.value.push(s),()=>{let o=n.value.indexOf(s);o!==-1&&n.value.splice(o,1)}}return H(re,{register:r,slot:e,name:t,props:l}),f(()=>n.value.length>0?n.value.join(" "):void 0)}let Ne=E({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:l}){var n;let r=(n=e.id)!=null?n:`headlessui-label-${B()}`,s=ne();return C(()=>M(s.register(r))),()=>{let{name:o="Label",slot:m={},props:i={}}=s,{passive:g,...y}=e,c={...Object.entries(i).reduce((w,[b,_])=>Object.assign(w,{[b]:x(_)}),{}),id:r};return g&&(delete c.onClick,delete c.htmlFor,delete y.onClick),j({ourProps:c,theirProps:y,slot:m,attrs:l,slots:t,name:o})}}});function Pe(e,t){return e===t}let ie=Symbol("RadioGroupContext");function se(e){let t=K(ie,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,se),l}return t}let je=E({name:"RadioGroup",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"div"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Pe},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{emit:t,attrs:l,slots:n,expose:r}){var s;let o=(s=e.id)!=null?s:`headlessui-radiogroup-${B()}`,m=k(null),i=k([]),g=oe({name:"RadioGroupLabel"}),y=ae({name:"RadioGroupDescription"});r({el:m,$el:m});let[c,w]=Oe(f(()=>e.modelValue),a=>t("update:modelValue",a),f(()=>e.defaultValue)),b={options:i,value:c,disabled:f(()=>e.disabled),firstOption:f(()=>i.value.find(a=>!a.propsRef.disabled)),containsCheckedOption:f(()=>i.value.some(a=>b.compare(S(a.propsRef.value),S(e.modelValue)))),compare(a,d){if(typeof e.by=="string"){let u=e.by;return(a==null?void 0:a[u])===(d==null?void 0:d[u])}return e.by(a,d)},change(a){var d;if(e.disabled||b.compare(S(c.value),S(a)))return!1;let u=(d=i.value.find(h=>b.compare(S(h.propsRef.value),S(a))))==null?void 0:d.propsRef;return u!=null&&u.disabled?!1:(w(a),!0)},registerOption(a){i.value.push(a),i.value=we(i.value,d=>d.element)},unregisterOption(a){let d=i.value.findIndex(u=>u.id===a);d!==-1&&i.value.splice(d,1)}};H(ie,b),_e({container:f(()=>V(m)),accept(a){return a.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function _(a){if(!m.value||!m.value.contains(a.target))return;let d=i.value.filter(u=>u.propsRef.disabled===!1).map(u=>u.element);switch(a.key){case R.Enter:Re(a.currentTarget);break;case R.ArrowLeft:case R.ArrowUp:if(a.preventDefault(),a.stopPropagation(),z(d,L.Previous|L.WrapAround)===Q.Success){let u=i.value.find(h=>{var v;return h.element===((v=I(m))==null?void 0:v.activeElement)});u&&b.change(u.propsRef.value)}break;case R.ArrowRight:case R.ArrowDown:if(a.preventDefault(),a.stopPropagation(),z(d,L.Next|L.WrapAround)===Q.Success){let u=i.value.find(h=>{var v;return h.element===((v=I(h.element))==null?void 0:v.activeElement)});u&&b.change(u.propsRef.value)}break;case R.Space:{a.preventDefault(),a.stopPropagation();let u=i.value.find(h=>{var v;return h.element===((v=I(h.element))==null?void 0:v.activeElement)});u&&b.change(u.propsRef.value)}break}}let O=f(()=>{var a;return(a=V(m))==null?void 0:a.closest("form")});return C(()=>{ce([O],()=>{if(!O.value||e.defaultValue===void 0)return;function a(){b.change(e.defaultValue)}return O.value.addEventListener("reset",a),()=>{var d;(d=O.value)==null||d.removeEventListener("reset",a)}},{immediate:!0})}),()=>{let{disabled:a,name:d,form:u,...h}=e,v={ref:m,id:o,role:"radiogroup","aria-labelledby":g.value,"aria-describedby":y.value,onKeydown:_};return q(U,[...d!=null&&c.value!=null?Z({[d]:c.value}).map(([T,F])=>q(Se,ke({features:X.Hidden,key:T,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:u,disabled:a,name:T,value:F}))):[],j({ourProps:v,theirProps:{...l,...xe(h,["modelValue","defaultValue","by"])},slot:{},attrs:l,slots:n,name:"RadioGroup"})])}}});var Ae=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(Ae||{});let De=E({name:"RadioGroupOption",props:{as:{type:[Object,String],default:"div"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:l,expose:n}){var r;let s=(r=e.id)!=null?r:`headlessui-radiogroup-option-${B()}`,o=se("RadioGroupOption"),m=oe({name:"RadioGroupLabel"}),i=ae({name:"RadioGroupDescription"}),g=k(null),y=f(()=>({value:e.value,disabled:e.disabled})),c=k(1);n({el:g,$el:g});let w=f(()=>V(g));C(()=>o.registerOption({id:s,element:w,propsRef:y})),M(()=>o.unregisterOption(s));let b=f(()=>{var v;return((v=o.firstOption.value)==null?void 0:v.id)===s}),_=f(()=>o.disabled.value||e.disabled),O=f(()=>o.compare(S(o.value.value),S(e.value))),a=f(()=>_.value?-1:O.value||!o.containsCheckedOption.value&&b.value?0:-1);function d(){var v;o.change(e.value)&&(c.value|=2,(v=V(g))==null||v.focus())}function u(){c.value|=2}function h(){c.value&=-3}return()=>{let{value:v,disabled:T,...F}=e,ue={checked:O.value,disabled:_.value,active:!!(c.value&2)},de={id:s,ref:g,role:"radio","aria-checked":O.value?"true":"false","aria-labelledby":m.value,"aria-describedby":i.value,"aria-disabled":_.value?!0:void 0,tabIndex:a.value,onClick:_.value?void 0:d,onFocus:_.value?void 0:u,onBlur:_.value?void 0:h};return j({ourProps:de,theirProps:F,slot:ue,attrs:t,slots:l,name:"RadioGroupOption"})}}}),Y=Ne,Le=$e;const Ve={class:"w-full px-4 py-4"},Ce={class:"mxl-auto w-full max-w-md"},Be={class:"space-y-2"},Te={class:"flex w-full items-center"},Fe={class:"flex items-center w-20"},Ge={class:"flex items-center ml-2 mr-auto"},Ie={class:"text-sm"},Ue={class:"shrink-0 text-white"},We=E({__name:"DbTypeList",async setup(e){let t,l;const{data:n}=([t,l]=ve(()=>he("dbTypes",()=>fe("/db_types").where({_path:{$ne:"/db_types"},_extension:"md"}).find())),t=await t,l(),t),r=k();return(s,o)=>{const m=pe;return $(),A("div",Ve,[p("div",Ce,[N(x(je),{modelValue:x(r),"onUpdate:modelValue":o[0]||(o[0]=i=>ye(r)?r.value=i:null)},{default:P(()=>[N(x(Y),{class:"sr-only"},{default:P(()=>o[1]||(o[1]=[W("Database")])),_:1}),p("div",Be,[($(!0),A(U,null,J(x(n),i=>($(),me(x(De),{as:"template",key:i.title,value:i},{default:P(({active:g,checked:y})=>[p("div",{class:G([[g?"ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300":"",y?"bg-sky-900/75 dark:bg-sky-700/75 text-white ":"bg-gray-100 dark:bg-gray-400 "],"relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"])},[p("div",Te,[p("div",Fe,[N(m,{src:i.card_image},null,8,["src"])]),p("div",Ge,[p("div",Ie,[N(x(Y),{as:"p",class:G([y?"text-white":"text-gray-900","font-medium"])},{default:P(()=>[W(D(i.title),1)]),_:2},1032,["class"]),N(x(Le),{as:"span",class:G([y?"text-sky-100":"text-gray-500","inline"])},{default:P(()=>[p("div",null,[p("span",null,D(i.description),1)]),o[3]||(o[3]=p("div",{class:"pt-2"},[p("i",null,"Параметры соединения:")],-1)),($(!0),A(U,null,J(i.keys,(c,w)=>($(),A("div",null,[p("span",null,D(i.labels[w]??c),1),o[2]||(o[2]=p("span",{"aria-hidden":"true"}," · ",-1)),p("span",null,D(i.types[w]),1)]))),256))]),_:2},1032,["class"])])]),be(p("div",Ue,o[4]||(o[4]=[p("svg",{class:"h-6 w-6",viewBox:"0 0 24 24",fill:"none"},[p("circle",{cx:"12",cy:"12",r:"12",fill:"#fff","fill-opacity":"0.2"}),p("path",{d:"M7 13l3 3 7-7",stroke:"#fff","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),512),[[ge,y]])])],2)]),_:2},1032,["value"]))),128))])]),_:1},8,["modelValue"])])])}}});export{We as default};
