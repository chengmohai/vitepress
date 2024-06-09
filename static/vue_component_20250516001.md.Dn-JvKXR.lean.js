var j=Object.defineProperty;var I=(h,s,i)=>s in h?j(h,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):h[s]=i;var y=(h,s,i)=>(I(h,typeof s!="symbol"?s+"":s,i),i);import{d as O,z as b,o as g,a as c,p as n,t as u,H as _,I as x,n as f,_ as S,L as H,f as Y,aQ as $}from"./chunks/framework.e2Sa0dFk.js";const v=Symbol(),q=Symbol(),w=Symbol(),T=Symbol(),M=Symbol(),r=Symbol(),m=Symbol(),N=Symbol();let P=class{constructor(s="en"){y(this,"TODAY",new Date);y(this,"ONEDAY",24*60*60*1e3);y(this,"CALENDAR_MODE");y(this,"current_month",0);y(this,"current_year",0);this.CALENDAR_MODE=s}init(){this.current_month=this[r](this.TODAY).month,this.current_year=this[r](this.TODAY).year;const s=this[N](this.CALENDAR_MODE),i=this[m]();return{week_days:s,calendar_days:i,month:this.current_month,year:this.current_year}}next(){let s,i;return this.current_month=this.current_month+1,this.current_month>11&&(this.current_year++,this.current_month=0),s=this.current_year,i=this.current_month,{calendar_days:this[m](new Date(s,i,1)),month:this.current_month,year:this.current_year}}prev(){let s,i;return this.current_month=this.current_month-1,this.current_month<0&&(this.current_year--,this.current_month=11),s=this.current_year,i=this.current_month,{calendar_days:this[m](new Date(s,i,1)),month:this.current_month,year:this.current_year}}jump(s=this.TODAY){const{year:i,month:a,day:l}=this[r](s);return this.current_year=i,this.current_month=a,{calendar_days:this[m](new Date(i,a,l)),month:this.current_month,year:this.current_year}}[N](s){let i=[];switch(s){case"en":i=["周日","周一","周二","周三","周四","周五","周六"];case"zh":i=["周一","周二","周三","周四","周五","周六","周日"]}return i}[m](s=this.TODAY){const{month_1st_day:i,month_last_day:a,calendar_1st_day:l,calendar_front_days:k,calendar_last_days:t}=this[M](s),{year:F,month:d}=this[r](s),{year:e,month:C,day:A}=this[r](this.TODAY),o=this[q](F)[d]+k+t;let p=new Array;for(let E=0;E<o;E++){const D=l.getTime()+E*this.ONEDAY;p.push({day:new Date(D).getDate(),isCurrentMonth:D-i.getTime()>=0&&a.getTime()-D>=0,isToday:D===new Date(e,C,A).getTime()})}return p}[r](s){const i=s.getFullYear(),a=s.getMonth(),l=s.getDate();return{year:i,month:a,day:l}}[M](s){const{year:i,month:a}=this[r](s),l=new Date(i,a,1),k=this[T](l),t=new Date(i,a,this[q](i)[a]),F=this[w](t),d=(l.getTime()-k.getTime())/this.ONEDAY,e=(F.getTime()-t.getTime())/this.ONEDAY;return{month_1st_day:l,month_last_day:t,calendar_1st_day:k,calendar_front_days:d,calendar_last_days:e}}[T](s){let i=null;return this.CALENDAR_MODE==="zh"?i=new Date(s.getDay()===0?s.getTime()-6*this.ONEDAY:s.getTime()-(s.getDay()-1)*this.ONEDAY):this.CALENDAR_MODE==="en"&&(i=new Date(s.getTime()-s.getDay()*this.ONEDAY)),i}[w](s){let i=null;return this.CALENDAR_MODE==="zh"?i=new Date(s.getDay()===0?s.getTime():s.getTime()+(7-s.getDay())*this.ONEDAY):this.CALENDAR_MODE==="en"&&(i=new Date(s.getTime()+(6-s.getDay())*this.ONEDAY)),i}[v](s){return s%4==0&&s%100!==0||s%400==0}[q](s){const i=[31,28,31,30,31,30,31,31,30,31,30,31],a=[31,29,31,30,31,30,31,31,30,31,30,31];return this[v](s)?a:i}};const z={class:"container"},L={class:"calendar"},R={class:"date_title"},W={class:"txt"},U={class:"txt"},V={class:"month_bg"},Z={class:"week_head"},J={class:"day_box"},X=O({__name:"my-calendar",setup(h){const s=b("en"),i=new P(s.value),{week_days:a,calendar_days:l,month:k,year:t}=i.init(),F=b(a),d=b(l),e=b(k),C=b(t),A=()=>{const{calendar_days:B,month:o,year:p}=i.jump();d.value=B,e.value=o,C.value=p};return(B,o)=>(g(),c("div",z,[n("div",L,[n("div",R,[n("span",W,u(C.value)+"年",1),n("span",U,u(e.value+1)+"月",1)]),n("div",{class:"switcher"},[n("div",{class:"button",onClick:A},"今天")]),n("div",V,u(e.value+1)+"月",1),n("div",Z,[(g(!0),c(_,null,x(F.value,(p,E)=>(g(),c("div",{class:"week_day",key:E},u(p),1))),128))]),n("div",J,[(g(!0),c(_,null,x(d.value,(p,E)=>(g(),c("div",{class:f(["day",{overCurrentMonth:!p.isCurrentMonth}]),key:E},[n("div",{class:f(["num",{isToday:p.isToday}])},u(p.day),3)],2))),128))])])]))}}),G=S(X,[["__scopeId","data-v-828d3bc9"]]),Q=n("h1",{id:"手写日历组件",tabindex:"-1"},[Y("手写日历组件 "),n("a",{class:"header-anchor",href:"#手写日历组件","aria-label":'Permalink to "手写日历组件"'},"​")],-1),K=n("h2",{id:"效果预览",tabindex:"-1"},[Y("效果预览 "),n("a",{class:"header-anchor",href:"#效果预览","aria-label":'Permalink to "效果预览"'},"​")],-1),ss=$("",6),ps=JSON.parse('{"title":"手写日历组件","description":"","frontmatter":{},"headers":[],"relativePath":"vue/component/20250516001.md","filePath":"vue/component/20250516001.md","lastUpdated":1717904896000}'),is={name:"vue/component/20250516001.md"},hs=Object.assign(is,{setup(h){return(s,i)=>(g(),c("div",null,[Q,K,H(G),ss]))}});export{ps as __pageData,hs as default};
