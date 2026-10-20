var gt=Uint8Array,ln=Uint16Array,wl=Int32Array,Hs=new gt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gs=new gt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yl=new gt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qh=function(n,e){for(var t=new ln(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new wl(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},eu=Qh(Hs,2),tu=eu.b,_l=eu.r;tu[28]=258,_l[258]=28;var nu=Qh(Gs,0),Wp=nu.b,Yh=nu.r,xl=new ln(32768);for(Ke=0;Ke<32768;++Ke)Gn=(Ke&43690)>>1|(Ke&21845)<<1,Gn=(Gn&52428)>>2|(Gn&13107)<<2,Gn=(Gn&61680)>>4|(Gn&3855)<<4,xl[Ke]=((Gn&65280)>>8|(Gn&255)<<8)>>1;var Gn,Ke,Nn=(function(n,e,t){for(var i=n.length,r=0,s=new ln(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new ln(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new ln(1<<e);var c=15-e;for(r=0;r<i;++r)if(n[r])for(var l=r<<4|n[r],h=e-n[r],u=o[n[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[xl[u]>>c]=l}else for(a=new ln(i),r=0;r<i;++r)n[r]&&(a[r]=xl[o[n[r]-1]++]>>15-n[r]);return a}),oi=new gt(288);for(Ke=0;Ke<144;++Ke)oi[Ke]=8;var Ke;for(Ke=144;Ke<256;++Ke)oi[Ke]=9;var Ke;for(Ke=256;Ke<280;++Ke)oi[Ke]=7;var Ke;for(Ke=280;Ke<288;++Ke)oi[Ke]=8;var Ke,qr=new gt(32);for(Ke=0;Ke<32;++Ke)qr[Ke]=5;var Ke,Xp=Nn(oi,9,0),qp=Nn(oi,9,1),Yp=Nn(qr,5,0),$p=Nn(qr,5,1),pl=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},xn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},ml=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},El=function(n){return(n+7)/8|0},Yr=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new gt(n.subarray(e,t))};var Zp=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],bt=function(n,e,t){var i=new Error(e||Zp[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,bt),!t)throw i;return i},Tl=function(n,e,t,i){var r=n.length,s=i?i.length:0;if(!r||e.f&&!e.l)return t||new gt(0);var o=!t,a=o||e.i!=2,c=e.i;o&&(t=new gt(r*3));var l=function(Re){var et=t.length;if(Re>et){var D=new gt(Math.max(et*2,Re));D.set(t),t=D}},h=e.f||0,u=e.p||0,f=e.b||0,p=e.l,g=e.d,v=e.m,m=e.n,d=r*8;do{if(!p){h=xn(n,u,1);var b=xn(n,u+1,3);if(u+=3,b)if(b==1)p=qp,g=$p,v=9,m=5;else if(b==2){var A=xn(n,u,31)+257,T=xn(n,u+10,15)+4,C=A+xn(n,u+5,31)+1;u+=14;for(var y=new gt(C),_=new gt(19),P=0;P<T;++P)_[yl[P]]=xn(n,u+P*3,7);u+=T*3;for(var F=pl(_),k=(1<<F)-1,q=Nn(_,F,1),P=0;P<C;){var H=q[xn(n,u,k)];u+=H&15;var E=H>>4;if(E<16)y[P++]=E;else{var I=0,G=0;for(E==16?(G=3+xn(n,u,3),u+=2,I=y[P-1]):E==17?(G=3+xn(n,u,7),u+=3):E==18&&(G=11+xn(n,u,127),u+=7);G--;)y[P++]=I}}var z=y.subarray(0,A),L=y.subarray(A);v=pl(z),m=pl(L),p=Nn(z,v,1),g=Nn(L,m,1)}else bt(1);else{var E=El(u)+4,S=n[E-4]|n[E-3]<<8,x=E+S;if(x>r){c&&bt(0);break}a&&l(f+S),t.set(n.subarray(E,x),f),e.b=f+=S,e.p=u=x*8,e.f=h;continue}if(u>d){c&&bt(0);break}}a&&l(f+131072);for(var B=(1<<v)-1,$=(1<<m)-1,Q=u;;Q=u){var I=p[ml(n,u)&B],ie=I>>4;if(u+=I&15,u>d){c&&bt(0);break}if(I||bt(2),ie<256)t[f++]=ie;else if(ie==256){Q=u,p=null;break}else{var re=ie-254;if(ie>264){var P=ie-257,J=Hs[P];re=xn(n,u,(1<<J)-1)+tu[P],u+=J}var N=g[ml(n,u)&$],W=N>>4;N||bt(3),u+=N&15;var L=Wp[W];if(W>3){var J=Gs[W];L+=ml(n,u)&(1<<J)-1,u+=J}if(u>d){c&&bt(0);break}a&&l(f+131072);var oe=f+re;if(f<L){var ee=s-L,ne=Math.min(L,oe);for(ee+f<0&&bt(3);f<ne;++f)t[f]=i[ee+f]}for(;f<oe;++f)t[f]=t[f-L]}}e.l=p,e.p=Q,e.b=f,e.f=h,p&&(h=1,e.m=v,e.d=g,e.n=m)}while(!h);return f!=t.length&&o?Yr(t,0,f):t.subarray(0,f)},Wn=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},Wr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},gl=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var r=t.length,s=t.slice();if(!r)return{t:ru,l:0};if(r==1){var o=new gt(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(x,A){return x.f-A.f}),t.push({s:-1,f:25001});var a=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:a.f+c.f,l:a,r:c};h!=r-1;)a=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,i=1;i<r;++i)s[i].s>f&&(f=s[i].s);var p=new ln(f+1),g=Sl(t[h-1],p,0);if(g>e){var i=0,v=0,m=g-e,d=1<<m;for(s.sort(function(A,T){return p[T.s]-p[A.s]||A.f-T.f});i<r;++i){var b=s[i].s;if(p[b]>e)v+=d-(1<<g-p[b]),p[b]=e;else break}for(v>>=m;v>0;){var E=s[i].s;p[E]<e?v-=1<<e-p[E]++-1:++i}for(;i>=0&&v;--i){var S=s[i].s;p[S]==e&&(--p[S],++v)}g=e}return{t:new gt(p),l:g}},Sl=function(n,e,t){return n.s==-1?Math.max(Sl(n.l,e,t+1),Sl(n.r,e,t+1)):e[n.s]=t},$h=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new ln(++e),i=0,r=n[0],s=1,o=function(c){t[i++]=c},a=1;a<=e;++a)if(n[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=n[a]}return{c:t.subarray(0,i),n:e}},Xr=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},iu=function(n,e,t){var i=t.length,r=El(e+2);n[r]=i&255,n[r+1]=i>>8,n[r+2]=n[r]^255,n[r+3]=n[r+1]^255;for(var s=0;s<i;++s)n[r+s+4]=t[s];return(r+4+i)*8},Zh=function(n,e,t,i,r,s,o,a,c,l,h){Wn(e,h++,t),++r[256];for(var u=gl(r,15),f=u.t,p=u.l,g=gl(s,15),v=g.t,m=g.l,d=$h(f),b=d.c,E=d.n,S=$h(v),x=S.c,A=S.n,T=new ln(19),C=0;C<b.length;++C)++T[b[C]&31];for(var C=0;C<x.length;++C)++T[x[C]&31];for(var y=gl(T,7),_=y.t,P=y.l,F=19;F>4&&!_[yl[F-1]];--F);var k=l+5<<3,q=Xr(r,oi)+Xr(s,qr)+o,H=Xr(r,f)+Xr(s,v)+o+14+3*F+Xr(T,_)+2*T[16]+3*T[17]+7*T[18];if(c>=0&&k<=q&&k<=H)return iu(e,h,n.subarray(c,c+l));var I,G,z,L;if(Wn(e,h,1+(H<q)),h+=2,H<q){I=Nn(f,p,0),G=f,z=Nn(v,m,0),L=v;var B=Nn(_,P,0);Wn(e,h,E-257),Wn(e,h+5,A-1),Wn(e,h+10,F-4),h+=14;for(var C=0;C<F;++C)Wn(e,h+3*C,_[yl[C]]);h+=3*F;for(var $=[b,x],Q=0;Q<2;++Q)for(var ie=$[Q],C=0;C<ie.length;++C){var re=ie[C]&31;Wn(e,h,B[re]),h+=_[re],re>15&&(Wn(e,h,ie[C]>>5&127),h+=ie[C]>>12)}}else I=Xp,G=oi,z=Yp,L=qr;for(var C=0;C<a;++C){var J=i[C];if(J>255){var re=J>>18&31;Wr(e,h,I[re+257]),h+=G[re+257],re>7&&(Wn(e,h,J>>23&31),h+=Hs[re]);var N=J&31;Wr(e,h,z[N]),h+=L[N],N>3&&(Wr(e,h,J>>5&8191),h+=Gs[N])}else Wr(e,h,I[J]),h+=G[J]}return Wr(e,h,I[256]),h+G[256]},jp=new wl([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),ru=new gt(0),Jp=function(n,e,t,i,r,s){var o=s.z||n.length,a=new gt(i+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(i,a.length-r),l=s.l,h=(s.r||0)&7;if(e){h&&(c[0]=s.r>>3);for(var u=jp[e-1],f=u>>13,p=u&8191,g=(1<<t)-1,v=s.p||new ln(32768),m=s.h||new ln(g+1),d=Math.ceil(t/3),b=2*d,E=function(qe){return(n[qe]^n[qe+1]<<d^n[qe+2]<<b)&g},S=new wl(25e3),x=new ln(288),A=new ln(32),T=0,C=0,y=s.i||0,_=0,P=s.w||0,F=0;y+2<o;++y){var k=E(y),q=y&32767,H=m[k];if(v[q]=H,m[k]=q,P<=y){var I=o-y;if((T>7e3||_>24576)&&(I>423||!l)){h=Zh(n,c,0,S,x,A,C,_,F,y-F,h),_=T=C=0,F=y;for(var G=0;G<286;++G)x[G]=0;for(var G=0;G<30;++G)A[G]=0}var z=2,L=0,B=p,$=q-H&32767;if(I>2&&k==E(y-$))for(var Q=Math.min(f,I)-1,ie=Math.min(32767,y),re=Math.min(258,I);$<=ie&&--B&&q!=H;){if(n[y+z]==n[y+z-$]){for(var J=0;J<re&&n[y+J]==n[y+J-$];++J);if(J>z){if(z=J,L=$,J>Q)break;for(var N=Math.min($,J-2),W=0,G=0;G<N;++G){var oe=y-$+G&32767,ee=v[oe],ne=oe-ee&32767;ne>W&&(W=ne,H=oe)}}}q=H,H=v[q],$+=q-H&32767}if(L){S[_++]=268435456|_l[z]<<18|Yh[L];var Re=_l[z]&31,et=Yh[L]&31;C+=Hs[Re]+Gs[et],++x[257+Re],++A[et],P=y+z,++T}else S[_++]=n[y],++x[n[y]]}}for(y=Math.max(y,P);y<o;++y)S[_++]=n[y],++x[n[y]];h=Zh(n,c,l,S,x,A,C,_,F,y-F,h),l||(s.r=h&7|c[h/8|0]<<3,h-=7,s.h=m,s.p=v,s.i=y,s.w=P)}else{for(var y=s.w||0;y<o+l;y+=65535){var D=y+65535;D>=o&&(c[h/8|0]=l,D=o),h=iu(c,h+1,n.subarray(y,D))}s.i=o}return Yr(a,0,i+El(h)+r)},Kp=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),Qp=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=Kp[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}},su=function(){var n=1,e=0;return{p:function(t){for(var i=n,r=e,s=t.length|0,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)r+=i+=t[o];i=(i&65535)+15*(i>>16),r=(r&65535)+15*(r>>16)}n=i,e=r},d:function(){return n%=65521,e%=65521,(n&255)<<24|(n&65280)<<8|(e&255)<<8|e>>8}}},ou=function(n,e,t,i,r){if(!r&&(r={l:1},e.dictionary)){var s=e.dictionary.subarray(-32768),o=new gt(s.length+n.length);o.set(s),o.set(n,s.length),n=o,r.w=s.length}return Jp(n,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,r)},au=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var Ln=function(n,e){return n[e]|n[e+1]<<8},mn=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},vl=function(n,e){return mn(n,e)+mn(n,e+4)*4294967296},Et=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};var em=function(n){(n[0]!=31||n[1]!=139||n[2]!=8)&&bt(6,"invalid gzip data");var e=n[3],t=10;e&4&&(t+=(n[10]|n[11]<<8)+2);for(var i=(e>>3&1)+(e>>4&1);i>0;i-=!n[t++]);return t+(e&2)},tm=function(n){var e=n.length;return(n[e-4]|n[e-3]<<8|n[e-2]<<16|n[e-1]<<24)>>>0};var nm=function(n,e){var t=e.level,i=t==0?0:t<6?1:t==9?3:2;if(n[0]=120,n[1]=i<<6|(e.dictionary&&32),n[1]|=31-(n[0]<<8|n[1])%31,e.dictionary){var r=su();r.p(e.dictionary),Et(n,2,r.d())}},im=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&bt(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&bt(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function rm(n,e){return ou(n,e||{},0,0)}function sm(n,e){return Tl(n,{i:2},e&&e.out,e&&e.dictionary)}function lu(n,e){var t=em(n);return t+8>n.length&&bt(6,"invalid gzip data"),Tl(n.subarray(t,-8),{i:2},e&&e.out||new gt(tm(n)),e&&e.dictionary)}function cu(n,e){e||(e={});var t=su();t.p(n);var i=ou(n,e,e.dictionary?6:2,4);return nm(i,e),Et(i,i.length-4,t.d()),i}function hu(n,e){return Tl(n.subarray(im(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var uu=function(n,e,t,i){for(var r in n){var s=n[r],o=e+r,a=i;Array.isArray(s)&&(a=au(i,s[1]),s=s[0]),ArrayBuffer.isView(s)?t[o]=[s,a]:(t[o+="/"]=[new gt(0),a],uu(s,o,t,i))}},jh=typeof TextEncoder<"u"&&new TextEncoder,Ml=typeof TextDecoder<"u"&&new TextDecoder,om=0;try{Ml.decode(ru,{stream:!0}),om=1}catch{}var am=function(n){for(var e="",t=0;;){var i=n[t++],r=(i>127)+(i>223)+(i>239);if(t+r>n.length)return{s:e,r:Yr(n,t-1)};r?r==3?(i=((i&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?e+=String.fromCharCode((i&31)<<6|n[t++]&63):e+=String.fromCharCode((i&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(i)}};function Jh(n,e){if(e){for(var t=new gt(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(jh)return jh.encode(n);for(var r=n.length,s=new gt(n.length+(n.length>>1)),o=0,a=function(h){s[o++]=h},i=0;i<r;++i){if(o+5>s.length){var c=new gt(o+8+(r-i<<1));c.set(s),s=c}var l=n.charCodeAt(i);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Yr(s,0,o)}function lm(n,e){if(e){for(var t="",i=0;i<n.length;i+=16384)t+=String.fromCharCode.apply(null,n.subarray(i,i+16384));return t}else{if(Ml)return Ml.decode(n);var r=am(n),s=r.s,t=r.r;return t.length&&bt(8),s}}var cm=function(n,e){return e+30+Ln(n,e+26)+Ln(n,e+28)},hm=function(n,e,t){var i=Ln(n,e+28),r=Ln(n,e+30),s=lm(n.subarray(e+46,e+46+i),!(Ln(n,e+8)&2048)),o=e+46+i,a=um(n,o,r,t,mn(n,e+20),mn(n,e+24),mn(n,e+42)),c=a[0],l=a[1],h=a[2];return[Ln(n,e+10),c,l,s,o+r+Ln(n,e+32),h]},um=function(n,e,t,i,r,s,o){var a=r==4294967295,c=s==4294967295,l=o==4294967295,h=e+t,u=a+c+l;if(i&&u){for(;e+4<h;e+=4+Ln(n,e+2))if(Ln(n,e)==1)return[a?vl(n,e+4+8*c):r,c?vl(n,e+4):s,l?vl(n,e+4+8*(c+a)):o,1];i<2&&bt(13)}return[r,s,o,0]},bl=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&bt(9),e+=i+4}return e},Kh=function(n,e,t,i,r,s,o,a){var c=i.length,l=t.extra,h=a&&a.length,u=bl(l);Et(n,e,o!=null?33639248:67324752),e+=4,o!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(s<0&&8),n[e++]=r&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&bt(10),Et(n,e,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),e+=4,s!=-1&&(Et(n,e,t.crc),Et(n,e+4,s<0?-s-2:s),Et(n,e+8,t.size)),Et(n,e+12,c),Et(n,e+14,u),e+=16,o!=null&&(Et(n,e,h),Et(n,e+6,t.attrs),Et(n,e+10,o),e+=14),n.set(i,e),e+=c,u)for(var g in l){var v=l[g],m=v.length;Et(n,e,+g),Et(n,e+2,m),n.set(v,e+4),e+=4+m}return h&&(n.set(a,e),e+=h),e},fm=function(n,e,t,i,r){Et(n,e,101010256),Et(n,e+8,t),Et(n,e+10,t),Et(n,e+12,i),Et(n,e+16,r)};function Al(n,e){e||(e={});var t={},i=[];uu(n,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],c=a[0],l=a[1],h=l.level==0?0:8,u=Jh(o),f=u.length,p=l.comment,g=p&&Jh(p),v=g&&g.length,m=bl(l.extra);f>65535&&bt(11);var d=h?rm(c,l):c,b=d.length,E=Qp();E.p(c),i.push(au(l,{size:c.length,crc:E.d(),c:d,f:u,m:g,u:f!=o.length||g&&p.length!=v,o:r,compression:h})),r+=30+f+m+b,s+=76+2*(f+m)+(v||0)+b}for(var S=new gt(s+22),x=r,A=s-r,T=0;T<i.length;++T){var u=i[T];Kh(S,u.o,u,u.f,u.u,u.c.length);var C=30+u.f.length+bl(u.extra);S.set(u.c,u.o+C),Kh(S,r,u,u.f,u.u,u.c.length,u.o,u.m),r+=16+C+(u.m?u.m.length:0)}return fm(S,r,i.length,A,x),S}function fu(n,e){for(var t={},i=n.length-22;mn(n,i)!=101010256;--i)(!i||n.length-i>65558)&&bt(13);var r=Ln(n,i+8);if(!r)return{};var s=mn(n,i+16),o=mn(n,i-20)==117853008;if(o){var a=mn(n,i-12);o=mn(n,a)==101075792,o&&(r=mn(n,a+32),s=mn(n,a+48))}for(var c=e&&e.filter,l=0;l<r;++l){var h=hm(n,s,o),u=h[0],f=h[1],p=h[2],g=h[3],v=h[4],m=h[5],d=cm(n,m);s=v,(!c||c({name:g,size:f,originalSize:p,compression:u}))&&(u?u==8?t[g]=sm(n.subarray(d,d+f),{out:new gt(p)}):bt(14,"unknown compression type "+u):t[g]=Yr(n,d,d+f))}return t}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qu=0,fc=1,Yu=2;var dc=1,$u=2,Fn=3,Tn=0,$t=1,Ut=2,Zt=0,Ii=1,pc=2,mc=3,gc=4,zo=5,An=100,Zu=101,ju=102,Ju=103,Ku=104,ko=200,Ar=201,Qu=202,ef=203,fo=204,po=205,tf=206,nf=207,rf=208,sf=209,of=210,af=211,lf=212,cf=213,hf=214,Vo=0,Ho=1,Go=2,Di=3,Wo=4,Xo=5,qo=6,Yo=7,vc=0,uf=1,ff=2,jt=0,df=1,pf=2,mf=3,$o=4,gf=5,vf=6,yf=7,ec="attached",_f="detached",yc=300,Bi=301,zi=302,Zo=303,jo=304,bs=306,pi=1e3,qt=1001,mo=1002,ut=1003,xf=1004;var ws=1005;var At=1006,Jo=1007;var Jt=1008;var Kt=1009,_c=1010,xc=1011,Cr=1012,Ko=1013,xi=1014,Ct=1015,nn=1016,Qo=1017,ea=1018,Rr=1020,Sc=35902,Mc=35899,bc=1021,wc=1022,Mt=1023,pr=1026,Pr=1027,ki=1028,ta=1029,Ec=1030,na=1031;var ia=1033,Es=33776,Ts=33777,As=33778,Cs=33779,ra=35840,sa=35841,oa=35842,aa=35843,la=36196,ca=37492,ha=37496,ua=37808,fa=37809,da=37810,pa=37811,ma=37812,ga=37813,va=37814,ya=37815,_a=37816,xa=37817,Sa=37818,Ma=37819,ba=37820,wa=37821,Ea=36492,Ta=36494,Aa=36495,Ca=36283,Ra=36284,Pa=36285,Ia=36286;var ns=2300,go=2301,uo=2302,tc=2400,nc=2401,ic=2402;var Da=3200,Sf=3201;var Tc=0,Mf=1,vt="",Tt="srgb",ft="srgb-linear",is="linear",tt="srgb";var Pi=7680;var rc=519,bf=512,wf=513,Ef=514,Ac=515,Tf=516,Af=517,Cf=518,Rf=519,sc=35044;var Cc="300 es",wn=2e3,rs=2001;var Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=1234567,es=Math.PI/180,mr=180/Math.PI;function Vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Rc(n,e){return(n%e+e)%e}function dm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function pm(n,e,t){return n!==e?(t-n)/(e-n):0}function ts(n,e,t){return(1-t)*n+t*e}function mm(n,e,t,i){return ts(n,e,1-Math.exp(-t*i))}function gm(n,e=1){return e-Math.abs(Rc(n,e*2)-e)}function vm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ym(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _m(n,e){return n+Math.floor(Math.random()*(e-n+1))}function xm(n,e){return n+Math.random()*(e-n)}function Sm(n){return n*(.5-Math.random())}function Mm(n){n!==void 0&&(du=n);let e=du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bm(n){return n*es}function wm(n){return n*mr}function Em(n){return(n&n-1)===0&&n!==0}function Tm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Am(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cm(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Qt={DEG2RAD:es,RAD2DEG:mr,generateUUID:Vi,clamp:$e,euclideanModulo:Rc,mapLinear:dm,inverseLerp:pm,lerp:ts,damp:mm,pingpong:gm,smoothstep:vm,smootherstep:ym,randInt:_m,randFloat:xm,randFloatSpread:Sm,seededRandom:Mm,degToRad:bm,radToDeg:wm,isPowerOfTwo:Em,ceilPowerOfTwo:Tm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Cm,normalize:Xt,denormalize:fr},Pe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==p||h!==g){let m=1-a,d=c*f+l*p+h*g+u*v,b=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let x=Math.sqrt(E),A=Math.atan2(x,d*b);m=Math.sin(m*A)/x,a=Math.sin(a*A)/x}let S=a*b;if(c=c*m+f*S,l=l*m+p*S,h=h*m+g*S,u=u*m+v*S,m===1-a){let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-a*p,e[t+2]=l*g+h*p+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cl.copy(this).projectOnVector(e),this.sub(Cl)}reflect(e){return this.sub(Cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cl=new U,pu=new dt,Ve=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],d=r[6],b=r[1],E=r[4],S=r[7],x=r[2],A=r[5],T=r[8];return s[0]=o*v+a*b+c*x,s[3]=o*m+a*E+c*A,s[6]=o*d+a*S+c*T,s[1]=l*v+h*b+u*x,s[4]=l*m+h*E+u*A,s[7]=l*d+h*S+u*T,s[2]=f*v+p*b+g*x,s[5]=f*m+p*E+g*A,s[8]=f*d+p*S+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*s,p=l*s-o*c,g=t*u+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(r*l-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rl=new Ve;function Pc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ss(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pf(){let n=ss("canvas");return n.style.display="block",n}var mu={};function gr(n){n in mu||(mu[n]=!0,console.warn(n))}function If(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var gu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rm(){let n={enabled:!0,workingColorSpace:ft,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vt?is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ft]:{primaries:e,whitePoint:i,transfer:is,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:gu,fromXYZ:vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}var je=Rm();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function dr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var er,vo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{er===void 0&&(er=ss("canvas")),er.width=e.width,er.height=e.height;let r=er.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ss("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pm=0,vr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pl(r[o].image)):s.push(Pl(r[o]))}else s=Pl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Im=0,Il=new U,Yt=class n extends Un{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=qt,r=qt,s=At,o=Jt,a=Mt,c=Kt,l=n.DEFAULT_ANISOTROPY,h=vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Vi(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=yc;Yt.DEFAULT_ANISOTROPY=1;var Xe=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,S=(p+1)/2,x=(d+1)/2,A=(h+f)/4,T=(u+v)/4,C=(g+m)/4;return E>S&&E>x?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=T/i):S>x?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=T/s,r=C/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yo=class extends Un{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);let r={width:e,height:t,depth:i.depth},s=new Yt(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends yo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},os=class extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Xs.subVectors(this.max,$r),tr.subVectors(e.a,$r),nr.subVectors(e.b,$r),ir.subVectors(e.c,$r),ai.subVectors(nr,tr),li.subVectors(ir,nr),Ti.subVectors(tr,ir);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ti.z,Ti.y,ai.z,0,-ai.x,li.z,0,-li.x,Ti.z,0,-Ti.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ti.y,Ti.x,0];return!Dl(t,tr,nr,ir,Xs)||(t=[1,0,0,0,1,0,0,0,1],!Dl(t,tr,nr,ir,Xs))?!1:(qs.crossVectors(ai,li),t=[qs.x,qs.y,qs.z],Dl(t,tr,nr,ir,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new U,new U,new U,new U,new U,new U,new U,new U],Sn=new U,Ws=new un,tr=new U,nr=new U,ir=new U,ai=new U,li=new U,Ti=new U,$r=new U,Xs=new U,qs=new U,Ai=new U;function Dl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ai.fromArray(n,s);let a=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Dm=new un,Zr=new U,Ll=new U,Kn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Dm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Ll)),this.expandByPoint(Zr.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qn=new U,Nl=new U,Ys=new U,ci=new U,Ul=new U,$s=new U,Fl=new U,Qn=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nl.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Nl);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),a=ci.dot(this.direction),c=-ci.dot(Ys),l=ci.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Nl).addScaledVector(Ys,f),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);let i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){Ul.subVectors(t,e),$s.subVectors(i,e),Fl.crossVectors(Ul,$s);let o=this.direction.dot(Fl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);let c=a*this.direction.dot($s.crossVectors(ci,$s));if(c<0)return null;let l=a*this.direction.dot(Ul.cross(ci));if(l<0||c+l>o)return null;let h=-a*ci.dot(Fl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class n{constructor(e,t,i,r,s,o,a,c,l,h,u,f,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,h,u,f,p,g,v,m)}set(e,t,i,r,s,o,a,c,l,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){let f=o*c,p=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Nm)}lookAt(e,t,i){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),hi.crossVectors(i,cn),hi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),hi.crossVectors(i,cn)),hi.normalize(),Zs.crossVectors(cn,hi),r[0]=hi.x,r[4]=Zs.x,r[8]=cn.x,r[1]=hi.y,r[5]=Zs.y,r[9]=cn.y,r[2]=hi.z,r[6]=Zs.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],b=i[3],E=i[7],S=i[11],x=i[15],A=r[0],T=r[4],C=r[8],y=r[12],_=r[1],P=r[5],F=r[9],k=r[13],q=r[2],H=r[6],I=r[10],G=r[14],z=r[3],L=r[7],B=r[11],$=r[15];return s[0]=o*A+a*_+c*q+l*z,s[4]=o*T+a*P+c*H+l*L,s[8]=o*C+a*F+c*I+l*B,s[12]=o*y+a*k+c*G+l*$,s[1]=h*A+u*_+f*q+p*z,s[5]=h*T+u*P+f*H+p*L,s[9]=h*C+u*F+f*I+p*B,s[13]=h*y+u*k+f*G+p*$,s[2]=g*A+v*_+m*q+d*z,s[6]=g*T+v*P+m*H+d*L,s[10]=g*C+v*F+m*I+d*B,s[14]=g*y+v*k+m*G+d*$,s[3]=b*A+E*_+S*q+x*z,s[7]=b*T+E*P+S*H+x*L,s[11]=b*C+E*F+S*I+x*B,s[15]=b*y+E*k+S*G+x*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*c*u-r*l*u-s*a*f+i*l*f+r*a*p-i*c*p)+v*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*h-s*c*h)+m*(+t*l*u-t*a*p-s*o*u+i*o*p+s*a*h-i*l*h)+d*(-r*a*h-t*c*u+t*a*f+r*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],b=u*m*l-v*f*l+v*c*p-a*m*p-u*c*d+a*f*d,E=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,S=h*v*l-g*u*l+g*a*p-o*v*p-h*a*d+o*u*d,x=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,A=t*b+i*E+r*S+s*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=b*T,e[1]=(v*f*s-u*m*s-v*r*p+i*m*p+u*r*d-i*f*d)*T,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*d+i*c*d)*T,e[3]=(u*c*s-a*f*s-u*r*l+i*f*l+a*r*p-i*c*p)*T,e[4]=E*T,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*d+t*f*d)*T,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*d-t*c*d)*T,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*p+t*c*p)*T,e[8]=S*T,e[9]=(g*u*s-h*v*s-g*i*p+t*v*p+h*i*d-t*u*d)*T,e[10]=(o*v*s-g*a*s+g*i*l-t*v*l-o*i*d+t*a*d)*T,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*p-t*a*p)*T,e[12]=x*T,e[13]=(h*v*r-g*u*r+g*i*f-t*v*f-h*i*m+t*u*m)*T,e[14]=(g*a*r-o*v*r-g*i*c+t*v*c+o*i*m-t*a*m)*T,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,f=s*l,p=s*h,g=s*u,v=o*h,m=o*u,d=a*u,b=c*l,E=c*h,S=c*u,x=i.x,A=i.y,T=i.z;return r[0]=(1-(v+d))*x,r[1]=(p+S)*x,r[2]=(g-E)*x,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+d))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(g+E)*T,r[9]=(m-b)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=rr.set(r[0],r[1],r[2]).length(),o=rr.set(r[4],r[5],r[6]).length(),a=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);let l=1/s,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=wn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===wn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===rs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=wn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===wn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===rs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},rr=new U,Mn=new Ue,Lm=new U(0,0,0),Nm=new U(1,1,1),hi=new U,Zs=new U,cn=new U,yu=new Ue,_u=new dt,Cn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _u.setFromEuler(this),this.setFromQuaternion(_u,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Um=0,xu=new U,sr=new dt,Yn=new Ue,js=new U,jr=new U,Fm=new U,Om=new dt,Su=new U(1,0,0),Mu=new U(0,1,0),bu=new U(0,0,1),wu={type:"added"},Bm={type:"removed"},or={type:"childadded",child:null},Ol={type:"childremoved",child:null},Nt=class n extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Cn,i=new dt,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ve}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(Mu,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return xu.copy(e).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(Mu,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?js.copy(e):js.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(jr,js,this.up):Yn.lookAt(js,jr,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Yn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wu),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bm),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wu),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,Fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new U,$n=new U,Bl=new U,Zn=new U,ar=new U,lr=new U,Eu=new U,zl=new U,kl=new U,Vl=new U,Hl=new Xe,Gl=new Xe,Wl=new Xe,di=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),$n.subVectors(i,t),Bl.subVectors(e,t);let o=bn.dot(bn),a=bn.dot($n),c=bn.dot(Bl),l=$n.dot($n),h=$n.dot(Bl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Hl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Hl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,i),Wl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hl,s.x),o.addScaledVector(Gl,s.y),o.addScaledVector(Wl,s.z),o}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),$n.subVectors(e,t),bn.cross($n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),bn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;ar.subVectors(r,i),lr.subVectors(s,i),zl.subVectors(e,i);let c=ar.dot(zl),l=lr.dot(zl);if(c<=0&&l<=0)return t.copy(i);kl.subVectors(e,r);let h=ar.dot(kl),u=lr.dot(kl);if(h>=0&&u<=h)return t.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ar,o);Vl.subVectors(e,s);let p=ar.dot(Vl),g=lr.dot(Vl);if(g>=0&&p<=g)return t.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(lr,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Eu.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(Eu,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Rc(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xl(o,s,e+1/3),this.g=Xl(o,s,e),this.b=Xl(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,t=Tt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=Df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return je.workingToColorSpace(Vt.copy(this),e),Math.round($e(Vt.r*255,0,255))*65536+Math.round($e(Vt.g*255,0,255))*256+Math.round($e(Vt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Vt.copy(this),t);let i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Tt){je.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,r=Vt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Js);let i=ts(ui.h,Js.h,t),r=ts(ui.s,Js.s,t),s=ts(ui.l,Js.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Be;Be.NAMES=Df;var zm=0,ei=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Ii,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fo&&(i.blendSrc=this.blendSrc),this.blendDst!==po&&(i.blendDst=this.blendDst),this.blendEquation!==An&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mi=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new U,Ks=new Pe,km=0,tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sc,this.updateRanges=[],this.gpuType=Ct,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}};var Li=class extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var as=class extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Vm=0,gn=new Ue,ql=new Nt,cr=new U,hn=new un,Jr=new un,Lt=new U,zt=class n extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pc(e)?as:Li)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,Jr.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,Jr.max),hn.expandByPoint(Lt)):(hn.expandByPoint(Jr.min),hn.expandByPoint(Jr.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Lt.fromBufferAttribute(a,l),c&&(cr.fromBufferAttribute(e,l),Lt.add(cr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<i.count;C++)a[C]=new U,c[C]=new U;let l=new U,h=new U,u=new U,f=new Pe,p=new Pe,g=new Pe,v=new U,m=new U;function d(C,y,_){l.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,_),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,_),h.sub(l),u.sub(l),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(v),a[y].add(v),a[_].add(v),c[C].add(m),c[y].add(m),c[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,y=b.length;C<y;++C){let _=b[C],P=_.start,F=_.count;for(let k=P,q=P+F;k<q;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new U,S=new U,x=new U,A=new U;function T(C){x.fromBufferAttribute(r,C),A.copy(x);let y=a[C];E.copy(y),E.sub(x.multiplyScalar(x.dot(y))).normalize(),S.crossVectors(A,y);let P=S.dot(c[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,y=b.length;C<y;++C){let _=b[C],P=_.start,F=_.count;for(let k=P,q=P+F;k<q;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new tn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tu=new Ue,Ci=new Qn,Qs=new Kn,Au=new U,eo=new U,to=new U,no=new U,Yl=new U,io=new U,Cu=new U,ro=new U,St=class extends Nt{constructor(e=new zt,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){io.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Yl.fromBufferAttribute(u,e),o?io.addScaledVector(Yl,h):io.addScaledVector(Yl.sub(t),h))}t.add(io)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(Qs.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Qs,Au)===null||Ci.origin.distanceToSquared(Au)>(e.far-e.near)**2))&&(Tu.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(Tu),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,x=E;S<x;S+=3){let A=a.getX(S),T=a.getX(S+1),C=a.getX(S+2);r=so(this,d,e,i,l,h,u,A,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let b=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);r=so(this,o,e,i,l,h,u,b,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,x=E;S<x;S+=3){let A=S,T=S+1,C=S+2;r=so(this,d,e,i,l,h,u,A,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let b=m,E=m+1,S=m+2;r=so(this,o,e,i,l,h,u,b,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Hm(n,e,t,i,r,s,o,a){let c;if(e.side===$t?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Tn,a),c===null)return null;ro.copy(a),ro.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(ro);return l<t.near||l>t.far?null:{distance:l,point:ro.clone(),object:n}}function so(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,eo),n.getVertexPosition(c,to),n.getVertexPosition(l,no);let h=Hm(n,e,t,i,eo,to,no,Cu);if(h){let u=new U;di.getBarycoord(Cu,eo,to,no,u),r&&(h.uv=di.getInterpolatedAttribute(r,a,c,l,u,new Pe)),s&&(h.uv1=di.getInterpolatedAttribute(s,a,c,l,u,new Pe)),o&&(h.normal=di.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};di.getNormal(eo,to,no,f.normal),h.face=f,h.barycoord=u}return h}var _r=class n extends zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(v,m,d,b,E,S,x,A,T,C,y){let _=S/T,P=x/C,F=S/2,k=x/2,q=A/2,H=T+1,I=C+1,G=0,z=0,L=new U;for(let B=0;B<I;B++){let $=B*P-k;for(let Q=0;Q<H;Q++){let ie=Q*_-F;L[v]=ie*b,L[m]=$*E,L[d]=q,l.push(L.x,L.y,L.z),L[v]=0,L[m]=0,L[d]=A>0?1:-1,h.push(L.x,L.y,L.z),u.push(Q/T),u.push(1-B/C),G+=1}}for(let B=0;B<C;B++)for(let $=0;$<T;$++){let Q=f+$+H*B,ie=f+$+H*(B+1),re=f+($+1)+H*(B+1),J=f+($+1)+H*B;c.push(Q,ie,J),c.push(ie,re,J),z+=6}a.addGroup(p,z,y),p+=z,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=Hi(n[t]);for(let r in i)e[r]=i[r]}return e}function Gm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ic(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Lf={clone:Hi,merge:Gt},Wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wm,this.fragmentShader=Xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Gm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ti=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new U,Ru=new Pe,Pu=new Pe,Ot=class extends ti{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Pu),t.subVectors(Pu,Ru)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(es*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,ur=1,xo=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ot(hr,ur,e,t);r.layers=this.layers,this.add(r);let s=new Ot(hr,ur,e,t);s.layers=this.layers,this.add(s);let o=new Ot(hr,ur,e,t);o.layers=this.layers,this.add(o);let a=new Ot(hr,ur,e,t);a.layers=this.layers,this.add(a);let c=new Ot(hr,ur,e,t);c.layers=this.layers,this.add(c);let l=new Ot(hr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ni=class extends Yt{constructor(e=[],t=Bi,i,r,s,o,a,c,l,h){super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},So=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ni(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Zt});s.uniforms.tEquirect.value=t;let o=new St(r,s),a=t.minFilter;return t.minFilter===Jt&&(t.minFilter=At),new xo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},En=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qm={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new En;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ni=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Iu=new U,Du=new Xe,Lu=new Xe,Ym=new U,Nu=new Ue,oo=new U,$l=new Kn,Uu=new Ue,Zl=new Qn,Ui=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ec,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,oo),this.boundingSphere.expandByPoint(oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(r),e.ray.intersectsSphere($l)!==!1&&(Uu.copy(r).invert(),Zl.copy(e.ray).applyMatrix4(Uu),!(this.boundingBox!==null&&Zl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xe,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ec?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_f?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Du.fromBufferAttribute(r.attributes.skinIndex,e),Lu.fromBufferAttribute(r.attributes.skinWeight,e),Iu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Lu.getComponent(s);if(o!==0){let a=Du.getComponent(s);Nu.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ym.copy(Iu).applyMatrix4(Nu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Sr=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},yn=class extends Yt{constructor(e=null,t=1,i=1,r,s,o,a,c,l=ut,h=ut,u,f){super(null,o,a,c,l,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fu=new Ue,$m=new Ue,ls=class n{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:$m;Fu.multiplyMatrices(a,t[s]),Fu.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new yn(t,e,e,Mt,Ct);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sr),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}};var jl=new U,Zm=new U,jm=new Ve,vn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=jl.subVectors(i,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||jm.getNormalMatrix(e),r=this.coplanarPoint(jl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new Kn,Jm=new Pe(.5,.5),ao=new U,Mr=class{constructor(e=new vn,t=new vn,i=new vn,r=new vn,s=new vn,o=new vn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],b=s[12],E=s[13],S=s[14],x=s[15];if(r[0].setComponents(l-o,p-h,d-g,x-b).normalize(),r[1].setComponents(l+o,p+h,d+g,x+b).normalize(),r[2].setComponents(l+a,p+u,d+v,x+E).normalize(),r[3].setComponents(l-a,p-u,d-v,x-E).normalize(),i)r[4].setComponents(c,f,m,S).normalize(),r[5].setComponents(l-c,p-f,d-m,x-S).normalize();else if(r[4].setComponents(l-c,p-f,d-m,x-S).normalize(),t===wn)r[5].setComponents(l+c,p+f,d+m,x+S).normalize();else if(t===rs)r[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Jm.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cs=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mo=new U,bo=new U,Ou=new Ue,Kr=new Qn,lo=new Kn,Jl=new U,Bu=new U,wo=class extends Nt{constructor(e=new zt,t=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Mo.fromBufferAttribute(t,r-1),bo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Mo.distanceTo(bo);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=s,e.ray.intersectsSphere(lo)===!1)return;Ou.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(Ou);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){let d=h.getX(v),b=h.getX(v+1),E=co(this,e,Kr,c,d,b,v);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),d=co(this,e,Kr,c,v,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){let d=co(this,e,Kr,c,v,v+1,v);d&&t.push(d)}if(this.isLineLoop){let v=co(this,e,Kr,c,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function co(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(Mo.fromBufferAttribute(a,r),bo.fromBufferAttribute(a,s),t.distanceSqToSegment(Mo,bo,Jl,Bu)>i)return;Jl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Jl);if(!(l<e.near||l>e.far))return{distance:l,point:Bu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var zu=new U,ku=new U,Eo=class extends wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)zu.fromBufferAttribute(t,r),ku.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zu.distanceTo(ku);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hs=class extends Yt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},us=class extends Yt{constructor(e,t,i=xi,r,s,o,a=ut,c=ut,l,h=pr,u=1){if(h!==pr&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fs=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ii=class n extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,f=t/c,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let b=d*f-o;for(let E=0;E<l;E++){let S=E*u-s;g.push(S,-b,0),v.push(0,0,1),m.push(E/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){let E=b+l*d,S=b+l*(d+1),x=b+1+l*(d+1),A=b+1+l*d;p.push(E,S,A),p.push(S,x,A)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ds=class n extends zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,f=new U,p=[],g=[],v=[],m=[];for(let d=0;d<=i;d++){let b=[],E=d/i,S=0;d===0&&o===0?S=.5/t:d===i&&c===Math.PI&&(S=-.5/t);for(let x=0;x<=t;x++){let A=x/t;u.x=-e*Math.cos(r+A*s)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(r+A*s)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+S,1-E),b.push(l++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){let E=h[d][b+1],S=h[d][b],x=h[d+1][b],A=h[d+1][b+1];(d!==0||o>0)&&p.push(E,S,A),(d!==i-1||c<Math.PI)&&p.push(S,x,A)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var To=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fi=class extends To{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var br=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Da,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ao=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ho(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Km(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Oi=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Co=class extends Oi{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case nc:s=e,a=2*t-i;break;case ic:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case nc:o=e,c=2*i-t;break;case ic:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,b=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*v+.5*g,S=p*m-p*v;for(let x=0;x!==a;++x)s[x]=d*o[h+x]+b*o[l+x]+E*o[c+x]+S*o[u+x];return s}},Ro=class extends Oi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(r-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},Po=class extends Oi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ns:t=this.InterpolantFactoryMethodDiscrete;break;case go:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return go;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Km(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===uo,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[f+g]||v!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=go;var gi=class extends fn{constructor(e,t,i){super(e,t,i)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=ns;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}};Io.prototype.ValueTypeName="color";var Do=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}};Do.prototype.ValueTypeName="number";var Lo=class extends Oi{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)dt.slerpFlat(s,0,o,l-a,o,l,c);return s}},ps=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends fn{constructor(e,t,i){super(e,t,i)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=ns;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends fn{constructor(e,t,i,r){super(e,t,i,r)}};No.prototype.ValueTypeName="vector";var oc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Uo=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Nf=new Uo,wr=class{constructor(e){this.manager=e!==void 0?e:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wr.DEFAULT_MATERIAL_NAME="__DEFAULT";var jn={},ac=class extends Error{constructor(e,t){super(e),this.response=t}},Fo=class extends wr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=oc.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(jn[e]!==void 0){jn[e].push({onLoad:t,onProgress:i,onError:r});return}jn[e]=[],jn[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=jn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){b();function b(){u.read().then(({done:E,value:S})=>{if(E)d.close();else{v+=S.byteLength;let x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,T=h.length;A<T;A++){let C=h[A];C.onProgress&&C.onProgress(x)}d.enqueue(S),b()}},E=>{d.error(E)})}}});return new Response(m)}else throw new ac(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{oc.add(`file:${e}`,l);let h=jn[e];delete jn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=jn[e];if(h===void 0)throw this.manager.itemError(e),l;delete jn[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ms=class extends wr{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new yn,a=new Fo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(h){if(r!==void 0)r(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:qt,o.wrapT=l.wrapT!==void 0?l.wrapT:qt,o.magFilter=l.magFilter!==void 0?l.magFilter:At,o.minFilter=l.minFilter!==void 0?l.minFilter:At,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Jt),l.mipmapCount===1&&(o.minFilter=At),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},i,r),o}};var Er=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},gs=class extends Er{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kl=new Ue,Vu=new U,Hu=new U,Oo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vu),Hu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hu),t.updateMatrixWorld(),Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Gu=new Ue,Qr=new U,Ql=new U,lc=class extends Oo{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qr),Ql.copy(i.position),Ql.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ql),i.updateMatrixWorld(),r.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Gu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu,i.coordinateSystem,i.reversedDepth)}},vs=class extends Er{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ys=class extends ti{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cc=class extends Oo{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_s=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bo=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Dc="\\[\\]\\.:\\/",Qm=new RegExp("["+Dc+"]","g"),Lc="[^"+Dc+"]",eg="[^"+Dc.replace("\\.","")+"]",tg=/((?:WC+[\/:])*)/.source.replace("WC",Lc),ng=/(WCOD+)?/.source.replace("WCOD",eg),ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),sg=new RegExp("^"+tg+ng+ig+rg+"$"),og=["material","materials","bones","map"],hc=class{constructor(e,t,i){let r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},lt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qm,"")}static parseTrackName(e){let t=sg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);og.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=hc;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cS=new Float32Array(1);var Wu=new Ue,xs=class{constructor(e,t,i=0,r=1/0){this.ray=new Qn(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(e,t=!0,i=[]){return uc(e,this,i,t),i.sort(Xu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)uc(e[r],this,i,t);return i.sort(Xu),i}};function Xu(n,e){return n.distance-e.distance}function uc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)uc(s[o],e,t,!0)}}var Tr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ss=class extends Eo{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new zt;s.setIndex(new tn(i,1)),s.setAttribute("position",new ht(r,3)),super(s,new cs({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}};var Ms=class extends Un{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Nc(n,e,t,i){let r=ag(i);switch(t){case bc:return n*e;case ki:return n*e/r.components*r.byteLength;case ta:return n*e/r.components*r.byteLength;case Ec:return n*e*2/r.components*r.byteLength;case na:return n*e*2/r.components*r.byteLength;case wc:return n*e*3/r.components*r.byteLength;case Mt:return n*e*4/r.components*r.byteLength;case ia:return n*e*4/r.components*r.byteLength;case Es:case Ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case As:case Cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(n,16)*Math.max(e,8)/4;case ra:case oa:return Math.max(n,8)*Math.max(e,8)/2;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ya:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Ta:case Aa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ca:case Ra:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pa:case Ia:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ag(n){switch(n){case Kt:case _c:return{byteLength:1,components:1};case Cr:case xc:case nn:return{byteLength:2,components:1};case Qo:case ea:return{byteLength:2,components:4};case xi:case Ko:case Ct:return{byteLength:4,components:1};case Sc:case Mc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cg(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,l0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,L0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:hg,alphahash_pars_fragment:ug,alphamap_fragment:fg,alphamap_pars_fragment:dg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:vg,batching_pars_vertex:yg,batching_vertex:_g,begin_vertex:xg,beginnormal_vertex:Sg,bsdfs:Mg,iridescence_fragment:bg,bumpmap_pars_fragment:wg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Cg,color_fragment:Rg,color_pars_fragment:Pg,color_pars_vertex:Ig,color_vertex:Dg,common:Lg,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Fg,displacementmap_vertex:Og,emissivemap_fragment:Bg,emissivemap_pars_fragment:zg,colorspace_fragment:kg,colorspace_pars_fragment:Vg,envmap_fragment:Hg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:n0,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:$g,fog_fragment:Zg,fog_pars_fragment:jg,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:Kg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:i0,lights_toon_pars_fragment:r0,lights_phong_fragment:s0,lights_phong_pars_fragment:o0,lights_physical_fragment:a0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:h0,lights_fragment_end:u0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:d0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:v0,map_particle_fragment:y0,map_particle_pars_fragment:_0,metalnessmap_fragment:x0,metalnessmap_pars_fragment:S0,morphinstance_vertex:M0,morphcolor_vertex:b0,morphnormal_vertex:w0,morphtarget_pars_vertex:E0,morphtarget_vertex:T0,normal_fragment_begin:A0,normal_fragment_maps:C0,normal_pars_fragment:R0,normal_pars_vertex:P0,normal_vertex:I0,normalmap_pars_fragment:D0,clearcoat_normal_fragment_begin:L0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:F0,opaque_fragment:O0,packing:B0,premultiplied_alpha_fragment:z0,project_vertex:k0,dithering_fragment:V0,dithering_pars_fragment:H0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:q0,shadowmap_vertex:Y0,shadowmask_pars_fragment:$0,skinbase_vertex:Z0,skinning_pars_vertex:j0,skinning_vertex:J0,skinnormal_vertex:K0,specularmap_fragment:Q0,specularmap_pars_fragment:ev,tonemapping_fragment:tv,tonemapping_pars_fragment:nv,transmission_fragment:iv,transmission_pars_fragment:rv,uv_pars_fragment:sv,uv_pars_vertex:ov,uv_vertex:av,worldpos_vertex:lv,background_vert:cv,background_frag:hv,backgroundCube_vert:uv,backgroundCube_frag:fv,cube_vert:dv,cube_frag:pv,depth_vert:mv,depth_frag:gv,distanceRGBA_vert:vv,distanceRGBA_frag:yv,equirect_vert:_v,equirect_frag:xv,linedashed_vert:Sv,linedashed_frag:Mv,meshbasic_vert:bv,meshbasic_frag:wv,meshlambert_vert:Ev,meshlambert_frag:Tv,meshmatcap_vert:Av,meshmatcap_frag:Cv,meshnormal_vert:Rv,meshnormal_frag:Pv,meshphong_vert:Iv,meshphong_frag:Dv,meshphysical_vert:Lv,meshphysical_frag:Nv,meshtoon_vert:Uv,meshtoon_frag:Fv,points_vert:Ov,points_frag:Bv,shadow_vert:zv,shadow_frag:kv,sprite_vert:Vv,sprite_frag:Hv},pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},On={basic:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Gt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Gt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Gt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Gt([pe.points,pe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Gt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Gt([pe.common,pe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Gt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Gt([pe.sprite,pe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Gt([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Gt([pe.lights,pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};On.physical={uniforms:Gt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var La={r:0,b:0,g:0},Gi=new Cn,Gv=new Ue;function Wv(n,e,t,i,r,s,o){let a=new Be(0),c=s===!0?0:1,l,h,u=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function v(E){let S=!1,x=g(E);x===null?d(a,c):x&&x.isColor&&(d(x,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,S){let x=g(S);x&&(x.isCubeTexture||x.mapping===bs)?(h===void 0&&(h=new St(new _r(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Hi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Gi.copy(S.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(Gi)),h.material.toneMapped=je.getTransfer(x.colorSpace)!==tt,(u!==x||f!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new St(new ii(2,2),new Ht({name:"BackgroundMaterial",uniforms:Hi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,S){E.getRGB(La,Ic(n)),i.buffers.color.setClear(La.r,La.g,La.b,S,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:v,addToRenderList:m,dispose:b}}function Xv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(_,P,F,k,q){let H=!1,I=u(k,F,P);s!==I&&(s=I,l(s.object)),H=p(_,k,F,q),H&&g(_,k,F,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(_,P,F,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,P,F){let k=F.wireframe===!0,q=i[_.id];q===void 0&&(q={},i[_.id]=q);let H=q[P.id];H===void 0&&(H={},q[P.id]=H);let I=H[k];return I===void 0&&(I=f(c()),H[k]=I),I}function f(_){let P=[],F=[],k=[];for(let q=0;q<t;q++)P[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,P,F,k){let q=s.attributes,H=P.attributes,I=0,G=F.getAttributes();for(let z in G)if(G[z].location>=0){let B=q[z],$=H[z];if($===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&($=_.instanceColor)),B===void 0||B.attribute!==$||$&&B.data!==$.data)return!0;I++}return s.attributesNum!==I||s.index!==k}function g(_,P,F,k){let q={},H=P.attributes,I=0,G=F.getAttributes();for(let z in G)if(G[z].location>=0){let B=H[z];B===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(B=_.instanceColor));let $={};$.attribute=B,B&&B.data&&($.data=B.data),q[z]=$,I++}s.attributes=q,s.attributesNum=I,s.index=k}function v(){let _=s.newAttributes;for(let P=0,F=_.length;P<F;P++)_[P]=0}function m(_){d(_,0)}function d(_,P){let F=s.newAttributes,k=s.enabledAttributes,q=s.attributeDivisors;F[_]=1,k[_]===0&&(n.enableVertexAttribArray(_),k[_]=1),q[_]!==P&&(n.vertexAttribDivisor(_,P),q[_]=P)}function b(){let _=s.newAttributes,P=s.enabledAttributes;for(let F=0,k=P.length;F<k;F++)P[F]!==_[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function E(_,P,F,k,q,H,I){I===!0?n.vertexAttribIPointer(_,P,F,q,H):n.vertexAttribPointer(_,P,F,k,q,H)}function S(_,P,F,k){v();let q=k.attributes,H=F.getAttributes(),I=P.defaultAttributeValues;for(let G in H){let z=H[G];if(z.location>=0){let L=q[G];if(L===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(L=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(L=_.instanceColor)),L!==void 0){let B=L.normalized,$=L.itemSize,Q=e.get(L);if(Q===void 0)continue;let ie=Q.buffer,re=Q.type,J=Q.bytesPerElement,N=re===n.INT||re===n.UNSIGNED_INT||L.gpuType===Ko;if(L.isInterleavedBufferAttribute){let W=L.data,oe=W.stride,ee=L.offset;if(W.isInstancedInterleavedBuffer){for(let ne=0;ne<z.locationSize;ne++)d(z.location+ne,W.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ne=0;ne<z.locationSize;ne++)m(z.location+ne);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ne=0;ne<z.locationSize;ne++)E(z.location+ne,$/z.locationSize,re,B,oe*J,(ee+$/z.locationSize*ne)*J,N)}else{if(L.isInstancedBufferAttribute){for(let W=0;W<z.locationSize;W++)d(z.location+W,L.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let W=0;W<z.locationSize;W++)m(z.location+W);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let W=0;W<z.locationSize;W++)E(z.location+W,$/z.locationSize,re,B,$*J,$/z.locationSize*W*J,N)}}else if(I!==void 0){let B=I[G];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(z.location,B);break;case 3:n.vertexAttrib3fv(z.location,B);break;case 4:n.vertexAttrib4fv(z.location,B);break;default:n.vertexAttrib1fv(z.location,B)}}}}b()}function x(){C();for(let _ in i){let P=i[_];for(let F in P){let k=P[F];for(let q in k)h(k[q].object),delete k[q];delete P[F]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;let P=i[_.id];for(let F in P){let k=P[F];for(let q in k)h(k[q].object),delete k[q];delete P[F]}delete i[_.id]}function T(_){for(let P in i){let F=i[P];if(F[_.id]===void 0)continue;let k=F[_.id];for(let q in k)h(k[q].object),delete k[q];delete F[_.id]}}function C(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function qv(n,e,t){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function c(l,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Yv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Mt&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Kt&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ct&&!C)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:x,maxSamples:A}}function $v(n){let e=this,t=null,i=0,r=!1,s=!1,o=new vn,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let b=s?0:i,E=b*4,S=d.clippingState||null;c.value=S,S=h(g,f,E,p);for(let x=0;x!==E;++x)S[x]=t[x];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let d=p+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==v;++E,S+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Zv(n){let e=new WeakMap;function t(o,a){return a===Zo?o.mapping=Bi:a===jo&&(o.mapping=zi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zo||a===jo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new So(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Dr=4,Uf=[.125,.215,.35,.446,.526,.582],qi=20,Uc=new ys,Ff=new Be,Fc=null,Oc=0,Bc=0,zc=!1,Xi=(1+Math.sqrt(5))/2,Ir=1/Xi,Of=[new U(-Xi,Ir,0),new U(Xi,Ir,0),new U(-Ir,0,Xi),new U(Ir,0,Xi),new U(0,Xi,-Ir),new U(0,Xi,Ir),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],jv=new U,Fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=jv}=s;Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,Bc),this._renderer.xr.enabled=zc,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:nn,format:Mt,colorSpace:ft,depthBuffer:!1},r=Bf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jv(s)),this._blurMaterial=Kv(s,e,t)}return r}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,i,r,s){let c=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ff),u.toneMapping=jt,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let v=new mi({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),m=new St(new _r,v),d=!1,b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,d=!0):(v.color.copy(Ff),d=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));let x=this._cubeSize;Na(r,S*x,E>2?x:0,x,x),u.setRenderTarget(r),d&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Bi||e.mapping===zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Na(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Uc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Of[(r-s-1)%Of.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);let d=[],b=0;for(let T=0;T<qi;++T){let C=T/v,y=Math.exp(-C*C/2);d.push(y),T===0?b+=y:T<m&&(b+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;let S=this._sizeLods[r],x=3*S*(r>E-Dr?r-E+Dr:0),A=4*(this._cubeSize-S);Na(t,x,A,3*S,2*S),c.setRenderTarget(t),c.render(u,Uc)}};function Jv(n){let e=[],t=[],i=[],r=n,s=n-Dr+1+Uf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Dr?c=Uf[o-n+Dr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,b=new Float32Array(v*g*p),E=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,C=A>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];b.set(y,v*g*A),E.set(f,m*g*A);let _=[A,A,A,A,A,A];S.set(_,d*g*A)}let x=new zt;x.setAttribute("position",new tn(b,v)),x.setAttribute("uv",new tn(E,m)),x.setAttribute("faceIndex",new tn(S,d)),e.push(x),r>Dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bf(n,e,t){let i=new Bt(n,e,t);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Kv(n,e,t){let i=new Float32Array(qi),r=new U(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function zf(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function kf(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Zo||c===jo,h=c===Bi||c===zi;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Fa(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Fa(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ey(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ty(n,e,t,i){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER)}function l(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let b=p.array;v=p.version;for(let E=0,S=b.length;E<S;E+=3){let x=b[E+0],A=b[E+1],T=b[E+2];f.push(x,A,A,T,T,x)}}else if(g!==void 0){let b=g.array;v=g.version;for(let E=0,S=b.length/3-1;E<S;E+=3){let x=E+0,A=E+1,T=E+2;f.push(x,A,A,T,T,x)}}else return;let m=new(Pc(f)?as:Li)(f,1);m.version=v;let d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function ny(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*v[b];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function iy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ry(n,e,t){let i=new WeakMap,r=new Xe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let y=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=a.attributes.position.count*E,x=1;S>e.maxTextureSize&&(x=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let A=new Float32Array(S*x*4*u),T=new os(A,S,x,u);T.type=Ct,T.needsUpdate=!0;let C=E*4;for(let _=0;_<u;_++){let P=m[_],F=d[_],k=b[_],q=S*x*4*_;for(let H=0;H<P.count;H++){let I=H*C;p===!0&&(r.fromBufferAttribute(P,H),A[q+I+0]=r.x,A[q+I+1]=r.y,A[q+I+2]=r.z,A[q+I+3]=0),g===!0&&(r.fromBufferAttribute(F,H),A[q+I+4]=r.x,A[q+I+5]=r.y,A[q+I+6]=r.z,A[q+I+7]=0),v===!0&&(r.fromBufferAttribute(k,H),A[q+I+8]=r.x,A[q+I+9]=r.y,A[q+I+10]=r.z,A[q+I+11]=k.itemSize===4?r.w:1)}}f={count:u,texture:T,size:new Pe(S,x)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function sy(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var sd=new Yt,Vf=new us(1,1),od=new os,ad=new _o,ld=new Ni,Hf=[],Gf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function Nr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Hf[r];if(s===void 0&&(s=new Float32Array(r),Hf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ba(n,e){let t=Gf[e];t===void 0&&(t=new Int32Array(e),Gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function ly(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function hy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;qf.set(i),n.uniformMatrix2fv(this.addr,!1,qf),Pt(t,i)}}function uy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Xf.set(i),n.uniformMatrix3fv(this.addr,!1,Xf),Pt(t,i)}}function fy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Wf.set(i),n.uniformMatrix4fv(this.addr,!1,Wf),Pt(t,i)}}function dy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function vy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function _y(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Sy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vf.compareFunction=Ac,s=Vf):s=sd,t.setTexture2D(e||s,r)}function My(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ad,r)}function by(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ld,r)}function wy(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||od,r)}function Ey(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return hy;case 35675:return uy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return yy;case 36295:return _y;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return wy}}function Ty(n,e){n.uniform1fv(this.addr,e)}function Ay(n,e){let t=Nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Cy(n,e){let t=Nr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ry(n,e){let t=Nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Py(n,e){let t=Nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Iy(n,e){let t=Nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){let t=Nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ly(n,e){n.uniform1iv(this.addr,e)}function Ny(n,e){n.uniform2iv(this.addr,e)}function Uy(n,e){n.uniform3iv(this.addr,e)}function Fy(n,e){n.uniform4iv(this.addr,e)}function Oy(n,e){n.uniform1uiv(this.addr,e)}function By(n,e){n.uniform2uiv(this.addr,e)}function zy(n,e){n.uniform3uiv(this.addr,e)}function ky(n,e){n.uniform4uiv(this.addr,e)}function Vy(n,e,t){let i=this.cache,r=e.length,s=Ba(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||sd,s[o])}function Hy(n,e,t){let i=this.cache,r=e.length,s=Ba(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ad,s[o])}function Gy(n,e,t){let i=this.cache,r=e.length,s=Ba(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ld,s[o])}function Wy(n,e,t){let i=this.cache,r=e.length,s=Ba(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||od,s[o])}function Xy(n){switch(n){case 5126:return Ty;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Iy;case 35676:return Dy;case 5124:case 35670:return Ly;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return By;case 36295:return zy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}var Vc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}},Hc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}},Gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},kc=/(\w+)(\])?(\[|\.)?/g;function Yf(n,e){n.seq.push(e),n.map[e.id]=e}function qy(n,e,t){let i=n.name,r=i.length;for(kc.lastIndex=0;;){let s=kc.exec(i),o=kc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Yf(t,l===void 0?new Vc(a,n,e):new Hc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Gc(a),Yf(t,u)),t=u}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);qy(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function $f(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Yy=37297,$y=0;function Zy(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Zf=new Ve;function jy(n){je._getMatrix(Zf,je.workingColorSpace,n);let e=`mat3( ${Zf.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case is:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Zy(n.getShaderSource(e),a)}else return s}function Jy(n,e){let t=jy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ky(n,e){let t;switch(e){case df:t="Linear";break;case pf:t="Reinhard";break;case mf:t="Cineon";break;case $o:t="ACESFilmic";break;case vf:t="AgX";break;case yf:t="Neutral";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ua=new U;function Qy(){je.getLuminanceCoefficients(Ua);let n=Ua.x.toFixed(4),e=Ua.y.toFixed(4),t=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function t_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function n_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rs(n){return n!==""}function Jf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(n){return n.replace(i_,s_)}var r_=new Map;function s_(n,e){let t=ze[e];if(t===void 0){let i=r_.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}var o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(n){return n.replace(o_,a_)}function a_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ed(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$u?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function c_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bi:case zi:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===zi&&(e="ENVMAP_MODE_REFRACTION"),e}function u_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case uf:e="ENVMAP_BLENDING_MIX";break;case ff:e="ENVMAP_BLENDING_ADD";break}return e}function f_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function d_(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=l_(t),l=c_(t),h=h_(t),u=u_(t),f=f_(t),p=e_(t),g=t_(s),v=r.createProgram(),m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),d.length>0&&(d+=`
`)):(m=[ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),d=[ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jt?"#define TONE_MAPPING":"",t.toneMapping!==jt?ze.tonemapping_pars_fragment:"",t.toneMapping!==jt?Ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Jy("linearToOutputTexel",t.outputColorSpace),Qy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Wc(o),o=Jf(o,t),o=Kf(o,t),a=Wc(a),a=Jf(a,t),a=Kf(a,t),o=Qf(o),a=Qf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=b+m+o,S=b+d+a,x=$f(r,r.VERTEX_SHADER,E),A=$f(r,r.FRAGMENT_SHADER,S);r.attachShader(v,x),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(P){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(v)||"",k=r.getShaderInfoLog(x)||"",q=r.getShaderInfoLog(A)||"",H=F.trim(),I=k.trim(),G=q.trim(),z=!0,L=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,x,A);else{let B=jf(r,x,"vertex"),$=jf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+B+`
`+$)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(I===""||G==="")&&(L=!1);L&&(P.diagnostics={runnable:z,programLog:H,vertexShader:{log:I,prefix:m},fragmentShader:{log:G,prefix:d}})}r.deleteShader(x),r.deleteShader(A),C=new Lr(r,v),y=n_(r,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,Yy)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$y++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=A,this}var p_=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qc(e),t.set(e,i)),i}},qc=class{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}};function m_(n,e,t,i,r,s,o){let a=new yr,c=new Xc,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,_,P,F,k){let q=F.fog,H=k.geometry,I=y.isMeshStandardMaterial?F.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||I),z=G&&G.mapping===bs?G.image.height:null,L=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let B=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$=B!==void 0?B.length:0,Q=0;H.morphAttributes.position!==void 0&&(Q=1),H.morphAttributes.normal!==void 0&&(Q=2),H.morphAttributes.color!==void 0&&(Q=3);let ie,re,J,N;if(L){let Qe=On[L];ie=Qe.vertexShader,re=Qe.fragmentShader}else ie=y.vertexShader,re=y.fragmentShader,c.update(y),J=c.getVertexShaderID(y),N=c.getFragmentShaderID(y);let W=n.getRenderTarget(),oe=n.state.buffers.depth.getReversed(),ee=k.isInstancedMesh===!0,ne=k.isBatchedMesh===!0,Re=!!y.map,et=!!y.matcap,D=!!G,qe=!!y.aoMap,De=!!y.lightMap,Fe=!!y.bumpMap,Me=!!y.normalMap,ct=!!y.displacementMap,be=!!y.emissiveMap,Ye=!!y.metalnessMap,Dt=!!y.roughnessMap,xt=y.anisotropy>0,R=y.clearcoat>0,M=y.dispersion>0,Y=y.iridescence>0,te=y.sheen>0,ae=y.transmission>0,K=xt&&!!y.anisotropyMap,Ae=R&&!!y.clearcoatMap,fe=R&&!!y.clearcoatNormalMap,we=R&&!!y.clearcoatRoughnessMap,Ee=Y&&!!y.iridescenceMap,he=Y&&!!y.iridescenceThicknessMap,ve=te&&!!y.sheenColorMap,Ne=te&&!!y.sheenRoughnessMap,Te=!!y.specularMap,me=!!y.specularColorMap,We=!!y.specularIntensityMap,O=ae&&!!y.transmissionMap,ue=ae&&!!y.thicknessMap,de=!!y.gradientMap,_e=!!y.alphaMap,le=y.alphaTest>0,se=!!y.alphaHash,Se=!!y.extensions,Ge=jt;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Ge=n.toneMapping);let ot={shaderID:L,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:re,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ne,batchingColor:ne&&k._colorsTexture!==null,instancing:ee,instancingColor:ee&&k.instanceColor!==null,instancingMorph:ee&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ft,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:et,envMap:D,envMapMode:D&&G.mapping,envMapCubeUVHeight:z,aoMap:qe,lightMap:De,bumpMap:Fe,normalMap:Me,displacementMap:f&&ct,emissiveMap:be,normalMapObjectSpace:Me&&y.normalMapType===Mf,normalMapTangentSpace:Me&&y.normalMapType===Tc,metalnessMap:Ye,roughnessMap:Dt,anisotropy:xt,anisotropyMap:K,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:we,dispersion:M,iridescence:Y,iridescenceMap:Ee,iridescenceThicknessMap:he,sheen:te,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:me,specularIntensityMap:We,transmission:ae,transmissionMap:O,thicknessMap:ue,gradientMap:de,opaque:y.transparent===!1&&y.blending===Ii&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:le,alphaHash:se,combine:y.combine,mapUv:Re&&v(y.map.channel),aoMapUv:qe&&v(y.aoMap.channel),lightMapUv:De&&v(y.lightMap.channel),bumpMapUv:Fe&&v(y.bumpMap.channel),normalMapUv:Me&&v(y.normalMap.channel),displacementMapUv:ct&&v(y.displacementMap.channel),emissiveMapUv:be&&v(y.emissiveMap.channel),metalnessMapUv:Ye&&v(y.metalnessMap.channel),roughnessMapUv:Dt&&v(y.roughnessMap.channel),anisotropyMapUv:K&&v(y.anisotropyMap.channel),clearcoatMapUv:Ae&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(y.sheenRoughnessMap.channel),specularMapUv:Te&&v(y.specularMap.channel),specularColorMapUv:me&&v(y.specularColorMap.channel),specularIntensityMapUv:We&&v(y.specularIntensityMap.channel),transmissionMapUv:O&&v(y.transmissionMap.channel),thicknessMapUv:ue&&v(y.thicknessMap.channel),alphaMapUv:_e&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Me||xt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Re||_e),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:oe,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===tt,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===tt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===$t,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function d(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)_.push(P),_.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(b(_,y),E(_,y),_.push(n.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function b(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function E(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){let _=g[y.type],P;if(_){let F=On[_];P=Lf.clone(F.uniforms)}else P=y.uniforms;return P}function x(y,_){let P;for(let F=0,k=h.length;F<k;F++){let q=h[F];if(q.cacheKey===_){P=q,++P.usedTimes;break}}return P===void 0&&(P=new d_(n,_,y,s),h.push(P)),P}function A(y){if(--y.usedTimes===0){let _=h.indexOf(y);h[_]=h[h.length-1],h.pop(),y.destroy()}}function T(y){c.remove(y)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:x,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function g_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function v_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function td(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nd(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||v_),i.length>1&&i.sort(f||td),r.length>1&&r.sort(f||td)}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function y_(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new nd,n.set(i,[o])):r>=s.length?(o=new nd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function __(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function x_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var S_=0;function M_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function b_(n){let e=new __,t=x_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let r=new U,s=new Ue,o=new Ue;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,b=0,E=0,S=0,x=0,A=0,T=0;l.sort(M_);for(let y=0,_=l.length;y<_;y++){let P=l[y],F=P.color,k=P.intensity,q=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*k,u+=F.g*k,f+=F.b*k;else if(P.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(P.sh.coefficients[I],k);T++}else if(P.isDirectionalLight){let I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let G=P.shadow,z=t.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=P.shadow.matrix,b++}i.directional[p]=I,p++}else if(P.isSpotLight){let I=e.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(F).multiplyScalar(k),I.distance=q,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,i.spot[v]=I;let G=P.shadow;if(P.map&&(i.spotLightMap[x]=P.map,x++,G.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=G.matrix,P.castShadow){let z=t.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=H,S++}v++}else if(P.isRectAreaLight){let I=e.get(P);I.color.copy(F).multiplyScalar(k),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=I,m++}else if(P.isPointLight){let I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){let G=P.shadow,z=t.get(P);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=I,g++}else if(P.isHemisphereLight){let I=e.get(P);I.skyColor.copy(P.color).multiplyScalar(k),I.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[d]=I,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==b||C.numPointShadows!==E||C.numSpotShadows!==S||C.numSpotMaps!==x||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=b,C.numPointShadows=E,C.numSpotShadows=S,C.numSpotMaps=x,C.numLightProbes=T,i.version=S_++)}function c(l,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){let E=l[d];if(E.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(E.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function id(n){let e=new b_(n),t=[],i=[];function r(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function w_(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new id(n),e.set(r,[a])):s>=o.length?(a=new id(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A_(n,e,t){let i=new Mr,r=new Pe,s=new Pe,o=new Xe,a=new br({depthPacking:Sf}),c=new Ao,l={},h=t.maxTextureSize,u={[Tn]:$t,[$t]:Tn,[Ut]:Ut},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:E_,fragmentShader:T_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new zt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new St(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let d=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=n.getRenderTarget(),_=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Zt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=d!==Fn&&this.type===Fn,q=d===Fn&&this.type!==Fn;for(let H=0,I=A.length;H<I;H++){let G=A[H],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let L=z.getFrameExtents();if(r.multiply(L),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/L.x),r.x=s.x*L.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/L.y),r.y=s.y*L.y,z.mapSize.y=s.y)),z.map===null||k===!0||q===!0){let $=this.type!==Fn?{minFilter:ut,magFilter:ut}:{};z.map!==null&&z.map.dispose(),z.map=new Bt(r.x,r.y,$),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();let B=z.getViewportCount();for(let $=0;$<B;$++){let Q=z.getViewport($);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),F.viewport(o),z.updateMatrices(G,$),i=z.getFrustum(),S(T,C,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Fn&&b(z,C),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,_,P)};function b(A,T){let C=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bt(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,C,p,v,null)}function E(A,T,C,y){let _=null,P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)_=P;else if(_=C.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=_.uuid,k=T.uuid,q=l[F];q===void 0&&(q={},l[F]=q);let H=q[k];H===void 0&&(H=_.clone(),q[k]=H,T.addEventListener("dispose",x)),_=H}if(_.visible=T.visible,_.wireframe=T.wireframe,y===Fn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let F=n.properties.get(_);F.light=C}return _}function S(A,T,C,y,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Fn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let k=e.update(A),q=A.material;if(Array.isArray(q)){let H=k.groups;for(let I=0,G=H.length;I<G;I++){let z=H[I],L=q[z.materialIndex];if(L&&L.visible){let B=E(A,L,y,_);A.onBeforeShadow(n,A,T,C,k,B,z),n.renderBufferDirect(C,null,k,B,A,z),A.onAfterShadow(n,A,T,C,k,B,z)}}}else if(q.visible){let H=E(A,q,y,_);A.onBeforeShadow(n,A,T,C,k,H,null),n.renderBufferDirect(C,null,k,H,A,null),A.onAfterShadow(n,A,T,C,k,H,null)}}let F=A.children;for(let k=0,q=F.length;k<q;k++)S(F[k],T,C,y,_)}function x(A){A.target.removeEventListener("dispose",x);for(let C in l){let y=l[C],_=A.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}var C_={[Vo]:Ho,[Go]:qo,[Wo]:Yo,[Di]:Xo,[Ho]:Vo,[qo]:Go,[Yo]:Wo,[Xo]:Di};function R_(n,e){function t(){let O=!1,ue=new Xe,de=null,_e=new Xe(0,0,0,0);return{setMask:function(le){de!==le&&!O&&(n.colorMask(le,le,le,le),de=le)},setLocked:function(le){O=le},setClear:function(le,se,Se,Ge,ot){ot===!0&&(le*=Ge,se*=Ge,Se*=Ge),ue.set(le,se,Se,Ge),_e.equals(ue)===!1&&(n.clearColor(le,se,Se,Ge),_e.copy(ue))},reset:function(){O=!1,de=null,_e.set(-1,0,0,0)}}}function i(){let O=!1,ue=!1,de=null,_e=null,le=null;return{setReversed:function(se){if(ue!==se){let Se=e.get("EXT_clip_control");se?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=se;let Ge=le;le=null,this.setClear(Ge)}},getReversed:function(){return ue},setTest:function(se){se?W(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(se){de!==se&&!O&&(n.depthMask(se),de=se)},setFunc:function(se){if(ue&&(se=C_[se]),_e!==se){switch(se){case Vo:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case Go:n.depthFunc(n.LESS);break;case Di:n.depthFunc(n.LEQUAL);break;case Wo:n.depthFunc(n.EQUAL);break;case Xo:n.depthFunc(n.GEQUAL);break;case qo:n.depthFunc(n.GREATER);break;case Yo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=se}},setLocked:function(se){O=se},setClear:function(se){le!==se&&(ue&&(se=1-se),n.clearDepth(se),le=se)},reset:function(){O=!1,de=null,_e=null,le=null,ue=!1}}}function r(){let O=!1,ue=null,de=null,_e=null,le=null,se=null,Se=null,Ge=null,ot=null;return{setTest:function(Qe){O||(Qe?W(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!O&&(n.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,Hn,Dn){(de!==Qe||_e!==Hn||le!==Dn)&&(n.stencilFunc(Qe,Hn,Dn),de=Qe,_e=Hn,le=Dn)},setOp:function(Qe,Hn,Dn){(se!==Qe||Se!==Hn||Ge!==Dn)&&(n.stencilOp(Qe,Hn,Dn),se=Qe,Se=Hn,Ge=Dn)},setLocked:function(Qe){O=Qe},setClear:function(Qe){ot!==Qe&&(n.clearStencil(Qe),ot=Qe)},reset:function(){O=!1,ue=null,de=null,_e=null,le=null,se=null,Se=null,Ge=null,ot=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,b=null,E=null,S=null,x=null,A=null,T=new Be(0,0,0),C=0,y=!1,_=null,P=null,F=null,k=null,q=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,G=0,z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),I=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),I=G>=2);let L=null,B={},$=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),ie=new Xe().fromArray($),re=new Xe().fromArray(Q);function J(O,ue,de,_e){let le=new Uint8Array(4),se=n.createTexture();n.bindTexture(O,se),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<de;Se++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ue+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return se}let N={};N[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),N[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),N[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(n.DEPTH_TEST),o.setFunc(Di),Fe(!1),Me(fc),W(n.CULL_FACE),qe(Zt);function W(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function oe(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function ee(O,ue){return u[O]!==ue?(n.bindFramebuffer(O,ue),u[O]=ue,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ue),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function ne(O,ue){let de=p,_e=!1;if(O){de=f.get(ue),de===void 0&&(de=[],f.set(ue,de));let le=O.textures;if(de.length!==le.length||de[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Se=le.length;se<Se;se++)de[se]=n.COLOR_ATTACHMENT0+se;de.length=le.length,_e=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,_e=!0);_e&&n.drawBuffers(de)}function Re(O){return g!==O?(n.useProgram(O),g=O,!0):!1}let et={[An]:n.FUNC_ADD,[Zu]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};et[Ju]=n.MIN,et[Ku]=n.MAX;let D={[ko]:n.ZERO,[Ar]:n.ONE,[Qu]:n.SRC_COLOR,[fo]:n.SRC_ALPHA,[of]:n.SRC_ALPHA_SATURATE,[rf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[ef]:n.ONE_MINUS_SRC_COLOR,[po]:n.ONE_MINUS_SRC_ALPHA,[sf]:n.ONE_MINUS_DST_COLOR,[nf]:n.ONE_MINUS_DST_ALPHA,[af]:n.CONSTANT_COLOR,[lf]:n.ONE_MINUS_CONSTANT_COLOR,[cf]:n.CONSTANT_ALPHA,[hf]:n.ONE_MINUS_CONSTANT_ALPHA};function qe(O,ue,de,_e,le,se,Se,Ge,ot,Qe){if(O===Zt){v===!0&&(oe(n.BLEND),v=!1);return}if(v===!1&&(W(n.BLEND),v=!0),O!==zo){if(O!==m||Qe!==y){if((d!==An||S!==An)&&(n.blendEquation(n.FUNC_ADD),d=An,S=An),Qe)switch(O){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pc:n.blendFunc(n.ONE,n.ONE);break;case mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case mc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,E=null,x=null,A=null,T.set(0,0,0),C=0,m=O,y=Qe}return}le=le||ue,se=se||de,Se=Se||_e,(ue!==d||le!==S)&&(n.blendEquationSeparate(et[ue],et[le]),d=ue,S=le),(de!==b||_e!==E||se!==x||Se!==A)&&(n.blendFuncSeparate(D[de],D[_e],D[se],D[Se]),b=de,E=_e,x=se,A=Se),(Ge.equals(T)===!1||ot!==C)&&(n.blendColor(Ge.r,Ge.g,Ge.b,ot),T.copy(Ge),C=ot),m=O,y=!1}function De(O,ue){O.side===Ut?oe(n.CULL_FACE):W(n.CULL_FACE);let de=O.side===$t;ue&&(de=!de),Fe(de),O.blending===Ii&&O.transparent===!1?qe(Zt):qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let _e=O.stencilWrite;a.setTest(_e),_e&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),be(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(O){_!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),_=O)}function Me(O){O!==qu?(W(n.CULL_FACE),O!==P&&(O===fc?n.cullFace(n.BACK):O===Yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),P=O}function ct(O){O!==F&&(I&&n.lineWidth(O),F=O)}function be(O,ue,de){O?(W(n.POLYGON_OFFSET_FILL),(k!==ue||q!==de)&&(n.polygonOffset(ue,de),k=ue,q=de)):oe(n.POLYGON_OFFSET_FILL)}function Ye(O){O?W(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function Dt(O){O===void 0&&(O=n.TEXTURE0+H-1),L!==O&&(n.activeTexture(O),L=O)}function xt(O,ue,de){de===void 0&&(L===null?de=n.TEXTURE0+H-1:de=L);let _e=B[de];_e===void 0&&(_e={type:void 0,texture:void 0},B[de]=_e),(_e.type!==O||_e.texture!==ue)&&(L!==de&&(n.activeTexture(de),L=de),n.bindTexture(O,ue||N[O]),_e.type=O,_e.texture=ue)}function R(){let O=B[L];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(O){ie.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),ie.copy(O))}function Ne(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Te(O,ue){let de=l.get(ue);de===void 0&&(de=new WeakMap,l.set(ue,de));let _e=de.get(O);_e===void 0&&(_e=n.getUniformBlockIndex(ue,O.name),de.set(O,_e))}function me(O,ue){let _e=l.get(ue).get(O);c.get(ue)!==_e&&(n.uniformBlockBinding(ue,_e,O.__bindingPointIndex),c.set(ue,_e))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},L=null,B={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,b=null,E=null,S=null,x=null,A=null,T=new Be(0,0,0),C=0,y=!1,_=null,P=null,F=null,k=null,q=null,ie.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:W,disable:oe,bindFramebuffer:ee,drawBuffers:ne,useProgram:Re,setBlending:qe,setMaterial:De,setFlipSided:Fe,setCullFace:Me,setLineWidth:ct,setPolygonOffset:be,setScissorTest:Ye,activeTexture:Dt,bindTexture:xt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:Y,texImage2D:Ee,texImage3D:he,updateUBOMapping:Te,uniformBlockBinding:me,texStorage2D:fe,texStorage3D:we,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:K,compressedTexSubImage3D:Ae,scissor:ve,viewport:Ne,reset:We}}function P_(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):ss("canvas")}function v(R,M,Y){let te=1,ae=xt(R);if((ae.width>Y||ae.height>Y)&&(te=Y/Math.max(ae.width,ae.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let K=Math.floor(te*ae.width),Ae=Math.floor(te*ae.height);u===void 0&&(u=g(K,Ae));let fe=M?g(K,Ae):u;return fe.width=K,fe.height=Ae,fe.getContext("2d").drawImage(R,0,0,K,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+K+"x"+Ae+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(R,M,Y,te,ae=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=M;if(M===n.RED&&(Y===n.FLOAT&&(K=n.R32F),Y===n.HALF_FLOAT&&(K=n.R16F),Y===n.UNSIGNED_BYTE&&(K=n.R8)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.R8UI),Y===n.UNSIGNED_SHORT&&(K=n.R16UI),Y===n.UNSIGNED_INT&&(K=n.R32UI),Y===n.BYTE&&(K=n.R8I),Y===n.SHORT&&(K=n.R16I),Y===n.INT&&(K=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(K=n.RG32F),Y===n.HALF_FLOAT&&(K=n.RG16F),Y===n.UNSIGNED_BYTE&&(K=n.RG8)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.RG8UI),Y===n.UNSIGNED_SHORT&&(K=n.RG16UI),Y===n.UNSIGNED_INT&&(K=n.RG32UI),Y===n.BYTE&&(K=n.RG8I),Y===n.SHORT&&(K=n.RG16I),Y===n.INT&&(K=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(K=n.RGB16UI),Y===n.UNSIGNED_INT&&(K=n.RGB32UI),Y===n.BYTE&&(K=n.RGB8I),Y===n.SHORT&&(K=n.RGB16I),Y===n.INT&&(K=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),Y===n.UNSIGNED_INT&&(K=n.RGBA32UI),Y===n.BYTE&&(K=n.RGBA8I),Y===n.SHORT&&(K=n.RGBA16I),Y===n.INT&&(K=n.RGBA32I)),M===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),M===n.RGBA){let Ae=ae?is:je.getTransfer(te);Y===n.FLOAT&&(K=n.RGBA32F),Y===n.HALF_FLOAT&&(K=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(K=Ae===tt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,M){let Y;return R?M===null||M===xi||M===Rr?Y=n.DEPTH24_STENCIL8:M===Ct?Y=n.DEPTH32F_STENCIL8:M===Cr&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xi||M===Rr?Y=n.DEPTH_COMPONENT24:M===Ct?Y=n.DEPTH_COMPONENT32F:M===Cr&&(Y=n.DEPTH_COMPONENT16),Y}function x(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ut&&R.minFilter!==At?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function T(R){let M=R.target;M.removeEventListener("dispose",T),_(M)}function C(R){let M=i.get(R);if(M.__webglInit===void 0)return;let Y=R.source,te=f.get(Y);if(te){let ae=te[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&y(R),Object.keys(te).length===0&&f.delete(Y)}i.remove(R)}function y(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let Y=R.source,te=f.get(Y);delete te[M.__cacheKey],o.memory.textures--}function _(R){let M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ae=0;ae<M.__webglFramebuffer[te].length;ae++)n.deleteFramebuffer(M.__webglFramebuffer[te][ae]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Y=R.textures;for(let te=0,ae=Y.length;te<ae;te++){let K=i.get(Y[te]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(Y[te])}i.remove(R)}let P=0;function F(){P=0}function k(){let R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function q(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function H(R,M){let Y=i.get(R);if(R.isVideoTexture&&Ye(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(Y,R,M);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function I(R,M){let Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){N(Y,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function G(R,M){let Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){N(Y,R,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function z(R,M){let Y=i.get(R);if(R.version>0&&Y.__version!==R.version){W(Y,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let L={[pi]:n.REPEAT,[qt]:n.CLAMP_TO_EDGE,[mo]:n.MIRRORED_REPEAT},B={[ut]:n.NEAREST,[xf]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[At]:n.LINEAR,[Jo]:n.LINEAR_MIPMAP_NEAREST,[Jt]:n.LINEAR_MIPMAP_LINEAR},$={[bf]:n.NEVER,[Rf]:n.ALWAYS,[wf]:n.LESS,[Ac]:n.LEQUAL,[Ef]:n.EQUAL,[Cf]:n.GEQUAL,[Tf]:n.GREATER,[Af]:n.NOTEQUAL};function Q(R,M){if(M.type===Ct&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===At||M.magFilter===Jo||M.magFilter===ws||M.magFilter===Jt||M.minFilter===At||M.minFilter===Jo||M.minFilter===ws||M.minFilter===Jt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,L[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,L[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,L[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,B[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,B[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ut||M.minFilter!==ws&&M.minFilter!==Jt||M.type===Ct&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ie(R,M){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let te=M.source,ae=f.get(te);ae===void 0&&(ae={},f.set(te,ae));let K=q(M);if(K!==R.__cacheKey){ae[K]===void 0&&(ae[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[K].usedTimes++;let Ae=ae[R.__cacheKey];Ae!==void 0&&(ae[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&y(M)),R.__cacheKey=K,R.__webglTexture=ae[K].texture}return Y}function re(R,M,Y){return Math.floor(Math.floor(R/Y)/M)}function J(R,M,Y,te){let K=R.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,Y,te,M.data);else{K.sort((he,ve)=>he.start-ve.start);let Ae=0;for(let he=1;he<K.length;he++){let ve=K[Ae],Ne=K[he],Te=ve.start+ve.count,me=re(Ne.start,M.width,4),We=re(ve.start,M.width,4);Ne.start<=Te+1&&me===We&&re(Ne.start+Ne.count-1,M.width,4)===me?ve.count=Math.max(ve.count,Ne.start+Ne.count-ve.start):(++Ae,K[Ae]=Ne)}K.length=Ae+1;let fe=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let he=0,ve=K.length;he<ve;he++){let Ne=K[he],Te=Math.floor(Ne.start/4),me=Math.ceil(Ne.count/4),We=Te%M.width,O=Math.floor(Te/M.width),ue=me,de=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,We,O,ue,de,Y,te,M.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function N(R,M,Y){let te=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=n.TEXTURE_3D);let ae=ie(R,M),K=M.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+Y);let Ae=i.get(K);if(K.version!==Ae.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);let fe=je.getPrimaries(je.workingColorSpace),we=M.colorSpace===vt?null:je.getPrimaries(M.colorSpace),Ee=M.colorSpace===vt||fe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let he=v(M.image,!1,r.maxTextureSize);he=Dt(M,he);let ve=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),Te=E(M.internalFormat,ve,Ne,M.colorSpace,M.isVideoTexture);Q(te,M);let me,We=M.mipmaps,O=M.isVideoTexture!==!0,ue=Ae.__version===void 0||ae===!0,de=K.dataReady,_e=x(M,he);if(M.isDepthTexture)Te=S(M.format===Pr,M.type),ue&&(O?t.texStorage2D(n.TEXTURE_2D,1,Te,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,ve,Ne,null));else if(M.isDataTexture)if(We.length>0){O&&ue&&t.texStorage2D(n.TEXTURE_2D,_e,Te,We[0].width,We[0].height);for(let le=0,se=We.length;le<se;le++)me=We[le],O?de&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,me.width,me.height,ve,Ne,me.data):t.texImage2D(n.TEXTURE_2D,le,Te,me.width,me.height,0,ve,Ne,me.data);M.generateMipmaps=!1}else O?(ue&&t.texStorage2D(n.TEXTURE_2D,_e,Te,he.width,he.height),de&&J(M,he,ve,Ne)):t.texImage2D(n.TEXTURE_2D,0,Te,he.width,he.height,0,ve,Ne,he.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Te,We[0].width,We[0].height,he.depth);for(let le=0,se=We.length;le<se;le++)if(me=We[le],M.format!==Mt)if(ve!==null)if(O){if(de)if(M.layerUpdates.size>0){let Se=Nc(me.width,me.height,M.format,M.type);for(let Ge of M.layerUpdates){let ot=me.data.subarray(Ge*Se/me.data.BYTES_PER_ELEMENT,(Ge+1)*Se/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Ge,me.width,me.height,1,ve,ot)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,he.depth,ve,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Te,me.width,me.height,he.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,me.width,me.height,he.depth,ve,Ne,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Te,me.width,me.height,he.depth,0,ve,Ne,me.data)}else{O&&ue&&t.texStorage2D(n.TEXTURE_2D,_e,Te,We[0].width,We[0].height);for(let le=0,se=We.length;le<se;le++)me=We[le],M.format!==Mt?ve!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,me.width,me.height,ve,me.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,me.width,me.height,ve,Ne,me.data):t.texImage2D(n.TEXTURE_2D,le,Te,me.width,me.height,0,ve,Ne,me.data)}else if(M.isDataArrayTexture)if(O){if(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Te,he.width,he.height,he.depth),de)if(M.layerUpdates.size>0){let le=Nc(he.width,he.height,M.format,M.type);for(let se of M.layerUpdates){let Se=he.data.subarray(se*le/he.data.BYTES_PER_ELEMENT,(se+1)*le/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,ve,Ne,Se)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Ne,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,he.width,he.height,he.depth,0,ve,Ne,he.data);else if(M.isData3DTexture)O?(ue&&t.texStorage3D(n.TEXTURE_3D,_e,Te,he.width,he.height,he.depth),de&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Ne,he.data)):t.texImage3D(n.TEXTURE_3D,0,Te,he.width,he.height,he.depth,0,ve,Ne,he.data);else if(M.isFramebufferTexture){if(ue)if(O)t.texStorage2D(n.TEXTURE_2D,_e,Te,he.width,he.height);else{let le=he.width,se=he.height;for(let Se=0;Se<_e;Se++)t.texImage2D(n.TEXTURE_2D,Se,Te,le,se,0,ve,Ne,null),le>>=1,se>>=1}}else if(We.length>0){if(O&&ue){let le=xt(We[0]);t.texStorage2D(n.TEXTURE_2D,_e,Te,le.width,le.height)}for(let le=0,se=We.length;le<se;le++)me=We[le],O?de&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ve,Ne,me):t.texImage2D(n.TEXTURE_2D,le,Te,ve,Ne,me);M.generateMipmaps=!1}else if(O){if(ue){let le=xt(he);t.texStorage2D(n.TEXTURE_2D,_e,Te,le.width,le.height)}de&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ne,he)}else t.texImage2D(n.TEXTURE_2D,0,Te,ve,Ne,he);m(M)&&d(te),Ae.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function W(R,M,Y){if(M.image.length!==6)return;let te=ie(R,M),ae=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+Y);let K=i.get(ae);if(ae.version!==K.__version||te===!0){t.activeTexture(n.TEXTURE0+Y);let Ae=je.getPrimaries(je.workingColorSpace),fe=M.colorSpace===vt?null:je.getPrimaries(M.colorSpace),we=M.colorSpace===vt||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!Ee&&!he?ve[se]=v(M.image[se],!0,r.maxCubemapSize):ve[se]=he?M.image[se].image:M.image[se],ve[se]=Dt(M,ve[se]);let Ne=ve[0],Te=s.convert(M.format,M.colorSpace),me=s.convert(M.type),We=E(M.internalFormat,Te,me,M.colorSpace),O=M.isVideoTexture!==!0,ue=K.__version===void 0||te===!0,de=ae.dataReady,_e=x(M,Ne);Q(n.TEXTURE_CUBE_MAP,M);let le;if(Ee){O&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,We,Ne.width,Ne.height);for(let se=0;se<6;se++){le=ve[se].mipmaps;for(let Se=0;Se<le.length;Se++){let Ge=le[Se];M.format!==Mt?Te!==null?O?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,Ge.width,Ge.height,Te,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,We,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,Ge.width,Ge.height,Te,me,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,We,Ge.width,Ge.height,0,Te,me,Ge.data)}}}else{if(le=M.mipmaps,O&&ue){le.length>0&&_e++;let se=xt(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,We,se.width,se.height)}for(let se=0;se<6;se++)if(he){O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,Te,me,ve[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,ve[se].width,ve[se].height,0,Te,me,ve[se].data);for(let Se=0;Se<le.length;Se++){let ot=le[Se].image[se].image;O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,ot.width,ot.height,Te,me,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,We,ot.width,ot.height,0,Te,me,ot.data)}}else{O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te,me,ve[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,Te,me,ve[se]);for(let Se=0;Se<le.length;Se++){let Ge=le[Se];O?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Te,me,Ge.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,We,Te,me,Ge.image[se])}}}m(M)&&d(n.TEXTURE_CUBE_MAP),K.__version=ae.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function oe(R,M,Y,te,ae,K){let Ae=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),we=E(Y.internalFormat,Ae,fe,Y.colorSpace),Ee=i.get(M),he=i.get(Y);if(he.__renderTarget=M,!Ee.__hasExternalTextures){let ve=Math.max(1,M.width>>K),Ne=Math.max(1,M.height>>K);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,K,we,ve,Ne,M.depth,0,Ae,fe,null):t.texImage2D(ae,K,we,ve,Ne,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),be(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ae,he.__webglTexture,0,ct(M)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ae,he.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(R,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let te=M.depthTexture,ae=te&&te.isDepthTexture?te.type:null,K=S(M.stencilBuffer,ae),Ae=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=ct(M);be(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,K,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,K,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,K,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,R)}else{let te=M.textures;for(let ae=0;ae<te.length;ae++){let K=te[ae],Ae=s.convert(K.format,K.colorSpace),fe=s.convert(K.type),we=E(K.internalFormat,Ae,fe,K.colorSpace),Ee=ct(M);Y&&be(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,we,M.width,M.height):be(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,we,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,we,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=i.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);let ae=te.__webglTexture,K=ct(M);if(M.depthTexture.format===pr)be(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Pr)be(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Re(R){let M=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let te=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){let ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",ae)};te.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=te}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let te=R.texture.mipmaps;te&&te.length>0?ne(M.__webglFramebuffer[0],R):ne(M.__webglFramebuffer,R)}else if(Y){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=n.createRenderbuffer(),ee(M.__webglDepthbuffer[te],R,!1);else{let ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,K)}}else{let te=R.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ee(M.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(R,M,Y){let te=i.get(R);M!==void 0&&oe(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Re(R)}function D(R){let M=R.texture,Y=i.get(R),te=i.get(M);R.addEventListener("dispose",T);let ae=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ae=ae.length>1;if(Ae||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=M.version,o.memory.textures++),K){Y.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[fe]=[];for(let we=0;we<M.mipmaps.length;we++)Y.__webglFramebuffer[fe][we]=n.createFramebuffer()}else Y.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)Y.__webglFramebuffer[fe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let fe=0,we=ae.length;fe<we;fe++){let Ee=i.get(ae[fe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&be(R)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let fe=0;fe<ae.length;fe++){let we=ae[fe];Y.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[fe]);let Ee=s.convert(we.format,we.colorSpace),he=s.convert(we.type),ve=E(we.internalFormat,Ee,he,we.colorSpace,R.isXRRenderTarget===!0),Ne=ct(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ve,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),Q(n.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)oe(Y.__webglFramebuffer[fe][we],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,we);else oe(Y.__webglFramebuffer[fe],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,we=ae.length;fe<we;fe++){let Ee=ae[fe],he=i.get(Ee),ve=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),Q(ve,Ee),oe(Y.__webglFramebuffer,R,Ee,n.COLOR_ATTACHMENT0+fe,ve,0),m(Ee)&&d(ve)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),Q(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)oe(Y.__webglFramebuffer[we],R,M,n.COLOR_ATTACHMENT0,fe,we);else oe(Y.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,fe,0);m(M)&&d(fe),t.unbindTexture()}R.depthBuffer&&Re(R)}function qe(R){let M=R.textures;for(let Y=0,te=M.length;Y<te;Y++){let ae=M[Y];if(m(ae)){let K=b(R),Ae=i.get(ae).__webglTexture;t.bindTexture(K,Ae),d(K),t.unbindTexture()}}}let De=[],Fe=[];function Me(R){if(R.samples>0){if(be(R)===!1){let M=R.textures,Y=R.width,te=R.height,ae=n.COLOR_BUFFER_BIT,K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(R),fe=M.length>1;if(fe)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let we=R.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let he=i.get(M[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,Y,te,0,0,Y,te,ae,n.NEAREST),c===!0&&(De.length=0,Fe.length=0,De.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(De.push(K),Fe.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let he=i.get(M[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ct(R){return Math.min(r.maxSamples,R.samples)}function be(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Dt(R,M){let Y=R.colorSpace,te=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==ft&&Y!==vt&&(je.getTransfer(Y)===tt?(te!==Mt||ae!==Kt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=et,this.setupRenderTarget=D,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=be}function I_(n,e){function t(i,r=vt){let s,o=je.getTransfer(r);if(i===Kt)return n.UNSIGNED_BYTE;if(i===Qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ea)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===_c)return n.BYTE;if(i===xc)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Ko)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===Ct)return n.FLOAT;if(i===nn)return n.HALF_FLOAT;if(i===bc)return n.ALPHA;if(i===wc)return n.RGB;if(i===Mt)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===Pr)return n.DEPTH_STENCIL;if(i===ki)return n.RED;if(i===ta)return n.RED_INTEGER;if(i===Ec)return n.RG;if(i===na)return n.RG_INTEGER;if(i===ia)return n.RGBA_INTEGER;if(i===Es||i===Ts||i===As||i===Cs)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Es)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Es)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ra||i===sa||i===oa||i===aa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===la||i===ca||i===ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===la||i===ca)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ha)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ua||i===fa||i===da||i===pa||i===ma||i===ga||i===va||i===ya||i===_a||i===xa||i===Sa||i===Ma||i===ba||i===wa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ua)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===da)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ma)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ga)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===va)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ya)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_a)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ma)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ba)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Ta||i===Aa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ea)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Aa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ca||i===Ra||i===Pa||i===Ia)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ca)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ra)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new fs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ht({vertexShader:D_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends Un{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Yc,d={},b=t.getContextAttributes(),E=null,S=null,x=[],A=[],T=new Pe,C=null,y=new Ot;y.viewport=new Xe;let _=new Ot;_.viewport=new Xe;let P=[y,_],F=new Bo,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let W=x[N];return W===void 0&&(W=new xr,x[N]=W),W.getTargetRaySpace()},this.getControllerGrip=function(N){let W=x[N];return W===void 0&&(W=new xr,x[N]=W),W.getGripSpace()},this.getHand=function(N){let W=x[N];return W===void 0&&(W=new xr,x[N]=W),W.getHandSpace()};function H(N){let W=A.indexOf(N.inputSource);if(W===-1)return;let oe=x[W];oe!==void 0&&(oe.update(N.inputSource,N.frame,l||o),oe.dispatchEvent({type:N.type,data:N.inputSource}))}function I(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",G);for(let N=0;N<x.length;N++){let W=A[N];W!==null&&(A[N]=null,x[N].disconnect(W))}k=null,q=null,m.reset();for(let N in d)delete d[N];e.setRenderTarget(E),p=null,f=null,u=null,r=null,S=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",I),r.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,ee=null,ne=null;b.depth&&(ne=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?Pr:pr,ee=b.stencil?Rr:xi);let Re={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Bt(f.textureWidth,f.textureHeight,{format:Mt,type:Kt,depthTexture:new us(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Bt(p.framebufferWidth,p.framebufferHeight,{format:Mt,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(N){for(let W=0;W<N.removed.length;W++){let oe=N.removed[W],ee=A.indexOf(oe);ee>=0&&(A[ee]=null,x[ee].disconnect(oe))}for(let W=0;W<N.added.length;W++){let oe=N.added[W],ee=A.indexOf(oe);if(ee===-1){for(let Re=0;Re<x.length;Re++)if(Re>=A.length){A.push(oe),ee=Re;break}else if(A[Re]===null){A[Re]=oe,ee=Re;break}if(ee===-1)break}let ne=x[ee];ne&&ne.connect(oe)}}let z=new U,L=new U;function B(N,W,oe){z.setFromMatrixPosition(W.matrixWorld),L.setFromMatrixPosition(oe.matrixWorld);let ee=z.distanceTo(L),ne=W.projectionMatrix.elements,Re=oe.projectionMatrix.elements,et=ne[14]/(ne[10]-1),D=ne[14]/(ne[10]+1),qe=(ne[9]+1)/ne[5],De=(ne[9]-1)/ne[5],Fe=(ne[8]-1)/ne[0],Me=(Re[8]+1)/Re[0],ct=et*Fe,be=et*Me,Ye=ee/(-Fe+Me),Dt=Ye*-Fe;if(W.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Dt),N.translateZ(Ye),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ne[10]===-1)N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let xt=et+Ye,R=D+Ye,M=ct-Dt,Y=be+(ee-Dt),te=qe*D/R*xt,ae=De*D/R*xt;N.projectionMatrix.makePerspective(M,Y,te,ae,xt,R),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function $(N,W){W===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(W.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let W=N.near,oe=N.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),F.near=_.near=y.near=W,F.far=_.far=y.far=oe,(k!==F.near||q!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,q=F.far),F.layers.mask=N.layers.mask|6,y.layers.mask=F.layers.mask&3,_.layers.mask=F.layers.mask&5;let ee=N.parent,ne=F.cameras;$(F,ee);for(let Re=0;Re<ne.length;Re++)$(ne[Re],ee);ne.length===2?B(F,y,_):F.projectionMatrix.copy(y.projectionMatrix),Q(N,F,ee)};function Q(N,W,oe){oe===null?N.matrix.copy(W.matrixWorld):(N.matrix.copy(oe.matrixWorld),N.matrix.invert(),N.matrix.multiply(W.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(W.projectionMatrix),N.projectionMatrixInverse.copy(W.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=mr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(N){c=N,f!==null&&(f.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(N){return d[N]};let ie=null;function re(N,W){if(h=W.getViewerPose(l||o),g=W,h!==null){let oe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ee=!1;oe.length!==F.cameras.length&&(F.cameras.length=0,ee=!0);for(let D=0;D<oe.length;D++){let qe=oe[D],De=null;if(p!==null)De=p.getViewport(qe);else{let Me=u.getViewSubImage(f,qe);De=Me.viewport,D===0&&(e.setRenderTargetTextures(S,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(S))}let Fe=P[D];Fe===void 0&&(Fe=new Ot,Fe.layers.enable(D),Fe.viewport=new Xe,P[D]=Fe),Fe.matrix.fromArray(qe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(qe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(De.x,De.y,De.width,De.height),D===0&&(F.matrix.copy(Fe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ee===!0&&F.cameras.push(Fe)}let ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let D=u.getDepthInformation(oe[0]);D&&D.isValid&&D.texture&&m.init(D,r.renderState)}if(ne&&ne.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<oe.length;D++){let qe=oe[D].camera;if(qe){let De=d[qe];De||(De=new fs,d[qe]=De);let Fe=u.getCameraImage(qe);De.sourceTexture=Fe}}}}for(let oe=0;oe<x.length;oe++){let ee=A[oe],ne=x[oe];ee!==null&&ne!==void 0&&ne.update(ee,W,l||o)}ie&&ie(N,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}let J=new rd;J.setAnimationLoop(re),this.setAnimationLoop=function(N){ie=N},this.dispose=function(){}}},Wi=new Cn,N_=new Ue;function U_(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ic(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=e.get(d),E=b.envMap,S=b.envMapRotation;E&&(m.envMap.value=E,Wi.copy(S),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(N_.makeRotationFromEuler(Wi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function F_(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){let S=E.program;i.uniformBlockBinding(b,S)}function l(b,E){let S=r[b.id];S===void 0&&(g(b),S=h(b),r[b.id]=S,b.addEventListener("dispose",m));let x=E.program;i.updateUBOMapping(b,x);let A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function h(b){let E=u();b.__bindingPointIndex=E;let S=n.createBuffer(),x=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,x,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let E=r[b.id],S=b.uniforms,x=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,T=S.length;A<T;A++){let C=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,_=C.length;y<_;y++){let P=C[y];if(p(P,A,y,x)===!0){let F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],q=0;for(let H=0;H<k.length;H++){let I=k[H],G=v(I);typeof I=="number"||typeof I=="boolean"?(P.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,F+q,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=0,P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=0,P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=0):(I.toArray(P.__data,q),q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,E,S,x){let A=b.value,T=E+"_"+S;if(x[T]===void 0)return typeof A=="number"||typeof A=="boolean"?x[T]=A:x[T]=A.clone(),!0;{let C=x[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return x[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(b){let E=b.uniforms,S=0,x=16;for(let T=0,C=E.length;T<C;T++){let y=Array.isArray(E[T])?E[T]:[E[T]];for(let _=0,P=y.length;_<P;_++){let F=y[_],k=Array.isArray(F.value)?F.value:[F.value];for(let q=0,H=k.length;q<H;q++){let I=k[q],G=v(I),z=S%x,L=z%G.boundary,B=z+L;S+=L,B!==0&&x-B<G.storage&&(S+=x-B),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=G.storage}}}let A=S%x;return A>0&&(S+=x-A),b.__size=S,b.__cache={},this}function v(b){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){let E=b.target;E.removeEventListener("dispose",m);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var Oa=class{constructor(e={}){let{canvas:t=Pf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,x=!1;this._outputColorSpace=Tt;let A=0,T=0,C=null,y=-1,_=null,P=new Xe,F=new Xe,k=null,q=new Be(0),H=0,I=t.width,G=t.height,z=1,L=null,B=null,$=new Xe(0,0,I,G),Q=new Xe(0,0,I,G),ie=!1,re=new Mr,J=!1,N=!1,W=new Ue,oe=new U,ee=new Xe,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function et(){return C===null?z:1}let D=i;function qe(w,V){return t.getContext(w,V)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){let V="webgl2";if(D=qe(V,w),D===null)throw qe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let De,Fe,Me,ct,be,Ye,Dt,xt,R,M,Y,te,ae,K,Ae,fe,we,Ee,he,ve,Ne,Te,me,We;function O(){De=new ey(D),De.init(),Te=new I_(D,De),Fe=new Yv(D,De,e,Te),Me=new R_(D,De),Fe.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),ct=new iy(D),be=new g_,Ye=new P_(D,De,Me,be,Fe,Te,ct),Dt=new Zv(S),xt=new Qv(S),R=new cg(D),me=new Xv(D,R),M=new ty(D,R,ct,me),Y=new sy(D,M,R,ct),he=new ry(D,Fe,Ye),fe=new $v(be),te=new m_(S,Dt,xt,De,Fe,me,fe),ae=new U_(S,be),K=new y_,Ae=new w_(De),Ee=new Wv(S,Dt,xt,Me,Y,p,c),we=new A_(S,Y,Fe),We=new F_(D,ct,Fe,Me),ve=new qv(D,De,ct),Ne=new ny(D,De,ct),ct.programs=te.programs,S.capabilities=Fe,S.extensions=De,S.properties=be,S.renderLists=K,S.shadowMap=we,S.state=Me,S.info=ct}O();let ue=new $c(S,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=De.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=De.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(I,G,!1))},this.getSize=function(w){return w.set(I,G)},this.setSize=function(w,V,Z=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,G=V,t.width=Math.floor(w*z),t.height=Math.floor(V*z),Z===!0&&(t.style.width=w+"px",t.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(I*z,G*z).floor()},this.setDrawingBufferSize=function(w,V,Z){I=w,G=V,z=Z,t.width=Math.floor(w*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,V,Z,j){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,V,Z,j),Me.viewport(P.copy($).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,V,Z,j){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,V,Z,j),Me.scissor(F.copy(Q).multiplyScalar(z).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){Me.setScissorTest(ie=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,Z=!0){let j=0;if(w){let X=!1;if(C!==null){let ce=C.texture.format;X=ce===ia||ce===na||ce===ta}if(X){let ce=C.texture.type,ge=ce===Kt||ce===xi||ce===Cr||ce===Rr||ce===Qo||ce===ea,xe=Ee.getClearColor(),ye=Ee.getClearAlpha(),Le=xe.r,Oe=xe.g,Ce=xe.b;ge?(g[0]=Le,g[1]=Oe,g[2]=Ce,g[3]=ye,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Le,v[1]=Oe,v[2]=Ce,v[3]=ye,D.clearBufferiv(D.COLOR,0,v))}else j|=D.COLOR_BUFFER_BIT}V&&(j|=D.DEPTH_BUFFER_BIT),Z&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ee.dispose(),K.dispose(),Ae.dispose(),be.dispose(),Dt.dispose(),xt.dispose(),Y.dispose(),me.dispose(),We.dispose(),te.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Dn),ue.removeEventListener("sessionend",Vh),wi.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let w=ct.autoReset,V=we.enabled,Z=we.autoUpdate,j=we.needsUpdate,X=we.type;O(),ct.autoReset=w,we.enabled=V,we.autoUpdate=Z,we.needsUpdate=j,we.type=X}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){let V=w.target;V.removeEventListener("dispose",se),Se(V)}function Se(w){Ge(w),be.remove(w)}function Ge(w){let V=be.get(w).programs;V!==void 0&&(V.forEach(function(Z){te.releaseProgram(Z)}),w.isShaderMaterial&&te.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Z,j,X,ce){V===null&&(V=ne);let ge=X.isMesh&&X.matrixWorld.determinant()<0,xe=Bp(w,V,Z,j,X);Me.setMaterial(j,ge);let ye=Z.index,Le=1;if(j.wireframe===!0){if(ye=M.getWireframeAttribute(Z),ye===void 0)return;Le=2}let Oe=Z.drawRange,Ce=Z.attributes.position,Ze=Oe.start*Le,nt=(Oe.start+Oe.count)*Le;ce!==null&&(Ze=Math.max(Ze,ce.start*Le),nt=Math.min(nt,(ce.start+ce.count)*Le)),ye!==null?(Ze=Math.max(Ze,0),nt=Math.min(nt,ye.count)):Ce!=null&&(Ze=Math.max(Ze,0),nt=Math.min(nt,Ce.count));let _t=nt-Ze;if(_t<0||_t===1/0)return;me.setup(X,j,xe,Z,ye);let at,st=ve;if(ye!==null&&(at=R.get(ye),st=Ne,st.setIndex(at)),X.isMesh)j.wireframe===!0?(Me.setLineWidth(j.wireframeLinewidth*et()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(X.isLine){let Ie=j.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*et()),X.isLineSegments?st.setMode(D.LINES):X.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else X.isPoints?st.setMode(D.POINTS):X.isSprite&&st.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ie=X._multiDrawStarts,pt=X._multiDrawCounts,Je=X._multiDrawCount,on=ye?R.get(ye).bytesPerElement:1,Qi=be.get(j).currentProgram.getUniforms();for(let an=0;an<Je;an++)Qi.setValue(D,"_gl_DrawID",an),st.render(Ie[an]/on,pt[an])}else if(X.isInstancedMesh)st.renderInstances(Ze,_t,X.count);else if(Z.isInstancedBufferGeometry){let Ie=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,pt=Math.min(Z.instanceCount,Ie);st.renderInstances(Ze,_t,pt)}else st.render(Ze,_t)};function ot(w,V,Z){w.transparent===!0&&w.side===Ut&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,Vs(w,V,Z),w.side=Tn,w.needsUpdate=!0,Vs(w,V,Z),w.side=Ut):Vs(w,V,Z)}this.compile=function(w,V,Z=null){Z===null&&(Z=w),d=Ae.get(Z),d.init(V),E.push(d),Z.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),w!==Z&&w.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();let j=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ce=X.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let xe=ce[ge];ot(xe,Z,X),j.add(xe)}else ot(ce,Z,X),j.add(ce)}),d=E.pop(),j},this.compileAsync=function(w,V,Z=null){let j=this.compile(w,V,Z);return new Promise(X=>{function ce(){if(j.forEach(function(ge){be.get(ge).currentProgram.isReady()&&j.delete(ge)}),j.size===0){X(w);return}setTimeout(ce,10)}De.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Qe=null;function Hn(w){Qe&&Qe(w)}function Dn(){wi.stop()}function Vh(){wi.start()}let wi=new rd;wi.setAnimationLoop(Hn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){Qe=w,ue.setAnimationLoop(w),w===null?wi.stop():wi.start()},ue.addEventListener("sessionstart",Dn),ue.addEventListener("sessionend",Vh),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(V),V=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,V,C),d=Ae.get(w,E.length),d.init(V),E.push(d),W.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(W,wn,V.reversedDepth),N=this.localClippingEnabled,J=fe.init(this.clippingPlanes,N),m=K.get(w,b.length),m.init(),b.push(m),ue.enabled===!0&&ue.isPresenting===!0){let ce=S.xr.getDepthSensingMesh();ce!==null&&fl(ce,V,-1/0,S.sortObjects)}fl(w,V,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(L,B),Re=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Re&&Ee.addToRenderList(m,w),this.info.render.frame++,J===!0&&fe.beginShadows();let Z=d.state.shadowsArray;we.render(Z,w,V),J===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,X=m.transmissive;if(d.setupLights(),V.isArrayCamera){let ce=V.cameras;if(X.length>0)for(let ge=0,xe=ce.length;ge<xe;ge++){let ye=ce[ge];Gh(j,X,w,ye)}Re&&Ee.render(w);for(let ge=0,xe=ce.length;ge<xe;ge++){let ye=ce[ge];Hh(m,w,ye,ye.viewport)}}else X.length>0&&Gh(j,X,w,V),Re&&Ee.render(w),Hh(m,w,V);C!==null&&T===0&&(Ye.updateMultisampleRenderTarget(C),Ye.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(S,w,V),me.resetDefaultState(),y=-1,_=null,E.pop(),E.length>0?(d=E[E.length-1],J===!0&&fe.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function fl(w,V,Z,j){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||re.intersectsSprite(w)){j&&ee.setFromMatrixPosition(w.matrixWorld).applyMatrix4(W);let ge=Y.update(w),xe=w.material;xe.visible&&m.push(w,ge,xe,Z,ee.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||re.intersectsObject(w))){let ge=Y.update(w),xe=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ee.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ee.copy(ge.boundingSphere.center)),ee.applyMatrix4(w.matrixWorld).applyMatrix4(W)),Array.isArray(xe)){let ye=ge.groups;for(let Le=0,Oe=ye.length;Le<Oe;Le++){let Ce=ye[Le],Ze=xe[Ce.materialIndex];Ze&&Ze.visible&&m.push(w,ge,Ze,Z,ee.z,Ce)}}else xe.visible&&m.push(w,ge,xe,Z,ee.z,null)}}let ce=w.children;for(let ge=0,xe=ce.length;ge<xe;ge++)fl(ce[ge],V,Z,j)}function Hh(w,V,Z,j){let X=w.opaque,ce=w.transmissive,ge=w.transparent;d.setupLightsView(Z),J===!0&&fe.setGlobalState(S.clippingPlanes,Z),j&&Me.viewport(P.copy(j)),X.length>0&&ks(X,V,Z),ce.length>0&&ks(ce,V,Z),ge.length>0&&ks(ge,V,Z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Gh(w,V,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new Bt(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?nn:Kt,minFilter:Jt,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ce=d.state.transmissionRenderTarget[j.id],ge=j.viewport||P;ce.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);let xe=S.getRenderTarget(),ye=S.getActiveCubeFace(),Le=S.getActiveMipmapLevel();S.setRenderTarget(ce),S.getClearColor(q),H=S.getClearAlpha(),H<1&&S.setClearColor(16777215,.5),S.clear(),Re&&Ee.render(Z);let Oe=S.toneMapping;S.toneMapping=jt;let Ce=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),J===!0&&fe.setGlobalState(S.clippingPlanes,j),ks(w,Z,j),Ye.updateMultisampleRenderTarget(ce),Ye.updateRenderTargetMipmap(ce),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let nt=0,_t=V.length;nt<_t;nt++){let at=V[nt],st=at.object,Ie=at.geometry,pt=at.material,Je=at.group;if(pt.side===Ut&&st.layers.test(j.layers)){let on=pt.side;pt.side=$t,pt.needsUpdate=!0,Wh(st,Z,j,Ie,pt,Je),pt.side=on,pt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ye.updateMultisampleRenderTarget(ce),Ye.updateRenderTargetMipmap(ce))}S.setRenderTarget(xe,ye,Le),S.setClearColor(q,H),Ce!==void 0&&(j.viewport=Ce),S.toneMapping=Oe}function ks(w,V,Z){let j=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ce=w.length;X<ce;X++){let ge=w[X],xe=ge.object,ye=ge.geometry,Le=ge.group,Oe=ge.material;Oe.allowOverride===!0&&j!==null&&(Oe=j),xe.layers.test(Z.layers)&&Wh(xe,V,Z,ye,Oe,Le)}}function Wh(w,V,Z,j,X,ce){w.onBeforeRender(S,V,Z,j,X,ce),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(S,V,Z,j,w,ce),X.transparent===!0&&X.side===Ut&&X.forceSinglePass===!1?(X.side=$t,X.needsUpdate=!0,S.renderBufferDirect(Z,V,j,X,w,ce),X.side=Tn,X.needsUpdate=!0,S.renderBufferDirect(Z,V,j,X,w,ce),X.side=Ut):S.renderBufferDirect(Z,V,j,X,w,ce),w.onAfterRender(S,V,Z,j,X,ce)}function Vs(w,V,Z){V.isScene!==!0&&(V=ne);let j=be.get(w),X=d.state.lights,ce=d.state.shadowsArray,ge=X.state.version,xe=te.getParameters(w,X.state,ce,V,Z),ye=te.getProgramCacheKey(xe),Le=j.programs;j.environment=w.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(w.isMeshStandardMaterial?xt:Dt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",se),Le=new Map,j.programs=Le);let Oe=Le.get(ye);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===ge)return qh(w,xe),Oe}else xe.uniforms=te.getUniforms(w),w.onBeforeCompile(xe,S),Oe=te.acquireProgram(xe,ye),Le.set(ye,Oe),j.uniforms=xe.uniforms;let Ce=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=fe.uniform),qh(w,xe),j.needsLights=kp(w),j.lightsStateVersion=ge,j.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Oe,j.uniformsList=null,Oe}function Xh(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Lr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function qh(w,V){let Z=be.get(w);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Bp(w,V,Z,j,X){V.isScene!==!0&&(V=ne),Ye.resetTextureUnits();let ce=V.fog,ge=j.isMeshStandardMaterial?V.environment:null,xe=C===null?S.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ft,ye=(j.isMeshStandardMaterial?xt:Dt).get(j.envMap||ge),Le=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Oe=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ce=!!Z.morphAttributes.position,Ze=!!Z.morphAttributes.normal,nt=!!Z.morphAttributes.color,_t=jt;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_t=S.toneMapping);let at=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,st=at!==void 0?at.length:0,Ie=be.get(j),pt=d.state.lights;if(J===!0&&(N===!0||w!==_)){let Wt=w===_&&j.id===y;fe.setState(j,w,Wt)}let Je=!1;j.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==pt.state.version||Ie.outputColorSpace!==xe||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==ye||j.fog===!0&&Ie.fog!==ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==fe.numPlanes||Ie.numIntersection!==fe.numIntersection)||Ie.vertexAlphas!==Le||Ie.vertexTangents!==Oe||Ie.morphTargets!==Ce||Ie.morphNormals!==Ze||Ie.morphColors!==nt||Ie.toneMapping!==_t||Ie.morphTargetsCount!==st)&&(Je=!0):(Je=!0,Ie.__version=j.version);let on=Ie.currentProgram;Je===!0&&(on=Vs(j,V,X));let Qi=!1,an=!1,Gr=!1,mt=on.getUniforms(),dn=Ie.uniforms;if(Me.useProgram(on.program)&&(Qi=!0,an=!0,Gr=!0),j.id!==y&&(y=j.id,an=!0),Qi||_!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",w.projectionMatrix),mt.setValue(D,"viewMatrix",w.matrixWorldInverse);let en=mt.map.cameraPosition;en!==void 0&&en.setValue(D,oe.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&mt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,an=!0,Gr=!0)}if(X.isSkinnedMesh){mt.setOptional(D,X,"bindMatrix"),mt.setOptional(D,X,"bindMatrixInverse");let Wt=X.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),mt.setValue(D,"boneTexture",Wt.boneTexture,Ye))}X.isBatchedMesh&&(mt.setOptional(D,X,"batchingTexture"),mt.setValue(D,"batchingTexture",X._matricesTexture,Ye),mt.setOptional(D,X,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",X._indirectTexture,Ye),mt.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",X._colorsTexture,Ye));let pn=Z.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&he.update(X,Z,on),(an||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,mt.setValue(D,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(dn.envMap.value=ye,dn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(dn.envMapIntensity.value=V.environmentIntensity),an&&(mt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&zp(dn,Gr),ce&&j.fog===!0&&ae.refreshFogUniforms(dn,ce),ae.refreshMaterialUniforms(dn,j,z,G,d.state.transmissionRenderTarget[w.id]),Lr.upload(D,Xh(Ie),dn,Ye)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Lr.upload(D,Xh(Ie),dn,Ye),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&mt.setValue(D,"center",X.center),mt.setValue(D,"modelViewMatrix",X.modelViewMatrix),mt.setValue(D,"normalMatrix",X.normalMatrix),mt.setValue(D,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Wt=j.uniformsGroups;for(let en=0,dl=Wt.length;en<dl;en++){let Ei=Wt[en];We.update(Ei,on),We.bind(Ei,on)}}return on}function zp(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function kp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,V,Z){let j=be.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),be.get(w.texture).__webglTexture=V,be.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let Z=be.get(w);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};let Vp=D.createFramebuffer();this.setRenderTarget=function(w,V=0,Z=0){C=w,A=V,T=Z;let j=!0,X=null,ce=!1,ge=!1;if(w){let ye=be.get(w);if(ye.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(ye.__webglFramebuffer===void 0)Ye.setupRenderTarget(w);else if(ye.__hasExternalTextures)Ye.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ce=w.depthTexture;if(ye.__boundDepthTexture!==Ce){if(Ce!==null&&be.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(w)}}let Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ge=!0);let Oe=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?X=Oe[V][Z]:X=Oe[V],ce=!0):w.samples>0&&Ye.useMultisampledRTT(w)===!1?X=be.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[Z]:X=Oe,P.copy(w.viewport),F.copy(w.scissor),k=w.scissorTest}else P.copy($).multiplyScalar(z).floor(),F.copy(Q).multiplyScalar(z).floor(),k=ie;if(Z!==0&&(X=Vp),Me.bindFramebuffer(D.FRAMEBUFFER,X)&&j&&Me.drawBuffers(w,X),Me.viewport(P),Me.scissor(F),Me.setScissorTest(k),ce){let ye=be.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,ye.__webglTexture,Z)}else if(ge){let ye=V;for(let Le=0;Le<w.textures.length;Le++){let Oe=be.get(w.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,Z,ye)}}else if(w!==null&&Z!==0){let ye=be.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ye.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(w,V,Z,j,X,ce,ge,xe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){Me.bindFramebuffer(D.FRAMEBUFFER,ye);try{let Le=w.textures[xe],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-j&&Z>=0&&Z<=w.height-X&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),D.readPixels(V,Z,j,X,Te.convert(Oe),Te.convert(Ce),ce))}finally{let Le=C!==null?be.get(C).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(w,V,Z,j,X,ce,ge,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(V>=0&&V<=w.width-j&&Z>=0&&Z<=w.height-X){Me.bindFramebuffer(D.FRAMEBUFFER,ye);let Le=w.textures[xe],Oe=Le.format,Ce=Le.type;if(!Fe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),D.readPixels(V,Z,j,X,Te.convert(Oe),Te.convert(Ce),0);let nt=C!==null?be.get(C).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,nt);let _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await If(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(Ze),D.deleteSync(_t),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,Z=0){let j=Math.pow(2,-Z),X=Math.floor(w.image.width*j),ce=Math.floor(w.image.height*j),ge=V!==null?V.x:0,xe=V!==null?V.y:0;Ye.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,ge,xe,X,ce),Me.unbindTexture()};let Hp=D.createFramebuffer(),Gp=D.createFramebuffer();this.copyTextureToTexture=function(w,V,Z=null,j=null,X=0,ce=null){ce===null&&(X!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=X,X=0):ce=0);let ge,xe,ye,Le,Oe,Ce,Ze,nt,_t,at=w.isCompressedTexture?w.mipmaps[ce]:w.image;if(Z!==null)ge=Z.max.x-Z.min.x,xe=Z.max.y-Z.min.y,ye=Z.isBox3?Z.max.z-Z.min.z:1,Le=Z.min.x,Oe=Z.min.y,Ce=Z.isBox3?Z.min.z:0;else{let pn=Math.pow(2,-X);ge=Math.floor(at.width*pn),xe=Math.floor(at.height*pn),w.isDataArrayTexture?ye=at.depth:w.isData3DTexture?ye=Math.floor(at.depth*pn):ye=1,Le=0,Oe=0,Ce=0}j!==null?(Ze=j.x,nt=j.y,_t=j.z):(Ze=0,nt=0,_t=0);let st=Te.convert(V.format),Ie=Te.convert(V.type),pt;V.isData3DTexture?(Ye.setTexture3D(V,0),pt=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ye.setTexture2DArray(V,0),pt=D.TEXTURE_2D_ARRAY):(Ye.setTexture2D(V,0),pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);let Je=D.getParameter(D.UNPACK_ROW_LENGTH),on=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qi=D.getParameter(D.UNPACK_SKIP_PIXELS),an=D.getParameter(D.UNPACK_SKIP_ROWS),Gr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);let mt=w.isDataArrayTexture||w.isData3DTexture,dn=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let pn=be.get(w),Wt=be.get(V),en=be.get(pn.__renderTarget),dl=be.get(Wt.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,dl.__webglFramebuffer);for(let Ei=0;Ei<ye;Ei++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(w).__webglTexture,X,Ce+Ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(V).__webglTexture,ce,_t+Ei)),D.blitFramebuffer(Le,Oe,ge,xe,Ze,nt,ge,xe,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||be.has(w)){let pn=be.get(w),Wt=be.get(V);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Hp),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Gp);for(let en=0;en<ye;en++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,X,Ce+en):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,X),dn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,ce,_t+en):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,ce),X!==0?D.blitFramebuffer(Le,Oe,ge,xe,Ze,nt,ge,xe,D.COLOR_BUFFER_BIT,D.NEAREST):dn?D.copyTexSubImage3D(pt,ce,Ze,nt,_t+en,Le,Oe,ge,xe):D.copyTexSubImage2D(pt,ce,Ze,nt,Le,Oe,ge,xe);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(pt,ce,Ze,nt,_t,ge,xe,ye,st,Ie,at.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(pt,ce,Ze,nt,_t,ge,xe,ye,st,at.data):D.texSubImage3D(pt,ce,Ze,nt,_t,ge,xe,ye,st,Ie,at):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ce,Ze,nt,ge,xe,st,Ie,at.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ce,Ze,nt,at.width,at.height,st,at.data):D.texSubImage2D(D.TEXTURE_2D,ce,Ze,nt,ge,xe,st,Ie,at);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,on),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qi),D.pixelStorei(D.UNPACK_SKIP_ROWS,an),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gr),ce===0&&V.generateMipmaps&&D.generateMipmap(pt),Me.unbindTexture()},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&Ye.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ye.setTextureCube(w,0):w.isData3DTexture?Ye.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ye.setTexture2DArray(w,0):Ye.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Me.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var cd={type:"change"},Jc={type:"start"},ud={type:"end"},ka=new Qn,hd=new vn,O_=Math.cos(70*Qt.DEG2RAD),It=new U,rn=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jc=1e-6,Va=class extends Ms{constructor(e,t=null){super(e,t),this.state=it.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new dt,this._lastTargetPosition=new U,this._quat=new dt().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tr,this._sphericalDelta=new Tr,this._scale=1,this._panOffset=new U,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new U,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z_.bind(this),this._onPointerDown=B_.bind(this),this._onPointerUp=k_.bind(this),this._onContextMenu=Y_.bind(this),this._onMouseWheel=G_.bind(this),this._onKeyDown=W_.bind(this),this._onTouchStart=X_.bind(this),this._onTouchMove=q_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=H_.bind(this),this._interceptControlDown=$_.bind(this),this._interceptControlUp=Z_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=it.NONE}update(e=null){let t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),r<-Math.PI?r+=rn:r>Math.PI&&(r-=rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=It.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ka.origin.copy(this.object.position),ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ka.direction))<O_?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ka.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jc||this._lastTargetPosition.distanceToSquared(this.target)>jc?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;It.copy(r).sub(this.target);let s=It.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function B_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function z_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function k_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=it.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function V_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=it.DOLLY;break;case yi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}break;case yi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Jc)}function H_(n){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function G_(n){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(n.preventDefault(),this.dispatchEvent(Jc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ud))}function W_(n){this.enabled!==!1&&this._handleKeyDown(n)}function X_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=it.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=it.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Jc)}function q_(n){switch(this._trackPointer(n),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=it.NONE}}function Y_(n){this.enabled!==!1&&n.preventDefault()}function $_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ps=class extends ms{constructor(e){super(e)}parse(e){function t(I){switch(I.image_type){case f:case v:if(I.colormap_length>256||I.colormap_size!==24||I.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case p:case g:case m:case d:if(I.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case u:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+I.image_type)}if(I.width<=0||I.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(I.pixel_size!==8&&I.pixel_size!==16&&I.pixel_size!==24&&I.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+I.pixel_size)}function i(I,G,z,L,B){let $,Q,ie=z.pixel_size>>3,re=z.width*z.height*ie;if(G&&(Q=B.subarray(L,L+=z.colormap_length*(z.colormap_size>>3))),I){$=new Uint8Array(re);let J,N,W,oe=0,ee=new Uint8Array(ie);for(;oe<re;)if(J=B[L++],N=(J&127)+1,J&128){for(W=0;W<ie;++W)ee[W]=B[L++];for(W=0;W<N;++W)$.set(ee,oe+W*ie);oe+=ie*N}else{for(N*=ie,W=0;W<N;++W)$[oe+W]=B[L++];oe+=N}}else $=B.subarray(L,L+=G?z.width*z.height:re);return{pixel_data:$,palettes:Q}}function r(I,G,z,L,B,$,Q,ie,re){let J=re,N,W=0,oe,ee,ne=_.width;for(ee=G;ee!==L;ee+=z)for(oe=B;oe!==Q;oe+=$,W++)N=ie[W],I[(oe+ne*ee)*4+3]=255,I[(oe+ne*ee)*4+2]=J[N*3+0],I[(oe+ne*ee)*4+1]=J[N*3+1],I[(oe+ne*ee)*4+0]=J[N*3+2];return I}function s(I,G,z,L,B,$,Q,ie){let re,J=0,N,W,oe=_.width;for(W=G;W!==L;W+=z)for(N=B;N!==Q;N+=$,J+=2)re=ie[J+0]+(ie[J+1]<<8),I[(N+oe*W)*4+0]=(re&31744)>>7,I[(N+oe*W)*4+1]=(re&992)>>2,I[(N+oe*W)*4+2]=(re&31)<<3,I[(N+oe*W)*4+3]=re&32768?0:255;return I}function o(I,G,z,L,B,$,Q,ie){let re=0,J,N,W=_.width;for(N=G;N!==L;N+=z)for(J=B;J!==Q;J+=$,re+=3)I[(J+W*N)*4+3]=255,I[(J+W*N)*4+2]=ie[re+0],I[(J+W*N)*4+1]=ie[re+1],I[(J+W*N)*4+0]=ie[re+2];return I}function a(I,G,z,L,B,$,Q,ie){let re=0,J,N,W=_.width;for(N=G;N!==L;N+=z)for(J=B;J!==Q;J+=$,re+=4)I[(J+W*N)*4+2]=ie[re+0],I[(J+W*N)*4+1]=ie[re+1],I[(J+W*N)*4+0]=ie[re+2],I[(J+W*N)*4+3]=ie[re+3];return I}function c(I,G,z,L,B,$,Q,ie){let re,J=0,N,W,oe=_.width;for(W=G;W!==L;W+=z)for(N=B;N!==Q;N+=$,J++)re=ie[J],I[(N+oe*W)*4+0]=re,I[(N+oe*W)*4+1]=re,I[(N+oe*W)*4+2]=re,I[(N+oe*W)*4+3]=255;return I}function l(I,G,z,L,B,$,Q,ie){let re=0,J,N,W=_.width;for(N=G;N!==L;N+=z)for(J=B;J!==Q;J+=$,re+=2)I[(J+W*N)*4+0]=ie[re+0],I[(J+W*N)*4+1]=ie[re+0],I[(J+W*N)*4+2]=ie[re+0],I[(J+W*N)*4+3]=ie[re+1];return I}function h(I,G,z,L,B){let $,Q,ie,re,J,N;switch((_.flags&b)>>E){default:case A:$=0,ie=1,J=G,Q=0,re=1,N=z;break;case S:$=0,ie=1,J=G,Q=z-1,re=-1,N=-1;break;case T:$=G-1,ie=-1,J=-1,Q=0,re=1,N=z;break;case x:$=G-1,ie=-1,J=-1,Q=z-1,re=-1,N=-1;break}if(k)switch(_.pixel_size){case 8:c(I,Q,re,N,$,ie,J,L);break;case 16:l(I,Q,re,N,$,ie,J,L);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(_.pixel_size){case 8:r(I,Q,re,N,$,ie,J,L,B);break;case 16:s(I,Q,re,N,$,ie,J,L);break;case 24:o(I,Q,re,N,$,ie,J,L);break;case 32:a(I,Q,re,N,$,ie,J,L);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return I}let u=0,f=1,p=2,g=3,v=9,m=10,d=11,b=48,E=4,S=0,x=1,A=2,T=3;if(e.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let C=0,y=new Uint8Array(e),_={id_length:y[C++],colormap_type:y[C++],image_type:y[C++],colormap_index:y[C++]|y[C++]<<8,colormap_length:y[C++]|y[C++]<<8,colormap_size:y[C++],origin:[y[C++]|y[C++]<<8,y[C++]|y[C++]<<8],width:y[C++]|y[C++]<<8,height:y[C++]|y[C++]<<8,pixel_size:y[C++],flags:y[C++]};if(t(_),_.id_length+C>e.length)throw new Error("THREE.TGALoader: No data.");C+=_.id_length;let P=!1,F=!1,k=!1;switch(_.image_type){case v:P=!0,F=!0;break;case f:F=!0;break;case m:P=!0;break;case p:break;case d:P=!0,k=!0;break;case g:k=!0;break}let q=new Uint8Array(_.width*_.height*4),H=i(P,F,_,C,y);return h(q,_.width,_.height,H.pixel_data,H.palettes),{data:q,width:_.width,height:_.height,flipY:!0,generateMipmaps:!0,minFilter:Jt}}};var dd=Uint8Array.of(137,80,78,71,13,10,26,10),pd=256*1024**2,fd={0:1,2:3,3:1,4:2,6:4},j_=Uint32Array.from({length:256},(n,e)=>{for(let t=0;t<8;t++)e=e&1?3988292384^e>>>1:e>>>1;return e>>>0}),rt=n=>{throw new Error("PNG: "+n)};function md(n,e,t){let i=4294967295;for(let r=e;r<t;r++)i=j_[(i^n[r])&255]^i>>>8;return(i^4294967295)>>>0}function J_(n){let e=1,t=0;for(let i=0;i<n.length;){let r=Math.min(i+5552,n.length);for(;i<r;)e+=n[i++],t+=e;e%=65521,t%=65521}return(t<<16|e)>>>0}function gd(n,e,t){(!Number.isInteger(n)||!Number.isInteger(e)||n<1||e<1||n>t||e>t||n*e*4>pd)&&rt(`dimensions must be 1..${t}, within the 256 MiB decoded budget.`)}function K_(n,e,t){let i=n+e-t,r=Math.abs(i-n),s=Math.abs(i-e),o=Math.abs(i-t);return r<=s&&r<=o?n:s<=o?e:t}function Si(n){n instanceof Uint8Array||rt("expected Uint8Array bytes."),(n.length<8||!dd.every((S,x)=>n[x]===S))&&rt("invalid signature.");let e=new DataView(n.buffer,n.byteOffset,n.byteLength),t=[],i,r,s,o,a,c=!1,l=!1,h=!1,u=0;for(let S=8;S<n.length;){n.length-S<12&&rt("truncated chunk.");let x=e.getUint32(S),A=S+12+x;(x>2147483647||A>n.length)&&rt("chunk exceeds input bounds.");let T=String.fromCharCode(...n.subarray(S+4,S+8));(!/^[A-Za-z]{4}$/.test(T)||n[S+6]&32)&&rt("invalid chunk type."),md(n,S+4,A-4)!==e.getUint32(A-4)&&rt("chunk CRC mismatch."),i===void 0&&T!=="IHDR"&&rt("IHDR must be first.");let C=n.subarray(S+8,A-4);if(c&&T!=="IDAT"&&(h=!0),T==="IHDR")(i!==void 0||S!==8||x!==13)&&rt("invalid or repeated IHDR."),i=e.getUint32(S+8),r=e.getUint32(S+12),s=C[9],gd(i,r,8192),C[8]!==8&&rt("only 8-bit samples are supported."),C[12]!==0&&rt("interlaced PNG is unsupported."),(!(s in fd)||C[10]!==0||C[11]!==0)&&rt("unsupported color, compression or filter method.");else if(T==="PLTE")(o||a||c||s===0||s===4||!x||x%3||x>768)&&rt("invalid PLTE or palette order."),o=C;else if(T==="tRNS"){if((a||c||s===4||s===6||s===3&&(!o||x>o.length/3)||s===0&&x!==2||s===2&&x!==6)&&rt("invalid tRNS or transparency order."),a=C,s!==3)for(let y=0;y<x;y+=2)C[y]!==0&&rt("transparency key exceeds 8-bit samples.")}else T==="IDAT"?((h||s===3&&!o)&&rt("invalid IDAT order or missing palette."),c=!0,u+=x,u>pd&&rt("compressed data exceeds budget."),t.push(C)):T==="IEND"?((!c||x||A!==n.length)&&rt("invalid IEND or trailing data."),l=!0):["acTL","fcTL","fdAT"].includes(T)?rt("animated PNG is unsupported; use a single-frame PNG."):n[S+4]&32||rt("unknown critical chunk.");S=A}(!l||u<6)&&rt("missing image data or IEND.");let f=new Uint8Array(u),p=0;for(let S of t)f.set(S,p),p+=S.length;f[1]&32&&rt("preset compression dictionaries are unsupported.");let g=fd[s],v=i*g,m=(v+1)*r,d;try{d=hu(f,{out:new Uint8Array(m+1)})}catch{rt("invalid compressed data.")}d.length!==m&&rt("decompressed size differs from IHDR.");let b=new DataView(f.buffer).getUint32(u-4);J_(d)!==b&&rt("compressed data checksum mismatch.");let E=new Uint8ClampedArray(i*r*4);for(let S=0;S<r;S++){let x=S*(v+1)+1,A=d[x-1];A>4&&rt("unknown scanline filter.");for(let T=0;T<v;T++){let C=T>=g?d[x+T-g]:0,y=S?d[x+T-v-1]:0,_=S&&T>=g?d[x+T-v-1-g]:0,P=A===1?C:A===2?y:A===3?C+y>>>1:A===4?K_(C,y,_):0;d[x+T]=d[x+T]+P&255}for(let T=0;T<i;T++){let C=x+T*g,y=(S*i+T)*4,_=d[C],P=_,F=_,k=_,q=255;s===3?(_*3>=o.length&&rt("palette index is out of range."),P=o[_*3],F=o[_*3+1],k=o[_*3+2],q=a?.[_]??255):s===2||s===6?(P=d[C],F=d[C+1],k=d[C+2],s===6?q=d[C+3]:a&&P===a[1]&&F===a[3]&&k===a[5]&&(q=0)):s===4?q=d[C+1]:a&&_===a[1]&&(q=0),E[y]=P,E[y+1]=F,E[y+2]=k,E[y+3]=q}}return{width:i,height:r,data:E}}function Kc(n,e){let t=new Uint8Array(e.length+12),i=new DataView(t.buffer);i.setUint32(0,e.length);for(let r=0;r<4;r++)t[4+r]=n.charCodeAt(r);return t.set(e,8),i.setUint32(t.length-4,md(t,4,t.length-4)),t}function Qc(n){let{width:e,height:t,data:i}=n??{};gd(e,t,4096),(!(i instanceof Uint8Array||i instanceof Uint8ClampedArray)||i.length!==e*t*4)&&rt("expected exact RGBA byte data.");let r=e*4,s=new Uint8Array((r+1)*t),o=new Uint8Array(13);new DataView(o.buffer).setUint32(0,e),new DataView(o.buffer).setUint32(4,t),o[8]=8,o[9]=6;for(let h=0;h<t;h++){let u=h*r,f=h*(r+1);s[f]=1;for(let p=0;p<r;p++)s[f+1+p]=i[u+p]-(p>=4?i[u+p-4]:0)&255}let a=[dd,Kc("IHDR",o),Kc("IDAT",cu(s,{level:6})),Kc("IEND",new Uint8Array)],c=new Uint8Array(a.reduce((h,u)=>h+u.length,0)),l=0;for(let h of a)c.set(h,l),l+=h.length;return c}var Ew=Object.freeze({archiveSha256:"b7875fbd83e36943ec2034480ffd58f83429ed2aef07c2df5b2901b1044fe594",illumSha256:"fa27ecd646064a50a21fe5e2f2a08432a56d844a8249c7c615b56e5675b37cb6",shadeLibSha256:"2a4648c88904ea3beaed1b9a5375669b47ab0780d487a50ea71e5d78502c4c95",forwardSha256:"ae4fe167f4d4318fe7b55cca16b1e22b9aae0333bd00545754c1cd7d9f0c3d96",threeRevision:"180"}),th=n=>Math.max(0,Math.min(1,n)),Q_=n=>n[0]*.2126+n[1]*.7152+n[2]*.0722;function Mi(n,e){if(!Number.isFinite(n))throw new Error(`${e} must be finite.`);return n}function Is(n,e,t){if(!Array.isArray(n)||n.length!==e||!n.every(Number.isFinite))throw new Error(`${t} must have ${e} finite components.`);return n}function ex(n,e=1){Mi(n,"Shininess"),Mi(e,"Gloss");let t=th(n/255*e),i=1-t;return{smoothness:t,perceptualRoughness:i,ggxAlpha:Math.max(i**2,.001)}}function Ha(n,{shininess:e,channel:t="alpha",inverted:i=!1}={}){if(Mi(e,"Shininess"),!["red","alpha"].includes(t)||typeof i!="boolean")throw new Error("Invalid gloss channel.");let{width:r,height:s,data:o}=n??{};if(!Number.isInteger(r)||!Number.isInteger(s)||r<1||s<1||r>4096||s>4096||!(o instanceof Uint8Array||o instanceof Uint8ClampedArray)||o.length!==r*s*4)throw new Error("Invalid RGBA8 raster.");let a=new Uint8Array(o.length),c=t==="alpha"?3:0;for(let l=0;l<o.length;l+=4){let h=o[l+c]/255,u=ex(e,i?1-h:h).perceptualRoughness;a[l]=a[l+1]=a[l+2]=Math.round(u*255),a[l+3]=255}return{width:r,height:s,data:a}}function vd(n,{exposure:e,bloomRGB:t,bloomMix:i,vignetting:r,colorBalance:s,filmCurve:o}={}){Is(n,3,"Scene"),Is(t,3,"Bloom"),Is(s,4,"Colour balance"),Is(o,4,"Film curve"),Mi(e,"Exposure"),Mi(r,"Vignetting");let a=Array.isArray(i)?Is(i,3,"Bloom mix"):Array(3).fill(Mi(i,"Bloom mix")),c=n.map((d,b)=>(d+(t[b]-d)*th(a[b]))*r*e),l=Q_(c),h=.22*o[0],u=.3*o[1],f=.01*o[2];function p(d){return(d*(h*d+.1*u)+.2*f)/(d*(h*d+u)+.2*.3)-f/.3}let g=p(o[3]);if(!(g>0)||!Number.isFinite(g))throw new Error("Native film white point must produce a positive finite value.");let v=c.map((d,b)=>th(p(Math.max(0,(l+s[3]*(d-l))*s[b]))/g)),m=v.map(d=>d<.0031308?12.92*d:1.055*d**(1/2.4)-.055);return{linear:v,srgb:m}}var tx=`
float cryIllumDiffuse(vec3 N, vec3 V, vec3 L, float perceptualRoughness) {
  float r = perceptualRoughness * perceptualRoughness;
  float nl = saturate(dot(N,L));
  float nv = max(abs(dot(N,V)) + 0.00001, 0.1);
  float vh = saturate(dot(V,normalize(V+L)));
  float fd90 = 0.5*r + 2.0*vh*vh*r;
  return (1.0+(fd90-1.0)*pow(1.0-nl,5.0)) *
    (1.0+(fd90-1.0)*pow(1.0-nv,5.0)) * mix(1.0,1.0/1.51,r) * nl;
}
vec3 cryIllumSpecular(vec3 N, vec3 V, vec3 L, vec3 f0, float perceptualRoughness) {
  float nl = saturate(dot(N,L));
  if (nl <= 0.0) return vec3(0.0);
  vec3 H = normalize(V+L);
  float a = max(perceptualRoughness*perceptualRoughness,0.001);
  float a2 = a*a;
  float nh = saturate(dot(N,H));
  float nv = abs(dot(N,V)) + 0.00001;
  float d = nh*nh*(a2-1.0)+1.0;
  float distribution = a2/(d*d);
  float visibility = 0.5/(nl*sqrt(nv*nv*(1.0-a2)+a2)+nv*sqrt(nl*nl*(1.0-a2)+a2));
  float f90 = saturate(dot(f0,vec3(0.33333))/0.02);
  vec3 F = mix(f0,vec3(f90),pow(1.0-saturate(dot(L,H)),5.0));
  return F * distribution * visibility * nl;
}
`,eh=new WeakMap;function Ur(n,e,t){if(n.split(e).length!==2)throw new Error(`Unsupported Three shader: expected one ${e}.`);return n.replace(e,t)}function yd(n,{emittanceGamma:e=1,directBRDF:t=!1,directLightScale:i}={}){if(!n?.isMeshPhysicalMaterial)throw new Error("Cry Illum requires a MeshPhysicalMaterial.");if(Mi(e,"Emittance map gamma"),typeof t!="boolean"||t&&(!Number.isFinite(i)||i<=0))throw new Error("Native direct BRDF requires an explicit positive directLightScale.");if(eh.has(n))throw new Error("Cry Illum terms are already installed.");let r=n.onBeforeCompile,s=n.customProgramCacheKey,o={value:e},a={value:i??1},c=function(u,f){r.call(this,u,f),u.uniforms.cryEmittanceGamma=o,u.uniforms.cryDirectLightScale=a,u.fragmentShader=`uniform float cryEmittanceGamma;
uniform float cryDirectLightScale;
${u.fragmentShader}`,t&&(u.fragmentShader=Ur(u.fragmentShader,"#include <lights_physical_fragment>",`#include <lights_physical_fragment>
material.roughness = clamp(roughnessFactor,0.0,1.0);
`)),u.fragmentShader=Ur(u.fragmentShader,"#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      #ifdef USE_EMISSIVEMAP
      totalEmissiveRadiance *= pow(max(dot(emissiveColor.rgb,vec3(0.2126,0.7152,0.0722)),0.0001),cryEmittanceGamma-1.0) * emissiveColor.a;
      #endif`);let p=ze.lights_physical_pars_fragment;if(t)p=Ur(p,"reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );","reflectedLight.directSpecular += cryDirectLightScale * directLight.color * cryIllumSpecular(geometryNormal,geometryViewDir,directLight.direction,material.specularColor,material.roughness);"),p=Ur(p,"reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );","reflectedLight.directDiffuse += cryDirectLightScale * directLight.color * material.diffuseColor * saturate(1.0-dot(material.specularColor,vec3(0.2126,0.7152,0.0722))) * cryIllumDiffuse(geometryNormal,geometryViewDir,directLight.direction,material.roughness);"),p=tx+p;else{let g=p.indexOf("vec3 BRDF_GGX( "),v=p.indexOf(`
}`,g)+2;if(g<0||v<g)throw new Error("Unsupported Three GGX function.");let m=p.slice(g,v),d=Ur(m,"vec3 F = F_Schlick( f0, f90, dotVH );","vec3 F = mix(f0,vec3(saturate(dot(f0,vec3(0.33333))/0.02)),pow(1.0-dotVH,5.0));");p=p.slice(0,g)+d+p.slice(v)}u.fragmentShader=Ur(u.fragmentShader,"#include <lights_physical_pars_fragment>",p)},l=function(){return`${s.call(this)}|cry-illum-v1|${t?"direct":"terms"}`};n.onBeforeCompile=c,n.customProgramCacheKey=l,n.needsUpdate=!0;let h={setEmittanceGamma(u){o.value=Mi(u,"Emittance map gamma")},dispose(){if(n.onBeforeCompile!==c||n.customProgramCacheKey!==l)throw new Error("Remove later shader patches before Cry Illum terms.");n.onBeforeCompile=r,n.customProgramCacheKey=s,n.needsUpdate=!0,eh.delete(n)}};return eh.set(n,h),h}var nx=Object.freeze({Vegetation:{member:"Shaders/HWScripts/CryFX/Vegetation.cfx",sha256:"26b5fe572b02cb5969bc58b29970a35f6a648920485410ca51396d20f6aed3db",lines:"446-512,519-536"},Humanskin:{member:"Shaders/HWScripts/CryFX/HumanSkin.cfx",sha256:"9ee4508a3ebd2997c08c36219434dfbc8f3722fd002f9b03a8078f4180e726e0",lines:"145-150,255-298; Common.cfi:437-440"},Glass:{member:"Shaders/HWScripts/CryFX/Glass.cfx",sha256:"cdbabd8556c58d210db6a52e983b4f781f63ddbc6a358b43ae9c7141459cbb8d",lines:"240-261,453-489,514-587"}});var Ga=n=>{if(!Number.isFinite(n))throw Error("Expected finite native special-material input.");return n};function ih(n,e=3){if(!Array.isArray(n)||n.length!==e||!n.every(Number.isFinite))throw Error("Invalid native special-material vector.");return n}function bi(n,e,t){let i=Number(n[e]??t);return Ga(i),i}function _d(n,e){return ih(typeof n=="string"?n.split(",").map(Number):n??e)}function ix(n,e=1,t=!1){Ga(n),Ga(e);let i=n-Math.floor(n),r=t?Math.floor(n)+i*e:n;return r-Math.floor(r)>.01?r:0}function xd(n){let e=n?.attributes??{},t=n?.publicParams??{},i=String(n?.shader??e.Shader??"").toLowerCase(),r=String(n?.flags??e.StringGenMask??"").split("%").filter(Boolean),s=n?.textures??[],o=s.some(h=>String(h.map??h.attributes?.Map).toLowerCase()==="opacity"),a={vegetation:["LEAVES","NORMAL_MAP","SPECULAR_MAP","TEMP_VEGETATION","VERTCOLORS"],humanskin:["NORMAL_MAP","SPECULAR_MAP","TEMP_SKIN"],glass:[]};if(!a[i])throw Error("Unsupported native special shader.");let c=r.filter(h=>!a[i].includes(h)),l={format:1,shader:i,flags:r,unsupported:c,supported:c.length===0,requiresSSS:!1,missingPasses:[],source:nx[i==="humanskin"?"Humanskin":i==="vegetation"?"Vegetation":"Glass"],lightingPath:i==="glass"?"tiled-forward":"tiled-deferred",hasOpacity:o,alphaTest:Number(n?.alphaTest??e.AlphaTest??0),limitations:["Source tangent frames, visibility, SSAO/SSR/GI and runtime light selection remain independent requirements."]};if(i==="vegetation")r.includes("LEAVES")||c.push("Only the selected LEAVES static branch is ported."),Object.assign(l,{kind:"leaf",normalViewDependency:bi(t,"NormalViewDependency",0),backDiffuseMultiplier:bi(t,"BackDiffuseMultiplier",0),transmittanceColor:_d(t.TransmittanceColor,[1,1,1]),capOpacityFalloff:bi(t,"CapOpacityFalloff",0)});else if(i==="humanskin"){let h=bi(t,"SSSIndex",1.2);Object.assign(l,{kind:"skin",melanin:bi(t,"Melanin",0),sssIndex:h,encodedScatteringIndex:ix(h),translucencyMultiplier:bi(t,"TranslucencyMultiplier",0)}),l.requiresSSS=l.encodedScatteringIndex!==0,l.requiresSSS&&(l.missingPasses.push("screen-space-sss"),l.limitations.push("Native screen-space SSS requires the separate source skin-profile irradiance, depth and post-scatter albedo passes."))}else Object.assign(l,{kind:"flat-glass",tintColor:_d(t.TintColor,[1,1,1]),cloudiness:bi(t,"TintCloudiness",0),backLightScale:bi(t,"BackLightScale",0),requiresPreGlassSceneColor:!0,requiresLinearSceneDepth:!0,sourceDefaultNormalXY:[1/127,1/127]}),s.some(h=>["bumpmap","normal"].includes(String(h.map??h.attributes?.Map).toLowerCase()))&&c.push("Normal-distorted scene-depth refraction is not ported."),l.limitations.push("Only the actual flat no-DIRT/no-TINTMAP/no-DEPTH_FOG branch is ported. No physical IOR or fabricated absorption is substituted.");return l.surfaceSupported=c.length===0,l.supported=l.surfaceSupported&&l.missingPasses.length===0,l}var rx=`
vec3 cryThinTranslucency(vec3 N,vec3 L,vec3 transmittance) {
  float wrap=0.5*dot(transmittance,vec3(0.2126,0.7152,0.0722));
  float normalization=1.0/((1.0+wrap)*(1.0+wrap));
  float dotNL=dot(N,L);
  return transmittance*clamp((-dotNL+wrap)*normalization,0.0,1.0)+clamp((dotNL+wrap)*normalization,0.0,1.0);
}
vec3 crySkinTransmittance(float opacity,float multiplier) {
  return exp((1.0-clamp(opacity*multiplier,0.0,1.0))*vec3(-8.0,-40.0,-64.0));
}
vec3 crySkinSynthesis(vec3 albedo,float melanin) {
  float lum=dot(albedo,vec3(0.33,0.59,0.11));
  return albedo*mix(vec3(1.0),albedo*lum,melanin);
}
vec3 cryFlatGlassComposite(vec3 background,vec3 diffuseLighting,vec3 specularLighting,vec3 tint,float cloudiness,vec3 reflectance,float smoothness,float dotNV) {
  vec3 diffuse=mix(background*tint,tint*diffuseLighting,cloudiness);
  vec3 fresnel=mix(reflectance,vec3(1.0),pow(1.0-clamp(dotNV,0.0,1.0),5.0)/(40.0-39.0*smoothness));
  return mix(diffuse,specularLighting,fresnel);
}
vec2 cryGlassRefractionUV(vec2 uv,vec2 normalXY,vec2 hPosScale,float sceneDepth,float fragmentDepth) {
  return uv+normalXY*vec2(0.1,-0.1)*hPosScale*clamp(sceneDepth-fragmentDepth,0.0,1.0);
}
`;function Bn(n,e,t){if(n.split(e).length!==2)throw Error(`Unsupported native special-material composition: ${e}.`);return n.replace(e,t)}var nh=new WeakSet;function Sd(n,{recipe:e,opacityTexture:t=null,opacityDefault:i,opacityTransform:r={repeat:[1,1],offset:[0,0]},sceneColor:s=null,sceneColorExcludesGlass:o=!1,sceneColorLinear:a=!1,sceneDepth:c=null,sceneDepthEncoding:l,hPosScale:h,viewport:u,vertexAlpha:f=1}={}){if(!n?.isMeshPhysicalMaterial||e?.format!==1||!(e.supported||e.surfaceSupported)||nh.has(n))throw Error("A supported finite native special-material recipe is required.");let p=e.kind==="flat-glass";if(!p&&(e.hasOpacity?!t?.isTexture:!Number.isFinite(i)))throw Error("Declare the source opacity texture or a proved native fallback.");if(p&&(!s?.isTexture||o!==!0||a!==!0||!Array.isArray(u)||u.length!==2||!u.every(x=>Number.isFinite(x)&&x>0)))throw Error("Flat native Glass requires a separate linear pre-glass scene and viewport.");if(p&&(!c?.isTexture||l!=="view-z-metres"||!Array.isArray(h)||h.length!==2||!h.every(x=>Number.isFinite(x)&&x>0)))throw Error("Native Glass requires undistorted scene depth in view-Z metres and explicit source HPosScale.");ih(r.repeat,2),ih(r.offset,2),Ga(f);let g=n.onBeforeCompile,v=n.customProgramCacheKey,m={map:n.map,normalMap:n.normalMap,normalScale:n.normalScale.clone(),alphaMap:n.alphaMap,alphaTest:n.alphaTest,side:n.side,opacity:n.opacity,color:n.color.clone()};n.alphaMap=null,n.alphaTest=e.alphaTest,p||(n.side=e.kind==="skin"?Tn:Ut);let d=null;if(p&&(n.map=null,n.color.setRGB(1,1,1),n.opacity=f,!n.normalMap)){let[x,A]=e.sourceDefaultNormalXY,T=Math.sqrt(1-x*x-A*A);d=new yn(new Float32Array([x*.5+.5,A*.5+.5,T*.5+.5,1]),1,1,Mt,Ct),d.magFilter=d.minFilter=ut,d.colorSpace=vt,d.flipY=!1,d.needsUpdate=!0,n.normalMap=d,n.normalScale.set(1,-1)}let b={crySpecialOpacity:{value:t},crySpecialOpacityDefault:{value:i??0},crySpecialOpacityTransform:{value:new Float32Array([...r.repeat,...r.offset])},crySpecialTransmissionColor:{value:new Float32Array(e.transmittanceColor??[1,1,1])},crySpecialTransmissionMultiplier:{value:e.kind==="leaf"?e.backDiffuseMultiplier:e.translucencyMultiplier??0},crySpecialNormalDependency:{value:e.normalViewDependency??0},crySpecialMelanin:{value:e.melanin??0},cryGlassScene:{value:s},cryGlassDepth:{value:c},cryGlassHPosScale:{value:new Float32Array(h??[1,1])},cryGlassViewport:{value:new Float32Array(u??[1,1])},cryGlassTint:{value:new Float32Array(e.tintColor??[1,1,1])},cryGlassCloudiness:{value:e.cloudiness??0}},E=function(x,A){if(g.call(this,x,A),Object.assign(x.uniforms,b),x.vertexShader=Bn(x.vertexShader,"#include <uv_pars_vertex>",`#include <uv_pars_vertex>
varying vec2 crySpecialUV;`),x.vertexShader=Bn(x.vertexShader,"#include <uv_vertex>",`#include <uv_vertex>
crySpecialUV=uv;`),x.fragmentShader=`
      varying vec2 crySpecialUV;
      uniform sampler2D crySpecialOpacity;
      uniform float crySpecialOpacityDefault;
      uniform vec4 crySpecialOpacityTransform;
      uniform vec3 crySpecialTransmissionColor;
      uniform float crySpecialTransmissionMultiplier,crySpecialNormalDependency,crySpecialMelanin;
      uniform sampler2D cryGlassScene;
      uniform sampler2D cryGlassDepth;
      uniform vec2 cryGlassHPosScale;
      uniform vec2 cryGlassViewport;
      uniform vec3 cryGlassTint;
      uniform float cryGlassCloudiness;
      vec3 crySpecialTransmission=vec3(0.0);
      ${rx}
    `+x.fragmentShader,p)x.fragmentShader=Bn(x.fragmentShader,"saturate(1.0-dot(material.specularColor,vec3(0.2126,0.7152,0.0722))) * cryIllumDiffuse(geometryNormal,geometryViewDir,directLight.direction,material.roughness)","saturate(dot(geometryNormal,directLight.direction))*saturate(dot(geometryNormal,directLight.direction)+0.15)"),x.fragmentShader=Bn(x.fragmentShader,"cryIllumSpecular(geometryNormal,geometryViewDir,directLight.direction,material.specularColor,material.roughness)","cryIllumSpecular(geometryNormal,geometryViewDir,directLight.direction,material.specularColor,material.roughness)*saturate(dot(geometryNormal,directLight.direction)+0.15)"),x.fragmentShader=Bn(x.fragmentShader,"material.diffuseColor * nativeDiffuse * nativeIrradiance","nativeIrradiance"),x.fragmentShader=Bn(x.fragmentShader,"#include <opaque_fragment>",`
        vec2 cryGlassUV=gl_FragCoord.xy/cryGlassViewport;
        float cryGlassZ=texture2D(cryGlassDepth,cryGlassUV).r;
        // Source default White_ddn is signed BC5, decoded XY=1/127, not zero.
        vec2 cryGlassNormalXY=texture2D(normalMap,vNormalMapUv).xy*2.0-1.0;
        vec2 cryGlassRefractedUV=cryGlassRefractionUV(cryGlassUV,cryGlassNormalXY,cryGlassHPosScale,cryGlassZ,vViewPosition.z);
        vec3 cryGlassBackground=texture2D(cryGlassScene,cryGlassRefractedUV).rgb;
        outgoingLight=cryFlatGlassComposite(cryGlassBackground,reflectedLight.directDiffuse+reflectedLight.indirectDiffuse,
          reflectedLight.directSpecular+reflectedLight.indirectSpecular,cryGlassTint,cryGlassCloudiness,
          material.specularColor,1.0-material.roughness,dot(normal,normalize(vViewPosition)));
        #include <opaque_fragment>`);else{let T=e.hasOpacity?"texture2D(crySpecialOpacity,crySpecialUV*crySpecialOpacityTransform.xy+crySpecialOpacityTransform.zw).r":"crySpecialOpacityDefault",C=e.kind==="leaf"?`clamp((${T})*crySpecialTransmissionMultiplier,0.0,1.0)*crySpecialTransmissionColor`:`crySkinTransmittance(${T},crySpecialTransmissionMultiplier)`;x.fragmentShader=Bn(x.fragmentShader,"#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        normal=normalize(normal+normalize(vViewPosition)*crySpecialNormalDependency);
        crySpecialTransmission=${C};`),e.kind==="skin"&&(x.fragmentShader=Bn(x.fragmentShader,"#include <map_fragment>",`#include <map_fragment>
diffuseColor.rgb=crySkinSynthesis(diffuseColor.rgb,crySpecialMelanin);`)),x.fragmentShader=Bn(x.fragmentShader,"cryIllumDiffuse(geometryNormal,geometryViewDir,directLight.direction,material.roughness)","cryThinTranslucency(geometryNormal,directLight.direction,crySpecialTransmission)"),x.fragmentShader=Bn(x.fragmentShader,"textureLod(cryProbeDiffuse,nativeNormal,0.0).rgb","(textureLod(cryProbeDiffuse,nativeNormal,0.0).rgb+textureLod(cryProbeDiffuse,-nativeNormal,0.0).rgb*crySpecialTransmission)")}},S=function(){return`${v.call(this)}|cry-special-v1|${e.kind}|${e.hasOpacity?"map":"fallback"}`};return n.onBeforeCompile=E,n.customProgramCacheKey=S,n.needsUpdate=!0,nh.add(n),{recipe:e,requiresPreGlassSceneColor:p,setSceneColor(x,A,T){if(!p||!x?.isTexture||![A,T].every(C=>Number.isFinite(C)&&C>0))throw Error("Declare the separate native Glass scene texture and viewport.");b.cryGlassScene.value=x,b.cryGlassViewport.value.set([A,T])},dispose(){if(n.onBeforeCompile!==E||n.customProgramCacheKey!==S)throw Error("Remove later shader patches before native special terms.");n.onBeforeCompile=g,n.customProgramCacheKey=v,Object.assign(n,{map:m.map,normalMap:m.normalMap,alphaMap:m.alphaMap,alphaTest:m.alphaTest,side:m.side,opacity:m.opacity}),n.normalScale.copy(m.normalScale),n.color.copy(m.color),d?.dispose(),n.needsUpdate=!0,nh.delete(n)}}}var rh=Object.freeze({normalRepeat:Object.freeze([43.1145,43.1145]),roughness:.3}),Md="prismatica-world-view-v1",sh=128,sx=6,oh=Object.freeze([-100,0,0,0,0,100,0,0,0,0,100,0,0,0,0,1]),Fr=25;var ox=n=>n-Math.floor(n),zn=n=>{if(!Number.isFinite(n))throw Error("Non-finite source material value");return n},Ds=(n,e)=>{if(!Array.isArray(n)||n.length<e)throw Error("Missing source material vector");return n.slice(0,e).map(zn)};function ah(n){let e={color:Ds(n.EmiColor,3),speed:Ds(n.EmiNoiseSpeed,2),tiling:Ds(n.EmiNoiseTiling,2),contrast:zn(n.EmiNoiseContrast),multiplier:zn(n.EmiMult)};if(e.contrast<0||e.multiplier<0)throw Error("Invalid source emission power");return e}var _n=n=>{let e=zn(n).toPrecision(12);return/[.eE]/.test(e)?e:e+".0"};function lh(n,{presentationGain:e=1}={}){let t=ah(n),i=zn(e);return{key:JSON.stringify(["d2-arcane-source46",t,i]),vertex:[["#include <common>",`#include <common>
varying vec2 vD2EffectUv;`],["#include <uv_vertex>",`#include <uv_vertex>
vD2EffectUv = uv;`]],fragment:[["#include <common>",`#include <common>
varying vec2 vD2EffectUv;
uniform sampler2D d2ArcaneMask;
uniform sampler2D d2ArcaneNoise;
uniform float d2ArcaneTime;`],["#include <emissivemap_fragment>",`
vec2 d2NoiseUv = vD2EffectUv * vec2(${t.tiling.map(r=>_n(3*r)).join(",")}) + d2ArcaneTime * vec2(${t.speed.map(_n).join(",")});
vec3 d2Mask = texture2D(d2ArcaneMask, vD2EffectUv).rgb;
vec3 d2Noise = pow(max(texture2D(d2ArcaneNoise, d2NoiseUv).rgb, vec3(0.0)), vec3(${_n(t.contrast)}));
totalEmissiveRadiance = d2Mask * d2Noise * vec3(${t.color.map(_n).join(",")}) * ${_n(t.multiplier*i)};`]],uniforms:["d2ArcaneMask","d2ArcaneNoise","d2ArcaneTime"],limits:["Source masked-noise component only; Fresnel outline and Niagara smoke omitted.","D1/browser presentation gain, source clock phase and derivative mip filtering are not equivalence claims."]}}function bd(n,e=!1){return e?0:ox(zn(n)/Fr)*Fr}function wd(n,e=!1){return e?0:Math.max(0,zn(n))}function ch(n){let e=n?.scalars,t=n?.vectors;if(!e||!t||typeof e!="object"||typeof t!="object")throw Error("Missing Prismatica source parameters");let i={speed:zn(e.Speed),reflectionFactor:zn(e.ReflectionFactor),multEmissive:zn(e.MultEmissive),fresnelColor:Ds(t.FresnelColor,3),baseColor:Ds(t.BaseColor,3)};if(i.multEmissive<0)throw Error("Invalid source emission power");return i}function Ed(n){let e=ch(n),t=e.fresnelColor,i=e.baseColor,r=(t[0]+t[1]+t[2])/3,s=a=>`vec3(${a.map(_n).join(",")})`,o=`uniform mat4 d2SourceFromWorld;
varying vec3 vD2SourcePosition;
varying vec3 vD2SourceVertexNormal;`;return{key:JSON.stringify(["d2-prismatica-source47",e]),vertex:[["#include <common>",`#include <common>
${o}`],["#include <project_vertex>",`#include <project_vertex>
vD2SourcePosition = (d2SourceFromWorld * (modelMatrix * vec4(transformed, 1.0))).xyz;
vD2SourceVertexNormal = mat3(d2SourceFromWorld) * (mat3(modelMatrix) * objectNormal);`]],fragment:[["#include <common>",`#include <common>
${o}
uniform sampler2D d2PrismaticaGradient;
uniform float d2PrismaticaTime;
float d2PrismaticaCorner(vec3 p, vec3 c) {
  vec3 m = mod(c, 128.0);
  ivec2 texel = ivec2(mod(m.x + 17.0 * m.z, 128.0), mod(m.y + 89.0 * m.z, 128.0));
  vec3 g = texelFetch(d2PrismaticaGradient, texel, 0).rgb * 2.0 - 1.0;
  vec3 d = p - (c - dot(c, vec3(1.0 / 6.0)));
  float w = max(0.6 - dot(d, d), 0.0); w *= w; w *= w;
  return w * dot(g, d);
}
float d2PrismaticaSimplex(vec3 p) {
  vec3 skew = p + dot(p, vec3(1.0 / 3.0));
  vec3 cell = floor(skew), f = skew - cell;
  float hi = max(f.x, max(f.y, f.z)), lo = min(f.x, min(f.y, f.z));
  return 32.0 * (d2PrismaticaCorner(p, cell) + d2PrismaticaCorner(p, cell + 1.0)
    + d2PrismaticaCorner(p, cell + vec3(equal(f, vec3(hi)))) + d2PrismaticaCorner(p, cell + vec3(notEqual(f, vec3(lo)))));
}`],["#include <normal_fragment_maps>",`#include <normal_fragment_maps>
vec3 d2SourceN = normalize(mat3(d2SourceFromWorld) * inverseTransformDirection(normal, viewMatrix));
vec3 d2SourceV = normalize(mat3(d2SourceFromWorld) * inverseTransformDirection(isOrthographic ? vec3(0.0, 0.0, 1.0) : normalize(vViewPosition), viewMatrix));
vec3 d2SourceVertexN = normalize(vD2SourceVertexNormal);
vec3 d2P = (vD2SourcePosition + d2PrismaticaTime * ${_n(e.speed)}) * 0.002;
float d2Noise = 0.0, d2Weight = 1.0;
for (int d2Octave = 0; d2Octave < ${sx}; d2Octave++) { d2Noise += d2Weight * d2PrismaticaSimplex(d2P); d2P *= 2.0; d2Weight *= 0.5; }
float d2Fresnel = max(1.0 - max(dot(d2SourceN, d2SourceV), 0.0), 0.0001);
float d2Turns = pow(d2Fresnel, d2Noise * d2SourceVertexN.x) * ${_n(1-e.reflectionFactor)} + ${_n(e.reflectionFactor)};
float d2Angle = fract(d2Turns) * 6.283185307179586;
vec3 d2Color = ${s(t)};
vec3 d2Rotated = vec3(${_n(r)}) + (d2Color - vec3(${_n(r)})) * cos(d2Angle) + (d2Color.zxy - d2Color.yzx) * (sin(d2Angle) * 0.5773502691896258);
diffuseColor.rgb = clamp(1.0 - (1.0 - ${s(i)}) * d2Rotated, 0.0, 1.0);
metalnessFactor = clamp(1.0 - d2Rotated.r, 0.0, 1.0);
vec3 d2PrismaticaEmission = ${_n(e.multEmissive)} * (${s(i)} + d2Rotated * (d2Color - ${s(i)}));`],["#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = d2PrismaticaEmission;`]],uniforms:["d2PrismaticaGradient","d2PrismaticaTime","d2SourceFromWorld"],limits:["Regular source surface only: dissolution/selection, D2 engine lighting and exposure are omitted.","Pattern anchored to the viewer model frame; float32 GPU arithmetic is not a pixel-equality claim."]}}var Nd=/^[a-f0-9]{64}\.(png|jpg|jpeg)$/,yt=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),Ls=Qt.clamp,ax=.04,qa=[1,-1],Ud={forward:[0,1,0],up:[0,0,1]},Fd=60,Us=1024,lx=.1,Or=64,cx=.04,Br=8192;function Ft(n,e){let t=typeof n=="string"?n.split(",").map(Number):Array.isArray(n)?n.map(Number):null;return!t||t.length<e||!t.slice(0,e).every(Number.isFinite)?null:t.slice(0,e)}function Td(n){let e=typeof n=="string"?n.split(",").map(Number):Array.isArray(n)?n.map(Number):null;return e&&e.length>=3&&e.length<=4&&e.every(Number.isFinite)?e:null}function Rn(n){let e=typeof n=="string"&&n.trim()?Number(n):n;return Number.isFinite(e)?e:null}function Ya(n){if(!yt(n)||n.format!==1)return null;let e=yt(n.assets)?n.assets:{},t=yt(n.binding)?n.binding:{},i=typeof n.selection=="string"&&n.selection!=="all",r=[],s=(b,E,S=!0,x=!1)=>{if(typeof E=="string")return e[E]?.kind===b?e[E]:(x&&i||r.push(`The preview binding names a missing ${b.replace("native-preview-","")} asset: ${E}.`),null);if(!S)return null;let A=Object.values(e).filter(T=>T?.kind===b);return A.length===1?A[0]:null},o=s("native-preview-motion",t.motion),a=s("native-preview-hands",t.hands??o?.hands,!0,!0),c=s("native-preview-environment",t.environment,!0,!0),l=s("native-preview-effects",t.effects,!1),h=s("native-preview-weapon-rig",t.weaponMaster,!1),u=null;h&&(Array.isArray(h.rig?.bones)&&h.rig.bones.length?u=h.rig.bones:r.push("Invalid native weapon master rig."));let f=yt(n.capabilities)?n.capabilities:{},p={hands:!!o&&(f.hands===!0||!!a),environment:f.environment===!0||!!c},g=[n.binding,n.materials,n.companions,o,l,h],v=null;n.materials!=null&&(yt(n.materials)&&n.materials.format===1&&Array.isArray(n.materials.materials)&&yt(n.materials.images)?v=n.materials:r.push("Invalid source preview materials."));let m=[];n.companions!=null&&(Array.isArray(n.companions)&&n.companions.length<=8&&n.companions.every(b=>yt(b)&&yt(b.surface)&&yt(b.rig))?m=n.companions:r.push("Invalid source companions."));let d=[];try{d=o?hx(o):[]}catch(b){r.push(`Motion: ${b.message}`)}return{binding:t,motion:o,hands:a,environment:c,effects:l,master:u,materials:v,companions:m,actions:d,errors:r,capabilities:p,key:g}}function Od(n,e){return Array.isArray(n)&&Array.isArray(e)&&n.length===e.length&&n.every((t,i)=>t===e[i])}function Bd(n){let e=Ft(n?.cameraAxes?.forward,3),t=Ft(n?.cameraAxes?.up,3);return e&&t?{forward:e,up:t}:Ud}function zd(n){let e={},t=[n?.materials,n?.hands,n?.environment,n?.effects];for(let i of Array.isArray(n?.companions)?n.companions:[])t.push(i,i?.materials);for(let i of t)yt(i?.images)&&Object.assign(e,i.images);return e}function fh(n,e,t=null){if(n?.format!==1||!Array.isArray(n.meshes))throw new Error("Invalid native preview surface.");let i=Array.isArray(n.bones)&&n.bones.length?n.bones:e?.bones?.map(o=>o.name),r=typeof t=="string"?t:t?.bone??t?.name??null,s=null;return{format:1,bones:i,meshes:n.meshes.map(o=>{let a=o?.weights;if(a==null&&Array.isArray(o?.positions)){if(s===null){let h=i?.indexOf(r)??-1;s=h>=0?h:0}a=o.positions.map(()=>[s,0,0,0,255,0,0,0])}let c=(Ft(o?.material?.color,3)??[1,1,1]).map(h=>Ls(h,0,1)),l=o?.material?.image;return{positions:o?.positions,normals:o?.normals,uv:o?.uv,indices:o?.indices,weights:a,material:Nd.test(l??"")?{color:c,opacity:1,image:l}:{color:c,opacity:1}}})}}function kd(n){if(n?.format!==1||!Number.isFinite(n.fps)||Math.abs(n.fps-30)>.01||typeof n.additive!="boolean"||!Number.isFinite(n.start)||!Number.isFinite(n.end)||n.start<0||n.end>4096||n.start>n.end||!yt(n.tracks))throw new Error("A source clip has an invalid native clock.");let e=Number.isFinite(n.playableStart)?n.playableStart:n.additive?Math.max(1,n.start):n.start;if(e<n.start||e>n.end)throw new Error("A source clip has no playable frames.");return{first:e,last:n.end,fps:n.fps,duration:(n.end-e)/n.fps}}function Ad(n){let e=kd(n);for(let t of Object.values(n.tracks)){if(typeof t?.name!="string")throw new Error("A source clip track has no bone name.");for(let[i,r,s]of[["rot","rtimes",4],["pos","ptimes",3]]){let o=t[i]??[],a=t[r]??[];if(!Array.isArray(o)||!Array.isArray(a)||o.length!==a.length)throw new Error("Source clip keys and times differ.");a.forEach((c,l)=>{if(!Number.isFinite(c)||l&&c<=a[l-1])throw new Error("Source clip key times must increase.");if(!Array.isArray(o[l])||o[l].length!==s||!o[l].every(Number.isFinite))throw new Error("Invalid source clip key.")})}}return e}function hx(n){if(!yt(n?.actions))return[];let e=yt(n.humanClips)?n.humanClips:{},t=yt(n.weaponClips)?n.weaponClips:{};for(let[i,r,s]of[["human",e,n.humanBase],["weapon",t,n.weaponBase]])if(s!=null&&!r[s])throw new Error(`The source ${i} base clip is missing.`);return Object.entries(n.actions).map(([i,r])=>{if(!yt(r))throw new Error("Invalid source action.");let s=r.human!=null?e[r.human]:null,o=r.weapon!=null?t[r.weapon]:null;if(r.human!=null&&!s||r.weapon!=null&&!o||!s&&!o)throw new Error(`The source action ${i} references a missing clip.`);let a=Math.max(s?Ad(s).duration:0,o?Ad(o).duration:0);return{id:i,label:typeof r.label=="string"&&r.label?r.label:i,human:!!s,weapon:!!o,loop:r.loop===!0,duration:a}})}function Cd(n,e,t){if(!n?.length)return null;let i=e.length-1;if(t<=e[0])return{a:n[0],b:n[0],t:0};if(t>=e[i])return{a:n[i],b:n[i],t:0};let r=0,s=i;for(;s-r>1;){let o=r+s>>1;e[o]<=t?r=o:s=o}return{a:n[r],b:n[s],t:(t-e[r])/(e[s]-e[r])}}var Wa=new dt,ux=new dt;function $a(n,e){let t=new Map;return n.forEach((i,r)=>{let s=e[r];t.set(i.name,{bone:i,position:new U().fromArray(s.position),rotation:new dt().fromArray(s.rotation).normalize()})}),t}function Yi(n){for(let{bone:e,position:t,rotation:i}of n.values())e.position.copy(t),e.quaternion.copy(i)}function Xa(n,e,t){if(!e)return;let i=kd(e),r=Ls(i.first+Math.max(0,t)*i.fps,i.first,i.last);for(let s of Object.values(e.tracks)){let o=n.get(s.name);if(!o)continue;let{bone:a}=o,c=Cd(s.rot,s.rtimes,r);c&&(Wa.fromArray(c.a).normalize().slerp(ux.fromArray(c.b).normalize(),c.t),Wa.normalize(),e.additive?a.quaternion.premultiply(Wa).normalize():a.quaternion.copy(Wa));let l=Cd(s.pos,s.ptimes,r);if(l){let h=l.a.map((u,f)=>Qt.lerp(u,l.b[f],l.t));e.additive?(a.position.x+=h[0],a.position.y+=h[1],a.position.z+=h[2]):a.position.fromArray(h)}}}function Vd(n,e,t,{hands:i,weapon:r}={}){let s=e?.human!=null?n.humanClips[e.human]:null,o=e?.weapon!=null?n.weaponClips[e.weapon]:null;i&&(Yi(i),n.humanBase!=null&&(!s||s.additive)&&Xa(i,n.humanClips[n.humanBase],0),Xa(i,s,t)),r&&(Yi(r),n.weaponBase!=null&&(!o||o.additive)&&Xa(r,n.weaponClips[n.weaponBase],0),Xa(r,o,t))}var Rd=new Ue,Pd=new Ue,fx=new U;function dh(n,e,t=Ud){let i=new U().fromArray(t.forward).normalize().negate(),r=new U().crossVectors(new U().fromArray(t.up),i).normalize(),s=new U().crossVectors(i,r).normalize();return Rd.makeBasis(r,s,i),n.updateWorldMatrix(!0,!1),Pd.multiplyMatrices(n.matrixWorld,Rd),Pd.decompose(e.position,e.quaternion,fx),e.updateMatrixWorld(!0),e}var dx=[["color",/^(diffuse|color|albedo|basecolor|image)$/],["normal",/^(normal|normals|normalmap|bumpmap|bump)$/],["specular",/^(specular|spec|specularcolor)$/],["roughness",/^(roughness)$/],["gloss",/^(gloss|glossiness|smoothness)$/],["opacity",/^(opacity|alpha)$/],["emissive",/^(emittance|emissive|emission|glow)$/]],px=new Set(["color","specular","emissive"]);function mx(n){let e=String(n??"").toLowerCase().replace(/[\s_-]/g,"");return dx.find(([,t])=>t.test(e))?.[0]??null}function uh(n,e){if(!Nd.test(e??""))return null;let t=Ft(n?.repeat??n?.tiling,2),i=Ft(n?.offset,2),r=Ft(n?.normalScale,2),s=[n?.alias,n?.projectImage,n?.sourceImage,...Array.isArray(n?.aliases)?n.aliases:[]].filter(c=>typeof c=="string"),o=n?.colorSpace==="srgb"||n?.colorSpace==="linear"?n.colorSpace:null,a=n?.filter==="nearest"?"nearest":null;return{image:e,repeat:t,offset:i,normalScale:r,aliases:s,space:o,filter:a,derived:n?.derived??null}}function Hd(n){if(!yt(n))throw new Error("Invalid source preview material.");return zr(n,n.native_slot)}function zr(n,e=n?.native_slot){let t=yt(n?.native)?n.native:{},i={};for(let a of Array.isArray(n?.textures)?n.textures:[]){let c=mx(a?.map??a?.Map),l=c&&!i[c]&&uh(a,a.image);l&&(i[c]=l)}for(let[a,c]of[["image","color"],["normal_image","normal"],["specular_image","specular"],["roughness_image","roughness"],["gloss_image","gloss"],["opacity_image","opacity"],["emittance_image","emissive"]]){let l=!i[c]&&uh(null,n?.[a]);l&&(i[c]=l)}let r=a=>typeof a=="string"&&a?a:null,s=r(n?.shader)??r(t.Shader),o=/^(vegetation|humanskin|glass)$/i.test(s??"")?xd({...n,shader:s}):null;return{slot:Number.isInteger(e)?e:null,shader:s,special:o,color:Ft(n?.color,3)??Ft(t.Diffuse,3),specular:Ft(n?.specular,3)??Ft(t.Specular,3),shininess:Rn(n?.shininess)??Rn(t.Shininess),opacity:Rn(n?.opacity)??Rn(t.Opacity)??1,alphaTest:Rn(n?.alphaTest)??Rn(t.AlphaTest)??0,emittance:Td(n?.emittance)??Td(t.Emittance??t.Emissive),publicParams:yt(n?.publicParams)?n.publicParams:yt(t.PublicParams)?t.PublicParams:{},maps:i}}function Fs(n){return Object.values(n?.maps??{}).map(e=>e.image)}function gx(n){let e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}function ph(n){let e=n?.width,t=n?.height,i=n?.data;if(!Number.isInteger(e)||!Number.isInteger(t)||e<1||t<1||e>Br||t>Br)throw new Error(`Images must be at most ${Br} pixels on each side.`);let r=e*t,s=i?.length/r;if(!ArrayBuffer.isView(i)||![1,2,3,4].includes(s))throw new Error("Invalid decoded image raster.");let o=i instanceof Uint8Array?i:new Uint8Array(i.buffer,i.byteOffset,i.byteLength);if(s===4)return{width:e,height:t,data:o};let a=new Uint8Array(r*4);for(let c=0;c<r;c++){let l=c*s,h=c*4;s<=2?(a[h]=a[h+1]=a[h+2]=o[l],a[h+3]=s===2?o[l+1]:255):(a[h]=o[l],a[h+1]=o[l+1],a[h+2]=o[l+2],a[h+3]=255)}return{width:e,height:t,data:a}}function mh(n,e=Us){let t=Math.min(1,e/Math.max(n.width,n.height));if(t>=1)return n;let i=n.width,r=n.height,s=n.data,o=Math.max(1,Math.round(i*t)),a=Math.max(1,Math.round(r*t)),c=new Uint8Array(o*a*4);for(let l=0;l<a;l++){let h=Math.floor(l*r/a),u=Math.max(h+1,Math.floor((l+1)*r/a));for(let f=0;f<o;f++){let p=Math.floor(f*i/o),g=Math.max(p+1,Math.floor((f+1)*i/o)),v=0,m=0,d=0,b=0;for(let x=h;x<u;x++)for(let A=p;A<g;A++){let T=(x*i+A)*4;v+=s[T],m+=s[T+1],d+=s[T+2],b+=s[T+3]}let E=(u-h)*(g-p),S=(l*o+f)*4;c[S]=Math.round(v/E),c[S+1]=Math.round(m/E),c[S+2]=Math.round(d/E),c[S+3]=Math.round(b/E)}}return{width:o,height:a,data:c}}async function gh(n,e,t){if(typeof t!="string"||!t)throw new Error(`Missing image: ${e}`);let i=String(e).split(".").at(-1).toLowerCase();if(i==="png")return ph(Si(gx(t)));if(i!=="jpg"&&i!=="jpeg")throw new Error(`Unsupported image type: ${e}`);let r=n.createElement("img"),s=new Promise((l,h)=>{r.onload=l,r.onerror=()=>h(new Error(`Cannot decode image: ${e}`))});if(r.src=`data:image/jpeg;base64,${t}`,await s,!r.naturalWidth||!r.naturalHeight||r.naturalWidth>Br||r.naturalHeight>Br)throw new Error(`Images must be at most ${Br} pixels on each side.`);let o=n.createElement("canvas");o.width=r.naturalWidth,o.height=r.naturalHeight;let a=o.getContext("2d");a.drawImage(r,0,0);let c=a.getImageData(0,0,o.width,o.height);return{width:o.width,height:o.height,data:new Uint8Array(c.data.buffer)}}function Za(n,{srgb:e=!1,nearest:t=!1,clampWrap:i=!1,anisotropy:r=1,repeat:s=null,offset:o=null}={}){let a=new yn(n.data,n.width,n.height,Mt,Kt);return a.flipY=!1,a.premultiplyAlpha=!1,a.colorSpace=e?Tt:vt,a.wrapS=a.wrapT=i?qt:pi,t?(a.magFilter=a.minFilter=ut,a.generateMipmaps=!1):(a.magFilter=At,a.minFilter=Jt,a.generateMipmaps=!0,a.anisotropy=r),s&&a.repeat.fromArray(s),o&&a.offset.fromArray(o),a.needsUpdate=!0,a}var Id=Promise.resolve();function vh(n){let e=Id.then(n);return Id=e.then(()=>{},()=>{}),e}var Ns=class{constructor(e,t,i={}){let{anisotropy:r=1,maxSize:s=Us}=typeof i=="number"?{anisotropy:i}:i;this.document=e,this.sources=t,this.anisotropy=r,this.maxSize=s,this.rasters=new Map,this.textures=new Map,this.shared=new Map}async load(e){let t=[...new Set(e)].filter(Boolean);for(let i of t){if(this.rasters.has(i))continue;let r=vh(()=>{if(!this.sources)throw new Error("Source preview images were released.");let s=this.sources[i],o=typeof s=="string"?this.shared.get(s):null;return o||gh(this.document,i,s).then(a=>{let c=mh(a,this.maxSize);return this.sources&&typeof s=="string"&&this.shared.set(s,c),c})});this.rasters.set(i,r),r.then(s=>{this.rasters.get(i)===r&&this.rasters.set(i,s)},()=>{this.rasters.get(i)===r&&this.rasters.delete(i)})}await Promise.all(t.map(i=>this.rasters.get(i)))}raster(e){let t=this.rasters.get(e);if(!t||typeof t.then=="function")throw new Error(`Source preview image is not decoded: ${e}`);return t}texture(e,t,i=""){let r=e.space?e.space==="srgb":px.has(t),s=[e.image,r,e.repeat,e.offset,e.filter,i].join("|");if(this.textures.has(s))return this.textures.get(s);let o=this.raster(e.image);if(i.startsWith("roughness:")||i.startsWith("inverted-gloss:")){let c=i.startsWith("inverted-gloss:"),l=Number(i.slice(c?15:10));o=Ha(o,{shininess:l,channel:"red",inverted:c})}let a=Za(o,{srgb:r,nearest:e.filter==="nearest",anisotropy:this.anisotropy,repeat:e.repeat,offset:e.offset});return this.textures.set(s,a),a}dispose(){for(let e of this.textures.values())e.dispose();this.textures.clear(),this.rasters.clear(),this.shared.clear(),this.sources=null}};function ja(n,e,{color:t,authored:i={},nativeTerms:r=!0,nativeDirect:s=!0,nativeEffect:o=null}={}){let a=t??n.color??[1,1,1],c=new Fi({color:new Be().setRGB(...a,ft),metalness:0,ior:1.5,specularIntensity:1,side:Ut});c.name=n.shader?`Native ${n.shader}`:"Native material",c.userData.publicParams=n.publicParams??{},n.specular&&c.specularColor.setRGB(...n.specular.map(m=>m/ax),ft);let l=n.shininess??null;c.roughness=Ls(1-(l??Or)/255,cx,1);let h=n.maps;if(c.map=i.color??(h.color?e.texture(h.color,"color"):null),c.normalMap=i.normal??(h.normal?e.texture(h.normal,"normal"):null),c.normalMap&&c.normalScale.fromArray(i.normal?qa:h.normal.normalScale??qa),c.specularColorMap=i.specular??(h.specular?e.texture(h.specular,"specular"):null),i.normal)c.roughnessMap=i.roughness??null,c.roughnessMap&&(c.roughness=1);else if(h.roughness){let m=h.roughness.derived==="1-gloss-alpha"?`inverted-gloss:${l??Or}`:"";c.roughnessMap=e.texture(h.roughness,"roughness",m),c.roughness=1}else h.gloss&&(c.roughnessMap=e.texture(h.gloss,"gloss",`roughness:${l??Or}`),c.roughness=1);let u=Ls(n.opacity,0,1);n.alphaTest>0&&(c.alphaTest=Ls(n.alphaTest,0,1)),u<1&&(c.transparent=!0,c.opacity=u,c.depthWrite=!1),/^vegetation$/i.test(n.shader??"")?c.userData.transmittanceMap=h.opacity?.image??null:h.opacity&&(u<1||n.alphaTest>0)&&(c.alphaMap=e.texture(h.opacity,"opacity"));let p=n.emittance;p?.length===4&&p[3]>0&&p.slice(0,3).some(m=>m>0)&&(c.emissive.setRGB(...p.slice(0,3),ft),c.emissiveIntensity=p[3]*lx,h.emissive&&(c.emissiveMap=e.texture(h.emissive,"emissive")));let g=o==="prismatica"&&/^SandboxPrismatica47_[0-9a-f]{12}$/.test(n.shader??""),v=n.special?.surfaceSupported??n.special?.supported;if(r&&(/^illum$/i.test(n.shader??"")||v||g)){let m=Rn(n.publicParams?.EmittanceMapGamma)??1;yd(c,{emittanceGamma:m,directBRDF:s,directLightScale:1/Math.PI}),c.userData.nativeIllumDirect=s,v&&(c.userData.nativeMissingPasses=[...n.special.missingPasses??[]],c.userData.nativeSpecial={recipe:n.special,opacityTexture:h.opacity?e.texture(h.opacity,"data"):null,opacityTransform:h.opacity?{repeat:h.opacity.repeat??[1,1],offset:h.opacity.offset??[0,0]}:void 0,opacityDefault:h.opacity?void 0:1})}return c.needsUpdate=!0,c}function vx(n){if(/keymag/i.test(n)||/_mag$/i.test(n))return 3;let e=/_(\d+)$/.exec(n);return e?Number(e[1]):null}function hh(n,e,t=null){let i=uh(n,n?.image);if(!i)throw new Error("A source effect image is missing.");return{...i,space:i.space??e,filter:i.filter??t}}function Gd(n){if(n==null)return null;if(!yt(n.materialEffects)||!yt(n.images))throw new Error("Invalid source effects.");let e=new Map;for(let[t,i]of Object.entries(n.materialEffects)){let r=vx(t);if(!Number.isInteger(r)||e.has(r)||!yt(i))throw new Error(`The source effect ${t} has no unique native slot.`);if(i.kind==="arcane-masked-noise-v1")ah(i.parameters),e.set(r,{name:t,kind:"arcane",slot:r,mask:hh(i.mask,"srgb"),noise:hh(i.noise,"srgb"),parameters:i.parameters,gain:Rn(i.presentationGain)??1,period:Rn(i.periodSeconds)>0?Rn(i.periodSeconds):Fr});else if(i.kind===Md)ch(i.parameters),e.set(r,{name:t,kind:"prismatica",slot:r,gradient:hh(i.gradient,"linear","nearest"),parameters:i.parameters,normalRepeat:Ft(i.normalRepeat,2)??[...rh.normalRepeat],roughness:Rn(i.roughness)??rh.roughness});else throw new Error(`The source effect ${t} has an unknown kind.`)}return{slots:e}}function yh(n,e){let t=new Map,i=n?.effectSlots;if(i==null)return t;if(!yt(i)||Array.isArray(i))throw new Error("effectSlots must be an object.");for(let[r,s]of Object.entries(i)){if(!/^(0|[1-9]\d{0,3})$/.test(r))throw new Error(`effectSlots key ${JSON.stringify(r)} is not a native slot number.`);let o=Number(r);if(!e.includes(o))throw new Error(`effectSlots names native slot ${o}, which this companion does not use.`);if(!Number.isInteger(s)||s<0||s>9999)throw new Error(`effectSlots value for slot ${o} is not a logical slot number.`);t.set(o,s)}return t}function Wd(n){return[...n?.slots.values()??[]].flatMap(e=>[e.mask,e.noise,e.gradient].filter(Boolean).map(t=>t.image))}function Xd(n,e){for(let t of n?.slots.values()??[]){if(!t.gradient)continue;let i=e.raster(t.gradient.image);if(i.width!==sh||i.height!==sh)throw new Error("Invalid Prismatica gradient image.")}}function qd(){return{arcaneTime:{value:0},prismaticaTime:{value:0},sourceFromWorld:{value:new Ue}}}function Dd(n,e,t,i=!1){let r=n.onBeforeCompile,s=n.customProgramCacheKey,o=(a,c,l)=>{if(i&&a.split(c).length!==2)throw Error(`Unsupported native source effect shader anchor: ${c}.`);return a.replace(c,l)};n.onBeforeCompile=function(a,c){i&&r.call(this,a,c);for(let[l,h]of e.vertex)a.vertexShader=o(a.vertexShader,l,h);for(let[l,h]of e.fragment)a.fragmentShader=o(a.fragmentShader,l,h);Object.assign(a.uniforms,t)},n.customProgramCacheKey=function(){return i?`${s.call(this)}|native-source-effect|${e.key}`:e.key},n.userData.effectLimits=e.limits,n.needsUpdate=!0}function _h(n,e,t,i,r,{authoredNormal:s=!1,nativeLighting:o=!1}={}){if(o&&!n.userData.nativeIllumDirect)throw Error("Native source effects require their original Illum lighting adapter.");if(e.kind==="arcane"){let a=lh(e.parameters,{presentationGain:e.gain});if(o){if(!/^illum$/i.test(t.shader??"")||!t.emittance||t.emittance[3]<=0)throw Error("Unsupported native Arcane emission recipe.");a=lh({...e.parameters,EmiMult:1},{presentationGain:1});let c=a.fragment.find(([h])=>h==="#include <emissivemap_fragment>"),l=/totalEmissiveRadiance = ([^;]+);$/.exec(c[1]);if(!l)throw Error("Unsupported native Arcane emission patch.");c[1]=c[1].slice(0,l.index)+`vec4 emissiveColor=vec4(${l[1]},1.0);
totalEmissiveRadiance=emissive*emissiveColor.rgb;`}Dd(n,a,{d2ArcaneMask:{value:i.texture(e.mask,"color")},d2ArcaneNoise:{value:i.texture(e.noise,"color")},d2ArcaneTime:r.arcaneTime},o)}else{if(n.roughnessMap=null,n.roughness=e.roughness,o){if(!/^SandboxPrismatica47_[0-9a-f]{12}$/.test(t.shader??""))throw Error("Unsupported native Prismatica shader source.");n.specularColor.setRGB(1,1,1,ft),n.specularColorMap=null}!s&&t.maps.normal&&(n.normalMap=i.texture({...t.maps.normal,repeat:e.normalRepeat},"normal")),Dd(n,Ed(e.parameters),{d2PrismaticaGradient:{value:i.texture(e.gradient,"data")},d2PrismaticaTime:r.prismaticaTime,d2SourceFromWorld:r.sourceFromWorld},o)}return n.userData.sourceEffect=e.name,n.userData.nativeSourceEffectLighting=o,n}function yx(){this.array=null}function _x(n){let e=Ft(n,16);return e?new Ue().set(...e):new Ue}function Yd(n,e){if(n?.format!==1||!Array.isArray(n.meshes)||n.meshes.length>4096)throw new Error("Invalid native environment.");let t=new En;t.name="Native environment (preview only)";let i=0,r=(o,a)=>{let c=o.positions?.length;if(i+=c||0,!c||c>1e6||i>4e6)throw new Error("The native environment exceeds the preview budget.");let l=[];for(let f of o.positions){if(!Array.isArray(f)||f.length!==3||!f.every(p=>Number.isFinite(p)&&Math.abs(p)<1e4))throw new Error("Invalid native environment position.");l.push(f[0],f[1],f[2])}if(!Array.isArray(o.indices)||!o.indices.length||o.indices.length%3||o.indices.some(f=>!Number.isInteger(f)||f<0||f>=c))throw new Error("Invalid native environment indices.");let h=new zt;h.setAttribute("position",new ht(l,3));for(let[f,p,g]of[["normals",3,"normal"],["uv",2,"uv"]]){let v=o[f];if(v!=null){if(v.length!==c||v.some(m=>!Array.isArray(m)||m.length!==p||!m.every(Number.isFinite)))throw new Error("The native environment streams differ in length.");h.setAttribute(g,new ht(v.flat(),p))}}h.attributes.normal||h.computeVertexNormals(),h.setIndex(o.indices),h.computeBoundingSphere();for(let f of[...Object.values(h.attributes),h.index])f.onUpload(yx);let u=new St(h,e(o,a));return u.name=`Native environment ${a+1}`,u.matrixAutoUpdate=!1,u.matrix.copy(_x(o.matrix)),t.add(u),u},s;try{s=n.meshes.map(r)}catch(o){throw xh(t),o}return t.rotation.x=-Math.PI/2,t.updateMatrixWorld(!0),{group:t,meshes:s}}var Ld=Object.freeze({sourceSha256:"04984d9c565e8e7e9a16565b8a5bba6f32b56aad53af8f7c312ae8d9537e4703",foot:Object.freeze([-7,9.482282867655158,.01477813720703125])}),Ja=1.565302848815918;function $d(n){let e=n?.sourcePlacement;if(e!==void 0){let o=Ft(e.groundLocal,3),a=Ft(e.orientationWXYZ,4);if(e.format!==1||e.sourcePins?.model?.sha256!==n.source?.sha256||!o||!a||Math.abs(Math.hypot(...a)-1)>1e-5)throw new Error("Invalid source environment placement.");return{spot:o.slice(0,2),floor:o[2],orientationWXYZ:a}}if(n?.source?.sha256===Ld.sourceSha256&&!n.viewpoint){let[o,a,c]=Ld.foot;return{spot:[o,a],floor:c}}let t=Ft(n?.bounds?.[0],3),i=Ft(n?.bounds?.[1],3),r=Ft(n?.viewpoint,2)??[0,0];return!t||!i?{spot:r,floor:0}:{spot:r.every((o,a)=>o>=t[a]&&o<=i[a])?r:[(t[0]+i[0])/2,(t[1]+i[1])/2],floor:0}}function Zd(n,e=0){if(!Ft(n?.spot,2)||!Number.isFinite(n.floor)||!Number.isFinite(e))throw new Error("Invalid source environment stand.");let[t,i,r,s]=n.orientationWXYZ??[1,0,0,0],a=new dt().setFromAxisAngle(new U(1,0,0),-Math.PI/2).multiply(new dt(i,r,s,t).invert());return{position:new U(n.spot[0],n.spot[1],n.floor+e).applyQuaternion(a).negate(),quaternion:a}}function xh(n){n&&(n.removeFromParent(),n.traverse(e=>{e.geometry?.dispose(),e.material&&e.material.dispose()}))}function Mh(n){if(!Array.isArray(n)||!n.length||n.length>4096)throw new Error("Expected a bounded native skeleton.");let e=new Set;return n.forEach((t,i)=>{if(!t||typeof t.name!="string"||!t.name||e.has(t.name)||!Number.isInteger(t.parent)||t.parent<-1||t.parent>=i)throw new Error("Keep unique native bone names and parent-first order.");for(let[s,o]of[["position",3],["rotation",4]])if(!Array.isArray(t[s])||t[s].length!==o||!t[s].every(Number.isFinite))throw new Error("Expected finite native bone transforms.");let r=t.rotation.reduce((s,o)=>s+o*o,0);if(Math.abs(r-1)>.002)throw new Error("Native bone quaternions must be normalized.");if(t.scale!==void 0&&(!Array.isArray(t.scale)||t.scale.length!==3||t.scale.some(s=>!Number.isFinite(s)||Math.abs(s-1)>1e-6)))throw new Error("Native pose mapping requires unit bone scales.");e.add(t.name)}),n}function xx(n){return new Ue().compose(new U().fromArray(n.position),new dt().fromArray(n.rotation).normalize(),new U(1,1,1))}function Sh(n){Mh(n);let e=[];return n.forEach(t=>{let i=xx(t);e.push(t.parent<0?i:new Ue().multiplyMatrices(e[t.parent],i))}),e}function jd(n,e){Mh(n),Mh(e);let t=e.map(r=>({...r,position:[...r.position],rotation:[...r.rotation]})),i=new Map(t.map((r,s)=>[r.name,s]));if(!n.some(r=>i.has(r.name)))throw new Error("The native master skeleton has no matching source bones.");return n.forEach(r=>{if(i.has(r.name))return;let s=r.parent<0?-1:i.get(n[r.parent].name);if(s===void 0)throw new Error("The native source extension has no parent.");i.set(r.name,t.length),t.push({...r,parent:s,position:[...r.position],rotation:[...r.rotation]})}),t}function Jd(n,e,t){let i=Sh(n),r=Sh(e),s=Sh(t),o=new Map(e.map((c,l)=>[c.name,l]));if(t.length!==e.length||t.some((c,l)=>c.name!==e[l].name||c.parent!==e[l].parent))throw new Error("The native pose hierarchy changed.");let a=[];return n.map((c,l)=>{let h=o.get(c.name);if(h===void 0)throw new Error("The native pose omits a skin bone.");let u=s[h].clone().multiply(r[h].clone().invert()).multiply(i[l]),f=c.parent<0?u.clone():a[c.parent].clone().invert().multiply(u);a.push(u);let p=new U,g=new dt,v=new U;return f.decompose(p,g,v),{name:c.name,parent:c.parent,position:p.toArray(),rotation:g.normalize().toArray()}})}var Sx=/^[a-f0-9]{64}\.(png|jpg|jpeg|bmp|tga|dds)$/,ip=["image","normal","specular"],Zi=Qt.clamp,Mx={default:Us,1024:1024,"2k":2048,2048:2048,full:8192},Kd=new Ue,bx=new U,bh=Object.freeze({min:.25,max:2,default:1.2});function Pn(n,e,t){if(!Array.isArray(n)||n.length!==e||!n.every(Number.isFinite))throw new Error(`${t} must contain ${e} finite numbers.`);return n}function ri(n){if(Pn(n,4,"Native rotation"),Math.abs(n.reduce((e,t)=>e+t*t,0)-1)>.002)throw new Error("Keep normalized native rotations.");return new dt(...n).normalize()}function wx(n,e=1,t=38){if(!(e>0)||!Number.isFinite(e)||!(t>0&&t<180))throw new Error("Invalid preview camera dimensions.");let i=n.isBox3?n:new un(new U(...Pn(n.min,3,"Bounds minimum")),new U(...Pn(n.max,3,"Bounds maximum")));if(i.isEmpty())throw new Error("The native surface has no bounds.");let r=i.getCenter(new U),s=Math.max(i.getSize(new U).length()/2,1e-4),o=Qt.degToRad(t)/2,a=Math.min(o,Math.atan(Math.tan(o)*e)),c=s/Math.sin(a)*1.18,l=new U(1,.42,.72).normalize();return{center:r.toArray(),radius:s,distance:c,position:r.clone().addScaledVector(l,c).toArray(),near:Math.max(s/1e3,1e-6),far:c+s*100,minDistance:s*.15,maxDistance:c*12}}function Ex(n,e,t){let[i,r]=Pn(Array.isArray(n)?n:[n.x,n.y],2,"UV");if(!(e>0&&t>0))throw new Error("Invalid paint image dimensions.");let s=o=>o-Math.floor(o);return{x:s(i)*e,y:s(r)*t}}function rp(n){return new Fi({color:new Be().setRGB(...n,ft),metalness:0,roughness:.46,specularIntensity:.65,side:Ut,transparent:!1,opacity:1})}function Eh(n,e,t=1){let i=new hs(n);return i.colorSpace=e==="normal"?vt:Tt,i.flipY=!1,i.wrapS=i.wrapT=pi,i.anisotropy=t,i}function Th(n,e=n?.map(t=>t.name)){if(!Array.isArray(n)||!n.length||!Array.isArray(e)||n.length!==e.length)throw new Error("The surface needs its complete native rig.");let t=new Set;n.forEach((i,r)=>{if(typeof i.name!="string"||!i.name||i.name!==e[r]||t.has(i.name))throw new Error("Keep the native bone names and order.");if(t.add(i.name),!Number.isInteger(i.parent)||i.parent<-1||i.parent>=r)throw new Error("Keep the parent-first native bone hierarchy.");Pn(i.position,3,"Native bone position"),ri(i.rotation)})}function Tx(n,e){let t=n.positions?.length;if(!t||t>65535)throw new Error("Invalid native vertex count.");for(let[i,r]of[["positions",3],["normals",3],["uv",2]]){if(n[i]?.length!==t)throw new Error("The native surface streams differ in length.");for(let s of n[i])Pn(s,r,`Native ${i}`)}if(n.positions.some(i=>i.some(r=>Math.abs(r)>3)))throw new Error("Keep the surface inside the native three metre bound.");if(n.normals.some(i=>i.reduce((r,s)=>r+s*s,0)<1e-12))throw new Error("The surface needs nonzero native normals.");if(!Array.isArray(n.indices)||!n.indices.length||n.indices.length%3||n.indices.some(i=>!Number.isInteger(i)||i<0||i>=t))throw new Error("Invalid native triangle indices.");if(n.weights?.length!==t||n.weights.some(i=>!Array.isArray(i)||i.length!==8||!i.every(Number.isInteger)||i.slice(0,4).some(r=>r<0||r>=e)||i.slice(4).some(r=>r<0||r>255)||i.slice(4).reduce((r,s)=>r+s,0)!==255))throw new Error("Keep four native bone indices and byte weights for every vertex.");if(Pn(n.material?.color,3,"Material color"),n.material.opacity!==1||n.material.color.some(i=>i<0||i>1))throw new Error("The native surface requires opaque material colors from zero to one.");for(let i of ip)if(n.material[i]&&!Sx.test(n.material[i]))throw new Error("Material images must use their content-addressed names.")}function wh(n,e){if(n?.format!==1||!Array.isArray(n.meshes)||!n.meshes.length||n.meshes.length>64)throw new Error("Invalid native surface.");Th(e?.bones,n.bones);let t=0,i=0;for(let l of n.meshes)Tx(l,e.bones.length),t+=l.positions.length,i+=l.indices.length/3;if(t>65535||i>15e4)throw new Error("The native surface exceeds the import budget.");let r=new En;r.name="Native source (preview axes only)";let s=e.bones.map(l=>{let h=new Sr;return h.name=l.name,h.position.fromArray(l.position),h.quaternion.copy(ri(l.rotation)),h});s.forEach((l,h)=>{let u=e.bones[h].parent;(u<0?r:s[u]).add(l)}),r.updateMatrixWorld(!0);let o=new ls(s),a=n.meshes.map((l,h)=>{let u=new zt;u.setAttribute("position",new ht(l.positions.flat(),3)),u.setAttribute("normal",new ht(l.normals.flat(),3)),u.setAttribute("uv",new ht(l.uv.flat(),2)),u.setAttribute("skinIndex",new Li(l.weights.flatMap(p=>p.slice(0,4)),4)),u.setAttribute("skinWeight",new ht(l.weights.flatMap(p=>p.slice(4).map(g=>g/255)),4)),u.setIndex(l.indices);let f=new Ui(u,rp(l.material.color));return f.name=`Native surface ${h+1}`,f.userData.meshIndex=h,f.bind(o,new Ue),r.add(f),f});r.rotation.x=-Math.PI/2,r.updateMatrixWorld(!0);let c={group:r,bones:s,skeleton:o,meshes:a};return kr(c),c}function kr(n){n.group.updateMatrixWorld(!0),n.skeleton.update();for(let e of n.meshes)e.computeBoundingBox(),e.computeBoundingSphere()}function $i(n){if(n){n.group.removeFromParent();for(let e of n.meshes)e.geometry.dispose(),e.material.dispose();n.skeleton.dispose()}}function Ax(n,{scale:e=[1,1,1],offset:t=[0,0,0]}={}){if(Pn(e,3,"Mesh scale"),Pn(t,3,"Mesh offset"),e.some(s=>s<.1||s>10)||t.some(s=>Math.abs(s)>3))throw new Error("Use positive scale from 0.1 to 10 and offsets within three metres.");let i=n.positions.map(s=>s.map((o,a)=>o*e[a]+t[a]));if(i.some(s=>s.some(o=>!Number.isFinite(o)||Math.abs(o)>3)))throw new Error("This edit exceeds the native three metre geometry bound.");let r=n.normals.map(s=>{let o=new U(...s.map((a,c)=>a/e[c]));if(o.lengthSq()<1e-12)throw new Error("A native normal cannot be zero.");return o.normalize().toArray()});return n.positions=i,n.normals=r,n}function Vr(n){if(n?.format!==1||n.fps!==30||typeof n.additive!="boolean"||!Number.isFinite(n.start)||!Number.isFinite(n.end)||n.start<0||n.end>4096||n.start>n.end)throw new Error("Keep the native CAF clock at 30 frames per second.");let e=n.additive?Math.max(1,n.start):n.start;if(e>n.end)throw new Error("This additive CAF has no playable frames.");return{first:e,last:n.end,fps:n.fps,duration:(n.end-e)/n.fps}}function sp(n,e){if(!Number.isFinite(e))throw new Error("Animation time must be finite.");let t=Vr(n);return Zi(t.first+Math.max(0,e)*t.fps,t.first,t.last)}function Qd(n,e){if(Vr(n),Th(n.bones),Th(e.bones),n.bones.length!==e.bones.length)throw new Error("This animation uses a different native rig.");n.bones.forEach((r,s)=>{let o=e.bones[s],a=ri(r.rotation),c=ri(o.rotation),l=a.toArray(),h=c.toArray(),u=Math.min(Math.max(...l.map((f,p)=>Math.abs(f-h[p]))),Math.max(...l.map((f,p)=>Math.abs(f+h[p]))));if(r.name!==o.name||r.parent!==o.parent||r.position.some((f,p)=>Math.abs(f-o.position[p])>2e-6)||u>2e-6)throw new Error("This animation uses a different native rig. Choose a matching preset.")});let t=new Set(e.bones.map(r=>r.name)),i=new Set;if(!n.tracks||!Object.keys(n.tracks).length)throw new Error("This CAF has no native controllers.");for(let r of Object.values(n.tracks)){if(!t.has(r.name)||i.has(r.name))throw new Error("This CAF has an unknown or duplicate native controller.");i.add(r.name);for(let[s,o,a]of[["rot","rtimes",4],["pos","ptimes",3]]){if(!Array.isArray(r[s])||!Array.isArray(r[o])||r[s].length!==r[o].length)throw new Error("CAF channel values and native key times must match.");r[o].forEach((c,l)=>{if(!Number.isFinite(c)||c<0||c>n.end||l&&c<=r[o][l-1])throw new Error("Keep increasing CAF keys inside the native clock.");if(Pn(r[s][l],a,"CAF key"),s==="rot")ri(r.rot[l]);else if(r.pos[l].some(h=>Math.abs(h)>3))throw new Error("Native animation translations must stay within three metres.")})}}return n}function ep(n,e,t,i,r=!1){if(!n.length)return[...i];let s=e.findIndex(a=>a>=t);if(s<0&&(s=e.length-1),s===0||t>=e.at(-1)||e[s]===t)return[...n[s]];let o=Zi((t-e[s-1])/(e[s]-e[s-1]),0,1);return r?ri(n[s-1]).slerp(ri(n[s]),o).toArray():n[s-1].map((a,c)=>Qt.lerp(a,n[s][c],o))}function Cx(n,e){let t=sp(n,e),i=new Map(Object.values(n.tracks).map(r=>[r.name,r]));return n.bones.map(r=>{let s=i.get(r.name);if(!s)return{position:[...r.position],rotation:[...r.rotation]};let o=ep(s.rot,s.rtimes,t,n.additive?[0,0,0,1]:r.rotation,!0),a=ep(s.pos,s.ptimes,t,n.additive?[0,0,0]:r.position);return n.additive?{position:a.map((c,l)=>c+r.position[l]),rotation:ri(o).multiply(ri(r.rotation)).normalize().toArray()}:{position:a,rotation:o}})}function Rx(n,e,t){let i=Cx(e,t);if(i.length!==n.bones.length)throw new Error("The animation rig differs from the loaded surface.");return n.bones.forEach((r,s)=>{r.position.fromArray(i[s].position),r.quaternion.fromArray(i[s].rotation)}),kr(n),i}function Qa(n,e,t){let i=n.createElement("canvas");return i.width=e,i.height=t,i}async function Ah(n,e,t){if(typeof t!="string"||!t)throw new Error(`Missing material image: ${e}`);let i=e.split(".").at(-1).toLowerCase();if(i==="dds")throw new Error("Convert this DDS author image to PNG before editing it.");if(i==="tga"){let c=Uint8Array.from(atob(t),p=>p.charCodeAt(0)),l=new Ps().parse(c.buffer),h=Qa(n,l.width,l.height),u=h.getContext("2d"),f=u.createImageData(l.width,l.height);return f.data.set(l.data),u.putImageData(f,0,0),h}let r=i==="jpg"||i==="jpeg"?"image/jpeg":`image/${i}`,s=n.createElement("img"),o=new Promise((c,l)=>{s.onload=c,s.onerror=()=>l(new Error(`Cannot decode material image: ${e}`))});if(s.src=`data:${r};base64,${t}`,await o,!s.naturalWidth||!s.naturalHeight||s.naturalWidth>8192||s.naturalHeight>8192)throw new Error("Material images must be at most 8192 pixels on each side.");let a=Qa(n,s.naturalWidth,s.naturalHeight);return a.getContext("2d").drawImage(s,0,0),a}async function Px(n,e,t){if(typeof t!="string"||!t)throw new Error(`Missing material image: ${e}`);let i=e.split(".").at(-1).toLowerCase();if(i==="dds")throw new Error("Convert this DDS author image to PNG before editing it.");if(i==="tga"){let r=new Ps().parse(Uint8Array.from(atob(t),s=>s.charCodeAt(0)).buffer);return ph({width:r.width,height:r.height,data:r.data})}if(i==="bmp"){let r=await Ah(n,e,t),s=r.getContext("2d").getImageData(0,0,r.width,r.height);return{width:r.width,height:r.height,data:new Uint8Array(s.data.buffer)}}return gh(n,e,t)}function tp(n,e,t){let i=Math.min(1,t/Math.max(e.width,e.height));if(i>=1)return e;let r=Qa(n,Math.max(1,Math.round(e.width*i)),Math.max(1,Math.round(e.height*i))),s=r.getContext("2d");return s.imageSmoothingQuality="high",s.drawImage(e,0,0,r.width,r.height),r}function np(n,e,t,i){let r=n.getContext("2d"),s=Ex(e,n.width,n.height);r.save(),r.globalAlpha=i.opacity,r.fillStyle=i.color;for(let o of[-n.width,0,n.width])for(let a of[-n.height,0,n.height]){let c=s.x+o,l=s.y+a;c+t<0||c-t>n.width||l+t<0||l-t>n.height||(r.beginPath(),r.arc(c,l,t,0,Math.PI*2),r.fill())}r.restore()}function Ka(n,e,t,i,{map:r=null,shininess:s=Or}={}){let o=["image","specular"].includes(e)&&r?.space!=="linear",a=JSON.stringify([e,o,s,r?.repeat,r?.offset]);if(!n.textures.has(a)){let l=e==="image"?n.view?Eh(n.view,"image",i):Za(n.raster,{srgb:o,anisotropy:i}):Za(e==="roughness"?Ha(n.raster,{shininess:s,channel:"alpha"}):n.raster,{srgb:o,anisotropy:i});l.colorSpace=o?Tt:vt,r?.repeat&&l.repeat.fromArray(r.repeat),r?.offset&&l.offset.fromArray(r.offset),n.textures.set(a,l)}let c=n.textures.get(a);return t.add(c),c}var el=class{constructor(e,{onPaint:t,onSelection:i,onError:r,onFrame:s,selectionOutline:o=!0}={}){if(this.selectionOutline=o,!e?.getContext)throw new Error("StudioViewer needs a canvas.");this.canvas=e,this.document=e.ownerDocument,this.window=this.document.defaultView,this.callbacks={onPaint:t,onSelection:i,onError:r,onFrame:s},this.disposed=!1,this.project=null,this.model=null,this.selectedIndex=-1,this.mode="orbit",this.brush={color:"#ef5c45",size:32,opacity:.8},this.images=new Map,this.imageEdits={},this.history=[],this.textureSet=new Set,this.time=0,this.duration=0,this.playing=!1,this.presetToken=null,this.raf=null,this.lastTick=null,this.loadGeneration=0,this.listeners=[],this.preview=null,this.previewGeneration=0,this.view="object",this.environmentMode="studio",this.sourceMotion=null,this.driver=null,this.weaponRig=null,this.authoredRig=null,this.objectCamera=null,this.effectsList=new Map,this.weaponBones=new Map,this.sourceEffectRemovers=[],this.effectPlayback=null,this.previewMaxSize=Us,this.resolutionGeneration=0,this.refreshGeneration=0,this.paintHandler=null,this.renderPipeline=null,this.scene=new ni,this.scene.background=new Be("#191d23"),this.camera=new Ot(38,1,1e-4,100),this.camera.position.set(1,.5,1),this.renderer=new Oa({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=$o,this.renderer.toneMappingExposure=bh.default,this.scene.add(new gs(14477306,7567750,2));for(let[a,c,l]of[[16773599,3,[2,3,3]],[12900858,2,[-3,1,1]],[16777215,2.5,[1,2,-3]]]){let h=new _s(a,c);h.position.fromArray(l),this.scene.add(h)}this.controls=new Va(this.camera,e),this.controls.enableDamping=!1,this.controls.screenSpacePanning=!0,this.controls.addEventListener("change",this._controlsChange=()=>this._requestFrame()),this.raycaster=new xs,this.pointer=new Pe,this.selectionBox=new Ss(new un,11782370),this.selectionBox.material.depthTest=!1,this.selectionBox.material.transparent=!0,this.selectionBox.material.opacity=.55,this.selectionBox.visible=!1,this.scene.add(this.selectionBox),this._listen(e,"pointerdown",a=>this._pointerDown(a)),this._listen(e,"pointermove",a=>this._pointerMove(a)),this._listen(e,"pointerup",a=>this._pointerUp(a)),this._listen(e,"pointercancel",a=>this._pointerUp(a)),this._listen(e,"lostpointercapture",a=>this._pointerUp(a)),this._listen(e,"webglcontextlost",a=>{a.preventDefault(),this.pause(),this._report(new Error("The 3D graphics context was lost. Reopen the project to restore the preview."))}),this._listen(this.document,"visibilitychange",()=>{this.lastTick=null,this.sourceMotion&&(this.sourceMotion.lastTick=null),this.document.hidden&&(this.effectPlayback=null),this.document.hidden?this._cancelFrame():this._requestFrame()}),this.window.ResizeObserver&&(this.resizeObserver=new this.window.ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e)),this.resize()}_listen(e,t,i){e.addEventListener(t,i),this.listeners.push(()=>e.removeEventListener(t,i))}_assertLive(){if(this.disposed)throw new Error("This viewer is disposed.")}_emit(e,t){if(this.disposed)return;let i={paint:"onPaint",selection:"onSelection",error:"onError",frame:"onFrame"},r=this.callbacks[i[e]];if(r)try{let s=r(t);s?.catch&&s.catch(o=>{e!=="error"&&this._report(o)})}catch(s){e!=="error"&&this._report(s)}this.window.CustomEvent&&this.canvas.dispatchEvent(new this.window.CustomEvent(`studio:${e}`,{detail:t}))}_report(e){this._emit("error",e instanceof Error?e:new Error(String(e)))}_cancelFrame(){this.raf!==null&&this.window.cancelAnimationFrame(this.raf),this.raf=null}_requestFrame(){this.disposed||this.document.hidden||this.raf!==null||(this.raf=this.window.requestAnimationFrame(e=>{if(this.raf=null,!(this.disposed||this.document.hidden)){try{this.playing&&(this.lastTick!==null&&(this.time=Math.min(this.duration,this.time+Math.max(0,e-this.lastTick)/1e3)),this.lastTick=e,this._applyPose(),this.time>=this.duration&&(this.playing=!1,this.lastTick=null));let t=this.sourceMotion;t?.playing&&(t.lastTick!==null&&(t.time+=Math.max(0,e-t.lastTick)/1e3),t.lastTick=e,t.time>=t.duration&&(t.loop&&t.duration>0?t.time%=t.duration:(t.time=t.duration,t.playing=!1,t.lastTick=null)),this._poseSource(!t.playing));let i=this.effectPlayback;if(i){let r=this.effectsList.get(i.id);if(!r)this.effectPlayback=null;else{let s=i.lastTick===null?0:Math.min(.25,Math.max(0,e-i.lastTick)/1e3);i.lastTick=e,this._advanceEffect(r,s)}}this.frame()}catch(t){this.playing=!1,this.sourceMotion&&(this.sourceMotion.playing=!1),this.effectPlayback=null,this._report(t)}(this.playing||this.sourceMotion?.playing||this.effectPlayback)&&this._requestFrame()}}))}async load(e){this._assertLive(),this._finishStroke();let t=++this.loadGeneration,i,r=new Set;try{i=wh(e.surface,e.rig);let{images:s}=await this._loadAuthoredImages(e,null);if(this.disposed||t!==this.loadGeneration)return $i(i),null;this._assignMaterials(i,e,s,r);for(let o of i.meshes)o.frustumCulled=!1;this.pause(),this.sourceMotion&&(this.sourceMotion.playing=!1,this.sourceMotion.lastTick=null),this._finishStroke(),$i(this.model);for(let o of this.textureSet)o.dispose();return this.textureSet=r,this.model=i,this.weaponBones=new Map(i.bones.map(o=>[o.name,o])),this.images=s,this.project=e,this._weaponRigs(),this.imageEdits={},this.history=[],this.presetToken=null,this.driver==="authored"&&(this.driver=null),this.time=0,this.duration=0,this.scene.add(i.group),this.view==="held"&&(i.group.matrixAutoUpdate=!1),this._attachCompanions(),this._poseSource(!0),this.selectMesh(0),this.fit(),this.frame(),this}catch(s){$i(i);for(let o of r)o.dispose();throw!this.disposed&&t===this.loadGeneration&&this._report(s),s}}_anisotropy(){return this.renderer?Math.min(8,this.renderer.capabilities.getMaxAnisotropy()):1}_weaponRigs(){if(this.authoredRig=this.weaponRig=this.weaponPose=null,!this.model||!this.project)return;let e=this.project.rig.bones;this.authoredRig=this.weaponRig=$a(this.model.bones,e);let t=this.preview?.master;if(t)try{let i=jd(e,t),r=i.map(s=>({name:s.name,position:new U().fromArray(s.position),quaternion:new dt().fromArray(s.rotation)}));this.weaponRig=$a(r,i),this.weaponPose={rest:i,posed:r}}catch(i){this._report(new Error(`Source rest pose: ${i.message}`))}}async _loadAuthoredImages(e,t){let i=this.previewMaxSize,r=new Map,s=c=>{if(!c||c.limit===i)return c??null;let l={...c,limit:i,raster:null,preparing:null,textures:new Map,view:c.canvas?tp(this.document,c.canvas,i):null};return r.set(c,l),l},o=new Map;for(let c of e.surface.meshes)for(let l of ip){let h=c.material[l];h&&(o.has(h)||o.set(h,new Set),o.get(h).add(l))}let a=new Map;for(let[c,l]of o){let h=s(t?.get(c))??{image:c,limit:i,raster:null,canvas:null,view:null,preparing:null,textures:new Map,dirty:!1};!h.raster&&(l.has("normal")||l.has("specular")||!h.view)&&(h.raster=await vh(async()=>mh(await Px(this.document,c,e.images?.[c]),i))),a.set(c,h)}return e.surface.meshes.forEach((c,l)=>{let h=t?.get(`mesh:${l}`);h&&!c.material.image&&a.set(`mesh:${l}`,s(h))}),{images:a,remap:r}}_assignMaterials(e,t,i,r){let s=this.preview,o=new Set,a=this._anisotropy();e.meshes.forEach((c,l)=>{let h=t.surface.meshes[l],u=h.native_slot??h.material.native_slot,f=s?.slots.get(u),p=f?.shininess??Or,g={},v=h.material.image?i.get(h.material.image):i.get(`mesh:${l}`);(v?.view||v?.raster)&&(g.color=Ka(v,"image",r,a,{map:f?.maps.color}));let m=h.material.normal?i.get(h.material.normal):null;m?.raster&&(g.normal=Ka(m,"normal",r,a,{map:f?.maps.normal}),g.roughness=Ka(m,"roughness",r,a,{map:f?.maps.normal,shininess:p}));let d=h.material.specular?i.get(h.material.specular):null;d?.raster&&(g.specular=Ka(d,"specular",r,a,{map:f?.maps.specular}));let b;if(f){let S=s.primaryEffects?s.primaryEffects.get(u):u,x=s.effects?.slots.get(S),A=!!(x&&this.renderPipeline?.nativeSourceLighting);b=ja(f,s.cache,{color:h.material.color,authored:g,nativeTerms:!x||A,nativeDirect:!0,nativeEffect:A?x.kind:null}),x&&_h(b,x,f,s.cache,s.uniforms,{authoredNormal:!!g.normal,nativeLighting:A})}else s?.slots.size&&o.add(u),b=rp(h.material.color),g.color&&(b.map=g.color),g.normal&&(b.normalMap=g.normal,b.normalScale.fromArray(qa),b.roughnessMap=g.roughness,b.roughness=1),g.specular&&(b.specularColorMap=g.specular);let E=c.material;c.material=b,E&&E!==b&&E.dispose()}),o.size&&this._report(new Error(`The source preview has no material for native slot ${[...o].join(", ")}.`))}async refreshMaterials(e=this.project){if(this._assertLive(),!this.model||!e||e.surface?.meshes?.length!==this.model.meshes.length)throw new Error("Load the project before refreshing its maps.");let t=this.loadGeneration,i=++this.refreshGeneration,r;try{r=await this._loadAuthoredImages(e,this.images)}catch(h){throw!this.disposed&&t===this.loadGeneration&&i===this.refreshGeneration&&this._report(h),h}if(this.disposed||t!==this.loadGeneration||i!==this.refreshGeneration)return null;let{images:s,remap:o}=r;this._finishStroke();let a=new Set;this._assignMaterials(this.model,e,s,a);let c=new Set([...s.values()].flatMap(h=>[...h.textures.values()]));for(let h of this.textureSet)c.has(h)||h.dispose();for(let h of a)c.has(h)||h.dispose();this.textureSet=c;let l=new Set(s.values());return this.history=this.history.flatMap(h=>{let u=o.get(h.entry)??h.entry;return l.has(u)?[{...h,entry:u}]:[]}),this.images=s,this.project=e,this._requestFrame(),this._preparePaint(),this}async setPreviewAssets(e){this._assertLive();let t=++this.previewGeneration,i=this.preview,r=[],s=[],o=()=>this.disposed||t!==this.previewGeneration,a=()=>{for(let f of r)this._disposeUnit(f)},c=null,l=null,h=!1,u={hands:null,environment:null};try{if(c=e==null?null:Ya(e),c){if(h=!!i&&Od(i.key,c.key),l=h?i:await this._buildBase(c),h||(r.push(l),s.push(...l.errors)),o())return a(),null;for(let f of["hands","environment"]){let p=c[f];if(!p)continue;if(h&&i[f]?.asset===p){u[f]=i[f];continue}let g=f==="hands"?await this._buildHands(c,l,s):await this._buildEnvironment(c,l,s);if(g&&r.push(g),o())return a(),null;u[f]=g}}}catch(f){return a(),o()||this._report(f),null}return h?(this._swapParts(u),this._render()):this._installPreview(l,u),s.length&&this._report(new Error(`Source preview is incomplete. ${s.join(" ")}`)),l?this.previewInfo():null}_render(){if(!this.disposed)try{this.frame()}catch(e){this._report(e)}}_cache(e){return new Ns(this.document,e,{anisotropy:this._anisotropy(),maxSize:this.previewMaxSize})}async _loadUnit(e,t){await e.cache.load(t);for(let i of t)e.imageNames.add(i)}_dress(e,t,i,r=null){let s={meshes:t,recipes:i,effects:r};t.forEach((o,a)=>{let c=o.material;o.material=this._partMaterial(e,s,a),c.dispose(),o.frustumCulled=!1}),e.parts.push(s)}_partMaterial(e,t,i){let r=t.effects?.[i],s=!!(r&&this.renderPipeline?.nativeSourceLighting),o=ja(t.recipes[i],e.cache,{nativeTerms:!r||s,nativeEffect:s?r.kind:null});return r&&_h(o,r,t.recipes[i],e.cache,e.uniforms,{nativeLighting:s}),o}async _buildBase(e){let t=zd({materials:e.materials,effects:e.effects,companions:e.companions}),i={key:e.key,capabilities:{...e.capabilities},cache:this._cache(t),materials:e.materials,slots:new Map,errors:[...e.errors],motion:e.actions.length?e.motion:null,actions:e.actions,binding:e.binding,master:e.master,hands:null,environment:null,eye:null,companions:[],effects:null,uniforms:qd(),parts:[],imageNames:new Set};i.capabilities.hands&&=!!i.motion;let r=s=>this._loadUnit(i,s);try{if(e.materials){for(let s of e.materials.materials){let o=Hd(s);o.slot!==null&&!i.slots.has(o.slot)&&i.slots.set(o.slot,o)}await r([...i.slots.values()].flatMap(Fs))}}catch(s){i.slots.clear(),i.errors.push(`Materials: ${s.message}`)}if(e.effects&&i.slots.size)try{let s=Gd(e.effects);await r(Wd(s)),Xd(s,i.cache),i.effects=s}catch(s){i.errors.push(`Effects: ${s.message}`)}if(e.binding.primaryEffectSlots!==void 0){i.primaryEffects=yh({effectSlots:e.binding.primaryEffectSlots},[...i.slots.keys()]);for(let s of i.primaryEffects.values())if(!i.effects?.slots.has(s))throw new Error("The editable part names an unavailable source effect.")}for(let s of e.companions){let o;try{let a=Array.isArray(s.materials)?s.materials:Array.isArray(s.materials?.materials)?s.materials.materials:[],c=s.surface.meshes.map(u=>{let f=u?.native_slot??u?.material?.native_slot,p=a.find(g=>g?.native_slot===f);return p?zr(p,f):zr(u?.material,f)}),l=yh(s,c.map(u=>u.slot));if(l.size&&!i.effects&&!e.effects)throw new Error("effectSlots needs source effects, and this preview has none.");for(let u of l.values())if(i.effects&&!i.effects.slots.has(u))throw new Error(`effectSlots names logical slot ${u}, which has no source effect.`);let h=i.effects&&l.size?c.map(u=>i.effects.slots.get(l.get(u.slot))??null):null;await r(c.flatMap(Fs)),o=wh(fh(s.surface,s.rig,s.attachment),s.rig),o.group.name=`Source companion ${s.id??i.companions.length+1} (preview only)`,o.group.rotation.set(0,0,0),o.group.updateMatrixWorld(!0),this._dress(i,o.meshes,c,h),i.companions.push({id:String(s.id??i.companions.length+1),model:o,parents:s.rig.bones.map(u=>u.parent),relative:[]})}catch(a){$i(o),i.parts=i.parts.filter(c=>c.meshes!==o?.meshes),i.errors.push(`Companion ${s.id??""}: ${a.message}`)}}return i}_partSources(e,t,i){let r=e&&typeof e=="object"?{...e}:{};for(let s of t)!r[s]&&i.cache.sources?.[s]&&(r[s]=i.cache.sources[s]);return r}async _buildHands(e,t,i){let r=e.hands,s=t.motion,o=t.binding??{};if(!s)return i.push("Hands: this template has no source motion."),null;let a={kind:"hands",asset:r,cache:null,model:null,parts:[],imageNames:new Set};try{let c=r.surface.meshes.map(g=>zr(g.material,g.native_slot??g.material?.native_slot)),l=c.flatMap(Fs);a.cache=this._cache(this._partSources(r.images,l,t)),await this._loadUnit(a,l),a.model=wh(fh(r.surface,r.rig),r.rig),a.model.group.name="Native hands (preview only)";let h=$a(a.model.bones,r.rig.bones),u=s.socket??o.socket??(o.family==="knife"?r.knifeSocket:r.gunSocket),f=h.get(u)?.bone,p=h.get(r.cameraBone)?.bone;if(!f||!p)throw new Error("The hands rig has no weapon socket or camera bone.");return this._dress(a,a.model.meshes,c),a.model.group.visible=!1,Object.assign(a,{rig:h,socket:f,camera:p,axes:Bd(r),fov:Number.isFinite(r.fov)?r.fov:Fd,eye:p.getWorldPosition(new U).y}),a}catch(c){return this._disposeUnit(a),i.push(`Hands: ${c.message}`),null}}async _buildEnvironment(e,t,i){let r=e.environment,s={kind:"environment",asset:r,cache:null,group:null,meshes:[],parts:[],imageNames:new Set};try{let a=(r.surface?.meshes??[]).map(h=>zr(h.material,h.native_slot??h.material?.native_slot)),c=a.flatMap(Fs);s.cache=this._cache(this._partSources(r.images,c,t)),await this._loadUnit(s,c);let l=Yd(r.surface,(h,u)=>ja(a[u],s.cache));return s.parts.push({meshes:l.meshes,recipes:a}),l.group.visible=!1,Object.assign(s,l,$d(r),{label:typeof r.label=="string"&&r.label?r.label:"Game room"}),s}catch(o){return this._disposeUnit(s),i.push(`Environment: ${o.message}`),null}}_installPreview(e,t={}){let i=this.preview;if(this.view==="held"&&this.setViewMode("object"),this.environmentMode==="native"&&this.setEnvironment("studio"),this.sourceMotion&&(this.sourceMotion=null),this.driver==="source"&&(this.driver=null),this.preview=e,e)for(let r of["hands","environment"])this._attachPart(r,t[r]??null);this._placeEnvironment(),this._registerSourceEffects(e),this._attachCompanions(),this.model&&this.project&&(this._weaponRigs(),this._assignMaterials(this.model,this.project,this.images,this.textureSet),this.authoredRig&&Yi(this.authoredRig),this.presetToken?this._applyPose():kr(this.model)),this._disposePreview(i),this._render()}_swapParts(e){let t=this.preview,i=this.view==="held";i&&e.hands!==t.hands&&this.setViewMode("object"),this.environmentMode==="native"&&!e.environment&&this.setEnvironment("studio");for(let r of["hands","environment"])this._attachPart(r,e[r]);i&&e.hands&&this.view!=="held"&&this.setViewMode("held"),this._placeEnvironment()}_attachPart(e,t){let i=this.preview,r=i[e];if(r!==t){if(i[e]=t,t){let s=e==="hands"?t.model.group:t.group;e==="hands"?(i.eye=t.eye,s.visible=this.view==="held"):s.visible=this.environmentMode==="native",this.scene.add(s)}r&&this._disposeUnit(r)}}_disposeUnit(e){if(e){if(e.kind==="hands")$i(e.model);else if(e.kind==="environment")xh(e.group);else{for(let t of["hands","environment"])this._disposeUnit(e[t]),e[t]=null;for(let t of e.companions??[])$i(t.model);e.slots.clear(),e.materials=null,e.motion=null,e.companions=[],e.effects=null,e.master=null,e.key=null,e.binding=null}e.cache?.dispose(),e.imageNames.clear(),e.parts=[],e.asset=null,e.model=null,e.group=null,e.meshes=[]}}_disposePreview(e){this._disposeUnit(e)}_attachCompanions(){for(let e of this.preview?.companions??[])this.model?this.model.group.add(e.model.group):e.model.group.removeFromParent()}_syncCompanions(){let e=this.preview?.companions;if(!e?.length||!this.model)return;this.model.group.updateMatrixWorld(!0);let t=Kd.copy(this.model.group.matrixWorld).invert();for(let i of e){let r=i.relative;i.model.bones.forEach((s,o)=>{let a=i.parents[o],c=this.weaponBones.get(s.name);r[o]??=new Ue,c?(r[o].multiplyMatrices(t,c.matrixWorld),(a<0?r[o].clone():r[a].clone().invert().multiply(r[o])).decompose(s.position,s.quaternion,bx)):(s.updateMatrix(),a<0?r[o].copy(s.matrix):r[o].multiplyMatrices(r[a],s.matrix))}),i.model.group.updateMatrixWorld(!0)}}_placeEnvironment(){let e=this.preview?.environment;if(!e)return;let t=this.preview.hands?.eye??this.preview.eye??Ja,i=Zd(e,this.view==="held"?0:t);e.group.position.copy(i.position),e.group.quaternion.copy(i.quaternion),e.group.updateMatrixWorld(!0)}async setPreviewResolution(e="default"){this._assertLive();let t=Mx[e];if(!t)throw new Error("Choose the default, 2k or full preview resolution.");let i=this.preview,r=i?[i,i.hands,i.environment].filter(Boolean):[];if(t===this.previewMaxSize&&r.every(l=>l.cache.maxSize===t))return t;this.previewMaxSize=t;let s=++this.resolutionGeneration,o=this.previewGeneration,a=[];try{for(let l of r){let h=new Ns(this.document,l.cache.sources,{anisotropy:this._anisotropy(),maxSize:t});a.push(h),await h.load([...l.imageNames])}}catch(l){for(let h of a)h.dispose();return!this.disposed&&s===this.resolutionGeneration&&this._report(l),null}if(this.disposed||s!==this.resolutionGeneration||o!==this.previewGeneration||this.preview!==i){for(let l of a)l.dispose();return null}let c=r.map(l=>l.cache);r.forEach((l,h)=>{l.cache=a[h];for(let u of l.parts)u.meshes.forEach((f,p)=>{let g=f.material;f.material=this._partMaterial(l,u,p),g.dispose()})}),this.model&&this.project&&this._assignMaterials(this.model,this.project,this.images,this.textureSet);for(let l of c)l.dispose();return this._requestFrame(),this.model&&this.project&&(!await this.refreshMaterials().catch(()=>null)||s!==this.resolutionGeneration)?null:(this._render(),t)}previewInfo(){let e=this.preview;return{materials:!!e?.slots.size,held:!!e?.hands,capabilities:{hands:!!e?.capabilities.hands,environment:!!e?.capabilities.environment},environment:e?.environment?e.environment.label:null,companions:e?.companions.map(t=>t.id)??[],actions:this.sourceActions(),effects:this.listEffects(),view:this.view,scene:this.environmentMode,resolution:this.previewMaxSize}}setViewMode(e){if(this._assertLive(),!["object","held"].includes(e))throw new Error("Choose the object or held view.");if(e==="held"&&!this.preview?.hands)throw new Error("This template has no source hands preview.");if(e===this.view)return this.view;this._finishStroke();let t=this.camera;if(e==="held")this.objectCamera={position:t.position.clone(),quaternion:t.quaternion.clone(),target:this.controls.target.clone(),near:t.near,far:t.far,fov:t.fov},this.view="held",this.preview.hands.model.group.visible=!0,this.model&&(this.model.group.matrixAutoUpdate=!1),this.controls.enabled=!1,t.fov=this.preview.hands.fov,t.near=.01,t.far=500,t.updateProjectionMatrix();else{this.view="object",this.preview?.hands&&(this.preview.hands.model.group.visible=!1),this.model&&(this.model.group.matrixAutoUpdate=!0,this.model.group.updateMatrix());let i=this.objectCamera;i&&(t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.near=i.near,t.far=i.far,t.fov=i.fov,t.updateProjectionMatrix(),this.controls.target.copy(i.target)),this.controls.enabled=this.mode==="orbit",this.controls.update(),this.model&&this.authoredRig&&this.driver!=="source"&&(Yi(this.authoredRig),this.presetToken&&this._applyPose())}return this._placeEnvironment(),this._poseSource(!0),this.model&&kr(this.model),this._requestFrame(),this.view}setEnvironment(e){if(this._assertLive(),!["studio","native"].includes(e))throw new Error("Choose the studio or native environment.");if(e==="native"&&!this.preview?.environment)throw new Error("This template has no native environment preview.");return this.environmentMode=e,this.preview?.environment&&(this.preview.environment.group.visible=e==="native"),this._requestFrame(),e}setExposure(e){if(this._assertLive(),!Number.isFinite(e))throw new Error("Exposure must be a finite number.");return this.renderer.toneMappingExposure=Zi(e,bh.min,bh.max),this._requestFrame(),this.renderer.toneMappingExposure}get exposure(){return this.renderer.toneMappingExposure}sourceActions(){let e=this.preview,t=!!(e?.hands||e?.capabilities.hands);return(e?.motion?e.actions:[]).filter(i=>t||i.weapon).map(i=>({...i}))}_sourceState(){let e=this.sourceMotion;return e?{id:e.id,time:e.time,duration:e.duration,playing:e.playing,loop:e.loop}:null}sourceState(){return this._sourceState()}selectSourceAction(e){this._assertLive();let t=this.sourceActions().find(i=>i.id===e);if(!t)throw new Error("Choose a source action.");return this.playing=!1,this.lastTick=null,this.driver="source",this.sourceMotion={id:e,time:0,duration:t.duration,loop:t.loop,playing:!1,lastTick:null},this._poseSource(!0),this._requestFrame(),this._sourceState()}playSourceAction(e=this.sourceMotion?.id){this._assertLive(),(!this.sourceMotion||e!==this.sourceMotion.id)&&this.selectSourceAction(e);let t=this.sourceMotion;return this.playing=!1,this.driver="source",t.time>=t.duration&&(t.time=0),t.playing=t.duration>0,t.lastTick=null,this._requestFrame(),this._sourceState()}pauseSourceAction(){return this.sourceMotion&&(this.sourceMotion.playing=!1,this.sourceMotion.lastTick=null,this._poseSource(!0)),this.disposed||this._requestFrame(),this._sourceState()}seekSourceAction(e){if(this._assertLive(),!Number.isFinite(e))throw new Error("Animation time must be finite.");let t=this.sourceMotion;if(!t)throw new Error("Choose a source action.");return this.playing=!1,this.driver="source",t.time=Zi(e,0,t.duration),t.lastTick=null,this._poseSource(!t.playing),this._requestFrame(),this._sourceState()}_poseSource(e=!1){let t=this.preview;if(!t?.motion||!this.model||!this.weaponRig)return;let i=this.view==="held"?t.hands:null,r=this.sourceMotion,s=r?t.motion.actions[r.id]:null,o=this.driver==="source"||i&&this.driver!=="authored"?this.weaponRig:null;if(!(!i&&!o)){if(Vd(t.motion,s,r?.time??0,{hands:i?.rig,weapon:o}),o&&this.weaponPose){let{rest:a,posed:c}=this.weaponPose,l=a.map((u,f)=>({...u,position:c[f].position.toArray(),rotation:c[f].quaternion.toArray()})),h=Jd(this.project.rig.bones,a,l);this.model.bones.forEach((u,f)=>{u.position.fromArray(h[f].position),u.quaternion.fromArray(h[f].rotation)})}if(i&&(i.model.group.updateMatrixWorld(!0),this.model.group.matrix.copy(i.socket.matrixWorld),this.model.group.matrixWorldNeedsUpdate=!0,dh(i.camera,this.camera,i.axes)),e){if(kr(this.model),i){i.model.skeleton.update();for(let a of i.model.meshes)a.computeBoundingSphere()}}else this.model.group.updateMatrixWorld(!0)}}registerEffect(e){if(this._assertLive(),typeof e?.id!="string"||typeof e.update!="function")throw new Error("An effect needs an ID and an update function.");let t={id:e.id,label:e.label||e.id,update:e.update,advance:typeof e.advance=="function"?e.advance:null,duration:Number.isFinite(e.duration)&&e.duration>0?e.duration:1,progress:0};return this.effectsList.set(e.id,t),()=>{this.effectsList.get(t.id)===t&&(this.effectsList.delete(t.id),this.effectPlayback?.id===t.id&&(this.effectPlayback=null))}}listEffects(){return[...this.effectsList?.values()??[]].map(({id:e,label:t,duration:i})=>({id:e,label:t,duration:i}))}_registerSourceEffects(e){for(let i of this.sourceEffectRemovers)i();this.sourceEffectRemovers=[],this.effectPlayback=null;let t=new Map;for(let i of e?.effects?.slots.values()??[])t.has(i.kind)||t.set(i.kind,i);for(let[i,r]of t){let s=e.uniforms,o=i==="arcane"?r.period:Fr,a={seconds:0},c=l=>{a.seconds=l,i==="arcane"?s.arcaneTime.value=bd(l):s.prismaticaTime.value=wd(l)};this.sourceEffectRemovers.push(this.registerEffect({id:`source-${i}`,label:i==="arcane"?"Arcane emission":"Prismatica surface",duration:o,update:l=>c(l*o),advance:l=>c(a.seconds+l)}))}}_advanceEffect(e,t){e.advance?e.advance(t,this):(e.progress=(e.progress+t/e.duration)%1,e.update(e.progress,this))}setEffectProgress(e,t){this._assertLive();let i=this.effectsList.get(e);if(!i||!Number.isFinite(t))throw new Error("Choose an effect and a finite progress.");this.effectPlayback=null,i.progress=Zi(t,0,1),i.update(i.progress,this),this._requestFrame()}playEffect(e=this.listEffects()[0]?.id){if(this._assertLive(),!this.effectsList.has(e))throw new Error("Choose an effect.");return this.effectPlayback={id:e,lastTick:null},this._requestFrame(),this.effectState()}pauseEffect(){return this.effectPlayback=null,this.effectState()}effectState(){let e=this.effectPlayback;return e?{id:e.id,playing:!0}:{id:null,playing:!1}}setTexturePaintHandler(e){if(this._assertLive(),e!==null&&typeof e!="function")throw new Error("The paint handler must be a function or null.");this._finishStroke(),this.paintHandler=e,this._preparePaint()}_itemBounds(){let e=new un;if(!this.model)return e;this._syncCompanions();for(let t of this.model.meshes)e.union(t.boundingBox.clone().applyMatrix4(t.matrixWorld));for(let t of this.preview?.companions??[])for(let i of t.model.meshes)i.computeBoundingBox(),e.union(i.boundingBox.clone().applyMatrix4(i.matrixWorld));return e}_prepareFrame(){if(!this.model)return;this._syncCompanions();let e=this.preview?.effects?this.preview.uniforms:null;if(e){if(this.renderPipeline?.nativeSourceLighting){e.sourceFromWorld.value.fromArray(oh).multiply(this.renderPipeline.nativeWorldFromView({view:this.view,eye:this.preview?.hands?.eye??this.preview?.eye??Ja}));return}this.model.group.updateMatrixWorld(),e.sourceFromWorld.value.fromArray(oh).multiply(Kd.copy(this.model.group.matrixWorld).invert())}}resize(){if(this.disposed)return;let e=this.canvas.getBoundingClientRect(),t=Math.max(1,Math.round(e.width||this.canvas.clientWidth||1)),i=Math.max(1,Math.round(e.height||this.canvas.clientHeight||1));this.renderer.setPixelRatio(Math.min(this.window.devicePixelRatio||1,2)),this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this._requestFrame()}fit(){if(this._assertLive(),!this.model)return;if(this.view==="held"&&this.preview?.hands)return dh(this.preview.hands.camera,this.camera,this.preview.hands.axes),this._requestFrame(),null;let e=wx(this._itemBounds(),this.camera.aspect,this.camera.fov);return this.camera.position.fromArray(e.position),this.camera.near=e.near,this.camera.far=e.far,this.camera.updateProjectionMatrix(),this.controls.target.fromArray(e.center),this.controls.minDistance=e.minDistance,this.controls.maxDistance=e.maxDistance,this.controls.update(),this._requestFrame(),e}_state(){let e=this.project?.animations?.[this.presetToken];return{time:this.time,duration:this.duration,playing:this.playing,token:this.presetToken,frame:e?sp(e,this.time):null,source:this.sourceMotion?this._sourceState():null,view:this.view??"object"}}frame(){this._assertLive();let e=!!(this.selectionOutline!==!1&&this.model&&this.selectedIndex>=0&&this.model.meshes.length>1&&this.view!=="held"&&!this.sourceMotion?.playing);if(this.selectionBox.visible=e,e){let i=this.model.meshes[this.selectedIndex];this.selectionBox.box.copy(i.boundingBox).applyMatrix4(i.matrixWorld)}this._prepareFrame(),this.renderPipeline?this.renderPipeline.render(this.renderer,this.scene,this.camera,{view:this.view,eye:this.preview?.hands?.eye??this.preview?.eye??Ja}):this.renderer.render(this.scene,this.camera);let t=this._state();return this._emit("frame",t),t}setMode(e){if(this._assertLive(),!["orbit","paint"].includes(e))throw new Error("Choose orbit or paint mode.");return this._finishStroke(),this.mode=e,this.controls.enabled=e==="orbit"&&this.view!=="held",this.canvas.style.cursor=e==="paint"?"crosshair":"grab",this._preparePaint(),this}_preparePaint(e=this.selectedIndex){if(this.disposed||this.paintHandler||this.mode!=="paint"||!this.model||!this.project||e<0)return null;let t=this.model.meshes[e]?this._paintTarget(e):null;if(!t||t.canvas)return Promise.resolve(t??null);if(!t.preparing){let i=this.loadGeneration;t.preparing=Ah(this.document,t.image,this.project.images?.[t.image]).then(r=>{if(t.preparing=null,this.disposed||i!==this.loadGeneration||![...this.images.values()].includes(t))return null;t.canvas=r,t.view=tp(this.document,r,t.limit);let s=t.textures.get("image"),o=Eh(t.view,"image",this._anisotropy());if(t.textures.set("image",o),this.textureSet.add(o),s){for(let a of this.model.meshes)a.material.map===s&&(a.material.map=o);this.textureSet.delete(s),s.dispose()}return this._requestFrame(),t},r=>(t.preparing=null,!this.disposed&&i===this.loadGeneration&&this._report(r),null))}return t.preparing}setBrush(e){this._assertLive();let t={...this.brush,...e};if(!/^#[\da-f]{6}$/i.test(t.color)||!Number.isFinite(t.size)||t.size<1||t.size>256||!Number.isFinite(t.opacity)||t.opacity<0||t.opacity>1)throw new Error("Use a hex paint color, size from 1 to 256 and opacity from zero to one.");return this.brush=t,{...t}}_mesh(e){if(!this.model||!Number.isInteger(e)||!this.model.meshes[e])throw new Error("Select an existing native surface.");return this.model.meshes[e]}selectMesh(e){return this._assertLive(),e!==-1&&this._mesh(e),this.selectedIndex=e,this.selectionBox.visible=this.selectionOutline!==!1&&e>=0&&this.model.meshes.length>1,this._preparePaint(e),this._emit("selection",e),this._requestFrame(),e}setMaterial(e,t){this._assertLive();let i=this._mesh(e);if(Object.keys(t).some(o=>!["color","opacity"].includes(o)))throw new Error("This native material editor supports opaque diffuse color.");let r=this.project.surface.meshes[e].material,s=t.color??r.color;if(typeof s=="string"&&/^#[\da-f]{6}$/i.test(s)&&(s=new Be(s).toArray()),Pn(s,3,"Material color"),s.some(o=>o<0||o>1)||(t.opacity??1)!==1)throw new Error("The native receiver supports opaque colors from zero to one.");return r.color=[...s],i.material.color.setRGB(...s,ft),this._requestFrame(),r}transformMesh(e,t){this._assertLive();let i=this._mesh(e),r=this.project.surface.meshes[e];return Ax(r,t),i.geometry.attributes.position.array.set(r.positions.flat()),i.geometry.attributes.normal.array.set(r.normals.flat()),i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.normal.needsUpdate=!0,kr(this.model),this._requestFrame(),this.project}play(e=this.presetToken){if(this._assertLive(),!this.model||!e||!Object.hasOwn(this.project.animations||{},e))throw new Error("Select a native animation preset.");let t=this.project.animations[e];return Qd(t,this.project.rig),(e!==this.presetToken||this.time>=this.duration)&&(this.time=0),this.presetToken=e,this.driver="authored",this.sourceMotion&&(this.sourceMotion.playing=!1,this.sourceMotion.lastTick=null),this.duration=Vr(t).duration,this.playing=this.duration>0,this.lastTick=null,this._applyPose(),this._requestFrame(),this._state()}pause(){return this.playing=!1,this.lastTick=null,this.disposed||this._requestFrame(),this._state()}seek(e){if(this._assertLive(),!Number.isFinite(e))throw new Error("Animation time must be finite.");if(!this.presetToken){let t=Object.keys(this.project?.animations||{})[0];if(!t)throw new Error("This project has no native animation preset.");Qd(this.project.animations[t],this.project.rig),this.presetToken=t,this.duration=Vr(this.project.animations[t]).duration}return this.time=Zi(e,0,this.duration),this.lastTick=null,this.driver="authored",this.sourceMotion&&(this.sourceMotion.playing=!1,this.sourceMotion.lastTick=null),this._applyPose(),this._requestFrame(),this._state()}_applyPose(){this.model&&this.presetToken&&Rx(this.model,this.project.animations[this.presetToken],this.time)}_hit(e,t){if(!this.model)return null;let i=this.canvas.getBoundingClientRect();return!i.width||!i.height||e<i.left||t<i.top||e>i.right||t>i.bottom?null:(this.pointer.set((e-i.left)/i.width*2-1,-(t-i.top)/i.height*2+1),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(this.model.meshes,!1)[0]||null)}_paintTarget(e){let t=this.model.meshes[e].material.map;for(let r of this.images.values())if(r.textures.get("image")===t&&t)return r;let i=this.project.surface.meshes[e].material.image;return i?this.images.get(i)??null:null}_paintEntry(e){let t=this._paintTarget(e);if(t||this.project.surface.meshes[e].material.image)return t;let i=this.model.meshes[e].material.map,r=`mesh:${e}`;if(!this.images.has(r)){let s=i?.image,o=s?.width||512,a=s?.height||512,c=Qa(this.document,o,a),l=c.getContext("2d");if(s?.data&&s.width){let u=l.createImageData(o,a);u.data.set(s.data),l.putImageData(u,0,0)}else s?.width?l.drawImage(s,0,0):(l.fillStyle="#ffffff",l.fillRect(0,0,o,a));let h=Eh(c,"image",this._anisotropy());this.textureSet.add(h),this.model.meshes[e].material.map=h,this.model.meshes[e].material.needsUpdate=!0,this.images.set(r,{canvas:c,view:c,raster:null,limit:this.previewMaxSize,preparing:null,textures:new Map([["image",h]]),image:null,key:r,dirty:!1})}return this.images.get(r)}_pointerDown(e){if(!(this.disposed||this.undoing||e.button!==0||!this.model))try{let t=this._hit(e.clientX,e.clientY);if(this.clickStart={x:e.clientX,y:e.clientY},this.mode!=="paint"||!t?.uv)return;e.preventDefault();let i=t.object.userData.meshIndex;if(this.selectMesh(i),this.paintHandler){let s=this._pressure(e);this.stroke={handler:this.paintHandler,index:i,pointerId:e.pointerId,x:e.clientX,y:e.clientY,pressure:s,gap:!1,points:[{u:t.uv.x,v:t.uv.y,pressure:s}]},this.canvas.setPointerCapture?.(e.pointerId);return}let r=this._paintEntry(i);if(!r)throw new Error("This surface image is not loaded. Reopen the project.");if(!r.canvas){this._preparePaint(i),this._report(new Error("Getting the full-size image ready for painting. Drag again in a moment."));return}this.stroke={index:i,entry:r,pointerId:e.pointerId,x:e.clientX,y:e.clientY,before:r.canvas.toDataURL("image/png"),changed:!1,wasDirty:r.dirty},this.canvas.setPointerCapture?.(e.pointerId),this._dab(t.uv)}catch(t){this._report(t)}}_pressure(e){return Number.isFinite(e.pressure)&&e.pressure>0?Zi(e.pressure,0,1):.5}_dab(e){let{entry:t}=this.stroke;if(this.brush.opacity===0)return;let i=this.brush.size/2,{canvas:r,view:s}=t;np(r,e,i,this.brush),s&&s!==r&&np(s,e,i*s.width/r.width,this.brush),t.dirty=!0,this.stroke.changed=!0;let o=t.textures.get("image");o&&(o.needsUpdate=!0),this._requestFrame()}_pointerMove(e){let t=this.stroke;if(!(!t||e.pointerId!==t.pointerId))try{e.preventDefault();let i=Math.min(48,Math.max(1,Math.ceil(Math.hypot(e.clientX-t.x,e.clientY-t.y)/3)));if(t.handler){let r=this._pressure(e);for(let s=1;s<=i&&t.points.length<2e4;s++){let o=s/i,a=this._hit(Qt.lerp(t.x,e.clientX,o),Qt.lerp(t.y,e.clientY,o));if(!a?.uv||a.object.userData.meshIndex!==t.index){t.gap=!0;continue}let c={u:a.uv.x,v:a.uv.y,pressure:Qt.lerp(t.pressure,r,o)};t.gap&&(c.break=!0,t.gap=!1),t.points.push(c)}t.x=e.clientX,t.y=e.clientY,t.pressure=r;return}for(let r=1;r<=i;r++){let s=r/i,o=this._hit(Qt.lerp(t.x,e.clientX,s),Qt.lerp(t.y,e.clientY,s));o?.uv&&o.object.userData.meshIndex===t.index&&this._dab(o.uv)}t.x=e.clientX,t.y=e.clientY}catch(i){this._finishStroke(),this._report(i)}}_pointerUp(e){if(!this.disposed){if(this.stroke&&e.pointerId===this.stroke.pointerId)this._finishStroke();else if(this.mode==="orbit"&&this.clickStart&&e.type==="pointerup"&&Math.hypot(e.clientX-this.clickStart.x,e.clientY-this.clickStart.y)<4){let t=this._hit(e.clientX,e.clientY);t&&this.selectMesh(t.object.userData.meshIndex)}this.clickStart=null}}_finishStroke(){if(!this.stroke)return;let e=this.stroke;if(this.stroke=null,this.canvas.hasPointerCapture?.(e.pointerId)&&this.canvas.releasePointerCapture(e.pointerId),e.handler){if(!e.points.length||this.disposed)return;let{color:t,size:i,opacity:r}=this.brush;try{let s=e.handler({meshIndex:e.index,points:e.points,brush:{color:t,size:i,opacity:r}});s?.catch&&s.catch(o=>this._report(o))}catch(s){this._report(s)}return}if(e.changed){for(this.history.push(e);this.history.length>8||this.history.reduce((t,i)=>t+i.before.length,0)>32*1024*1024;)this.history.shift();this._publishPaint(e.entry,e.index)}}_publishPaint(e,t){let i=e.canvas.toDataURL("image/png").split(",")[1],r=e.image||e.key;this.imageEdits[r]=i;let s=this.model.meshes.flatMap((o,a)=>o.material.map===e.textures.get("image")?[a]:[]);this._emit("paint",{meshIndex:t,meshIndices:s,image:e.image,key:r,base64:i})}async undoPaint(){if(this._assertLive(),this.undoing)return!1;this._finishStroke();let e=this.history.pop();if(!e)return!1;let t=this.loadGeneration;this.undoing=!0;try{let i=await Ah(this.document,"undo.png",e.before.split(",")[1]);if(this.disposed||t!==this.loadGeneration)return!1;let{entry:r}=e,s=r.canvas.getContext("2d");if(s.clearRect(0,0,i.width,i.height),s.drawImage(i,0,0),r.view&&r.view!==r.canvas){let a=r.view.getContext("2d");a.clearRect(0,0,r.view.width,r.view.height),a.drawImage(r.canvas,0,0,r.view.width,r.view.height)}e.entry.dirty=e.wasDirty;let o=r.textures.get("image");return o&&(o.needsUpdate=!0),this._publishPaint(e.entry,e.index),this._requestFrame(),!0}finally{this.undoing=!1}}getImageEdits(){this._assertLive();let e={...this.imageEdits};for(let t of this.images.values())t.dirty&&(e[t.image||t.key]=t.canvas.toDataURL("image/png").split(",")[1]);return e}snapshot(){return this._assertLive(),this.frame(),this.canvas.toDataURL("image/png")}dispose(){if(!this.disposed){this._finishStroke(),this.playing=!1,this.disposed=!0,++this.loadGeneration,this._cancelFrame(),this.resizeObserver?.disconnect();for(let e of this.listeners)e();this.listeners=[],this.controls.removeEventListener("change",this._controlsChange),this.controls.dispose(),this.renderPipeline?.dispose(),this.renderPipeline=null,$i(this.model),this.model=null,this._disposePreview(this.preview),this.preview=null,this.sourceMotion=null,this.effectsList.clear(),this.sourceEffectRemovers=[],this.effectPlayback=null,this.paintHandler=null,this.weaponBones=new Map;for(let e of this.textureSet)e.dispose();this.textureSet.clear(),this.images.clear(),this.history=[],this.imageEdits={},this.selectionBox.geometry.dispose(),this.selectionBox.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.project=null,this.presetToken=null,this.callbacks={}}}};var Ix=Object.freeze({lutMember:"EngineAssets/Shading/environmentBRDF.dds",lutSha256:"23be59c728fe347a56abd2287e88e3b5bc933c8309a8cd082ea1bff1184e7254",tiledShaderSha256:"ca3110953591a7db9f6acb1481bb7437d4268fdc4b89b7ee0b87e4421d8bcce1",sampler:"TiledShading.cfi:149-153,737,929-931; shadeLib.cfi:79",size:128,maxMip:6,threeRevision:"180"});function Dx(n){if(n?.width!==128||n.height!==128||!(n.data instanceof Uint16Array)||n.data.length!==16384*2)throw new Error("Expected native 128x128 RG16 LUT.");return n}function cp(n){if(n?.format!==1||n.kind!=="native-environment-brdf-lut"||n.width!==128||n.height!==128||n.components!==2||n.type!=="uint16"||n.normalized!==!0||n.colorSpace!=="linear"||n.byteOrder!=="little"||n.rowOrder!=="source"||n.filter!=="linear-clamp"||n.source?.sha256!==Ix.lutSha256||n.source?.dxgi!==35||typeof n.data!="string"||n.data.length!==Math.ceil(16384*4/3)*4||!/^[A-Za-z0-9+/]+={0,2}$/.test(n.data))throw new Error("Invalid native environment LUT document.");let e=atob(n.data);if(e.length!==16384*4)throw new Error("Native environment LUT byte count differs.");let t=new Uint16Array(e.length/2);for(let i=0;i<t.length;i++)t[i]=e.charCodeAt(i*2)|e.charCodeAt(i*2+1)<<8;return{width:128,height:128,data:t,source:{...n.source}}}function tl(n,e=!1){if(!Array.isArray(n)||n.length!==3||!n.every(t=>Number.isFinite(t)&&(!e||t>0)))throw new Error("Expected a finite native spatial vector.");return n}function Lx(n,e=!1){if(!n||Object.keys(n).some(t=>!["center","halfSize","nativeOrigin"].includes(t)))throw new Error("Invalid native projection box.");return tl(n.center),tl(n.halfSize,!0),(e||n.nativeOrigin!==void 0)&&tl(n.nativeOrigin),n}var Nx=`
vec3 cryBoxProjectedDirection(vec3 position,vec3 reflection,vec3 center,vec3 halfSize) {
  vec3 ray=normalize(reflection);
  vec3 point=position-center;
  vec3 furthest=mix(-halfSize,halfSize,greaterThan(ray,vec3(0.0)));
  vec3 distanceToPlane=(furthest-point)/ray;
  // Analytic ray/AABB limit for exactly parallel axes, not an origin offset.
  distanceToPlane=mix(distanceToPlane,vec3(1.0e30),equal(ray,vec3(0.0)));
  float distance=min(min(distanceToPlane.x,distanceToPlane.y),distanceToPlane.z);
  return point+ray*distance;
}
float cryProbeVolumeWeight(vec3 position,vec3 center,vec3 halfSize,float falloffMax,float uniformWeight) {
  vec3 point=(center-position)/halfSize;
  if(max(max(abs(point.x),abs(point.y)),abs(point.z))>=1.0) return 0.0;
  vec3 q=point*point;
  vec3 mapped=point*sqrt(max(vec3(0.0),vec3(1.0)-0.5*(q.yzx+q.zxy)+(q.yzx*q.zxy)/3.0));
  float value=clamp(clamp(1.0-dot(mapped,mapped),0.0,1.0)/falloffMax,0.0,1.0);
  return value*value*(3.0-2.0*value)*uniformWeight;
}
`,Ux=`
vec3 cryNativeCubeSample(highp samplerCube sourceCube,vec3 direction,float lod,float maximumMip) {
  float level=clamp(lod,0.0,maximumMip);
  float first=floor(level);
  float second=min(first+1.0,maximumMip);
  return mix(textureLod(sourceCube,direction,first).rgb,textureLod(sourceCube,direction,second).rgb,fract(level));
}
`;function Fx(n){Dx(n);let e=new Uint8Array(n.width*n.height*4);for(let t=0;t<n.width*n.height;t++){let i=n.data[t*2],r=n.data[t*2+1];e[t*4]=i>>>8,e[t*4+1]=i&255,e[t*4+2]=r>>>8,e[t*4+3]=r&255}return{width:n.width,height:n.height,data:e}}function Ox(n){let e=Fx(n),t=new yn(e.data,e.width,e.height,Mt,Kt);return t.name="Native environment BRDF RG16 packed as RGBA8",t.colorSpace=vt,t.flipY=!1,t.premultiplyAlpha=!1,t.magFilter=t.minFilter=ut,t.wrapS=t.wrapT=qt,t.generateMipmaps=!1,t.unpackAlignment=1,t.needsUpdate=!0,t}var Rh=["+X","-X","+Y","-Y","+Z","-Z"];function Ph(n,e){if(n?.format!==1||n.kind!=="native-hdr-cube"||!["rgba16f-le","rgba32f-le"].includes(n.encoding)||n.colorSpace!=="linear"||n.rowOrder!=="dds-source"||JSON.stringify(n.faceOrder)!==JSON.stringify(Rh)||!Array.isArray(n.mips)||n.mips.length<1||n.mips.length>11)throw new Error("Invalid native HDR cube.");let t=n.encoding==="rgba16f-le",i=t?8:16,r=n.mips[0]?.width;if(!Number.isInteger(r)||r<1||r>1024||(r&r-1)!==0||n.mips.length>Math.log2(r)+1)throw new Error("Invalid native HDR cube dimensions.");let s=n.mips.map((o,a)=>{let c=Math.max(1,r>>a);if(o.level!==a||o.width!==c||o.height!==c||!Array.isArray(o.faces)||o.faces.length!==6)throw new Error("Invalid native HDR mip layout.");let l=o.faces.map((h,u)=>{if(h.face!==Rh[u]||typeof h.file!="string"||!/^[a-zA-Z0-9_./-]+$/.test(h.file)||h.file.startsWith("/")||h.file.split("/").includes("..")||!/^[a-f0-9]{64}$/.test(h.sha256)||h.size!==c*c*i)throw new Error("Invalid native HDR face reference.");let f=e instanceof Map?e.get(h.file):e?.[h.file];if(!(f instanceof Uint8Array)||f.length!==h.size)throw new Error("Native HDR face bytes differ.");let p=new DataView(f.buffer,f.byteOffset,f.byteLength),g=t?new Uint16Array(f.length/2):new Float32Array(f.length/4);for(let v=0;v<g.length;v++){let m=t?p.getUint16(v*2,!0):p.getFloat32(v*4,!0);if(t?(m&31744)===31744:!Number.isFinite(m))throw new Error("Non-finite native HDR sample.");g[v]=m}return g});return{width:c,height:c,faces:l}});return{encoding:n.encoding,mips:s,source:n.source}}function Ih(n){let e=n?.mips?.[0]?.width;if(!n?.mips?.length||n.mips.length>11||!Number.isInteger(e)||e<1||e>1024||(e&e-1)!==0||n.mips.length>Math.log2(e)+1||!["rgba16f-le","rgba32f-le"].includes(n.encoding))throw new Error("Invalid decoded native HDR cube.");let t=n.encoding==="rgba16f-le",i=t?nn:Ct,r=n.mips.map((o,a)=>{if(o.width!==Math.max(1,n.mips[0].width>>a)||o.height!==o.width||o.faces.length!==6)throw new Error("Invalid decoded native HDR mip.");return o.faces.map(c=>{if(!(t?c instanceof Uint16Array:c instanceof Float32Array)||c.length!==o.width*o.height*4)throw new Error("Invalid decoded native HDR face.");return new yn(c,o.width,o.height,Mt,i)})}),s=new Ni(r[0]);return s.type=i,s.format=Mt,s.internalFormat=t?"RGBA16F":"RGBA32F",s.colorSpace=vt,s.flipY=!1,s.premultiplyAlpha=!1,s.generateMipmaps=!1,s.unpackAlignment=1,s.minFilter=r.length>1?Jt:At,s.magFilter=At,s.wrapS=s.wrapT=qt,s.mipmaps=r.slice(1).map(o=>({image:o})),s.userData.nativeHDR={encoding:n.encoding,mipCount:r.length,faceOrder:[...Rh],source:n.source},s.needsUpdate=!0,s.addEventListener("dispose",()=>{for(let o of r)for(let a of o)a.dispose()}),s}function op(n){if(!Array.isArray(n)||n.length!==9||!n.every(Number.isFinite))throw new Error("Declare a finite worldToCry rotation matrix.");let e=new Ve().fromArray(n);for(let t=0;t<3;t++)for(let i=0;i<3;i++){let r=0;for(let s=0;s<3;s++)r+=n[t*3+s]*n[i*3+s];if(Math.abs(r-(t===i?1:0))>1e-5)throw new Error("worldToCry must be orthonormal.")}if(Math.abs(e.determinant()-1)>1e-5)throw new Error("worldToCry must be a proper rotation, without an undeclared mirror.");return e}var Bx=`
uniform sampler2D cryEnvironmentBRDF;
float cryProbeSmoothness;
vec2 cryProbeTexel(ivec2 coordinate) {
  ivec2 bounded = clamp(coordinate,ivec2(0),ivec2(127));
  vec4 bytes = floor(texelFetch(cryEnvironmentBRDF,bounded,0)*255.0+0.5);
  return (bytes.rb*256.0+bytes.ga)/65535.0;
}
vec2 cryProbeLUT(vec2 uv) {
  vec2 pixel = clamp(uv,0.0,1.0)*128.0-0.5;
  ivec2 origin = ivec2(floor(pixel));
  vec2 fraction = fract(pixel);
  return mix(mix(cryProbeTexel(origin),cryProbeTexel(origin+ivec2(1,0)),fraction.x),
             mix(cryProbeTexel(origin+ivec2(0,1)),cryProbeTexel(origin+ivec2(1,1)),fraction.x),fraction.y);
}
`;function ap(n,e,t){if(n.split(e).length!==2)throw new Error(`Unsupported Three r180 environment shader: ${e}.`);return n.replace(e,t)}function lp(n,e=!1,t=!1){let i="void RE_IndirectSpecular_Physical(";if(n.split(i).length!==2)throw new Error("Unsupported Three r180 indirect specular function.");let r=n.indexOf(i),s=n.indexOf("{",r);if(s<0)throw new Error("Missing indirect specular body.");let o=1,a=s+1;for(;a<n.length&&o;)n[a]==="{"&&o++,n[a]==="}"&&o--,a++;if(o!==0)throw new Error("Invalid indirect specular body.");let c=e?`
    vec3 nativeWorldNormal = inverseTransformDirection(geometryNormal,viewMatrix);
    vec3 nativeWorldReflection = inverseTransformDirection(reflect(-geometryViewDir,geometryNormal),viewMatrix);
    vec3 nativeNormal = normalize(cryWorldToCry * nativeWorldNormal);
    vec3 nativeReflection = normalize(cryWorldToCry * nativeWorldReflection);
    ${t?`vec3 nativePosition=cryWorldToCry*(transpose(mat3(viewMatrix))*geometryPosition+cameraPosition)+cryNativeOrigin;
    nativeReflection=cryBoxProjectedDirection(nativePosition,nativeReflection,cryProbeBoxCenter,cryProbeBoxHalfSize);`:""}
    float nativeLod = min(6.0*(1.0-cryProbeSmoothness),cryProbeMaximumMip);
    vec3 nativeRadiance = cryNativeCubeSample(cryProbeSpecular,nativeReflection,nativeLod,cryProbeMaximumMip) * cryProbeColor * cryProbeMultipliers.y;
    vec3 nativeIrradiance = textureLod(cryProbeDiffuse,nativeNormal,0.0).rgb * cryProbeColor * cryProbeMultipliers.x;
  `:`vec3 nativeRadiance = radiance;
       vec3 nativeIrradiance = irradiance * RECIPROCAL_PI;`;return n.slice(0,s+1)+c+`
    // Native tiled reflectance LUT replaces Three's DFG/multiscattering here.
    vec2 nativeEnvironment = cryProbeLUT(vec2(dot(geometryNormal,geometryViewDir),cryProbeSmoothness));
    vec3 nativeReflectance = mix(nativeEnvironment.xxx,nativeEnvironment.yyy,material.specularColor);
    reflectedLight.indirectSpecular += nativeRadiance * nativeReflectance;
    // Preserve the incoming Three irradiance convention, not native probe
    // convolution. Native diffuse conservation is applied exactly once here.
    float nativeDiffuse = saturate(1.0-dot(material.specularColor,vec3(0.2126,0.7152,0.0722)));
    reflectedLight.indirectDiffuse += material.diffuseColor * nativeDiffuse * nativeIrradiance;
  }`+n.slice(a)}var Ch=new WeakSet;function zx(n,{lut:e,probe:t=null}={}){if(!n?.isMeshPhysicalMaterial||n.clearcoat||n.sheen||n.iridescence||n.anisotropy||n.transmission)throw new Error("Native probe terms require plain Illum physical material.");if(Ch.has(n))throw new Error("Native probe terms already installed.");let i=null;if(t!==null){if(!t.specular?.isCubeTexture||!t.diffuse?.isCubeTexture||!t.specular.userData.nativeHDR||!t.diffuse.userData.nativeHDR||!Array.isArray(t.color)||t.color.length!==3||!t.color.every(l=>Number.isFinite(l)&&l>=0)||![t.diffuseMultiplier,t.specularMultiplier].every(l=>Number.isFinite(l)&&l>=0))throw new Error("Declare source HDR probe textures, colour and both multipliers.");i={cryProbeSpecular:{value:t.specular},cryProbeDiffuse:{value:t.diffuse},cryWorldToCry:{value:op(t.worldToCry)},cryProbeColor:{value:new Float32Array(t.color)},cryProbeMultipliers:{value:new Float32Array([t.diffuseMultiplier,t.diffuseMultiplier*t.specularMultiplier])},cryProbeMaximumMip:{value:t.specular.userData.nativeHDR.mipCount-1}},t.boxProjection!==void 0&&(Lx(t.boxProjection,!0),Object.assign(i,{cryProbeBoxCenter:{value:new Float32Array(t.boxProjection.center)},cryProbeBoxHalfSize:{value:new Float32Array(t.boxProjection.halfSize)},cryNativeOrigin:{value:new Float32Array(t.boxProjection.nativeOrigin)}}))}let r=Ox(e),s=n.onBeforeCompile,o=n.customProgramCacheKey,a=function(l,h){s.call(this,l,h),l.uniforms.cryEnvironmentBRDF={value:r},i&&Object.assign(l.uniforms,i),l.fragmentShader=Bx+l.fragmentShader,i&&(l.fragmentShader=`
      uniform highp samplerCube cryProbeSpecular;
      uniform highp samplerCube cryProbeDiffuse;
      uniform mat3 cryWorldToCry;
      uniform vec3 cryProbeColor;
      uniform vec2 cryProbeMultipliers;
      uniform float cryProbeMaximumMip;
      ${Ux}
      ${i.cryProbeBoxCenter?`uniform vec3 cryProbeBoxCenter;
      uniform vec3 cryProbeBoxHalfSize;
      uniform vec3 cryNativeOrigin;
      ${Nx}`:""}
    `+l.fragmentShader),l.fragmentShader=ap(l.fragmentShader,"#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
cryProbeSmoothness = 1.0-clamp(roughnessFactor,0.0,1.0);`),l.fragmentShader.includes("#include <lights_physical_pars_fragment>")?l.fragmentShader=ap(l.fragmentShader,"#include <lights_physical_pars_fragment>",lp(ze.lights_physical_pars_fragment,!!i,!!i?.cryProbeBoxCenter)):l.fragmentShader=lp(l.fragmentShader,!!i,!!i?.cryProbeBoxCenter)},c=function(){return`${o.call(this)}|cry-probe-rg16-v1|${i?"native-cube":"renderer-radiance"}|${i?.cryProbeBoxCenter?"box-projection":"no-box"}`};return n.onBeforeCompile=a,n.customProgramCacheKey=c,n.needsUpdate=!0,Ch.add(n),{texture:r,setWorldToCry(l){if(!i)throw new Error("This adapter has no native HDR cube.");i.cryWorldToCry.value.copy(op(l))},setNativeOrigin(l){if(!i?.cryNativeOrigin)throw new Error("This adapter has no native box projection.");i.cryNativeOrigin.value.set(tl(l))},dispose(){if(n.onBeforeCompile!==a||n.customProgramCacheKey!==c)throw new Error("Remove later shader patches before native probe terms.");n.onBeforeCompile=s,n.customProgramCacheKey=o,r.dispose(),Ch.delete(n),n.needsUpdate=!0}}}function hp(n,{lut:e,specular:t,diffuse:i,worldToCry:r,color:s,diffuseMultiplier:o,specularMultiplier:a,boxProjection:c}={}){return zx(n,{lut:e,probe:{specular:t,diffuse:i,worldToCry:r,color:s,diffuseMultiplier:o,specularMultiplier:a,boxProjection:c}})}function up({sceneTexture:n,bloomTexture:e=null,exposure:t,filmCurve:i,colorBalance:r,bloomColor:s,vignette:o,outputTransfer:a}={}){if(!n?.isTexture||!Array.isArray(s)||s.length!==3||!s.every(Number.isFinite)||!["linear","srgb"].includes(a)||!o||typeof o.enabled!="boolean"||s.some(l=>l>0)&&!e?.isTexture)throw new Error("Declare native film inputs, transfer and disabled effects explicitly.");if(!(t>0))throw new Error("Native film exposure must be supplied and positive.");if(vd([1,1,1],{exposure:t,bloomRGB:[0,0,0],bloomMix:s,vignetting:1,filmCurve:i,colorBalance:r}),o.enabled&&(!o.texture?.isTexture||!Array.isArray(o.repeat)||!Array.isArray(o.offset)||o.repeat.length!==2||o.offset.length!==2||![...o.repeat,...o.offset].every(Number.isFinite)))throw new Error("Declare native vignette texture and UV transform.");let c=new Ht({name:"Native Hable scene mapping",depthTest:!1,depthWrite:!1,toneMapped:!1,uniforms:{cryScene:{value:n},cryBloom:{value:e},cryExposure:{value:t},cryFilmCurve:{value:new Float32Array(i)},cryColorBalance:{value:new Float32Array(r)},cryBloomColor:{value:new Float32Array(s)},cryVignette:{value:o.enabled?o.texture:null},cryVignetteTransform:{value:new Float32Array(o.enabled?[...o.repeat,...o.offset]:[1,1,0,0])}},defines:{...o.enabled?{CRY_VIGNETTE:1}:{},...a==="srgb"?{CRY_SRGB:1}:{}},vertexShader:"varying vec2 vCryUV; void main(){ vCryUV=uv; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:`
      uniform sampler2D cryScene;
      uniform sampler2D cryBloom;
      uniform sampler2D cryVignette;
      uniform float cryExposure;
      uniform vec4 cryFilmCurve;
      uniform vec4 cryColorBalance;
      uniform vec3 cryBloomColor;
      uniform vec4 cryVignetteTransform;
      varying vec2 vCryUV;
      float cryFilm(float value) {
        float shoulder=0.22*cryFilmCurve.x;
        float strength=0.3*cryFilmCurve.y;
        float toe=0.01*cryFilmCurve.z;
        return (value*(shoulder*value+0.1*strength)+0.2*toe)/
          (value*(shoulder*value+strength)+0.06)-toe/0.3;
      }
      float crySRGB(float value) { return value<0.0031308?12.92*value:1.055*pow(value,1.0/2.4)-0.055; }
      void main() {
        vec3 scene=texture2D(cryScene,vCryUV).rgb;
        vec3 bloom=vec3(0.0);
        if(any(greaterThan(cryBloomColor,vec3(0.0)))) bloom=texture2D(cryBloom,vCryUV).rgb;
        float vignette=1.0;
        #ifdef CRY_VIGNETTE
          vignette=texture2D(cryVignette,vCryUV*cryVignetteTransform.xy+cryVignetteTransform.zw).r;
        #endif
        vec3 color=vignette*cryExposure*mix(scene,bloom,clamp(cryBloomColor,0.0,1.0));
        float luminance=dot(color,vec3(0.2126,0.7152,0.0722));
        color=max((vec3(luminance)+cryColorBalance.a*(color-vec3(luminance)))*cryColorBalance.rgb,0.0);
        vec3 mapped=vec3(cryFilm(color.r),cryFilm(color.g),cryFilm(color.b))/cryFilm(cryFilmCurve.w);
        mapped=clamp(mapped,0.0,1.0);
        #ifdef CRY_SRGB
          mapped=vec3(crySRGB(mapped.r),crySRGB(mapped.g),crySRGB(mapped.b));
        #endif
        gl_FragColor=vec4(mapped,1.0);
      }`});return c.userData.nativeFilm={exposure:t,filmCurve:[...i],colorBalance:[...r],bloomColor:[...s],vignetteEnabled:o.enabled,outputTransfer:a,source:"HDRPostProcess.cfx:240-287",evidence:"Explicit caller parameters; active runtime exposure/adaptation is not inferred."},c}var ji=(n,e,t)=>{if(n.split(e).length!==2)throw Error("Unsupported Three point-light shader.");return n.replace(e,t)};function fp(n,{parameters:e,directLightScale:t}={}){if(!n?.userData.nativeIllumDirect||n.userData.sourceEffect&&!n.userData.nativeSourceEffectLighting||!Array.isArray(e)||e.length>128||!e.every(c=>Array.isArray(c)&&c.length===3&&c.every(Number.isFinite)&&c[0]>0&&c[1]>=0&&c[2]>=0)||!(t>0)||!Number.isFinite(t))throw Error("Declare native bulb, diffuse/specular gains and direct light units.");let i=n.onBeforeCompile,r=n.customProgramCacheKey,s=e.map(c=>new U(...c)),o=function(c,l){i.call(this,c,l),c.uniforms.cryPointParameters={value:s},c.uniforms.cryDirectLightScale.value=t,c.fragmentShader=`
      float cryLightDiffuse = 1.0;
      float cryLightSpecular = 1.0;
      #if NUM_POINT_LIGHTS > 0
        uniform vec3 cryPointParameters[NUM_POINT_LIGHTS];
      #endif
    `+c.fragmentShader;let h=ji(ze.lights_pars_begin,"void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light )","void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light, const in int cryIndex )");h=ji(h,"light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );",`
      vec3 cryParameters = cryPointParameters[cryIndex];
      float cryFade = clamp((pointLight.distance-lightDistance)/(0.2*pointLight.distance),0.0,1.0);
      float cryDistance = max(lightDistance-cryParameters.x,0.0);
      float cryAttenuation = cryFade*cryFade/pow(1.0+cryDistance/cryParameters.x,2.0);
      light.color *= cryAttenuation;
      cryLightDiffuse = cryParameters.y;
      cryLightSpecular = cryParameters.z;
    `),c.fragmentShader=ji(c.fragmentShader,"#include <lights_pars_begin>",h),c.fragmentShader=ji(c.fragmentShader,"#include <lights_fragment_begin>",ji(ze.lights_fragment_begin,"getPointLightInfo( pointLight, geometryPosition, directLight );","getPointLightInfo( pointLight, geometryPosition, directLight, UNROLLED_LOOP_INDEX );")),c.fragmentShader=ji(c.fragmentShader,"cryDirectLightScale * directLight.color * cryIllumSpecular","cryLightSpecular * cryDirectLightScale * directLight.color * cryIllumSpecular"),c.fragmentShader=ji(c.fragmentShader,"cryDirectLightScale * directLight.color * material.diffuseColor","cryLightDiffuse * cryDirectLightScale * directLight.color * material.diffuseColor")},a=function(){return`${r.call(this)}|cry-bulb-v1|${e.length}`};return n.onBeforeCompile=o,n.customProgramCacheKey=a,n.needsUpdate=!0,{dispose(){if(n.onBeforeCompile!==o||n.customProgramCacheKey!==a)throw Error("Remove later shader patches before native point terms.");n.onBeforeCompile=i,n.customProgramCacheKey=r,n.needsUpdate=!0}}}var nl=(n,e,t)=>{if(n.split(e).length!==2)throw Error(`Unsupported Three r180 native Glass depth shader: ${e}.`);return n.replace(e,t)};function Dh(n){let e=new br({depthPacking:Da});return e.name="Native Glass view-Z depth",e.blending=Zt,e.toneMapped=!1,e.onBeforeCompile=t=>{t.vertexShader=nl(t.vertexShader,"#include <common>",`#include <common>
varying float cryGlassViewZ;`),t.vertexShader=nl(t.vertexShader,"#include <project_vertex>",`#include <project_vertex>
cryGlassViewZ=-mvPosition.z;`),t.fragmentShader=nl(t.fragmentShader,"#include <common>",`#include <common>
varying float cryGlassViewZ;`),t.fragmentShader=nl(t.fragmentShader,"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor=vec4(cryGlassViewZ,0.0,0.0,1.0);")},e.customProgramCacheKey=()=>"cry-glass-view-z-r180-v1",pp(e,n),e}function pp(n,e){let t=["map","alphaMap","alphaTest","alphaHash","opacity","side","displacementMap","displacementScale","displacementBias","clippingPlanes","clipIntersection","clipShadows","polygonOffset","polygonOffsetFactor","polygonOffsetUnits","wireframe"],i=!1;for(let r of t)e[r]!==void 0&&n[r]!==e[r]&&(n[r]=e[r],i=!0);n.visible=e.visible!==!1&&!e.transparent,i&&(n.needsUpdate=!0)}function dp(n,e){if(!Number.isInteger(n)||!Number.isInteger(e)||n<1||e<1||n>8192||e>8192||n*e>16777216)throw Error("Native Glass target dimensions exceed bounds.")}function mp(n=1,e=1){dp(n,e);let t=new Bt(n,e,{type:nn,depthBuffer:!0,stencilBuffer:!1});t.texture.name="Pre-glass linear HDR scene",t.texture.colorSpace=ft;let i=new Bt(n,e,{type:Ct,format:ki,internalFormat:"R32F",depthBuffer:!0,stencilBuffer:!1});i.texture.name="Pre-glass view-Z metres",i.texture.colorSpace=vt,i.texture.minFilter=i.texture.magFilter=ut;let r=new Map,s=!1,o={colorPasses:0,depthPasses:0,resizes:0};return{get width(){return t.width},get height(){return t.height},colorTexture:t.texture,depthTexture:i.texture,stats:o,setSize(a,c){dp(a,c),(a!==t.width||c!==t.height)&&(t.setSize(a,c),i.setSize(a,c),o.resizes++)},render(a,c,l,h){if(s)throw Error("Native Glass passes are disposed.");if(!a.capabilities.isWebGL2||!a.extensions.has("EXT_color_buffer_float"))throw Error("Native Glass requires WebGL2 floating HDR/depth targets.");if(!(l.far>0)||!Number.isFinite(l.far)||!(h instanceof Set)||!h.size)throw Error("Declare native Glass materials and a finite camera far plane.");if(c.overrideMaterial)throw Error("Native Glass inputs require the actual source materials.");let u={target:a.getRenderTarget(),face:a.getActiveCubeFace?.()??0,mip:a.getActiveMipmapLevel?.()??0,viewport:a.getViewport(new Xe),scissor:a.getScissor(new Xe),scissorTest:a.getScissorTest(),autoClear:a.autoClear,autoClearColor:a.autoClearColor,autoClearDepth:a.autoClearDepth,autoClearStencil:a.autoClearStencil,tone:a.toneMapping,color:a.outputColorSpace,background:c.background,override:c.overrideMaterial,xr:a.xr?.enabled},f=new Map,p=[],g=[],v=new Set;try{for(let d of h)f.set(d,d.visible),d.visible=!1;a.toneMapping=jt,a.outputColorSpace=ft,a.xr&&(a.xr.enabled=!1),a.setScissorTest(!1),a.autoClear=!0,a.autoClearColor=!0,a.autoClearDepth=!0,a.setRenderTarget(t),a.render(c,l),o.colorPasses++,c.background=null,c.traverse(d=>{if(!d.material)return;if(!d.isMesh){g.push([d,d.visible]),d.visible=!1;return}let b=d.material,E=[b].flat().map(S=>{v.add(S),r.has(S)||r.set(S,Dh(S));let x=r.get(S);return pp(x,S),x});p.push([d,b]),d.material=Array.isArray(b)?E:E[0]}),a.setRenderTarget(i),a.autoClear=!1;let m=a.getContext();m.clearBufferfv(m.COLOR,0,new Float32Array([l.far,0,0,1])),a.clear(!1,!0,!1),a.render(c,l),o.depthPasses++}finally{for(let[m,d]of p)m.material=d;for(let[m,d]of g)m.visible=d;for(let[m,d]of f)m.visible=d;c.background=u.background,c.overrideMaterial=u.override,a.autoClear=u.autoClear,a.autoClearColor=u.autoClearColor,a.autoClearDepth=u.autoClearDepth,a.autoClearStencil=u.autoClearStencil,a.toneMapping=u.tone,a.outputColorSpace=u.color,a.xr&&(a.xr.enabled=u.xr),a.setRenderTarget(u.target,u.face,u.mip),a.setViewport(u.viewport),a.setScissor(u.scissor),a.setScissorTest(u.scissorTest);for(let[m,d]of r)v.has(m)||(d.dispose(),r.delete(m))}},dispose(){if(!s){t.dispose(),i.dispose();for(let a of r.values())a.dispose();r.clear(),s=!0}}}}var kx=Object.freeze({member:"Shaders/HWScripts/CryFX/DeferredShading.cfx",lines:"935-1027",shaderSha256:"50b30c854d2e7386b3e66e5ceee3d8b283d073dc3df4deb334f18789e3edbd47",projectionReference:"https://github.com/aws/lumberyard/blob/master/dev/Code/CryEngine/RenderDll/XRenderD3D9/GraphicsPipeline/ScreenSpaceSSS.cpp",projectionRatioReference:"https://github.com/aws/lumberyard/blob/master/dev/Code/CryEngine/RenderDll/XRenderD3D9/GraphicsPipeline/StandardGraphicsPipeline.cpp",offsets:Object.freeze([.352,.719,1.117,1.579,2.177,3.213]),variance:Object.freeze([3.3,1.4,1.1]),spike:Object.freeze([.015,.02,.025]),radiusMetres:.0055}),il=(n,e,t)=>{if(n.split(e).length!==2)throw Error(`Unsupported source skin-pass shader: ${e}.`);return n.replace(e,t)},Vx=n=>{if(!Number.isFinite(n))throw Error("Expected a finite native SSS input.");return n};function Lh(n,e,{projectionRatioW:t}={}){if(!n?.isMeshPhysicalMaterial||e?.kind!=="skin"||!e.surfaceSupported||!e.requiresSSS||Math.floor(e.encodedScatteringIndex)!==1)throw Error("Declare a recovered active HumanSkin skin-profile material.");if(!(Vx(t)>0))throw Error("Declare the source projection-ratio W constant.");let i=n.onBeforeCompile,r=n.customProgramCacheKey,s=n.userData.nativeMissingPasses,o=n.userData.nativeSkinSSS,a={value:0},c={value:e.encodedScatteringIndex},l={value:t},h=function(f,p){i.call(this,f,p),f.uniforms.crySkinOutputMode=a,f.uniforms.crySkinScatteringIndex=c,f.uniforms.crySkinProjectionRatioW=l,f.fragmentShader=`uniform int crySkinOutputMode;
uniform float crySkinScatteringIndex,crySkinProjectionRatioW;
vec3 crySkinIrradiance=vec3(0.0);
`+f.fragmentShader;let g="saturate(1.0-dot(material.specularColor,vec3(0.2126,0.7152,0.0722)))",v="cryLightDiffuse * cryDirectLightScale * directLight.color",m="cryThinTranslucency(geometryNormal,directLight.direction,crySpecialTransmission)";f.fragmentShader=il(f.fragmentShader,`reflectedLight.directDiffuse += ${v} * material.diffuseColor * ${g} * ${m};`,`vec3 crySkinDirect=${v} * ${m};
crySkinIrradiance+=crySkinDirect;
reflectedLight.directDiffuse+=crySkinDirect*material.diffuseColor*${g};`),f.fragmentShader=il(f.fragmentShader,"reflectedLight.indirectDiffuse += material.diffuseColor * nativeDiffuse * nativeIrradiance;",`crySkinIrradiance+=nativeIrradiance;
reflectedLight.indirectDiffuse += material.diffuseColor * nativeDiffuse * nativeIrradiance;`),f.fragmentShader=il(f.fragmentShader,"#include <opaque_fragment>",`
      // Preserve HumanSkin.cfx:463-465 literally. Its SV_POSITION.w is not
      // view-Z; do not replace this expression with the source comment.
      bool crySkinActive=gl_FragCoord.w*crySkinProjectionRatioW<=10.0;
      if(crySkinActive){
        if(crySkinOutputMode==0)outgoingLight=reflectedLight.directSpecular+reflectedLight.indirectSpecular;
        else if(crySkinOutputMode==1)outgoingLight=crySkinIrradiance;
        else outgoingLight=material.diffuseColor*${g};
      }else if(crySkinOutputMode!=0)outgoingLight=vec3(0.0);
      #include <opaque_fragment>
      if(crySkinOutputMode!=0)gl_FragColor.a=crySkinActive?(crySkinOutputMode==2?crySkinScatteringIndex:1.0):0.0;
    `)},u=function(){return`${r.call(this)}|cry-skin-sss-profile1-v1`};return n.onBeforeCompile=h,n.customProgramCacheKey=u,n.needsUpdate=!0,n.userData.nativeMissingPasses=(s??e.missingPasses??[]).filter(f=>f!=="screen-space-sss"),n.userData.nativeSkinSSS={profile:1,source:kx,projectionRatioW:t,depthEncoding:"view-z-metres",passes:2},{material:n,recipe:e,setOutputMode(f){if(![0,1,2].includes(f))throw Error("Invalid native skin output mode.");a.value=f},dispose(){if(n.onBeforeCompile!==h||n.customProgramCacheKey!==u)throw Error("Remove later shader patches before the native skin pass.");n.onBeforeCompile=i,n.customProgramCacheKey=r,n.needsUpdate=!0,s===void 0?delete n.userData.nativeMissingPasses:n.userData.nativeMissingPasses=s,o===void 0?delete n.userData.nativeSkinSSS:n.userData.nativeSkinSSS=o}}}var gp="varying vec2 crySSSUV;void main(){crySSSUV=uv;gl_Position=vec4(position.xy,0.0,1.0);}",Hx=`
  varying vec2 crySSSUV;
  uniform sampler2D crySSSInput,crySSSDepth,crySSSAttributes,crySSSOriginal;
  uniform vec2 crySSSProjection;
  uniform int crySSSAxis;
  vec2 crySSSUnit(vec2 value){float lengthSquared=dot(value,value);return lengthSquared>0.0?value*inversesqrt(lengthSquared):vec2(0.0);}
  void main(){
    vec4 attributes=texture2D(crySSSAttributes,crySSSUV);
    if(attributes.a==0.0){gl_FragColor=vec4(0.0);return;}
    float amount=fract(attributes.a);
    float centerDepth=texture2D(crySSSDepth,crySSSUV).r;
    vec3 centerColor=texture2D(crySSSInput,crySSSUV).rgb;
    // Official Cry-family CPU code supplies (2/m00,2/m11,-1/m00,-1/m11).
    vec2 nativeUV=vec2(crySSSUV.x,1.0-crySSSUV.y);
    vec3 viewPosition=vec3((nativeUV*2.0-1.0)/crySSSProjection,1.0)*centerDepth;
    // Source ddy points down the native render target, opposite GL dFdy.
    vec3 viewNormal=cross(-dFdy(viewPosition),dFdx(viewPosition));
    vec3 viewDirection=-viewPosition;
    float perspectiveScale=max(crySSSAxis==0?
      dot(crySSSUnit(viewNormal.xz),crySSSUnit(viewDirection.xz)):
      dot(crySSSUnit(viewNormal.yz),crySSSUnit(viewDirection.yz)),0.3);
    vec2 direction=crySSSAxis==0?vec2(0.5*crySSSProjection.x,0.0):vec2(0.0,-0.5*crySSSProjection.y);
    vec2 projectedRadius=direction*perspectiveScale*0.0055/centerDepth;
    const float offsets[6]=float[6](0.352,0.719,1.117,1.579,2.177,3.213);
    const vec3 falloff=-1.0/(2.0*vec3(3.3,1.4,1.1));
    vec3 totalWeight=vec3(1.0),colorSum=centerColor;
    for(int side=0;side<2;side++){
      for(int tap=0;tap<6;tap++){
        vec2 uv=crySSSUV+offsets[tap]/5.5*projectedRadius;
        // Source GetTexture2DLod uses explicit level zero inside this loop.
        float sampleDepth=textureLod(crySSSDepth,uv,0.0).r;
        vec3 sampleColor=textureLod(crySSSInput,uv,0.0).rgb;
        float depthDifference=(sampleDepth-centerDepth)*1000.0;
        vec3 weight=exp((offsets[tap]*offsets[tap]+depthDifference*depthDifference)*falloff);
        totalWeight+=weight;colorSum+=weight*sampleColor;
      }
      projectedRadius*=-1.0;
    }
    vec3 outputColor=colorSum/totalWeight;
    if(crySSSAxis==1){
      vec3 spike=clamp(vec3(0.015,0.020,0.025)*(1.0-amount)*10.0,0.0,1.0);
      outputColor=mix(outputColor,texture2D(crySSSOriginal,crySSSUV).rgb,spike);
      outputColor*=attributes.rgb;
    }
    gl_FragColor=vec4(outputColor,1.0);
  }
`;function vp(n,e){if(!Number.isInteger(n)||!Number.isInteger(e)||n<1||e<1||n>8192||e>8192||n*e>16777216)throw Error("Native skin-pass dimensions exceed bounds.")}function Os(n,e,t,{depthBuffer:i=!1,type:r=nn,format:s}={}){let o=new Bt(n,e,{type:r,depthBuffer:i,stencilBuffer:!1,...s?{format:s,internalFormat:"R32F"}:{}});return o.texture.name=t,o.texture.colorSpace=vt,o.texture.minFilter=o.texture.magFilter=ut,o}function yp(n,e){let t=Dh(n);if(e){let i=t.onBeforeCompile;t.onBeforeCompile=r=>{i(r),r.fragmentShader=il(r.fragmentShader,"gl_FragColor=vec4(cryGlassViewZ,0.0,0.0,1.0);","gl_FragColor=vec4(0.0);")},t.customProgramCacheKey=()=>"cry-skin-opaque-occluder-v1"}return t}function _p(n,e,t){for(let i of["map","alphaMap","alphaTest","alphaHash","opacity","side","displacementMap","displacementScale","displacementBias","clippingPlanes","clipIntersection","clipShadows","polygonOffset","polygonOffsetFactor","polygonOffsetUnits","wireframe"])e[i]!==void 0&&e[i]!==n[i]&&(n[i]=e[i],n.needsUpdate=!0);n.visible=e.visible!==!1&&!e.transparent&&!t.has(e)}function xp(n=1,e=1){vp(n,e);let t=Os(n,e,"Native skin view-Z metres",{depthBuffer:!0,type:Ct,format:ki}),i=Os(n,e,"Native skin unblurred irradiance",{depthBuffer:!0}),r=Os(n,e,"Native skin post-scatter albedo and index",{depthBuffer:!0}),s=Os(n,e,"Native skin horizontal irradiance"),o=Os(n,e,"Native skin composed pre-glass HDR");o.texture.colorSpace=ft;let a=[t,i,r,s,o],c={crySSSInput:{value:i.texture},crySSSOriginal:{value:i.texture},crySSSDepth:{value:t.texture},crySSSAttributes:{value:r.texture},crySSSProjection:{value:new Pe},crySSSAxis:{value:0}},l=new Ht({uniforms:c,vertexShader:gp,fragmentShader:Hx,depthTest:!1,depthWrite:!1,blending:Zt,toneMapped:!1}),h=new Ht({uniforms:{inputTexture:{value:null}},vertexShader:gp,fragmentShader:"varying vec2 crySSSUV;uniform sampler2D inputTexture;void main(){gl_FragColor=texture2D(inputTexture,crySSSUV);}",depthTest:!1,depthWrite:!1,blending:Zt,toneMapped:!1}),u=new St(new ii(2,2),l),f=new ni,p=new ti;f.add(u);let g=new Map,v=!1,m={depthPasses:0,irradiancePasses:0,attributePasses:0,filterPasses:0,compositePasses:0,resizes:0};return{stats:m,compositeTexture:o.texture,depthTexture:t.texture,irradianceTexture:i.texture,attributeTexture:r.texture,setSize(d,b){if(vp(d,b),d!==t.width||b!==t.height){for(let E of a)E.setSize(d,b);m.resizes++}},render(d,b,E,S,x,{excludedMaterials:A=new Set,snapshot:T=!1}={}){if(v)throw Error("Native skin passes are disposed.");if(!d.capabilities.isWebGL2||!d.extensions.has("EXT_color_buffer_float"))throw Error("Native skin SSS requires WebGL2 floating HDR/depth targets.");if(!E.isPerspectiveCamera||!x?.isWebGLRenderTarget||!(S instanceof Map)||!S.size||b.overrideMaterial)throw Error("Declare a perspective camera, source skin handles and the separate HDR scene target.");let C=E.projectionMatrix.elements;if(!(C[0]>0&&C[5]>0)||C[8]!==0||C[9]!==0)throw Error("Native skin SSS currently requires a symmetric perspective projection.");c.crySSSProjection.value.set(C[0],C[5]);let y={target:d.getRenderTarget(),face:d.getActiveCubeFace(),mip:d.getActiveMipmapLevel(),viewport:d.getViewport(new Xe),scissor:d.getScissor(new Xe),scissorTest:d.getScissorTest(),autoClear:d.autoClear,autoClearColor:d.autoClearColor,autoClearDepth:d.autoClearDepth,autoClearStencil:d.autoClearStencil,tone:d.toneMapping,color:d.outputColorSpace,xr:d.xr.enabled,background:b.background},_=[],P=[],F=new Set,k=()=>{for(let[I,G]of _)I.material=G;_.length=0},q=I=>{b.traverse(G=>{if(!G.material)return;if(!G.isMesh){I&&(P.push([G,G.visible]),G.visible=!1);return}let z=G.material,L=[z].flat().map(B=>{F.add(B),g.has(B)||g.set(B,{depth:yp(B,!1),black:yp(B,!0)});let $=g.get(B);return _p($.depth,B,A),_p($.black,B,A),I?$.depth:S.has(B)?B:$.black});_.push([G,z]),G.material=Array.isArray(z)?L:L[0]})},H=(I,G)=>{d.setRenderTarget(I);let z=d.getContext();z.clearBufferfv(z.COLOR,0,new Float32Array(G)),d.clear(!1,!0,!1),d.render(b,E)};try{d.xr.enabled=!1,d.toneMapping=jt,d.outputColorSpace=ft,d.setScissorTest(!1),d.autoClear=!1,d.autoClearColor=!1,d.autoClearDepth=!1,d.autoClearStencil=!1,b.background=null,q(!0),H(t,[E.far,0,0,1]),m.depthPasses++,k(),q(!1);for(let I of S.values())I.setOutputMode(1);H(i,[0,0,0,0]),m.irradiancePasses++;for(let I of S.values())I.setOutputMode(2);H(r,[0,0,0,0]),m.attributePasses++;for(let I of S.values())I.setOutputMode(0);k(),c.crySSSAxis.value=0,c.crySSSInput.value=i.texture,l.blending=Zt,u.material=l,d.setRenderTarget(s),d.render(f,p),m.filterPasses++,c.crySSSAxis.value=1,c.crySSSInput.value=s.texture,l.blending=zo,l.blendEquation=An,l.blendSrc=Ar,l.blendDst=Ar,l.blendEquationAlpha=An,l.blendSrcAlpha=ko,l.blendDstAlpha=Ar,d.setRenderTarget(x),d.render(f,p),m.filterPasses++,T&&(h.uniforms.inputTexture.value=x.texture,u.material=h,d.setRenderTarget(o),d.render(f,p),m.compositePasses++)}finally{for(let I of S.values())I.setOutputMode(0);k();for(let[I,G]of P)I.visible=G;b.background=y.background,d.autoClear=y.autoClear,d.autoClearColor=y.autoClearColor,d.autoClearDepth=y.autoClearDepth,d.autoClearStencil=y.autoClearStencil,d.toneMapping=y.tone,d.outputColorSpace=y.color,d.xr.enabled=y.xr,d.setRenderTarget(y.target,y.face,y.mip),d.setViewport(y.viewport),d.setScissor(y.scissor),d.setScissorTest(y.scissorTest);for(let[I,G]of g)F.has(I)||(G.depth.dispose(),G.black.dispose(),g.delete(I))}},dispose(){if(!v){for(let d of a)d.dispose();for(let d of g.values())d.depth.dispose(),d.black.dispose();g.clear(),l.dispose(),h.dispose(),u.geometry.dispose(),v=!0}}}}var Gx=n=>{if(n instanceof Uint8Array)return n;if(typeof n!="string"||!/^[A-Za-z0-9+/]+={0,2}$/.test(n))throw Error("Invalid source lighting bytes.");return Uint8Array.from(atob(n),e=>e.charCodeAt(0))};function Sp(n){if(n?.format!==1||n.kind!=="native-kit-lighting"||!Array.isArray(n.directLights))throw Error("Invalid source lighting profile.");for(let x of n.directLights)if(x.type!=="point"||!Array.isArray(x.color)||!Array.isArray(x.position)||x.color.length!==3||x.position.length!==3||![...x.color,...x.position,x.radius,x.bulb,x.diffuseMultiplier,x.specularMultiplier].every(Number.isFinite)||x.radius<=0||x.bulb<=0||x.diffuseMultiplier<0||x.specularMultiplier<0)throw Error("Unsupported source point light.");let e=cp(n.lut),t=Object.fromEntries(Object.entries(n.buffers).map(([x,A])=>[x,Gx(A)])),i=Ih(Ph(n.specular,t)),r=Ih(Ph(n.diffuse,t)),s=new Bt(1,1,{type:nn,depthBuffer:!0,stencilBuffer:!1});s.texture.colorSpace=ft;let o=up({sceneTexture:s.texture,...n.film,outputTransfer:"srgb"}),a=new St(new ii(2,2),o),c=new ni;c.add(a);let l=new ti,h=new Map,u=[],f=new Pe,p=null,g=!1,v=null,m=null,d=[],b={scenePasses:0,filmPasses:0,glassColorPasses:0,glassDepthPasses:0,skinDepthPasses:0,skinIrradiancePasses:0,skinAttributePasses:0,skinFilterPasses:0,skinCompositePasses:0};function E(){for(let x of u)x.removeFromParent();if(u.length=0,p)for(let{light:x,index:A}of d){p.add(x);let T=p.children.indexOf(x);p.children.splice(T,1),p.children.splice(Math.min(A,p.children.length),0,x)}d=[],p=null}function S(x){E(),d=x.children.map((A,T)=>({light:A,index:T})).filter(({light:A})=>A.isLight);for(let{light:A}of d)x.remove(A);for(let A of n.directLights){let T=new vs(new Be().fromArray(A.color),1,A.radius,0);T.position.fromArray(A.position),x.add(T),u.push(T)}p=x}return{profile:n.profile,nativeSourceLighting:!0,nativeWorldFromView({view:x="object",eye:A=0}={}){if(!Number.isFinite(A))throw Error("Invalid source eye height.");let T=n.probe.worldToCry,C=n.probe.boxProjection?.nativeOrigin;if(!C)throw Error("Native world effects require an explicitly pinned source origin.");return new Ue().set(T[0],T[3],T[6],C[0],T[1],T[4],T[7],C[1],T[2],T[5],T[8],C[2]+(x==="held"?0:A),0,0,0,1)},stats:b,render(x,A,T,{view:C="object",eye:y=0}={}){if(g)throw Error("The source lighting profile is disposed.");if(!Number.isFinite(y))throw Error("Invalid source eye height.");p!==A&&S(A);let _=C==="held"?0:y;for(let ee=0;ee<u.length;ee++)u[ee].position.fromArray(n.directLights[ee].position),u[ee].position.y-=_;let P=n.probe.boxProjection?.nativeOrigin,F=P?[P[0],P[1],P[2]+_]:null;x.getDrawingBufferSize(f),(s.width!==f.x||s.height!==f.y)&&s.setSize(f.x,f.y);let k=ee=>ee?.userData.nativeIllumDirect&&(!ee.userData.sourceEffect||ee.userData.nativeSourceEffectLighting||ee.userData.nativeSpecial?.recipe?.supported),q=ee=>k(ee)&&ee.userData.nativeSpecial?.recipe?.kind==="flat-glass",H=ee=>k(ee)&&ee.userData.nativeSpecial?.recipe?.kind==="skin"&&ee.userData.nativeSpecial.recipe.requiresSSS&&Math.floor(ee.userData.nativeSpecial.recipe.encodedScatteringIndex)===1,I=new Set,G=new Set;A.traverseVisible(ee=>{for(let ne of ee.material?[ee.material].flat():[])ne?.visible!==!1&&(q(ne)&&I.add(ne),H(ne)&&G.add(ne))}),I.size&&!v&&(v=mp(f.x,f.y)),v&&v.setSize(f.x,f.y),G.size&&!m&&(m=xp(f.x,f.y)),m&&m.setSize(f.x,f.y);let z=new Set;A.traverse(ee=>{for(let ne of ee.material?[ee.material].flat():[])if(!(!k(ne)||q(ne)&&!v)){if(z.add(ne),!h.has(ne)){let Re=hp(ne,{lut:e,specular:i,diffuse:r,...n.probe}),et=null,D=null,qe=null;try{ne.userData.nativeSpecial&&(et=Sd(ne,{...ne.userData.nativeSpecial,...q(ne)?{sceneColor:v.colorTexture,sceneDepth:v.depthTexture,sceneColorExcludesGlass:!0,sceneColorLinear:!0,sceneDepthEncoding:"view-z-metres",hPosScale:[1,1],viewport:[f.x,f.y]}:{}})),D=fp(ne,{parameters:n.directLights.map(De=>[De.bulb,De.diffuseMultiplier,De.diffuseMultiplier*De.specularMultiplier]),directLightScale:n.directLightScale}),m&&H(ne)&&(qe=Lh(ne,ne.userData.nativeSpecial.recipe,{projectionRatioW:1}))}catch(De){throw qe?.dispose(),D?.dispose(),et?.dispose(),Re.dispose(),De}h.set(ne,{setNativeOrigin:Re.setNativeOrigin,special:et,skinPass:qe,glass:q(ne),dispose(){this.skinPass?.dispose(),D.dispose(),et?.dispose(),Re.dispose()}})}m&&H(ne)&&!h.get(ne).skinPass&&(h.get(ne).skinPass=Lh(ne,ne.userData.nativeSpecial.recipe,{projectionRatioW:1})),F&&h.get(ne).setNativeOrigin(F),q(ne)&&h.get(ne).special.setSceneColor(v.colorTexture,f.x,f.y)}});for(let[ee,ne]of h)z.has(ee)||(ne.dispose(),h.delete(ee));v&&![...h.values()].some(ee=>ee.glass)&&(v.dispose(),v=null),m&&![...h.values()].some(ee=>ee.skinPass)&&(m.dispose(),m=null);let L=new Map([...G].map(ee=>[ee,h.get(ee)?.skinPass]).filter(([,ee])=>ee)),B=x.getRenderTarget(),$=x.toneMapping,Q=x.outputColorSpace,ie=x.getActiveCubeFace(),re=x.getActiveMipmapLevel(),J=x.getViewport(new Xe),N=x.getScissor(new Xe),W=x.getScissorTest(),oe=x.xr.enabled;try{if(x.xr.enabled=!1,x.toneMapping=jt,x.outputColorSpace=ft,I.size&&(v.render(x,A,T,I),b.glassColorPasses++,b.glassDepthPasses++),L.size){let ee=new Map([...I].map(ne=>[ne,ne.visible]));try{for(let ne of I)ne.visible=!1;x.setRenderTarget(s),x.render(A,T),b.scenePasses++}finally{for(let[ne,Re]of ee)ne.visible=Re}if(m.render(x,A,T,L,s,{excludedMaterials:I,snapshot:I.size>0}),b.skinDepthPasses++,b.skinIrradiancePasses++,b.skinAttributePasses++,b.skinFilterPasses+=2,I.size&&b.skinCompositePasses++,I.size){for(let D of I)h.get(D).special.setSceneColor(m.compositeTexture,f.x,f.y);let ne=new Map,Re=A.background,et=x.autoClear;try{A.traverse(D=>{for(let qe of D.material?[D.material].flat():[])ne.has(qe)||(ne.set(qe,qe.visible),I.has(qe)||(qe.visible=!1))}),A.background=null,x.autoClear=!1,x.setRenderTarget(s),x.render(A,T),b.scenePasses++}finally{for(let[D,qe]of ne)D.visible=qe;A.background=Re,x.autoClear=et}}}else x.setRenderTarget(s),x.render(A,T),b.scenePasses++;x.setRenderTarget(B,ie,re),x.render(c,l),b.filmPasses++}finally{x.setRenderTarget(B,ie,re),x.toneMapping=$,x.outputColorSpace=Q,x.setViewport(J),x.setScissor(N),x.setScissorTest(W),x.xr.enabled=oe}},setExposure(x){if(!(x>0)||!Number.isFinite(x))throw Error("Use a positive finite source exposure.");o.uniforms.cryExposure.value=x},dispose(){if(!g){for(let x of h.values())x.dispose();h.clear(),E(),v?.dispose(),v=null,m?.dispose(),m=null,o.dispose(),a.geometry.dispose(),s.dispose(),i.dispose(),r.dispose(),g=!0}}}}var In=Object.freeze({units:32,members:4096,file:256*1024**2,json:64*1024**2,total:2*1024**3}),Nh=/^[a-f0-9]{64}$/;var Wx=new TextEncoder,Mp=new TextDecoder("utf-8",{fatal:!0}),He=n=>{throw new Error(n)},Ji=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),Bs=(n,e)=>Ji(n)&&Object.keys(n).length===e.length&&e.every(t=>Object.hasOwn(n,t)),Uh=async n=>Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",n)),e=>e.toString(16).padStart(2,"0")).join(""),Xx=(n,e)=>n.length===e.length&&n.every((t,i)=>t===e[i]);function rl(n){return(typeof n!="string"||!n||n.length>240||n!==n.normalize("NFC")||/[\x00-\x1f\\:*?"<>|]/.test(n)||n.startsWith("/"))&&He("Unsafe portable archive member."),n.split("/").some(e=>!e||e==="."||e===".."||/[ .]$/.test(e)||/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i.test(e))&&He("Unsafe portable archive member."),n}function Fh(n){n.length>In.json&&He("Transfer JSON exceeds its budget.");let e;try{e=Mp.decode(n)}catch{He("Expected UTF-8 JSON.")}let t=0,i=()=>{for(;/[ \t\r\n]/.test(e[t]??"\0");)t++};function r(){let o=t++;for(;t<e.length;){let a=e[t++];if(a==="\\"){t++;continue}if(a==='"')return JSON.parse(e.slice(o,t))}He("Incomplete JSON string.")}function s(o){if(o>64&&He("Transfer JSON nesting exceeds its budget."),i(),e[t]==='"')return r();if(e[t]==="{"){t++,i();let c=Object.create(null);if(e[t]==="}")return t++,c;for(;;){i(),e[t]!=='"'&&He("Invalid JSON object.");let l=r();Object.hasOwn(c,l)&&He("Duplicate JSON key."),i(),e[t++]!==":"&&He("Invalid JSON object."),c[l]=s(o+1),i();let h=e[t++];if(h==="}")return c;h!==","&&He("Invalid JSON object.")}}if(e[t]==="["){t++,i();let c=[];if(e[t]==="]")return t++,c;for(;;){c.push(s(o+1)),i();let l=e[t++];if(l==="]")return c;l!==","&&He("Invalid JSON array.")}}for(let[c,l]of[["true",!0],["false",!1],["null",null]])if(e.startsWith(c,t))return t+=c.length,l;let a=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(e.slice(t));return(!a||!Number.isFinite(Number(a[0])))&&He("Expected finite JSON data."),t+=a[0].length,Number(a[0])}try{let o=s(0);return i(),t!==e.length&&He("Unexpected JSON content."),o}catch(o){throw o instanceof SyntaxError&&He("Invalid JSON string."),o}}var qx=Uint32Array.from({length:256},(n,e)=>{let t=e;for(let i=0;i<8;i++)t=t&1?3988292384^t>>>1:t>>>1;return t>>>0});function Yx(n){let e=4294967295;for(let t of n)e=qx[(e^t)&255]^e>>>8;return(e^4294967295)>>>0}function $x(n,{maxMembers:e,total:t,file:i,manifest:r}){(!(n instanceof Uint8Array)||n.length<22||n.length>t+In.json)&&He("Invalid or oversized transfer ZIP.");let s=new DataView(n.buffer,n.byteOffset,n.byteLength),o=b=>s.getUint16(b,!0),a=b=>s.getUint32(b,!0),c=-1;for(let b=n.length-22;b>=Math.max(0,n.length-65557);b--)if(a(b)===101010256&&b+22+o(b+20)===n.length){c=b;break}(c<0||o(c+4)||o(c+6)||o(c+8)!==o(c+10))&&He("Invalid single-volume ZIP.");let l=o(c+10),h=a(c+16),u=a(c+12);(l<2||l>e||l===65535||h+u!==c)&&He("Invalid ZIP directory bounds.");let f=[],p=new Set,g=h,v=0;for(let b=0;b<l;b++){(g+46>c||a(g)!==33639248)&&He("Truncated ZIP directory.");let E=o(g+8),S=o(g+10),x=a(g+20),A=a(g+24),T=o(g+28),C=o(g+30),y=o(g+32),_=a(g+42);g+46+T+C+y>c&&He("Truncated ZIP member name.");let P,F=n.subarray(g+46,g+46+T);try{P=rl(Mp.decode(F))}catch{He("Unsafe ZIP member name.")}let k=a(g+38)>>>16&61440;(p.has(P.toLowerCase())||E&-2057||![0,8].includes(S)||![0,32768].includes(k)||o(g+34)||A>(P===r?In.json:i))&&He("Unsafe, duplicate, linked or oversized ZIP member."),p.add(P.toLowerCase()),v+=A,(v>t+In.json||_+30>h||a(_)!==67324752||o(_+6)!==E||o(_+8)!==S)&&He("Invalid ZIP local header or expanded size.");let q=o(_+26),H=_+30+q+o(_+28);(!Xx(n.subarray(_+30,_+30+q),F)||H+x>h||!(E&8)&&(a(_+18)!==x||a(_+22)!==A))&&He("ZIP local and central members differ."),f.push({name:P,length:A,crc:a(g+16),start:_,end:H+x}),g+=46+T+C+y}(g!==c||!f.some(b=>b.name===r))&&He("ZIP manifest is missing.");let m=[...f].sort((b,E)=>b.start-E.start);m.some((b,E)=>E&&b.start<m[E-1].end)&&He("Overlapping ZIP members.");let d=fu(n);Object.keys(d).length!==l&&He("ZIP member count differs.");for(let b of f)(!Object.hasOwn(d,b.name)||d[b.name].length!==b.length||Yx(d[b.name])!==b.crc)&&He("ZIP member size or CRC differs.");return d}async function Zx(n){let e=$x(n,{maxMembers:In.members+1,total:In.total,file:In.file,manifest:"transfer.json"}),t=Fh(e["transfer.json"]);(!Bs(t,["format","kind","project_id","identity","edits","files"])||t.format!==1||t.kind!=="creator-authored-transfer"||!Nh.test(t.project_id)||!Ji(t.files))&&He("Unsupported authored transfer.");let i=t.identity;(!Bs(i,["cdf","key","attachment","source_hashes"])||typeof i.cdf!="string"||!i.cdf.toLowerCase().endsWith(".cdf")||!/^skin-[a-f0-9]{24}$/.test(i.key)||typeof i.attachment!="string"||i.attachment.length<1||i.attachment.length>120||/[\x00-\x1f/\\:]/.test(i.attachment)||!Ji(i.source_hashes))&&He("Invalid native attachment identity."),rl(i.cdf),i.key!=="skin-"+(await Uh(Wx.encode(i.cdf.toLowerCase()))).slice(0,24)&&He("Native CDF key differs.");let r=Object.entries(i.source_hashes),s=new Set;(!r.length||r.length>In.members||!Object.hasOwn(i.source_hashes,i.cdf))&&He("Native source pins are missing.");for(let[h,u]of r)rl(h),(!/\.(cdf|skin|mtl|chr|cgf|cga|caf|dds|xml|adb|chrparams|bank)$/i.test(h)&&!/\.dds\.(\d+a?|a)$/i.test(h)||!Nh.test(u)||s.has(h.toLowerCase()))&&He("Invalid or ambiguous native source pin."),s.add(h.toLowerCase());let o=Object.entries(t.files);(!o.length||o.length>In.members||Object.keys(e).length!==o.length+1)&&He("Transfer member count differs from its manifest.");let a=0;for(let[h,u]of o)rl(h),(!Bs(u,["sha256","size"])||!Nh.test(u.sha256)||!Number.isSafeInteger(u.size)||u.size<1||u.size>In.file||!Object.hasOwn(e,h)||h==="transfer.json"||e[h].length!==u.size||await Uh(e[h])!==u.sha256)&&He("Transfer member hash or size differs."),a+=u.size,a>In.total&&He("Expanded transfer payload exceeds its budget."),h.endsWith(".json")&&Fh(e[h]);(!Bs(t.edits,["surface","animations","sounds"])||!Ji(t.edits.animations)||!Ji(t.edits.sounds)||t.edits.surface!==null&&t.edits.surface!=="surface.json")&&He("Invalid transfer edit schema.");let c=new Set;if(t.edits.surface!==null){e["surface.json"]||He("Missing authored surface."),c.add("surface.json");let h=Fh(e["surface.json"]);(h.format!==1||!Array.isArray(h.meshes)||!h.meshes.length||h.meshes.length>64)&&He("Invalid authored surface envelope.");for(let u of h.meshes){Ji(u.material)||He("Invalid authored surface material.");for(let f of["image","normal","specular"])if(u.material[f]){let p=u.material[f];(typeof p!="string"||!/^[a-f0-9]{64}\.(png|jpg|jpeg|bmp|tga|dds)$/.test(p)||!e["images/"+p]||await Uh(e["images/"+p])!==p.split(".")[0])&&He("Authored image is missing or changed."),c.add("images/"+p)}}}for(let[h,u]of Object.entries(t.edits.animations))(!/^[a-f0-9]{16}$/.test(h)||u!=="animations/"+h+".json")&&He("Invalid authored animation path."),c.add(u);for(let[h,u]of Object.entries(t.edits.sounds))(!/^[a-f0-9]{24}$/.test(h)||!Bs(u,["file","gain","source"])||u.file!=="sounds/"+h+".wav"||typeof u.gain!="number"||!Number.isFinite(u.gain)||u.gain<0||u.gain>4||!Ji(u.source))&&He("Invalid authored sound path or gain."),c.add(u.file);(c.size!==o.length||o.some(([h])=>!c.has(h)))&&He("Transfer contains undeclared or unused edits.");let l=Object.create(null);for(let[h,u]of Object.entries(e))h!=="transfer.json"&&(l[h]=u);return{manifest:t,expanded:a,payload:l}}async function bp(n){let{manifest:e,payload:t}=await Zx(n);return(e.edits.surface!=="surface.json"||Object.keys(e.edits.animations).length||Object.keys(e.edits.sounds).length||Object.keys(t).some(i=>i!=="surface.json"&&!/^images\/[a-f0-9]{64}\.png$/.test(i)))&&He("Expected a surface-and-PNG texture transfer."),{manifest:e,payload:t}}var si=n=>{throw new Error(`Texture padding: ${n}`)},Oh=n=>Array.isArray(n)&&n.length===2&&n.every(Number.isFinite),Hr=(n,e)=>(n%e+e)%e;function Ep(n,{surface:e,nativeSlot:t,uvTransform:i={repeat:[1,1],offset:[0,0]},pixels:r}={}){let{width:s,height:o,data:a}=n??{};(!Number.isInteger(s)||!Number.isInteger(o)||s<1||o<1||s>8192||o>8192||s*o>16777216||!(a instanceof Uint8Array||a instanceof Uint8ClampedArray)||a.length!==s*o*4)&&si("expected straight RGBA bytes, dimensions 1..8192 and at most 16 megapixels."),(!Number.isInteger(r)||r<1||r>32)&&si("radius must be an integer in 1..32."),(!Number.isInteger(t)||t<0||!Array.isArray(e?.meshes))&&si("invalid native slot or surface.");let{repeat:c,offset:l}=i??{};(!Oh(c)||!Oh(l)||c.some(T=>T===0||Math.abs(T)>256)||l.some(T=>Math.abs(T)>256))&&si("invalid native UV transform.");let h=e.meshes.filter(T=>T.native_slot===t);h.length||si("native slot is absent from the source surface.");let u=0;for(let T of h){(!Array.isArray(T.uv)||!(Array.isArray(T.indices)||ArrayBuffer.isView(T.indices))||!Number.isInteger(T.indices.length)||T.indices.length%3)&&si("invalid source UV mesh.");for(let C of T.uv)(!Oh(C)||C.some(y=>Math.abs(y)>256))&&si("invalid or unbounded source UV coordinate.");for(let C=0;C<T.indices.length;C+=3){let y=[];for(let F=0;F<3;F++){let k=T.indices[C+F];(!Number.isInteger(k)||k<0||k>=T.uv.length)&&si("invalid source triangle index."),y.push(T.uv[k].map((q,H)=>q*c[H]+l[H]))}let _=wp(y),P=(_[1]-_[0]+1)*(_[3]-_[2]+1);u+=P,(P>262144||u>2e7)&&si("source UV repeat-copy budget exceeded.")}}let f=new Uint8ClampedArray(a),p=s*o,g=new Int32Array(p).fill(-1),v=new Uint32Array(o),m=0;e:for(let T of h)for(let C=0;C<T.indices.length;C+=3){let y=Array.from({length:3},(H,I)=>T.uv[T.indices[C+I]].map((G,z)=>G*c[z]+l[z])),_=(y[1][0]-y[0][0])*(y[2][1]-y[0][1])-(y[1][1]-y[0][1])*(y[2][0]-y[0][0]);if(Math.abs(_*s*o)<1e-12)continue;let[P,F,k,q]=wp(y);for(let H=k;H<=q;H++)for(let I=P;I<=F;I++){let G=y.map(([B,$])=>[(B+I)*s,($+H)*o]),z=Math.max(0,Math.ceil(Math.min(...G.map(B=>B[1]))-.5)),L=Math.min(o-1,Math.floor(Math.max(...G.map(B=>B[1]))-.5));for(let B=z;B<=L;B++){if(v[B]===s)continue;let $=B+.5,Q=1/0,ie=-1/0;for(let N=0;N<3;N++){let W=G[N],oe=G[(N+1)%3];if(Math.abs(W[1]-oe[1])<1e-12||$<Math.min(W[1],oe[1])-1e-10||$>Math.max(W[1],oe[1])+1e-10)continue;let ee=W[0]+($-W[1])*(oe[0]-W[0])/(oe[1]-W[1]);Q=Math.min(Q,ee),ie=Math.max(ie,ee)}let re=Math.max(0,Math.ceil(Q-.5-1e-10)),J=Math.min(s-1,Math.floor(ie-.5+1e-10));for(let N=re;N<=J;N++){let W=B*s+N;g[W]<0&&(g[W]=W,v[B]++,m++)}}if(m===p)break e}}if(!m||m===p)return{width:s,height:o,data:f,changedPixels:0};for(let T=0;T<o;T++){if(!v[T]||v[T]===s)continue;let C=T*s,y=0;for(;g[C+y]!==C+y;)y++;let _=y;for(let P=1;P<s;P++){let F=(y+P)%s,k=C+F;g[k]===k?_=F:g[k]=C+_}_=y;for(let P=1;P<s;P++){let F=Hr(y-P,s),k=C+F;if(g[k]===k)_=F;else{let q=g[k],H=Hr(F-q%s,s),I=Hr(_-F,s);(I<H||I===H&&C+_<q)&&(g[k]=C+_)}}}let d=new Int32Array(o*3),b=new Float64Array(o*3),E=new Int32Array(o),S=new Int32Array(o),x=r*r,A=0;for(let T=0;T<s;T++){for(let _=0;_<o;_++){let P=g[_*s+T];S[_]=P;let F=P<0?1/0:Math.abs(T-P%s),k=Math.min(F,s-F);E[_]=P<0||k>r?-1:k*k}let C=-1;for(let _=-o;_<o*2;_++){let P=Hr(_,o),F=E[P];if(F<0)continue;let k=-1/0;for(;C>=0;){let q=d[C],H=Hr(q,o),I=F+_*_-E[H]-q*q,G=2*(_-q);if(k=S[P]<S[H]?Math.ceil(I/G):Math.floor(I/G)+1,k>b[C])break;C--}C<0&&(k=-1/0),d[++C]=_,b[C]=k}if(C<0)continue;let y=0;for(let _=0;_<o;_++){let P=_*s+T;if(g[P]===P)continue;for(;y<C&&b[y+1]<=_;)y++;let F=d[y],k=Hr(F,o);if(E[k]+(_-F)**2>x)continue;let q=S[k]*4,H=P*4,I=!1;for(let G=0;G<4;G++)f[H+G]!==a[q+G]&&(I=!0),f[H+G]=a[q+G];I&&A++}}return{width:s,height:o,data:f,changedPixels:A}}function wp(n){let e=n.map(i=>i[0]),t=n.map(i=>i[1]);return[Math.floor(-Math.max(...e)),Math.ceil(1-Math.min(...e)),Math.floor(-Math.max(...t)),Math.ceil(1-Math.min(...t))]}var sn=Object.freeze({baseColor:"image",normalGloss:"normal",specular:"specular"}),zh=/^[a-f0-9]{64}\.(png|jpg|jpeg|bmp|tga|dds)$/,Cp=64*1024*1024,kn=n=>n.native_slot??n.material?.native_slot,ke=n=>{throw new Error(n)},al=n=>Array.isArray(n)&&n.length===2&&n.every(Number.isFinite),zs=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),cl=Object.freeze({repeat:[1,1],offset:[0,0]});function kh(n,e=cl){return(!al(n)||!al(e?.repeat)||!al(e?.offset)||e.repeat.some(t=>t===0||Math.abs(t)>256)||e.offset.some(t=>Math.abs(t)>256))&&ke("Invalid native texture UV transform."),n.map((t,i)=>t*e.repeat[i]+e.offset[i])}function jx(n){(n?.format!==1||typeof n.id!="string"||!n.id||!zs(n.project)||typeof n.project.templateId!="string"||!Array.isArray(n.project.surface?.meshes)||!n.project.surface.meshes.length||!Array.isArray(n.project.rig?.bones))&&ke("Invalid preview kit.");let e=n.project.surface.meshes,t=new Set;(!Array.isArray(n.textureSlots)||n.textureSlots.length>192)&&ke("Invalid kit texture slots.");for(let r of n.textureSlots){let s=`${r.nativeSlot}:${r.role}`;(!Number.isInteger(r.nativeSlot)||r.nativeSlot<0||!Object.hasOwn(sn,r.role)||t.has(s)||![r.width,r.height].every(o=>Number.isInteger(o)&&o>0&&o<=8192)||!e.some(o=>kn(o)===r.nativeSlot))&&ke("Invalid or duplicate kit texture slot."),t.add(s),r.uvTransform!==void 0&&kh([0,0],r.uvTransform)}let i=new Set;for(let r of n.zones??[]){(typeof r.id!="string"||!r.id||i.has(r.id))&&ke("Invalid or duplicate kit zone."),i.add(r.id),(!Array.isArray(r.selections??[])||!Array.isArray(r.meshIndices??[]))&&ke("Invalid zone selection.");for(let s of r.meshIndices??[])(!Number.isInteger(s)||!e[s])&&ke("Zone names a missing mesh.");for(let s of r.selections??[]){let o=e[s.mesh];(!Number.isInteger(s.mesh)||!o||!Array.isArray(s.triangles)||!s.triangles.length||s.triangles.some(a=>!Number.isInteger(a)||a<0||a>=o.indices.length/3))&&ke("Zone names a missing triangle.")}}return n}function sl(n,e){let t=new Map;for(let i of e.meshIndices??[])t.set(i,new Set(Array.from({length:n.meshes[i].indices.length/3},(r,s)=>s)));for(let i of e.selections??[]){t.has(i.mesh)||t.set(i.mesh,new Set);for(let r of i.triangles)t.get(i.mesh).add(r)}return[...t].map(([i,r])=>({mesh:i,triangles:[...r].sort((s,o)=>s-o)}))}function Jx(n,e,t,i=cl){al(e)||ke("Choose a finite UV coordinate.");let r=[],s=e.map(o=>o-Math.floor(o));return n.meshes.forEach((o,a)=>{if(!(t!==void 0&&kn(o)!==t))for(let c=0;c<o.indices.length;c+=3){let l=o.indices.slice(c,c+3),[h,u,f]=l.map(d=>kh(o.uv[d],i)),p=(u[1]-f[1])*(h[0]-f[0])+(f[0]-u[0])*(h[1]-f[1]);if(Math.abs(p)<1e-12)continue;let g=[0,1].map(d=>Math.ceil(Math.min(h[d],u[d],f[d])-s[d]-1e-8)),v=[0,1].map(d=>Math.floor(Math.max(h[d],u[d],f[d])-s[d]+1e-8));if((v[0]-g[0]+1)*(v[1]-g[1]+1)>256)continue;let m=null;for(let d=g[0];d<=v[0]&&!m;d++)for(let b=g[1];b<=v[1]&&!m;b++){let E=[s[0]+d,s[1]+b],S=((u[1]-f[1])*(E[0]-f[0])+(f[0]-u[0])*(E[1]-f[1]))/p,x=((f[1]-h[1])*(E[0]-f[0])+(h[0]-f[0])*(E[1]-f[1]))/p,A=[S,x,1-S-x];A.every(T=>T>=-1e-7&&T<=1+1e-7)&&(m={meshIndex:a,faceIndex:c/3,nativeSlot:kn(o),uv:E,weights:A,indices:l})}m&&r.push(m)}}),r}function Kx(n,e,t=""){(/\.ps[db]$/i.test(t)||n?.[0]===56&&n?.[1]===66&&n?.[2]===80&&n?.[3]===83)&&ke("Export a PNG from Photoshop, then load that PNG here. PSD and PSB files are not preview images."),(!(n instanceof Uint8Array)||n.byteLength>Cp)&&ke("Use a PNG file of at most 64 MiB.");let i=Si(n);return(i.width!==e.width||i.height!==e.height)&&ke(`This texture needs a ${e.width} \xD7 ${e.height} PNG.`),i}function Qx(n,e,t){(!["normal","gloss"].includes(t)||n.width!==e.width||n.height!==e.height||n.data.length!==e.data.length)&&ke("Normal and gloss maps must have the same dimensions.");let i=new Uint8ClampedArray(n.data);for(let r=0;r<i.length;r+=4)t==="normal"?(i[r]=e.data[r],i[r+1]=e.data[r+1],i[r+2]=e.data[r+2]):((e.data[r]!==e.data[r+1]||e.data[r]!==e.data[r+2])&&ke("Use a greyscale PNG for gloss."),i[r+3]=e.data[r]);return{width:n.width,height:n.height,data:i}}function hl(n){let e="";for(let t=0;t<n.length;t+=32768)e+=String.fromCharCode(...n.subarray(t,t+32768));return btoa(e)}function Ki(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):((typeof n!="string"||!/^[A-Za-z0-9+/]*={0,2}$/.test(n))&&ke("Kit images need bytes or plain base64 data."),Uint8Array.from(atob(n),e=>e.charCodeAt(0)))}async function ll(n){return globalThis.crypto?.subtle||ke("This browser does not provide local SHA-256 support."),[...new Uint8Array(await globalThis.crypto.subtle.digest("SHA-256",n))].map(e=>e.toString(16).padStart(2,"0")).join("")}function Rp(n,e,t){Object.hasOwn(sn,t)||ke("Choose an existing texture role.");let i=new Set(n.surface.meshes.filter(s=>kn(s)===e).map(s=>s.material[sn[t]])),r=[...i][0];return(i.size!==1||!r?.endsWith(".png")||!n.images[r])&&ke("This slot needs one current PNG for that role."),{image:r,bytes:new Uint8Array(Ki(n.images[r]))}}async function eS(n){(!n.portable?.project_id||!zs(n.portable.identity))&&ke("This kit has no pinned Windows transfer identity.");let e=new TextEncoder,t={"surface.json":e.encode(JSON.stringify(n.surface))},i=new Set(n.surface.meshes.flatMap(o=>Object.values(sn).map(a=>o.material[a])).filter(Boolean));for(let o of i){zh.test(o)||ke("Invalid transfer image reference.");let a=Ki(n.images[o]);await ll(a)!==o.split(".")[0]&&ke("Transfer image bytes differ from their content hash."),t["images/"+o]=a}let r={};for(let[o,a]of Object.entries(t))r[o]={sha256:await ll(a),size:a.length};let s={format:1,kind:"creator-authored-transfer",project_id:n.portable.project_id,identity:structuredClone(n.portable.identity),edits:{surface:"surface.json",animations:{},sounds:{}},files:r};return t["transfer.json"]=e.encode(JSON.stringify(s)),{blob:new Blob([Al(t,{level:3})],{type:"application/zip"}),filename:`${n.templateId.replace(/[^a-z0-9_-]/gi,"-")}-textures.zip`,manifest:s}}async function tS(n,e,t,i=16){let r={...n,surface:structuredClone(n.surface),images:{...n.images}},s=new Set(t.map(({nativeSlot:o,role:a})=>Rp(n,o,a).image));for(let o of s){let a=[];for(let f of n.surface.meshes)for(let[p,g]of Object.entries(sn)){if(f.material[g]!==o)continue;let v=e.find(m=>m.nativeSlot===kn(f)&&m.role===p);v||ke("A shared export image is missing its native channel transform."),a.push({native_slot:0,indices:f.indices,uv:f.uv.map(m=>kh(m,v.uvTransform??cl))})}let c=Si(Ki(n.images[o])),l=Ep(c,{surface:{meshes:a},nativeSlot:0,pixels:i});if(!l.changedPixels)continue;let h=Qc(l),u=await ll(h)+".png";r.images[u]=hl(h);for(let f of r.surface.meshes)for(let p of Object.values(sn))f.material[p]===o&&(f.material[p]=u)}return r}function ol(n){return JSON.stringify(n,(e,t)=>zs(t)?Object.fromEntries(Object.keys(t).sort().map(i=>[i,t[i]])):t)}function Tp(n){let e=structuredClone(n);for(let t of e.meshes)for(let i of Object.values(sn))delete t.material[i];return e}async function nS(n,e){let{manifest:t,payload:i}=await bp(e);(t.project_id!==n.portable?.project_id||ol(t.identity)!==ol(n.portable.identity))&&ke("This texture draft belongs to another source kit.");let r=JSON.parse(new TextDecoder("utf-8",{fatal:!0}).decode(i["surface.json"]));(!zs(r)||!Array.isArray(r.meshes)||ol(Tp(r))!==ol(Tp(n.surface)))&&ke("A texture draft cannot change the native geometry or material constants.");let s={},o=new Set;for(let a=0;a<n.surface.meshes.length;a++)for(let c of Object.values(sn)){let l=n.surface.meshes[a].material[c],h=r.meshes[a].material[c];if((!!l!=!!h||h&&(!zh.test(h)||!h.endsWith(".png")))&&ke("A texture draft cannot add or remove a native channel."),!h)continue;let u=i["images/"+h];u||ke("A texture draft is missing a channel image.");let f=Si(u),p=Si(Ki(n.images[l]));(f.width!==p.width||f.height!==p.height)&&ke("A texture draft must preserve each native channel size."),o.add("images/"+h),s[h]=hl(u)}return Object.keys(i).some(a=>a!=="surface.json"&&!o.has(a))&&ke("A texture draft contains an unused image."),{...n,surface:r,images:{...n.images,...s}}}async function Bh(n,e){let t={...n??{}};for(let[i,r]of Object.entries(t))zh.test(i)||ke("Kit image names must be content-addressed."),t[i]=typeof r=="string"&&r?r:hl(Ki(r??await e?.(i)));return t}async function Ap(n,e){if(!n)return null;let t=async i=>i&&{...i,...i.images?{images:await Bh(i.images,e)}:{},...zs(i.materials)?{materials:{...i.materials,images:await Bh(i.materials.images,e)}}:{}};return{...n,materials:await t(n.materials),companions:await Promise.all((n.companions??[]).map(t)),assets:Object.fromEntries(await Promise.all(Object.entries(n.assets??{}).map(async([i,r])=>[i,await t(r)])))}}async function Pp(n,e,t={}){jx(e);let i=n?.ownerDocument;(!i||typeof n.appendChild!="function")&&ke("Choose a preview container.");let r=e.project,s={...r,images:await Bh(r.images,t.readImage),animations:r.animations??{},surface:{...r.surface,meshes:r.surface.meshes.map(L=>({...L,material:{...L.material,color:[...L.material.color]}}))}},o=n.getContext?n:i.createElement("canvas"),a=o!==n;a&&(Object.assign(o.style,{width:"100%",height:"100%",display:"block",touchAction:"none"}),n.appendChild(o));let c=s.surface.meshes.map(L=>({...L.material})),l=new Map,h=[],u=[],f=[],p,g,v=null,m=null,d=[],b=null,E=!1,S=!1,x=!1,A=null,T=e.lighting?.film?.exposure??1.2,C=Promise.resolve(),y=()=>{S&&ke("This kit preview is disposed.")},_=()=>t.onState?.(F()),P=L=>{A=L.message,t.onError?.(L),_()},F=()=>({kitId:e.id,templateId:s.templateId,ready:E,disposed:S,loading:x,error:A,selectedZone:v,selectedMesh:p?.selectedIndex??-1,animation:m,motion:m?.startsWith("source:")?p?.sourceState():p?{time:p.time,duration:p.duration,playing:p.playing}:null,view:p?.view==="held"?"held":"overview",environment:p?.environmentMode??"studio",source:p?.previewInfo()??null,effect:p?.effectState()??{id:null,playing:!1},overrides:[...l.values()].map(L=>({...L})),pick:b,marker:d.map(({meshIndex:L,faceIndex:B,nativeSlot:$,uv:Q})=>({meshIndex:L,faceIndex:B,nativeSlot:$,uv:[...Q]}))}),k=L=>{let B=C.then(async()=>{y(),x=!0,A=null,_();try{return await L()}catch($){throw A=$.message,t.onError?.($),$}finally{x=!1,_()}});return C=B.catch(()=>{}),B},q=()=>d.forEach((L,B)=>{let $=p.model?.meshes[L.meshIndex],Q=u[B];if(!$||!Q)return;let ie=new U;L.indices.forEach((re,J)=>ie.addScaledVector($.getVertexPosition(re,new U),L.weights[J])),Q.position.copy(ie),Q.updateMatrixWorld(!0)}),H=()=>(q(),p.frame(),_(),F()),I=L=>{for(let B of L.splice(0))B.removeFromParent(),B.geometry.dispose(),B.material.dispose()},G=(L,B)=>{o.addEventListener(L,B),f.push(()=>o.removeEventListener(L,B))};try{if(p=new el(o,{selectionOutline:!1,onError:P,onFrame:()=>{q(),_()}}),e.lighting&&(p.renderPipeline=Sp(e.lighting)),await p.load(s),g=await Ap(e.previewAssets??await t.readPreview?.("overview"),t.readImage),g){let B=Ya(g);(!B||B.errors.length)&&ke(B?.errors.join(" ")||"Invalid source preview data."),await p.setPreviewAssets(g)}e.lighting?.environmentPlacement&&p.setEnvironment("native"),p.listEffects().length&&!globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches&&p.playEffect();let L=null;G("pointerdown",B=>{B.button===0&&(L={x:B.clientX,y:B.clientY,id:B.pointerId})}),G("pointercancel",()=>{L=null}),G("pointerup",B=>{let $=L;if(L=null,!$||$.id!==B.pointerId||Math.hypot(B.clientX-$.x,B.clientY-$.y)>=4)return;let Q=p._hit(B.clientX,B.clientY);if(!Q?.uv)return;let ie=Q.object.userData.meshIndex,re=Q.faceIndex;b={meshIndex:ie,faceIndex:re,nativeSlot:kn(s.surface.meshes[ie]),uv:[Q.uv.x,Q.uv.y],zoneIds:(e.zones??[]).filter(J=>sl(s.surface,J).some(N=>N.mesh===ie&&N.triangles.includes(re))).map(J=>J.id)},t.onPick?.(structuredClone(b)),_()}),E=!0,H()}catch(L){throw p?.dispose(),a&&o.remove(),L}let z={getState:F,listEffects:()=>p.listEffects(),effectState:()=>p.effectState(),setEffectProgress(L,B){return y(),p.setEffectProgress(L,B),H()},playEffect(L){return y(),p.playEffect(L),H()},pauseEffect(){return y(),p.pauseEffect(),H()},listTextureSlots:()=>e.textureSlots.map(L=>({...L})),getLightingInfo:()=>e.lighting?{profile:e.lighting.profile,exposure:T,min:.125,max:8,nativeEnvironment:!!e.lighting.environmentPlacement,limits:[...e.lighting.limits??[]]}:null,setExposure(L){return y(),(!e.lighting||!Number.isFinite(L)||L<.125||L>8)&&ke("Choose a source exposure between 0.125 and 8."),T=L,p.renderPipeline.setExposure(L),H()},readTexture(L,B){y();let $=e.textureSlots.find(Q=>Q.nativeSlot===L&&Q.role===B);return $||ke("Choose an existing texture slot and role."),{...$,...Rp(s,L,B)}},listZones:()=>(e.zones??[]).map(L=>({...L,selections:sl(s.surface,L)})),listAnimations:()=>[...p.sourceActions().map(L=>({...L,id:`source:${L.id}`,kind:"source",requiresHeld:!L.weapon})),...Object.entries(s.animations).map(([L,B])=>({id:`preset:${L}`,label:B.label??B.name??L,kind:"preset",duration:Vr(B).duration}))],replacePNG:({nativeSlot:L,role:B,channel:$,bytes:Q,file:ie})=>k(async()=>{let re=e.textureSlots.find(ee=>ee.nativeSlot===L&&ee.role===B);re||ke("Choose an existing texture slot and role."),$!==void 0&&(B!=="normalGloss"||!["normal","gloss"].includes($))&&ke("Choose normal or gloss within the normal/gloss role."),ie&&ie.size>Cp&&ke("Use a PNG file of at most 64 MiB."),Q===void 0&&typeof ie?.arrayBuffer!="function"&&ke("Choose a PNG file.");let J=Q===void 0?new Uint8Array(await ie.arrayBuffer()):Ki(Q),N=Kx(J,re,ie?.name);if($!==void 0){let ee=new Set(s.surface.meshes.filter(Re=>kn(Re)===L).map(Re=>Re.material.normal)),ne=[...ee][0];(ee.size!==1||!ne?.endsWith(".png")||!s.images[ne])&&ke("This slot needs one current normal/gloss PNG before merging a channel."),J=Qc(Qx(Si(Ki(s.images[ne])),N,$))}let W=await ll(J)+".png";s.images[W]=hl(J);for(let ee of s.surface.meshes)kn(ee)===L&&(ee.material[sn[B]]=W);await p.refreshMaterials(s),l.set(`${L}:${B}`,{nativeSlot:L,role:B,image:W,width:re.width,height:re.height});let oe=new Set(s.surface.meshes.flatMap(ee=>Object.values(sn).map(ne=>ee.material[ne])));for(let ee of Object.keys(s.images))!oe.has(ee)&&!Object.hasOwn(r.images??{},ee)&&delete s.images[ee];return H()}),resetTexture:(L,B)=>k(async()=>(e.textureSlots.some($=>$.nativeSlot===L&&$.role===B)||ke("Choose an existing texture slot and role."),s.surface.meshes.forEach(($,Q)=>{if(kn($)===L){let ie=c[Q][sn[B]];ie?$.material[sn[B]]=ie:delete $.material[sn[B]]}}),await p.refreshMaterials(s),l.delete(`${L}:${B}`),H())),selectZone(L){y();let B=(e.zones??[]).find($=>$.id===L);L!==null&&!B&&ke("Choose an existing kit zone."),I(h),v=L;for(let $ of B?sl(s.surface,B):[]){let Q=p.model.meshes[$.mesh],ie=new zt;for(let N of["position","skinIndex","skinWeight"])ie.setAttribute(N,Q.geometry.attributes[N].clone());ie.setIndex($.triangles.flatMap(N=>s.surface.meshes[$.mesh].indices.slice(N*3,N*3+3)));let re=new mi({color:16762714,transparent:!0,opacity:.38,side:Ut,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),J=new Ui(ie,re);J.bind(Q.skeleton,Q.bindMatrix),J.bindMode=Q.bindMode,J.frustumCulled=!1,Q.add(J),h.push(J)}return B&&p.selectMesh(sl(s.surface,B)[0]?.mesh??-1),H()},highlightUV(L,B,$="baseColor"){let Q=e.textureSlots.find(re=>re.nativeSlot===B&&re.role===$);y(),I(u),d=L===null?[]:Jx(s.surface,L,B,Q?.uvTransform??cl);let ie=Math.max(p.model.meshes.reduce((re,J)=>Math.max(re,J.boundingSphere?.radius??0),0)*.012,5e-4);for(let re of d.slice(0,64)){let J=new St(new ds(ie,8,6),new mi({color:16762714,depthTest:!1,depthWrite:!1}));J.renderOrder=10,J.frustumCulled=!1,p.model.meshes[re.meshIndex].add(J),u.push(J)}return H()},setView:L=>k(async()=>{if(["overview","held"].includes(L)||ke("Choose overview or held view."),L==="held"&&!p.previewInfo().held&&t.readPreview){let B=await Ap(await t.readPreview("hands"),t.readImage);g={...g,assets:{...g?.assets,...B?.assets}},await p.setPreviewAssets(g)}return p.setViewMode(L==="held"?"held":"object"),H()}),setEnvironment:L=>k(async()=>(["studio","native"].includes(L)||ke("Choose studio or native environment."),p.setEnvironment(L),H())),setAnimation(L){if(y(),L===null){p.pause(),p.pauseSourceAction(),m=p.sourceMotion=p.presetToken=p.driver=null,p.time=p.duration=0,p.authoredRig&&Yi(p.authoredRig),p._poseSource(!0),p.model.group.updateMatrixWorld(!0),p.model.skeleton.update();for(let $ of p.model.meshes)$.computeBoundingBox(),$.computeBoundingSphere();return H()}let B=z.listAnimations().find($=>$.id===L);return B||ke("Choose an available source animation."),p.pause(),p.pauseSourceAction(),m=L,B.kind==="source"?p.selectSourceAction(L.slice(7)):(p.play(L.slice(7)),p.pause(),p.seek(0)),H()},play(){return y(),m||ke("Choose an animation first."),m.startsWith("source:")?p.playSourceAction(m.slice(7)):p.play(m.slice(7)),H()},pause(){return y(),p.pause(),p.pauseSourceAction(),H()},seek(L){return y(),m||ke("Choose an animation first."),m.startsWith("source:")?p.seekSourceAction(L):p.seek(L),H()},fit(){return y(),p.fit(),H()},capture(){return y(),q(),p.snapshot()},exportTransfer:({padding:L=!0}={})=>k(async()=>(typeof L!="boolean"&&ke("Choose whether this export includes UV margins."),eS(L?await tS(s,e.textureSlots,[...l.values()]):s))),restoreTransfer:L=>k(async()=>{let B=await nS(r,L),$={surface:s.surface,images:s.images};s.surface=B.surface,s.images=B.images;try{await p.refreshMaterials(s)}catch(Q){throw s.surface=$.surface,s.images=$.images,Q}l.clear();for(let Q of e.textureSlots){let ie=sn[Q.role],re=s.surface.meshes.findIndex(N=>kn(N)===Q.nativeSlot),J=s.surface.meshes[re].material[ie];J!==r.surface.meshes[re].material[ie]&&l.set(`${Q.nativeSlot}:${Q.role}`,{nativeSlot:Q.nativeSlot,role:Q.role,image:J,width:Q.width,height:Q.height})}return H()}),dispose(){if(!S){S=!0,I(h),I(u);for(let L of f)L();p.dispose(),a&&o.remove(),_()}}};return Object.freeze(z)}var Up=/^[a-f0-9]{64}$/,Fp=/^[a-z0-9][a-z0-9_-]{0,79}$/,iS=128*1024*1024,rS=256*1024*1024,Ip=new Set(["__proto__","constructor","prototype"]),ul,Vn=n=>n?.throwIfAborted(),Op=async n=>[...new Uint8Array(await crypto.subtle.digest("SHA-256",n))].map(e=>e.toString(16).padStart(2,"0")).join("");function Dp(n,e,t){if(!n||n.path!==`${e}/${t}${e==="models"?".json":""}.gz`||!Number.isSafeInteger(n.bytes)||n.bytes<1||n.bytes>iS||!Number.isSafeInteger(n.decodedBytes)||n.decodedBytes<1||n.decodedBytes>rS||!Up.test(n.sha256))throw Error("Invalid preview data identity.");return n}function sS(n){if(!n||n.format!==1||!n.models||!n.strings||typeof n.dataBase!="string")throw Error("Invalid preview index.");let e=new URL(n.dataBase,import.meta.url);if(!e.pathname.endsWith("/")||e.search||e.hash||e.username||e.password||!(e.origin===new URL(import.meta.url).origin||e.protocol==="https:"&&e.hostname==="raw.githubusercontent.com"))throw Error("Invalid preview data location.");let t=Object.entries(n.models),i=Object.entries(n.strings);if(!t.length||t.length>512||i.length>8192)throw Error("Invalid preview index size.");for(let[r,s]of i){if(!Up.test(r))throw Error("Invalid preview string identity.");Dp(s,"strings",r)}for(let[r,s]of t){if(!Fp.test(r))throw Error("Invalid preview model identity.");if(Dp(s,"models",r),!Array.isArray(s.assetIds)||s.assetIds.length>1024||new Set(s.assetIds).size!==s.assetIds.length||s.assetIds.some(o=>!Object.hasOwn(n.strings,o)))throw Error("Preview model has missing data.")}return{...n,dataBase:e.href}}async function Lp(n,e,t,i){let r=n.getReader(),s=[],o=0;try{for(;;){Vn(i);let{value:l,done:h}=await r.read();if(h)break;if(o+=l.byteLength,o>e)throw Error("Preview data exceeds its pinned size.");s.push(l),t?.(l.byteLength)}if(o!==e)throw Error("Preview data is incomplete.");let a=new Uint8Array(o),c=0;for(let l of s)a.set(l,c),c+=l.byteLength;return a}finally{await r.cancel().catch(()=>{}),r.releaseLock()}}async function Np(n,e,{signal:t,onBytes:i}={}){Vn(t);let r=await fetch(new URL(n.path,e),{signal:t,credentials:"omit",referrerPolicy:"no-referrer",cache:"force-cache"});if(!r.ok||!r.body)throw Error(`Preview download failed (${r.status}).`);let s=await Lp(r.body,n.bytes,i,t);if(await Op(s)!==n.sha256)throw Error("Preview download checksum differs.");Vn(t);let o;if(globalThis.DecompressionStream)o=await Lp(new Blob([s]).stream().pipeThrough(new DecompressionStream("gzip")),n.decodedBytes,null,t);else if(o=lu(s),o.byteLength!==n.decodedBytes)throw Error("Preview data decoded size differs.");return Vn(t),o}function oS(n,e){if(!n||!n.data||!Array.isArray(n.references)||!Array.isArray(n.assetIds)||n.references.length>32768)throw Error("Invalid preview document.");for(let[t,i]of n.references){if(!Array.isArray(t)||!t.length||t.length>64||!Number.isInteger(i)||i<0||i>=n.assetIds.length)throw Error("Invalid preview data reference.");let r=n.data;for(let a of t.slice(0,-1)){if(!(typeof a=="string"||Number.isInteger(a))||Ip.has(String(a))||!r||!Object.hasOwn(r,a))throw Error("Invalid preview data route.");r=r[a]}let s=t.at(-1),o=e.get(n.assetIds[i]);if(!(typeof s=="string"||Number.isInteger(s))||Ip.has(String(s))||!r||!Object.hasOwn(r,s)||r[s]!==null||typeof o!="string")throw Error("Invalid preview data placeholder.");Object.defineProperty(r,s,{value:o,enumerable:!0,writable:!0,configurable:!0})}return n.data}async function aS(){return ul||(ul=fetch(new URL("./preview-index.json",import.meta.url),{credentials:"omit",cache:"no-cache"}).then(n=>{if(!n.ok)throw Error("Preview index is unavailable.");return n.json()}).then(sS).catch(n=>{throw ul=null,n})),ul}async function xE(n,e,{signal:t,onProgress:i}={}){if(!Fp.test(e))throw Error("Choose a known preview model.");Vn(t);let r=await aS();Vn(t);let s=r.models[e];if(!Object.hasOwn(r.models,e))throw Error("Preview model is unavailable.");let o=0,a=s.bytes+s.assetIds.reduce((d,b)=>d+r.strings[b].bytes,0),c=d=>{o+=d,i?.({loaded:o,total:a})};i?.({loaded:o,total:a});let l=await Np(s,r.dataBase,{signal:t,onBytes:c}),h=JSON.parse(new TextDecoder().decode(l));if(JSON.stringify(h.assetIds)!==JSON.stringify(s.assetIds))throw Error("Preview index and document differ.");let u=new Map,f=0,p=new AbortController,g=()=>p.abort(t.reason);t?.addEventListener("abort",g,{once:!0});try{await Promise.all(Array.from({length:Math.min(4,s.assetIds.length)},async()=>{for(;;){Vn(p.signal);let d=f++;if(d>=s.assetIds.length)break;let b=s.assetIds[d],E=await Np(r.strings[b],r.dataBase,{signal:p.signal,onBytes:c});if(await Op(E)!==b)throw Error("Preview string checksum differs.");u.set(b,new TextDecoder().decode(E))}}))}catch(d){throw p.abort(d),u.clear(),d}finally{t?.removeEventListener("abort",g)}Vn(t);let v=oS(h,u);if(u.clear(),v.id!==e)throw Error("Preview model identity differs.");let m;try{return m=await Pp(n,v),Vn(t),m.getState().source?.held&&await m.setView("held"),Vn(t),m}catch(d){throw m?.dispose(),d}}export{Np as fetchData,xE as loadPreview,oS as restoreKit,sS as validateManifest,Dp as validateRow};
