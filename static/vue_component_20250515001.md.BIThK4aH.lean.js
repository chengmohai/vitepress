import{d as k,aR as Q,G as p,o as l,a as r,p as t,L as o,R as j,t as H,n as L,_ as y,i as J,z as I,c as b,h as _,f as B,az as W,aA as X,P as z,s as q,v as F,H as R,I as A,g as w,j as V,T as S,b as G,av as Y,B as Z,U as ee,J as M,M as K,a0 as te}from"./chunks/framework.e2Sa0dFk.js";import{u as U}from"./chunks/theme.D_P2brOt.js";const oe={class:"icon"},se={class:"title"},ae=k({__name:"IconItem",props:{active:{type:Boolean},activeColor:{default:"#0959f5"},iconClass:{},iconStyle:{},name:{}},setup(c){Q(e=>({"7e07601a":a.activeColor}));const a=c;return(e,s)=>{const i=p("SvgIcon");return l(),r("div",{class:L(["container c-pointer",e.active?"active":""])},[t("div",oe,[o(i,{"icon-class":e.iconClass||"note",style:j(e.iconStyle||"")},null,8,["icon-class","style"])]),t("div",se,H(e.name),1)],2)}}}),N=y(ae,[["__scopeId","data-v-3f266db3"]]),ne=c=>(q("data-v-6973a91d"),c=c(),F(),c),le={class:"container"},ce={class:"header"},ie={class:"main"},de={class:"main-box"},re={class:"catalog"},_e=ne(()=>t("span",null,"未分类",-1)),ue={class:"edit-panel"},me={class:"edit-item"},pe={class:"panel"},ve={class:"edit-item"},fe={class:"icon"},ge={class:"panel bell"},he={class:"edit-item"},$e={class:"icon alert"},ye={class:"panel alert"},be={class:"edit-item"},ke={class:"icon remark"},Ce={class:"panel remark"},Se={class:"footer"},Ie=k({__name:"EditPage",setup(c){let a=J("routes");const e=U(),s=()=>{a.value="MainPage"},i=I({share:{iconClass:"share",name:"分享",iconStyle:"color:#191919"},delete:{iconClass:"delete",name:"删除",iconStyle:"color:#191919"}}),u=()=>{console.log(1)},m=b({get(){return e.getters.editData.content},set(n){e.dispatch("edit/edit",{editData:{key:"content",value:n},data:e.getters.editData})}}),v=b({get(){return e.getters.editData.important},set(n){e.dispatch("edit/edit",{editData:{key:"important",value:n},data:e.getters.editData})}}),g=b(()=>e.getters.editData.catalog),$=b({get(){return e.getters.editData.remark},set(n){e.dispatch("edit/edit",{editData:{key:"remark",value:n},data:e.getters.editData})}}),C=()=>{const n=new Map([["todo","done"],["done","todo"]]),d=e.getters.editData.catalog,f=n.get(d);e.dispatch("edit/toggleStatus",{editData:{key:"catalog",value:f},data:{...e.getters.editData,catalog:d}})};return(n,d)=>{const f=p("SvgIcon"),D=p("el-input"),T=p("el-text"),h=p("el-switch"),x=p("el-scrollbar");return l(),r("div",le,[t("div",ce,[t("div",{class:"icon c-pointer",onClick:s},[o(f,{"icon-class":"arrow-back"})])]),t("div",ie,[o(x,null,{default:_(()=>[t("div",de,[t("div",re,[_e,o(f,{"icon-class":"trangle",style:{color:"#5b5d5d"}})]),t("div",ue,[t("div",me,[t("div",{class:"icon content c-pointer",onClick:C},[o(f,{"icon-class":g.value,"class-name":g.value},null,8,["icon-class","class-name"])]),t("div",pe,[o(D,{type:"textarea",size:"large",resize:"none","input-style":"font-size:18px;",autosize:{minRows:1,maxRows:6},modelValue:m.value,"onUpdate:modelValue":d[0]||(d[0]=P=>m.value=P)},null,8,["modelValue"])])]),t("div",ve,[t("div",fe,[o(f,{"icon-class":"bell"})]),t("div",ge,[o(T,null,{default:_(()=>[B("添加提醒")]),_:1})])]),t("div",he,[t("div",$e,[o(f,{"icon-class":"alert","class-name":v.value?"active":null},null,8,["class-name"])]),t("div",ye,[o(T,null,{default:_(()=>[B("重要")]),_:1}),o(h,{style:{"--el-switch-on-color":"#0a58f6"},modelValue:v.value,"onUpdate:modelValue":d[1]||(d[1]=P=>v.value=P)},null,8,["modelValue"])])]),t("div",be,[t("div",ke,[o(f,{"icon-class":"remark"})]),t("div",Ce,[o(D,{placeholder:"备注",type:"textarea",size:"large",resize:"none","input-style":"font-size:18px;",autosize:{minRows:1,maxRows:6},modelValue:$.value,"onUpdate:modelValue":d[2]||(d[2]=P=>$.value=P)},null,8,["modelValue"])])])])])]),_:1})]),t("div",Se,[o(N,W(X(i.value.share)),null,16),o(N,z(i.value.delete,{onClick:u}),null,16)])])}}}),we=y(Ie,[["__scopeId","data-v-6973a91d"]]),xe={class:"tabbar"},Pe=k({__name:"TabBar",props:{items:{},config:{default:()=>({activeColor:"#0959f5"})}},emits:["toggleBar"],setup(c,{emit:a}){const e=c,s=a,i=(u,m)=>{e.items.forEach((v,g)=>{v.active=!1,g===m&&(v.active=!0)}),s("toggleBar",u,m)};return(u,m)=>(l(),r("div",xe,[(l(!0),r(R,null,A(e.items,(v,g)=>(l(),w(N,z({key:`tabbar-${g}`,class:"c-pointer",ref_for:!0},{...v},{onClick:$=>i(v,g)}),null,16,["onClick"]))),128))]))}}),Be=y(Pe,[["__scopeId","data-v-a651a1a0"]]),De={},Te={class:"main"};function ze(c,a){const e=p("el-empty");return l(),r("div",Te,[o(e,{description:"未开发"})])}const Ve=y(De,[["render",ze],["__scopeId","data-v-23468af9"]]),Me={class:"list-item"},Ee=k({__name:"CellPage",props:{id:{},content:{},catalog:{},important:{type:Boolean},remark:{}},setup(c){const a=U(),e=c,s=()=>{a.commit("lists/TOGGLE_STATUS",e)},i=J("routes"),u=()=>{a.commit("edit/SAVE",e),i.value="EditPage"};return(m,v)=>{const g=p("SvgIcon");return l(),r("div",Me,[t("div",{class:"icon c-pointer",onClick:s},[o(g,{"icon-class":e.catalog,"class-name":`${e.catalog} c-pointer`},null,8,["icon-class","class-name"])]),t("div",{class:"content c-pointer",onClick:u},[t("div",{class:L(["text",{done:e.catalog==="done"}])},H(m.content),3)])])}}}),O=y(Ee,[["__scopeId","data-v-3edeac8e"]]),Re=k({__name:"AddBtn",setup(c){const a=I(!1);return(e,s)=>{const i=p("SvgIcon");return l(),r("div",{class:L(["add-btn c-pointer animate__animated",{animate__rubberBand:a.value}]),onAnimationend:s[0]||(s[0]=u=>a.value=!1),onMousedown:s[1]||(s[1]=u=>a.value=!0)},[o(i,{"icon-class":"add"})],34)}}}),Ae=y(Re,[["__scopeId","data-v-7ebdc728"]]),Ne={key:0,class:"input"},Le={class:"foot"},Ue=k({__name:"MyDialog",props:{isShow:{type:Boolean,default:!1},appendToBody:{type:Boolean,default:!1}},emits:["close"],setup(c,{emit:a}){const e=c;return(s,i)=>(l(),w(Y,{to:"body",disabled:!e.appendToBody},[o(S,{mode:"out-in",name:"opacity-fade"},{default:_(()=>[e.isShow?(l(),r("div",{key:0,class:"mask",onClick:i[0]||(i[0]=u=>s.$emit("close",!1))})):V("",!0)]),_:1}),o(S,{mode:"out-in",name:"slide-fade"},{default:_(()=>[e.isShow?(l(),r("div",Ne,[G(s.$slots,"default",{},void 0,!0),t("div",Le,[G(s.$slots,"foot",{},void 0,!0)])])):V("",!0)]),_:3})],8,["disabled"]))}}),Ge=y(Ue,[["__scopeId","data-v-cdeb69fd"]]),E=c=>(q("data-v-40536979"),c=c(),F(),c),Oe={class:"main"},je={class:"header"},He={class:"icon"},Je={ref:"content",class:"content"},qe={class:"catalog"},Fe={class:"title"},Ke=E(()=>t("span",null," 全部待办 ",-1)),Qe=E(()=>t("div",{class:"sub-title"},"2条待办",-1)),We={class:"data-box"},Xe={class:"item"},Ye=E(()=>t("div",{class:"title"},"未完成",-1)),Ze={key:0,class:"item-content"},et={class:"item"},tt=E(()=>t("div",{class:"title"},"已完成",-1)),ot={key:0,class:"item-content"},st={class:"fn"},at=k({__name:"ListPage",setup(c){const a=U(),e=I({todo:!0,done:!0,add:!1}),s=C=>{e.value[C]=!e.value[C]},i=I({todo:""}),u=b(()=>!i.value.todo),m=()=>{a.commit("lists/ADD",{catalog:"todo",content:i.value.todo,important:!1,remark:""}),i.value.todo="",s("add")},v=b(()=>a.getters.todo),g=b(()=>a.getters.done),$=I(0);return Z(()=>{ee(()=>{const C=document.querySelector(".el-scrollbar__wrap");C&&C.addEventListener("scroll",n=>{const{scrollTop:d}=n==null?void 0:n.target,f=d/200;$.value=f,$.value>1?$.value=1:$.value<0&&($.value=0)})})}),(C,n)=>{const d=p("SvgIcon"),f=p("el-scrollbar"),D=p("el-input"),T=p("el-button");return l(),r("div",Oe,[t("div",je,[t("div",{class:"title",style:j({opacity:$.value})},"全部待办",4),t("div",He,[o(d,{"icon-class":"menu"})])]),o(f,null,{default:_(()=>[t("div",Je,[t("div",qe,[t("div",Fe,[Ke,o(d,{"icon-class":"trangle","class-name":"trangle"})]),Qe]),t("div",We,[o(S,{name:"opacity-fade"},{default:_(()=>[t("div",Xe,[t("div",{class:"item-name c-pointer",onClick:n[0]||(n[0]=h=>s("todo"))},[Ye,o(d,{"icon-class":"arrow-up","class-name":`${e.value.todo?"":"animate__180"} arrow animate__base`},null,8,["class-name"])]),o(S,{name:"content-fold"},{default:_(()=>[e.value.todo?(l(),r("div",Ze,[(l(!0),r(R,null,A(v.value,(h,x)=>(l(),w(O,z({key:`todo_${x}`,ref_for:!0},h),null,16))),128))])):V("",!0)]),_:1})])]),_:1}),o(S,{name:"opacity-fade"},{default:_(()=>[t("div",et,[t("div",{class:"item-name c-pointer",onClick:n[1]||(n[1]=h=>s("done"))},[tt,o(d,{"icon-class":"arrow-up","class-name":`${e.value.done?"":"animate__180"} arrow animate__base`},null,8,["class-name"])]),o(S,{name:"content-fold"},{default:_(()=>[e.value.done?(l(),r("div",ot,[(l(!0),r(R,null,A(g.value,(h,x)=>(l(),w(O,z({key:`done_${x}`,ref_for:!0},h),null,16))),128))])):V("",!0)]),_:1})])]),_:1})])],512)]),_:1}),o(Ae,{onClick:n[2]||(n[2]=h=>s("add"))}),o(Ge,{"is-show":e.value.add,onClose:n[4]||(n[4]=h=>s("add"))},{foot:_(()=>[t("div",st,[o(d,{"icon-class":"microphone","class-name":"disabled"}),o(d,{"icon-class":"clock","class-name":"disabled",style:{"margin-left":"10px"}}),o(d,{"icon-class":"location","class-name":"disabled",style:{"font-size":"19px","margin-left":"13px"}}),o(d,{"icon-class":"alert","class-name":"disabled",style:{"margin-left":"12px"}})]),o(T,{disabled:u.value,class:"btn",type:"primary",size:"small",onClick:m},{default:_(()=>[B(" 保存 ")]),_:1},8,["disabled"])]),default:_(()=>[o(D,{modelValue:i.value.todo,"onUpdate:modelValue":n[3]||(n[3]=h=>i.value.todo=h),type:"textarea",resize:"none",autofocus:"",placeholder:"待办事项",autosize:{minRows:1,maxRows:4}},null,8,["modelValue"])]),_:1},8,["is-show"])])}}}),nt=y(at,[["__scopeId","data-v-40536979"]]),lt={class:"container"},ct=k({__name:"MainPage",setup(c){const a=I([{iconClass:"note",name:"笔记"},{iconClass:"done",name:"待办",iconStyle:"font-size: 24px",active:!0}]),e=I(1),s=b(()=>({0:M(Ve),1:M(nt)})[e.value].value),i=(u,m)=>{e.value=m};return(u,m)=>(l(),r("div",lt,[o(S,{name:"route",mode:"out-in"},{default:_(()=>[(l(),w(K(s.value),{class:"base"}))]),_:1}),o(Be,{items:a.value,onToggleBar:i},null,8,["items"])]))}}),it=y(ct,[["__scopeId","data-v-e5419323"]]),dt={class:"todo-list"},rt=k({__name:"todo-list",setup(c){const a=I("MainPage");te("routes",a);const e=b(()=>({MainPage:M(it),EditPage:M(we)})[a.value].value);return(s,i)=>(l(),r("div",dt,[o(S,{name:"route",mode:"out-in"},{default:_(()=>[(l(),w(K(e.value),{key:new Date().getTime()}))]),_:1})]))}}),_t=y(rt,[["__scopeId","data-v-98176224"]]),ut=t("h1",{id:"仿华为备忘录",tabindex:"-1"},[B("仿华为备忘录 "),t("a",{class:"header-anchor",href:"#仿华为备忘录","aria-label":'Permalink to "仿华为备忘录"'},"​")],-1),mt=t("h2",{id:"成品",tabindex:"-1"},[B("成品 "),t("a",{class:"header-anchor",href:"#成品","aria-label":'Permalink to "成品"'},"​")],-1),gt=JSON.parse('{"title":"仿华为备忘录","description":"","frontmatter":{},"headers":[],"relativePath":"vue/component/20250515001.md","filePath":"vue/component/20250515001.md","lastUpdated":1717904896000}'),pt={name:"vue/component/20250515001.md"},ht=Object.assign(pt,{setup(c){return(a,e)=>(l(),r("div",null,[ut,mt,o(_t)]))}});export{gt as __pageData,ht as default};
