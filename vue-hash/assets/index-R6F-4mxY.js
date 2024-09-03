import{d as Ge,r as ue,I as ge,h as r,v as $e,o as He,e as ke,f as i,w as de,p as Ze,q as Ke,_ as Je,y as tt,g as Oe,n as rt}from"./index-e5pysWWB.js";import{u as ot}from"./useMessageTip-jozMMdUL.js";const at=i("header",null,"第二章：入门",-1),it={class:"example"},nt={class:"item"},st=i("div",{class:"desc"},"webgl设置背景色",-1),ct={class:"canvas"},ft={class:"item"},_t=i("div",{class:"desc"},"webgl绘制一个点(位置等信息硬编码在glsl中)",-1),ut={class:"canvas"},vt={class:"item"},lt=i("div",{class:"desc"},"webgl绘制一个点(位置等信息从js传入glsl)",-1),dt={class:"canvas"},mt={class:"item"},At=i("div",{class:"desc"},"webgl数据传输(顶点着色器),在鼠标点击位置绘制点",-1),Rt={class:"canvas"},Et={class:"item"},Ft=i("div",{class:"desc"},"webgl数据传输(片元着色器),在鼠标点击位置绘制点,点的颜色由js传入",-1),bt={class:"canvas"},ht=Ge({__name:"chapter-02",setup(v){const n=ue(null),e=ue(null),f=ue(null),s=ue(null),M=ue(null);ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(s).width=r(s).clientWidth,r(s).height=r(s).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight});let m=null;function z(){var N=r(n);m=N.getContext("webgl"),m&&(m.clearColor(.5,.2,.1,1),m.clear(m.COLOR_BUFFER_BIT))}function U(){var N=`void main() {
          gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
          gl_PointSize = 10.0;
        }`,c=`void main() {
          gl_FragColor = vec4(1.0, 0.5, 0.0, 1.0);
        }`,$=r(e);m=$.getContext("webgl"),m&&ne(m,N,c)&&(m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.POINTS,0,1))}function I(){var N=`
      attribute vec4 a_Position;
      void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
      }
      `,c=`
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `,$=r(f);if(m=$.getContext("webgl"),!!m&&ne(m,N,c)){var b=m.getAttribLocation(m.program,"a_Position");b<0||(m.vertexAttrib3f(b,.5,.2,.1),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.POINTS,0,1))}}function ae(){var N=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,c=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,$=r(s);if(m=$.getContext("webgl"),!m||!ne(m,N,c))return;var b=m.getAttribLocation(m.program,"a_Position");if(b<0)return;const o=[];$.addEventListener("mousedown",a=>{let k=a.layerX,R=a.layerY;const K=$.width,d=$.height;k=(k-K/2)/(K/2),R=-((R-d/2)/(d/2)),o.push([k,R]),m.clear(m.COLOR_BUFFER_BIT);for(const H of o){const[l,u]=H;m.vertexAttrib2f(b,l,u),m.drawArrays(m.POINTS,0,1)}}),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT)}function j(){var N=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,c=`
        precision mediump float;
        uniform vec4 u_FragColor;
        void main() {
          gl_FragColor = u_FragColor;
        }
      `,$=r(M);if(m=$.getContext("webgl"),!m||!ne(m,N,c))return;var b=m.getAttribLocation(m.program,"a_Position");if(b<0)return;var o=m.getUniformLocation(m.program,"u_FragColor");if(!o)return;const a=[];$.addEventListener("mousedown",k=>{let R=k.layerX,K=k.layerY;const d=$.width,H=$.height;R=(R-d/2)/(d/2),K=-((K-H/2)/(H/2)),a.push({x:R,y:K,r:Math.random(),g:Math.random(),b:Math.random(),a:Math.random()}),m.clear(m.COLOR_BUFFER_BIT);for(const l of a){const{x:u,y:X,r:S,g:W,b:J,a:te}=l;m.vertexAttrib2f(b,u,X),m.uniform4f(o,S,W,J,te),m.drawArrays(m.POINTS,0,1)}}),m.clearColor(0,0,0,1),m.clear(m.COLOR_BUFFER_BIT)}function ne(N,c,$){const b=N.createShader(N.VERTEX_SHADER),o=N.createShader(N.FRAGMENT_SHADER);N.shaderSource(b,c),N.shaderSource(o,$),N.compileShader(b),N.compileShader(o);const a=N.getShaderParameter(b,N.COMPILE_STATUS),k=N.getShaderParameter(o,N.COMPILE_STATUS);if(!a)return N.getShaderInfoLog(b),N.deleteShader(b);if(!k){const d=N.getShaderInfoLog(o);return console.error(d),N.deleteShader(o)}const R=N.createProgram();if(N.attachShader(R,b),N.attachShader(R,o),N.linkProgram(R),!N.getProgramParameter(R,N.LINK_STATUS)){const d=N.getProgramInfoLog();console.error(d),N.deleteShader(b),N.deleteShader(o),N.deleteProgram(R);return}return N.useProgram(R),N.program=R,!0}return(N,c)=>{const $=$e("dbtap");return He(),ke("div",null,[at,i("div",it,[i("div",nt,[st,i("div",ct,[de(i("canvas",{onDblclickOnce:z,ref_key:"gl01",ref:n},null,544),[[$,z]])])]),i("div",ft,[_t,i("div",ut,[de(i("canvas",{onDblclickOnce:U,ref_key:"gl02",ref:e},null,544),[[$,U]])])]),i("div",vt,[lt,i("div",dt,[de(i("canvas",{onDblclickOnce:I,ref_key:"gl03",ref:f},null,544),[[$,I]])])]),i("div",mt,[At,i("div",Rt,[de(i("canvas",{onDblclickOnce:ae,ref_key:"gl04",ref:s},null,544),[[$,ae]])])]),i("div",Et,[Ft,i("div",bt,[de(i("canvas",{onDblclickOnce:j,ref_key:"gl05",ref:M},null,544),[[$,j]])])])])])}}});function Re(v,n,e){var f=qe(v,n,e);return f?(v.useProgram(f),v.program=f,!0):(console.log("Failed to create program"),!1)}function qe(v,n,e){var f=Qe(v,v.VERTEX_SHADER,n),s=Qe(v,v.FRAGMENT_SHADER,e);if(!f||!s)return null;var M=v.createProgram();if(!M)return null;v.attachShader(M,f),v.attachShader(M,s),v.linkProgram(M);var m=v.getProgramParameter(M,v.LINK_STATUS);if(!m){var z=v.getProgramInfoLog(M);return console.log("Failed to link program: "+z),v.deleteProgram(M),v.deleteShader(s),v.deleteShader(f),null}return M}function Qe(v,n,e){var f=v.createShader(n);if(f==null)return console.log("unable to create shader"),null;v.shaderSource(f,e),v.compileShader(f);var s=v.getShaderParameter(f,v.COMPILE_STATUS);if(!s){var M=v.getShaderInfoLog(f);return console.log("Failed to compile shader: "+M),v.deleteShader(f),null}return f}function Tt(v,n){var e=Ct.setupWebGL(v);return e||null}const C=function(v){var n,e,f;if(v&&typeof v=="object"&&v.hasOwnProperty("elements")){for(e=v.elements,f=new Float32Array(16),n=0;n<16;++n)f[n]=e[n];this.elements=f}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])};C.prototype.setIdentity=function(){var v=this.elements;return v[0]=1,v[4]=0,v[8]=0,v[12]=0,v[1]=0,v[5]=1,v[9]=0,v[13]=0,v[2]=0,v[6]=0,v[10]=1,v[14]=0,v[3]=0,v[7]=0,v[11]=0,v[15]=1,this};C.prototype.set=function(v){var n,e,f;if(e=v.elements,f=this.elements,e!==f){for(n=0;n<16;++n)f[n]=e[n];return this}};C.prototype.concat=function(v){var n,e,f,s,M,m,z,U;if(e=this.elements,f=this.elements,s=v.elements,e===s)for(s=new Float32Array(16),n=0;n<16;++n)s[n]=e[n];for(n=0;n<4;n++)M=f[n],m=f[n+4],z=f[n+8],U=f[n+12],e[n]=M*s[0]+m*s[1]+z*s[2]+U*s[3],e[n+4]=M*s[4]+m*s[5]+z*s[6]+U*s[7],e[n+8]=M*s[8]+m*s[9]+z*s[10]+U*s[11],e[n+12]=M*s[12]+m*s[13]+z*s[14]+U*s[15];return this};C.prototype.multiply=C.prototype.concat;C.prototype.multiplyVector3=function(v){var n=this.elements,e=v.elements,f=new ze,s=f.elements;return s[0]=e[0]*n[0]+e[1]*n[4]+e[2]*n[8]+n[12],s[1]=e[0]*n[1]+e[1]*n[5]+e[2]*n[9]+n[13],s[2]=e[0]*n[2]+e[1]*n[6]+e[2]*n[10]+n[14],f};C.prototype.multiplyVector4=function(v){var n=this.elements,e=v.elements,f=new xt,s=f.elements;return s[0]=e[0]*n[0]+e[1]*n[4]+e[2]*n[8]+e[3]*n[12],s[1]=e[0]*n[1]+e[1]*n[5]+e[2]*n[9]+e[3]*n[13],s[2]=e[0]*n[2]+e[1]*n[6]+e[2]*n[10]+e[3]*n[14],s[3]=e[0]*n[3]+e[1]*n[7]+e[2]*n[11]+e[3]*n[15],f};C.prototype.transpose=function(){var v,n;return v=this.elements,n=v[1],v[1]=v[4],v[4]=n,n=v[2],v[2]=v[8],v[8]=n,n=v[3],v[3]=v[12],v[12]=n,n=v[6],v[6]=v[9],v[9]=n,n=v[7],v[7]=v[13],v[13]=n,n=v[11],v[11]=v[14],v[14]=n,this};C.prototype.setInverseOf=function(v){var n,e,f,s,M;if(e=v.elements,f=this.elements,s=new Float32Array(16),s[0]=e[5]*e[10]*e[15]-e[5]*e[11]*e[14]-e[9]*e[6]*e[15]+e[9]*e[7]*e[14]+e[13]*e[6]*e[11]-e[13]*e[7]*e[10],s[4]=-e[4]*e[10]*e[15]+e[4]*e[11]*e[14]+e[8]*e[6]*e[15]-e[8]*e[7]*e[14]-e[12]*e[6]*e[11]+e[12]*e[7]*e[10],s[8]=e[4]*e[9]*e[15]-e[4]*e[11]*e[13]-e[8]*e[5]*e[15]+e[8]*e[7]*e[13]+e[12]*e[5]*e[11]-e[12]*e[7]*e[9],s[12]=-e[4]*e[9]*e[14]+e[4]*e[10]*e[13]+e[8]*e[5]*e[14]-e[8]*e[6]*e[13]-e[12]*e[5]*e[10]+e[12]*e[6]*e[9],s[1]=-e[1]*e[10]*e[15]+e[1]*e[11]*e[14]+e[9]*e[2]*e[15]-e[9]*e[3]*e[14]-e[13]*e[2]*e[11]+e[13]*e[3]*e[10],s[5]=e[0]*e[10]*e[15]-e[0]*e[11]*e[14]-e[8]*e[2]*e[15]+e[8]*e[3]*e[14]+e[12]*e[2]*e[11]-e[12]*e[3]*e[10],s[9]=-e[0]*e[9]*e[15]+e[0]*e[11]*e[13]+e[8]*e[1]*e[15]-e[8]*e[3]*e[13]-e[12]*e[1]*e[11]+e[12]*e[3]*e[9],s[13]=e[0]*e[9]*e[14]-e[0]*e[10]*e[13]-e[8]*e[1]*e[14]+e[8]*e[2]*e[13]+e[12]*e[1]*e[10]-e[12]*e[2]*e[9],s[2]=e[1]*e[6]*e[15]-e[1]*e[7]*e[14]-e[5]*e[2]*e[15]+e[5]*e[3]*e[14]+e[13]*e[2]*e[7]-e[13]*e[3]*e[6],s[6]=-e[0]*e[6]*e[15]+e[0]*e[7]*e[14]+e[4]*e[2]*e[15]-e[4]*e[3]*e[14]-e[12]*e[2]*e[7]+e[12]*e[3]*e[6],s[10]=e[0]*e[5]*e[15]-e[0]*e[7]*e[13]-e[4]*e[1]*e[15]+e[4]*e[3]*e[13]+e[12]*e[1]*e[7]-e[12]*e[3]*e[5],s[14]=-e[0]*e[5]*e[14]+e[0]*e[6]*e[13]+e[4]*e[1]*e[14]-e[4]*e[2]*e[13]-e[12]*e[1]*e[6]+e[12]*e[2]*e[5],s[3]=-e[1]*e[6]*e[11]+e[1]*e[7]*e[10]+e[5]*e[2]*e[11]-e[5]*e[3]*e[10]-e[9]*e[2]*e[7]+e[9]*e[3]*e[6],s[7]=e[0]*e[6]*e[11]-e[0]*e[7]*e[10]-e[4]*e[2]*e[11]+e[4]*e[3]*e[10]+e[8]*e[2]*e[7]-e[8]*e[3]*e[6],s[11]=-e[0]*e[5]*e[11]+e[0]*e[7]*e[9]+e[4]*e[1]*e[11]-e[4]*e[3]*e[9]-e[8]*e[1]*e[7]+e[8]*e[3]*e[5],s[15]=e[0]*e[5]*e[10]-e[0]*e[6]*e[9]-e[4]*e[1]*e[10]+e[4]*e[2]*e[9]+e[8]*e[1]*e[6]-e[8]*e[2]*e[5],M=e[0]*s[0]+e[1]*s[4]+e[2]*s[8]+e[3]*s[12],M===0)return this;for(M=1/M,n=0;n<16;n++)f[n]=s[n]*M;return this};C.prototype.invert=function(){return this.setInverseOf(this)};C.prototype.setOrtho=function(v,n,e,f,s,M){var m,z,U,I;if(v===n||e===f||s===M)throw"null frustum";return z=1/(n-v),U=1/(f-e),I=1/(M-s),m=this.elements,m[0]=2*z,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=2*U,m[6]=0,m[7]=0,m[8]=0,m[9]=0,m[10]=-2*I,m[11]=0,m[12]=-(n+v)*z,m[13]=-(f+e)*U,m[14]=-(M+s)*I,m[15]=1,this};C.prototype.ortho=function(v,n,e,f,s,M){return this.concat(new C().setOrtho(v,n,e,f,s,M))};C.prototype.setFrustum=function(v,n,e,f,s,M){var m,z,U,I;if(v===n||f===e||s===M)throw"null frustum";if(s<=0)throw"near <= 0";if(M<=0)throw"far <= 0";return z=1/(n-v),U=1/(f-e),I=1/(M-s),m=this.elements,m[0]=2*s*z,m[1]=0,m[2]=0,m[3]=0,m[4]=0,m[5]=2*s*U,m[6]=0,m[7]=0,m[8]=(n+v)*z,m[9]=(f+e)*U,m[10]=-(M+s)*I,m[11]=-1,m[12]=0,m[13]=0,m[14]=-2*s*M*I,m[15]=0,this};C.prototype.frustum=function(v,n,e,f,s,M){return this.concat(new C().setFrustum(v,n,e,f,s,M))};C.prototype.setPerspective=function(v,n,e,f){var s,M,m,z;if(e===f||n===0)throw"null frustum";if(e<=0)throw"near <= 0";if(f<=0)throw"far <= 0";if(v=Math.PI*v/180/2,m=Math.sin(v),m===0)throw"null frustum";return M=1/(f-e),z=Math.cos(v)/m,s=this.elements,s[0]=z/n,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=z,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=-(f+e)*M,s[11]=-1,s[12]=0,s[13]=0,s[14]=-2*e*f*M,s[15]=0,this};C.prototype.perspective=function(v,n,e,f){return this.concat(new C().setPerspective(v,n,e,f))};C.prototype.setScale=function(v,n,e){var f=this.elements;return f[0]=v,f[4]=0,f[8]=0,f[12]=0,f[1]=0,f[5]=n,f[9]=0,f[13]=0,f[2]=0,f[6]=0,f[10]=e,f[14]=0,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this};C.prototype.scale=function(v,n,e){var f=this.elements;return f[0]*=v,f[4]*=n,f[8]*=e,f[1]*=v,f[5]*=n,f[9]*=e,f[2]*=v,f[6]*=n,f[10]*=e,f[3]*=v,f[7]*=n,f[11]*=e,this};C.prototype.setTranslate=function(v,n,e){var f=this.elements;return f[0]=1,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=1,f[9]=0,f[13]=n,f[2]=0,f[6]=0,f[10]=1,f[14]=e,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this};C.prototype.translate=function(v,n,e){var f=this.elements;return f[12]+=f[0]*v+f[4]*n+f[8]*e,f[13]+=f[1]*v+f[5]*n+f[9]*e,f[14]+=f[2]*v+f[6]*n+f[10]*e,f[15]+=f[3]*v+f[7]*n+f[11]*e,this};C.prototype.setRotate=function(v,n,e,f){var s,M,m,z,U,I,ae,j,ne,N,c,$;return v=Math.PI*v/180,s=this.elements,M=Math.sin(v),m=Math.cos(v),n!==0&&e===0&&f===0?(n<0&&(M=-M),s[0]=1,s[4]=0,s[8]=0,s[12]=0,s[1]=0,s[5]=m,s[9]=-M,s[13]=0,s[2]=0,s[6]=M,s[10]=m,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1):n===0&&e!==0&&f===0?(e<0&&(M=-M),s[0]=m,s[4]=0,s[8]=M,s[12]=0,s[1]=0,s[5]=1,s[9]=0,s[13]=0,s[2]=-M,s[6]=0,s[10]=m,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1):n===0&&e===0&&f!==0?(f<0&&(M=-M),s[0]=m,s[4]=-M,s[8]=0,s[12]=0,s[1]=M,s[5]=m,s[9]=0,s[13]=0,s[2]=0,s[6]=0,s[10]=1,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1):(z=Math.sqrt(n*n+e*e+f*f),z!==1&&(U=1/z,n*=U,e*=U,f*=U),I=1-m,ae=n*e,j=e*f,ne=f*n,N=n*M,c=e*M,$=f*M,s[0]=n*n*I+m,s[1]=ae*I+$,s[2]=ne*I-c,s[3]=0,s[4]=ae*I-$,s[5]=e*e*I+m,s[6]=j*I+N,s[7]=0,s[8]=ne*I+c,s[9]=j*I-N,s[10]=f*f*I+m,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1),this};C.prototype.rotate=function(v,n,e,f){return this.concat(new C().setRotate(v,n,e,f))};C.prototype.setLookAt=function(v,n,e,f,s,M,m,z,U){var I,ae,j,ne,N,c,$,b,o,a,k,R;return ae=f-v,j=s-n,ne=M-e,N=1/Math.sqrt(ae*ae+j*j+ne*ne),ae*=N,j*=N,ne*=N,c=j*U-ne*z,$=ne*m-ae*U,b=ae*z-j*m,o=1/Math.sqrt(c*c+$*$+b*b),c*=o,$*=o,b*=o,a=$*ne-b*j,k=b*ae-c*ne,R=c*j-$*ae,I=this.elements,I[0]=c,I[1]=a,I[2]=-ae,I[3]=0,I[4]=$,I[5]=k,I[6]=-j,I[7]=0,I[8]=b,I[9]=R,I[10]=-ne,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this.translate(-v,-n,-e)};C.prototype.lookAt=function(v,n,e,f,s,M,m,z,U){return this.concat(new C().setLookAt(v,n,e,f,s,M,m,z,U))};C.prototype.dropShadow=function(v,n){var e=new C,f=e.elements,s=v[0]*n[0]+v[1]*n[1]+v[2]*n[2]+v[3]*n[3];return f[0]=s-n[0]*v[0],f[1]=-n[1]*v[0],f[2]=-n[2]*v[0],f[3]=-n[3]*v[0],f[4]=-n[0]*v[1],f[5]=s-n[1]*v[1],f[6]=-n[2]*v[1],f[7]=-n[3]*v[1],f[8]=-n[0]*v[2],f[9]=-n[1]*v[2],f[10]=s-n[2]*v[2],f[11]=-n[3]*v[2],f[12]=-n[0]*v[3],f[13]=-n[1]*v[3],f[14]=-n[2]*v[3],f[15]=s-n[3]*v[3],this.concat(e)};C.prototype.dropShadowDirectionally=function(v,n,e,f,s,M,m,z,U){var I=f*v+s*n+M*e;return this.dropShadow([v,n,e,-I],[m,z,U,0])};const ze=function(v){var n=new Float32Array(3);v&&typeof v=="object"&&(n[0]=v[0],n[1]=v[1],n[2]=v[2]),this.elements=n};ze.prototype.normalize=function(){var v=this.elements,n=v[0],e=v[1],f=v[2],s=Math.sqrt(n*n+e*e+f*f);if(s){if(s==1)return this}else return v[0]=0,v[1]=0,v[2]=0,this;return s=1/s,v[0]=n*s,v[1]=e*s,v[2]=f*s,this};var xt=function(v){var n=new Float32Array(4);v&&typeof v=="object"&&(n[0]=v[0],n[1]=v[1],n[2]=v[2],n[3]=v[3]),this.elements=n};function Bt(){var v="浏览器不支持webgl",n="电脑不支持webgl",e=function(s,M,m){function z(I){var ae=document.getElementsByTagName("body")[0];if(ae){var j=window.WebGLRenderingContext?n:v;I&&(j+=I),ae.innerHTML=j}}m=m||z,s.addEventListener&&s.addEventListener("webglcontextcreationerror",function(I){m(I.statusMessage)},!1);var U=f(s,M);return U||(window.WebGLRenderingContext,m("")),U},f=function(s,M){for(var m=["webgl","experimental-webgl","webkit-3d","moz-webgl"],z=null,U=0;U<m.length;++U){try{z=s.getContext(m[U],M)}catch{}if(z)break}return z};return{create3DContext:f,setupWebGL:e}}const Ct=Bt();window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(v,n){window.setTimeout(v,1e3/60)}}());window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout);const pt=i("header",null,"第三章：绘制和变换",-1),Lt={class:"example"},wt={class:"item"},Mt=i("div",{class:"desc"},"一次绘制多个点，使用缓冲区对象",-1),Pt={class:"canvas"},St={class:"item"},Ut=i("div",{class:"desc"},"绘制图形，使用缓冲区对象",-1),Dt={class:"canvas"},yt={class:"item"},Ot=i("div",{class:"desc"},"平移",-1),It={class:"canvas"},Nt={class:"item"},Yt=i("div",{class:"desc"},"旋转",-1),Gt={class:"canvas"},Ht={class:"item"},kt=i("div",{class:"desc"},"矩阵旋转",-1),Vt={class:"canvas"},Wt={class:"item"},gt=i("div",{class:"desc"},"矩阵平移",-1),$t={class:"canvas"},Xt={class:"item"},jt=i("div",{class:"desc"},"矩阵缩放",-1),zt={class:"canvas"},qt=Ge({__name:"chapter-03",setup(v){const n=ue(null),e=ue(null),f=ue(null),s=ue(null),M=ue(null),m=ue(null),z=ue(null);ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(s).width=r(s).clientWidth,r(s).height=r(s).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight,r(m).width=r(m).clientWidth,r(m).height=r(m).clientHeight,r(z).width=r(z).clientWidth,r(z).height=r(z).clientHeight});function U(){const o=r(z).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform mat4 u_ScaleMatrix;
        void main() {
          gl_Position = u_ScaleMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const R=o.getAttribLocation(o.program,"a_Position"),K=o.getUniformLocation(o.program,"u_ScaleMatrix"),d=new Float32Array([-.1,-.2,0,.2,.1,-.2]),H=new Float32Array([2,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);o.uniformMatrix4fv(K,!1,H);const l=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,l),o.bufferData(o.ARRAY_BUFFER,d,o.STATIC_DRAW),o.vertexAttribPointer(R,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(R),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function I(){const o=r(m).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform mat4 u_TranslateMatrix;
        void main() {
          gl_Position = u_TranslateMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const R=o.getAttribLocation(o.program,"a_Position"),K=o.getUniformLocation(o.program,"u_TranslateMatrix"),d=new Float32Array([-.1,-.2,0,.2,.1,-.2]),H=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,.5,.5,.5,1]);o.uniformMatrix4fv(K,!1,H);const l=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,l),o.bufferData(o.ARRAY_BUFFER,d,o.STATIC_DRAW),o.vertexAttribPointer(R,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(R),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function ae(){const o=r(M).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform mat4 u_RotateMatrix;
        void main() {
          gl_Position = u_RotateMatrix * a_Position;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const R=o.getAttribLocation(o.program,"a_Position"),K=o.getUniformLocation(o.program,"u_RotateMatrix"),d=new Float32Array([-.1,-.2,0,.2,.1,-.2]),H=30*Math.PI/180,l=new Float32Array([Math.cos(H),Math.sin(H),0,0,-Math.sin(H),Math.cos(H),0,0,0,0,1,0,0,0,0,1]);o.uniformMatrix4fv(K,!1,l);const u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,d,o.STATIC_DRAW),o.vertexAttribPointer(R,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(R),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function j(){const o=r(s).getContext("webgl");if(!Re(o,`
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
      `))return;const R=o.getAttribLocation(o.program,"a_Position"),K=o.getUniformLocation(o.program,"u_SinR"),d=o.getUniformLocation(o.program,"u_CosR"),H=new Float32Array([-.1,-.2,0,.2,.1,-.2]),l=30*Math.PI/180;o.uniform1f(K,Math.sin(l)),o.uniform1f(d,Math.cos(l));const u=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,u),o.bufferData(o.ARRAY_BUFFER,H,o.STATIC_DRAW),o.vertexAttribPointer(R,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(R),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function ne(){const o=r(f).getContext("webgl");if(!Re(o,`
        attribute vec4 a_Position;
        uniform vec4 u_Transform;
        void main() {
          gl_Position = a_Position + u_Transform;
        }
      `,`
        void main() {
          gl_FragColor = vec4(1.0,0.5,0.5,1.0);
        }
      `))return;const R=o.getAttribLocation(o.program,"a_Position"),K=o.getUniformLocation(o.program,"u_Transform"),d=new Float32Array([-.1,-.2,0,.2,.1,-.2]);o.uniform4f(K,0,-.2,0,0);const H=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,H),o.bufferData(o.ARRAY_BUFFER,d,o.STATIC_DRAW),o.vertexAttribPointer(R,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(R),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,3)}function N(){var b=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,o=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,a=r(e),k=a.getContext("webgl");if(k&&Re(k,b,o)){var R=$(k);R<0||(k.clearColor(0,0,0,1),k.clear(k.COLOR_BUFFER_BIT),k.drawArrays(k.LINE_LOOP,0,R))}}function c(){var b=`
      attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }
      `,o=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,a=r(n),k=a.getContext("webgl");if(k&&Re(k,b,o)){var R=$(k);R<0||(k.clearColor(0,0,0,1),k.clear(k.COLOR_BUFFER_BIT),k.drawArrays(k.POINTS,0,R))}}function $(b){const o=new Float32Array([-.1,0,0,.2,.1,0]),a=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,a),b.bufferData(b.ARRAY_BUFFER,o,b.STATIC_DRAW);const k=b.getAttribLocation(b.program,"a_Position");return b.vertexAttribPointer(k,2,b.FLOAT,!1,0,0),b.enableVertexAttribArray(k),o.length/2}return(b,o)=>{const a=$e("dbtap");return He(),ke("div",null,[pt,i("div",Lt,[i("div",wt,[Mt,i("div",Pt,[de(i("canvas",{onDblclickOnce:c,ref_key:"gl06",ref:n},null,544),[[a,c]])])]),i("div",St,[Ut,i("div",Dt,[de(i("canvas",{onDblclickOnce:N,ref_key:"gl07",ref:e},null,544),[[a,N]])])]),i("div",yt,[Ot,i("div",It,[de(i("canvas",{onDblclickOnce:ne,ref_key:"gl08",ref:f},null,544),[[a,ne]])])]),i("div",Nt,[Yt,i("div",Gt,[de(i("canvas",{onDblclickOnce:j,ref_key:"gl09",ref:s},null,544),[[a,j]])])]),i("div",Ht,[kt,i("div",Vt,[de(i("canvas",{onDblclickOnce:ae,ref_key:"gl10",ref:M},null,544),[[a,ae]])])]),i("div",Wt,[gt,i("div",$t,[de(i("canvas",{onDblclickOnce:I,ref_key:"gl11",ref:m},null,544),[[a,I]])])]),i("div",Xt,[jt,i("div",zt,[de(i("canvas",{onDblclickOnce:U,ref_key:"gl12",ref:z},null,544),[[a,U]])])])])])}}}),Zt=i("header",null,"第四章：高级变换和动画",-1),Kt={class:"example"},Jt={class:"item"},Qt=i("div",{class:"desc"},"使用矩阵库,矩阵旋转",-1),er={class:"canvas"},tr={class:"item"},rr=i("div",{class:"desc"},"旋转+移动的动画，requestAnimation",-1),or={class:"canvas"},ar=Ge({__name:"chapter-04",setup(v){const n=ue(null),e=ue(null);ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight});function f(){var m=`
        attribute vec4 a_Position;
        uniform mat4 u_ModelMatrix;
        void main() {
          gl_Position = u_ModelMatrix * a_Position;
        }
      `,z=`
      void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,U=r(e),I=U.getContext("webgl");if(!I||!Re(I,m,z))return;var ae=M(I);if(ae<0)return;I.clearColor(0,0,0,1);var j=I.getUniformLocation(I.program,"u_ModelMatrix");if(!j)return;var ne=45,N=0,c=new C,$=function(){N=a(N),b(I,ae,N,c,j),requestAnimationFrame($)};$();function b(k,R,K,d,H){d.setRotate(K,0,0,1),d.translate(.35,0,0),k.uniformMatrix4fv(H,!1,d.elements),k.clear(k.COLOR_BUFFER_BIT),k.drawArrays(k.TRIANGLES,0,R)}var o=Date.now();function a(k){var R=Date.now();o||(o=Date.now());var K=R-o;o=R;var d=k+ne*K/1e3;return d%=360}}function s(){var m=`
        attribute vec4 a_Position;
        uniform mat4 u_xformMatrix;
        void main() {
          gl_Position = u_xformMatrix * a_Position;
        }
      `,z=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,U=r(n),I=U.getContext("webgl");if(!I||!Re(I,m,z))return;var ae=N(I);if(ae<0)return;var j=new C;j.setScale(2,2,1);var ne=I.getUniformLocation(I.program,"u_xformMatrix");if(!ne)return;I.uniformMatrix4fv(ne,!1,j.elements),I.clearColor(0,0,0,1),I.clear(I.COLOR_BUFFER_BIT),I.drawArrays(I.TRIANGLES,0,ae);function N(c){const $=new Float32Array([-.1,0,0,.2,.1,0]),b=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,b),c.bufferData(c.ARRAY_BUFFER,$,c.STATIC_DRAW);const o=c.getAttribLocation(c.program,"a_Position");return c.vertexAttribPointer(o,2,c.FLOAT,!1,0,0),c.enableVertexAttribArray(o),$.length/2}}function M(m){const z=new Float32Array([-.1,0,0,.2,.1,0]),U=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,U),m.bufferData(m.ARRAY_BUFFER,z,m.STATIC_DRAW);const I=m.getAttribLocation(m.program,"a_Position");return m.vertexAttribPointer(I,2,m.FLOAT,!1,0,0),m.enableVertexAttribArray(I),z.length/2}return(m,z)=>{const U=$e("dbtap");return He(),ke("div",null,[Zt,i("div",Kt,[i("div",Jt,[Qt,i("div",er,[de(i("canvas",{onDblclickOnce:s,ref_key:"gl13",ref:n},null,544),[[U,s]])])]),i("div",tr,[rr,i("div",or,[de(i("canvas",{onDblclickOnce:f,ref_key:"gl14",ref:e},null,544),[[U,f]])])])])])}}}),ir=i("header",null,"第五章：颜色与纹理",-1),nr={class:"example"},sr={class:"item"},cr=i("div",{class:"desc"},"创建多个缓冲区对象来同时传输位置和大小信息",-1),fr={class:"canvas"},_r={class:"item"},ur=i("div",{class:"desc"},"单个缓冲区同时传输位置和大小信息",-1),vr={class:"canvas"},lr={class:"item"},dr=i("div",{class:"desc"},"单个缓冲区同时传输位置和颜色信息，图形装配和光栅化",-1),mr={class:"canvas"},Ar={class:"item"},Rr=i("div",{class:"desc"}," 通过片元着色器内置变量gl_FragCoord访问片元的坐标值，x/y，左下角为零点坐标, drawingBufferWidth和drawBufferHeight获取绘图区域宽高 ",-1),Er={class:"canvas"},Fr={class:"item"},br=i("div",{class:"desc"}," 纹理（图片）映射：将纹理（图片）的纹素（像素）映射到片元上的过程，左下角为零点坐标 ",-1),hr={class:"canvas"},Tr={class:"item"},xr=i("div",{class:"desc"},"多张纹理贴图",-1),Br={class:"canvas"},Cr=Ge({__name:"chapter-05",setup(v){const n=ue(null),e=ue(null),f=ue(null),s=ue(null),M=ue(null),m=ue(null),z="/vue-hash";ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(s).width=r(s).clientWidth,r(s).height=r(s).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight,r(m).width=r(m).clientWidth,r(m).height=r(m).clientHeight});function U(){var c=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
          gl_Position = a_Position;
          v_TexCoord = a_TexCoord;
        }
      `,$=`
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
      `,b=r(m),o=b.getContext("webgl");if(!o||!Re(o,c,$))return;var a=k(o);if(a<0||(o.clearColor(0,0,0,1),!R(o,a)))return;function k(l){var u=new Float32Array([-.5,.5,0,1,-.5,-.5,0,0,.5,.5,1,1,.5,-.5,1,0]),X=4,S=l.createBuffer();if(!S)return-1;l.bindBuffer(l.ARRAY_BUFFER,S),l.bufferData(l.ARRAY_BUFFER,u,l.STATIC_DRAW);var W=u.BYTES_PER_ELEMENT,J=l.getAttribLocation(l.program,"a_Position");if(J<0)return-1;l.vertexAttribPointer(J,2,l.FLOAT,!1,W*4,0),l.enableVertexAttribArray(J);var te=l.getAttribLocation(l.program,"a_TexCoord");return te<0?-1:(l.vertexAttribPointer(te,2,l.FLOAT,!1,W*4,W*2),l.enableVertexAttribArray(te),X)}function R(l,u){var X=l.createTexture(),S=l.createTexture();if(!X||!S)return!1;var W=l.getUniformLocation(l.program,"u_Sampler0"),J=l.getUniformLocation(l.program,"u_Sampler1");if(!W||!J)return!1;var te=new Image,ee=new Image;return!te||!ee?!1:(te.onload=function(){H(l,u,X,W,te,0)},ee.onload=function(){H(l,u,S,J,ee,1)},te.src=z+"/micro-vue-static/lab-static/images/webgl-practice/sy.jpg",ee.src=z+"/micro-vue-static/lab-static/images/webgl-practice/wx.jpg",!0)}var K=!1,d=!1;function H(l,u,X,S,W,J){l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,1),J==0?(l.activeTexture(l.TEXTURE0),K=!0):(l.activeTexture(l.TEXTURE1),d=!0),l.bindTexture(l.TEXTURE_2D,X),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,W),l.uniform1i(S,J),l.clear(l.COLOR_BUFFER_BIT),K&&d&&l.drawArrays(l.TRIANGLE_STRIP,0,u)}}function I(){const c=`
        attribute vec4 a_Position;
        attribute vec2 a_TexCoord;
        varying vec2 v_TexCoord;
        void main() {
          gl_Position = a_Position;
          v_TexCoord = a_TexCoord;
        }
      `,$=`
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
      `,o=r(M).getContext("webgl");if(!o||!K(o,c,$))return;const a=R(o);if(a<0)return;o.clearColor(1,1,1,1),k(o,a);function k(d,H){const l=new Image;l.src=z+"/micro-vue-static/lab-static/images/webgl-practice/wx.jpg",l.onload=function(){d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL,1),d.activeTexture(d.TEXTURE0);const u=d.createTexture();d.bindTexture(d.TEXTURE_2D,u),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MIN_FILTER,d.LINEAR),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_MAG_FILTER,d.NEAREST),d.texImage2D(d.TEXTURE_2D,0,d.RGB,d.RGB,d.UNSIGNED_BYTE,l),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_T,d.MIRRORED_REPEAT),d.texParameteri(d.TEXTURE_2D,d.TEXTURE_WRAP_S,d.CLAMP_TO_EDGE);const X=d.getUniformLocation(d.program,"u_Sampler");d.uniform1i(X,0),d.clear(d.COLOR_BUFFER_BIT),d.drawArrays(d.TRIANGLE_STRIP,0,H)}}function R(d){const H=new Float32Array([-.5,.5,-.1,1.1,.5,.5,1.1,1.1,-.5,-.5,-.1,-.1,.5,-.5,1.1,-.1]),l=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,l),d.bufferData(d.ARRAY_BUFFER,H,d.STATIC_DRAW);const u=d.getAttribLocation(d.program,"a_Position"),X=H.BYTES_PER_ELEMENT;d.vertexAttribPointer(u,2,d.FLOAT,!1,X*4,0),d.enableVertexAttribArray(u);const S=d.createBuffer();d.bindBuffer(d.ARRAY_BUFFER,S),d.bufferData(d.ARRAY_BUFFER,H,d.STATIC_DRAW);const W=d.getAttribLocation(d.program,"a_TexCoord");return d.vertexAttribPointer(W,2,d.FLOAT,!1,X*4,X*2),d.enableVertexAttribArray(W),H.length/4}function K(d,H,l){const u=d.createShader(d.VERTEX_SHADER),X=d.createShader(d.FRAGMENT_SHADER);d.shaderSource(u,H),d.shaderSource(X,l),d.compileShader(u),d.compileShader(X);const S=d.getShaderParameter(u,d.COMPILE_STATUS),W=d.getShaderParameter(X,d.COMPILE_STATUS);if(!S){const ee=d.getShaderInfoLog(u);console.error(ee),d.deleteShader(u);return}if(!W){const ee=d.getShaderInfoLog(X);console.error(ee),d.deleteShader(X);return}const J=d.createProgram();if(d.attachShader(J,u),d.attachShader(J,X),d.linkProgram(J),!d.getProgramParameter(J,d.LINK_STATUS)){const ee=d.getProgramInfoLog(J);console.error(ee),d.deleteShader(u),d.deleteShader(X),d.deleteProgram(J);return}return d.program=J,d.useProgram(J),!0}}function ae(){var c=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
        }
      `,$=`
        precision mediump float;
        uniform float u_Width;
        uniform float u_Height;
        void main() {
          gl_FragColor = vec4(gl_FragCoord.x/u_Width, 0.0, gl_FragCoord.y/u_Height, 1.0);
        }
      `,b=r(s),o=b.getContext("webgl");if(!o||!Re(o,c,$))return;const a=k(o);if(a<0)return;o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,a);function k(R){var K=new Float32Array([1,-1,-1,-1,1,1]),d=3,H=R.createBuffer();if(!H)return-1;R.bindBuffer(R.ARRAY_BUFFER,H),R.bufferData(R.ARRAY_BUFFER,K,R.STATIC_DRAW);var l=R.getAttribLocation(R.program,"a_Position");if(l<0)return-1;R.vertexAttribPointer(l,2,R.FLOAT,!1,0,0);var u=R.getUniformLocation(R.program,"u_Width");if(!u)return-1;var X=R.getUniformLocation(R.program,"u_Height");return X?(R.uniform1f(u,R.drawingBufferWidth),R.uniform1f(X,R.drawingBufferHeight),R.enableVertexAttribArray(l),R.bindBuffer(R.ARRAY_BUFFER,null),d):-1}}function j(){var c=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main() {
          gl_Position = a_Position;
          v_Color = a_Color;
        }
      `,$=`
        precision mediump float;
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,b=r(f),o=b.getContext("webgl");if(!o||!Re(o,c,$))return;var a=k(o);if(a<0)return;o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLES,0,a);function k(R){const K=new Float32Array([-.2,0,.2,.3,.4,.2,0,.1,0,.6,0,.4,0,.5,.2]),d=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,d),R.bufferData(R.ARRAY_BUFFER,K,R.STATIC_DRAW);const H=R.getAttribLocation(R.program,"a_Position"),l=K.BYTES_PER_ELEMENT;R.vertexAttribPointer(H,2,R.FLOAT,!1,l*5,0),R.enableVertexAttribArray(H);const u=R.getAttribLocation(R.program,"a_Color");return R.vertexAttribPointer(u,3,R.FLOAT,!1,l*5,l*2),R.enableVertexAttribArray(u),K.length/5}}function ne(){var c=`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = a_PointSize;
        }
      `,$=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,b=r(e),o=b.getContext("webgl");if(!o||!Re(o,c,$))return;var a=k(o);if(a<0)return;o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.POINTS,0,a);function k(R){const K=new Float32Array([.1,.1,5,-.1,.1,10]),d=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,d),R.bufferData(R.ARRAY_BUFFER,K,R.STATIC_DRAW);const H=K.BYTES_PER_ELEMENT,l=R.getAttribLocation(R.program,"a_Position"),u=R.getAttribLocation(R.program,"a_PointSize");return R.vertexAttribPointer(l,2,R.FLOAT,!1,H*3,0),R.vertexAttribPointer(u,1,R.FLOAT,!1,H*3,H*2),R.enableVertexAttribArray(l),R.enableVertexAttribArray(u),K.length/3}}function N(){var c=`
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = a_PointSize;
        }
      `,$=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,b=r(n),o=b.getContext("webgl");if(!o||!Re(o,c,$))return;var a=k(o);if(a<0)return;o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.POINTS,0,a);function k(R){const K=new Float32Array([.1,.1,-.1,.1]),d=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,d),R.bufferData(R.ARRAY_BUFFER,K,R.STATIC_DRAW);const H=R.getAttribLocation(R.program,"a_Position");R.vertexAttribPointer(H,2,R.FLOAT,!1,0,0),R.enableVertexAttribArray(H);const l=new Float32Array([5,10]),u=R.createBuffer();R.bindBuffer(R.ARRAY_BUFFER,u),R.bufferData(R.ARRAY_BUFFER,l,R.STATIC_DRAW);const X=R.getAttribLocation(R.program,"a_PointSize");return R.vertexAttribPointer(X,1,R.FLOAT,!1,0,0),R.enableVertexAttribArray(X),K.length/2}}return(c,$)=>{const b=$e("dbtap");return He(),ke("div",null,[ir,i("div",nr,[i("div",sr,[cr,i("div",fr,[de(i("canvas",{onDblclickOnce:N,ref_key:"gl15",ref:n},null,544),[[b,N]])])]),i("div",_r,[ur,i("div",vr,[de(i("canvas",{onDblclickOnce:ne,ref_key:"gl16",ref:e},null,544),[[b,ne]])])]),i("div",lr,[dr,i("div",mr,[de(i("canvas",{onDblclickOnce:j,ref_key:"gl17",ref:f},null,544),[[b,j]])])]),i("div",Ar,[Rr,i("div",Er,[de(i("canvas",{onDblclickOnce:ae,ref_key:"gl18",ref:s},null,544),[[b,ae]])])]),i("div",Fr,[br,i("div",hr,[de(i("canvas",{onDblclickOnce:I,ref_key:"gl19",ref:M},null,544),[[b,I]])])]),i("div",Tr,[xr,i("div",Br,[de(i("canvas",{onDblclickOnce:U,ref_key:"gl20",ref:m},null,544),[[b,U]])])])])])}}}),Ie=v=>(Ze("data-v-aeafb5da"),v=v(),Ke(),v),pr=Ie(()=>i("header",null,"第七章：三维",-1)),Lr={class:"example"},wr={class:"item"},Mr=Ie(()=>i("div",{class:"desc"}," 设置观察者视角，三个重要点，观察者的位置，看向的点和头顶指向，这三个量可以构建一个视图矩阵，视图矩阵和模型矩阵相乘就可以得到模型视图矩阵 ",-1)),Pr={class:"canvas"},Sr={class:"item"},Ur=Ie(()=>i("div",{class:"desc"}," 使用键盘(A,D)改变视点的位置，引出可视区域的问题，深度的问题，这里是使用的平面投影矩阵，所以没有近大远小，超出可视区域的部分被裁减掉了 ",-1)),Dr={class:"canvas"},yr={class:"item"},Or=Ie(()=>i("div",{class:"desc"},"设置可视空间投影，正射投影和透视投影之正射投影。参数：上下左右前后",-1)),Ir={class:"canvas"},Nr={class:"item"},Yr=Ie(()=>i("div",{class:"desc"},"同时设置视角视点和投影矩阵,即视图矩阵与投影矩阵相乘",-1)),Gr={class:"canvas"},Hr={class:"item"},kr=Ie(()=>i("div",{class:"desc"},"如果投影矩阵的宽高比与canvas不一致，会缩放拉伸以适应画布",-1)),Vr={class:"canvas"},Wr={class:"item"},gr=Ie(()=>i("div",{class:"desc"}," 设置可视空间投影，正射投影和透视投影之正射投影。参数：开角，前后，宽高比, 同时加上模型矩阵，组成MVP ",-1)),$r={class:"canvas"},Xr={class:"item"},jr=Ie(()=>i("div",{class:"desc"}," 开启隐藏面消除以正确的处理图形的前后关系，开启gl.DEPTH_TEST, 绘制前清空gl.DEPTH_BUFFER_BIT ",-1)),zr={class:"canvas"},qr={class:"item"},Zr=Ie(()=>i("div",{class:"desc"}," 深度冲突，当两个面的深度值过于接近时，深度缓冲区不能正确的区分前后关系，就会产生斑驳的现象，尤其是在有一定的旋转的情况下。通过[多边形偏移]机制可以解决这个问题 ",-1)),Kr={class:"canvas"},Jr={class:"item"},Qr=Ie(()=>i("div",{class:"desc"}," 通过顶点索引绘制物体,只需要8个顶点数据,每个都有自己的索引,三个索引对应三个点,三个点可以绘制一个三角形,两个三角形构成一个正方形 ",-1)),eo={class:"canvas"},to={class:"item"},ro=Ie(()=>i("div",{class:"desc"},"解决通过索引绘制的问题,不能为每个面指定单独的颜色,需要至少24个点",-1)),oo={class:"canvas"},ao=Ge({__name:"chapter-07",setup(v){const n=ue(null),e=ue(null),f=ue(null),s=ue(null),M=ue(null),m=ue(null),z=ue(null),U=ue(null),I=ue(null),ae=ue(null),j=ue(null);ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(s).width=r(s).clientWidth,r(s).height=r(s).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight,r(m).width=r(m).clientWidth,r(m).height=r(m).clientHeight,r(z).width=r(z).clientWidth,r(z).height=r(z).clientHeight,r(U).width=r(U).clientWidth,r(U).height=r(U).clientHeight,r(I).width=r(I).clientWidth,r(I).height=r(I).clientHeight,r(ae).width=r(ae).clientWidth,r(ae).height=r(ae).clientHeight});function ne(){var d=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(ae),u=l.getContext("webgl");Re(u,d,H);var X=J(u);u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST);var S=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new C;W.setPerspective(30,1,1,100),W.lookAt(3,3,7,0,0,0,0,1,0),u.uniformMatrix4fv(S,!1,W.elements),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawElements(u.TRIANGLES,X,u.UNSIGNED_BYTE,0);function J(ee){var re=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),x=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),Y=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),p=ee.createBuffer();return te(ee,re,3,ee.FLOAT,"a_Position"),te(ee,x,3,ee.FLOAT,"a_Color"),ee.bindBuffer(ee.ELEMENT_ARRAY_BUFFER,p),ee.bufferData(ee.ELEMENT_ARRAY_BUFFER,Y,ee.STATIC_DRAW),Y.length}function te(ee,re,x,Y,p){var y=ee.createBuffer();ee.bindBuffer(ee.ARRAY_BUFFER,y),ee.bufferData(ee.ARRAY_BUFFER,re,ee.STATIC_DRAW);var _=ee.getAttribLocation(ee.program,p);return ee.vertexAttribPointer(_,x,Y,!1,0,0),ee.enableVertexAttribArray(_),ee.bindBuffer(ee.ARRAY_BUFFER,null),!0}}function N(){var d=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(I),u=l.getContext("webgl");Re(u,d,H);var X=re(u);const S=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new C,J=new C;J.setTranslate(0,0,0);const te=new C;te.setLookAt(3.06,2.5,10,0,0,-2,0,1,0);const ee=new C;ee.setPerspective(30,l.width/l.height,1,100),W.set(ee).multiply(te).multiply(J),u.uniformMatrix4fv(S,!1,W.elements),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.enable(u.POLYGON_OFFSET_FILL),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.polygonOffset(1,1),u.drawElements(u.TRIANGLES,X,u.UNSIGNED_BYTE,0);function re(x){const Y=new Float32Array([-1,1,1,.5,.1,.1,1,1,1,.5,.5,.1,-1,-1,1,.1,.5,.1,1,-1,1,.1,.1,.5,-1,1,-1,.3,.1,.3,1,1,-1,.3,.3,.1,-1,-1,-1,.1,.3,.2,1,-1,-1,.7,.1,.3]),p=Y.BYTES_PER_ELEMENT,y=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,4,5,0,5,0,1,6,7,2,7,2,3,4,0,6,0,6,2,1,5,3,5,3,7]),_=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,_),x.bufferData(x.ARRAY_BUFFER,Y,x.STATIC_DRAW);const P=x.getAttribLocation(x.program,"a_Position"),L=x.getAttribLocation(x.program,"a_Color");x.vertexAttribPointer(P,3,x.FLOAT,!1,p*6,0),x.vertexAttribPointer(L,3,x.FLOAT,!1,p*6,p*3),x.enableVertexAttribArray(P),x.enableVertexAttribArray(L);const V=x.createBuffer();return x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,V),x.bufferData(x.ELEMENT_ARRAY_BUFFER,y,x.STATIC_DRAW),y.length}}function c(){const d=`
      attribute vec4 a_Position;
      uniform mat4 u_MvpMatrix;
      attribute vec4 a_Color;
      varying vec4 v_Color;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_Color = a_Color;
      }
      `,H=`
      #ifdef GL_ES
        precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,l=r(U),u=l.getContext("webgl");Re(u,d,H);const X=re(u),S=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new C,J=new C;J.setTranslate(0,0,0);const te=new C;te.setLookAt(3.06,2.5,10,0,0,-2,0,1,0);const ee=new C;ee.setPerspective(30,l.width/l.height,1,100),W.set(ee).multiply(te).multiply(J),u.uniformMatrix4fv(S,!1,W.elements),u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST),u.clear(u.COLOR_BUFFER_BIT||u.DEPTH_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,X/2),u.polygonOffset(1,1),u.drawArrays(u.TRIANGLES,X/2,X/2);function re(x){const Y=new Float32Array([0,2.5,-5,.4,1,.4,-2.5,-2.5,-5,.4,1,.4,2.5,-2.5,-5,1,.4,.4,0,3,-5,1,.4,.4,-3,-3,-5,1,1,.4,3,-3,-5,1,1,.4]),p=Y.BYTES_PER_ELEMENT,y=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,y),x.bufferData(x.ARRAY_BUFFER,Y,x.STATIC_DRAW);const _=x.getAttribLocation(x.program,"a_Position");x.vertexAttribPointer(_,3,x.FLOAT,!1,6*p,0),x.enableVertexAttribArray(_);const P=x.getAttribLocation(x.program,"a_Color");return x.vertexAttribPointer(P,3,x.FLOAT,!1,6*p,3*p),x.enableVertexAttribArray(P),Y.length/6}}function $(){var d=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(z),u=l.getContext("webgl");Re(u,d,H);var X=re(u);u.clearColor(0,0,0,1),u.enable(u.DEPTH_TEST);var S=u.getUniformLocation(u.program,"u_MvpMatrix"),W=new C,J=new C,te=new C,ee=new C;W.setTranslate(.75,0,0),J.setLookAt(0,0,5,0,0,-100,0,1,0),te.setPerspective(30,l.width/l.height,1,100),ee.set(te).multiply(J).multiply(W),u.uniformMatrix4fv(S,!1,ee.elements),u.clear(u.COLOR_BUFFER_BIT|u.DEPTH_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,X),W.setTranslate(-.75,0,0),ee.set(te).multiply(J).multiply(W),u.uniformMatrix4fv(S,!1,ee.elements),u.drawArrays(u.TRIANGLES,0,X);function re(x){var Y=new Float32Array([0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4]),p=9,y=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,y),x.bufferData(x.ARRAY_BUFFER,Y,x.STATIC_DRAW);var _=Y.BYTES_PER_ELEMENT,P=x.getAttribLocation(x.program,"a_Position");x.vertexAttribPointer(P,3,x.FLOAT,!1,_*6,0),x.enableVertexAttribArray(P);var L=x.getAttribLocation(x.program,"a_Color");return x.vertexAttribPointer(L,3,x.FLOAT,!1,_*6,_*3),x.enableVertexAttribArray(L),x.bindBuffer(x.ARRAY_BUFFER,null),p}}function b(){var d=`
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
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(m),u=l.getContext("webgl");Re(u,d,H);var X=x(u);u.clearColor(0,0,0,1);var S=u.getUniformLocation(u.program,"u_ViewMatrix"),W=u.getUniformLocation(u.program,"u_ProjMatrix"),J=u.getUniformLocation(u.program,"u_ModeMatrix"),te=new C,ee=new C,re=new C;te.setLookAt(0,0,5,0,0,-100,0,1,0),ee.setPerspective(30,l.width/l.height,1,100),re.setTranslate(0,1,0),u.uniformMatrix4fv(S,!1,te.elements),u.uniformMatrix4fv(W,!1,ee.elements),u.uniformMatrix4fv(J,!1,re.elements),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,X);function x(Y){var p=new Float32Array([.75,1,-4,.4,1,.4,.25,-1,-4,.4,1,.4,1.25,-1,-4,1,.4,.4,.75,1,-2,1,1,.4,.25,-1,-2,1,1,.4,1.25,-1,-2,1,.4,.4,.75,1,0,.4,.4,1,.25,-1,0,.4,.4,1,1.25,-1,0,1,.4,.4,-.75,1,-4,.4,1,.4,-1.25,-1,-4,.4,1,.4,-.25,-1,-4,1,.4,.4,-.75,1,-2,1,1,.4,-1.25,-1,-2,1,1,.4,-.25,-1,-2,1,.4,.4,-.75,1,0,.4,.4,1,-1.25,-1,0,.4,.4,1,-.25,-1,0,1,.4,.4]),y=18,_=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,_),Y.bufferData(Y.ARRAY_BUFFER,p,Y.STATIC_DRAW);var P=p.BYTES_PER_ELEMENT,L=Y.getAttribLocation(Y.program,"a_Position");Y.vertexAttribPointer(L,3,Y.FLOAT,!1,P*6,0),Y.enableVertexAttribArray(L);var V=Y.getAttribLocation(Y.program,"a_Color");return Y.vertexAttribPointer(V,3,Y.FLOAT,!1,P*6,P*3),Y.enableVertexAttribArray(V),y}}function o(){var d=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * a_Position;
          v_Color = a_Color;
        }
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(M),u=l.getContext("webgl");Re(u,d,H);var X=J(u);u.clearColor(0,0,0,1);var S=u.getUniformLocation(u.program,"u_ProjMatrix"),W=new C;function J(x){var Y=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),p=9,y=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,y),x.bufferData(x.ARRAY_BUFFER,Y,x.STATIC_DRAW);var _=Y.BYTES_PER_ELEMENT,P=x.getAttribLocation(x.program,"a_Position");x.vertexAttribPointer(P,3,x.FLOAT,!1,_*6,0),x.enableVertexAttribArray(P);var L=x.getAttribLocation(x.program,"a_Color");return x.vertexAttribPointer(L,3,x.FLOAT,!1,_*6,_*3),x.enableVertexAttribArray(L),x.bindBuffer(x.ARRAY_BUFFER,null),p}var te=0,ee=.5;re(u,X,S,W);function re(x,Y,p,y){y.setOrtho(-1,1,-.5,.5,te,ee),x.uniformMatrix4fv(p,!1,y.elements),x.clear(x.COLOR_BUFFER_BIT),x.drawArrays(x.TRIANGLES,0,Y)}}function a(){var d=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * u_ViewMatrix * a_Position;
          v_Color = a_Color;
        }
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(s),u=l.getContext("webgl");Re(u,d,H);var X=ee(u);u.clearColor(0,0,0,1);var S=u.getUniformLocation(u.program,"u_ViewMatrix"),W=u.getUniformLocation(u.program,"u_ProjMatrix"),J=new C;document.onkeydown=function(_){p(_,u,X,S,J)};var te=new C;te.setOrtho(-1,1,-1,1,0,2),u.uniformMatrix4fv(W,!1,te.elements);function ee(_){var P=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),L=9,V=_.createBuffer();_.bindBuffer(_.ARRAY_BUFFER,V),_.bufferData(_.ARRAY_BUFFER,P,_.STATIC_DRAW);var oe=P.BYTES_PER_ELEMENT,Fe=_.getAttribLocation(_.program,"a_Position");_.vertexAttribPointer(Fe,3,_.FLOAT,!1,oe*6,0),_.enableVertexAttribArray(Fe);var Q=_.getAttribLocation(_.program,"a_Color");return _.vertexAttribPointer(Q,3,_.FLOAT,!1,oe*6,oe*3),_.enableVertexAttribArray(Q),L}var re=0,x=0,Y=.25;function p(_,P,L,V,oe){if(_.keyCode==39)re+=.01;else if(_.keyCode==37)re-=.01;else return;y(P,L,V,oe)}y(u,X,S,J);function y(_,P,L,V){V.setLookAt(re,x,Y,0,0,0,0,1,0),_.uniformMatrix4fv(L,!1,V.elements),_.clear(_.COLOR_BUFFER_BIT),_.drawArrays(_.TRIANGLES,0,P)}}function k(){var d=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ProjMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ProjMatrix * a_Position;
          v_Color = a_Color;
        }
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(f),u=l.getContext("webgl");Re(u,d,H);var X=J(u);u.clearColor(0,0,0,1);var S=u.getUniformLocation(u.program,"u_ProjMatrix"),W=new C;l.addEventListener("mouseup",function(p){re(p,u,X,S,W)});function J(p){var y=new Float32Array([0,.6,-.4,1,.4,.4,-.5,-.4,-.4,1,.4,.4,.5,-.4,-.4,1,.4,.4,.5,.4,-.2,.4,1,.4,-.5,.4,-.2,.4,1,.4,0,-.6,-.2,.4,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,.4,.4,1]),_=9,P=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,P),p.bufferData(p.ARRAY_BUFFER,y,p.STATIC_DRAW);var L=y.BYTES_PER_ELEMENT,V=p.getAttribLocation(p.program,"a_Position");p.vertexAttribPointer(V,3,p.FLOAT,!1,L*6,0),p.enableVertexAttribArray(V);var oe=p.getAttribLocation(p.program,"a_Color");return p.vertexAttribPointer(oe,3,p.FLOAT,!1,L*6,L*3),p.enableVertexAttribArray(oe),_}var te=0,ee=-.5;function re(p,y,_,P,L){const{layerX:V,layerY:oe}=p;V>210&&oe>210&&(ee-=.1),V>210&&oe<210&&(ee+=.1),V<210&&oe>210&&(te-=.1),V<210&&oe<210&&(te+=.1),Y(y,_,P,L)}const x=r(j);Y(u,X,S,W);function Y(p,y,_,P){P.setOrtho(-1,1,-1,1,-te,-ee),p.uniformMatrix4fv(_,!1,P.elements),x.innerHTML=`near:${te.toFixed(2)}|far:${ee.toFixed(2)}`,p.clear(p.COLOR_BUFFER_BIT),p.drawArrays(p.TRIANGLES,0,y)}}function R(){var d=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_ViewMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_ViewMatrix * a_Position;
          v_Color = a_Color;
        }
      `,H=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,l=r(e),u=l.getContext("webgl");Re(u,d,H);var X=J(u);u.clearColor(0,0,0,1);var S=u.getUniformLocation(u.program,"u_ViewMatrix"),W=new C;document.onkeydown=function(p){x(p,u,X,S,W)};function J(p){var y=new Float32Array([0,.5,-.4,.4,1,.4,-.5,-.5,-.4,.4,1,.4,.5,-.5,-.4,1,.4,.4,.5,.4,-.2,1,.4,.4,-.5,.4,-.2,1,1,.4,0,-.6,-.2,1,1,.4,0,.5,0,.4,.4,1,-.5,-.5,0,.4,.4,1,.5,-.5,0,1,.4,.4]),_=9,P=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,P),p.bufferData(p.ARRAY_BUFFER,y,p.STATIC_DRAW);var L=y.BYTES_PER_ELEMENT,V=p.getAttribLocation(p.program,"a_Position");p.vertexAttribPointer(V,3,p.FLOAT,!1,L*6,0),p.enableVertexAttribArray(V);var oe=p.getAttribLocation(p.program,"a_Color");return p.vertexAttribPointer(oe,3,p.FLOAT,!1,L*6,L*3),p.enableVertexAttribArray(oe),_}var te=0,ee=0,re=.2;function x(p,y,_,P,L){if(console.log(p.keyCode),p.keyCode==68)te+=.01;else if(p.keyCode==65)te-=.01;else return;Y(y,_,P,L)}Y(u,X,S,W);function Y(p,y,_,P){P.setLookAt(te,ee,re,0,0,0,0,1,0),p.uniformMatrix4fv(_,!1,P.elements),p.clear(p.COLOR_BUFFER_BIT),p.drawArrays(p.TRIANGLES,0,y)}}function K(){const d=`
      attribute vec4 a_Position;
      attribute vec4 a_Color;
      uniform mat4 MVMatrix;
      varying vec4 v_Color;
      void main() {
        gl_Position = MVMatrix * a_Position;
        v_Color = a_Color;
      }
      `,H=`
      #ifdef GL_ES
        precision lowp float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,u=r(n).getContext("webgl");Re(u,d,H);const X=ee(u),S=u.getUniformLocation(u.program,"MVMatrix"),W=new C;W.setLookAt(.3,.3,.3,0,0,0,0,1,0);const J=new C;J.setRotate(-90,0,0,1);const te=W.multiply(J);u.uniformMatrix4fv(S,!1,te.elements),u.clearColor(0,0,0,1),u.clear(u.COLOR_BUFFER_BIT),u.drawArrays(u.TRIANGLES,0,X);function ee(re){const x=new Float32Array([-.2,-.2,-.3,.4,.7,.1,.2,-.2,-.3,.4,.7,.1,0,.2,-.3,.4,.7,.1,-.2,-.2,-.2,.2,.1,.3,.2,-.2,-.2,.2,.1,.3,0,.2,-.2,.2,.1,.3,-.2,-.2,-.1,.1,.2,.3,.2,-.2,-.1,.1,.2,.3,0,.2,-.1,.1,.2,.3]),Y=x.BYTES_PER_ELEMENT,p=re.createBuffer();re.bindBuffer(re.ARRAY_BUFFER,p),re.bufferData(re.ARRAY_BUFFER,x,re.STATIC_DRAW);const y=re.getAttribLocation(re.program,"a_Position");re.vertexAttribPointer(y,3,re.FLOAT,!1,Y*6,0),re.enableVertexAttribArray(y);const _=re.createBuffer();re.bindBuffer(re.ARRAY_BUFFER,_),re.bufferData(re.ARRAY_BUFFER,x,re.STATIC_DRAW);const P=re.getAttribLocation(re.program,"a_Color");return re.vertexAttribPointer(P,2,re.FLOAT,!1,Y*6,Y*3),re.enableVertexAttribArray(P),x.length/6}}return(d,H)=>{const l=$e("dbtap");return He(),ke("div",null,[pr,i("div",Lr,[i("div",wr,[Mr,i("div",Pr,[de(i("canvas",{onDblclickOnce:K,ref_key:"gl21",ref:n},null,544),[[l,K]])])]),i("div",Sr,[Ur,i("div",Dr,[de(i("canvas",{onDblclickOnce:R,ref_key:"gl22",ref:e},null,544),[[l,R]])])]),i("div",yr,[Or,i("div",Ir,[de(i("canvas",{onDblclickOnce:k,ref_key:"gl23",ref:f},null,544),[[l,k]]),i("div",{ref_key:"gl23txt",ref:j,class:"gl23txt"},null,512)])]),i("div",Nr,[Yr,i("div",Gr,[de(i("canvas",{onDblclickOnce:a,ref_key:"gl24",ref:s},null,544),[[l,a]])])]),i("div",Hr,[kr,i("div",Vr,[de(i("canvas",{onDblclickOnce:o,ref_key:"gl25",ref:M},null,544),[[l,o]])])]),i("div",Wr,[gr,i("div",$r,[de(i("canvas",{onDblclickOnce:b,ref_key:"gl26",ref:m},null,544),[[l,b]])])]),i("div",Xr,[jr,i("div",zr,[de(i("canvas",{onDblclickOnce:$,ref_key:"gl27",ref:z},null,544),[[l,$]])])]),i("div",qr,[Zr,i("div",Kr,[de(i("canvas",{onDblclickOnce:c,ref_key:"gl28",ref:U},null,544),[[l,c]])])]),i("div",Jr,[Qr,i("div",eo,[de(i("canvas",{onDblclickOnce:N,ref_key:"gl29",ref:I},null,544),[[l,N]])])]),i("div",to,[ro,i("div",oo,[de(i("canvas",{onDblclickOnce:ne,ref_key:"gl30",ref:ae},null,544),[[l,ne]])])])])])}}}),io=Je(ao,[["__scopeId","data-v-aeafb5da"]]),no=i("header",null,"第八章：光照",-1),so={class:"example"},co={class:"item"},fo=i("div",{class:"desc"}," 白色平行光照射红色cube, 漫反射颜色=入射光颜色x表面基底色xcos0，cos0 = 光线反方向单位向量 (点乘) 法线方向单位向量 = ax * bx + ay * by + az * bz ",-1),_o={class:"canvas"},uo={class:"item"},vo=i("div",{class:"desc"}," 只有平行光，则只有被光线照射到的地方能看见，不符合常识，增加环境光，各处相等的光 ",-1),lo={class:"canvas"},mo={class:"item"},Ao=i("div",{class:"desc"}," 如果物体进行了模型变换，那么物体表面的法向量也会发生变化，如果不改变法向量，则不能正确的着色。变换后的法向量等于法向量乘以模型矩阵的逆转置矩阵。逆转置矩阵：逆矩阵（AxA逆和A逆xA结果都为单位矩阵），转置矩阵，原矩阵的行列进行调换 ",-1),Ro={class:"canvas"},Eo={class:"item"},Fo=i("div",{class:"desc"}," 点光源，点光源的入射方向跟平行光不一样，在点光源下每个点的入射方向都不一样，方向为点光源所在位置和当前点的连线。本例绘制一个圆 ",-1),bo={class:"canvas"},ho={class:"item"},To=i("div",{class:"desc"}," 如果只计算顶点着色器中顶点的光照着色其余内插，最终效果会很不自然，需要逐片元计算方向。平行光和环境光不会有这个问题，因为平行光的变化是线性的，环境光无变化 ",-1),xo={class:"canvas"},Bo=Ge({__name:"chapter-08",setup(v){const n=ue(null),e=ue(null),f=ue(null),s=ue(null),M=ue(null);ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(s).width=r(s).clientWidth,r(s).height=r(s).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight});function m(){var j=`
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
      `,ne=`
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
      `,N=r(M),c=N.getContext("webgl");Re(c,j,ne);var $=u(c);c.clearColor(0,0,0,1),c.enable(c.DEPTH_TEST);var b=c.getUniformLocation(c.program,"u_ModelMatrix"),o=c.getUniformLocation(c.program,"u_MvpMatrix"),a=c.getUniformLocation(c.program,"u_NormalMatrix"),k=c.getUniformLocation(c.program,"u_LightColor"),R=c.getUniformLocation(c.program,"u_LightPosition"),K=c.getUniformLocation(c.program,"u_AmbientLight");c.uniform3f(k,0,.8,.8),c.uniform3f(R,5,8,7),c.uniform3f(K,.2,.2,.2);var d=new C,H=new C,l=new C;d.setRotate(90,0,1,0),H.setPerspective(30,N.width/N.height,1,100),H.lookAt(0,0,6,0,0,0,0,1,0),H.multiply(d),l.setInverseOf(d),l.transpose(),c.uniformMatrix4fv(b,!1,d.elements),c.uniformMatrix4fv(o,!1,H.elements),c.uniformMatrix4fv(a,!1,l.elements),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),c.drawElements(c.TRIANGLES,$,c.UNSIGNED_SHORT,0);function u(S){var W=24,J=[],te=[];for(let re=0;re<=W;re++){let x=re/W*Math.PI,Y=Math.sin(x),p=Math.cos(x);for(let y=0;y<=W;y++){const _=y/W*2*Math.PI,P=Math.sin(_),L=Math.cos(_);J.push(Y*L),J.push(p),J.push(Y*P)}}for(let re=0;re<W;re++)for(let x=0;x<W;x++){const Y=W+1;let p=re*Y+x,y=p+Y;te.push(p),te.push(y),te.push(p+1),te.push(p+1),te.push(y),te.push(y+1)}X(S,"a_Position",new Float32Array(J),S.FLOAT,3),X(S,"a_Normal",new Float32Array(J),S.FLOAT,3),S.bindBuffer(S.ARRAY_BUFFER,null);var ee=S.createBuffer();return S.bindBuffer(S.ELEMENT_ARRAY_BUFFER,ee),S.bufferData(S.ELEMENT_ARRAY_BUFFER,new Uint16Array(te),S.STATIC_DRAW),te.length}function X(S,W,J,te,ee){var re=S.createBuffer();S.bindBuffer(S.ARRAY_BUFFER,re),S.bufferData(S.ARRAY_BUFFER,J,S.STATIC_DRAW);var x=S.getAttribLocation(S.program,W);return S.vertexAttribPointer(x,ee,te,!1,0,0),S.enableVertexAttribArray(x),!0}}function z(){var j=`
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
      `,ne=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,N=r(s),c=N.getContext("webgl");Re(c,j,ne);var $=u(c);c.clearColor(0,0,0,1),c.enable(c.DEPTH_TEST);var b=c.getUniformLocation(c.program,"u_ModelMatrix"),o=c.getUniformLocation(c.program,"u_MvpMatrix"),a=c.getUniformLocation(c.program,"u_NormalMatrix"),k=c.getUniformLocation(c.program,"u_LightColor"),R=c.getUniformLocation(c.program,"u_LightPosition"),K=c.getUniformLocation(c.program,"u_AmbientLight");c.uniform3f(k,0,.8,.8),c.uniform3f(R,5,8,7),c.uniform3f(K,.2,.2,.2);var d=new C,H=new C,l=new C;c.uniformMatrix4fv(b,!1,d.elements),H.setPerspective(30,N.width/N.height,1,100),H.lookAt(0,0,6,0,0,0,0,1,0),H.multiply(d),c.uniformMatrix4fv(o,!1,H.elements),l.setInverseOf(d),l.transpose(),c.uniformMatrix4fv(a,!1,l.elements),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),c.drawElements(c.TRIANGLES,$,c.UNSIGNED_SHORT,0);function u(S){var W=24,J=[],te=[];for(let re=0;re<=W;re++){let x=re/W*Math.PI,Y=Math.sin(x),p=Math.cos(x);for(let y=0;y<=W;y++){const _=y/W*2*Math.PI,P=Math.sin(_),L=Math.cos(_);J.push(Y*L),J.push(p),J.push(Y*P)}}for(let re=0;re<W;re++)for(let x=0;x<W;x++){let Y=re*(W+1)+x,p=Y+(W+1);te.push(Y),te.push(p),te.push(Y+1),te.push(Y+1),te.push(p),te.push(p+1)}X(S,"a_Position",new Float32Array(J),S.FLOAT,3),X(S,"a_Normal",new Float32Array(J),S.FLOAT,3),S.bindBuffer(S.ARRAY_BUFFER,null);var ee=S.createBuffer();return S.bindBuffer(S.ELEMENT_ARRAY_BUFFER,ee),S.bufferData(S.ELEMENT_ARRAY_BUFFER,new Uint16Array(te),S.STATIC_DRAW),te.length}function X(S,W,J,te,ee){var re=S.createBuffer();S.bindBuffer(S.ARRAY_BUFFER,re),S.bufferData(S.ARRAY_BUFFER,J,S.STATIC_DRAW);var x=S.getAttribLocation(S.program,W);return S.vertexAttribPointer(x,ee,te,!1,0,0),S.enableVertexAttribArray(x),S.bindBuffer(S.ARRAY_BUFFER,null),!0}}function U(){const j=`
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
      `,ne=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,c=r(f).getContext("webgl");Re(c,j,ne);const $=o(c);b(),c.clearColor(0,0,0,1),c.enable(c.DEPTH_TEST),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),c.drawElements(c.TRIANGLES,$,c.UNSIGNED_BYTE,0);function b(){const a=c.getUniformLocation(c.program,"u_MvpMatrix"),k=c.getUniformLocation(c.program,"u_LightColor"),R=c.getUniformLocation(c.program,"u_LightDir"),K=c.getUniformLocation(c.program,"u_AmbientLight"),d=c.getUniformLocation(c.program,"u_NormalMatrix");c.uniform3f(K,.2,.2,.2),c.uniform3f(k,1,1,1);const H=new ze([2,2,-2]);H.normalize(),c.uniform3fv(R,H.elements);const l=new C,u=new C;u.setLookAt(5,5,5,0,0,0,0,1,0);const X=new C;X.setPerspective(60,1/1,1,100);const S=new C;S.setTranslate(.1,.1,0),S.setRotate(-90,0,1,0),l.set(X).multiply(u).multiply(S),c.uniformMatrix4fv(a,!1,l.elements);const W=new C;W.setInverseOf(S),W.transpose(),c.uniformMatrix4fv(d,!1,W.elements)}function o(a){const k=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),R=new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]),K=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),d=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),H=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,H),a.bufferData(a.ARRAY_BUFFER,k,a.STATIC_DRAW);const l=a.getAttribLocation(a.program,"a_Position");a.vertexAttribPointer(l,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(l),a.bindBuffer(a.ARRAY_BUFFER,null);const u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,R,a.STATIC_DRAW);const X=a.getAttribLocation(a.program,"a_Color");a.vertexAttribPointer(X,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(X),a.bindBuffer(a.ARRAY_BUFFER,null);const S=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,S),a.bufferData(a.ARRAY_BUFFER,K,a.STATIC_DRAW);const W=a.getAttribLocation(a.program,"a_Normal");a.vertexAttribPointer(W,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(W),a.bindBuffer(a.ARRAY_BUFFER,null);const J=a.createBuffer();return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,J),a.bufferData(a.ELEMENT_ARRAY_BUFFER,d,a.STATIC_DRAW),d.length}}function I(){const j=`
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
      `,ne=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,c=r(e).getContext("webgl");Re(c,j,ne);const $=o(c);b(),c.clearColor(0,0,0,1),c.enable(c.DEPTH_TEST),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),c.drawElements(c.TRIANGLES,$,c.UNSIGNED_BYTE,0);function b(){const a=c.getUniformLocation(c.program,"u_MvpMatrix"),k=c.getUniformLocation(c.program,"u_LightColor"),R=c.getUniformLocation(c.program,"u_LightDir"),K=c.getUniformLocation(c.program,"u_AmbientLight");c.uniform3f(K,.2,0,0),c.uniform3f(k,1,1,1);const d=new ze([2,2,-2]);d.normalize(),c.uniform3fv(R,d.elements);const H=new C,l=new C;l.setLookAt(5,5,5,0,0,0,0,1,0);const u=new C;u.setPerspective(60,1/1,1,100),H.set(u).multiply(l),c.uniformMatrix4fv(a,!1,H.elements)}function o(a){const k=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),R=new Float32Array([1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1]),K=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),d=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),H=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,H),a.bufferData(a.ARRAY_BUFFER,k,a.STATIC_DRAW);const l=a.getAttribLocation(a.program,"a_Position");a.vertexAttribPointer(l,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(l),a.bindBuffer(a.ARRAY_BUFFER,null);const u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,R,a.STATIC_DRAW);const X=a.getAttribLocation(a.program,"a_Color");a.vertexAttribPointer(X,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(X),a.bindBuffer(a.ARRAY_BUFFER,null);const S=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,S),a.bufferData(a.ARRAY_BUFFER,K,a.STATIC_DRAW);const W=a.getAttribLocation(a.program,"a_Normal");a.vertexAttribPointer(W,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(W),a.bindBuffer(a.ARRAY_BUFFER,null);const J=a.createBuffer();return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,J),a.bufferData(a.ELEMENT_ARRAY_BUFFER,d,a.STATIC_DRAW),d.length}}function ae(){const j=`
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
      `,ne=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,c=r(n).getContext("webgl");Re(c,j,ne);const $=o(c);b(),c.clearColor(0,0,0,1),c.enable(c.DEPTH_TEST),c.clear(c.COLOR_BUFFER_BIT|c.DEPTH_BUFFER_BIT),c.drawElements(c.TRIANGLES,$,c.UNSIGNED_BYTE,0);function b(){const a=c.getUniformLocation(c.program,"u_MvpMatrix"),k=c.getUniformLocation(c.program,"u_LightColor"),R=c.getUniformLocation(c.program,"u_LightDir");c.uniform3f(k,1,1,1);const K=new ze([2,2,-2]);K.normalize(),c.uniform3fv(R,K.elements);const d=new C,H=new C;H.setLookAt(5,5,5,0,0,0,0,1,0);const l=new C;l.setPerspective(60,1/1,1,100),d.set(l).multiply(H),c.uniformMatrix4fv(a,!1,d.elements)}function o(a){const k=new Float32Array([-1,0,1,1,0,1,-1,1,1,1,1,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,1,-1,1,1,-1,-1,1,-1,1,1,-1,-1,1,1,1,1,1,-1,0,1,-1,0,-1,-1,1,1,-1,1,-1,1,0,1,1,0,-1,1,1,1,1,1,-1]),R=new Float32Array([.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.7,.2,.2,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1,.1,.4,.1]),K=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),d=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),H=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,H),a.bufferData(a.ARRAY_BUFFER,k,a.STATIC_DRAW);const l=a.getAttribLocation(a.program,"a_Position");a.vertexAttribPointer(l,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(l),a.bindBuffer(a.ARRAY_BUFFER,null);const u=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,R,a.STATIC_DRAW);const X=a.getAttribLocation(a.program,"a_Color");a.vertexAttribPointer(X,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(X),a.bindBuffer(a.ARRAY_BUFFER,null);const S=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,S),a.bufferData(a.ARRAY_BUFFER,K,a.STATIC_DRAW);const W=a.getAttribLocation(a.program,"a_Normal");a.vertexAttribPointer(W,3,a.FLOAT,!1,0,0),a.enableVertexAttribArray(W),a.bindBuffer(a.ARRAY_BUFFER,null);const J=a.createBuffer();return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,J),a.bufferData(a.ELEMENT_ARRAY_BUFFER,d,a.STATIC_DRAW),d.length}}return(j,ne)=>{const N=$e("dbtap");return He(),ke("div",null,[no,i("div",so,[i("div",co,[fo,i("div",_o,[de(i("canvas",{onDblclickOnce:ae,ref_key:"gl31",ref:n},null,544),[[N,ae]])])]),i("div",uo,[vo,i("div",lo,[de(i("canvas",{onDblclickOnce:I,ref_key:"gl32",ref:e},null,544),[[N,I]])])]),i("div",mo,[Ao,i("div",Ro,[de(i("canvas",{onDblclickOnce:U,ref_key:"gl33",ref:f},null,544),[[N,U]])])]),i("div",Eo,[Fo,i("div",bo,[de(i("canvas",{onDblclickOnce:z,ref_key:"gl34",ref:s},null,544),[[N,z]])])]),i("div",ho,[To,i("div",xo,[de(i("canvas",{onDblclickOnce:m,ref_key:"gl35",ref:M},null,544),[[N,m]])])])])])}}}),Co=i("header",null,"第九章：层次模型",-1),po={class:"example"},Lo={class:"item"},wo=i("div",{class:"desc"},"绘制两个矩形，模仿上臂和前臂，通过键盘W,A,S,D控制",-1),Mo={class:"canvas"},Po={class:"item"},So=i("div",{class:"desc"},"绘制更复杂的模型，一个机械手，通过键盘1,2,3,4,5,6,7,8控制",-1),Uo={class:"canvas"},Do=Ge({__name:"chapter-09",setup(v){const n=ue(null),e=ue(null);ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight});function f(){const M=`
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

      `,m=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,z=r(e),U=z.getContext("webgl");Re(U,M,m);const I=d(U);let ae=0,j=0,ne=0,N=0,c=10;const $=U.getUniformLocation(U.program,"u_MvpMatrix"),b=U.getUniformLocation(U.program,"u_NormalMatrix"),o=new C;o.setPerspective(50,z.width/z.height,1,100),o.lookAt(15,24,20,0,5,0,0,1,0),document.addEventListener("keydown",l=>{const{key:u}=l;switch(u){case"1":ae<135&&(ae+=c);break;case"2":ae>-135&&(ae-=c);break;case"3":j=(j+c)%360;break;case"4":j=(j-c)%360;break;case"5":ne=(ne+c)%360;break;case"6":ne=(ne-c)%360;break;case"7":N<60&&(N=(N+c)%360);break;case"8":N>-60&&(N=(N-c)%360);break;default:return}R(U,I,o,$,b)}),U.enable(U.DEPTH_TEST);let a=new C;const k=[];R(U,I,o,$,b);function R(l,u,X,S,W){l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),a.setTranslate(0,0,0),K(l,u,X,S,W,4,1,4),a.translate(0,1,0),a.rotate(ae,0,1,0),K(l,u,X,S,W,2,3,2),a.translate(0,3,0),a.rotate(j,1,0,0),K(l,u,X,S,W,1.8,4,1.8),a.translate(0,4,0),a.rotate(ne,0,1,0),K(l,u,X,S,W,4,4,1),k.push(new C(a)),a.translate(-2,3,1),a.rotate(N,0,1,0),K(l,u,X,S,W,1,1,2),a=k.pop(),a.translate(2,3,1),a.rotate(-N,0,1,0),K(l,u,X,S,W,1,1,2)}function K(l,u,X,S,W,J,te,ee){const re=new C(a);re.scale(J,te,ee);const x=new C;x.setInverseOf(re),x.transpose();const Y=new C(X).multiply(re);l.uniformMatrix4fv(S,!1,Y.elements),l.uniformMatrix4fv(W,!1,x.elements),l.drawElements(l.TRIANGLES,u,l.UNSIGNED_BYTE,0)}function d(l){var u=new Float32Array([-.5,0,.5,.5,0,.5,-.5,1,.5,.5,1,.5,-.5,0,.5,.5,0,.5,-.5,0,-.5,.5,0,-.5,-.5,0,-.5,.5,0,-.5,-.5,1,-.5,.5,1,-.5,-.5,1,-.5,.5,1,-.5,-.5,1,.5,.5,1,.5,-.5,0,.5,-.5,0,-.5,-.5,1,.5,-.5,1,-.5,.5,0,.5,.5,0,-.5,.5,1,.5,.5,1,-.5]),X=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),S=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]);H(l,"a_Position",u,l.FLOAT,3),H(l,"a_Normal",X,l.FLOAT,3),l.bindBuffer(l.ARRAY_BUFFER,null);var W=l.createBuffer();return l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,W),l.bufferData(l.ELEMENT_ARRAY_BUFFER,S,l.STATIC_DRAW),S.length}function H(l,u,X,S,W){var J=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,J),l.bufferData(l.ARRAY_BUFFER,X,l.STATIC_DRAW);var te=l.getAttribLocation(l.program,u);return l.vertexAttribPointer(te,W,S,!1,0,0),l.enableVertexAttribArray(te),!0}}function s(){const M=`
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
      `,m=`
      #ifdef GL_ES
      precision lowp float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,U=r(n).getContext("webgl");Re(U,M,m);const I=b(U),ae=new C,j=new C,ne=new C;j.lookAt(20,10,20,0,7,0,0,1,0),ne.setPerspective(60,1/1,1,100),U.enable(U.DEPTH_TEST),U.enable(U.POLYGON_OFFSET_FILL),U.clearColor(0,0,0,1),U.polygonOffset(1,1);let N=30,c=30;$(),document.addEventListener("keydown",o=>{const{key:a}=o;if(a==="a"&&(N-=10),a==="d"&&(N+=10),a==="w"){if(c>=90)return;c+=10}if(a==="s"){if(c<=0)return;c-=10}$()});function $(){U.clear(U.COLOR_BUFFER_BIT|U.DEPTH_BUFFER_BIT);const o=new C,a=new C,k=U.getUniformLocation(U.program,"u_MvpMatrix"),R=U.getUniformLocation(U.program,"u_NormalMatrix");o.translate(2,0,0),o.rotate(N,0,1,0),ae.set(ne).multiply(j).multiply(new C(o).scale(1.2,1,1.2)),a.set(o),a.invert(),a.transpose(),U.uniformMatrix4fv(k,!1,ae.elements),U.uniformMatrix4fv(R,!1,a.elements),U.drawElements(U.TRIANGLES,I,U.UNSIGNED_BYTE,0),o.translate(0,7,0),o.rotate(c,1,0,0),ae.set(ne).multiply(j).multiply(o),a.set(o),a.invert(),a.transpose(),U.uniformMatrix4fv(k,!1,ae.elements),U.uniformMatrix4fv(R,!1,a.elements),U.drawElements(U.TRIANGLES,I,U.UNSIGNED_BYTE,0)}function b(o){const a=new Float32Array([-1,0,1,1,0,1,-1,7,1,1,7,1,-1,0,1,1,0,1,-1,0,-1,1,0,-1,-1,0,-1,1,0,-1,-1,7,-1,1,7,-1,-1,7,-1,1,7,-1,-1,7,1,1,7,1,-1,0,1,-1,0,-1,-1,7,1,-1,7,-1,1,0,1,1,0,-1,1,7,1,1,7,-1]),k=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),R=new Uint8Array([0,1,2,1,2,3,4,5,6,5,6,7,8,9,10,9,10,11,12,13,14,13,14,15,16,17,18,17,18,19,20,21,22,21,22,23]),K=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,K),o.bufferData(o.ARRAY_BUFFER,a,o.STATIC_DRAW);const d=o.getAttribLocation(o.program,"a_Position");o.vertexAttribPointer(d,3,o.FLOAT,!1,0,0),o.enableVertexAttribArray(d);const H=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,H),o.bufferData(o.ARRAY_BUFFER,k,o.STATIC_DRAW);const l=o.getAttribLocation(o.program,"a_Normal");o.vertexAttribPointer(l,3,o.FLOAT,!1,0,0),o.enableVertexAttribArray(l);const u=o.createBuffer();return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,u),o.bufferData(o.ELEMENT_ARRAY_BUFFER,R,o.STATIC_DRAW),R.length}}return(M,m)=>{const z=$e("dbtap");return He(),ke("div",null,[Co,i("div",po,[i("div",Lo,[wo,i("div",Mo,[de(i("canvas",{onDblclickOnce:s,ref_key:"gl36",ref:n},null,544),[[z,s]])])]),i("div",Po,[So,i("div",Uo,[de(i("canvas",{onDblclickOnce:f,ref_key:"gl37",ref:e},null,544),[[z,f]])])])])])}}}),Ue=v=>(Ze("data-v-c3e12296"),v=v(),Ke(),v),yo=Ue(()=>i("header",null,"第十章：高级技术",-1)),Oo={class:"example"},Io={class:"item"},No=Ue(()=>i("div",{class:"desc"}," 通过鼠标拖拽旋转物体，监听鼠标的按下和放开和移动，计算xy方向上的移动距离，转化为新的旋转矩阵 ",-1)),Yo={class:"canvas"},Go={class:"item"},Ho=Ue(()=>i("div",{class:"desc"}," 鼠标选中物体，点击时，将物体绘制为单一颜色，然后判断点击的位置是否为这个颜色还是背景色来判断是否选中 ",-1)),ko={class:"canvas"},Vo={class:"item"},Wo=Ue(()=>i("div",{class:"desc"},"鼠标选中进阶，选中某个面",-1)),go={class:"canvas"},$o={class:"item"},Xo=Ue(()=>i("div",{class:"desc"}," 平视显示器HUD，由两个重叠的canvas实现，2dcanvas默认背景透明，3d也可以设置透明背景色来达到3d浮层的效果 ",-1)),jo={class:"canvas"},zo={class:"item"},qo=Ue(()=>i("div",{class:"desc"}," 雾化效果，分为线性雾化，即距离越远越模糊，颜色=表面颜色x距离占比+雾的颜色x另一边距离占比 ",-1)),Zo={class:"canvas"},Ko={class:"item"},Jo=Ue(()=>i("div",{class:"desc"}," 绘制圆形的点，gl_PointCoord来访问点内部的坐标范围为0-1，处理每个片元，判断片元距离中心点的距离，半径外的点就discard ",-1)),Qo={class:"canvas"},ea={class:"item"},ta=Ue(()=>i("div",{class:"desc"},"阿尔法混合，透明度混合",-1)),ra={class:"canvas"},oa={class:"item"},aa=Ue(()=>i("div",{class:"desc"}," 阿尔法混合，半透明立方体。需要关闭隐藏面消除功能，因为此功能会丢弃不会绘制的片元，此时需要从后往前绘制 ",-1)),ia={class:"canvas"},na={class:"item"},sa=Ue(()=>i("div",{class:"desc"}," 同时绘制不透明和透明的对象。开启隐藏面消除时，绘制A，然后绘制B,如果A在前面会，丢弃B，如果B在前面，会覆盖A，同时更新深度缓冲区（写操作）。绘制所有不透明物体后（A），锁定深度缓冲区的写操作，绘制B，如果B在后面，丢弃，符合预期，如果B在前面，由于半透明会进行混合。同时由于深度缓冲区被锁定了写操作，绘制B时，即使B在前面也不会更新颜色缓冲区，也就不会影响（半透明后面的会被丢弃）后续的绘制 ",-1)),ca={class:"canvas"},fa={class:"item"},_a=Ue(()=>i("div",{class:"desc"},"切换着色器，使用gl.useProgram来切换使用多个着色器",-1)),ua={class:"canvas"},va={class:"item"},la=Ue(()=>i("div",{class:"desc"}," 帧缓冲区包含颜色关联对象和深度关联对象，其中颜色对象可以是普通的也可以是纹理。在帧缓冲区中的绘制叫做离屏绘制，绘制的内容不会实时显示在页面上 ",-1)),da={class:"canvas"},ma={class:"item"},Aa=Ue(()=>i("div",{class:"desc"}," 实现阴影，需要使用两个着色器，一个用来计算阴影（视点移动到光源点，看不到的片元即阴影），一个用来绘制，将片元z值与1中的z值做对比，如果在阴影处则用较暗的颜色绘制。涉及着色器切换和帧缓冲区的内容 ",-1)),Ra={class:"canvas"},Ea={class:"item"},Fa=Ue(()=>i("div",{class:"desc"},"绘制高精度阴影",-1)),ba={class:"canvas"},ha={class:"item"},Ta=Ue(()=>i("div",{class:"desc"},"加载模型，obj文件和mlt文件，obj定义顶点和向量，mlt定义颜色",-1)),xa={class:"canvas"},Ba={class:"item"},Ca=Ue(()=>i("div",{class:"desc"}," 环境丢失，context-lost，电脑休眠或者其他程序接管了GPU会导致环境丢失，运行数据丢失。重要，WEBGL context丢失，主要是靠canvas的上下文丢失和上下文恢复事件 ",-1)),pa={class:"canvas"},La=Ge({__name:"chapter-10",setup(v){const n=ue(null),e=ue(null),f=ue(null),s=ue(null),M=ue(null),m=ue(null),z=ue(null),U=ue(null),I=ue(null),ae=ue(null),j=ue(null),ne=ue(null),N=ue(null),c=ue(null),$=ue(null),b=ue(null),o="/vue-hash";ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight,r(s).width=r(s).clientWidth,r(s).height=r(s).clientHeight,r(M).width=r(M).clientWidth,r(M).height=r(M).clientHeight,r(m).width=r(m).clientWidth,r(m).height=r(m).clientHeight,r(z).width=r(z).clientWidth,r(z).height=r(z).clientHeight,r(U).width=r(U).clientWidth,r(U).height=r(U).clientHeight,r(I).width=r(I).clientWidth,r(I).height=r(I).clientHeight,r(ae).width=r(ae).clientWidth,r(ae).height=r(ae).clientHeight,r(j).width=r(j).clientWidth,r(j).height=r(j).clientHeight,r(ne).width=r(ne).clientWidth,r(ne).height=r(ne).clientHeight,r(N).width=r(N).clientWidth,r(N).height=r(N).clientHeight,r(c).width=r(c).clientWidth,r(c).height=r(c).clientHeight,r($).width=r($).clientWidth,r($).height=r($).clientHeight,r(b).width=r(b).clientWidth,r(b).height=r(b).clientHeight});function a(){var Y=`
        attribute vec4 a_Position;
        uniform mat4 u_ModelMatrix;
        void main() {
          gl_Position = u_ModelMatrix * a_Position;
        }
      `,p=`
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
      `,y=r(b);y.addEventListener("webglcontextlost",Fe,!1),y.addEventListener("webglcontextrestored",function(D){oe(y)},!1),oe(y);var _=45,P=0,L,V=Date.now();function oe(D){var g=D.getContext("webgl");if(!g){console.log("Failed to get the rendering context for WebGL");return}if(!Re(g,Y,p)){console.log("Failed to intialize shaders.");return}var q=Q(g);if(q<0){console.log("Failed to set the positions of the vertices");return}g.clearColor(0,0,0,1);var fe=g.getUniformLocation(g.program,"u_ModelMatrix");if(!fe){console.log("Failed to get the storage location of u_ModelMatrix");return}var ve=new C,Z=function(){P=se(P),T(g,q,P,ve,fe),L=requestAnimationFrame(Z,D)};Z()}function Fe(D){cancelAnimationFrame(L),D.preventDefault()}function Q(D){var g=new Float32Array([0,.5,-.5,-.5,.5,-.5]),q=3,fe=D.createBuffer();if(!fe)return console.log("Failed to create the buffer object"),-1;D.bindBuffer(D.ARRAY_BUFFER,fe),D.bufferData(D.ARRAY_BUFFER,g,D.STATIC_DRAW);var ve=D.getAttribLocation(D.program,"a_Position");return ve<0?(console.log("Failed to get the storage location of a_Position"),-1):(D.vertexAttribPointer(ve,2,D.FLOAT,!1,0,0),D.enableVertexAttribArray(ve),D.bindBuffer(D.ARRAY_BUFFER,null),q)}function T(D,g,q,fe,ve){fe.setRotate(q,0,0,1),D.uniformMatrix4fv(ve,!1,fe.elements),D.clear(D.COLOR_BUFFER_BIT),D.drawArrays(D.TRIANGLES,0,g)}function se(D){var g=Date.now(),q=g-V;V=g;var fe=D+_*q/1e3;return fe%=360}}function k(){var Y=`
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
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,y=r($),_=y.getContext("webgl");if(!Re(_,Y,p)){console.log("Failed to intialize shaders.");return}_.clearColor(.2,.2,.2,1),_.enable(_.DEPTH_TEST);var P=_.program;if(P.a_Position=_.getAttribLocation(P,"a_Position"),P.a_Normal=_.getAttribLocation(P,"a_Normal"),P.a_Color=_.getAttribLocation(P,"a_Color"),P.u_MvpMatrix=_.getUniformLocation(P,"u_MvpMatrix"),P.u_NormalMatrix=_.getUniformLocation(P,"u_NormalMatrix"),P.a_Position<0||P.a_Normal<0||P.a_Color<0||!P.u_MvpMatrix||!P.u_NormalMatrix)return;var L=q(_,P);if(!L){console.log("Failed to set the vertex information");return}var V=new C;V.setPerspective(30,y.width/y.height,1,5e3),V.lookAt(0,500,200,0,0,0,0,1,0),ve(o+"/micro-vue-static/lab-static/images/webgl-practice/cube.obj",_,L,60,!0);var oe=0,Fe=30,Q=Date.now(),T=new C,se=new C,D=new C,g=function(){oe=me(oe),le(_,_.program,oe,V,L),requestAnimationFrame(g,y)};g();function q(t,E){var F=new Object;return F.vertexBuffer=fe(t,E.a_Position,3,t.FLOAT),F.normalBuffer=fe(t,E.a_Normal,3,t.FLOAT),F.colorBuffer=fe(t,E.a_Color,4,t.FLOAT),F.indexBuffer=t.createBuffer(),!F.vertexBuffer||!F.normalBuffer||!F.colorBuffer||!F.indexBuffer?null:(t.bindBuffer(t.ARRAY_BUFFER,null),F)}function fe(t,E,F,O){var h=t.createBuffer();return h?(t.bindBuffer(t.ARRAY_BUFFER,h),t.vertexAttribPointer(E,F,O,!1,0,0),t.enableVertexAttribArray(E),h):(console.log("Failed to create the buffer object"),null)}function ve(t,E,F,O,h){var Te=new XMLHttpRequest;Te.onreadystatechange=function(){Te.readyState===4&&Te.status!==404&&_e(Te.responseText,t,E,F,O,h)},Te.open("GET",t,!0),Te.send()}var Z=null,B=null;function _e(t,E,F,O,h,Te){var Pe=new Ae(E),pe=Pe.parse(t,h,Te);if(!pe){Z=null,B=null,console.log("OBJ file parsing error.");return}Z=Pe}function le(t,E,F,O,h){Z!=null&&Z.isMTLComplete()&&(B=G(t,h,Z),Z=null),B&&(t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),T.setRotate(F,1,0,0),T.rotate(F,0,1,0),T.rotate(F,0,0,1),D.setInverseOf(T),D.transpose(),t.uniformMatrix4fv(E.u_NormalMatrix,!1,D.elements),se.set(O),se.multiply(T),t.uniformMatrix4fv(E.u_MvpMatrix,!1,se.elements),t.drawElements(t.TRIANGLES,B.indices.length,t.UNSIGNED_SHORT,0))}function G(t,E,F){var O=F.getDrawingInfo();return t.bindBuffer(t.ARRAY_BUFFER,E.vertexBuffer),t.bufferData(t.ARRAY_BUFFER,O.vertices,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,E.normalBuffer),t.bufferData(t.ARRAY_BUFFER,O.normals,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,E.colorBuffer),t.bufferData(t.ARRAY_BUFFER,O.colors,t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,E.indexBuffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,O.indices,t.STATIC_DRAW),O}function me(t){var E=Date.now(),F=E-Q;Q=E;var O=t+Fe*F/1e3;return O%360}var Ae=function(t){this.fileName=t,this.mtls=new Array(0),this.objects=new Array(0),this.vertices=new Array(0),this.normals=new Array(0)};Ae.prototype.parse=function(t,E,F){var O=t.split(`
`);O.push(null);for(var h=0,Te=null,Pe="",pe,De=new ce;(pe=O[h++])!=null;){De.init(pe);var Xe=De.getWord();if(Xe!=null)switch(Xe){case"#":continue;case"mtllib":var Ne=this.parseMtllib(De,this.fileName),ye=new Ce;this.mtls.push(ye);var we=new XMLHttpRequest;we.onreadystatechange=function(){we.readyState==4&&(we.status!=404?Be(we.responseText,ye):ye.complete=!0)},we.open("GET",Ne,!0),we.send();continue;case"o":case"g":var Ve=this.parseObjectName(De);this.objects.push(Ve),Te=Ve;continue;case"v":var je=this.parseVertex(De,E);this.vertices.push(je);continue;case"vn":var Ye=this.parseNormal(De);this.normals.push(Ye);continue;case"usemtl":Pe=this.parseUsemtl(De);continue;case"f":var We=this.parseFace(De,Pe,this.vertices,F);Te.addFace(We);continue}}return!0},Ae.prototype.parseMtllib=function(t,E){var F=E.lastIndexOf("/"),O="";return F>0&&(O=E.substr(0,F+1)),O+t.getWord()},Ae.prototype.parseObjectName=function(t){var E=t.getWord();return new be(E)},Ae.prototype.parseVertex=function(t,E){var F=t.getFloat()*E,O=t.getFloat()*E,h=t.getFloat()*E;return new Le(F,O,h)},Ae.prototype.parseNormal=function(t){var E=t.getFloat(),F=t.getFloat(),O=t.getFloat();return new w(E,F,O)},Ae.prototype.parseUsemtl=function(t){return t.getWord()},Ae.prototype.parseFace=function(t,E,F,O){for(var h=new A(E);;){var Te=t.getWord();if(Te==null)break;var Pe=Te.split("/");if(Pe.length>=1){var pe=parseInt(Pe[0])-1;h.vIndices.push(pe)}if(Pe.length>=3){var De=parseInt(Pe[2])-1;h.nIndices.push(De)}else h.nIndices.push(-1)}var Xe=[F[h.vIndices[0]].x,F[h.vIndices[0]].y,F[h.vIndices[0]].z],Ne=[F[h.vIndices[1]].x,F[h.vIndices[1]].y,F[h.vIndices[1]].z],ye=[F[h.vIndices[2]].x,F[h.vIndices[2]].y,F[h.vIndices[2]].z],we=xe(Xe,Ne,ye);if(we==null){if(h.vIndices.length>=4){var Ve=[F[h.vIndices[3]].x,F[h.vIndices[3]].y,F[h.vIndices[3]].z];we=xe(Ne,ye,Ve)}we==null&&(we=[0,1,0])}if(O&&(we[0]=-we[0],we[1]=-we[1],we[2]=-we[2]),h.normal=new w(we[0],we[1],we[2]),h.vIndices.length>3){for(var je=h.vIndices.length-2,Ye=new Array(je*3),We=new Array(je*3),Se=0;Se<je;Se++)Ye[Se*3+0]=h.vIndices[0],Ye[Se*3+1]=h.vIndices[Se+1],Ye[Se*3+2]=h.vIndices[Se+2],We[Se*3+0]=h.nIndices[0],We[Se*3+1]=h.nIndices[Se+1],We[Se*3+2]=h.nIndices[Se+2];h.vIndices=Ye,h.nIndices=We}return h.numIndices=h.vIndices.length,h};function Be(t,E){var F=t.split(`
`);F.push(null);for(var O=0,h,Te="",Pe=new ce;(h=F[O++])!=null;){Pe.init(h);var pe=Pe.getWord();if(pe!=null)switch(pe){case"#":continue;case"newmtl":Te=E.parseNewmtl(Pe);continue;case"Kd":if(Te=="")continue;var De=E.parseRGB(Pe,Te);E.materials.push(De),Te="";continue}}E.complete=!0}Ae.prototype.isMTLComplete=function(){if(this.mtls.length==0)return!0;for(var t=0;t<this.mtls.length;t++)if(!this.mtls[t].complete)return!1;return!0},Ae.prototype.findColor=function(t){for(var E=0;E<this.mtls.length;E++)for(var F=0;F<this.mtls[E].materials.length;F++)if(this.mtls[E].materials[F].name==t)return this.mtls[E].materials[F].color;return new Ee(.8,.8,.8,1)},Ae.prototype.getDrawingInfo=function(){for(var t=0,E=0;E<this.objects.length;E++)t+=this.objects[E].numIndices;for(var F=t,O=new Float32Array(F*3),h=new Float32Array(F*3),Te=new Float32Array(F*4),Pe=new Uint16Array(t),pe=0,E=0;E<this.objects.length;E++)for(var De=this.objects[E],Xe=0;Xe<De.faces.length;Xe++)for(var Ne=De.faces[Xe],ye=this.findColor(Ne.materialName),we=Ne.normal,Ve=0;Ve<Ne.vIndices.length;Ve++){Pe[pe]=pe;var je=Ne.vIndices[Ve],Ye=this.vertices[je];O[pe*3+0]=Ye.x,O[pe*3+1]=Ye.y,O[pe*3+2]=Ye.z,Te[pe*4+0]=ye.r,Te[pe*4+1]=ye.g,Te[pe*4+2]=ye.b,Te[pe*4+3]=ye.a;var We=Ne.nIndices[Ve];if(We>=0){var Se=this.normals[We];h[pe*3+0]=Se.x,h[pe*3+1]=Se.y,h[pe*3+2]=Se.z}else h[pe*3+0]=we.x,h[pe*3+1]=we.y,h[pe*3+2]=we.z;pe++}return new ie(O,h,Te,Pe)};var Ce=function(){this.complete=!1,this.materials=new Array(0)};Ce.prototype.parseNewmtl=function(t){return t.getWord()},Ce.prototype.parseRGB=function(t,E){var F=t.getFloat(),O=t.getFloat(),h=t.getFloat();return new Me(E,F,O,h,1)};var Me=function(t,E,F,O,h){this.name=t,this.color=new Ee(E,F,O,h)},Le=function(t,E,F){this.x=t,this.y=E,this.z=F},w=function(t,E,F){this.x=t,this.y=E,this.z=F},Ee=function(t,E,F,O){this.r=t,this.g=E,this.b=F,this.a=O},be=function(t){this.name=t,this.faces=new Array(0),this.numIndices=0};be.prototype.addFace=function(t){this.faces.push(t),this.numIndices+=t.numIndices};var A=function(t){this.materialName=t,t==null&&(this.materialName=""),this.vIndices=new Array(0),this.nIndices=new Array(0)},ie=function(t,E,F,O){this.vertices=t,this.normals=E,this.colors=F,this.indices=O},ce=function(t){this.str,this.index,this.init(t)};ce.prototype.init=function(t){this.str=t,this.index=0},ce.prototype.skipDelimiters=function(){for(var t=this.index,E=this.str.length;t<E;t++){var F=this.str.charAt(t);if(!(F=="	"||F==" "||F=="("||F==")"||F=='"'))break}this.index=t},ce.prototype.skipToNextWord=function(){this.skipDelimiters();var t=he(this.str,this.index);this.index+=t+1},ce.prototype.getWord=function(){this.skipDelimiters();var t=he(this.str,this.index);if(t==0)return null;var E=this.str.substr(this.index,t);return this.index+=t+1,E},ce.prototype.getInt=function(){return parseInt(this.getWord())},ce.prototype.getFloat=function(){return parseFloat(this.getWord())};function he(t,E){for(var F=E,O=t.length;F<O;F++){var h=t.charAt(F);if(h=="	"||h==" "||h=="("||h==")"||h=='"')break}return F-E}function xe(t,E,F){for(var O=new Float32Array(3),h=new Float32Array(3),Te=0;Te<3;Te++)O[Te]=t[Te]-E[Te],h[Te]=F[Te]-E[Te];var Pe=new Float32Array(3);Pe[0]=O[1]*h[2]-O[2]*h[1],Pe[1]=O[2]*h[0]-O[0]*h[2],Pe[2]=O[0]*h[1]-O[1]*h[0];var pe=new ze(Pe);return pe.normalize(),pe.elements}}function R(){var Y=`
        attribute vec4 a_Position;
        uniform mat4 u_MvpMatrix;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
        }
      `,p=`
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
      `,y=`
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
      `,P=2048,L=2048,V=0,oe=40,Fe=2,Q=r(c),T=Q.getContext("webgl"),se=qe(T,Y,p);se.a_Position=T.getAttribLocation(se,"a_Position"),se.u_MvpMatrix=T.getUniformLocation(se,"u_MvpMatrix");var D=qe(T,y,_);if(D.a_Position=T.getAttribLocation(D,"a_Position"),D.a_Color=T.getAttribLocation(D,"a_Color"),D.u_MvpMatrix=T.getUniformLocation(D,"u_MvpMatrix"),D.u_MvpMatrixFromLight=T.getUniformLocation(D,"u_MvpMatrixFromLight"),D.u_ShadowMap=T.getUniformLocation(D,"u_ShadowMap"),D.a_Position<0||D.a_Color<0||!D.u_MvpMatrix||!D.u_MvpMatrixFromLight||!D.u_ShadowMap){console.log("Failed to get the storage location of attribute or uniform variable from normalProgram");return}var g=A(T),q=be(T);if(!g||!q){console.log("Failed to set the vertex information");return}var fe=he(T);if(!fe){console.log("Failed to initialize frame buffer object");return}T.activeTexture(T.TEXTURE0),T.bindTexture(T.TEXTURE_2D,fe.texture),T.clearColor(0,0,0,1),T.enable(T.DEPTH_TEST);var ve=new C;ve.setPerspective(70,P/L,1,200),ve.lookAt(V,oe,Fe,0,0,0,0,1,0);var Z=new C;Z.setPerspective(45,Q.width/Q.height,1,100),Z.lookAt(0,7,9,0,0,0,0,1,0);var B=0,_e=new C,le=new C,G=new C,me=new C,Ae=40,Be=Date.now(),Ce=function(){B=xe(B),T.bindFramebuffer(T.FRAMEBUFFER,fe),T.viewport(0,0,L,L),T.clear(T.COLOR_BUFFER_BIT|T.DEPTH_BUFFER_BIT),T.useProgram(se),Me(T,se,g,B,ve),_e.set(me),Le(T,se,q,ve),le.set(me),T.bindFramebuffer(T.FRAMEBUFFER,null),T.viewport(0,0,Q.width,Q.height),T.clear(T.COLOR_BUFFER_BIT|T.DEPTH_BUFFER_BIT),T.useProgram(D),T.uniform1i(D.u_ShadowMap,0),T.uniformMatrix4fv(D.u_MvpMatrixFromLight,!1,_e.elements),Me(T,D,g,B,Z),T.uniformMatrix4fv(D.u_MvpMatrixFromLight,!1,le.elements),Le(T,D,q,Z),window.requestAnimationFrame(Ce,Q)};Ce();function Me(t,E,F,O,h){G.setRotate(O,0,1,0),w(t,E,F,h)}function Le(t,E,F,O){G.setRotate(-45,0,1,1),w(t,E,F,O)}function w(t,E,F,O){Ee(t,E.a_Position,F.vertexBuffer),E.a_Color!=null&&Ee(t,E.a_Color,F.colorBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,F.indexBuffer),me.set(O),me.multiply(G),t.uniformMatrix4fv(E.u_MvpMatrix,!1,me.elements),t.drawElements(t.TRIANGLES,F.numIndices,t.UNSIGNED_BYTE,0)}function Ee(t,E,F){t.bindBuffer(t.ARRAY_BUFFER,F),t.vertexAttribPointer(E,F.num,F.type,!1,0,0),t.enableVertexAttribArray(E)}function be(t){var E=new Float32Array([3,-1.7,2.5,-3,-1.7,2.5,-3,-1.7,-2.5,3,-1.7,-2.5]),F=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]),O=new Uint8Array([0,1,2,0,2,3]),h=new Object;return h.vertexBuffer=ie(t,E,3,t.FLOAT),h.colorBuffer=ie(t,F,3,t.FLOAT),h.indexBuffer=ce(t,O,t.UNSIGNED_BYTE),!h.vertexBuffer||!h.colorBuffer||!h.indexBuffer?null:(h.numIndices=O.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),h)}function A(t){var E=new Float32Array([-.8,3.5,0,.8,3.5,0,0,3.5,1.8]),F=new Float32Array([1,.5,0,1,.5,0,1,0,0]),O=new Uint8Array([0,1,2]),h=new Object;return h.vertexBuffer=ie(t,E,3,t.FLOAT),h.colorBuffer=ie(t,F,3,t.FLOAT),h.indexBuffer=ce(t,O,t.UNSIGNED_BYTE),!h.vertexBuffer||!h.colorBuffer||!h.indexBuffer?null:(h.numIndices=O.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),h)}function ie(t,E,F,O){var h=t.createBuffer();return h?(t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,E,t.STATIC_DRAW),h.num=F,h.type=O,h):(console.log("Failed to create the buffer object"),null)}function ce(t,E,F){var O=t.createBuffer();return O?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,O),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),O.type=F,O):(console.log("Failed to create the buffer object"),null)}function he(t){var E,F,O,h=function(){return E&&t.deleteFramebuffer(E),F&&t.deleteTexture(F),O&&t.deleteRenderbuffer(O),null};if(E=t.createFramebuffer(),!E)return console.log("Failed to create frame buffer object"),h();if(F=t.createTexture(),!F)return console.log("Failed to create texture object"),h();if(t.bindTexture(t.TEXTURE_2D,F),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,P,L,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),O=t.createRenderbuffer(),!O)return console.log("Failed to create renderbuffer object"),h();t.bindRenderbuffer(t.RENDERBUFFER,O),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,P,L),t.bindFramebuffer(t.FRAMEBUFFER,E),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,F,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,O);var Te=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.FRAMEBUFFER_COMPLETE!==Te?(console.log("Frame buffer object is incomplete: "+Te.toString()),h()):(E.texture=F,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),E)}function xe(t){var E=Date.now(),F=E-Be;Be=E;var O=t+Ae*F/1e3;return O%360}}function K(){var Y=`
        attribute vec4 a_Position;
        uniform mat4 u_MvpMatrix;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
        }
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        void main() {
          gl_FragColor = vec4(gl_FragCoord.z, 0.0, 0.0, 0.0);
        }
      `,y=`
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
      `,P=2048,L=2048,V=0,oe=7,Fe=2,Q=r(N),T=Q.getContext("webgl");if(!T){console.log("Failed to get the rendering context for WebGL");return}var se=qe(T,Y,p);if(se.a_Position=T.getAttribLocation(se,"a_Position"),se.u_MvpMatrix=T.getUniformLocation(se,"u_MvpMatrix"),se.a_Position<0||!se.u_MvpMatrix){console.log("Failed to get the storage location of attribute or uniform variable from shadowProgram");return}var D=qe(T,y,_);if(D.a_Position=T.getAttribLocation(D,"a_Position"),D.a_Color=T.getAttribLocation(D,"a_Color"),D.u_MvpMatrix=T.getUniformLocation(D,"u_MvpMatrix"),D.u_MvpMatrixFromLight=T.getUniformLocation(D,"u_MvpMatrixFromLight"),D.u_ShadowMap=T.getUniformLocation(D,"u_ShadowMap"),D.a_Position<0||D.a_Color<0||!D.u_MvpMatrix||!D.u_MvpMatrixFromLight||!D.u_ShadowMap){console.log("Failed to get the storage location of attribute or uniform variable from normalProgram");return}var g=A(T),q=be(T);if(!g||!q){console.log("Failed to set the vertex information");return}var fe=he(T);if(!fe){console.log("Failed to initialize frame buffer object");return}T.activeTexture(T.TEXTURE0),T.bindTexture(T.TEXTURE_2D,fe.texture),T.clearColor(0,0,0,1),T.enable(T.DEPTH_TEST);var ve=new C;ve.setPerspective(70,P/L,1,100),ve.lookAt(V,oe,Fe,0,0,0,0,1,0);var Z=new C;Z.setPerspective(45,Q.width/Q.height,1,100),Z.lookAt(0,7,9,0,0,0,0,1,0);var B=40,_e=Date.now(),le=0,G=new C,me=new C,Ae=new C,Be=new C,Ce=function(){le=xe(le),T.bindFramebuffer(T.FRAMEBUFFER,fe),T.viewport(0,0,L,L),T.clear(T.COLOR_BUFFER_BIT|T.DEPTH_BUFFER_BIT),T.useProgram(se),Le(T,se,g,le,ve),Ae.set(me),w(T,se,q,ve),Be.set(me),T.bindFramebuffer(T.FRAMEBUFFER,null),T.viewport(0,0,Q.width,Q.height),T.clear(T.COLOR_BUFFER_BIT|T.DEPTH_BUFFER_BIT),T.useProgram(D),T.uniform1i(D.u_ShadowMap,0),T.uniformMatrix4fv(D.u_MvpMatrixFromLight,!1,Ae.elements),Le(T,D,g,le,Z),T.uniformMatrix4fv(D.u_MvpMatrixFromLight,!1,Be.elements),w(T,D,q,Z),requestAnimationFrame(Ce,Q)};Ce();function Me(t,E,F,O){Ee(t,E.a_Position,F.vertexBuffer),E.a_Color!=null&&Ee(t,E.a_Color,F.colorBuffer),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,F.indexBuffer),me.set(O),me.multiply(G),t.uniformMatrix4fv(E.u_MvpMatrix,!1,me.elements),t.drawElements(t.TRIANGLES,F.numIndices,t.UNSIGNED_BYTE,0)}function Le(t,E,F,O,h){G.setRotate(O,0,1,0),Me(t,E,F,h)}function w(t,E,F,O){G.setRotate(-45,0,1,1),Me(t,E,F,O)}function Ee(t,E,F){t.bindBuffer(t.ARRAY_BUFFER,F),t.vertexAttribPointer(E,F.num,F.type,!1,0,0),t.enableVertexAttribArray(E)}function be(t){var E=new Float32Array([3,-1.7,2.5,-3,-1.7,2.5,-3,-1.7,-2.5,3,-1.7,-2.5]),F=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]),O=new Uint8Array([0,1,2,0,2,3]),h=new Object;return h.vertexBuffer=ie(t,E,3,t.FLOAT),h.colorBuffer=ie(t,F,3,t.FLOAT),h.indexBuffer=ce(t,O,t.UNSIGNED_BYTE),!h.vertexBuffer||!h.colorBuffer||!h.indexBuffer?null:(h.numIndices=O.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),h)}function A(t){var E=new Float32Array([-.8,3.5,0,.8,3.5,0,0,3.5,1.8]),F=new Float32Array([1,.5,0,1,.5,0,1,0,0]),O=new Uint8Array([0,1,2]),h=new Object;return h.vertexBuffer=ie(t,E,3,t.FLOAT),h.colorBuffer=ie(t,F,3,t.FLOAT),h.indexBuffer=ce(t,O,t.UNSIGNED_BYTE),!h.vertexBuffer||!h.colorBuffer||!h.indexBuffer?null:(h.numIndices=O.length,t.bindBuffer(t.ARRAY_BUFFER,null),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null),h)}function ie(t,E,F,O){var h=t.createBuffer();return h?(t.bindBuffer(t.ARRAY_BUFFER,h),t.bufferData(t.ARRAY_BUFFER,E,t.STATIC_DRAW),h.num=F,h.type=O,h):(console.log("Failed to create the buffer object"),null)}function ce(t,E,F){var O=t.createBuffer();return O?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,O),t.bufferData(t.ELEMENT_ARRAY_BUFFER,E,t.STATIC_DRAW),O.type=F,O):(console.log("Failed to create the buffer object"),null)}function he(t){var E,F,O,h=function(){return E&&t.deleteFramebuffer(E),F&&t.deleteTexture(F),O&&t.deleteRenderbuffer(O),null};if(E=t.createFramebuffer(),!E)return console.log("Failed to create frame buffer object"),h();if(F=t.createTexture(),!F)return console.log("Failed to create texture object"),h();if(t.bindTexture(t.TEXTURE_2D,F),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,P,L,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),O=t.createRenderbuffer(),!O)return console.log("Failed to create renderbuffer object"),h();t.bindRenderbuffer(t.RENDERBUFFER,O),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,P,L),t.bindFramebuffer(t.FRAMEBUFFER,E),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,F,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,O);var Te=t.checkFramebufferStatus(t.FRAMEBUFFER);return t.FRAMEBUFFER_COMPLETE!==Te?(console.log("Frame buffer object is incomplete: "+Te.toString()),h()):(E.texture=F,t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),E)}function xe(t){var E=Date.now(),F=E-_e;_e=E;var O=t+B*F/1e3;return O%360}}function d(){var Y=`
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
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform sampler2D u_Sampler;
        varying vec2 v_TexCoord;
        void main() {
          gl_FragColor = texture2D(u_Sampler, v_TexCoord);
        }
      `,y=256,_=256,P=r(ne),L=P.getContext("webgl");Re(L,Y,p);var V=L.program;V.a_Position=L.getAttribLocation(V,"a_Position"),V.a_TexCoord=L.getAttribLocation(V,"a_TexCoord"),V.u_MvpMatrix=L.getUniformLocation(V,"u_MvpMatrix");var oe=_e(L),Fe=le(L),Q=Ae(L),T=Be(L);L.enable(L.DEPTH_TEST);var se=new C;se.setPerspective(30,P.width/P.height,1,100),se.lookAt(0,0,7,0,0,0,0,1,0);var D=new C;D.setPerspective(30,y/_,1,100),D.lookAt(0,2,7,0,0,0,0,1,0);var g=0,q=new C,fe=new C,ve=30,Z=Date.now(),B=function(){g=be(g),Ce(L,P,T,Fe,oe,g,Q,se,D),window.requestAnimationFrame(B,P)};B();function _e(A){var ie=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),ce=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),he=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),xe=new Object;return xe.vertexBuffer=G(A,ie,3,A.FLOAT),xe.texCoordBuffer=G(A,ce,2,A.FLOAT),xe.indexBuffer=me(A,he,A.UNSIGNED_BYTE),xe.numIndices=he.length,A.bindBuffer(A.ARRAY_BUFFER,null),A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,null),xe}function le(A){var ie=new Float32Array([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),ce=new Float32Array([1,1,0,1,0,0,1,0]),he=new Uint8Array([0,1,2,0,2,3]),xe=new Object;return xe.vertexBuffer=G(A,ie,3,A.FLOAT),xe.texCoordBuffer=G(A,ce,2,A.FLOAT),xe.indexBuffer=me(A,he,A.UNSIGNED_BYTE),xe.numIndices=he.length,A.bindBuffer(A.ARRAY_BUFFER,null),A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,null),xe}function G(A,ie,ce,he){var xe=A.createBuffer();return A.bindBuffer(A.ARRAY_BUFFER,xe),A.bufferData(A.ARRAY_BUFFER,ie,A.STATIC_DRAW),xe.num=ce,xe.type=he,xe}function me(A,ie,ce){var he=A.createBuffer();return A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,he),A.bufferData(A.ELEMENT_ARRAY_BUFFER,ie,A.STATIC_DRAW),he.type=ce,he}function Ae(A){var ie=A.createTexture(),ce=A.getUniformLocation(A.program,"u_Sampler"),he=new Image;return he.onload=function(){A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,1),A.bindTexture(A.TEXTURE_2D,ie),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.LINEAR),A.texImage2D(A.TEXTURE_2D,0,A.RGBA,A.RGBA,A.UNSIGNED_BYTE,he),A.uniform1i(ce,0),A.bindTexture(A.TEXTURE_2D,null)},he.src=o+"/micro-vue-static/lab-static/images/webgl-practice/sky-roof.jpg",ie}function Be(A){var ie,ce,he,xe=function(){return ie&&A.deleteFramebuffer(ie),ce&&A.deleteTexture(ce),he&&A.deleteRenderbuffer(he),null};ie=A.createFramebuffer(),ce=A.createTexture(),A.bindTexture(A.TEXTURE_2D,ce),A.texImage2D(A.TEXTURE_2D,0,A.RGBA,y,_,0,A.RGBA,A.UNSIGNED_BYTE,null),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.LINEAR),ie.texture=ce,he=A.createRenderbuffer(),A.bindRenderbuffer(A.RENDERBUFFER,he),A.renderbufferStorage(A.RENDERBUFFER,A.DEPTH_COMPONENT16,y,_),A.bindFramebuffer(A.FRAMEBUFFER,ie),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ce,0),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.DEPTH_ATTACHMENT,A.RENDERBUFFER,he);var t=A.checkFramebufferStatus(A.FRAMEBUFFER);return A.FRAMEBUFFER_COMPLETE!==t?(console.log("Frame buffer object is incomplete: "+t.toString()),xe()):(A.bindFramebuffer(A.FRAMEBUFFER,null),A.bindTexture(A.TEXTURE_2D,null),A.bindRenderbuffer(A.RENDERBUFFER,null),ie)}function Ce(A,ie,ce,he,xe,t,E,F,O){A.bindFramebuffer(A.FRAMEBUFFER,ce),A.viewport(0,0,y,_),A.clearColor(0,.4,.4,1),A.clear(A.COLOR_BUFFER_BIT|A.DEPTH_BUFFER_BIT),Me(A,A.program,xe,t,E,O),A.bindFramebuffer(A.FRAMEBUFFER,null),A.viewport(0,0,ie.width,ie.height),A.clearColor(0,0,0,1),A.clear(A.COLOR_BUFFER_BIT|A.DEPTH_BUFFER_BIT),Le(A,A.program,he,t,ce.texture,F)}function Me(A,ie,ce,he,xe,t){q.setRotate(20,1,0,0),q.rotate(he,0,1,0),fe.set(t),fe.multiply(q),A.uniformMatrix4fv(ie.u_MvpMatrix,!1,fe.elements),w(A,ie,ce,xe)}function Le(A,ie,ce,he,xe,t){q.setTranslate(0,0,1),q.rotate(20,1,0,0),q.rotate(he,0,1,0),fe.set(t),fe.multiply(q),A.uniformMatrix4fv(ie.u_MvpMatrix,!1,fe.elements),w(A,ie,ce,xe)}function w(A,ie,ce,he){Ee(A,ie.a_Position,ce.vertexBuffer),Ee(A,ie.a_TexCoord,ce.texCoordBuffer),A.activeTexture(A.TEXTURE0),A.bindTexture(A.TEXTURE_2D,he),A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,ce.indexBuffer),A.drawElements(A.TRIANGLES,ce.numIndices,ce.indexBuffer.type,0)}function Ee(A,ie,ce){A.bindBuffer(A.ARRAY_BUFFER,ce),A.vertexAttribPointer(ie,ce.num,ce.type,!1,0,0),A.enableVertexAttribArray(ie)}function be(A){var ie=Date.now(),ce=ie-Z;Z=ie;var he=A+ve*ce/1e3;return he%360}}function H(){const Y=`
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
      `,p=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      varying vec4 v_Color;
      void main() {
        gl_FragColor = v_Color;
      }
      `,y=`
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
      `,P=r(j),L=P.getContext("webgl"),V=Le(L,Y,p),oe=Le(L,y,_);V.a_Position=L.getAttribLocation(V,"a_Position"),V.a_Normal=L.getAttribLocation(V,"a_Normal"),V.u_MvpMatrix=L.getUniformLocation(V,"u_MvpMatrix"),V.u_NormalMatrix=L.getUniformLocation(V,"u_NormalMatrix"),oe.a_Position=L.getAttribLocation(oe,"a_Position"),oe.a_Normal=L.getAttribLocation(oe,"a_Normal"),oe.a_TexCoord=L.getAttribLocation(oe,"a_TexCoord"),oe.u_MvpMatrix=L.getUniformLocation(oe,"u_MvpMatrix"),oe.u_NormalMatrix=L.getUniformLocation(oe,"u_NormalMatrix"),oe.u_Sampler=L.getUniformLocation(oe,"u_Sampler");const Fe=Be(L),Q=Ae(L,oe);L.enable(L.DEPTH_TEST),L.clearColor(0,0,0,1);const T=new C;T.setPerspective(30,P.width/P.height,1,100),T.lookAt(0,0,15,0,0,0,0,1,0);const se=new C,D=new C,g=new C;let q=0;const fe=30;let ve=Date.now();const Z=function(){q=me(q),L.clear(L.COLOR_BUFFER_BIT|L.DEPTH_BUFFER_BIT),_e(L,V,Fe,-2,q,T),B(L,oe,Fe,Q,2,q,T),requestAnimationFrame(Z,P)};Z();function B(w,Ee,be,A,ie,ce,he){w.useProgram(Ee),G(w,Ee.a_Position,be.vertexBuffer),G(w,Ee.a_Normal,be.normalBuffer),G(w,Ee.a_TexCoord,be.texCoordBuffer),w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,be.indexBuffer),w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,A),le(w,Ee,be,ie,ce,he)}function _e(w,Ee,be,A,ie,ce){w.useProgram(Ee),G(w,Ee.a_Position,be.vertexBuffer),G(w,Ee.a_Normal,be.normalBuffer),w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,be.indexBuffer),le(w,Ee,be,A,ie,ce)}function le(w,Ee,be,A,ie,ce){se.setTranslate(A,0,0),se.rotate(20,1,0,0),se.rotate(ie,0,1,0),g.setInverseOf(se),g.transpose(),w.uniformMatrix4fv(Ee.u_NormalMatrix,!1,g.elements),D.set(ce),D.multiply(se),w.uniformMatrix4fv(Ee.u_MvpMatrix,!1,D.elements),w.drawElements(w.TRIANGLES,be.numIndices,be.indexBuffer.type,0)}function G(w,Ee,be){w.bindBuffer(w.ARRAY_BUFFER,be),w.vertexAttribPointer(Ee,be.num,be.type,!1,0,0),w.enableVertexAttribArray(Ee)}function me(w){const Ee=Date.now(),be=Ee-ve;return ve=Ee,(w+fe*be/1e3)%360}function Ae(w,Ee){const be=w.createTexture(),A=new Image;return A.addEventListener("load",()=>{w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,1),w.activeTexture(w.TEXTURE0),w.bindTexture(w.TEXTURE_2D,be),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.LINEAR),w.texImage2D(w.TEXTURE_2D,0,w.RGBA,w.RGBA,w.UNSIGNED_BYTE,A),w.useProgram(Ee),w.uniform1i(Ee.u_Sampler,0),w.bindTexture(w.TEXTURE_2D,null)}),A.src=o+"/micro-vue-static/lab-static/images/webgl-practice/xdd.jpg",be}function Be(w){const Ee=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),be=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),A=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),ie=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),ce={vertexBuffer:Ce(w,Ee,3,w.FLOAT),normalBuffer:Ce(w,be,3,w.FLOAT),texCoordBuffer:Ce(w,A,2,w.FLOAT),indexBuffer:Me(w,ie,w.UNSIGNED_BYTE),numIndices:ie.length};return w.bindBuffer(w.ARRAY_BUFFER,null),w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,null),ce}function Ce(w,Ee,be,A){const ie=w.createBuffer();return w.bindBuffer(w.ARRAY_BUFFER,ie),w.bufferData(w.ARRAY_BUFFER,Ee,w.STATIC_DRAW),ie.num=be,ie.type=A,ie}function Me(w,Ee,be){var A=w.createBuffer();return w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,A),w.bufferData(w.ELEMENT_ARRAY_BUFFER,Ee,w.STATIC_DRAW),A.type=be,A}function Le(w,Ee,be){const A=w.createShader(w.VERTEX_SHADER),ie=w.createShader(w.FRAGMENT_SHADER);w.shaderSource(A,Ee),w.shaderSource(ie,be),w.compileShader(A),w.compileShader(ie);const ce=w.getShaderParameter(A,w.COMPILE_STATUS),he=w.getShaderParameter(ie,w.COMPILE_STATUS);if(!ce){const E=w.getShaderInfoLog(A);console.error(E),w.deleteShader(A);return}if(!he){const E=w.getShaderInfoLog(ie);console.error(E),w.deleteShader(ie);return}const xe=w.createProgram();if(w.attachShader(xe,A),w.attachShader(xe,ie),w.linkProgram(xe),!w.getProgramParameter(xe,w.LINK_STATUS)){const E=w.getProgramInfoLog(xe);console.error(E),w.deleteShader(A),w.deleteShader(ie),w.deleteProgram(xe);return}return xe}}function l(){var Y=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_mvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_mvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,y=r(ae),_=y.getContext("webgl");Re(_,Y,p);var P=se(_);_.clearColor(0,0,0,1),_.enable(_.BLEND),_.enable(_.DEPTH_TEST),_.blendFunc(_.SRC_ALPHA,_.ONE_MINUS_SRC_ALPHA);var L=.2,V=.25,oe=.25,Fe=_.getUniformLocation(_.program,"u_mvpMatrix"),Q=new C,T=new C;T.setOrtho(-1,1,-1,1,0,2),D(_,P,Fe,Q);function se(g){var q=new Float32Array([0,.5,0,.4,.4,1,.6,-.5,-.5,0,.4,.4,1,.6,.5,-.5,0,.4,.4,1,.6,0,.5,-.4,.4,1,.4,.1,-.5,-.5,-.4,.4,1,.4,.1,.5,-.5,-.4,.4,1,.4,.1,.5,.4,-.2,1,.4,.4,1,-.5,.4,-.2,1,.4,.4,1,0,-.6,-.2,1,.4,.4,1]),fe=9,ve=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,ve),g.bufferData(g.ARRAY_BUFFER,q,g.STATIC_DRAW);var Z=q.BYTES_PER_ELEMENT,B=g.getAttribLocation(g.program,"a_Position");g.vertexAttribPointer(B,3,g.FLOAT,!1,Z*7,0),g.enableVertexAttribArray(B);var _e=g.getAttribLocation(g.program,"a_Color");return g.vertexAttribPointer(_e,4,g.FLOAT,!1,Z*7,Z*3),g.enableVertexAttribArray(_e),g.bindBuffer(g.ARRAY_BUFFER,null),fe}function D(g,q,fe,ve){ve.setLookAt(L,V,oe,0,0,0,0,1,0);const Z=new C(T);Z.multiply(ve),g.uniformMatrix4fv(fe,!1,Z.elements),g.clear(g.COLOR_BUFFER_BIT|g.DEPTH_BUFFER_BIT),g.drawArrays(g.TRIANGLES,6,9),g.depthMask(!1),g.drawArrays(g.TRIANGLES,3,6),g.drawArrays(g.TRIANGLES,0,3),g.depthMask(!0)}}function u(){var Y=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,y=r(I),_=y.getContext("webgl");Re(_,Y,p);var P=oe(_);_.clearColor(0,0,0,1),_.enable(_.BLEND),_.blendFunc(_.SRC_ALPHA,_.ONE_MINUS_SRC_ALPHA);var L=_.getUniformLocation(_.program,"u_MvpMatrix"),V=new C;V.setPerspective(30,1,1,100),V.lookAt(3,3,7,0,0,0,0,1,0),_.uniformMatrix4fv(L,!1,V.elements),_.clear(_.COLOR_BUFFER_BIT),_.drawElements(_.TRIANGLES,P,_.UNSIGNED_BYTE,0);function oe(Q){var T=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),se=new Float32Array([.5,.5,1,.4,.5,.5,1,.4,.5,.5,1,.4,.5,.5,1,.4,.5,1,.5,.4,.5,1,.5,.4,.5,1,.5,.4,.5,1,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,.5,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,.5,.4,1,1,1,.4,1,1,1,.4,1,1,1,.4,1,1,1,.4,.5,1,1,.4,.5,1,1,.4,.5,1,1,.4,.5,1,1,.4]),D=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),g=Q.createBuffer();return!g||!Fe(Q,T,3,Q.FLOAT,"a_Position")||!Fe(Q,se,4,Q.FLOAT,"a_Color")?-1:(Q.bindBuffer(Q.ARRAY_BUFFER,null),Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,g),Q.bufferData(Q.ELEMENT_ARRAY_BUFFER,D,Q.STATIC_DRAW),D.length)}function Fe(Q,T,se,D,g){var q=Q.createBuffer();if(!q)return console.log("Failed to create the buffer object"),!1;Q.bindBuffer(Q.ARRAY_BUFFER,q),Q.bufferData(Q.ARRAY_BUFFER,T,Q.STATIC_DRAW);var fe=Q.getAttribLocation(Q.program,g);return fe<0?(console.log("Failed to get the storage location of "+g),!1):(Q.vertexAttribPointer(fe,se,D,!1,0,0),Q.enableVertexAttribArray(fe),Q.bindBuffer(Q.ARRAY_BUFFER,null),!0)}}function X(){var Y=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_mvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_mvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,y=r(U),_=y.getContext("webgl");Re(_,Y,p);var P=se(_);_.clearColor(0,0,0,1),_.enable(_.BLEND),_.blendFunc(_.SRC_ALPHA,_.ONE);var L=.2,V=.25,oe=.25,Fe=_.getUniformLocation(_.program,"u_mvpMatrix"),Q=new C;window.onkeydown=function(q){D(q,_,P,Fe,Q)};var T=new C;T.setOrtho(-1,1,-1,1,0,2),g(_,P,Fe,Q);function se(q){var fe=new Float32Array([0,.5,-.4,.4,1,.4,.6,-.5,-.5,-.4,.4,1,.4,.6,.5,-.5,-.4,.4,1,.4,.6,.5,.4,-.2,1,.4,.4,.6,-.5,.4,-.2,1,.4,.4,.6,0,-.6,-.2,1,.4,.4,.6,0,.5,0,.4,.4,1,.6,-.5,-.5,0,.4,.4,1,.6,.5,-.5,0,.4,.4,1,.6]),ve=9,Z=q.createBuffer();q.bindBuffer(q.ARRAY_BUFFER,Z),q.bufferData(q.ARRAY_BUFFER,fe,q.STATIC_DRAW);var B=fe.BYTES_PER_ELEMENT,_e=q.getAttribLocation(q.program,"a_Position");q.vertexAttribPointer(_e,3,q.FLOAT,!1,B*7,0),q.enableVertexAttribArray(_e);var le=q.getAttribLocation(q.program,"a_Color");return q.vertexAttribPointer(le,4,q.FLOAT,!1,B*7,B*3),q.enableVertexAttribArray(le),q.bindBuffer(q.ARRAY_BUFFER,null),ve}function D(q,fe,ve,Z,B){if(q.keyCode==39)L+=.01;else if(q.keyCode==37)L-=.01;else return;g(fe,ve,Z,B)}function g(q,fe,ve,Z){Z.setLookAt(L,V,oe,0,0,0,0,1,0);const B=new C(T);B.multiply(Z),q.uniformMatrix4fv(ve,!1,B.elements),q.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT),q.drawArrays(q.TRIANGLES,0,fe)}}function S(){var Y=`
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position;
          gl_PointSize = 50.0;
        }
      `,p=`
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
      `,y=r(z),_=Tt(y);Re(_,Y,p);var P=L(_);_.clearColor(0,0,0,1),_.clear(_.COLOR_BUFFER_BIT),_.drawArrays(_.POINTS,0,P);function L(V){var oe=new Float32Array([0,.5,-.5,-.5,.5,-.5]),Fe=3,Q=V.createBuffer();V.bindBuffer(V.ARRAY_BUFFER,Q),V.bufferData(V.ARRAY_BUFFER,oe,V.STATIC_DRAW);var T=V.getAttribLocation(V.program,"a_Position");return V.vertexAttribPointer(T,2,V.FLOAT,!1,0,0),V.bindBuffer(V.ARRAY_BUFFER,null),V.enableVertexAttribArray(T),Fe}}function W(){const Y=`
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
      `,p=`
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
      `,_=r(m).getContext("webgl");Re(_,Y,p);const P=fe(_);var L=_.getUniformLocation(_.program,"u_MvpMatrix"),V=_.getUniformLocation(_.program,"u_ModelMatrix"),oe=_.getUniformLocation(_.program,"u_Eye"),Fe=_.getUniformLocation(_.program,"u_FogColor"),Q=_.getUniformLocation(_.program,"u_FogRange");const T=new Float32Array([1,1,1]),se=new Float32Array([20,20,20,1]);_.uniform3fv(Fe,T),_.uniform4fv(oe,se);const D=new Float32Array([25,50]);_.uniform2fv(Q,D),_.clearColor(0,0,0,1),_.enable(_.DEPTH_TEST);const g=new C;g.setScale(5,5,5),_.uniformMatrix4fv(V,!1,g.elements);const q=new C;q.setPerspective(60,1,1,50),q.lookAt(se[0],se[1],se[2],0,0,0,0,1,0),q.multiply(g),_.uniformMatrix4fv(L,!1,q.elements),_.clear(_.COLOR_BUFFER_BIT|_.DEPTH_BUFFER_BIT),_.drawElements(_.TRIANGLES,P,_.UNSIGNED_BYTE,0);function fe(ve){var Z=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),B=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),_e=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),le=ve.createBuffer();return le?(x(ve,Z,3,ve.FLOAT,"a_Position"),x(ve,B,3,ve.FLOAT,"a_Color"),ve.bindBuffer(ve.ELEMENT_ARRAY_BUFFER,le),ve.bufferData(ve.ELEMENT_ARRAY_BUFFER,_e,ve.STATIC_DRAW),_e.length):-1}}function J(){var Y=`
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
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,y=20,_=r(s),P=r(M),L=_.getContext("webgl"),V=P.getContext("2d"),oe=new C,Fe=Date.now();Re(L,Y,p);var Q=fe(L);L.clearColor(0,0,0,1),L.enable(L.DEPTH_TEST);var T=L.getUniformLocation(L.program,"u_MvpMatrix"),se=L.getUniformLocation(L.program,"u_Clicked"),D=new C;D.setPerspective(30,_.width/_.height,1,100),D.lookAt(0,0,7,0,0,0,0,1,0),L.uniform1i(se,0);var g=0;P.onmousedown=function(G){const{layerX:me,layerY:Ae}=G;var Be=ve(L,Q,me,Ae,g,se,D,T);Be&&console.log("点中了盒子")};var q=function(){g=_e(g),B(V,g),Z(L,Q,g,D,T),requestAnimationFrame(q,_)};q();function fe(G){var me=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),Ae=new Float32Array([.2,.58,.82,.2,.58,.82,.2,.58,.82,.2,.58,.82,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),Be=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);if(!le(G,me,3,G.FLOAT,"a_Position")||!le(G,Ae,3,G.FLOAT,"a_Color"))return-1;var Ce=G.createBuffer();return Ce?(G.bindBuffer(G.ELEMENT_ARRAY_BUFFER,Ce),G.bufferData(G.ELEMENT_ARRAY_BUFFER,Be,G.STATIC_DRAW),Be.length):-1}function ve(G,me,Ae,Be,Ce,Me,Le,w){var Ee=!1;G.uniform1i(Me,1),Z(G,me,Ce,Le,w);var be=new Uint8Array(4);return G.readPixels(Ae,Be,1,1,G.RGBA,G.UNSIGNED_BYTE,be),be[0]==255&&(Ee=!0),G.uniform1i(Me,0),Z(G,me,Ce,Le,w),Ee}function Z(G,me,Ae,Be,Ce){oe.set(Be),oe.rotate(Ae,1,0,0),oe.rotate(Ae,0,1,0),oe.rotate(Ae,0,0,1),G.uniformMatrix4fv(Ce,!1,oe.elements),G.clear(G.COLOR_BUFFER_BIT|G.DEPTH_BUFFER_BIT),G.drawElements(G.TRIANGLES,me,G.UNSIGNED_BYTE,0)}function B(G,me){G.clearRect(0,0,400,400),G.beginPath(),G.moveTo(120,10),G.lineTo(200,150),G.lineTo(40,150),G.closePath(),G.strokeStyle="rgba(255, 255, 255, 1)",G.stroke(),G.font='18px "Times New Roman"',G.fillStyle="rgba(255, 255, 255, 1)",G.fillText("HUD: Head Up Display",40,180),G.fillText("Current Angle: "+Math.floor(me),40,240)}function _e(G){var me=Date.now(),Ae=me-Fe;Fe=me;var Be=G+y*Ae/1e3;return Be%360}function le(G,me,Ae,Be,Ce){var Me=G.createBuffer();if(!Me)return console.log("Failed to create the buffer object"),!1;G.bindBuffer(G.ARRAY_BUFFER,Me),G.bufferData(G.ARRAY_BUFFER,me,G.STATIC_DRAW);var Le=G.getAttribLocation(G.program,Ce);return Le<0?(console.log("Failed to get the storage location of "+Ce),!1):(G.vertexAttribPointer(Le,Ae,Be,!1,0,0),G.enableVertexAttribArray(Le),G.bindBuffer(G.ARRAY_BUFFER,null),!0)}}function te(){var Y=`
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
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,y=20,_=new C,P=Date.now(),L=r(f),V=L.getContext("webgl");Re(V,Y,p);var oe=g(V);V.clearColor(0,0,0,1),V.enable(V.DEPTH_TEST);var Fe=V.getUniformLocation(V.program,"u_MvpMatrix"),Q=V.getUniformLocation(V.program,"u_PickedFace"),T=new C;T.setPerspective(30,L.width/L.height,1,100),T.lookAt(0,0,7,0,0,0,0,1,0),V.uniform1i(Q,-1);var se=0;L.onmousedown=function(B){const{layerX:_e,layerY:le}=B;var G=q(V,oe,_e,le,se,Q,T,Fe);V.uniform1i(Q,G),fe(V,oe,se,T,Fe)};var D=function(){se=ve(se),fe(V,oe,se,T,Fe),requestAnimationFrame(D,L)};D();function g(B){var _e=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),le=new Float32Array([.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.27,.58,.82,.27,.58,.82,.27,.58,.82,.27,.58,.82,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),G=new Uint8Array([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6]),me=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),Ae=B.createBuffer();return!Z(B,_e,B.FLOAT,3,"a_Position")||!Z(B,le,B.FLOAT,3,"a_Color")||!Z(B,G,B.UNSIGNED_BYTE,1,"a_Face")?-1:(B.bindBuffer(B.ARRAY_BUFFER,null),B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,Ae),B.bufferData(B.ELEMENT_ARRAY_BUFFER,me,B.STATIC_DRAW),me.length)}function q(B,_e,le,G,me,Ae,Be,Ce){var Me=new Uint8Array(4);return B.uniform1i(Ae,0),fe(B,_e,me,Be,Ce),B.readPixels(le,G,1,1,B.RGBA,B.UNSIGNED_BYTE,Me),Me[3]}function fe(B,_e,le,G,me){_.set(G),_.rotate(le,1,0,0),_.rotate(le,0,1,0),_.rotate(le,0,0,1),B.uniformMatrix4fv(me,!1,_.elements),B.clear(B.COLOR_BUFFER_BIT|B.DEPTH_BUFFER_BIT),B.drawElements(B.TRIANGLES,_e,B.UNSIGNED_BYTE,0)}function ve(B){var _e=Date.now(),le=_e-P;P=_e;var G=B+y*le/1e3;return G%360}function Z(B,_e,le,G,me){var Ae=B.createBuffer();if(!Ae)return console.log("Failed to create the buffer object"),!1;B.bindBuffer(B.ARRAY_BUFFER,Ae),B.bufferData(B.ARRAY_BUFFER,_e,B.STATIC_DRAW);var Be=B.getAttribLocation(B.program,me);return Be<0?(console.log("Failed to get the storage location of "+me),!1):(B.vertexAttribPointer(Be,G,le,!1,0,0),B.enableVertexAttribArray(Be),!0)}}function ee(){var Y=`
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
      `,p=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,y=20,_=r(e),P=_.getContext("webgl");Re(P,Y,p);var L=g(P);P.clearColor(0,0,0,1),P.enable(P.DEPTH_TEST);var V=P.getUniformLocation(P.program,"u_MvpMatrix"),oe=P.getUniformLocation(P.program,"u_Clicked"),Fe=new C;Fe.setPerspective(30,_.width/_.height,1,100),Fe.lookAt(0,0,7,0,0,0,0,1,0),P.uniform1i(oe,0);var Q=0;_.onmousedown=function(B){const{layerX:_e,layerY:le}=B;var G=fe(P,L,_e,le,Q,oe,Fe,V);G&&tt.info("点中了盒子")};var T=new C,se=Date.now(),D=function(){Q=Z(Q),ve(P,L,Q,Fe,V),requestAnimationFrame(D,_)};D();function g(B){var _e=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),le=new Float32Array([.2,.58,.82,.2,.58,.82,.2,.58,.82,.2,.58,.82,.5,.41,.69,.5,.41,.69,.5,.41,.69,.5,.41,.69,0,.32,.61,0,.32,.61,0,.32,.61,0,.32,.61,.78,.69,.84,.78,.69,.84,.78,.69,.84,.78,.69,.84,.32,.18,.56,.32,.18,.56,.32,.18,.56,.32,.18,.56,.73,.82,.93,.73,.82,.93,.73,.82,.93,.73,.82,.93]),G=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);q(B,_e,B.FLOAT,3,"a_Position"),q(B,le,B.FLOAT,3,"a_Color");var me=B.createBuffer();return B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,me),B.bufferData(B.ELEMENT_ARRAY_BUFFER,G,B.STATIC_DRAW),G.length}function q(B,_e,le,G,me){var Ae=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,Ae),B.bufferData(B.ARRAY_BUFFER,_e,B.STATIC_DRAW);var Be=B.getAttribLocation(B.program,me);return B.vertexAttribPointer(Be,G,le,!1,0,0),B.enableVertexAttribArray(Be),!0}function fe(B,_e,le,G,me,Ae,Be,Ce){var Me=!1;B.uniform1i(Ae,1),ve(B,_e,me,Be,Ce);var Le=new Uint8Array(4);return B.readPixels(le,G,1,1,B.RGBA,B.UNSIGNED_BYTE,Le),Le[0]==255&&Le[1]==0&&Le[2]==0&&(Me=!0),B.uniform1i(Ae,0),ve(B,_e,me,Be,Ce),Me}function ve(B,_e,le,G,me){T.set(G),T.rotate(le,1,0,0),T.rotate(le,0,1,0),T.rotate(le,0,0,1),B.uniformMatrix4fv(me,!1,T.elements),B.clear(B.COLOR_BUFFER_BIT|B.DEPTH_BUFFER_BIT),B.drawElements(B.TRIANGLES,_e,B.UNSIGNED_BYTE,0)}function Z(B){var _e=Date.now(),le=_e-se;se=_e;var G=B+y*le/1e3;return G%360}}function re(){const Y=`
      attribute vec4 a_Position;
      attribute vec2 a_TexCoord;
      uniform mat4 u_MvpMatrix;
      varying vec2 v_TexCoord;
      void main() {
        gl_Position = u_MvpMatrix * a_Position;
        v_TexCoord = a_TexCoord;
      }
      `,p=`
      #ifdef GL_ES
      precision mediump float;
      #endif
      uniform sampler2D u_Sampler;
      varying vec2 v_TexCoord;
      void main() {
        gl_FragColor = texture2D(u_Sampler, v_TexCoord);
      }
      `,y=r(n),_=y.getContext("webgl");Re(_,Y,p);const P=ve(_);_.clearColor(0,0,0,1),_.enable(_.DEPTH_TEST),_.enable(_.POLYGON_OFFSET_FILL);const L=_.getUniformLocation(_.program,"u_MvpMatrix");_.getAttribLocation(_.program,"a_Position"),_.getAttribLocation(_.program,"a_TexCoord");const V=_.getUniformLocation(_.program,"u_Sampler"),oe=new C;oe.setPerspective(30,1,1,100),oe.lookAt(3,3,7,0,0,0,0,1,0);const Fe=new C(oe);let Q=0,T=0,se=0,D=0,g=!1;fe(_),q(),y.addEventListener("mousedown",Z=>{const{layerX:B,layerY:_e}=Z;se=B,D=_e,g=!0}),y.addEventListener("mousemove",Z=>{if(!g)return;const{layerX:B,layerY:_e}=Z,le=(B-se)/y.width*360,G=(_e-D)/y.height*360;Q=Q+G,T=T+le,q(),se=B,D=_e}),y.addEventListener("mouseup",Z=>{se=0,D=0,g=!1}),y.addEventListener("mouseleave",Z=>{se=0,D=0,g=!1});function q(){Fe.set(oe),Fe.rotate(Q,1,0,0),Fe.rotate(T,0,1,0),_.uniformMatrix4fv(L,!1,Fe.elements),_.clear(_.COLOR_BUFFER_BIT|_.DEPTH_BUFFER_BIT),_.drawElements(_.TRIANGLES,P,_.UNSIGNED_BYTE,0)}function fe(Z){const B=new Image;B.onload=function(){const _e=Z.createTexture();Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,1),Z.activeTexture(Z.TEXTURE0),Z.bindTexture(Z.TEXTURE_2D,_e),Z.texParameteri(Z.TEXTURE_2D,Z.TEXTURE_MIN_FILTER,Z.LINEAR),Z.texImage2D(Z.TEXTURE_2D,0,Z.RGB,Z.RGB,Z.UNSIGNED_BYTE,B),Z.uniform1i(V,0),q()},B.src=o+"/micro-vue-static/lab-static/images/webgl-practice/sy.jpg"}function ve(Z){const B=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),_e=new Float32Array([1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]),le=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]);x(Z,B,3,Z.FLOAT,"a_Position"),x(Z,_e,2,Z.FLOAT,"a_TexCoord");const G=Z.createBuffer();return Z.bindBuffer(Z.ELEMENT_ARRAY_BUFFER,G),Z.bufferData(Z.ELEMENT_ARRAY_BUFFER,le,Z.STATIC_DRAW),le.length}}function x(Y,p,y,_,P){var L=Y.createBuffer();Y.bindBuffer(Y.ARRAY_BUFFER,L),Y.bufferData(Y.ARRAY_BUFFER,p,Y.STATIC_DRAW);var V=Y.getAttribLocation(Y.program,P);return Y.vertexAttribPointer(V,y,_,!1,0,0),Y.enableVertexAttribArray(V),!0}return(Y,p)=>{const y=$e("dbtap");return He(),ke("div",null,[yo,i("div",Oo,[i("div",Io,[No,i("div",Yo,[de(i("canvas",{onDblclickOnce:re,ref_key:"gl38",ref:n},null,544),[[y,re]])])]),i("div",Go,[Ho,i("div",ko,[de(i("canvas",{onDblclickOnce:ee,ref_key:"gl39",ref:e},null,544),[[y,ee]])])]),i("div",Vo,[Wo,i("div",go,[de(i("canvas",{onDblclickOnce:te,ref_key:"gl40",ref:f},null,544),[[y,te]])])]),i("div",$o,[Xo,i("div",jo,[de(i("canvas",{onDblclickOnce:J,ref_key:"gl41",ref:s},null,544),[[y,J]]),de(i("canvas",{onDblclickOnce:J,ref_key:"gl41Hud",ref:M,class:"gl41Hud"},null,544),[[y,J]])])]),i("div",zo,[qo,i("div",Zo,[de(i("canvas",{onDblclickOnce:W,ref_key:"gl42",ref:m},null,544),[[y,W]])])]),i("div",Ko,[Jo,i("div",Qo,[de(i("canvas",{onDblclickOnce:S,ref_key:"gl43",ref:z},null,544),[[y,S]])])]),i("div",ea,[ta,i("div",ra,[de(i("canvas",{onDblclickOnce:X,ref_key:"gl44",ref:U},null,544),[[y,X]])])]),i("div",oa,[aa,i("div",ia,[de(i("canvas",{onDblclickOnce:u,ref_key:"gl45",ref:I},null,544),[[y,u]])])]),i("div",na,[sa,i("div",ca,[de(i("canvas",{onDblclickOnce:l,ref_key:"gl46",ref:ae},null,544),[[y,l]])])]),i("div",fa,[_a,i("div",ua,[de(i("canvas",{onDblclickOnce:H,ref_key:"gl47",ref:j},null,544),[[y,H]])])]),i("div",va,[la,i("div",da,[de(i("canvas",{onDblclickOnce:d,ref_key:"gl48",ref:ne},null,544),[[y,d]])])]),i("div",ma,[Aa,i("div",Ra,[de(i("canvas",{onDblclickOnce:K,ref_key:"gl49",ref:N},null,544),[[y,K]])])]),i("div",Ea,[Fa,i("div",ba,[de(i("canvas",{onDblclickOnce:R,ref_key:"gl50",ref:c},null,544),[[y,R]])])]),i("div",ha,[Ta,i("div",xa,[de(i("canvas",{onDblclickOnce:k,ref_key:"gl51",ref:$},null,544),[[y,k]])])]),i("div",Ba,[Ca,i("div",pa,[de(i("canvas",{onDblclickOnce:a,ref_key:"gl52",ref:b},null,544),[[y,a]])])])])])}}}),wa=Je(La,[["__scopeId","data-v-c3e12296"]]),Ma=i("header",null,"附录",-1),Pa={class:"example"},Sa={class:"item"},Ua=i("div",{class:"desc"}," 左手坐标系还是右手坐标系，右手z指向屏幕外，左手指向屏幕内，如果是左手，那么z值小的在z值大的前面，也就是右手坐标系看到的反面 ",-1),Da={class:"canvas"},ya={class:"item"},Oa=i("div",{class:"desc"}," webgl默认都使用右手坐标系,但隐藏面消除是使用的左手坐标系,所以通过投影矩阵将看的方向反正 ",-1),Ia={class:"canvas"},Na={class:"item"},Ya=i("div",{class:"desc"},"从文件中加载着色器代码",-1),Ga={class:"canvas"},Ha=Ge({__name:"attachment",setup(v){const n=ue(null),e=ue(null),f=ue(null),s="/vue-hash";ge(()=>{r(n).width=r(n).clientWidth,r(n).height=r(n).clientHeight,r(e).width=r(e).clientWidth,r(e).height=r(e).clientHeight,r(f).width=r(f).clientWidth,r(f).height=r(f).clientHeight});function M(){var U="",I="",ae=r(f),j=ae.getContext("webgl");c(j,s+"/micro-vue-static/lab-static/images/webgl-practice/colored-triangle.vert","v"),c(j,s+"/micro-vue-static/lab-static/images/webgl-practice/colored-triangle.frag","f");function ne(b){if(!Re(b,U,I)){console.log("Failed to intialize shaders.");return}var o=N(b);if(o<0){console.log("Failed to set the vertex information");return}b.clearColor(0,0,0,1),b.clear(b.COLOR_BUFFER_BIT),b.drawArrays(b.TRIANGLES,0,o)}function N(b){var o=new Float32Array([0,.5,1,0,0,-.5,-.5,0,1,0,.5,-.5,0,0,1]),a=3,k=b.createBuffer();if(!k)return console.log("Failed to create the buffer object"),!1;b.bindBuffer(b.ARRAY_BUFFER,k),b.bufferData(b.ARRAY_BUFFER,o,b.STATIC_DRAW);var R=o.BYTES_PER_ELEMENT,K=b.getAttribLocation(b.program,"a_Position");if(K<0)return console.log("Failed to get the storage location of a_Position"),-1;b.vertexAttribPointer(K,2,b.FLOAT,!1,R*5,0),b.enableVertexAttribArray(K);var d=b.getAttribLocation(b.program,"a_Color");return d<0?(console.log("Failed to get the storage location of a_Color"),-1):(b.vertexAttribPointer(d,3,b.FLOAT,!1,R*5,R*2),b.enableVertexAttribArray(d),a)}function c(b,o,a){var k=new XMLHttpRequest;k.onreadystatechange=function(){k.readyState===4&&k.status!==404&&$(b,k.responseText,a)},k.open("GET",o,!0),k.send()}function $(b,o,a){a=="v"?U=o:a=="f"&&(I=o),U&&I&&ne(b)}}function m(){var U=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main() {
          gl_Position = u_MvpMatrix * a_Position;
          v_Color = a_Color;
        }
      `,I=`
          #ifdef GL_ES
          precision mediump float;
          #endif
          varying vec4 v_Color;
          void main() {
            gl_FragColor = v_Color;
          }
        `,ae=r(e),j=ae.getContext("webgl");Re(j,U,I);var ne=$(j);j.enable(j.DEPTH_TEST),j.clearColor(0,0,0,1);var N=j.getUniformLocation(j.program,"u_MvpMatrix"),c=new C;c.setOrtho(-1,1,-1,1,0,1),j.uniformMatrix4fv(N,!1,c.elements),j.clear(j.COLOR_BUFFER_BIT|j.DEPTH_BUFFER_BIT),j.drawArrays(j.TRIANGLES,0,ne);function $(b){var o=new Float32Array([0,.5,-.1,0,0,1,-.5,-.5,-.1,0,0,1,.5,-.5,-.1,1,1,0,.5,.4,-.5,1,1,0,-.5,.4,-.5,1,0,0,0,-.6,-.5,1,0,0]),a=3,k=3,R=6,K=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,K),b.bufferData(b.ARRAY_BUFFER,o,b.STATIC_DRAW);var d=o.BYTES_PER_ELEMENT,H=a+k,l=b.getAttribLocation(b.program,"a_Position");b.vertexAttribPointer(l,a,b.FLOAT,!1,d*H,0),b.enableVertexAttribArray(l);var u=b.getAttribLocation(b.program,"a_Color");return b.vertexAttribPointer(u,k,b.FLOAT,!1,d*H,d*a),b.enableVertexAttribArray(u),R}}function z(){var U=`
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main() {
          gl_Position = a_Position;
          v_Color = a_Color;
        }
      `,I=`
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main() {
          gl_FragColor = v_Color;
        }
      `,ae=r(n),j=ae.getContext("webgl");Re(j,U,I);var ne=N(j);j.clearColor(0,0,0,1),j.clear(j.COLOR_BUFFER_BIT),j.drawArrays(j.TRIANGLES,0,ne);function N(c){var $=new Float32Array([0,.5,-.1,0,0,1,-.5,-.5,-.1,0,0,1,.5,-.5,-.1,1,1,0,.5,.4,-.5,1,1,0,-.5,.4,-.5,1,0,0,0,-.6,-.5,1,0,0]),b=3,o=3,a=6,k=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,k),c.bufferData(c.ARRAY_BUFFER,$,c.STATIC_DRAW);var R=$.BYTES_PER_ELEMENT,K=b+o,d=c.getAttribLocation(c.program,"a_Position");c.vertexAttribPointer(d,b,c.FLOAT,!1,R*K,0),c.enableVertexAttribArray(d);var H=c.getAttribLocation(c.program,"a_Color");return c.vertexAttribPointer(H,o,c.FLOAT,!1,R*K,R*b),c.enableVertexAttribArray(H),a}}return(U,I)=>{const ae=$e("dbtap");return He(),ke("div",null,[Ma,i("div",Pa,[i("div",Sa,[Ua,i("div",Da,[de(i("canvas",{onDblclickOnce:z,ref_key:"gl53",ref:n},null,544),[[ae,z]])])]),i("div",ya,[Oa,i("div",Ia,[de(i("canvas",{onDblclickOnce:m,ref_key:"gl54",ref:e},null,544),[[ae,m]])])]),i("div",Na,[Ya,i("div",Ga,[de(i("canvas",{onDblclickOnce:M,ref_key:"gl55",ref:f},null,544),[[ae,M]])])])])])}}}),et=v=>(Ze("data-v-caa3dcf4"),v=v(),Ke(),v),ka={class:"WebGLPractice"},Va=et(()=>i("header",null,"第一章：WebGL概述",-1)),Wa=et(()=>i("header",null,"第六章：OpenGL ES着色器语言（GLSL ES）",-1)),ga=Ge({__name:"index",setup(v){const{canvasClickTip:n}=ot();return n(),(e,f)=>{const s=rt("a-empty");return He(),ke("div",ka,[i("div",null,[Va,Oe(s)]),Oe(ht),Oe(qt),Oe(ar),Oe(Cr),i("div",null,[Wa,Oe(s)]),Oe(io),Oe(Bo),Oe(Do),Oe(wa),Oe(Ha)])}}}),ja=Je(ga,[["__scopeId","data-v-caa3dcf4"]]);export{ja as default};
