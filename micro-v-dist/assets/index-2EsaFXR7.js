import{d as Ie,r as _e,G as Ve,A as r,p as We,o as Ne,e as Ye,f as a,w as de,Q as ke,_ as ze,s as Ze,g as De,m as Ke}from"./index-Cvl347pw.js";import{u as Je}from"./useMessageTip-B9kS1uPb.js";const Qe={class:"example"},et={class:"item"},tt={class:"canvas"},rt={class:"item"},ot={class:"canvas"},at={class:"item"},it={class:"canvas"},nt={class:"item"},st={class:"canvas"},ct={class:"item"},ft={class:"canvas"},ut=Ie({__name:"chapter-02",setup(v){const n=_e(null),e=_e(null),f=_e(null),c=_e(null),O=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight});let l=null;function $(){var M=r(n);l=M.getContext("webgl"),l&&(l.clearColor(.5,.2,.1,1),l.clear(l.COLOR_BUFFER_BIT))}function D(){var M=`void main() {
          gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
          gl_PointSize = 10.0;
        }`,s=`void main() {
          gl_FragColor = vec4(1.0, 0.5, 0.0, 1.0);
        }`,C=r(e);l=C.getContext("webgl"),l&&Z(l,M,s)&&(l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.POINTS,0,1))}function H(){var M=`
      attribute vec4 a_Position;
      void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
      }
      `,s=`
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `,C=r(f);if(l=C.getContext("webgl"),!!l&&Z(l,M,s)){var h=l.getAttribLocation(l.program,"a_Position");h<0||(l.vertexAttrib3f(h,.5,.2,.1),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.POINTS,0,1))}}function q(){var M=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,s=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,C=r(c);if(l=C.getContext("webgl"),!l||!Z(l,M,s))return;var h=l.getAttribLocation(l.program,"a_Position");if(h<0)return;const o=[];C.addEventListener("mousedown",i=>{let m=i.layerX,W=i.layerY;const E=C.width,N=C.height;m=(m-E/2)/(E/2),W=-((W-N/2)/(N/2)),o.push([m,W]),l.clear(l.COLOR_BUFFER_BIT);for(const A of o){const[F,u]=A;l.vertexAttrib2f(h,F,u),l.drawArrays(l.POINTS,0,1)}}),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)}function oe(){var M=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,s=`
        precision mediump float;
        uniform vec4 u_FragColor;
        void main() {
          gl_FragColor = u_FragColor;
        }
      `,C=r(O);if(l=C.getContext("webgl"),!l||!Z(l,M,s))return;var h=l.getAttribLocation(l.program,"a_Position");if(h<0)return;var o=l.getUniformLocation(l.program,"u_FragColor");if(!o)return;const i=[];C.addEventListener("mousedown",m=>{let W=m.layerX,E=m.layerY;const N=C.width,A=C.height;W=(W-N/2)/(N/2),E=-((E-A/2)/(A/2)),i.push({x:W,y:E,r:Math.random(),g:Math.random(),b:Math.random(),a:Math.random()}),l.clear(l.COLOR_BUFFER_BIT);for(const F of i){const{x:u,y:te,r:I,g,b:ae,a:Q}=F;l.vertexAttrib2f(h,u,te),l.uniform4f(o,I,g,ae,Q),l.drawArrays(l.POINTS,0,1)}}),l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)}function Z(M,s,C){const h=M.createShader(M.VERTEX_SHADER),o=M.createShader(M.FRAGMENT_SHADER);M.shaderSource(h,s),M.shaderSource(o,C),M.compileShader(h),M.compileShader(o);const i=M.getShaderParameter(h,M.COMPILE_STATUS),m=M.getShaderParameter(o,M.COMPILE_STATUS);if(!i)return M.getShaderInfoLog(h),M.deleteShader(h);if(!m){const N=M.getShaderInfoLog(o);return console.error(N),M.deleteShader(o)}const W=M.createProgram();if(M.attachShader(W,h),M.attachShader(W,o),M.linkProgram(W),!M.getProgramParameter(W,M.LINK_STATUS)){const N=M.getProgramInfoLog();console.error(N),M.deleteShader(h),M.deleteShader(o),M.deleteProgram(W);return}return M.useProgram(W),M.program=W,!0}return(M,s)=>{const C=We("dbtap");return Ne(),Ye("div",null,[s[5]||(s[5]=a("header",null,"第二章：入门",-1)),a("div",Qe,[a("div",et,[s[0]||(s[0]=a("div",{class:"desc"},"webgl设置背景色",-1)),a("div",tt,[de(a("canvas",{onDblclickOnce:$,ref_key:"gl01",ref:n},null,544),[[C,$]])])]),a("div",rt,[s[1]||(s[1]=a("div",{class:"desc"},"webgl绘制一个点(位置等信息硬编码在glsl中)",-1)),a("div",ot,[de(a("canvas",{onDblclickOnce:D,ref_key:"gl02",ref:e},null,544),[[C,D]])])]),a("div",at,[s[2]||(s[2]=a("div",{class:"desc"},"webgl绘制一个点(位置等信息从js传入glsl)",-1)),a("div",it,[de(a("canvas",{onDblclickOnce:H,ref_key:"gl03",ref:f},null,544),[[C,H]])])]),a("div",nt,[s[3]||(s[3]=a("div",{class:"desc"},"webgl数据传输(顶点着色器),在鼠标点击位置绘制点",-1)),a("div",st,[de(a("canvas",{onDblclickOnce:q,ref_key:"gl04",ref:c},null,544),[[C,q]])])]),a("div",ct,[s[4]||(s[4]=a("div",{class:"desc"},"webgl数据传输(片元着色器),在鼠标点击位置绘制点,点的颜色由js传入",-1)),a("div",ft,[de(a("canvas",{onDblclickOnce:oe,ref_key:"gl05",ref:O},null,544),[[C,oe]])])])])])}}});function Re(v,n,e){var f=je(v,n,e);return f?(v.useProgram(f),v.program=f,!0):(console.log("Failed to create program"),!1)}function je(v,n,e){var f=qe(v,v.VERTEX_SHADER,n),c=qe(v,v.FRAGMENT_SHADER,e);if(!f||!c)return null;var O=v.createProgram();if(!O)return null;v.attachShader(O,f),v.attachShader(O,c),v.linkProgram(O);var l=v.getProgramParameter(O,v.LINK_STATUS);if(!l){var $=v.getProgramInfoLog(O);return console.log("Failed to link program: "+$),v.deleteProgram(O),v.deleteShader(c),v.deleteShader(f),null}return O}function qe(v,n,e){var f=v.createShader(n);if(f==null)return console.log("unable to create shader"),null;v.shaderSource(f,e),v.compileShader(f);var c=v.getShaderParameter(f,v.COMPILE_STATUS);if(!c){var O=v.getShaderInfoLog(f);return console.log("Failed to compile shader: "+O),v.deleteShader(f),null}return f}function _t(v,n){var e=dt.setupWebGL(v);return e||null}const S=function(v){var n,e,f;if(v&&typeof v=="object"&&v.hasOwnProperty("elements")){for(e=v.elements,f=new Float32Array(16),n=0;n<16;++n)f[n]=e[n];this.elements=f}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};S.prototype.setIdentity=function(){var v=this.elements;return v[0]=1,v[4]=0,v[8]=0,v[12]=0,v[1]=0,v[5]=1,v[9]=0,v[13]=0,v[2]=0,v[6]=0,v[10]=1,v[14]=0,v[3]=0,v[7]=0,v[11]=0,v[15]=1,this};S.prototype.set=function(v){var n,e,f;if(e=v.elements,f=this.elements,e!==f){for(n=0;n<16;++n)f[n]=e[n];return this}};S.prototype.concat=function(v){var n,e,f,c,O,l,$,D;if(e=this.elements,f=this.elements,c=v.elements,e===c)for(c=new Float32Array(16),n=0;n<16;++n)c[n]=e[n];for(n=0;n<4;n++)O=f[n],l=f[n+4],$=f[n+8],D=f[n+12],e[n]=O*c[0]+l*c[1]+$*c[2]+D*c[3],e[n+4]=O*c[4]+l*c[5]+$*c[6]+D*c[7],e[n+8]=O*c[8]+l*c[9]+$*c[10]+D*c[11],e[n+12]=O*c[12]+l*c[13]+$*c[14]+D*c[15];return this};S.prototype.multiply=S.prototype.concat;S.prototype.multiplyVector3=function(v){var n=this.elements,e=v.elements,f=new Xe,c=f.elements;return c[0]=e[0]*n[0]+e[1]*n[4]+e[2]*n[8]+n[12],c[1]=e[0]*n[1]+e[1]*n[5]+e[2]*n[9]+n[13],c[2]=e[0]*n[2]+e[1]*n[6]+e[2]*n[10]+n[14],f};S.prototype.multiplyVector4=function(v){var n=this.elements,e=v.elements,f=new vt,c=f.elements;return c[0]=e[0]*n[0]+e[1]*n[4]+e[2]*n[8]+e[3]*n[12],c[1]=e[0]*n[1]+e[1]*n[5]+e[2]*n[9]+e[3]*n[13],c[2]=e[0]*n[2]+e[1]*n[6]+e[2]*n[10]+e[3]*n[14],c[3]=e[0]*n[3]+e[1]*n[7]+e[2]*n[11]+e[3]*n[15],f};S.prototype.transpose=function(){var v,n;return v=this.elements,n=v[1],v[1]=v[4],v[4]=n,n=v[2],v[2]=v[8],v[8]=n,n=v[3],v[3]=v[12],v[12]=n,n=v[6],v[6]=v[9],v[9]=n,n=v[7],v[7]=v[13],v[13]=n,n=v[11],v[11]=v[14],v[14]=n,this};S.prototype.setInverseOf=function(v){var n,e,f,c,O;if(e=v.elements,f=this.elements,c=new Float32Array(16),c[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],c[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],c[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],c[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],c[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],c[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],c[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],c[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],c[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],c[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],c[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],c[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],c[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],c[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],c[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],c[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5],O=e[0]*c[0]+e[1]*c[4]+e[2]*c[8]+e[3]*c[12],O===0)return this;for(O=1/O,n=0;n<16;n++)f[n]=c[n]*O;return this};S.prototype.invert=function(){return this.setInverseOf(this)};S.prototype.setOrtho=function(v,n,e,f,c,O){var l,$,D,H;if(v===n||e===f||c===O)throw"null frustum";return $=1/(n-v),D=1/(f-e),H=1/(O-c),l=this.elements,l[0]=2*$,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*D,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2*H,l[11]=0,l[12]=-(n+v)*$,l[13]=-(f+e)*D,l[14]=-(O+c)*H,l[15]=1,this};S.prototype.ortho=function(v,n,e,f,c,O){return this.concat(new S().setOrtho(v,n,e,f,c,O))};S.prototype.setFrustum=function(v,n,e,f,c,O){var l,$,D,H;if(v===n||f===e||c===O)throw"null frustum";if(c<=0)throw"near <= 0";if(O<=0)throw"far <= 0";return $=1/(n-v),D=1/(f-e),H=1/(O-c),l=this.elements,l[0]=2*c*$,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*c*D,l[6]=0,l[7]=0,l[8]=(n+v)*$,l[9]=(f+e)*D,l[10]=-(O+c)*H,l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*c*O*H,l[15]=0,this};S.prototype.frustum=function(v,n,e,f,c,O){return this.concat(new S().setFrustum(v,n,e,f,c,O))};S.prototype.setPerspective=function(v,n,e,f){var c,O,l,$;if(e===f||n===0)throw"null frustum";if(e<=0)throw"near <= 0";if(f<=0)throw"far <= 0";if(v=Math.PI*v/180/2,l=Math.sin(v),l===0)throw"null frustum";return O=1/(f-e),$=Math.cos(v)/l,c=this.elements,c[0]=$/n,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=$,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-(f+e)*O,c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*e*f*O,c[15]=0,this};S.prototype.perspective=function(v,n,e,f){return this.concat(new S().setPerspective(v,n,e,f))};S.prototype.setScale=function(v,n,e){var f=this.elements;return f[0]=v,f[4]=0,f[8]=0,f[12]=0,f[1]=0,f[5]=n,f[9]=0,f[13]=0,f[2]=0,f[6]=0,f[10]=e,f[14]=0,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this};S.prototype.scale=function(v,n,e){var f=this.elements;return f[0]*=v,f[4]*=n,f[8]*=e,f[1]*=v,f[5]*=n,f[9]*=e,f[2]*=v,f[6]*=n,f[10]*=e,f[3]*=v,f[7]*=n,f[11]*=e,this};S.prototype.setTranslate=function(v,n,e){var f=this.elements;return f[0]=1,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=1,f[9]=0,f[13]=n,f[2]=0,f[6]=0,f[10]=1,f[14]=e,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this};S.prototype.translate=function(v,n,e){var f=this.elements;return f[12]+=f[0]*v+f[4]*n+f[8]*e,f[13]+=f[1]*v+f[5]*n+f[9]*e,f[14]+=f[2]*v+f[6]*n+f[10]*e,f[15]+=f[3]*v+f[7]*n+f[11]*e,this};S.prototype.setRotate=function(v,n,e,f){var c,O,l,$,D,H,q,oe,Z,M,s,C;return v=Math.PI*v/180,c=this.elements,O=Math.sin(v),l=Math.cos(v),n!==0&&e===0&&f===0?(n<0&&(O=-O),c[0]=1,c[4]=0,c[8]=0,c[12]=0,c[1]=0,c[5]=l,c[9]=-O,c[13]=0,c[2]=0,c[6]=O,c[10]=l,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1):n===0&&e!==0&&f===0?(e<0&&(O=-O),c[0]=l,c[4]=0,c[8]=O,c[12]=0,c[1]=0,c[5]=1,c[9]=0,c[13]=0,c[2]=-O,c[6]=0,c[10]=l,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1):n===0&&e===0&&f!==0?(f<0&&(O=-O),c[0]=l,c[4]=-O,c[8]=0,c[12]=0,c[1]=O,c[5]=l,c[9]=0,c[13]=0,c[2]=0,c[6]=0,c[10]=1,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1):($=Math.sqrt(n*n+e*e+f*f),$!==1&&(D=1/$,n*=D,e*=D,f*=D),H=1-l,q=n*e,oe=e*f,Z=f*n,M=n*O,s=e*O,C=f*O,c[0]=n*n*H+l,c[1]=q*H+C,c[2]=Z*H-s,c[3]=0,c[4]=q*H-C,c[5]=e*e*H+l,c[6]=oe*H+M,c[7]=0,c[8]=Z*H+s,c[9]=oe*H-M,c[10]=f*f*H+l,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1),this};S.prototype.rotate=function(v,n,e,f){return this.concat(new S().setRotate(v,n,e,f))};S.prototype.setLookAt=function(v,n,e,f,c,O,l,$,D){var H,q,oe,Z,M,s,C,h,o,i,m,W;return q=f-v,oe=c-n,Z=O-e,M=1/Math.sqrt(q*q+oe*oe+Z*Z),q*=M,oe*=M,Z*=M,s=oe*D-Z*$,C=Z*l-q*D,h=q*$-oe*l,o=1/Math.sqrt(s*s+C*C+h*h),s*=o,C*=o,h*=o,i=C*Z-h*oe,m=h*q-s*Z,W=s*oe-C*q,H=this.elements,H[0]=s,H[1]=i,H[2]=-q,H[3]=0,H[4]=C,H[5]=m,H[6]=-oe,H[7]=0,H[8]=h,H[9]=W,H[10]=-Z,H[11]=0,H[12]=0,H[13]=0,H[14]=0,H[15]=1,this.translate(-v,-n,-e)};S.prototype.lookAt=function(v,n,e,f,c,O,l,$,D){return this.concat(new S().setLookAt(v,n,e,f,c,O,l,$,D))};S.prototype.dropShadow=function(v,n){var e=new S,f=e.elements,c=v[0]*n[0]+v[1]*n[1]+v[2]*n[2]+v[3]*n[3];return f[0]=c-n[0]*v[0],f[1]=-n[1]*v[0],f[2]=-n[2]*v[0],f[3]=-n[3]*v[0],f[4]=-n[0]*v[1],f[5]=c-n[1]*v[1],f[6]=-n[2]*v[1],f[7]=-n[3]*v[1],f[8]=-n[0]*v[2],f[9]=-n[1]*v[2],f[10]=c-n[2]*v[2],f[11]=-n[3]*v[2],f[12]=-n[0]*v[3],f[13]=-n[1]*v[3],f[14]=-n[2]*v[3],f[15]=c-n[3]*v[3],this.concat(e)};S.prototype.dropShadowDirectionally=function(v,n,e,f,c,O,l,$,D){var H=f*v+c*n+O*e;return this.dropShadow([v,n,e,-H],[l,$,D,0])};const Xe=function(v){var n=new Float32Array(3);v&&typeof v=="object"&&(n[0]=v[0],n[1]=v[1],n[2]=v[2]),this.elements=n};Xe.prototype.normalize=function(){var v=this.elements,n=v[0],e=v[1],f=v[2],c=Math.sqrt(n*n+e*e+f*f);if(c){if(c==1)return this}else return v[0]=0,v[1]=0,v[2]=0,this;return c=1/c,v[0]=n*c,v[1]=e*c,v[2]=f*c,this};var vt=function(v){var n=new Float32Array(4);v&&typeof v=="object"&&(n[0]=v[0],n[1]=v[1],n[2]=v[2],n[3]=v[3]),this.elements=n};function lt(){var v="浏览器不支持webgl",n="电脑不支持webgl",e=function(c,O,l){function $(H){var q=document.getElementsByTagName("body")[0];if(q){var oe=window.WebGLRenderingContext?n:v;H&&(oe+=H),q.innerHTML=oe}}l=l||$,c.addEventListener&&c.addEventListener("webglcontextcreationerror",function(H){l(H.statusMessage)},!1);var D=f(c,O);return D||(window.WebGLRenderingContext,l("")),D},f=function(c,O){for(var l=["webgl","experimental-webgl","webkit-3d","moz-webgl"],$=null,D=0;D<l.length;++D){try{$=c.getContext(l[D],O)}catch{}if($)break}return $};return{create3DContext:f,setupWebGL:e}}const dt=lt();window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(v,n){window.setTimeout(v,1e3/60)}}());window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout);const mt={class:"example"},At={class:"item"},Rt={class:"canvas"},Et={class:"item"},Ft={class:"canvas"},bt={class:"item"},Tt={class:"canvas"},xt={class:"item"},ht={class:"canvas"},Bt={class:"item"},Ct={class:"canvas"},pt={class:"item"},Lt={class:"canvas"},wt={class:"item"},Mt={class:"canvas"},Pt=Ie({__name:"chapter-03",setup(v){const n=_e(null),e=_e(null),f=_e(null),c=_e(null),O=_e(null),l=_e(null),$=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight,r($).width=r($).clientWidth,r($).height=r($).clientHeight});function D(){const o=r($).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform mat4 u_ScaleMatrix;
        void main() {
          gl_Position = u_ScaleMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const W=o.getAttribLocation(o.program,"a_Position"),E=o.getUniformLocation(o.program,"u_ScaleMatrix"),N=new Float32Array([-.1,-.2,0,.2,.1,-.2]),A=new Float32Array([2,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);o.uniformMatrix4fv(E,!1,A);const F=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,F),o.bufferData(o.ARRAY_BUFFER,N,o.STATIC_DRAW),o.vertexAttribPointer(W,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(W),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function H(){const o=r(l).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform mat4 u_TranslateMatrix;
        void main() {
          gl_Position = u_TranslateMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const W=o.getAttribLocation(o.program,"a_Position"),E=o.getUniformLocation(o.program,"u_TranslateMatrix"),N=new Float32Array([-.1,-.2,0,.2,.1,-.2]),A=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,.5,.5,.5,1]);o.uniformMatrix4fv(E,!1,A);const F=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,F),o.bufferData(o.ARRAY_BUFFER,N,o.STATIC_DRAW),o.vertexAttribPointer(W,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(W),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function q(){const o=r(O).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform mat4 u_RotateMatrix;
        void main() {
          gl_Position = u_RotateMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const W=o.getAttribLocation(o.program,"a_Position"),E=o.getUniformLocation(o.program,"u_RotateMatrix"),N=new Float32Array([-.1,-.2,0,.2,.1,-.2]),A=30*Math.PI/180,F=new Float32Array([Math.cos(A),Math.sin(A),0,0,-Math.sin(A),Math.cos(A),0,0,0,0,1,0,0,0,0,1]);o.uniformMatrix4fv(E,!1,F);const u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,N,o.STATIC_DRAW),o.vertexAttribPointer(W,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(W),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function oe(){const o=r(c).getContext("webgl");if(!Re(o,`
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
      `))return;const W=o.getAttribLocation(o.program,"a_Position"),E=o.getUniformLocation(o.program,"u_SinR"),N=o.getUniformLocation(o.program,"u_CosR"),A=new Float32Array([-.1,-.2,0,.2,.1,-.2]),F=30*Math.PI/180;o.uniform1f(E,Math.sin(F)),o.uniform1f(N,Math.cos(F));const u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,A,o.STATIC_DRAW),o.vertexAttribPointer(W,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(W),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function Z(){const o=r(f).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform vec4 u_Transform;
        void main() {
          gl_Position = a_Position + u_Transform;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const W=o.getAttribLocation(o.program,"a_Position"),E=o.getUniformLocation(o.program,"u_Transform"),N=new Float32Array([-.1,-.2,0,.2,.1,-.2]);o.uniform4f(E,0,-.2,0,0);const A=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,A),o.bufferData(o.ARRAY_BUFFER,N,o.STATIC_DRAW),o.vertexAttribPointer(W,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(W),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function M(){var h=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,o=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,i=r(e),m=i.getContext("webgl");if(m&&Re(m,h,o)){var W=C(m);W<0||(m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.LINE_LOOP,0,W))}}function s(){var h=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,o=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,i=r(n),m=i.getContext("webgl");if(m&&Re(m,h,o)){var W=C(m);W<0||(m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.POINTS,0,W))}}function C(h){const o=new Float32Array([-.1,0,0,.2,.1,0]),i=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,i),h.bufferData(h.ARRAY_BUFFER,o,h.STATIC_DRAW);const m=h.getAttribLocation(h.program,"a_Position");return h.vertexAttribPointer(m,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(m),o.length/2}return(h,o)=>{const i=We("dbtap");return Ne(),Ye("div",null,[o[7]||(o[7]=a("header",null,"第三章：绘制和变换",-1)),a("div",mt,[a("div",At,[o[0]||(o[0]=a("div",{class:"desc"},"一次绘制多个点，使用缓冲区对象",-1)),a("div",Rt,[de(a("canvas",{onDblclickOnce:s,ref_key:"gl06",ref:n},null,544),[[i,s]])])]),a("div",Et,[o[1]||(o[1]=a("div",{class:"desc"},"绘制图形，使用缓冲区对象",-1)),a("div",Ft,[de(a("canvas",{onDblclickOnce:M,ref_key:"gl07",ref:e},null,544),[[i,M]])])]),a("div",bt,[o[2]||(o[2]=a("div",{class:"desc"},"平移",-1)),a("div",Tt,[de(a("canvas",{onDblclickOnce:Z,ref_key:"gl08",ref:f},null,544),[[i,Z]])])]),a("div",xt,[o[3]||(o[3]=a("div",{class:"desc"},"旋转",-1)),a("div",ht,[de(a("canvas",{onDblclickOnce:oe,ref_key:"gl09",ref:c},null,544),[[i,oe]])])]),a("div",Bt,[o[4]||(o[4]=a("div",{class:"desc"},"矩阵旋转",-1)),a("div",Ct,[de(a("canvas",{onDblclickOnce:q,ref_key:"gl10",ref:O},null,544),[[i,q]])])]),a("div",pt,[o[5]||(o[5]=a("div",{class:"desc"},"矩阵平移",-1)),a("div",Lt,[de(a("canvas",{onDblclickOnce:H,ref_key:"gl11",ref:l},null,544),[[i,H]])])]),a("div",wt,[o[6]||(o[6]=a("div",{class:"desc"},"矩阵缩放",-1)),a("div",Mt,[de(a("canvas",{onDblclickOnce:D,ref_key:"gl12",ref:$},null,544),[[i,D]])])])])])}}}),Ut={class:"example"},St={class:"item"},Dt={class:"canvas"},yt={class:"item"},Ot={class:"canvas"},It=Ie({__name:"chapter-04",setup(v){const n=_e(null),e=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight});function f(){var l=`
        attribute vec4 a_Position;
        uniform mat4 u_ModelMatrix;
        void main() {
          gl_Position = u_ModelMatrix * a_Position;
        }
      `,$=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,D=r(e),H=D.getContext("webgl");if(!H||!Re(H,l,$))return;var q=O(H);if(q<0)return;H.clearColor(0,0,0,1);var oe=H.getUniformLocation(H.program,"u_ModelMatrix");if(!oe)return;var Z=45,M=0,s=new S,C=function(){M=i(M),h(H,q,M,s,oe),requestAnimationFrame(C)};C();function h(m,W,E,N,A){N.setRotate(E,0,0,1),N.translate(.35,0,0),m.uniformMatrix4fv(A,!1,N.elements),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLES,0,W)}var o=Date.now();function i(m){var W=Date.now();o||(o=Date.now());var E=W-o;o=W;var N=m+Z*E/1e3;return N%=360}}function c(){var l=`
        attribute vec4 a_Position;
        uniform mat4 u_xformMatrix;
        void main() {
          gl_Position = u_xformMatrix * a_Position;
        }
      `,$=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,D=r(n),H=D.getContext("webgl");if(!H||!Re(H,l,$))return;var q=M(H);if(q<0)return;var oe=new S;oe.setScale(2,2,1);var Z=H.getUniformLocation(H.program,"u_xformMatrix");if(!Z)return;H.uniformMatrix4fv(Z,!1,oe.elements),H.clearColor(0,0,0,1),H.clear(H.COLOR_BUFFER_BIT),H.drawArrays(H.TRIANGLES,0,q);function M(s){const C=new Float32Array([-.1,0,0,.2,.1,0]),h=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,h),s.bufferData(s.ARRAY_BUFFER,C,s.STATIC_DRAW);const o=s.getAttribLocation(s.program,"a_Position");return s.vertexAttribPointer(o,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(o),C.length/2}}function O(l){const $=new Float32Array([-.1,0,0,.2,.1,0]),D=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,D),l.bufferData(l.ARRAY_BUFFER,$,l.STATIC_DRAW);const H=l.getAttribLocation(l.program,"a_Position");return l.vertexAttribPointer(H,2,l.FLOAT,!1,0,0),l.enableVertexAttribArray(H),$.length/2}return(l,$)=>{const D=We("dbtap");return Ne(),Ye("div",null,[$[2]||($[2]=a("header",null,"第四章：高级变换和动画",-1)),a("div",Ut,[a("div",St,[$[0]||($[0]=a("div",{class:"desc"},"使用矩阵库,矩阵旋转",-1)),a("div",Dt,[de(a("canvas",{onDblclickOnce:c,ref_key:"gl13",ref:n},null,544),[[D,c]])])]),a("div",yt,[$[1]||($[1]=a("div",{class:"desc"},"旋转+移动的动画，requestAnimation",-1)),a("div",Ot,[de(a("canvas",{onDblclickOnce:f,ref_key:"gl14",ref:e},null,544),[[D,f]])])])])])}}}),Nt={class:"example"},Yt={class:"item"},Gt={class:"canvas"},Ht={class:"item"},kt={class:"canvas"},Vt={class:"item"},Wt={class:"canvas"},gt={class:"item"},$t={class:"canvas"},Xt={class:"item"},jt={class:"canvas"},zt={class:"item"},qt={class:"canvas"},Zt=Ie({__name:"chapter-05",setup(v){const n=_e(null),e=_e(null),f=_e(null),c=_e(null),O=_e(null),l=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight});function $(){var M=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
          gl_Position = a_Position;
          v_TexCoord = a_TexCoord;
        }
      `,s=`
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
      `,C=r(l),h=C.getContext("webgl");if(!h||!Re(h,M,s))return;var o=i(h);if(o<0||(h.clearColor(0,0,0,1),!m(h,o)))return;function i(A){var F=new Float32Array([-.5,.5,0,1,-.5,-.5,0,0,.5,.5,1,1,.5,-.5,1,0]),u=4,te=A.createBuffer();if(!te)return-1;A.bindBuffer(A.ARRAY_BUFFER,te),A.bufferData(A.ARRAY_BUFFER,F,A.STATIC_DRAW);var I=F.BYTES_PER_ELEMENT,g=A.getAttribLocation(A.program,"a_Position");if(g<0)return-1;A.vertexAttribPointer(g,2,A.FLOAT,!1,I*4,0),A.enableVertexAttribArray(g);var ae=A.getAttribLocation(A.program,"a_TexCoord");return ae<0?-1:(A.vertexAttribPointer(ae,2,A.FLOAT,!1,I*4,I*2),A.enableVertexAttribArray(ae),u)}function m(A,F){var u=A.createTexture(),te=A.createTexture();if(!u||!te)return!1;var I=A.getUniformLocation(A.program,"u_Sampler0"),g=A.getUniformLocation(A.program,"u_Sampler1");if(!I||!g)return!1;var ae=new Image,Q=new Image;return!ae||!Q?!1:(ae.onload=function(){N(A,F,u,I,ae,0)},Q.onload=function(){N(A,F,te,g,Q,1)},ae.src=ke+"/micro-v-static/lab-static/images/webgl-practice/sy.jpg",Q.src=ke+"/micro-v-static/lab-static/images/webgl-practice/wx.jpg",!0)}var W=!1,E=!1;function N(A,F,u,te,I,g){A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,1),g==0?(A.activeTexture(A.TEXTURE0),W=!0):(A.activeTexture(A.TEXTURE1),E=!0),A.bindTexture(A.TEXTURE_2D,u),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.LINEAR),A.texImage2D(A.TEXTURE_2D,0,A.RGBA,A.RGBA,A.UNSIGNED_BYTE,I),A.uniform1i(te,g),A.clear(A.COLOR_BUFFER_BIT),W&&E&&A.drawArrays(A.TRIANGLE_STRIP,0,F)}}function D(){const M=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
          gl_Position = a_Position;
          v_TexCoord = a_TexCoord;
        }
      `,s=`
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
      `,h=r(O).getContext("webgl");if(!h||!W(h,M,s))return;const o=m(h);if(o<0)return;h.clearColor(1,1,1,1),i(h,o);function i(E,N){const A=new Image;A.src=ke+"/micro-v-static/lab-static/images/webgl-practice/wx.jpg",A.onload=function(){E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,1),E.activeTexture(E.TEXTURE0);const F=E.createTexture();E.bindTexture(E.TEXTURE_2D,F),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MIN_FILTER,E.LINEAR),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_MAG_FILTER,E.NEAREST),E.texImage2D(E.TEXTURE_2D,0,E.RGB,E.RGB,E.UNSIGNED_BYTE,A),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_T,E.MIRRORED_REPEAT),E.texParameteri(E.TEXTURE_2D,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE);const u=E.getUniformLocation(E.program,"u_Sampler");E.uniform1i(u,0),E.clear(E.COLOR_BUFFER_BIT),E.drawArrays(E.TRIANGLE_STRIP,0,N)}}function m(E){const N=new Float32Array([-.5,.5,-.1,1.1,.5,.5,1.1,1.1,-.5,-.5,-.1,-.1,.5,-.5,1.1,-.1]),A=E.createBuffer();E.bindBuffer(E.ARRAY_BUFFER,A),E.bufferData(E.ARRAY_BUFFER,N,E.STATIC_DRAW);const F=E.getAttribLocation(E.program,"a_Position"),u=N.BYTES_PER_ELEMENT;E.vertexAttribPointer(F,2,E.FLOAT,!1,u*4,0),E.enableVertexAttribArray(F);const te=E.createBuffer();E.bindBuffer(E.ARRAY_BUFFER,te),E.bufferData(E.ARRAY_BUFFER,N,E.STATIC_DRAW);const I=E.getAttribLocation(E.program,"a_TexCoord");return E.vertexAttribPointer(I,2,E.FLOAT,!1,u*4,u*2),E.enableVertexAttribArray(I),N.length/4}function W(E,N,A){const F=E.createShader(E.VERTEX_SHADER),u=E.createShader(E.FRAGMENT_SHADER);E.shaderSource(F,N),E.shaderSource(u,A),E.compileShader(F),E.compileShader(u);const te=E.getShaderParameter(F,E.COMPILE_STATUS),I=E.getShaderParameter(u,E.COMPILE_STATUS);if(!te){const Q=E.getShaderInfoLog(F);console.error(Q),E.deleteShader(F);return}if(!I){const Q=E.getShaderInfoLog(u);console.error(Q),E.deleteShader(u);return}const g=E.createProgram();if(E.attachShader(g,F),E.attachShader(g,u),E.linkProgram(g),!E.getProgramParameter(g,E.LINK_STATUS)){const Q=E.getProgramInfoLog(g);console.error(Q),E.deleteShader(F),E.deleteShader(u),E.deleteProgram(g);return}return E.program=g,E.useProgram(g),!0}}function H(){var M=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,s=`
        precision mediump float;
        uniform float u_Width;
        uniform float u_Height;
        void main() {
          gl_FragColor = vec4(gl_FragCoord.x/u_Width, 0.0, gl_FragCoord.y/u_Height, 1.0);
        }
      `,C=r(c),h=C.getContext("webgl");if(!h||!Re(h,M,s))return;const o=i(h);if(o<0)return;h.clearColor(0,0,0,1),h.clear(h.COLOR_BUFFER_BIT),h.drawArrays(h.TRIANGLES,0,o);function i(m){var W=new Float32Array([1,-1,-1,-1,1,1]),E=3,N=m.createBuffer();if(!N)return-1;m.bindBuffer(m.ARRAY_BUFFER,N),m.bufferData(m.ARRAY_BUFFER,W,m.STATIC_DRAW);var A=m.getAttribLocation(m.program,"a_Position");if(A<0)return-1;m.vertexAttribPointer(A,2,m.FLOAT,!1,0,0);var F=m.getUniformLocation(m.program,"u_Width");if(!F)return-1;var u=m.getUniformLocation(m.program,"u_Height");return u?(m.uniform1f(F,m.drawingBufferWidth),m.uniform1f(u,m.drawingBufferHeight),m.enableVertexAttribArray(A),m.bindBuffer(m.ARRAY_BUFFER,null),E):-1}}function q(){var M=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main() {
          gl_Position = a_Position;
          v_Color = a_Color;
        }
      `,s=`
        precision mediump float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,C=r(f),h=C.getContext("webgl");if(!h||!Re(h,M,s))return;var o=i(h);if(o<0)return;h.clearColor(0,0,0,1),h.clear(h.COLOR_BUFFER_BIT),h.drawArrays(h.TRIANGLES,0,o);function i(m){const W=new Float32Array([-.2,0,.2,.3,.4,.2,0,.1,0,.6,0,.4,0,.5,.2]),E=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,E),m.bufferData(m.ARRAY_BUFFER,W,m.STATIC_DRAW);const N=m.getAttribLocation(m.program,"a_Position"),A=W.BYTES_PER_ELEMENT;m.vertexAttribPointer(N,2,m.FLOAT,!1,A*5,0),m.enableVertexAttribArray(N);const F=m.getAttribLocation(m.program,"a_Color");return m.vertexAttribPointer(F,3,m.FLOAT,!1,A*5,A*2),m.enableVertexAttribArray(F),W.length/5}}function oe(){var M=`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = a_PointSize;
        }
      `,s=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,C=r(e),h=C.getContext("webgl");if(!h||!Re(h,M,s))return;var o=i(h);if(o<0)return;h.clearColor(0,0,0,1),h.clear(h.COLOR_BUFFER_BIT),h.drawArrays(h.POINTS,0,o);function i(m){const W=new Float32Array([.1,.1,5,-.1,.1,10]),E=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,E),m.bufferData(m.ARRAY_BUFFER,W,m.STATIC_DRAW);const N=W.BYTES_PER_ELEMENT,A=m.getAttribLocation(m.program,"a_Position"),F=m.getAttribLocation(m.program,"a_PointSize");return m.vertexAttribPointer(A,2,m.FLOAT,!1,N*3,0),m.vertexAttribPointer(F,1,m.FLOAT,!1,N*3,N*2),m.enableVertexAttribArray(A),m.enableVertexAttribArray(F),W.length/3}}function Z(){var M=`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = a_PointSize;
        }
      `,s=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,C=r(n),h=C.getContext("webgl");if(!h||!Re(h,M,s))return;var o=i(h);if(o<0)return;h.clearColor(0,0,0,1),h.clear(h.COLOR_BUFFER_BIT),h.drawArrays(h.POINTS,0,o);function i(m){const W=new Float32Array([.1,.1,-.1,.1]),E=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,E),m.bufferData(m.ARRAY_BUFFER,W,m.STATIC_DRAW);const N=m.getAttribLocation(m.program,"a_Position");m.vertexAttribPointer(N,2,m.FLOAT,!1,0,0),m.enableVertexAttribArray(N);const A=new Float32Array([5,10]),F=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,F),m.bufferData(m.ARRAY_BUFFER,A,m.STATIC_DRAW);const u=m.getAttribLocation(m.program,"a_PointSize");return m.vertexAttribPointer(u,1,m.FLOAT,!1,0,0),m.enableVertexAttribArray(u),W.length/2}}return(M,s)=>{const C=We("dbtap");return Ne(),Ye("div",null,[s[6]||(s[6]=a("header",null,"第五章：颜色与纹理",-1)),a("div",Nt,[a("div",Yt,[s[0]||(s[0]=a("div",{class:"desc"},"创建多个缓冲区对象来同时传输位置和大小信息",-1)),a("div",Gt,[de(a("canvas",{onDblclickOnce:Z,ref_key:"gl15",ref:n},null,544),[[C,Z]])])]),a("div",Ht,[s[1]||(s[1]=a("div",{class:"desc"},"单个缓冲区同时传输位置和大小信息",-1)),a("div",kt,[de(a("canvas",{onDblclickOnce:oe,ref_key:"gl16",ref:e},null,544),[[C,oe]])])]),a("div",Vt,[s[2]||(s[2]=a("div",{class:"desc"},"单个缓冲区同时传输位置和颜色信息，图形装配和光栅化",-1)),a("div",Wt,[de(a("canvas",{onDblclickOnce:q,ref_key:"gl17",ref:f},null,544),[[C,q]])])]),a("div",gt,[s[3]||(s[3]=a("div",{class:"desc"}," 通过片元着色器内置变量gl_FragCoord访问片元的坐标值，x/y，左下角为零点坐标, drawingBufferWidth和drawBufferHeight获取绘图区域宽高 ",-1)),a("div",$t,[de(a("canvas",{onDblclickOnce:H,ref_key:"gl18",ref:c},null,544),[[C,H]])])]),a("div",Xt,[s[4]||(s[4]=a("div",{class:"desc"}," 纹理（图片）映射：将纹理（图片）的纹素（像素）映射到片元上的过程，左下角为零点坐标 ",-1)),a("div",jt,[de(a("canvas",{onDblclickOnce:D,ref_key:"gl19",ref:O},null,544),[[C,D]])])]),a("div",zt,[s[5]||(s[5]=a("div",{class:"desc"},"多张纹理贴图",-1)),a("div",qt,[de(a("canvas",{onDblclickOnce:$,ref_key:"gl20",ref:l},null,544),[[C,$]])])])])])}}}),Kt={class:"example"},Jt={class:"item"},Qt={class:"canvas"},er={class:"item"},tr={class:"canvas"},rr={class:"item"},or={class:"canvas"},ar={class:"item"},ir={class:"canvas"},nr={class:"item"},sr={class:"canvas"},cr={class:"item"},fr={class:"canvas"},ur={class:"item"},_r={class:"canvas"},vr={class:"item"},lr={class:"canvas"},dr={class:"item"},mr={class:"canvas"},Ar={class:"item"},Rr={class:"canvas"},Er=Ie({__name:"chapter-07",setup(v){const n=_e(null),e=_e(null),f=_e(null),c=_e(null),O=_e(null),l=_e(null),$=_e(null),D=_e(null),H=_e(null),q=_e(null),oe=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight,r($).width=r($).clientWidth,r($).height=r($).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight,r(H).width=r(H).clientWidth,r(H).height=r(H).clientHeight,r(q).width=r(q).clientWidth,r(q).height=r(q).clientHeight});function Z(){var N=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(q),u=F.getContext("webgl");Re(u,N,A);var te=ae(u);u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST);var I=u.getUniformLocation(u.program,"u_MvpMatrix"),g=new S;g.setPerspective(30,1,1,100),g.lookAt(3,3,7,0,0,0,0,1,0),u.uniformMatrix4fv(I,!1,g.elements),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,te,u.UNSIGNED_BYTE,0);function ae(ne){var ee=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),R=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),P=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),b=ne.createBuffer();return Q(ne,ee,3,ne.FLOAT,"a_Position"),Q(ne,R,3,ne.FLOAT,"a_Color"),ne.bindBuffer(ne.ELEMENT_ARRAY_BUFFER,b),ne.bufferData(ne.ELEMENT_ARRAY_BUFFER,P,ne.STATIC_DRAW),P.length}function Q(ne,ee,R,P,b){var _=ne.createBuffer();ne.bindBuffer(ne.ARRAY_BUFFER,_),ne.bufferData(ne.ARRAY_BUFFER,ee,ne.STATIC_DRAW);var B=ne.getAttribLocation(ne.program,b);return ne.vertexAttribPointer(B,R,P,!1,0,0),ne.enableVertexAttribArray(B),ne.bindBuffer(ne.ARRAY_BUFFER,null),!0}}function M(){var N=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(H),u=F.getContext("webgl");Re(u,N,A);var te=ee(u);const I=u.getUniformLocation(u.program,"u_MvpMatrix"),g=new S,ae=new S;ae.setTranslate(0,0,0);const Q=new S;Q.setLookAt(3.06,2.5,10,0,0,-2,0,1,0);const ne=new S;ne.setPerspective(30,F.width/F.height,1,100),g.set(ne).multiply(Q).multiply(ae),u.uniformMatrix4fv(I,!1,g.elements),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.enable(u.POLYGON_OFFSET_FILL),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.polygonOffset(1,1),u.drawElements(u.TRIANGLES,te,u.UNSIGNED_BYTE,0);function ee(R){const P=new Float32Array([-1,1,1,.5,.1,.1,1,1,1,.5,.5,.1,-1,-1,1,.1,.5,.1,1,-1,1,.1,.1,.5,-1,1,-1,.3,.1,.3,1,1,-1,.3,.3,.1,-1,-1,-1,.1,.3,.2,1,-1,-1,.7,.1,.3]),b=P.BYTES_PER_ELEMENT,_=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,4,5,0,5,0,1,6,7,2,7,2,3,4,0,6,0,6,2,1,5,3,5,3,7]),B=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,B),R.bufferData(R.ARRAY_BUFFER,P,R.STATIC_DRAW);const p=R.getAttribLocation(R.program,"a_Position"),G=R.getAttribLocation(R.program,"a_Color");R.vertexAttribPointer(p,3,R.FLOAT,!1,b*6,0),R.vertexAttribPointer(G,3,R.FLOAT,!1,b*6,b*3),R.enableVertexAttribArray(p),R.enableVertexAttribArray(G);const K=R.createBuffer();return R.bindBuffer(R.ELEMENT_ARRAY_BUFFER,K),R.bufferData(R.ELEMENT_ARRAY_BUFFER,_,R.STATIC_DRAW),_.length}}function s(){const N=`
      attribute vec4 a_Position;
      uniform mat4 u_MvpMatrix;
      attribute vec4 a_Color;
      varying vec4 v_Color;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_Color = a_Color;
      }
      `,A=`
      #ifdef GL_ES
        precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,F=r(D),u=F.getContext("webgl");Re(u,N,A);const te=ee(u),I=u.getUniformLocation(u.program,"u_MvpMatrix"),g=new S,ae=new S;ae.setTranslate(0,0,0);const Q=new S;Q.setLookAt(3.06,2.5,10,0,0,-2,0,1,0);const ne=new S;ne.setPerspective(30,F.width/F.height,1,100),g.set(ne).multiply(Q).multiply(ae),u.uniformMatrix4fv(I,!1,g.elements),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT||u.DEPTH_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,te/2),u.polygonOffset(1,1),u.drawArrays(u.TRIANGLES,te/2,te/2);function ee(R){const P=new Float32Array([0,2.5,-5,.4,1,.4,-2.5,-2.5,-5,.4,1,.4,2.5,-2.5,-5,1,.4,.4,0,3,-5,1,.4,.4,-3,-3,-5,1,1,.4,3,-3,-5,1,1,.4]),b=P.BYTES_PER_ELEMENT,_=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,_),R.bufferData(R.ARRAY_BUFFER,P,R.STATIC_DRAW);const B=R.getAttribLocation(R.program,"a_Position");R.vertexAttribPointer(B,3,R.FLOAT,!1,6*b,0),R.enableVertexAttribArray(B);const p=R.getAttribLocation(R.program,"a_Color");return R.vertexAttribPointer(p,3,R.FLOAT,!1,6*b,3*b),R.enableVertexAttribArray(p),P.length/6}}function C(){var N=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r($),u=F.getContext("webgl");Re(u,N,A);var te=ee(u);u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST);var I=u.getUniformLocation(u.program,"u_MvpMatrix"),g=new S,ae=new S,Q=new S,ne=new S;g.setTranslate(.75,0,0),ae.setLookAt(0,0,5,0,0,-100,0,1,0),Q.setPerspective(30,F.width/F.height,1,100),ne.set(Q).multiply(ae).multiply(g),u.uniformMatrix4fv(I,!1,ne.elements),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,te),g.setTranslate(-.75,0,0),ne.set(Q).multiply(ae).multiply(g),u.uniformMatrix4fv(I,!1,ne.elements),u.drawArrays(u.TRIANGLES,0,te);function ee(R){var P=new Float32Array([0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4]),b=9,_=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,_),R.bufferData(R.ARRAY_BUFFER,P,R.STATIC_DRAW);var B=P.BYTES_PER_ELEMENT,p=R.getAttribLocation(R.program,"a_Position");R.vertexAttribPointer(p,3,R.FLOAT,!1,B*6,0),R.enableVertexAttribArray(p);var G=R.getAttribLocation(R.program,"a_Color");return R.vertexAttribPointer(G,3,R.FLOAT,!1,B*6,B*3),R.enableVertexAttribArray(G),R.bindBuffer(R.ARRAY_BUFFER,null),b}}function h(){var N=`
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
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(l),u=F.getContext("webgl");Re(u,N,A);var te=R(u);u.clearColor(0,0,0,1);var I=u.getUniformLocation(u.program,"u_ViewMatrix"),g=u.getUniformLocation(u.program,"u_ProjMatrix"),ae=u.getUniformLocation(u.program,"u_ModeMatrix"),Q=new S,ne=new S,ee=new S;Q.setLookAt(0,0,5,0,0,-100,0,1,0),ne.setPerspective(30,F.width/F.height,1,100),ee.setTranslate(0,1,0),u.uniformMatrix4fv(I,!1,Q.elements),u.uniformMatrix4fv(g,!1,ne.elements),u.uniformMatrix4fv(ae,!1,ee.elements),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,te);function R(P){var b=new Float32Array([.75,1,-4,.4,1,.4,.25,-1,-4,.4,1,.4,1.25,-1,-4,1,.4,.4,.75,1,-2,1,1,.4,.25,-1,-2,1,1,.4,1.25,-1,-2,1,.4,.4,.75,1,0,.4,.4,1,.25,-1,0,.4,.4,1,1.25,-1,0,1,.4,.4,-.75,1,-4,.4,1,.4,-1.25,-1,-4,.4,1,.4,-.25,-1,-4,1,.4,.4,-.75,1,-2,1,1,.4,-1.25,-1,-2,1,1,.4,-.25,-1,-2,1,.4,.4,-.75,1,0,.4,.4,1,-1.25,-1,0,.4,.4,1,-.25,-1,0,1,.4,.4]),_=18,B=P.createBuffer();P.bindBuffer(P.ARRAY_BUFFER,B),P.bufferData(P.ARRAY_BUFFER,b,P.STATIC_DRAW);var p=b.BYTES_PER_ELEMENT,G=P.getAttribLocation(P.program,"a_Position");P.vertexAttribPointer(G,3,P.FLOAT,!1,p*6,0),P.enableVertexAttribArray(G);var K=P.getAttribLocation(P.program,"a_Color");return P.vertexAttribPointer(K,3,P.FLOAT,!1,p*6,p*3),P.enableVertexAttribArray(K),_}}function o(){var N=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * a_Position;
          v_Color = a_Color;
        }
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(O),u=F.getContext("webgl");Re(u,N,A);var te=ae(u);u.clearColor(0,0,0,1);var I=u.getUniformLocation(u.program,"u_ProjMatrix"),g=new S;function ae(R){var P=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),b=9,_=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,_),R.bufferData(R.ARRAY_BUFFER,P,R.STATIC_DRAW);var B=P.BYTES_PER_ELEMENT,p=R.getAttribLocation(R.program,"a_Position");R.vertexAttribPointer(p,3,R.FLOAT,!1,B*6,0),R.enableVertexAttribArray(p);var G=R.getAttribLocation(R.program,"a_Color");return R.vertexAttribPointer(G,3,R.FLOAT,!1,B*6,B*3),R.enableVertexAttribArray(G),R.bindBuffer(R.ARRAY_BUFFER,null),b}var Q=0,ne=.5;ee(u,te,I,g);function ee(R,P,b,_){_.setOrtho(-1,1,-.5,.5,Q,ne),R.uniformMatrix4fv(b,!1,_.elements),R.clear(R.COLOR_BUFFER_BIT),R.drawArrays(R.TRIANGLES,0,P)}}function i(){var N=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * u_ViewMatrix * a_Position;
          v_Color = a_Color;
        }
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(c),u=F.getContext("webgl");Re(u,N,A);var te=ne(u);u.clearColor(0,0,0,1);var I=u.getUniformLocation(u.program,"u_ViewMatrix"),g=u.getUniformLocation(u.program,"u_ProjMatrix"),ae=new S;document.onkeydown=function(B){b(B,u,te,I,ae)};var Q=new S;Q.setOrtho(-1,1,-1,1,0,2),u.uniformMatrix4fv(g,!1,Q.elements);function ne(B){var p=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),G=9,K=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,K),B.bufferData(B.ARRAY_BUFFER,p,B.STATIC_DRAW);var ce=p.BYTES_PER_ELEMENT,J=B.getAttribLocation(B.program,"a_Position");B.vertexAttribPointer(J,3,B.FLOAT,!1,ce*6,0),B.enableVertexAttribArray(J);var w=B.getAttribLocation(B.program,"a_Color");return B.vertexAttribPointer(w,3,B.FLOAT,!1,ce*6,ce*3),B.enableVertexAttribArray(w),G}var ee=0,R=0,P=.25;function b(B,p,G,K,ce){if(B.keyCode==39)ee+=.01;else if(B.keyCode==37)ee-=.01;else return;_(p,G,K,ce)}_(u,te,I,ae);function _(B,p,G,K){K.setLookAt(ee,R,P,0,0,0,0,1,0),B.uniformMatrix4fv(G,!1,K.elements),B.clear(B.COLOR_BUFFER_BIT),B.drawArrays(B.TRIANGLES,0,p)}}function m(){var N=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * a_Position;
          v_Color = a_Color;
        }
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(f),u=F.getContext("webgl");Re(u,N,A);var te=ae(u);u.clearColor(0,0,0,1);var I=u.getUniformLocation(u.program,"u_ProjMatrix"),g=new S;F.addEventListener("mouseup",function(b){ee(b,u,te,I,g)});function ae(b){var _=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),B=9,p=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,p),b.bufferData(b.ARRAY_BUFFER,_,b.STATIC_DRAW);var G=_.BYTES_PER_ELEMENT,K=b.getAttribLocation(b.program,"a_Position");b.vertexAttribPointer(K,3,b.FLOAT,!1,G*6,0),b.enableVertexAttribArray(K);var ce=b.getAttribLocation(b.program,"a_Color");return b.vertexAttribPointer(ce,3,b.FLOAT,!1,G*6,G*3),b.enableVertexAttribArray(ce),B}var Q=0,ne=-.5;function ee(b,_,B,p,G){const{layerX:K,layerY:ce}=b;K>210&&ce>210&&(ne-=.1),K>210&&ce<210&&(ne+=.1),K<210&&ce>210&&(Q-=.1),K<210&&ce<210&&(Q+=.1),P(_,B,p,G)}const R=r(oe);P(u,te,I,g);function P(b,_,B,p){p.setOrtho(-1,1,-1,1,-Q,-ne),b.uniformMatrix4fv(B,!1,p.elements),R.innerHTML=`near:${Q.toFixed(2)}|far:${ne.toFixed(2)}`,b.clear(b.COLOR_BUFFER_BIT),b.drawArrays(b.TRIANGLES,0,_)}}function W(){var N=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ViewMatrix * a_Position;
          v_Color = a_Color;
        }
      `,A=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,F=r(e),u=F.getContext("webgl");Re(u,N,A);var te=ae(u);u.clearColor(0,0,0,1);var I=u.getUniformLocation(u.program,"u_ViewMatrix"),g=new S;document.onkeydown=function(b){R(b,u,te,I,g)};function ae(b){var _=new Float32Array([0,.5,-.4,.4,1,.4,-.5,-.5,-.4,.4,1,.4,.5,-.5,-.4,1,.4,.4,.5,.4,-.2,1,.4,.4,-.5,.4,-.2,1,1,.4,0,-.6,-.2,1,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,1,.4,.4]),B=9,p=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,p),b.bufferData(b.ARRAY_BUFFER,_,b.STATIC_DRAW);var G=_.BYTES_PER_ELEMENT,K=b.getAttribLocation(b.program,"a_Position");b.vertexAttribPointer(K,3,b.FLOAT,!1,G*6,0),b.enableVertexAttribArray(K);var ce=b.getAttribLocation(b.program,"a_Color");return b.vertexAttribPointer(ce,3,b.FLOAT,!1,G*6,G*3),b.enableVertexAttribArray(ce),B}var Q=0,ne=0,ee=.2;function R(b,_,B,p,G){if(console.log(b.keyCode),b.keyCode==68)Q+=.01;else if(b.keyCode==65)Q-=.01;else return;P(_,B,p,G)}P(u,te,I,g);function P(b,_,B,p){p.setLookAt(Q,ne,ee,0,0,0,0,1,0),b.uniformMatrix4fv(B,!1,p.elements),b.clear(b.COLOR_BUFFER_BIT),b.drawArrays(b.TRIANGLES,0,_)}}function E(){const N=`
      attribute vec4 a_Position;
      attribute vec4 a_Color;
      uniform mat4 MVMatrix;
      varying vec4 v_Color;
      void main() {
        gl_Position = MVMatrix * a_Position;
        v_Color = a_Color;
      }
      `,A=`
      #ifdef GL_ES
        precision lowp float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,u=r(n).getContext("webgl");Re(u,N,A);const te=ne(u),I=u.getUniformLocation(u.program,"MVMatrix"),g=new S;g.setLookAt(.3,.3,.3,0,0,0,0,1,0);const ae=new S;ae.setRotate(-90,0,0,1);const Q=g.multiply(ae);u.uniformMatrix4fv(I,!1,Q.elements),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,te);function ne(ee){const R=new Float32Array([-.2,-.2,-.3,.4,.7,.1,.2,-.2,-.3,.4,.7,.1,0,.2,-.3,.4,.7,.1,-.2,-.2,-.2,.2,.1,.3,.2,-.2,-.2,.2,.1,.3,0,.2,-.2,.2,.1,.3,-.2,-.2,-.1,.1,.2,.3,.2,-.2,-.1,.1,.2,.3,0,.2,-.1,.1,.2,.3]),P=R.BYTES_PER_ELEMENT,b=ee.createBuffer();ee.bindBuffer(ee.ARRAY_BUFFER,b),ee.bufferData(ee.ARRAY_BUFFER,R,ee.STATIC_DRAW);const _=ee.getAttribLocation(ee.program,"a_Position");ee.vertexAttribPointer(_,3,ee.FLOAT,!1,P*6,0),ee.enableVertexAttribArray(_);const B=ee.createBuffer();ee.bindBuffer(ee.ARRAY_BUFFER,B),ee.bufferData(ee.ARRAY_BUFFER,R,ee.STATIC_DRAW);const p=ee.getAttribLocation(ee.program,"a_Color");return ee.vertexAttribPointer(p,2,ee.FLOAT,!1,P*6,P*3),ee.enableVertexAttribArray(p),R.length/6}}return(N,A)=>{const F=We("dbtap");return Ne(),Ye("div",null,[A[10]||(A[10]=a("header",null,"第七章：三维",-1)),a("div",Kt,[a("div",Jt,[A[0]||(A[0]=a("div",{class:"desc"}," 设置观察者视角，三个重要点，观察者的位置，看向的点和头顶指向，这三个量可以构建一个视图矩阵，视图矩阵和模型矩阵相乘就可以得到模型视图矩阵 ",-1)),a("div",Qt,[de(a("canvas",{onDblclickOnce:E,ref_key:"gl21",ref:n},null,544),[[F,E]])])]),a("div",er,[A[1]||(A[1]=a("div",{class:"desc"}," 使用键盘(A,D)改变视点的位置，引出可视区域的问题，深度的问题，这里是使用的平面投影矩阵，所以没有近大远小，超出可视区域的部分被裁减掉了 ",-1)),a("div",tr,[de(a("canvas",{onDblclickOnce:W,ref_key:"gl22",ref:e},null,544),[[F,W]])])]),a("div",rr,[A[2]||(A[2]=a("div",{class:"desc"},"设置可视空间投影，正射投影和透视投影之正射投影。参数：上下左右前后",-1)),a("div",or,[de(a("canvas",{onDblclickOnce:m,ref_key:"gl23",ref:f},null,544),[[F,m]]),a("div",{ref_key:"gl23txt",ref:oe,class:"gl23txt"},null,512)])]),a("div",ar,[A[3]||(A[3]=a("div",{class:"desc"},"同时设置视角视点和投影矩阵,即视图矩阵与投影矩阵相乘",-1)),a("div",ir,[de(a("canvas",{onDblclickOnce:i,ref_key:"gl24",ref:c},null,544),[[F,i]])])]),a("div",nr,[A[4]||(A[4]=a("div",{class:"desc"},"如果投影矩阵的宽高比与canvas不一致，会缩放拉伸以适应画布",-1)),a("div",sr,[de(a("canvas",{onDblclickOnce:o,ref_key:"gl25",ref:O},null,544),[[F,o]])])]),a("div",cr,[A[5]||(A[5]=a("div",{class:"desc"}," 设置可视空间投影，正射投影和透视投影之正射投影。参数：开角，前后，宽高比, 同时加上模型矩阵，组成MVP ",-1)),a("div",fr,[de(a("canvas",{onDblclickOnce:h,ref_key:"gl26",ref:l},null,544),[[F,h]])])]),a("div",ur,[A[6]||(A[6]=a("div",{class:"desc"}," 开启隐藏面消除以正确的处理图形的前后关系，开启gl.DEPTH_TEST, 绘制前清空gl.DEPTH_BUFFER_BIT ",-1)),a("div",_r,[de(a("canvas",{onDblclickOnce:C,ref_key:"gl27",ref:$},null,544),[[F,C]])])]),a("div",vr,[A[7]||(A[7]=a("div",{class:"desc"}," 深度冲突，当两个面的深度值过于接近时，深度缓冲区不能正确的区分前后关系，就会产生斑驳的现象，尤其是在有一定的旋转的情况下。通过[多边形偏移]机制可以解决这个问题 ",-1)),a("div",lr,[de(a("canvas",{onDblclickOnce:s,ref_key:"gl28",ref:D},null,544),[[F,s]])])]),a("div",dr,[A[8]||(A[8]=a("div",{class:"desc"}," 通过顶点索引绘制物体,只需要8个顶点数据,每个都有自己的索引,三个索引对应三个点,三个点可以绘制一个三角形,两个三角形构成一个正方形 ",-1)),a("div",mr,[de(a("canvas",{onDblclickOnce:M,ref_key:"gl29",ref:H},null,544),[[F,M]])])]),a("div",Ar,[A[9]||(A[9]=a("div",{class:"desc"},"解决通过索引绘制的问题,不能为每个面指定单独的颜色,需要至少24个点",-1)),a("div",Rr,[de(a("canvas",{onDblclickOnce:Z,ref_key:"gl30",ref:q},null,544),[[F,Z]])])])])])}}}),Fr=ze(Er,[["__scopeId","data-v-aeafb5da"]]),br={class:"example"},Tr={class:"item"},xr={class:"canvas"},hr={class:"item"},Br={class:"canvas"},Cr={class:"item"},pr={class:"canvas"},Lr={class:"item"},wr={class:"canvas"},Mr={class:"item"},Pr={class:"canvas"},Ur=Ie({__name:"chapter-08",setup(v){const n=_e(null),e=_e(null),f=_e(null),c=_e(null),O=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight});function l(){var oe=`
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
      `,Z=`
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
      `,M=r(O),s=M.getContext("webgl");Re(s,oe,Z);var C=u(s);s.clearColor(0,0,0,1),s.enable(s.DEPTH_TEST);var h=s.getUniformLocation(s.program,"u_ModelMatrix"),o=s.getUniformLocation(s.program,"u_MvpMatrix"),i=s.getUniformLocation(s.program,"u_NormalMatrix"),m=s.getUniformLocation(s.program,"u_LightColor"),W=s.getUniformLocation(s.program,"u_LightPosition"),E=s.getUniformLocation(s.program,"u_AmbientLight");s.uniform3f(m,0,.8,.8),s.uniform3f(W,5,8,7),s.uniform3f(E,.2,.2,.2);var N=new S,A=new S,F=new S;N.setRotate(90,0,1,0),A.setPerspective(30,M.width/M.height,1,100),A.lookAt(0,0,6,0,0,0,0,1,0),A.multiply(N),F.setInverseOf(N),F.transpose(),s.uniformMatrix4fv(h,!1,N.elements),s.uniformMatrix4fv(o,!1,A.elements),s.uniformMatrix4fv(i,!1,F.elements),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.drawElements(s.TRIANGLES,C,s.UNSIGNED_SHORT,0);function u(I){var g=24,ae=[],Q=[];for(let ee=0;ee<=g;ee++){let R=ee/g*Math.PI,P=Math.sin(R),b=Math.cos(R);for(let _=0;_<=g;_++){const B=_/g*2*Math.PI,p=Math.sin(B),G=Math.cos(B);ae.push(P*G),ae.push(b),ae.push(P*p)}}for(let ee=0;ee<g;ee++)for(let R=0;R<g;R++){const P=g+1;let b=ee*P+R,_=b+P;Q.push(b),Q.push(_),Q.push(b+1),Q.push(b+1),Q.push(_),Q.push(_+1)}te(I,"a_Position",new Float32Array(ae),I.FLOAT,3),te(I,"a_Normal",new Float32Array(ae),I.FLOAT,3),I.bindBuffer(I.ARRAY_BUFFER,null);var ne=I.createBuffer();return I.bindBuffer(I.ELEMENT_ARRAY_BUFFER,ne),I.bufferData(I.ELEMENT_ARRAY_BUFFER,new Uint16Array(Q),I.STATIC_DRAW),Q.length}function te(I,g,ae,Q,ne){var ee=I.createBuffer();I.bindBuffer(I.ARRAY_BUFFER,ee),I.bufferData(I.ARRAY_BUFFER,ae,I.STATIC_DRAW);var R=I.getAttribLocation(I.program,g);return I.vertexAttribPointer(R,ne,Q,!1,0,0),I.enableVertexAttribArray(R),!0}}function $(){var oe=`
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
      `,Z=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,M=r(c),s=M.getContext("webgl");Re(s,oe,Z);var C=u(s);s.clearColor(0,0,0,1),s.enable(s.DEPTH_TEST);var h=s.getUniformLocation(s.program,"u_ModelMatrix"),o=s.getUniformLocation(s.program,"u_MvpMatrix"),i=s.getUniformLocation(s.program,"u_NormalMatrix"),m=s.getUniformLocation(s.program,"u_LightColor"),W=s.getUniformLocation(s.program,"u_LightPosition"),E=s.getUniformLocation(s.program,"u_AmbientLight");s.uniform3f(m,0,.8,.8),s.uniform3f(W,5,8,7),s.uniform3f(E,.2,.2,.2);var N=new S,A=new S,F=new S;s.uniformMatrix4fv(h,!1,N.elements),A.setPerspective(30,M.width/M.height,1,100),A.lookAt(0,0,6,0,0,0,0,1,0),A.multiply(N),s.uniformMatrix4fv(o,!1,A.elements),F.setInverseOf(N),F.transpose(),s.uniformMatrix4fv(i,!1,F.elements),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.drawElements(s.TRIANGLES,C,s.UNSIGNED_SHORT,0);function u(I){var g=24,ae=[],Q=[];for(let ee=0;ee<=g;ee++){let R=ee/g*Math.PI,P=Math.sin(R),b=Math.cos(R);for(let _=0;_<=g;_++){const B=_/g*2*Math.PI,p=Math.sin(B),G=Math.cos(B);ae.push(P*G),ae.push(b),ae.push(P*p)}}for(let ee=0;ee<g;ee++)for(let R=0;R<g;R++){let P=ee*(g+1)+R,b=P+(g+1);Q.push(P),Q.push(b),Q.push(P+1),Q.push(P+1),Q.push(b),Q.push(b+1)}te(I,"a_Position",new Float32Array(ae),I.FLOAT,3),te(I,"a_Normal",new Float32Array(ae),I.FLOAT,3),I.bindBuffer(I.ARRAY_BUFFER,null);var ne=I.createBuffer();return I.bindBuffer(I.ELEMENT_ARRAY_BUFFER,ne),I.bufferData(I.ELEMENT_ARRAY_BUFFER,new Uint16Array(Q),I.STATIC_DRAW),Q.length}function te(I,g,ae,Q,ne){var ee=I.createBuffer();I.bindBuffer(I.ARRAY_BUFFER,ee),I.bufferData(I.ARRAY_BUFFER,ae,I.STATIC_DRAW);var R=I.getAttribLocation(I.program,g);return I.vertexAttribPointer(R,ne,Q,!1,0,0),I.enableVertexAttribArray(R),I.bindBuffer(I.ARRAY_BUFFER,null),!0}}function D(){const oe=`
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
      `,Z=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,s=r(f).getContext("webgl");Re(s,oe,Z);const C=o(s);h(),s.clearColor(0,0,0,1),s.enable(s.DEPTH_TEST),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.drawElements(s.TRIANGLES,C,s.UNSIGNED_BYTE,0);function h(){const i=s.getUniformLocation(s.program,"u_MvpMatrix"),m=s.getUniformLocation(s.program,"u_LightColor"),W=s.getUniformLocation(s.program,"u_LightDir"),E=s.getUniformLocation(s.program,"u_AmbientLight"),N=s.getUniformLocation(s.program,"u_NormalMatrix");s.uniform3f(E,.2,.2,.2),s.uniform3f(m,1,1,1);const A=new Xe([2,2,-2]);A.normalize(),s.uniform3fv(W,A.elements);const F=new S,u=new S;u.setLookAt(5,5,5,0,0,0,0,1,0);const te=new S;te.setPerspective(60,1/1,1,100);const I=new S;I.setTranslate(.1,.1,0),I.setRotate(-90,0,1,0),F.set(te).multiply(u).multiply(I),s.uniformMatrix4fv(i,!1,F.elements);const g=new S;g.setInverseOf(I),g.transpose(),s.uniformMatrix4fv(N,!1,g.elements)}function o(i){const m=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),W=new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]),E=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),N=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),A=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,A),i.bufferData(i.ARRAY_BUFFER,m,i.STATIC_DRAW);const F=i.getAttribLocation(i.program,"a_Position");i.vertexAttribPointer(F,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(F),i.bindBuffer(i.ARRAY_BUFFER,null);const u=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,u),i.bufferData(i.ARRAY_BUFFER,W,i.STATIC_DRAW);const te=i.getAttribLocation(i.program,"a_Color");i.vertexAttribPointer(te,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(te),i.bindBuffer(i.ARRAY_BUFFER,null);const I=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,I),i.bufferData(i.ARRAY_BUFFER,E,i.STATIC_DRAW);const g=i.getAttribLocation(i.program,"a_Normal");i.vertexAttribPointer(g,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(g),i.bindBuffer(i.ARRAY_BUFFER,null);const ae=i.createBuffer();return i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,ae),i.bufferData(i.ELEMENT_ARRAY_BUFFER,N,i.STATIC_DRAW),N.length}}function H(){const oe=`
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
      `,Z=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,s=r(e).getContext("webgl");Re(s,oe,Z);const C=o(s);h(),s.clearColor(0,0,0,1),s.enable(s.DEPTH_TEST),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.drawElements(s.TRIANGLES,C,s.UNSIGNED_BYTE,0);function h(){const i=s.getUniformLocation(s.program,"u_MvpMatrix"),m=s.getUniformLocation(s.program,"u_LightColor"),W=s.getUniformLocation(s.program,"u_LightDir"),E=s.getUniformLocation(s.program,"u_AmbientLight");s.uniform3f(E,.2,0,0),s.uniform3f(m,1,1,1);const N=new Xe([2,2,-2]);N.normalize(),s.uniform3fv(W,N.elements);const A=new S,F=new S;F.setLookAt(5,5,5,0,0,0,0,1,0);const u=new S;u.setPerspective(60,1/1,1,100),A.set(u).multiply(F),s.uniformMatrix4fv(i,!1,A.elements)}function o(i){const m=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),W=new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]),E=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),N=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),A=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,A),i.bufferData(i.ARRAY_BUFFER,m,i.STATIC_DRAW);const F=i.getAttribLocation(i.program,"a_Position");i.vertexAttribPointer(F,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(F),i.bindBuffer(i.ARRAY_BUFFER,null);const u=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,u),i.bufferData(i.ARRAY_BUFFER,W,i.STATIC_DRAW);const te=i.getAttribLocation(i.program,"a_Color");i.vertexAttribPointer(te,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(te),i.bindBuffer(i.ARRAY_BUFFER,null);const I=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,I),i.bufferData(i.ARRAY_BUFFER,E,i.STATIC_DRAW);const g=i.getAttribLocation(i.program,"a_Normal");i.vertexAttribPointer(g,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(g),i.bindBuffer(i.ARRAY_BUFFER,null);const ae=i.createBuffer();return i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,ae),i.bufferData(i.ELEMENT_ARRAY_BUFFER,N,i.STATIC_DRAW),N.length}}function q(){const oe=`
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
      `,Z=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,s=r(n).getContext("webgl");Re(s,oe,Z);const C=o(s);h(),s.clearColor(0,0,0,1),s.enable(s.DEPTH_TEST),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.drawElements(s.TRIANGLES,C,s.UNSIGNED_BYTE,0);function h(){const i=s.getUniformLocation(s.program,"u_MvpMatrix"),m=s.getUniformLocation(s.program,"u_LightColor"),W=s.getUniformLocation(s.program,"u_LightDir");s.uniform3f(m,1,1,1);const E=new Xe([2,2,-2]);E.normalize(),s.uniform3fv(W,E.elements);const N=new S,A=new S;A.setLookAt(5,5,5,0,0,0,0,1,0);const F=new S;F.setPerspective(60,1/1,1,100),N.set(F).multiply(A),s.uniformMatrix4fv(i,!1,N.elements)}function o(i){const m=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),W=new Float32Array([.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1]),E=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),N=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),A=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,A),i.bufferData(i.ARRAY_BUFFER,m,i.STATIC_DRAW);const F=i.getAttribLocation(i.program,"a_Position");i.vertexAttribPointer(F,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(F),i.bindBuffer(i.ARRAY_BUFFER,null);const u=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,u),i.bufferData(i.ARRAY_BUFFER,W,i.STATIC_DRAW);const te=i.getAttribLocation(i.program,"a_Color");i.vertexAttribPointer(te,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(te),i.bindBuffer(i.ARRAY_BUFFER,null);const I=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,I),i.bufferData(i.ARRAY_BUFFER,E,i.STATIC_DRAW);const g=i.getAttribLocation(i.program,"a_Normal");i.vertexAttribPointer(g,3,i.FLOAT,!1,0,0),i.enableVertexAttribArray(g),i.bindBuffer(i.ARRAY_BUFFER,null);const ae=i.createBuffer();return i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,ae),i.bufferData(i.ELEMENT_ARRAY_BUFFER,N,i.STATIC_DRAW),N.length}}return(oe,Z)=>{const M=We("dbtap");return Ne(),Ye("div",null,[Z[5]||(Z[5]=a("header",null,"第八章：光照",-1)),a("div",br,[a("div",Tr,[Z[0]||(Z[0]=a("div",{class:"desc"}," 白色平行光照射红色cube, 漫反射颜色=入射光颜色x表面基底色xcos0，cos0 = 光线反方向单位向量 (点乘) 法线方向单位向量 = ax * bx + ay * by + az * bz ",-1)),a("div",xr,[de(a("canvas",{onDblclickOnce:q,ref_key:"gl31",ref:n},null,544),[[M,q]])])]),a("div",hr,[Z[1]||(Z[1]=a("div",{class:"desc"}," 只有平行光，则只有被光线照射到的地方能看见，不符合常识，增加环境光，各处相等的光 ",-1)),a("div",Br,[de(a("canvas",{onDblclickOnce:H,ref_key:"gl32",ref:e},null,544),[[M,H]])])]),a("div",Cr,[Z[2]||(Z[2]=a("div",{class:"desc"}," 如果物体进行了模型变换，那么物体表面的法向量也会发生变化，如果不改变法向量，则不能正确的着色。变换后的法向量等于法向量乘以模型矩阵的逆转置矩阵。逆转置矩阵：逆矩阵（AxA逆和A逆xA结果都为单位矩阵），转置矩阵，原矩阵的行列进行调换 ",-1)),a("div",pr,[de(a("canvas",{onDblclickOnce:D,ref_key:"gl33",ref:f},null,544),[[M,D]])])]),a("div",Lr,[Z[3]||(Z[3]=a("div",{class:"desc"}," 点光源，点光源的入射方向跟平行光不一样，在点光源下每个点的入射方向都不一样，方向为点光源所在位置和当前点的连线。本例绘制一个圆 ",-1)),a("div",wr,[de(a("canvas",{onDblclickOnce:$,ref_key:"gl34",ref:c},null,544),[[M,$]])])]),a("div",Mr,[Z[4]||(Z[4]=a("div",{class:"desc"}," 如果只计算顶点着色器中顶点的光照着色其余内插，最终效果会很不自然，需要逐片元计算方向。平行光和环境光不会有这个问题，因为平行光的变化是线性的，环境光无变化 ",-1)),a("div",Pr,[de(a("canvas",{onDblclickOnce:l,ref_key:"gl35",ref:O},null,544),[[M,l]])])])])])}}}),Sr={class:"example"},Dr={class:"item"},yr={class:"canvas"},Or={class:"item"},Ir={class:"canvas"},Nr=Ie({__name:"chapter-09",setup(v){const n=_e(null),e=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight});function f(){const O=`
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
      `,$=r(e),D=$.getContext("webgl");Re(D,O,l);const H=N(D);let q=0,oe=0,Z=0,M=0,s=10;const C=D.getUniformLocation(D.program,"u_MvpMatrix"),h=D.getUniformLocation(D.program,"u_NormalMatrix"),o=new S;o.setPerspective(50,$.width/$.height,1,100),o.lookAt(15,24,20,0,5,0,0,1,0),document.addEventListener("keydown",F=>{const{key:u}=F;switch(u){case"1":q<135&&(q+=s);break;case"2":q>-135&&(q-=s);break;case"3":oe=(oe+s)%360;break;case"4":oe=(oe-s)%360;break;case"5":Z=(Z+s)%360;break;case"6":Z=(Z-s)%360;break;case"7":M<60&&(M=(M+s)%360);break;case"8":M>-60&&(M=(M-s)%360);break;default:return}W(D,H,o,C,h)}),D.enable(D.DEPTH_TEST);let i=new S;const m=[];W(D,H,o,C,h);function W(F,u,te,I,g){F.clearColor(0,0,0,1),F.clear(F.COLOR_BUFFER_BIT|F.DEPTH_BUFFER_BIT),i.setTranslate(0,0,0),E(F,u,te,I,g,4,1,4),i.translate(0,1,0),i.rotate(q,0,1,0),E(F,u,te,I,g,2,3,2),i.translate(0,3,0),i.rotate(oe,1,0,0),E(F,u,te,I,g,1.8,4,1.8),i.translate(0,4,0),i.rotate(Z,0,1,0),E(F,u,te,I,g,4,4,1),m.push(new S(i)),i.translate(-2,3,1),i.rotate(M,0,1,0),E(F,u,te,I,g,1,1,2),i=m.pop(),i.translate(2,3,1),i.rotate(-M,0,1,0),E(F,u,te,I,g,1,1,2)}function E(F,u,te,I,g,ae,Q,ne){const ee=new S(i);ee.scale(ae,Q,ne);const R=new S;R.setInverseOf(ee),R.transpose();const P=new S(te).multiply(ee);F.uniformMatrix4fv(I,!1,P.elements),F.uniformMatrix4fv(g,!1,R.elements),F.drawElements(F.TRIANGLES,u,F.UNSIGNED_BYTE,0)}function N(F){var u=new Float32Array([-.5,0,.5,.5,0,.5,-.5,1,.5,.5,1,.5,-.5,0,.5,.5,0,.5,-.5,0,-.5,.5,0,-.5,-.5,0,-.5,.5,0,-.5,-.5,1,-.5,.5,1,-.5,-.5,1,-.5,.5,1,-.5,-.5,1,.5,.5,1,.5,-.5,0,.5,-.5,0,-.5,-.5,1,.5,-.5,1,-.5,.5,0,.5,.5,0,-.5,.5,1,.5,.5,1,-.5]),te=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),I=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]);A(F,"a_Position",u,F.FLOAT,3),A(F,"a_Normal",te,F.FLOAT,3),F.bindBuffer(F.ARRAY_BUFFER,null);var g=F.createBuffer();return F.bindBuffer(F.ELEMENT_ARRAY_BUFFER,g),F.bufferData(F.ELEMENT_ARRAY_BUFFER,I,F.STATIC_DRAW),I.length}function A(F,u,te,I,g){var ae=F.createBuffer();F.bindBuffer(F.ARRAY_BUFFER,ae),F.bufferData(F.ARRAY_BUFFER,te,F.STATIC_DRAW);var Q=F.getAttribLocation(F.program,u);return F.vertexAttribPointer(Q,g,I,!1,0,0),F.enableVertexAttribArray(Q),!0}}function c(){const O=`
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
      `,D=r(n).getContext("webgl");Re(D,O,l);const H=h(D),q=new S,oe=new S,Z=new S;oe.lookAt(20,10,20,0,7,0,0,1,0),Z.setPerspective(60,1/1,1,100),D.enable(D.DEPTH_TEST),D.enable(D.POLYGON_OFFSET_FILL),D.clearColor(0,0,0,1),D.polygonOffset(1,1);let M=30,s=30;C(),document.addEventListener("keydown",o=>{const{key:i}=o;if(i==="a"&&(M-=10),i==="d"&&(M+=10),i==="w"){if(s>=90)return;s+=10}if(i==="s"){if(s<=0)return;s-=10}C()});function C(){D.clear(D.COLOR_BUFFER_BIT|D.DEPTH_BUFFER_BIT);const o=new S,i=new S,m=D.getUniformLocation(D.program,"u_MvpMatrix"),W=D.getUniformLocation(D.program,"u_NormalMatrix");o.translate(2,0,0),o.rotate(M,0,1,0),q.set(Z).multiply(oe).multiply(new S(o).scale(1.2,1,1.2)),i.set(o),i.invert(),i.transpose(),D.uniformMatrix4fv(m,!1,q.elements),D.uniformMatrix4fv(W,!1,i.elements),D.drawElements(D.TRIANGLES,H,D.UNSIGNED_BYTE,0),o.translate(0,7,0),o.rotate(s,1,0,0),q.set(Z).multiply(oe).multiply(o),i.set(o),i.invert(),i.transpose(),D.uniformMatrix4fv(m,!1,q.elements),D.uniformMatrix4fv(W,!1,i.elements),D.drawElements(D.TRIANGLES,H,D.UNSIGNED_BYTE,0)}function h(o){const i=new Float32Array([-1,0,1,1,0,1,-1,7,1,1,7,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,7,-1,1,7,-1,-1,7,-1,1,7,-1,-1,7,1,1,7,1,-1,0,1,-1,0,-1,-1,7,1,-1,7,-1,1,0,1,1,0,-1,1,7,1,1,7,-1]),m=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),W=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),E=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,E),o.bufferData(o.ARRAY_BUFFER,i,o.STATIC_DRAW);const N=o.getAttribLocation(o.program,"a_Position");o.vertexAttribPointer(N,3,o.FLOAT,!1,0,0),o.enableVertexAttribArray(N);const A=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,A),o.bufferData(o.ARRAY_BUFFER,m,o.STATIC_DRAW);const F=o.getAttribLocation(o.program,"a_Normal");o.vertexAttribPointer(F,3,o.FLOAT,!1,0,0),o.enableVertexAttribArray(F);const u=o.createBuffer();return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,u),o.bufferData(o.ELEMENT_ARRAY_BUFFER,W,o.STATIC_DRAW),W.length}}return(O,l)=>{const $=We("dbtap");return Ne(),Ye("div",null,[l[2]||(l[2]=a("header",null,"第九章：层次模型",-1)),a("div",Sr,[a("div",Dr,[l[0]||(l[0]=a("div",{class:"desc"},"绘制两个矩形，模仿上臂和前臂，通过键盘W,A,S,D控制",-1)),a("div",yr,[de(a("canvas",{onDblclickOnce:c,ref_key:"gl36",ref:n},null,544),[[$,c]])])]),a("div",Or,[l[1]||(l[1]=a("div",{class:"desc"},"绘制更复杂的模型，一个机械手，通过键盘1,2,3,4,5,6,7,8控制",-1)),a("div",Ir,[de(a("canvas",{onDblclickOnce:f,ref_key:"gl37",ref:e},null,544),[[$,f]])])])])])}}}),Yr={class:"example"},Gr={class:"item"},Hr={class:"canvas"},kr={class:"item"},Vr={class:"canvas"},Wr={class:"item"},gr={class:"canvas"},$r={class:"item"},Xr={class:"canvas"},jr={class:"item"},zr={class:"canvas"},qr={class:"item"},Zr={class:"canvas"},Kr={class:"item"},Jr={class:"canvas"},Qr={class:"item"},eo={class:"canvas"},to={class:"item"},ro={class:"canvas"},oo={class:"item"},ao={class:"canvas"},io={class:"item"},no={class:"canvas"},so={class:"item"},co={class:"canvas"},fo={class:"item"},uo={class:"canvas"},_o={class:"item"},vo={class:"canvas"},lo={class:"item"},mo={class:"canvas"},Ao=Ie({__name:"chapter-10",setup(v){const n=_e(null),e=_e(null),f=_e(null),c=_e(null),O=_e(null),l=_e(null),$=_e(null),D=_e(null),H=_e(null),q=_e(null),oe=_e(null),Z=_e(null),M=_e(null),s=_e(null),C=_e(null),h=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r(O).width=r(O).clientWidth,r(O).height=r(O).clientHeight,r(l).width=r(l).clientWidth,r(l).height=r(l).clientHeight,r($).width=r($).clientWidth,r($).height=r($).clientHeight,r(D).width=r(D).clientWidth,r(D).height=r(D).clientHeight,r(H).width=r(H).clientWidth,r(H).height=r(H).clientHeight,r(q).width=r(q).clientWidth,r(q).height=r(q).clientHeight,r(oe).width=r(oe).clientWidth,r(oe).height=r(oe).clientHeight,r(Z).width=r(Z).clientWidth,r(Z).height=r(Z).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight,r(s).width=r(s).clientWidth,r(s).height=r(s).clientHeight,r(C).width=r(C).clientWidth,r(C).height=r(C).clientHeight,r(h).width=r(h).clientWidth,r(h).height=r(h).clientHeight});function o(){var R=`
        attribute vec4 a_Position;
        uniform mat4 u_ModelMatrix;
        void main() {
          gl_Position = u_ModelMatrix * a_Position;
        }
      `,P=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,b=r(h);b.addEventListener("webglcontextlost",ce,!1),b.addEventListener("webglcontextrestored",function(Y){K(b)},!1),K(b);var _=45,B=0,p,G=Date.now();function K(Y){var X=Y.getContext("webgl");if(!X){console.log("Failed to get the rendering context for WebGL");return}if(!Re(X,R,P)){console.log("Failed to intialize shaders.");return}var j=J(X);if(j<0){console.log("Failed to set the positions of the vertices");return}X.clearColor(0,0,0,1);var fe=X.getUniformLocation(X.program,"u_ModelMatrix");if(!fe){console.log("Failed to get the storage location of u_ModelMatrix");return}var ve=new S,z=function(){B=ie(B),w(X,j,B,ve,fe),p=requestAnimationFrame(z,Y)};z()}function ce(Y){cancelAnimationFrame(p),Y.preventDefault()}function J(Y){var X=new Float32Array([0,.5,-.5,-.5,.5,-.5]),j=3,fe=Y.createBuffer();if(!fe)return console.log("Failed to create the buffer object"),-1;Y.bindBuffer(Y.ARRAY_BUFFER,fe),Y.bufferData(Y.ARRAY_BUFFER,X,Y.STATIC_DRAW);var ve=Y.getAttribLocation(Y.program,"a_Position");return ve<0?(console.log("Failed to get the storage location of a_Position"),-1):(Y.vertexAttribPointer(ve,2,Y.FLOAT,!1,0,0),Y.enableVertexAttribArray(ve),Y.bindBuffer(Y.ARRAY_BUFFER,null),j)}function w(Y,X,j,fe,ve){fe.setRotate(j,0,0,1),Y.uniformMatrix4fv(ve,!1,fe.elements),Y.clear(Y.COLOR_BUFFER_BIT),Y.drawArrays(Y.TRIANGLES,0,X)}function ie(Y){var X=Date.now(),j=X-G;G=X;var fe=Y+_*j/1e3;return fe%=360}}function i(){var R=`
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
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=r(C),_=b.getContext("webgl");if(!Re(_,R,P)){console.log("Failed to intialize shaders.");return}_.clearColor(.2,.2,.2,1),_.enable(_.DEPTH_TEST);var B=_.program;if(B.a_Position=_.getAttribLocation(B,"a_Position"),B.a_Normal=_.getAttribLocation(B,"a_Normal"),B.a_Color=_.getAttribLocation(B,"a_Color"),B.u_MvpMatrix=_.getUniformLocation(B,"u_MvpMatrix"),B.u_NormalMatrix=_.getUniformLocation(B,"u_NormalMatrix"),B.a_Position<0||B.a_Normal<0||B.a_Color<0||!B.u_MvpMatrix||!B.u_NormalMatrix)return;var p=j(_,B);if(!p){console.log("Failed to set the vertex information");return}var G=new S;G.setPerspective(30,b.width/b.height,1,5e3),G.lookAt(0,500,200,0,0,0,0,1,0),ve(ke+"/micro-v-static/lab-static/images/webgl-practice/cube.obj",_,p,60,!0);var K=0,ce=30,J=Date.now(),w=new S,ie=new S,Y=new S,X=function(){K=me(K),le(_,_.program,K,G,p),requestAnimationFrame(X,b)};X();function j(t,T){var x=new Object;return x.vertexBuffer=fe(t,T.a_Position,3,t.FLOAT),x.normalBuffer=fe(t,T.a_Normal,3,t.FLOAT),x.colorBuffer=fe(t,T.a_Color,4,t.FLOAT),x.indexBuffer=t.createBuffer(),!x.vertexBuffer||!x.normalBuffer||!x.colorBuffer||!x.indexBuffer?null:(t.bindBuffer(t.ARRAY_BUFFER,null),x)}function fe(t,T,x,k){var L=t.createBuffer();return L?(t.bindBuffer(t.ARRAY_BUFFER,L),t.vertexAttribPointer(T,x,k,!1,0,0),t.enableVertexAttribArray(T),L):(console.log("Failed to create the buffer object"),null)}function ve(t,T,x,k,L){var Te=new XMLHttpRequest;Te.onreadystatechange=function(){Te.readyState===4&&Te.status!==404&&ue(Te.responseText,t,T,x,k,L)},Te.open("GET",t,!0),Te.send()}var z=null,U=null;function ue(t,T,x,k,L,Te){var Me=new Ae(T),Ce=Me.parse(t,L,Te);if(!Ce){z=null,U=null,console.log("OBJ file parsing error.");return}z=Me}function le(t,T,x,k,L){z!=null&&z.isMTLComplete()&&(U=V(t,L,z),z=null),U&&(t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),w.setRotate(x,1,0,0),w.rotate(x,0,1,0),w.rotate(x,0,0,1),Y.setInverseOf(w),Y.transpose(),t.uniformMatrix4fv(T.u_NormalMatrix,!1,Y.elements),ie.set(k),ie.multiply(w),t.uniformMatrix4fv(T.u_MvpMatrix,!1,ie.elements),t.drawElements(t.TRIANGLES,U.indices.length,t.UNSIGNED_SHORT,0))}function V(t,T,x){var k=x.getDrawingInfo();return t.bindBuffer(t.ARRAY_BUFFER,T.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,k.vertices,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,T.normalBuffer),t.bufferData(t.ARRAY_BUFFER,k.normals,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,T.colorBuffer),t.bufferData(t.ARRAY_BUFFER,k.colors,t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,T.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,k.indices,t.STATIC_DRAW),k}function me(t){var T=Date.now(),x=T-J;J=T;var k=t+ce*x/1e3;return k%360}var Ae=function(t){this.fileName=t,this.mtls=new Array(0),this.objects=new Array(0),this.vertices=new Array(0),this.normals=new Array(0)};Ae.prototype.parse=function(t,T,x){var k=t.split(`
`);k.push(null);for(var L=0,Te=null,Me="",Ce,Ue=new se;(Ce=k[L++])!=null;){Ue.init(Ce);var ge=Ue.getWord();if(ge!=null)switch(ge){case"#":continue;case"mtllib":var ye=this.parseMtllib(Ue,this.fileName),Se=new Be;this.mtls.push(Se);var Le=new XMLHttpRequest;Le.onreadystatechange=function(){Le.readyState==4&&(Le.status!=404?he(Le.responseText,Se):Se.complete=!0)},Le.open("GET",ye,!0),Le.send();continue;case"o":case"g":var Ge=this.parseObjectName(Ue);this.objects.push(Ge),Te=Ge;continue;case"v":var $e=this.parseVertex(Ue,T);this.vertices.push($e);continue;case"vn":var Oe=this.parseNormal(Ue);this.normals.push(Oe);continue;case"usemtl":Me=this.parseUsemtl(Ue);continue;case"f":var He=this.parseFace(Ue,Me,this.vertices,x);Te.addFace(He);continue}}return!0},Ae.prototype.parseMtllib=function(t,T){var x=T.lastIndexOf("/"),k="";return x>0&&(k=T.substr(0,x+1)),k+t.getWord()},Ae.prototype.parseObjectName=function(t){var T=t.getWord();return new Fe(T)},Ae.prototype.parseVertex=function(t,T){var x=t.getFloat()*T,k=t.getFloat()*T,L=t.getFloat()*T;return new pe(x,k,L)},Ae.prototype.parseNormal=function(t){var T=t.getFloat(),x=t.getFloat(),k=t.getFloat();return new y(T,x,k)},Ae.prototype.parseUsemtl=function(t){return t.getWord()},Ae.prototype.parseFace=function(t,T,x,k){for(var L=new d(T);;){var Te=t.getWord();if(Te==null)break;var Me=Te.split("/");if(Me.length>=1){var Ce=parseInt(Me[0])-1;L.vIndices.push(Ce)}if(Me.length>=3){var Ue=parseInt(Me[2])-1;L.nIndices.push(Ue)}else L.nIndices.push(-1)}var ge=[x[L.vIndices[0]].x,x[L.vIndices[0]].y,x[L.vIndices[0]].z],ye=[x[L.vIndices[1]].x,x[L.vIndices[1]].y,x[L.vIndices[1]].z],Se=[x[L.vIndices[2]].x,x[L.vIndices[2]].y,x[L.vIndices[2]].z],Le=xe(ge,ye,Se);if(Le==null){if(L.vIndices.length>=4){var Ge=[x[L.vIndices[3]].x,x[L.vIndices[3]].y,x[L.vIndices[3]].z];Le=xe(ye,Se,Ge)}Le==null&&(Le=[0,1,0])}if(k&&(Le[0]=-Le[0],Le[1]=-Le[1],Le[2]=-Le[2]),L.normal=new y(Le[0],Le[1],Le[2]),L.vIndices.length>3){for(var $e=L.vIndices.length-2,Oe=new Array($e*3),He=new Array($e*3),Pe=0;Pe<$e;Pe++)Oe[Pe*3+0]=L.vIndices[0],Oe[Pe*3+1]=L.vIndices[Pe+1],Oe[Pe*3+2]=L.vIndices[Pe+2],He[Pe*3+0]=L.nIndices[0],He[Pe*3+1]=L.nIndices[Pe+1],He[Pe*3+2]=L.nIndices[Pe+2];L.vIndices=Oe,L.nIndices=He}return L.numIndices=L.vIndices.length,L};function he(t,T){var x=t.split(`
`);x.push(null);for(var k=0,L,Te="",Me=new se;(L=x[k++])!=null;){Me.init(L);var Ce=Me.getWord();if(Ce!=null)switch(Ce){case"#":continue;case"newmtl":Te=T.parseNewmtl(Me);continue;case"Kd":if(Te=="")continue;var Ue=T.parseRGB(Me,Te);T.materials.push(Ue),Te="";continue}}T.complete=!0}Ae.prototype.isMTLComplete=function(){if(this.mtls.length==0)return!0;for(var t=0;t<this.mtls.length;t++)if(!this.mtls[t].complete)return!1;return!0},Ae.prototype.findColor=function(t){for(var T=0;T<this.mtls.length;T++)for(var x=0;x<this.mtls[T].materials.length;x++)if(this.mtls[T].materials[x].name==t)return this.mtls[T].materials[x].color;return new Ee(.8,.8,.8,1)},Ae.prototype.getDrawingInfo=function(){for(var t=0,T=0;T<this.objects.length;T++)t+=this.objects[T].numIndices;for(var x=t,k=new Float32Array(x*3),L=new Float32Array(x*3),Te=new Float32Array(x*4),Me=new Uint16Array(t),Ce=0,T=0;T<this.objects.length;T++)for(var Ue=this.objects[T],ge=0;ge<Ue.faces.length;ge++)for(var ye=Ue.faces[ge],Se=this.findColor(ye.materialName),Le=ye.normal,Ge=0;Ge<ye.vIndices.length;Ge++){Me[Ce]=Ce;var $e=ye.vIndices[Ge],Oe=this.vertices[$e];k[Ce*3+0]=Oe.x,k[Ce*3+1]=Oe.y,k[Ce*3+2]=Oe.z,Te[Ce*4+0]=Se.r,Te[Ce*4+1]=Se.g,Te[Ce*4+2]=Se.b,Te[Ce*4+3]=Se.a;var He=ye.nIndices[Ge];if(He>=0){var Pe=this.normals[He];L[Ce*3+0]=Pe.x,L[Ce*3+1]=Pe.y,L[Ce*3+2]=Pe.z}else L[Ce*3+0]=Le.x,L[Ce*3+1]=Le.y,L[Ce*3+2]=Le.z;Ce++}return new re(k,L,Te,Me)};var Be=function(){this.complete=!1,this.materials=new Array(0)};Be.prototype.parseNewmtl=function(t){return t.getWord()},Be.prototype.parseRGB=function(t,T){var x=t.getFloat(),k=t.getFloat(),L=t.getFloat();return new we(T,x,k,L,1)};var we=function(t,T,x,k,L){this.name=t,this.color=new Ee(T,x,k,L)},pe=function(t,T,x){this.x=t,this.y=T,this.z=x},y=function(t,T,x){this.x=t,this.y=T,this.z=x},Ee=function(t,T,x,k){this.r=t,this.g=T,this.b=x,this.a=k},Fe=function(t){this.name=t,this.faces=new Array(0),this.numIndices=0};Fe.prototype.addFace=function(t){this.faces.push(t),this.numIndices+=t.numIndices};var d=function(t){this.materialName=t,t==null&&(this.materialName=""),this.vIndices=new Array(0),this.nIndices=new Array(0)},re=function(t,T,x,k){this.vertices=t,this.normals=T,this.colors=x,this.indices=k},se=function(t){this.str,this.index,this.init(t)};se.prototype.init=function(t){this.str=t,this.index=0},se.prototype.skipDelimiters=function(){for(var t=this.index,T=this.str.length;t<T;t++){var x=this.str.charAt(t);if(!(x=="	"||x==" "||x=="("||x==")"||x=='"'))break}this.index=t},se.prototype.skipToNextWord=function(){this.skipDelimiters();var t=be(this.str,this.index);this.index+=t+1},se.prototype.getWord=function(){this.skipDelimiters();var t=be(this.str,this.index);if(t==0)return null;var T=this.str.substr(this.index,t);return this.index+=t+1,T},se.prototype.getInt=function(){return parseInt(this.getWord())},se.prototype.getFloat=function(){return parseFloat(this.getWord())};function be(t,T){for(var x=T,k=t.length;x<k;x++){var L=t.charAt(x);if(L=="	"||L==" "||L=="("||L==")"||L=='"')break}return x-T}function xe(t,T,x){for(var k=new Float32Array(3),L=new Float32Array(3),Te=0;Te<3;Te++)k[Te]=t[Te]-T[Te],L[Te]=x[Te]-T[Te];var Me=new Float32Array(3);Me[0]=k[1]*L[2]-k[2]*L[1],Me[1]=k[2]*L[0]-k[0]*L[2],Me[2]=k[0]*L[1]-k[1]*L[0];var Ce=new Xe(Me);return Ce.normalize(),Ce.elements}}function m(){var R=`
        attribute vec4 a_Position;
        uniform mat4 u_MvpMatrix;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
        }
      `,P=`
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
      `,b=`
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
      `,_=`
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
      `,B=2048,p=2048,G=0,K=40,ce=2,J=r(s),w=J.getContext("webgl"),ie=je(w,R,P);ie.a_Position=w.getAttribLocation(ie,"a_Position"),ie.u_MvpMatrix=w.getUniformLocation(ie,"u_MvpMatrix");var Y=je(w,b,_);if(Y.a_Position=w.getAttribLocation(Y,"a_Position"),Y.a_Color=w.getAttribLocation(Y,"a_Color"),Y.u_MvpMatrix=w.getUniformLocation(Y,"u_MvpMatrix"),Y.u_MvpMatrixFromLight=w.getUniformLocation(Y,"u_MvpMatrixFromLight"),Y.u_ShadowMap=w.getUniformLocation(Y,"u_ShadowMap"),Y.a_Position<0||Y.a_Color<0||!Y.u_MvpMatrix||!Y.u_MvpMatrixFromLight||!Y.u_ShadowMap){console.log("Failed to get the storage location of attribute or uniform variable from normalProgram");return}var X=d(w),j=Fe(w);if(!X||!j){console.log("Failed to set the vertex information");return}var fe=be(w);if(!fe){console.log("Failed to initialize frame buffer object");return}w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,fe.texture),w.clearColor(0,0,0,1),w.enable(w.DEPTH_TEST);var ve=new S;ve.setPerspective(70,B/p,1,200),ve.lookAt(G,K,ce,0,0,0,0,1,0);var z=new S;z.setPerspective(45,J.width/J.height,1,100),z.lookAt(0,7,9,0,0,0,0,1,0);var U=0,ue=new S,le=new S,V=new S,me=new S,Ae=40,he=Date.now(),Be=function(){U=xe(U),w.bindFramebuffer(w.FRAMEBUFFER,fe),w.viewport(0,0,p,p),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(ie),we(w,ie,X,U,ve),ue.set(me),pe(w,ie,j,ve),le.set(me),w.bindFramebuffer(w.FRAMEBUFFER,null),w.viewport(0,0,J.width,J.height),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(Y),w.uniform1i(Y.u_ShadowMap,0),w.uniformMatrix4fv(Y.u_MvpMatrixFromLight,!1,ue.elements),we(w,Y,X,U,z),w.uniformMatrix4fv(Y.u_MvpMatrixFromLight,!1,le.elements),pe(w,Y,j,z),window.requestAnimationFrame(Be,J)};Be();function we(t,T,x,k,L){V.setRotate(k,0,1,0),y(t,T,x,L)}function pe(t,T,x,k){V.setRotate(-45,0,1,1),y(t,T,x,k)}function y(t,T,x,k){Ee(t,T.a_Position,x.vertexBuffer),T.a_Color!=null&&Ee(t,T.a_Color,x.colorBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,x.indexBuffer),me.set(k),me.multiply(V),t.uniformMatrix4fv(T.u_MvpMatrix,!1,me.elements),t.drawElements(t.TRIANGLES,x.numIndices,t.UNSIGNED_BYTE,0)}function Ee(t,T,x){t.bindBuffer(t.ARRAY_BUFFER,x),t.vertexAttribPointer(T,x.num,x.type,!1,0,0),t.enableVertexAttribArray(T)}function Fe(t){var T=new Float32Array([3,-1.7,2.5,-3,-1.7,2.5,-3,-1.7,-2.5,3,-1.7,-2.5]),x=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]),k=new Uint8Array([0,1,2,0,2,3]),L=new Object;return L.vertexBuffer=re(t,T,3,t.FLOAT),L.colorBuffer=re(t,x,3,t.FLOAT),L.indexBuffer=se(t,k,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=k.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function d(t){var T=new Float32Array([-.8,3.5,0,.8,3.5,0,0,3.5,1.8]),x=new Float32Array([1,.5,0,1,.5,0,1,0,0]),k=new Uint8Array([0,1,2]),L=new Object;return L.vertexBuffer=re(t,T,3,t.FLOAT),L.colorBuffer=re(t,x,3,t.FLOAT),L.indexBuffer=se(t,k,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=k.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function re(t,T,x,k){var L=t.createBuffer();return L?(t.bindBuffer(t.ARRAY_BUFFER,L),t.bufferData(t.ARRAY_BUFFER,T,t.STATIC_DRAW),L.num=x,L.type=k,L):(console.log("Failed to create the buffer object"),null)}function se(t,T,x){var k=t.createBuffer();return k?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,k),t.bufferData(t.ELEMENT_ARRAY_BUFFER,T,t.STATIC_DRAW),k.type=x,k):(console.log("Failed to create the buffer object"),null)}function be(t){var T,x,k,L=function(){return T&&t.deleteFramebuffer(T),x&&t.deleteTexture(x),k&&t.deleteRenderbuffer(k),null};if(T=t.createFramebuffer(),!T)return console.log("Failed to create frame buffer object"),L();if(x=t.createTexture(),!x)return console.log("Failed to create texture object"),L();if(t.bindTexture(t.TEXTURE_2D,x),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,B,p,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),k=t.createRenderbuffer(),!k)return console.log("Failed to create renderbuffer object"),L();t.bindRenderbuffer(t.RENDERBUFFER,k),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,B,p),t.bindFramebuffer(t.FRAMEBUFFER,T),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,x,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,k);var Te=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.FRAMEBUFFER_COMPLETE!==Te?(console.log("Frame buffer object is incomplete: "+Te.toString()),L()):(T.texture=x,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),T)}function xe(t){var T=Date.now(),x=T-he;he=T;var k=t+Ae*x/1e3;return k%360}}function W(){var R=`
        attribute vec4 a_Position;
        uniform mat4 u_MvpMatrix;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
        }
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        void main() {
          gl_FragColor = vec4(gl_FragCoord.z, 0.0, 0.0, 0.0);
        }
      `,b=`
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
      `,_=`
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
      `,B=2048,p=2048,G=0,K=7,ce=2,J=r(M),w=J.getContext("webgl");if(!w){console.log("Failed to get the rendering context for WebGL");return}var ie=je(w,R,P);if(ie.a_Position=w.getAttribLocation(ie,"a_Position"),ie.u_MvpMatrix=w.getUniformLocation(ie,"u_MvpMatrix"),ie.a_Position<0||!ie.u_MvpMatrix){console.log("Failed to get the storage location of attribute or uniform variable from shadowProgram");return}var Y=je(w,b,_);if(Y.a_Position=w.getAttribLocation(Y,"a_Position"),Y.a_Color=w.getAttribLocation(Y,"a_Color"),Y.u_MvpMatrix=w.getUniformLocation(Y,"u_MvpMatrix"),Y.u_MvpMatrixFromLight=w.getUniformLocation(Y,"u_MvpMatrixFromLight"),Y.u_ShadowMap=w.getUniformLocation(Y,"u_ShadowMap"),Y.a_Position<0||Y.a_Color<0||!Y.u_MvpMatrix||!Y.u_MvpMatrixFromLight||!Y.u_ShadowMap){console.log("Failed to get the storage location of attribute or uniform variable from normalProgram");return}var X=d(w),j=Fe(w);if(!X||!j){console.log("Failed to set the vertex information");return}var fe=be(w);if(!fe){console.log("Failed to initialize frame buffer object");return}w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,fe.texture),w.clearColor(0,0,0,1),w.enable(w.DEPTH_TEST);var ve=new S;ve.setPerspective(70,B/p,1,100),ve.lookAt(G,K,ce,0,0,0,0,1,0);var z=new S;z.setPerspective(45,J.width/J.height,1,100),z.lookAt(0,7,9,0,0,0,0,1,0);var U=40,ue=Date.now(),le=0,V=new S,me=new S,Ae=new S,he=new S,Be=function(){le=xe(le),w.bindFramebuffer(w.FRAMEBUFFER,fe),w.viewport(0,0,p,p),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(ie),pe(w,ie,X,le,ve),Ae.set(me),y(w,ie,j,ve),he.set(me),w.bindFramebuffer(w.FRAMEBUFFER,null),w.viewport(0,0,J.width,J.height),w.clear(w.COLOR_BUFFER_BIT|w.DEPTH_BUFFER_BIT),w.useProgram(Y),w.uniform1i(Y.u_ShadowMap,0),w.uniformMatrix4fv(Y.u_MvpMatrixFromLight,!1,Ae.elements),pe(w,Y,X,le,z),w.uniformMatrix4fv(Y.u_MvpMatrixFromLight,!1,he.elements),y(w,Y,j,z),requestAnimationFrame(Be,J)};Be();function we(t,T,x,k){Ee(t,T.a_Position,x.vertexBuffer),T.a_Color!=null&&Ee(t,T.a_Color,x.colorBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,x.indexBuffer),me.set(k),me.multiply(V),t.uniformMatrix4fv(T.u_MvpMatrix,!1,me.elements),t.drawElements(t.TRIANGLES,x.numIndices,t.UNSIGNED_BYTE,0)}function pe(t,T,x,k,L){V.setRotate(k,0,1,0),we(t,T,x,L)}function y(t,T,x,k){V.setRotate(-45,0,1,1),we(t,T,x,k)}function Ee(t,T,x){t.bindBuffer(t.ARRAY_BUFFER,x),t.vertexAttribPointer(T,x.num,x.type,!1,0,0),t.enableVertexAttribArray(T)}function Fe(t){var T=new Float32Array([3,-1.7,2.5,-3,-1.7,2.5,-3,-1.7,-2.5,3,-1.7,-2.5]),x=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]),k=new Uint8Array([0,1,2,0,2,3]),L=new Object;return L.vertexBuffer=re(t,T,3,t.FLOAT),L.colorBuffer=re(t,x,3,t.FLOAT),L.indexBuffer=se(t,k,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=k.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function d(t){var T=new Float32Array([-.8,3.5,0,.8,3.5,0,0,3.5,1.8]),x=new Float32Array([1,.5,0,1,.5,0,1,0,0]),k=new Uint8Array([0,1,2]),L=new Object;return L.vertexBuffer=re(t,T,3,t.FLOAT),L.colorBuffer=re(t,x,3,t.FLOAT),L.indexBuffer=se(t,k,t.UNSIGNED_BYTE),!L.vertexBuffer||!L.colorBuffer||!L.indexBuffer?null:(L.numIndices=k.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),L)}function re(t,T,x,k){var L=t.createBuffer();return L?(t.bindBuffer(t.ARRAY_BUFFER,L),t.bufferData(t.ARRAY_BUFFER,T,t.STATIC_DRAW),L.num=x,L.type=k,L):(console.log("Failed to create the buffer object"),null)}function se(t,T,x){var k=t.createBuffer();return k?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,k),t.bufferData(t.ELEMENT_ARRAY_BUFFER,T,t.STATIC_DRAW),k.type=x,k):(console.log("Failed to create the buffer object"),null)}function be(t){var T,x,k,L=function(){return T&&t.deleteFramebuffer(T),x&&t.deleteTexture(x),k&&t.deleteRenderbuffer(k),null};if(T=t.createFramebuffer(),!T)return console.log("Failed to create frame buffer object"),L();if(x=t.createTexture(),!x)return console.log("Failed to create texture object"),L();if(t.bindTexture(t.TEXTURE_2D,x),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,B,p,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),k=t.createRenderbuffer(),!k)return console.log("Failed to create renderbuffer object"),L();t.bindRenderbuffer(t.RENDERBUFFER,k),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,B,p),t.bindFramebuffer(t.FRAMEBUFFER,T),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,x,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,k);var Te=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.FRAMEBUFFER_COMPLETE!==Te?(console.log("Frame buffer object is incomplete: "+Te.toString()),L()):(T.texture=x,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),T)}function xe(t){var T=Date.now(),x=T-ue;ue=T;var k=t+U*x/1e3;return k%360}}function E(){var R=`
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
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform sampler2D u_Sampler;
        varying vec2 v_TexCoord;
        void main() {
          gl_FragColor = texture2D(u_Sampler, v_TexCoord);
        }
      `,b=256,_=256,B=r(Z),p=B.getContext("webgl");Re(p,R,P);var G=p.program;G.a_Position=p.getAttribLocation(G,"a_Position"),G.a_TexCoord=p.getAttribLocation(G,"a_TexCoord"),G.u_MvpMatrix=p.getUniformLocation(G,"u_MvpMatrix");var K=ue(p),ce=le(p),J=Ae(p),w=he(p);p.enable(p.DEPTH_TEST);var ie=new S;ie.setPerspective(30,B.width/B.height,1,100),ie.lookAt(0,0,7,0,0,0,0,1,0);var Y=new S;Y.setPerspective(30,b/_,1,100),Y.lookAt(0,2,7,0,0,0,0,1,0);var X=0,j=new S,fe=new S,ve=30,z=Date.now(),U=function(){X=Fe(X),Be(p,B,w,ce,K,X,J,ie,Y),window.requestAnimationFrame(U,B)};U();function ue(d){var re=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),se=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),be=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),xe=new Object;return xe.vertexBuffer=V(d,re,3,d.FLOAT),xe.texCoordBuffer=V(d,se,2,d.FLOAT),xe.indexBuffer=me(d,be,d.UNSIGNED_BYTE),xe.numIndices=be.length,d.bindBuffer(d.ARRAY_BUFFER,null),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,null),xe}function le(d){var re=new Float32Array([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),se=new Float32Array([1,1,0,1,0,0,1,0]),be=new Uint8Array([0,1,2,0,2,3]),xe=new Object;return xe.vertexBuffer=V(d,re,3,d.FLOAT),xe.texCoordBuffer=V(d,se,2,d.FLOAT),xe.indexBuffer=me(d,be,d.UNSIGNED_BYTE),xe.numIndices=be.length,d.bindBuffer(d.ARRAY_BUFFER,null),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,null),xe}function V(d,re,se,be){var xe=d.createBuffer();return d.bindBuffer(d.ARRAY_BUFFER,xe),d.bufferData(d.ARRAY_BUFFER,re,d.STATIC_DRAW),xe.num=se,xe.type=be,xe}function me(d,re,se){var be=d.createBuffer();return d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,be),d.bufferData(d.ELEMENT_ARRAY_BUFFER,re,d.STATIC_DRAW),be.type=se,be}function Ae(d){var re=d.createTexture(),se=d.getUniformLocation(d.program,"u_Sampler"),be=new Image;return be.onload=function(){d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,1),d.bindTexture(d.TEXTURE_2D,re),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,be),d.uniform1i(se,0),d.bindTexture(d.TEXTURE_2D,null)},be.src=ke+"/micro-v-static/lab-static/images/webgl-practice/sky-roof.jpg",re}function he(d){var re,se,be,xe=function(){return re&&d.deleteFramebuffer(re),se&&d.deleteTexture(se),be&&d.deleteRenderbuffer(be),null};re=d.createFramebuffer(),se=d.createTexture(),d.bindTexture(d.TEXTURE_2D,se),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,b,_,0,d.RGBA,d.UNSIGNED_BYTE,null),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR),re.texture=se,be=d.createRenderbuffer(),d.bindRenderbuffer(d.RENDERBUFFER,be),d.renderbufferStorage(d.RENDERBUFFER,d.DEPTH_COMPONENT16,b,_),d.bindFramebuffer(d.FRAMEBUFFER,re),d.framebufferTexture2D(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.TEXTURE_2D,se,0),d.framebufferRenderbuffer(d.FRAMEBUFFER,d.DEPTH_ATTACHMENT,d.RENDERBUFFER,be);var t=d.checkFramebufferStatus(d.FRAMEBUFFER);return d.FRAMEBUFFER_COMPLETE!==t?(console.log("Frame buffer object is incomplete: "+t.toString()),xe()):(d.bindFramebuffer(d.FRAMEBUFFER,null),d.bindTexture(d.TEXTURE_2D,null),d.bindRenderbuffer(d.RENDERBUFFER,null),re)}function Be(d,re,se,be,xe,t,T,x,k){d.bindFramebuffer(d.FRAMEBUFFER,se),d.viewport(0,0,b,_),d.clearColor(0,.4,.4,1),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),we(d,d.program,xe,t,T,k),d.bindFramebuffer(d.FRAMEBUFFER,null),d.viewport(0,0,re.width,re.height),d.clearColor(0,0,0,1),d.clear(d.COLOR_BUFFER_BIT|d.DEPTH_BUFFER_BIT),pe(d,d.program,be,t,se.texture,x)}function we(d,re,se,be,xe,t){j.setRotate(20,1,0,0),j.rotate(be,0,1,0),fe.set(t),fe.multiply(j),d.uniformMatrix4fv(re.u_MvpMatrix,!1,fe.elements),y(d,re,se,xe)}function pe(d,re,se,be,xe,t){j.setTranslate(0,0,1),j.rotate(20,1,0,0),j.rotate(be,0,1,0),fe.set(t),fe.multiply(j),d.uniformMatrix4fv(re.u_MvpMatrix,!1,fe.elements),y(d,re,se,xe)}function y(d,re,se,be){Ee(d,re.a_Position,se.vertexBuffer),Ee(d,re.a_TexCoord,se.texCoordBuffer),d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,be),d.bindBuffer(d.ELEMENT_ARRAY_BUFFER,se.indexBuffer),d.drawElements(d.TRIANGLES,se.numIndices,se.indexBuffer.type,0)}function Ee(d,re,se){d.bindBuffer(d.ARRAY_BUFFER,se),d.vertexAttribPointer(re,se.num,se.type,!1,0,0),d.enableVertexAttribArray(re)}function Fe(d){var re=Date.now(),se=re-z;z=re;var be=d+ve*se/1e3;return be%360}}function N(){const R=`
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
      `,P=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,b=`
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
      `,_=`
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
      `,B=r(oe),p=B.getContext("webgl"),G=pe(p,R,P),K=pe(p,b,_);G.a_Position=p.getAttribLocation(G,"a_Position"),G.a_Normal=p.getAttribLocation(G,"a_Normal"),G.u_MvpMatrix=p.getUniformLocation(G,"u_MvpMatrix"),G.u_NormalMatrix=p.getUniformLocation(G,"u_NormalMatrix"),K.a_Position=p.getAttribLocation(K,"a_Position"),K.a_Normal=p.getAttribLocation(K,"a_Normal"),K.a_TexCoord=p.getAttribLocation(K,"a_TexCoord"),K.u_MvpMatrix=p.getUniformLocation(K,"u_MvpMatrix"),K.u_NormalMatrix=p.getUniformLocation(K,"u_NormalMatrix"),K.u_Sampler=p.getUniformLocation(K,"u_Sampler");const ce=he(p),J=Ae(p,K);p.enable(p.DEPTH_TEST),p.clearColor(0,0,0,1);const w=new S;w.setPerspective(30,B.width/B.height,1,100),w.lookAt(0,0,15,0,0,0,0,1,0);const ie=new S,Y=new S,X=new S;let j=0;const fe=30;let ve=Date.now();const z=function(){j=me(j),p.clear(p.COLOR_BUFFER_BIT|p.DEPTH_BUFFER_BIT),ue(p,G,ce,-2,j,w),U(p,K,ce,J,2,j,w),requestAnimationFrame(z,B)};z();function U(y,Ee,Fe,d,re,se,be){y.useProgram(Ee),V(y,Ee.a_Position,Fe.vertexBuffer),V(y,Ee.a_Normal,Fe.normalBuffer),V(y,Ee.a_TexCoord,Fe.texCoordBuffer),y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,Fe.indexBuffer),y.activeTexture(y.TEXTURE0),y.bindTexture(y.TEXTURE_2D,d),le(y,Ee,Fe,re,se,be)}function ue(y,Ee,Fe,d,re,se){y.useProgram(Ee),V(y,Ee.a_Position,Fe.vertexBuffer),V(y,Ee.a_Normal,Fe.normalBuffer),y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,Fe.indexBuffer),le(y,Ee,Fe,d,re,se)}function le(y,Ee,Fe,d,re,se){ie.setTranslate(d,0,0),ie.rotate(20,1,0,0),ie.rotate(re,0,1,0),X.setInverseOf(ie),X.transpose(),y.uniformMatrix4fv(Ee.u_NormalMatrix,!1,X.elements),Y.set(se),Y.multiply(ie),y.uniformMatrix4fv(Ee.u_MvpMatrix,!1,Y.elements),y.drawElements(y.TRIANGLES,Fe.numIndices,Fe.indexBuffer.type,0)}function V(y,Ee,Fe){y.bindBuffer(y.ARRAY_BUFFER,Fe),y.vertexAttribPointer(Ee,Fe.num,Fe.type,!1,0,0),y.enableVertexAttribArray(Ee)}function me(y){const Ee=Date.now(),Fe=Ee-ve;return ve=Ee,(y+fe*Fe/1e3)%360}function Ae(y,Ee){const Fe=y.createTexture(),d=new Image;return d.addEventListener("load",()=>{y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,1),y.activeTexture(y.TEXTURE0),y.bindTexture(y.TEXTURE_2D,Fe),y.texParameteri(y.TEXTURE_2D,y.TEXTURE_MIN_FILTER,y.LINEAR),y.texImage2D(y.TEXTURE_2D,0,y.RGBA,y.RGBA,y.UNSIGNED_BYTE,d),y.useProgram(Ee),y.uniform1i(Ee.u_Sampler,0),y.bindTexture(y.TEXTURE_2D,null)}),d.src=ke+"/micro-v-static/lab-static/images/webgl-practice/xdd.jpg",Fe}function he(y){const Ee=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),Fe=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),d=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),re=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),se={vertexBuffer:Be(y,Ee,3,y.FLOAT),normalBuffer:Be(y,Fe,3,y.FLOAT),texCoordBuffer:Be(y,d,2,y.FLOAT),indexBuffer:we(y,re,y.UNSIGNED_BYTE),numIndices:re.length};return y.bindBuffer(y.ARRAY_BUFFER,null),y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,null),se}function Be(y,Ee,Fe,d){const re=y.createBuffer();return y.bindBuffer(y.ARRAY_BUFFER,re),y.bufferData(y.ARRAY_BUFFER,Ee,y.STATIC_DRAW),re.num=Fe,re.type=d,re}function we(y,Ee,Fe){var d=y.createBuffer();return y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,d),y.bufferData(y.ELEMENT_ARRAY_BUFFER,Ee,y.STATIC_DRAW),d.type=Fe,d}function pe(y,Ee,Fe){const d=y.createShader(y.VERTEX_SHADER),re=y.createShader(y.FRAGMENT_SHADER);y.shaderSource(d,Ee),y.shaderSource(re,Fe),y.compileShader(d),y.compileShader(re);const se=y.getShaderParameter(d,y.COMPILE_STATUS),be=y.getShaderParameter(re,y.COMPILE_STATUS);if(!se){const T=y.getShaderInfoLog(d);console.error(T),y.deleteShader(d);return}if(!be){const T=y.getShaderInfoLog(re);console.error(T),y.deleteShader(re);return}const xe=y.createProgram();if(y.attachShader(xe,d),y.attachShader(xe,re),y.linkProgram(xe),!y.getProgramParameter(xe,y.LINK_STATUS)){const T=y.getProgramInfoLog(xe);console.error(T),y.deleteShader(d),y.deleteShader(re),y.deleteProgram(xe);return}return xe}}function A(){var R=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_mvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_mvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=r(q),_=b.getContext("webgl");Re(_,R,P);var B=ie(_);_.clearColor(0,0,0,1),_.enable(_.BLEND),_.enable(_.DEPTH_TEST),_.blendFunc(_.SRC_ALPHA,_.ONE_MINUS_SRC_ALPHA);var p=.2,G=.25,K=.25,ce=_.getUniformLocation(_.program,"u_mvpMatrix"),J=new S,w=new S;w.setOrtho(-1,1,-1,1,0,2),Y(_,B,ce,J);function ie(X){var j=new Float32Array([0,.5,0,.4,.4,1,.6,-.5,-.5,0,.4,.4,1,.6,.5,-.5,0,.4,.4,1,.6,0,.5,-.4,.4,1,.4,.1,-.5,-.5,-.4,.4,1,.4,.1,.5,-.5,-.4,.4,1,.4,.1,.5,.4,-.2,1,.4,.4,1,-.5,.4,-.2,1,.4,.4,1,0,-.6,-.2,1,.4,.4,1]),fe=9,ve=X.createBuffer();X.bindBuffer(X.ARRAY_BUFFER,ve),X.bufferData(X.ARRAY_BUFFER,j,X.STATIC_DRAW);var z=j.BYTES_PER_ELEMENT,U=X.getAttribLocation(X.program,"a_Position");X.vertexAttribPointer(U,3,X.FLOAT,!1,z*7,0),X.enableVertexAttribArray(U);var ue=X.getAttribLocation(X.program,"a_Color");return X.vertexAttribPointer(ue,4,X.FLOAT,!1,z*7,z*3),X.enableVertexAttribArray(ue),X.bindBuffer(X.ARRAY_BUFFER,null),fe}function Y(X,j,fe,ve){ve.setLookAt(p,G,K,0,0,0,0,1,0);const z=new S(w);z.multiply(ve),X.uniformMatrix4fv(fe,!1,z.elements),X.clear(X.COLOR_BUFFER_BIT|X.DEPTH_BUFFER_BIT),X.drawArrays(X.TRIANGLES,6,9),X.depthMask(!1),X.drawArrays(X.TRIANGLES,3,6),X.drawArrays(X.TRIANGLES,0,3),X.depthMask(!0)}}function F(){var R=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=r(H),_=b.getContext("webgl");Re(_,R,P);var B=K(_);_.clearColor(0,0,0,1),_.enable(_.BLEND),_.blendFunc(_.SRC_ALPHA,_.ONE_MINUS_SRC_ALPHA);var p=_.getUniformLocation(_.program,"u_MvpMatrix"),G=new S;G.setPerspective(30,1,1,100),G.lookAt(3,3,7,0,0,0,0,1,0),_.uniformMatrix4fv(p,!1,G.elements),_.clear(_.COLOR_BUFFER_BIT),_.drawElements(_.TRIANGLES,B,_.UNSIGNED_BYTE,0);function K(J){var w=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),ie=new Float32Array([.5,.5,1,.4,.5,.5,1,.4,.5,.5,1,.4,.5,.5,1,.4,.5,1,.5,.4,.5,1,.5,.4,.5,1,.5,.4,.5,1,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,1,.4,1,1,1,.4,1,1,1,.4,1,1,1,.4,.5,1,1,.4,.5,1,1,.4,.5,1,1,.4,.5,1,1,.4]),Y=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),X=J.createBuffer();return!X||!ce(J,w,3,J.FLOAT,"a_Position")||!ce(J,ie,4,J.FLOAT,"a_Color")?-1:(J.bindBuffer(J.ARRAY_BUFFER,null),J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,X),J.bufferData(J.ELEMENT_ARRAY_BUFFER,Y,J.STATIC_DRAW),Y.length)}function ce(J,w,ie,Y,X){var j=J.createBuffer();if(!j)return console.log("Failed to create the buffer object"),!1;J.bindBuffer(J.ARRAY_BUFFER,j),J.bufferData(J.ARRAY_BUFFER,w,J.STATIC_DRAW);var fe=J.getAttribLocation(J.program,X);return fe<0?(console.log("Failed to get the storage location of "+X),!1):(J.vertexAttribPointer(fe,ie,Y,!1,0,0),J.enableVertexAttribArray(fe),J.bindBuffer(J.ARRAY_BUFFER,null),!0)}}function u(){var R=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_mvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_mvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=r(D),_=b.getContext("webgl");Re(_,R,P);var B=ie(_);_.clearColor(0,0,0,1),_.enable(_.BLEND),_.blendFunc(_.SRC_ALPHA,_.ONE);var p=.2,G=.25,K=.25,ce=_.getUniformLocation(_.program,"u_mvpMatrix"),J=new S;window.onkeydown=function(j){Y(j,_,B,ce,J)};var w=new S;w.setOrtho(-1,1,-1,1,0,2),X(_,B,ce,J);function ie(j){var fe=new Float32Array([0,.5,-.4,.4,1,.4,.6,-.5,-.5,-.4,.4,1,.4,.6,.5,-.5,-.4,.4,1,.4,.6,.5,.4,-.2,1,.4,.4,.6,-.5,.4,-.2,1,.4,.4,.6,0,-.6,-.2,1,.4,.4,.6,0,.5,0,.4,.4,1,.6,-.5,-.5,0,.4,.4,1,.6,.5,-.5,0,.4,.4,1,.6]),ve=9,z=j.createBuffer();j.bindBuffer(j.ARRAY_BUFFER,z),j.bufferData(j.ARRAY_BUFFER,fe,j.STATIC_DRAW);var U=fe.BYTES_PER_ELEMENT,ue=j.getAttribLocation(j.program,"a_Position");j.vertexAttribPointer(ue,3,j.FLOAT,!1,U*7,0),j.enableVertexAttribArray(ue);var le=j.getAttribLocation(j.program,"a_Color");return j.vertexAttribPointer(le,4,j.FLOAT,!1,U*7,U*3),j.enableVertexAttribArray(le),j.bindBuffer(j.ARRAY_BUFFER,null),ve}function Y(j,fe,ve,z,U){if(j.keyCode==39)p+=.01;else if(j.keyCode==37)p-=.01;else return;X(fe,ve,z,U)}function X(j,fe,ve,z){z.setLookAt(p,G,K,0,0,0,0,1,0);const U=new S(w);U.multiply(z),j.uniformMatrix4fv(ve,!1,U.elements),j.clear(j.COLOR_BUFFER_BIT|j.DEPTH_BUFFER_BIT),j.drawArrays(j.TRIANGLES,0,fe)}}function te(){var R=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 50.0;
        }
      `,P=`
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
      `,b=r($),_=_t(b);Re(_,R,P);var B=p(_);_.clearColor(0,0,0,1),_.clear(_.COLOR_BUFFER_BIT),_.drawArrays(_.POINTS,0,B);function p(G){var K=new Float32Array([0,.5,-.5,-.5,.5,-.5]),ce=3,J=G.createBuffer();G.bindBuffer(G.ARRAY_BUFFER,J),G.bufferData(G.ARRAY_BUFFER,K,G.STATIC_DRAW);var w=G.getAttribLocation(G.program,"a_Position");return G.vertexAttribPointer(w,2,G.FLOAT,!1,0,0),G.bindBuffer(G.ARRAY_BUFFER,null),G.enableVertexAttribArray(w),ce}}function I(){const R=`
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
      `,P=`
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
      `,_=r(l).getContext("webgl");Re(_,R,P);const B=fe(_);var p=_.getUniformLocation(_.program,"u_MvpMatrix"),G=_.getUniformLocation(_.program,"u_ModelMatrix"),K=_.getUniformLocation(_.program,"u_Eye"),ce=_.getUniformLocation(_.program,"u_FogColor"),J=_.getUniformLocation(_.program,"u_FogRange");const w=new Float32Array([1,1,1]),ie=new Float32Array([20,20,20,1]);_.uniform3fv(ce,w),_.uniform4fv(K,ie);const Y=new Float32Array([25,50]);_.uniform2fv(J,Y),_.clearColor(0,0,0,1),_.enable(_.DEPTH_TEST);const X=new S;X.setScale(5,5,5),_.uniformMatrix4fv(G,!1,X.elements);const j=new S;j.setPerspective(60,1,1,50),j.lookAt(ie[0],ie[1],ie[2],0,0,0,0,1,0),j.multiply(X),_.uniformMatrix4fv(p,!1,j.elements),_.clear(_.COLOR_BUFFER_BIT|_.DEPTH_BUFFER_BIT),_.drawElements(_.TRIANGLES,B,_.UNSIGNED_BYTE,0);function fe(ve){var z=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),U=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),ue=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),le=ve.createBuffer();return le?(ee(ve,z,3,ve.FLOAT,"a_Position"),ee(ve,U,3,ve.FLOAT,"a_Color"),ve.bindBuffer(ve.ELEMENT_ARRAY_BUFFER,le),ve.bufferData(ve.ELEMENT_ARRAY_BUFFER,ue,ve.STATIC_DRAW),ue.length):-1}}function g(){var R=`
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
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=20,_=r(c),B=r(O),p=_.getContext("webgl"),G=B.getContext("2d"),K=new S,ce=Date.now();Re(p,R,P);var J=fe(p);p.clearColor(0,0,0,1),p.enable(p.DEPTH_TEST);var w=p.getUniformLocation(p.program,"u_MvpMatrix"),ie=p.getUniformLocation(p.program,"u_Clicked"),Y=new S;Y.setPerspective(30,_.width/_.height,1,100),Y.lookAt(0,0,7,0,0,0,0,1,0),p.uniform1i(ie,0);var X=0;B.onmousedown=function(V){const{layerX:me,layerY:Ae}=V;var he=ve(p,J,me,Ae,X,ie,Y,w);he&&console.log("点中了盒子")};var j=function(){X=ue(X),U(G,X),z(p,J,X,Y,w),requestAnimationFrame(j,_)};j();function fe(V){var me=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),Ae=new Float32Array([.2,.58,.82,.2,.58,.82,.2,.58,.82,.2,.58,.82,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),he=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);if(!le(V,me,3,V.FLOAT,"a_Position")||!le(V,Ae,3,V.FLOAT,"a_Color"))return-1;var Be=V.createBuffer();return Be?(V.bindBuffer(V.ELEMENT_ARRAY_BUFFER,Be),V.bufferData(V.ELEMENT_ARRAY_BUFFER,he,V.STATIC_DRAW),he.length):-1}function ve(V,me,Ae,he,Be,we,pe,y){var Ee=!1;V.uniform1i(we,1),z(V,me,Be,pe,y);var Fe=new Uint8Array(4);return V.readPixels(Ae,he,1,1,V.RGBA,V.UNSIGNED_BYTE,Fe),Fe[0]==255&&(Ee=!0),V.uniform1i(we,0),z(V,me,Be,pe,y),Ee}function z(V,me,Ae,he,Be){K.set(he),K.rotate(Ae,1,0,0),K.rotate(Ae,0,1,0),K.rotate(Ae,0,0,1),V.uniformMatrix4fv(Be,!1,K.elements),V.clear(V.COLOR_BUFFER_BIT|V.DEPTH_BUFFER_BIT),V.drawElements(V.TRIANGLES,me,V.UNSIGNED_BYTE,0)}function U(V,me){V.clearRect(0,0,400,400),V.beginPath(),V.moveTo(120,10),V.lineTo(200,150),V.lineTo(40,150),V.closePath(),V.strokeStyle="rgba(255, 255, 255, 1)",V.stroke(),V.font='18px "Times New Roman"',V.fillStyle="rgba(255, 255, 255, 1)",V.fillText("HUD: Head Up Display",40,180),V.fillText("Current Angle: "+Math.floor(me),40,240)}function ue(V){var me=Date.now(),Ae=me-ce;ce=me;var he=V+b*Ae/1e3;return he%360}function le(V,me,Ae,he,Be){var we=V.createBuffer();if(!we)return console.log("Failed to create the buffer object"),!1;V.bindBuffer(V.ARRAY_BUFFER,we),V.bufferData(V.ARRAY_BUFFER,me,V.STATIC_DRAW);var pe=V.getAttribLocation(V.program,Be);return pe<0?(console.log("Failed to get the storage location of "+Be),!1):(V.vertexAttribPointer(pe,Ae,he,!1,0,0),V.enableVertexAttribArray(pe),V.bindBuffer(V.ARRAY_BUFFER,null),!0)}}function ae(){var R=`
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
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=20,_=new S,B=Date.now(),p=r(f),G=p.getContext("webgl");Re(G,R,P);var K=X(G);G.clearColor(0,0,0,1),G.enable(G.DEPTH_TEST);var ce=G.getUniformLocation(G.program,"u_MvpMatrix"),J=G.getUniformLocation(G.program,"u_PickedFace"),w=new S;w.setPerspective(30,p.width/p.height,1,100),w.lookAt(0,0,7,0,0,0,0,1,0),G.uniform1i(J,-1);var ie=0;p.onmousedown=function(U){const{layerX:ue,layerY:le}=U;var V=j(G,K,ue,le,ie,J,w,ce);G.uniform1i(J,V),fe(G,K,ie,w,ce)};var Y=function(){ie=ve(ie),fe(G,K,ie,w,ce),requestAnimationFrame(Y,p)};Y();function X(U){var ue=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),le=new Float32Array([.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.27,.58,.82,.27,.58,.82,.27,.58,.82,.27,.58,.82,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),V=new Uint8Array([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6]),me=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),Ae=U.createBuffer();return!z(U,ue,U.FLOAT,3,"a_Position")||!z(U,le,U.FLOAT,3,"a_Color")||!z(U,V,U.UNSIGNED_BYTE,1,"a_Face")?-1:(U.bindBuffer(U.ARRAY_BUFFER,null),U.bindBuffer(U.ELEMENT_ARRAY_BUFFER,Ae),U.bufferData(U.ELEMENT_ARRAY_BUFFER,me,U.STATIC_DRAW),me.length)}function j(U,ue,le,V,me,Ae,he,Be){var we=new Uint8Array(4);return U.uniform1i(Ae,0),fe(U,ue,me,he,Be),U.readPixels(le,V,1,1,U.RGBA,U.UNSIGNED_BYTE,we),we[3]}function fe(U,ue,le,V,me){_.set(V),_.rotate(le,1,0,0),_.rotate(le,0,1,0),_.rotate(le,0,0,1),U.uniformMatrix4fv(me,!1,_.elements),U.clear(U.COLOR_BUFFER_BIT|U.DEPTH_BUFFER_BIT),U.drawElements(U.TRIANGLES,ue,U.UNSIGNED_BYTE,0)}function ve(U){var ue=Date.now(),le=ue-B;B=ue;var V=U+b*le/1e3;return V%360}function z(U,ue,le,V,me){var Ae=U.createBuffer();if(!Ae)return console.log("Failed to create the buffer object"),!1;U.bindBuffer(U.ARRAY_BUFFER,Ae),U.bufferData(U.ARRAY_BUFFER,ue,U.STATIC_DRAW);var he=U.getAttribLocation(U.program,me);return he<0?(console.log("Failed to get the storage location of "+me),!1):(U.vertexAttribPointer(he,V,le,!1,0,0),U.enableVertexAttribArray(he),!0)}}function Q(){var R=`
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
      `,P=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=20,_=r(e),B=_.getContext("webgl");Re(B,R,P);var p=X(B);B.clearColor(0,0,0,1),B.enable(B.DEPTH_TEST);var G=B.getUniformLocation(B.program,"u_MvpMatrix"),K=B.getUniformLocation(B.program,"u_Clicked"),ce=new S;ce.setPerspective(30,_.width/_.height,1,100),ce.lookAt(0,0,7,0,0,0,0,1,0),B.uniform1i(K,0);var J=0;_.onmousedown=function(U){const{layerX:ue,layerY:le}=U;var V=fe(B,p,ue,le,J,K,ce,G);V&&Ze.info("点中了盒子")};var w=new S,ie=Date.now(),Y=function(){J=z(J),ve(B,p,J,ce,G),requestAnimationFrame(Y,_)};Y();function X(U){var ue=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),le=new Float32Array([.2,.58,.82,.2,.58,.82,.2,.58,.82,.2,.58,.82,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),V=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);j(U,ue,U.FLOAT,3,"a_Position"),j(U,le,U.FLOAT,3,"a_Color");var me=U.createBuffer();return U.bindBuffer(U.ELEMENT_ARRAY_BUFFER,me),U.bufferData(U.ELEMENT_ARRAY_BUFFER,V,U.STATIC_DRAW),V.length}function j(U,ue,le,V,me){var Ae=U.createBuffer();U.bindBuffer(U.ARRAY_BUFFER,Ae),U.bufferData(U.ARRAY_BUFFER,ue,U.STATIC_DRAW);var he=U.getAttribLocation(U.program,me);return U.vertexAttribPointer(he,V,le,!1,0,0),U.enableVertexAttribArray(he),!0}function fe(U,ue,le,V,me,Ae,he,Be){var we=!1;U.uniform1i(Ae,1),ve(U,ue,me,he,Be);var pe=new Uint8Array(4);return U.readPixels(le,V,1,1,U.RGBA,U.UNSIGNED_BYTE,pe),pe[0]==255&&pe[1]==0&&pe[2]==0&&(we=!0),U.uniform1i(Ae,0),ve(U,ue,me,he,Be),we}function ve(U,ue,le,V,me){w.set(V),w.rotate(le,1,0,0),w.rotate(le,0,1,0),w.rotate(le,0,0,1),U.uniformMatrix4fv(me,!1,w.elements),U.clear(U.COLOR_BUFFER_BIT|U.DEPTH_BUFFER_BIT),U.drawElements(U.TRIANGLES,ue,U.UNSIGNED_BYTE,0)}function z(U){var ue=Date.now(),le=ue-ie;ie=ue;var V=U+b*le/1e3;return V%360}}function ne(){const R=`
      attribute vec4 a_Position;
      attribute vec2 a_TexCoord;
      uniform mat4 u_MvpMatrix;
      varying vec2 v_TexCoord;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_TexCoord = a_TexCoord;
      }
      `,P=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      uniform sampler2D u_Sampler;
      varying vec2 v_TexCoord;
      void main() {
        gl_FragColor = texture2D(u_Sampler, v_TexCoord);
      }
      `,b=r(n),_=b.getContext("webgl");Re(_,R,P);const B=ve(_);_.clearColor(0,0,0,1),_.enable(_.DEPTH_TEST),_.enable(_.POLYGON_OFFSET_FILL);const p=_.getUniformLocation(_.program,"u_MvpMatrix");_.getAttribLocation(_.program,"a_Position"),_.getAttribLocation(_.program,"a_TexCoord");const G=_.getUniformLocation(_.program,"u_Sampler"),K=new S;K.setPerspective(30,1,1,100),K.lookAt(3,3,7,0,0,0,0,1,0);const ce=new S(K);let J=0,w=0,ie=0,Y=0,X=!1;fe(_),j(),b.addEventListener("mousedown",z=>{const{layerX:U,layerY:ue}=z;ie=U,Y=ue,X=!0}),b.addEventListener("mousemove",z=>{if(!X)return;const{layerX:U,layerY:ue}=z,le=(U-ie)/b.width*360,V=(ue-Y)/b.height*360;J=J+V,w=w+le,j(),ie=U,Y=ue}),b.addEventListener("mouseup",z=>{ie=0,Y=0,X=!1}),b.addEventListener("mouseleave",z=>{ie=0,Y=0,X=!1});function j(){ce.set(K),ce.rotate(J,1,0,0),ce.rotate(w,0,1,0),_.uniformMatrix4fv(p,!1,ce.elements),_.clear(_.COLOR_BUFFER_BIT|_.DEPTH_BUFFER_BIT),_.drawElements(_.TRIANGLES,B,_.UNSIGNED_BYTE,0)}function fe(z){const U=new Image;U.onload=function(){const ue=z.createTexture();z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,1),z.activeTexture(z.TEXTURE0),z.bindTexture(z.TEXTURE_2D,ue),z.texParameteri(z.TEXTURE_2D,z.TEXTURE_MIN_FILTER,z.LINEAR),z.texImage2D(z.TEXTURE_2D,0,z.RGB,z.RGB,z.UNSIGNED_BYTE,U),z.uniform1i(G,0),j()},U.src=ke+"/micro-v-static/lab-static/images/webgl-practice/sy.jpg"}function ve(z){const U=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),ue=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),le=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);ee(z,U,3,z.FLOAT,"a_Position"),ee(z,ue,2,z.FLOAT,"a_TexCoord");const V=z.createBuffer();return z.bindBuffer(z.ELEMENT_ARRAY_BUFFER,V),z.bufferData(z.ELEMENT_ARRAY_BUFFER,le,z.STATIC_DRAW),le.length}}function ee(R,P,b,_,B){var p=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,p),R.bufferData(R.ARRAY_BUFFER,P,R.STATIC_DRAW);var G=R.getAttribLocation(R.program,B);return R.vertexAttribPointer(G,b,_,!1,0,0),R.enableVertexAttribArray(G),!0}return(R,P)=>{const b=We("dbtap");return Ne(),Ye("div",null,[P[15]||(P[15]=a("header",null,"第十章：高级技术",-1)),a("div",Yr,[a("div",Gr,[P[0]||(P[0]=a("div",{class:"desc"}," 通过鼠标拖拽旋转物体，监听鼠标的按下和放开和移动，计算xy方向上的移动距离，转化为新的旋转矩阵 ",-1)),a("div",Hr,[de(a("canvas",{onDblclickOnce:ne,ref_key:"gl38",ref:n},null,544),[[b,ne]])])]),a("div",kr,[P[1]||(P[1]=a("div",{class:"desc"}," 鼠标选中物体，点击时，将物体绘制为单一颜色，然后判断点击的位置是否为这个颜色还是背景色来判断是否选中 ",-1)),a("div",Vr,[de(a("canvas",{onDblclickOnce:Q,ref_key:"gl39",ref:e},null,544),[[b,Q]])])]),a("div",Wr,[P[2]||(P[2]=a("div",{class:"desc"},"鼠标选中进阶，选中某个面",-1)),a("div",gr,[de(a("canvas",{onDblclickOnce:ae,ref_key:"gl40",ref:f},null,544),[[b,ae]])])]),a("div",$r,[P[3]||(P[3]=a("div",{class:"desc"}," 平视显示器HUD，由两个重叠的canvas实现，2dcanvas默认背景透明，3d也可以设置透明背景色来达到3d浮层的效果 ",-1)),a("div",Xr,[de(a("canvas",{onDblclickOnce:g,ref_key:"gl41",ref:c},null,544),[[b,g]]),de(a("canvas",{onDblclickOnce:g,ref_key:"gl41Hud",ref:O,class:"gl41Hud"},null,544),[[b,g]])])]),a("div",jr,[P[4]||(P[4]=a("div",{class:"desc"}," 雾化效果，分为线性雾化，即距离越远越模糊，颜色=表面颜色x距离占比+雾的颜色x另一边距离占比 ",-1)),a("div",zr,[de(a("canvas",{onDblclickOnce:I,ref_key:"gl42",ref:l},null,544),[[b,I]])])]),a("div",qr,[P[5]||(P[5]=a("div",{class:"desc"}," 绘制圆形的点，gl_PointCoord来访问点内部的坐标范围为0-1，处理每个片元，判断片元距离中心点的距离，半径外的点就discard ",-1)),a("div",Zr,[de(a("canvas",{onDblclickOnce:te,ref_key:"gl43",ref:$},null,544),[[b,te]])])]),a("div",Kr,[P[6]||(P[6]=a("div",{class:"desc"},"阿尔法混合，透明度混合",-1)),a("div",Jr,[de(a("canvas",{onDblclickOnce:u,ref_key:"gl44",ref:D},null,544),[[b,u]])])]),a("div",Qr,[P[7]||(P[7]=a("div",{class:"desc"}," 阿尔法混合，半透明立方体。需要关闭隐藏面消除功能，因为此功能会丢弃不会绘制的片元，此时需要从后往前绘制 ",-1)),a("div",eo,[de(a("canvas",{onDblclickOnce:F,ref_key:"gl45",ref:H},null,544),[[b,F]])])]),a("div",to,[P[8]||(P[8]=a("div",{class:"desc"}," 同时绘制不透明和透明的对象。开启隐藏面消除时，绘制A，然后绘制B,如果A在前面会，丢弃B，如果B在前面，会覆盖A，同时更新深度缓冲区（写操作）。绘制所有不透明物体后（A），锁定深度缓冲区的写操作，绘制B，如果B在后面，丢弃，符合预期，如果B在前面，由于半透明会进行混合。同时由于深度缓冲区被锁定了写操作，绘制B时，即使B在前面也不会更新颜色缓冲区，也就不会影响（半透明后面的会被丢弃）后续的绘制 ",-1)),a("div",ro,[de(a("canvas",{onDblclickOnce:A,ref_key:"gl46",ref:q},null,544),[[b,A]])])]),a("div",oo,[P[9]||(P[9]=a("div",{class:"desc"},"切换着色器，使用gl.useProgram来切换使用多个着色器",-1)),a("div",ao,[de(a("canvas",{onDblclickOnce:N,ref_key:"gl47",ref:oe},null,544),[[b,N]])])]),a("div",io,[P[10]||(P[10]=a("div",{class:"desc"}," 帧缓冲区包含颜色关联对象和深度关联对象，其中颜色对象可以是普通的也可以是纹理。在帧缓冲区中的绘制叫做离屏绘制，绘制的内容不会实时显示在页面上 ",-1)),a("div",no,[de(a("canvas",{onDblclickOnce:E,ref_key:"gl48",ref:Z},null,544),[[b,E]])])]),a("div",so,[P[11]||(P[11]=a("div",{class:"desc"}," 实现阴影，需要使用两个着色器，一个用来计算阴影（视点移动到光源点，看不到的片元即阴影），一个用来绘制，将片元z值与1中的z值做对比，如果在阴影处则用较暗的颜色绘制。涉及着色器切换和帧缓冲区的内容 ",-1)),a("div",co,[de(a("canvas",{onDblclickOnce:W,ref_key:"gl49",ref:M},null,544),[[b,W]])])]),a("div",fo,[P[12]||(P[12]=a("div",{class:"desc"},"绘制高精度阴影",-1)),a("div",uo,[de(a("canvas",{onDblclickOnce:m,ref_key:"gl50",ref:s},null,544),[[b,m]])])]),a("div",_o,[P[13]||(P[13]=a("div",{class:"desc"},"加载模型，obj文件和mlt文件，obj定义顶点和向量，mlt定义颜色",-1)),a("div",vo,[de(a("canvas",{onDblclickOnce:i,ref_key:"gl51",ref:C},null,544),[[b,i]])])]),a("div",lo,[P[14]||(P[14]=a("div",{class:"desc"}," 环境丢失，context-lost，电脑休眠或者其他程序接管了GPU会导致环境丢失，运行数据丢失。重要，WEBGL context丢失，主要是靠canvas的上下文丢失和上下文恢复事件 ",-1)),a("div",mo,[de(a("canvas",{onDblclickOnce:o,ref_key:"gl52",ref:h},null,544),[[b,o]])])])])])}}}),Ro=ze(Ao,[["__scopeId","data-v-53545daa"]]),Eo={class:"example"},Fo={class:"item"},bo={class:"canvas"},To={class:"item"},xo={class:"canvas"},ho={class:"item"},Bo={class:"canvas"},Co=Ie({__name:"attachment",setup(v){const n=_e(null),e=_e(null),f=_e(null);Ve(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight});function c(){var $="",D="",H=r(f),q=H.getContext("webgl");M(q,ke+"/micro-v-static/lab-static/images/webgl-practice/colored-triangle.vert","v"),M(q,ke+"/micro-v-static/lab-static/images/webgl-practice/colored-triangle.frag","f");function oe(C){if(!Re(C,$,D)){console.log("Failed to intialize shaders.");return}var h=Z(C);if(h<0){console.log("Failed to set the vertex information");return}C.clearColor(0,0,0,1),C.clear(C.COLOR_BUFFER_BIT),C.drawArrays(C.TRIANGLES,0,h)}function Z(C){var h=new Float32Array([0,.5,1,0,0,-.5,-.5,0,1,0,.5,-.5,0,0,1]),o=3,i=C.createBuffer();if(!i)return console.log("Failed to create the buffer object"),!1;C.bindBuffer(C.ARRAY_BUFFER,i),C.bufferData(C.ARRAY_BUFFER,h,C.STATIC_DRAW);var m=h.BYTES_PER_ELEMENT,W=C.getAttribLocation(C.program,"a_Position");if(W<0)return console.log("Failed to get the storage location of a_Position"),-1;C.vertexAttribPointer(W,2,C.FLOAT,!1,m*5,0),C.enableVertexAttribArray(W);var E=C.getAttribLocation(C.program,"a_Color");return E<0?(console.log("Failed to get the storage location of a_Color"),-1):(C.vertexAttribPointer(E,3,C.FLOAT,!1,m*5,m*2),C.enableVertexAttribArray(E),o)}function M(C,h,o){var i=new XMLHttpRequest;i.onreadystatechange=function(){i.readyState===4&&i.status!==404&&s(C,i.responseText,o)},i.open("GET",h,!0),i.send()}function s(C,h,o){o=="v"?$=h:o=="f"&&(D=h),$&&D&&oe(C)}}function O(){var $=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,D=`
          #ifdef GL_ES
          precision mediump float;
          #endif
          varying vec4 v_Color;
          void main() {
            gl_FragColor = v_Color;
          }
        `,H=r(e),q=H.getContext("webgl");Re(q,$,D);var oe=s(q);q.enable(q.DEPTH_TEST),q.clearColor(0,0,0,1);var Z=q.getUniformLocation(q.program,"u_MvpMatrix"),M=new S;M.setOrtho(-1,1,-1,1,0,1),q.uniformMatrix4fv(Z,!1,M.elements),q.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT),q.drawArrays(q.TRIANGLES,0,oe);function s(C){var h=new Float32Array([0,.5,-.1,0,0,1,-.5,-.5,-.1,0,0,1,.5,-.5,-.1,1,1,0,.5,.4,-.5,1,1,0,-.5,.4,-.5,1,0,0,0,-.6,-.5,1,0,0]),o=3,i=3,m=6,W=C.createBuffer();C.bindBuffer(C.ARRAY_BUFFER,W),C.bufferData(C.ARRAY_BUFFER,h,C.STATIC_DRAW);var E=h.BYTES_PER_ELEMENT,N=o+i,A=C.getAttribLocation(C.program,"a_Position");C.vertexAttribPointer(A,o,C.FLOAT,!1,E*N,0),C.enableVertexAttribArray(A);var F=C.getAttribLocation(C.program,"a_Color");return C.vertexAttribPointer(F,i,C.FLOAT,!1,E*N,E*o),C.enableVertexAttribArray(F),m}}function l(){var $=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main() {
          gl_Position = a_Position;
          v_Color = a_Color;
        }
      `,D=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,H=r(n),q=H.getContext("webgl");Re(q,$,D);var oe=Z(q);q.clearColor(0,0,0,1),q.clear(q.COLOR_BUFFER_BIT),q.drawArrays(q.TRIANGLES,0,oe);function Z(M){var s=new Float32Array([0,.5,-.1,0,0,1,-.5,-.5,-.1,0,0,1,.5,-.5,-.1,1,1,0,.5,.4,-.5,1,1,0,-.5,.4,-.5,1,0,0,0,-.6,-.5,1,0,0]),C=3,h=3,o=6,i=M.createBuffer();M.bindBuffer(M.ARRAY_BUFFER,i),M.bufferData(M.ARRAY_BUFFER,s,M.STATIC_DRAW);var m=s.BYTES_PER_ELEMENT,W=C+h,E=M.getAttribLocation(M.program,"a_Position");M.vertexAttribPointer(E,C,M.FLOAT,!1,m*W,0),M.enableVertexAttribArray(E);var N=M.getAttribLocation(M.program,"a_Color");return M.vertexAttribPointer(N,h,M.FLOAT,!1,m*W,m*C),M.enableVertexAttribArray(N),o}}return($,D)=>{const H=We("dbtap");return Ne(),Ye("div",null,[D[3]||(D[3]=a("header",null,"附录",-1)),a("div",Eo,[a("div",Fo,[D[0]||(D[0]=a("div",{class:"desc"}," 左手坐标系还是右手坐标系，右手z指向屏幕外，左手指向屏幕内，如果是左手，那么z值小的在z值大的前面，也就是右手坐标系看到的反面 ",-1)),a("div",bo,[de(a("canvas",{onDblclickOnce:l,ref_key:"gl53",ref:n},null,544),[[H,l]])])]),a("div",To,[D[1]||(D[1]=a("div",{class:"desc"}," webgl默认都使用右手坐标系,但隐藏面消除是使用的左手坐标系,所以通过投影矩阵将看的方向反正 ",-1)),a("div",xo,[de(a("canvas",{onDblclickOnce:O,ref_key:"gl54",ref:e},null,544),[[H,O]])])]),a("div",ho,[D[2]||(D[2]=a("div",{class:"desc"},"从文件中加载着色器代码",-1)),a("div",Bo,[de(a("canvas",{onDblclickOnce:c,ref_key:"gl55",ref:f},null,544),[[H,c]])])])])])}}}),po={class:"WebGLPractice"},Lo=Ie({__name:"index",setup(v){const{canvasClickTip:n}=Je();return n(),(e,f)=>{const c=Ke("a-empty");return Ne(),Ye("div",po,[a("div",null,[f[0]||(f[0]=a("header",null,"第一章：WebGL概述",-1)),De(c)]),De(ut),De(Pt),De(It),De(Zt),a("div",null,[f[1]||(f[1]=a("header",null,"第六章：OpenGL ES着色器语言（GLSL ES）",-1)),De(c)]),De(Fr),De(Ur),De(Nr),De(Ro),De(Co)])}}}),Po=ze(Lo,[["__scopeId","data-v-caa3dcf4"]]);export{Po as default};
