import{k as U,l as V,V as g,i as J,j as w,e as N,m as X,d as Y,n as z,a as C,M as K,A as Q,g as Z,W as $,o as T}from"./OrbitControls-BFpgcgwR.js";import{u as ee}from"./useMessageTip-B9kS1uPb.js";import{d as ne,G as te,r as oe,A as se,o as ae,e as re,_ as ce}from"./index-Cvl347pw.js";const ie=ne({__name:"index",setup(le){te(()=>{L(),E()});const{showThreeJSTip:D}=ee();D();const t={scene:null,camera:null,width:0,height:0,sceneDOM:null,render:null,controls:null,raycaster:null,rotating:!1,startPoint:null,movePoint:null,object:null,normal:null,cubes:[]},M=oe(null);function L(){P(),G(16777215),I(),W(),k({x:0,y:0,z:0},3,40,["#81c837","#fc8d0a","#40a8c6","#fdf5fd","#ec3823","#ded03f"]),H(),F(),O()}function F(){t.raycaster=new U,t.render.domElement.addEventListener("pointerdown",j),t.render.domElement.addEventListener("pointermove",A),t.render.domElement.addEventListener("pointerup",R),t.render.domElement.addEventListener("contextmenu",e=>{e.preventDefault()})}function j(e){e.preventDefault(),_(e);const{object:n,normal:o,rotating:s}=t;!s&&n?(t.startPoint=n.point,t.controls.enabled=!1):t.controls.enabled=!0}function _(e){var c,p;const{width:n,height:o,raycaster:s,scene:r,camera:l}=t,m=e.clientX/n*2-1,u=-(e.clientY/o)*2+1,f=new V(m,u);s.setFromCamera(f,l);const i=s.intersectObjects(r.children);if(i.length){t.object=i[1];const d=(p=(c=i[0])==null?void 0:c.face)==null?void 0:p.normal;d==null||d.normalize(),t.normal=d}else t.object=null,t.normal=null}function A(e){e.preventDefault(),_(e);const{object:n,rotating:o,startPoint:s}=t;if(n&&!o&&s){const{point:u}=n;if(t.movePoint=u,!u.equals(s)){t.rotating=!0;var r=u.sub(s),l=v(r),m=S(n,l);requestAnimationFrame(f=>{q(m,l,f,f,f)})}}}function q(e,n,o,s,r){const m=n.substr(0,1),u=n.substr(-1);let f=null,i=null;s-o>=500&&(s=o+500,t.rotating=!1,t.startPoint=null),u=="x"?f=new g(1,0,0):u=="y"?f=new g(0,1,0):u=="z"&&(f=new g(0,0,1)),m=="-"?i=T.degToRad(90)*(s-r)/500:i=T.degToRad(-90)*(s-r)/500;for(const c of e){const{x:p,y:d,z:x}=c.position;if(u=="x"){const a=Math.cos(i)*d-Math.sin(i)*x,h=Math.cos(i)*x+Math.sin(i)*d;c.position.y=a.toFixed(2),c.position.z=h.toFixed(2)}else if(u=="y"){const a=Math.cos(i)*p+Math.sin(i)*x,h=Math.cos(i)*x-Math.sin(i)*p;c.position.x=a.toFixed(2),c.position.z=h.toFixed(2)}else if(u=="z"){const a=Math.cos(i)*p-Math.sin(i)*d,h=Math.cos(i)*d+Math.sin(i)*p;c.position.x=a.toFixed(2),c.position.y=h.toFixed(2)}c.rotateOnWorldAxis(f,i)}if(s-o<500)requestAnimationFrame(c=>{q(e,n,o,c,s)});else for(const c of e){const{x:p,y:d,z:x}=c.position;c.position.x=Math.round(p),c.position.y=Math.round(d),c.position.z=Math.round(x),t.cubes.push(c)}}function R(e){e.preventDefault(),t.startPoint=null,t.object=null}function S(e,n){const{object:o}=e,s=o.position,{cubes:r}=t,l=[],m=n.substr(-1);return t.cubes=r.filter(u=>{const{position:f}=u;return f[m]==s[m]?(l.push(u),!1):!0}),l}function v(e){const n=new g(1,0,0),o=new g(0,1,0),s=new g(0,0,1),r=n.clone().negate(),l=o.clone().negate(),m=s.clone().negate(),u=e.angleTo(n),f=e.angleTo(o),i=e.angleTo(s),c=e.angleTo(r),p=e.angleTo(l),d=e.angleTo(m),x=Math.min(u,f,i,c,p,d),{normal:a}=t;switch(x){case u:return a.equals(o)?"+z":a.equals(l)?"-z":a.equals(s)?"-y":"+y";case c:return a.equals(o)?"-z":a.equals(l)?"+z":a.equals(s)?"+y":"-y";case f:return a.equals(s)?"+x":a.equals(m)?"-x":a.equals(n)?"-z":"+z";case p:return a.equals(s)?"-x":a.equals(m)?"+x":a.equals(n)?"+z":"-z";case i:return a.equals(o)?"-x":a.equals(l)?"+x":a.equals(n)?"+y":"-y";case d:return a.equals(o)?"+x":a.equals(l)?"-x":a.equals(n)?"-y":"+y"}}function O(){const e=new J(t.camera,t.render.domElement);e.mouseButtons={LEFT:w.RIGHT,MIDDLE:w.MIDDLE,RIGHT:w.LEFT},e.update(),t.controls=e}function P(){t.scene=new N}function k(e,n,o,s){const{x:r,y:l,z:m}=e,u=r-n/2*o,f=l+n/2*o,i=m+n/2*o,c=[];for(const a of s){const h=new X(B(a));h.needsUpdate=!0;const y=new Y({map:h});c.push(y)}for(let a=0;a<n;a++)for(let h=0;h<n*n;h++){const y=new z(o,o,o),b=new C(y,c);b.position.x=u+o/2+h%n*o,b.position.y=f-o/2-Math.floor(h/n)*o,b.position.z=i-o/2-a*o,t.cubes.push(b),t.scene.add(b)}const p=new z(121,121,121),d=new K({vertexColors:!0,opacity:0,transparent:!0}),x=new C(p,d);t.scene.add(x)}function B(e){const n=document.createElement("canvas"),o=256,s=256;n.width=o,n.height=s;const r=n.getContext("2d");return r&&(r.fillStyle="#000000",r.fillRect(0,0,o,s),r.rect(26,26,o-26*2,s-26*2),r.lineJoin="round",r.lineWidth=26,r.fillStyle=e,r.strokeStyle=e,r.stroke(),r.fill()),n}function G(e){const n=new Q(e);t.scene.add(n)}function I(){const e=se(M);t.sceneDOM=e;const n=e.clientWidth,o=e.clientHeight;t.width=n,t.height=o;const s=new Z(60,n/o,1,1e3);t.camera=s,s.position.set(200,200,200),s.up.set(0,1,0);const r=new g(0,0,0);s.lookAt(r)}function W(){const{width:e,height:n,sceneDOM:o,scene:s,camera:r}=t,l=new $({antialias:!0});l.setSize(e,n),l.setClearColor(16777215,1),o.appendChild(l.domElement),l.render(s,r),t.render=l}function H(){const{render:e,scene:n,camera:o}=t;e.clear(),e.render(n,o)}function E(){requestAnimationFrame(E),t.controls.update(),t.render.render(t.scene,t.camera)}return(e,n)=>(ae(),re("div",{ref_key:"sceneBoxRef",ref:M,class:"scene"},null,512))}}),me=ce(ie,[["__scopeId","data-v-5a8392c3"]]);export{me as default};
