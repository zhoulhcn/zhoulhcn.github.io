import{d as D,G as V,r as k,c as y,y as C,o as p,e as u,f as i,F as h,l as w,g as b,k as n,n as x,x as o,h as G,p as S,q as A,_ as B}from"./index-Ct6TisQj.js";const M=f=>(S("data-v-2eef97ac"),f=f(),A(),f),F={class:"image"},q={class:"viewer"},z={class:"viewer-wrap"},T=M(()=>i("div",{class:"tips"},[i("p",null,"使用鼠标右键进行标记"),i("p",null,"点击边框可以进入编辑模式，拖动边框可以调整大小，拖动中心点可以移动位置")],-1)),U={class:"preview"},H=D({__name:"index",setup(f){const g=[{title:"title",desc:"desc",url:"http://iph.href.lu/800x540"},{title:"title",desc:"desc",url:"https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"},{title:"title",desc:"desc",url:"https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"},{title:"title",desc:"desc",url:""}],j="",v=V([{title:"title",desc:"desc",url:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",thumbnail:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",marks:[]},{title:"title",desc:"desc",url:"https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",thumbnail:"https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",marks:[{width:220,height:220,left:470,top:230},{height:80,left:746,top:301,width:113}]},{title:"title",desc:"desc",url:"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",thumbnail:"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",marks:[{left:321,top:215,width:68,height:65},{left:87,top:314,width:154,height:121}]},{title:"title",desc:"desc",url:"",thumbnail:"",marks:[]}]),m=k(2),e=y(()=>v[m.value]),I=k(null);C.info("使用鼠标右键标记图片");function R(t){m.value=t}function O(t){const{target:c,detail:s}=t,{left:r,top:a,width:l,height:N}=s,d={...c};d.left=r,d.top=a,d.width=l,d.height=N;const _=e.value.marks.indexOf(c);_>-1&&e.value.marks.splice(_,1,d)}function E(t){const{target:c}=t,s=e.value.marks.indexOf(c);s>-1&&e.value.marks.splice(s,1)}function L(t){const{left:c,top:s,width:r,height:a}=t;e.value.marks||(e.value.marks=[]);const l={id:e.value.marks.length+1+"",left:c,top:s,width:r,height:a};e.value.marks.unshift(l)}return(t,c)=>{const s=x("Image"),r=x("Viewer");return p(),u(h,null,[i("div",F,[(p(),u(h,null,w(g,(a,l)=>i("div",{class:"item",key:a.url},[b(s,{base:G(j),src:a.url,preview:"",images:g,hideOnClickModal:"",fit:"contain",initialIndex:l,class:"image-item"},{footer:n(()=>[o("footer")]),loading:n(()=>[o("LOADING")]),error:n(()=>[o("ERROR")]),_:2},1032,["base","src","initialIndex"])])),64))]),i("div",q,[i("div",z,[b(r,{ref_key:"viewerRef",ref:I,imageList:v,navigation:"",toolbar:"",drawable:"",deleteable:"",scaleMin:.9,onDrawEnd:L,onResize:O,onDelete:E,onSwitch:R,initialIndex:m.value},{loading:n(()=>[o("LOADING")]),error:n(()=>[o("ERROR")]),_:1},8,["imageList","initialIndex"]),T]),i("div",U,[(p(!0),u(h,null,w(e.value.marks,(a,l)=>(p(),u("div",{class:"item",key:l},[b(r,{image:e.value,mark:a,focus:""},{loading:n(()=>[o("LOADING")]),error:n(()=>[o("ERROR")]),_:2},1032,["image","mark"])]))),128))])])],64)}}}),K=B(H,[["__scopeId","data-v-2eef97ac"]]);export{K as default};
