import{d as b,C as N,c as q,r as w,o as a,e as l,F as B,l as P,f as s,g as _,h as m,m as V,n as c,s as D,k as f,i as E,t as i,D as F,A as M,E as R,_ as S}from"./index-Ct6TisQj.js";const U={class:"gallery"},z={key:0,class:"imgs"},A={class:"footer"},G={class:"theme-color"},L={class:"desc"},O={key:1,class:"empty"},$={class:"left-tools"},H=b({__name:"gallery",setup(J){const v=N().map(e=>({label:e.title,value:e.id})),g="",n=q(()=>{const e=R();return r.value?e.filter(t=>(console.log("sefc",t.projectId,r.value),t.projectId===r.value)):e}),u=D(),d=V(),p=d.query.projectId,j=p?String(p):null,r=w(j);function y(e){u.push({name:"blog-project",query:{id:e.projectId}})}function h(e){e!==d.query.projectId&&u.push({name:"blog-gallery",query:{projectId:e}})}return(e,t)=>{const I=c("a-popconfirm"),k=c("Image"),C=c("a-select");return a(),l("div",U,[n.value.length?(a(),l("div",z,[(a(!0),l(B,null,P(n.value,(o,x)=>(a(),l("div",{class:"item",key:o.url},[_(k,{base:m(g),class:"img",fit:"cover",hideOnClickModal:"",images:n.value,src:o.url,initialIndex:x,preview:"",loop:"",lazy:"",bgColor:"#242629"},{footer:f(()=>[s("div",A,[s("div",{class:"title",onClick:t[0]||(t[0]=E(()=>{},["stop"]))},[s("span",null,i(o.title),1),o.projectId&&o.projectName?(a(),F(I,{key:0,title:"确定跳转到项目页面?","ok-text":"是","cancel-text":"否",onConfirm:K=>y(o)},{default:f(()=>[s("span",G," 【"+i(o.projectName)+"】 ",1)]),_:2},1032,["onConfirm"])):M("",!0)]),s("div",L,i(o.remark),1)])]),_:2},1032,["base","images","src","initialIndex"])]))),128))])):(a(),l("div",O,"图库为空")),s("footer",null,[s("div",$,[_(C,{onChange:h,value:r.value,"onUpdate:value":t[1]||(t[1]=o=>r.value=o),placeholder:"项目过滤",allowClear:!0,options:m(v)},null,8,["value","options"])])])])}}}),T=S(H,[["__scopeId","data-v-55467c11"]]);export{T as default};
