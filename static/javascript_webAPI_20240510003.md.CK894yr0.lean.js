import{d as m,z as o,B as A,G as c,o as b,a as C,L as r,h as F,p as E,s as q,v as x,_ as D,U as T,f as B,aQ as I}from"./chunks/framework.e2Sa0dFk.js";const w=d=>(q("data-v-0211d97f"),d=d(),x(),d),M={class:"watermark"},L=w(()=>E("h4",null,"效果预览",-1)),G=m({__name:"watermark",setup(d){const n=o("大海"),i=o("技术备忘录"),y=o(null);A(()=>{l()});const l=()=>{const h=new Date().getTime().toString(),a=document.createElement("canvas");a.id=h;const p=-18*Math.PI/180,e=-72*Math.PI/180,g=n.value.length*20,k=i.value.length*20+20,s=g>=k?g:k;a.width=s*Math.cos(p)+20>300?s*Math.cos(p)+20:300,a.height=s*Math.cos(e)+50;const t=a.getContext("2d");t&&(t.translate(a.width/2,a.height/2),t.rotate(p),Object.assign(t,{...t,font:"20px Vedana",fillStyle:"rgba(200, 200, 200, 0.3)",textAlign:"center",textBaseline:"middle"}),t.fillText(n.value,0,-20),t.fillText(i.value,0,20));const u=y.value;u.style.background="url("+a.toDataURL("image/png")+") left top repeat"};return(h,a)=>{const p=c("el-input"),e=c("el-form-item"),g=c("el-form"),k=c("el-card");return b(),C("div",M,[r(k,{shadow:"never"},{header:F(()=>[L]),default:F(()=>[r(g,{class:"info"},{default:F(()=>[r(e,{label:"上标题"},{default:F(()=>[r(p,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=s=>n.value=s),placeholder:"请输入上标题",onInput:l},null,8,["modelValue"])]),_:1}),r(e,{label:"下标题"},{default:F(()=>[r(p,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=s=>i.value=s),placeholder:"请输入下标题",onInput:l},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),E("div",{class:"canvas",ref_key:"canvas",ref:y},null,512)])}}}),S=D(G,[["__scopeId","data-v-0211d97f"]]),P={class:"object-demo"},O=m({__name:"object-demo",setup(d){const n=o(null);return A(()=>{const i=(l,h)=>Math.floor(Math.random()*(h-l))+l,y=(l=.5)=>`rgb(${i(0,255)},${i(0,255)},${i(0,255)},${l})`;T(()=>{if(n.value){let l=function(){h.fillStyle="#eee",h.fillRect(0,0,p,e);for(let s=0;s<k.length;s++)k[s].draw(),k[s].update();requestAnimationFrame(l)};const h=n.value.getContext("2d"),a=document.querySelector("div.object-demo"),p=n.value.width=a.clientWidth,e=n.value.height;class g{constructor(t,u,_,v,f,N){this.x=t,this.y=u,this.velX=_,this.velY=v,this.color=f,this.size=N}draw(){h.beginPath(),h.fillStyle=this.color,h.arc(this.x,this.y,this.size,0,2*Math.PI),h.fill()}update(){this.x+this.size>=p&&(this.velX=-this.velX),this.x-this.size<=0&&(this.velX=-this.velX),this.y+this.size>=e&&(this.velY=-this.velY),this.y-this.size<=0&&(this.velY=-this.velY),this.x+=this.velX,this.y+=this.velY}}let k=[];for(;k.length<25;){let s=i(10,20),t=new g(i(0+s,p-s),i(0+s,e-s),i(-7,7),i(-7,7),y(),s);k.push(t)}l()}})}),(i,y)=>(b(),C("div",P,[E("canvas",{class:"canvas",ref_key:"canvas",ref:n,height:"500"},null,512)]))}}),R=D(O,[["__scopeId","data-v-ff1a29c8"]]),H=E("h1",{id:"canvas",tabindex:"-1"},[B("Canvas "),E("a",{class:"header-anchor",href:"#canvas","aria-label":'Permalink to "Canvas"'},"​")],-1),V=E("h2",{id:"一-水印案例",tabindex:"-1"},[B("一. 水印案例 "),E("a",{class:"header-anchor",href:"#一-水印案例","aria-label":'Permalink to "一. 水印案例"'},"​")],-1),U=I("",3),z=JSON.parse('{"title":"Canvas","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/webAPI/20240510003.md","filePath":"javascript/webAPI/20240510003.md","lastUpdated":1717904896000}'),j={name:"javascript/webAPI/20240510003.md"},W=Object.assign(j,{setup(d){return(n,i)=>(b(),C("div",null,[H,V,r(S),U,r(R)]))}});export{z as __pageData,W as default};
