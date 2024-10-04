var nn=Object.defineProperty;var en=(n,t,e)=>t in n?nn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Z=(n,t,e)=>en(n,typeof t!="symbol"?t+"":t,e);import{d as Pt,r as V,m as Jt,p as Kt,o as Vt,e as Ut,f as u,w as j,h as F,g as Lt,_ as Ht,s as ut,E as on}from"./index-Cvl347pw.js";import{u as sn}from"./useMessageTip-B9kS1uPb.js";class A{constructor(t,e,s,c=-1,i=0){Z(this,"radius");Z(this,"specular");Z(this,"reflective");Z(this,"center");Z(this,"color");this.radius=e,this.specular=c,this.reflective=i,this.center={x:t[0],y:t[1],z:t[2]},this.color={x:s[0],y:s[1],z:s[2]}}}class C{constructor(t,e,s){Z(this,"ltype");Z(this,"intensity");Z(this,"position");this.ltype=t,this.intensity=e,this.position={x:s?s[0]:0,y:s?s[1]:0,z:s?s[2]:0}}}Z(C,"AMBIENT",0),Z(C,"POINT",1),Z(C,"DIRECTIONAL",2);function vt({x:n,y:t,color:e,CW:s,CH:c,buffer:i}){n=n+s/2,t=-t+c/2;const l=s*4;if(n>=0&&t>=0&&n<s&&t<c){let a=t*l+n*4;i.data[a++]=e.x,i.data[a++]=e.y,i.data[a++]=e.z,i.data[a++]=255}}function wt(n){const t=n.value,e=t.getContext("2d");if(!e)throw new Error("2d context not supported");const s=t.clientWidth,c=t.clientHeight;t.width=s,t.height=c;const i=e.getImageData(0,0,s,c),l=-s/2,a=s/2,r=c/2,f=-c/2;return{buffer:i,CW:s,CH:c,xstart:l,xend:a,ystart:r,yend:f,ctx:e}}function pt(n){return{x:Math.min(255,Math.max(0,n.x)),y:Math.min(255,Math.max(0,n.y)),z:Math.min(255,Math.max(0,n.z))}}function mt({x:n,y:t,z:e=1,CW:s,CH:c}){const l=n*1/s,a=t*1/c;return{x:l,y:a,z:e}}function xt(n,t,e){const s=ft(n,e.center),c=dt(t,t),i=2*dt(s,t),l=dt(s,s)-e.radius*e.radius,a=i*i-4*c*l;if(a<0)return 1/0;const r=(-i+Math.sqrt(a))/(2*c),f=(-i-Math.sqrt(a))/(2*c);return Math.min(r,f)}function ft(n,t){return{x:n.x-t.x,y:n.y-t.y,z:n.z-t.z}}function dt(n,t){return n.x*t.x+n.y*t.y+n.z*t.z}function Dt(n,t,e,s,c=-1,i){let l=0;const a=lt(t);for(const r of e)if(r.ltype==C.AMBIENT)l+=r.intensity;else{let f;r.ltype==C.POINT?f=ft(r.position,n):f=r.position;const h=r.ltype==C.POINT?1:1/0;if(cn(n,f,0,h,i))continue;const R=dt(t,f);if(R>0&&(l+=r.intensity*R/(a*lt(f))),c!=-1&&s){const M=lt(s),q=qt(f,t),L=dt(q,s);L>0&&(l+=r.intensity*Math.pow(L/(lt(q)*M),c))}}return l}function cn(n,t,e,s,c){if(!c)return null;let i=1/0,l=null;for(const a of c){const r=xt(n,t,a);r<i&&r>e&&r<s&&(i=r,l=a)}return l}function lt(n){return Math.sqrt(dt(n,n))}function B(n,t){return{x:n*t.x,y:n*t.y,z:n*t.z}}function yt(n,t){return{x:n.x+t.x,y:n.y+t.y,z:n.z+t.z}}function qt(n,t){return ft(B(2*dt(n,t),t),n)}function ln(n,t,e,s,c){let i=1/0,l=null;for(const a of c){const r=xt(n,t,a);r<i&&r>e&&r<s&&(i=r,l=a)}return l===null?{x:255,y:255,z:255}:l.color}function rn(n,t,e,s,c,i){let l=1/0,a=null;for(const h of c){const w=xt(n,t,h);w<l&&w>e&&w<s&&(l=w,a=h)}if(a===null)return{x:255,y:255,z:255};const r=yt(n,B(l,t));let f=ft(r,a.center);return f=B(1/lt(f),f),B(Dt(r,f,i),a.color)}function an(n,t,e,s,c,i){let l=1/0,a=null;for(const g of c){const R=xt(n,t,g);R<l&&R>e&&R<s&&(l=R,a=g)}if(a===null)return{x:255,y:255,z:255};const r=yt(n,B(l,t));let f=ft(r,a.center);f=B(1/lt(f),f);const h=B(-1,t),w=Dt(r,f,i,h,a.specular);return B(w,a.color)}function fn(n,t,e,s,c,i){let l=1/0,a=null;for(const g of c){const R=xt(n,t,g);R<l&&R>e&&R<s&&(l=R,a=g)}if(a===null)return{x:255,y:255,z:255};const r=yt(n,B(l,t));let f=ft(r,a.center);f=B(1/lt(f),f);const h=B(-1,t),w=Dt(r,f,i,h,a.specular,c);return B(w,a.color)}function Wt(n,t,e,s,c,i,l=3){let a=1/0,r=null;for(const L of c){const k=xt(n,t,L);k<a&&k>e&&k<s&&(a=k,r=L)}if(r===null)return{x:0,y:0,z:0};const f=yt(n,B(a,t));let h=ft(f,r.center);h=B(1/lt(h),h);const w=B(-1,t),g=Dt(f,h,i,w,r.specular,c),R=B(g,r.color);if(r.reflective<=0||l<=0)return R;const M=qt(w,h),q=Wt(f,M,.001,1/0,c,i,l-1);return yt(B(1-r.reflective,R),B(r.reflective,q))}function un(n,t,e,s,c,i,l=3){let a=1/0,r=null;for(const L of c){const k=xt(n,t,L);k<a&&k>e&&k<s&&(a=k,r=L)}if(r===null)return{x:0,y:0,z:0};const f=yt(n,B(a,t));let h=ft(f,r.center);h=B(1/lt(h),h);const w=B(-1,t),g=Dt(f,h,i,w,r.specular,c),R=B(g,r.color);if(r.reflective<=0||l<=0)return R;const M=qt(w,h),q=Wt(f,M,.001,1/0,c,i,l-1);return yt(B(1-r.reflective,R),B(r.reflective,q))}const dn={class:"example"},yn={class:"item"},hn={class:"canvas"},xn={class:"item"},vn={class:"canvas"},wn={class:"lt02-tools"},mn={class:"item"},gn={class:"canvas"},Rn={class:"item"},kn={class:"canvas"},_n={class:"item"},pn={class:"canvas"},zn={class:"item"},Cn={class:"canvas"},In=Pt({__name:"index",setup(n){const t=V(null);function e(){const k={x:0,y:0,z:0},{buffer:x,CW:T,CH:p,xstart:I,xend:P,ystart:U,yend:H,ctx:Q}=wt(t),J=new A([-2,0,4],1,[0,255,0]),K=new A([0,-1,3],1,[255,0,0]),$=new A([2,0,4],1,[0,0,255]),W=new A([0,-5001,0],5e3,[255,255,0]),tt=[J,K,$,W];D();function D(){for(let z=U;z>=H;z--)for(let S=I;S<=P;S++){const _=mt({x:S,y:z,z:1,CW:T,CH:p}),d=ln(k,_,1,1/0,tt);vt({x:S,y:z,color:d,CW:T,CH:p,buffer:x})}Q.putImageData(x,0,0)}}const s=[{label:"点光源",value:"light2"},{label:"环境光",value:"light1"},{label:"平行光",value:"light3"}],c=V([]),i=V(null);function l(k){c.value=k,a()}function a(){const k={x:0,y:0,z:0},{buffer:x,CW:T,CH:p,xstart:I,xend:P,ystart:U,yend:H,ctx:Q}=wt(i),J=new A([-2,0,4],1,[0,255,0]),K=new A([0,-1,3],1,[255,0,0]),$=new A([2,0,4],1,[0,0,255]),W=new A([0,-5001,0],5e3,[255,255,0]),tt=[J,K,$,W],D={light1:new C(C.AMBIENT,.2),light2:new C(C.POINT,.6,[2,0,2]),light3:new C(C.DIRECTIONAL,.2,[1,4,4])},z=c.value.map(_=>D[_]);S();function S(){for(let _=U;_>=H;_--)for(let d=I;d<=P;d++){const o=mt({x:d,y:_,z:1,CW:T,CH:p}),y=rn(k,o,1,1/0,tt,z);vt({x:d,y:_,color:pt(y),CW:T,CH:p,buffer:x})}Q.putImageData(x,0,0)}}const r=V(null);function f(){const k={x:0,y:0,z:0},{buffer:x,CW:T,CH:p,xstart:I,xend:P,ystart:U,yend:H,ctx:Q}=wt(r),J=new A([-2,0,4],1,[0,255,0],10),K=new A([0,-1,3],1,[255,0,0],500),$=new A([2,0,4],1,[0,0,255],500),W=new A([0,-5001,0],5e3,[255,255,0],1e3),tt=[J,K,$,W],D=[new C(C.AMBIENT,.2),new C(C.POINT,.6,[2,0,2]),new C(C.DIRECTIONAL,.2,[1,4,4])];z();function z(){for(let S=U;S>=H;S--)for(let _=I;_<=P;_++){const d=mt({x:_,y:S,z:1,CW:T,CH:p}),o=an(k,d,1,1/0,tt,D);vt({x:_,y:S,color:pt(o),CW:T,CH:p,buffer:x})}Q.putImageData(x,0,0)}}const h=V(null);function w(){const k={x:0,y:0,z:0},{buffer:x,CW:T,CH:p,xstart:I,xend:P,ystart:U,yend:H,ctx:Q}=wt(h),J=new A([-2,0,4],1,[0,255,0],10),K=new A([0,-1,3],1,[255,0,0],500),$=new A([2,0,4],1,[0,0,255],500),W=new A([0,-5001,0],5e3,[255,255,0],1e3),tt=[J,K,$,W],D=[new C(C.AMBIENT,.2),new C(C.POINT,.6,[2,0,2]),new C(C.DIRECTIONAL,.2,[1,4,4])];z();function z(){for(let S=U;S>=H;S--)for(let _=I;_<=P;_++){const d=mt({x:_,y:S,z:1,CW:T,CH:p}),o=fn(k,d,1,1/0,tt,D);vt({x:_,y:S,color:pt(o),CW:T,CH:p,buffer:x})}Q.putImageData(x,0,0)}}const g=V(null);function R(){const k={x:0,y:0,z:0},{buffer:x,CW:T,CH:p,xstart:I,xend:P,ystart:U,yend:H,ctx:Q}=wt(g),J=new A([-2,0,4],1,[0,255,0],10,.4),K=new A([0,-1,3],1,[255,0,0],500,.2),$=new A([2,0,4],1,[0,0,255],500,.3),W=new A([0,-5001,0],5e3,[255,255,0],1e3,.5),tt=[J,K,$,W],D=[new C(C.AMBIENT,.2),new C(C.POINT,.6,[2,0,2]),new C(C.DIRECTIONAL,.2,[1,4,4])];z();function z(){for(let S=U;S>=H;S--)for(let _=I;_<=P;_++){const d=mt({x:_,y:S,z:1,CW:T,CH:p}),o=Wt(k,d,1,1/0,tt,D,3);vt({x:_,y:S,color:pt(o),CW:T,CH:p,buffer:x})}Q.putImageData(x,0,0)}}const M=V(null);function q(){const k={x:3,y:0,z:1},{buffer:x,CW:T,CH:p,xstart:I,xend:P,ystart:U,yend:H,ctx:Q}=wt(M),J=new A([-2,0,4],1,[0,255,0],10,.4),K=new A([0,-1,3],1,[255,0,0],500,.2),$=new A([2,0,4],1,[0,0,255],500,.3),W=new A([0,-5001,0],5e3,[255,255,0],1e3,.5),tt=[J,K,$,W],D=[new C(C.AMBIENT,.2),new C(C.POINT,.6,[2,0,2]),new C(C.DIRECTIONAL,.2,[1,4,4])];S();function z(_,d){const o={0:"x",1:"y",2:"z"},y={x:0,y:0,z:0};for(let v=0;v<3;v++)for(let m=0;m<3;m++)y[o[v]]+=d[o[m]]*_[v][m];return y}function S(){const _=[[.7071,0,-.7071],[0,1,0],[.7071,0,.7071]];for(let d=U;d>=H;d--)for(let o=I;o<=P;o++){let y=mt({x:o,y:d,z:1,CW:T,CH:p});y=z(_,y);const v=un(k,y,1,1/0,tt,D,3);vt({x:o,y:d,color:pt(v),CW:T,CH:p,buffer:x})}Q.putImageData(x,0,0)}}function L(k){const x=new Date().getTime()+".png",T=k.toDataURL("image/png");var p=document.createElement("a");p.download=x,p.href=T,p.click()}return(k,x)=>{const T=Jt("a-checkbox-group"),p=Kt("dbtap");return Vt(),Ut("div",null,[x[12]||(x[12]=u("header",null,"光线追踪",-1)),u("div",dn,[u("div",yn,[x[6]||(x[6]=u("div",{class:"desc"},"版本1：发出射线，获取到相交物体的颜色后返回，会获得纯色的物体",-1)),u("div",hn,[j(u("canvas",{ref_key:"LT01Ref",ref:t,onDblclickOnce:e,onClick:x[0]||(x[0]=F(I=>L(t.value),["shift"]))},null,544),[[p,e]])])]),u("div",xn,[x[7]||(x[7]=u("div",{class:"desc"},"版本2：添加光源，此时球体不再是纯色，注意环境光对场景的影响",-1)),u("div",vn,[u("div",wn,[Lt(T,{onChange:l,value:c.value,options:s},null,8,["value"])]),j(u("canvas",{ref_key:"LT02Ref",ref:i,onDblclickOnce:a,onClick:x[1]||(x[1]=F(I=>L(i.value),["shift"]))},null,544),[[p,a]])])]),u("div",mn,[x[8]||(x[8]=u("div",{class:"desc"},"版本3：镜面反射效果",-1)),u("div",gn,[j(u("canvas",{ref_key:"LT03Ref",ref:r,onDblclickOnce:f,onClick:x[2]||(x[2]=F(I=>L(r.value),["shift"]))},null,544),[[p,f]])])]),u("div",Rn,[x[9]||(x[9]=u("div",{class:"desc"},"版本4：添加阴影效果",-1)),u("div",kn,[j(u("canvas",{ref_key:"LT04Ref",ref:h,onDblclickOnce:w,onClick:x[3]||(x[3]=F(I=>L(h.value),["shift"]))},null,544),[[p,w]])])]),u("div",_n,[x[10]||(x[10]=u("div",{class:"desc"},"版本5：镜中镜效果",-1)),u("div",pn,[j(u("canvas",{ref_key:"LT05Ref",ref:g,onDblclickOnce:R,onClick:x[4]||(x[4]=F(I=>L(g.value),["shift"]))},null,544),[[p,R]])])]),u("div",zn,[x[11]||(x[11]=u("div",{class:"desc"},"版本6：改变相机位置和朝向",-1)),u("div",Cn,[j(u("canvas",{ref_key:"LT06Ref",ref:M,onDblclickOnce:q,onClick:x[5]||(x[5]=F(I=>L(M.value),["shift"]))},null,544),[[p,q]])])])])])}}}),Dn=Ht(In,[["__scopeId","data-v-b06056cf"]]);class et{constructor(t,e,s={x:0,y:0,z:0,h:1}){Z(this,"x");Z(this,"y");Z(this,"color");const[c,i]=t;this.x=c/300*e/2,this.y=i/300*e/2,this.color=s}}class Et{constructor(t,e,s={x:0,y:0,z:0,h:1}){Z(this,"x");Z(this,"y");Z(this,"color");const[c,i]=t;this.x=c,this.y=i,this.color=s}}class b{constructor(t,e,s){this.x=t,this.y=e,this.z=s,this.x=t,this.y=e,this.z=s}}class gt{constructor(t,e,s,c=1){this.x=t,this.y=e,this.z=s,this.h=c,this.x=t,this.y=e,this.z=s,this.h=c}}class st{constructor(t,e,s,c){this.v0=t,this.v1=e,this.v2=s,this.color=c,this.v0=t,this.v1=e,this.v2=s,this.color=c}}class zt{constructor(t,e,s,c=0){this.vertexes=t,this.triangles=e,this.boundsCenter=s,this.boundsRadius=c,this.vertexes=t,this.triangles=e,this.boundsCenter=s,this.boundsRadius=c}}class rt{constructor(t,e,s=Tt,c=1){Z(this,"transform");this.model=t,this.position=e,this.orientation=s,this.scale=c,this.model=t,this.position=e,this.orientation=s,this.scale=c,this.transform=at($t(this.position),at(s,On(this.scale)))}}class Gt{constructor(t,e){Z(this,"clippingPlanes");this.position=t,this.orientation=e,this.position=t,this.orientation=e,this.clippingPlanes=[]}}class _t{constructor(t){Z(this,"data");this.data=t}}class At{constructor(t,e,s,c=1){this.x=t,this.y=e,this.z=s,this.w=c,this.x=t,this.y=e,this.z=s,this.w=c}}class ct{constructor(t,e){this.normal=t,this.distance=e,this.normal=t,this.distance=e}}function it(n){const t=n.value,e=t.getContext("2d");if(!e)throw new Error("2d context not supported");const s=t.clientWidth,c=t.clientHeight;t.width=s,t.height=c;const i=e.getImageData(0,0,s,c),l=-s/2,a=s/2,r=c/2,f=-c/2;for(let h=0;h<i.data.length;h+=4)i.data[h]=255,i.data[h+1]=255,i.data[h+2]=255,i.data[h+3]=255;return{buffer:i,CW:s,CH:c,xstart:l,xend:a,ystart:r,yend:f,ctx:e}}function ht({x:n,y:t,color:e,CW:s,CH:c,buffer:i}){n=Math.floor(s/2+n),t=Math.floor(c/2-t);const l=s*4;if(n>=0&&t>=0&&n<s&&t<c){let a=t*l+n*4;i.data[a++]=e.x,i.data[a++]=e.y,i.data[a++]=e.z,i.data[a++]=255*(e.h??1)}}function E(n,t,e,s){if(n==e)return[t];const c=[],i=(s-t)/(e-n);let l=t;for(let a=n;a<=e;a++)c.push(l),l+=i;return c}function Qt(n,t,e,s,c,i,l){X(n,t,s,c,i,l),X(t,e,s,c,i,l),X(n,e,s,c,i,l)}function jt(n,t,e,s,c,i){const l=E(n,t,e,s),a=E(e,s,c,i),r=E(n,t,c,i);l.pop();const f=l.concat(a);return[r,f]}function bn(n,t,e,s,c,i,l){if(t.y<n.y){const M=n;n=t,t=M}if(e.y<n.y){const M=n;n=e,e=M}if(e.y<t.y){const M=t;t=e,e=M}const a=E(n.y,n.x,t.y,t.x),r=E(t.y,t.x,e.y,e.x),f=E(n.y,n.x,e.y,e.x);a.pop();const h=a.concat(r);let w,g,R=Math.floor(f.length/2);f[R]<h[R]?(w=f,g=h):(w=h,g=f);for(let M=n.y;M<=e.y;M++){const q=w[M-n.y],L=g[M-n.y];for(let k=q;k<=L;k++)ht({x:k,y:M,color:s,CW:c,CH:i,buffer:l})}}function Mn(n,t,e,s,c,i,l,{v0:a,v1:r,v2:f},h,w){if(t.y<n.y){const I=n;n=t,t=I}if(e.y<n.y){const I=n;n=e,e=I}if(e.y<t.y){const I=t;t=e,e=I}const[g,R]=jt(n.y,n.x,t.y,t.x,e.y,e.x),[M,q]=jt(n.y,1/a.z,t.y,1/r.z,e.y,1/f.z);let L,k,x,T,p=Math.floor(g.length/2);g[p]<R[p]?(L=g,k=R,x=M,T=q):(L=R,k=g,x=q,T=M);for(let I=n.y;I<=e.y;I++){const P=I-n.y,U=L[P]|0,H=k[P]|0,[Q,J]=[x[P],T[P]],K=E(U,Q,H,J);for(let $=U;$<=H;$++)w==="depthcheck"?Hn($,I,K[$-U],c,i,h)&&ht({x:$,y:I,color:s,CW:c,CH:i,buffer:l}):ht({x:$,y:I,color:s,CW:c,CH:i,buffer:l})}}function Sn(n,t,e,s,c,i){if(t.y<n.y){const D=n;n=t,t=D}if(e.y<n.y){const D=n;n=e,e=D}if(e.y<t.y){const D=t;t=e,e=D}const l=E(n.y,n.x,t.y,t.x),a=E(n.y,n.color.x,t.y,t.color.x),r=E(n.y,n.color.y,t.y,t.color.y),f=E(n.y,n.color.z,t.y,t.color.z),h=E(n.y,n.color.h,t.y,t.color.h),w=a.map((D,z)=>({x:D,y:r[z],z:f[z],h:h[z]})),g=E(t.y,t.x,e.y,e.x),R=E(t.y,t.color.x,e.y,e.color.x),M=E(t.y,t.color.y,e.y,e.color.y),q=E(t.y,t.color.z,e.y,e.color.z),L=E(t.y,t.color.h,e.y,e.color.h),k=R.map((D,z)=>({x:D,y:M[z],z:q[z],h:L[z]})),x=E(n.y,n.x,e.y,e.x),T=E(n.y,n.color.x,e.y,e.color.x),p=E(n.y,n.color.y,e.y,e.color.y),I=E(n.y,n.color.z,e.y,e.color.z),P=E(n.y,n.color.h,e.y,e.color.h),U=T.map((D,z)=>({x:D,y:p[z],z:I[z],h:P[z]}));l.pop();const H=l.concat(g);w.pop();const Q=w.concat(k);let J,K,$,W;const tt=Math.floor(x.length/2);x[tt]<H[tt]?(J=x,K=H,$=U,W=Q):(J=H,K=x,$=Q,W=U);for(let D=n.y;D<e.y-1;D++){const z=J[D-n.y]|0,S=K[D-n.y]|0,_=Math.floor(D-n.y),d=E(z,$[_].x,S,W[_].x),o=E(z,$[_].y,S,W[_].y),y=E(z,$[_].z,S,W[_].z),v=E(z,$[_].h,S,W[_].h),m=d.map((O,G)=>({x:O,y:o[G],z:y[G],h:v[G]}));for(let O=z;O<=S;O++){const G=O-z;ht({x:O,y:D,color:m[G],CW:s,CH:c,buffer:i})}}}function Ft(n,t,e,s,c,i){const l=n.x,a=n.y,r=t.x,h=(t.y-a)/(r-l);let w=a;for(let g=l;g<=r;g++)ht({x:g,y:w,color:e,CW:s,CH:c,buffer:i}),w+=h}function X(n,t,e,s,c,i){const l=t.x-n.x,a=t.y-n.y;if(Math.abs(l)>Math.abs(a)){if(l<0){const f=n;n=t,t=f}const r=E(n.x,n.y,t.x,t.y);for(let f=n.x;f<=t.x;f++)ht({x:f,y:r[f-n.x|0],color:e,CW:s,CH:c,buffer:i})}else{if(a<0){const f=n;n=t,t=f}const r=E(n.y,n.x,t.y,t.x);for(let f=n.y;f<=t.y;f++)ht({x:r[f-n.y|0],y:f,color:e,CW:s,CH:c,buffer:i})}}function N(n,t,e){const c=n.x*1/n.z,i=n.y*1/n.z;return Tn({x:c,y:i},t,e)}function Tn(n,t,e){return{x:Math.round(n.x*t/1/2),y:Math.round(n.y*e/1/2)}}function Xt(n,t,e,s,c){const i=[];for(let l=0;l<n.length;l++){const a=N(n[l],e,s);i.push(a)}for(let l=0;l<t.length;l++)Yt(t[l],i,e,s,c)}function Ln(n,t,e,s){const c=[],i=n.model;for(let l=0;l<i.vertexes.length;l++)c.push(N(It(n.position,i.vertexes[l]),t,e));for(let l=0;l<i.triangles.length;l++)Yt(i.triangles[l],c,t,e,s)}function $n(n,t,e,s,c){const i=[];for(let l=0;l<n.vertexes.length;l++){const a=n.vertexes[l],r=new At(a.x,a.y,a.z,1);i.push(N(Bt(t,r),e,s))}for(let l=0;l<n.triangles.length;l++)Yt(n.triangles[l],i,e,s,c)}function Yt(n,t,e,s,c){const i=t[n.v0],l=t[n.v1],a=t[n.v2];Qt(new Et([i.x,i.y],e),new Et([l.x,l.y],e),new Et([a.x,a.y],e),n.color,e,s,c)}const Tt=new _t([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]);function It(n,t){return new b(n.x+t.x,n.y+t.y,n.z+t.z)}function Rt(n){const t=Math.cos(n*Math.PI/180),e=Math.sin(n*Math.PI/180);return new _t([[t,0,-e,0],[0,1,0,0],[e,0,t,0],[0,0,0,1]])}function Zt(n){const t=new _t([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);for(let e=0;e<4;e++)for(let s=0;s<4;s++)t.data[e][s]=n.data[s][e];return t}function at(n,t){const e=new _t([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);for(let s=0;s<4;s++)for(let c=0;c<4;c++)for(let i=0;i<4;i++)e.data[s][c]+=n.data[s][i]*t.data[i][c];return e}function Bt(n,t){const e=[0,0,0,0],s=[t.x,t.y,t.z,t.w];for(let c=0;c<4;c++)for(let i=0;i<4;i++)e[c]+=n.data[c][i]*s[i];return{x:e[0],y:e[1],z:e[2],w:e[3]}}function $t(n){return new _t([[1,0,0,n.x],[0,1,0,n.y],[0,0,1,n.z],[0,0,0,1]])}function On(n){return new _t([[n,0,0,0],[0,n,0,0],[0,0,n,0],[0,0,0,1]])}function kt(n,t){return{x:n*t.x,y:n*t.y,z:n*t.z}}function Ct(n,t){return n.x*t.x+n.y*t.y+n.z*t.z}function Nn(n,t,e,s,c){const i=Zt(n.orientation),l=$t(kt(-1,n.position)),a=at(i,l);for(let r=0;r<t.length;r++){const f=at(a,t[r].transform);$n(t[r].model,f,e,s,c)}}function En(n,t,e,s,c){const i=Zt(n.orientation),l=$t(kt(-1,n.position)),a=at(i,l);let r="";for(let f=0;f<t.length;f++){const h=at(a,t[f].transform),{clipped:w,newTriangleNumber:g}=tn(n.clippingPlanes,t[f].model,h),R=t[f].model.triangles.length;r+=`
      模型${f+1}: 三角形数: ${R} -> ${g}
    `,w&&Xt(w.vertexes,w.triangles,e,s,c)}ut.info({content:r,duration:10})}function tn(n,t,e){const s=t.boundsCenter,c=Bt(e,new At(s.x,s.y,s.z,1));for(let r=0;r<n.length;r++)if(Ct(n[r].normal,c)+n[r].distance<-t.boundsRadius)return{clipped:null,newTriangleNumber:0};const i=[];for(let r=0;r<t.vertexes.length;r++){const f=t.vertexes[r];i.push(Bt(e,new At(f.x,f.y,f.z,1)))}let l=t.triangles.slice(),a=l.length;for(let r=0;r<n.length;r++){const f=[];for(let h=0;h<l.length;h++)a+=Gn(l[h],n[r],f,i);l=f}return{clipped:new zt(i,l,c,t.boundsRadius),newTriangleNumber:a}}function Gn(n,t,e,s){const c=s[n.v0],i=s[n.v1],l=s[n.v2],a=Ct(t.normal,c)+t.distance,r=Ct(t.normal,i)+t.distance,f=Ct(t.normal,l)+t.distance,h=a>0,w=r>0,g=f>0,R=Number(h)+Number(w)+Number(g);return R==0?-1:R==3||R==1?(e.push(n),0):R==2?(e.push(n),1):0}function An(n,t,e,s,c,i){const l=Zt(n.orientation),a=$t(kt(-1,n.position)),r=at(l,a),f=new Array(s*c).fill(void 0);for(let h=0;h<t.length;h++){const w=at(r,t[h].transform),{clipped:g}=tn(n.clippingPlanes,t[h].model,w);g&&Bn(g,e,s,c,i,f)}}function Bn(n,t,e,s,c,i){const l=n.vertexes,a=n.triangles,r=[];for(let f=0;f<l.length;f++){const h=N(l[f],e,s);r.push(h)}for(let f=0;f<a.length;f++)Pn(a[f],l,r,t,e,s,c,i)}function Pn(n,t,e,s,c,i,l,a){const r=e[n.v0],f=e[n.v1],h=e[n.v2],w=t[n.v0],g=t[n.v1],R=t[n.v2];if(s==="backface"){const M=Un(w,g,R),q=kt(-1/3,It(It(w,g),R));if(Ct(M,q)<0)return}Mn(r,f,h,n.color,c,i,l,{v0:w,v1:g,v2:R},a,s)}function Vn(n,t){return new b(n.y*t.z-n.z*t.y,n.z*t.x-n.x*t.z,n.x*t.y-n.y*t.x)}function Un(n,t,e){const s=It(t,kt(-1,n)),c=It(e,kt(-1,n));return Vn(s,c)}function Hn(n,t,e,s,c,i){if(n=s/2+(n|0),t=c/2-(t|0)-1,n<0||n>=s||t<0||t>=c)return!1;const l=n+s*t;return i[l]===void 0||i[l]<e?(i[l]=e,!0):!1}const qn={class:"example"},Wn={class:"item"},Yn={class:"canvas"},Zn={class:"item"},jn={class:"canvas"},Fn={class:"item"},Jn={class:"canvas"},Kn={class:"item"},Qn={class:"canvas"},Xn={class:"item"},te={class:"canvas"},ne={class:"item"},ee={class:"canvas"},oe={class:"item"},se={class:"canvas"},ce={class:"item"},ie={class:"canvas"},le={class:"item"},re={class:"canvas"},ae={class:"item to-fix"},fe={class:"canvas"},ue={class:"lt10-tools"},de={class:"item working"},ye={class:"canvas"},he={class:"item working"},xe={class:"canvas"},ve={class:"item working"},we={class:"canvas"},me={class:"item working"},ge={class:"canvas"},Re={class:"item working"},ke={class:"canvas"},_e=Pt({__name:"index",setup(n){function t(d){const o=new Date().getTime()+".png",y=d.toDataURL("image/png");var v=document.createElement("a");v.download=o,v.href=y,v.click()}const e={x:0,y:0,z:0};function s(d){const o=[new b(d,d,d),new b(-d,d,d),new b(-d,-d,d),new b(d,-d,d),new b(d,d,-d),new b(-d,d,-d),new b(-d,-d,-d),new b(d,-d,-d)],y=new gt(255,0,0),v=new gt(0,255,0),m=new gt(0,0,255),O=new gt(255,255,0),G=new gt(255,0,255),ot=new gt(0,255,255),nt=[new st(0,1,2,y),new st(0,2,3,y),new st(1,5,6,O),new st(1,6,2,O),new st(2,6,7,ot),new st(2,7,3,ot),new st(4,0,3,v),new st(4,1,0,G),new st(4,3,7,v),new st(4,5,1,G),new st(5,4,7,m),new st(5,7,6,m)];return{vertexes:o,triangles:nt}}const c=V(null);function i(){const{buffer:d,CW:o,CH:y,ctx:v}=it(c);Ft(new et([-200,-100],o),new et([240,120],o),e,o,y,d),Ft(new et([-50,-200],o),new et([60,240],o),e,o,y,d),v.putImageData(d,0,0)}const l=V(null);function a(){const{buffer:d,CW:o,CH:y,ctx:v}=it(l);X(new et([-200,-100],o),new et([240,120],o),e,o,y,d),X(new et([-50,-200],o),new et([60,240],o),e,o,y,d),X(new et([-50,0],o),new et([50,0],o),e,o,y,d),v.putImageData(d,0,0)}const r=V(null);function f(){const{buffer:d,CW:o,CH:y,ctx:v}=it(r),m=new et([-200,-250],o),O=new et([200,50],o),G=new et([20,250],o);Qt(m,O,G,{x:0,y:0,z:0},o,y,d),bn(m,O,G,{x:0,y:255,z:0},o,y,d),v.putImageData(d,0,0)}const h=V(null);function w(){const{buffer:d,CW:o,CH:y,ctx:v}=it(h),m=new et([-200,-250],o,{x:233,y:255,z:0,h:.3}),O=new et([200,50],o,{x:0,y:255,z:222,h:.5}),G=new et([20,250],o,{x:0,y:255,z:0,h:1});Sn(m,O,G,o,y,d),v.putImageData(d,0,0)}const g=V(null);function R(){const{buffer:d,CW:o,CH:y,ctx:v}=it(g),m={x:-4,y:-1.5,z:6},O={x:-4,y:.5,z:6},G={x:-2,y:.5,z:6},ot={x:-2,y:-1.5,z:6},nt={x:-4,y:-1.5,z:8},Y={x:-4,y:.5,z:8},Ot={x:-2,y:.5,z:8},Nt={x:-2,y:-1.5,z:8},bt={x:255,y:0,z:0},Mt={x:0,y:255,z:0},St={x:0,y:0,z:255};X(N(m,o,y),N(O,o,y),St,o,y,d),X(N(O,o,y),N(G,o,y),St,o,y,d),X(N(G,o,y),N(ot,o,y),St,o,y,d),X(N(ot,o,y),N(m,o,y),St,o,y,d),X(N(nt,o,y),N(Y,o,y),bt,o,y,d),X(N(Y,o,y),N(Ot,o,y),bt,o,y,d),X(N(Ot,o,y),N(Nt,o,y),bt,o,y,d),X(N(Nt,o,y),N(nt,o,y),bt,o,y,d),X(N(m,o,y),N(nt,o,y),Mt,o,y,d),X(N(O,o,y),N(Y,o,y),Mt,o,y,d),X(N(G,o,y),N(Ot,o,y),Mt,o,y,d),X(N(ot,o,y),N(Nt,o,y),Mt,o,y,d),v.putImageData(d,0,0)}const M=V(null);function q(){const{vertexes:d,triangles:o}=s(2);for(var y=0;y<d.length;y++)d[y].x-=1.5,d[y].z+=7;const{buffer:v,CW:m,CH:O,ctx:G}=it(M);Xt(d,o,m,O,v),G.putImageData(v,0,0)}const L=V(null);function k(){const{vertexes:d,triangles:o}=s(2),y=new zt(d,o),{buffer:v,CW:m,CH:O,ctx:G}=it(L),ot=[new rt(y,new b(-3,0,14)),new rt(y,new b(2.5,4,15))];for(var nt=0;nt<ot.length;nt++)Ln(ot[nt],m,O,v);G.putImageData(v,0,0)}const x=V(null);function T(){const{vertexes:d,triangles:o}=s(2),y=new zt(d,o),{buffer:v,CW:m,CH:O,ctx:G}=it(x),ot=[new rt(y,new b(-3,0,14),Tt,.75),new rt(y,new b(2.5,4,15),Rt(195))],nt=new Gt(new b(-3,1,2),Rt(-30));Nn(nt,ot,m,O,v),G.putImageData(v,0,0)}const p=V(null);function I(){const{vertexes:d,triangles:o}=s(1),y=new zt(d,o,new b(0,0,0),Math.sqrt(3)),{buffer:v,CW:m,CH:O,ctx:G}=it(p),ot=[new rt(y,new b(-1.5,0,7),Tt,.75),new rt(y,new b(1.25,2.5,7.5),Rt(195))],nt=new Gt(new b(-3,1,2),Rt(5.5));var Y=Math.sqrt(2)/2;nt.clippingPlanes=[new ct(new b(0,0,1),-1),new ct(new b(Y,0,Y),0),new ct(new b(-Y,0,Y),0),new ct(new b(0,-Y,Y),0),new ct(new b(0,Y,Y),0)],En(nt,ot,m,O,v),G.putImageData(v,0,0)}const P=V("depthcheck");on(P,()=>H());const U=V(null);function H(){ut.info("有bug 待解决");const{vertexes:d,triangles:o}=s(1),y=new zt(d,o,new b(0,0,0),Math.sqrt(3)),{buffer:v,CW:m,CH:O,ctx:G}=it(U),ot=[new rt(y,new b(-1.5,0,7),Tt,.75),new rt(y,new b(1.25,2.5,7.5),Rt(195))],nt=new Gt(new b(-3,1,2),Rt(-30));var Y=Math.sqrt(2)/2;nt.clippingPlanes=[new ct(new b(0,0,1),-1),new ct(new b(Y,0,Y),0),new ct(new b(-Y,0,Y),0),new ct(new b(0,-Y,Y),0),new ct(new b(0,Y,Y),0)],An(nt,ot,P.value,m,O,v),G.putImageData(v,0,0)}const Q=V(null);function J(){ut.info("待实现")}const K=V(null);function $(){ut.info("待实现")}const W=V(null);function tt(){ut.info("待实现")}const D=V(null);function z(){ut.info("待实现")}const S=V(null);function _(){ut.info("待实现")}return(d,o)=>{const y=Jt("a-radio-group"),v=Kt("dbtap");return Vt(),Ut("div",null,[o[31]||(o[31]=u("header",null,"光栅化",-1)),u("div",qn,[u("div",Wn,[o[16]||(o[16]=u("div",{class:"desc"},"根据插值函数绘制直线版本1",-1)),u("div",Yn,[j(u("canvas",{ref_key:"RS01Ref",ref:c,onDblclickOnce:i,onClick:o[0]||(o[0]=F(m=>t(c.value),["shift"]))},null,544),[[v,i]])])]),u("div",Zn,[o[17]||(o[17]=u("div",{class:"desc"},"根据插值函数绘制直线版本2，增加了斜率判断和直线判断",-1)),u("div",jn,[j(u("canvas",{ref_key:"RS02Ref",ref:l,onDblclickOnce:a,onClick:o[1]||(o[1]=F(m=>t(l.value),["shift"]))},null,544),[[v,a]])])]),u("div",Fn,[o[18]||(o[18]=u("div",{class:"desc"},"绘制绘制纯色三角形，用横向插值线段去填充三角形",-1)),u("div",Jn,[j(u("canvas",{ref_key:"RS03Ref",ref:r,onDblclickOnce:f,onClick:o[2]||(o[2]=F(m=>t(r.value),["shift"]))},null,544),[[v,f]])])]),u("div",Kn,[o[19]||(o[19]=u("div",{class:"desc"},"绘制渐变色三角形，在线段插值的基础上，颜色也进行插值",-1)),u("div",Qn,[j(u("canvas",{ref_key:"RS04Ref",ref:h,onDblclickOnce:w,onClick:o[3]||(o[3]=F(m=>t(h.value),["shift"]))},null,544),[[v,w]])])]),u("div",Xn,[o[20]||(o[20]=u("div",{class:"desc"},"透视投影：通过顶点列表。在二维画布上绘制立方体的12条边",-1)),u("div",te,[j(u("canvas",{ref_key:"RS05Ref",ref:g,onDblclickOnce:R,onClick:o[4]||(o[4]=F(m=>t(g.value),["shift"]))},null,544),[[v,R]])])]),u("div",ne,[o[21]||(o[21]=u("div",{class:"desc"},"透视投影：通过顶点列表+三角形列表。在二维画布上绘制立方体的三角形线框图",-1)),u("div",ee,[j(u("canvas",{ref_key:"RS06Ref",ref:M,onDblclickOnce:q,onClick:o[5]||(o[5]=F(m=>t(M.value),["shift"]))},null,544),[[v,q]])])]),u("div",oe,[o[22]||(o[22]=u("div",{class:"desc"},"模型的复制：通过一个模型+多个位置来描述多个模型，以节约内存",-1)),u("div",se,[j(u("canvas",{ref_key:"RS07Ref",ref:L,onDblclickOnce:k,onClick:o[6]||(o[6]=F(m=>t(L.value),["shift"]))},null,544),[[v,k]])])]),u("div",ce,[o[23]||(o[23]=u("div",{class:"desc"},[u("p",null,"变换包括平移、旋转、缩放"),u("p",null,"大类包括模型变换、相机变换和投影变换"),u("p",null,"使用矩阵来简化、优化和统一所有的投影")],-1)),u("div",ie,[j(u("canvas",{ref_key:"RS08Ref",ref:x,onDblclickOnce:T,onClick:o[7]||(o[7]=F(m=>t(x.value),["shift"]))},null,544),[[v,T]])])]),u("div",le,[o[24]||(o[24]=u("div",{class:"desc"},"裁剪：通过舍弃或者分割物体来节约计算资源",-1)),u("div",re,[j(u("canvas",{ref_key:"RS09Ref",ref:p,onDblclickOnce:I,onClick:o[8]||(o[8]=F(m=>t(p.value),["shift"]))},null,544),[[v,I]])])]),u("div",ae,[o[25]||(o[25]=u("div",{class:"desc"},[u("p",null,"深度检测：用深度缓冲区来判断距离相机更近的像素"),u("p",null,"背面剔除：直接跳过完全不可见的三角")],-1)),u("div",fe,[j(u("canvas",{ref_key:"RS10Ref",ref:U,onDblclickOnce:H,onClick:o[9]||(o[9]=F(m=>t(U.value),["shift"]))},null,544),[[v,H]]),u("div",ue,[Lt(y,{value:P.value,"onUpdate:value":o[10]||(o[10]=m=>P.value=m),options:[{label:"深度检测",value:"depthcheck"},{label:"背面剔除",value:"backface"}]},null,8,["value"])])])]),u("div",de,[o[26]||(o[26]=u("div",{class:"desc"},"扁平着色：计算三角面某个点的光照颜色，以此填充整个三角面",-1)),u("div",ye,[j(u("canvas",{ref_key:"RS11Ref",ref:Q,onDblclickOnce:J,onClick:o[11]||(o[11]=F(m=>t(Q.value),["shift"]))},null,544),[[v,J]])])]),u("div",he,[o[27]||(o[27]=u("div",{class:"desc"},"高洛德着色：计算三个点的光照颜色，然后进行插值",-1)),u("div",xe,[j(u("canvas",{ref_key:"RS12Ref",ref:K,onDblclickOnce:$,onClick:o[12]||(o[12]=F(m=>t(K.value),["shift"]))},null,544),[[v,$]])])]),u("div",ve,[o[28]||(o[28]=u("div",{class:"desc"},"冯式着色：根据三个点的法向量，插值得到所有点的法向量，然后计算每个点的光照颜色",-1)),u("div",we,[j(u("canvas",{ref_key:"RS13Ref",ref:W,onDblclickOnce:tt,onClick:o[13]||(o[13]=F(m=>t(W.value),["shift"]))},null,544),[[v,tt]])])]),u("div",me,[o[29]||(o[29]=u("div",{class:"desc"},"对于球类物体，法向量由开发人员定义然后传入",-1)),u("div",ge,[j(u("canvas",{ref_key:"RS14Ref",ref:D,onDblclickOnce:z,onClick:o[14]||(o[14]=F(m=>t(D.value),["shift"]))},null,544),[[v,z]])])]),u("div",Re,[o[30]||(o[30]=u("div",{class:"desc"},"纹理贴图，每个顶点对应一个纹理坐标，根据纹理坐标得到纹素",-1)),u("div",ke,[j(u("canvas",{ref_key:"RS15Ref",ref:S,onDblclickOnce:_,onClick:o[15]||(o[15]=F(m=>t(S.value),["shift"]))},null,544),[[v,_]])])])])])}}}),pe=Ht(_e,[["__scopeId","data-v-a6f05ee9"]]),ze={class:"WebGLGraph"},Ce=Pt({__name:"index",setup(n){const{canvasClickTip:t}=sn();return t(),(e,s)=>(Vt(),Ut("div",ze,[Lt(Dn),Lt(pe)]))}}),Me=Ht(Ce,[["__scopeId","data-v-89efa240"]]);export{Me as default};
