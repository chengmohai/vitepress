import{d as A,j as e,k as D,o as c,c as o,l as i,a4 as y,a5 as F,p as B,q as _,_ as v,I as N,a3 as b}from"./chunks/framework.BU7x9Ys0.js";const C=l=>(B("data-v-28c8a181"),l=l(),_(),l),q={class:"watermark"},f={class:"info"},T={class:"info-item"},x=C(()=>i("label",null," 上标题： ",-1)),I={class:"info-item"},L=C(()=>i("label",null," 下标题： ",-1)),M=A({__name:"watermark",setup(l){const h=e("大海"),k=e("技术备忘录"),r=e(null);D(()=>{p()});const p=()=>{const E=new Date().getTime().toString(),s=document.createElement("canvas");s.id=E;const a=-18*Math.PI/180,u=-72*Math.PI/180,d=h.value.length*20,g=k.value.length*20+20,t=d>=g?d:g;s.width=t*Math.cos(a)+20>300?t*Math.cos(a)+20:300,s.height=t*Math.cos(u)+50;const n=s.getContext("2d");n&&(n.translate(s.width/2,s.height/2),n.rotate(a),Object.assign(n,{...n,font:"20px Vedana",fillStyle:"rgba(200, 200, 200, 0.3)",textAlign:"center",textBaseline:"middle"}),n.fillText(h.value,0,-20),n.fillText(k.value,0,20));const m=r.value;m.style.background="url("+s.toDataURL("image/png")+") left top repeat"};return(E,s)=>(c(),o("div",q,[i("div",f,[i("div",T,[x,y(i("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>h.value=a),placeholder:"请输入上标题",onChange:p},null,544),[[F,h.value]])]),i("div",I,[L,y(i("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=a=>k.value=a),placeholder:"请输入下标题",onChange:p},null,544),[[F,k.value]])])]),i("div",{class:"canvas",ref_key:"canvas",ref:r},null,512)]))}}),w=v(M,[["__scopeId","data-v-28c8a181"]]),G=b("",3),S=b("",2),O=JSON.parse('{"title":"Canvas","description":"","frontmatter":{},"headers":[],"relativePath":"Javascript/standard built-in objects/20240510001.md","filePath":"Javascript/standard built-in objects/20240510001.md","lastUpdated":1715342400000}'),R={name:"Javascript/standard built-in objects/20240510001.md"},P=Object.assign(R,{setup(l){return(h,k)=>(c(),o("div",null,[G,N(w),S]))}});export{O as __pageData,P as default};
