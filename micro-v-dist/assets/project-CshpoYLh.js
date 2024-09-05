import{d as J,u as K,c as m,G as X,r as y,H as Y,I as Q,J as Z,B as ee,o as s,e as o,F as b,f as r,k as S,t as k,z as f,K as E,g as w,j as T,y as W,l as te,m as O,x as se,q as oe,p as ne,n as ie,L as ae,_ as re}from"./index-B7RwLVET.js";const le=g=>(ne("data-v-4bf427ee"),g=g(),ie(),g),ce={key:0,class:"status-container"},de=le(()=>r("div",{class:"empty-status"},"项目列表为空",-1)),ue=[de],ve={class:"content-wrap"},pe={class:"mid-view-window"},_e=["onClick"],fe={key:0,class:"scroll-into-tip"},he={key:0},me={class:"title"},ye={key:0},ke=["href"],we={class:"attach"},ge={key:0},Ie=["href"],Le={key:0,class:"desc"},We={key:1,class:"mobile-view-mode"},je={class:"info"},Re={key:0},De={class:"title"},Ce={key:0},be=["href"],Ee={class:"attach"},xe={key:0},Ae=["href"],Ne={key:0,class:"desc"},Se=J({__name:"project",setup(g){se.config({duration:1,maxCount:1});const V=K(),x=te(),q=oe(),B=m(()=>V.getDeviceType),z=m(()=>B.value===ae.MOBILE),c=X({projectList:[],originList:[]}),l={NARROW:"narrow",WIDE:"wide"},u=y(l.NARROW),A=y(null),v=y(0),a=m(()=>c.projectList[v.value]);Y(a,t=>{x.query.id=t.id});const M=y(0),j=y(0),P=m(()=>u.value===l.NARROW?{marginTop:0}:{marginTop:`-${j.value}px`}),$=m(()=>u.value===l.WIDE?{opacity:1,marginTop:0}:{marginTop:`${j.value}px`});Q(()=>{R(),window.addEventListener("resize",R)}),Z(()=>{window.removeEventListener("resize",R)}),document.onkeyup=function(t){const{code:e}=t;e==="ArrowLeft"&&_(-1),e==="ArrowRight"&&_(1),e==="ArrowUp"&&h(l.NARROW,-1),e==="ArrowDown"&&h(l.WIDE,1)},H();function H(){const t=ee();c.originList=t;const e=t.length,i=[];for(;i.length<5;)for(let d=0;d<e;d++){const C=t[d];i.push({...C})}const I=x.query.id,n=i.findIndex(d=>d.id==Number(I));v.value=n>-1?n:0;const L=i.length;let D=2-v.value;for(let d=0;d<L;d++){const C=i[d];C.order=D%L,D++}c.projectList=i}function R(){const t=A.value;t&&(M.value=t.clientWidth,j.value=t.clientHeight)}let p=null;function h(t,e){p||!c.projectList.length||(p=!0,setTimeout(()=>{p=null},500),!t&&!e&&(u.value==l.WIDE?u.value=l.NARROW:u.value=l.WIDE),u.value=t)}function F(t){t.preventDefault();const{deltaY:e,deltaX:i}=t;Math.abs(e)>Math.abs(i)?e>0?h(l.WIDE,1):h(l.NARROW,-1):i>0?_(1):_(-1)}function N(){const{id:t}=a.value;q.push({name:"blog-gallery",query:{projectId:t}})}function G(t){const{order:e=0}=t;return{left:e*50-75+"%"}}function _(t){if(u.value===l.WIDE)return;const e=c.projectList.length;if(!(p||!e)){if(p=!0,t>0){for(const i of c.projectList)i.order=(i.order-1+e)%e;v.value=(v.value+1)%e}if(t<0){for(const i of c.projectList)i.order=(i.order+1)%e;v.value=(v.value-1+e)%e}setTimeout(()=>{p=null},500)}}function U(t){const{order:e}=t;e!==a.value.order&&(e>a.value.order&&_(1),e<a.value.order&&_(-1))}return(t,e)=>{const i=O("Image"),I=O("a-space");return s(),o("div",{class:W(["project-container",u.value]),ref_key:"viewerRef",ref:A},[c.projectList.length?(s(),o(b,{key:1},[z.value?(s(),o("div",We,[(s(!0),o(b,null,S(c.originList,n=>(s(),o("div",{class:"swiper-item",key:n},[w(i,{src:n.poster,fit:"contain"},null,8,["src"]),r("div",je,[n?(s(),o("footer",Re,[r("div",De,k(n.title),1),w(I,null,{default:T(()=>[r("div",null,[n.link?(s(),o("a",{key:1,target:"_blank",href:n.link},"项目地址",8,be)):(s(),o("span",Ce,"项目地址"))]),r("div",Ee,[n.attachment?(s(),o("a",{key:1,target:"_blank",href:n.attachment}," 项目附件 ",8,Ae)):(s(),o("span",xe,"项目附件"))]),r("div",{class:W(["theme-link",{disabled:!n.gallery}]),onClick:N}," 项目截图 ",2)]),_:2},1024),n.remark?(s(),o("div",Ne,k(n.remark),1)):f("",!0)])):f("",!0)])]))),128))])):(s(),o("div",{key:0,onWheel:F,class:"pc-view-mode"},[r("div",{class:"pc-narrow-wrap",style:E(P.value)},[r("div",ve,[r("div",pe,[(s(!0),o(b,null,S(c.projectList,(n,L)=>(s(),o("div",{class:W(["drawer-item",{[`drawer-item-order-${n.order}`]:!0}]),key:L,onClick:D=>U(n),style:E(G(n))},[w(i,{style:{width:"100%",height:"100%"},src:n.poster,fit:"cover"},null,8,["src"])],14,_e))),128))]),a.value?(s(),o("div",fe,[r("div",null,k(a.value.title),1),r("div",{class:"iconfont",onClick:e[0]||(e[0]=n=>h(l.WIDE,1))},"")])):f("",!0)])],4),a.value?(s(),o("div",{key:0,class:"view-wide-wrap",style:E($.value)},[w(i,{style:{width:"100%",height:"100%"},src:a.value.poster,fit:"contain"},null,8,["src"]),a.value?(s(),o("footer",he,[r("div",me,k(a.value.title),1),w(I,null,{default:T(()=>[r("div",null,[a.value.link?(s(),o("a",{key:1,target:"_blank",href:a.value.link},"项目地址",8,ke)):(s(),o("span",ye,"项目地址"))]),r("div",we,[a.value.attachment?(s(),o("a",{key:1,target:"_blank",href:a.value.attachment}," 项目附件 ",8,Ie)):(s(),o("span",ge,"项目附件"))]),r("div",{class:W(["theme-link",{disabled:!a.value.gallery}]),onClick:N}," 项目截图 ",2)]),_:1}),a.value.remark?(s(),o("div",Le,k(a.value.remark),1)):f("",!0)])):f("",!0)],4)):f("",!0)],32))],64)):(s(),o("div",ce,ue))],2)}}}),Oe=re(Se,[["__scopeId","data-v-4bf427ee"]]);export{Oe as default};
