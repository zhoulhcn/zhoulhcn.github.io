var cn=Object.defineProperty;var ln=(n,t,e)=>t in n?cn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Z=(n,t,e)=>ln(n,typeof t!="symbol"?t+"":t,e);import{d as Ht,r as V,n as Qt,v as Xt,o as Ut,e as qt,f as u,w as j,i as F,g as Ot,p as tn,q as nn,_ as Wt,y as dt,H as rn}from"./index-b6W75lZw.js";import{u as an}from"./useMessageTip-bMsxS9np.js";class A{constructor(t,e,o,s=-1,i=0){Z(this,"radius");Z(this,"specular");Z(this,"reflective");Z(this,"center");Z(this,"color");this.radius=e,this.specular=s,this.reflective=i,this.center={x:t[0],y:t[1],z:t[2]},this.color={x:o[0],y:o[1],z:o[2]}}}class z{constructor(t,e,o){Z(this,"ltype");Z(this,"intensity");Z(this,"position");this.ltype=t,this.intensity=e,this.position={x:o?o[0]:0,y:o?o[1]:0,z:o?o[2]:0}}}Z(z,"AMBIENT",0),Z(z,"POINT",1),Z(z,"DIRECTIONAL",2);function _t({x:n,y:t,color:e,CW:o,CH:s,buffer:i}){n=n+o/2,t=-t+s/2;const l=o*4;if(n>=0&&t>=0&&n<o&&t<s){let a=t*l+n*4;i.data[a++]=e.x,i.data[a++]=e.y,i.data[a++]=e.z,i.data[a++]=255}}function mt(n){const t=n.value,e=t.getContext("2d");if(!e)throw new Error("2d context not supported");const o=t.clientWidth,s=t.clientHeight;t.width=o,t.height=s;const i=e.getImageData(0,0,o,s),l=-o/2,a=o/2,r=s/2,f=-s/2;return{buffer:i,CW:o,CH:s,xstart:l,xend:a,ystart:r,yend:f,ctx:e}}function zt(n){return{x:Math.min(255,Math.max(0,n.x)),y:Math.min(255,Math.max(0,n.y)),z:Math.min(255,Math.max(0,n.z))}}function gt({x:n,y:t,z:e=1,CW:o,CH:s}){const l=n*1/o,a=t*1/s;return{x:l,y:a,z:e}}function vt(n,t,e){const o=ut(n,e.center),s=ht(t,t),i=2*ht(o,t),l=ht(o,o)-e.radius*e.radius,a=i*i-4*s*l;if(a<0)return 1/0;const r=(-i+Math.sqrt(a))/(2*s),f=(-i-Math.sqrt(a))/(2*s);return Math.min(r,f)}function ut(n,t){return{x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}}function ht(n,t){return n.x*t.x+n.y*t.y+n.z*t.z}function bt(n,t,e,o,s=-1,i){let l=0;const a=rt(t);for(const r of e)if(r.ltype==z.AMBIENT)l+=r.intensity;else{let f;r.ltype==z.POINT?f=ut(r.position,n):f=r.position;const y=r.ltype==z.POINT?1:1/0;if(fn(n,f,0,y,i))continue;const g=ht(t,f);if(g>0&&(l+=r.intensity*g/(a*rt(f))),s!=-1&&o){const b=rt(o),q=Yt(f,t),L=ht(q,o);L>0&&(l+=r.intensity*Math.pow(L/(rt(q)*b),s))}}return l}function fn(n,t,e,o,s){if(!s)return null;let i=1/0,l=null;for(const a of s){const r=vt(n,t,a);r<i&&r>e&&r<o&&(i=r,l=a)}return l}function rt(n){return Math.sqrt(ht(n,n))}function B(n,t){return{x:n*t.x,y:n*t.y,z:n*t.z}}function yt(n,t){return{x:n.x+t.x,y:n.y+t.y,z:n.z+t.z}}function Yt(n,t){return ut(B(2*ht(n,t),t),n)}function un(n,t,e,o,s){let i=1/0,l=null;for(const a of s){const r=vt(n,t,a);r<i&&r>e&&r<o&&(i=r,l=a)}return l===null?{x:255,y:255,z:255}:l.color}function dn(n,t,e,o,s,i){let l=1/0,a=null;for(const y of s){const v=vt(n,t,y);v<l&&v>e&&v<o&&(l=v,a=y)}if(a===null)return{x:255,y:255,z:255};const r=yt(n,B(l,t));let f=ut(r,a.center);return f=B(1/rt(f),f),B(bt(r,f,i),a.color)}function hn(n,t,e,o,s,i){let l=1/0,a=null;for(const m of s){const g=vt(n,t,m);g<l&&g>e&&g<o&&(l=g,a=m)}if(a===null)return{x:255,y:255,z:255};const r=yt(n,B(l,t));let f=ut(r,a.center);f=B(1/rt(f),f);const y=B(-1,t),v=bt(r,f,i,y,a.specular);return B(v,a.color)}function yn(n,t,e,o,s,i){let l=1/0,a=null;for(const m of s){const g=vt(n,t,m);g<l&&g>e&&g<o&&(l=g,a=m)}if(a===null)return{x:255,y:255,z:255};const r=yt(n,B(l,t));let f=ut(r,a.center);f=B(1/rt(f),f);const y=B(-1,t),v=bt(r,f,i,y,a.specular,s);return B(v,a.color)}function Zt(n,t,e,o,s,i,l=3){let a=1/0,r=null;for(const L of s){const R=vt(n,t,L);R<a&&R>e&&R<o&&(a=R,r=L)}if(r===null)return{x:0,y:0,z:0};const f=yt(n,B(a,t));let y=ut(f,r.center);y=B(1/rt(y),y);const v=B(-1,t),m=bt(f,y,i,v,r.specular,s),g=B(m,r.color);if(r.reflective<=0||l<=0)return g;const b=Yt(v,y),q=Zt(f,b,.001,1/0,s,i,l-1);return yt(B(1-r.reflective,g),B(r.reflective,q))}function xn(n,t,e,o,s,i,l=3){let a=1/0,r=null;for(const L of s){const R=vt(n,t,L);R<a&&R>e&&R<o&&(a=R,r=L)}if(r===null)return{x:0,y:0,z:0};const f=yt(n,B(a,t));let y=ut(f,r.center);y=B(1/rt(y),y);const v=B(-1,t),m=bt(f,y,i,v,r.specular,s),g=B(m,r.color);if(r.reflective<=0||l<=0)return g;const b=Yt(v,y),q=Zt(f,b,.001,1/0,s,i,l-1);return yt(B(1-r.reflective,g),B(r.reflective,q))}const wt=n=>(tn("data-v-b06056cf"),n=n(),nn(),n),vn=wt(()=>u("header",null,"光线追踪",-1)),wn={class:"example"},_n={class:"item"},mn=wt(()=>u("div",{class:"desc"},"版本1：发出射线，获取到相交物体的颜色后返回，会获得纯色的物体",-1)),gn={class:"canvas"},Rn={class:"item"},kn=wt(()=>u("div",{class:"desc"},"版本2：添加光源，此时球体不再是纯色，注意环境光对场景的影响",-1)),pn={class:"canvas"},In={class:"lt02-tools"},zn={class:"item"},Cn=wt(()=>u("div",{class:"desc"},"版本3：镜面反射效果",-1)),Dn={class:"canvas"},Sn={class:"item"},bn=wt(()=>u("div",{class:"desc"},"版本4：添加阴影效果",-1)),Mn={class:"canvas"},Tn={class:"item"},Ln=wt(()=>u("div",{class:"desc"},"版本5：镜中镜效果",-1)),$n={class:"canvas"},On={class:"item"},Nn=wt(()=>u("div",{class:"desc"},"版本6：改变相机位置和朝向",-1)),En={class:"canvas"},Gn=Ht({__name:"index",setup(n){const t=V(null);function e(){const R={x:0,y:0,z:0},{buffer:w,CW:T,CH:p,xstart:C,xend:P,ystart:H,yend:U,ctx:Q}=mt(t),J=new A([-2,0,4],1,[0,255,0]),K=new A([0,-1,3],1,[255,0,0]),$=new A([2,0,4],1,[0,0,255]),W=new A([0,-5001,0],5e3,[255,255,0]),tt=[J,K,$,W];D();function D(){for(let I=H;I>=U;I--)for(let M=C;M<=P;M++){const k=gt({x:M,y:I,z:1,CW:T,CH:p}),d=un(R,k,1,1/0,tt);_t({x:M,y:I,color:d,CW:T,CH:p,buffer:w})}Q.putImageData(w,0,0)}}const o=[{label:"点光源",value:"light2"},{label:"环境光",value:"light1"},{label:"平行光",value:"light3"}],s=V([]),i=V(null);function l(R){s.value=R,a()}function a(){const R={x:0,y:0,z:0},{buffer:w,CW:T,CH:p,xstart:C,xend:P,ystart:H,yend:U,ctx:Q}=mt(i),J=new A([-2,0,4],1,[0,255,0]),K=new A([0,-1,3],1,[255,0,0]),$=new A([2,0,4],1,[0,0,255]),W=new A([0,-5001,0],5e3,[255,255,0]),tt=[J,K,$,W],D={light1:new z(z.AMBIENT,.2),light2:new z(z.POINT,.6,[2,0,2]),light3:new z(z.DIRECTIONAL,.2,[1,4,4])},I=s.value.map(k=>D[k]);M();function M(){for(let k=H;k>=U;k--)for(let d=C;d<=P;d++){const c=gt({x:d,y:k,z:1,CW:T,CH:p}),h=dn(R,c,1,1/0,tt,I);_t({x:d,y:k,color:zt(h),CW:T,CH:p,buffer:w})}Q.putImageData(w,0,0)}}const r=V(null);function f(){const R={x:0,y:0,z:0},{buffer:w,CW:T,CH:p,xstart:C,xend:P,ystart:H,yend:U,ctx:Q}=mt(r),J=new A([-2,0,4],1,[0,255,0],10),K=new A([0,-1,3],1,[255,0,0],500),$=new A([2,0,4],1,[0,0,255],500),W=new A([0,-5001,0],5e3,[255,255,0],1e3),tt=[J,K,$,W],D=[new z(z.AMBIENT,.2),new z(z.POINT,.6,[2,0,2]),new z(z.DIRECTIONAL,.2,[1,4,4])];I();function I(){for(let M=H;M>=U;M--)for(let k=C;k<=P;k++){const d=gt({x:k,y:M,z:1,CW:T,CH:p}),c=hn(R,d,1,1/0,tt,D);_t({x:k,y:M,color:zt(c),CW:T,CH:p,buffer:w})}Q.putImageData(w,0,0)}}const y=V(null);function v(){const R={x:0,y:0,z:0},{buffer:w,CW:T,CH:p,xstart:C,xend:P,ystart:H,yend:U,ctx:Q}=mt(y),J=new A([-2,0,4],1,[0,255,0],10),K=new A([0,-1,3],1,[255,0,0],500),$=new A([2,0,4],1,[0,0,255],500),W=new A([0,-5001,0],5e3,[255,255,0],1e3),tt=[J,K,$,W],D=[new z(z.AMBIENT,.2),new z(z.POINT,.6,[2,0,2]),new z(z.DIRECTIONAL,.2,[1,4,4])];I();function I(){for(let M=H;M>=U;M--)for(let k=C;k<=P;k++){const d=gt({x:k,y:M,z:1,CW:T,CH:p}),c=yn(R,d,1,1/0,tt,D);_t({x:k,y:M,color:zt(c),CW:T,CH:p,buffer:w})}Q.putImageData(w,0,0)}}const m=V(null);function g(){const R={x:0,y:0,z:0},{buffer:w,CW:T,CH:p,xstart:C,xend:P,ystart:H,yend:U,ctx:Q}=mt(m),J=new A([-2,0,4],1,[0,255,0],10,.4),K=new A([0,-1,3],1,[255,0,0],500,.2),$=new A([2,0,4],1,[0,0,255],500,.3),W=new A([0,-5001,0],5e3,[255,255,0],1e3,.5),tt=[J,K,$,W],D=[new z(z.AMBIENT,.2),new z(z.POINT,.6,[2,0,2]),new z(z.DIRECTIONAL,.2,[1,4,4])];I();function I(){for(let M=H;M>=U;M--)for(let k=C;k<=P;k++){const d=gt({x:k,y:M,z:1,CW:T,CH:p}),c=Zt(R,d,1,1/0,tt,D,3);_t({x:k,y:M,color:zt(c),CW:T,CH:p,buffer:w})}Q.putImageData(w,0,0)}}const b=V(null);function q(){const R={x:3,y:0,z:1},{buffer:w,CW:T,CH:p,xstart:C,xend:P,ystart:H,yend:U,ctx:Q}=mt(b),J=new A([-2,0,4],1,[0,255,0],10,.4),K=new A([0,-1,3],1,[255,0,0],500,.2),$=new A([2,0,4],1,[0,0,255],500,.3),W=new A([0,-5001,0],5e3,[255,255,0],1e3,.5),tt=[J,K,$,W],D=[new z(z.AMBIENT,.2),new z(z.POINT,.6,[2,0,2]),new z(z.DIRECTIONAL,.2,[1,4,4])];M();function I(k,d){const c={0:"x",1:"y",2:"z"},h={x:0,y:0,z:0};for(let x=0;x<3;x++)for(let _=0;_<3;_++)h[c[x]]+=d[c[_]]*k[x][_];return h}function M(){const k=[[.7071,0,-.7071],[0,1,0],[.7071,0,.7071]];for(let d=H;d>=U;d--)for(let c=C;c<=P;c++){let h=gt({x:c,y:d,z:1,CW:T,CH:p});h=I(k,h);const x=xn(R,h,1,1/0,tt,D,3);_t({x:c,y:d,color:zt(x),CW:T,CH:p,buffer:w})}Q.putImageData(w,0,0)}}function L(R){const w=new Date().getTime()+".png",T=R.toDataURL("image/png");var p=document.createElement("a");p.download=w,p.href=T,p.click()}return(R,w)=>{const T=Qt("a-checkbox-group"),p=Xt("dbtap");return Ut(),qt("div",null,[vn,u("div",wn,[u("div",_n,[mn,u("div",gn,[j(u("canvas",{ref_key:"LT01Ref",ref:t,onDblclickOnce:e,onClick:w[0]||(w[0]=F(C=>L(t.value),["shift"]))},null,544),[[p,e]])])]),u("div",Rn,[kn,u("div",pn,[u("div",In,[Ot(T,{onChange:l,value:s.value,options:o},null,8,["value"])]),j(u("canvas",{ref_key:"LT02Ref",ref:i,onDblclickOnce:a,onClick:w[1]||(w[1]=F(C=>L(i.value),["shift"]))},null,544),[[p,a]])])]),u("div",zn,[Cn,u("div",Dn,[j(u("canvas",{ref_key:"LT03Ref",ref:r,onDblclickOnce:f,onClick:w[2]||(w[2]=F(C=>L(r.value),["shift"]))},null,544),[[p,f]])])]),u("div",Sn,[bn,u("div",Mn,[j(u("canvas",{ref_key:"LT04Ref",ref:y,onDblclickOnce:v,onClick:w[3]||(w[3]=F(C=>L(y.value),["shift"]))},null,544),[[p,v]])])]),u("div",Tn,[Ln,u("div",$n,[j(u("canvas",{ref_key:"LT05Ref",ref:m,onDblclickOnce:g,onClick:w[4]||(w[4]=F(C=>L(m.value),["shift"]))},null,544),[[p,g]])])]),u("div",On,[Nn,u("div",En,[j(u("canvas",{ref_key:"LT06Ref",ref:b,onDblclickOnce:q,onClick:w[5]||(w[5]=F(C=>L(b.value),["shift"]))},null,544),[[p,q]])])])])])}}}),An=Wt(Gn,[["__scopeId","data-v-b06056cf"]]);class et{constructor(t,e,o={x:0,y:0,z:0,h:1}){Z(this,"x");Z(this,"y");Z(this,"color");const[s,i]=t;this.x=s/300*e/2,this.y=i/300*e/2,this.color=o}}class At{constructor(t,e,o={x:0,y:0,z:0,h:1}){Z(this,"x");Z(this,"y");Z(this,"color");const[s,i]=t;this.x=s,this.y=i,this.color=o}}class S{constructor(t,e,o){this.x=t,this.y=e,this.z=o,this.x=t,this.y=e,this.z=o}}class Rt{constructor(t,e,o,s=1){this.x=t,this.y=e,this.z=o,this.h=s,this.x=t,this.y=e,this.z=o,this.h=s}}class ct{constructor(t,e,o,s){this.v0=t,this.v1=e,this.v2=o,this.color=s,this.v0=t,this.v1=e,this.v2=o,this.color=s}}class Ct{constructor(t,e,o,s=0){this.vertexes=t,this.triangles=e,this.boundsCenter=o,this.boundsRadius=s,this.vertexes=t,this.triangles=e,this.boundsCenter=o,this.boundsRadius=s}}class at{constructor(t,e,o=$t,s=1){Z(this,"transform");this.model=t,this.position=e,this.orientation=o,this.scale=s,this.model=t,this.position=e,this.orientation=o,this.scale=s,this.transform=ft(Nt(this.position),ft(o,Wn(this.scale)))}}class Bt{constructor(t,e){Z(this,"clippingPlanes");this.position=t,this.orientation=e,this.position=t,this.orientation=e,this.clippingPlanes=[]}}class It{constructor(t){Z(this,"data");this.data=t}}class Pt{constructor(t,e,o,s=1){this.x=t,this.y=e,this.z=o,this.w=s,this.x=t,this.y=e,this.z=o,this.w=s}}class it{constructor(t,e){this.normal=t,this.distance=e,this.normal=t,this.distance=e}}function lt(n){const t=n.value,e=t.getContext("2d");if(!e)throw new Error("2d context not supported");const o=t.clientWidth,s=t.clientHeight;t.width=o,t.height=s;const i=e.getImageData(0,0,o,s),l=-o/2,a=o/2,r=s/2,f=-s/2;for(let y=0;y<i.data.length;y+=4)i.data[y]=255,i.data[y+1]=255,i.data[y+2]=255,i.data[y+3]=255;return{buffer:i,CW:o,CH:s,xstart:l,xend:a,ystart:r,yend:f,ctx:e}}function xt({x:n,y:t,color:e,CW:o,CH:s,buffer:i}){n=Math.floor(o/2+n),t=Math.floor(s/2-t);const l=o*4;if(n>=0&&t>=0&&n<o&&t<s){let a=t*l+n*4;i.data[a++]=e.x,i.data[a++]=e.y,i.data[a++]=e.z,i.data[a++]=255*(e.h??1)}}function E(n,t,e,o){if(n==e)return[t];const s=[],i=(o-t)/(e-n);let l=t;for(let a=n;a<=e;a++)s.push(l),l+=i;return s}function en(n,t,e,o,s,i,l){X(n,t,o,s,i,l),X(t,e,o,s,i,l),X(n,e,o,s,i,l)}function Jt(n,t,e,o,s,i){const l=E(n,t,e,o),a=E(e,o,s,i),r=E(n,t,s,i);l.pop();const f=l.concat(a);return[r,f]}function Bn(n,t,e,o,s,i,l){if(t.y<n.y){const b=n;n=t,t=b}if(e.y<n.y){const b=n;n=e,e=b}if(e.y<t.y){const b=t;t=e,e=b}const a=E(n.y,n.x,t.y,t.x),r=E(t.y,t.x,e.y,e.x),f=E(n.y,n.x,e.y,e.x);a.pop();const y=a.concat(r);let v,m,g=Math.floor(f.length/2);f[g]<y[g]?(v=f,m=y):(v=y,m=f);for(let b=n.y;b<=e.y;b++){const q=v[b-n.y],L=m[b-n.y];for(let R=q;R<=L;R++)xt({x:R,y:b,color:o,CW:s,CH:i,buffer:l})}}function Pn(n,t,e,o,s,i,l,{v0:a,v1:r,v2:f},y,v){if(t.y<n.y){const C=n;n=t,t=C}if(e.y<n.y){const C=n;n=e,e=C}if(e.y<t.y){const C=t;t=e,e=C}const[m,g]=Jt(n.y,n.x,t.y,t.x,e.y,e.x),[b,q]=Jt(n.y,1/a.z,t.y,1/r.z,e.y,1/f.z);let L,R,w,T,p=Math.floor(m.length/2);m[p]<g[p]?(L=m,R=g,w=b,T=q):(L=g,R=m,w=q,T=b);for(let C=n.y;C<=e.y;C++){const P=C-n.y,H=L[P]|0,U=R[P]|0,[Q,J]=[w[P],T[P]],K=E(H,Q,U,J);for(let $=H;$<=U;$++)v==="depthcheck"?te($,C,K[$-H],s,i,y)&&xt({x:$,y:C,color:o,CW:s,CH:i,buffer:l}):xt({x:$,y:C,color:o,CW:s,CH:i,buffer:l})}}function Vn(n,t,e,o,s,i){if(t.y<n.y){const D=n;n=t,t=D}if(e.y<n.y){const D=n;n=e,e=D}if(e.y<t.y){const D=t;t=e,e=D}const l=E(n.y,n.x,t.y,t.x),a=E(n.y,n.color.x,t.y,t.color.x),r=E(n.y,n.color.y,t.y,t.color.y),f=E(n.y,n.color.z,t.y,t.color.z),y=E(n.y,n.color.h,t.y,t.color.h),v=a.map((D,I)=>({x:D,y:r[I],z:f[I],h:y[I]})),m=E(t.y,t.x,e.y,e.x),g=E(t.y,t.color.x,e.y,e.color.x),b=E(t.y,t.color.y,e.y,e.color.y),q=E(t.y,t.color.z,e.y,e.color.z),L=E(t.y,t.color.h,e.y,e.color.h),R=g.map((D,I)=>({x:D,y:b[I],z:q[I],h:L[I]})),w=E(n.y,n.x,e.y,e.x),T=E(n.y,n.color.x,e.y,e.color.x),p=E(n.y,n.color.y,e.y,e.color.y),C=E(n.y,n.color.z,e.y,e.color.z),P=E(n.y,n.color.h,e.y,e.color.h),H=T.map((D,I)=>({x:D,y:p[I],z:C[I],h:P[I]}));l.pop();const U=l.concat(m);v.pop();const Q=v.concat(R);let J,K,$,W;const tt=Math.floor(w.length/2);w[tt]<U[tt]?(J=w,K=U,$=H,W=Q):(J=U,K=w,$=Q,W=H);for(let D=n.y;D<e.y-1;D++){const I=J[D-n.y]|0,M=K[D-n.y]|0,k=Math.floor(D-n.y),d=E(I,$[k].x,M,W[k].x),c=E(I,$[k].y,M,W[k].y),h=E(I,$[k].z,M,W[k].z),x=E(I,$[k].h,M,W[k].h),_=d.map((O,G)=>({x:O,y:c[G],z:h[G],h:x[G]}));for(let O=I;O<=M;O++){const G=O-I;xt({x:O,y:D,color:_[G],CW:o,CH:s,buffer:i})}}}function Kt(n,t,e,o,s,i){const l=n.x,a=n.y,r=t.x,y=(t.y-a)/(r-l);let v=a;for(let m=l;m<=r;m++)xt({x:m,y:v,color:e,CW:o,CH:s,buffer:i}),v+=y}function X(n,t,e,o,s,i){const l=t.x-n.x,a=t.y-n.y;if(Math.abs(l)>Math.abs(a)){if(l<0){const f=n;n=t,t=f}const r=E(n.x,n.y,t.x,t.y);for(let f=n.x;f<=t.x;f++)xt({x:f,y:r[f-n.x|0],color:e,CW:o,CH:s,buffer:i})}else{if(a<0){const f=n;n=t,t=f}const r=E(n.y,n.x,t.y,t.x);for(let f=n.y;f<=t.y;f++)xt({x:r[f-n.y|0],y:f,color:e,CW:o,CH:s,buffer:i})}}function N(n,t,e){const s=n.x*1/n.z,i=n.y*1/n.z;return Hn({x:s,y:i},t,e)}function Hn(n,t,e){return{x:Math.round(n.x*t/1/2),y:Math.round(n.y*e/1/2)}}function on(n,t,e,o,s){const i=[];for(let l=0;l<n.length;l++){const a=N(n[l],e,o);i.push(a)}for(let l=0;l<t.length;l++)jt(t[l],i,e,o,s)}function Un(n,t,e,o){const s=[],i=n.model;for(let l=0;l<i.vertexes.length;l++)s.push(N(St(n.position,i.vertexes[l]),t,e));for(let l=0;l<i.triangles.length;l++)jt(i.triangles[l],s,t,e,o)}function qn(n,t,e,o,s){const i=[];for(let l=0;l<n.vertexes.length;l++){const a=n.vertexes[l],r=new Pt(a.x,a.y,a.z,1);i.push(N(Vt(t,r),e,o))}for(let l=0;l<n.triangles.length;l++)jt(n.triangles[l],i,e,o,s)}function jt(n,t,e,o,s){const i=t[n.v0],l=t[n.v1],a=t[n.v2];en(new At([i.x,i.y],e),new At([l.x,l.y],e),new At([a.x,a.y],e),n.color,e,o,s)}const $t=new It([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]);function St(n,t){return new S(n.x+t.x,n.y+t.y,n.z+t.z)}function kt(n){const t=Math.cos(n*Math.PI/180),e=Math.sin(n*Math.PI/180);return new It([[t,0,-e,0],[0,1,0,0],[e,0,t,0],[0,0,0,1]])}function Ft(n){const t=new It([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);for(let e=0;e<4;e++)for(let o=0;o<4;o++)t.data[e][o]=n.data[o][e];return t}function ft(n,t){const e=new It([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);for(let o=0;o<4;o++)for(let s=0;s<4;s++)for(let i=0;i<4;i++)e.data[o][s]+=n.data[o][i]*t.data[i][s];return e}function Vt(n,t){const e=[0,0,0,0],o=[t.x,t.y,t.z,t.w];for(let s=0;s<4;s++)for(let i=0;i<4;i++)e[s]+=n.data[s][i]*o[i];return{x:e[0],y:e[1],z:e[2],w:e[3]}}function Nt(n){return new It([[1,0,0,n.x],[0,1,0,n.y],[0,0,1,n.z],[0,0,0,1]])}function Wn(n){return new It([[n,0,0,0],[0,n,0,0],[0,0,n,0],[0,0,0,1]])}function pt(n,t){return{x:n*t.x,y:n*t.y,z:n*t.z}}function Dt(n,t){return n.x*t.x+n.y*t.y+n.z*t.z}function Yn(n,t,e,o,s){const i=Ft(n.orientation),l=Nt(pt(-1,n.position)),a=ft(i,l);for(let r=0;r<t.length;r++){const f=ft(a,t[r].transform);qn(t[r].model,f,e,o,s)}}function Zn(n,t,e,o,s){const i=Ft(n.orientation),l=Nt(pt(-1,n.position)),a=ft(i,l);let r="";for(let f=0;f<t.length;f++){const y=ft(a,t[f].transform),{clipped:v,newTriangleNumber:m}=sn(n.clippingPlanes,t[f].model,y),g=t[f].model.triangles.length;r+=`
      模型${f+1}: 三角形数: ${g} -> ${m}
    `,v&&on(v.vertexes,v.triangles,e,o,s)}dt.info({content:r,duration:10})}function sn(n,t,e){const o=t.boundsCenter,s=Vt(e,new Pt(o.x,o.y,o.z,1));for(let r=0;r<n.length;r++)if(Dt(n[r].normal,s)+n[r].distance<-t.boundsRadius)return{clipped:null,newTriangleNumber:0};const i=[];for(let r=0;r<t.vertexes.length;r++){const f=t.vertexes[r];i.push(Vt(e,new Pt(f.x,f.y,f.z,1)))}let l=t.triangles.slice(),a=l.length;for(let r=0;r<n.length;r++){const f=[];for(let y=0;y<l.length;y++)a+=jn(l[y],n[r],f,i);l=f}return{clipped:new Ct(i,l,s,t.boundsRadius),newTriangleNumber:a}}function jn(n,t,e,o){const s=o[n.v0],i=o[n.v1],l=o[n.v2],a=Dt(t.normal,s)+t.distance,r=Dt(t.normal,i)+t.distance,f=Dt(t.normal,l)+t.distance,y=a>0,v=r>0,m=f>0,g=Number(y)+Number(v)+Number(m);return g==0?-1:g==3||g==1?(e.push(n),0):g==2?(e.push(n),1):0}function Fn(n,t,e,o,s,i){const l=Ft(n.orientation),a=Nt(pt(-1,n.position)),r=ft(l,a),f=new Array(o*s).fill(void 0);for(let y=0;y<t.length;y++){const v=ft(r,t[y].transform),{clipped:m}=sn(n.clippingPlanes,t[y].model,v);m&&Jn(m,e,o,s,i,f)}}function Jn(n,t,e,o,s,i){const l=n.vertexes,a=n.triangles,r=[];for(let f=0;f<l.length;f++){const y=N(l[f],e,o);r.push(y)}for(let f=0;f<a.length;f++)Kn(a[f],l,r,t,e,o,s,i)}function Kn(n,t,e,o,s,i,l,a){const r=e[n.v0],f=e[n.v1],y=e[n.v2],v=t[n.v0],m=t[n.v1],g=t[n.v2];if(o==="backface"){const b=Xn(v,m,g),q=pt(-1/3,St(St(v,m),g));if(Dt(b,q)<0)return}Pn(r,f,y,n.color,s,i,l,{v0:v,v1:m,v2:g},a,o)}function Qn(n,t){return new S(n.y*t.z-n.z*t.y,n.z*t.x-n.x*t.z,n.x*t.y-n.y*t.x)}function Xn(n,t,e){const o=St(t,pt(-1,n)),s=St(e,pt(-1,n));return Qn(o,s)}function te(n,t,e,o,s,i){if(n=o/2+(n|0),t=s/2-(t|0)-1,n<0||n>=o||t<0||t>=s)return!1;const l=n+o*t;return i[l]===void 0||i[l]<e?(i[l]=e,!0):!1}const ot=n=>(tn("data-v-a6f05ee9"),n=n(),nn(),n),ne=ot(()=>u("header",null,"光栅化",-1)),ee={class:"example"},oe={class:"item"},se=ot(()=>u("div",{class:"desc"},"根据插值函数绘制直线版本1",-1)),ce={class:"canvas"},ie={class:"item"},le=ot(()=>u("div",{class:"desc"},"根据插值函数绘制直线版本2，增加了斜率判断和直线判断",-1)),re={class:"canvas"},ae={class:"item"},fe=ot(()=>u("div",{class:"desc"},"绘制绘制纯色三角形，用横向插值线段去填充三角形",-1)),ue={class:"canvas"},de={class:"item"},he=ot(()=>u("div",{class:"desc"},"绘制渐变色三角形，在线段插值的基础上，颜色也进行插值",-1)),ye={class:"canvas"},xe={class:"item"},ve=ot(()=>u("div",{class:"desc"},"透视投影：通过顶点列表。在二维画布上绘制立方体的12条边",-1)),we={class:"canvas"},_e={class:"item"},me=ot(()=>u("div",{class:"desc"},"透视投影：通过顶点列表+三角形列表。在二维画布上绘制立方体的三角形线框图",-1)),ge={class:"canvas"},Re={class:"item"},ke=ot(()=>u("div",{class:"desc"},"模型的复制：通过一个模型+多个位置来描述多个模型，以节约内存",-1)),pe={class:"canvas"},Ie={class:"item"},ze=ot(()=>u("div",{class:"desc"},[u("p",null,"变换包括平移、旋转、缩放"),u("p",null,"大类包括模型变换、相机变换和投影变换"),u("p",null,"使用矩阵来简化、优化和统一所有的投影")],-1)),Ce={class:"canvas"},De={class:"item"},Se=ot(()=>u("div",{class:"desc"},"裁剪：通过舍弃或者分割物体来节约计算资源",-1)),be={class:"canvas"},Me={class:"item to-fix"},Te=ot(()=>u("div",{class:"desc"},[u("p",null,"深度检测：用深度缓冲区来判断距离相机更近的像素"),u("p",null,"背面剔除：直接跳过完全不可见的三角")],-1)),Le={class:"canvas"},$e={class:"lt10-tools"},Oe={class:"item working"},Ne=ot(()=>u("div",{class:"desc"},"扁平着色：计算三角面某个点的光照颜色，以此填充整个三角面",-1)),Ee={class:"canvas"},Ge={class:"item working"},Ae=ot(()=>u("div",{class:"desc"},"高洛德着色：计算三个点的光照颜色，然后进行插值",-1)),Be={class:"canvas"},Pe={class:"item working"},Ve=ot(()=>u("div",{class:"desc"},"冯式着色：根据三个点的法向量，插值得到所有点的法向量，然后计算每个点的光照颜色",-1)),He={class:"canvas"},Ue={class:"item working"},qe=ot(()=>u("div",{class:"desc"},"对于球类物体，法向量由开发人员定义然后传入",-1)),We={class:"canvas"},Ye={class:"item working"},Ze=ot(()=>u("div",{class:"desc"},"纹理贴图，每个顶点对应一个纹理坐标，根据纹理坐标得到纹素",-1)),je={class:"canvas"},Fe=Ht({__name:"index",setup(n){function t(d){const c=new Date().getTime()+".png",h=d.toDataURL("image/png");var x=document.createElement("a");x.download=c,x.href=h,x.click()}const e={x:0,y:0,z:0};function o(d){const c=[new S(d,d,d),new S(-d,d,d),new S(-d,-d,d),new S(d,-d,d),new S(d,d,-d),new S(-d,d,-d),new S(-d,-d,-d),new S(d,-d,-d)],h=new Rt(255,0,0),x=new Rt(0,255,0),_=new Rt(0,0,255),O=new Rt(255,255,0),G=new Rt(255,0,255),st=new Rt(0,255,255),nt=[new ct(0,1,2,h),new ct(0,2,3,h),new ct(1,5,6,O),new ct(1,6,2,O),new ct(2,6,7,st),new ct(2,7,3,st),new ct(4,0,3,x),new ct(4,1,0,G),new ct(4,3,7,x),new ct(4,5,1,G),new ct(5,4,7,_),new ct(5,7,6,_)];return{vertexes:c,triangles:nt}}const s=V(null);function i(){const{buffer:d,CW:c,CH:h,ctx:x}=lt(s);Kt(new et([-200,-100],c),new et([240,120],c),e,c,h,d),Kt(new et([-50,-200],c),new et([60,240],c),e,c,h,d),x.putImageData(d,0,0)}const l=V(null);function a(){const{buffer:d,CW:c,CH:h,ctx:x}=lt(l);X(new et([-200,-100],c),new et([240,120],c),e,c,h,d),X(new et([-50,-200],c),new et([60,240],c),e,c,h,d),X(new et([-50,0],c),new et([50,0],c),e,c,h,d),x.putImageData(d,0,0)}const r=V(null);function f(){const{buffer:d,CW:c,CH:h,ctx:x}=lt(r),_=new et([-200,-250],c),O=new et([200,50],c),G=new et([20,250],c);en(_,O,G,{x:0,y:0,z:0},c,h,d),Bn(_,O,G,{x:0,y:255,z:0},c,h,d),x.putImageData(d,0,0)}const y=V(null);function v(){const{buffer:d,CW:c,CH:h,ctx:x}=lt(y),_=new et([-200,-250],c,{x:233,y:255,z:0,h:.3}),O=new et([200,50],c,{x:0,y:255,z:222,h:.5}),G=new et([20,250],c,{x:0,y:255,z:0,h:1});Vn(_,O,G,c,h,d),x.putImageData(d,0,0)}const m=V(null);function g(){const{buffer:d,CW:c,CH:h,ctx:x}=lt(m),_={x:-4,y:-1.5,z:6},O={x:-4,y:.5,z:6},G={x:-2,y:.5,z:6},st={x:-2,y:-1.5,z:6},nt={x:-4,y:-1.5,z:8},Y={x:-4,y:.5,z:8},Et={x:-2,y:.5,z:8},Gt={x:-2,y:-1.5,z:8},Mt={x:255,y:0,z:0},Tt={x:0,y:255,z:0},Lt={x:0,y:0,z:255};X(N(_,c,h),N(O,c,h),Lt,c,h,d),X(N(O,c,h),N(G,c,h),Lt,c,h,d),X(N(G,c,h),N(st,c,h),Lt,c,h,d),X(N(st,c,h),N(_,c,h),Lt,c,h,d),X(N(nt,c,h),N(Y,c,h),Mt,c,h,d),X(N(Y,c,h),N(Et,c,h),Mt,c,h,d),X(N(Et,c,h),N(Gt,c,h),Mt,c,h,d),X(N(Gt,c,h),N(nt,c,h),Mt,c,h,d),X(N(_,c,h),N(nt,c,h),Tt,c,h,d),X(N(O,c,h),N(Y,c,h),Tt,c,h,d),X(N(G,c,h),N(Et,c,h),Tt,c,h,d),X(N(st,c,h),N(Gt,c,h),Tt,c,h,d),x.putImageData(d,0,0)}const b=V(null);function q(){const{vertexes:d,triangles:c}=o(2);for(var h=0;h<d.length;h++)d[h].x-=1.5,d[h].z+=7;const{buffer:x,CW:_,CH:O,ctx:G}=lt(b);on(d,c,_,O,x),G.putImageData(x,0,0)}const L=V(null);function R(){const{vertexes:d,triangles:c}=o(2),h=new Ct(d,c),{buffer:x,CW:_,CH:O,ctx:G}=lt(L),st=[new at(h,new S(-3,0,14)),new at(h,new S(2.5,4,15))];for(var nt=0;nt<st.length;nt++)Un(st[nt],_,O,x);G.putImageData(x,0,0)}const w=V(null);function T(){const{vertexes:d,triangles:c}=o(2),h=new Ct(d,c),{buffer:x,CW:_,CH:O,ctx:G}=lt(w),st=[new at(h,new S(-3,0,14),$t,.75),new at(h,new S(2.5,4,15),kt(195))],nt=new Bt(new S(-3,1,2),kt(-30));Yn(nt,st,_,O,x),G.putImageData(x,0,0)}const p=V(null);function C(){const{vertexes:d,triangles:c}=o(1),h=new Ct(d,c,new S(0,0,0),Math.sqrt(3)),{buffer:x,CW:_,CH:O,ctx:G}=lt(p),st=[new at(h,new S(-1.5,0,7),$t,.75),new at(h,new S(1.25,2.5,7.5),kt(195))],nt=new Bt(new S(-3,1,2),kt(5.5));var Y=Math.sqrt(2)/2;nt.clippingPlanes=[new it(new S(0,0,1),-1),new it(new S(Y,0,Y),0),new it(new S(-Y,0,Y),0),new it(new S(0,-Y,Y),0),new it(new S(0,Y,Y),0)],Zn(nt,st,_,O,x),G.putImageData(x,0,0)}const P=V("depthcheck");rn(P,()=>U());const H=V(null);function U(){dt.info("有bug 待解决");const{vertexes:d,triangles:c}=o(1),h=new Ct(d,c,new S(0,0,0),Math.sqrt(3)),{buffer:x,CW:_,CH:O,ctx:G}=lt(H),st=[new at(h,new S(-1.5,0,7),$t,.75),new at(h,new S(1.25,2.5,7.5),kt(195))],nt=new Bt(new S(-3,1,2),kt(-30));var Y=Math.sqrt(2)/2;nt.clippingPlanes=[new it(new S(0,0,1),-1),new it(new S(Y,0,Y),0),new it(new S(-Y,0,Y),0),new it(new S(0,-Y,Y),0),new it(new S(0,Y,Y),0)],Fn(nt,st,P.value,_,O,x),G.putImageData(x,0,0)}const Q=V(null);function J(){dt.info("待实现")}const K=V(null);function $(){dt.info("待实现")}const W=V(null);function tt(){dt.info("待实现")}const D=V(null);function I(){dt.info("待实现")}const M=V(null);function k(){dt.info("待实现")}return(d,c)=>{const h=Qt("a-radio-group"),x=Xt("dbtap");return Ut(),qt("div",null,[ne,u("div",ee,[u("div",oe,[se,u("div",ce,[j(u("canvas",{ref_key:"RS01Ref",ref:s,onDblclickOnce:i,onClick:c[0]||(c[0]=F(_=>t(s.value),["shift"]))},null,544),[[x,i]])])]),u("div",ie,[le,u("div",re,[j(u("canvas",{ref_key:"RS02Ref",ref:l,onDblclickOnce:a,onClick:c[1]||(c[1]=F(_=>t(l.value),["shift"]))},null,544),[[x,a]])])]),u("div",ae,[fe,u("div",ue,[j(u("canvas",{ref_key:"RS03Ref",ref:r,onDblclickOnce:f,onClick:c[2]||(c[2]=F(_=>t(r.value),["shift"]))},null,544),[[x,f]])])]),u("div",de,[he,u("div",ye,[j(u("canvas",{ref_key:"RS04Ref",ref:y,onDblclickOnce:v,onClick:c[3]||(c[3]=F(_=>t(y.value),["shift"]))},null,544),[[x,v]])])]),u("div",xe,[ve,u("div",we,[j(u("canvas",{ref_key:"RS05Ref",ref:m,onDblclickOnce:g,onClick:c[4]||(c[4]=F(_=>t(m.value),["shift"]))},null,544),[[x,g]])])]),u("div",_e,[me,u("div",ge,[j(u("canvas",{ref_key:"RS06Ref",ref:b,onDblclickOnce:q,onClick:c[5]||(c[5]=F(_=>t(b.value),["shift"]))},null,544),[[x,q]])])]),u("div",Re,[ke,u("div",pe,[j(u("canvas",{ref_key:"RS07Ref",ref:L,onDblclickOnce:R,onClick:c[6]||(c[6]=F(_=>t(L.value),["shift"]))},null,544),[[x,R]])])]),u("div",Ie,[ze,u("div",Ce,[j(u("canvas",{ref_key:"RS08Ref",ref:w,onDblclickOnce:T,onClick:c[7]||(c[7]=F(_=>t(w.value),["shift"]))},null,544),[[x,T]])])]),u("div",De,[Se,u("div",be,[j(u("canvas",{ref_key:"RS09Ref",ref:p,onDblclickOnce:C,onClick:c[8]||(c[8]=F(_=>t(p.value),["shift"]))},null,544),[[x,C]])])]),u("div",Me,[Te,u("div",Le,[j(u("canvas",{ref_key:"RS10Ref",ref:H,onDblclickOnce:U,onClick:c[9]||(c[9]=F(_=>t(H.value),["shift"]))},null,544),[[x,U]]),u("div",$e,[Ot(h,{value:P.value,"onUpdate:value":c[10]||(c[10]=_=>P.value=_),options:[{label:"深度检测",value:"depthcheck"},{label:"背面剔除",value:"backface"}]},null,8,["value"])])])]),u("div",Oe,[Ne,u("div",Ee,[j(u("canvas",{ref_key:"RS11Ref",ref:Q,onDblclickOnce:J,onClick:c[11]||(c[11]=F(_=>t(Q.value),["shift"]))},null,544),[[x,J]])])]),u("div",Ge,[Ae,u("div",Be,[j(u("canvas",{ref_key:"RS12Ref",ref:K,onDblclickOnce:$,onClick:c[12]||(c[12]=F(_=>t(K.value),["shift"]))},null,544),[[x,$]])])]),u("div",Pe,[Ve,u("div",He,[j(u("canvas",{ref_key:"RS13Ref",ref:W,onDblclickOnce:tt,onClick:c[13]||(c[13]=F(_=>t(W.value),["shift"]))},null,544),[[x,tt]])])]),u("div",Ue,[qe,u("div",We,[j(u("canvas",{ref_key:"RS14Ref",ref:D,onDblclickOnce:I,onClick:c[14]||(c[14]=F(_=>t(D.value),["shift"]))},null,544),[[x,I]])])]),u("div",Ye,[Ze,u("div",je,[j(u("canvas",{ref_key:"RS15Ref",ref:M,onDblclickOnce:k,onClick:c[15]||(c[15]=F(_=>t(M.value),["shift"]))},null,544),[[x,k]])])])])])}}}),Je=Wt(Fe,[["__scopeId","data-v-a6f05ee9"]]),Ke={class:"WebGLGraph"},Qe=Ht({__name:"index",setup(n){const{canvasClickTip:t}=an();return t(),(e,o)=>(Ut(),qt("div",Ke,[Ot(An),Ot(Je)]))}}),eo=Wt(Qe,[["__scopeId","data-v-89efa240"]]);export{eo as default};
