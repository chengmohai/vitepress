import{d as I,j as l,k as O,m as A,D as f,o as i,c as n,I as p,w as g,F as x,E as $,l as e,t as v,_ as z,x as T,a as E,P as w,p as F,q as L,aV as B,n as S,e as N,aR as j}from"./chunks/framework.CGWtFwz2.js";const q={class:"intersection-observer"},D=I({__name:"IntersectionObserver",setup(o){const r=l([1,2,3,4,5,6,7,8,9,10]),c=l(r.value.length),u=l(null),k=l(!0);return O(()=>{const _=new IntersectionObserver(m=>{const a=m[0];k.value=a.isIntersecting,a.isIntersecting&&setTimeout(()=>{for(let h=1;h<=5;h++)c.value++,r.value.push(A(c))},1e3)},{root:document.querySelector("div.intersection-observer>div.el-scrollbar"),rootMargin:"0px 0px 50px 0px",threshold:[0]});u.value&&_.observe(u.value)}),(_,m)=>{const a=f("el-scrollbar");return i(),n("div",q,[p(a,{"max-height":"400px"},{default:g(()=>[(i(!0),n(x,null,$(r.value,(h,s)=>(i(),n("div",{key:s,class:"rect"},v(h),1))),128)),e("div",{ref_key:"trigger",ref:u,class:"trigger"},"加载更多……",512)]),_:1})])}}}),R=z(D,[["__scopeId","data-v-897c94b1"]]),M=o=>(F("data-v-2252a03f"),o=o(),L(),o),U={class:"resize-observer"},J={class:"wrap"},W=M(()=>e("img",{class:"blur",src:B},null,-1)),G=I({__name:"ResizeObserver",setup(o){const r=l(200),c=l(!0),u=l(20),k=l(14),_=l(null),m=new ResizeObserver(s=>{const{borderBoxSize:t}=s[0],{inlineSize:d}=t[0],b=20/200,y=14/200;u.value=d*b,k.value=d*y}),a=s=>`${s}px`;O(()=>{h(c.value)});const h=s=>{const t=s?"observe":"unobserve";_.value&&m[t](_.value)};return T(c,s=>{h(s)}),(s,t)=>{const d=f("el-slider"),b=f("el-form-item"),y=f("el-switch"),V=f("el-form"),P=f("el-card");return i(),n("div",U,[p(P,{shadow:"newver"},{default:g(()=>[p(V,{class:"info"},{default:g(()=>[p(b,{label:"容器宽度"},{default:g(()=>[p(d,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=C=>r.value=C),"format-tooltip":a,min:200,max:500,step:1},null,8,["modelValue"])]),_:1}),p(b,{label:"观察器开关"},{default:g(()=>[p(y,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=C=>c.value=C),"active-text":"开启","inactive-text":"关闭","active-value":!0,"inactive-value":!1},null,8,["modelValue"])]),_:1}),p(b,{label:"图片标题字号"},{default:g(()=>[E(v(parseInt(u.value))+"px ",1)]),_:1})]),_:1})]),_:1}),e("div",J,[e("div",{ref_key:"card",ref:_,class:"card",style:w({width:`${r.value}px`})},[W,e("div",{class:"title",style:w({fontSize:`${u.value}px`})}," WE LOVE STEAM! ",4),e("div",{class:"content",style:w({fontSize:`${k.value}px`})}," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, ipsa beatae. Ducimus, quod, nam voluptate optio aliquam eius incidunt necessitatibus, quam excepturi molestias modi est in illo? Ex, corrupti suscipit. ",4)],4)])])}}}),H=z(G,[["__scopeId","data-v-2252a03f"]]),K=o=>(F("data-v-e137141e"),o=o(),L(),o),Q={class:"mutation-observer"},X=K(()=>e("h4",null,"观察器发现了什么？",-1)),Y={class:"tags"},Z={class:"between-item"},ee=["onClick"],se=["onClick"],te={key:0,class:"sub-list"},ae=["onClick"],ie=I({__name:"MutationObserver",setup(o){const r=l(null),c=l([{txt:"子节点",subList:[],spec:!1}]),u=l([]),k=()=>{c.value.push({txt:"子节点",subList:[],spec:!1})},_=a=>{a.push({txt:"孙节点内容",spec:!1})},m=a=>{a.spec=!a.spec};return O(()=>{const a=r.value;new MutationObserver(s=>{for(let t of s)switch(t.type){case"childList":u.value.push("childList");break;case"attributes":u.value.push("attributes");break}}).observe(a,{attributes:!0,childList:!0,subtree:!0})}),(a,h)=>(i(),n("div",Q,[X,e("section",Y,[(i(!0),n(x,null,$(u.value,(s,t)=>(i(),n("div",{class:S(["tag",[s==="childList"?"b":"y"]]),key:`tag-${t}`},v(s),3))),128))]),e("button",{class:"button",type:"button",onClick:k},"新增子节点"),e("div",{class:"mutation",ref_key:"mutation",ref:r},[(i(!0),n(x,null,$(c.value,(s,t)=>(i(),n("div",{key:`item-${t}`,class:S(["list-item",{"spec-o":s.spec}])},[e("div",Z,[e("span",null,v(t+1)+" : "+v(s.txt),1),e("span",null,[e("button",{class:"button",type:"button",onClick:d=>_(s.subList)}," 新增孙节点 ",8,ee),e("button",{class:"button",type:"button",name:"add",onClick:d=>m(s)}," 变更子节点样式 ",8,se)])]),s.subList.length?(i(),n("div",te,[(i(!0),n(x,null,$(s.subList,(d,b)=>(i(),n("div",{key:`subItem-${b}`,class:S(["between-item sub-item",{"spec-t":d.spec}])},[e("span",null,v(t+1)+"-"+v(b+1)+" : "+v(d.txt),1),e("button",{class:"button",type:"button",onClick:y=>m(d)}," 变更孙节点样式 ",8,ae)],2))),128))])):N("",!0)],2))),128))],512)]))}}),ne=z(ie,[["__scopeId","data-v-e137141e"]]),le=e("h1",{id:"各种-observer",tabindex:"-1"},[E("各种 Observer "),e("a",{class:"header-anchor",href:"#各种-observer","aria-label":'Permalink to "各种 Observer"'},"​")],-1),oe=e("h2",{id:"交叉观察器",tabindex:"-1"},[E("交叉观察器 "),e("a",{class:"header-anchor",href:"#交叉观察器","aria-label":'Permalink to "交叉观察器"'},"​")],-1),re=e("h2",{id:"元素大小改变观察器",tabindex:"-1"},[E("元素大小改变观察器 "),e("a",{class:"header-anchor",href:"#元素大小改变观察器","aria-label":'Permalink to "元素大小改变观察器"'},"​")],-1),ce=e("h2",{id:"变化观察器",tabindex:"-1"},[E("变化观察器 "),e("a",{class:"header-anchor",href:"#变化观察器","aria-label":'Permalink to "变化观察器"'},"​")],-1),ue=j("",4),he=JSON.parse('{"title":"各种 Observer","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/webAPI/20240509001.md","filePath":"javascript/webAPI/20240509001.md","lastUpdated":1715521816000}'),pe={name:"javascript/webAPI/20240509001.md"},_e=Object.assign(pe,{setup(o){return(r,c)=>(i(),n("div",null,[le,oe,p(R),re,p(H),ce,p(ne),ue]))}});export{he as __pageData,_e as default};
