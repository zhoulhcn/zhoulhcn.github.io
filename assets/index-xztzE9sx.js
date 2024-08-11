import{d as Ye,r as ue,I as We,C as r,q as ge,s as Ge,e as He,f as o,w as de,p as qe,n as Ze,_ as Ke,x as et,g as ye,m as tt}from"./index-BY5qalWP.js";import{u as rt}from"./useMessageTip-B827XcEP.js";const ot=o("header",null,"第二章：入门",-1),at={class:"example"},it={class:"item"},nt=o("div",{class:"desc"},"webgl设置背景色",-1),st={class:"canvas"},ct={class:"item"},ft=o("div",{class:"desc"},"webgl绘制一个点(位置等信息硬编码在glsl中)",-1),_t={class:"canvas"},ut={class:"item"},vt=o("div",{class:"desc"},"webgl绘制一个点(位置等信息从js传入glsl)",-1),lt={class:"canvas"},dt={class:"item"},mt=o("div",{class:"desc"},"webgl数据传输(顶点着色器),在鼠标点击位置绘制点",-1),At={class:"canvas"},Rt={class:"item"},Et=o("div",{class:"desc"},"webgl数据传输(片元着色器),在鼠标点击位置绘制点,点的颜色由js传入",-1),Ft={class:"canvas"},bt=Ye({__name:"chapter-02",setup(_){const i=ue(null),e=ue(null),c=ue(null),n=ue(null),D=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight});let l=null;function X(){var M=r(i);l=M.getContext("webgl"),l&&(l.clearColor(.5,.2,.1,1),l.clear(l.COLOR_BUFFER_BIT))}function O(){var M=`void main() {
          gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
          gl_PointSize = 10.0;
        }`,f=`void main() {
          gl_FragColor = vec4(1.0, 0.5, 0.0, 1.0);
        }`,C=r(e);l=C.getContext("webgl"),l&&oe(l,M,f)&&(l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.POINTS,0,1))}function G(){var M=`
      attribute vec4 a_Position;
      void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
      }
      `,f=`
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `,C=r(c);if(l=C.getContext("webgl"),!!l&&oe(l,M,f)){var x=l.getAttribLocation(l.program,"a_Position");x<0||(l.vertexAttrib3f(x,.5,.2,.1),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.POINTS,0,1))}}function q(){var M=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,f=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,C=r(n);if(l=C.getContext("webgl"),!l||!oe(l,M,f))return;var x=l.getAttribLocation(l.program,"a_Position");if(x<0)return;const s=[];C.addEventListener("mousedown",a=>{let m=a.layerX,V=a.layerY;const R=C.width,I=C.height;m=(m-R/2)/(R/2),V=-((V-I/2)/(I/2)),s.push([m,V]),l.clear(l.COLOR_BUFFER_BIT);for(const h of s){const[E,u]=h;l.vertexAttrib2f(x,E,u),l.drawArrays(l.POINTS,0,1)}}),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)}function re(){var M=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,f=`
        precision mediump float;
        uniform vec4 u_FragColor;
        void main() {
          gl_FragColor = u_FragColor;
        }
      `,C=r(D);if(l=C.getContext("webgl"),!l||!oe(l,M,f))return;var x=l.getAttribLocation(l.program,"a_Position");if(x<0)return;var s=l.getUniformLocation(l.program,"u_FragColor");if(!s)return;const a=[];C.addEventListener("mousedown",m=>{let V=m.layerX,R=m.layerY;const I=C.width,h=C.height;V=(V-I/2)/(I/2),R=-((R-h/2)/(h/2)),a.push({x:V,y:R,r:Math.random(),g:Math.random(),b:Math.random(),a:Math.random()}),l.clear(l.COLOR_BUFFER_BIT);for(const E of a){const{x:u,y:ee,r:y,g:W,b:ae,a:J}=E;l.vertexAttrib2f(x,u,ee),l.uniform4f(s,y,W,ae,J),l.drawArrays(l.POINTS,0,1)}}),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)}function oe(M,f,C){const x=M.createShader(M.VERTEX_SHADER),s=M.createShader(M.FRAGMENT_SHADER);M.shaderSource(x,f),M.shaderSource(s,C),M.compileShader(x),M.compileShader(s);const a=M.getShaderParameter(x,M.COMPILE_STATUS),m=M.getShaderParameter(s,M.COMPILE_STATUS);if(!a)return M.getShaderInfoLog(x),M.deleteShader(x);if(!m){const I=M.getShaderInfoLog(s);return console.error(I),M.deleteShader(s)}const V=M.createProgram();if(M.attachShader(V,x),M.attachShader(V,s),M.linkProgram(V),!M.getProgramParameter(V,M.LINK_STATUS)){const I=M.getProgramInfoLog();console.error(I),M.deleteShader(x),M.deleteShader(s),M.deleteProgram(V);return}return M.useProgram(V),M.program=V,!0}return(M,f)=>{const C=ge("dbtap");return Ge(),He("div",null,[ot,o("div",at,[o("div",it,[nt,o("div",st,[de(o("canvas",{onDblclickOnce:X,ref_key:"gl01",ref:i},null,544),[[C,X]])])]),o("div",ct,[ft,o("div",_t,[de(o("canvas",{onDblclickOnce:O,ref_key:"gl02",ref:e},null,544),[[C,O]])])]),o("div",ut,[vt,o("div",lt,[de(o("canvas",{onDblclickOnce:G,ref_key:"gl03",ref:c},null,544),[[C,G]])])]),o("div",dt,[mt,o("div",At,[de(o("canvas",{onDblclickOnce:q,ref_key:"gl04",ref:n},null,544),[[C,q]])])]),o("div",Rt,[Et,o("div",Ft,[de(o("canvas",{onDblclickOnce:re,ref_key:"gl05",ref:D},null,544),[[C,re]])])])])])}}});function Re(_,i,e){var c=ze(_,i,e);return c?(_.useProgram(c),_.program=c,!0):(console.log("Failed to create program"),!1)}function ze(_,i,e){var c=Je(_,_.VERTEX_SHADER,i),n=Je(_,_.FRAGMENT_SHADER,e);if(!c||!n)return null;var D=_.createProgram();if(!D)return null;_.attachShader(D,c),_.attachShader(D,n),_.linkProgram(D);var l=_.getProgramParameter(D,_.LINK_STATUS);if(!l){var X=_.getProgramInfoLog(D);return console.log("Failed to link program: "+X),_.deleteProgram(D),_.deleteShader(n),_.deleteShader(c),null}return D}function Je(_,i,e){var c=_.createShader(i);if(c==null)return console.log("unable to create shader"),null;_.shaderSource(c,e),_.compileShader(c);var n=_.getShaderParameter(c,_.COMPILE_STATUS);if(!n){var D=_.getShaderInfoLog(c);return console.log("Failed to compile shader: "+D),_.deleteShader(c),null}return c}function ht(_,i){var e=Bt.setupWebGL(_);return e||null}const S=function(_){var i,e,c;if(_&&typeof _=="object"&&_.hasOwnProperty("elements")){for(e=_.elements,c=new Float32Array(16),i=0;i<16;++i)c[i]=e[i];this.elements=c}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};S.prototype.setIdentity=function(){var _=this.elements;return _[0]=1,_[4]=0,_[8]=0,_[12]=0,_[1]=0,_[5]=1,_[9]=0,_[13]=0,_[2]=0,_[6]=0,_[10]=1,_[14]=0,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this};S.prototype.set=function(_){var i,e,c;if(e=_.elements,c=this.elements,e!==c){for(i=0;i<16;++i)c[i]=e[i];return this}};S.prototype.concat=function(_){var i,e,c,n,D,l,X,O;if(e=this.elements,c=this.elements,n=_.elements,e===n)for(n=new Float32Array(16),i=0;i<16;++i)n[i]=e[i];for(i=0;i<4;i++)D=c[i],l=c[i+4],X=c[i+8],O=c[i+12],e[i]=D*n[0]+l*n[1]+X*n[2]+O*n[3],e[i+4]=D*n[4]+l*n[5]+X*n[6]+O*n[7],e[i+8]=D*n[8]+l*n[9]+X*n[10]+O*n[11],e[i+12]=D*n[12]+l*n[13]+X*n[14]+O*n[15];return this};S.prototype.multiply=S.prototype.concat;S.prototype.multiplyVector3=function(_){var i=this.elements,e=_.elements,c=new je,n=c.elements;return n[0]=e[0]*i[0]+e[1]*i[4]+e[2]*i[8]+i[12],n[1]=e[0]*i[1]+e[1]*i[5]+e[2]*i[9]+i[13],n[2]=e[0]*i[2]+e[1]*i[6]+e[2]*i[10]+i[14],c};S.prototype.multiplyVector4=function(_){var i=this.elements,e=_.elements,c=new Tt,n=c.elements;return n[0]=e[0]*i[0]+e[1]*i[4]+e[2]*i[8]+e[3]*i[12],n[1]=e[0]*i[1]+e[1]*i[5]+e[2]*i[9]+e[3]*i[13],n[2]=e[0]*i[2]+e[1]*i[6]+e[2]*i[10]+e[3]*i[14],n[3]=e[0]*i[3]+e[1]*i[7]+e[2]*i[11]+e[3]*i[15],c};S.prototype.transpose=function(){var _,i;return _=this.elements,i=_[1],_[1]=_[4],_[4]=i,i=_[2],_[2]=_[8],_[8]=i,i=_[3],_[3]=_[12],_[12]=i,i=_[6],_[6]=_[9],_[9]=i,i=_[7],_[7]=_[13],_[13]=i,i=_[11],_[11]=_[14],_[14]=i,this};S.prototype.setInverseOf=function(_){var i,e,c,n,D;if(e=_.elements,c=this.elements,n=new Float32Array(16),n[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],n[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],n[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],n[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],n[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],n[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],n[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],n[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],n[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],n[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],n[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],n[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],n[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],n[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],n[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],n[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5],D=e[0]*n[0]+e[1]*n[4]+e[2]*n[8]+e[3]*n[12],D===0)return this;for(D=1/D,i=0;i<16;i++)c[i]=n[i]*D;return this};S.prototype.invert=function(){return this.setInverseOf(this)};S.prototype.setOrtho=function(_,i,e,c,n,D){var l,X,O,G;if(_===i||e===c||n===D)throw"null frustum";return X=1/(i-_),O=1/(c-e),G=1/(D-n),l=this.elements,l[0]=2*X,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*O,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2*G,l[11]=0,l[12]=-(i+_)*X,l[13]=-(c+e)*O,l[14]=-(D+n)*G,l[15]=1,this};S.prototype.ortho=function(_,i,e,c,n,D){return this.concat(new S().setOrtho(_,i,e,c,n,D))};S.prototype.setFrustum=function(_,i,e,c,n,D){var l,X,O,G;if(_===i||c===e||n===D)throw"null frustum";if(n<=0)throw"near <= 0";if(D<=0)throw"far <= 0";return X=1/(i-_),O=1/(c-e),G=1/(D-n),l=this.elements,l[0]=2*n*X,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*n*O,l[6]=0,l[7]=0,l[8]=(i+_)*X,l[9]=(c+e)*O,l[10]=-(D+n)*G,l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*n*D*G,l[15]=0,this};S.prototype.frustum=function(_,i,e,c,n,D){return this.concat(new S().setFrustum(_,i,e,c,n,D))};S.prototype.setPerspective=function(_,i,e,c){var n,D,l,X;if(e===c||i===0)throw"null frustum";if(e<=0)throw"near <= 0";if(c<=0)throw"far <= 0";if(_=Math.PI*_/180/2,l=Math.sin(_),l===0)throw"null frustum";return D=1/(c-e),X=Math.cos(_)/l,n=this.elements,n[0]=X/i,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=X,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=-(c+e)*D,n[11]=-1,n[12]=0,n[13]=0,n[14]=-2*e*c*D,n[15]=0,this};S.prototype.perspective=function(_,i,e,c){return this.concat(new S().setPerspective(_,i,e,c))};S.prototype.setScale=function(_,i,e){var c=this.elements;return c[0]=_,c[4]=0,c[8]=0,c[12]=0,c[1]=0,c[5]=i,c[9]=0,c[13]=0,c[2]=0,c[6]=0,c[10]=e,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this};S.prototype.scale=function(_,i,e){var c=this.elements;return c[0]*=_,c[4]*=i,c[8]*=e,c[1]*=_,c[5]*=i,c[9]*=e,c[2]*=_,c[6]*=i,c[10]*=e,c[3]*=_,c[7]*=i,c[11]*=e,this};S.prototype.setTranslate=function(_,i,e){var c=this.elements;return c[0]=1,c[4]=0,c[8]=0,c[12]=_,c[1]=0,c[5]=1,c[9]=0,c[13]=i,c[2]=0,c[6]=0,c[10]=1,c[14]=e,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this};S.prototype.translate=function(_,i,e){var c=this.elements;return c[12]+=c[0]*_+c[4]*i+c[8]*e,c[13]+=c[1]*_+c[5]*i+c[9]*e,c[14]+=c[2]*_+c[6]*i+c[10]*e,c[15]+=c[3]*_+c[7]*i+c[11]*e,this};S.prototype.setRotate=function(_,i,e,c){var n,D,l,X,O,G,q,re,oe,M,f,C;return _=Math.PI*_/180,n=this.elements,D=Math.sin(_),l=Math.cos(_),i!==0&&e===0&&c===0?(i<0&&(D=-D),n[0]=1,n[4]=0,n[8]=0,n[12]=0,n[1]=0,n[5]=l,n[9]=-D,n[13]=0,n[2]=0,n[6]=D,n[10]=l,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1):i===0&&e!==0&&c===0?(e<0&&(D=-D),n[0]=l,n[4]=0,n[8]=D,n[12]=0,n[1]=0,n[5]=1,n[9]=0,n[13]=0,n[2]=-D,n[6]=0,n[10]=l,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1):i===0&&e===0&&c!==0?(c<0&&(D=-D),n[0]=l,n[4]=-D,n[8]=0,n[12]=0,n[1]=D,n[5]=l,n[9]=0,n[13]=0,n[2]=0,n[6]=0,n[10]=1,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1):(X=Math.sqrt(i*i+e*e+c*c),X!==1&&(O=1/X,i*=O,e*=O,c*=O),G=1-l,q=i*e,re=e*c,oe=c*i,M=i*D,f=e*D,C=c*D,n[0]=i*i*G+l,n[1]=q*G+C,n[2]=oe*G-f,n[3]=0,n[4]=q*G-C,n[5]=e*e*G+l,n[6]=re*G+M,n[7]=0,n[8]=oe*G+f,n[9]=re*G-M,n[10]=c*c*G+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1),this};S.prototype.rotate=function(_,i,e,c){return this.concat(new S().setRotate(_,i,e,c))};S.prototype.setLookAt=function(_,i,e,c,n,D,l,X,O){var G,q,re,oe,M,f,C,x,s,a,m,V;return q=c-_,re=n-i,oe=D-e,M=1/Math.sqrt(q*q+re*re+oe*oe),q*=M,re*=M,oe*=M,f=re*O-oe*X,C=oe*l-q*O,x=q*X-re*l,s=1/Math.sqrt(f*f+C*C+x*x),f*=s,C*=s,x*=s,a=C*oe-x*re,m=x*q-f*oe,V=f*re-C*q,G=this.elements,G[0]=f,G[1]=a,G[2]=-q,G[3]=0,G[4]=C,G[5]=m,G[6]=-re,G[7]=0,G[8]=x,G[9]=V,G[10]=-oe,G[11]=0,G[12]=0,G[13]=0,G[14]=0,G[15]=1,this.translate(-_,-i,-e)};S.prototype.lookAt=function(_,i,e,c,n,D,l,X,O){return this.concat(new S().setLookAt(_,i,e,c,n,D,l,X,O))};S.prototype.dropShadow=function(_,i){var e=new S,c=e.elements,n=_[0]*i[0]+_[1]*i[1]+_[2]*i[2]+_[3]*i[3];return c[0]=n-i[0]*_[0],c[1]=-i[1]*_[0],c[2]=-i[2]*_[0],c[3]=-i[3]*_[0],c[4]=-i[0]*_[1],c[5]=n-i[1]*_[1],c[6]=-i[2]*_[1],c[7]=-i[3]*_[1],c[8]=-i[0]*_[2],c[9]=-i[1]*_[2],c[10]=n-i[2]*_[2],c[11]=-i[3]*_[2],c[12]=-i[0]*_[3],c[13]=-i[1]*_[3],c[14]=-i[2]*_[3],c[15]=n-i[3]*_[3],this.concat(e)};S.prototype.dropShadowDirectionally=function(_,i,e,c,n,D,l,X,O){var G=c*_+n*i+D*e;return this.dropShadow([_,i,e,-G],[l,X,O,0])};const je=function(_){var i=new Float32Array(3);_&&typeof _=="object"&&(i[0]=_[0],i[1]=_[1],i[2]=_[2]),this.elements=i};je.prototype.normalize=function(){var _=this.elements,i=_[0],e=_[1],c=_[2],n=Math.sqrt(i*i+e*e+c*c);if(n){if(n==1)return this}else return _[0]=0,_[1]=0,_[2]=0,this;return n=1/n,_[0]=i*n,_[1]=e*n,_[2]=c*n,this};var Tt=function(_){var i=new Float32Array(4);_&&typeof _=="object"&&(i[0]=_[0],i[1]=_[1],i[2]=_[2],i[3]=_[3]),this.elements=i};function xt(){var _="浏览器不支持webgl",i="电脑不支持webgl",e=function(n,D,l){function X(G){var q=document.getElementsByTagName("body")[0];if(q){var re=window.WebGLRenderingContext?i:_;G&&(re+=G),q.innerHTML=re}}l=l||X,n.addEventListener&&n.addEventListener("webglcontextcreationerror",function(G){l(G.statusMessage)},!1);var O=c(n,D);return O||(window.WebGLRenderingContext,l("")),O},c=function(n,D){for(var l=["webgl","experimental-webgl","webkit-3d","moz-webgl"],X=null,O=0;O<l.length;++O){try{X=n.getContext(l[O],D)}catch{}if(X)break}return X};return{create3DContext:c,setupWebGL:e}}const Bt=xt();window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(_,i){window.setTimeout(_,1e3/60)}}());window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout);const Ct=o("header",null,"第三章：绘制和变换",-1),pt={class:"example"},Lt={class:"item"},wt=o("div",{class:"desc"},"一次绘制多个点，使用缓冲区对象",-1),Mt={class:"canvas"},Pt={class:"item"},St=o("div",{class:"desc"},"绘制图形，使用缓冲区对象",-1),Ut={class:"canvas"},Dt={class:"item"},yt=o("div",{class:"desc"},"平移",-1),Ot={class:"canvas"},It={class:"item"},Nt=o("div",{class:"desc"},"旋转",-1),Yt={class:"canvas"},Gt={class:"item"},Ht=o("div",{class:"desc"},"矩阵旋转",-1),kt={class:"canvas"},Vt={class:"item"},Wt=o("div",{class:"desc"},"矩阵平移",-1),gt={class:"canvas"},$t={class:"item"},Xt=o("div",{class:"desc"},"矩阵缩放",-1),jt={class:"canvas"},zt=Ye({__name:"chapter-03",setup(_){const i=ue(null),e=ue(null),c=ue(null),n=ue(null),D=ue(null),l=ue(null),X=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight,r(X).width=r(X).clientWidth,r(X).height=r(X).clientHeight});function O(){const s=r(X).getContext("webgl");if(!Re(s,`
        attribute vec4 a_Position;
        uniform mat4 u_ScaleMatrix;
        void main() {
          gl_Position = u_ScaleMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const V=s.getAttribLocation(s.program,"a_Position"),R=s.getUniformLocation(s.program,"u_ScaleMatrix"),I=new Float32Array([-.1,-.2,0,.2,.1,-.2]),h=new Float32Array([2,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);s.uniformMatrix4fv(R,!1,h);const E=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,E),s.bufferData(s.ARRAY_BUFFER,I,s.STATIC_DRAW),s.vertexAttribPointer(V,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(V),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLES,0,3)}function G(){const s=r(l).getContext("webgl");if(!Re(s,`
        attribute vec4 a_Position;
        uniform mat4 u_TranslateMatrix;
        void main() {
          gl_Position = u_TranslateMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const V=s.getAttribLocation(s.program,"a_Position"),R=s.getUniformLocation(s.program,"u_TranslateMatrix"),I=new Float32Array([-.1,-.2,0,.2,.1,-.2]),h=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,.5,.5,.5,1]);s.uniformMatrix4fv(R,!1,h);const E=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,E),s.bufferData(s.ARRAY_BUFFER,I,s.STATIC_DRAW),s.vertexAttribPointer(V,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(V),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLES,0,3)}function q(){const s=r(D).getContext("webgl");if(!Re(s,`
        attribute vec4 a_Position;
        uniform mat4 u_RotateMatrix;
        void main() {
          gl_Position = u_RotateMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const V=s.getAttribLocation(s.program,"a_Position"),R=s.getUniformLocation(s.program,"u_RotateMatrix"),I=new Float32Array([-.1,-.2,0,.2,.1,-.2]),h=30*Math.PI/180,E=new Float32Array([Math.cos(h),Math.sin(h),0,0,-Math.sin(h),Math.cos(h),0,0,0,0,1,0,0,0,0,1]);s.uniformMatrix4fv(R,!1,E);const u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,I,s.STATIC_DRAW),s.vertexAttribPointer(V,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(V),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLES,0,3)}function re(){const s=r(n).getContext("webgl");if(!Re(s,`
        attribute vec4 a_Position;
        uniform float u_CosR, u_SinR;
        void main() {
          gl_Position.x = a_Position.x * u_CosR - a_Position.y * u_SinR;
          gl_Position.y = a_Position.x * u_SinR + a_Position.y * u_CosR;
          gl_Position.z = a_Position.z;
          gl_Position.w = 1.0;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const V=s.getAttribLocation(s.program,"a_Position"),R=s.getUniformLocation(s.program,"u_SinR"),I=s.getUniformLocation(s.program,"u_CosR"),h=new Float32Array([-.1,-.2,0,.2,.1,-.2]),E=30*Math.PI/180;s.uniform1f(R,Math.sin(E)),s.uniform1f(I,Math.cos(E));const u=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,u),s.bufferData(s.ARRAY_BUFFER,h,s.STATIC_DRAW),s.vertexAttribPointer(V,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(V),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLES,0,3)}function oe(){const s=r(c).getContext("webgl");if(!Re(s,`
        attribute vec4 a_Position;
        uniform vec4 u_Transform;
        void main() {
          gl_Position = a_Position + u_Transform;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const V=s.getAttribLocation(s.program,"a_Position"),R=s.getUniformLocation(s.program,"u_Transform"),I=new Float32Array([-.1,-.2,0,.2,.1,-.2]);s.uniform4f(R,0,-.2,0,0);const h=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,h),s.bufferData(s.ARRAY_BUFFER,I,s.STATIC_DRAW),s.vertexAttribPointer(V,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(V),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLES,0,3)}function M(){var x=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,s=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,a=r(e),m=a.getContext("webgl");if(m&&Re(m,x,s)){var V=C(m);V<0||(m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.LINE_LOOP,0,V))}}function f(){var x=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,s=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,a=r(i),m=a.getContext("webgl");if(m&&Re(m,x,s)){var V=C(m);V<0||(m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.POINTS,0,V))}}function C(x){const s=new Float32Array([-.1,0,0,.2,.1,0]),a=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,a),x.bufferData(x.ARRAY_BUFFER,s,x.STATIC_DRAW);const m=x.getAttribLocation(x.program,"a_Position");return x.vertexAttribPointer(m,2,x.FLOAT,!1,0,0),x.enableVertexAttribArray(m),s.length/2}return(x,s)=>{const a=ge("dbtap");return Ge(),He("div",null,[Ct,o("div",pt,[o("div",Lt,[wt,o("div",Mt,[de(o("canvas",{onDblclickOnce:f,ref_key:"gl06",ref:i},null,544),[[a,f]])])]),o("div",Pt,[St,o("div",Ut,[de(o("canvas",{onDblclickOnce:M,ref_key:"gl07",ref:e},null,544),[[a,M]])])]),o("div",Dt,[yt,o("div",Ot,[de(o("canvas",{onDblclickOnce:oe,ref_key:"gl08",ref:c},null,544),[[a,oe]])])]),o("div",It,[Nt,o("div",Yt,[de(o("canvas",{onDblclickOnce:re,ref_key:"gl09",ref:n},null,544),[[a,re]])])]),o("div",Gt,[Ht,o("div",kt,[de(o("canvas",{onDblclickOnce:q,ref_key:"gl10",ref:D},null,544),[[a,q]])])]),o("div",Vt,[Wt,o("div",gt,[de(o("canvas",{onDblclickOnce:G,ref_key:"gl11",ref:l},null,544),[[a,G]])])]),o("div",$t,[Xt,o("div",jt,[de(o("canvas",{onDblclickOnce:O,ref_key:"gl12",ref:X},null,544),[[a,O]])])])])])}}}),qt=o("header",null,"第四章：高级变换和动画",-1),Zt={class:"example"},Kt={class:"item"},Jt=o("div",{class:"desc"},"使用矩阵库,矩阵旋转",-1),Qt={class:"canvas"},er={class:"item"},tr=o("div",{class:"desc"},"旋转+移动的动画，requestAnimation",-1),rr={class:"canvas"},or=Ye({__name:"chapter-04",setup(_){const i=ue(null),e=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight});function c(){var l=`
        attribute vec4 a_Position;
        uniform mat4 u_ModelMatrix;
        void main() {
          gl_Position = u_ModelMatrix * a_Position;
        }
      `,X=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,O=r(e),G=O.getContext("webgl");if(!G||!Re(G,l,X))return;var q=D(G);if(q<0)return;G.clearColor(0,0,0,1);var re=G.getUniformLocation(G.program,"u_ModelMatrix");if(!re)return;var oe=45,M=0,f=new S,C=function(){M=a(M),x(G,q,M,f,re),requestAnimationFrame(C)};C();function x(m,V,R,I,h){I.setRotate(R,0,0,1),I.translate(.35,0,0),m.uniformMatrix4fv(h,!1,I.elements),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLES,0,V)}var s=Date.now();function a(m){var V=Date.now();s||(s=Date.now());var R=V-s;s=V;var I=m+oe*R/1e3;return I%=360}}function n(){var l=`
        attribute vec4 a_Position;
        uniform mat4 u_xformMatrix;
        void main() {
          gl_Position = u_xformMatrix * a_Position;
        }
      `,X=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,O=r(i),G=O.getContext("webgl");if(!G||!Re(G,l,X))return;var q=M(G);if(q<0)return;var re=new S;re.setScale(2,2,1);var oe=G.getUniformLocation(G.program,"u_xformMatrix");if(!oe)return;G.uniformMatrix4fv(oe,!1,re.elements),G.clearColor(0,0,0,1),G.clear(G.COLOR_BUFFER_BIT),G.drawArrays(G.TRIANGLES,0,q);function M(f){const C=new Float32Array([-.1,0,0,.2,.1,0]),x=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,x),f.bufferData(f.ARRAY_BUFFER,C,f.STATIC_DRAW);const s=f.getAttribLocation(f.program,"a_Position");return f.vertexAttribPointer(s,2,f.FLOAT,!1,0,0),f.enableVertexAttribArray(s),C.length/2}}function D(l){const X=new Float32Array([-.1,0,0,.2,.1,0]),O=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,O),l.bufferData(l.ARRAY_BUFFER,X,l.STATIC_DRAW);const G=l.getAttribLocation(l.program,"a_Position");return l.vertexAttribPointer(G,2,l.FLOAT,!1,0,0),l.enableVertexAttribArray(G),X.length/2}return(l,X)=>{const O=ge("dbtap");return Ge(),He("div",null,[qt,o("div",Zt,[o("div",Kt,[Jt,o("div",Qt,[de(o("canvas",{onDblclickOnce:n,ref_key:"gl13",ref:i},null,544),[[O,n]])])]),o("div",er,[tr,o("div",rr,[de(o("canvas",{onDblclickOnce:c,ref_key:"gl14",ref:e},null,544),[[O,c]])])])])])}}}),ar=o("header",null,"第五章：颜色与纹理",-1),ir={class:"example"},nr={class:"item"},sr=o("div",{class:"desc"},"创建多个缓冲区对象来同时传输位置和大小信息",-1),cr={class:"canvas"},fr={class:"item"},_r=o("div",{class:"desc"},"单个缓冲区同时传输位置和大小信息",-1),ur={class:"canvas"},vr={class:"item"},lr=o("div",{class:"desc"},"单个缓冲区同时传输位置和颜色信息，图形装配和光栅化",-1),dr={class:"canvas"},mr={class:"item"},Ar=o("div",{class:"desc"}," 通过片元着色器内置变量gl_FragCoord访问片元的坐标值，x/y，左下角为零点坐标, drawingBufferWidth和drawBufferHeight获取绘图区域宽高 ",-1),Rr={class:"canvas"},Er={class:"item"},Fr=o("div",{class:"desc"}," 纹理（图片）映射：将纹理（图片）的纹素（像素）映射到片元上的过程，左下角为零点坐标 ",-1),br={class:"canvas"},hr={class:"item"},Tr=o("div",{class:"desc"},"多张纹理贴图",-1),xr={class:"canvas"},Br=Ye({__name:"chapter-05",setup(_){const i=ue(null),e=ue(null),c=ue(null),n=ue(null),D=ue(null),l=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight});function X(){var M=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
          gl_Position = a_Position;
          v_TexCoord = a_TexCoord;
        }
      `,f=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform sampler2D u_Sampler0;
        uniform sampler2D u_Sampler1;
        varying vec2 v_TexCoord;
        void main() {
          vec4 color0 = texture2D(u_Sampler0, v_TexCoord);
          vec4 color1 = texture2D(u_Sampler1, v_TexCoord);
          gl_FragColor = color0 * color1;
        }
      `,C=r(l),x=C.getContext("webgl");if(!x||!Re(x,M,f))return;var s=a(x);if(s<0||(x.clearColor(0,0,0,1),!m(x,s)))return;function a(h){var E=new Float32Array([-.5,.5,0,1,-.5,-.5,0,0,.5,.5,1,1,.5,-.5,1,0]),u=4,ee=h.createBuffer();if(!ee)return-1;h.bindBuffer(h.ARRAY_BUFFER,ee),h.bufferData(h.ARRAY_BUFFER,E,h.STATIC_DRAW);var y=E.BYTES_PER_ELEMENT,W=h.getAttribLocation(h.program,"a_Position");if(W<0)return-1;h.vertexAttribPointer(W,2,h.FLOAT,!1,y*4,0),h.enableVertexAttribArray(W);var ae=h.getAttribLocation(h.program,"a_TexCoord");return ae<0?-1:(h.vertexAttribPointer(ae,2,h.FLOAT,!1,y*4,y*2),h.enableVertexAttribArray(ae),u)}function m(h,E){var u=h.createTexture(),ee=h.createTexture();if(!u||!ee)return!1;var y=h.getUniformLocation(h.program,"u_Sampler0"),W=h.getUniformLocation(h.program,"u_Sampler1");if(!y||!W)return!1;var ae=new Image,J=new Image;return!ae||!J?!1:(ae.onload=function(){I(h,E,u,y,ae,0)},J.onload=function(){I(h,E,ee,W,J,1)},ae.src="/lab-static/images/webgl-practice/sy.jpg",J.src="/lab-static/images/webgl-practice/wx.jpg",!0)}var V=!1,R=!1;function I(h,E,u,ee,y,W){h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,1),W==0?(h.activeTexture(h.TEXTURE0),V=!0):(h.activeTexture(h.TEXTURE1),R=!0),h.bindTexture(h.TEXTURE_2D,u),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.LINEAR),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,y),h.uniform1i(ee,W),h.clear(h.COLOR_BUFFER_BIT),V&&R&&h.drawArrays(h.TRIANGLE_STRIP,0,E)}}function O(){const M=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
          gl_Position = a_Position;
          v_TexCoord = a_TexCoord;
        }
      `,f=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      // 纹理单元
      uniform sampler2D u_Sampler;
      varying vec2 v_TexCoord;
      void main() {
        // 根据坐标从纹理单元取样
        gl_FragColor = texture2D(u_Sampler,v_TexCoord);
      }
      `,x=r(D).getContext("webgl");if(!x||!V(x,M,f))return;const s=m(x);if(s<0)return;x.clearColor(1,1,1,1),a(x,s);function a(R,I){const h=new Image;h.src="/lab-static/images/webgl-practice/wx.jpg",h.onload=function(){R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,1),R.activeTexture(R.TEXTURE0);const E=R.createTexture();R.bindTexture(R.TEXTURE_2D,E),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MIN_FILTER,R.LINEAR),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_MAG_FILTER,R.NEAREST),R.texImage2D(R.TEXTURE_2D,0,R.RGB,R.RGB,R.UNSIGNED_BYTE,h),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_T,R.MIRRORED_REPEAT),R.texParameteri(R.TEXTURE_2D,R.TEXTURE_WRAP_S,R.CLAMP_TO_EDGE);const u=R.getUniformLocation(R.program,"u_Sampler");R.uniform1i(u,0),R.clear(R.COLOR_BUFFER_BIT),R.drawArrays(R.TRIANGLE_STRIP,0,I)}}function m(R){const I=new Float32Array([-.5,.5,-.1,1.1,.5,.5,1.1,1.1,-.5,-.5,-.1,-.1,.5,-.5,1.1,-.1]),h=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,h),R.bufferData(R.ARRAY_BUFFER,I,R.STATIC_DRAW);const E=R.getAttribLocation(R.program,"a_Position"),u=I.BYTES_PER_ELEMENT;R.vertexAttribPointer(E,2,R.FLOAT,!1,u*4,0),R.enableVertexAttribArray(E);const ee=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,ee),R.bufferData(R.ARRAY_BUFFER,I,R.STATIC_DRAW);const y=R.getAttribLocation(R.program,"a_TexCoord");return R.vertexAttribPointer(y,2,R.FLOAT,!1,u*4,u*2),R.enableVertexAttribArray(y),I.length/4}function V(R,I,h){const E=R.createShader(R.VERTEX_SHADER),u=R.createShader(R.FRAGMENT_SHADER);R.shaderSource(E,I),R.shaderSource(u,h),R.compileShader(E),R.compileShader(u);const ee=R.getShaderParameter(E,R.COMPILE_STATUS),y=R.getShaderParameter(u,R.COMPILE_STATUS);if(!ee){const J=R.getShaderInfoLog(E);console.error(J),R.deleteShader(E);return}if(!y){const J=R.getShaderInfoLog(u);console.error(J),R.deleteShader(u);return}const W=R.createProgram();if(R.attachShader(W,E),R.attachShader(W,u),R.linkProgram(W),!R.getProgramParameter(W,R.LINK_STATUS)){const J=R.getProgramInfoLog(W);console.error(J),R.deleteShader(E),R.deleteShader(u),R.deleteProgram(W);return}return R.program=W,R.useProgram(W),!0}}function G(){var M=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,f=`
        precision mediump float;
        uniform float u_Width;
        uniform float u_Height;
        void main() {
          gl_FragColor = vec4(gl_FragCoord.x/u_Width, 0.0, gl_FragCoord.y/u_Height, 1.0);
        }
      `,C=r(n),x=C.getContext("webgl");if(!x||!Re(x,M,f))return;const s=a(x);if(s<0)return;x.clearColor(0,0,0,1),x.clear(x.COLOR_BUFFER_BIT),x.drawArrays(x.TRIANGLES,0,s);function a(m){var V=new Float32Array([1,-1,-1,-1,1,1]),R=3,I=m.createBuffer();if(!I)return-1;m.bindBuffer(m.ARRAY_BUFFER,I),m.bufferData(m.ARRAY_BUFFER,V,m.STATIC_DRAW);var h=m.getAttribLocation(m.program,"a_Position");if(h<0)return-1;m.vertexAttribPointer(h,2,m.FLOAT,!1,0,0);var E=m.getUniformLocation(m.program,"u_Width");if(!E)return-1;var u=m.getUniformLocation(m.program,"u_Height");return u?(m.uniform1f(E,m.drawingBufferWidth),m.uniform1f(u,m.drawingBufferHeight),m.enableVertexAttribArray(h),m.bindBuffer(m.ARRAY_BUFFER,null),R):-1}}function q(){var M=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main() {
          gl_Position = a_Position;
          v_Color = a_Color;
        }
      `,f=`
        precision mediump float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,C=r(c),x=C.getContext("webgl");if(!x||!Re(x,M,f))return;var s=a(x);if(s<0)return;x.clearColor(0,0,0,1),x.clear(x.COLOR_BUFFER_BIT),x.drawArrays(x.TRIANGLES,0,s);function a(m){const V=new Float32Array([-.2,0,.2,.3,.4,.2,0,.1,0,.6,0,.4,0,.5,.2]),R=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,R),m.bufferData(m.ARRAY_BUFFER,V,m.STATIC_DRAW);const I=m.getAttribLocation(m.program,"a_Position"),h=V.BYTES_PER_ELEMENT;m.vertexAttribPointer(I,2,m.FLOAT,!1,h*5,0),m.enableVertexAttribArray(I);const E=m.getAttribLocation(m.program,"a_Color");return m.vertexAttribPointer(E,3,m.FLOAT,!1,h*5,h*2),m.enableVertexAttribArray(E),V.length/5}}function re(){var M=`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = a_PointSize;
        }
      `,f=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,C=r(e),x=C.getContext("webgl");if(!x||!Re(x,M,f))return;var s=a(x);if(s<0)return;x.clearColor(0,0,0,1),x.clear(x.COLOR_BUFFER_BIT),x.drawArrays(x.POINTS,0,s);function a(m){const V=new Float32Array([.1,.1,5,-.1,.1,10]),R=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,R),m.bufferData(m.ARRAY_BUFFER,V,m.STATIC_DRAW);const I=V.BYTES_PER_ELEMENT,h=m.getAttribLocation(m.program,"a_Position"),E=m.getAttribLocation(m.program,"a_PointSize");return m.vertexAttribPointer(h,2,m.FLOAT,!1,I*3,0),m.vertexAttribPointer(E,1,m.FLOAT,!1,I*3,I*2),m.enableVertexAttribArray(h),m.enableVertexAttribArray(E),V.length/3}}function oe(){var M=`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = a_PointSize;
        }
      `,f=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,C=r(i),x=C.getContext("webgl");if(!x||!Re(x,M,f))return;var s=a(x);if(s<0)return;x.clearColor(0,0,0,1),x.clear(x.COLOR_BUFFER_BIT),x.drawArrays(x.POINTS,0,s);function a(m){const V=new Float32Array([.1,.1,-.1,.1]),R=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,R),m.bufferData(m.ARRAY_BUFFER,V,m.STATIC_DRAW);const I=m.getAttribLocation(m.program,"a_Position");m.vertexAttribPointer(I,2,m.FLOAT,!1,0,0),m.enableVertexAttribArray(I);const h=new Float32Array([5,10]),E=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,E),m.bufferData(m.ARRAY_BUFFER,h,m.STATIC_DRAW);const u=m.getAttribLocation(m.program,"a_PointSize");return m.vertexAttribPointer(u,1,m.FLOAT,!1,0,0),m.enableVertexAttribArray(u),V.length/2}}return(M,f)=>{const C=ge("dbtap");return Ge(),He("div",null,[ar,o("div",ir,[o("div",nr,[sr,o("div",cr,[de(o("canvas",{onDblclickOnce:oe,ref_key:"gl15",ref:i},null,544),[[C,oe]])])]),o("div",fr,[_r,o("div",ur,[de(o("canvas",{onDblclickOnce:re,ref_key:"gl16",ref:e},null,544),[[C,re]])])]),o("div",vr,[lr,o("div",dr,[de(o("canvas",{onDblclickOnce:q,ref_key:"gl17",ref:c},null,544),[[C,q]])])]),o("div",mr,[Ar,o("div",Rr,[de(o("canvas",{onDblclickOnce:G,ref_key:"gl18",ref:n},null,544),[[C,G]])])]),o("div",Er,[Fr,o("div",br,[de(o("canvas",{onDblclickOnce:O,ref_key:"gl19",ref:D},null,544),[[C,O]])])]),o("div",hr,[Tr,o("div",xr,[de(o("canvas",{onDblclickOnce:X,ref_key:"gl20",ref:l},null,544),[[C,X]])])])])])}}}),Oe=_=>(qe("data-v-05c4964a"),_=_(),Ze(),_),Cr=Oe(()=>o("header",null,"第七章：三维",-1)),pr={class:"example"},Lr={class:"item"},wr=Oe(()=>o("div",{class:"desc"}," 设置观察者视角，三个重要点，观察者的位置，看向的点和头顶指向，这三个量可以构建一个视图矩阵，视图矩阵和模型矩阵相乘就可以得到模型视图矩阵 ",-1)),Mr={class:"canvas"},Pr={class:"item"},Sr=Oe(()=>o("div",{class:"desc"}," 使用键盘(A,D)改变视点的位置，引出可视区域的问题，深度的问题，这里是使用的平面投影矩阵，所以没有近大远小，超出可视区域的部分被裁减掉了 ",-1)),Ur={class:"canvas"},Dr={class:"item"},yr=Oe(()=>o("div",{class:"desc"},"设置可视空间投影，正射投影和透视投影之正射投影。参数：上下左右前后",-1)),Or={class:"canvas"},Ir={class:"item"},Nr=Oe(()=>o("div",{class:"desc"},"同时设置视角视点和投影矩阵,即视图矩阵与投影矩阵相乘",-1)),Yr={class:"canvas"},Gr={class:"item"},Hr=Oe(()=>o("div",{class:"desc"},"如果投影矩阵的宽高比与canvas不一致，会缩放拉伸以适应画布",-1)),kr={class:"canvas"},Vr={class:"item"},Wr=Oe(()=>o("div",{class:"desc"}," 设置可视空间投影，正射投影和透视投影之正射投影。参数：开角，前后，宽高比, 同时加上模型矩阵，组成MVP ",-1)),gr={class:"canvas"},$r={class:"item"},Xr=Oe(()=>o("div",{class:"desc"}," 开启隐藏面消除以正确的处理图形的前后关系，开启gl.DEPTH_TEST, 绘制前清空gl.DEPTH_BUFFER_BIT ",-1)),jr={class:"canvas"},zr={class:"item"},qr=Oe(()=>o("div",{class:"desc"}," 深度冲突，当两个面的深度值过于接近时，深度缓冲区不能正确的区分前后关系，就会产生斑驳的现象，尤其是在有一定的旋转的情况下。通过[多边形偏移]机制可以解决这个问题 ",-1)),Zr={class:"canvas"},Kr={class:"item"},Jr=Oe(()=>o("div",{class:"desc"}," 通过顶点索引绘制物体,只需要8个顶点数据,每个都有自己的索引,三个索引对应三个点,三个点可以绘制一个三角形,两个三角形构成一个正方形 ",-1)),Qr={class:"canvas"},eo={class:"item"},to=Oe(()=>o("div",{class:"desc"},"解决通过索引绘制的问题,不能为每个面指定单独的颜色,需要至少24个点",-1)),ro={class:"canvas"},oo=Ye({__name:"chapter-07",setup(_){const i=ue(null),e=ue(null),c=ue(null),n=ue(null),D=ue(null),l=ue(null),X=ue(null),O=ue(null),G=ue(null),q=ue(null),re=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight,r(X).width=r(X).clientWidth,r(X).height=r(X).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight,r(G).width=r(G).clientWidth,r(G).height=r(G).clientHeight,r(q).width=r(q).clientWidth,r(q).height=r(q).clientHeight});function oe(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(q),u=E.getContext("webgl");Re(u,I,h);var ee=ae(u);u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST);var y=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new S;W.setPerspective(30,1,1,100),W.lookAt(3,3,7,0,0,0,0,1,0),u.uniformMatrix4fv(y,!1,W.elements),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,ee,u.UNSIGNED_BYTE,0);function ae(ne){var Q=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),A=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),g=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),F=ne.createBuffer();return J(ne,Q,3,ne.FLOAT,"a_Position"),J(ne,A,3,ne.FLOAT,"a_Color"),ne.bindBuffer(ne.ELEMENT_ARRAY_BUFFER,F),ne.bufferData(ne.ELEMENT_ARRAY_BUFFER,g,ne.STATIC_DRAW),g.length}function J(ne,Q,A,g,F){var v=ne.createBuffer();ne.bindBuffer(ne.ARRAY_BUFFER,v),ne.bufferData(ne.ARRAY_BUFFER,Q,ne.STATIC_DRAW);var B=ne.getAttribLocation(ne.program,F);return ne.vertexAttribPointer(B,A,g,!1,0,0),ne.enableVertexAttribArray(B),ne.bindBuffer(ne.ARRAY_BUFFER,null),!0}}function M(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(G),u=E.getContext("webgl");Re(u,I,h);var ee=Q(u);const y=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new S,ae=new S;ae.setTranslate(0,0,0);const J=new S;J.setLookAt(3.06,2.5,10,0,0,-2,0,1,0);const ne=new S;ne.setPerspective(30,E.width/E.height,1,100),W.set(ne).multiply(J).multiply(ae),u.uniformMatrix4fv(y,!1,W.elements),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.enable(u.POLYGON_OFFSET_FILL),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.polygonOffset(1,1),u.drawElements(u.TRIANGLES,ee,u.UNSIGNED_BYTE,0);function Q(A){const g=new Float32Array([-1,1,1,.5,.1,.1,1,1,1,.5,.5,.1,-1,-1,1,.1,.5,.1,1,-1,1,.1,.1,.5,-1,1,-1,.3,.1,.3,1,1,-1,.3,.3,.1,-1,-1,-1,.1,.3,.2,1,-1,-1,.7,.1,.3]),F=g.BYTES_PER_ELEMENT,v=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,4,5,0,5,0,1,6,7,2,7,2,3,4,0,6,0,6,2,1,5,3,5,3,7]),B=A.createBuffer();A.bindBuffer(A.ARRAY_BUFFER,B),A.bufferData(A.ARRAY_BUFFER,g,A.STATIC_DRAW);const p=A.getAttribLocation(A.program,"a_Position"),Y=A.getAttribLocation(A.program,"a_Color");A.vertexAttribPointer(p,3,A.FLOAT,!1,F*6,0),A.vertexAttribPointer(Y,3,A.FLOAT,!1,F*6,F*3),A.enableVertexAttribArray(p),A.enableVertexAttribArray(Y);const Z=A.createBuffer();return A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,Z),A.bufferData(A.ELEMENT_ARRAY_BUFFER,v,A.STATIC_DRAW),v.length}}function f(){const I=`
      attribute vec4 a_Position;
      uniform mat4 u_MvpMatrix;
      attribute vec4 a_Color;
      varying vec4 v_Color;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_Color = a_Color;
      }
      `,h=`
      #ifdef GL_ES
        precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,E=r(O),u=E.getContext("webgl");Re(u,I,h);const ee=Q(u),y=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new S,ae=new S;ae.setTranslate(0,0,0);const J=new S;J.setLookAt(3.06,2.5,10,0,0,-2,0,1,0);const ne=new S;ne.setPerspective(30,E.width/E.height,1,100),W.set(ne).multiply(J).multiply(ae),u.uniformMatrix4fv(y,!1,W.elements),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT||u.DEPTH_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,ee/2),u.polygonOffset(1,1),u.drawArrays(u.TRIANGLES,ee/2,ee/2);function Q(A){const g=new Float32Array([0,2.5,-5,.4,1,.4,-2.5,-2.5,-5,.4,1,.4,2.5,-2.5,-5,1,.4,.4,0,3,-5,1,.4,.4,-3,-3,-5,1,1,.4,3,-3,-5,1,1,.4]),F=g.BYTES_PER_ELEMENT,v=A.createBuffer();A.bindBuffer(A.ARRAY_BUFFER,v),A.bufferData(A.ARRAY_BUFFER,g,A.STATIC_DRAW);const B=A.getAttribLocation(A.program,"a_Position");A.vertexAttribPointer(B,3,A.FLOAT,!1,6*F,0),A.enableVertexAttribArray(B);const p=A.getAttribLocation(A.program,"a_Color");return A.vertexAttribPointer(p,3,A.FLOAT,!1,6*F,3*F),A.enableVertexAttribArray(p),g.length/6}}function C(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(X),u=E.getContext("webgl");Re(u,I,h);var ee=Q(u);u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST);var y=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new S,ae=new S,J=new S,ne=new S;W.setTranslate(.75,0,0),ae.setLookAt(0,0,5,0,0,-100,0,1,0),J.setPerspective(30,E.width/E.height,1,100),ne.set(J).multiply(ae).multiply(W),u.uniformMatrix4fv(y,!1,ne.elements),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,ee),W.setTranslate(-.75,0,0),ne.set(J).multiply(ae).multiply(W),u.uniformMatrix4fv(y,!1,ne.elements),u.drawArrays(u.TRIANGLES,0,ee);function Q(A){var g=new Float32Array([0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4]),F=9,v=A.createBuffer();A.bindBuffer(A.ARRAY_BUFFER,v),A.bufferData(A.ARRAY_BUFFER,g,A.STATIC_DRAW);var B=g.BYTES_PER_ELEMENT,p=A.getAttribLocation(A.program,"a_Position");A.vertexAttribPointer(p,3,A.FLOAT,!1,B*6,0),A.enableVertexAttribArray(p);var Y=A.getAttribLocation(A.program,"a_Color");return A.vertexAttribPointer(Y,3,A.FLOAT,!1,B*6,B*3),A.enableVertexAttribArray(Y),A.bindBuffer(A.ARRAY_BUFFER,null),F}}function x(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;
        uniform mat4 u_ProjMatrix;
        uniform mat4 u_ModeMatrix;
        varying vec4 v_Color;
        void main() {
          // 矩阵乘法的顺序也很重要
          gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModeMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(l),u=E.getContext("webgl");Re(u,I,h);var ee=A(u);u.clearColor(0,0,0,1);var y=u.getUniformLocation(u.program,"u_ViewMatrix"),W=u.getUniformLocation(u.program,"u_ProjMatrix"),ae=u.getUniformLocation(u.program,"u_ModeMatrix"),J=new S,ne=new S,Q=new S;J.setLookAt(0,0,5,0,0,-100,0,1,0),ne.setPerspective(30,E.width/E.height,1,100),Q.setTranslate(0,1,0),u.uniformMatrix4fv(y,!1,J.elements),u.uniformMatrix4fv(W,!1,ne.elements),u.uniformMatrix4fv(ae,!1,Q.elements),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,ee);function A(g){var F=new Float32Array([.75,1,-4,.4,1,.4,.25,-1,-4,.4,1,.4,1.25,-1,-4,1,.4,.4,.75,1,-2,1,1,.4,.25,-1,-2,1,1,.4,1.25,-1,-2,1,.4,.4,.75,1,0,.4,.4,1,.25,-1,0,.4,.4,1,1.25,-1,0,1,.4,.4,-.75,1,-4,.4,1,.4,-1.25,-1,-4,.4,1,.4,-.25,-1,-4,1,.4,.4,-.75,1,-2,1,1,.4,-1.25,-1,-2,1,1,.4,-.25,-1,-2,1,.4,.4,-.75,1,0,.4,.4,1,-1.25,-1,0,.4,.4,1,-.25,-1,0,1,.4,.4]),v=18,B=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,B),g.bufferData(g.ARRAY_BUFFER,F,g.STATIC_DRAW);var p=F.BYTES_PER_ELEMENT,Y=g.getAttribLocation(g.program,"a_Position");g.vertexAttribPointer(Y,3,g.FLOAT,!1,p*6,0),g.enableVertexAttribArray(Y);var Z=g.getAttribLocation(g.program,"a_Color");return g.vertexAttribPointer(Z,3,g.FLOAT,!1,p*6,p*3),g.enableVertexAttribArray(Z),v}}function s(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(D),u=E.getContext("webgl");Re(u,I,h);var ee=ae(u);u.clearColor(0,0,0,1);var y=u.getUniformLocation(u.program,"u_ProjMatrix"),W=new S;function ae(A){var g=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),F=9,v=A.createBuffer();A.bindBuffer(A.ARRAY_BUFFER,v),A.bufferData(A.ARRAY_BUFFER,g,A.STATIC_DRAW);var B=g.BYTES_PER_ELEMENT,p=A.getAttribLocation(A.program,"a_Position");A.vertexAttribPointer(p,3,A.FLOAT,!1,B*6,0),A.enableVertexAttribArray(p);var Y=A.getAttribLocation(A.program,"a_Color");return A.vertexAttribPointer(Y,3,A.FLOAT,!1,B*6,B*3),A.enableVertexAttribArray(Y),A.bindBuffer(A.ARRAY_BUFFER,null),F}var J=0,ne=.5;Q(u,ee,y,W);function Q(A,g,F,v){v.setOrtho(-1,1,-.5,.5,J,ne),A.uniformMatrix4fv(F,!1,v.elements),A.clear(A.COLOR_BUFFER_BIT),A.drawArrays(A.TRIANGLES,0,g)}}function a(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * u_ViewMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(n),u=E.getContext("webgl");Re(u,I,h);var ee=ne(u);u.clearColor(0,0,0,1);var y=u.getUniformLocation(u.program,"u_ViewMatrix"),W=u.getUniformLocation(u.program,"u_ProjMatrix"),ae=new S;document.onkeydown=function(B){F(B,u,ee,y,ae)};var J=new S;J.setOrtho(-1,1,-1,1,0,2),u.uniformMatrix4fv(W,!1,J.elements);function ne(B){var p=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),Y=9,Z=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,Z),B.bufferData(B.ARRAY_BUFFER,p,B.STATIC_DRAW);var ce=p.BYTES_PER_ELEMENT,K=B.getAttribLocation(B.program,"a_Position");B.vertexAttribPointer(K,3,B.FLOAT,!1,ce*6,0),B.enableVertexAttribArray(K);var w=B.getAttribLocation(B.program,"a_Color");return B.vertexAttribPointer(w,3,B.FLOAT,!1,ce*6,ce*3),B.enableVertexAttribArray(w),Y}var Q=0,A=0,g=.25;function F(B,p,Y,Z,ce){if(B.keyCode==39)Q+=.01;else if(B.keyCode==37)Q-=.01;else return;v(p,Y,Z,ce)}v(u,ee,y,ae);function v(B,p,Y,Z){Z.setLookAt(Q,A,g,0,0,0,0,1,0),B.uniformMatrix4fv(Y,!1,Z.elements),B.clear(B.COLOR_BUFFER_BIT),B.drawArrays(B.TRIANGLES,0,p)}}function m(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(c),u=E.getContext("webgl");Re(u,I,h);var ee=ae(u);u.clearColor(0,0,0,1);var y=u.getUniformLocation(u.program,"u_ProjMatrix"),W=new S;E.addEventListener("mouseup",function(F){Q(F,u,ee,y,W)});function ae(F){var v=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),B=9,p=F.createBuffer();F.bindBuffer(F.ARRAY_BUFFER,p),F.bufferData(F.ARRAY_BUFFER,v,F.STATIC_DRAW);var Y=v.BYTES_PER_ELEMENT,Z=F.getAttribLocation(F.program,"a_Position");F.vertexAttribPointer(Z,3,F.FLOAT,!1,Y*6,0),F.enableVertexAttribArray(Z);var ce=F.getAttribLocation(F.program,"a_Color");return F.vertexAttribPointer(ce,3,F.FLOAT,!1,Y*6,Y*3),F.enableVertexAttribArray(ce),B}var J=0,ne=-.5;function Q(F,v,B,p,Y){const{layerX:Z,layerY:ce}=F;Z>210&&ce>210&&(ne-=.1),Z>210&&ce<210&&(ne+=.1),Z<210&&ce>210&&(J-=.1),Z<210&&ce<210&&(J+=.1),g(v,B,p,Y)}const A=r(re);g(u,ee,y,W);function g(F,v,B,p){p.setOrtho(-1,1,-1,1,-J,-ne),F.uniformMatrix4fv(B,!1,p.elements),A.innerHTML=`near:${J.toFixed(2)}|far:${ne.toFixed(2)}`,F.clear(F.COLOR_BUFFER_BIT),F.drawArrays(F.TRIANGLES,0,v)}}function V(){var I=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ViewMatrix * a_Position;
          v_Color = a_Color;
        }
      `,h=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,E=r(e),u=E.getContext("webgl");Re(u,I,h);var ee=ae(u);u.clearColor(0,0,0,1);var y=u.getUniformLocation(u.program,"u_ViewMatrix"),W=new S;document.onkeydown=function(F){A(F,u,ee,y,W)};function ae(F){var v=new Float32Array([0,.5,-.4,.4,1,.4,-.5,-.5,-.4,.4,1,.4,.5,-.5,-.4,1,.4,.4,.5,.4,-.2,1,.4,.4,-.5,.4,-.2,1,1,.4,0,-.6,-.2,1,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,1,.4,.4]),B=9,p=F.createBuffer();F.bindBuffer(F.ARRAY_BUFFER,p),F.bufferData(F.ARRAY_BUFFER,v,F.STATIC_DRAW);var Y=v.BYTES_PER_ELEMENT,Z=F.getAttribLocation(F.program,"a_Position");F.vertexAttribPointer(Z,3,F.FLOAT,!1,Y*6,0),F.enableVertexAttribArray(Z);var ce=F.getAttribLocation(F.program,"a_Color");return F.vertexAttribPointer(ce,3,F.FLOAT,!1,Y*6,Y*3),F.enableVertexAttribArray(ce),B}var J=0,ne=0,Q=.2;function A(F,v,B,p,Y){if(console.log(F.keyCode),F.keyCode==68)J+=.01;else if(F.keyCode==65)J-=.01;else return;g(v,B,p,Y)}g(u,ee,y,W);function g(F,v,B,p){p.setLookAt(J,ne,Q,0,0,0,0,1,0),F.uniformMatrix4fv(B,!1,p.elements),F.clear(F.COLOR_BUFFER_BIT),F.drawArrays(F.TRIANGLES,0,v)}}function R(){const I=`
      attribute vec4 a_Position;
      attribute vec4 a_Color;
      uniform mat4 MVMatrix;
      varying vec4 v_Color;
      void main() {
        gl_Position = MVMatrix * a_Position;
        v_Color = a_Color;
      }
      `,h=`
      #ifdef GL_ES
        precision lowp float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,u=r(i).getContext("webgl");Re(u,I,h);const ee=ne(u),y=u.getUniformLocation(u.program,"MVMatrix"),W=new S;W.setLookAt(.3,.3,.3,0,0,0,0,1,0);const ae=new S;ae.setRotate(-90,0,0,1);const J=W.multiply(ae);u.uniformMatrix4fv(y,!1,J.elements),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,ee);function ne(Q){const A=new Float32Array([-.2,-.2,-.3,.4,.7,.1,.2,-.2,-.3,.4,.7,.1,0,.2,-.3,.4,.7,.1,-.2,-.2,-.2,.2,.1,.3,.2,-.2,-.2,.2,.1,.3,0,.2,-.2,.2,.1,.3,-.2,-.2,-.1,.1,.2,.3,.2,-.2,-.1,.1,.2,.3,0,.2,-.1,.1,.2,.3]),g=A.BYTES_PER_ELEMENT,F=Q.createBuffer();Q.bindBuffer(Q.ARRAY_BUFFER,F),Q.bufferData(Q.ARRAY_BUFFER,A,Q.STATIC_DRAW);const v=Q.getAttribLocation(Q.program,"a_Position");Q.vertexAttribPointer(v,3,Q.FLOAT,!1,g*6,0),Q.enableVertexAttribArray(v);const B=Q.createBuffer();Q.bindBuffer(Q.ARRAY_BUFFER,B),Q.bufferData(Q.ARRAY_BUFFER,A,Q.STATIC_DRAW);const p=Q.getAttribLocation(Q.program,"a_Color");return Q.vertexAttribPointer(p,2,Q.FLOAT,!1,g*6,g*3),Q.enableVertexAttribArray(p),A.length/6}}return(I,h)=>{const E=ge("dbtap");return Ge(),He("div",null,[Cr,o("div",pr,[o("div",Lr,[wr,o("div",Mr,[de(o("canvas",{onDblclickOnce:R,ref_key:"gl21",ref:i},null,544),[[E,R]])])]),o("div",Pr,[Sr,o("div",Ur,[de(o("canvas",{onDblclickOnce:V,ref_key:"gl22",ref:e},null,544),[[E,V]])])]),o("div",Dr,[yr,o("div",Or,[de(o("canvas",{onDblclickOnce:m,ref_key:"gl23",ref:c},null,544),[[E,m]]),o("div",{ref_key:"gl23txt",ref:re,class:"gl23txt"},null,512)])]),o("div",Ir,[Nr,o("div",Yr,[de(o("canvas",{onDblclickOnce:a,ref_key:"gl24",ref:n},null,544),[[E,a]])])]),o("div",Gr,[Hr,o("div",kr,[de(o("canvas",{onDblclickOnce:s,ref_key:"gl25",ref:D},null,544),[[E,s]])])]),o("div",Vr,[Wr,o("div",gr,[de(o("canvas",{onDblclickOnce:x,ref_key:"gl26",ref:l},null,544),[[E,x]])])]),o("div",$r,[Xr,o("div",jr,[de(o("canvas",{onDblclickOnce:C,ref_key:"gl27",ref:X},null,544),[[E,C]])])]),o("div",zr,[qr,o("div",Zr,[de(o("canvas",{onDblclickOnce:f,ref_key:"gl28",ref:O},null,544),[[E,f]])])]),o("div",Kr,[Jr,o("div",Qr,[de(o("canvas",{onDblclickOnce:M,ref_key:"gl29",ref:G},null,544),[[E,M]])])]),o("div",eo,[to,o("div",ro,[de(o("canvas",{onDblclickOnce:oe,ref_key:"gl30",ref:q},null,544),[[E,oe]])])])])])}}}),ao=Ke(oo,[["__scopeId","data-v-05c4964a"]]),io=o("header",null,"第八章：光照",-1),no={class:"example"},so={class:"item"},co=o("div",{class:"desc"}," 白色平行光照射红色cube, 漫反射颜色=入射光颜色x表面基底色xcos0，cos0 = 光线反方向单位向量 (点乘) 法线方向单位向量 = ax * bx + ay * by + az * bz ",-1),fo={class:"canvas"},_o={class:"item"},uo=o("div",{class:"desc"}," 只有平行光，则只有被光线照射到的地方能看见，不符合常识，增加环境光，各处相等的光 ",-1),vo={class:"canvas"},lo={class:"item"},mo=o("div",{class:"desc"}," 如果物体进行了模型变换，那么物体表面的法向量也会发生变化，如果不改变法向量，则不能正确的着色。变换后的法向量等于法向量乘以模型矩阵的逆转置矩阵。逆转置矩阵：逆矩阵（AxA逆和A逆xA结果都为单位矩阵），转置矩阵，原矩阵的行列进行调换 ",-1),Ao={class:"canvas"},Ro={class:"item"},Eo=o("div",{class:"desc"}," 点光源，点光源的入射方向跟平行光不一样，在点光源下每个点的入射方向都不一样，方向为点光源所在位置和当前点的连线。本例绘制一个圆 ",-1),Fo={class:"canvas"},bo={class:"item"},ho=o("div",{class:"desc"}," 如果只计算顶点着色器中顶点的光照着色其余内插，最终效果会很不自然，需要逐片元计算方向。平行光和环境光不会有这个问题，因为平行光的变化是线性的，环境光无变化 ",-1),To={class:"canvas"},xo=Ye({__name:"chapter-08",setup(_){const i=ue(null),e=ue(null),c=ue(null),n=ue(null),D=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight});function l(){var re=`
        attribute vec4 a_Position;
        attribute vec4 a_Normal;
        uniform mat4 u_MvpMatrix;
        uniform mat4 u_ModelMatrix;
        uniform mat4 u_NormalMatrix;
        varying vec4 v_Color;
        varying vec3 v_Normal;
        varying vec3 v_Position;
        void main() {
          vec4 color = vec4(1.0, 1.0, 1.0, 1.0);
          gl_Position = u_MvpMatrix * a_Position;
          // 变换后的点坐标
          v_Position = vec3(u_ModelMatrix * a_Position);
          // 变换后的法向量
          v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
          v_Color = color;
        }
      `,oe=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform vec3 u_LightColor;
        uniform vec3 u_LightPosition;
        uniform vec3 u_AmbientLight;
        // 插值后的法向量
        varying vec3 v_Normal;
        // 插值后的点坐标
        varying vec3 v_Position;
        // 插值后的颜色
        varying vec4 v_Color;
        void main() {
          vec3 normal = normalize(v_Normal);
          // 根据插值后的坐标点和光源坐标计算出入射角度
          vec3 lightDirection = normalize(u_LightPosition - v_Position);
          float nDotL = max(dot(lightDirection, normal), 0.0);
          // 插值后正确的颜色值
          vec3 diffuse = u_LightColor * v_Color.rgb * nDotL;
          vec3 ambient = u_AmbientLight * v_Color.rgb;
          gl_FragColor = vec4(diffuse + ambient, v_Color.a);
        }
      `,M=r(D),f=M.getContext("webgl");Re(f,re,oe);var C=u(f);f.clearColor(0,0,0,1),f.enable(f.DEPTH_TEST);var x=f.getUniformLocation(f.program,"u_ModelMatrix"),s=f.getUniformLocation(f.program,"u_MvpMatrix"),a=f.getUniformLocation(f.program,"u_NormalMatrix"),m=f.getUniformLocation(f.program,"u_LightColor"),V=f.getUniformLocation(f.program,"u_LightPosition"),R=f.getUniformLocation(f.program,"u_AmbientLight");f.uniform3f(m,0,.8,.8),f.uniform3f(V,5,8,7),f.uniform3f(R,.2,.2,.2);var I=new S,h=new S,E=new S;I.setRotate(90,0,1,0),h.setPerspective(30,M.width/M.height,1,100),h.lookAt(0,0,6,0,0,0,0,1,0),h.multiply(I),E.setInverseOf(I),E.transpose(),f.uniformMatrix4fv(x,!1,I.elements),f.uniformMatrix4fv(s,!1,h.elements),f.uniformMatrix4fv(a,!1,E.elements),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.drawElements(f.TRIANGLES,C,f.UNSIGNED_SHORT,0);function u(y){var W=24,ae=[],J=[];for(let Q=0;Q<=W;Q++){let A=Q/W*Math.PI,g=Math.sin(A),F=Math.cos(A);for(let v=0;v<=W;v++){const B=v/W*2*Math.PI,p=Math.sin(B),Y=Math.cos(B);ae.push(g*Y),ae.push(F),ae.push(g*p)}}for(let Q=0;Q<W;Q++)for(let A=0;A<W;A++){const g=W+1;let F=Q*g+A,v=F+g;J.push(F),J.push(v),J.push(F+1),J.push(F+1),J.push(v),J.push(v+1)}ee(y,"a_Position",new Float32Array(ae),y.FLOAT,3),ee(y,"a_Normal",new Float32Array(ae),y.FLOAT,3),y.bindBuffer(y.ARRAY_BUFFER,null);var ne=y.createBuffer();return y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,ne),y.bufferData(y.ELEMENT_ARRAY_BUFFER,new Uint16Array(J),y.STATIC_DRAW),J.length}function ee(y,W,ae,J,ne){var Q=y.createBuffer();y.bindBuffer(y.ARRAY_BUFFER,Q),y.bufferData(y.ARRAY_BUFFER,ae,y.STATIC_DRAW);var A=y.getAttribLocation(y.program,W);return y.vertexAttribPointer(A,ne,J,!1,0,0),y.enableVertexAttribArray(A),!0}}function X(){var re=`
        attribute vec4 a_Position;
        attribute vec4 a_Normal;
        uniform mat4 u_MvpMatrix;
        uniform mat4 u_ModelMatrix;
        uniform mat4 u_NormalMatrix;
        uniform vec3 u_LightColor;
        uniform vec3 u_LightPosition;
        uniform vec3 u_AmbientLight;
        varying vec4 v_Color;
        void main() {
          vec4 color = vec4(1.0, 1.0, 1.0, 1.0);
          gl_Position = u_MvpMatrix * a_Position;
          vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
          // 点经过模型变换后的位置
          vec4 vertexPosition = u_ModelMatrix * a_Position;
          // 计算此点光线的入射方向
          // vec3 lightDirection = normalize(u_LightPosition - vec3(vertexPosition));
          vec3 lightDirection = normalize(vec3(0.1,0.1,0.0));
          float nDotL = max(dot(lightDirection, normal), 0.0);
          vec3 diffuse = u_LightColor * color.rgb * nDotL;
          vec3 ambient = u_AmbientLight * color.rgb;
          v_Color = vec4(diffuse + ambient, color.a);
        }
      `,oe=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,M=r(n),f=M.getContext("webgl");Re(f,re,oe);var C=u(f);f.clearColor(0,0,0,1),f.enable(f.DEPTH_TEST);var x=f.getUniformLocation(f.program,"u_ModelMatrix"),s=f.getUniformLocation(f.program,"u_MvpMatrix"),a=f.getUniformLocation(f.program,"u_NormalMatrix"),m=f.getUniformLocation(f.program,"u_LightColor"),V=f.getUniformLocation(f.program,"u_LightPosition"),R=f.getUniformLocation(f.program,"u_AmbientLight");f.uniform3f(m,0,.8,.8),f.uniform3f(V,5,8,7),f.uniform3f(R,.2,.2,.2);var I=new S,h=new S,E=new S;f.uniformMatrix4fv(x,!1,I.elements),h.setPerspective(30,M.width/M.height,1,100),h.lookAt(0,0,6,0,0,0,0,1,0),h.multiply(I),f.uniformMatrix4fv(s,!1,h.elements),E.setInverseOf(I),E.transpose(),f.uniformMatrix4fv(a,!1,E.elements),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.drawElements(f.TRIANGLES,C,f.UNSIGNED_SHORT,0);function u(y){var W=24,ae=[],J=[];for(let Q=0;Q<=W;Q++){let A=Q/W*Math.PI,g=Math.sin(A),F=Math.cos(A);for(let v=0;v<=W;v++){const B=v/W*2*Math.PI,p=Math.sin(B),Y=Math.cos(B);ae.push(g*Y),ae.push(F),ae.push(g*p)}}for(let Q=0;Q<W;Q++)for(let A=0;A<W;A++){let g=Q*(W+1)+A,F=g+(W+1);J.push(g),J.push(F),J.push(g+1),J.push(g+1),J.push(F),J.push(F+1)}ee(y,"a_Position",new Float32Array(ae),y.FLOAT,3),ee(y,"a_Normal",new Float32Array(ae),y.FLOAT,3),y.bindBuffer(y.ARRAY_BUFFER,null);var ne=y.createBuffer();return y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,ne),y.bufferData(y.ELEMENT_ARRAY_BUFFER,new Uint16Array(J),y.STATIC_DRAW),J.length}function ee(y,W,ae,J,ne){var Q=y.createBuffer();y.bindBuffer(y.ARRAY_BUFFER,Q),y.bufferData(y.ARRAY_BUFFER,ae,y.STATIC_DRAW);var A=y.getAttribLocation(y.program,W);return y.vertexAttribPointer(A,ne,J,!1,0,0),y.enableVertexAttribArray(A),y.bindBuffer(y.ARRAY_BUFFER,null),!0}}function O(){const re=`
      attribute vec4 a_Position;
      attribute vec4 a_Color;
      // 法向量
      attribute vec4 a_Normal;
      // MVP矩阵
      uniform mat4 u_MvpMatrix;
      // 模型矩阵的逆转置矩阵
      uniform mat4 u_NormalMatrix;
      uniform vec3 u_LightColor;
      uniform vec3 u_LightDir;
      uniform vec3 u_AmbientLight;
      varying vec4 v_Color;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
        // 最大就是0，即无光
        float cosangle = max(dot(u_LightDir,normal),0.0);
        // 物体颜色
        vec3 surface = u_LightColor * a_Color.rgb * cosangle;
        vec3 ambient = u_AmbientLight * a_Color.rgb;
        v_Color = vec4(surface + ambient,a_Color.a);
      }
      `,oe=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,f=r(c).getContext("webgl");Re(f,re,oe);const C=s(f);x(),f.clearColor(0,0,0,1),f.enable(f.DEPTH_TEST),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.drawElements(f.TRIANGLES,C,f.UNSIGNED_BYTE,0);function x(){const a=f.getUniformLocation(f.program,"u_MvpMatrix"),m=f.getUniformLocation(f.program,"u_LightColor"),V=f.getUniformLocation(f.program,"u_LightDir"),R=f.getUniformLocation(f.program,"u_AmbientLight"),I=f.getUniformLocation(f.program,"u_NormalMatrix");f.uniform3f(R,.2,.2,.2),f.uniform3f(m,1,1,1);const h=new je([2,2,-2]);h.normalize(),f.uniform3fv(V,h.elements);const E=new S,u=new S;u.setLookAt(5,5,5,0,0,0,0,1,0);const ee=new S;ee.setPerspective(60,1/1,1,100);const y=new S;y.setTranslate(.1,.1,0),y.setRotate(-90,0,1,0),E.set(ee).multiply(u).multiply(y),f.uniformMatrix4fv(a,!1,E.elements);const W=new S;W.setInverseOf(y),W.transpose(),f.uniformMatrix4fv(I,!1,W.elements)}function s(a){const m=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),V=new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]),R=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),I=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),h=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,h),a.bufferData(a.ARRAY_BUFFER,m,a.STATIC_DRAW);const E=a.getAttribLocation(a.program,"a_Position");a.vertexAttribPointer(E,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(E),a.bindBuffer(a.ARRAY_BUFFER,null);const u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,V,a.STATIC_DRAW);const ee=a.getAttribLocation(a.program,"a_Color");a.vertexAttribPointer(ee,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(ee),a.bindBuffer(a.ARRAY_BUFFER,null);const y=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,y),a.bufferData(a.ARRAY_BUFFER,R,a.STATIC_DRAW);const W=a.getAttribLocation(a.program,"a_Normal");a.vertexAttribPointer(W,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(W),a.bindBuffer(a.ARRAY_BUFFER,null);const ae=a.createBuffer();return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,ae),a.bufferData(a.ELEMENT_ARRAY_BUFFER,I,a.STATIC_DRAW),I.length}}function G(){const re=`
      attribute vec4 a_Position;
      attribute vec4 a_Color;
      varying vec4 v_Color;
      // 法向量
      attribute vec4 a_Normal;
      // MVP矩阵
      uniform mat4 u_MvpMatrix;
      uniform vec3 u_LightColor;
      uniform vec3 u_LightDir;
      uniform vec3 u_AmbientLight;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        vec3 normal = normalize(a_Normal.xyz);
        // 最大就是0，即无光
        float cosangle = max(dot(u_LightDir,normal),0.0);
        // 物体颜色
        vec3 surface = u_LightColor * a_Color.rgb * cosangle;
        vec3 ambient = u_AmbientLight * a_Color.rgb;
        v_Color = vec4(surface + ambient,a_Color.a);
      }
      `,oe=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,f=r(e).getContext("webgl");Re(f,re,oe);const C=s(f);x(),f.clearColor(0,0,0,1),f.enable(f.DEPTH_TEST),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.drawElements(f.TRIANGLES,C,f.UNSIGNED_BYTE,0);function x(){const a=f.getUniformLocation(f.program,"u_MvpMatrix"),m=f.getUniformLocation(f.program,"u_LightColor"),V=f.getUniformLocation(f.program,"u_LightDir"),R=f.getUniformLocation(f.program,"u_AmbientLight");f.uniform3f(R,.2,0,0),f.uniform3f(m,1,1,1);const I=new je([2,2,-2]);I.normalize(),f.uniform3fv(V,I.elements);const h=new S,E=new S;E.setLookAt(5,5,5,0,0,0,0,1,0);const u=new S;u.setPerspective(60,1/1,1,100),h.set(u).multiply(E),f.uniformMatrix4fv(a,!1,h.elements)}function s(a){const m=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),V=new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]),R=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),I=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),h=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,h),a.bufferData(a.ARRAY_BUFFER,m,a.STATIC_DRAW);const E=a.getAttribLocation(a.program,"a_Position");a.vertexAttribPointer(E,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(E),a.bindBuffer(a.ARRAY_BUFFER,null);const u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,V,a.STATIC_DRAW);const ee=a.getAttribLocation(a.program,"a_Color");a.vertexAttribPointer(ee,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(ee),a.bindBuffer(a.ARRAY_BUFFER,null);const y=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,y),a.bufferData(a.ARRAY_BUFFER,R,a.STATIC_DRAW);const W=a.getAttribLocation(a.program,"a_Normal");a.vertexAttribPointer(W,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(W),a.bindBuffer(a.ARRAY_BUFFER,null);const ae=a.createBuffer();return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,ae),a.bufferData(a.ELEMENT_ARRAY_BUFFER,I,a.STATIC_DRAW),I.length}}function q(){const re=`
      attribute vec4 a_Position;
      attribute vec4 a_Color;
      varying vec4 v_Color;
      // 法向量
      attribute vec4 a_Normal;
      // MVP矩阵
      uniform mat4 u_MvpMatrix;
      uniform vec3 u_LightColor;
      uniform vec3 u_LightDir;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        vec3 normal = normalize(a_Normal.xyz);
        // 最大就是0，即无光
        float cosangle = max(dot(u_LightDir,normal),0.0);
        // 物体颜色
        vec3 surface = u_LightColor * a_Color.rgb * cosangle;
        v_Color = vec4(surface,a_Color.a);
      }
      `,oe=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,f=r(i).getContext("webgl");Re(f,re,oe);const C=s(f);x(),f.clearColor(0,0,0,1),f.enable(f.DEPTH_TEST),f.clear(f.COLOR_BUFFER_BIT|f.DEPTH_BUFFER_BIT),f.drawElements(f.TRIANGLES,C,f.UNSIGNED_BYTE,0);function x(){const a=f.getUniformLocation(f.program,"u_MvpMatrix"),m=f.getUniformLocation(f.program,"u_LightColor"),V=f.getUniformLocation(f.program,"u_LightDir");f.uniform3f(m,1,1,1);const R=new je([2,2,-2]);R.normalize(),f.uniform3fv(V,R.elements);const I=new S,h=new S;h.setLookAt(5,5,5,0,0,0,0,1,0);const E=new S;E.setPerspective(60,1/1,1,100),I.set(E).multiply(h),f.uniformMatrix4fv(a,!1,I.elements)}function s(a){const m=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),V=new Float32Array([.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1]),R=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),I=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),h=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,h),a.bufferData(a.ARRAY_BUFFER,m,a.STATIC_DRAW);const E=a.getAttribLocation(a.program,"a_Position");a.vertexAttribPointer(E,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(E),a.bindBuffer(a.ARRAY_BUFFER,null);const u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,V,a.STATIC_DRAW);const ee=a.getAttribLocation(a.program,"a_Color");a.vertexAttribPointer(ee,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(ee),a.bindBuffer(a.ARRAY_BUFFER,null);const y=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,y),a.bufferData(a.ARRAY_BUFFER,R,a.STATIC_DRAW);const W=a.getAttribLocation(a.program,"a_Normal");a.vertexAttribPointer(W,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(W),a.bindBuffer(a.ARRAY_BUFFER,null);const ae=a.createBuffer();return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,ae),a.bufferData(a.ELEMENT_ARRAY_BUFFER,I,a.STATIC_DRAW),I.length}}return(re,oe)=>{const M=ge("dbtap");return Ge(),He("div",null,[io,o("div",no,[o("div",so,[co,o("div",fo,[de(o("canvas",{onDblclickOnce:q,ref_key:"gl31",ref:i},null,544),[[M,q]])])]),o("div",_o,[uo,o("div",vo,[de(o("canvas",{onDblclickOnce:G,ref_key:"gl32",ref:e},null,544),[[M,G]])])]),o("div",lo,[mo,o("div",Ao,[de(o("canvas",{onDblclickOnce:O,ref_key:"gl33",ref:c},null,544),[[M,O]])])]),o("div",Ro,[Eo,o("div",Fo,[de(o("canvas",{onDblclickOnce:X,ref_key:"gl34",ref:n},null,544),[[M,X]])])]),o("div",bo,[ho,o("div",To,[de(o("canvas",{onDblclickOnce:l,ref_key:"gl35",ref:D},null,544),[[M,l]])])])])])}}}),Bo=o("header",null,"第九章：层次模型",-1),Co={class:"example"},po={class:"item"},Lo=o("div",{class:"desc"},"绘制两个矩形，模仿上臂和前臂，通过键盘W,A,S,D控制",-1),wo={class:"canvas"},Mo={class:"item"},Po=o("div",{class:"desc"},"绘制更复杂的模型，一个机械手，通过键盘1,2,3,4,5,6,7,8控制",-1),So={class:"canvas"},Uo=Ye({__name:"chapter-09",setup(_){const i=ue(null),e=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight});function c(){const D=`
      attribute vec4 a_Position;
      attribute vec4 a_Normal;
      uniform mat4 u_MvpMatrix;
      uniform mat4 u_NormalMatrix;
      varying vec4 v_Color;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        vec3 lightDirection = normalize(vec3(2.0,2.0,0.0));
        vec4 color = vec4(1.0, 0.4, 0.0, 1.0);
        vec3 normal = normalize((u_NormalMatrix * a_Normal).xyz);
        float nDotL = max(dot(normal, lightDirection),0.0);
        v_Color = vec4(color.rgb * nDotL + vec3(0.1), color.a);
      }

      `,l=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,X=r(e),O=X.getContext("webgl");Re(O,D,l);const G=I(O);let q=0,re=0,oe=0,M=0,f=10;const C=O.getUniformLocation(O.program,"u_MvpMatrix"),x=O.getUniformLocation(O.program,"u_NormalMatrix"),s=new S;s.setPerspective(50,X.width/X.height,1,100),s.lookAt(15,24,20,0,5,0,0,1,0),document.addEventListener("keydown",E=>{const{key:u}=E;switch(u){case"1":q<135&&(q+=f);break;case"2":q>-135&&(q-=f);break;case"3":re=(re+f)%360;break;case"4":re=(re-f)%360;break;case"5":oe=(oe+f)%360;break;case"6":oe=(oe-f)%360;break;case"7":M<60&&(M=(M+f)%360);break;case"8":M>-60&&(M=(M-f)%360);break;default:return}V(O,G,s,C,x)}),O.enable(O.DEPTH_TEST);let a=new S;const m=[];V(O,G,s,C,x);function V(E,u,ee,y,W){E.clearColor(0,0,0,1),E.clear(E.COLOR_BUFFER_BIT|E.DEPTH_BUFFER_BIT),a.setTranslate(0,0,0),R(E,u,ee,y,W,4,1,4),a.translate(0,1,0),a.rotate(q,0,1,0),R(E,u,ee,y,W,2,3,2),a.translate(0,3,0),a.rotate(re,1,0,0),R(E,u,ee,y,W,1.8,4,1.8),a.translate(0,4,0),a.rotate(oe,0,1,0),R(E,u,ee,y,W,4,4,1),m.push(new S(a)),a.translate(-2,3,1),a.rotate(M,0,1,0),R(E,u,ee,y,W,1,1,2),a=m.pop(),a.translate(2,3,1),a.rotate(-M,0,1,0),R(E,u,ee,y,W,1,1,2)}function R(E,u,ee,y,W,ae,J,ne){const Q=new S(a);Q.scale(ae,J,ne);const A=new S;A.setInverseOf(Q),A.transpose();const g=new S(ee).multiply(Q);E.uniformMatrix4fv(y,!1,g.elements),E.uniformMatrix4fv(W,!1,A.elements),E.drawElements(E.TRIANGLES,u,E.UNSIGNED_BYTE,0)}function I(E){var u=new Float32Array([-.5,0,.5,.5,0,.5,-.5,1,.5,.5,1,.5,-.5,0,.5,.5,0,.5,-.5,0,-.5,.5,0,-.5,-.5,0,-.5,.5,0,-.5,-.5,1,-.5,.5,1,-.5,-.5,1,-.5,.5,1,-.5,-.5,1,.5,.5,1,.5,-.5,0,.5,-.5,0,-.5,-.5,1,.5,-.5,1,-.5,.5,0,.5,.5,0,-.5,.5,1,.5,.5,1,-.5]),ee=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),y=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]);h(E,"a_Position",u,E.FLOAT,3),h(E,"a_Normal",ee,E.FLOAT,3),E.bindBuffer(E.ARRAY_BUFFER,null);var W=E.createBuffer();return E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,W),E.bufferData(E.ELEMENT_ARRAY_BUFFER,y,E.STATIC_DRAW),y.length}function h(E,u,ee,y,W){var ae=E.createBuffer();E.bindBuffer(E.ARRAY_BUFFER,ae),E.bufferData(E.ARRAY_BUFFER,ee,E.STATIC_DRAW);var J=E.getAttribLocation(E.program,u);return E.vertexAttribPointer(J,W,y,!1,0,0),E.enableVertexAttribArray(J),!0}}function n(){const D=`
      attribute vec4 a_Position;
      attribute vec4 a_Normal;
      uniform mat4 u_MvpMatrix;
      // 模型矩阵的逆转置矩阵
      uniform mat4 u_NormalMatrix;
      varying vec4 v_Color;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        vec4 lightColor = vec4(1.0,1.0,1.0,1.0);
        vec4 surfaceColor = vec4(0.0,0.8,0.8,1.0);
        vec4 ambientColor = vec4(0.4,0.4,0.4,1.0);
        vec3 lightDir = normalize(vec3(2.0,2.0,0.0));
        vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
        float cosAngle = max(dot(normal,lightDir),0.0);
        v_Color = lightColor * surfaceColor * cosAngle + ambientColor * surfaceColor;
      }
      `,l=`
      #ifdef GL_ES
      precision lowp float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,O=r(i).getContext("webgl");Re(O,D,l);const G=x(O),q=new S,re=new S,oe=new S;re.lookAt(20,10,20,0,7,0,0,1,0),oe.setPerspective(60,1/1,1,100),O.enable(O.DEPTH_TEST),O.enable(O.POLYGON_OFFSET_FILL),O.clearColor(0,0,0,1),O.polygonOffset(1,1);let M=30,f=30;C(),document.addEventListener("keydown",s=>{const{key:a}=s;if(a==="a"&&(M-=10),a==="d"&&(M+=10),a==="w"){if(f>=90)return;f+=10}if(a==="s"){if(f<=0)return;f-=10}C()});function C(){O.clear(O.COLOR_BUFFER_BIT|O.DEPTH_BUFFER_BIT);const s=new S,a=new S,m=O.getUniformLocation(O.program,"u_MvpMatrix"),V=O.getUniformLocation(O.program,"u_NormalMatrix");s.translate(2,0,0),s.rotate(M,0,1,0),q.set(oe).multiply(re).multiply(new S(s).scale(1.2,1,1.2)),a.set(s),a.invert(),a.transpose(),O.uniformMatrix4fv(m,!1,q.elements),O.uniformMatrix4fv(V,!1,a.elements),O.drawElements(O.TRIANGLES,G,O.UNSIGNED_BYTE,0),s.translate(0,7,0),s.rotate(f,1,0,0),q.set(oe).multiply(re).multiply(s),a.set(s),a.invert(),a.transpose(),O.uniformMatrix4fv(m,!1,q.elements),O.uniformMatrix4fv(V,!1,a.elements),O.drawElements(O.TRIANGLES,G,O.UNSIGNED_BYTE,0)}function x(s){const a=new Float32Array([-1,0,1,1,0,1,-1,7,1,1,7,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,7,-1,1,7,-1,-1,7,-1,1,7,-1,-1,7,1,1,7,1,-1,0,1,-1,0,-1,-1,7,1,-1,7,-1,1,0,1,1,0,-1,1,7,1,1,7,-1]),m=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),V=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),R=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,R),s.bufferData(s.ARRAY_BUFFER,a,s.STATIC_DRAW);const I=s.getAttribLocation(s.program,"a_Position");s.vertexAttribPointer(I,3,s.FLOAT,!1,0,0),s.enableVertexAttribArray(I);const h=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,h),s.bufferData(s.ARRAY_BUFFER,m,s.STATIC_DRAW);const E=s.getAttribLocation(s.program,"a_Normal");s.vertexAttribPointer(E,3,s.FLOAT,!1,0,0),s.enableVertexAttribArray(E);const u=s.createBuffer();return s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,u),s.bufferData(s.ELEMENT_ARRAY_BUFFER,V,s.STATIC_DRAW),V.length}}return(D,l)=>{const X=ge("dbtap");return Ge(),He("div",null,[Bo,o("div",Co,[o("div",po,[Lo,o("div",wo,[de(o("canvas",{onDblclickOnce:n,ref_key:"gl36",ref:i},null,544),[[X,n]])])]),o("div",Mo,[Po,o("div",So,[de(o("canvas",{onDblclickOnce:c,ref_key:"gl37",ref:e},null,544),[[X,c]])])])])])}}}),Se=_=>(qe("data-v-5bb56367"),_=_(),Ze(),_),Do=Se(()=>o("header",null,"第十章：高级技术",-1)),yo={class:"example"},Oo={class:"item"},Io=Se(()=>o("div",{class:"desc"}," 通过鼠标拖拽旋转物体，监听鼠标的按下和放开和移动，计算xy方向上的移动距离，转化为新的旋转矩阵 ",-1)),No={class:"canvas"},Yo={class:"item"},Go=Se(()=>o("div",{class:"desc"}," 鼠标选中物体，点击时，将物体绘制为单一颜色，然后判断点击的位置是否为这个颜色还是背景色来判断是否选中 ",-1)),Ho={class:"canvas"},ko={class:"item"},Vo=Se(()=>o("div",{class:"desc"},"鼠标选中进阶，选中某个面",-1)),Wo={class:"canvas"},go={class:"item"},$o=Se(()=>o("div",{class:"desc"}," 平视显示器HUD，由两个重叠的canvas实现，2dcanvas默认背景透明，3d也可以设置透明背景色来达到3d浮层的效果 ",-1)),Xo={class:"canvas"},jo={class:"item"},zo=Se(()=>o("div",{class:"desc"}," 雾化效果，分为线性雾化，即距离越远越模糊，颜色=表面颜色x距离占比+雾的颜色x另一边距离占比 ",-1)),qo={class:"canvas"},Zo={class:"item"},Ko=Se(()=>o("div",{class:"desc"}," 绘制圆形的点，gl_PointCoord来访问点内部的坐标范围为0-1，处理每个片元，判断片元距离中心点的距离，半径外的点就discard ",-1)),Jo={class:"canvas"},Qo={class:"item"},ea=Se(()=>o("div",{class:"desc"},"阿尔法混合，透明度混合",-1)),ta={class:"canvas"},ra={class:"item"},oa=Se(()=>o("div",{class:"desc"}," 阿尔法混合，半透明立方体。需要关闭隐藏面消除功能，因为此功能会丢弃不会绘制的片元，此时需要从后往前绘制 ",-1)),aa={class:"canvas"},ia={class:"item"},na=Se(()=>o("div",{class:"desc"}," 同时绘制不透明和透明的对象。开启隐藏面消除时，绘制A，然后绘制B,如果A在前面会，丢弃B，如果B在前面，会覆盖A，同时更新深度缓冲区（写操作）。绘制所有不透明物体后（A），锁定深度缓冲区的写操作，绘制B，如果B在后面，丢弃，符合预期，如果B在前面，由于半透明会进行混合。同时由于深度缓冲区被锁定了写操作，绘制B时，即使B在前面也不会更新颜色缓冲区，也就不会影响（半透明后面的会被丢弃）后续的绘制 ",-1)),sa={class:"canvas"},ca={class:"item"},fa=Se(()=>o("div",{class:"desc"},"切换着色器，使用gl.useProgram来切换使用多个着色器",-1)),_a={class:"canvas"},ua={class:"item"},va=Se(()=>o("div",{class:"desc"}," 帧缓冲区包含颜色关联对象和深度关联对象，其中颜色对象可以是普通的也可以是纹理。在帧缓冲区中的绘制叫做离屏绘制，绘制的内容不会实时显示在页面上 ",-1)),la={class:"canvas"},da={class:"item"},ma=Se(()=>o("div",{class:"desc"}," 实现阴影，需要使用两个着色器，一个用来计算阴影（视点移动到光源点，看不到的片元即阴影），一个用来绘制，将片元z值与1中的z值做对比，如果在阴影处则用较暗的颜色绘制。涉及着色器切换和帧缓冲区的内容 ",-1)),Aa={class:"canvas"},Ra={class:"item"},Ea=Se(()=>o("div",{class:"desc"},"绘制高精度阴影",-1)),Fa={class:"canvas"},ba={class:"item"},ha=Se(()=>o("div",{class:"desc"},"加载模型，obj文件和mlt文件，obj定义顶点和向量，mlt定义颜色",-1)),Ta={class:"canvas"},xa={class:"item"},Ba=Se(()=>o("div",{class:"desc"}," 环境丢失，context-lost，电脑休眠或者其他程序接管了GPU会导致环境丢失，运行数据丢失。重要，WEBGL context丢失，主要是靠canvas的上下文丢失和上下文恢复事件 ",-1)),Ca={class:"canvas"},pa=Ye({__name:"chapter-10",setup(_){const i=ue(null),e=ue(null),c=ue(null),n=ue(null),D=ue(null),l=ue(null),X=ue(null),O=ue(null),G=ue(null),q=ue(null),re=ue(null),oe=ue(null),M=ue(null),f=ue(null),C=ue(null),x=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight,r(X).width=r(X).clientWidth,r(X).height=r(X).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight,r(G).width=r(G).clientWidth,r(G).height=r(G).clientHeight,r(q).width=r(q).clientWidth,r(q).height=r(q).clientHeight,r(re).width=r(re).clientWidth,r(re).height=r(re).clientHeight,r(oe).width=r(oe).clientWidth,r(oe).height=r(oe).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(C).width=r(C).clientWidth,r(C).height=r(C).clientHeight,r(x).width=r(x).clientWidth,r(x).height=r(x).clientHeight});function s(){var A=`
        attribute vec4 a_Position;
        uniform mat4 u_ModelMatrix;
        void main() {
          gl_Position = u_ModelMatrix * a_Position;
        }
      `,g=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,F=r(x);F.addEventListener("webglcontextlost",ce,!1),F.addEventListener("webglcontextrestored",function(N){Z(F)},!1),Z(F);var v=45,B=0,p,Y=Date.now();function Z(N){var $=N.getContext("webgl");if(!$){console.log("Failed to get the rendering context for WebGL");return}if(!Re($,A,g)){console.log("Failed to intialize shaders.");return}var j=K($);if(j<0){console.log("Failed to set the positions of the vertices");return}$.clearColor(0,0,0,1);var fe=$.getUniformLocation($.program,"u_ModelMatrix");if(!fe){console.log("Failed to get the storage location of u_ModelMatrix");return}var ve=new S,z=function(){B=ie(B),w($,j,B,ve,fe),p=requestAnimationFrame(z,N)};z()}function ce(N){cancelAnimationFrame(p),N.preventDefault()}function K(N){var $=new Float32Array([0,.5,-.5,-.5,.5,-.5]),j=3,fe=N.createBuffer();if(!fe)return console.log("Failed to create the buffer object"),-1;N.bindBuffer(N.ARRAY_BUFFER,fe),N.bufferData(N.ARRAY_BUFFER,$,N.STATIC_DRAW);var ve=N.getAttribLocation(N.program,"a_Position");return ve<0?(console.log("Failed to get the storage location of a_Position"),-1):(N.vertexAttribPointer(ve,2,N.FLOAT,!1,0,0),N.enableVertexAttribArray(ve),N.bindBuffer(N.ARRAY_BUFFER,null),j)}function w(N,$,j,fe,ve){fe.setRotate(j,0,0,1),N.uniformMatrix4fv(ve,!1,fe.elements),N.clear(N.COLOR_BUFFER_BIT),N.drawArrays(N.TRIANGLES,0,$)}function ie(N){var $=Date.now(),j=$-Y;Y=$;var fe=N+v*j/1e3;return fe%=360}}function a(){var A=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        attribute vec4 a_Normal;
        uniform mat4 u_MvpMatrix;
        uniform mat4 u_NormalMatrix;
        varying vec4 v_Color;
        void main() {
          vec3 lightDirection = vec3(-0.35, 0.35, 0.87);
          gl_Position = u_MvpMatrix * a_Position;
          vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
          float nDotL = max(dot(normal, lightDirection), 0.0);
          v_Color = vec4(a_Color.rgb * nDotL, a_Color.a);
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(C),v=F.getContext("webgl");if(!Re(v,A,g)){console.log("Failed to intialize shaders.");return}v.clearColor(.2,.2,.2,1),v.enable(v.DEPTH_TEST);var B=v.program;if(B.a_Position=v.getAttribLocation(B,"a_Position"),B.a_Normal=v.getAttribLocation(B,"a_Normal"),B.a_Color=v.getAttribLocation(B,"a_Color"),B.u_MvpMatrix=v.getUniformLocation(B,"u_MvpMatrix"),B.u_NormalMatrix=v.getUniformLocation(B,"u_NormalMatrix"),B.a_Position<0||B.a_Normal<0||B.a_Color<0||!B.u_MvpMatrix||!B.u_NormalMatrix)return;var p=j(v,B);if(!p){console.log("Failed to set the vertex information");return}var Y=new S;Y.setPerspective(30,F.width/F.height,1,5e3),Y.lookAt(0,500,200,0,0,0,0,1,0),ve("/lab-static/images/webgl-practice/cube.obj",v,p,60,!0);var Z=0,ce=30,K=Date.now(),w=new S,ie=new S,N=new S,$=function(){Z=me(Z),le(v,v.program,Z,Y,p),requestAnimationFrame($,F)};$();function j(t,b){var T=new Object;return T.vertexBuffer=fe(t,b.a_Position,3,t.FLOAT),T.normalBuffer=fe(t,b.a_Normal,3,t.FLOAT),T.colorBuffer=fe(t,b.a_Color,4,t.FLOAT),T.indexBuffer=t.createBuffer(),!T.vertexBuffer||!T.normalBuffer||!T.colorBuffer||!T.indexBuffer?null:(t.bindBuffer(t.ARRAY_BUFFER,null),T)}function fe(t,b,T,H){var L=t.createBuffer();return L?(t.bindBuffer(t.ARRAY_BUFFER,L),t.vertexAttribPointer(b,T,H,!1,0,0),t.enableVertexAttribArray(b),L):(console.log("Failed to create the buffer object"),null)}function ve(t,b,T,H,L){var he=new XMLHttpRequest;he.onreadystatechange=function(){he.readyState===4&&he.status!==404&&_e(he.responseText,t,b,T,H,L)},he.open("GET",t,!0),he.send()}var z=null,P=null;function _e(t,b,T,H,L,he){var Me=new Ae(b),Ce=Me.parse(t,L,he);if(!Ce){z=null,P=null,console.log("OBJ file parsing error.");return}z=Me}function le(t,b,T,H,L){z!=null&&z.isMTLComplete()&&(P=k(t,L,z),z=null),P&&(t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),w.setRotate(T,1,0,0),w.rotate(T,0,1,0),w.rotate(T,0,0,1),N.setInverseOf(w),N.transpose(),t.uniformMatrix4fv(b.u_NormalMatrix,!1,N.elements),ie.set(H),ie.multiply(w),t.uniformMatrix4fv(b.u_MvpMatrix,!1,ie.elements),t.drawElements(t.TRIANGLES,P.indices.length,t.UNSIGNED_SHORT,0))}function k(t,b,T){var H=T.getDrawingInfo();return t.bindBuffer(t.ARRAY_BUFFER,b.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,H.vertices,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,b.normalBuffer),t.bufferData(t.ARRAY_BUFFER,H.normals,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,b.colorBuffer),t.bufferData(t.ARRAY_BUFFER,H.colors,t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,b.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,H.indices,t.STATIC_DRAW),H}function me(t){var b=Date.now(),T=b-K;K=b;var H=t+ce*T/1e3;return H%360}var Ae=function(t){this.fileName=t,this.mtls=new Array(0),this.objects=new Array(0),this.vertices=new Array(0),this.normals=new Array(0)};Ae.prototype.parse=function(t,b,T){var H=t.split(`
`);H.push(null);for(var L=0,he=null,Me="",Ce,Ue=new se;(Ce=H[L++])!=null;){Ue.init(Ce);var $e=Ue.getWord();if($e!=null)switch($e){case"#":continue;case"mtllib":var Ie=this.parseMtllib(Ue,this.fileName),De=new Be;this.mtls.push(De);var Le=new XMLHttpRequest;Le.onreadystatechange=function(){Le.readyState==4&&(Le.status!=404?xe(Le.responseText,De):De.complete=!0)},Le.open("GET",Ie,!0),Le.send();continue;case"o":case"g":var ke=this.parseObjectName(Ue);this.objects.push(ke),he=ke;continue;case"v":var Xe=this.parseVertex(Ue,b);this.vertices.push(Xe);continue;case"vn":var Ne=this.parseNormal(Ue);this.normals.push(Ne);continue;case"usemtl":Me=this.parseUsemtl(Ue);continue;case"f":var Ve=this.parseFace(Ue,Me,this.vertices,T);he.addFace(Ve);continue}}return!0},Ae.prototype.parseMtllib=function(t,b){var T=b.lastIndexOf("/"),H="";return T>0&&(H=b.substr(0,T+1)),H+t.getWord()},Ae.prototype.parseObjectName=function(t){var b=t.getWord();return new Fe(b)},Ae.prototype.parseVertex=function(t,b){var T=t.getFloat()*b,H=t.getFloat()*b,L=t.getFloat()*b;return new pe(T,H,L)},Ae.prototype.parseNormal=function(t){var b=t.getFloat(),T=t.getFloat(),H=t.getFloat();return new U(b,T,H)},Ae.prototype.parseUsemtl=function(t){return t.getWord()},Ae.prototype.parseFace=function(t,b,T,H){for(var L=new d(b);;){var he=t.getWord();if(he==null)break;var Me=he.split("/");if(Me.length>=1){var Ce=parseInt(Me[0])-1;L.vIndices.push(Ce)}if(Me.length>=3){var Ue=parseInt(Me[2])-1;L.nIndices.push(Ue)}else L.nIndices.push(-1)}var $e=[T[L.vIndices[0]].x,T[L.vIndices[0]].y,T[L.vIndices[0]].z],Ie=[T[L.vIndices[1]].x,T[L.vIndices[1]].y,T[L.vIndices[1]].z],De=[T[L.vIndices[2]].x,T[L.vIndices[2]].y,T[L.vIndices[2]].z],Le=Te($e,Ie,De);if(Le==null){if(L.vIndices.length>=4){var ke=[T[L.vIndices[3]].x,T[L.vIndices[3]].y,T[L.vIndices[3]].z];Le=Te(Ie,De,ke)}Le==null&&(Le=[0,1,0])}if(H&&(Le[0]=-Le[0],Le[1]=-Le[1],Le[2]=-Le[2]),L.normal=new U(Le[0],Le[1],Le[2]),L.vIndices.length>3){for(var Xe=L.vIndices.length-2,Ne=new Array(Xe*3),Ve=new Array(Xe*3),Pe=0;Pe<Xe;Pe++)Ne[Pe*3+0]=L.vIndices[0],Ne[Pe*3+1]=L.vIndices[Pe+1],Ne[Pe*3+2]=L.vIndices[Pe+2],Ve[Pe*3+0]=L.nIndices[0],Ve[Pe*3+1]=L.nIndices[Pe+1],Ve[Pe*3+2]=L.nIndices[Pe+2];L.vIndices=Ne,L.nIndices=Ve}return L.numIndices=L.vIndices.length,L};function xe(t,b){var T=t.split(`
`);T.push(null);for(var H=0,L,he="",Me=new se;(L=T[H++])!=null;){Me.init(L);var Ce=Me.getWord();if(Ce!=null)switch(Ce){case"#":continue;case"newmtl":he=b.parseNewmtl(Me);continue;case"Kd":if(he=="")continue;var Ue=b.parseRGB(Me,he);b.materials.push(Ue),he="";continue}}b.complete=!0}Ae.prototype.isMTLComplete=function(){if(this.mtls.length==0)return!0;for(var t=0;t<this.mtls.length;t++)if(!this.mtls[t].complete)return!1;return!0},Ae.prototype.findColor=function(t){for(var b=0;b<this.mtls.length;b++)for(var T=0;T<this.mtls[b].materials.length;T++)if(this.mtls[b].materials[T].name==t)return this.mtls[b].materials[T].color;return new Ee(.8,.8,.8,1)},Ae.prototype.getDrawingInfo=function(){for(var t=0,b=0;b<this.objects.length;b++)t+=this.objects[b].numIndices;for(var T=t,H=new Float32Array(T*3),L=new Float32Array(T*3),he=new Float32Array(T*4),Me=new Uint16Array(t),Ce=0,b=0;b<this.objects.length;b++)for(var Ue=this.objects[b],$e=0;$e<Ue.faces.length;$e++)for(var Ie=Ue.faces[$e],De=this.findColor(Ie.materialName),Le=Ie.normal,ke=0;ke<Ie.vIndices.length;ke++){Me[Ce]=Ce;var Xe=Ie.vIndices[ke],Ne=this.vertices[Xe];H[Ce*3+0]=Ne.x,H[Ce*3+1]=Ne.y,H[Ce*3+2]=Ne.z,he[Ce*4+0]=De.r,he[Ce*4+1]=De.g,he[Ce*4+2]=De.b,he[Ce*4+3]=De.a;var Ve=Ie.nIndices[ke];if(Ve>=0){var Pe=this.normals[Ve];L[Ce*3+0]=Pe.x,L[Ce*3+1]=Pe.y,L[Ce*3+2]=Pe.z}else L[Ce*3+0]=Le.x,L[Ce*3+1]=Le.y,L[Ce*3+2]=Le.z;Ce++}return new te(H,L,he,Me)};var Be=function(){this.complete=!1,this.materials=new Array(0)};Be.prototype.parseNewmtl=function(t){return t.getWord()},Be.prototype.parseRGB=function(t,b){var T=t.getFloat(),H=t.getFloat(),L=t.getFloat();return new we(b,T,H,L,1)};var we=function(t,b,T,H,L){this.name=t,this.color=new Ee(b,T,H,L)},pe=function(t,b,T){this.x=t,this.y=b,this.z=T},U=function(t,b,T){this.x=t,this.y=b,this.z=T},Ee=function(t,b,T,H){this.r=t,this.g=b,this.b=T,this.a=H},Fe=function(t){this.name=t,this.faces=new Array(0),this.numIndices=0};Fe.prototype.addFace=function(t){this.faces.push(t),this.numIndices+=t.numIndices};var d=function(t){this.materialName=t,t==null&&(this.materialName=""),this.vIndices=new Array(0),this.nIndices=new Array(0)},te=function(t,b,T,H){this.vertices=t,this.normals=b,this.colors=T,this.indices=H},se=function(t){this.str,this.index,this.init(t)};se.prototype.init=function(t){this.str=t,this.index=0},se.prototype.skipDelimiters=function(){for(var t=this.index,b=this.str.length;t<b;t++){var T=this.str.charAt(t);if(!(T=="	"||T==" "||T=="("||T==")"||T=='"'))break}this.index=t},se.prototype.skipToNextWord=function(){this.skipDelimiters();var t=be(this.str,this.index);this.index+=t+1},se.prototype.getWord=function(){this.skipDelimiters();var t=be(this.str,this.index);if(t==0)return null;var b=this.str.substr(this.index,t);return this.index+=t+1,b},se.prototype.getInt=function(){return parseInt(this.getWord())},se.prototype.getFloat=function(){return parseFloat(this.getWord())};function be(t,b){for(var T=b,H=t.length;T<H;T++){var L=t.charAt(T);if(L=="	"||L==" "||L=="("||L==")"||L=='"')break}return T-b}function Te(t,b,T){for(var H=new Float32Array(3),L=new Float32Array(3),he=0;he<3;he++)H[he]=t[he]-b[he],L[he]=T[he]-b[he];var Me=new Float32Array(3);Me[0]=H[1]*L[2]-H[2]*L[1],Me[1]=H[2]*L[0]-H[0]*L[2],Me[2]=H[0]*L[1]-H[1]*L[0];var Ce=new je(Me);return Ce.normalize(),Ce.elements}}function m(){var A=`
        attribute vec4 a_Position;
        uniform mat4 u_MvpMatrix;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        void main() {
          const vec4 bitShift = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
          const vec4 bitMask = vec4(1.0/256.0, 1.0/256.0, 1.0/256.0, 0.0);
          // fract取小数部分，将高精度的z值分散到rgba四个分量中
          vec4 rgbaDepth = fract(gl_FragCoord.z * bitShift);
          // 截取掉超出8位的部分
          rgbaDepth -= rgbaDepth.gbaa * bitMask;
          gl_FragColor = rgbaDepth;
        }
      `,F=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        uniform mat4 u_MvpMatrixFromLight;
        varying vec4 v_PositionFromLight;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_PositionFromLight = u_MvpMatrixFromLight * a_Position;
          v_Color = a_Color;
        }
      `,v=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform sampler2D u_ShadowMap;
        varying vec4 v_PositionFromLight;
        varying vec4 v_Color;
        //Recalculate the z value from the rgba
        float unpackDepth(const in vec4 rgbaDepth) {
          const vec4 bitShift = vec4(1.0, 1.0/256.0, 1.0/(256.0*256.0), 1.0/(256.0*256.0*256.0));
          // Use dot() since the calculations is same
          float depth = dot(rgbaDepth, bitShift);
          return depth;
        }
        void main() {
          vec3 shadowCoord = (v_PositionFromLight.xyz/v_PositionFromLight.w)/2.0 + 0.5;
          vec4 rgbaDepth = texture2D(u_ShadowMap, shadowCoord.xy);
          float depth = unpackDepth(rgbaDepth); // Recalculate the z value from the rgba
          float visibility = (shadowCoord.z > depth + 0.0015) ? 0.7 : 1.0;
          gl_FragColor = vec4(v_Color.rgb * visibility, v_Color.a);
        }
      `,B=2048,p=2048,Y=0,Z=40,ce=2,K=r(f),w=K.getContext("webgl"),ie=ze(w,A,g);ie.a_Position=w.getAttribLocation(ie,"a_Position"),ie.u_MvpMatrix=w.getUniformLocation(ie,"u_MvpMatrix");var N=ze(w,F,v);if(N.a_Position=w.getAttribLocation(N,"a_Position"),N.a_Color=w.getAttribLocation(N,"a_Color"),N.u_MvpMatrix=w.getUniformLocation(N,"u_MvpMatrix"),N.u_MvpMatrixFromLight=w.getUniformLocation(N,"u_MvpMatrixFromLight"),N.u_ShadowMap=w.getUniformLocation(N,"u_ShadowMap"),N.a_Position<0||N.a_Color<0||!N.u_MvpMatrix||!N.u_MvpMatrixFromLight||!N.u_ShadowMap){console.log("Failed to get the storage location of attribute or uniform variable from normalProgram");return}var $=d(w),j=Fe(w);if(!$||!j){console.log("Failed to set the vertex information");return}var fe=be(w);if(!fe){console.log("Failed to initialize frame buffer object");return}w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,fe.texture),w.clearColor(0,0,0,1),w.enable(w.DEPTH_TEST);var ve=new S;ve.setPerspective(70,B/p,1,200),ve.lookAt(Y,Z,ce,0,0,0,0,1,0);var z=new S;z.setPerspective(45,K.width/K.height,1,100),z.lookAt(0,7,9,0,0,0,0,1,0);var P=0,_e=new S,le=new S,k=new S,me=new S,Ae=40,xe=Date.now(),Be=function(){P=Te(P),w.bindFramebuffer(w.FRAMEBUFFER,fe),w.viewport(0,0,p,p),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(ie),we(w,ie,$,P,ve),_e.set(me),pe(w,ie,j,ve),le.set(me),w.bindFramebuffer(w.FRAMEBUFFER,null),w.viewport(0,0,K.width,K.height),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(N),w.uniform1i(N.u_ShadowMap,0),w.uniformMatrix4fv(N.u_MvpMatrixFromLight,!1,_e.elements),we(w,N,$,P,z),w.uniformMatrix4fv(N.u_MvpMatrixFromLight,!1,le.elements),pe(w,N,j,z),window.requestAnimationFrame(Be,K)};Be();function we(t,b,T,H,L){k.setRotate(H,0,1,0),U(t,b,T,L)}function pe(t,b,T,H){k.setRotate(-45,0,1,1),U(t,b,T,H)}function U(t,b,T,H){Ee(t,b.a_Position,T.vertexBuffer),b.a_Color!=null&&Ee(t,b.a_Color,T.colorBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T.indexBuffer),me.set(H),me.multiply(k),t.uniformMatrix4fv(b.u_MvpMatrix,!1,me.elements),t.drawElements(t.TRIANGLES,T.numIndices,t.UNSIGNED_BYTE,0)}function Ee(t,b,T){t.bindBuffer(t.ARRAY_BUFFER,T),t.vertexAttribPointer(b,T.num,T.type,!1,0,0),t.enableVertexAttribArray(b)}function Fe(t){var b=new Float32Array([3,-1.7,2.5,-3,-1.7,2.5,-3,-1.7,-2.5,3,-1.7,-2.5]),T=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]),H=new Uint8Array([0,1,2,0,2,3]),L=new Object;return L.vertexBuffer=te(t,b,3,t.FLOAT),L.colorBuffer=te(t,T,3,t.FLOAT),L.indexBuffer=se(t,H,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=H.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function d(t){var b=new Float32Array([-.8,3.5,0,.8,3.5,0,0,3.5,1.8]),T=new Float32Array([1,.5,0,1,.5,0,1,0,0]),H=new Uint8Array([0,1,2]),L=new Object;return L.vertexBuffer=te(t,b,3,t.FLOAT),L.colorBuffer=te(t,T,3,t.FLOAT),L.indexBuffer=se(t,H,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=H.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function te(t,b,T,H){var L=t.createBuffer();return L?(t.bindBuffer(t.ARRAY_BUFFER,L),t.bufferData(t.ARRAY_BUFFER,b,t.STATIC_DRAW),L.num=T,L.type=H,L):(console.log("Failed to create the buffer object"),null)}function se(t,b,T){var H=t.createBuffer();return H?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,H),t.bufferData(t.ELEMENT_ARRAY_BUFFER,b,t.STATIC_DRAW),H.type=T,H):(console.log("Failed to create the buffer object"),null)}function be(t){var b,T,H,L=function(){return b&&t.deleteFramebuffer(b),T&&t.deleteTexture(T),H&&t.deleteRenderbuffer(H),null};if(b=t.createFramebuffer(),!b)return console.log("Failed to create frame buffer object"),L();if(T=t.createTexture(),!T)return console.log("Failed to create texture object"),L();if(t.bindTexture(t.TEXTURE_2D,T),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,B,p,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),H=t.createRenderbuffer(),!H)return console.log("Failed to create renderbuffer object"),L();t.bindRenderbuffer(t.RENDERBUFFER,H),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,B,p),t.bindFramebuffer(t.FRAMEBUFFER,b),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,T,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,H);var he=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.FRAMEBUFFER_COMPLETE!==he?(console.log("Frame buffer object is incomplete: "+he.toString()),L()):(b.texture=T,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),b)}function Te(t){var b=Date.now(),T=b-xe;xe=b;var H=t+Ae*T/1e3;return H%360}}function V(){var A=`
        attribute vec4 a_Position;
        uniform mat4 u_MvpMatrix;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        void main() {
          gl_FragColor = vec4(gl_FragCoord.z, 0.0, 0.0, 0.0);
        }
      `,F=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        uniform mat4 u_MvpMatrixFromLight;
        varying vec4 v_PositionFromLight;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_PositionFromLight = u_MvpMatrixFromLight * a_Position;
          v_Color = a_Color;
        }
      `,v=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform sampler2D u_ShadowMap;
        varying vec4 v_PositionFromLight;
        varying vec4 v_Color;
        void main() {
          // 此部分内容查看openGL
          vec3 shadowCoord = (v_PositionFromLight.xyz/v_PositionFromLight.w)/2.0 + 0.5;
          vec4 rgbaDepth = texture2D(u_ShadowMap, shadowCoord.xy);
          float depth = rgbaDepth.r;
          // 0.005是为了防止产生马赫带
          // float visibility = (shadowCoord.z > depth + 0.005) ? 0.7 : 1.0;
          float visibility = (shadowCoord.z > depth) ? 0.7 : 1.0;
          gl_FragColor = vec4(v_Color.rgb * visibility, v_Color.a);
        }
      `,B=2048,p=2048,Y=0,Z=7,ce=2,K=r(M),w=K.getContext("webgl");if(!w){console.log("Failed to get the rendering context for WebGL");return}var ie=ze(w,A,g);if(ie.a_Position=w.getAttribLocation(ie,"a_Position"),ie.u_MvpMatrix=w.getUniformLocation(ie,"u_MvpMatrix"),ie.a_Position<0||!ie.u_MvpMatrix){console.log("Failed to get the storage location of attribute or uniform variable from shadowProgram");return}var N=ze(w,F,v);if(N.a_Position=w.getAttribLocation(N,"a_Position"),N.a_Color=w.getAttribLocation(N,"a_Color"),N.u_MvpMatrix=w.getUniformLocation(N,"u_MvpMatrix"),N.u_MvpMatrixFromLight=w.getUniformLocation(N,"u_MvpMatrixFromLight"),N.u_ShadowMap=w.getUniformLocation(N,"u_ShadowMap"),N.a_Position<0||N.a_Color<0||!N.u_MvpMatrix||!N.u_MvpMatrixFromLight||!N.u_ShadowMap){console.log("Failed to get the storage location of attribute or uniform variable from normalProgram");return}var $=d(w),j=Fe(w);if(!$||!j){console.log("Failed to set the vertex information");return}var fe=be(w);if(!fe){console.log("Failed to initialize frame buffer object");return}w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,fe.texture),w.clearColor(0,0,0,1),w.enable(w.DEPTH_TEST);var ve=new S;ve.setPerspective(70,B/p,1,100),ve.lookAt(Y,Z,ce,0,0,0,0,1,0);var z=new S;z.setPerspective(45,K.width/K.height,1,100),z.lookAt(0,7,9,0,0,0,0,1,0);var P=40,_e=Date.now(),le=0,k=new S,me=new S,Ae=new S,xe=new S,Be=function(){le=Te(le),w.bindFramebuffer(w.FRAMEBUFFER,fe),w.viewport(0,0,p,p),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(ie),pe(w,ie,$,le,ve),Ae.set(me),U(w,ie,j,ve),xe.set(me),w.bindFramebuffer(w.FRAMEBUFFER,null),w.viewport(0,0,K.width,K.height),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(N),w.uniform1i(N.u_ShadowMap,0),w.uniformMatrix4fv(N.u_MvpMatrixFromLight,!1,Ae.elements),pe(w,N,$,le,z),w.uniformMatrix4fv(N.u_MvpMatrixFromLight,!1,xe.elements),U(w,N,j,z),requestAnimationFrame(Be,K)};Be();function we(t,b,T,H){Ee(t,b.a_Position,T.vertexBuffer),b.a_Color!=null&&Ee(t,b.a_Color,T.colorBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T.indexBuffer),me.set(H),me.multiply(k),t.uniformMatrix4fv(b.u_MvpMatrix,!1,me.elements),t.drawElements(t.TRIANGLES,T.numIndices,t.UNSIGNED_BYTE,0)}function pe(t,b,T,H,L){k.setRotate(H,0,1,0),we(t,b,T,L)}function U(t,b,T,H){k.setRotate(-45,0,1,1),we(t,b,T,H)}function Ee(t,b,T){t.bindBuffer(t.ARRAY_BUFFER,T),t.vertexAttribPointer(b,T.num,T.type,!1,0,0),t.enableVertexAttribArray(b)}function Fe(t){var b=new Float32Array([3,-1.7,2.5,-3,-1.7,2.5,-3,-1.7,-2.5,3,-1.7,-2.5]),T=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]),H=new Uint8Array([0,1,2,0,2,3]),L=new Object;return L.vertexBuffer=te(t,b,3,t.FLOAT),L.colorBuffer=te(t,T,3,t.FLOAT),L.indexBuffer=se(t,H,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=H.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function d(t){var b=new Float32Array([-.8,3.5,0,.8,3.5,0,0,3.5,1.8]),T=new Float32Array([1,.5,0,1,.5,0,1,0,0]),H=new Uint8Array([0,1,2]),L=new Object;return L.vertexBuffer=te(t,b,3,t.FLOAT),L.colorBuffer=te(t,T,3,t.FLOAT),L.indexBuffer=se(t,H,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=H.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function te(t,b,T,H){var L=t.createBuffer();return L?(t.bindBuffer(t.ARRAY_BUFFER,L),t.bufferData(t.ARRAY_BUFFER,b,t.STATIC_DRAW),L.num=T,L.type=H,L):(console.log("Failed to create the buffer object"),null)}function se(t,b,T){var H=t.createBuffer();return H?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,H),t.bufferData(t.ELEMENT_ARRAY_BUFFER,b,t.STATIC_DRAW),H.type=T,H):(console.log("Failed to create the buffer object"),null)}function be(t){var b,T,H,L=function(){return b&&t.deleteFramebuffer(b),T&&t.deleteTexture(T),H&&t.deleteRenderbuffer(H),null};if(b=t.createFramebuffer(),!b)return console.log("Failed to create frame buffer object"),L();if(T=t.createTexture(),!T)return console.log("Failed to create texture object"),L();if(t.bindTexture(t.TEXTURE_2D,T),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,B,p,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),H=t.createRenderbuffer(),!H)return console.log("Failed to create renderbuffer object"),L();t.bindRenderbuffer(t.RENDERBUFFER,H),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,B,p),t.bindFramebuffer(t.FRAMEBUFFER,b),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,T,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,H);var he=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.FRAMEBUFFER_COMPLETE!==he?(console.log("Frame buffer object is incomplete: "+he.toString()),L()):(b.texture=T,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),b)}function Te(t){var b=Date.now(),T=b-_e;_e=b;var H=t+P*T/1e3;return H%360}}function R(){var A=`
        // 点坐标
        attribute vec4 a_Position;
        // 纹理坐标
        attribute vec2 a_TexCoord;
        // mvp矩阵
        uniform mat4 u_MvpMatrix;
        varying vec2 v_TexCoord;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_TexCoord = a_TexCoord;
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform sampler2D u_Sampler;
        varying vec2 v_TexCoord;
        void main() {
          gl_FragColor = texture2D(u_Sampler, v_TexCoord);
        }
      `,F=256,v=256,B=r(oe),p=B.getContext("webgl");Re(p,A,g);var Y=p.program;Y.a_Position=p.getAttribLocation(Y,"a_Position"),Y.a_TexCoord=p.getAttribLocation(Y,"a_TexCoord"),Y.u_MvpMatrix=p.getUniformLocation(Y,"u_MvpMatrix");var Z=_e(p),ce=le(p),K=Ae(p),w=xe(p);p.enable(p.DEPTH_TEST);var ie=new S;ie.setPerspective(30,B.width/B.height,1,100),ie.lookAt(0,0,7,0,0,0,0,1,0);var N=new S;N.setPerspective(30,F/v,1,100),N.lookAt(0,2,7,0,0,0,0,1,0);var $=0,j=new S,fe=new S,ve=30,z=Date.now(),P=function(){$=Fe($),Be(p,B,w,ce,Z,$,K,ie,N),window.requestAnimationFrame(P,B)};P();function _e(d){var te=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),se=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),be=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),Te=new Object;return Te.vertexBuffer=k(d,te,3,d.FLOAT),Te.texCoordBuffer=k(d,se,2,d.FLOAT),Te.indexBuffer=me(d,be,d.UNSIGNED_BYTE),Te.numIndices=be.length,d.bindBuffer(d.ARRAY_BUFFER,null),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,null),Te}function le(d){var te=new Float32Array([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),se=new Float32Array([1,1,0,1,0,0,1,0]),be=new Uint8Array([0,1,2,0,2,3]),Te=new Object;return Te.vertexBuffer=k(d,te,3,d.FLOAT),Te.texCoordBuffer=k(d,se,2,d.FLOAT),Te.indexBuffer=me(d,be,d.UNSIGNED_BYTE),Te.numIndices=be.length,d.bindBuffer(d.ARRAY_BUFFER,null),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,null),Te}function k(d,te,se,be){var Te=d.createBuffer();return d.bindBuffer(d.ARRAY_BUFFER,Te),d.bufferData(d.ARRAY_BUFFER,te,d.STATIC_DRAW),Te.num=se,Te.type=be,Te}function me(d,te,se){var be=d.createBuffer();return d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,be),d.bufferData(d.ELEMENT_ARRAY_BUFFER,te,d.STATIC_DRAW),be.type=se,be}function Ae(d){var te=d.createTexture(),se=d.getUniformLocation(d.program,"u_Sampler"),be=new Image;return be.onload=function(){d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,1),d.bindTexture(d.TEXTURE_2D,te),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,be),d.uniform1i(se,0),d.bindTexture(d.TEXTURE_2D,null)},be.src="/lab-static/images/webgl-practice/sky-roof.jpg",te}function xe(d){var te,se,be,Te=function(){return te&&d.deleteFramebuffer(te),se&&d.deleteTexture(se),be&&d.deleteRenderbuffer(be),null};te=d.createFramebuffer(),se=d.createTexture(),d.bindTexture(d.TEXTURE_2D,se),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,F,v,0,d.RGBA,d.UNSIGNED_BYTE,null),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR),te.texture=se,be=d.createRenderbuffer(),d.bindRenderbuffer(d.RENDERBUFFER,be),d.renderbufferStorage(d.RENDERBUFFER,d.DEPTH_COMPONENT16,F,v),d.bindFramebuffer(d.FRAMEBUFFER,te),d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,se,0),d.framebufferRenderbuffer(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.RENDERBUFFER,be);var t=d.checkFramebufferStatus(d.FRAMEBUFFER);return d.FRAMEBUFFER_COMPLETE!==t?(console.log("Frame buffer object is incomplete: "+t.toString()),Te()):(d.bindFramebuffer(d.FRAMEBUFFER,null),d.bindTexture(d.TEXTURE_2D,null),d.bindRenderbuffer(d.RENDERBUFFER,null),te)}function Be(d,te,se,be,Te,t,b,T,H){d.bindFramebuffer(d.FRAMEBUFFER,se),d.viewport(0,0,F,v),d.clearColor(0,.4,.4,1),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),we(d,d.program,Te,t,b,H),d.bindFramebuffer(d.FRAMEBUFFER,null),d.viewport(0,0,te.width,te.height),d.clearColor(0,0,0,1),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),pe(d,d.program,be,t,se.texture,T)}function we(d,te,se,be,Te,t){j.setRotate(20,1,0,0),j.rotate(be,0,1,0),fe.set(t),fe.multiply(j),d.uniformMatrix4fv(te.u_MvpMatrix,!1,fe.elements),U(d,te,se,Te)}function pe(d,te,se,be,Te,t){j.setTranslate(0,0,1),j.rotate(20,1,0,0),j.rotate(be,0,1,0),fe.set(t),fe.multiply(j),d.uniformMatrix4fv(te.u_MvpMatrix,!1,fe.elements),U(d,te,se,Te)}function U(d,te,se,be){Ee(d,te.a_Position,se.vertexBuffer),Ee(d,te.a_TexCoord,se.texCoordBuffer),d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,be),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,se.indexBuffer),d.drawElements(d.TRIANGLES,se.numIndices,se.indexBuffer.type,0)}function Ee(d,te,se){d.bindBuffer(d.ARRAY_BUFFER,se),d.vertexAttribPointer(te,se.num,se.type,!1,0,0),d.enableVertexAttribArray(te)}function Fe(d){var te=Date.now(),se=te-z;z=te;var be=d+ve*se/1e3;return be%360}}function I(){const A=`
      // 点原始坐标
      attribute vec4 a_Position;
      // 点原始法向量
      attribute vec4 a_Normal;
      // MVP矩阵，模型视图投影矩阵
      uniform mat4 u_MvpMatrix;
      // 法向量变换矩阵
      uniform mat4 u_NormalMatrix;
      // 点颜色，通道，通向片元着色器
      varying vec4 v_Color;
      void main() {
        // 光向量
        vec3 lightDirection = vec3(0.0,0.0,1.0);
        // 光颜色
        vec4 color = vec4(0.0,1.0,1.0,1.0);
        // 点变换后坐标
        gl_Position = u_MvpMatrix * a_Position;
        // 点变换后法向量
        vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
        // 光方向与法向量的点积，为光在某点的强度
        float nDot = max(dot(normal, lightDirection), 0.0);
        v_Color = vec4(color.rgb*nDot, color.a);
      }
      `,g=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,F=`
      attribute vec4 a_Position;
      attribute vec4 a_Normal;
      // 点对应的纹理坐标
      attribute vec2 a_TexCoord;
      uniform mat4 u_MvpMatrix;
      uniform mat4 u_NormalMatrix;
      varying float v_NdotL;
      varying vec2 v_TexCoord;
      void main() {
        vec3 lightDirection = vec3(0.0,0.0,1.0);
        gl_Position = u_MvpMatrix * a_Position;
        vec3 normal = normalize(vec3(u_NormalMatrix * a_Normal));
        v_NdotL = max(dot(normal,lightDirection),0.0);
        v_TexCoord = a_TexCoord;
      }
      `,v=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      uniform sampler2D u_Sampler;
      varying vec2 v_TexCoord;
      varying float v_NdotL;
      void main() {
        vec4 color = texture2D(u_Sampler,v_TexCoord);
        gl_FragColor = vec4(color.rgb * v_NdotL, color.a);
      }
      `,B=r(re),p=B.getContext("webgl"),Y=pe(p,A,g),Z=pe(p,F,v);Y.a_Position=p.getAttribLocation(Y,"a_Position"),Y.a_Normal=p.getAttribLocation(Y,"a_Normal"),Y.u_MvpMatrix=p.getUniformLocation(Y,"u_MvpMatrix"),Y.u_NormalMatrix=p.getUniformLocation(Y,"u_NormalMatrix"),Z.a_Position=p.getAttribLocation(Z,"a_Position"),Z.a_Normal=p.getAttribLocation(Z,"a_Normal"),Z.a_TexCoord=p.getAttribLocation(Z,"a_TexCoord"),Z.u_MvpMatrix=p.getUniformLocation(Z,"u_MvpMatrix"),Z.u_NormalMatrix=p.getUniformLocation(Z,"u_NormalMatrix"),Z.u_Sampler=p.getUniformLocation(Z,"u_Sampler");const ce=xe(p),K=Ae(p,Z);p.enable(p.DEPTH_TEST),p.clearColor(0,0,0,1);const w=new S;w.setPerspective(30,B.width/B.height,1,100),w.lookAt(0,0,15,0,0,0,0,1,0);const ie=new S,N=new S,$=new S;let j=0;const fe=30;let ve=Date.now();const z=function(){j=me(j),p.clear(p.COLOR_BUFFER_BIT|p.DEPTH_BUFFER_BIT),_e(p,Y,ce,-2,j,w),P(p,Z,ce,K,2,j,w),requestAnimationFrame(z,B)};z();function P(U,Ee,Fe,d,te,se,be){U.useProgram(Ee),k(U,Ee.a_Position,Fe.vertexBuffer),k(U,Ee.a_Normal,Fe.normalBuffer),k(U,Ee.a_TexCoord,Fe.texCoordBuffer),U.bindBuffer(U.ELEMENT_ARRAY_BUFFER,Fe.indexBuffer),U.activeTexture(U.TEXTURE0),U.bindTexture(U.TEXTURE_2D,d),le(U,Ee,Fe,te,se,be)}function _e(U,Ee,Fe,d,te,se){U.useProgram(Ee),k(U,Ee.a_Position,Fe.vertexBuffer),k(U,Ee.a_Normal,Fe.normalBuffer),U.bindBuffer(U.ELEMENT_ARRAY_BUFFER,Fe.indexBuffer),le(U,Ee,Fe,d,te,se)}function le(U,Ee,Fe,d,te,se){ie.setTranslate(d,0,0),ie.rotate(20,1,0,0),ie.rotate(te,0,1,0),$.setInverseOf(ie),$.transpose(),U.uniformMatrix4fv(Ee.u_NormalMatrix,!1,$.elements),N.set(se),N.multiply(ie),U.uniformMatrix4fv(Ee.u_MvpMatrix,!1,N.elements),U.drawElements(U.TRIANGLES,Fe.numIndices,Fe.indexBuffer.type,0)}function k(U,Ee,Fe){U.bindBuffer(U.ARRAY_BUFFER,Fe),U.vertexAttribPointer(Ee,Fe.num,Fe.type,!1,0,0),U.enableVertexAttribArray(Ee)}function me(U){const Ee=Date.now(),Fe=Ee-ve;return ve=Ee,(U+fe*Fe/1e3)%360}function Ae(U,Ee){const Fe=U.createTexture(),d=new Image;return d.addEventListener("load",()=>{U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,1),U.activeTexture(U.TEXTURE0),U.bindTexture(U.TEXTURE_2D,Fe),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.LINEAR),U.texImage2D(U.TEXTURE_2D,0,U.RGBA,U.RGBA,U.UNSIGNED_BYTE,d),U.useProgram(Ee),U.uniform1i(Ee.u_Sampler,0),U.bindTexture(U.TEXTURE_2D,null)}),d.src="/lab-static/images/webgl-practice/xdd.jpg",Fe}function xe(U){const Ee=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),Fe=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),d=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),te=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),se={vertexBuffer:Be(U,Ee,3,U.FLOAT),normalBuffer:Be(U,Fe,3,U.FLOAT),texCoordBuffer:Be(U,d,2,U.FLOAT),indexBuffer:we(U,te,U.UNSIGNED_BYTE),numIndices:te.length};return U.bindBuffer(U.ARRAY_BUFFER,null),U.bindBuffer(U.ELEMENT_ARRAY_BUFFER,null),se}function Be(U,Ee,Fe,d){const te=U.createBuffer();return U.bindBuffer(U.ARRAY_BUFFER,te),U.bufferData(U.ARRAY_BUFFER,Ee,U.STATIC_DRAW),te.num=Fe,te.type=d,te}function we(U,Ee,Fe){var d=U.createBuffer();return U.bindBuffer(U.ELEMENT_ARRAY_BUFFER,d),U.bufferData(U.ELEMENT_ARRAY_BUFFER,Ee,U.STATIC_DRAW),d.type=Fe,d}function pe(U,Ee,Fe){const d=U.createShader(U.VERTEX_SHADER),te=U.createShader(U.FRAGMENT_SHADER);U.shaderSource(d,Ee),U.shaderSource(te,Fe),U.compileShader(d),U.compileShader(te);const se=U.getShaderParameter(d,U.COMPILE_STATUS),be=U.getShaderParameter(te,U.COMPILE_STATUS);if(!se){const b=U.getShaderInfoLog(d);console.error(b),U.deleteShader(d);return}if(!be){const b=U.getShaderInfoLog(te);console.error(b),U.deleteShader(te);return}const Te=U.createProgram();if(U.attachShader(Te,d),U.attachShader(Te,te),U.linkProgram(Te),!U.getProgramParameter(Te,U.LINK_STATUS)){const b=U.getProgramInfoLog(Te);console.error(b),U.deleteShader(d),U.deleteShader(te),U.deleteProgram(Te);return}return Te}}function h(){var A=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_mvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_mvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(q),v=F.getContext("webgl");Re(v,A,g);var B=ie(v);v.clearColor(0,0,0,1),v.enable(v.BLEND),v.enable(v.DEPTH_TEST),v.blendFunc(v.SRC_ALPHA,v.ONE_MINUS_SRC_ALPHA);var p=.2,Y=.25,Z=.25,ce=v.getUniformLocation(v.program,"u_mvpMatrix"),K=new S,w=new S;w.setOrtho(-1,1,-1,1,0,2),N(v,B,ce,K);function ie($){var j=new Float32Array([0,.5,0,.4,.4,1,.6,-.5,-.5,0,.4,.4,1,.6,.5,-.5,0,.4,.4,1,.6,0,.5,-.4,.4,1,.4,.1,-.5,-.5,-.4,.4,1,.4,.1,.5,-.5,-.4,.4,1,.4,.1,.5,.4,-.2,1,.4,.4,1,-.5,.4,-.2,1,.4,.4,1,0,-.6,-.2,1,.4,.4,1]),fe=9,ve=$.createBuffer();$.bindBuffer($.ARRAY_BUFFER,ve),$.bufferData($.ARRAY_BUFFER,j,$.STATIC_DRAW);var z=j.BYTES_PER_ELEMENT,P=$.getAttribLocation($.program,"a_Position");$.vertexAttribPointer(P,3,$.FLOAT,!1,z*7,0),$.enableVertexAttribArray(P);var _e=$.getAttribLocation($.program,"a_Color");return $.vertexAttribPointer(_e,4,$.FLOAT,!1,z*7,z*3),$.enableVertexAttribArray(_e),$.bindBuffer($.ARRAY_BUFFER,null),fe}function N($,j,fe,ve){ve.setLookAt(p,Y,Z,0,0,0,0,1,0);const z=new S(w);z.multiply(ve),$.uniformMatrix4fv(fe,!1,z.elements),$.clear($.COLOR_BUFFER_BIT|$.DEPTH_BUFFER_BIT),$.drawArrays($.TRIANGLES,6,9),$.depthMask(!1),$.drawArrays($.TRIANGLES,3,6),$.drawArrays($.TRIANGLES,0,3),$.depthMask(!0)}}function E(){var A=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(G),v=F.getContext("webgl");Re(v,A,g);var B=Z(v);v.clearColor(0,0,0,1),v.enable(v.BLEND),v.blendFunc(v.SRC_ALPHA,v.ONE_MINUS_SRC_ALPHA);var p=v.getUniformLocation(v.program,"u_MvpMatrix"),Y=new S;Y.setPerspective(30,1,1,100),Y.lookAt(3,3,7,0,0,0,0,1,0),v.uniformMatrix4fv(p,!1,Y.elements),v.clear(v.COLOR_BUFFER_BIT),v.drawElements(v.TRIANGLES,B,v.UNSIGNED_BYTE,0);function Z(K){var w=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),ie=new Float32Array([.5,.5,1,.4,.5,.5,1,.4,.5,.5,1,.4,.5,.5,1,.4,.5,1,.5,.4,.5,1,.5,.4,.5,1,.5,.4,.5,1,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,1,.4,1,1,1,.4,1,1,1,.4,1,1,1,.4,.5,1,1,.4,.5,1,1,.4,.5,1,1,.4,.5,1,1,.4]),N=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),$=K.createBuffer();return!$||!ce(K,w,3,K.FLOAT,"a_Position")||!ce(K,ie,4,K.FLOAT,"a_Color")?-1:(K.bindBuffer(K.ARRAY_BUFFER,null),K.bindBuffer(K.ELEMENT_ARRAY_BUFFER,$),K.bufferData(K.ELEMENT_ARRAY_BUFFER,N,K.STATIC_DRAW),N.length)}function ce(K,w,ie,N,$){var j=K.createBuffer();if(!j)return console.log("Failed to create the buffer object"),!1;K.bindBuffer(K.ARRAY_BUFFER,j),K.bufferData(K.ARRAY_BUFFER,w,K.STATIC_DRAW);var fe=K.getAttribLocation(K.program,$);return fe<0?(console.log("Failed to get the storage location of "+$),!1):(K.vertexAttribPointer(fe,ie,N,!1,0,0),K.enableVertexAttribArray(fe),K.bindBuffer(K.ARRAY_BUFFER,null),!0)}}function u(){var A=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_mvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_mvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(O),v=F.getContext("webgl");Re(v,A,g);var B=ie(v);v.clearColor(0,0,0,1),v.enable(v.BLEND),v.blendFunc(v.SRC_ALPHA,v.ONE);var p=.2,Y=.25,Z=.25,ce=v.getUniformLocation(v.program,"u_mvpMatrix"),K=new S;window.onkeydown=function(j){N(j,v,B,ce,K)};var w=new S;w.setOrtho(-1,1,-1,1,0,2),$(v,B,ce,K);function ie(j){var fe=new Float32Array([0,.5,-.4,.4,1,.4,.6,-.5,-.5,-.4,.4,1,.4,.6,.5,-.5,-.4,.4,1,.4,.6,.5,.4,-.2,1,.4,.4,.6,-.5,.4,-.2,1,.4,.4,.6,0,-.6,-.2,1,.4,.4,.6,0,.5,0,.4,.4,1,.6,-.5,-.5,0,.4,.4,1,.6,.5,-.5,0,.4,.4,1,.6]),ve=9,z=j.createBuffer();j.bindBuffer(j.ARRAY_BUFFER,z),j.bufferData(j.ARRAY_BUFFER,fe,j.STATIC_DRAW);var P=fe.BYTES_PER_ELEMENT,_e=j.getAttribLocation(j.program,"a_Position");j.vertexAttribPointer(_e,3,j.FLOAT,!1,P*7,0),j.enableVertexAttribArray(_e);var le=j.getAttribLocation(j.program,"a_Color");return j.vertexAttribPointer(le,4,j.FLOAT,!1,P*7,P*3),j.enableVertexAttribArray(le),j.bindBuffer(j.ARRAY_BUFFER,null),ve}function N(j,fe,ve,z,P){if(j.keyCode==39)p+=.01;else if(j.keyCode==37)p-=.01;else return;$(fe,ve,z,P)}function $(j,fe,ve,z){z.setLookAt(p,Y,Z,0,0,0,0,1,0);const P=new S(w);P.multiply(z),j.uniformMatrix4fv(ve,!1,P.elements),j.clear(j.COLOR_BUFFER_BIT|j.DEPTH_BUFFER_BIT),j.drawArrays(j.TRIANGLES,0,fe)}}function ee(){var A=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 50.0;
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        void main() {
          // 片元坐标距离中心点的距离
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          // 半径
          if(d < 0.3) {
            gl_FragColor = vec4(0.0, 0.6, 0.6, 1.0);
          } else {
            // 放弃这个片元
            discard;
          }
        }
      `,F=r(X),v=ht(F);Re(v,A,g);var B=p(v);v.clearColor(0,0,0,1),v.clear(v.COLOR_BUFFER_BIT),v.drawArrays(v.POINTS,0,B);function p(Y){var Z=new Float32Array([0,.5,-.5,-.5,.5,-.5]),ce=3,K=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,K),Y.bufferData(Y.ARRAY_BUFFER,Z,Y.STATIC_DRAW);var w=Y.getAttribLocation(Y.program,"a_Position");return Y.vertexAttribPointer(w,2,Y.FLOAT,!1,0,0),Y.bindBuffer(Y.ARRAY_BUFFER,null),Y.enableVertexAttribArray(w),ce}}function y(){const A=`
      attribute vec4 a_Position;
      attribute vec4 a_Color;
      uniform mat4 u_MvpMatrix;
      uniform mat4 u_ModelMatrix;
      // 视点坐标
      uniform vec4 u_Eye;
      varying vec4 v_Color;
      // 距离
      varying float v_Dist;
      void main() {
        // mvp变换，实际的坐标
        gl_Position = u_MvpMatrix * a_Position;
        v_Color = a_Color;
        // distance用于计算两个点之间的距离
        // 此处计算的是变换后点和视点的距离
        // v_Dist = distance(u_ModelMatrix * a_Position, u_Eye);
        // gl_Position即变换后的坐标，w是”视图坐标“的深度信息，正值，约等于视点和变换后点的距离
        v_Dist = gl_Position.w;
      }
      `,g=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      uniform vec3 u_FogColor;
      uniform vec2 u_FogRange;
      varying vec4 v_Color;
      varying float v_Dist;
      void main() {
        // 雾化因子，雾化效果的改变就是因子算法的改变，clamp将取值限制在2，3参数的范围内
        float fogFactor = clamp((u_FogRange.y - v_Dist) / (u_FogRange.y - u_FogRange.x), 0.0, 1.0);
        // mix将两种颜色按照x和1-x的形式混合
        vec3 color = mix(u_FogColor,vec3(v_Color), fogFactor);
        gl_FragColor = vec4(color, v_Color.a);
      }
      `,v=r(l).getContext("webgl");Re(v,A,g);const B=fe(v);var p=v.getUniformLocation(v.program,"u_MvpMatrix"),Y=v.getUniformLocation(v.program,"u_ModelMatrix"),Z=v.getUniformLocation(v.program,"u_Eye"),ce=v.getUniformLocation(v.program,"u_FogColor"),K=v.getUniformLocation(v.program,"u_FogRange");const w=new Float32Array([1,1,1]),ie=new Float32Array([20,20,20,1]);v.uniform3fv(ce,w),v.uniform4fv(Z,ie);const N=new Float32Array([25,50]);v.uniform2fv(K,N),v.clearColor(0,0,0,1),v.enable(v.DEPTH_TEST);const $=new S;$.setScale(5,5,5),v.uniformMatrix4fv(Y,!1,$.elements);const j=new S;j.setPerspective(60,1,1,50),j.lookAt(ie[0],ie[1],ie[2],0,0,0,0,1,0),j.multiply($),v.uniformMatrix4fv(p,!1,j.elements),v.clear(v.COLOR_BUFFER_BIT|v.DEPTH_BUFFER_BIT),v.drawElements(v.TRIANGLES,B,v.UNSIGNED_BYTE,0);function fe(ve){var z=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),P=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),_e=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),le=ve.createBuffer();return le?(Q(ve,z,3,ve.FLOAT,"a_Position"),Q(ve,P,3,ve.FLOAT,"a_Color"),ve.bindBuffer(ve.ELEMENT_ARRAY_BUFFER,le),ve.bufferData(ve.ELEMENT_ARRAY_BUFFER,_e,ve.STATIC_DRAW),_e.length):-1}}function W(){var A=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        uniform bool u_Clicked;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          if (u_Clicked) {
            v_Color = vec4(1.0, 0.0, 0.0, 1.0);
          } else {
            v_Color = a_Color;
          }
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=20,v=r(n),B=r(D),p=v.getContext("webgl"),Y=B.getContext("2d"),Z=new S,ce=Date.now();Re(p,A,g);var K=fe(p);p.clearColor(0,0,0,1),p.enable(p.DEPTH_TEST);var w=p.getUniformLocation(p.program,"u_MvpMatrix"),ie=p.getUniformLocation(p.program,"u_Clicked"),N=new S;N.setPerspective(30,v.width/v.height,1,100),N.lookAt(0,0,7,0,0,0,0,1,0),p.uniform1i(ie,0);var $=0;B.onmousedown=function(k){const{layerX:me,layerY:Ae}=k;var xe=ve(p,K,me,Ae,$,ie,N,w);xe&&console.log("点中了盒子")};var j=function(){$=_e($),P(Y,$),z(p,K,$,N,w),requestAnimationFrame(j,v)};j();function fe(k){var me=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),Ae=new Float32Array([.2,.58,.82,.2,.58,.82,.2,.58,.82,.2,.58,.82,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),xe=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);if(!le(k,me,3,k.FLOAT,"a_Position")||!le(k,Ae,3,k.FLOAT,"a_Color"))return-1;var Be=k.createBuffer();return Be?(k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,Be),k.bufferData(k.ELEMENT_ARRAY_BUFFER,xe,k.STATIC_DRAW),xe.length):-1}function ve(k,me,Ae,xe,Be,we,pe,U){var Ee=!1;k.uniform1i(we,1),z(k,me,Be,pe,U);var Fe=new Uint8Array(4);return k.readPixels(Ae,xe,1,1,k.RGBA,k.UNSIGNED_BYTE,Fe),Fe[0]==255&&(Ee=!0),k.uniform1i(we,0),z(k,me,Be,pe,U),Ee}function z(k,me,Ae,xe,Be){Z.set(xe),Z.rotate(Ae,1,0,0),Z.rotate(Ae,0,1,0),Z.rotate(Ae,0,0,1),k.uniformMatrix4fv(Be,!1,Z.elements),k.clear(k.COLOR_BUFFER_BIT|k.DEPTH_BUFFER_BIT),k.drawElements(k.TRIANGLES,me,k.UNSIGNED_BYTE,0)}function P(k,me){k.clearRect(0,0,400,400),k.beginPath(),k.moveTo(120,10),k.lineTo(200,150),k.lineTo(40,150),k.closePath(),k.strokeStyle="rgba(255, 255, 255, 1)",k.stroke(),k.font='18px "Times New Roman"',k.fillStyle="rgba(255, 255, 255, 1)",k.fillText("HUD: Head Up Display",40,180),k.fillText("Current Angle: "+Math.floor(me),40,240)}function _e(k){var me=Date.now(),Ae=me-ce;ce=me;var xe=k+F*Ae/1e3;return xe%360}function le(k,me,Ae,xe,Be){var we=k.createBuffer();if(!we)return console.log("Failed to create the buffer object"),!1;k.bindBuffer(k.ARRAY_BUFFER,we),k.bufferData(k.ARRAY_BUFFER,me,k.STATIC_DRAW);var pe=k.getAttribLocation(k.program,Be);return pe<0?(console.log("Failed to get the storage location of "+Be),!1):(k.vertexAttribPointer(pe,Ae,xe,!1,0,0),k.enableVertexAttribArray(pe),k.bindBuffer(k.ARRAY_BUFFER,null),!0)}}function ae(){var A=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        uniform mat4 u_MvpMatrix;

        attribute float a_Face;
        uniform int u_PickedFace;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          int face = int(a_Face);
          vec3 color = (face == u_PickedFace) ? vec3(1.0) : a_Color.rgb;
          if(u_PickedFace == 0) {
            // readPixels会转成256的表现形式，所以需要除法
            v_Color = vec4(color, a_Face/255.0);
          } else {
            v_Color = vec4(color, a_Color.a);
          }
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=20,v=new S,B=Date.now(),p=r(c),Y=p.getContext("webgl");Re(Y,A,g);var Z=$(Y);Y.clearColor(0,0,0,1),Y.enable(Y.DEPTH_TEST);var ce=Y.getUniformLocation(Y.program,"u_MvpMatrix"),K=Y.getUniformLocation(Y.program,"u_PickedFace"),w=new S;w.setPerspective(30,p.width/p.height,1,100),w.lookAt(0,0,7,0,0,0,0,1,0),Y.uniform1i(K,-1);var ie=0;p.onmousedown=function(P){const{layerX:_e,layerY:le}=P;var k=j(Y,Z,_e,le,ie,K,w,ce);Y.uniform1i(K,k),fe(Y,Z,ie,w,ce)};var N=function(){ie=ve(ie),fe(Y,Z,ie,w,ce),requestAnimationFrame(N,p)};N();function $(P){var _e=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),le=new Float32Array([.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.27,.58,.82,.27,.58,.82,.27,.58,.82,.27,.58,.82,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),k=new Uint8Array([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6]),me=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),Ae=P.createBuffer();return!z(P,_e,P.FLOAT,3,"a_Position")||!z(P,le,P.FLOAT,3,"a_Color")||!z(P,k,P.UNSIGNED_BYTE,1,"a_Face")?-1:(P.bindBuffer(P.ARRAY_BUFFER,null),P.bindBuffer(P.ELEMENT_ARRAY_BUFFER,Ae),P.bufferData(P.ELEMENT_ARRAY_BUFFER,me,P.STATIC_DRAW),me.length)}function j(P,_e,le,k,me,Ae,xe,Be){var we=new Uint8Array(4);return P.uniform1i(Ae,0),fe(P,_e,me,xe,Be),P.readPixels(le,k,1,1,P.RGBA,P.UNSIGNED_BYTE,we),we[3]}function fe(P,_e,le,k,me){v.set(k),v.rotate(le,1,0,0),v.rotate(le,0,1,0),v.rotate(le,0,0,1),P.uniformMatrix4fv(me,!1,v.elements),P.clear(P.COLOR_BUFFER_BIT|P.DEPTH_BUFFER_BIT),P.drawElements(P.TRIANGLES,_e,P.UNSIGNED_BYTE,0)}function ve(P){var _e=Date.now(),le=_e-B;B=_e;var k=P+F*le/1e3;return k%360}function z(P,_e,le,k,me){var Ae=P.createBuffer();if(!Ae)return console.log("Failed to create the buffer object"),!1;P.bindBuffer(P.ARRAY_BUFFER,Ae),P.bufferData(P.ARRAY_BUFFER,_e,P.STATIC_DRAW);var xe=P.getAttribLocation(P.program,me);return xe<0?(console.log("Failed to get the storage location of "+me),!1):(P.vertexAttribPointer(xe,k,le,!1,0,0),P.enableVertexAttribArray(xe),!0)}}function J(){var A=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        uniform bool u_Clicked;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          if (u_Clicked) {
            // 点击后向u_Clicked传true，缓冲区设置为红色
            v_Color = vec4(1.0, 0.0, 0.0, 1.0);
          } else {
            v_Color = a_Color;
          }
        }
      `,g=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=20,v=r(e),B=v.getContext("webgl");Re(B,A,g);var p=$(B);B.clearColor(0,0,0,1),B.enable(B.DEPTH_TEST);var Y=B.getUniformLocation(B.program,"u_MvpMatrix"),Z=B.getUniformLocation(B.program,"u_Clicked"),ce=new S;ce.setPerspective(30,v.width/v.height,1,100),ce.lookAt(0,0,7,0,0,0,0,1,0),B.uniform1i(Z,0);var K=0;v.onmousedown=function(P){const{layerX:_e,layerY:le}=P;var k=fe(B,p,_e,le,K,Z,ce,Y);k&&et.info("点中了盒子")};var w=new S,ie=Date.now(),N=function(){K=z(K),ve(B,p,K,ce,Y),requestAnimationFrame(N,v)};N();function $(P){var _e=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),le=new Float32Array([.2,.58,.82,.2,.58,.82,.2,.58,.82,.2,.58,.82,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),k=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);j(P,_e,P.FLOAT,3,"a_Position"),j(P,le,P.FLOAT,3,"a_Color");var me=P.createBuffer();return P.bindBuffer(P.ELEMENT_ARRAY_BUFFER,me),P.bufferData(P.ELEMENT_ARRAY_BUFFER,k,P.STATIC_DRAW),k.length}function j(P,_e,le,k,me){var Ae=P.createBuffer();P.bindBuffer(P.ARRAY_BUFFER,Ae),P.bufferData(P.ARRAY_BUFFER,_e,P.STATIC_DRAW);var xe=P.getAttribLocation(P.program,me);return P.vertexAttribPointer(xe,k,le,!1,0,0),P.enableVertexAttribArray(xe),!0}function fe(P,_e,le,k,me,Ae,xe,Be){var we=!1;P.uniform1i(Ae,1),ve(P,_e,me,xe,Be);var pe=new Uint8Array(4);return P.readPixels(le,k,1,1,P.RGBA,P.UNSIGNED_BYTE,pe),pe[0]==255&&pe[1]==0&&pe[2]==0&&(we=!0),P.uniform1i(Ae,0),ve(P,_e,me,xe,Be),we}function ve(P,_e,le,k,me){w.set(k),w.rotate(le,1,0,0),w.rotate(le,0,1,0),w.rotate(le,0,0,1),P.uniformMatrix4fv(me,!1,w.elements),P.clear(P.COLOR_BUFFER_BIT|P.DEPTH_BUFFER_BIT),P.drawElements(P.TRIANGLES,_e,P.UNSIGNED_BYTE,0)}function z(P){var _e=Date.now(),le=_e-ie;ie=_e;var k=P+F*le/1e3;return k%360}}function ne(){const A=`
      attribute vec4 a_Position;
      attribute vec2 a_TexCoord;
      uniform mat4 u_MvpMatrix;
      varying vec2 v_TexCoord;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_TexCoord = a_TexCoord;
      }
      `,g=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      uniform sampler2D u_Sampler;
      varying vec2 v_TexCoord;
      void main() {
        gl_FragColor = texture2D(u_Sampler, v_TexCoord);
      }
      `,F=r(i),v=F.getContext("webgl");Re(v,A,g);const B=ve(v);v.clearColor(0,0,0,1),v.enable(v.DEPTH_TEST),v.enable(v.POLYGON_OFFSET_FILL);const p=v.getUniformLocation(v.program,"u_MvpMatrix");v.getAttribLocation(v.program,"a_Position"),v.getAttribLocation(v.program,"a_TexCoord");const Y=v.getUniformLocation(v.program,"u_Sampler"),Z=new S;Z.setPerspective(30,1,1,100),Z.lookAt(3,3,7,0,0,0,0,1,0);const ce=new S(Z);let K=0,w=0,ie=0,N=0,$=!1;fe(v),j(),F.addEventListener("mousedown",z=>{const{layerX:P,layerY:_e}=z;ie=P,N=_e,$=!0}),F.addEventListener("mousemove",z=>{if(!$)return;const{layerX:P,layerY:_e}=z,le=(P-ie)/F.width*360,k=(_e-N)/F.height*360;K=K+k,w=w+le,j(),ie=P,N=_e}),F.addEventListener("mouseup",z=>{ie=0,N=0,$=!1}),F.addEventListener("mouseleave",z=>{ie=0,N=0,$=!1});function j(){ce.set(Z),ce.rotate(K,1,0,0),ce.rotate(w,0,1,0),v.uniformMatrix4fv(p,!1,ce.elements),v.clear(v.COLOR_BUFFER_BIT|v.DEPTH_BUFFER_BIT),v.drawElements(v.TRIANGLES,B,v.UNSIGNED_BYTE,0)}function fe(z){const P=new Image;P.onload=function(){const _e=z.createTexture();z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,1),z.activeTexture(z.TEXTURE0),z.bindTexture(z.TEXTURE_2D,_e),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.LINEAR),z.texImage2D(z.TEXTURE_2D,0,z.RGB,z.RGB,z.UNSIGNED_BYTE,P),z.uniform1i(Y,0),j()},P.src="/lab-static/images/webgl-practice/sy.jpg"}function ve(z){const P=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),_e=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),le=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);Q(z,P,3,z.FLOAT,"a_Position"),Q(z,_e,2,z.FLOAT,"a_TexCoord");const k=z.createBuffer();return z.bindBuffer(z.ELEMENT_ARRAY_BUFFER,k),z.bufferData(z.ELEMENT_ARRAY_BUFFER,le,z.STATIC_DRAW),le.length}}function Q(A,g,F,v,B){var p=A.createBuffer();A.bindBuffer(A.ARRAY_BUFFER,p),A.bufferData(A.ARRAY_BUFFER,g,A.STATIC_DRAW);var Y=A.getAttribLocation(A.program,B);return A.vertexAttribPointer(Y,F,v,!1,0,0),A.enableVertexAttribArray(Y),!0}return(A,g)=>{const F=ge("dbtap");return Ge(),He("div",null,[Do,o("div",yo,[o("div",Oo,[Io,o("div",No,[de(o("canvas",{onDblclickOnce:ne,ref_key:"gl38",ref:i},null,544),[[F,ne]])])]),o("div",Yo,[Go,o("div",Ho,[de(o("canvas",{onDblclickOnce:J,ref_key:"gl39",ref:e},null,544),[[F,J]])])]),o("div",ko,[Vo,o("div",Wo,[de(o("canvas",{onDblclickOnce:ae,ref_key:"gl40",ref:c},null,544),[[F,ae]])])]),o("div",go,[$o,o("div",Xo,[de(o("canvas",{onDblclickOnce:W,ref_key:"gl41",ref:n},null,544),[[F,W]]),de(o("canvas",{onDblclickOnce:W,ref_key:"gl41Hud",ref:D,class:"gl41Hud"},null,544),[[F,W]])])]),o("div",jo,[zo,o("div",qo,[de(o("canvas",{onDblclickOnce:y,ref_key:"gl42",ref:l},null,544),[[F,y]])])]),o("div",Zo,[Ko,o("div",Jo,[de(o("canvas",{onDblclickOnce:ee,ref_key:"gl43",ref:X},null,544),[[F,ee]])])]),o("div",Qo,[ea,o("div",ta,[de(o("canvas",{onDblclickOnce:u,ref_key:"gl44",ref:O},null,544),[[F,u]])])]),o("div",ra,[oa,o("div",aa,[de(o("canvas",{onDblclickOnce:E,ref_key:"gl45",ref:G},null,544),[[F,E]])])]),o("div",ia,[na,o("div",sa,[de(o("canvas",{onDblclickOnce:h,ref_key:"gl46",ref:q},null,544),[[F,h]])])]),o("div",ca,[fa,o("div",_a,[de(o("canvas",{onDblclickOnce:I,ref_key:"gl47",ref:re},null,544),[[F,I]])])]),o("div",ua,[va,o("div",la,[de(o("canvas",{onDblclickOnce:R,ref_key:"gl48",ref:oe},null,544),[[F,R]])])]),o("div",da,[ma,o("div",Aa,[de(o("canvas",{onDblclickOnce:V,ref_key:"gl49",ref:M},null,544),[[F,V]])])]),o("div",Ra,[Ea,o("div",Fa,[de(o("canvas",{onDblclickOnce:m,ref_key:"gl50",ref:f},null,544),[[F,m]])])]),o("div",ba,[ha,o("div",Ta,[de(o("canvas",{onDblclickOnce:a,ref_key:"gl51",ref:C},null,544),[[F,a]])])]),o("div",xa,[Ba,o("div",Ca,[de(o("canvas",{onDblclickOnce:s,ref_key:"gl52",ref:x},null,544),[[F,s]])])])])])}}}),La=Ke(pa,[["__scopeId","data-v-5bb56367"]]),wa=o("header",null,"附录",-1),Ma={class:"example"},Pa={class:"item"},Sa=o("div",{class:"desc"}," 左手坐标系还是右手坐标系，右手z指向屏幕外，左手指向屏幕内，如果是左手，那么z值小的在z值大的前面，也就是右手坐标系看到的反面 ",-1),Ua={class:"canvas"},Da={class:"item"},ya=o("div",{class:"desc"}," webgl默认都使用右手坐标系,但隐藏面消除是使用的左手坐标系,所以通过投影矩阵将看的方向反正 ",-1),Oa={class:"canvas"},Ia={class:"item"},Na=o("div",{class:"desc"},"从文件中加载着色器代码",-1),Ya={class:"canvas"},Ga=Ye({__name:"attachment",setup(_){const i=ue(null),e=ue(null),c=ue(null);We(()=>{r(i).width=r(i).clientWidth,r(i).height=r(i).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight});function n(){var X="",O="",G=r(c),q=G.getContext("webgl");M(q,"/lab-static/images/colored-triangle.vert","v"),M(q,"/lab-static/images/colored-triangle.frag","f");function re(C){if(!Re(C,X,O)){console.log("Failed to intialize shaders.");return}var x=oe(C);if(x<0){console.log("Failed to set the vertex information");return}C.clearColor(0,0,0,1),C.clear(C.COLOR_BUFFER_BIT),C.drawArrays(C.TRIANGLES,0,x)}function oe(C){var x=new Float32Array([0,.5,1,0,0,-.5,-.5,0,1,0,.5,-.5,0,0,1]),s=3,a=C.createBuffer();if(!a)return console.log("Failed to create the buffer object"),!1;C.bindBuffer(C.ARRAY_BUFFER,a),C.bufferData(C.ARRAY_BUFFER,x,C.STATIC_DRAW);var m=x.BYTES_PER_ELEMENT,V=C.getAttribLocation(C.program,"a_Position");if(V<0)return console.log("Failed to get the storage location of a_Position"),-1;C.vertexAttribPointer(V,2,C.FLOAT,!1,m*5,0),C.enableVertexAttribArray(V);var R=C.getAttribLocation(C.program,"a_Color");return R<0?(console.log("Failed to get the storage location of a_Color"),-1):(C.vertexAttribPointer(R,3,C.FLOAT,!1,m*5,m*2),C.enableVertexAttribArray(R),s)}function M(C,x,s){var a=new XMLHttpRequest;a.onreadystatechange=function(){a.readyState===4&&a.status!==404&&f(C,a.responseText,s)},a.open("GET",x,!0),a.send()}function f(C,x,s){s=="v"?X=x:s=="f"&&(O=x),X&&O&&re(C)}}function D(){var X=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,O=`
          #ifdef GL_ES
          precision mediump float;
          #endif
          varying vec4 v_Color;
          void main() {
            gl_FragColor = v_Color;
          }
        `,G=r(e),q=G.getContext("webgl");Re(q,X,O);var re=f(q);q.enable(q.DEPTH_TEST),q.clearColor(0,0,0,1);var oe=q.getUniformLocation(q.program,"u_MvpMatrix"),M=new S;M.setOrtho(-1,1,-1,1,0,1),q.uniformMatrix4fv(oe,!1,M.elements),q.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT),q.drawArrays(q.TRIANGLES,0,re);function f(C){var x=new Float32Array([0,.5,-.1,0,0,1,-.5,-.5,-.1,0,0,1,.5,-.5,-.1,1,1,0,.5,.4,-.5,1,1,0,-.5,.4,-.5,1,0,0,0,-.6,-.5,1,0,0]),s=3,a=3,m=6,V=C.createBuffer();C.bindBuffer(C.ARRAY_BUFFER,V),C.bufferData(C.ARRAY_BUFFER,x,C.STATIC_DRAW);var R=x.BYTES_PER_ELEMENT,I=s+a,h=C.getAttribLocation(C.program,"a_Position");C.vertexAttribPointer(h,s,C.FLOAT,!1,R*I,0),C.enableVertexAttribArray(h);var E=C.getAttribLocation(C.program,"a_Color");return C.vertexAttribPointer(E,a,C.FLOAT,!1,R*I,R*s),C.enableVertexAttribArray(E),m}}function l(){var X=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main() {
          gl_Position = a_Position;
          v_Color = a_Color;
        }
      `,O=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,G=r(i),q=G.getContext("webgl");Re(q,X,O);var re=oe(q);q.clearColor(0,0,0,1),q.clear(q.COLOR_BUFFER_BIT),q.drawArrays(q.TRIANGLES,0,re);function oe(M){var f=new Float32Array([0,.5,-.1,0,0,1,-.5,-.5,-.1,0,0,1,.5,-.5,-.1,1,1,0,.5,.4,-.5,1,1,0,-.5,.4,-.5,1,0,0,0,-.6,-.5,1,0,0]),C=3,x=3,s=6,a=M.createBuffer();M.bindBuffer(M.ARRAY_BUFFER,a),M.bufferData(M.ARRAY_BUFFER,f,M.STATIC_DRAW);var m=f.BYTES_PER_ELEMENT,V=C+x,R=M.getAttribLocation(M.program,"a_Position");M.vertexAttribPointer(R,C,M.FLOAT,!1,m*V,0),M.enableVertexAttribArray(R);var I=M.getAttribLocation(M.program,"a_Color");return M.vertexAttribPointer(I,x,M.FLOAT,!1,m*V,m*C),M.enableVertexAttribArray(I),s}}return(X,O)=>{const G=ge("dbtap");return Ge(),He("div",null,[wa,o("div",Ma,[o("div",Pa,[Sa,o("div",Ua,[de(o("canvas",{onDblclickOnce:l,ref_key:"gl53",ref:i},null,544),[[G,l]])])]),o("div",Da,[ya,o("div",Oa,[de(o("canvas",{onDblclickOnce:D,ref_key:"gl54",ref:e},null,544),[[G,D]])])]),o("div",Ia,[Na,o("div",Ya,[de(o("canvas",{onDblclickOnce:n,ref_key:"gl55",ref:c},null,544),[[G,n]])])])])])}}}),Qe=_=>(qe("data-v-7a6145ff"),_=_(),Ze(),_),Ha={class:"WebGLPractice"},ka=Qe(()=>o("header",null,"第一章：WebGL概述",-1)),Va=Qe(()=>o("header",null,"第六章：OpenGL ES着色器语言（GLSL ES）",-1)),Wa=Ye({__name:"index",setup(_){const{canvasClickTip:i}=rt();return i(),(e,c)=>{const n=tt("a-empty");return Ge(),He("div",Ha,[o("div",null,[ka,ye(n)]),ye(bt),ye(zt),ye(or),ye(Br),o("div",null,[Va,ye(n)]),ye(ao),ye(xo),ye(Uo),ye(La),ye(Ga)])}}}),Xa=Ke(Wa,[["__scopeId","data-v-7a6145ff"]]);export{Xa as default};
