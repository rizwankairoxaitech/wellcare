(()=>{function Ui(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function fd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xr={duration:.5,overwrite:!1,delay:0},Rc,cn,Ee,Qn=1e8,ye=1/Qn,vc=Math.PI*2,gg=vc/4,_g=0,pd=Math.sqrt,vg=Math.cos,xg=Math.sin,Ge=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},Oi=function(t){return typeof t=="number"},So=function(t){return typeof t=="undefined"},Ti=function(t){return typeof t=="object"},Nn=function(t){return t!==!1},Pc=function(){return typeof window!="undefined"},po=function(t){return De(t)||Ge(t)},md=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},hn=Array.isArray,xc=/(?:-?\.?\d|\.)+/gi,Lc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ic=/[+-]=-?[.\d]+/,gd=/[^,'"\[\]\s]+/gi,yg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,wi,yc,Dc,Wn={},vo={},_d,vd=function(t){return(vo=Ns(t,Wn))&&un},wo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ea=function(t,e){return!e&&console.warn(t)},xd=function(t,e){return t&&(Wn[t]=e)&&vo&&(vo[t]=e)||Wn},Ta=function(){return 0},bg={suppressEvents:!0,isStart:!0,kill:!1},mo={suppressEvents:!0,kill:!1},Mg={suppressEvents:!0},Uc={},is=[],bc={},yd,Dn={},dc={},ad=30,go=[],Nc="",Oc=function(t){var e=t[0],n,i;if(Ti(e)||De(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=go.length;i--&&!go[i].targetTest(e););n=go[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Bc(t[i],n)))||t.splice(i,1);return t},ss=function(t){return t._gsap||Oc(ti(t))[0]._gsap},Fc=function(t,e,n){return(n=t[e])&&De(n)?t[e]():So(n)&&t.getAttribute&&t.getAttribute(e)||n},xn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},$e=function(t){return Math.round(t*1e7)/1e7||0},Fs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Sg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},xo=function(){var t=is.length,e=is.slice(0),n,i;for(bc={},is.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bd=function(t,e,n,i){is.length&&!cn&&xo(),t.render(e,n,i||cn&&e<0&&(t._initted||t._startAt)),is.length&&!cn&&xo()},Md=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(gd).length<2?e:Ge(t)?t.trim():t},Sd=function(t){return t},ei=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ns=function(t,e){for(var n in e)t[n]=e[n];return t},od=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ti(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},yo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ma=function(t){var e=t.parent||Re,n=t.keyframes?wg(hn(t.keyframes)):ei;if(Nn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Eg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},wd=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Eo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},rs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Is=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Tg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Mc=function(t,e,n,i){return t._startAt&&(cn?t._startAt.revert(mo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ag=function s(t){return!t||t._ts&&s(t.parent)},ld=function(t){return t._repeat?yr(t._tTime,t=t.duration()+t._rDelay)*t:0},yr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},bo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},To=function(t){return t._end=$e(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},Ao=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=$e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),To(t),n._dirty||Is(n,t)),t},Ed=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=bo(t.rawTime(),e),(!e._dur||Ra(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),Is(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},Ei=function(t,e,n,i){return e.parent&&rs(e),e._start=$e((Oi(n)?n:n||t!==Re?jn(t,n,e):t._time)+e._delay),e._end=$e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),wd(t,e,"_first","_last",t._sort?"_start":0),Sc(e)||(t._recent=e),i||Ed(t,e),t._ts<0&&Ao(t,t._tTime),t},Td=function(t,e){return(Wn.ScrollTrigger||wo("scrollTrigger",e))&&Wn.ScrollTrigger.create(e,t)},Ad=function(t,e,n,i,r){if(Vc(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&yd!==Un.frame)return is.push(t),t._lazy=[r,i],1},Cg=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Sc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Rg=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Cg(t)&&!(!t._initted&&Sc(t))||(t._ts<0||t._dp._ts<0)&&!Sc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Ra(0,t._tDur,e),h=yr(l,a),t._yoyo&&h&1&&(o=1-o),h!==yr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||cn||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&Ad(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Mc(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&rs(t,1),!n&&!cn&&(Gn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Pg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},br=function(t,e,n,i){var r=t._repeat,o=$e(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:$e(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Ao(t,t._tTime=t._tDur*a),t.parent&&To(t),n||Is(t.parent,t),t},cd=function(t){return t instanceof Qe?Is(t):br(t,t._dur)},Lg={_start:0,endTime:Ta,totalDuration:Ta},jn=function s(t,e,n){var i=t.labels,r=t._recent||Lg,o=t.duration()>=Qn?r.endTime(!1):t._dur,a,l,c;return Ge(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(hn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Sa=function(t,e,n){var i=Oi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;o.immediateRender=Nn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Fe(e[0],o,e[r+1])},as=function(t,e){return t||t===0?e(t):e},Ra=function(t,e,n){return n<t?t:n>e?e:n},tn=function(t,e){return!Ge(t)||!(e=yg.exec(t))?"":e[1]},Ig=function(t,e,n){return as(n,function(i){return Ra(t,e,i)})},wc=[].slice,Cd=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==wi},Dg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ge(i)&&!e||Cd(i,1)?(r=n).push.apply(r,ti(i)):n.push(i)})||n},ti=function(t,e,n){return Ee&&!e&&Ee.selector?Ee.selector(t):Ge(t)&&!n&&(yc||!Mr())?wc.call((e||Dc).querySelectorAll(t),0):hn(t)?Dg(t,n):Cd(t)?wc.call(t,0):t?[t]:[]},Ec=function(t){return t=ti(t)[0]||Ea("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ti(e,n.querySelectorAll?n:n===t?Ea("Invalid scope")||Dc.createElement("div"):t)}},Rd=function(t){return t.sort(function(){return .5-Math.random()})},Pd=function(t){if(De(t))return t;var e=Ti(t)?t:{each:t},n=Ds(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ge(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,y,v,b,A,T,S,O,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Qn])[1],!x){for(S=-Qn;S<(S=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=o[g]=[],p=l?Math.min(x,g)*h-.5:i%x,y=x===Qn?0:l?g*u/x-.5:i/x|0,S=0,O=Qn,T=0;T<g;T++)v=T%x-p,b=y-(T/x|0),m[T]=A=c?Math.abs(c==="y"?b:v):pd(v*v+b*b),A>S&&(S=A),A<O&&(O=A);i==="random"&&Rd(m),m.max=S-O,m.min=O,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=tn(e.amount||e.each)||0,n=n&&g<0?Bd(n):n}return g=(m[d]-m.min)/m.max||0,$e(m.b+(n?n(g):g)*m.v)+m.u}},Tc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=$e(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Oi(n)?0:tn(n))}},Ld=function(t,e){var n=hn(t),i,r;return!n&&Ti(t)&&(i=n=t.radius||Qn,t.values?(t=ti(t.values),(r=!Oi(t[0]))&&(i*=i)):t=Tc(t.increment)),as(e,n?De(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Qn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,r||h===o||Oi(o)?h:h+tn(o)}:Tc(t))},Id=function(t,e,n,i){return as(hn(t)?!e:n===!0?!!(n=0):!i,function(){return hn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ug=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Ng=function(t,e){return function(n){return t(parseFloat(n))+(e||tn(n))}},Og=function(t,e,n){return Ud(t,e,0,1,n)},Dd=function(t,e,n){return as(n,function(i){return t[~~e(i)]})},Fg=function s(t,e,n){var i=e-t;return hn(t)?Dd(t,s(0,t.length),e):as(n,function(r){return(i+(r-t)%i)%i+t})},kg=function s(t,e,n){var i=e-t,r=i*2;return hn(t)?Dd(t,s(0,t.length-1),e):as(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Sr=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?gd:xc),n+=t.substr(e,i-e)+Id(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Ud=function(t,e,n,i,r){var o=e-t,a=i-n;return as(r,function(l){return n+((l-t)/o*a||0)})},Bg=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Ge(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(hn(t)&&!hn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Ns(hn(t)?[]:{},t));if(!h){for(l in e)zc.call(a,t,l,"get",e[l]);r=function(_){return Xc(_,a)||(o?t.p:t)}}}return as(n,r)},hd=function(t,e,n){var i=t.labels,r=Qn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Gn=function(t,e,n){var i=t.vars,r=i[e],o=Ee,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&is.length&&xo(),a&&(Ee=a),h=l?r.apply(c,l):r.call(c),Ee=o,h},ya=function(t){return rs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!cn),t.progress()<1&&Gn(t,"onInterrupt"),t},vr,Nd=[],Od=function(t){if(t)if(t=!t.name&&t.default||t,Pc()||t.headless){var e=t.name,n=De(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ta,render:Xc,add:zc,kill:e0,modifier:t0,rawVars:0},o={targetTest:0,get:0,getSetter:Co,aliases:{},register:0};if(Mr(),t!==i){if(Dn[e])return;ei(i,ei(yo(t,r),o)),Ns(i.prototype,Ns(r,yo(t,o))),Dn[i.prop=e]=i,t.targetTest&&(go.push(i),Uc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}xd(e,i),t.register&&t.register(un,i,yn)}else Nd.push(t)},_e=255,ba={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},fc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*_e+.5|0},Fd=function(t,e,n){var i=t?Oi(t)?[t>>16,t>>8&_e,t&_e]:0:ba.black,r,o,a,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ba[t])i=ba[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&_e,i&_e,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&_e,t&_e]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(xc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=fc(l+1/3,r,o),i[1]=fc(l,r,o),i[2]=fc(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Lc),n&&i.length<4&&(i[3]=1),i}else i=t.match(xc)||ba.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/_e,o=i[1]/_e,a=i[2]/_e,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},kd=function(t){var e=[],n=[],i=-1;return t.split(Ni).forEach(function(r){var o=r.match(Os)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ud=function(t,e,n){var i="",r=(t+i).match(Ni),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Fd(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=kd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ni,"1").split(Os),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ni),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Ni=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ba)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),zg=/hsl[a]?\(/,kc=function(t){var e=t.join(" "),n;if(Ni.lastIndex=0,Ni.test(e))return n=zg.test(e),t[1]=ud(t[1],n),t[0]=ud(t[0],n,kd(t[1])),!0},Aa,Un=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,_=function g(m){var p=s()-i,y=m===!0,v,b,A,T;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,v=A-o,(v>0||y)&&(T=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,o+=v+(v>=r?4:r-v),b=1),y||(l=c(g)),b)for(f=0;f<a.length;f++)a[f](A,d,T,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){_d&&(!yc&&Pc()&&(wi=yc=window,Dc=wi.document||{},Wn.gsap=un,(wi.gsapVersions||(wi.gsapVersions=[])).push(un.version),vd(vo||wi.GreenSockGlobals||!wi.gsap&&wi||{}),Nd.forEach(Od)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Aa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ta},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,y){var v=p?function(b,A,T,S){m(b,A,T,S),u.remove(v)}:m;return u.remove(m),a[y?"unshift":"push"](v),Mr(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),Mr=function(){return!Aa&&Un.wake()},oe={},Hg=/^[\d.\-M][\d.\-,\s]/,Vg=/["']/g,Gg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Vg,"").trim():+c,i=l.substr(a+1).trim();return e},Wg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Xg=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Gg(e[1])]:Wg(t).split(",").map(Md)):oe._CE&&Hg.test(t)?oe._CE("",t):n},Bd=function(t){return function(e){return 1-t(1-e)}},zd=function s(t,e){for(var n=t._first,i;n;)n instanceof Qe?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ds=function(t,e){return t&&(De(t)?t:oe[t]||Xg(t))||e},ks=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return xn(t,function(a){oe[a]=Wn[a]=r,oe[o=a.toLowerCase()]=n;for(var l in r)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=r[l]}),r},Hd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},pc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/vc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*xg((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Hd(a);return r=vc/r,l.config=function(c,h){return s(t,c,h)},l},mc=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Hd(n);return i.config=function(r){return s(t,r)},i};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ks(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;ks("Elastic",pc("in"),pc("out"),pc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};ks("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);ks("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ks("Circ",function(s){return-(pd(1-s*s)-1)});ks("Sine",function(s){return s===1?1:-vg(s*gg)+1});ks("Back",mc("in"),mc("out"),mc());oe.SteppedEase=oe.steps=Wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ye;return function(a){return((i*Ra(0,o,a)|0)+r)*n}}};xr.ease=oe["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Nc+=s+","+s+"Params,"});var Bc=function(t,e){this.id=_g++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Fc,this.set=e?e.getSetter:Co},Ca=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,br(this,+e.duration,1,1),this.data=e.data,Ee&&(this._ctx=Ee,Ee.data.push(this)),Aa||Un.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Mr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ao(this,n),!r._dp||r.parent||Ed(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ld(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ld(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?yr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?bo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(Ra(-Math.abs(this._delay),this._tDur,r),i!==!1),To(this),Tg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ei(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mg);var i=cn;return cn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(jn(this,n),Nn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ye)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=De(n)?n:Sd,a=function(){var c=i.then;i.then=null,De(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ya(this)},s}();ei(Ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var Qe=function(s){fd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Nn(n.sortChildren),Re&&Ei(n.parent||Re,Ui(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Td(Ui(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Sa(0,arguments,this),this},e.from=function(i,r,o){return Sa(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Sa(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ma(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Fe(i,r,jn(this,o),1),this},e.call=function(i,r,o){return Ei(this,Fe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Fe(i,o,jn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ma(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,Ma(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:$e(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,y,v,b,A,T,S;if(this!==Re&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,b=this._start,v=this._ts,p=!v,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=$e(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),A=yr(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),T&&g&1&&(d=c-d,S=1),g!==A&&!this._lock){var O=T&&A&1,x=O===(T&&g&1);if(g<A&&(O=!O),a=O?0:h%c?c:h,this._lock=1,this.render(a||(S?0:$e(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=O?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;zd(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Pg(this,$e(a),$e(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(Gn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-ye);break}}f=_}else{f=this._last;for(var M=i<0?i:d;f;){if(_=f._prev,(f._act||M<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,r,o||cn&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=M?-ye:ye);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=a?0:-ye)._zTime=d>=a?1:-1,this._ts))return this._start=b,To(this),this.render(i,r,o);this._onUpdate&&!r&&Gn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&rs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Gn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Oi(r)||(r=jn(this,r,i)),!(i instanceof Ca)){if(hn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Ge(i))return this.addLabel(i,r);if(De(i))i=Fe.delayedCall(0,i);else return this}return this!==i?Ei(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Fe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Ge(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(Eo(this,i),i===this._recent&&(this._recent=this._last),Is(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$e(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=jn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Fe.delayedCall(0,r||Ta,o);return a.data="isPause",this._hasPause=1,Ei(this,a,jn(this,i))},e.removePause=function(i){var r=this._first;for(i=jn(this,i);r;)r._start===i&&r.data==="isPause"&&rs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ns!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=ti(i),l=this._first,c=Oi(r),h;l;)l instanceof Fe?Sg(l._targets,a)&&(c?(!ns||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=jn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Fe.to(o,ei({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&br(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ei({startAt:{time:jn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),hd(this,jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),hd(this,jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Is(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Is(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Qn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ei(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;br(o,o===Re&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Re._ts&&(bd(Re,bo(i,Re)),yd=Un.frame),Un.frame>=ad){ad+=On.autoSleep||120;var r=Re._first;if((!r||!r._ts)&&On.autoSleep&&Un._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Un.sleep()}}},t}(Ca);ei(Qe.prototype,{_lock:0,_hasPause:0,_forcing:0});var qg=function(t,e,n,i,r,o,a){var l=new yn(this._pt,t,e,0,1,Wc,null,r),c=0,h=0,u,d,f,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Sr(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),d=n.match(uc)||[];u=uc.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Fs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=uc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ic.test(i)||p)&&(l.e=0),this._pt=l,l},zc=function(t,e,n,i,r,o,a,l,c,h){De(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:De(u)?c?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=De(u)?c?Kg:Wd:Gc,_;if(Ge(i)&&(~i.indexOf("random(")&&(i=Sr(i)),i.charAt(1)==="="&&(_=Fs(d,i)+(tn(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Ac)return!isNaN(d*i)&&i!==""?(_=new yn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Qg:Xd,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&wo(e,i),qg.call(this,t,e,d,i,f,l||On.stringFilter,c))},$g=function(t,e,n,i,r){if(De(t)&&(t=wa(t,r,e,n,i)),!Ti(t)||t.style&&t.nodeType||hn(t)||md(t))return Ge(t)?wa(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=wa(t[a],r,e,n,i);return o},Hc=function(t,e,n,i,r,o){var a,l,c,h;if(Dn[t]&&(a=new Dn[t]).init(r,a.rawVars?e[t]:$g(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new yn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==vr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ns,Ac,Vc=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,v=t._overwrite==="auto"&&!Rc,b=t.timeline,A,T,S,O,x,M,k,L,N,P,I,F,D;if(b&&(!d||!r)&&(r="none"),t._ease=Ds(r,xr.ease),t._yEase=u?Bd(Ds(u===!0?r:u,xr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!b&&!!i.runBackwards,!b||d&&!i.stagger){if(L=m[0]?ss(m[0]).harness:0,F=L&&i[L.prop],A=yo(i,Uc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?mo:bg),g._lazy=0),o){if(rs(t._startAt=Fe.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn||!a&&!f)&&t._startAt.revert(mo),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),S=ei({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Nn(l),immediateRender:a,stagger:0,parent:p},A),F&&(S[L.prop]=F),rs(t._startAt=Fe.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn?t._startAt.revert(mo):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Nn(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],k=x._gsap||Oc(m)[T]._gsap,t._ptLookup[T]=P={},bc[k.id]&&is.length&&xo(),I=y===m?T:y.indexOf(x),L&&(N=new L).init(x,F||A,t,I,y)!==!1&&(t._pt=O=new yn(t._pt,x,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(z){P[z]=O}),N.priority&&(M=1)),!L||F)for(S in A)Dn[S]&&(N=Hc(S,A,t,I,x,y))?N.priority&&(M=1):P[S]=O=zc.call(t,x,S,"get",A[S],I,y,0,i.stringFilter);t._op&&t._op[T]&&t.kill(x,t._op[T]),v&&t._pt&&(ns=t,Re.killTweensOf(x,P,t.globalTime(e)),D=!t.parent,ns=0),t._pt&&l&&(bc[k.id]=1)}M&&qc(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!D,d&&e<=0&&b.render(Qn,!0,!0)},Yg=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ac=1,t.vars[e]="+=0",Vc(t,a),Ac=0,l?Ea(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ue(n)+tn(u.e)),u.b&&(u.b=h.s+tn(u.b))},Zg=function(t,e){var n=t[0]?ss(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Ns({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Jg=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(hn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},wa=function(t,e,n,i,r){return De(t)?t.call(e,n,i,r):Ge(t)&&~t.indexOf("random(")?Sr(t):t},Vd=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gd={};xn(Vd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Gd[s]=1});var Fe=function(s){fd(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ma(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Re,v=(hn(n)||md(n)?Oi(n[0]):"length"in i)?[n]:ti(n),b,A,T,S,O,x,M,k;if(a._targets=v.length?Oc(v):Ea("GSAP target "+n+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||po(c)||po(h)){if(i=a.vars,b=a.timeline=new Qe({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),b.kill(),b.parent=b._dp=Ui(a),b._start=0,d||po(c)||po(h)){if(S=v.length,M=d&&Pd(d),Ti(d))for(O in d)~Vd.indexOf(O)&&(k||(k={}),k[O]=d[O]);for(A=0;A<S;A++)T=yo(i,Gd),T.stagger=0,p&&(T.yoyoEase=p),k&&Ns(T,k),x=v[A],T.duration=+wa(c,Ui(a),A,x,v),T.delay=(+wa(h,Ui(a),A,x,v)||0)-a._delay,!d&&S===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),b.to(x,T,M?M(A,x,v):0),b._ease=oe.none;b.duration()?c=h=0:a.timeline=0}else if(_){Ma(ei(b.vars.defaults,{ease:"none"})),b._ease=Ds(_.ease||i.ease||"none");var L=0,N,P,I;if(hn(_))_.forEach(function(F){return b.to(v,F,">")}),b.duration();else{T={};for(O in _)O==="ease"||O==="easeEach"||Jg(O,_[O],T,_.easeEach);for(O in T)for(N=T[O].sort(function(F,D){return F.t-D.t}),L=0,A=0;A<N.length;A++)P=N[A],I={ease:P.e,duration:(P.t-(A?N[A-1].t:0))/100*c},I[O]=P.v,b.to(v,I,L),L+=I.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!Rc&&(ns=Ui(a),Re.killTweensOf(v),ns=0),Ei(y,Ui(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===$e(y._time)&&Nn(u)&&Ag(Ui(a))&&y.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-h)||0)),m&&Td(Ui(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ye&&!h?l:i<ye?0:i,d,f,_,g,m,p,y,v,b;if(!c)Rg(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=$e(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===$e(u/g)&&(d=c,_--),d>c&&(d=c)),p=this._yoyo&&_&1,p&&(b=this._yEase,d=c-d),m=yr(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(v&&this._yEase&&zd(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render($e(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ad(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!r&&!_&&(Gn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Mc(this,i,r,o),Gn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&Gn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Mc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&rs(this,1),!r&&!(h&&!a)&&(u||a||p)&&(Gn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Aa||Un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vc(this,c),h=this._ease(c/this._dur),Yg(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Ao(this,0),this.parent||wd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ya(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ns&&ns.vars.overwrite!==!0)._first||ya(this),this.parent&&o!==this.timeline.totalDuration()&&br(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ti(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&Eg(a,l))return r==="all"&&(this._pt=0),ya(this);for(u=this._op=this._op||[],r!=="all"&&(Ge(r)&&(g={},xn(r,function(y){return g[y]=1}),r=g),r=Zg(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Eo(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ya(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Sa(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Sa(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Re.killTweensOf(i,r,o)},t}(Ca);ei(Fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(s){Fe[s]=function(){var t=new Qe,e=wc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Gc=function(t,e,n){return t[e]=n},Wd=function(t,e,n){return t[e](n)},Kg=function(t,e,n,i){return t[e](i.fp,n)},jg=function(t,e,n){return t.setAttribute(e,n)},Co=function(t,e){return De(t[e])?Wd:So(t[e])&&t.setAttribute?jg:Gc},Xd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Qg=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wc=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Xc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},t0=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},e0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Eo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},n0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},qc=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},yn=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Xd,this.d=l||this,this.set=c||Gc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=n0,this.m=n,this.mt=r,this.tween=i},s}();xn(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Uc[s]=1});Wn.TweenMax=Wn.TweenLite=Fe;Wn.TimelineLite=Wn.TimelineMax=Qe;Re=new Qe({sortChildren:!1,defaults:xr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=kc;var Us=[],_o={},i0=[],dd=0,s0=0,gc=function(t){return(_o[t]||i0).map(function(e){return e()})},Cc=function(){var t=Date.now(),e=[];t-dd>2&&(gc("matchMediaInit"),Us.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=wi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),gc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dd=t,gc("matchMedia"))},qd=function(){function s(e,n){this.selector=n&&Ec(n),this.data=[],this._r=[],this.isReverted=!1,this.id=s0++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){De(n)&&(r=i,i=n,n=De);var o=this,a=function(){var c=Ee,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ec(r)),Ee=o,u=i.apply(o,arguments),De(u)&&o._r.push(u),Ee=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===De?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ee;Ee=null,n(this),Ee=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Fe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Qe?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Fe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Us.length;o--;)Us[o].id===this.id&&Us.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),r0=function(){function s(e){this.contexts=[],this.scope=e,Ee&&Ee.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ti(n)||(n={matches:n});var o=new qd(0,r||this.scope),a=o.conditions={},l,c,h;Ee&&!o.selector&&(o.selector=Ee.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=wi.matchMedia(n[c]),l&&(Us.indexOf(o)<0&&Us.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Cc):l.addEventListener("change",Cc)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Mo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Od(i)})},timeline:function(t){return new Qe(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ge(t)&&(t=ti(t)[0]);var r=ss(t||{}).get,o=n?Sd:Md;return n==="native"&&(n=""),t&&(e?o((Dn[e]&&Dn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Dn[a]&&Dn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ti(t),t.length>1){var i=t.map(function(h){return un.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=Dn[e],a=ss(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;vr._pt=0,u.init(t,n?h+n:h,vr,0,[t]),u.render(1,u),vr._pt&&Xc(1,vr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=un.to(t,Ns((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ds(t.ease,xr.ease)),od(xr,t||{})},config:function(t){return od(On,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Wn[a]&&Ea(e+" effect requires "+a+" plugin.")}),dc[e]=function(a,l,c){return n(ti(a),ei(l||{},r),c)},o&&(Qe.prototype[e]=function(a,l,c){return this.add(dc[e](a,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Ds(e)},parseEase:function(t,e){return arguments.length?Ds(t,e):oe},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Qe(t),i,r;for(n.smoothChildTiming=Nn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Fe&&i.vars.onComplete===i._targets[0]))&&Ei(n,i,i._start-i._delay),i=r;return Ei(Re,n,0),n},context:function(t,e){return t?new qd(t,e):Ee},matchMedia:function(t){return new r0(t)},matchMediaRefresh:function(){return Us.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Cc()},addEventListener:function(t,e){var n=_o[t]||(_o[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=_o[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Fg,wrapYoyo:kg,distribute:Pd,random:Id,snap:Ld,normalize:Og,getUnit:tn,clamp:Ig,splitColor:Fd,toArray:ti,selector:Ec,mapRange:Ud,pipe:Ug,unitize:Ng,interpolate:Bg,shuffle:Rd},install:vd,effects:dc,ticker:Un,updateRoot:Qe.updateRoot,plugins:Dn,globalTimeline:Re,core:{PropTween:yn,globals:xd,Tween:Fe,Timeline:Qe,Animation:Ca,getCache:ss,_removeLinkedListItem:Eo,reverting:function(){return cn},context:function(t){return t&&Ee&&(Ee.data.push(t),t._ctx=Ee),Ee},suppressOverwrites:function(t){return Rc=t}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Mo[s]=Fe[s]});Un.add(Qe.updateRoot);vr=Mo.to({},{duration:0});var a0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},o0=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=a0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},_c=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Ge(r)&&(l={},xn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}o0(a,r)}}}},un=Mo.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},_c("roundProps",Tc),_c("modifiers"),_c("snap",Ld))||Mo;Fe.version=Qe.version=un.version="3.12.5";_d=1;Pc()&&Mr();var l0=oe.Power0,c0=oe.Power1,h0=oe.Power2,u0=oe.Power3,d0=oe.Power4,f0=oe.Linear,p0=oe.Quad,m0=oe.Cubic,g0=oe.Quart,_0=oe.Quint,v0=oe.Strong,x0=oe.Elastic,y0=oe.Back,b0=oe.SteppedEase,M0=oe.Bounce,S0=oe.Sine,w0=oe.Expo,E0=oe.Circ;var $d,os,Er,Qc,Vs,T0,Yd,th,A0=function(){return typeof window!="undefined"},ki={},Hs=180/Math.PI,Tr=Math.PI/180,wr=Math.atan2,Zd=1e8,eh=/([A-Z])/g,C0=/(left|right|width|margin|padding|x)/i,R0=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},P0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},L0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},I0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},nf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},sf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},D0=function(t,e,n){return t.style[e]=n},U0=function(t,e,n){return t.style.setProperty(e,n)},N0=function(t,e,n){return t._gsap[e]=n},O0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},F0=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},k0=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Pe="transform",Fn=Pe+"Origin",B0=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ki&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Fi(i,a)}):this.tfm[t]=o.x?o[t]:Fi(i,t),t===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,e,"")),t=Pe}(r||e)&&this.props.push(t,e,r[t])},rf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},z0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(eh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=th(),(!r||!r.isStart)&&!n[Pe]&&(rf(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},af=function(t,e){var n={target:t,props:[],revert:z0,save:B0};return t._gsap||un.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},of,Jc=function(t,e){var n=os.createElementNS?os.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):os.createElement(t);return n&&n.style?n:os.createElement(t)},Ci=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(eh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Ar(e)||e,1)||""},Jd="O,Moz,ms,Ms,Webkit".split(","),Ar=function(t,e,n){var i=e||Vs,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Jd[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Jd[o]:"")+t},Kc=function(){A0()&&window.document&&($d=window,os=$d.document,Er=os.documentElement,Vs=Jc("div")||{style:{}},T0=Jc("div"),Pe=Ar(Pe),Fn=Pe+"Origin",Vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",of=!!Ar("perspective"),th=un.core.reverting,Qc=1)},$c=function s(t){var e=Jc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Er.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Er.removeChild(e),this.style.cssText=r,o},Kd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},lf=function(t){var e;try{e=t.getBBox()}catch{e=$c.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===$c||(e=$c.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Kd(t,["x","cx","x1"])||0,y:+Kd(t,["y","cy","y1"])||0,width:0,height:0}:e},cf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&lf(t))},Gs=function(t,e){if(e){var n=t.style,i;e in ki&&e!==Fn&&(e=Pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(eh,"-$1").toLowerCase())):n.removeAttribute(e)}},ls=function(t,e,n,i,r,o){var a=new yn(t._pt,e,n,0,1,o?sf:nf);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},jd={deg:1,rad:1,turn:1},H0={grid:1,flex:1},cs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Vs.style,l=C0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!r||jd[i]||jd[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&cf(t),(f||o==="%")&&(ki[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Ue(f?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===os||!g.appendChild)&&(g=os.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Un.time&&!m.uncache)return Ue(r/m.width*u);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+i,_=t[h],y?t.style[e]=y:Gs(t,e)}else(f||o==="%")&&!H0[Ci(g,"display")]&&(a.position=Ci(t,"position")),g===t&&(a.position="static"),g.appendChild(Vs),_=Vs[h],g.removeChild(Vs),a.position="absolute";return l&&f&&(m=ss(g),m.time=Un.time,m.width=g[h]),Ue(d?_*r/u:_&&r?u/_*r:0)},Fi=function(t,e,n,i){var r;return Qc||Kc(),e in Ai&&e!=="transform"&&(e=Ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),ki[e]&&e!=="transform"?(r=Ia(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Po(Ci(t,Fn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ro[e]&&Ro[e](t,e,n)||Ci(t,e)||Fc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?cs(t,e,r,n)+n:r},V0=function(t,e,n,i){if(!n||n==="none"){var r=Ar(e,t,1),o=r&&Ci(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Ci(t,"borderTopColor"))}var a=new yn(this._pt,t.style,e,0,1,Wc),l=0,c=0,h,u,d,f,_,g,m,p,y,v,b,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Ci(t,e)||i,g?t.style[e]=g:Gs(t,e)),h=[n,i],kc(h),n=h[0],i=h[1],d=n.match(Os)||[],A=i.match(Os)||[],A.length){for(;u=Os.exec(i);)m=u[0],y=i.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,b=g.substr((f+"").length),m.charAt(1)==="="&&(m=Fs(f,m)+b),p=parseFloat(m),v=m.substr((p+"").length),l=Os.lastIndex-v.length,v||(v=v||On.units[e]||b,l===i.length&&(i+=v,a.e+=v)),b!==v&&(f=cs(t,e,g,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?sf:nf;return Ic.test(i)&&(a.e=0),this._pt=a,a},Qd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},G0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Qd[n]||n,e[1]=Qd[i]||i,e.join(" ")},W0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ki[a]&&(l=1,a=a==="transformOrigin"?Fn:Pe),Gs(n,a);l&&(Gs(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),Ia(n,1),o.uncache=1,rf(i)))}},Ro={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new yn(t._pt,e,n,0,0,W0);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},La=[1,0,0,1,0,0],hf={},uf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},tf=function(t){var e=Ci(t,Pe);return uf(e)?La:e.substr(7).match(Lc).map(Ue)},nh=function(t,e){var n=t._gsap||ss(t),i=t.style,r=tf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?La:r):(r===La&&!t.offsetParent&&t!==Er&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Er.appendChild(t)),r=tf(t),l?i.display=l:Gs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Er.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},jc=function(t,e,n,i,r,o){var a=t._gsap,l=r||nh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],v=e.split(" "),b=parseFloat(v[0])||0,A=parseFloat(v[1])||0,T,S,O,x;n?l!==La&&(S=f*m-_*g)&&(O=b*(m/S)+A*(-g/S)+(g*y-m*p)/S,x=b*(-_/S)+A*(f/S)-(f*y-_*p)/S,b=O,A=x):(T=lf(t),b=T.x+(~v[0].indexOf("%")?b/100*T.width:b),A=T.y+(~(v[1]||v[0]).indexOf("%")?A/100*T.height:A)),i||i!==!1&&a.smooth?(p=b-c,y=A-h,a.xOffset=u+(p*f+y*g)-p,a.yOffset=d+(p*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Fn]="0px 0px",o&&(ls(o,a,"xOrigin",c,b),ls(o,a,"yOrigin",h,A),ls(o,a,"xOffset",u,a.xOffset),ls(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+A)},Ia=function(t,e){var n=t._gsap||new Bc(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ci(t,Fn)||"0",h,u,d,f,_,g,m,p,y,v,b,A,T,S,O,x,M,k,L,N,P,I,F,D,z,q,R,j,lt,J,Q,at;return h=u=d=g=m=p=y=v=b=0,f=_=1,n.svg=!!(t.getCTM&&cf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pe]!=="none"?l[Pe]:"")),i.scale=i.rotate=i.translate="none"),S=nh(t,n.svg),n.svg&&(n.uncache?(z=t.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",D=""):D=!e&&t.getAttribute("data-svg-origin"),jc(t,D||c,!!D||n.originIsAbsolute,n.smooth!==!1,S)),A=n.xOrigin||0,T=n.yOrigin||0,S!==La&&(k=S[0],L=S[1],N=S[2],P=S[3],h=I=S[4],u=F=S[5],S.length===6?(f=Math.sqrt(k*k+L*L),_=Math.sqrt(P*P+N*N),g=k||L?wr(L,k)*Hs:0,y=N||P?wr(N,P)*Hs+g:0,y&&(_*=Math.abs(Math.cos(y*Tr))),n.svg&&(h-=A-(A*k+T*N),u-=T-(A*L+T*P))):(at=S[6],J=S[7],R=S[8],j=S[9],lt=S[10],Q=S[11],h=S[12],u=S[13],d=S[14],O=wr(at,lt),m=O*Hs,O&&(x=Math.cos(-O),M=Math.sin(-O),D=I*x+R*M,z=F*x+j*M,q=at*x+lt*M,R=I*-M+R*x,j=F*-M+j*x,lt=at*-M+lt*x,Q=J*-M+Q*x,I=D,F=z,at=q),O=wr(-N,lt),p=O*Hs,O&&(x=Math.cos(-O),M=Math.sin(-O),D=k*x-R*M,z=L*x-j*M,q=N*x-lt*M,Q=P*M+Q*x,k=D,L=z,N=q),O=wr(L,k),g=O*Hs,O&&(x=Math.cos(O),M=Math.sin(O),D=k*x+L*M,z=I*x+F*M,L=L*x-k*M,F=F*x-I*M,k=D,I=z),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ue(Math.sqrt(k*k+L*L+N*N)),_=Ue(Math.sqrt(F*F+at*at)),O=wr(I,F),y=Math.abs(O)>2e-4?O*Hs:0,b=Q?1/(Q<0?-Q:Q):0),n.svg&&(D=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!uf(Ci(t,Pe)),D&&t.setAttribute("transform",D))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ue(f),n.scaleY=Ue(_),n.rotation=Ue(g)+a,n.rotationX=Ue(m)+a,n.rotationY=Ue(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=b+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Fn]=Po(c)),n.xOffset=n.yOffset=0,n.force3D=On.force3D,n.renderTransform=n.svg?q0:of?df:X0,n.uncache=0,n},Po=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yc=function(t,e,n){var i=tn(e);return Ue(parseFloat(e)+parseFloat(cs(t,"x",n+"px",i)))+i},X0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,df(t,e)},Bs="0deg",Pa="0px",zs=") ",df=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,b="",A=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==Bs||h!==Bs)){var T=parseFloat(h)*Tr,S=Math.sin(T),O=Math.cos(T),x;T=parseFloat(u)*Tr,x=Math.cos(T),o=Yc(y,o,S*x*-v),a=Yc(y,a,-Math.sin(T)*-v),l=Yc(y,l,O*x*-v+v)}m!==Pa&&(b+="perspective("+m+zs),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(A||o!==Pa||a!==Pa||l!==Pa)&&(b+=l!==Pa||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+zs),c!==Bs&&(b+="rotate("+c+zs),h!==Bs&&(b+="rotateY("+h+zs),u!==Bs&&(b+="rotateX("+u+zs),(d!==Bs||f!==Bs)&&(b+="skew("+d+", "+f+zs),(_!==1||g!==1)&&(b+="scale("+_+", "+g+zs),y.style[Pe]=b||"translate(0, 0)"},q0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),b=parseFloat(a),A,T,S,O,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Tr,c*=Tr,A=Math.cos(l)*u,T=Math.sin(l)*u,S=Math.sin(l-c)*-d,O=Math.cos(l-c)*d,c&&(h*=Tr,x=Math.tan(c-h),x=Math.sqrt(1+x*x),S*=x,O*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),A*=x,T*=x)),A=Ue(A),T=Ue(T),S=Ue(S),O=Ue(O)):(A=u,O=d,T=S=0),(v&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(v=cs(f,"x",o,"px"),b=cs(f,"y",a,"px")),(_||g||m||p)&&(v=Ue(v+_-(_*A+g*S)+m),b=Ue(b+g-(_*T+g*O)+p)),(i||r)&&(x=f.getBBox(),v=Ue(v+i/100*x.width),b=Ue(b+r/100*x.height)),x="matrix("+A+","+T+","+S+","+O+","+v+","+b+")",f.setAttribute("transform",x),y&&(f.style[Pe]=x)},$0=function(t,e,n,i,r){var o=360,a=Ge(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Hs:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Zd)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Zd)%o-~~(c/o)*o)),t._pt=d=new yn(t._pt,e,n,i,c,P0),d.e=h,d.u="deg",t._props.push(n),d},ef=function(t,e){for(var n in e)t[n]=e[n];return t},Y0=function(t,e,n){var i=ef({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=Ia(n,1),Gs(n,Pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pe],o[Pe]=e,a=Ia(n,1),o[Pe]=c);for(l in ki)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=tn(c),_=tn(h),u=f!==_?cs(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new yn(t._pt,a,l,u,d-u,Zc),t._pt.u=_||0,t._props.push(l));ef(a,i)};xn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ro[t>1?"border"+s:s]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return Fi(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var ih={name:"css",register:Kc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,y,v,b,A,T,S,O;Qc||Kc(),this.styles=this.styles||af(t),O=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Dn[g]&&Hc(g,e,n,i,t,r)))){if(f=typeof h,_=Ro[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Sr(h)),_)_(this,t,g,h,n)&&(S=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Ni.lastIndex=0,Ni.test(c)||(m=tn(c),p=tn(h)),p?m!==p&&(c=cs(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),O.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Ge(c)&&~c.indexOf("random(")&&(c=Sr(c)),tn(c+"")||c==="auto"||(c+=On.units[g]||tn(Fi(t,g))||""),(c+"").charAt(1)==="="&&(c=Fi(t,g))):c=Fi(t,g),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in Ai&&(g==="autoAlpha"&&(d===1&&Fi(t,"visibility")==="hidden"&&u&&(d=0),O.push("visibility",0,a.visibility),ls(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in ki,v){if(this.styles.save(g),b||(A=t._gsap,A.renderTransform&&!e.parseTransform||Ia(t,e.parseTransform),T=e.smoothOrigin!==!1&&A.smooth,b=this._pt=new yn(this._pt,a,Pe,0,1,A.renderTransform,A,0,-1),b.dep=1),g==="scale")this._pt=new yn(this._pt,A,"scaleY",A.scaleY,(y?Fs(A.scaleY,y+u):u)-A.scaleY||0,Zc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){O.push(Fn,0,a[Fn]),h=G0(h),A.svg?jc(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&ls(this,A,"zOrigin",A.zOrigin,p),ls(this,a,g,Po(c),Po(h)));continue}else if(g==="svgOrigin"){jc(t,h,1,T,0,this);continue}else if(g in hf){$0(this,A,g,d,y?Fs(d,y+h):h);continue}else if(g==="smoothOrigin"){ls(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){Y0(this,h,t);continue}}else g in a||(g=Ar(g)||g);if(v||(u||u===0)&&(d||d===0)&&!R0.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=tn(h)||(g in On.units?On.units[g]:m),m!==p&&(d=cs(t,g,c,p)),this._pt=new yn(this._pt,v?A:a,g,d,(y?Fs(d,y+u):u)-d,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?I0:Zc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=L0);else if(g in a)V0.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){wo(g,h);continue}v||(g in a?O.push(g,0,a[g]):O.push(g,1,c||t[g])),o.push(g)}}S&&qc(this)},render:function(t,e){if(e.tween._time||!th())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Fi,aliases:Ai,getSetter:function(t,e,n){var i=Ai[e];return i&&i.indexOf(",")<0&&(e=i),e in ki&&e!==Fn&&(t._gsap.x||Fi(t,"x"))?n&&Yd===n?e==="scale"?O0:N0:(Yd=n||{})&&(e==="scale"?F0:k0):t.style&&!So(t.style[e])?D0:~e.indexOf("-")?U0:Co(t,e)},core:{_removeProperty:Gs,_getMatrix:nh}};un.utils.checkPrefix=Ar;un.core.getStyleSaver=af;(function(s,t,e,n){var i=xn(s+","+t+","+e,function(r){ki[r]=1});xn(t,function(r){On.units[r]="deg",hf[r]=1}),Ai[i[13]]=s+","+t,xn(n,function(r){var o=r.split(":");Ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){On.units[s]="px"});un.registerPlugin(ih);var se=un.registerPlugin(ih)||un,TS=se.core.Tween;function ff(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Z0(s,t,e){return t&&ff(s.prototype,t),e&&ff(s,e),s}var en,Do,J0,Xn,hs,us,Rr,mf,Ws,Ua,gf,Bi,hi,_f,vf=function(){return en||typeof window!="undefined"&&(en=window.gsap)&&en.registerPlugin&&en},xf=1,Cr=[],ee=[],ui=[],Na=Date.now,sh=function(t,e){return e},K0=function(){var t=Ua.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,ui),ee=n,ui=i,sh=function(o,a){return e[o](a)}},Hi=function(t,e){return~ui.indexOf(t)&&ui[ui.indexOf(t)+1][e]},Oa=function(t){return!!~gf.indexOf(t)},Mn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},bn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Lo="scrollLeft",Io="scrollTop",rh=function(){return Bi&&Bi.isPressed||ee.cache++},Uo=function(t,e){var n=function i(r){if(r||r===0){xf&&(Xn.history.scrollRestoration="manual");var o=Bi&&Bi.isPressed;r=i.v=Math.round(r)||(Bi&&Bi.iOS?1:0),t(r),i.cacheID=ee.cache,o&&sh("ss",r)}else(e||ee.cache!==i.cacheID||sh("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},dn={s:Lo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Uo(function(s){return arguments.length?Xn.scrollTo(s,ke.sc()):Xn.pageXOffset||hs[Lo]||us[Lo]||Rr[Lo]||0})},ke={s:Io,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dn,sc:Uo(function(s){return arguments.length?Xn.scrollTo(dn.sc(),s):Xn.pageYOffset||hs[Io]||us[Io]||Rr[Io]||0})},Sn=function(t,e){return(e&&e._ctx&&e._ctx.selector||en.utils.toArray)(t)[0]||(typeof t=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},zi=function(t,e){var n=e.s,i=e.sc;Oa(t)&&(t=hs.scrollingElement||us);var r=ee.indexOf(t),o=i===ke.sc?1:2;!~r&&(r=ee.push(t)-1),ee[r+o]||Mn(t,"scroll",rh);var a=ee[r+o],l=a||(ee[r+o]=Uo(Hi(t,n),!0)||(Oa(t)?i:Uo(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=en.getProperty(t,"scrollBehavior")==="smooth"),l},No=function(t,e,n){var i=t,r=t,o=Na(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=Na();g||m-o>l?(r=i,i=_,a=o,o=m):n?i+=_:i=r+(_-r)/(m-a)*(o-a)},u=function(){r=i=n?0:i,a=o=0},d=function(_){var g=a,m=r,p=Na();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:u,getVelocity:d}},Da=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},pf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},yf=function(){Ua=en.core.globals().ScrollTrigger,Ua&&Ua.core&&K0()},bf=function(t){return en=t||vf(),!Do&&en&&typeof document!="undefined"&&document.body&&(Xn=window,hs=document,us=hs.documentElement,Rr=hs.body,gf=[Xn,hs,us,Rr],J0=en.utils.clamp,_f=en.core.context||function(){},Ws="onpointerenter"in Rr?"pointer":"mouse",mf=Ne.isTouch=Xn.matchMedia&&Xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,hi=Ne.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xf=0},500),yf(),Do=1),Do};dn.op=ke;ee.cache=0;var Ne=function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Do||bf(en)||console.warn("Please gsap.registerPlugin(Observer)"),Ua||yf();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,b=n.onRelease,A=n.onRight,T=n.onLeft,S=n.onUp,O=n.onDown,x=n.onChangeX,M=n.onChangeY,k=n.onChange,L=n.onToggleX,N=n.onToggleY,P=n.onHover,I=n.onHoverEnd,F=n.onMove,D=n.ignoreCheck,z=n.isNormalizer,q=n.onGestureStart,R=n.onGestureEnd,j=n.onWheel,lt=n.onEnable,J=n.onDisable,Q=n.onClick,at=n.scrollSpeed,nt=n.capture,st=n.allowClicks,gt=n.lockAxis,pt=n.onLockAxis;this.target=a=Sn(a)||us,this.vars=n,f&&(f=en.utils.toArray(f)),i=i||1e-9,r=r||0,_=_||1,at=at||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Xn.getComputedStyle(Rr).lineHeight)||22);var St,Tt,X,Nt,yt,It,Mt,$=this,Ot=0,C=0,w=n.passive||!h,V=zi(a,dn),it=zi(a,ke),tt=V(),rt=it(),bt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&hi[0]==="pointerdown",_t=Oa(a),H=a.ownerDocument||hs,et=[0,0,0],ot=[0,0,0],K=0,kt=function(){return K=Na()},xt=function(At,Ut){return($.event=At)&&f&&~f.indexOf(At.target)||Ut&&bt&&At.pointerType!=="touch"||D&&D(At,Ut)},Ft=function(){$._vx.reset(),$._vy.reset(),Tt.pause(),u&&u($)},Et=function(){var At=$.deltaX=pf(et),Ut=$.deltaY=pf(ot),ht=Math.abs(At)>=i,Gt=Math.abs(Ut)>=i;k&&(ht||Gt)&&k($,At,Ut,et,ot),ht&&(A&&$.deltaX>0&&A($),T&&$.deltaX<0&&T($),x&&x($),L&&$.deltaX<0!=Ot<0&&L($),Ot=$.deltaX,et[0]=et[1]=et[2]=0),Gt&&(O&&$.deltaY>0&&O($),S&&$.deltaY<0&&S($),M&&M($),N&&$.deltaY<0!=C<0&&N($),C=$.deltaY,ot[0]=ot[1]=ot[2]=0),(Nt||X)&&(F&&F($),X&&(y($),X=!1),Nt=!1),It&&!(It=!1)&&pt&&pt($),yt&&(j($),yt=!1),St=0},wt=function(At,Ut,ht){et[ht]+=At,ot[ht]+=Ut,$._vx.update(At),$._vy.update(Ut),c?St||(St=requestAnimationFrame(Et)):Et()},Vt=function(At,Ut){gt&&!Mt&&($.axis=Mt=Math.abs(At)>Math.abs(Ut)?"x":"y",It=!0),Mt!=="y"&&(et[2]+=At,$._vx.update(At,!0)),Mt!=="x"&&(ot[2]+=Ut,$._vy.update(Ut,!0)),c?St||(St=requestAnimationFrame(Et)):Et()},qt=function(At){if(!xt(At,1)){At=Da(At,h);var Ut=At.clientX,ht=At.clientY,Gt=Ut-$.x,Ht=ht-$.y,$t=$.isDragging;$.x=Ut,$.y=ht,($t||Math.abs($.startX-Ut)>=r||Math.abs($.startY-ht)>=r)&&(y&&(X=!0),$t||($.isDragging=!0),Vt(Gt,Ht),$t||m&&m($))}},Kt=$.onPress=function(Lt){xt(Lt,1)||Lt&&Lt.button||($.axis=Mt=null,Tt.pause(),$.isPressed=!0,Lt=Da(Lt),Ot=C=0,$.startX=$.x=Lt.clientX,$.startY=$.y=Lt.clientY,$._vx.reset(),$._vy.reset(),Mn(z?a:H,hi[1],qt,w,!0),$.deltaX=$.deltaY=0,v&&v($))},mt=$.onRelease=function(Lt){if(!xt(Lt,1)){bn(z?a:H,hi[1],qt,!0);var At=!isNaN($.y-$.startY),Ut=$.isDragging,ht=Ut&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),Gt=Da(Lt);!ht&&At&&($._vx.reset(),$._vy.reset(),h&&st&&en.delayedCall(.08,function(){if(Na()-K>300&&!Lt.defaultPrevented){if(Lt.target.click)Lt.target.click();else if(H.createEvent){var Ht=H.createEvent("MouseEvents");Ht.initMouseEvent("click",!0,!0,Xn,1,Gt.screenX,Gt.screenY,Gt.clientX,Gt.clientY,!1,!1,!1,!1,0,null),Lt.target.dispatchEvent(Ht)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,u&&Ut&&!z&&Tt.restart(!0),p&&Ut&&p($),b&&b($,ht)}},ct=function(At){return At.touches&&At.touches.length>1&&($.isGesturing=!0)&&q(At,$.isDragging)},U=function(){return($.isGesturing=!1)||R($)},ut=function(At){if(!xt(At)){var Ut=V(),ht=it();wt((Ut-tt)*at,(ht-rt)*at,1),tt=Ut,rt=ht,u&&Tt.restart(!0)}},dt=function(At){if(!xt(At)){At=Da(At,h),j&&(yt=!0);var Ut=(At.deltaMode===1?l:At.deltaMode===2?Xn.innerHeight:1)*_;wt(At.deltaX*Ut,At.deltaY*Ut,0),u&&!z&&Tt.restart(!0)}},zt=function(At){if(!xt(At)){var Ut=At.clientX,ht=At.clientY,Gt=Ut-$.x,Ht=ht-$.y;$.x=Ut,$.y=ht,Nt=!0,u&&Tt.restart(!0),(Gt||Ht)&&Vt(Gt,Ht)}},Bt=function(At){$.event=At,P($)},re=function(At){$.event=At,I($)},he=function(At){return xt(At)||Da(At,h)&&Q($)};Tt=$._dc=en.delayedCall(d||.25,Ft).pause(),$.deltaX=$.deltaY=0,$._vx=No(0,50,!0),$._vy=No(0,50,!0),$.scrollX=V,$.scrollY=it,$.isDragging=$.isGesturing=$.isPressed=!1,_f(this),$.enable=function(Lt){return $.isEnabled||(Mn(_t?H:a,"scroll",rh),o.indexOf("scroll")>=0&&Mn(_t?H:a,"scroll",ut,w,nt),o.indexOf("wheel")>=0&&Mn(a,"wheel",dt,w,nt),(o.indexOf("touch")>=0&&mf||o.indexOf("pointer")>=0)&&(Mn(a,hi[0],Kt,w,nt),Mn(H,hi[2],mt),Mn(H,hi[3],mt),st&&Mn(a,"click",kt,!0,!0),Q&&Mn(a,"click",he),q&&Mn(H,"gesturestart",ct),R&&Mn(H,"gestureend",U),P&&Mn(a,Ws+"enter",Bt),I&&Mn(a,Ws+"leave",re),F&&Mn(a,Ws+"move",zt)),$.isEnabled=!0,Lt&&Lt.type&&Kt(Lt),lt&&lt($)),$},$.disable=function(){$.isEnabled&&(Cr.filter(function(Lt){return Lt!==$&&Oa(Lt.target)}).length||bn(_t?H:a,"scroll",rh),$.isPressed&&($._vx.reset(),$._vy.reset(),bn(z?a:H,hi[1],qt,!0)),bn(_t?H:a,"scroll",ut,nt),bn(a,"wheel",dt,nt),bn(a,hi[0],Kt,nt),bn(H,hi[2],mt),bn(H,hi[3],mt),bn(a,"click",kt,!0),bn(a,"click",he),bn(H,"gesturestart",ct),bn(H,"gestureend",U),bn(a,Ws+"enter",Bt),bn(a,Ws+"leave",re),bn(a,Ws+"move",zt),$.isEnabled=$.isPressed=$.isDragging=!1,J&&J($))},$.kill=$.revert=function(){$.disable();var Lt=Cr.indexOf($);Lt>=0&&Cr.splice(Lt,1),Bi===$&&(Bi=0)},Cr.push($),z&&Oa(a)&&(Bi=$),$.enable(g)},Z0(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Ne.version="3.12.5";Ne.create=function(s){return new Ne(s)};Ne.register=bf;Ne.getAll=function(){return Cr.slice()};Ne.getById=function(s){return Cr.filter(function(t){return t.vars.id===s})[0]};vf()&&en.registerPlugin(Ne);var Ct,Ir,le,Le,di,Me,Bf,Ko,Za,Ga,ka,Oo,fn,el,fh,En,Mf,Sf,Dr,zf,ah,Hf,wn,ph,Vf,Gf,ds,mh,yh,Ur,bh,jo,gh,oh,Fo=1,pn=Date.now,lh=pn(),si=0,Ba=0,wf=function(t,e,n){var i=$n(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Ef=function(t,e){return e&&(!$n(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},j0=function s(){return Ba&&requestAnimationFrame(s)},Tf=function(){return el=1},Af=function(){return el=0},Ri=function(t){return t},za=function(t){return Math.round(t*1e5)/1e5||0},Wf=function(){return typeof window!="undefined"},Xf=function(){return Ct||Wf()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},Js=function(t){return!!~Bf.indexOf(t)},qf=function(t){return(t==="Height"?bh:le["inner"+t])||di["client"+t]||Me["client"+t]},$f=function(t){return Hi(t,"getBoundingClientRect")||(Js(t)?function(){return Jo.width=le.innerWidth,Jo.height=bh,Jo}:function(){return Vi(t)})},Q0=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Hi(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?qf(r):t["client"+r])||0}},t_=function(t,e){return!e||~ui.indexOf(t)?$f(t):function(){return Jo}},Pi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Hi(t,n))?o()-$f(t)()[r]:Js(t)?(di[n]||Me[n])-qf(i):t[n]-t["offset"+i])},ko=function(t,e){for(var n=0;n<Dr.length;n+=3)(!e||~e.indexOf(Dr[n+1]))&&t(Dr[n],Dr[n+1],Dr[n+2])},$n=function(t){return typeof t=="string"},An=function(t){return typeof t=="function"},Ha=function(t){return typeof t=="number"},Xs=function(t){return typeof t=="object"},Fa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ch=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Pr=Math.abs,Yf="left",Zf="top",Mh="right",Sh="bottom",$s="width",Ys="height",Wa="Right",Xa="Left",qa="Top",$a="Bottom",Be="padding",ni="margin",Or="Width",wh="Height",We="px",ii=function(t){return le.getComputedStyle(t)},e_=function(t){var e=ii(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Cf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vi=function(t,e){var n=e&&ii(t)[fh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Qo=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Jf=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},n_=function(t){return function(e){return Ct.utils.snap(Jf(t),e)}},Eh=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},i_=function(t){return function(e,n){return Eh(Jf(t))(e,n.direction)}},Bo=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},Ze=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},Ye=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},zo=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Rf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ho={toggleActions:"play",anticipatePin:0},tl={top:0,left:0,center:.5,bottom:1,right:1},qo=function(t,e){if($n(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in tl?tl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Vo=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,d=r.indent,f=r.fontWeight,_=Le.createElement("div"),g=Js(n)||Hi(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?Me:n,y=t.indexOf("start")!==-1,v=y?c:h,b="border-color:"+v+";font-size:"+u+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(b+=(i===ke?Mh:Sh)+":"+(o+parseFloat(d))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=b,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],$o(_,0,i,y),_},$o=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Or]=1,r["border"+a+Or]=0,r[n.p]=e+"px",Ct.set(t,r)},ne=[],_h={},Ja,Pf=function(){return pn()-si>34&&(Ja||(Ja=requestAnimationFrame(Gi)))},Lr=function(){(!wn||!wn.isPressed||wn.startX>Me.clientWidth)&&(ee.cache++,wn?Ja||(Ja=requestAnimationFrame(Gi)):Gi(),si||js("scrollStart"),si=pn())},hh=function(){Gf=le.innerWidth,Vf=le.innerHeight},Va=function(){ee.cache++,!fn&&!Hf&&!Le.fullscreenElement&&!Le.webkitFullscreenElement&&(!ph||Gf!==le.innerWidth||Math.abs(le.innerHeight-Vf)>le.innerHeight*.25)&&Ko.restart(!0)},Ks={},s_=[],Kf=function s(){return Ye(Zt,"scrollEnd",s)||qs(!0)},js=function(t){return Ks[t]&&Ks[t].map(function(e){return e()})||s_},qn=[],jf=function(t){for(var e=0;e<qn.length;e+=5)(!t||qn[e+4]&&qn[e+4].query===t)&&(qn[e].style.cssText=qn[e+1],qn[e].getBBox&&qn[e].setAttribute("transform",qn[e+2]||""),qn[e+3].uncache=1)},Th=function(t,e){var n;for(En=0;En<ne.length;En++)n=ne[En],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));jo=!0,e&&jf(e),e||js("revert")},Qf=function(t,e){ee.cache++,(e||!Tn)&&ee.forEach(function(n){return An(n)&&n.cacheID++&&(n.rec=0)}),$n(t)&&(le.history.scrollRestoration=yh=t)},Tn,Zs=0,Lf,r_=function(){if(Lf!==Zs){var t=Lf=Zs;requestAnimationFrame(function(){return t===Zs&&qs(!0)})}},tp=function(){Me.appendChild(Ur),bh=!wn&&Ur.offsetHeight||le.innerHeight,Me.removeChild(Ur)},If=function(t){return Za(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},qs=function(t,e){if(si&&!t&&!jo){Ze(Zt,"scrollEnd",Kf);return}tp(),Tn=Zt.isRefreshing=!0,ee.forEach(function(i){return An(i)&&++i.cacheID&&(i.rec=i())});var n=js("refreshInit");zf&&Zt.sort(),e||Th(),ee.forEach(function(i){An(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),jo=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),gh=1,If(!0),ne.forEach(function(i){var r=Pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),If(!1),gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){An(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Qf(yh,1),Ko.pause(),Zs++,Tn=2,Gi(2),ne.forEach(function(i){return An(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Tn=Zt.isRefreshing=!1,js("refresh")},vh=0,Yo=1,Ya,Gi=function(t){if(t===2||!Tn&&!jo){Zt.isUpdating=!0,Ya&&Ya.update(0);var e=ne.length,n=pn(),i=n-lh>=50,r=e&&ne[0].scroll();if(Yo=vh>r?-1:1,Tn||(vh=r),i&&(si&&!el&&n-si>200&&(si=0,js("scrollEnd")),ka=lh,lh=n),Yo<0){for(En=e;En-- >0;)ne[En]&&ne[En].update(0,i);Yo=1}else for(En=0;En<e;En++)ne[En]&&ne[En].update(0,i);Zt.isUpdating=!1}Ja=0},xh=[Yf,Zf,Sh,Mh,ni+$a,ni+Wa,ni+qa,ni+Xa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Zo=xh.concat([$s,Ys,"boxSizing","max"+Or,"max"+wh,"position",ni,Be,Be+qa,Be+Wa,Be+$a,Be+Xa]),a_=function(t,e,n){Nr(n);var i=t._gsap;if(i.spacerIsNative)Nr(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},uh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=xh.length,o=e.style,a=t.style,l;r--;)l=xh[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Sh]=a[Mh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[$s]=Qo(t,dn)+We,o[Ys]=Qo(t,ke)+We,o[Be]=a[ni]=a[Zf]=a[Yf]="0",Nr(i),a[$s]=a["max"+Or]=n[$s],a[Ys]=a["max"+wh]=n[Ys],a[Be]=n[Be],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},o_=/([A-Z])/g,Nr=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(o_,"-$1").toLowerCase())}},Go=function(t){for(var e=Zo.length,n=t.style,i=[],r=0;r<e;r++)i.push(Zo[r],n[Zo[r]]);return i.t=t,i},l_=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Jo={left:0,top:0},Df=function(t,e,n,i,r,o,a,l,c,h,u,d,f,_){An(t)&&(t=t(l)),$n(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?qo("0"+t.substr(3),n):0));var g=f?f.time():0,m,p,y;if(f&&f.seek(0),isNaN(t)||(t=+t),Ha(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&$o(a,n,i,!0);else{An(e)&&(e=e(l));var v=(t||"0").split(" "),b,A,T,S;y=Sn(e,l)||Me,b=Vi(y)||{},(!b||!b.left&&!b.top)&&ii(y).display==="none"&&(S=y.style.display,y.style.display="block",b=Vi(y),S?y.style.display=S:y.style.removeProperty("display")),A=qo(v[0],b[i.d]),T=qo(v[1]||"0",n),t=b[i.p]-c[i.p]-h+A+r-T,a&&$o(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var O=t+n,x=o._isStart;m="scroll"+i.d2,$o(o,O,i,x&&O>20||!x&&(u?Math.max(Me[m],di[m]):o.parentNode[m])<=O+1),u&&(c=Vi(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+We))}return f&&y&&(m=Vi(y),f.seek(d),p=Vi(y),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},c_=/(webkit|moz|length|cssText|inset)/i,Uf=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Me){t._stOrig=r.cssText,a=ii(t);for(o in a)!+o&&!c_.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},ep=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},Wo=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},Nf=function(t,e){var n=zi(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,_={};c=c||n();var g=ep(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&Gi()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ct.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Ze(t,"wheel",n.wheelHandler),Zt.isTouch&&Ze(t,"touchmove",n.wheelHandler),r},Zt=function(){function s(e,n){Ir||s.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mh(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ba){this.update=this.refresh=this.kill=Ri;return}n=Cf($n(n)||Ha(n)||n.nodeType?{trigger:n}:n,Ho);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,d=r.trigger,f=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,y=r.onSnapComplete,v=r.once,b=r.snap,A=r.pinReparent,T=r.pinSpacer,S=r.containerAnimation,O=r.fastScrollEnd,x=r.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?dn:ke,k=!u&&u!==0,L=Sn(n.scroller||le),N=Ct.core.getCache(L),P=Js(L),I=("pinType"in n?n.pinType:Hi(L,"pinType")||P&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],D=k&&n.toggleActions.split(" "),z="markers"in n?n.markers:Ho.markers,q=P?0:parseFloat(ii(L)["border"+M.p2+Or])||0,R=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(R)},lt=Q0(L,P,M),J=t_(L,P),Q=0,at=0,nt=0,st=zi(L,M),gt,pt,St,Tt,X,Nt,yt,It,Mt,$,Ot,C,w,V,it,tt,rt,bt,_t,H,et,ot,K,kt,xt,Ft,Et,wt,Vt,qt,Kt,mt,ct,U,ut,dt,zt,Bt,re;if(R._startClamp=R._endClamp=!1,R._dir=M,m*=45,R.scroller=L,R.scroll=S?S.time.bind(S):st,Tt=st(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(zf=1,n.refreshPriority===-9999&&(Ya=R)),N.tweenScroll=N.tweenScroll||{top:Nf(L,ke),left:Nf(L,dn)},R.tweenTo=gt=N.tweenScroll[M.p],R.scrubDuration=function(ht){ct=Ha(ht)&&ht,ct?mt?mt.duration(ht):mt=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return p&&p(R)}}):(mt&&mt.progress(1).kill(),mt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(u),qt=0,l||(l=i.vars.id)),b&&((!Xs(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in Me.style&&Ct.set(P?[Me,di]:L,{scrollBehavior:"auto"}),ee.forEach(function(ht){return An(ht)&&ht.target===(P?Le.scrollingElement||di:L)&&(ht.smooth=!1)}),St=An(b.snapTo)?b.snapTo:b.snapTo==="labels"?n_(i):b.snapTo==="labelsDirectional"?i_(i):b.directional!==!1?function(ht,Gt){return Eh(b.snapTo)(ht,pn()-at<500?0:Gt.direction)}:Ct.utils.snap(b.snapTo),U=b.duration||{min:.1,max:2},U=Xs(U)?Ga(U.min,U.max):Ga(U,U),ut=Ct.delayedCall(b.delay||ct/2||.1,function(){var ht=st(),Gt=pn()-at<500,Ht=gt.tween;if((Gt||Math.abs(R.getVelocity())<10)&&!Ht&&!el&&Q!==ht){var $t=(ht-Nt)/V,Ce=i&&!k?i.totalProgress():$t,te=Gt?0:(Ce-Kt)/(pn()-ka)*1e3||0,ve=Ct.utils.clamp(-$t,1-$t,Pr(te/2)*te/.185),He=$t+(b.inertia===!1?0:ve),be,xe,de=b,Vn=de.onStart,E=de.onInterrupt,B=de.onComplete;if(be=St(He,R),Ha(be)||(be=He),xe=Math.round(Nt+be*V),ht<=yt&&ht>=Nt&&xe!==ht){if(Ht&&!Ht._initted&&Ht.data<=Pr(xe-ht))return;b.inertia===!1&&(ve=be-$t),gt(xe,{duration:U(Pr(Math.max(Pr(He-Ce),Pr(be-Ce))*.185/te/.05||0)),ease:b.ease||"power3",data:Pr(xe-ht),onInterrupt:function(){return ut.restart(!0)&&E&&E(R)},onComplete:function(){R.update(),Q=st(),i&&(mt?mt.resetTo("totalProgress",be,i._tTime/i._tDur):i.progress(be)),qt=Kt=i&&!k?i.totalProgress():R.progress,y&&y(R),B&&B(R)}},ht,ve*V,xe-ht-ve*V),Vn&&Vn(R,gt.tween)}}else R.isActive&&Q!==ht&&ut.restart(!0)}).pause()),l&&(_h[l]=R),d=R.trigger=Sn(d||f!==!0&&f),re=d&&d._gsap&&d._gsap.stRevert,re&&(re=re(R)),f=f===!0?d:Sn(f),$n(a)&&(a={targets:d,className:a}),f&&(_===!1||_===ni||(_=!_&&f.parentNode&&f.parentNode.style&&ii(f.parentNode).display==="flex"?!1:Be),R.pin=f,pt=Ct.core.getCache(f),pt.spacer?it=pt.pinState:(T&&(T=Sn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),pt.spacerIsNative=!!T,T&&(pt.spacerState=Go(T))),pt.spacer=bt=T||Le.createElement("div"),bt.classList.add("pin-spacer"),l&&bt.classList.add("pin-spacer-"+l),pt.pinState=it=Go(f)),n.force3D!==!1&&Ct.set(f,{force3D:!0}),R.spacer=bt=pt.spacer,Vt=ii(f),kt=Vt[_+M.os2],H=Ct.getProperty(f),et=Ct.quickSetter(f,M.a,We),uh(f,bt,Vt),rt=Go(f)),z){C=Xs(z)?Cf(z,Rf):Rf,$=Vo("scroller-start",l,L,M,C,0),Ot=Vo("scroller-end",l,L,M,C,0,$),_t=$["offset"+M.op.d2];var he=Sn(Hi(L,"content")||L);It=this.markerStart=Vo("start",l,he,M,C,_t,0,S),Mt=this.markerEnd=Vo("end",l,he,M,C,_t,0,S),S&&(Bt=Ct.quickSetter([It,Mt],M.a,We)),!I&&!(ui.length&&Hi(L,"fixedMarkers")===!0)&&(e_(P?Me:L),Ct.set([$,Ot],{force3D:!0}),Ft=Ct.quickSetter($,M.a,We),wt=Ct.quickSetter(Ot,M.a,We))}if(S){var Lt=S.vars.onUpdate,At=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){R.update(0,0,1),Lt&&Lt.apply(S,At||[])})}if(R.previous=function(){return ne[ne.indexOf(R)-1]},R.next=function(){return ne[ne.indexOf(R)+1]},R.revert=function(ht,Gt){if(!Gt)return R.kill(!0);var Ht=ht!==!1||!R.enabled,$t=fn;Ht!==R.isReverted&&(Ht&&(dt=Math.max(st(),R.scroll.rec||0),nt=R.progress,zt=i&&i.progress()),It&&[It,Mt,$,Ot].forEach(function(Ce){return Ce.style.display=Ht?"none":"block"}),Ht&&(fn=R,R.update(Ht)),f&&(!A||!R.isActive)&&(Ht?a_(f,bt,it):uh(f,bt,ii(f),xt)),Ht||R.update(Ht),fn=$t,R.isReverted=Ht)},R.refresh=function(ht,Gt,Ht,$t){if(!((fn||!R.enabled)&&!Gt)){if(f&&ht&&si){Ze(s,"scrollEnd",Kf);return}!Tn&&j&&j(R),fn=R,gt.tween&&!Ht&&(gt.tween.kill(),gt.tween=0),mt&&mt.pause(),g&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ce=lt(),te=J(),ve=S?S.duration():Pi(L,M),He=V<=.01,be=0,xe=$t||0,de=Xs(Ht)?Ht.end:n.end,Vn=n.endTrigger||d,E=Xs(Ht)?Ht.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),B=R.pinnedContainer=n.pinnedContainer&&Sn(n.pinnedContainer,R),Z=d&&Math.max(0,ne.indexOf(R))||0,Y=Z,G,ft,Rt,Wt,Pt,Dt,Xt,Yt,we,Ve,fe,vn,pe;for(z&&Xs(Ht)&&(vn=Ct.getProperty($,M.p),pe=Ct.getProperty(Ot,M.p));Y--;)Dt=ne[Y],Dt.end||Dt.refresh(0,1)||(fn=R),Xt=Dt.pin,Xt&&(Xt===d||Xt===f||Xt===B)&&!Dt.isReverted&&(Ve||(Ve=[]),Ve.unshift(Dt),Dt.revert(!0,!0)),Dt!==ne[Y]&&(Z--,Y--);for(An(E)&&(E=E(R)),E=wf(E,"start",R),Nt=Df(E,d,Ce,M,st(),It,$,R,te,q,I,ve,S,R._startClamp&&"_startClamp")||(f?-.001:0),An(de)&&(de=de(R)),$n(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=($n(E)?E.split(" ")[0]:"")+de:(be=qo(de.substr(2),Ce),de=$n(E)?E:(S?Ct.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,Nt):Nt)+be,Vn=d)),de=wf(de,"end",R),yt=Math.max(Nt,Df(de||(Vn?"100% 0":ve),Vn,Ce,M,st()+be,Mt,Ot,R,te,q,I,ve,S,R._endClamp&&"_endClamp"))||-.001,be=0,Y=Z;Y--;)Dt=ne[Y],Xt=Dt.pin,Xt&&Dt.start-Dt._pinPush<=Nt&&!S&&Dt.end>0&&(G=Dt.end-(R._startClamp?Math.max(0,Dt.start):Dt.start),(Xt===d&&Dt.start-Dt._pinPush<Nt||Xt===B)&&isNaN(E)&&(be+=G*(1-Dt.progress)),Xt===f&&(xe+=G));if(Nt+=be,yt+=be,R._startClamp&&(R._startClamp+=be),R._endClamp&&!Tn&&(R._endClamp=yt||-.001,yt=Math.min(yt,Pi(L,M))),V=yt-Nt||(Nt-=.01)&&.001,He&&(nt=Ct.utils.clamp(0,1,Ct.utils.normalize(Nt,yt,dt))),R._pinPush=xe,It&&be&&(G={},G[M.a]="+="+be,B&&(G[M.p]="-="+st()),Ct.set([It,Mt],G)),f&&!(gh&&R.end>=Pi(L,M)))G=ii(f),Wt=M===ke,Rt=st(),ot=parseFloat(H(M.a))+xe,!ve&&yt>1&&(fe=(P?Le.scrollingElement||di:L).style,fe={style:fe,value:fe["overflow"+M.a.toUpperCase()]},P&&ii(Me)["overflow"+M.a.toUpperCase()]!=="scroll"&&(fe.style["overflow"+M.a.toUpperCase()]="scroll")),uh(f,bt,G),rt=Go(f),ft=Vi(f,!0),Yt=I&&zi(L,Wt?dn:ke)(),_?(xt=[_+M.os2,V+xe+We],xt.t=bt,Y=_===Be?Qo(f,M)+V+xe:0,Y&&(xt.push(M.d,Y+We),bt.style.flexBasis!=="auto"&&(bt.style.flexBasis=Y+We)),Nr(xt),B&&ne.forEach(function(Jt){Jt.pin===B&&Jt.vars.pinSpacing!==!1&&(Jt._subPinOffset=!0)}),I&&st(dt)):(Y=Qo(f,M),Y&&bt.style.flexBasis!=="auto"&&(bt.style.flexBasis=Y+We)),I&&(Pt={top:ft.top+(Wt?Rt-Nt:Yt)+We,left:ft.left+(Wt?Yt:Rt-Nt)+We,boxSizing:"border-box",position:"fixed"},Pt[$s]=Pt["max"+Or]=Math.ceil(ft.width)+We,Pt[Ys]=Pt["max"+wh]=Math.ceil(ft.height)+We,Pt[ni]=Pt[ni+qa]=Pt[ni+Wa]=Pt[ni+$a]=Pt[ni+Xa]="0",Pt[Be]=G[Be],Pt[Be+qa]=G[Be+qa],Pt[Be+Wa]=G[Be+Wa],Pt[Be+$a]=G[Be+$a],Pt[Be+Xa]=G[Be+Xa],tt=l_(it,Pt,A),Tn&&st(0)),i?(we=i._initted,ah(1),i.render(i.duration(),!0,!0),K=H(M.a)-ot+V+xe,Et=Math.abs(V-K)>1,I&&Et&&tt.splice(tt.length-2,2),i.render(0,!0,!0),we||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ah(0)):K=V,fe&&(fe.value?fe.style["overflow"+M.a.toUpperCase()]=fe.value:fe.style.removeProperty("overflow-"+M.a));else if(d&&st()&&!S)for(ft=d.parentNode;ft&&ft!==Me;)ft._pinOffset&&(Nt-=ft._pinOffset,yt-=ft._pinOffset),ft=ft.parentNode;Ve&&Ve.forEach(function(Jt){return Jt.revert(!1,!0)}),R.start=Nt,R.end=yt,Tt=X=Tn?dt:st(),!S&&!Tn&&(Tt<dt&&st(dt),R.scroll.rec=0),R.revert(!1,!0),at=pn(),ut&&(Q=-1,ut.restart(!0)),fn=0,i&&k&&(i._initted||zt)&&i.progress()!==zt&&i.progress(zt||0,!0).render(i.time(),!0,!0),(He||nt!==R.progress||S||g)&&(i&&!k&&i.totalProgress(S&&Nt<-.001&&!nt?Ct.utils.normalize(Nt,yt,0):nt,!0),R.progress=He||(Tt-Nt)/V===nt?0:nt),f&&_&&(bt._pinOffset=Math.round(R.progress*K)),mt&&mt.invalidate(),isNaN(vn)||(vn-=Ct.getProperty($,M.p),pe-=Ct.getProperty(Ot,M.p),Wo($,M,vn),Wo(It,M,vn-($t||0)),Wo(Ot,M,pe),Wo(Mt,M,pe-($t||0))),He&&!Tn&&R.update(),h&&!Tn&&!w&&(w=!0,h(R),w=!1)}},R.getVelocity=function(){return(st()-X)/(pn()-ka)*1e3||0},R.endAnimation=function(){Fa(R.callbackAnimation),i&&(mt?mt.progress(1):i.paused()?k||Fa(i,R.direction<0,1):Fa(i,i.reversed()))},R.labelToScroll=function(ht){return i&&i.labels&&(Nt||R.refresh()||Nt)+i.labels[ht]/i.duration()*V||0},R.getTrailing=function(ht){var Gt=ne.indexOf(R),Ht=R.direction>0?ne.slice(0,Gt).reverse():ne.slice(Gt+1);return($n(ht)?Ht.filter(function($t){return $t.vars.preventOverlaps===ht}):Ht).filter(function($t){return R.direction>0?$t.end<=Nt:$t.start>=yt})},R.update=function(ht,Gt,Ht){if(!(S&&!Ht&&!ht)){var $t=Tn===!0?dt:R.scroll(),Ce=ht?0:($t-Nt)/V,te=Ce<0?0:Ce>1?1:Ce||0,ve=R.progress,He,be,xe,de,Vn,E,B,Z;if(Gt&&(X=Tt,Tt=S?st():$t,b&&(Kt=qt,qt=i&&!k?i.totalProgress():te)),m&&f&&!fn&&!Fo&&si&&(!te&&Nt<$t+($t-X)/(pn()-ka)*m?te=1e-4:te===1&&yt>$t+($t-X)/(pn()-ka)*m&&(te=.9999)),te!==ve&&R.enabled){if(He=R.isActive=!!te&&te<1,be=!!ve&&ve<1,E=He!==be,Vn=E||!!te!=!!ve,R.direction=te>ve?1:-1,R.progress=te,Vn&&!fn&&(xe=te&&!ve?0:te===1?1:ve===1?2:3,k&&(de=!E&&D[xe+1]!=="none"&&D[xe+1]||D[xe],Z=i&&(de==="complete"||de==="reset"||de in i))),x&&(E||Z)&&(Z||u||!i)&&(An(x)?x(R):R.getTrailing(x).forEach(function(Rt){return Rt.endAnimation()})),k||(mt&&!fn&&!Fo?(mt._dp._time-mt._start!==mt._time&&mt.render(mt._dp._time-mt._start),mt.resetTo?mt.resetTo("totalProgress",te,i._tTime/i._tDur):(mt.vars.totalProgress=te,mt.invalidate().restart())):i&&i.totalProgress(te,!!(fn&&(at||ht)))),f){if(ht&&_&&(bt.style[_+M.os2]=kt),!I)et(za(ot+K*te));else if(Vn){if(B=!ht&&te>ve&&yt+1>$t&&$t+1>=Pi(L,M),A)if(!ht&&(He||B)){var Y=Vi(f,!0),G=$t-Nt;Uf(f,Me,Y.top+(M===ke?G:0)+We,Y.left+(M===ke?0:G)+We)}else Uf(f,bt);Nr(He||B?tt:rt),Et&&te<1&&He||et(ot+(te===1&&!B?K:0))}}b&&!gt.tween&&!fn&&!Fo&&ut.restart(!0),a&&(E||v&&te&&(te<1||!oh))&&Za(a.targets).forEach(function(Rt){return Rt.classList[He||v?"add":"remove"](a.className)}),o&&!k&&!ht&&o(R),Vn&&!fn?(k&&(Z&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(R)),(E||!oh)&&(c&&E&&ch(R,c),F[xe]&&ch(R,F[xe]),v&&(te===1?R.kill(!1,1):F[xe]=0),E||(xe=te===1?1:3,F[xe]&&ch(R,F[xe]))),O&&!He&&Math.abs(R.getVelocity())>(Ha(O)?O:2500)&&(Fa(R.callbackAnimation),mt?mt.progress(1):Fa(i,de==="reverse"?1:!te,1))):k&&o&&!fn&&o(R)}if(wt){var ft=S?$t/S.duration()*(S._caScrollDist||0):$t;Ft(ft+($._isFlipped?1:0)),wt(ft)}Bt&&Bt(-$t/S.duration()*(S._caScrollDist||0))}},R.enable=function(ht,Gt){R.enabled||(R.enabled=!0,Ze(L,"resize",Va),P||Ze(L,"scroll",Lr),j&&Ze(s,"refreshInit",j),ht!==!1&&(R.progress=nt=0,Tt=X=Q=st()),Gt!==!1&&R.refresh())},R.getTween=function(ht){return ht&&gt?gt.tween:mt},R.setPositions=function(ht,Gt,Ht,$t){if(S){var Ce=S.scrollTrigger,te=S.duration(),ve=Ce.end-Ce.start;ht=Ce.start+ve*ht/te,Gt=Ce.start+ve*Gt/te}R.refresh(!1,!1,{start:Ef(ht,Ht&&!!R._startClamp),end:Ef(Gt,Ht&&!!R._endClamp)},$t),R.update()},R.adjustPinSpacing=function(ht){if(xt&&ht){var Gt=xt.indexOf(M.d)+1;xt[Gt]=parseFloat(xt[Gt])+ht+We,xt[1]=parseFloat(xt[1])+ht+We,Nr(xt)}},R.disable=function(ht,Gt){if(R.enabled&&(ht!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Gt||mt&&mt.pause(),dt=0,pt&&(pt.uncache=1),j&&Ye(s,"refreshInit",j),ut&&(ut.pause(),gt.tween&&gt.tween.kill()&&(gt.tween=0)),!P)){for(var Ht=ne.length;Ht--;)if(ne[Ht].scroller===L&&ne[Ht]!==R)return;Ye(L,"resize",Va),P||Ye(L,"scroll",Lr)}},R.kill=function(ht,Gt){R.disable(ht,Gt),mt&&!Gt&&mt.kill(),l&&delete _h[l];var Ht=ne.indexOf(R);Ht>=0&&ne.splice(Ht,1),Ht===En&&Yo>0&&En--,Ht=0,ne.forEach(function($t){return $t.scroller===R.scroller&&(Ht=1)}),Ht||Tn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ht&&i.revert({kill:!1}),Gt||i.kill()),It&&[It,Mt,$,Ot].forEach(function($t){return $t.parentNode&&$t.parentNode.removeChild($t)}),Ya===R&&(Ya=0),f&&(pt&&(pt.uncache=1),Ht=0,ne.forEach(function($t){return $t.pin===f&&Ht++}),Ht||(pt.spacer=0)),n.onKill&&n.onKill(R)},ne.push(R),R.enable(!1,!1),re&&re(R),i&&i.add&&!V){var Ut=R.update;R.update=function(){R.update=Ut,Nt||yt||R.refresh()},Ct.delayedCall(.01,R.update),V=.01,Nt=yt=0}else R.refresh();f&&r_()},s.register=function(n){return Ir||(Ct=n||Xf(),Wf()&&window.document&&s.enable(),Ir=Ba),Ir},s.defaults=function(n){if(n)for(var i in n)Ho[i]=n[i];return Ho},s.disable=function(n,i){Ba=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),Ye(le,"wheel",Lr),Ye(Le,"scroll",Lr),clearInterval(Oo),Ye(Le,"touchcancel",Ri),Ye(Me,"touchstart",Ri),Bo(Ye,Le,"pointerdown,touchstart,mousedown",Tf),Bo(Ye,Le,"pointerup,touchend,mouseup",Af),Ko.kill(),ko(Ye);for(var r=0;r<ee.length;r+=3)zo(Ye,ee[r],ee[r+1]),zo(Ye,ee[r],ee[r+2])},s.enable=function(){if(le=window,Le=document,di=Le.documentElement,Me=Le.body,Ct&&(Za=Ct.utils.toArray,Ga=Ct.utils.clamp,mh=Ct.core.context||Ri,ah=Ct.core.suppressOverwrites||Ri,yh=le.history.scrollRestoration||"auto",vh=le.pageYOffset,Ct.core.globals("ScrollTrigger",s),Me)){Ba=1,Ur=document.createElement("div"),Ur.style.height="100vh",Ur.style.position="absolute",tp(),j0(),Ne.register(Ct),s.isTouch=Ne.isTouch,ds=Ne.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ph=Ne.isTouch===1,Ze(le,"wheel",Lr),Bf=[le,Le,di,Me],Ct.matchMedia?(s.matchMedia=function(l){var c=Ct.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Ct.addEventListener("matchMediaInit",function(){return Th()}),Ct.addEventListener("matchMediaRevert",function(){return jf()}),Ct.addEventListener("matchMedia",function(){qs(0,1),js("matchMedia")}),Ct.matchMedia("(orientation: portrait)",function(){return hh(),hh})):console.warn("Requires GSAP 3.11.0 or later"),hh(),Ze(Le,"scroll",Lr);var n=Me.style,i=n.borderTopStyle,r=Ct.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Vi(Me),ke.m=Math.round(o.top+ke.sc())||0,dn.m=Math.round(o.left+dn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Oo=setInterval(Pf,250),Ct.delayedCall(.5,function(){return Fo=0}),Ze(Le,"touchcancel",Ri),Ze(Me,"touchstart",Ri),Bo(Ze,Le,"pointerdown,touchstart,mousedown",Tf),Bo(Ze,Le,"pointerup,touchend,mouseup",Af),fh=Ct.utils.checkPrefix("transform"),Zo.push(fh),Ir=pn(),Ko=Ct.delayedCall(.2,qs).pause(),Dr=[Le,"visibilitychange",function(){var l=le.innerWidth,c=le.innerHeight;Le.hidden?(Mf=l,Sf=c):(Mf!==l||Sf!==c)&&Va()},Le,"DOMContentLoaded",qs,le,"load",qs,le,"resize",Va],ko(Ze),ne.forEach(function(l){return l.enable(0,1)}),a=0;a<ee.length;a+=3)zo(Ye,ee[a],ee[a+1]),zo(Ye,ee[a],ee[a+2])}},s.config=function(n){"limitCallbacks"in n&&(oh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Oo)||(Oo=i)&&setInterval(Pf,i),"ignoreMobileResize"in n&&(ph=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ko(Ye)||ko(Ze,n.autoRefreshEvents||"none"),Hf=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Sn(n),o=ee.indexOf(r),a=Js(r);~o&&ee.splice(o,a?6:2),i&&(a?ui.unshift(le,i,Me,i,di,i):ui.unshift(r,i))},s.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=($n(n)?Sn(n):n).getBoundingClientRect(),a=o[r?$s:Ys]*i||0;return r?o.right-a>0&&o.left+a<le.innerWidth:o.bottom-a>0&&o.top+a<le.innerHeight},s.positionInViewport=function(n,i,r){$n(n)&&(n=Sn(n));var o=n.getBoundingClientRect(),a=o[r?$s:Ys],l=i==null?a/2:i in tl?tl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/le.innerWidth:(o.top+l)/le.innerHeight},s.killAll=function(n){if(ne.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ks.killAll||[];Ks={},i.forEach(function(r){return r()})}},s}();Zt.version="3.12.5";Zt.saveStyles=function(s){return s?Za(s).forEach(function(t){if(t&&t.style){var e=qn.indexOf(t);e>=0&&qn.splice(e,5),qn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),mh())}}):qn};Zt.revert=function(s,t){return Th(!s,t)};Zt.create=function(s,t){return new Zt(s,t)};Zt.refresh=function(s){return s?Va():(Ir||Zt.register())&&qs(!0)};Zt.update=function(s){return++ee.cache&&Gi(s===!0?2:0)};Zt.clearScrollMemory=Qf;Zt.maxScroll=function(s,t){return Pi(s,t?dn:ke)};Zt.getScrollFunc=function(s,t){return zi(Sn(s),t?dn:ke)};Zt.getById=function(s){return _h[s]};Zt.getAll=function(){return ne.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!si};Zt.snapDirectional=Eh;Zt.addEventListener=function(s,t){var e=Ks[s]||(Ks[s]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(s,t){var e=Ks[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var u=[],d=[],f=Ct.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(_){u.length||f.restart(!0),u.push(_.trigger),d.push(_),r<=u.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&An(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return An(r)&&(r=r(),Ze(Zt,"refresh",function(){return r=t.batchMax()})),Za(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var Of=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},dh=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ne.isTouch?" pinch-zoom":""):"none",t===di&&s(Me,e)},Xo={auto:1,scroll:1},h_=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ct.core.getCache(r),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Xo[(l=ii(r)).overflowY]||Xo[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Js(r)&&(Xo[(l=ii(r)).overflowY]||Xo[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},np=function(t,e,n,i){return Ne.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&h_,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ze(Le,Ne.eventTypes[0],kf,!1,!0)},onDisable:function(){return Ye(Le,Ne.eventTypes[0],kf,!0)}})},u_=/(input|label|select|textarea)/i,Ff,kf=function(t){var e=u_.test(t.target.tagName);(e||Ff)&&(t._gsapAllow=!0,Ff=e)},d_=function(t){Xs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Sn(t.target)||di,h=Ct.core.globals().ScrollSmoother,u=h&&h.get(),d=ds&&(t.content&&Sn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),f=zi(c,ke),_=zi(c,dn),g=1,m=(Ne.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,p=0,y=An(i)?function(){return i(a)}:function(){return i||2.8},v,b,A=np(c,t.type,!0,r),T=function(){return b=!1},S=Ri,O=Ri,x=function(){l=Pi(c,ke),O=Ga(ds?1:0,l),n&&(S=Ga(0,Pi(c,dn))),v=Zs},M=function(){d._gsap.y=za(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},k=function(){if(b){requestAnimationFrame(T);var z=za(a.deltaY/2),q=O(f.v-z);if(d&&q!==f.v+f.offset){f.offset=q-f.v;var R=za((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",f.cacheID=ee.cache,Gi()}return!0}f.offset&&M(),b=!0},L,N,P,I,F=function(){x(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return d&&Ct.set(d,{y:"+=0"}),t.ignoreCheck=function(D){return ds&&D.type==="touchmove"&&k(D)||g>1.05&&D.type!=="touchstart"||a.isGesturing||D.touches&&D.touches.length>1},t.onPress=function(){b=!1;var D=g;g=za((le.visualViewport&&le.visualViewport.scale||1)/m),L.pause(),D!==g&&dh(c,g>1.01?!0:n?!1:"x"),N=_(),P=f(),x(),v=Zs},t.onRelease=t.onGestureStart=function(D,z){if(f.offset&&M(),!z)I.restart(!0);else{ee.cache++;var q=y(),R,j;n&&(R=_(),j=R+q*.05*-D.velocityX/.227,q*=Of(_,R,j,Pi(c,dn)),L.vars.scrollX=S(j)),R=f(),j=R+q*.05*-D.velocityY/.227,q*=Of(f,R,j,Pi(c,ke)),L.vars.scrollY=O(j),L.invalidate().duration(q).play(.01),(ds&&L.vars.scrollY>=l||R>=l-1)&&Ct.to({},{onUpdate:F,duration:q})}o&&o(D)},t.onWheel=function(){L._ts&&L.pause(),pn()-p>1e3&&(v=0,p=pn())},t.onChange=function(D,z,q,R,j){if(Zs!==v&&x(),z&&n&&_(S(R[2]===z?N+(D.startX-D.x):_()+z-R[1])),q){f.offset&&M();var lt=j[2]===q,J=lt?P+D.startY-D.y:f()+q-j[1],Q=O(J);lt&&J!==Q&&(P+=Q-J),f(Q)}(q||z)&&Gi()},t.onEnable=function(){dh(c,n?!1:"x"),Zt.addEventListener("refresh",F),Ze(le,"resize",F),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){dh(c,!0),Ye(le,"resize",F),Zt.removeEventListener("refresh",F),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ne(t),a.iOS=ds,ds&&!f()&&f(1),ds&&Ct.ticker.add(Ri),I=a._dc,L=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ep(f,f(),function(){return L.pause()})},onUpdate:Gi,onComplete:I.vars.onComplete}),a};Zt.sort=function(s){return ne.sort(s||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(s){return new Ne(s)};Zt.normalizeScroll=function(s){if(typeof s=="undefined")return wn;if(s===!0&&wn)return wn.enable();if(s===!1){wn&&wn.kill(),wn=s;return}var t=s instanceof Ne?s:d_(s);return wn&&wn.target===t.target&&wn.kill(),Js(t.target)&&(wn=t),t};Zt.core={_getVelocityProp:No,_inputObserver:np,_scrollers:ee,_proxies:ui,bridge:{ss:function(){si||js("scrollStart"),si=pn()},ref:function(){return fn}}};Xf()&&Ct.registerPlugin(Zt);function sp(s,t,e){return Math.max(s,Math.min(t,e))}var Ah=class{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var e;if(!this.isRunning)return;let n=!1;if(this.duration&&this.easing){this.currentTime+=t;let i=sp(0,this.currentTime/this.duration,1);n=i>=1;let r=n?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=function(r,o,a,l){return function(h,u,d){return(1-d)*h+d*u}(r,o,1-Math.exp(-a*l))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,n=!0)):(this.value=this.to,n=!0);n&&this.stop(),(e=this.onUpdate)===null||e===void 0||e.call(this,this.value,n)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:o,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}},Ch=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=t,this.content=e,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},n&&(this.debouncedResize=function(o,a){let l;return function(...c){let h=this;clearTimeout(l),l=setTimeout(()=>{l=void 0,o.apply(h,c)},a)}}(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)===null||t===void 0||t.disconnect(),(e=this.contentResizeObserver)===null||e===void 0||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},nl=class{constructor(){this.events={}}emit(t,...e){var n;let i=this.events[t]||[];for(let r=0,o=i.length;r<o;r++)(n=i[r])===null||n===void 0||n.call(i,...e)}on(t,e){var n;return!((n=this.events[t])===null||n===void 0)&&n.push(e)||(this.events[t]=[e]),()=>{var i;this.events[t]=(i=this.events[t])===null||i===void 0?void 0:i.filter(r=>e!==r)}}off(t,e){var n;this.events[t]=(n=this.events[t])===null||n===void 0?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}},ip=100/6,fs={passive:!1},Rh=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new nl,this.onTouchStart=n=>{let{clientX:i,clientY:r}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})},this.onTouchMove=n=>{let{clientX:i,clientY:r}=n.targetTouches?n.targetTouches[0]:n,o=-(i-this.touchStart.x)*this.options.touchMultiplier,a=-(r-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:o,y:a},this.emitter.emit("scroll",{deltaX:o,deltaY:a,event:n})},this.onTouchEnd=n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})},this.onWheel=n=>{let{deltaX:i,deltaY:r,deltaMode:o}=n;i*=o===1?ip:o===2?this.window.width:1,r*=o===1?ip:o===2?this.window.height:1,i*=this.options.wheelMultiplier,r*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,fs),this.element.addEventListener("touchstart",this.onTouchStart,fs),this.element.addEventListener("touchmove",this.onTouchMove,fs),this.element.addEventListener("touchend",this.onTouchEnd,fs)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,fs),this.element.removeEventListener("touchstart",this.onTouchStart,fs),this.element.removeEventListener("touchmove",this.onTouchMove,fs),this.element.removeEventListener("touchend",this.onTouchEnd,fs)}},il=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:a=35,duration:l,easing:c=b=>Math.min(1,1.001-Math.pow(2,-10*b)),lerp:h=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f="vertical",touchMultiplier:_=1,wheelMultiplier:g=1,autoResize:m=!0,prevent:p,virtualScroll:y,__experimental__naiveDimensions:v=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new Ah,this.emitter=new nl,this.onPointerDown=b=>{b.button===1&&this.reset()},this.onVirtualScroll=b=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(b)===!1)return;let{deltaX:A,deltaY:T,event:S}=b;if(this.emitter.emit("virtual-scroll",{deltaX:A,deltaY:T,event:S}),S.ctrlKey)return;let O=S.type.includes("touch"),x=S.type.includes("wheel");if(this.isTouching=S.type==="touchstart"||S.type==="touchmove",this.options.syncTouch&&O&&S.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();let M=A===0&&T===0,k=this.options.gestureOrientation==="vertical"&&T===0||this.options.gestureOrientation==="horizontal"&&A===0;if(M||k)return;let L=S.composedPath();L=L.slice(0,L.indexOf(this.rootElement));let N=this.options.prevent;if(L.find(D=>{var z,q,R,j,lt;return D instanceof HTMLElement&&(typeof N=="function"&&(N==null?void 0:N(D))||((z=D.hasAttribute)===null||z===void 0?void 0:z.call(D,"data-lenis-prevent"))||O&&((q=D.hasAttribute)===null||q===void 0?void 0:q.call(D,"data-lenis-prevent-touch"))||x&&((R=D.hasAttribute)===null||R===void 0?void 0:R.call(D,"data-lenis-prevent-wheel"))||((j=D.classList)===null||j===void 0?void 0:j.contains("lenis"))&&!(!((lt=D.classList)===null||lt===void 0)&&lt.contains("lenis-stopped")))}))return;if(this.isStopped||this.isLocked)return void S.preventDefault();if(!(this.options.syncTouch&&O||this.options.smoothWheel&&x))return this.isScrolling="native",void this.animate.stop();S.preventDefault();let P=T;this.options.gestureOrientation==="both"?P=Math.abs(T)>Math.abs(A)?T:A:this.options.gestureOrientation==="horizontal"&&(P=A);let I=O&&this.options.syncTouch,F=O&&S.type==="touchend"&&Math.abs(P)>5;F&&(P=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+P,Object.assign({programmatic:!1},I?{lerp:F?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(this.isScrolling===!1||this.isScrolling==="native"){let b=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-b,this.direction=Math.sign(this.animatedScroll-b),this.isScrolling="native",this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:o,touchInertiaMultiplier:a,duration:l,easing:c,lerp:h,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:_,wheelMultiplier:g,autoResize:m,prevent:p,virtualScroll:y,__experimental__naiveDimensions:v},this.dimensions=new Ch(t,e,{autoResize:m}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Rh(n,{touchMultiplier:_,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,duration:r=this.options.duration,easing:o=this.options.easing,lerp:a=this.options.lerp,onStart:l,onComplete:c,force:h=!1,programmatic:u=!0,userData:d}={}){if(!this.isStopped&&!this.isLocked||h){if(typeof t=="string"&&["top","left","start"].includes(t))t=0;else if(typeof t=="string"&&["bottom","right","end"].includes(t))t=this.limit;else{let f;if(typeof t=="string"?f=document.querySelector(t):t instanceof HTMLElement&&(t!=null&&t.nodeType)&&(f=t),f){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}let _=f.getBoundingClientRect();t=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=sp(0,t,this.limit),t===this.targetScroll)return l==null||l(this),void(c==null||c(this));if(this.userData=d!=null?d:{},n)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),void(this.userData={});u||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:r,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(f,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(e,n){return(e%n+n)%n}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var ae=(s,t=document)=>t.querySelector(s),Oe=(s,t=document)=>[...t.querySelectorAll(s)];function ap(s,t=!0){let e=[],n=document.createDocumentFragment(),i=(o,a)=>{let l=document.createElement("span");l.className=t?"w w--mask":"w";let c=document.createElement("span");return c.className=a?`wi ${a}`:"wi",c.textContent=o,l.appendChild(c),e.push(c),l},r=(o,a)=>{o.childNodes.forEach(l=>{l.nodeType===3?l.textContent.split(/(\s+)/).forEach(c=>{c&&n.appendChild(/^\s+$/.test(c)?document.createTextNode(" "):i(c,a))}):l.nodeName==="BR"?n.appendChild(document.createElement("br")):r(l,l.className)})};return r(s,""),s.innerHTML="",s.appendChild(n),e}var rp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+=<>/\u2261";function sl(s,{duration:t=1.4,delay:e=0}={}){let n=s.dataset.final||s.innerHTML;s.dataset.final=n;let i=n.replace(/<br\s*\/?>/gi,`
`),r={p:0};return se.to(r,{p:1,duration:t,delay:e,ease:"power2.out",onUpdate(){let o=Math.floor(r.p*i.length),a=i.slice(0,o);for(let l=o;l<i.length;l++){let c=i[l];a+=c===" "||c===`
`?c:rp[Math.random()*rp.length|0]}s.innerHTML=a.replace(/\n/g,"<br>")},onComplete(){s.innerHTML=n}})}function op(s,t=.35){let e=se.quickTo(s,"x",{duration:.7,ease:"elastic.out(1, 0.5)"}),n=se.quickTo(s,"y",{duration:.7,ease:"elastic.out(1, 0.5)"});s.addEventListener("pointermove",i=>{let r=s.getBoundingClientRect();e((i.clientX-(r.left+r.width/2))*t),n((i.clientY-(r.top+r.height/2))*t)}),s.addEventListener("pointerleave",()=>{e(0),n(0)})}var ce={emergency:{label:"+91 431 274 2111",short:"0431 274 2111",href:"tel:+914312742111"},alternate:{label:"+91 431 274 2112",href:"tel:+914312742112"},whatsapp:{label:"+91 99940 25000",number:"919994025000",href:"https://wa.me/919994025000"},email:"info@wellcarehospital.net",address:["C-165, 9th A Cross","Thillai Nagar, Trichy"],maps:"https://www.google.com/maps/search/?api=1&query=Wellcare+Hospital+C-165+9th+A+Cross+Thillai+Nagar+Trichy",insurers:["ICICI","Star Health","Reliance","HDFC"]},Wi="wellcare-hospital-images/wellcare-hospital-doctor-",Xi=[{id:"op",code:"OP",name:"General Medicine",full:"OP & General Medicine",tagline:"The front door to every kind of care.",line:"New symptoms, fevers, sugar and BP reviews, or simply not sure where to start.",forList:["Fever, infections and everyday illness","Diabetes, blood pressure and thyroid follow-up","Health check-ups and specialist referrals"],emergency:["High fever with confusion or a stiff neck","Swelling of the face or throat after a bite, food or medicine","Vomiting blood or black stools"],keywords:["fever","cold","cough","flu","tired","fatigue","weak","diabetes","sugar","thyroid","infection","vomit","stomach","loose motion","diarrh","check up","checkup","check-up","general","body pain","allergy","not sure","bp","blood pressure"]},{id:"ortho",code:"OR",name:"Orthopaedics",full:"Orthopaedics",tagline:"Move freely again.",line:"Bones, joints, spine and injuries \u2014 with a recovery plan you can follow.",forList:["Knee, back, neck and shoulder pain","Fractures, sprains and sports injuries","Arthritis, mobility and post-surgery recovery"],emergency:["A limb that looks bent or out of place","A wound where bone is visible","Numbness or weakness after a fall or accident"],keywords:["knee","back","spine","neck","shoulder","joint","bone","fracture","sprain","ankle","hip","arthritis","sport","injur","wrist","elbow","muscle","fall","slipped disc","sciatica"]},{id:"cardio",code:"CA",name:"Cardiology",full:"Cardiology",tagline:"Know exactly where your heart stands.",line:"Chest discomfort, palpitations, BP and cholesterol \u2014 explained clearly.",forList:["Chest discomfort, palpitations or breathlessness","Blood pressure and cholesterol management","ECG, heart check-ups and follow-up"],emergency:["Chest pain spreading to the arm, jaw or back","Sudden breathlessness or fainting","Chest pain with sweating or nausea"],keywords:["heart","chest","palpitation","cholesterol","breathless","ecg","beat","cardiac","blood pressure","bp","hypertension","angina"]},{id:"gynecology",code:"GY",name:"Gynecology",full:"Gynecology",tagline:"Private, respectful women\u2019s health.",line:"Periods, pregnancy, fertility and every stage of women\u2019s health.",forList:["Period problems, PCOS and hormonal health","Pregnancy care and antenatal check-ups","Fertility, menopause and preventive screening"],emergency:["Heavy bleeding during pregnancy","Severe lower-abdominal pain","Reduced baby movements late in pregnancy"],keywords:["pregnan","period","menstru","pcod","pcos","fertil","uterus","women","woman","menopause","antenatal","prenatal","baby planning","conceiv","gyn","ovary","white discharge"]},{id:"neurology",code:"NE",name:"Neurology",full:"Neurology",tagline:"Understand the signals.",line:"Headaches, dizziness, numbness, seizures, memory and sleep.",forList:["Migraine, headache and dizziness","Numbness, tingling, weakness or tremor","Seizures, memory and sleep concerns"],emergency:["Face drooping, arm weakness or slurred speech","The worst headache of your life, suddenly","A seizure lasting more than five minutes"],keywords:["headache","migraine","dizz","vertigo","numb","tingl","seizure","fits","memory","tremor","nerve","stroke","paraly","sleep","balance","faint","brain"]},{id:"pediatrics",code:"PE",name:"Pediatrics",full:"Pediatrics",tagline:"Care that grows with them.",line:"Newborns to teens \u2014 illness, growth, vaccines and reassurance.",forList:["Fever, cough, colds and tummy upsets","Vaccinations, growth and nutrition","Newborn and developmental check-ups"],emergency:["Difficulty breathing or bluish lips","Unusually drowsy, floppy or hard to wake","A fit, or no wet nappy for many hours"],keywords:["child","kid","baby","infant","toddler","son","daughter","vaccin","newborn","school","boy","girl","my little"]}],lp=["Dermatology","ENT","Urology"],cp=[{id:"op-team",dept:"op",name:"OP Medical Team",role:"Duty physicians",status:"Every day",image:Wi+"op.webp",focus:["First consultation","Chronic-condition reviews","Specialist routing"],approach:"Start here when you are not sure. The duty physician listens to the whole story, treats what can be treated today and, when you need a specialist, walks your notes across so you never have to start over."},{id:"dr-safa-safriya",dept:"op",name:"Dr. Safa Safriya",role:"General Physician",status:"Consultant",image:Wi+"safa-safriya.webp",focus:["Fever and everyday illness","Diabetes and BP reviews","Health check-ups"],approach:"Unhurried first consultations for whatever brought you in. A careful history, a plain explanation of what is going on and treatment you can start today \u2014 with a specialist referral only when you truly need one."},{id:"dr-kumaresapathy",dept:"ortho",name:"Dr. Kumaresapathy",role:"Orthopaedic surgeon",status:"On call",image:Wi+"orthopaedics.webp",focus:["Joint and back pain","Fractures and trauma","Recovery planning"],approach:"Consultations begin with how you move, not just the X-ray. You leave with a clear diagnosis, the options side by side and a recovery plan measured in weeks you can actually picture."},{id:"dr-bilal-abbas",dept:"ortho",name:"Dr. Bilal Abbas",role:"Orthopaedic surgeon",status:"On call",image:Wi+"bilal-abbas.webp",focus:["Sports injuries","Sprains and ligament care","Mobility review"],approach:"A practical, step-by-step style for injuries and stiffness: find the cause, protect the joint and rebuild strength \u2014 with each stage explained before it begins."},{id:"dr-sameer-rahman",dept:"cardio",name:"Dr. Sameer Rahman",role:"Cardiologist",status:"Consultant",image:Wi+"cardiology.webp",focus:["Chest pain and palpitations","BP and cholesterol","Heart check-ups"],approach:"Starts with your story, not just your ECG. Every test is explained before it is ordered and every result after it arrives \u2014 so you leave knowing exactly where your heart stands."},{id:"dr-priya-elangovan",dept:"gynecology",name:"Dr. Priya Elangovan",role:"Gynecologist",status:"Consultant",image:Wi+"gynecology.webp",focus:["Pregnancy care","PCOS and hormonal health","Preventive screening"],approach:"Private, unhurried conversations where no question is too small. Care plans are built around your stage of life, and family members are welcome when you want them there."},{id:"dr-naveen-iqbal",dept:"neurology",name:"Dr. Naveen Iqbal",role:"Neurologist",status:"Consultant",image:Wi+"neurology.webp",focus:["Headache and migraine","Numbness and weakness","Seizures and sleep"],approach:"Complex symptoms, untangled one step at a time. Expect a careful examination, a plain-language explanation of what the nerves are signalling and a plan you can follow at home."},{id:"dr-sahana-parveen",dept:"pediatrics",name:"Dr. Sahana Parveen",role:"Pediatrician",status:"Consultant",image:Wi+"pediatrics.webp",focus:["Childhood illness","Vaccines and growth","Newborn check-ups"],approach:"Consultations at a child\u2019s pace: play first, examine gently, then talk parents through what is happening and exactly what to watch for once you are home."},{id:"dr-reema-shiek",dept:"pediatrics",name:"Dr. Reema Shiek",role:"Pediatrician",status:"Consultant",image:Wi+"reema-shiek.webp",focus:["Fever, coughs and infections","Allergies and asthma","Growth and nutrition"],approach:"Gentle, playful check-ups that put children at ease. Parents get clear answers, a simple plan for home and an easy way to follow up if anything changes."}],fi=s=>Xi.find(t=>t.id===s),ps=s=>cp.find(t=>t.id===s),Qs=s=>cp.filter(t=>t.dept===s);function rl(s){let t=` ${String(s||"").toLowerCase()} `;if(t.trim().length<3)return null;let e=null;for(let n of Xi){let i=n.keywords.filter(o=>o.length<=3?new RegExp(`\\b${o}\\b`).test(t):t.includes(o));if(!i.length)continue;let r=i.length+(n.id==="pediatrics"?2:0)+(n.id==="op"?-.5:0);(!e||r>e.score)&&(e={dept:n,score:r,hits:i})}return e}var f_=["chest pain","heart attack","can't breathe","cannot breathe","not breathing","unconscious","fainted","collapsed","stroke","slurred","face droop","paraly","seizure","fits","heavy bleeding","bleeding heavily","accident","severe burn","poison","snake","suicid","overdose","choking"],hp=s=>{let t=String(s||"").toLowerCase();return f_.some(e=>t.includes(e))},p_={Morning:["09:30","10:00","10:30","11:00","11:30","12:00"],Evening:["16:30","17:00","17:30","18:00","18:30","19:00"]};function m_(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Ka(s=10){let t=[],e=new Date;for(e.setHours(0,0,0,0),e.setDate(e.getDate()+1);t.length<s;)t.push({iso:m_(e),date:new Date(e),closed:e.getDay()===0}),e.setDate(e.getDate()+1);return t}function g_(s){let t=2166136261;for(let e=0;e<s.length;e++)t^=s.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Fr(s,t="any"){return Object.entries(p_).map(([e,n])=>({part:e,times:n.map(i=>({t:i,taken:t!=="any"&&g_(`${s}${t}${i}`)%10<3}))}))}function Ph(s="any"){for(let t of Ka(14))if(!t.closed)for(let e of Fr(t.iso,s)){let n=e.times.find(i=>!i.taken);if(n)return{iso:t.iso,date:t.date,time:n.t}}return null}function ms(s){let[t,e]=s.split(":").map(Number);return`${(t+11)%12+1}:${String(e).padStart(2,"0")} ${t<12?"AM":"PM"}`}function ja(s,t={weekday:"short",day:"numeric",month:"short"}){return new Intl.DateTimeFormat("en-IN",t).format(s)}function al(s){let t=new Date;return t.setHours(0,0,0,0),Math.round((s-t)/864e5)===1?"Tomorrow":ja(s,{weekday:"long"})}function tr(s,t=""){return s.image?`<img class="${t}" src="${s.image}" alt="" loading="lazy">`:`<span class="${t} monogram" aria-hidden="true">${s.initials||s.name.replace("Dr. ","")[0]}</span>`}var __=0,Lh=s=>String(s!=null?s:"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),mn=s=>`<svg class="i" aria-hidden="true"><use href="#i-${s}"/></svg>`;function up(s,{inline:t=!1,onClose:e}={}){let n=`bk${++__}`,i=h();s.innerHTML=v_(n,t);let r=s.querySelector(".bk"),o=L=>r.querySelector(L),a=L=>[...r.querySelectorAll(L)],l=o("[data-query]"),c=o("[data-details]");function h(){return{step:1,query:"",dept:null,doctor:null,mode:"in-person",date:null,time:null,who:"self",ref:""}}function u(){i.query=l.value;let L=hp(i.query);o("[data-urgent]").hidden=!L;let N=o("[data-match]"),P=i.query.trim();if(P.length<3){N.innerHTML="";return}let I=rl(P),F=I?I.dept:fi("op"),D=Qs(F.id).map(z=>z.name).join(" \xB7 ");N.innerHTML=`
      <div class="match">
        <span class="match__code">${F.code}</span>
        <div class="match__txt"><small>${I?"Sounds like":"Best place to start"}</small><strong>${F.full}</strong><span>${Lh(D)}</span></div>
        <button type="button" class="btn btn--primary btn--sm" data-go="${F.id}">Continue ${mn("arrow")}</button>
      </div>`,d(F.id,!0)}function d(L,N=!1){a("[data-dept]").forEach(P=>{P.setAttribute("aria-pressed",String(P.dataset.dept===L)),P.classList.toggle("is-suggested",N&&P.dataset.dept===L)})}function f(L,N=!0){if(fi(L)){if(i.dept!==L){i.dept=L;let P=Qs(L);i.doctor=P.length===1?P[0].id:"any",i.date=null,i.time=null}d(L),p(),N&&y(2)}}function _(){let L=fi(i.dept);if(!L)return;o("[data-dept-name]").textContent=L.full;let N=Qs(L.id),P=N.length>1?[`<button type="button" class="bk-doc" data-doc="any"><span class="bk-doc__any">${mn("bolt")}</span><span class="bk-doc__txt"><strong>First available</strong><small>Any ${L.name} doctor</small></span><span class="bk-doc__tick">${mn("check")}</span></button>`]:[];N.forEach(D=>P.push(`
      <button type="button" class="bk-doc" data-doc="${D.id}">
        ${tr(D,"bk-doc__img")}
        <span class="bk-doc__txt"><strong>${D.name}</strong><small>${D.role} \xB7 ${D.status}</small></span>
        <span class="bk-doc__tick">${mn("check")}</span>
      </button>`)),o("[data-docs]").innerHTML=P.join(""),a("[data-doc]").forEach(D=>D.setAttribute("aria-pressed",String(D.dataset.doc===i.doctor)));let I=Ph(i.doctor);!i.date&&I&&(i.date=I.iso),o("[data-quick]").innerHTML=I?`
      <span class="dot dot--ok"></span>
      <span>Earliest opening <strong>${al(I.date)}, ${ms(I.time)}</strong></span>
      <button type="button" class="link" data-fast="${I.iso}|${I.time}">Take it</button>`:"",o("[data-dates]").innerHTML=Ka(12).map(D=>`
      <button type="button" class="bk-date" data-date="${D.iso}" ${D.closed?'disabled title="Sunday \u2014 emergency only"':""} aria-pressed="${D.iso===i.date}">
        <small>${ja(D.date,{weekday:"short"})}</small>
        <strong>${D.date.getDate()}</strong>
        <em>${D.closed?"ER only":ja(D.date,{month:"short"})}</em>
      </button>`).join("");let F=i.date?Fr(i.date,i.doctor):[];i.time&&F.some(D=>D.times.some(z=>z.t===i.time&&z.taken))&&(i.time=null),o("[data-times]").innerHTML=F.map(D=>`
      <div class="bk-times__group">
        <p class="bk__label">${D.part}</p>
        <div class="bk-times__row">
          ${D.times.map(z=>`<button type="button" class="bk-time" data-time="${z.t}" ${z.taken?'disabled aria-label="'+ms(z.t)+' \u2014 booked"':""} aria-pressed="${z.t===i.time}">${ms(z.t)}</button>`).join("")}
        </div>
      </div>`).join(""),a("[data-mode]").forEach(D=>D.setAttribute("aria-pressed",String(D.dataset.mode===i.mode)))}function g(){if(!i.date)return"";let[L,N,P]=i.date.split("-").map(Number),I=new Date(L,N-1,P);return`${ja(I)}${i.time?" \xB7 "+ms(i.time):""}`}function m(){var L;return i.doctor?i.doctor==="any"?"First available":((L=ps(i.doctor))==null?void 0:L.name)||"":""}function p(){let L=fi(i.dept),N=(F,D)=>{let z=o(`[data-sum="${F}"]`);z.querySelector("dd").textContent=D||"\u2014",z.classList.toggle("is-set",!!D)};N("dept",L==null?void 0:L.full),N("doctor",m()),N("when",g()),N("mode",i.mode==="tele"?"Teleconsult":"In person");let P=i.doctor&&i.doctor!=="any"?ps(i.doctor):null;o("[data-sumdoc]").innerHTML=P?tr(P,"bk-sumdoc__img"):`<span class="bk-sumdoc__empty">${L?L.code:"+"}</span>`,o("[data-mini]").textContent=[L==null?void 0:L.name,m(),g()].filter(Boolean).join(" \xB7 ");let I=o("[data-next]");I.disabled=i.step===1&&!i.dept,document.dispatchEvent(new CustomEvent("wellcare:booking",{detail:{step:i.step,dept:i.dept,inline:t}}))}function y(L){i.step=L,r.dataset.step=L,a("[data-panel]").forEach(I=>{I.hidden=Number(I.dataset.panel)!==L}),a(".bk__steps li").forEach(I=>{let F=Number(I.dataset.s);I.classList.toggle("is-done",F<L),F===L?I.setAttribute("aria-current","step"):I.removeAttribute("aria-current")}),L===2&&_(),o("[data-back]").hidden=L===1,o("[data-next]").innerHTML=L===3?`Request appointment ${mn("arrow")}`:`Continue ${mn("arrow")}`,o("[data-err]").textContent="",c.querySelector("[data-err3]").textContent="",p();let N=t?null:r.closest("[data-bk-scroll]");N?N.scrollTop=0:r.getBoundingClientRect().top<0&&r.scrollIntoView({block:"start"});let P=o(`[data-panel="${L}"] .bk__q`);P&&P.focus({preventScroll:!0})}let v=L=>{let N=L.replace(/\D/g,"");return N.length===12&&N.startsWith("91")&&(N=N.slice(2)),N.length===11&&N.startsWith("0")&&(N=N.slice(1)),N};function b(){let L=c.elements.name.value.trim(),N=v(c.elements.phone.value),P=[[c.elements.name,L.length>=2,"Please enter the patient\u2019s name."],[c.elements.phone,/^[6-9]\d{9}$/.test(N),"Please enter a 10-digit mobile number."],[c.elements.consent,c.elements.consent.checked,"Please allow the desk to contact you to confirm."]],I=P.find(([,F])=>!F);return P.forEach(([F,D])=>F.setAttribute("aria-invalid",String(!D&&F===(I==null?void 0:I[0])))),c.querySelector("[data-err3]").textContent=I?I[2]:"",I?(I[0].focus(),null):{name:L,phone:N,age:c.elements.age.value.trim(),note:c.elements.note.value.trim()}}function A(L){let N=0;for(let F of L)N=N*31+F.charCodeAt(0)>>>0;let P="",I=0;for(let F=0;F<46;F++){N=N*1103515245+12345>>>0;let D=1+N%3;F%2===0&&(P+=`<rect x="${I}" y="0" width="${D}" height="40"/>`),I+=D+1}return`<svg class="pass__code" viewBox="0 0 ${I} 40" preserveAspectRatio="none" aria-hidden="true">${P}</svg>`}function T(L){let N=fi(i.dept),P=i.doctor!=="any"?ps(i.doctor):null,I=L.name.split(/\s+/)[0],F=`+91 ${L.phone.slice(0,2)}\u2022\u2022\u2022 \u2022\u2022${L.phone.slice(-3)}`,D=i.mode==="tele"?"Teleconsult":"In person";i.ref=`WC-${(Date.now()%1679616).toString(36).toUpperCase().padStart(4,"0")}`;let z=["Hello Wellcare, I would like to confirm an appointment request.",`Ref: ${i.ref}`,`Patient: ${L.name}${L.age?` (${L.age})`:""}`,`Department: ${N.full}`,`Doctor: ${m()}`,`Preferred: ${g()} (${D})`,L.note?`Note: ${L.note}`:""].filter(Boolean).join(`
`);o("[data-pass]").innerHTML=`
      <div class="pass">
        <div class="pass__head"><span class="hud"><span class="dot dot--ok"></span> Request ready \xB7 pending confirmation</span><span class="pass__ref">${i.ref}</span></div>
        <h3 class="bk__q" tabindex="-1">You\u2019re almost in, ${Lh(I)}.</h3>
        <p class="bk__sub">Send the request on WhatsApp or call the desk \u2014 the team will confirm the exact time on ${F}.</p>
        <div class="pass__card">
          <div class="pass__doc">
            ${P?tr(P,"pass__img"):`<span class="pass__img monogram">${N.code}</span>`}
            <div><small>${N.full}</small><strong>${P?P.name:"First available doctor"}</strong></div>
          </div>
          <dl class="pass__grid">
            <div><dt>Date</dt><dd>${g().split(" \xB7 ")[0]}</dd></div>
            <div><dt>Time</dt><dd>${ms(i.time)}</dd></div>
            <div><dt>Visit</dt><dd>${D}</dd></div>
            <div><dt>Patient</dt><dd>${Lh(L.name)}</dd></div>
          </dl>
          <div class="pass__foot">${A(i.ref)}<span>${i.ref}</span></div>
        </div>
        <div class="pass__actions">
          <a class="btn btn--primary" href="https://wa.me/${ce.whatsapp.number}?text=${encodeURIComponent(z)}" target="_blank" rel="noopener">${mn("whatsapp")} Send on WhatsApp</a>
          <button type="button" class="btn btn--ghost" data-ics>${mn("calendar")} Add to calendar</button>
          <a class="btn btn--ghost" href="${ce.alternate.href}">${mn("phone")} Call the desk</a>
        </div>
        <p class="bk__note">Prototype: this page has not sent anything to the hospital. The live version will submit straight to the Wellcare booking system.</p>
        <button type="button" class="link" data-again>Book another appointment</button>
      </div>`}function S(){let L=fi(i.dept),[N,P]=i.time.split(":").map(Number),I=`${i.date.replace(/-/g,"")}T${String(N).padStart(2,"0")}${String(P).padStart(2,"0")}00`,F=N*60+P+30,D=`${i.date.replace(/-/g,"")}T${String(Math.floor(F/60)).padStart(2,"0")}${String(F%60).padStart(2,"0")}00`,z=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wellcare Hospital//Appointment//EN","BEGIN:VEVENT",`UID:${i.ref}@wellcarehospital.net`,`DTSTART:${I}`,`DTEND:${D}`,`SUMMARY:Wellcare \u2013 ${L.full} (${m()})`,`LOCATION:Wellcare Hospital\\, ${ce.address.join("\\, ")}`,`DESCRIPTION:Request ${i.ref} \u2013 pending confirmation. Desk: ${ce.alternate.label}. Emergency: ${ce.emergency.label}.`,"END:VEVENT","END:VCALENDAR"].join(`\r
`),q=URL.createObjectURL(new Blob([z],{type:"text/calendar"})),R=Object.assign(document.createElement("a"),{href:q,download:`wellcare-${i.ref}.ics`});document.body.append(R),R.click(),R.remove(),setTimeout(()=>URL.revokeObjectURL(q),1e3)}let O;l.addEventListener("input",()=>{clearTimeout(O),O=setTimeout(u,120)}),l.addEventListener("keydown",L=>{if(L.key!=="Enter")return;L.preventDefault(),u();let N=o("[data-go]");N&&f(N.dataset.go)}),r.addEventListener("click",L=>{var P;let N=L.target.closest("button, a");if(!(!N||!r.contains(N)))if(N.dataset.dept)f(N.dataset.dept,!0);else if(N.dataset.go)f(N.dataset.go,!0);else if(N.dataset.doc){i.doctor=N.dataset.doc;let I=Ph(i.doctor);i.date&&Fr(i.date,i.doctor).every(F=>F.times.every(D=>D.taken))&&(i.date=(I==null?void 0:I.iso)||null),_(),p()}else N.dataset.fast?([i.date,i.time]=N.dataset.fast.split("|"),o("[data-err]").textContent="",_(),p(),o("[data-next]").focus()):N.dataset.date?(i.date=N.dataset.date,i.time=null,_(),p()):N.dataset.time?(i.time=N.dataset.time,o("[data-err]").textContent="",_(),p(),(P=o(`[data-time="${i.time}"]`))==null||P.focus()):N.dataset.mode?(i.mode=N.dataset.mode,_(),p()):N.dataset.who?(i.who=N.dataset.who,a("[data-who]").forEach(I=>I.setAttribute("aria-pressed",String(I===N))),c.querySelector("[data-name-label]").textContent=i.who==="self"?"Your full name":"Patient\u2019s full name"):N.hasAttribute("data-back")?y(Math.max(1,i.step-1)):N.hasAttribute("data-next")?x():N.hasAttribute("data-ics")?S():N.hasAttribute("data-again")?M():N.hasAttribute("data-bk-close")&&(e==null||e())}),c.addEventListener("submit",L=>{L.preventDefault(),x()});function x(){var L;if(i.step===1){if(!i.dept){u();let N=o("[data-go]");N&&f(N.dataset.go);return}y(2)}else if(i.step===2){if(!i.date||!i.time){o("[data-err]").textContent=i.date?"Please pick a time.":"Please pick a date and a time.",(L=o(".bk-time:not([disabled])")||o(".bk-date:not([disabled])"))==null||L.focus();return}y(3)}else if(i.step===3){let N=b();if(!N)return;T(N),y(4)}}function M(){i=h(),l.value="",c.reset(),o("[data-match]").innerHTML="",o("[data-urgent]").hidden=!0,d(null),y(1)}function k({dept:L,doctor:N,query:P,date:I,time:F}={}){i=h(),l.value="",c.reset(),o("[data-match]").innerHTML="",o("[data-urgent]").hidden=!0,d(null);let D=ps(N),z=D?D.dept:L;if(fi(z)){f(z,!1),D&&(i.doctor=D.id),I&&(i.date=I),F&&(i.time=F),y(2);return}P&&(l.value=P,u()),y(1),P||l.focus({preventScroll:!0})}return y(1),{root:r,preset:k,reset:M,focus:()=>l.focus({preventScroll:!0})}}function v_(s,t){return`
  <div class="bk ${t?"bk--inline":"bk--sheet"}" data-step="1">
    <header class="bk__head">
      <div class="bk__title">
        <p class="hud"><span class="dot dot--ok"></span> Appointment concierge</p>
        <h2 id="${s}-title">Book a visit</h2>
      </div>
      <ol class="bk__steps" aria-label="Booking steps">
        <li data-s="1"><span>01</span>Concern</li>
        <li data-s="2"><span>02</span>Doctor &amp; time</li>
        <li data-s="3"><span>03</span>Details</li>
      </ol>
      ${t?"":`<button type="button" class="bk__close" data-bk-close aria-label="Close booking">${mn("close")}</button>`}
    </header>

    <div class="bk__body">
      <div class="bk__main">
        <section class="bk__panel" data-panel="1" aria-labelledby="${s}-q1">
          <h3 class="bk__q" id="${s}-q1" tabindex="-1">What brings you in today?</h3>
          <p class="bk__sub">Describe it in your own words \u2014 we\u2019ll point you to the right department.</p>
          <label class="bk__search">
            <span class="sr-only">Describe your concern</span>
            ${mn("search")}
            <input type="text" data-query placeholder="e.g. knee pain after a fall" autocomplete="off" maxlength="120">
          </label>
          <div class="bk__urgent" data-urgent role="alert" hidden>
            <span class="dot dot--alert"></span>
            <div><strong>This could need emergency care.</strong><p>If it is sudden or severe, don\u2019t wait for an appointment.</p></div>
            <a class="btn btn--alert btn--sm" href="${ce.emergency.href}">${mn("phone")} Call ${ce.emergency.short}</a>
          </div>
          <div class="bk__match" data-match aria-live="polite"></div>
          <p class="bk__label">Or choose a department</p>
          <div class="bk__depts">
            ${Xi.map(e=>`
              <button type="button" class="bk-dept" data-dept="${e.id}" aria-pressed="false">
                <span class="bk-dept__code">${e.code}</span>
                <span class="bk-dept__txt"><strong>${e.full}</strong><small>${e.forList[0]}</small></span>
                ${mn("arrow")}
              </button>`).join("")}
          </div>
          <p class="bk__hint">Not sure? Pick General Medicine \u2014 the duty physician will route you.</p>
        </section>

        <section class="bk__panel" data-panel="2" aria-labelledby="${s}-q2" hidden>
          <h3 class="bk__q" id="${s}-q2" tabindex="-1"><span data-dept-name></span><br><span class="bk__q-sub">Choose a doctor and a time</span></h3>
          <div class="bk__docs" data-docs></div>
          <div class="bk__row">
            <div class="bk__quick" data-quick></div>
            <div class="seg" role="group" aria-label="Visit type">
              <button type="button" data-mode="in-person" aria-pressed="true">${mn("pin")} In person</button>
              <button type="button" data-mode="tele" aria-pressed="false">${mn("video")} Teleconsult</button>
            </div>
          </div>
          <p class="bk__label">Date</p>
          <div class="bk__dates" data-dates></div>
          <div class="bk__times" data-times></div>
          <p class="bk__err" data-err role="alert"></p>
        </section>

        <section class="bk__panel" data-panel="3" aria-labelledby="${s}-q3" hidden>
          <h3 class="bk__q" id="${s}-q3" tabindex="-1">Who is the appointment for?</h3>
          <form class="bk__form" data-details novalidate>
            <div class="seg" role="group" aria-label="Booking for">
              <button type="button" data-who="self" aria-pressed="true">Myself</button>
              <button type="button" data-who="other" aria-pressed="false">Someone else</button>
            </div>
            <div class="bk__fields">
              <label class="field"><span data-name-label>Your full name</span><input name="name" autocomplete="name" maxlength="80"></label>
              <label class="field"><span>Mobile number</span><span class="field__phone"><em>+91</em><input name="phone" type="tel" inputmode="numeric" autocomplete="tel-national" maxlength="14" placeholder="98765 43210"></span></label>
              <label class="field field--sm"><span>Age <small>optional</small></span><input name="age" inputmode="numeric" maxlength="3"></label>
              <label class="field field--wide"><span>Anything the doctor should know? <small>optional</small></span><textarea name="note" rows="3" maxlength="300" placeholder="A line about symptoms, how long, any reports"></textarea></label>
              <label class="check field--wide"><input type="checkbox" name="consent"><span>Wellcare may call or WhatsApp me to confirm this request.</span></label>
            </div>
            <p class="bk__err" data-err3 role="alert"></p>
            <button type="submit" hidden></button>
          </form>
        </section>

        <section class="bk__panel" data-panel="4" data-pass hidden></section>
      </div>

      <aside class="bk__summary" aria-label="Your appointment so far">
        <div class="bk-sumdoc" data-sumdoc></div>
        <p class="hud">Your visit</p>
        <dl>
          <div data-sum="dept"><dt>Department</dt><dd>\u2014</dd></div>
          <div data-sum="doctor"><dt>Doctor</dt><dd>\u2014</dd></div>
          <div data-sum="when"><dt>When</dt><dd>\u2014</dd></div>
          <div data-sum="mode"><dt>Visit</dt><dd>In person</dd></div>
        </dl>
        <a class="bk__sos" href="${ce.emergency.href}"><span class="dot dot--alert"></span><span>Emergency? Don\u2019t book \u2014<br>call <strong>${ce.emergency.short}</strong></span></a>
      </aside>
    </div>

    <footer class="bk__foot">
      <button type="button" class="btn btn--ghost" data-back hidden>Back</button>
      <p class="bk__mini" data-mini aria-hidden="true"></p>
      <button type="button" class="btn btn--primary" data-next>Continue ${mn("arrow")}</button>
    </footer>
  </div>`}function dp({lenis:s,lock:t}={}){let e=t||(u=>{document.documentElement.classList.toggle("is-locked",u),u?s==null||s.stop():s==null||s.start()}),n=document.querySelector("[data-booking-inline]"),i=n?up(n,{inline:!0}):null;if(i){let u=new URLSearchParams(location.search),d={dept:u.get("department"),doctor:u.get("doctor"),query:u.get("q")};(d.dept||d.doctor||d.query)&&i.preset(d)}let r=null,o=null,a=null,l=()=>{var u;!r||!r.classList.contains("is-open")||(r.classList.remove("is-open"),e(!1),setTimeout(()=>{r.classList.contains("is-open")||(r.hidden=!0)},650),(u=a==null?void 0:a.focus)==null||u.call(a,{preventScroll:!0}))},c=()=>{if(r)return;r=document.createElement("div"),r.className="bk-sheet",r.hidden=!0,r.innerHTML='<div class="bk-sheet__scrim" data-sheet-close></div><div class="bk-sheet__panel" role="dialog" aria-modal="true" data-bk-scroll data-lenis-prevent></div>',document.body.append(r);let u=r.querySelector(".bk-sheet__panel");o=up(u,{onClose:l}),u.setAttribute("aria-labelledby",u.querySelector(".bk__title h2").id),r.querySelector("[data-sheet-close]").addEventListener("click",l),r.addEventListener("keydown",d=>{if(d.key==="Escape"&&(d.preventDefault(),l()),d.key!=="Tab")return;let f=[...u.querySelectorAll('a[href], button:not([disabled]), input, textarea, [tabindex="0"]')].filter(m=>m.offsetParent!==null),_=f[0],g=f[f.length-1];d.shiftKey&&document.activeElement===_?(d.preventDefault(),g.focus()):!d.shiftKey&&document.activeElement===g&&(d.preventDefault(),_.focus())})},h=u=>{c(),a=document.activeElement,r.hidden=!1,e(!0),o.preset(u),requestAnimationFrame(()=>requestAnimationFrame(()=>r.classList.add("is-open")))};return document.addEventListener("click",u=>{let d=u.target.closest("[data-book]");if(!d||d.closest(".bk"))return;u.preventDefault();let f={...d.dataset};if(delete f.book,document.dispatchEvent(new CustomEvent("wellcare:book")),i){i.preset(f);let _=n.getBoundingClientRect().top+window.scrollY-90;s?s.scrollTo(_):window.scrollTo({top:_,behavior:"smooth"});return}h(f)}),{open:h,close:l}}var Wu="160";var x_=0,fp=1,y_=2;var Fm=1,b_=2,Ki=3,Ts=0,Bn=1,_i=2;var Ss=0,sa=1,pp=2,mp=3,gp=4,M_=5,ar=100,S_=101,w_=102,_p=103,vp=104,E_=200,T_=201,A_=202,C_=203,ou=204,lu=205,R_=206,P_=207,L_=208,I_=209,D_=210,U_=211,N_=212,O_=213,F_=214,k_=0,B_=1,z_=2,Il=3,H_=4,V_=5,G_=6,W_=7,km=0,X_=1,q_=2,ws=0,$_=1,Y_=2,Z_=3,J_=4,K_=5,j_=6;var Bm=300,oa=301,la=302,cu=303,hu=304,ec=306,uu=1e3,vi=1001,du=1002,Pn=1003,xp=1004;var Ih=1005;var ai=1006,Q_=1007;var oo=1008;var Es=1009,tv=1010,ev=1011,Xu=1012,zm=1013,bs=1014,Ms=1015,lo=1016,Hm=1017,Vm=1018,lr=1020,nv=1021,xi=1023,iv=1024,sv=1025,cr=1026,ca=1027,rv=1028,Gm=1029,av=1030,Wm=1031,Xm=1033,Dh=33776,Uh=33777,Nh=33778,Oh=33779,yp=35840,bp=35841,Mp=35842,Sp=35843,qm=36196,wp=37492,Ep=37496,Tp=37808,Ap=37809,Cp=37810,Rp=37811,Pp=37812,Lp=37813,Ip=37814,Dp=37815,Up=37816,Np=37817,Op=37818,Fp=37819,kp=37820,Bp=37821,Fh=36492,zp=36494,Hp=36495,ov=36283,Vp=36284,Gp=36285,Wp=36286;var Dl=2300,Ul=2301,kh=2302,Xp=2400,qp=2401,$p=2402;var $m=3e3,hr=3001,lv=3200,cv=3201,hv=0,uv=1,oi="",nn="srgb",ts="srgb-linear",qu="display-p3",nc="display-p3-linear",Nl="linear",Se="srgb",Ol="rec709",Fl="p3";var kr=7680;var Yp=519,dv=512,fv=513,pv=514,Ym=515,mv=516,gv=517,_v=518,vv=519,Zp=35044;var Jp="300 es",fu=1035,Qi=2e3,kl=2001,As=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kp=1234567,io=Math.PI/180,co=180/Math.PI;function ma(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Ln(s,t,e){return Math.max(t,Math.min(e,s))}function $u(s,t){return(s%t+t)%t}function xv(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function yv(s,t,e){return s!==t?(e-s)/(t-s):0}function so(s,t,e){return(1-e)*s+e*t}function bv(s,t,e,n){return so(s,t,1-Math.exp(-e*n))}function Mv(s,t=1){return t-Math.abs($u(s,t*2)-t)}function Sv(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function wv(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ev(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Tv(s,t){return s+Math.random()*(t-s)}function Av(s){return s*(.5-Math.random())}function Cv(s){s!==void 0&&(Kp=s);let t=Kp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rv(s){return s*io}function Pv(s){return s*co}function pu(s){return(s&s-1)===0&&s!==0}function Lv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Iv(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ta(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ic={DEG2RAD:io,RAD2DEG:co,generateUUID:ma,clamp:Ln,euclideanModulo:$u,mapLinear:xv,inverseLerp:yv,lerp:so,damp:bv,pingpong:Mv,smoothstep:Sv,smootherstep:wv,randInt:Ev,randFloat:Tv,randFloatSpread:Av,seededRandom:Cv,degToRad:Rv,radToDeg:Pv,isPowerOfTwo:pu,ceilPowerOfTwo:Lv,floorPowerOfTwo:Bl,setQuaternionFromProperEuler:Iv,normalize:Cn,denormalize:ta},ge=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],v=i[4],b=i[7],A=i[2],T=i[5],S=i[8];return r[0]=o*g+a*y+l*A,r[3]=o*m+a*v+l*T,r[6]=o*p+a*b+l*S,r[1]=c*g+h*y+u*A,r[4]=c*m+h*v+u*T,r[7]=c*p+h*b+u*S,r[2]=d*g+f*y+_*A,r[5]=d*m+f*v+_*T,r[8]=d*p+f*b+_*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bh.makeScale(t,e)),this}rotate(t){return this.premultiply(Bh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bh=new ie;function Zm(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dv(){let s=zl("canvas");return s.style.display="block",s}var jp={};function ro(s){s in jp||(jp[s]=!0,console.warn(s))}var Qp=new ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tm=new ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ol={[ts]:{transfer:Nl,primaries:Ol,toReference:s=>s,fromReference:s=>s},[nn]:{transfer:Se,primaries:Ol,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[nc]:{transfer:Nl,primaries:Fl,toReference:s=>s.applyMatrix3(tm),fromReference:s=>s.applyMatrix3(Qp)},[qu]:{transfer:Se,primaries:Fl,toReference:s=>s.convertSRGBToLinear().applyMatrix3(tm),fromReference:s=>s.applyMatrix3(Qp).convertLinearToSRGB()}},Uv=new Set([ts,nc]),me={enabled:!0,_workingColorSpace:ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Uv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let n=ol[t].toReference,i=ol[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ol[s].primaries},getTransfer:function(s){return s===oi?Nl:ol[s].transfer}};function ra(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Br,Hl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Br===void 0&&(Br=zl("canvas")),Br.width=t.width,Br.height=t.height;let n=Br.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Br}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=zl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ra(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ra(e[n]/255)*255):e[n]=ra(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nv=0,Vl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=ma(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Hh(i[o].image)):r.push(Hh(i[o]))}else r=Hh(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Hh(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Hl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ov=0,bi=class s extends As{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=vi,i=vi,r=ai,o=oo,a=xi,l=Es,c=s.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ma(),this.name="",this.source=new Vl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===hr?nn:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uu:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case du:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uu:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case du:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===nn?hr:$m}set encoding(t){ro("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===hr?nn:oi}};bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=Bm;bi.DEFAULT_ANISOTROPY=1;var rn=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,b=(f+1)/2,A=(p+1)/2,T=(h+d)/4,S=(u+g)/4,O=(_+m)/4;return v>b&&v>A?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=S/n):b>A?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=O/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=S/r,i=O/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mu=class extends As{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new rn(0,0,t,e),this.scissorTest=!1,this.viewport=new rn(0,0,t,e);let i={width:t,height:e,depth:1};n.encoding!==void 0&&(ro("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hr?nn:oi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bi(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},es=class extends mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gl=class extends bi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gu=class extends bi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a,p=l*d+c*f+h*_+u*g,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let A=Math.sqrt(v),T=Math.atan2(A,p*y);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}let b=a*y;if(l=l*m+d*b,c=c*m+f*b,h=h*m+_*b,u=u*m+g*b,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ln(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(em.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(em.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vh.copy(this).projectOnVector(t),this.sub(Vh)}reflect(t){return this.sub(Vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ln(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vh=new W,em=new Cs,ur=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ll.copy(n.boundingBox)),ll.applyMatrix4(t.matrixWorld),this.union(ll)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qa),cl.subVectors(this.max,Qa),zr.subVectors(t.a,Qa),Hr.subVectors(t.b,Qa),Vr.subVectors(t.c,Qa),gs.subVectors(Hr,zr),_s.subVectors(Vr,Hr),er.subVectors(zr,Vr);let e=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-er.z,er.y,gs.z,0,-gs.x,_s.z,0,-_s.x,er.z,0,-er.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-er.y,er.x,0];return!Gh(e,zr,Hr,Vr,cl)||(e=[1,0,0,0,1,0,0,0,1],!Gh(e,zr,Hr,Vr,cl))?!1:(hl.crossVectors(gs,_s),e=[hl.x,hl.y,hl.z],Gh(e,zr,Hr,Vr,cl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new W,new W,new W,new W,new W,new W,new W,new W],pi=new W,ll=new ur,zr=new W,Hr=new W,Vr=new W,gs=new W,_s=new W,er=new W,Qa=new W,cl=new W,hl=new W,nr=new W;function Gh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){nr.fromArray(s,r);let a=i.x*Math.abs(nr.x)+i.y*Math.abs(nr.y)+i.z*Math.abs(nr.z),l=t.dot(nr),c=e.dot(nr),h=n.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Fv=new ur,to=new W,Wh=new W,ha=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Fv.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);let e=to.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(to,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(Wh)),this.expandByPoint(to.copy(t.center).sub(Wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},$i=new W,Xh=new W,ul=new W,vs=new W,qh=new W,dl=new W,$h=new W,Wl=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,e),$i.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xh.copy(t).add(e).multiplyScalar(.5),ul.copy(e).sub(t).normalize(),vs.copy(this.origin).sub(Xh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ul),a=vs.dot(this.direction),l=-vs.dot(ul),c=vs.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xh).addScaledVector(ul,d),f}intersectSphere(t,e){$i.subVectors(t.center,this.origin);let n=$i.dot(this.direction),i=$i.dot($i)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,e,n,i,r){qh.subVectors(e,t),dl.subVectors(n,t),$h.crossVectors(qh,dl);let o=this.direction.dot($h),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,t);let l=a*this.direction.dot(dl.crossVectors(vs,dl));if(l<0)return null;let c=a*this.direction.dot(qh.cross(vs));if(c<0||l+c>o)return null;let h=-a*vs.dot($h);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Gr.setFromMatrixColumn(t,0).length(),r=1/Gr.setFromMatrixColumn(t,1).length(),o=1/Gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kv,t,Bv)}lookAt(t,e,n){let i=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),xs.crossVectors(n,Yn),xs.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),xs.crossVectors(n,Yn)),xs.normalize(),fl.crossVectors(Yn,xs),i[0]=xs.x,i[4]=fl.x,i[8]=Yn.x,i[1]=xs.y,i[5]=fl.y,i[9]=Yn.y,i[2]=xs.z,i[6]=fl.z,i[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],v=n[7],b=n[11],A=n[15],T=i[0],S=i[4],O=i[8],x=i[12],M=i[1],k=i[5],L=i[9],N=i[13],P=i[2],I=i[6],F=i[10],D=i[14],z=i[3],q=i[7],R=i[11],j=i[15];return r[0]=o*T+a*M+l*P+c*z,r[4]=o*S+a*k+l*I+c*q,r[8]=o*O+a*L+l*F+c*R,r[12]=o*x+a*N+l*D+c*j,r[1]=h*T+u*M+d*P+f*z,r[5]=h*S+u*k+d*I+f*q,r[9]=h*O+u*L+d*F+f*R,r[13]=h*x+u*N+d*D+f*j,r[2]=_*T+g*M+m*P+p*z,r[6]=_*S+g*k+m*I+p*q,r[10]=_*O+g*L+m*F+p*R,r[14]=_*x+g*N+m*D+p*j,r[3]=y*T+v*M+b*P+A*z,r[7]=y*S+v*k+b*I+A*q,r[11]=y*O+v*L+b*F+A*R,r[15]=y*x+v*N+b*D+A*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,v=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,b=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,A=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,T=e*y+n*v+i*b+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return t[0]=y*S,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*S,t[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*S,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*S,t[4]=v*S,t[5]=(h*m*r-_*d*r+_*i*f-e*m*f-h*i*p+e*d*p)*S,t[6]=(_*l*r-o*m*r-_*i*c+e*m*c+o*i*p-e*l*p)*S,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*S,t[8]=b*S,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*S,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*p+e*a*p)*S,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*S,t[12]=A*S,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*S,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*S,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,y=l*c,v=l*h,b=l*u,A=n.x,T=n.y,S=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+b)*A,i[2]=(_-v)*A,i[3]=0,i[4]=(f-b)*T,i[5]=(1-(d+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(_+v)*S,i[9]=(m-y)*S,i[10]=(1-(d+g))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Gr.set(i[0],i[1],i[2]).length(),o=Gr.set(i[4],i[5],i[6]).length(),a=Gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],mi.copy(this);let c=1/r,h=1/o,u=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,e.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Qi){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,_;if(a===Qi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===kl)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Qi){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h,_,g;if(a===Qi)_=(o+r)*u,g=-2*u;else if(a===kl)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gr=new W,mi=new an,kv=new W(0,0,0),Bv=new W(1,1,1),xs=new W,fl=new W,Yn=new W,nm=new an,im=new Cs,Xl=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return im.setFromEuler(this),this.setFromQuaternion(im,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xl.DEFAULT_ORDER="XYZ";var ql=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zv=0,sm=new W,Wr=new Cs,Yi=new an,pl=new W,eo=new W,Hv=new W,Vv=new Cs,rm=new W(1,0,0),am=new W(0,1,0),om=new W(0,0,1),Gv={type:"added"},Wv={type:"removed"},li=class s extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new W,e=new Xl,n=new Cs,i=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new an},normalMatrix:{value:new ie}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(rm,t)}rotateY(t){return this.rotateOnAxis(am,t)}rotateZ(t){return this.rotateOnAxis(om,t)}translateOnAxis(t,e){return sm.copy(t).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rm,t)}translateY(t){return this.translateOnAxis(am,t)}translateZ(t){return this.translateOnAxis(om,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pl.copy(t):pl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(eo,pl,this.up):Yi.lookAt(pl,eo,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Wr.setFromRotationMatrix(Yi),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Gv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wv)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,Hv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Vv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};li.DEFAULT_UP=new W(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new W,Zi=new W,Yh=new W,Ji=new W,Xr=new W,qr=new W,lm=new W,Zh=new W,Jh=new W,Kh=new W,ml=!1,ea=class s{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gi.subVectors(t,e),i.cross(gi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){gi.subVectors(i,e),Zi.subVectors(n,e),Yh.subVectors(t,e);let o=gi.dot(gi),a=gi.dot(Zi),l=gi.dot(Yh),c=Zi.dot(Zi),h=Zi.dot(Yh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(t,e,n,i,r,o,a,l){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static isFrontFacing(t,e,n,i){return gi.subVectors(n,e),Zi.subVectors(t,e),gi.cross(Zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),gi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Xr.subVectors(i,n),qr.subVectors(r,n),Zh.subVectors(t,n);let l=Xr.dot(Zh),c=qr.dot(Zh);if(l<=0&&c<=0)return e.copy(n);Jh.subVectors(t,i);let h=Xr.dot(Jh),u=qr.dot(Jh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Xr,o);Kh.subVectors(t,r);let f=Xr.dot(Kh),_=qr.dot(Kh);if(_>=0&&f<=_)return e.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(qr,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return lm.subVectors(r,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(lm,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Xr,o).addScaledVector(qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},gl={h:0,s:0,l:0};function jh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=$u(t,1),e=Ln(e,0,1),n=Ln(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jh(o,r,t+1/3),this.g=jh(o,r,t),this.b=jh(o,r,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=Jm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}copyLinearToSRGB(t){return this.r=zh(t.r),this.g=zh(t.g),this.b=zh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return me.fromWorkingColorSpace(_n.copy(this),t),Math.round(Ln(_n.r*255,0,255))*65536+Math.round(Ln(_n.g*255,0,255))*256+Math.round(Ln(_n.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(_n.copy(this),e);let n=_n.r,i=_n.g,r=_n.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=nn){me.fromWorkingColorSpace(_n.copy(this),t);let e=_n.r,n=_n.g,i=_n.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+e,ys.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ys),t.getHSL(gl);let n=so(ys.h,gl.h,e),i=so(ys.s,gl.s,e),r=so(ys.l,gl.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ue;ue.NAMES=Jm;var Xv=0,dr=class extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=sa,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ou,this.blendDst=lu,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sa&&(n.blending=this.blending),this.side!==Ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ou&&(n.blendSrc=this.blendSrc),this.blendDst!==lu&&(n.blendDst=this.blendDst),this.blendEquation!==ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$l=class extends dr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new W,_l=new ge,Ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ms,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_l.fromBufferAttribute(this,e),_l.applyMatrix3(t),this.setXY(e,_l.x,_l.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ta(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ta(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ta(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ta(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ta(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),i=Cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),n=Cn(n,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zp&&(t.usage=this.usage),t}};var Yl=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zl=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ae=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}};var qv=0,ri=new an,Qh=new li,$r=new W,Zn=new ur,no=new ur,Je=new W,Jn=class s extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zm(t)?Zl:Yl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,e,n){return ri.makeTranslation(t,e,n),this.applyMatrix4(ri),this}scale(t,e,n){return ri.makeScale(t,e,n),this.applyMatrix4(ri),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(Zn.min,no.min),Zn.expandByPoint(Je),Je.addVectors(Zn.max,no.max),Zn.expandByPoint(Je)):(Zn.expandByPoint(no.min),Zn.expandByPoint(no.max))}Zn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(t,c),Je.add($r)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<a;M++)c[M]=new W,h[M]=new W;let u=new W,d=new W,f=new W,_=new ge,g=new ge,m=new ge,p=new W,y=new W;function v(M,k,L){u.fromArray(i,M*3),d.fromArray(i,k*3),f.fromArray(i,L*3),_.fromArray(o,M*2),g.fromArray(o,k*2),m.fromArray(o,L*2),d.sub(u),f.sub(u),g.sub(_),m.sub(_);let N=1/(g.x*m.y-m.x*g.y);isFinite(N)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-g.y).multiplyScalar(N),y.copy(f).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(N),c[M].add(p),c[k].add(p),c[L].add(p),h[M].add(y),h[k].add(y),h[L].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let M=0,k=b.length;M<k;++M){let L=b[M],N=L.start,P=L.count;for(let I=N,F=N+P;I<F;I+=3)v(n[I+0],n[I+1],n[I+2])}let A=new W,T=new W,S=new W,O=new W;function x(M){S.fromArray(r,M*3),O.copy(S);let k=c[M];A.copy(k),A.sub(S.multiplyScalar(S.dot(k))).normalize(),T.crossVectors(O,k);let N=T.dot(h[M])<0?-1:1;l[M*4]=A.x,l[M*4+1]=A.y,l[M*4+2]=A.z,l[M*4+3]=N}for(let M=0,k=b.length;M<k;++M){let L=b[M],N=L.start,P=L.count;for(let I=N,F=N+P;I<F;I+=3)x(n[I+0]),x(n[I+1]),x(n[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new W,r=new W,o=new W,a=new W,l=new W,c=new W,h=new W,u=new W;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cm=new an,ir=new Wl,vl=new ha,hm=new W,Yr=new W,Zr=new W,Jr=new W,tu=new W,xl=new W,yl=new ge,bl=new ge,Ml=new ge,um=new W,dm=new W,fm=new W,Sl=new W,wl=new W,kn=class extends li{constructor(t=new Jn,e=new $l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){xl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(tu.fromBufferAttribute(u,t),o?xl.addScaledVector(tu,h):xl.addScaledVector(tu.sub(e),h))}e.add(xl)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),ir.copy(t.ray).recast(t.near),!(vl.containsPoint(ir.origin)===!1&&(ir.intersectSphere(vl,hm)===null||ir.origin.distanceToSquared(hm)>(t.far-t.near)**2))&&(cm.copy(r).invert(),ir.copy(t.ray).applyMatrix4(cm),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ir)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,A=v;b<A;b+=3){let T=a.getX(b),S=a.getX(b+1),O=a.getX(b+2);i=El(this,p,t,n,c,h,u,T,S,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);i=El(this,o,t,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,A=v;b<A;b+=3){let T=b,S=b+1,O=b+2;i=El(this,p,t,n,c,h,u,T,S,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=m,v=m+1,b=m+2;i=El(this,o,t,n,c,h,u,y,v,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function $v(s,t,e,n,i,r,o,a){let l;if(t.side===Bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ts,a),l===null)return null;wl.copy(a),wl.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(wl);return c<e.near||c>e.far?null:{distance:c,point:wl.clone(),object:s}}function El(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Yr),s.getVertexPosition(l,Zr),s.getVertexPosition(c,Jr);let h=$v(s,t,e,n,Yr,Zr,Jr,Sl);if(h){i&&(yl.fromBufferAttribute(i,a),bl.fromBufferAttribute(i,l),Ml.fromBufferAttribute(i,c),h.uv=ea.getInterpolation(Sl,Yr,Zr,Jr,yl,bl,Ml,new ge)),r&&(yl.fromBufferAttribute(r,a),bl.fromBufferAttribute(r,l),Ml.fromBufferAttribute(r,c),h.uv1=ea.getInterpolation(Sl,Yr,Zr,Jr,yl,bl,Ml,new ge),h.uv2=h.uv1),o&&(um.fromBufferAttribute(o,a),dm.fromBufferAttribute(o,l),fm.fromBufferAttribute(o,c),h.normal=ea.getInterpolation(Sl,Yr,Zr,Jr,um,dm,fm,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new W,materialIndex:0};ea.getNormal(Yr,Zr,Jr,u.normal),h.face=u}return h}var ho=class s extends Jn{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function _(g,m,p,y,v,b,A,T,S,O,x){let M=b/S,k=A/O,L=b/2,N=A/2,P=T/2,I=S+1,F=O+1,D=0,z=0,q=new W;for(let R=0;R<F;R++){let j=R*k-N;for(let lt=0;lt<I;lt++){let J=lt*M-L;q[g]=J*y,q[m]=j*v,q[p]=P,c.push(q.x,q.y,q.z),q[g]=0,q[m]=0,q[p]=T>0?1:-1,h.push(q.x,q.y,q.z),u.push(lt/S),u.push(1-R/O),D+=1}}for(let R=0;R<O;R++)for(let j=0;j<S;j++){let lt=d+j+I*R,J=d+j+I*(R+1),Q=d+(j+1)+I*(R+1),at=d+(j+1)+I*R;l.push(lt,J,at),l.push(J,Q,at),z+=6}a.addGroup(f,z,x),f+=z,d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ua(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Rn(s){let t={};for(let e=0;e<s.length;e++){let n=ua(s[e]);for(let i in n)t[i]=n[i]}return t}function Yv(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Km(s){return s.getRenderTarget()===null?s.outputColorSpace:me.workingColorSpace}var Zv={clone:ua,merge:Rn},Jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends dr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jv,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ua(t.uniforms),this.uniformsGroups=Yv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Jl=class extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Qi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},sn=class extends Jl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Kr=-90,jr=1,_u=class extends li{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new sn(Kr,jr,t,e);i.layers=this.layers,this.add(i);let r=new sn(Kr,jr,t,e);r.layers=this.layers,this.add(r);let o=new sn(Kr,jr,t,e);o.layers=this.layers,this.add(o);let a=new sn(Kr,jr,t,e);a.layers=this.layers,this.add(a);let l=new sn(Kr,jr,t,e);l.layers=this.layers,this.add(l);let c=new sn(Kr,jr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Kl=class extends bi{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:oa,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vu=class extends es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(ro("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===hr?nn:oi),this.texture=new Kl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ho(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:ua(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ss});r.uniforms.tEquirect.value=e;let o=new kn(i,r),a=e.minFilter;return e.minFilter===oo&&(e.minFilter=ai),new _u(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},eu=new W,jv=new W,Qv=new ie,ji=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=eu.subVectors(n,e).cross(jv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(eu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qv.getNormalMatrix(t),i=this.coplanarPoint(eu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},sr=new ha,Tl=new W,jl=class{constructor(t=new ji,e=new ji,n=new ji,i=new ji,r=new ji,o=new ji){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],v=i[14],b=i[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+o,d+h,m+_,b+y).normalize(),n[3].setComponents(l-o,d-h,m-_,b-y).normalize(),n[4].setComponents(l-a,d-u,m-g,b-v).normalize(),e===Qi)n[5].setComponents(l+a,d+u,m+g,b+v).normalize();else if(e===kl)n[5].setComponents(a,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(t){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Tl.x=i.normal.x>0?t.max.x:t.min.x,Tl.y=i.normal.y>0?t.max.y:t.min.y,Tl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jm(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tx(s,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,d=c.usage,f=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,c),f.count===-1&&_.length===0&&s.bufferSubData(u,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){let p=_[g];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var xu=class s extends Jn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<c;v++){let b=v*u-r;_.push(b,-y,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,b=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;f.push(v,b,T),f.push(b,A,T)}this.setIndex(f),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nx=`#ifdef USE_ALPHAHASH
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
#endif`,ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
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
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,px=`#ifdef USE_IRIDESCENCE
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
#endif`,mx=`#ifdef USE_BUMPMAP
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wx=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Dx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
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
}`,Gx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
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
#endif`,ty=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,ey=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uy=`#if defined( USE_POINTS_UV )
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
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,py=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sy=`#ifdef USE_NORMALMAP
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
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ey=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ty=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ay=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ry=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,By=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
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
#endif`,Vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gy=`#ifdef USE_SKINNING
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
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$y=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yy=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zy=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`#include <common>
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
}`,o1=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,l1=`#define DISTANCE
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
}`,c1=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,g1=`#define LAMBERT
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
}`,_1=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,v1=`#define MATCAP
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
}`,x1=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,y1=`#define NORMAL
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
}`,b1=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M1=`#define PHONG
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
}`,S1=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,w1=`#define STANDARD
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
}`,E1=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,T1=`#define TOON
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
}`,A1=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,C1=`uniform float size;
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
}`,R1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,L1=`uniform vec3 color;
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
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,D1=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jt={alphahash_fragment:ex,alphahash_pars_fragment:nx,alphamap_fragment:ix,alphamap_pars_fragment:sx,alphatest_fragment:rx,alphatest_pars_fragment:ax,aomap_fragment:ox,aomap_pars_fragment:lx,batching_pars_vertex:cx,batching_vertex:hx,begin_vertex:ux,beginnormal_vertex:dx,bsdfs:fx,iridescence_fragment:px,bumpmap_pars_fragment:mx,clipping_planes_fragment:gx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:vx,clipping_planes_vertex:xx,color_fragment:yx,color_pars_fragment:bx,color_pars_vertex:Mx,color_vertex:Sx,common:wx,cube_uv_reflection_fragment:Ex,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Ax,displacementmap_vertex:Cx,emissivemap_fragment:Rx,emissivemap_pars_fragment:Px,colorspace_fragment:Lx,colorspace_pars_fragment:Ix,envmap_fragment:Dx,envmap_common_pars_fragment:Ux,envmap_pars_fragment:Nx,envmap_pars_vertex:Ox,envmap_physical_pars_fragment:Yx,envmap_vertex:Fx,fog_vertex:kx,fog_pars_vertex:Bx,fog_fragment:zx,fog_pars_fragment:Hx,gradientmap_pars_fragment:Vx,lightmap_fragment:Gx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:qx,lights_pars_begin:$x,lights_toon_fragment:Zx,lights_toon_pars_fragment:Jx,lights_phong_fragment:Kx,lights_phong_pars_fragment:jx,lights_physical_fragment:Qx,lights_physical_pars_fragment:ty,lights_fragment_begin:ey,lights_fragment_maps:ny,lights_fragment_end:iy,logdepthbuf_fragment:sy,logdepthbuf_pars_fragment:ry,logdepthbuf_pars_vertex:ay,logdepthbuf_vertex:oy,map_fragment:ly,map_pars_fragment:cy,map_particle_fragment:hy,map_particle_pars_fragment:uy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:fy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:xy,normal_pars_fragment:yy,normal_pars_vertex:by,normal_vertex:My,normalmap_pars_fragment:Sy,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ey,clearcoat_pars_fragment:Ty,iridescence_pars_fragment:Ay,opaque_fragment:Cy,packing:Ry,premultiplied_alpha_fragment:Py,project_vertex:Ly,dithering_fragment:Iy,dithering_pars_fragment:Dy,roughnessmap_fragment:Uy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Oy,shadowmap_pars_vertex:Fy,shadowmap_vertex:ky,shadowmask_pars_fragment:By,skinbase_vertex:zy,skinning_pars_vertex:Hy,skinning_vertex:Vy,skinnormal_vertex:Gy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:qy,tonemapping_pars_fragment:$y,transmission_fragment:Yy,transmission_pars_fragment:Zy,uv_pars_fragment:Jy,uv_pars_vertex:Ky,uv_vertex:jy,worldpos_vertex:Qy,background_vert:t1,background_frag:e1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:s1,cube_frag:r1,depth_vert:a1,depth_frag:o1,distanceRGBA_vert:l1,distanceRGBA_frag:c1,equirect_vert:h1,equirect_frag:u1,linedashed_vert:d1,linedashed_frag:f1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:_1,meshmatcap_vert:v1,meshmatcap_frag:x1,meshnormal_vert:y1,meshnormal_frag:b1,meshphong_vert:M1,meshphong_frag:S1,meshphysical_vert:w1,meshphysical_frag:E1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:C1,points_frag:R1,shadow_vert:P1,shadow_frag:L1,sprite_vert:I1,sprite_frag:D1},vt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Li={basic:{uniforms:Rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ue(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Rn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Rn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ue(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Rn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Rn([vt.points,vt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Rn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Rn([vt.common,vt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Rn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Rn([vt.sprite,vt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Rn([vt.common,vt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Rn([vt.lights,vt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Li.physical={uniforms:Rn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Al={r:0,b:0,g:0};function U1(s,t,e,n,i,r,o){let a=new ue(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ec)?(h===void 0&&(h=new kn(new ho(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:ua(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=me.getTransfer(v.colorSpace)!==Se,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new kn(new xu(2,2),new zn({name:"BackgroundMaterial",uniforms:ua(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=me.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Al,Km(s)),n.buffers.color.setClear(Al.r,Al.g,Al.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function N1(s,t,e,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(P,I,F,D,z){let q=!1;if(o){let R=g(D,F,I);c!==R&&(c=R,f(c.object)),q=p(P,D,F,z),q&&y(P,D,F,z)}else{let R=I.wireframe===!0;(c.geometry!==D.id||c.program!==F.id||c.wireframe!==R)&&(c.geometry=D.id,c.program=F.id,c.wireframe=R,q=!0)}z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,O(P,I,F,D),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,I,F){let D=F.wireframe===!0,z=a[P.id];z===void 0&&(z={},a[P.id]=z);let q=z[I.id];q===void 0&&(q={},z[I.id]=q);let R=q[D];return R===void 0&&(R=m(d()),q[D]=R),R}function m(P){let I=[],F=[],D=[];for(let z=0;z<i;z++)I[z]=0,F[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:D,object:P,attributes:{},index:null}}function p(P,I,F,D){let z=c.attributes,q=I.attributes,R=0,j=F.getAttributes();for(let lt in j)if(j[lt].location>=0){let Q=z[lt],at=q[lt];if(at===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),Q===void 0||Q.attribute!==at||at&&Q.data!==at.data)return!0;R++}return c.attributesNum!==R||c.index!==D}function y(P,I,F,D){let z={},q=I.attributes,R=0,j=F.getAttributes();for(let lt in j)if(j[lt].location>=0){let Q=q[lt];Q===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let at={};at.attribute=Q,Q&&Q.data&&(at.data=Q.data),z[lt]=at,R++}c.attributes=z,c.attributesNum=R,c.index=D}function v(){let P=c.newAttributes;for(let I=0,F=P.length;I<F;I++)P[I]=0}function b(P){A(P,0)}function A(P,I){let F=c.newAttributes,D=c.enabledAttributes,z=c.attributeDivisors;F[P]=1,D[P]===0&&(s.enableVertexAttribArray(P),D[P]=1),z[P]!==I&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),z[P]=I)}function T(){let P=c.newAttributes,I=c.enabledAttributes;for(let F=0,D=I.length;F<D;F++)I[F]!==P[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function S(P,I,F,D,z,q,R){R===!0?s.vertexAttribIPointer(P,I,F,z,q):s.vertexAttribPointer(P,I,F,D,z,q)}function O(P,I,F,D){if(n.isWebGL2===!1&&(P.isInstancedMesh||D.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let z=D.attributes,q=F.getAttributes(),R=I.defaultAttributeValues;for(let j in q){let lt=q[j];if(lt.location>=0){let J=z[j];if(J===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){let Q=J.normalized,at=J.itemSize,nt=e.get(J);if(nt===void 0)continue;let st=nt.buffer,gt=nt.type,pt=nt.bytesPerElement,St=n.isWebGL2===!0&&(gt===s.INT||gt===s.UNSIGNED_INT||J.gpuType===zm);if(J.isInterleavedBufferAttribute){let Tt=J.data,X=Tt.stride,Nt=J.offset;if(Tt.isInstancedInterleavedBuffer){for(let yt=0;yt<lt.locationSize;yt++)A(lt.location+yt,Tt.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let yt=0;yt<lt.locationSize;yt++)b(lt.location+yt);s.bindBuffer(s.ARRAY_BUFFER,st);for(let yt=0;yt<lt.locationSize;yt++)S(lt.location+yt,at/lt.locationSize,gt,Q,X*pt,(Nt+at/lt.locationSize*yt)*pt,St)}else{if(J.isInstancedBufferAttribute){for(let Tt=0;Tt<lt.locationSize;Tt++)A(lt.location+Tt,J.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Tt=0;Tt<lt.locationSize;Tt++)b(lt.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,st);for(let Tt=0;Tt<lt.locationSize;Tt++)S(lt.location+Tt,at/lt.locationSize,gt,Q,at*pt,at/lt.locationSize*Tt*pt,St)}}else if(R!==void 0){let Q=R[j];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(lt.location,Q);break;case 3:s.vertexAttrib3fv(lt.location,Q);break;case 4:s.vertexAttrib4fv(lt.location,Q);break;default:s.vertexAttrib1fv(lt.location,Q)}}}}T()}function x(){L();for(let P in a){let I=a[P];for(let F in I){let D=I[F];for(let z in D)_(D[z].object),delete D[z];delete I[F]}delete a[P]}}function M(P){if(a[P.id]===void 0)return;let I=a[P.id];for(let F in I){let D=I[F];for(let z in D)_(D[z].object),delete D[z];delete I[F]}delete a[P.id]}function k(P){for(let I in a){let F=a[I];if(F[P.id]===void 0)continue;let D=F[P.id];for(let z in D)_(D[z].object),delete D[z];delete F[P.id]}}function L(){N(),h=!0,c!==l&&(c=l,f(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:L,resetDefaultState:N,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:b,disableUnusedAttributes:T}}function O1(s,t,e,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<d;_++)this.render(h[_],u[_]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function F1(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&s.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=o||t.has("OES_texture_float"),A=v&&b,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:T}}function k1(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ji,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,v=y*4,b=p.clippingState||null;l.value=b,b=h(_,d,v,f);for(let A=0;A!==v;++A)b[A]=e[A];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=f;v!==g;++v,b+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function B1(s){let t=new WeakMap;function e(o,a){return a===cu?o.mapping=oa:a===hu&&(o.mapping=la),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===cu||a===hu)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new vu(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var yu=class extends Jl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},na=4,pm=[.125,.215,.35,.446,.526,.582],or=20,nu=new yu,mm=new ue,iu=null,su=0,ru=0,rr=(1+Math.sqrt(5))/2,Qr=1/rr,gm=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,rr,Qr),new W(0,rr,-Qr),new W(Qr,0,rr),new W(-Qr,0,rr),new W(rr,Qr,0),new W(-rr,Qr,0)],Ql=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){iu=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(iu,su,ru),t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oa||t.mapping===la?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),iu=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:lo,format:xi,colorSpace:ts,depthBuffer:!1},i=_m(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z1(r)),this._blurMaterial=H1(r,t,e)}return i}_compileMaterial(t){let e=new kn(this._lodPlanes[0],t);this._renderer.compile(e,nu)}_sceneToCubeUV(t,e,n,i){let a=new sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mm),h.toneMapping=ws,h.autoClear=!1;let f=new $l({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),_=new kn(new ho,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(mm),g=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Cl(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===oa||t.mapping===la;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Cl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,nu)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=gm[(i-1)%gm.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kn(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*or-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):or;m>or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);let p=[],y=0;for(let S=0;S<or;++S){let O=S/g,x=Math.exp(-O*O/2);p.push(x),S===0?y+=x:S<m&&(y+=2*x)}for(let S=0;S<p.length;S++)p[S]=p[S]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-n;let b=this._sizeLods[i],A=3*b*(i>v-na?i-v+na:0),T=4*(this._cubeSize-b);Cl(e,A,T,3*b,2*b),l.setRenderTarget(e),l.render(u,nu)}};function z1(s){let t=[],e=[],n=[],i=s,r=s-na+1+pm.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-na?l=pm[o-s+na-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),v=new Float32Array(m*_*f),b=new Float32Array(p*_*f);for(let T=0;T<f;T++){let S=T%3*2/3-1,O=T>2?0:-1,x=[S,O,0,S+2/3,O,0,S+2/3,O+1,0,S,O,0,S+2/3,O+1,0,S,O+1,0];y.set(x,g*_*T),v.set(d,m*_*T);let M=[T,T,T,T,T,T];b.set(M,p*_*T)}let A=new Jn;A.setAttribute("position",new Ke(y,g)),A.setAttribute("uv",new Ke(v,m)),A.setAttribute("faceIndex",new Ke(b,p)),t.push(A),i>na&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _m(s,t,e){let n=new es(s,t,e);return n.texture.mapping=ec,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cl(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function H1(s,t,e){let n=new Float32Array(or),i=new W(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function vm(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function xm(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}function V1(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===cu||l===hu,h=l===oa||l===la;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ql(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Ql(s));let d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function G1(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function W1(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let _ in d)t.update(d[_],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let v=0,b=y.length;v<b;v+=3){let A=y[v+0],T=y[v+1],S=y[v+2];d.push(A,T,T,S,S,A)}}else if(_!==void 0){let y=_.array;g=_.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let A=v+0,T=v+1,S=v+2;d.push(A,T,T,S,S,A)}}else return;let m=new(Zm(d)?Zl:Yl)(d,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function X1(s,t,e,n){let i=n.isWebGL2,r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,_){s.drawElements(r,_,a,f*l),e.update(_,r,1)}function u(f,_,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,a,f*l,g),e.update(_,r,g)}function d(f,_,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(f[p]/l,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,a,f,0,g);let p=0;for(let y=0;y<g;y++)p+=_[y];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function q1(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $1(s,t){return s[0]-t[0]}function Y1(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Z1(s,t,e){let n={},i=new Float32Array(8),r=new WeakMap,o=new rn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0,g=r.get(h);if(g===void 0||g.count!==_){let P=function(){L.dispose(),r.delete(h),h.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],O=0;y===!0&&(O=1),v===!0&&(O=2),b===!0&&(O=3);let x=h.attributes.position.count*O,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let k=new Float32Array(x*M*4*_),L=new Gl(k,x,M,_);L.type=Ms,L.needsUpdate=!0;let N=O*4;for(let I=0;I<_;I++){let F=A[I],D=T[I],z=S[I],q=x*M*4*I;for(let R=0;R<F.count;R++){let j=R*N;y===!0&&(o.fromBufferAttribute(F,R),k[q+j+0]=o.x,k[q+j+1]=o.y,k[q+j+2]=o.z,k[q+j+3]=0),v===!0&&(o.fromBufferAttribute(D,R),k[q+j+4]=o.x,k[q+j+5]=o.y,k[q+j+6]=o.z,k[q+j+7]=0),b===!0&&(o.fromBufferAttribute(z,R),k[q+j+8]=o.x,k[q+j+9]=o.y,k[q+j+10]=o.z,k[q+j+11]=z.itemSize===4?o.w:1)}}g={count:_,texture:L,size:new ge(x,M)},r.set(h,g),h.addEventListener("dispose",P)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{let f=d===void 0?0:d.length,_=n[h.id];if(_===void 0||_.length!==f){_=[];for(let v=0;v<f;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<f;v++){let b=_[v];b[0]=v,b[1]=d[v]}_.sort(Y1);for(let v=0;v<8;v++)v<f&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort($1);let g=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let b=a[v],A=b[0],T=b[1];A!==Number.MAX_SAFE_INTEGER&&T?(g&&h.getAttribute("morphTarget"+v)!==g[A]&&h.setAttribute("morphTarget"+v,g[A]),m&&h.getAttribute("morphNormal"+v)!==m[A]&&h.setAttribute("morphNormal"+v,m[A]),i[v]=T,p+=T):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function J1(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var tc=class extends bi{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:cr,h!==cr&&h!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cr&&(n=bs),n===void 0&&h===ca&&(n=lr),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qm=new bi,tg=new tc(1,1);tg.compareFunction=Ym;var eg=new Gl,ng=new gu,ig=new Kl,ym=[],bm=[],Mm=new Float32Array(16),Sm=new Float32Array(9),wm=new Float32Array(4);function ga(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=ym[i];if(r===void 0&&(r=new Float32Array(i),ym[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sc(s,t){let e=bm[t];e===void 0&&(e=new Int32Array(t),bm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function K1(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function j1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function Q1(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function tb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function eb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;wm.set(n),s.uniformMatrix2fv(this.addr,!1,wm),qe(e,n)}}function nb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Sm.set(n),s.uniformMatrix3fv(this.addr,!1,Sm),qe(e,n)}}function ib(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Mm.set(n),s.uniformMatrix4fv(this.addr,!1,Mm),qe(e,n)}}function sb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function ab(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function lb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function hb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function ub(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function db(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?tg:Qm;e.setTexture2D(t||r,i)}function fb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ng,i)}function pb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ig,i)}function mb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||eg,i)}function gb(s){switch(s){case 5126:return K1;case 35664:return j1;case 35665:return Q1;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return sb;case 35667:case 35671:return rb;case 35668:case 35672:return ab;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return hb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(s,t){s.uniform1fv(this.addr,t)}function vb(s,t){let e=ga(t,this.size,2);s.uniform2fv(this.addr,e)}function xb(s,t){let e=ga(t,this.size,3);s.uniform3fv(this.addr,e)}function yb(s,t){let e=ga(t,this.size,4);s.uniform4fv(this.addr,e)}function bb(s,t){let e=ga(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Mb(s,t){let e=ga(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sb(s,t){let e=ga(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wb(s,t){s.uniform1iv(this.addr,t)}function Eb(s,t){s.uniform2iv(this.addr,t)}function Tb(s,t){s.uniform3iv(this.addr,t)}function Ab(s,t){s.uniform4iv(this.addr,t)}function Cb(s,t){s.uniform1uiv(this.addr,t)}function Rb(s,t){s.uniform2uiv(this.addr,t)}function Pb(s,t){s.uniform3uiv(this.addr,t)}function Lb(s,t){s.uniform4uiv(this.addr,t)}function Ib(s,t,e){let n=this.cache,i=t.length,r=sc(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Qm,r[o])}function Db(s,t,e){let n=this.cache,i=t.length,r=sc(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ng,r[o])}function Ub(s,t,e){let n=this.cache,i=t.length,r=sc(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ig,r[o])}function Nb(s,t,e){let n=this.cache,i=t.length,r=sc(e,i);Xe(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||eg,r[o])}function Ob(s){switch(s){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return yb;case 35674:return bb;case 35675:return Mb;case 35676:return Sb;case 5124:case 35670:return wb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return Ab;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Nb}}var bu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gb(e.type)}},Mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ob(e.type)}},Su=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},au=/(\w+)(\])?(\[|\.)?/g;function Em(s,t){s.seq.push(t),s.map[t.id]=t}function Fb(s,t,e){let n=s.name,i=n.length;for(au.lastIndex=0;;){let r=au.exec(n),o=au.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Em(e,c===void 0?new bu(a,s,t):new Mu(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Su(a),Em(e,u)),e=u}}}var aa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Fb(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Tm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var kb=37297,Bb=0;function zb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Hb(s){let t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(s),n;switch(t===e?n="":t===Fl&&e===Ol?n="LinearDisplayP3ToLinearSRGB":t===Ol&&e===Fl&&(n="LinearSRGBToLinearDisplayP3"),s){case ts:case nc:return[n,"LinearTransferOETF"];case nn:case qu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Am(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+zb(s.getShaderSource(t),o)}else return i}function Vb(s,t){let e=Hb(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gb(s,t){let e;switch(t){case $_:e="Linear";break;case Y_:e="Reinhard";break;case Z_:e="OptimizedCineon";break;case J_:e="ACESFilmic";break;case j_:e="AgX";break;case K_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Wb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ia).join(`
`)}function Xb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ia).join(`
`)}function qb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $b(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ia(s){return s!==""}function Cm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rm(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(s){return s.replace(Yb,Jb)}var Zb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jb(s,t){let e=jt[t];if(e===void 0){let n=Zb.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wu(e)}var Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(s){return s.replace(Kb,jb)}function jb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lm(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fm?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===b_?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ki&&(t="SHADOWMAP_TYPE_VSM"),t}function tM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case oa:case la:t="ENVMAP_TYPE_CUBE";break;case ec:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eM(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case la:t="ENVMAP_MODE_REFRACTION";break}return t}function nM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case km:t="ENVMAP_BLENDING_MULTIPLY";break;case X_:t="ENVMAP_BLENDING_MIX";break;case q_:t="ENVMAP_BLENDING_ADD";break}return t}function iM(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function sM(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Qb(e),c=tM(e),h=eM(e),u=nM(e),d=iM(e),f=e.isWebGL2?"":Wb(e),_=Xb(e),g=qb(r),m=i.createProgram(),p,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ia).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ia).join(`
`),y.length>0&&(y+=`
`)):(p=[Lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),y=[f,Lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ws?"#define TONE_MAPPING":"",e.toneMapping!==ws?jt.tonemapping_pars_fragment:"",e.toneMapping!==ws?Gb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Vb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),o=wu(o),o=Cm(o,e),o=Rm(o,e),a=wu(a),a=Cm(a,e),a=Rm(a,e),o=Pm(o),a=Pm(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=v+p+o,A=v+y+a,T=Tm(i,i.VERTEX_SHADER,b),S=Tm(i,i.FRAGMENT_SHADER,A);i.attachShader(m,T),i.attachShader(m,S),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(L){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(T).trim(),I=i.getShaderInfoLog(S).trim(),F=!0,D=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,S);else{let z=Am(i,T,"vertex"),q=Am(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+z+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||I==="")&&(D=!1);D&&(L.diagnostics={runnable:F,programLog:N,vertexShader:{log:P,prefix:p},fragmentShader:{log:I,prefix:y}})}i.deleteShader(T),i.deleteShader(S),x=new aa(i,m),M=$b(i,m)}let x;this.getUniforms=function(){return x===void 0&&O(this),x};let M;this.getAttributes=function(){return M===void 0&&O(this),M};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=i.getProgramParameter(m,kb)),k},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bb++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=S,this}var rM=0,Eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tu(t),e.set(t,n)),n}},Tu=class{constructor(t){this.id=rM++,this.code=t,this.usedTimes=0}};function aM(s,t,e,n,i,r,o){let a=new ql,l=new Eu,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function m(x,M,k,L,N){let P=L.fog,I=N.geometry,F=x.isMeshStandardMaterial?L.environment:null,D=(x.isMeshStandardMaterial?e:t).get(x.envMap||F),z=D&&D.mapping===ec?D.image.height:null,q=_[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,j=R!==void 0?R.length:0,lt=0;I.morphAttributes.position!==void 0&&(lt=1),I.morphAttributes.normal!==void 0&&(lt=2),I.morphAttributes.color!==void 0&&(lt=3);let J,Q,at,nt;if(q){let At=Li[q];J=At.vertexShader,Q=At.fragmentShader}else J=x.vertexShader,Q=x.fragmentShader,l.update(x),at=l.getVertexShaderID(x),nt=l.getFragmentShaderID(x);let st=s.getRenderTarget(),gt=N.isInstancedMesh===!0,pt=N.isBatchedMesh===!0,St=!!x.map,Tt=!!x.matcap,X=!!D,Nt=!!x.aoMap,yt=!!x.lightMap,It=!!x.bumpMap,Mt=!!x.normalMap,$=!!x.displacementMap,Ot=!!x.emissiveMap,C=!!x.metalnessMap,w=!!x.roughnessMap,V=x.anisotropy>0,it=x.clearcoat>0,tt=x.iridescence>0,rt=x.sheen>0,bt=x.transmission>0,_t=V&&!!x.anisotropyMap,H=it&&!!x.clearcoatMap,et=it&&!!x.clearcoatNormalMap,ot=it&&!!x.clearcoatRoughnessMap,K=tt&&!!x.iridescenceMap,kt=tt&&!!x.iridescenceThicknessMap,xt=rt&&!!x.sheenColorMap,Ft=rt&&!!x.sheenRoughnessMap,Et=!!x.specularMap,wt=!!x.specularColorMap,Vt=!!x.specularIntensityMap,qt=bt&&!!x.transmissionMap,Kt=bt&&!!x.thicknessMap,mt=!!x.gradientMap,ct=!!x.alphaMap,U=x.alphaTest>0,ut=!!x.alphaHash,dt=!!x.extensions,zt=!!I.attributes.uv1,Bt=!!I.attributes.uv2,re=!!I.attributes.uv3,he=ws;return x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=s.toneMapping),{isWebGL2:h,shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:Q,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:pt,instancing:gt,instancingColor:gt&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ts,map:St,matcap:Tt,envMap:X,envMapMode:X&&D.mapping,envMapCubeUVHeight:z,aoMap:Nt,lightMap:yt,bumpMap:It,normalMap:Mt,displacementMap:d&&$,emissiveMap:Ot,normalMapObjectSpace:Mt&&x.normalMapType===uv,normalMapTangentSpace:Mt&&x.normalMapType===hv,metalnessMap:C,roughnessMap:w,anisotropy:V,anisotropyMap:_t,clearcoat:it,clearcoatMap:H,clearcoatNormalMap:et,clearcoatRoughnessMap:ot,iridescence:tt,iridescenceMap:K,iridescenceThicknessMap:kt,sheen:rt,sheenColorMap:xt,sheenRoughnessMap:Ft,specularMap:Et,specularColorMap:wt,specularIntensityMap:Vt,transmission:bt,transmissionMap:qt,thicknessMap:Kt,gradientMap:mt,opaque:x.transparent===!1&&x.blending===sa,alphaMap:ct,alphaTest:U,alphaHash:ut,combine:x.combine,mapUv:St&&g(x.map.channel),aoMapUv:Nt&&g(x.aoMap.channel),lightMapUv:yt&&g(x.lightMap.channel),bumpMapUv:It&&g(x.bumpMap.channel),normalMapUv:Mt&&g(x.normalMap.channel),displacementMapUv:$&&g(x.displacementMap.channel),emissiveMapUv:Ot&&g(x.emissiveMap.channel),metalnessMapUv:C&&g(x.metalnessMap.channel),roughnessMapUv:w&&g(x.roughnessMap.channel),anisotropyMapUv:_t&&g(x.anisotropyMap.channel),clearcoatMapUv:H&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&g(x.sheenRoughnessMap.channel),specularMapUv:Et&&g(x.specularMap.channel),specularColorMapUv:wt&&g(x.specularColorMap.channel),specularIntensityMapUv:Vt&&g(x.specularIntensityMap.channel),transmissionMapUv:qt&&g(x.transmissionMap.channel),thicknessMapUv:Kt&&g(x.thicknessMap.channel),alphaMapUv:ct&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Mt||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:Bt,vertexUv3s:re,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(St||ct),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,useLegacyLights:s._useLegacyLights,decodeVideoTexture:St&&x.map.isVideoTexture===!0&&me.getTransfer(x.map.colorSpace)===Se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===Bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:dt&&x.extensions.derivatives===!0,extensionFragDepth:dt&&x.extensions.fragDepth===!0,extensionDrawBuffers:dt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)M.push(k),M.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(y(M,x),v(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function v(x,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function b(x){let M=_[x.type],k;if(M){let L=Li[M];k=Zv.clone(L.uniforms)}else k=x.uniforms;return k}function A(x,M){let k;for(let L=0,N=c.length;L<N;L++){let P=c[L];if(P.cacheKey===M){k=P,++k.usedTimes;break}}return k===void 0&&(k=new sM(s,M,x,r),c.push(k)),k}function T(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function S(x){l.remove(x)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:A,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:O}}function oM(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function lM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Im(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Dm(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||lM),n.length>1&&n.sort(d||Im),i.length>1&&i.sort(d||Im)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function cM(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Dm,s.set(n,[o])):i>=r.length?(o=new Dm,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function hM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new ue};break;case"SpotLight":e={position:new W,direction:new W,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=e,e}}}function uM(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var dM=0;function fM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function pM(s,t){let e=new hM,n=uM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new W);let r=new W,o=new an,a=new an;function l(h,u){let d=0,f=0,_=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let g=0,m=0,p=0,y=0,v=0,b=0,A=0,T=0,S=0,O=0,x=0;h.sort(fM);let M=u===!0?Math.PI:1;for(let L=0,N=h.length;L<N;L++){let P=h[L],I=P.color,F=P.intensity,D=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=I.r*F*M,f+=I.g*F*M,_+=I.b*F*M;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],F);x++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){let R=P.shadow,j=n.get(P);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=z,i.directionalShadowMatrix[g]=P.shadow.matrix,b++}i.directional[g]=q,g++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(I).multiplyScalar(F*M),q.distance=D,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[p]=q;let R=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,R.updateMatrices(P),P.castShadow&&O++),i.spotLightMatrix[p]=R.matrix,P.castShadow){let j=n.get(P);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=z,T++}p++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(I).multiplyScalar(F),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=q,y++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*M),q.distance=P.distance,q.decay=P.decay,P.castShadow){let R=P.shadow,j=n.get(P);j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=P.shadow.matrix,A++}i.point[m]=q,m++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(F*M),q.groundColor.copy(P.groundColor).multiplyScalar(F*M),i.hemi[v]=q,v++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=_;let k=i.hash;(k.directionalLength!==g||k.pointLength!==m||k.spotLength!==p||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==b||k.numPointShadows!==A||k.numSpotShadows!==T||k.numSpotMaps!==S||k.numLightProbes!==x)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+S-O,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=x,k.directionalLength=g,k.pointLength=m,k.spotLength=p,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=b,k.numPointShadows=A,k.numSpotShadows=T,k.numSpotMaps=S,k.numLightProbes=x,i.version=dM++)}function c(h,u){let d=0,f=0,_=0,g=0,m=0,p=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let b=h[y];if(b.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(b.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),_++}else if(b.isRectAreaLight){let A=i.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Um(s,t){let e=new pM(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mM(s,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new Um(s,t),e.set(r,[l])):o>=a.length?(l=new Um(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Au=class extends dr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cu=class extends dr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
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
}`;function vM(s,t,e){let n=new jl,i=new ge,r=new ge,o=new rn,a=new Au({depthPacking:cv}),l=new Cu,c={},h=e.maxTextureSize,u={[Ts]:Bn,[Bn]:Ts,[_i]:_i},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:gM,fragmentShader:_M}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Jn;_.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new kn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fm;let p=this.type;this.render=function(T,S,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let x=s.getRenderTarget(),M=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ss),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=p!==Ki&&this.type===Ki,P=p===Ki&&this.type!==Ki;for(let I=0,F=T.length;I<F;I++){let D=T[I],z=D.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let q=z.getFrameExtents();if(i.multiply(q),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,z.mapSize.y=r.y)),z.map===null||N===!0||P===!0){let j=this.type!==Ki?{minFilter:Pn,magFilter:Pn}:{};z.map!==null&&z.map.dispose(),z.map=new es(i.x,i.y,j),z.map.texture.name=D.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let R=z.getViewportCount();for(let j=0;j<R;j++){let lt=z.getViewport(j);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),L.viewport(o),z.updateMatrices(D,j),n=z.getFrustum(),b(S,O,z.camera,D,this.type)}z.isPointLightShadow!==!0&&this.type===Ki&&y(z,O),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,M,k)};function y(T,S){let O=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new es(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,O,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,O,f,g,null)}function v(T,S,O,x){let M=null,k=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)M=k;else if(M=O.isPointLight===!0?l:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let L=M.uuid,N=S.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let I=P[N];I===void 0&&(I=M.clone(),P[N]=I,S.addEventListener("dispose",A)),M=I}if(M.visible=S.visible,M.wireframe=S.wireframe,x===Ki?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=s.properties.get(M);L.light=O}return M}function b(T,S,O,x,M){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ki)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);let N=t.update(T),P=T.material;if(Array.isArray(P)){let I=N.groups;for(let F=0,D=I.length;F<D;F++){let z=I[F],q=P[z.materialIndex];if(q&&q.visible){let R=v(T,q,x,M);T.onBeforeShadow(s,T,S,O,N,R,z),s.renderBufferDirect(O,null,N,R,T,z),T.onAfterShadow(s,T,S,O,N,R,z)}}}else if(P.visible){let I=v(T,P,x,M);T.onBeforeShadow(s,T,S,O,N,I,null),s.renderBufferDirect(O,null,N,I,T,null),T.onAfterShadow(s,T,S,O,N,I,null)}}let L=T.children;for(let N=0,P=L.length;N<P;N++)b(L[N],S,O,x,M)}function A(T){T.target.removeEventListener("dispose",A);for(let O in c){let x=c[O],M=T.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}function xM(s,t,e){let n=e.isWebGL2;function i(){let U=!1,ut=new rn,dt=null,zt=new rn(0,0,0,0);return{setMask:function(Bt){dt!==Bt&&!U&&(s.colorMask(Bt,Bt,Bt,Bt),dt=Bt)},setLocked:function(Bt){U=Bt},setClear:function(Bt,re,he,Lt,At){At===!0&&(Bt*=Lt,re*=Lt,he*=Lt),ut.set(Bt,re,he,Lt),zt.equals(ut)===!1&&(s.clearColor(Bt,re,he,Lt),zt.copy(ut))},reset:function(){U=!1,dt=null,zt.set(-1,0,0,0)}}}function r(){let U=!1,ut=null,dt=null,zt=null;return{setTest:function(Bt){Bt?pt(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(Bt){ut!==Bt&&!U&&(s.depthMask(Bt),ut=Bt)},setFunc:function(Bt){if(dt!==Bt){switch(Bt){case k_:s.depthFunc(s.NEVER);break;case B_:s.depthFunc(s.ALWAYS);break;case z_:s.depthFunc(s.LESS);break;case Il:s.depthFunc(s.LEQUAL);break;case H_:s.depthFunc(s.EQUAL);break;case V_:s.depthFunc(s.GEQUAL);break;case G_:s.depthFunc(s.GREATER);break;case W_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=Bt}},setLocked:function(Bt){U=Bt},setClear:function(Bt){zt!==Bt&&(s.clearDepth(Bt),zt=Bt)},reset:function(){U=!1,ut=null,dt=null,zt=null}}}function o(){let U=!1,ut=null,dt=null,zt=null,Bt=null,re=null,he=null,Lt=null,At=null;return{setTest:function(Ut){U||(Ut?pt(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(Ut){ut!==Ut&&!U&&(s.stencilMask(Ut),ut=Ut)},setFunc:function(Ut,ht,Gt){(dt!==Ut||zt!==ht||Bt!==Gt)&&(s.stencilFunc(Ut,ht,Gt),dt=Ut,zt=ht,Bt=Gt)},setOp:function(Ut,ht,Gt){(re!==Ut||he!==ht||Lt!==Gt)&&(s.stencilOp(Ut,ht,Gt),re=Ut,he=ht,Lt=Gt)},setLocked:function(Ut){U=Ut},setClear:function(Ut){At!==Ut&&(s.clearStencil(Ut),At=Ut)},reset:function(){U=!1,ut=null,dt=null,zt=null,Bt=null,re=null,he=null,Lt=null,At=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},f={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,b=null,A=null,T=null,S=null,O=null,x=new ue(0,0,0),M=0,k=!1,L=null,N=null,P=null,I=null,F=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,q=0,R=s.getParameter(s.VERSION);R.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(R)[1]),z=q>=1):R.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),z=q>=2);let j=null,lt={},J=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),at=new rn().fromArray(J),nt=new rn().fromArray(Q);function st(U,ut,dt,zt){let Bt=new Uint8Array(4),re=s.createTexture();s.bindTexture(U,re),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let he=0;he<dt;he++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(ut,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(ut+he,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return re}let gt={};gt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(gt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pt(s.DEPTH_TEST),l.setFunc(Il),Ot(!1),C(fp),pt(s.CULL_FACE),Mt(Ss);function pt(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function St(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function Tt(U,ut){return f[U]!==ut?(s.bindFramebuffer(U,ut),f[U]=ut,n&&(U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ut),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ut)),!0):!1}function X(U,ut){let dt=g,zt=!1;if(U)if(dt=_.get(ut),dt===void 0&&(dt=[],_.set(ut,dt)),U.isWebGLMultipleRenderTargets){let Bt=U.texture;if(dt.length!==Bt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let re=0,he=Bt.length;re<he;re++)dt[re]=s.COLOR_ATTACHMENT0+re;dt.length=Bt.length,zt=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,zt=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,zt=!0);zt&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Nt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}let yt={[ar]:s.FUNC_ADD,[S_]:s.FUNC_SUBTRACT,[w_]:s.FUNC_REVERSE_SUBTRACT};if(n)yt[_p]=s.MIN,yt[vp]=s.MAX;else{let U=t.get("EXT_blend_minmax");U!==null&&(yt[_p]=U.MIN_EXT,yt[vp]=U.MAX_EXT)}let It={[E_]:s.ZERO,[T_]:s.ONE,[A_]:s.SRC_COLOR,[ou]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[R_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[lu]:s.ONE_MINUS_SRC_ALPHA,[I_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[U_]:s.CONSTANT_COLOR,[N_]:s.ONE_MINUS_CONSTANT_COLOR,[O_]:s.CONSTANT_ALPHA,[F_]:s.ONE_MINUS_CONSTANT_ALPHA};function Mt(U,ut,dt,zt,Bt,re,he,Lt,At,Ut){if(U===Ss){p===!0&&(St(s.BLEND),p=!1);return}if(p===!1&&(pt(s.BLEND),p=!0),U!==M_){if(U!==y||Ut!==k){if((v!==ar||T!==ar)&&(s.blendEquation(s.FUNC_ADD),v=ar,T=ar),Ut)switch(U){case sa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pp:s.blendFunc(s.ONE,s.ONE);break;case mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case sa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,A=null,S=null,O=null,x.set(0,0,0),M=0,y=U,k=Ut}return}Bt=Bt||ut,re=re||dt,he=he||zt,(ut!==v||Bt!==T)&&(s.blendEquationSeparate(yt[ut],yt[Bt]),v=ut,T=Bt),(dt!==b||zt!==A||re!==S||he!==O)&&(s.blendFuncSeparate(It[dt],It[zt],It[re],It[he]),b=dt,A=zt,S=re,O=he),(Lt.equals(x)===!1||At!==M)&&(s.blendColor(Lt.r,Lt.g,Lt.b,At),x.copy(Lt),M=At),y=U,k=!1}function $(U,ut){U.side===_i?St(s.CULL_FACE):pt(s.CULL_FACE);let dt=U.side===Bn;ut&&(dt=!dt),Ot(dt),U.blending===sa&&U.transparent===!1?Mt(Ss):Mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);let zt=U.stencilWrite;c.setTest(zt),zt&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(U){L!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),L=U)}function C(U){U!==x_?(pt(s.CULL_FACE),U!==N&&(U===fp?s.cullFace(s.BACK):U===y_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),N=U}function w(U){U!==P&&(z&&s.lineWidth(U),P=U)}function V(U,ut,dt){U?(pt(s.POLYGON_OFFSET_FILL),(I!==ut||F!==dt)&&(s.polygonOffset(ut,dt),I=ut,F=dt)):St(s.POLYGON_OFFSET_FILL)}function it(U){U?pt(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function tt(U){U===void 0&&(U=s.TEXTURE0+D-1),j!==U&&(s.activeTexture(U),j=U)}function rt(U,ut,dt){dt===void 0&&(j===null?dt=s.TEXTURE0+D-1:dt=j);let zt=lt[dt];zt===void 0&&(zt={type:void 0,texture:void 0},lt[dt]=zt),(zt.type!==U||zt.texture!==ut)&&(j!==dt&&(s.activeTexture(dt),j=dt),s.bindTexture(U,ut||gt[U]),zt.type=U,zt.texture=ut)}function bt(){let U=lt[j];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _t(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ft(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(U){at.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),at.copy(U))}function qt(U){nt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),nt.copy(U))}function Kt(U,ut){let dt=u.get(ut);dt===void 0&&(dt=new WeakMap,u.set(ut,dt));let zt=dt.get(U);zt===void 0&&(zt=s.getUniformBlockIndex(ut,U.name),dt.set(U,zt))}function mt(U,ut){let zt=u.get(ut).get(U);h.get(ut)!==zt&&(s.uniformBlockBinding(ut,zt,U.__bindingPointIndex),h.set(ut,zt))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},j=null,lt={},f={},_=new WeakMap,g=[],m=null,p=!1,y=null,v=null,b=null,A=null,T=null,S=null,O=null,x=new ue(0,0,0),M=0,k=!1,L=null,N=null,P=null,I=null,F=null,at.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pt,disable:St,bindFramebuffer:Tt,drawBuffers:X,useProgram:Nt,setBlending:Mt,setMaterial:$,setFlipSided:Ot,setCullFace:C,setLineWidth:w,setPolygonOffset:V,setScissorTest:it,activeTexture:tt,bindTexture:rt,unbindTexture:bt,compressedTexImage2D:_t,compressedTexImage3D:H,texImage2D:Et,texImage3D:wt,updateUBOMapping:Kt,uniformBlockBinding:mt,texStorage2D:xt,texStorage3D:Ft,texSubImage2D:et,texSubImage3D:ot,compressedTexSubImage2D:K,compressedTexSubImage3D:kt,scissor:Vt,viewport:qt,reset:ct}}function yM(s,t,e,n,i,r,o){let a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return f?new OffscreenCanvas(C,w):zl("canvas")}function g(C,w,V,it){let tt=1;if((C.width>it||C.height>it)&&(tt=it/Math.max(C.width,C.height)),tt<1||w===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){let rt=w?Bl:Math.floor,bt=rt(tt*C.width),_t=rt(tt*C.height);u===void 0&&(u=_(bt,_t));let H=V?_(bt,_t):u;return H.width=bt,H.height=_t,H.getContext("2d").drawImage(C,0,0,bt,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+bt+"x"+_t+")."),H}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return pu(C.width)&&pu(C.height)}function p(C){return a?!1:C.wrapS!==vi||C.wrapT!==vi||C.minFilter!==Pn&&C.minFilter!==ai}function y(C,w){return C.generateMipmaps&&w&&C.minFilter!==Pn&&C.minFilter!==ai}function v(C){s.generateMipmap(C)}function b(C,w,V,it,tt=!1){if(a===!1)return w;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt=w;if(w===s.RED&&(V===s.FLOAT&&(rt=s.R32F),V===s.HALF_FLOAT&&(rt=s.R16F),V===s.UNSIGNED_BYTE&&(rt=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(rt=s.R8UI),V===s.UNSIGNED_SHORT&&(rt=s.R16UI),V===s.UNSIGNED_INT&&(rt=s.R32UI),V===s.BYTE&&(rt=s.R8I),V===s.SHORT&&(rt=s.R16I),V===s.INT&&(rt=s.R32I)),w===s.RG&&(V===s.FLOAT&&(rt=s.RG32F),V===s.HALF_FLOAT&&(rt=s.RG16F),V===s.UNSIGNED_BYTE&&(rt=s.RG8)),w===s.RGBA){let bt=tt?Nl:me.getTransfer(it);V===s.FLOAT&&(rt=s.RGBA32F),V===s.HALF_FLOAT&&(rt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(rt=bt===Se?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function A(C,w,V){return y(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Pn&&C.minFilter!==ai?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function T(C){return C===Pn||C===xp||C===Ih?s.NEAREST:s.LINEAR}function S(C){let w=C.target;w.removeEventListener("dispose",S),x(w),w.isVideoTexture&&h.delete(w)}function O(C){let w=C.target;w.removeEventListener("dispose",O),k(w)}function x(C){let w=n.get(C);if(w.__webglInit===void 0)return;let V=C.source,it=d.get(V);if(it){let tt=it[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(C),Object.keys(it).length===0&&d.delete(V)}n.remove(C)}function M(C){let w=n.get(C);s.deleteTexture(w.__webglTexture);let V=C.source,it=d.get(V);delete it[w.__cacheKey],o.memory.textures--}function k(C){let w=C.texture,V=n.get(C),it=n.get(w);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(V.__webglFramebuffer[tt]))for(let rt=0;rt<V.__webglFramebuffer[tt].length;rt++)s.deleteFramebuffer(V.__webglFramebuffer[tt][rt]);else s.deleteFramebuffer(V.__webglFramebuffer[tt]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[tt])}else{if(Array.isArray(V.__webglFramebuffer))for(let tt=0;tt<V.__webglFramebuffer.length;tt++)s.deleteFramebuffer(V.__webglFramebuffer[tt]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let tt=0;tt<V.__webglColorRenderbuffer.length;tt++)V.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[tt]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let tt=0,rt=w.length;tt<rt;tt++){let bt=n.get(w[tt]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(w[tt])}n.remove(w),n.remove(C)}let L=0;function N(){L=0}function P(){let C=L;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function I(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function F(C,w){let V=n.get(C);if(C.isVideoTexture&&$(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let it=C.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(V,C,w);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function D(C,w){let V=n.get(C);if(C.version>0&&V.__version!==C.version){at(V,C,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function z(C,w){let V=n.get(C);if(C.version>0&&V.__version!==C.version){at(V,C,w);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function q(C,w){let V=n.get(C);if(C.version>0&&V.__version!==C.version){nt(V,C,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}let R={[uu]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[du]:s.MIRRORED_REPEAT},j={[Pn]:s.NEAREST,[xp]:s.NEAREST_MIPMAP_NEAREST,[Ih]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Q_]:s.LINEAR_MIPMAP_NEAREST,[oo]:s.LINEAR_MIPMAP_LINEAR},lt={[dv]:s.NEVER,[vv]:s.ALWAYS,[fv]:s.LESS,[Ym]:s.LEQUAL,[pv]:s.EQUAL,[_v]:s.GEQUAL,[mv]:s.GREATER,[gv]:s.NOTEQUAL};function J(C,w,V){if(V?(s.texParameteri(C,s.TEXTURE_WRAP_S,R[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,R[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,R[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,j[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,j[w.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==vi||w.wrapT!==vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,T(w.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==Pn&&w.minFilter!==ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,lt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let it=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Pn||w.minFilter!==Ih&&w.minFilter!==oo||w.type===Ms&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===lo&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(C,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Q(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",S));let it=w.source,tt=d.get(it);tt===void 0&&(tt={},d.set(it,tt));let rt=I(w);if(rt!==C.__cacheKey){tt[rt]===void 0&&(tt[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[rt].usedTimes++;let bt=tt[C.__cacheKey];bt!==void 0&&(tt[C.__cacheKey].usedTimes--,bt.usedTimes===0&&M(w)),C.__cacheKey=rt,C.__webglTexture=tt[rt].texture}return V}function at(C,w,V){let it=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=s.TEXTURE_3D);let tt=Q(C,w),rt=w.source;e.bindTexture(it,C.__webglTexture,s.TEXTURE0+V);let bt=n.get(rt);if(rt.version!==bt.__version||tt===!0){e.activeTexture(s.TEXTURE0+V);let _t=me.getPrimaries(me.workingColorSpace),H=w.colorSpace===oi?null:me.getPrimaries(w.colorSpace),et=w.colorSpace===oi||_t===H?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ot=p(w)&&m(w.image)===!1,K=g(w.image,ot,!1,i.maxTextureSize);K=Ot(w,K);let kt=m(K)||a,xt=r.convert(w.format,w.colorSpace),Ft=r.convert(w.type),Et=b(w.internalFormat,xt,Ft,w.colorSpace,w.isVideoTexture);J(it,w,kt);let wt,Vt=w.mipmaps,qt=a&&w.isVideoTexture!==!0&&Et!==qm,Kt=bt.__version===void 0||tt===!0,mt=A(w,K,kt);if(w.isDepthTexture)Et=s.DEPTH_COMPONENT,a?w.type===Ms?Et=s.DEPTH_COMPONENT32F:w.type===bs?Et=s.DEPTH_COMPONENT24:w.type===lr?Et=s.DEPTH24_STENCIL8:Et=s.DEPTH_COMPONENT16:w.type===Ms&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===cr&&Et===s.DEPTH_COMPONENT&&w.type!==Xu&&w.type!==bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=bs,Ft=r.convert(w.type)),w.format===ca&&Et===s.DEPTH_COMPONENT&&(Et=s.DEPTH_STENCIL,w.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=lr,Ft=r.convert(w.type))),Kt&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Et,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,Et,K.width,K.height,0,xt,Ft,null));else if(w.isDataTexture)if(Vt.length>0&&kt){qt&&Kt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,Vt[0].width,Vt[0].height);for(let ct=0,U=Vt.length;ct<U;ct++)wt=Vt[ct],qt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,wt.width,wt.height,xt,Ft,wt.data):e.texImage2D(s.TEXTURE_2D,ct,Et,wt.width,wt.height,0,xt,Ft,wt.data);w.generateMipmaps=!1}else qt?(Kt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,xt,Ft,K.data)):e.texImage2D(s.TEXTURE_2D,0,Et,K.width,K.height,0,xt,Ft,K.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Et,Vt[0].width,Vt[0].height,K.depth);for(let ct=0,U=Vt.length;ct<U;ct++)wt=Vt[ct],w.format!==xi?xt!==null?qt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,wt.width,wt.height,K.depth,xt,wt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,Et,wt.width,wt.height,K.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,wt.width,wt.height,K.depth,xt,Ft,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,Et,wt.width,wt.height,K.depth,0,xt,Ft,wt.data)}else{qt&&Kt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,Vt[0].width,Vt[0].height);for(let ct=0,U=Vt.length;ct<U;ct++)wt=Vt[ct],w.format!==xi?xt!==null?qt?e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,wt.width,wt.height,xt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,Et,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,wt.width,wt.height,xt,Ft,wt.data):e.texImage2D(s.TEXTURE_2D,ct,Et,wt.width,wt.height,0,xt,Ft,wt.data)}else if(w.isDataArrayTexture)qt?(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Et,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,xt,Ft,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,K.width,K.height,K.depth,0,xt,Ft,K.data);else if(w.isData3DTexture)qt?(Kt&&e.texStorage3D(s.TEXTURE_3D,mt,Et,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,xt,Ft,K.data)):e.texImage3D(s.TEXTURE_3D,0,Et,K.width,K.height,K.depth,0,xt,Ft,K.data);else if(w.isFramebufferTexture){if(Kt)if(qt)e.texStorage2D(s.TEXTURE_2D,mt,Et,K.width,K.height);else{let ct=K.width,U=K.height;for(let ut=0;ut<mt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Et,ct,U,0,xt,Ft,null),ct>>=1,U>>=1}}else if(Vt.length>0&&kt){qt&&Kt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,Vt[0].width,Vt[0].height);for(let ct=0,U=Vt.length;ct<U;ct++)wt=Vt[ct],qt?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,xt,Ft,wt):e.texImage2D(s.TEXTURE_2D,ct,Et,xt,Ft,wt);w.generateMipmaps=!1}else qt?(Kt&&e.texStorage2D(s.TEXTURE_2D,mt,Et,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Ft,K)):e.texImage2D(s.TEXTURE_2D,0,Et,xt,Ft,K);y(w,kt)&&v(it),bt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function nt(C,w,V){if(w.image.length!==6)return;let it=Q(C,w),tt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);let rt=n.get(tt);if(tt.version!==rt.__version||it===!0){e.activeTexture(s.TEXTURE0+V);let bt=me.getPrimaries(me.workingColorSpace),_t=w.colorSpace===oi?null:me.getPrimaries(w.colorSpace),H=w.colorSpace===oi||bt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let et=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,K=[];for(let ct=0;ct<6;ct++)!et&&!ot?K[ct]=g(w.image[ct],!1,!0,i.maxCubemapSize):K[ct]=ot?w.image[ct].image:w.image[ct],K[ct]=Ot(w,K[ct]);let kt=K[0],xt=m(kt)||a,Ft=r.convert(w.format,w.colorSpace),Et=r.convert(w.type),wt=b(w.internalFormat,Ft,Et,w.colorSpace),Vt=a&&w.isVideoTexture!==!0,qt=rt.__version===void 0||it===!0,Kt=A(w,kt,xt);J(s.TEXTURE_CUBE_MAP,w,xt);let mt;if(et){Vt&&qt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,wt,kt.width,kt.height);for(let ct=0;ct<6;ct++){mt=K[ct].mipmaps;for(let U=0;U<mt.length;U++){let ut=mt[U];w.format!==xi?Ft!==null?Vt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,0,0,ut.width,ut.height,Ft,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,0,0,ut.width,ut.height,Ft,Et,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U,wt,ut.width,ut.height,0,Ft,Et,ut.data)}}}else{mt=w.mipmaps,Vt&&qt&&(mt.length>0&&Kt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,wt,K[0].width,K[0].height));for(let ct=0;ct<6;ct++)if(ot){Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,K[ct].width,K[ct].height,Ft,Et,K[ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,wt,K[ct].width,K[ct].height,0,Ft,Et,K[ct].data);for(let U=0;U<mt.length;U++){let dt=mt[U].image[ct].image;Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,0,0,dt.width,dt.height,Ft,Et,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,wt,dt.width,dt.height,0,Ft,Et,dt.data)}}else{Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ft,Et,K[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,wt,Ft,Et,K[ct]);for(let U=0;U<mt.length;U++){let ut=mt[U];Vt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,0,0,Ft,Et,ut.image[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,U+1,wt,Ft,Et,ut.image[ct])}}}y(w,xt)&&v(s.TEXTURE_CUBE_MAP),rt.__version=tt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function st(C,w,V,it,tt,rt){let bt=r.convert(V.format,V.colorSpace),_t=r.convert(V.type),H=b(V.internalFormat,bt,_t,V.colorSpace);if(!n.get(w).__hasExternalTextures){let ot=Math.max(1,w.width>>rt),K=Math.max(1,w.height>>rt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,rt,H,ot,K,w.depth,0,bt,_t,null):e.texImage2D(tt,rt,H,ot,K,0,bt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Mt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,tt,n.get(V).__webglTexture,0,It(w)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,tt,n.get(V).__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(C,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let it=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||Mt(w)){let tt=w.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Ms?it=s.DEPTH_COMPONENT32F:tt.type===bs&&(it=s.DEPTH_COMPONENT24));let rt=It(w);Mt(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,it,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,it,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let it=It(w);V&&Mt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):Mt(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let tt=0;tt<it.length;tt++){let rt=it[tt],bt=r.convert(rt.format,rt.colorSpace),_t=r.convert(rt.type),H=b(rt.internalFormat,bt,_t,rt.colorSpace),et=It(w);V&&Mt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,H,w.width,w.height):Mt(w)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,H,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,H,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);let it=n.get(w.depthTexture).__webglTexture,tt=It(w);if(w.depthTexture.format===cr)Mt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(w.depthTexture.format===ca)Mt(w)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function St(C){let w=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");pt(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=s.createRenderbuffer(),gt(w.__webglDepthbuffer[it],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),gt(w.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(C,w,V){let it=n.get(C);w!==void 0&&st(it.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&St(C)}function X(C){let w=C.texture,V=n.get(C),it=n.get(w);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=w.version,o.memory.textures++);let tt=C.isWebGLCubeRenderTarget===!0,rt=C.isWebGLMultipleRenderTargets===!0,bt=m(C)||a;if(tt){V.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[_t]=[];for(let H=0;H<w.mipmaps.length;H++)V.__webglFramebuffer[_t][H]=s.createFramebuffer()}else V.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let _t=0;_t<w.mipmaps.length;_t++)V.__webglFramebuffer[_t]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(rt)if(i.drawBuffers){let _t=C.texture;for(let H=0,et=_t.length;H<et;H++){let ot=n.get(_t[H]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Mt(C)===!1){let _t=rt?w:[w];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let H=0;H<_t.length;H++){let et=_t[H];V.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[H]);let ot=r.convert(et.format,et.colorSpace),K=r.convert(et.type),kt=b(et.internalFormat,ot,K,et.colorSpace,C.isXRRenderTarget===!0),xt=It(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,kt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+H,s.RENDERBUFFER,V.__webglColorRenderbuffer[H])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),J(s.TEXTURE_CUBE_MAP,w,bt);for(let _t=0;_t<6;_t++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let H=0;H<w.mipmaps.length;H++)st(V.__webglFramebuffer[_t][H],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,H);else st(V.__webglFramebuffer[_t],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);y(w,bt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){let _t=C.texture;for(let H=0,et=_t.length;H<et;H++){let ot=_t[H],K=n.get(ot);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),J(s.TEXTURE_2D,ot,bt),st(V.__webglFramebuffer,C,ot,s.COLOR_ATTACHMENT0+H,s.TEXTURE_2D,0),y(ot,bt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(_t,it.__webglTexture),J(_t,w,bt),a&&w.mipmaps&&w.mipmaps.length>0)for(let H=0;H<w.mipmaps.length;H++)st(V.__webglFramebuffer[H],C,w,s.COLOR_ATTACHMENT0,_t,H);else st(V.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,_t,0);y(w,bt)&&v(_t),e.unbindTexture()}C.depthBuffer&&St(C)}function Nt(C){let w=m(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let it=0,tt=V.length;it<tt;it++){let rt=V[it];if(y(rt,w)){let bt=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_t=n.get(rt).__webglTexture;e.bindTexture(bt,_t),v(bt),e.unbindTexture()}}}function yt(C){if(a&&C.samples>0&&Mt(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,it=C.height,tt=s.COLOR_BUFFER_BIT,rt=[],bt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(C),H=C.isWebGLMultipleRenderTargets===!0;if(H)for(let et=0;et<w.length;et++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let et=0;et<w.length;et++){rt.push(s.COLOR_ATTACHMENT0+et),C.depthBuffer&&rt.push(bt);let ot=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;if(ot===!1&&(C.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),H&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[et]),ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[bt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[bt])),H){let K=n.get(w[et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,V,it,0,0,V,it,tt,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),H)for(let et=0;et<w.length;et++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,_t.__webglColorRenderbuffer[et]);let ot=n.get(w[et]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}}function It(C){return Math.min(i.maxSamples,C.samples)}function Mt(C){let w=n.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Ot(C,w){let V=C.colorSpace,it=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===fu||V!==ts&&V!==oi&&(me.getTransfer(V)===Se?a===!1?t.has("EXT_sRGB")===!0&&it===xi?(C.format=fu,C.minFilter=ai,C.generateMipmaps=!1):w=Hl.sRGBToLinear(w):(it!==xi||tt!==Es)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=Tt,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Mt}function bM(s,t,e){let n=e.isWebGL2;function i(r,o=oi){let a,l=me.getTransfer(o);if(r===Es)return s.UNSIGNED_BYTE;if(r===Hm)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vm)return s.UNSIGNED_SHORT_5_5_5_1;if(r===tv)return s.BYTE;if(r===ev)return s.SHORT;if(r===Xu)return s.UNSIGNED_SHORT;if(r===zm)return s.INT;if(r===bs)return s.UNSIGNED_INT;if(r===Ms)return s.FLOAT;if(r===lo)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===nv)return s.ALPHA;if(r===xi)return s.RGBA;if(r===iv)return s.LUMINANCE;if(r===sv)return s.LUMINANCE_ALPHA;if(r===cr)return s.DEPTH_COMPONENT;if(r===ca)return s.DEPTH_STENCIL;if(r===fu)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rv)return s.RED;if(r===Gm)return s.RED_INTEGER;if(r===av)return s.RG;if(r===Wm)return s.RG_INTEGER;if(r===Xm)return s.RGBA_INTEGER;if(r===Dh||r===Uh||r===Nh||r===Oh)if(l===Se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Dh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Oh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Dh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Oh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yp||r===bp||r===Mp||r===Sp)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===yp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qm)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wp||r===Ep)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===wp)return l===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ep)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tp||r===Ap||r===Cp||r===Rp||r===Pp||r===Lp||r===Ip||r===Dp||r===Up||r===Np||r===Op||r===Fp||r===kp||r===Bp)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Tp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ap)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ip)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Up)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Np)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Op)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return l===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fh||r===zp||r===Hp)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Fh)return l===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ov||r===Vp||r===Gp||r===Wp)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Fh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lr?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Ru=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},yi=class extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}},MM={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Pu=class extends As{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=e.getContextAttributes(),m=null,p=null,y=[],v=[],b=new ge,A=null,T=new sn;T.layers.enable(1),T.viewport=new rn;let S=new sn;S.layers.enable(2),S.viewport=new rn;let O=[T,S],x=new Ru;x.layers.enable(1),x.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=y[J];return Q===void 0&&(Q=new ao,y[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=y[J];return Q===void 0&&(Q=new ao,y[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=y[J];return Q===void 0&&(Q=new ao,y[J]=Q),Q.getHandSpace()};function L(J){let Q=v.indexOf(J.inputSource);if(Q===-1)return;let at=y[Q];at!==void 0&&(at.update(J.inputSource,J.frame,c||o),at.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",P);for(let J=0;J<y.length;J++){let Q=v[J];Q!==null&&(v[J]=null,y[J].disconnect(Q))}M=null,k=null,t.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new es(f.framebufferWidth,f.framebufferHeight,{format:xi,type:Es,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,at=null,nt=null;g.depth&&(nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?ca:cr,at=g.stencil?lr:bs);let st={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(st),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new es(d.textureWidth,d.textureHeight,{format:xi,type:Es,depthTexture:new tc(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let gt=t.properties.get(p);gt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(J){for(let Q=0;Q<J.removed.length;Q++){let at=J.removed[Q],nt=v.indexOf(at);nt>=0&&(v[nt]=null,y[nt].disconnect(at))}for(let Q=0;Q<J.added.length;Q++){let at=J.added[Q],nt=v.indexOf(at);if(nt===-1){for(let gt=0;gt<y.length;gt++)if(gt>=v.length){v.push(at),nt=gt;break}else if(v[gt]===null){v[gt]=at,nt=gt;break}if(nt===-1)break}let st=y[nt];st&&st.connect(at)}}let I=new W,F=new W;function D(J,Q,at){I.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(at.matrixWorld);let nt=I.distanceTo(F),st=Q.projectionMatrix.elements,gt=at.projectionMatrix.elements,pt=st[14]/(st[10]-1),St=st[14]/(st[10]+1),Tt=(st[9]+1)/st[5],X=(st[9]-1)/st[5],Nt=(st[8]-1)/st[0],yt=(gt[8]+1)/gt[0],It=pt*Nt,Mt=pt*yt,$=nt/(-Nt+yt),Ot=$*-Nt;Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ($),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let C=pt+$,w=St+$,V=It-Ot,it=Mt+(nt-Ot),tt=Tt*St/w*C,rt=X*St/w*C;J.projectionMatrix.makePerspective(V,it,tt,rt,C,w),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function z(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;x.near=S.near=T.near=J.near,x.far=S.far=T.far=J.far,(M!==x.near||k!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,k=x.far);let Q=J.parent,at=x.cameras;z(x,Q);for(let nt=0;nt<at.length;nt++)z(at[nt],Q);at.length===2?D(x,T,S):x.projectionMatrix.copy(T.projectionMatrix),q(J,x,Q)};function q(J,Q,at){at===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(at.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=co*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)};let R=null;function j(J,Q){if(h=Q.getViewerPose(c||o),_=Q,h!==null){let at=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let nt=!1;at.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let st=0;st<at.length;st++){let gt=at[st],pt=null;if(f!==null)pt=f.getViewport(gt);else{let Tt=u.getViewSubImage(d,gt);pt=Tt.viewport,st===0&&(t.setRenderTargetTextures(p,Tt.colorTexture,d.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(p))}let St=O[st];St===void 0&&(St=new sn,St.layers.enable(st),St.viewport=new rn,O[st]=St),St.matrix.fromArray(gt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(gt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(pt.x,pt.y,pt.width,pt.height),st===0&&(x.matrix.copy(St.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(St)}}for(let at=0;at<y.length;at++){let nt=v[at],st=y[at];nt!==null&&st!==void 0&&st.update(nt,Q,c||o)}R&&R(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let lt=new jm;lt.setAnimationLoop(j),this.setAnimationLoop=function(J){R=J},this.dispose=function(){}}};function SM(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Km(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wM(s,t,e,n){let i={},r={},o=[],a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){let b=v.program;n.uniformBlockBinding(y,b)}function c(y,v){let b=i[y.id];b===void 0&&(_(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",m));let A=v.program;n.updateUBOMapping(y,A);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let b=s.createBuffer(),A=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],b=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,S=b.length;T<S;T++){let O=Array.isArray(b[T])?b[T]:[b[T]];for(let x=0,M=O.length;x<M;x++){let k=O[x];if(f(k,T,x,A)===!0){let L=k.__offset,N=Array.isArray(k.value)?k.value:[k.value],P=0;for(let I=0;I<N.length;I++){let F=N[I],D=g(F);typeof F=="number"||typeof F=="boolean"?(k.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,L+P,k.__data)):F.isMatrix3?(k.__data[0]=F.elements[0],k.__data[1]=F.elements[1],k.__data[2]=F.elements[2],k.__data[3]=0,k.__data[4]=F.elements[3],k.__data[5]=F.elements[4],k.__data[6]=F.elements[5],k.__data[7]=0,k.__data[8]=F.elements[6],k.__data[9]=F.elements[7],k.__data[10]=F.elements[8],k.__data[11]=0):(F.toArray(k.__data,P),P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,b,A){let T=y.value,S=v+"_"+b;if(A[S]===void 0)return typeof T=="number"||typeof T=="boolean"?A[S]=T:A[S]=T.clone(),!0;{let O=A[S];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return A[S]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function _(y){let v=y.uniforms,b=0,A=16;for(let S=0,O=v.length;S<O;S++){let x=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,k=x.length;M<k;M++){let L=x[M],N=Array.isArray(L.value)?L.value:[L.value];for(let P=0,I=N.length;P<I;P++){let F=N[P],D=g(F),z=b%A;z!==0&&A-z<D.boundary&&(b+=A-z),L.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=D.storage}}}let T=b%A;return T>0&&(b+=A-T),y.__size=b,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var fr=class{constructor(t={}){let{canvas:e=Dv(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this._useLegacyLights=!1,this.toneMapping=ws,this.toneMappingExposure=1;let v=this,b=!1,A=0,T=0,S=null,O=-1,x=null,M=new rn,k=new rn,L=null,N=new ue(0),P=0,I=e.width,F=e.height,D=1,z=null,q=null,R=new rn(0,0,I,F),j=new rn(0,0,I,F),lt=!1,J=new jl,Q=!1,at=!1,nt=null,st=new an,gt=new ge,pt=new W,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return S===null?D:1}let X=n;function Nt(E,B){for(let Z=0;Z<E.length;Z++){let Y=E[Z],G=e.getContext(Y,B);if(G!==null)return G}return null}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wu}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ut,!1),X===null){let B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),X=Nt(B,E),X===null)throw Nt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,It,Mt,$,Ot,C,w,V,it,tt,rt,bt,_t,H,et,ot,K,kt,xt,Ft,Et,wt,Vt,qt;function Kt(){yt=new G1(X),It=new F1(X,yt,t),yt.init(It),wt=new bM(X,yt,It),Mt=new xM(X,yt,It),$=new q1(X),Ot=new oM,C=new yM(X,yt,Mt,Ot,It,wt,$),w=new B1(v),V=new V1(v),it=new tx(X,It),Vt=new N1(X,yt,it,It),tt=new W1(X,it,$,Vt),rt=new J1(X,tt,it,$),xt=new Z1(X,It,C),ot=new k1(Ot),bt=new aM(v,w,V,yt,It,Vt,ot),_t=new SM(v,Ot),H=new cM,et=new mM(yt,It),kt=new U1(v,w,V,Mt,rt,d,l),K=new vM(v,rt,It),qt=new wM(X,$,It,Mt),Ft=new O1(X,yt,$,It),Et=new X1(X,yt,$,It),$.programs=bt.programs,v.capabilities=It,v.extensions=yt,v.properties=Ot,v.renderLists=H,v.shadowMap=K,v.state=Mt,v.info=$}Kt();let mt=new Pu(v,X);this.xr=mt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(I,F,!1))},this.getSize=function(E){return E.set(I,F)},this.setSize=function(E,B,Z=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,F=B,e.width=Math.floor(E*D),e.height=Math.floor(B*D),Z===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(I*D,F*D).floor()},this.setDrawingBufferSize=function(E,B,Z){I=E,F=B,D=Z,e.width=Math.floor(E*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,B,Z,Y){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,B,Z,Y),Mt.viewport(M.copy(R).multiplyScalar(D).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,B,Z,Y){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,B,Z,Y),Mt.scissor(k.copy(j).multiplyScalar(D).floor())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){Mt.setScissorTest(lt=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(E=!0,B=!0,Z=!0){let Y=0;if(E){let G=!1;if(S!==null){let ft=S.texture.format;G=ft===Xm||ft===Wm||ft===Gm}if(G){let ft=S.texture.type,Rt=ft===Es||ft===bs||ft===Xu||ft===lr||ft===Hm||ft===Vm,Wt=kt.getClearColor(),Pt=kt.getClearAlpha(),Dt=Wt.r,Xt=Wt.g,Yt=Wt.b;Rt?(f[0]=Dt,f[1]=Xt,f[2]=Yt,f[3]=Pt,X.clearBufferuiv(X.COLOR,0,f)):(_[0]=Dt,_[1]=Xt,_[2]=Yt,_[3]=Pt,X.clearBufferiv(X.COLOR,0,_))}else Y|=X.COLOR_BUFFER_BIT}B&&(Y|=X.DEPTH_BUFFER_BIT),Z&&(Y|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),H.dispose(),et.dispose(),Ot.dispose(),w.dispose(),V.dispose(),rt.dispose(),Vt.dispose(),qt.dispose(),bt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",At),mt.removeEventListener("sessionend",Ut),nt&&(nt.dispose(),nt=null),ht.stop()};function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=$.autoReset,B=K.enabled,Z=K.autoUpdate,Y=K.needsUpdate,G=K.type;Kt(),$.autoReset=E,K.enabled=B,K.autoUpdate=Z,K.needsUpdate=Y,K.type=G}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){let B=E.target;B.removeEventListener("dispose",dt),zt(B)}function zt(E){Bt(E),Ot.remove(E)}function Bt(E){let B=Ot.get(E).programs;B!==void 0&&(B.forEach(function(Z){bt.releaseProgram(Z)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Z,Y,G,ft){B===null&&(B=St);let Rt=G.isMesh&&G.matrixWorld.determinant()<0,Wt=xe(E,B,Z,Y,G);Mt.setMaterial(Y,Rt);let Pt=Z.index,Dt=1;if(Y.wireframe===!0){if(Pt=tt.getWireframeAttribute(Z),Pt===void 0)return;Dt=2}let Xt=Z.drawRange,Yt=Z.attributes.position,we=Xt.start*Dt,Ve=(Xt.start+Xt.count)*Dt;ft!==null&&(we=Math.max(we,ft.start*Dt),Ve=Math.min(Ve,(ft.start+ft.count)*Dt)),Pt!==null?(we=Math.max(we,0),Ve=Math.min(Ve,Pt.count)):Yt!=null&&(we=Math.max(we,0),Ve=Math.min(Ve,Yt.count));let fe=Ve-we;if(fe<0||fe===1/0)return;Vt.setup(G,Y,Wt,Z,Pt);let vn,pe=Ft;if(Pt!==null&&(vn=it.get(Pt),pe=Et,pe.setIndex(vn)),G.isMesh)Y.wireframe===!0?(Mt.setLineWidth(Y.wireframeLinewidth*Tt()),pe.setMode(X.LINES)):pe.setMode(X.TRIANGLES);else if(G.isLine){let Jt=Y.linewidth;Jt===void 0&&(Jt=1),Mt.setLineWidth(Jt*Tt()),G.isLineSegments?pe.setMode(X.LINES):G.isLineLoop?pe.setMode(X.LINE_LOOP):pe.setMode(X.LINE_STRIP)}else G.isPoints?pe.setMode(X.POINTS):G.isSprite&&pe.setMode(X.TRIANGLES);if(G.isBatchedMesh)pe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)pe.renderInstances(we,fe,G.count);else if(Z.isInstancedBufferGeometry){let Jt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,oc=Math.min(Z.instanceCount,Jt);pe.renderInstances(we,fe,oc)}else pe.render(we,fe)};function re(E,B,Z){E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=Bn,E.needsUpdate=!0,ve(E,B,Z),E.side=Ts,E.needsUpdate=!0,ve(E,B,Z),E.side=_i):ve(E,B,Z)}this.compile=function(E,B,Z=null){Z===null&&(Z=E),m=et.get(Z),m.init(),y.push(m),Z.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),E!==Z&&E.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(v._useLegacyLights);let Y=new Set;return E.traverse(function(G){let ft=G.material;if(ft)if(Array.isArray(ft))for(let Rt=0;Rt<ft.length;Rt++){let Wt=ft[Rt];re(Wt,Z,G),Y.add(Wt)}else re(ft,Z,G),Y.add(ft)}),y.pop(),m=null,Y},this.compileAsync=function(E,B,Z=null){let Y=this.compile(E,B,Z);return new Promise(G=>{function ft(){if(Y.forEach(function(Rt){Ot.get(Rt).currentProgram.isReady()&&Y.delete(Rt)}),Y.size===0){G(E);return}setTimeout(ft,10)}yt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let he=null;function Lt(E){he&&he(E)}function At(){ht.stop()}function Ut(){ht.start()}let ht=new jm;ht.setAnimationLoop(Lt),typeof self!="undefined"&&ht.setContext(self),this.setAnimationLoop=function(E){he=E,mt.setAnimationLoop(E),E===null?ht.stop():ht.start()},mt.addEventListener("sessionstart",At),mt.addEventListener("sessionend",Ut),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(B),B=mt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,S),m=et.get(E,y.length),m.init(),y.push(m),st.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(st),at=this.localClippingEnabled,Q=ot.init(this.clippingPlanes,at),g=H.get(E,p.length),g.init(),p.push(g),Gt(E,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(z,q),this.info.render.frame++,Q===!0&&ot.beginShadows();let Z=m.state.shadowsArray;if(K.render(Z,E,B),Q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),kt.render(g,E),m.setupLights(v._useLegacyLights),B.isArrayCamera){let Y=B.cameras;for(let G=0,ft=Y.length;G<ft;G++){let Rt=Y[G];Ht(g,E,Rt,Rt.viewport)}}else Ht(g,E,B);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(v,E,B),Vt.resetDefaultState(),O=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Gt(E,B,Z,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){Y&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);let Rt=rt.update(E),Wt=E.material;Wt.visible&&g.push(E,Rt,Wt,Z,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){let Rt=rt.update(E),Wt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),pt.copy(Rt.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(st)),Array.isArray(Wt)){let Pt=Rt.groups;for(let Dt=0,Xt=Pt.length;Dt<Xt;Dt++){let Yt=Pt[Dt],we=Wt[Yt.materialIndex];we&&we.visible&&g.push(E,Rt,we,Z,pt.z,Yt)}}else Wt.visible&&g.push(E,Rt,Wt,Z,pt.z,null)}}let ft=E.children;for(let Rt=0,Wt=ft.length;Rt<Wt;Rt++)Gt(ft[Rt],B,Z,Y)}function Ht(E,B,Z,Y){let G=E.opaque,ft=E.transmissive,Rt=E.transparent;m.setupLightsView(Z),Q===!0&&ot.setGlobalState(v.clippingPlanes,Z),ft.length>0&&$t(G,ft,B,Z),Y&&Mt.viewport(M.copy(Y)),G.length>0&&Ce(G,B,Z),ft.length>0&&Ce(ft,B,Z),Rt.length>0&&Ce(Rt,B,Z),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function $t(E,B,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let ft=It.isWebGL2;nt===null&&(nt=new es(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?lo:Es,minFilter:oo,samples:ft?4:0})),v.getDrawingBufferSize(gt),ft?nt.setSize(gt.x,gt.y):nt.setSize(Bl(gt.x),Bl(gt.y));let Rt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(N),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Wt=v.toneMapping;v.toneMapping=ws,Ce(E,Z,Y),C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt);let Pt=!1;for(let Dt=0,Xt=B.length;Dt<Xt;Dt++){let Yt=B[Dt],we=Yt.object,Ve=Yt.geometry,fe=Yt.material,vn=Yt.group;if(fe.side===_i&&we.layers.test(Y.layers)){let pe=fe.side;fe.side=Bn,fe.needsUpdate=!0,te(we,Z,Y,Ve,fe,vn),fe.side=pe,fe.needsUpdate=!0,Pt=!0}}Pt===!0&&(C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt)),v.setRenderTarget(Rt),v.setClearColor(N,P),v.toneMapping=Wt}function Ce(E,B,Z){let Y=B.isScene===!0?B.overrideMaterial:null;for(let G=0,ft=E.length;G<ft;G++){let Rt=E[G],Wt=Rt.object,Pt=Rt.geometry,Dt=Y===null?Rt.material:Y,Xt=Rt.group;Wt.layers.test(Z.layers)&&te(Wt,B,Z,Pt,Dt,Xt)}}function te(E,B,Z,Y,G,ft){E.onBeforeRender(v,B,Z,Y,G,ft),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(v,B,Z,Y,E,ft),G.transparent===!0&&G.side===_i&&G.forceSinglePass===!1?(G.side=Bn,G.needsUpdate=!0,v.renderBufferDirect(Z,B,Y,G,E,ft),G.side=Ts,G.needsUpdate=!0,v.renderBufferDirect(Z,B,Y,G,E,ft),G.side=_i):v.renderBufferDirect(Z,B,Y,G,E,ft),E.onAfterRender(v,B,Z,Y,G,ft)}function ve(E,B,Z){B.isScene!==!0&&(B=St);let Y=Ot.get(E),G=m.state.lights,ft=m.state.shadowsArray,Rt=G.state.version,Wt=bt.getParameters(E,G.state,ft,B,Z),Pt=bt.getProgramCacheKey(Wt),Dt=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?V:w).get(E.envMap||Y.environment),Dt===void 0&&(E.addEventListener("dispose",dt),Dt=new Map,Y.programs=Dt);let Xt=Dt.get(Pt);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===Rt)return be(E,Wt),Xt}else Wt.uniforms=bt.getUniforms(E),E.onBuild(Z,Wt,v),E.onBeforeCompile(Wt,v),Xt=bt.acquireProgram(Wt,Pt),Dt.set(Pt,Xt),Y.uniforms=Wt.uniforms;let Yt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Yt.clippingPlanes=ot.uniform),be(E,Wt),Y.needsLights=Vn(E),Y.lightsStateVersion=Rt,Y.needsLights&&(Yt.ambientLightColor.value=G.state.ambient,Yt.lightProbe.value=G.state.probe,Yt.directionalLights.value=G.state.directional,Yt.directionalLightShadows.value=G.state.directionalShadow,Yt.spotLights.value=G.state.spot,Yt.spotLightShadows.value=G.state.spotShadow,Yt.rectAreaLights.value=G.state.rectArea,Yt.ltc_1.value=G.state.rectAreaLTC1,Yt.ltc_2.value=G.state.rectAreaLTC2,Yt.pointLights.value=G.state.point,Yt.pointLightShadows.value=G.state.pointShadow,Yt.hemisphereLights.value=G.state.hemi,Yt.directionalShadowMap.value=G.state.directionalShadowMap,Yt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Yt.spotShadowMap.value=G.state.spotShadowMap,Yt.spotLightMatrix.value=G.state.spotLightMatrix,Yt.spotLightMap.value=G.state.spotLightMap,Yt.pointShadowMap.value=G.state.pointShadowMap,Yt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function He(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=aa.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function be(E,B){let Z=Ot.get(E);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function xe(E,B,Z,Y,G){B.isScene!==!0&&(B=St),C.resetTextureUnits();let ft=B.fog,Rt=Y.isMeshStandardMaterial?B.environment:null,Wt=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ts,Pt=(Y.isMeshStandardMaterial?V:w).get(Y.envMap||Rt),Dt=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xt=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Yt=!!Z.morphAttributes.position,we=!!Z.morphAttributes.normal,Ve=!!Z.morphAttributes.color,fe=ws;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(fe=v.toneMapping);let vn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pe=vn!==void 0?vn.length:0,Jt=Ot.get(Y),oc=m.state.lights;if(Q===!0&&(at===!0||E!==x)){let Kn=E===x&&Y.id===O;ot.setState(Y,E,Kn)}let Ie=!1;Y.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==oc.state.version||Jt.outputColorSpace!==Wt||G.isBatchedMesh&&Jt.batching===!1||!G.isBatchedMesh&&Jt.batching===!0||G.isInstancedMesh&&Jt.instancing===!1||!G.isInstancedMesh&&Jt.instancing===!0||G.isSkinnedMesh&&Jt.skinning===!1||!G.isSkinnedMesh&&Jt.skinning===!0||G.isInstancedMesh&&Jt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Jt.instancingColor===!1&&G.instanceColor!==null||Jt.envMap!==Pt||Y.fog===!0&&Jt.fog!==ft||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==ot.numPlanes||Jt.numIntersection!==ot.numIntersection)||Jt.vertexAlphas!==Dt||Jt.vertexTangents!==Xt||Jt.morphTargets!==Yt||Jt.morphNormals!==we||Jt.morphColors!==Ve||Jt.toneMapping!==fe||It.isWebGL2===!0&&Jt.morphTargetsCount!==pe)&&(Ie=!0):(Ie=!0,Jt.__version=Y.version);let Ps=Jt.currentProgram;Ie===!0&&(Ps=ve(Y,B,G));let sd=!1,xa=!1,lc=!1,ln=Ps.getUniforms(),Ls=Jt.uniforms;if(Mt.useProgram(Ps.program)&&(sd=!0,xa=!0,lc=!0),Y.id!==O&&(O=Y.id,xa=!0),sd||x!==E){ln.setValue(X,"projectionMatrix",E.projectionMatrix),ln.setValue(X,"viewMatrix",E.matrixWorldInverse);let Kn=ln.map.cameraPosition;Kn!==void 0&&Kn.setValue(X,pt.setFromMatrixPosition(E.matrixWorld)),It.logarithmicDepthBuffer&&ln.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ln.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,xa=!0,lc=!0)}if(G.isSkinnedMesh){ln.setOptional(X,G,"bindMatrix"),ln.setOptional(X,G,"bindMatrixInverse");let Kn=G.skeleton;Kn&&(It.floatVertexTextures?(Kn.boneTexture===null&&Kn.computeBoneTexture(),ln.setValue(X,"boneTexture",Kn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(ln.setOptional(X,G,"batchingTexture"),ln.setValue(X,"batchingTexture",G._matricesTexture,C));let cc=Z.morphAttributes;if((cc.position!==void 0||cc.normal!==void 0||cc.color!==void 0&&It.isWebGL2===!0)&&xt.update(G,Z,Ps),(xa||Jt.receiveShadow!==G.receiveShadow)&&(Jt.receiveShadow=G.receiveShadow,ln.setValue(X,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ls.envMap.value=Pt,Ls.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),xa&&(ln.setValue(X,"toneMappingExposure",v.toneMappingExposure),Jt.needsLights&&de(Ls,lc),ft&&Y.fog===!0&&_t.refreshFogUniforms(Ls,ft),_t.refreshMaterialUniforms(Ls,Y,D,F,nt),aa.upload(X,He(Jt),Ls,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(aa.upload(X,He(Jt),Ls,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ln.setValue(X,"center",G.center),ln.setValue(X,"modelViewMatrix",G.modelViewMatrix),ln.setValue(X,"normalMatrix",G.normalMatrix),ln.setValue(X,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Kn=Y.uniformsGroups;for(let hc=0,mg=Kn.length;hc<mg;hc++)if(It.isWebGL2){let rd=Kn[hc];qt.update(rd,Ps),qt.bind(rd,Ps)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ps}function de(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Vn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,B,Z){Ot.get(E.texture).__webglTexture=B,Ot.get(E.depthTexture).__webglTexture=Z;let Y=Ot.get(E);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=Z===void 0,Y.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){let Z=Ot.get(E);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Z=0){S=E,A=B,T=Z;let Y=!0,G=null,ft=!1,Rt=!1;if(E){let Pt=Ot.get(E);Pt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(X.FRAMEBUFFER,null),Y=!1):Pt.__webglFramebuffer===void 0?C.setupRenderTarget(E):Pt.__hasExternalTextures&&C.rebindTextures(E,Ot.get(E.texture).__webglTexture,Ot.get(E.depthTexture).__webglTexture);let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Rt=!0);let Xt=Ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?G=Xt[B][Z]:G=Xt[B],ft=!0):It.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?G=Ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?G=Xt[Z]:G=Xt,M.copy(E.viewport),k.copy(E.scissor),L=E.scissorTest}else M.copy(R).multiplyScalar(D).floor(),k.copy(j).multiplyScalar(D).floor(),L=lt;if(Mt.bindFramebuffer(X.FRAMEBUFFER,G)&&It.drawBuffers&&Y&&Mt.drawBuffers(E,G),Mt.viewport(M),Mt.scissor(k),Mt.setScissorTest(L),ft){let Pt=Ot.get(E.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,Z)}else if(Rt){let Pt=Ot.get(E.texture),Dt=B||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Pt.__webglTexture,Z||0,Dt)}O=-1},this.readRenderTargetPixels=function(E,B,Z,Y,G,ft,Rt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Wt=Wt[Rt]),Wt){Mt.bindFramebuffer(X.FRAMEBUFFER,Wt);try{let Pt=E.texture,Dt=Pt.format,Xt=Pt.type;if(Dt!==xi&&wt.convert(Dt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Yt=Xt===lo&&(yt.has("EXT_color_buffer_half_float")||It.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Xt!==Es&&wt.convert(Xt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===Ms&&(It.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&Z>=0&&Z<=E.height-G&&X.readPixels(B,Z,Y,G,wt.convert(Dt),wt.convert(Xt),ft)}finally{let Pt=S!==null?Ot.get(S).__webglFramebuffer:null;Mt.bindFramebuffer(X.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(E,B,Z=0){let Y=Math.pow(2,-Z),G=Math.floor(B.image.width*Y),ft=Math.floor(B.image.height*Y);C.setTexture2D(B,0),X.copyTexSubImage2D(X.TEXTURE_2D,Z,0,0,E.x,E.y,G,ft),Mt.unbindTexture()},this.copyTextureToTexture=function(E,B,Z,Y=0){let G=B.image.width,ft=B.image.height,Rt=wt.convert(Z.format),Wt=wt.convert(Z.type);C.setTexture2D(Z,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment),B.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Y,E.x,E.y,G,ft,Rt,Wt,B.image.data):B.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Y,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Rt,B.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Y,E.x,E.y,Rt,Wt,B.image),Y===0&&Z.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,Z,Y,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ft=E.max.x-E.min.x+1,Rt=E.max.y-E.min.y+1,Wt=E.max.z-E.min.z+1,Pt=wt.convert(Y.format),Dt=wt.convert(Y.type),Xt;if(Y.isData3DTexture)C.setTexture3D(Y,0),Xt=X.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),Xt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let Yt=X.getParameter(X.UNPACK_ROW_LENGTH),we=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ve=X.getParameter(X.UNPACK_SKIP_PIXELS),fe=X.getParameter(X.UNPACK_SKIP_ROWS),vn=X.getParameter(X.UNPACK_SKIP_IMAGES),pe=Z.isCompressedTexture?Z.mipmaps[G]:Z.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,pe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,E.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,E.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,E.min.z),Z.isDataTexture||Z.isData3DTexture?X.texSubImage3D(Xt,G,B.x,B.y,B.z,ft,Rt,Wt,Pt,Dt,pe.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Xt,G,B.x,B.y,B.z,ft,Rt,Wt,Pt,pe.data)):X.texSubImage3D(Xt,G,B.x,B.y,B.z,ft,Rt,Wt,Pt,Dt,pe),X.pixelStorei(X.UNPACK_ROW_LENGTH,Yt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,we),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ve),X.pixelStorei(X.UNPACK_SKIP_ROWS,fe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,vn),G===0&&Y.generateMipmaps&&X.generateMipmap(Xt),Mt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){A=0,T=0,S=null,Mt.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===qu?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===nc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===nn?hr:$m}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===hr?nn:ts}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Lu=class extends fr{};Lu.prototype.isWebGL1Renderer=!0;var da=class extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Iu=class extends dr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nm=new an,Du=new Wl,Rl=new ha,Pl=new W,fa=class extends li{constructor(t=new Jn,e=new Iu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(i),Rl.radius+=r,t.ray.intersectsSphere(Rl)===!1)return;Nm.copy(i).invert(),Du.copy(t.ray).applyMatrix4(Nm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);Pl.fromBufferAttribute(u,m),Om(Pl,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Pl.fromBufferAttribute(u,_),Om(Pl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Om(s,t,e,n,i,r,o){let a=Du.distanceSqToPoint(s);if(a<e){let l=new W;Du.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}function Ll(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function EM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var pa=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uu=class extends pa{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xp,endingEnd:Xp}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qp:r=t,a=2*e-n;break;case $p:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qp:o=t,l=2*n-e;break;case $p:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,v=(-1-f)*m+(1.5+f)*g+.5*_,b=f*m-f*g;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+y*o[c+A]+v*o[l+A]+b*o[u+A];return r}},Nu=class extends pa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ou=class extends pa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Mi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ll(e,this.TimeBufferType),this.values=Ll(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ll(t.times,Array),values:Ll(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ou(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Dl:e=this.InterpolantFactoryMethodDiscrete;break;case Ul:e=this.InterpolantFactoryMethodLinear;break;case kh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dl;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return kh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&EM(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===kh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Ul;var pr=class extends Mi{};pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Dl;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fu=class extends Mi{};Fu.prototype.ValueTypeName="color";var ku=class extends Mi{};ku.prototype.ValueTypeName="number";var Bu=class extends pa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cs.slerpFlat(r,0,o,c-a,o,c,l);return r}},uo=class extends Mi{InterpolantFactoryMethodLinear(t){return new Bu(this.times,this.values,this.getValueSize(),t)}};uo.prototype.ValueTypeName="quaternion";uo.prototype.DefaultInterpolation=Ul;uo.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends Mi{};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Dl;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var zu=class extends Mi{};zu.prototype.ValueTypeName="vector";var Hu=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},TM=new Hu,Vu=class{constructor(t){this.manager=t!==void 0?t:TM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Vu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zu="\\[\\]\\.:\\/",AM=new RegExp("["+Zu+"]","g"),Ju="[^"+Zu+"]",CM="[^"+Zu.replace("\\.","")+"]",RM=/((?:WC+[\/:])*)/.source.replace("WC",Ju),PM=/(WCOD+)?/.source.replace("WCOD",CM),LM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),IM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),DM=new RegExp("^"+RM+PM+LM+IM+"$"),UM=["material","materials","bones","map"],Gu=class{constructor(t,e,n){let i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(AM,"")}static parseTrackName(t){let e=DM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);UM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Gu;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FS=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);var _a=34,Ii=_a/2,ag=2.3,ac=.4,rg=.85,Ku=`
  uniform float uTime;
  uniform float uDraw;      // 0 \u2192 1: outline draws in from the top
  uniform float uMelt;      // 0 \u2192 1: outline turns into liquid ink
  uniform float uScatter;   // scroll-driven break-up
  uniform float uHalf;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
  float fbm(vec3 p) {
    float f = 0.0, a = 0.5;
    for (int i = 0; i < 3; i++) { f += a * snoise(p); p *= 2.03; a *= 0.5; }
    return f;
  }

  // How melted a point is: the top goes first, with an organic noisy front.
  float meltAmount(vec3 rest, float h) {
    return clamp(uMelt * 1.9 - (1.0 - h) * 0.5 - 0.2 + snoise(rest * 0.35 + 3.0) * 0.18, 0.0, 1.0);
  }
  // The outline draws in from the top.
  float drawMask(float h) { return smoothstep(0.0, 0.06, uDraw * 1.12 - (1.0 - h)); }

  vec3 flowField(vec3 p, float t) {
    vec3 q = p * 0.42 + vec3(0.0, -t * 0.35, 0.0);
    return vec3(snoise(q), snoise(q + vec3(17.1, 3.2, 9.7)), snoise(q + vec3(-8.3, 21.4, 5.1)));
  }
  // loose: 0 = core of a strand \u2026 1 = spray far from it; m: melt amount.
  // The core moves very little so the helix keeps its standard shape; edges and spray flow freely.
  vec3 liquidPosition(vec3 p, float loose, float m) {
    vec3 f = flowField(p, uTime);
    p += f * (0.08 + loose * 0.45) * m;
    p += flowField(p * 2.3 + 11.0, uTime * 1.6) * loose * 0.22 * m;
    p += f * uScatter * (3.0 + loose * 5.0);
    p.xz *= 1.0 + uScatter * 0.25;
    return p;
  }

  // reference palette: deep violet \u2192 purple \u2192 magenta \u2192 pink, cooling to blue at the bottom
  vec3 inkColor(float tone, float h) {
    vec3 c = mix(vec3(0.30, 0.09, 0.72), vec3(0.50, 0.17, 0.88), smoothstep(0.0, 0.33, tone));
    c = mix(c, vec3(0.76, 0.24, 0.82), smoothstep(0.33, 0.7, tone));
    c = mix(c, vec3(0.95, 0.54, 0.89), smoothstep(0.7, 1.0, tone));
    c = mix(c, vec3(0.45, 0.55, 0.98), smoothstep(0.44, 0.22, h) * 0.85);
    c = mix(c, vec3(0.45, 0.25, 0.95), smoothstep(0.8, 1.0, h) * 0.4);
    return c;
  }
`,NM=`
  ${Ku}
  attribute vec2 aUv;        // x: along the strand, y: across (-1..1)
  attribute float aSeed;
  attribute vec3 aCenter;    // outline centre line
  attribute vec3 aTangent;   // outline direction
  attribute float aLineW;    // outline half-width
  attribute float aLayer;    // 0 = main sheet, 1 = extra sheet (only exists once melted)
  varying vec2 vUv;
  varying float vSeed;
  varying float vH;
  varying float vDepth;
  varying float vMelt;
  varying float vLayer;
  varying vec3 vView;
  void main() {
    vUv = aUv;
    vSeed = aSeed;
    vLayer = aLayer;
    vH = clamp((aCenter.y + uHalf) / (2.0 * uHalf), 0.0, 1.0);
    float m = meltAmount(aCenter, vH);
    vMelt = m;
    // outline: a stroke that always faces the camera, around the centre line
    vec4 cv = modelViewMatrix * vec4(aCenter, 1.0);
    vec3 tv = normalize((modelViewMatrix * vec4(aTangent, 0.0)).xyz);
    vec3 sideV = normalize(cross(tv, normalize(-cv.xyz)));
    vec3 lineView = cv.xyz + sideV * aLineW * aUv.y;
    // melted: the full ink sheet, flowing
    vec3 liquidView = (modelViewMatrix * vec4(liquidPosition(position, abs(aUv.y) * 0.6, m), 1.0)).xyz;
    vec3 mv = mix(lineView, liquidView, smoothstep(0.0, 1.0, m));
    vView = mv;
    vDepth = smoothstep(30.0, 18.0, -mv.z);
    gl_Position = projectionMatrix * vec4(mv, 1.0);
  }
`,OM=`
  ${Ku}
  uniform float uOpacity;
  uniform float uSolid;    // rungs stay intact; backbones tear like ink
  uniform float uFilm;     // films only exist once melted
  varying vec2 vUv;
  varying float vSeed;
  varying float vH;
  varying float vDepth;
  varying float vMelt;
  varying float vLayer;
  varying vec3 vView;
  void main() {
    float m = vMelt;
    float t = uTime * 0.3;
    float edge = abs(vUv.y);
    float along = vUv.x * 46.0;
    float streak = fbm(vec3(along * 0.22 - t * 1.4, vUv.y * 1.6, vSeed * 3.1));
    float tear = fbm(vec3(along * 0.11 + t * 0.4, vUv.y * 0.9 + vSeed, vSeed * 7.3 + t * 0.15));

    // outline: crisp anti-aliased stroke; liquid: torn ink sheet with holes
    float line = 1.0 - smoothstep(0.55, 1.0, edge);
    float body = 1.0 - smoothstep(0.3 + tear * 0.55, 1.0, edge);
    body = mix(body, 1.0 - smoothstep(0.6, 1.0, edge), uSolid);
    float holes = smoothstep(-0.32, -0.05, tear - uScatter * 1.1 + 0.12);
    holes = mix(holes, 1.0, uSolid * (1.0 - min(uScatter, 1.0)));
    float a = mix(line, body * holes, m);
    a *= drawMask(vH) * smoothstep(0.0, 0.05, vH) * smoothstep(1.0, 0.95, vH);
    a *= mix(1.0 - vLayer, 1.0, m);
    a *= mix(1.0, m, uFilm);
    if (a < 0.01) discard;

    // line art: violet at the top, soft pink through the middle (blue at the bottom comes from inkColor)
    float lineTone = 0.28 + 0.62 * smoothstep(0.64, 0.46, vH);
    float inkTone = clamp(0.42 + streak * 1.25 + (vSeed - 0.5) * 0.35, 0.0, 1.0);
    vec3 col = inkColor(mix(lineTone, inkTone, m), vH);

    // glassy liquid: fresnel rim + specular glint from screen-space normals
    vec3 n = normalize(cross(dFdx(vView), dFdy(vView)));
    vec3 V = normalize(-vView);
    if (dot(n, V) < 0.0) n = -n;
    float fres = pow(1.0 - clamp(dot(n, V), 0.0, 1.0), 2.0);
    float spec = pow(max(dot(reflect(-normalize(vec3(-0.4, 0.8, 0.6)), n), V), 0.0), 28.0);
    col = mix(col, vec3(1.0, 0.9, 1.0), (fres * 0.45 + smoothstep(0.5, 0.8, streak) * 0.2) * m);
    col += spec * 0.6 * m;
    col = mix(col, inkColor(0.9, vH), smoothstep(0.55, 1.0, edge) * 0.25 * m);

    float liquidDensity = (0.5 + 0.35 * smoothstep(-0.3, 0.4, streak)) * (0.75 + fres * 0.5);
    liquidDensity = mix(liquidDensity, 0.9, uSolid * 0.6);
    float density = mix(0.95, liquidDensity, m);
    gl_FragColor = vec4(min(col, vec3(1.0)), a * density * (0.55 + 0.45 * vDepth) * uOpacity);
  }
`,FM=`
  ${Ku}
  uniform float uSize;
  uniform float uPR;
  uniform float uOpacity;
  attribute vec3 aRoot;    // where the particle sits on the outline before melting
  attribute vec3 aRand;
  attribute float aScale;
  attribute float aLoose;
  attribute float aTone;
  attribute float aKind;   // 0 grain, 1 filament, 2 droplet, 3 mist
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float h = clamp((aRoot.y + uHalf) / (2.0 * uHalf), 0.0, 1.0);
    float m = meltAmount(aRoot, h);
    vec3 rest = mix(aRoot, position, smoothstep(0.0, 1.0, m));
    vec3 p = liquidPosition(rest, aLoose, m) + aRand * uScatter * aLoose * 3.0;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aScale * uPR / -mv.z * mix(0.6, 1.0, m);
    vColor = inkColor(mix(0.45, aTone, m), h);
    float kindAlpha = aKind < 0.5 ? 0.5 : aKind < 1.5 ? 0.75 : aKind < 2.5 ? 0.9 : 0.3;
    float presence = aKind < 0.5 ? mix(0.35, 1.0, m) : m;   // grain dots already hug the outline
    float ends = smoothstep(0.0, 0.05, h) * smoothstep(1.0, 0.95, h);
    vAlpha = kindAlpha * presence * drawMask(h) * ends * (0.5 + 0.5 * smoothstep(30.0, 18.0, -mv.z))
      * (1.0 - uScatter * 0.6) * uOpacity;
  }
`,kM=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.15, d) * vAlpha);
  }
`;function BM(s){return()=>(s=s*16807%2147483647,(s-1)/2147483646)}function gr(s,t,e=new W){let n=s*ac+t.strand*Math.PI+t.da,i=ag+t.dr+.06*Math.sin(s*1.9+t.phase);return e.set(Math.cos(n)*i,s+t.dy,Math.sin(n)*i)}function rc(s,t,e){let n=s*ac+t.strand*Math.PI+t.da,i=ag+t.dr+.06*Math.sin(s*1.9+t.phase),r=new W(Math.cos(n),0,Math.sin(n)),o=new W(-Math.sin(n)*i*ac,1,Math.cos(n)*i*ac).normalize(),a=new W().crossVectors(o,r).normalize(),l=s*t.twist+t.phase;return gr(s,t,e.center),e.side.copy(r).multiplyScalar(Math.cos(l)).addScaledVector(a,Math.sin(l)).normalize(),e.width=t.width*Math.max(.2,.65+.3*Math.sin(s*1.3+t.phase)+.15*Math.sin(s*3.7+t.phase*1.7)),e.radial=r,e}var fo=class{constructor(){this.pos=[],this.uv=[],this.seed=[],this.center=[],this.tangent=[],this.lineW=[],this.layer=[],this.index=[]}add(t,e,n,i){let r=this.pos.length/3;t.forEach((o,a)=>{for(let l=0;l<=e;l++){let c=l/e*2-1;if(this.pos.push(o.center.x+o.side.x*o.width*c,o.center.y+o.side.y*o.width*c,o.center.z+o.side.z*o.width*c),this.uv.push(o.u,c),this.seed.push(n),this.center.push(o.line.center.x,o.line.center.y,o.line.center.z),this.tangent.push(o.line.tangent.x,o.line.tangent.y,o.line.tangent.z),this.lineW.push(o.line.width),this.layer.push(i),a<t.length-1&&l<e){let h=r+a*(e+1)+l;this.index.push(h,h+e+1,h+1,h+1,h+e+1,h+e+2)}}})}build(){let t=new Jn;return t.setAttribute("position",new Ae(this.pos,3)),t.setAttribute("aUv",new Ae(this.uv,2)),t.setAttribute("aSeed",new Ae(this.seed,1)),t.setAttribute("aCenter",new Ae(this.center,3)),t.setAttribute("aTangent",new Ae(this.tangent,3)),t.setAttribute("aLineW",new Ae(this.lineW,1)),t.setAttribute("aLayer",new Ae(this.layer,1)),t.setIndex(this.index),t}};function og(s,t){let e;try{e=new fr({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(H){return console.warn("[dna] WebGL unavailable",H),{uniforms:{uDraw:{value:1},uMelt:{value:1}},tick(){},setScroll(){},anchor:()=>null,dispose(){}}}e.setClearColor(0,0);let n=new da,i=new sn(35,1,.1,100);i.position.set(0,0,22);let r=new yi,o=new yi;r.add(o),n.add(r);let a={uTime:{value:0},uDraw:{value:0},uMelt:{value:0},uScatter:{value:0},uHalf:{value:Ii}},l={value:1},c=BM(92),h=()=>{let H=0,et=0;for(;!H;)H=c();for(;!et;)et=c();return Math.sqrt(-2*Math.log(H))*Math.cos(2*Math.PI*et)},u=(H,et,ot)=>new zn({uniforms:{...a,uOpacity:{value:H},uSolid:{value:et},uFilm:{value:ot}},vertexShader:NM,fragmentShader:OM,transparent:!0,depthWrite:!1,side:_i}),d={ink:u(.95,0,0),rung:u(.9,1,0),film:u(.24,0,1)},f=[];for(let H=0;H<2;H++){let et=H*2.1;f.push({strand:H,main:!0,width:.55,da:0,dr:0,dy:0,twist:.33,phase:et,seed:.1+H*.4},{strand:H,width:.38,da:.06,dr:.1,dy:.08,twist:-.21,phase:et+1.7,seed:.3+H*.4},{strand:H,width:.26,da:-.05,dr:-.08,dy:-.06,twist:.52,phase:et+3.3,seed:.5+H*.4},{strand:H,width:.07,da:.1,dr:.22,dy:0,twist:1.1,phase:et+4.6,seed:.7+H*.2})}let _=H=>f[H*4],g=H=>.026+.02*ic.smoothstep(H,-Ii*.4,Ii*.6),m=(H,et)=>{let ot=_(et),K=gr(H,ot),kt=gr(H+.01,ot).sub(gr(H-.01,ot)).normalize();return{center:K,tangent:kt,width:g(H)}},p=new fo,y={center:new W,side:new W,width:0,radial:null},v=700;f.forEach(H=>{let et=[];for(let ot=0;ot<=v;ot++){let K=-Ii+_a*ot/v;rc(K,H,y),et.push({center:y.center.clone(),side:y.side.clone(),width:y.width,u:ot/v,line:m(K,H.strand)})}p.add(et,18,H.seed,H.main?0:1)});let b=new fo,A=new fo,T=new W(0,1,0),S=(H,et,ot,K,kt)=>{let xt=gr(et,_(0)),Ft=gr(et,_(1)),Et=xt.distanceTo(Ft),wt=Ft.clone().sub(xt).normalize(),Vt=[];for(let qt=0;qt<=22;qt++){let Kt=qt/22,mt=xt.clone().lerp(Ft,Kt);Vt.push({center:mt,side:T,width:ot,u:(et+Ii+Kt*Et)/_a,line:{center:mt.clone(),tangent:wt,width:kt}})}H.add(Vt,2,K,0)};for(let H=-Ii+.4;H<Ii;H+=rg)S(b,H,.05,c(),.016),c()<.3&&S(A,H+rg/2,.25+c()*.35,c(),0);let O=new kn(p.build(),d.ink),x=new kn(b.build(),d.rung),M=new kn(A.build(),d.film);M.renderOrder=0,O.renderOrder=1,x.renderOrder=2,[M,O,x].forEach(H=>{H.frustumCulled=!1});let k=[],L=[],N=[],P=[],I=[],F=[],D=[],z=(H,et,ot,K,kt,xt)=>{k.push(H.x,H.y,H.z),L.push(et.x,et.y,et.z),N.push(h(),h(),h()),P.push(K),I.push(kt),F.push(xt),D.push(ot)},q=new W,R=new W,j=f.filter(H=>H.width>.3),lt=(H,et,ot)=>{let K=m(H,et),kt=new W(-K.tangent.z,0,K.tangent.x).normalize();return R.copy(K.center).addScaledVector(kt,K.width*ot*1.6)};for(let H=0;H<26e3;H++){let et=j[c()*j.length|0],ot=-Ii+c()*_a,K=(c()*2-1)*.8;rc(ot,et,y),q.copy(y.center).addScaledVector(y.side,y.width*K),z(q,lt(ot,et.strand,Math.sign(K)||1),0,.5+c()*.6,Math.abs(K)*.6,c())}let J=(H,et)=>new W(Math.sin(H.y*1.1+H.z*.6+et)+Math.cos(H.z*1.7+et*.5),Math.sin(H.z*1.3+H.x*.9+et)*.6,Math.sin(H.x*1.4+H.y*.8+et)+Math.cos(H.y*1.6-et));for(let H=0;H<520;H++){let et=j[c()*j.length|0],ot=-Ii+.5+c()*(_a-1);rc(ot,et,y);let K=lt(ot,et.strand,0).clone(),kt=y.center.clone().addScaledVector(y.side,y.width*(c()*2-1)),xt=y.radial.clone().multiplyScalar(.5+c()).add(new W((c()-.5)*.9,(c()-.5)*1.2,(c()-.5)*.9)).normalize(),Ft=.4+Math.pow(c(),1.8)*2.6,Et=26,wt=Ft/Et,Vt=.5+c()*.5;for(let qt=0;qt<Et;qt++){xt.addScaledVector(J(kt,H),.25).normalize(),kt.addScaledVector(xt,wt);let Kt=qt/Et,mt=.07*Math.pow(1-Kt,.7)+.008;for(let ct=0;ct<3;ct++)q.set(kt.x+h()*mt,kt.y+h()*mt,kt.z+h()*mt),z(q,K,1,1.1-.6*Kt,.55+.45*Kt,Vt)}if(c()<.7){let qt=1+(c()*3|0);for(let Kt=0;Kt<qt;Kt++)q.copy(kt).addScaledVector(xt,.05+c()*.35),z(q,K,2,1.6+c()*1.6,1,Vt)}}let Q=(H,et,ot,K,kt)=>{for(let xt=0;xt<H;xt++){let Ft=j[c()*j.length|0],Et=-Ii+c()*_a;rc(Et,Ft,y),q.set(h(),h()*.6,h()).normalize().multiplyScalar(.2-Math.log(1-c())*ot).add(y.center),z(q,lt(Et,Ft.strand,0),et,K+c()*(kt-K),1,c())}};Q(1500,2,.8,1.2,2.6),Q(14e3,3,.55,.35,.8);let at=new Jn;at.setAttribute("position",new Ae(k,3)),at.setAttribute("aRoot",new Ae(L,3)),at.setAttribute("aRand",new Ae(N,3)),at.setAttribute("aScale",new Ae(P,1)),at.setAttribute("aLoose",new Ae(I,1)),at.setAttribute("aTone",new Ae(F,1)),at.setAttribute("aKind",new Ae(D,1));let nt={...a,uSize:{value:46},uPR:{value:1},uOpacity:l},st=new fa(at,new zn({uniforms:nt,vertexShader:FM,fragmentShader:kM,transparent:!0,depthWrite:!1}));st.renderOrder=3,st.frustumCulled=!1,o.add(M,O,x,st);let gt=0,pt=0,St=!0,Tt=!0,X=0,Nt={x:0,y:0},yt=matchMedia("(prefers-reduced-motion: reduce)"),It=()=>{Tt=!0};yt.addEventListener("change",It);let Mt=1,$=1;function Ot(){let H=s.clientWidth||window.innerWidth,et=s.clientHeight||window.innerHeight;Mt=H,$=et;let ot=H<900,K=Math.min(window.devicePixelRatio||1,ot?1.25:1.5);e.setPixelRatio(K),e.setSize(H,et,!1),nt.uPR.value=K,i.aspect=H/et,i.updateProjectionMatrix(),gt=2*Math.tan(ic.degToRad(i.fov/2))*i.position.z*i.aspect*((ot?.86:.64)-.5),r.scale.setScalar(ot?.6:1);let xt=ot?.6:1;l.value=xt,d.ink.uniforms.uOpacity.value=.95*xt,d.rung.uniforms.uOpacity.value=.9*xt,d.film.uniforms.uOpacity.value=.24*xt,Tt=!0}Ot(),window.addEventListener("resize",Ot);let C=new IntersectionObserver(([H])=>{St=H.isIntersecting,Tt=!0});C.observe(s);function w(H,et){if(!St||document.hidden)return;let ot=yt.matches;if(ot&&!Tt)return;ot||(X+=et),a.uTime.value=ot?0:X;let K=1-Math.exp(-et*3);Nt.x+=((ot?0:t.x)-Nt.x)*K,Nt.y+=((ot?0:t.y)-Nt.y)*K;let kt=a.uMelt.value;ot||(o.rotation.y+=et*(.05+kt*.1+pt*1.2)),r.rotation.set(-Nt.y*.12,Nt.x*.22,.33+Nt.x*.04),r.position.set(gt+Nt.x*.3,Math.sin(X*.35)*.15*kt+pt*4,0);let xt=a.uDraw.value;ot&&(a.uDraw.value=1,a.uMelt.value=1),e.render(n,i),a.uDraw.value=xt,a.uMelt.value=kt,Tt=!1}function V(H){pt=ic.clamp(H,0,1),a.uScatter.value=yt.matches?0:Math.max(0,pt-.2)*.75,Tt=!0}function it(){window.removeEventListener("resize",Ot),yt.removeEventListener("change",It),C.disconnect(),o.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&H.material.dispose()}),e.dispose()}let tt=new W,rt=new W,bt=new W;function _t(H,et,ot={}){return gr(H,_(et),tt),rt.set(tt.x,0,tt.z).normalize(),o.updateWorldMatrix(!0,!1),tt.applyMatrix4(o.matrixWorld),rt.transformDirection(o.matrixWorld),ot.facing=rt.dot(bt.copy(i.position).sub(tt).normalize()),tt.project(i),ot.x=(tt.x*.5+.5)*Mt,ot.y=(-tt.y*.5+.5)*$,ot}return{uniforms:a,tick:w,setScroll:V,anchor:_t,dispose:it,renderer:e,scene:n,camera:i}}var lg={op:"\u{1FA7A}",ortho:"\u{1F9B4}",hospital:"\u{1F3E5}",ambulance:"\u{1F691}"},zM='"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", "Twemoji Mozilla", sans-serif',Qt=200,cg=7.4,Rs=s=>new Path2D(s),ug=3;function Di(s,t,e){let n=Rs(t);s.save(),s.globalCompositeOperation="destination-out",s.lineWidth=ug*2,s.lineJoin="round",s.stroke(n),s.restore(),s.fillStyle=e,s.fill(n)}function ci(s,t,e,n){let i=Rs(t);s.save(),s.globalCompositeOperation="destination-out",s.lineCap="round",s.lineWidth=e+ug*2,s.stroke(i),s.restore(),s.save(),s.lineCap="butt",s.lineWidth=e,s.strokeStyle=n,s.stroke(i),s.restore()}function Si(s,t,e=2.6){s.save(),s.globalCompositeOperation="destination-out",s.lineCap="round",s.lineJoin="round",s.lineWidth=e,s.stroke(Rs(t)),s.restore()}function on(s,t,e=2.4,n=2,i=3){let r=[],o=0;for(let c=1;c<t.length;c++){let h=Math.hypot(t[c][0]-t[c-1][0],t[c][1]-t[c-1][1]);r.push(h),o+=h}let a=Math.max(8,Math.round(o/2)),l=new Path2D;for(let c=0;c<=a;c++){let h=o*c/a,u=0;for(;u<r.length-1&&h>r[u];)h-=r[u],u++;let[d,f]=t[u],[_,g]=t[u+1],m=h/r[u],p=Math.sin(c/a*Math.PI*2*i)*n*Math.sin(c/a*Math.PI),y=d+(_-d)*m-(g-f)/r[u]*p,v=f+(g-f)*m+(_-d)/r[u]*p;c?l.lineTo(y,v):l.moveTo(y,v)}s.save(),s.globalCompositeOperation="destination-out",s.lineCap="round",s.lineJoin="round",s.lineWidth=e,s.stroke(l),s.restore()}function HM(s){let t=s.fillStyle;s.beginPath(),s.arc(112,30,15,0,Math.PI*2),s.fill(),s.beginPath(),s.arc(95,24,9,0,Math.PI*2),s.fill(),s.fill(Rs("M124 24 L 131 33 L 125 35 C 126 38 124 41 121 42 Z")),s.fill(Rs("M106 42 L 116 42 C 117 50 119 55 123 58 C 134 64 136 78 128 88 C 154 96 170 116 166 140 C 163 158 150 168 136 170 L 142 196 L 82 196 C 85 176 88 160 90 146 C 84 126 84 102 92 78 C 96 66 104 56 106 42 Z")),s.globalCompositeOperation="destination-out",s.lineCap="round",s.lineWidth=3.2,s.stroke(Rs("M102 64 C 98 86 102 106 114 118 C 120 124 128 124 132 118")),s.beginPath(),s.arc(140,132,23,0,Math.PI*2),s.fill(),s.globalCompositeOperation="source-over",s.strokeStyle=t,s.lineWidth=3,s.beginPath(),s.arc(140,132,23,0,Math.PI*2),s.stroke(),s.fillStyle="#b9a8ff",s.beginPath(),s.arc(146,120,7.5,0,Math.PI*2),s.fill(),s.fill(Rs("M140 124 C 130 125 126 136 131 143 C 136 149 147 148 150 140 C 152 133 147 126 140 124 Z")),s.fillStyle=t}function VM(s){let t="#5a48c8",e="#7b68ee",n="#a493ff";ci(s,"M 124 64 L 64 66",11,t),ci(s,"M 160 98 L 194 92",8,t),ci(s,"M 162 112 L 196 114",8,t),ci(s,"M 108 34 L 100 3",10,t),ci(s,"M 125 28 L 127 2",8,t),ci(s,"M 141 31 L 152 6",8,t),ci(s,"M 92 100 C 90 64 92 36 116 28 C 140 21 160 34 160 60 L 160 96",22,"#6a58e0"),ci(s,"M 58 6 L 58 92",20,t),ci(s,"M 56 136 L 54 172",16,t),Di(s,"M 146 86 C 160 78 176 86 174 98 C 168 106 156 104 148 100 Z","#6a58e0"),Di(s,"M 62 98 C 58 128 70 154 96 170 C 114 181 132 190 150 194 C 164 182 176 152 176 126 C 176 106 166 92 150 88 C 124 82 86 84 62 98 Z",e),Di(s,"M 66 76 C 42 76 30 100 34 124 C 37 142 50 154 68 152 C 80 130 80 100 66 76 Z","#8a78f2"),Di(s,"M 64 82 C 70 70 86 66 94 74 C 92 84 82 90 70 94 Z","#8a78f2"),ci(s,"M 112 110 C 112 88 118 70 132 60",22,n),ci(s,"M 128 61 C 146 52 164 52 184 58",13,n),Si(s,"M 120 106 C 114 134 126 162 146 190",3.6),Si(s,"M 120 130 C 134 134 148 142 160 156",2.6),Si(s,"M 78 140 C 92 150 104 162 112 176",2.6),s.save(),s.globalCompositeOperation="destination-out",s.lineWidth=1.8,s.beginPath(),s.ellipse(58,7,8,2.6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.ellipse(183,58.5,2.2,5,.2,0,Math.PI*2),s.stroke(),s.restore(),s.fillStyle=e}function GM(s){let t="#7b68ee";Di(s,"M 110 144 C 102 152 104 166 112 172 C 114 182 115 190 116 197 L 132 197 C 131 186 132 172 136 156 L 134 146 Z","#5a48c8"),Di(s,"M 118 150 C 120 134 146 128 168 134 C 186 140 186 160 170 168 C 152 176 128 170 118 150 Z","#6a58e0");for(let i=0;i<4;i++)Si(s,`M ${126+i*2} ${145+i*6} C 142 ${139+i*6.5} 164 ${139+i*6} ${183-i*3} ${147+i*5.5}`,2.6);Di(s,"M 24 104 C 20 70 44 40 80 32 C 110 24 146 28 168 48 C 186 64 190 92 182 112 C 176 126 162 132 146 134 C 136 148 118 160 98 160 C 80 160 64 152 58 138 C 52 128 40 128 30 122 C 26 118 24 112 24 104 Z",t);let e=4,n=3.4;on(s,[[50,132],[60,134],[82,126],[104,118],[122,108],[140,104]],5,1.2,2),on(s,[[122,109],[130,94]],n,.6,1),on(s,[[116,22],[110,50],[106,72],[100,96],[96,114]],e,2.8,4),on(s,[[96,26],[92,52],[86,74],[80,98],[74,120]],n,2.2,4),on(s,[[134,26],[128,56],[124,78],[118,100]],n,2.2,4),on(s,[[86,48],[64,50],[44,58],[26,72]],n,2.2,3),on(s,[[82,78],[62,80],[44,88],[22,96]],n,2.2,3),on(s,[[66,104],[50,108],[34,118]],n,1.6,2),on(s,[[126,64],[142,60],[158,64],[180,74]],n,2.2,3),on(s,[[150,82],[166,90],[184,100]],n,1.8,2),on(s,[[146,106],[162,116],[178,124]],n,1.6,2),on(s,[[66,146],[88,140],[110,130],[132,120],[152,116]],n,2.2,4),on(s,[[84,160],[100,152],[122,144]],n,1.6,2),on(s,[[150,34],[152,54]],n,1,1),on(s,[[64,32],[72,52]],n,1,1),on(s,[[44,52],[56,70]],n,1,1),on(s,[[166,46],[160,62]],n,1,1),s.fillStyle=t}function WM(s){let t="#5a48c8",e="#7b68ee",n="#b4a6ff",i="#d4caff";ci(s,"M 72 112 C 64 114 58 110 55 106 C 52 100 49 95 45 91 C 40 87 34 88 28 94",5,t),Di(s,"M 87 43 C 86 30 92 16 104 8 C 112 4 120 4 128 5 C 142 6 156 14 162 25 C 166 32 166 48 162 57 C 160 62 158 66 158 70 C 162 74 166 80 169 90 C 173 104 174 128 170 144 C 166 162 156 176 145 182 C 132 190 118 196 105 196 C 98 196 92 194 90 190 L 100 140 L 112 100 L 106 90 C 103 87 102 85 101.6 84 C 99.5 83 97.6 82.5 97.5 81.6 C 98 80.5 98.4 79.6 98.2 79 C 97.4 77.6 96.8 76.6 96 76.2 C 94.4 76 92.6 75.6 91.6 74.8 C 90.2 73.8 90.2 72.4 90.8 71.6 C 92.4 69.6 94.4 67.4 94.8 65.4 C 94.6 63.4 94.4 62.2 94.2 61.4 C 92.6 59.8 91.6 58.4 91.5 57.3 C 89 53 87 48 87 43 Z",e),Di(s,"M 85 99 C 96 100 106 116 113 132 C 115 142 116 152 115 160 C 113 174 106 188 96 194 C 86 192 80 180 80 166 C 80 158 80 150 80 146 C 77 152 73 158 69 162 C 62 162 54 156 48 153 C 42 151 36 148 32 145 C 29 143 27 140 28 137 C 28 134 29 132 31 131.6 C 40 131 50 131 60 131 C 64 128 66 125 67 123.5 C 69 118 71 114 72.6 111 C 74 107 75 105 77 103 C 79 101 82 99 85 99 Z",n),Si(s,"M 88 116 C 85 128 82 138 80 146",3),Si(s,"M 33 133 L 36 137",1.6),Si(s,"M 31 137 L 35 140",1.6),Di(s,"M 75 88 C 78 84 86 79 92 80 C 96 80 98 83 97 86 C 101 94 108 102 116 106 C 122 100 128 94 134 90 C 144 90 152 96 152 104 C 146 118 134 130 120 136 C 112 136 106 132 102 126 C 96 116 90 104 86 95 C 82 96 77 95 75 92 Z",i),Si(s,"M 81 85 C 81 88 82 91 83 93",2),Si(s,"M 87 82 C 87 86 88 89 89 92",2),Si(s,"M 112 90 C 120 88 128 84 134 78",3),Si(s,"M 95.5 63.4 Q 98 62.6 101 59.6",3),s.save(),s.globalCompositeOperation="destination-out",s.lineCap="round",s.lineWidth=3.4,s.beginPath(),s.ellipse(131,54,7,10.5,0,-Math.PI*.6,Math.PI*.62),s.stroke(),s.lineWidth=2.6,s.stroke(Rs("M 128 48 C 132 50 132 56 129 59")),s.restore(),s.fillStyle=e}var hg={gynecology:HM,cardio:VM,neurology:GM,pediatrics:WM},XM={cardio:{edge:.4,jitter:.14},neurology:{edge:.5,jitter:.1},pediatrics:{edge:.5,jitter:.1}};function qM(s,t){if(s.clearRect(0,0,Qt,Qt),s.fillStyle="#7b68ee",s.strokeStyle="#7b68ee",t==="cross"){let e=Qt*.17,n=Qt*.4,i=Qt*.05;s.beginPath(),s.roundRect(Qt/2-e,Qt/2-n,e*2,n*2,i),s.roundRect(Qt/2-n,Qt/2-e,n*2,e*2,i),s.fill()}else if(t==="check")s.lineWidth=Qt*.14,s.lineCap="round",s.lineJoin="round",s.beginPath(),s.moveTo(Qt*.18,Qt*.52),s.lineTo(Qt*.41,Qt*.74),s.lineTo(Qt*.82,Qt*.28),s.stroke();else if(hg[t])hg[t](s);else if(t==="sphere"||!lg[t]){let e=s.createRadialGradient(Qt*.42,Qt*.4,Qt*.05,Qt/2,Qt/2,Qt*.42);e.addColorStop(0,"#fff"),e.addColorStop(1,"#5a45d6"),s.fillStyle=e,s.beginPath(),s.arc(Qt/2,Qt/2,Qt*.42,0,Math.PI*2),s.fill()}else s.font=`${Math.round(Qt*.8)}px ${zM}`,s.textAlign="center",s.textBaseline="middle",s.fillText(lg[t],Qt/2,Qt*.54)}function dg(s,t,e){let n=document.createElement("canvas");n.width=n.height=Qt;let i=n.getContext("2d",{willReadFrequently:!0});qM(i,s);let{data:r}=i.getImageData(0,0,Qt,Qt),o=(v,b)=>v<0||b<0||v>=Qt||b>=Qt?0:r[(b*Qt+v)*4+3],a=[],l=[],c=Qt,h=0,u=Qt,d=0;for(let v=0;v<Qt;v++)for(let b=0;b<Qt;b++){if(o(b,v)<150)continue;let A=(v*Qt+b)*4,T=(.299*r[A]+.587*r[A+1]+.114*r[A+2])/255;(o(b-2,v)<150||o(b+2,v)<150||o(b,v-2)<150||o(b,v+2)<150?l:a).push(b,v,T),b<c&&(c=b),b>h&&(h=b),v<u&&(u=v),v>d&&(d=v)}if((a.length+l.length)/3<150)return s==="sphere"?new Float32Array(t*3):dg("sphere",t,e);let f=(c+h)/2,_=(u+d)/2,g=cg/Math.max(h-c,d-u,1),{edge:m=.32,jitter:p=.5}=XM[s]||{},y=new Float32Array(t*3);for(let v=0;v<t;v++){let b=l.length&&(e()<m||!a.length)?l:a,A=Math.floor(e()*(b.length/3))*3,T=b[A]+e()-.5,S=b[A+1]+e()-.5,O=(T-f)*g,x=-(S-_)*g,M=1-Math.min(1,Math.hypot(O,x)/(cg*.55));y[v*3]=O,y[v*3+1]=x,y[v*3+2]=(b[A+2]-.5)*1.1+M*.9+(e()-.5)*p}return y}var $M=`
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`,YM=`
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute float aRand;
  attribute float aSize;
  uniform float uMix;
  uniform float uTime;
  uniform float uSize;
  uniform float uPR;
  uniform float uSwirl;
  uniform float uMotion;
  uniform vec3 uMouse;
  uniform float uMouseOn;
  varying vec3 vColor;
  varying float vAlpha;
  ${$M}
  void main() {
    float m = clamp((uMix - aRand * 0.3) / 0.7, 0.0, 1.0);
    m = m * m * (3.0 - 2.0 * m);
    vec3 p = mix(aFrom, aTo, m);
    float burst = sin(3.14159265 * m);
    vec3 q = p * 0.35 + vec3(0.0, 0.0, uTime * 0.15);
    vec3 flow = vec3(snoise(q), snoise(q + 17.1), snoise(q + 41.7));
    p += flow * burst * uSwirl * (0.6 + aRand);
    p += uMotion * 0.05 * vec3(snoise(p * 0.8 + uTime * 0.4), snoise(p * 0.8 + 9.0 + uTime * 0.4), 0.0);

    vec4 world = modelMatrix * vec4(p, 1.0);
    vec2 d = world.xy - uMouse.xy;
    float dist = length(d);
    world.xy += (d / max(dist, 0.001)) * uMouseOn * smoothstep(1.9, 0.0, dist) * 1.1;

    vec4 mv = viewMatrix * world;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * aSize * uPR * (14.0 / -mv.z) * (1.0 + burst * 0.35);

    float t = clamp(p.x / 7.4 + 0.5 + (aRand - 0.5) * 0.25, 0.0, 1.0);
    vec3 violet = vec3(0.482, 0.408, 0.933);
    vec3 pink = vec3(0.831, 0.435, 0.816);
    vec3 blue = vec3(0.357, 0.616, 1.0);
    vColor = t < 0.5 ? mix(violet, pink, t * 2.0) : mix(pink, blue, t * 2.0 - 1.0);
    vColor = mix(vColor, vec3(0.35, 0.27, 0.84), step(0.93, aRand) * 0.6);
    vAlpha = (0.55 + 0.45 * aRand) * (1.0 - burst * 0.25);
  }
`,ZM=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.12, d) * vAlpha);
  }
`;function ju(s,{initial:t="cross",count:e}={}){let n={morphTo(){},scrub(){},preload(){},dispose(){},get key(){return t}},i;try{i=new fr({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"})}catch(nt){return console.warn("[morph] WebGL unavailable",nt),n}i.setClearColor(0,0);let r=matchMedia("(prefers-reduced-motion: reduce)"),o=matchMedia("(max-width: 900px)").matches,a=e||(o?4200:8e3),l=7,c=()=>(l=l*16807%2147483647,(l-1)/2147483646),h=new Map,u=nt=>(h.has(nt)||h.set(nt,dg(nt,a,c)),h.get(nt)),d=new da,f=new sn(35,1,.1,100);f.position.set(0,0,17);let _=new yi;_.position.y=.35,d.add(_);let g=u(t),m=new Jn,p=new Ke(g.slice(),3),y=new Ke(g.slice(),3),v=new Float32Array(a),b=new Float32Array(a);for(let nt=0;nt<a;nt++)v[nt]=c(),b[nt]=c()<.05?2.2:.7+c()*.8;m.setAttribute("position",new Ke(g.slice(),3)),m.setAttribute("aFrom",p),m.setAttribute("aTo",y),m.setAttribute("aRand",new Ke(v,1)),m.setAttribute("aSize",new Ke(b,1));let A={uMix:{value:1},uTime:{value:0},uSize:{value:o?2.4:2.1},uPR:{value:1},uSwirl:{value:1.7},uMotion:{value:1},uMouse:{value:new W(99,99,0)},uMouseOn:{value:0}},T=new zn({uniforms:A,vertexShader:YM,fragmentShader:ZM,transparent:!0,depthWrite:!1}),S=new fa(m,T);S.frustumCulled=!1,_.add(S);let O=t,x=-1,M=null;function k(){let nt=p.array,st=y.array,gt=new Float32Array(a*3);for(let pt=0;pt<a;pt++){let St=Math.min(1,Math.max(0,(A.uMix.value-v[pt]*.3)/.7));St=St*St*(3-2*St);for(let Tt=0;Tt<3;Tt++)gt[pt*3+Tt]=nt[pt*3+Tt]+(st[pt*3+Tt]-nt[pt*3+Tt])*St}return gt}function L(nt,st=1.8){if(!(nt===O&&x===-1)){if(M==null||M.kill(),p.array.set(k()),y.array.set(u(nt)),p.needsUpdate=y.needsUpdate=!0,x=-1,O=nt,A.uMix.value=0,r.matches){A.uMix.value=1;return}M=se.to(A.uMix,{value:1,duration:st,ease:"power2.inOut"})}}function N(nt,st){let gt=st.length-1,pt=Math.min(Math.max(nt,0),gt),St=Math.min(Math.floor(pt),gt-1);St!==x&&(M==null||M.kill(),p.array.set(u(st[St])),y.array.set(u(st[St+1])),p.needsUpdate=y.needsUpdate=!0,x=St),A.uMix.value=pt-St,O=st[Math.round(pt)]}function P(nt){let st=nt.filter(pt=>!h.has(pt)),gt=()=>{let pt=st.shift();pt&&(u(pt),(window.requestIdleCallback||setTimeout)(gt))};(window.requestIdleCallback||setTimeout)(gt)}let I={x:0,y:0},F=new W,D=nt=>{let st=s.getBoundingClientRect(),gt=(nt.clientX-st.left)/st.width*2-1,pt=-((nt.clientY-st.top)/st.height)*2+1,St=Math.abs(gt)<=1.1&&Math.abs(pt)<=1.1;I.x=Math.max(-1,Math.min(1,gt)),I.y=Math.max(-1,Math.min(1,pt)),F.set(gt,pt,.5).unproject(f).sub(f.position).normalize();let Tt=-f.position.z/F.z;A.uMouse.value.copy(f.position).addScaledVector(F,Tt),se.to(A.uMouseOn,{value:St&&!r.matches?1:0,duration:.6,overwrite:!0})};window.addEventListener("pointermove",D,{passive:!0});function z(){let nt=s.clientWidth||1,st=s.clientHeight||1,gt=Math.min(window.devicePixelRatio||1,o?1.5:2);i.setPixelRatio(gt),i.setSize(nt,st,!1),A.uPR.value=gt,f.aspect=nt/st,f.position.z=17*Math.max(1,1/f.aspect),f.updateProjectionMatrix()}let q=new ResizeObserver(z);q.observe(s),z();let R=!0,j=0,lt=0,J=performance.now(),Q=new IntersectionObserver(([nt])=>{R=nt.isIntersecting});Q.observe(s);let at=nt=>{j=requestAnimationFrame(at);let st=Math.min((nt-J)/1e3,.05);if(J=nt,!R||document.hidden)return;let gt=r.matches;gt||(lt+=st),A.uTime.value=lt,A.uMotion.value=gt?0:1,A.uSwirl.value=gt?0:1.7,_.rotation.y+=((gt?0:Math.sin(lt*.35)*.4+I.x*.35)-_.rotation.y)*.05,_.rotation.x+=((gt?0:-I.y*.2)-_.rotation.x)*.05,i.render(d,f)};return j=requestAnimationFrame(at),{morphTo:L,scrub:N,preload:P,get key(){return O},dispose(){cancelAnimationFrame(j),q.disconnect(),Q.disconnect(),window.removeEventListener("pointermove",D),m.dispose(),T.dispose(),i.dispose()}}}se.registerPlugin(Zt);var ed=document.body.dataset.page||"home",fg=matchMedia("(prefers-reduced-motion: reduce)").matches,nd=matchMedia("(hover: hover) and (pointer: fine)").matches,In=!fg,va=Xi.map(s=>s.id),Hn=s=>`<svg class="i" aria-hidden="true"><use href="#i-${s}"/></svg>`,JM=`
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <linearGradient id="g-swoosh" gradientUnits="userSpaceOnUse" x1="6" y1="0" x2="62" y2="0"><stop offset="0" stop-color="#5a45d6"/><stop offset=".55" stop-color="#d46fd0"/><stop offset="1" stop-color="#5b9dff"/></linearGradient>
    <linearGradient id="g-swoosh-light" gradientUnits="userSpaceOnUse" x1="6" y1="0" x2="62" y2="0"><stop offset="0" stop-color="#a193f7"/><stop offset=".55" stop-color="#e58ee0"/><stop offset="1" stop-color="#7fb6ff"/></linearGradient>
    <linearGradient id="g-dna" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8f7ef3"/><stop offset=".55" stop-color="#e27ad8"/><stop offset="1" stop-color="#6aa6ff"/></linearGradient>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
    <symbol id="i-arrow-ur" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></symbol>
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><path d="M6.5 3.5h3l1.6 4.4-2 1.3a11 11 0 0 0 5.7 5.7l1.3-2 4.4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/></symbol>
    <symbol id="i-whatsapp" viewBox="0 0 24 24"><path d="M20 11.6a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.2-4.2A8.2 8.2 0 1 1 20 11.6z"/><path d="M9 8.3c.2 3 3.4 6.3 6.6 6.6l1-1.4-1.9-1-.9.7a5 5 0 0 1-2.9-2.9l.7-.9-1-1.9z"/></symbol>
    <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
    <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/></symbol>
    <symbol id="i-video" viewBox="0 0 24 24"><rect x="3" y="6.5" width="12.5" height="11" rx="2.5"/><path d="m15.5 10.5 5.5-3v9l-5.5-3"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 0 1 13 0c0 5.2-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></symbol>
    <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></symbol>
    <symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 3 5 13.5h6L10.5 21 19 10h-6z"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
    <symbol id="i-pulse" viewBox="0 0 24 24"><path d="M2 12h4.5l2-5 4 10 2.2-5H22"/></symbol>
  </defs>
</svg>`,id=(s="")=>`<svg class="logo ${s}" viewBox="0 0 64 46" aria-hidden="true">
  <g class="logo__f1"><circle cx="11.5" cy="6.5" r="2.7"/><path d="M2.5 9.5Q9 19.5 20.5 6.5"/><path class="logo__leg" d="M13.2 15.2Q16.4 21.5 17.6 28.5"/></g>
  <path class="logo__swoosh" d="M10.6 15.4Q6.2 25 9.6 34.5Q15.5 44.5 32 41Q47 37.5 62 27"/>
  <g class="logo__f2"><circle cx="25" cy="11" r="2.2"/><path d="M18.8 14Q24.6 21.5 31.6 12.6"/><path class="logo__leg" d="M24.2 18.6Q22.2 24 21.6 29.5M26.4 18.6Q28.6 23.6 29.2 29"/></g>
  <g class="logo__f3"><circle cx="38" cy="7" r="2.5"/><path d="M30.5 10.6Q37 19.5 46.5 6.5"/><path class="logo__leg" d="M37 16.6Q35 23 34.2 30M39.4 16.6Q42.2 22.8 43.2 30"/></g>
</svg>`,Qu=(s="")=>`<a class="brand ${s}" href="index.html" aria-label="Wellcare Hospital &amp; Research Institute \u2014 home">${id("brand__mark")}<span class="brand__txt"><span class="brand__word">Well<b>care</b></span><span class="brand__sub">Hospital &amp; Research Institute</span></span></a>`,KM={cross:"Emergency & general care",hospital:"Multispecialty hospital",ambulance:"Ambulance \xB7 24/7",check:"Request ready",...Object.fromEntries(Xi.map(s=>[s.id,s.full]))};function jM(){document.body.insertAdjacentHTML("afterbegin",JM);let s=[["departments","departments.html","Departments"],["doctors","doctors.html","Doctors"],["hospital","hospital.html","Hospital"]],t=ae("[data-site-header]");t&&(t.outerHTML=`
      <header class="hdr" data-hdr>
        ${Qu()}
        <nav class="hdr__nav" aria-label="Primary">
          ${s.map(([n,i,r])=>`<a href="${i}" ${ed===n?'aria-current="page"':""}>${r}</a>`).join("")}
        </nav>
        <div class="hdr__actions">
          <a class="sos" href="${ce.emergency.href}" aria-label="Emergency, open 24/7: call ${ce.emergency.label}">
            <span class="dot dot--alert"></span>${Hn("phone").replace('class="i"','class="i sos__icon"')}<span class="sos__label">Emergency 24/7</span><span class="sos__num">${ce.emergency.short}</span>
          </a>
          <button class="btn btn--primary btn--sm hdr__book" type="button" data-book>Book<span class="hide-sm">&nbsp;appointment</span></button>
          <button class="burger" type="button" data-menu-open aria-expanded="false" aria-controls="menu">
            <span class="burger__label">Menu</span><span class="burger__lines" aria-hidden="true"><i></i><i></i></span>
          </button>
        </div>
      </header>
      ${QM()}`);let e=ae("[data-site-footer]");e&&(e.outerHTML=`
      <footer class="ftr">
        <div class="ftr__top">
          <div class="ftr__cta">
            ${Qu("brand--light")}
            <p class="hud">Compassionate \xB7 Comprehensive \xB7 Caring</p>
            <h2>Feeling unwell?<br>Let\u2019s find the right care.</h2>
            <button class="btn btn--light" type="button" data-book>Book an appointment ${Hn("arrow")}</button>
          </div>
          <div class="ftr__cols">
            <div><p class="ftr__label">Visit</p><address>${ce.address.join("<br>")}</address><a href="${ce.maps}" target="_blank" rel="noopener">Get directions ${Hn("arrow-ur")}</a></div>
            <div><p class="ftr__label">Call</p>
              <a href="${ce.emergency.href}"><span>Emergency</span> ${ce.emergency.label}</a>
              <a href="${ce.alternate.href}"><span>Desk</span> ${ce.alternate.label}</a>
              <a href="${ce.whatsapp.href}" target="_blank" rel="noopener"><span>WhatsApp</span> ${ce.whatsapp.label}</a>
              <a href="mailto:${ce.email}">${ce.email}</a>
            </div>
            <div><p class="ftr__label">Explore</p><a href="departments.html">Departments</a><a href="doctors.html">Doctors</a><a href="hospital.html">Hospital</a><a href="appointment.html">Book appointment</a></div>
          </div>
        </div>
        <div class="ftr__word" aria-hidden="true">Well<span>care</span></div>
        <div class="ftr__bottom">
          <span>\xA9 2026 Wellcare Hospital &amp; Research Institute, Trichy</span>
          <span>Insurance accepted: ${ce.insurers.join(" \xB7 ")}</span>
        </div>
      </footer>`)}function QM(){let s=[["index.html","Home"],["departments.html","Departments"],["doctors.html","Doctors"],["hospital.html","Hospital"],["appointment.html","Book a visit"]];return`
    <div class="menu" id="menu" role="dialog" aria-modal="true" aria-label="Site menu" hidden data-lenis-prevent>
      <div class="menu__top">${Qu()}<button class="menu__close" type="button" data-menu-close>Close ${Hn("close")}</button></div>
      <div class="menu__grid">
        <nav class="menu__nav" aria-label="Pages">
          ${s.map(([t,e],n)=>`<a class="menu__link" href="${t}"><span class="menu__idx">0${n+1}</span><span class="menu__txt">${e}</span></a>`).join("")}
        </nav>
        <div class="menu__depts">
          <p class="hud">Departments &amp; doctors</p>
          ${Xi.map(t=>{let e=Qs(t.id);return`<a class="mdept" href="departments.html#${t.id}">
              <span class="mdept__faces">${e.map(n=>tr(n,"mdept__face")).join("")}</span>
              <span class="mdept__txt"><strong>${t.full}</strong><small>${e.map(n=>n.name).join(" \xB7 ")}</small></span>
              ${Hn("arrow")}
            </a>`}).join("")}
          <p class="menu__more">Also at Wellcare: ${lp.join(" \xB7 ")}</p>
        </div>
        <aside class="menu__desk">
          <p class="hud"><span class="dot dot--alert"></span> Care desk \xB7 open 24/7</p>
          <a class="desk__sos" href="${ce.emergency.href}"><small>Emergency &amp; ambulance</small><strong>${ce.emergency.label}</strong></a>
          <a class="desk__row" href="${ce.whatsapp.href}" target="_blank" rel="noopener">${Hn("whatsapp")}<span><small>WhatsApp</small>${ce.whatsapp.label}</span></a>
          <a class="desk__row" href="${ce.alternate.href}">${Hn("phone")}<span><small>Appointments desk</small>${ce.alternate.label}</span></a>
          <a class="desk__row" href="${ce.maps}" target="_blank" rel="noopener">${Hn("pin")}<span><small>Visit</small>${ce.address.join(", ")}</span></a>
          <button class="btn btn--light btn--block" type="button" data-book>Book appointment ${Hn("arrow")}</button>
        </aside>
      </div>
    </div>`}var je=null;function tS(){In&&(je=new il({lerp:.1,smoothWheel:!0}),je.on("scroll",Zt.update),se.ticker.add(s=>je.raf(s*1e3)),se.ticker.lagSmoothing(0),window.lenis=je)}var _r=s=>{document.documentElement.classList.toggle("is-locked",s),s?je==null||je.stop():je==null||je.start()};function eS(){document.addEventListener("click",s=>{let t=s.target.closest('a[href^="#"]');if(!t)return;let e=document.querySelector(t.getAttribute("href"));e&&(s.preventDefault(),je?je.scrollTo(e,{offset:-96}):e.scrollIntoView({behavior:fg?"auto":"smooth"}),history.replaceState(null,"",t.getAttribute("href")))})}var td=!1;function nS(){if(!In||ed!=="home"||td)return 0;let s=!1;try{s=sessionStorage.getItem("wc-intro")==="1",sessionStorage.setItem("wc-intro","1")}catch{}if(s)return 0;let t=document.createElement("div");t.className="intro",t.setAttribute("aria-hidden","true"),t.innerHTML=`
    <div class="intro__logo">${id("intro__mark")}<div class="intro__word"><span>Well</span><span class="grad">care</span></div></div>
    <p class="intro__sub">Hospital &amp; Research Institute \xB7 Trichy</p>
    <div class="intro__count"><span>0</span>%</div>
    <div class="intro__bar"><i></i></div>`,document.body.append(t),_r(!0);let e={v:0},n=ae(".intro__count span",t),i=Oe(".intro__word span",t),r=Oe(".intro__mark path",t);return r.forEach(o=>{let a=o.getTotalLength();se.set(o,{strokeDasharray:a,strokeDashoffset:a})}),se.timeline({onComplete:()=>{t.remove(),_r(!1)}}).to(r,{strokeDashoffset:0,duration:1.1,stagger:.07,ease:"power2.inOut"},0).from(Oe(".intro__mark circle",t),{scale:0,transformOrigin:"50% 50%",duration:.6,stagger:.1,ease:"back.out(3)"},.45).from(i,{yPercent:140,duration:1,stagger:.08,ease:"expo.out"},.2).from(ae(".intro__sub",t),{opacity:0,y:12,duration:.6},.45).to(e,{v:100,duration:1.5,ease:"power2.inOut",onUpdate:()=>{n.textContent=Math.round(e.v)}},0).to(ae(".intro__bar i",t),{scaleX:1,duration:1.5,ease:"power2.inOut"},0).to(i,{yPercent:-140,duration:.6,stagger:.05,ease:"expo.in"},1.7).to(Oe(".intro__sub, .intro__count, .intro__bar, .intro__mark",t),{opacity:0,duration:.3},1.7).to(t,{clipPath:"inset(0% 0% 100% 0%)",duration:1,ease:"expo.inOut"},2.05),2.15}function iS(){let s=document.createElement("div");if(s.className="curtain",s.setAttribute("aria-hidden","true"),s.innerHTML=`<div class="curtain__panel"></div><div class="curtain__mark">${id("logo--light")}<span class="curtain__word">Well<b>care</b></span></div>`,document.body.append(s),!!In){try{td=sessionStorage.getItem("wc-curtain")==="1",sessionStorage.removeItem("wc-curtain")}catch{}td&&(s.classList.add("is-covering"),requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.replace("is-covering","is-leaving"))),setTimeout(()=>s.classList.remove("is-leaving"),900)),window.addEventListener("pageshow",t=>{t.persisted&&(s.className="curtain")}),document.addEventListener("click",t=>{let e=t.target.closest("a[href]");if(!e||t.defaultPrevented||t.metaKey||t.ctrlKey||t.shiftKey||e.target==="_blank")return;let n=new URL(e.href,location.href),i=n.pathname===location.pathname;if(!(!/^(https?|file):$/.test(n.protocol)||n.origin!==location.origin||!/\.html$|\/$/.test(n.pathname)||i&&n.hash)){t.preventDefault();try{sessionStorage.setItem("wc-curtain","1")}catch{}s.classList.add("is-entering"),setTimeout(()=>{location.href=e.href},520)}})}}function sS(){let s=ae("[data-hdr]");if(!s)return;let t=()=>s.classList.toggle("is-scrolled",window.scrollY>24);t(),window.addEventListener("scroll",t,{passive:!0})}function rS(){let s=ae("#menu"),t=ae("[data-menu-open]");if(!s||!t)return;let e=ae("[data-menu-close]",s),n=null,i=r=>{var o;r?(n=document.activeElement,s.hidden=!1,_r(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add("is-open"))),e.focus({preventScroll:!0})):(s.classList.remove("is-open"),_r(!1),setTimeout(()=>{s.classList.contains("is-open")||(s.hidden=!0)},700),(o=n==null?void 0:n.focus)==null||o.call(n,{preventScroll:!0})),t.setAttribute("aria-expanded",String(r))};t.addEventListener("click",()=>i(!0)),e.addEventListener("click",()=>i(!1)),s.addEventListener("click",r=>{let o=r.target.closest('a[href*="#"]');o&&new URL(o.href).pathname===location.pathname&&i(!1)}),document.addEventListener("wellcare:book",()=>{s.classList.contains("is-open")&&i(!1)}),s.addEventListener("keydown",r=>{if(r.key==="Escape"&&i(!1),r.key!=="Tab")return;let o=Oe("a[href], button",s);r.shiftKey&&document.activeElement===o[0]?(r.preventDefault(),o[o.length-1].focus()):!r.shiftKey&&document.activeElement===o[o.length-1]&&(r.preventDefault(),o[0].focus())})}function aS(s){if(!In)return;Oe("[data-split]").forEach(n=>{let i=ap(n),r=n.closest(".hero, .phero, .apt__intro");se.set(i,{yPercent:150});let o=()=>se.to(i,{yPercent:0,duration:1.2,ease:"expo.out",stagger:.05,delay:r?s+.2:0});r?o():Zt.create({trigger:n,start:"top 88%",once:!0,onEnter:o})});let t=Oe("[data-reveal]");t.length&&se.set(t,{y:40,opacity:0}),Zt.batch(t,{start:"top 90%",once:!0,onEnter:n=>se.to(n,{y:0,opacity:1,duration:1,ease:"power3.out",stagger:.08,clearProps:"transform,opacity"})}),Oe("[data-scramble]").forEach(n=>{n.closest(".hero, .phero, .apt__intro")?se.delayedCall(s+.1,()=>sl(n,{duration:1.1})):Zt.create({trigger:n,start:"top 92%",once:!0,onEnter:()=>sl(n,{duration:1})})});let e=Oe(".hero__lead, .finder, .chips, .hero__cards, .phero__side, .apt__intro > p, .morph");e.length&&se.from(e,{y:30,opacity:0,duration:1.1,ease:"power3.out",stagger:.08,delay:s+.45,clearProps:"transform,opacity"}),nd&&Oe(".btn--magnetic, .hdr__book").forEach(n=>op(n,.25))}function oS(s){let t=ae("#dna");if(!t)return;let e={x:0,y:0};window.addEventListener("pointermove",h=>{e.x=h.clientX/window.innerWidth*2-1,e.y=-(h.clientY/window.innerHeight*2-1)},{passive:!0});let n=og(t,e);In?se.timeline({delay:s+.1}).to(n.uniforms.uDraw,{value:1,duration:2.2,ease:"power2.inOut"}).to(n.uniforms.uMelt,{value:1,duration:2.8,ease:"power1.inOut"},1.1):(n.uniforms.uDraw.value=1,n.uniforms.uMelt.value=1);let i=ae(".hero__tags"),r={appear:In?0:1,scroll:0},o=i&&window.innerWidth>900?Xi.map((h,u)=>{let d=document.createElement("button");return d.type="button",d.className="dtag",d.dataset.book="",d.dataset.dept=h.id,d.setAttribute("aria-label",`Book ${h.full}`),d.innerHTML=`<i class="dtag__dot"></i><i class="dtag__line"></i><span class="dtag__txt"><small>${String(u+1).padStart(2,"0")} \xB7 ${h.code}</small>${h.name}<em>Book ${Hn("arrow")}</em></span>`,i.append(d),{el:d,y:4.8-u*1.2,strand:u%2}}):[];o.length&&In&&se.to(r,{appear:1,duration:1.4,delay:s+2.8,ease:"power2.out"}),Zt.create({trigger:".hero",start:"top top",end:"bottom top",onUpdate:h=>{n.setScroll(h.progress*.8),r.scroll=h.progress}});let a={},l=performance.now(),c=h=>{n.tick(h/1e3,Math.min((h-l)/1e3,.05)),l=h;let u=r.appear*Math.max(0,1-r.scroll*2.6);for(let d of o){let f=u>.01?n.anchor(d.y,d.strand,a):null;if(!f){d.el.style.opacity=0,d.el.style.visibility="hidden";continue}let _=Math.min(1,Math.max(0,(f.facing+.15)/.6));d.el.style.visibility="visible",d.el.style.transform=`translate3d(${f.x.toFixed(1)}px, ${f.y.toFixed(1)}px, 0)`,d.el.style.opacity=(u*(.08+.92*_)).toFixed(3),d.el.classList.toggle("is-back",_<.5)}requestAnimationFrame(c)};requestAnimationFrame(c)}function lS(){let s=ae("[data-finder]");if(!s)return;let t=ae("input",s),e=ae("[data-finder-hint]",s),n=ae("[data-finder-submit]",s),i=()=>{let r=t.value.trim(),o=rl(r);if(n.dataset.query=r,r.length<3){e.innerHTML='<span class="dot dot--ok"></span> Type a symptom \u2014 we\u2019ll match the department.';return}let a=o?o.dept:fi("op");e.innerHTML=`<span class="dot dot--ok"></span> ${o?"Sounds like":"Start with"} <strong>${a.full}</strong> \xB7 ${Qs(a.id).map(l=>l.name).join(", ")}`};t.addEventListener("input",i),s.addEventListener("submit",r=>{r.preventDefault(),n.click()}),i()}function cS(){let s=ae(".stage");if(!s||!In)return;let t={trigger:s,start:"top 92%",end:"top 8%",scrub:.6};se.fromTo(ae(".stage__frame",s),{clipPath:"inset(0% 8% 0% 8% round 36px)"},{clipPath:"inset(0% 0% 0% 0% round 0px)",ease:"none",scrollTrigger:t}),se.fromTo(ae(".stage__img",s),{scale:1.22},{scale:1,ease:"none",scrollTrigger:{...t,end:"bottom top"}}),se.from(Oe(".stage__chip",s),{y:30,opacity:0,stagger:.12,duration:.8,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 40%",once:!0}})}function hS(){let s=ae("[data-atlas]");if(!s)return;let t=ju(ae(".atlas__gl",s),{initial:va[0]});t.preload(va);let e=Oe(".atlas__slide",s),n=Oe("[data-atlas-go]",s),i=ae("[data-atlas-count]",s),r=ae(".atlas__bar i",s),o=-1,a=h=>{h!==o&&(o=h,e.forEach((u,d)=>{u.classList.toggle("is-active",d===h),u.inert=d!==h}),n.forEach((u,d)=>u.classList.toggle("is-active",d===h)),i.textContent=String(h+1).padStart(2,"0"))};if(a(0),!In){s.classList.add("atlas--static"),e.forEach(h=>{h.inert=!1}),n.forEach((h,u)=>h.addEventListener("click",()=>{t.morphTo(va[u]),a(u),e.forEach(d=>{d.inert=!1})}));return}let l=va.length-1,c=Zt.create({trigger:s,start:"top top",end:()=>`+=${window.innerHeight*l*.85}`,pin:!0,anticipatePin:1,onUpdate:h=>{let u=h.progress*l,d=Math.min(Math.floor(u),l-1),f=Math.min(1,Math.max(0,(u-d-.3)/.4));t.scrub(d+f*f*(3-2*f),va),a(Math.round(u)),r.style.transform=`scaleX(${h.progress})`}});n.forEach((h,u)=>h.addEventListener("click",()=>{let d=c.start+(c.end-c.start)*u/l+2;je?je.scrollTo(d,{duration:1.4}):window.scrollTo({top:d,behavior:"smooth"})}))}function uS(){let s=ae(".how__path path.draw");if(!s||!In)return;let t=s.getTotalLength();se.fromTo(s,{strokeDasharray:t,strokeDashoffset:t},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:".how",start:"top 75%",end:"bottom 60%",scrub:.8}})}function dS(){let s=ae(".ticker__track");if(!s||!In)return;s.style.animation="none";let t=se.to(s,{xPercent:-50,duration:48,ease:"none",repeat:-1}),e=0;je==null||je.on("scroll",({velocity:n})=>{e=Math.max(e,Math.min(Math.abs(n)*.35,9))}),se.ticker.add(()=>{e*=.93,t.timeScale(1+e)})}function fS(){Oe("[data-strip]").forEach(s=>{var l,c;let t=ae(".strip__track",s),e=()=>{var h;return(((h=ae(".dcard",t))==null?void 0:h.offsetWidth)||320)+20};if((l=ae("[data-strip-prev]",s))==null||l.addEventListener("click",()=>t.scrollBy({left:-e(),behavior:"smooth"})),(c=ae("[data-strip-next]",s))==null||c.addEventListener("click",()=>t.scrollBy({left:e(),behavior:"smooth"})),se.matchMedia().add("(min-width: 901px) and (prefers-reduced-motion: no-preference)",()=>{s.classList.add("is-hscroll");let h=()=>Math.max(0,t.scrollWidth-document.documentElement.clientWidth),u=se.to(t,{x:()=>-h(),ease:"none",scrollTrigger:{trigger:s,start:"top top",end:()=>`+=${h()}`,pin:!0,scrub:.7,invalidateOnRefresh:!0,anticipatePin:1}});return Oe(".dcard",t).forEach((d,f)=>se.from(d,{rotateY:-18,z:-120,opacity:.4,transformPerspective:1200,scrollTrigger:{trigger:d,containerAnimation:u,start:"left 95%",end:"left 55%",scrub:!0}})),()=>{s.classList.remove("is-hscroll"),se.set(t,{clearProps:"transform"})}}),!nd)return;let i=!1,r=0,o=0,a=!1;t.addEventListener("pointerdown",h=>{s.classList.contains("is-hscroll")||h.pointerType!=="mouse"||h.target.closest("button, a")||(i=!0,a=!1,r=h.clientX,o=t.scrollLeft,t.classList.add("is-dragging"))}),window.addEventListener("pointermove",h=>{if(!i)return;let u=h.clientX-r;Math.abs(u)>4&&(a=!0),t.scrollLeft=o-u}),window.addEventListener("pointerup",()=>{i=!1,t.classList.remove("is-dragging")}),t.addEventListener("click",h=>{a&&(h.preventDefault(),h.stopPropagation(),a=!1)},!0)})}function pS(){Oe("[data-morph]").forEach(s=>{let t=s.dataset.morph,e=(s.dataset.keys||"").split(",").filter(Boolean),n=e[0]||"cross",i=ju(ae("canvas",s),{initial:n});i.preload([...new Set([...e,...va,"cross","check"])]);let r=ae("[data-morph-label]",s),o=ae("[data-morph-idx]",s),a=(l,c)=>{r&&(delete r.dataset.final,r.textContent=KM[l]||l,r.tagName==="A"&&(r.href=`#${l}`),In&&sl(r,{duration:.8})),o&&t==="cycle"&&c>=0&&(o.textContent=`${String(c+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}`)};if(a(n,0),t==="cycle"&&e.length>1){let l=0,c=0,h=()=>{l=(l+1)%e.length,i.morphTo(e[l]),a(e[l],l)},u=()=>{clearInterval(c),In&&(c=setInterval(h,3400))};s.addEventListener("click",d=>{d.target.closest("a")||(h(),u())}),u()}else t==="filter"?document.addEventListener("wellcare:filter",l=>{let c=l.detail==="all"?"cross":l.detail;i.morphTo(c),a(c,-1)}):t==="booking"&&document.addEventListener("wellcare:booking",l=>{let{step:c,dept:h}=l.detail,u=c===4?"check":h||"cross";u!==i.key&&(i.morphTo(u),a(u,-1))})})}function mS(){let s=ae("[data-rail]");if(!s)return;let t=Oe("a",s),e=Oe(".dept[id]"),n=null,i=()=>{let r=window.innerHeight*.45,o=e.filter(l=>l.getBoundingClientRect().top<r&&l.getBoundingClientRect().bottom>r).pop(),a=o?o.id:null;a!==n&&(n=a,t.forEach(l=>{let c=l.getAttribute("href")===`#${a}`;l.classList.toggle("is-active",c),c&&s.scrollTo({left:l.offsetLeft-s.clientWidth/2+l.offsetWidth/2,behavior:"smooth"})}))};i(),window.addEventListener("scroll",i,{passive:!0})}function gS(){let s=Oe("[data-filter]");if(!s.length)return;let t=Oe("[data-card-dept]"),e=n=>{s.forEach(i=>i.setAttribute("aria-pressed",String(i.dataset.filter===n))),t.forEach(i=>{let r=n==="all"||i.dataset.cardDept===n;i.hidden=!r,r&&In&&se.fromTo(i,{y:24,opacity:0},{y:0,opacity:1,duration:.5,ease:"power3.out"})}),document.dispatchEvent(new CustomEvent("wellcare:filter",{detail:n})),Zt.refresh()};s.forEach(n=>n.addEventListener("click",()=>e(n.dataset.filter)))}function _S(){let s=document.createElement("div");s.className="drawer",s.hidden=!0,s.innerHTML='<div class="drawer__scrim" data-drawer-close></div><article class="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="drawerTitle" data-lenis-prevent tabindex="-1"></article>',document.body.append(s);let t=ae(".drawer__panel",s),e=null,n=a=>{let l=[];for(let c of Ka(10))if(!c.closed)for(let h of Fr(c.iso,a)){let u=h.times.find(d=>!d.taken);if(u&&l.push({day:c,t:u.t}),l.length===3)return l}return l},i=a=>{let l=ps(a);if(!l)return;let c=fi(l.dept);t.innerHTML=`
      <button class="drawer__close" type="button" data-drawer-close aria-label="Close profile">${Hn("close")}</button>
      <div class="drawer__media">${tr(l,"drawer__img")}</div>
      <div class="drawer__body">
        <p class="hud">${c.full} \xB7 <span class="status">${l.status}</span></p>
        <h2 id="drawerTitle">${l.name}</h2>
        <p class="drawer__role">${l.role}</p>
        <p class="drawer__approach">${l.approach}</p>
        <h3>Focus areas</h3>
        <ul class="tags">${l.focus.map(h=>`<li>${h}</li>`).join("")}</ul>
        <h3>Consultation</h3>
        <p class="drawer__modes">${Hn("pin")} In person, Thillai Nagar <span>\xB7</span> ${Hn("video")} Teleconsult on request</p>
        <h3>Next openings</h3>
        <div class="drawer__slots">${n(l.id).map(({day:h,t:u})=>`<button type="button" class="slot" data-book data-doctor="${l.id}" data-date="${h.iso}" data-time="${u}"><small>${al(h.date)}</small>${ms(u)}</button>`).join("")}</div>
        <dl class="drawer__verify"><div><dt>Qualifications</dt><dd>Published after hospital verification</dd></div><div><dt>Experience</dt><dd>Published after hospital verification</dd></div></dl>
        <button class="btn btn--primary btn--block" type="button" data-book data-doctor="${l.id}">Book with ${l.name} ${Hn("arrow")}</button>
      </div>`,e=document.activeElement,s.hidden=!1,_r(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>s.classList.add("is-open"))),t.focus({preventScroll:!0}),t.scrollTop=0},r=(a=!0)=>{var l;s.classList.contains("is-open")&&(s.classList.remove("is-open"),_r(!1),setTimeout(()=>{s.classList.contains("is-open")||(s.hidden=!0)},600),a&&((l=e==null?void 0:e.focus)==null||l.call(e,{preventScroll:!0})))};document.addEventListener("click",a=>{let l=a.target.closest("[data-profile]");if(l){a.preventDefault(),i(l.dataset.profile);return}a.target.closest("[data-drawer-close]")&&r()}),s.addEventListener("click",a=>{a.target.closest("[data-book]")&&r(!1)},!0),s.addEventListener("keydown",a=>{if(a.key==="Escape"&&r(),a.key!=="Tab")return;let l=Oe("button, a[href]",t);a.shiftKey&&document.activeElement===l[0]?(a.preventDefault(),l[l.length-1].focus()):!a.shiftKey&&document.activeElement===l[l.length-1]&&(a.preventDefault(),l[0].focus())});let o=ps(location.hash.slice(1));o&&ed==="doctors"&&setTimeout(()=>i(o.id),400)}function vS(){if(!nd||!In)return;let s=document.createElement("div");s.className="cursor",s.setAttribute("aria-hidden","true"),s.innerHTML='<span class="cursor__ring"><em></em></span>',document.body.append(s);let t=ae(".cursor__ring",s),e=ae("em",s),n=se.quickTo(t,"x",{duration:.45,ease:"power3"}),i=se.quickTo(t,"y",{duration:.45,ease:"power3"});window.addEventListener("pointermove",r=>{n(r.clientX),i(r.clientY),s.classList.add("is-on")},{passive:!0}),document.documentElement.addEventListener("mouseleave",()=>s.classList.remove("is-on")),document.addEventListener("pointerover",r=>{let o=r.target.closest('[data-book], [data-profile], [data-morph="cycle"], a, button, input, textarea, iframe, select'),a="",l="";o?o.matches("[data-book]")?(a="label",l="Book"):o.matches("[data-profile]")?(a="label",l="View"):o.matches('[data-morph="cycle"]')?(a="label",l="Next"):o.matches("input, textarea, select, iframe")?a="hide":a="link":a="",s.dataset.mode=a,e.textContent=l})}se.globalTimeline.pause();jM();tS();iS();var pg=nS();eS();sS();rS();dp({lenis:je,lock:_r});aS(pg);lS();cS();hS();uS();dS();fS();pS();mS();gS();_S();vS();try{oS(pg)}catch(s){console.warn("[wellcare] DNA visual unavailable",s)}requestAnimationFrame(()=>requestAnimationFrame(()=>se.globalTimeline.resume()));window.addEventListener("load",()=>Zt.refresh());})();
