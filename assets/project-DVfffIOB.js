import{d as X,u as Y,c as m,G as Q,r as y,H as Z,I as ee,J as te,C as se,o as s,e as o,F as E,f as r,l as O,t as k,A as h,K as A,g as w,h as x,k as V,z as L,m as oe,n as q,y as ne,s as ae,p as ie,q as re,L as le,_ as ce}from"./index-Ct6TisQj.js";const de=g=>(ie("data-v-28a78c5b"),g=g(),re(),g),ue={key:0,class:"status-container"},ve=de(()=>r("div",{class:"empty-status"},"项目列表为空",-1)),pe=[ve],_e={class:"content-wrap"},he={class:"mid-view-window"},fe=["onClick"],me={key:0,class:"scroll-into-tip"},ye={key:0},ke={class:"title"},we={key:0},ge=["href"],Ie={class:"attach"},be={key:0},Le=["href"],We={key:0,class:"desc"},je={key:1,class:"mobile-view-mode"},Re={class:"info"},Ce={key:0},De={class:"title"},Ee={key:0},Ae=["href"],xe={class:"attach"},Ne={key:0},Se=["href"],Te={key:0,class:"desc"},Oe=X({__name:"project",setup(g){ne.config({duration:1,maxCount:1});const z=Y(),N=oe(),B=ae(),W="",M=m(()=>z.getDeviceType),P=m(()=>M.value===le.MOBILE),c=Q({projectList:[],originList:[]}),l={NARROW:"narrow",WIDE:"wide"},u=y(l.NARROW),S=y(null),v=y(0),i=m(()=>c.projectList[v.value]);Z(i,t=>{N.query.id=t.id});const $=y(0),j=y(0),H=m(()=>u.value===l.NARROW?{marginTop:0}:{marginTop:`-${j.value}px`}),U=m(()=>u.value===l.WIDE?{opacity:1,marginTop:0}:{marginTop:`${j.value}px`});ee(()=>{R(),window.addEventListener("resize",R)}),te(()=>{window.removeEventListener("resize",R)}),document.onkeyup=function(t){const{code:e}=t;e==="ArrowLeft"&&_(-1),e==="ArrowRight"&&_(1),e==="ArrowUp"&&f(l.NARROW,-1),e==="ArrowDown"&&f(l.WIDE,1)},F();function F(){const t=se();c.originList=t;const e=t.length,a=[];for(;a.length<5;)for(let d=0;d<e;d++){const D=t[d];a.push({...D})}const I=N.query.id,n=a.findIndex(d=>d.id==Number(I));v.value=n>-1?n:0;const b=a.length;let C=2-v.value;for(let d=0;d<b;d++){const D=a[d];D.order=C%b,C++}c.projectList=a}function R(){const t=S.value;t&&($.value=t.clientWidth,j.value=t.clientHeight)}let p=null;function f(t,e){p||!c.projectList.length||(p=!0,setTimeout(()=>{p=null},500),!t&&!e&&(u.value==l.WIDE?u.value=l.NARROW:u.value=l.WIDE),u.value=t)}function G(t){t.preventDefault();const{deltaY:e,deltaX:a}=t;Math.abs(e)>Math.abs(a)?e>0?f(l.WIDE,1):f(l.NARROW,-1):a>0?_(1):_(-1)}function T(){const{id:t}=i.value;B.push({name:"blog-gallery",query:{projectId:t}})}function J(t){const{order:e=0}=t;return{left:e*50-75+"%"}}function _(t){if(u.value===l.WIDE)return;const e=c.projectList.length;if(!(p||!e)){if(p=!0,t>0){for(const a of c.projectList)a.order=(a.order-1+e)%e;v.value=(v.value+1)%e}if(t<0){for(const a of c.projectList)a.order=(a.order+1)%e;v.value=(v.value-1+e)%e}setTimeout(()=>{p=null},500)}}function K(t){const{order:e}=t;e!==i.value.order&&(e>i.value.order&&_(1),e<i.value.order&&_(-1))}return(t,e)=>{const a=q("Image"),I=q("a-space");return s(),o("div",{class:L(["project-container",u.value]),ref_key:"viewerRef",ref:S},[c.projectList.length?(s(),o(E,{key:1},[P.value?(s(),o("div",je,[(s(!0),o(E,null,O(c.originList,n=>(s(),o("div",{class:"swiper-item",key:n},[w(a,{base:x(W),src:n.poster,fit:"contain"},null,8,["base","src"]),r("div",Re,[n?(s(),o("footer",Ce,[r("div",De,k(n.title),1),w(I,null,{default:V(()=>[r("div",null,[n.link?(s(),o("a",{key:1,target:"_blank",href:n.link},"项目地址",8,Ae)):(s(),o("span",Ee,"项目地址"))]),r("div",xe,[n.attachment?(s(),o("a",{key:1,target:"_blank",href:n.attachment}," 项目附件 ",8,Se)):(s(),o("span",Ne,"项目附件"))]),r("div",{class:L(["theme-link",{disabled:!n.gallery}]),onClick:T}," 项目截图 ",2)]),_:2},1024),n.remark?(s(),o("div",Te,k(n.remark),1)):h("",!0)])):h("",!0)])]))),128))])):(s(),o("div",{key:0,onWheel:G,class:"pc-view-mode"},[r("div",{class:"pc-narrow-wrap",style:A(H.value)},[r("div",_e,[r("div",he,[(s(!0),o(E,null,O(c.projectList,(n,b)=>(s(),o("div",{class:L(["drawer-item",{[`drawer-item-order-${n.order}`]:!0}]),key:b,onClick:C=>K(n),style:A(J(n))},[w(a,{base:x(W),style:{width:"100%",height:"100%"},src:n.poster,fit:"cover"},null,8,["base","src"])],14,fe))),128))]),i.value?(s(),o("div",me,[r("div",null,k(i.value.title),1),r("div",{class:"iconfont",onClick:e[0]||(e[0]=n=>f(l.WIDE,1))},"")])):h("",!0)])],4),i.value?(s(),o("div",{key:0,class:"view-wide-wrap",style:A(U.value)},[w(a,{base:x(W),style:{width:"100%",height:"100%"},src:i.value.poster,fit:"contain"},null,8,["base","src"]),i.value?(s(),o("footer",ye,[r("div",ke,k(i.value.title),1),w(I,null,{default:V(()=>[r("div",null,[i.value.link?(s(),o("a",{key:1,target:"_blank",href:i.value.link},"项目地址",8,ge)):(s(),o("span",we,"项目地址"))]),r("div",Ie,[i.value.attachment?(s(),o("a",{key:1,target:"_blank",href:i.value.attachment}," 项目附件 ",8,Le)):(s(),o("span",be,"项目附件"))]),r("div",{class:L(["theme-link",{disabled:!i.value.gallery}]),onClick:T}," 项目截图 ",2)]),_:1}),i.value.remark?(s(),o("div",We,k(i.value.remark),1)):h("",!0)])):h("",!0)],4)):h("",!0)],32))],64)):(s(),o("div",ue,pe))],2)}}}),qe=ce(Oe,[["__scopeId","data-v-28a78c5b"]]);export{qe as default};
