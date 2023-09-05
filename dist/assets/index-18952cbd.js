(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ts(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const te={},Bt=[],De=()=>{},Vc=()=>!1,Wc=/^on[^a-z]/,br=t=>Wc.test(t),Ss=t=>t.startsWith("onUpdate:"),ue=Object.assign,Rs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kc=Object.prototype.hasOwnProperty,z=(t,e)=>Kc.call(t,e),F=Array.isArray,$t=t=>Er(t)==="[object Map]",Ho=t=>Er(t)==="[object Set]",V=t=>typeof t=="function",fe=t=>typeof t=="string",Cs=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",jo=t=>re(t)&&V(t.then)&&V(t.catch),Vo=Object.prototype.toString,Er=t=>Vo.call(t),zc=t=>Er(t).slice(8,-1),Wo=t=>Er(t)==="[object Object]",Ps=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yn=Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qc=/-(\w)/g,We=wr(t=>t.replace(qc,(e,n)=>n?n.toUpperCase():"")),Gc=/\B([A-Z])/g,Zt=wr(t=>t.replace(Gc,"-$1").toLowerCase()),Ir=wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ur=wr(t=>t?`on${Ir(t)}`:""),In=(t,e)=>!Object.is(t,e),Xn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ts=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gi;const ns=()=>gi||(gi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function As(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?Qc(r):As(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(fe(t))return t;if(re(t))return t}}const Jc=/;(?![^(]*\))/g,Yc=/:([^]+)/,Xc=/\/\*[^]*?\*\//g;function Qc(t){const e={};return t.replace(Xc,"").split(Jc).forEach(n=>{if(n){const r=n.split(Yc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Os(t){let e="";if(fe(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Os(t[n]);r&&(e+=r+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",el=Ts(Zc);function Ko(t){return!!t||t===""}const tl=t=>fe(t)?t:t==null?"":F(t)||re(t)&&(t.toString===Vo||!V(t.toString))?JSON.stringify(t,zo,2):String(t),zo=(t,e)=>e&&e.__v_isRef?zo(t,e.value):$t(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!F(e)&&!Wo(e)?String(e):e;let Ae;class qo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Go(t){return new qo(t)}function nl(t,e=Ae){e&&e.active&&e.effects.push(t)}function rl(){return Ae}const ks=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Jo=t=>(t.w&gt)>0,Yo=t=>(t.n&gt)>0,sl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gt},il=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Jo(s)&&!Yo(s)?s.delete(t):e[n++]=s,s.w&=~gt,s.n&=~gt}e.length=n}},ar=new WeakMap;let fn=0,gt=1;const rs=30;let Oe;const Rt=Symbol(""),ss=Symbol("");class Ns{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nl(this,r)}run(){if(!this.active)return this.fn();let e=Oe,n=ut;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Oe,Oe=this,ut=!0,gt=1<<++fn,fn<=rs?sl(this):mi(this),this.fn()}finally{fn<=rs&&il(this),gt=1<<--fn,Oe=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(mi(this),this.onStop&&this.onStop(),this.active=!1)}}function mi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ut=!0;const Xo=[];function en(){Xo.push(ut),ut=!1}function tn(){const t=Xo.pop();ut=t===void 0?!0:t}function Ee(t,e,n){if(ut&&Oe){let r=ar.get(t);r||ar.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ks()),Qo(s)}}function Qo(t,e){let n=!1;fn<=rs?Yo(t)||(t.n|=gt,n=!Jo(t)):n=!t.has(Oe),n&&(t.add(Oe),Oe.deps.push(t))}function Ye(t,e,n,r,s,i){const o=ar.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Ps(n)&&c.push(o.get("length")):(c.push(o.get(Rt)),$t(t)&&c.push(o.get(ss)));break;case"delete":F(t)||(c.push(o.get(Rt)),$t(t)&&c.push(o.get(ss)));break;case"set":$t(t)&&c.push(o.get(Rt));break}if(c.length===1)c[0]&&is(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);is(ks(a))}}function is(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&_i(r);for(const r of n)r.computed||_i(r)}function _i(t,e){(t!==Oe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ol(t,e){var n;return(n=ar.get(t))==null?void 0:n.get(e)}const al=Ts("__proto__,__v_isRef,__isVue"),Zo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cs)),cl=Ds(),ll=Ds(!1,!0),ul=Ds(!0),vi=fl();function fl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){en();const r=q(this)[e].apply(this,n);return tn(),r}}),t}function dl(t){const e=q(this);return Ee(e,"has",t),e.hasOwnProperty(t)}function Ds(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Pl:sa:e?ra:na).get(r))return r;const o=F(r);if(!t){if(o&&z(vi,s))return Reflect.get(vi,s,i);if(s==="hasOwnProperty")return dl}const c=Reflect.get(r,s,i);return(Cs(s)?Zo.has(s):al(s))||(t||Ee(r,"get",s),e)?c:ce(c)?o&&Ps(s)?c:c.value:re(c)?t?ia(c):nn(c):c}}const hl=ea(),pl=ea(!0);function ea(t=!1){return function(n,r,s,i){let o=n[r];if(Kt(o)&&ce(o)&&!ce(s))return!1;if(!t&&(!cr(s)&&!Kt(s)&&(o=q(o),s=q(s)),!F(n)&&ce(o)&&!ce(s)))return o.value=s,!0;const c=F(n)&&Ps(r)?Number(r)<n.length:z(n,r),a=Reflect.set(n,r,s,i);return n===q(i)&&(c?In(s,o)&&Ye(n,"set",r,s):Ye(n,"add",r,s)),a}}function gl(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ye(t,"delete",e,void 0),r}function ml(t,e){const n=Reflect.has(t,e);return(!Cs(e)||!Zo.has(e))&&Ee(t,"has",e),n}function _l(t){return Ee(t,"iterate",F(t)?"length":Rt),Reflect.ownKeys(t)}const ta={get:cl,set:hl,deleteProperty:gl,has:ml,ownKeys:_l},vl={get:ul,set(t,e){return!0},deleteProperty(t,e){return!0}},yl=ue({},ta,{get:ll,set:pl}),Ms=t=>t,Tr=t=>Reflect.getPrototypeOf(t);function Vn(t,e,n=!1,r=!1){t=t.__v_raw;const s=q(t),i=q(e);n||(e!==i&&Ee(s,"get",e),Ee(s,"get",i));const{has:o}=Tr(s),c=r?Ms:n?Us:Tn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Wn(t,e=!1){const n=this.__v_raw,r=q(n),s=q(t);return e||(t!==s&&Ee(r,"has",t),Ee(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Kn(t,e=!1){return t=t.__v_raw,!e&&Ee(q(t),"iterate",Rt),Reflect.get(t,"size",t)}function yi(t){t=q(t);const e=q(this);return Tr(e).has.call(e,t)||(e.add(t),Ye(e,"add",t,t)),this}function bi(t,e){e=q(e);const n=q(this),{has:r,get:s}=Tr(n);let i=r.call(n,t);i||(t=q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?In(e,o)&&Ye(n,"set",t,e):Ye(n,"add",t,e),this}function Ei(t){const e=q(this),{has:n,get:r}=Tr(e);let s=n.call(e,t);s||(t=q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ye(e,"delete",t,void 0),i}function wi(){const t=q(this),e=t.size!==0,n=t.clear();return e&&Ye(t,"clear",void 0,void 0),n}function zn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=q(o),a=e?Ms:t?Us:Tn;return!t&&Ee(c,"iterate",Rt),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function qn(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=$t(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Ms:e?Us:Tn;return!e&&Ee(i,"iterate",a?ss:Rt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function et(t){return function(...e){return t==="delete"?!1:this}}function bl(){const t={get(i){return Vn(this,i)},get size(){return Kn(this)},has:Wn,add:yi,set:bi,delete:Ei,clear:wi,forEach:zn(!1,!1)},e={get(i){return Vn(this,i,!1,!0)},get size(){return Kn(this)},has:Wn,add:yi,set:bi,delete:Ei,clear:wi,forEach:zn(!1,!0)},n={get(i){return Vn(this,i,!0)},get size(){return Kn(this,!0)},has(i){return Wn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:zn(!0,!1)},r={get(i){return Vn(this,i,!0,!0)},get size(){return Kn(this,!0)},has(i){return Wn.call(this,i,!0)},add:et("add"),set:et("set"),delete:et("delete"),clear:et("clear"),forEach:zn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qn(i,!1,!1),n[i]=qn(i,!0,!1),e[i]=qn(i,!1,!0),r[i]=qn(i,!0,!0)}),[t,n,e,r]}const[El,wl,Il,Tl]=bl();function xs(t,e){const n=e?t?Tl:Il:t?wl:El;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const Sl={get:xs(!1,!1)},Rl={get:xs(!1,!0)},Cl={get:xs(!0,!1)},na=new WeakMap,ra=new WeakMap,sa=new WeakMap,Pl=new WeakMap;function Al(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ol(t){return t.__v_skip||!Object.isExtensible(t)?0:Al(zc(t))}function nn(t){return Kt(t)?t:Ls(t,!1,ta,Sl,na)}function kl(t){return Ls(t,!1,yl,Rl,ra)}function ia(t){return Ls(t,!0,vl,Cl,sa)}function Ls(t,e,n,r,s){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ol(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ft(t){return Kt(t)?ft(t.__v_raw):!!(t&&t.__v_isReactive)}function Kt(t){return!!(t&&t.__v_isReadonly)}function cr(t){return!!(t&&t.__v_isShallow)}function oa(t){return ft(t)||Kt(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function zt(t){return or(t,"__v_skip",!0),t}const Tn=t=>re(t)?nn(t):t,Us=t=>re(t)?ia(t):t;function aa(t){ut&&Oe&&(t=q(t),Qo(t.dep||(t.dep=ks())))}function ca(t,e){t=q(t);const n=t.dep;n&&is(n)}function ce(t){return!!(t&&t.__v_isRef===!0)}function Sn(t){return la(t,!1)}function Nl(t){return la(t,!0)}function la(t,e){return ce(t)?t:new Dl(t,e)}class Dl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:Tn(e)}get value(){return aa(this),this._value}set value(e){const n=this.__v_isShallow||cr(e)||Kt(e);e=n?e:q(e),In(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Tn(e),ca(this))}}function gn(t){return ce(t)?t.value:t}const Ml={get:(t,e,n)=>gn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ua(t){return ft(t)?t:new Proxy(t,Ml)}function xl(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=Ul(t,n);return e}class Ll{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ol(q(this._object),this._key)}}function Ul(t,e,n){const r=t[e];return ce(r)?r:new Ll(t,e,n)}class Fl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ns(e,()=>{this._dirty||(this._dirty=!0,ca(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=q(this);return aa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Bl(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=De):(r=t.get,s=t.set),new Fl(r,s,i||!s,n)}function dt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Sr(i,e,n)}return s}function Me(t,e,n,r){if(V(t)){const i=dt(t,e,n,r);return i&&jo(i)&&i.catch(o=>{Sr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Me(t[i],e,n,r));return s}function Sr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){dt(a,null,10,[t,o,c]);return}}$l(t,n,s,r)}function $l(t,e,n,r=!0){console.error(t)}let Rn=!1,os=!1;const pe=[];let Be=0;const Ht=[];let ze=null,wt=0;const fa=Promise.resolve();let Fs=null;function da(t){const e=Fs||fa;return t?e.then(this?t.bind(this):t):e}function Hl(t){let e=Be+1,n=pe.length;for(;e<n;){const r=e+n>>>1;Cn(pe[r])<t?e=r+1:n=r}return e}function Bs(t){(!pe.length||!pe.includes(t,Rn&&t.allowRecurse?Be+1:Be))&&(t.id==null?pe.push(t):pe.splice(Hl(t.id),0,t),ha())}function ha(){!Rn&&!os&&(os=!0,Fs=fa.then(ga))}function jl(t){const e=pe.indexOf(t);e>Be&&pe.splice(e,1)}function Vl(t){F(t)?Ht.push(...t):(!ze||!ze.includes(t,t.allowRecurse?wt+1:wt))&&Ht.push(t),ha()}function Ii(t,e=Rn?Be+1:0){for(;e<pe.length;e++){const n=pe[e];n&&n.pre&&(pe.splice(e,1),e--,n())}}function pa(t){if(Ht.length){const e=[...new Set(Ht)];if(Ht.length=0,ze){ze.push(...e);return}for(ze=e,ze.sort((n,r)=>Cn(n)-Cn(r)),wt=0;wt<ze.length;wt++)ze[wt]();ze=null,wt=0}}const Cn=t=>t.id==null?1/0:t.id,Wl=(t,e)=>{const n=Cn(t)-Cn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ga(t){os=!1,Rn=!0,pe.sort(Wl);const e=De;try{for(Be=0;Be<pe.length;Be++){const n=pe[Be];n&&n.active!==!1&&dt(n,null,14)}}finally{Be=0,pe.length=0,pa(),Rn=!1,Fs=null,(pe.length||Ht.length)&&ga()}}function Kl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||te;p&&(s=n.map(v=>fe(v)?v.trim():v)),h&&(s=n.map(ts))}let c,a=r[c=Ur(e)]||r[c=Ur(We(e))];!a&&i&&(a=r[c=Ur(Zt(e))]),a&&Me(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Me(l,t,6,s)}}function ma(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!V(t)){const a=l=>{const f=ma(l,e,!0);f&&(c=!0,ue(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(re(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):ue(o,i),re(t)&&r.set(t,o),o)}function Rr(t,e){return!t||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Zt(e))||z(t,e))}let Ie=null,_a=null;function lr(t){const e=Ie;return Ie=t,_a=t&&t.type.__scopeId||null,e}function zl(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xi(-1);const i=lr(e);let o;try{o=t(...s)}finally{lr(i),r._d&&xi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Fr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:f,renderCache:h,data:p,setupState:v,ctx:R,inheritAttrs:A}=t;let L,x;const M=lr(t);try{if(n.shapeFlag&4){const O=s||r;L=Fe(f.call(O,O,h,i,v,p,R)),x=a}else{const O=e;L=Fe(O.length>1?O(i,{attrs:a,slots:c,emit:l}):O(i,null)),x=e.props?a:ql(a)}}catch(O){vn.length=0,Sr(O,t,1),L=Te(Pn)}let B=L;if(x&&A!==!1){const O=Object.keys(x),{shapeFlag:H}=B;O.length&&H&7&&(o&&O.some(Ss)&&(x=Gl(x,o)),B=qt(B,x))}return n.dirs&&(B=qt(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),L=B,lr(M),L}const ql=t=>{let e;for(const n in t)(n==="class"||n==="style"||br(n))&&((e||(e={}))[n]=t[n]);return e},Gl=(t,e)=>{const n={};for(const r in t)(!Ss(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Jl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ti(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Rr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ti(r,o,l):!0:!!o;return!1}function Ti(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rr(n,i))return!0}return!1}function Yl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xl=t=>t.__isSuspense;function Ql(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Vl(t)}const Gn={};function mn(t,e,n){return va(t,e,n)}function va(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=te){var c;const a=rl()===((c=le)==null?void 0:c.scope)?le:null;let l,f=!1,h=!1;if(ce(t)?(l=()=>t.value,f=cr(t)):ft(t)?(l=()=>t,r=!0):F(t)?(h=!0,f=t.some(O=>ft(O)||cr(O)),l=()=>t.map(O=>{if(ce(O))return O.value;if(ft(O))return St(O);if(V(O))return dt(O,a,2)})):V(t)?e?l=()=>dt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),Me(t,a,3,[v])}:l=De,e&&r){const O=l;l=()=>St(O())}let p,v=O=>{p=M.onStop=()=>{dt(O,a,4)}},R;if(On)if(v=De,e?n&&Me(e,a,3,[l(),h?[]:void 0,v]):l(),s==="sync"){const O=Gu();R=O.__watcherHandles||(O.__watcherHandles=[])}else return De;let A=h?new Array(t.length).fill(Gn):Gn;const L=()=>{if(M.active)if(e){const O=M.run();(r||f||(h?O.some((H,j)=>In(H,A[j])):In(O,A)))&&(p&&p(),Me(e,a,3,[O,A===Gn?void 0:h&&A[0]===Gn?[]:A,v]),A=O)}else M.run()};L.allowRecurse=!!e;let x;s==="sync"?x=L:s==="post"?x=()=>be(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),x=()=>Bs(L));const M=new Ns(l,x);e?n?L():A=M.run():s==="post"?be(M.run.bind(M),a&&a.suspense):M.run();const B=()=>{M.stop(),a&&a.scope&&Rs(a.scope.effects,M)};return R&&R.push(B),B}function Zl(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?ya(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=le;Gt(this);const c=va(s,i.bind(r),n);return o?Gt(o):Ct(),c}function ya(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function St(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ce(t))St(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)St(t[n],e);else if(Ho(t)||$t(t))t.forEach(n=>{St(n,e)});else if(Wo(t))for(const n in t)St(t[n],e);return t}function Si(t,e){const n=Ie;if(n===null)return t;const r=Or(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,c,a,l=te]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&St(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return t}function yt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(en(),Me(a,n,8,[t.el,c,t,e]),tn())}}function $s(t,e){return V(t)?(()=>ue({name:t.name},e,{setup:t}))():t}const Qn=t=>!!t.type.__asyncLoader,ba=t=>t.type.__isKeepAlive;function eu(t,e){Ea(t,"a",e)}function tu(t,e){Ea(t,"da",e)}function Ea(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&nu(r,e,n,s),s=s.parent}}function nu(t,e,n,r){const s=Cr(e,t,r,!0);Hs(()=>{Rs(r[e],s)},n)}function Cr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;en(),Gt(n);const c=Me(e,n,t,o);return Ct(),tn(),c});return r?s.unshift(i):s.push(i),i}}const Qe=t=>(e,n=le)=>(!On||t==="sp")&&Cr(t,(...r)=>e(...r),n),ru=Qe("bm"),su=Qe("m"),iu=Qe("bu"),ou=Qe("u"),au=Qe("bum"),Hs=Qe("um"),cu=Qe("sp"),lu=Qe("rtg"),uu=Qe("rtc");function fu(t,e=le){Cr("ec",t,e)}const wa="components";function du(t,e){return pu(wa,t,!0,e)||t}const hu=Symbol.for("v-ndc");function pu(t,e,n=!0,r=!1){const s=Ie||le;if(s){const i=s.type;if(t===wa){const c=Ku(i,!1);if(c&&(c===e||c===We(e)||c===Ir(We(e))))return i}const o=Ri(s[t]||i[t],e)||Ri(s.appContext[t],e);return!o&&r?i:o}}function Ri(t,e){return t&&(t[e]||t[We(e)]||t[Ir(We(e))])}const as=t=>t?Da(t)?Or(t)||t.proxy:as(t.parent):null,_n=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>as(t.parent),$root:t=>as(t.root),$emit:t=>t.emit,$options:t=>js(t),$forceUpdate:t=>t.f||(t.f=()=>Bs(t.update)),$nextTick:t=>t.n||(t.n=da.bind(t.proxy)),$watch:t=>Zl.bind(t)}),Br=(t,e)=>t!==te&&!t.__isScriptSetup&&z(t,e),gu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Br(r,e))return o[e]=1,r[e];if(s!==te&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==te&&z(n,e))return o[e]=4,n[e];cs&&(o[e]=0)}}const f=_n[e];let h,p;if(f)return e==="$attrs"&&Ee(t,"get",e),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==te&&z(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Br(s,e)?(s[e]=n,!0):r!==te&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==te&&z(t,o)||Br(e,o)||(c=i[0])&&z(c,o)||z(r,o)||z(_n,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ci(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cs=!0;function mu(t){const e=js(t),n=t.proxy,r=t.ctx;cs=!1,e.beforeCreate&&Pi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:v,updated:R,activated:A,deactivated:L,beforeDestroy:x,beforeUnmount:M,destroyed:B,unmounted:O,render:H,renderTracked:j,renderTriggered:se,errorCaptured:de,serverPrefetch:me,expose:he,inheritAttrs:Se,components:ve,directives:Ke,filters:ie}=e;if(l&&_u(l,r,null),o)for(const Z in o){const J=o[Z];V(J)&&(r[Z]=J.bind(n))}if(s){const Z=s.call(n,n);re(Z)&&(t.data=nn(Z))}if(cs=!0,i)for(const Z in i){const J=i[Z],Re=V(J)?J.bind(n,n):V(J.get)?J.get.bind(n,n):De,vt=!V(J)&&V(J.set)?J.set.bind(n):De,Ce=ke({get:Re,set:vt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:ye=>Ce.value=ye})}if(c)for(const Z in c)Ia(c[Z],r,n,Z);if(a){const Z=V(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(J=>{Zn(J,Z[J])})}f&&Pi(f,t,"c");function oe(Z,J){F(J)?J.forEach(Re=>Z(Re.bind(n))):J&&Z(J.bind(n))}if(oe(ru,h),oe(su,p),oe(iu,v),oe(ou,R),oe(eu,A),oe(tu,L),oe(fu,de),oe(uu,j),oe(lu,se),oe(au,M),oe(Hs,O),oe(cu,me),F(he))if(he.length){const Z=t.exposed||(t.exposed={});he.forEach(J=>{Object.defineProperty(Z,J,{get:()=>n[J],set:Re=>n[J]=Re})})}else t.exposed||(t.exposed={});H&&t.render===De&&(t.render=H),Se!=null&&(t.inheritAttrs=Se),ve&&(t.components=ve),Ke&&(t.directives=Ke)}function _u(t,e,n=De){F(t)&&(t=ls(t));for(const r in t){const s=t[r];let i;re(s)?"default"in s?i=He(s.from||r,s.default,!0):i=He(s.from||r):i=He(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Pi(t,e,n){Me(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ia(t,e,n,r){const s=r.includes(".")?ya(n,r):()=>n[r];if(fe(t)){const i=e[t];V(i)&&mn(s,i)}else if(V(t))mn(s,t.bind(n));else if(re(t))if(F(t))t.forEach(i=>Ia(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&mn(s,i,t)}}function js(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>ur(a,l,o,!0)),ur(a,e,o)),re(e)&&i.set(e,a),a}function ur(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ur(t,i,n,!0),s&&s.forEach(o=>ur(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=vu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const vu={data:Ai,props:Oi,emits:Oi,methods:dn,computed:dn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:dn,directives:dn,watch:bu,provide:Ai,inject:yu};function Ai(t,e){return e?t?function(){return ue(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function yu(t,e){return dn(ls(t),ls(e))}function ls(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function dn(t,e){return t?ue(Object.create(null),t,e):e}function Oi(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ue(Object.create(null),Ci(t),Ci(e??{})):e}function bu(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function Ta(){return{app:null,config:{isNativeTag:Vc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Eu=0;function wu(t,e){return function(r,s=null){V(r)||(r=ue({},r)),s!=null&&!re(s)&&(s=null);const i=Ta(),o=new Set;let c=!1;const a=i.app={_uid:Eu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ju,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(a,...f)):V(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const p=Te(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,Or(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){fr=a;try{return l()}finally{fr=null}}};return a}}let fr=null;function Zn(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function He(t,e,n=!1){const r=le||Ie;if(r||fr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:fr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}function Iu(t,e,n,r=!1){const s={},i={};or(i,Ar,1),t.propsDefaults=Object.create(null),Sa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:kl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Tu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=q(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Rr(t.emitsOptions,p))continue;const v=e[p];if(a)if(z(i,p))v!==i[p]&&(i[p]=v,l=!0);else{const R=We(p);s[R]=us(a,c,R,v,t,!1)}else v!==i[p]&&(i[p]=v,l=!0)}}}else{Sa(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!z(e,h)&&((f=Zt(h))===h||!z(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=us(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!z(e,h))&&(delete i[h],l=!0)}l&&Ye(t,"set","$attrs")}function Sa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Yn(a))continue;const l=e[a];let f;s&&z(s,f=We(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Rr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=q(n),l=c||te;for(let f=0;f<i.length;f++){const h=i[f];n[h]=us(s,a,h,l[h],t,!z(l,h))}}return o}function us(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=z(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Gt(s),r=l[n]=a.call(null,e),Ct())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Zt(n))&&(r=!0))}return r}function Ra(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!V(t)){const f=h=>{a=!0;const[p,v]=Ra(h,e,!0);ue(o,p),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return re(t)&&r.set(t,Bt),Bt;if(F(i))for(let f=0;f<i.length;f++){const h=We(i[f]);ki(h)&&(o[h]=te)}else if(i)for(const f in i){const h=We(f);if(ki(h)){const p=i[f],v=o[h]=F(p)||V(p)?{type:p}:ue({},p);if(v){const R=Mi(Boolean,v.type),A=Mi(String,v.type);v[0]=R>-1,v[1]=A<0||R<A,(R>-1||z(v,"default"))&&c.push(h)}}}const l=[o,c];return re(t)&&r.set(t,l),l}function ki(t){return t[0]!=="$"}function Ni(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Di(t,e){return Ni(t)===Ni(e)}function Mi(t,e){return F(e)?e.findIndex(n=>Di(n,t)):V(e)&&Di(e,t)?0:-1}const Ca=t=>t[0]==="_"||t==="$stable",Vs=t=>F(t)?t.map(Fe):[Fe(t)],Su=(t,e,n)=>{if(e._n)return e;const r=zl((...s)=>Vs(e(...s)),n);return r._c=!1,r},Pa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ca(s))continue;const i=t[s];if(V(i))e[s]=Su(s,i,r);else if(i!=null){const o=Vs(i);e[s]=()=>o}}},Aa=(t,e)=>{const n=Vs(e);t.slots.default=()=>n},Ru=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),or(e,"_",n)):Pa(e,t.slots={})}else t.slots={},e&&Aa(t,e);or(t.slots,Ar,1)},Cu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ue(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Pa(e,s)),o=e}else e&&(Aa(t,e),o={default:1});if(i)for(const c in s)!Ca(c)&&!(c in o)&&delete s[c]};function fs(t,e,n,r,s=!1){if(F(t)){t.forEach((p,v)=>fs(p,e&&(F(e)?e[v]:e),n,r,s));return}if(Qn(r)&&!s)return;const i=r.shapeFlag&4?Or(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===te?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(fe(l)?(f[l]=null,z(h,l)&&(h[l]=null)):ce(l)&&(l.value=null)),V(a))dt(a,c,12,[o,f]);else{const p=fe(a),v=ce(a);if(p||v){const R=()=>{if(t.f){const A=p?z(h,a)?h[a]:f[a]:a.value;s?F(A)&&Rs(A,i):F(A)?A.includes(i)||A.push(i):p?(f[a]=[i],z(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else p?(f[a]=o,z(h,a)&&(h[a]=o)):v&&(a.value=o,t.k&&(f[t.k]=o))};o?(R.id=-1,be(R,n)):R()}}}const be=Ql;function Pu(t){return Au(t)}function Au(t,e){const n=ns();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:v=De,insertStaticContent:R}=t,A=(u,d,g,m=null,y=null,w=null,S=!1,E=null,I=!!d.dynamicChildren)=>{if(u===d)return;u&&!ln(u,d)&&(m=T(u),ye(u,y,w,!0),u=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:P}=d;switch(b){case Pr:L(u,d,g,m);break;case Pn:x(u,d,g,m);break;case $r:u==null&&M(d,g,m,S);break;case qe:ve(u,d,g,m,y,w,S,E,I);break;default:P&1?H(u,d,g,m,y,w,S,E,I):P&6?Ke(u,d,g,m,y,w,S,E,I):(P&64||P&128)&&b.process(u,d,g,m,y,w,S,E,I,G)}N!=null&&y&&fs(N,u&&u.ref,w,d||u,!d)},L=(u,d,g,m)=>{if(u==null)r(d.el=c(d.children),g,m);else{const y=d.el=u.el;d.children!==u.children&&l(y,d.children)}},x=(u,d,g,m)=>{u==null?r(d.el=a(d.children||""),g,m):d.el=u.el},M=(u,d,g,m)=>{[u.el,u.anchor]=R(u.children,d,g,m,u.el,u.anchor)},B=({el:u,anchor:d},g,m)=>{let y;for(;u&&u!==d;)y=p(u),r(u,g,m),u=y;r(d,g,m)},O=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},H=(u,d,g,m,y,w,S,E,I)=>{S=S||d.type==="svg",u==null?j(d,g,m,y,w,S,E,I):me(u,d,y,w,S,E,I)},j=(u,d,g,m,y,w,S,E)=>{let I,b;const{type:N,props:P,shapeFlag:D,transition:$,dirs:K}=u;if(I=u.el=o(u.type,w,P&&P.is,P),D&8?f(I,u.children):D&16&&de(u.children,I,null,m,y,w&&N!=="foreignObject",S,E),K&&yt(u,null,m,"created"),se(I,u,u.scopeId,S,m),P){for(const Y in P)Y!=="value"&&!Yn(Y)&&i(I,Y,null,P[Y],w,u.children,m,y,C);"value"in P&&i(I,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ue(b,m,u)}K&&yt(u,null,m,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;ee&&$.beforeEnter(I),r(I,d,g),((b=P&&P.onVnodeMounted)||ee||K)&&be(()=>{b&&Ue(b,m,u),ee&&$.enter(I),K&&yt(u,null,m,"mounted")},y)},se=(u,d,g,m,y)=>{if(g&&v(u,g),m)for(let w=0;w<m.length;w++)v(u,m[w]);if(y){let w=y.subTree;if(d===w){const S=y.vnode;se(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},de=(u,d,g,m,y,w,S,E,I=0)=>{for(let b=I;b<u.length;b++){const N=u[b]=E?st(u[b]):Fe(u[b]);A(null,N,d,g,m,y,w,S,E)}},me=(u,d,g,m,y,w,S)=>{const E=d.el=u.el;let{patchFlag:I,dynamicChildren:b,dirs:N}=d;I|=u.patchFlag&16;const P=u.props||te,D=d.props||te;let $;g&&bt(g,!1),($=D.onVnodeBeforeUpdate)&&Ue($,g,d,u),N&&yt(d,u,g,"beforeUpdate"),g&&bt(g,!0);const K=y&&d.type!=="foreignObject";if(b?he(u.dynamicChildren,b,E,g,m,K,w):S||J(u,d,E,null,g,m,K,w,!1),I>0){if(I&16)Se(E,d,P,D,g,m,y);else if(I&2&&P.class!==D.class&&i(E,"class",null,D.class,y),I&4&&i(E,"style",P.style,D.style,y),I&8){const ee=d.dynamicProps;for(let Y=0;Y<ee.length;Y++){const ae=ee[Y],Pe=P[ae],Dt=D[ae];(Dt!==Pe||ae==="value")&&i(E,ae,Pe,Dt,y,u.children,g,m,C)}}I&1&&u.children!==d.children&&f(E,d.children)}else!S&&b==null&&Se(E,d,P,D,g,m,y);(($=D.onVnodeUpdated)||N)&&be(()=>{$&&Ue($,g,d,u),N&&yt(d,u,g,"updated")},m)},he=(u,d,g,m,y,w,S)=>{for(let E=0;E<d.length;E++){const I=u[E],b=d[E],N=I.el&&(I.type===qe||!ln(I,b)||I.shapeFlag&70)?h(I.el):g;A(I,b,N,null,m,y,w,S,!0)}},Se=(u,d,g,m,y,w,S)=>{if(g!==m){if(g!==te)for(const E in g)!Yn(E)&&!(E in m)&&i(u,E,g[E],null,S,d.children,y,w,C);for(const E in m){if(Yn(E))continue;const I=m[E],b=g[E];I!==b&&E!=="value"&&i(u,E,b,I,S,d.children,y,w,C)}"value"in m&&i(u,"value",g.value,m.value)}},ve=(u,d,g,m,y,w,S,E,I)=>{const b=d.el=u?u.el:c(""),N=d.anchor=u?u.anchor:c("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:$}=d;$&&(E=E?E.concat($):$),u==null?(r(b,g,m),r(N,g,m),de(d.children,g,N,y,w,S,E,I)):P>0&&P&64&&D&&u.dynamicChildren?(he(u.dynamicChildren,D,g,y,w,S,E),(d.key!=null||y&&d===y.subTree)&&Oa(u,d,!0)):J(u,d,g,N,y,w,S,E,I)},Ke=(u,d,g,m,y,w,S,E,I)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?y.ctx.activate(d,g,m,S,I):ie(d,g,m,y,w,S,I):Ze(u,d,I)},ie=(u,d,g,m,y,w,S)=>{const E=u.component=$u(u,m,y);if(ba(u)&&(E.ctx.renderer=G),Hu(E),E.asyncDep){if(y&&y.registerDep(E,oe),!u.el){const I=E.subTree=Te(Pn);x(null,I,d,g)}return}oe(E,u,d,g,y,w,S)},Ze=(u,d,g)=>{const m=d.component=u.component;if(Jl(u,d,g))if(m.asyncDep&&!m.asyncResolved){Z(m,d,g);return}else m.next=d,jl(m.update),m.update();else d.el=u.el,m.vnode=d},oe=(u,d,g,m,y,w,S)=>{const E=()=>{if(u.isMounted){let{next:N,bu:P,u:D,parent:$,vnode:K}=u,ee=N,Y;bt(u,!1),N?(N.el=K.el,Z(u,N,S)):N=K,P&&Xn(P),(Y=N.props&&N.props.onVnodeBeforeUpdate)&&Ue(Y,$,N,K),bt(u,!0);const ae=Fr(u),Pe=u.subTree;u.subTree=ae,A(Pe,ae,h(Pe.el),T(Pe),u,y,w),N.el=ae.el,ee===null&&Yl(u,ae.el),D&&be(D,y),(Y=N.props&&N.props.onVnodeUpdated)&&be(()=>Ue(Y,$,N,K),y)}else{let N;const{el:P,props:D}=d,{bm:$,m:K,parent:ee}=u,Y=Qn(d);if(bt(u,!1),$&&Xn($),!Y&&(N=D&&D.onVnodeBeforeMount)&&Ue(N,ee,d),bt(u,!0),P&&W){const ae=()=>{u.subTree=Fr(u),W(P,u.subTree,u,y,null)};Y?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ae()):ae()}else{const ae=u.subTree=Fr(u);A(null,ae,g,m,u,y,w),d.el=ae.el}if(K&&be(K,y),!Y&&(N=D&&D.onVnodeMounted)){const ae=d;be(()=>Ue(N,ee,ae),y)}(d.shapeFlag&256||ee&&Qn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&be(u.a,y),u.isMounted=!0,d=g=m=null}},I=u.effect=new Ns(E,()=>Bs(b),u.scope),b=u.update=()=>I.run();b.id=u.uid,bt(u,!0),b()},Z=(u,d,g)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,Tu(u,d.props,m,g),Cu(u,d.children,g),en(),Ii(),tn()},J=(u,d,g,m,y,w,S,E,I=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,P=d.children,{patchFlag:D,shapeFlag:$}=d;if(D>0){if(D&128){vt(b,P,g,m,y,w,S,E,I);return}else if(D&256){Re(b,P,g,m,y,w,S,E,I);return}}$&8?(N&16&&C(b,y,w),P!==b&&f(g,P)):N&16?$&16?vt(b,P,g,m,y,w,S,E,I):C(b,y,w,!0):(N&8&&f(g,""),$&16&&de(P,g,m,y,w,S,E,I))},Re=(u,d,g,m,y,w,S,E,I)=>{u=u||Bt,d=d||Bt;const b=u.length,N=d.length,P=Math.min(b,N);let D;for(D=0;D<P;D++){const $=d[D]=I?st(d[D]):Fe(d[D]);A(u[D],$,g,null,y,w,S,E,I)}b>N?C(u,y,w,!0,!1,P):de(d,g,m,y,w,S,E,I,P)},vt=(u,d,g,m,y,w,S,E,I)=>{let b=0;const N=d.length;let P=u.length-1,D=N-1;for(;b<=P&&b<=D;){const $=u[b],K=d[b]=I?st(d[b]):Fe(d[b]);if(ln($,K))A($,K,g,null,y,w,S,E,I);else break;b++}for(;b<=P&&b<=D;){const $=u[P],K=d[D]=I?st(d[D]):Fe(d[D]);if(ln($,K))A($,K,g,null,y,w,S,E,I);else break;P--,D--}if(b>P){if(b<=D){const $=D+1,K=$<N?d[$].el:m;for(;b<=D;)A(null,d[b]=I?st(d[b]):Fe(d[b]),g,K,y,w,S,E,I),b++}}else if(b>D)for(;b<=P;)ye(u[b],y,w,!0),b++;else{const $=b,K=b,ee=new Map;for(b=K;b<=D;b++){const we=d[b]=I?st(d[b]):Fe(d[b]);we.key!=null&&ee.set(we.key,b)}let Y,ae=0;const Pe=D-K+1;let Dt=!1,di=0;const cn=new Array(Pe);for(b=0;b<Pe;b++)cn[b]=0;for(b=$;b<=P;b++){const we=u[b];if(ae>=Pe){ye(we,y,w,!0);continue}let Le;if(we.key!=null)Le=ee.get(we.key);else for(Y=K;Y<=D;Y++)if(cn[Y-K]===0&&ln(we,d[Y])){Le=Y;break}Le===void 0?ye(we,y,w,!0):(cn[Le-K]=b+1,Le>=di?di=Le:Dt=!0,A(we,d[Le],g,null,y,w,S,E,I),ae++)}const hi=Dt?Ou(cn):Bt;for(Y=hi.length-1,b=Pe-1;b>=0;b--){const we=K+b,Le=d[we],pi=we+1<N?d[we+1].el:m;cn[b]===0?A(null,Le,g,pi,y,w,S,E,I):Dt&&(Y<0||b!==hi[Y]?Ce(Le,g,pi,2):Y--)}}},Ce=(u,d,g,m,y=null)=>{const{el:w,type:S,transition:E,children:I,shapeFlag:b}=u;if(b&6){Ce(u.component.subTree,d,g,m);return}if(b&128){u.suspense.move(d,g,m);return}if(b&64){S.move(u,d,g,G);return}if(S===qe){r(w,d,g);for(let P=0;P<I.length;P++)Ce(I[P],d,g,m);r(u.anchor,d,g);return}if(S===$r){B(u,d,g);return}if(m!==2&&b&1&&E)if(m===0)E.beforeEnter(w),r(w,d,g),be(()=>E.enter(w),y);else{const{leave:P,delayLeave:D,afterLeave:$}=E,K=()=>r(w,d,g),ee=()=>{P(w,()=>{K(),$&&$()})};D?D(w,K,ee):ee()}else r(w,d,g)},ye=(u,d,g,m=!1,y=!1)=>{const{type:w,props:S,ref:E,children:I,dynamicChildren:b,shapeFlag:N,patchFlag:P,dirs:D}=u;if(E!=null&&fs(E,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const $=N&1&&D,K=!Qn(u);let ee;if(K&&(ee=S&&S.onVnodeBeforeUnmount)&&Ue(ee,d,u),N&6)_(u.component,g,m);else{if(N&128){u.suspense.unmount(g,m);return}$&&yt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,y,G,m):b&&(w!==qe||P>0&&P&64)?C(b,d,g,!1,!0):(w===qe&&P&384||!y&&N&16)&&C(I,d,g),m&&Nt(u)}(K&&(ee=S&&S.onVnodeUnmounted)||$)&&be(()=>{ee&&Ue(ee,d,u),$&&yt(u,null,d,"unmounted")},g)},Nt=u=>{const{type:d,el:g,anchor:m,transition:y}=u;if(d===qe){fi(g,m);return}if(d===$r){O(u);return}const w=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,I=()=>S(g,w);E?E(u.el,w,I):I()}else w()},fi=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},_=(u,d,g)=>{const{bum:m,scope:y,update:w,subTree:S,um:E}=u;m&&Xn(m),y.stop(),w&&(w.active=!1,ye(S,u,d,g)),E&&be(E,d),be(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},C=(u,d,g,m=!1,y=!1,w=0)=>{for(let S=w;S<u.length;S++)ye(u[S],d,g,m,y)},T=u=>u.shapeFlag&6?T(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),k=(u,d,g)=>{u==null?d._vnode&&ye(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),Ii(),pa(),d._vnode=u},G={p:A,um:ye,m:Ce,r:Nt,mt:ie,mc:de,pc:J,pbc:he,n:T,o:t};let ne,W;return e&&([ne,W]=e(G)),{render:k,hydrate:ne,createApp:wu(k,ne)}}function bt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=st(s[i]),c.el=o.el),n||Oa(o,c)),c.type===Pr&&(c.el=o.el)}}function Ou(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ku=t=>t.__isTeleport,qe=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),Pn=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),vn=[];let Ne=null;function Ws(t=!1){vn.push(Ne=t?null:[])}function Nu(){vn.pop(),Ne=vn[vn.length-1]||null}let An=1;function xi(t){An+=t}function Du(t){return t.dynamicChildren=An>0?Ne||Bt:null,Nu(),An>0&&Ne&&Ne.push(t),t}function Ks(t,e,n,r,s,i){return Du($e(t,e,n,r,s,i,!0))}function ds(t){return t?t.__v_isVNode===!0:!1}function ln(t,e){return t.type===e.type&&t.key===e.key}const Ar="__vInternal",ka=({key:t})=>t??null,er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||ce(t)||V(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function $e(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ka(e),ref:e&&er(e),scopeId:_a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return c?(zs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),An>0&&!o&&Ne&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ne.push(a),a}const Te=Mu;function Mu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===hu)&&(t=Pn),ds(t)){const c=qt(t,e,!0);return n&&zs(c,n),An>0&&!i&&Ne&&(c.shapeFlag&6?Ne[Ne.indexOf(t)]=c:Ne.push(c)),c.patchFlag|=-2,c}if(zu(t)&&(t=t.__vccOpts),e){e=xu(e);let{class:c,style:a}=e;c&&!fe(c)&&(e.class=Os(c)),re(a)&&(oa(a)&&!F(a)&&(a=ue({},a)),e.style=As(a))}const o=fe(t)?1:Xl(t)?128:ku(t)?64:re(t)?4:V(t)?2:0;return $e(t,e,n,r,s,o,i,!0)}function xu(t){return t?oa(t)||Ar in t?ue({},t):t:null}function qt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Uu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ka(c),ref:e&&e.ref?n&&s?F(s)?s.concat(er(e)):[s,er(e)]:er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qt(t.ssContent),ssFallback:t.ssFallback&&qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Lu(t=" ",e=0){return Te(Pr,null,t,e)}function Fe(t){return t==null||typeof t=="boolean"?Te(Pn):F(t)?Te(qe,null,t.slice()):typeof t=="object"?st(t):Te(Pr,null,String(t))}function st(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qt(t)}function zs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ar in e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Lu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Uu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Os([e.class,r.class]));else if(s==="style")e.style=As([e.style,r.style]);else if(br(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ue(t,e,n,r=null){Me(t,e,7,[n,r])}const Fu=Ta();let Bu=0;function $u(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Fu,i={uid:Bu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new qo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ra(r,s),emitsOptions:ma(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kl.bind(null,i),t.ce&&t.ce(i),i}let le=null;const Na=()=>le||Ie;let qs,Mt,Li="__VUE_INSTANCE_SETTERS__";(Mt=ns()[Li])||(Mt=ns()[Li]=[]),Mt.push(t=>le=t),qs=t=>{Mt.length>1?Mt.forEach(e=>e(t)):Mt[0](t)};const Gt=t=>{qs(t),t.scope.on()},Ct=()=>{le&&le.scope.off(),qs(null)};function Da(t){return t.vnode.shapeFlag&4}let On=!1;function Hu(t,e=!1){On=e;const{props:n,children:r}=t.vnode,s=Da(t);Iu(t,n,s,e),Ru(t,r);const i=s?ju(t,e):void 0;return On=!1,i}function ju(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=zt(new Proxy(t.ctx,gu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Wu(t):null;Gt(t),en();const i=dt(r,t,0,[t.props,s]);if(tn(),Ct(),jo(i)){if(i.then(Ct,Ct),e)return i.then(o=>{Ui(t,o,e)}).catch(o=>{Sr(o,t,0)});t.asyncDep=i}else Ui(t,i,e)}else Ma(t,e)}function Ui(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=ua(e)),Ma(t,n)}let Fi;function Ma(t,e,n){const r=t.type;if(!t.render){if(!e&&Fi&&!r.render){const s=r.template||js(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ue(ue({isCustomElement:i,delimiters:c},o),a);r.render=Fi(s,l)}}t.render=r.render||De}Gt(t),en(),mu(t),tn(),Ct()}function Vu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ee(t,"get","$attrs"),e[n]}}))}function Wu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Vu(t)},slots:t.slots,emit:t.emit,expose:e}}function Or(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ua(zt(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _n)return _n[n](t)},has(e,n){return n in e||n in _n}}))}function Ku(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function zu(t){return V(t)&&"__vccOpts"in t}const ke=(t,e)=>Bl(t,e,On);function xa(t,e,n){const r=arguments.length;return r===2?re(e)&&!F(e)?ds(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ds(n)&&(n=[n]),Te(t,e,n))}const qu=Symbol.for("v-scx"),Gu=()=>He(qu),Ju="3.3.4",Yu="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,Bi=It&&It.createElement("template"),Xu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?It.createElementNS(Yu,t):It.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bi.innerHTML=r?`<svg>${t}</svg>`:t;const c=Bi.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zu(t,e,n){const r=t.style,s=fe(n);if(n&&!s){if(e&&!fe(e))for(const i in e)n[i]==null&&hs(r,i,"");for(const i in n)hs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const $i=/\s*!important$/;function hs(t,e,n){if(F(n))n.forEach(r=>hs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ef(t,e);$i.test(n)?t.setProperty(Zt(r),n.replace($i,""),"important"):t[r]=n}}const Hi=["Webkit","Moz","ms"],Hr={};function ef(t,e){const n=Hr[e];if(n)return n;let r=We(e);if(r!=="filter"&&r in t)return Hr[e]=r;r=Ir(r);for(let s=0;s<Hi.length;s++){const i=Hi[s]+r;if(i in t)return Hr[e]=i}return e}const ji="http://www.w3.org/1999/xlink";function tf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ji,e.slice(6,e.length)):t.setAttributeNS(ji,e,n);else{const i=el(e);n==null||i&&!Ko(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function nf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,f=n??"";l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ko(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Lt(t,e,n,r){t.addEventListener(e,n,r)}function rf(t,e,n,r){t.removeEventListener(e,n,r)}function sf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=of(e);if(r){const l=i[e]=lf(r,s);Lt(t,c,l,a)}else o&&(rf(t,c,o,a),i[e]=void 0)}}const Vi=/(?:Once|Passive|Capture)$/;function of(t){let e;if(Vi.test(t)){e={};let r;for(;r=t.match(Vi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Zt(t.slice(2)),e]}let jr=0;const af=Promise.resolve(),cf=()=>jr||(af.then(()=>jr=0),jr=Date.now());function lf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(uf(r,n.value),e,5,[r])};return n.value=t,n.attached=cf(),n}function uf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wi=/^on[a-z]/,ff=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?Qu(t,r,s):e==="style"?Zu(t,n,r):br(e)?Ss(e)||sf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):df(t,e,r,s))?nf(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),tf(t,e,r,s))};function df(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Wi.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Wi.test(e)&&fe(n)?!1:e in t}const Ki=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Xn(e,n):e};function hf(t){t.target.composing=!0}function zi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const qi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ki(s);const i=r||s.props&&s.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ts(c)),t._assign(c)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",hf),Lt(t,"compositionend",zi),Lt(t,"change",zi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ki(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ts(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},pf=["ctrl","shift","alt","meta"],gf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>pf.some(n=>t[`${n}Key`]&&!e.includes(n))},mf=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=gf[e[s]];if(i&&i(n,e))return}return t(n,...r)},_f=ue({patchProp:ff},Xu);let Gi;function vf(){return Gi||(Gi=Pu(_f))}const yf=(...t)=>{const e=vf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bf(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bf(t){return fe(t)?document.querySelector(t):t}const Ef="modulepreload",wf=function(t){return"/"+t},Ji={},Yi=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=wf(i),i in Ji)return;Ji[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Ef,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const La=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",rn=t=>La?Symbol(t):"_vr_"+t,If=rn("rvlm"),Xi=rn("rvd"),Gs=rn("r"),Ua=rn("rl"),ps=rn("rvl"),Ut=typeof window<"u";function Tf(t){return t.__esModule||La&&t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Vr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const yn=()=>{},Sf=/\/$/,Rf=t=>t.replace(Sf,"");function Wr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("?"),a=e.indexOf("#",c>-1?c:0);return c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Of(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Cf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Pf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jt(e.matched[r],n.matched[s])&&Fa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Af(t[n],e[n]))return!1;return!0}function Af(t,e){return Array.isArray(t)?Zi(t,e):Array.isArray(e)?Zi(e,t):t===e}function Zi(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Of(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var kn;(function(t){t.pop="pop",t.push="push"})(kn||(kn={}));var bn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bn||(bn={}));function kf(t){if(!t)if(Ut){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Rf(t)}const Nf=/^[^#]+#/;function Df(t,e){return t.replace(Nf,"#")+e}function Mf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const kr=()=>({left:window.pageXOffset,top:window.pageYOffset});function xf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Mf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function eo(t,e){return(history.state?history.state.position-e:-1)+t}const gs=new Map;function Lf(t,e){gs.set(t,e)}function Uf(t){const e=gs.get(t);return gs.delete(t),e}let Ff=()=>location.protocol+"//"+location.host;function Ba(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Qi(a,"")}return Qi(n,t)+r+s}function Bf(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const v=Ba(t,location),R=n.value,A=e.value;let L=0;if(p){if(n.value=v,e.value=p,o&&o===R){o=null;return}L=A?p.position-A.position:0}else r(v);s.forEach(x=>{x(n.value,R,{delta:L,type:kn.pop,direction:L?L>0?bn.forward:bn.back:bn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const v=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(v),v}function f(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:kr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:a,listen:l,destroy:h}}function to(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?kr():null}}function $f(t){const{history:e,location:n}=window,r={value:Ba(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Ff()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(v){console.error(v),n[f?"replace":"assign"](p)}}function o(a,l){const f=X({},e.state,to(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=X({},s.value,e.state,{forward:a,scroll:kr()});i(f.current,f,!0);const h=X({},to(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Hf(t){t=kf(t);const e=$f(t),n=Bf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Df.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jf(t){return typeof t=="string"||t&&typeof t=="object"}function $a(t){return typeof t=="string"||typeof t=="symbol"}const tt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ha=rn("nf");var no;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(no||(no={}));function Yt(t,e){return X(new Error,{type:t,[Ha]:!0},e)}function nt(t,e){return t instanceof Error&&Ha in t&&(e==null||!!(t.type&e))}const ro="[^/]+?",Vf={sensitive:!1,strict:!1,start:!0,end:!0},Wf=/[.+*?^${}()[\]/\\]/g;function Kf(t,e){const n=X({},Vf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let v=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Wf,"\\$&"),v+=40;else if(p.type===1){const{value:R,repeatable:A,optional:L,regexp:x}=p;i.push({name:R,repeatable:A,optional:L});const M=x||ro;if(M!==ro){v+=10;try{new RegExp(`(${M})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${M}): `+O.message)}}let B=A?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(B=L&&l.length<2?`(?:/${B})`:"/"+B),L&&(B+="?"),s+=B,v+=20,L&&(v+=-8),A&&(v+=-20),M===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const v=f[p]||"",R=i[p-1];h[R.name]=v&&R.repeatable?v.split("/"):v}return h}function a(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const v of p)if(v.type===0)f+=v.value;else if(v.type===1){const{value:R,repeatable:A,optional:L}=v,x=R in l?l[R]:"";if(Array.isArray(x)&&!A)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(x)?x.join("/"):x;if(!M)if(L)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);f+=M}}return f}return{re:o,score:r,keys:i,parse:c,stringify:a}}function zf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=zf(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Gf={type:0,value:""},Jf=/[a-zA-Z0-9_]/;function Yf(t){if(!t)return[[]];if(t==="/")return[[Gf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Jf.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Xf(t,e,n){const r=Kf(Yf(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Qf(t,e){const n=[],r=new Map;e=io({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const v=!p,R=ed(f);R.aliasOf=p&&p.record;const A=io(e,f),L=[R];if("alias"in f){const B=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of B)L.push(X({},R,{components:p?p.record.components:R.components,path:O,aliasOf:p?p.record:R}))}let x,M;for(const B of L){const{path:O}=B;if(h&&O[0]!=="/"){const H=h.record.path,j=H[H.length-1]==="/"?"":"/";B.path=h.record.path+(O&&j+O)}if(x=Xf(B,h,A),p?p.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),v&&f.name&&!so(x)&&o(f.name)),"children"in R){const H=R.children;for(let j=0;j<H.length;j++)i(H[j],x,p&&p.children[j])}p=p||x,a(x)}return M?()=>{o(M)}:yn}function o(f){if($a(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let h=0;for(;h<n.length&&qf(f,n[h])>=0&&(f.record.path!==n[h].record.path||!ja(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!so(f)&&r.set(f.record.name,f)}function l(f,h){let p,v={},R,A;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Yt(1,{location:f});A=p.record.name,v=X(Zf(h.params,p.keys.filter(M=>!M.optional).map(M=>M.name)),f.params),R=p.stringify(v)}else if("path"in f)R=f.path,p=n.find(M=>M.re.test(R)),p&&(v=p.parse(R),A=p.record.name);else{if(p=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw Yt(1,{location:f,currentLocation:h});A=p.record.name,v=X({},h.params,f.params),R=p.stringify(v)}const L=[];let x=p;for(;x;)L.unshift(x.record),x=x.parent;return{name:A,path:R,params:v,matched:L,meta:nd(L)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Zf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ed(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:td(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function td(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function so(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nd(t){return t.reduce((e,n)=>X(e,n.meta),{})}function io(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ja(t,e){return e.children.some(n=>n===t||ja(t,n))}const Va=/#/g,rd=/&/g,sd=/\//g,id=/=/g,od=/\?/g,Wa=/\+/g,ad=/%5B/g,cd=/%5D/g,Ka=/%5E/g,ld=/%60/g,za=/%7B/g,ud=/%7C/g,qa=/%7D/g,fd=/%20/g;function Js(t){return encodeURI(""+t).replace(ud,"|").replace(ad,"[").replace(cd,"]")}function dd(t){return Js(t).replace(za,"{").replace(qa,"}").replace(Ka,"^")}function ms(t){return Js(t).replace(Wa,"%2B").replace(fd,"+").replace(Va,"%23").replace(rd,"%26").replace(ld,"`").replace(za,"{").replace(qa,"}").replace(Ka,"^")}function hd(t){return ms(t).replace(id,"%3D")}function pd(t){return Js(t).replace(Va,"%23").replace(od,"%3F")}function gd(t){return t==null?"":pd(t).replace(sd,"%2F")}function dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function md(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wa," "),o=i.indexOf("="),c=dr(o<0?i:i.slice(0,o)),a=o<0?null:dr(i.slice(o+1));if(c in e){let l=e[c];Array.isArray(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function oo(t){let e="";for(let n in t){const r=t[n];if(n=hd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ms(i)):[r&&ms(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function _d(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function un(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function it(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Yt(4,{from:n,to:e})):h instanceof Error?c(h):jf(h)?c(Yt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let f=Promise.resolve(l);t.length<3&&(f=f.then(a)),f.catch(h=>c(h))})}function Kr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(vd(c)){const l=(c.__vccOpts||c)[e];l&&s.push(it(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Tf(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&it(p,n,r,i,o)()}))}}return s}function vd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ao(t){const e=He(Gs),n=He(Ua),r=ke(()=>e.resolve(gn(t.to))),s=ke(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Jt.bind(null,f));if(p>-1)return p;const v=co(a[l-2]);return l>1&&co(f)===v&&h[h.length-1].path!==v?h.findIndex(Jt.bind(null,a[l-2])):p}),i=ke(()=>s.value>-1&&wd(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Fa(n.params,r.value.params));function c(a={}){return Ed(a)?e[gn(t.replace)?"replace":"push"](gn(t.to)).catch(yn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const yd=$s({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ao,setup(t,{slots:e}){const n=nn(ao(t)),{options:r}=He(Gs),s=ke(()=>({[lo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:xa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bd=yd;function Ed(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function co(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lo=(t,e,n)=>t??e??n,Id=$s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=He(ps),s=ke(()=>t.route||r.value),i=He(Xi,0),o=ke(()=>s.value.matched[i]);Zn(Xi,i+1),Zn(If,o),Zn(ps,s);const c=Sn();return mn(()=>[c.value,o.value,t.name],([a,l,f],[h,p,v])=>{l&&(l.instances[f]=a,p&&p!==l&&a&&a===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),a&&l&&(!p||!Jt(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(R=>R(a))},{flush:"post"}),()=>{const a=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return uo(n.default,{Component:f,route:a});const p=l.props[t.name],v=p?p===!0?a.params:typeof p=="function"?p(a):p:null,A=xa(f,X({},v,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(l.instances[h]=null)},ref:c}));return uo(n.default,{Component:A,route:a})||A}}});function uo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Td=Id;function Sd(t){const e=Qf(t.routes,t),n=t.parseQuery||md,r=t.stringifyQuery||oo,s=t.history,i=un(),o=un(),c=un(),a=Nl(tt);let l=tt;Ut&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Vr.bind(null,_=>""+_),h=Vr.bind(null,gd),p=Vr.bind(null,dr);function v(_,C){let T,k;return $a(_)?(T=e.getRecordMatcher(_),k=C):k=_,e.addRoute(k,T)}function R(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function A(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function x(_,C){if(C=X({},C||a.value),typeof _=="string"){const u=Wr(n,_,C.path),d=e.resolve({path:u.path},C),g=s.createHref(u.fullPath);return X(u,d,{params:p(d.params),hash:dr(u.hash),redirectedFrom:void 0,href:g})}let T;if("path"in _)T=X({},_,{path:Wr(n,_.path,C.path).path});else{const u=X({},_.params);for(const d in u)u[d]==null&&delete u[d];T=X({},_,{params:h(_.params)}),C.params=h(C.params)}const k=e.resolve(T,C),G=_.hash||"";k.params=f(p(k.params));const ne=Cf(r,X({},_,{hash:dd(G),path:k.path})),W=s.createHref(ne);return X({fullPath:ne,hash:G,query:r===oo?_d(_.query):_.query||{}},k,{redirectedFrom:void 0,href:W})}function M(_){return typeof _=="string"?Wr(n,_,a.value.path):X({},_)}function B(_,C){if(l!==_)return Yt(8,{from:C,to:_})}function O(_){return se(_)}function H(_){return O(X(M(_),{replace:!0}))}function j(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let k=typeof T=="function"?T(_):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=M(k):{path:k},k.params={}),X({query:_.query,hash:_.hash,params:_.params},k)}}function se(_,C){const T=l=x(_),k=a.value,G=_.state,ne=_.force,W=_.replace===!0,u=j(T);if(u)return se(X(M(u),{state:G,force:ne,replace:W}),C||T);const d=T;d.redirectedFrom=C;let g;return!ne&&Pf(r,k,T)&&(g=Yt(16,{to:d,from:k}),vt(k,k,!0,!1)),(g?Promise.resolve(g):me(d,k)).catch(m=>nt(m)?nt(m,2)?m:Re(m):Z(m,d,k)).then(m=>{if(m){if(nt(m,2))return se(X(M(m.to),{state:G,force:ne,replace:W}),C||d)}else m=Se(d,k,!0,W,G);return he(d,k,m),m})}function de(_,C){const T=B(_,C);return T?Promise.reject(T):Promise.resolve()}function me(_,C){let T;const[k,G,ne]=Rd(_,C);T=Kr(k.reverse(),"beforeRouteLeave",_,C);for(const u of k)u.leaveGuards.forEach(d=>{T.push(it(d,_,C))});const W=de.bind(null,_,C);return T.push(W),xt(T).then(()=>{T=[];for(const u of i.list())T.push(it(u,_,C));return T.push(W),xt(T)}).then(()=>{T=Kr(G,"beforeRouteUpdate",_,C);for(const u of G)u.updateGuards.forEach(d=>{T.push(it(d,_,C))});return T.push(W),xt(T)}).then(()=>{T=[];for(const u of _.matched)if(u.beforeEnter&&!C.matched.includes(u))if(Array.isArray(u.beforeEnter))for(const d of u.beforeEnter)T.push(it(d,_,C));else T.push(it(u.beforeEnter,_,C));return T.push(W),xt(T)}).then(()=>(_.matched.forEach(u=>u.enterCallbacks={}),T=Kr(ne,"beforeRouteEnter",_,C),T.push(W),xt(T))).then(()=>{T=[];for(const u of o.list())T.push(it(u,_,C));return T.push(W),xt(T)}).catch(u=>nt(u,8)?u:Promise.reject(u))}function he(_,C,T){for(const k of c.list())k(_,C,T)}function Se(_,C,T,k,G){const ne=B(_,C);if(ne)return ne;const W=C===tt,u=Ut?history.state:{};T&&(k||W?s.replace(_.fullPath,X({scroll:W&&u&&u.scroll},G)):s.push(_.fullPath,G)),a.value=_,vt(_,C,T,W),Re()}let ve;function Ke(){ve=s.listen((_,C,T)=>{const k=x(_),G=j(k);if(G){se(X(G,{replace:!0}),k).catch(yn);return}l=k;const ne=a.value;Ut&&Lf(eo(ne.fullPath,T.delta),kr()),me(k,ne).catch(W=>nt(W,12)?W:nt(W,2)?(se(W.to,k).then(u=>{nt(u,20)&&!T.delta&&T.type===kn.pop&&s.go(-1,!1)}).catch(yn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Z(W,k,ne))).then(W=>{W=W||Se(k,ne,!1),W&&(T.delta?s.go(-T.delta,!1):T.type===kn.pop&&nt(W,20)&&s.go(-1,!1)),he(k,ne,W)}).catch(yn)})}let ie=un(),Ze=un(),oe;function Z(_,C,T){Re(_);const k=Ze.list();return k.length?k.forEach(G=>G(_,C,T)):console.error(_),Promise.reject(_)}function J(){return oe&&a.value!==tt?Promise.resolve():new Promise((_,C)=>{ie.add([_,C])})}function Re(_){return oe||(oe=!_,Ke(),ie.list().forEach(([C,T])=>_?T(_):C()),ie.reset()),_}function vt(_,C,T,k){const{scrollBehavior:G}=t;if(!Ut||!G)return Promise.resolve();const ne=!T&&Uf(eo(_.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return da().then(()=>G(_,C,ne)).then(W=>W&&xf(W)).catch(W=>Z(W,_,C))}const Ce=_=>s.go(_);let ye;const Nt=new Set;return{currentRoute:a,addRoute:v,removeRoute:R,hasRoute:L,getRoutes:A,resolve:x,options:t,push:O,replace:H,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Ze.add,isReady:J,install(_){const C=this;_.component("RouterLink",bd),_.component("RouterView",Td),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(a)}),Ut&&!ye&&a.value===tt&&(ye=!0,O(s.location).catch(G=>{}));const T={};for(const G in tt)T[G]=ke(()=>a.value[G]);_.provide(Gs,C),_.provide(Ua,nn(T)),_.provide(ps,a);const k=_.unmount;Nt.add(_),_.unmount=function(){Nt.delete(_),Nt.size<1&&(l=tt,ve&&ve(),a.value=tt,ye=!1,oe=!1),k()}}}}function xt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Rd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Jt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Jt(l,a))||s.push(a))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Cd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,v=l&63;a||(v=64,o||(p=64)),r.push(n[f],n[h],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ga(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Pd;const p=i<<2|c>>4;if(r.push(p),l!==64){const v=c<<4&240|l>>2;if(r.push(v),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Pd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ad=function(t){const e=Ga(t);return Ja.encodeByteArray(e,!0)},Ya=function(t){return Ad(t).replace(/\./g,"")},Xa=function(t){try{return Ja.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=()=>Od().__FIREBASE_DEFAULTS__,Nd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Dd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xa(t[1]);return e&&JSON.parse(e)},Ys=()=>{try{return kd()||Nd()||Dd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Md=t=>{var e,n;return(n=(e=Ys())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qa=()=>{var t;return(t=Ys())===null||t===void 0?void 0:t.config},Za=t=>{var e;return(e=Ys())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Ud(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bd(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function Hd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="FirebaseError";class mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jd,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Un.prototype.create)}}class Un{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Vd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new mt(s,c,r)}}function Vd(t,e){return t.replace(Wd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Wd=/\{\$([^}]+)}/g;function Kd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(fo(i)&&fo(o)){if(!hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zd(t,e){const n=new qd(t,e);return n.subscribe.bind(n)}class qd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zr),s.error===void 0&&(s.error=zr),s.complete===void 0&&(s.complete=zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xd(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yd(t){return t===Et?void 0:t}function Xd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Zd={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},eh=Q.INFO,th={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},nh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=th[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=eh,this._logHandler=nh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const rh=(t,e)=>e.some(n=>t instanceof n);let ho,po;function sh(){return ho||(ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ih(){return po||(po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tc=new WeakMap,_s=new WeakMap,nc=new WeakMap,qr=new WeakMap,Xs=new WeakMap;function oh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ht(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tc.set(n,t)}).catch(()=>{}),Xs.set(e,t),e}function ah(t){if(_s.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_s.set(t,e)}let vs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _s.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ch(t){vs=t(vs)}function lh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gr(this),e,...n);return nc.set(r,e.sort?e.sort():[e]),ht(r)}:ih().includes(t)?function(...e){return t.apply(Gr(this),e),ht(tc.get(this))}:function(...e){return ht(t.apply(Gr(this),e))}}function uh(t){return typeof t=="function"?lh(t):(t instanceof IDBTransaction&&ah(t),rh(t,sh())?new Proxy(t,vs):t)}function ht(t){if(t instanceof IDBRequest)return oh(t);if(qr.has(t))return qr.get(t);const e=uh(t);return e!==t&&(qr.set(t,e),Xs.set(e,t)),e}const Gr=t=>Xs.get(t);function fh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=ht(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ht(o.result),a.oldVersion,a.newVersion,ht(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const dh=["get","getKey","getAll","getAllKeys","count"],hh=["put","add","delete","clear"],Jr=new Map;function go(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jr.get(e))return Jr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Jr.set(e,i),i}ch(t=>({...t,get:(e,n,r)=>go(e,n)||t.get(e,n,r),has:(e,n)=>!!go(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ys="@firebase/app",mo="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new ec("@firebase/app"),mh="@firebase/app-compat",_h="@firebase/analytics-compat",vh="@firebase/analytics",yh="@firebase/app-check-compat",bh="@firebase/app-check",Eh="@firebase/auth",wh="@firebase/auth-compat",Ih="@firebase/database",Th="@firebase/database-compat",Sh="@firebase/functions",Rh="@firebase/functions-compat",Ch="@firebase/installations",Ph="@firebase/installations-compat",Ah="@firebase/messaging",Oh="@firebase/messaging-compat",kh="@firebase/performance",Nh="@firebase/performance-compat",Dh="@firebase/remote-config",Mh="@firebase/remote-config-compat",xh="@firebase/storage",Lh="@firebase/storage-compat",Uh="@firebase/firestore",Fh="@firebase/firestore-compat",Bh="firebase",$h="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]",Hh={[ys]:"fire-core",[mh]:"fire-core-compat",[vh]:"fire-analytics",[_h]:"fire-analytics-compat",[bh]:"fire-app-check",[yh]:"fire-app-check-compat",[Eh]:"fire-auth",[wh]:"fire-auth-compat",[Ih]:"fire-rtdb",[Th]:"fire-rtdb-compat",[Sh]:"fire-fn",[Rh]:"fire-fn-compat",[Ch]:"fire-iid",[Ph]:"fire-iid-compat",[Ah]:"fire-fcm",[Oh]:"fire-fcm-compat",[kh]:"fire-perf",[Nh]:"fire-perf-compat",[Dh]:"fire-rc",[Mh]:"fire-rc-compat",[xh]:"fire-gcs",[Lh]:"fire-gcs-compat",[Uh]:"fire-fst",[Fh]:"fire-fst-compat","fire-js":"fire-js",[Bh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,Es=new Map;function jh(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Es.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;Es.set(e,t);for(const n of pr.values())jh(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new Un("app","Firebase",Vh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=$h;function sc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pt.create("bad-app-name",{appName:String(s)});if(n||(n=Qa()),!n)throw pt.create("no-options");const i=pr.get(s);if(i){if(hr(n,i.options)&&hr(r,i.config))return i;throw pt.create("duplicate-app",{appName:s})}const o=new Qd(s);for(const a of Es.values())o.addComponent(a);const c=new Wh(n,r,o);return pr.set(s,c),c}function Kh(t=bs){const e=pr.get(t);if(!e&&t===bs&&Qa())return sc();if(!e)throw pt.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let s=(r=Hh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(c.join(" "));return}Nn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="firebase-heartbeat-database",qh=1,Dn="firebase-heartbeat-store";let Yr=null;function ic(){return Yr||(Yr=fh(zh,qh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dn)}}}).catch(t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})})),Yr}async function Gh(t){try{return await(await ic()).transaction(Dn).objectStore(Dn).get(oc(t))}catch(e){if(e instanceof mt)At.warn(e.message);else{const n=pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(n.message)}}}async function _o(t,e){try{const r=(await ic()).transaction(Dn,"readwrite");await r.objectStore(Dn).put(e,oc(t)),await r.done}catch(n){if(n instanceof mt)At.warn(n.message);else{const r=pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});At.warn(r.message)}}}function oc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=1024,Yh=30*24*60*60*1e3;class Xh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Yh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:n,unsentEntries:r}=Qh(this._heartbeatsCache.heartbeats),s=Ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vo(){return new Date().toISOString().substring(0,10)}function Qh(t,e=Jh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _o(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yo(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){Nn(new Xt("platform-logger",e=>new ph(e),"PRIVATE")),Nn(new Xt("heartbeat",e=>new Xh(e),"PRIVATE")),jt(ys,mo,t),jt(ys,mo,"esm2017"),jt("fire-js","")}ep("");var tp="firebase",np="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(tp,np,"app");function Qs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bo(t){return t!==void 0&&t.enterprise!==void 0}class rp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function ac(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sp=ac,cc=new Un("auth","Firebase",ac());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new ec("@firebase/auth");function ip(t,...e){gr.logLevel<=Q.WARN&&gr.warn(`Auth (${Bn}): ${t}`,...e)}function tr(t,...e){gr.logLevel<=Q.ERROR&&gr.error(`Auth (${Bn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw Zs(t,...e)}function je(t,...e){return Zs(t,...e)}function op(t,e,n){const r=Object.assign(Object.assign({},sp()),{[e]:n});return new Un("auth","Firebase",r).create(e,{appName:t.name})}function Zs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cc.create(t,...e)}function U(t,e,...n){if(!t)throw Zs(e,...n)}function Ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tr(e),new Error(e)}function Xe(t,e){t||Ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ap(){return Eo()==="http:"||Eo()==="https:"}function Eo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ap()||Ud()||"connection"in navigator)?navigator.onLine:!0}function lp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=Ld()||Fd()}get(){return cp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new $n(3e4,6e4);function sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kt(t,e,n,r,s={}){return uc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Fn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),lc.fetch()(fc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function uc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},up),e);try{const s=new dp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Jn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Jn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw op(t,f,l);xe(t,f)}}catch(s){if(s instanceof mt)throw s;xe(t,"network-request-failed",{message:String(s)})}}async function Nr(t,e,n,r,s={}){const i=await kt(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function fc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ei(t.config,s):`${t.config.apiScheme}://${s}`}class dp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),fp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(t,e,r);return s.customData._tokenResponse=n,s}async function hp(t,e){return kt(t,"GET","/v2/recaptchaConfig",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e){return kt(t,"POST","/v1/accounts:delete",e)}async function gp(t,e){return kt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mp(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=ti(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Xr(s.auth_time)),issuedAtTime:En(Xr(s.iat)),expirationTime:En(Xr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xr(t){return Number(t)*1e3}function ti(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xa(n);return s?JSON.parse(s):(tr("Failed to decode base64 JWT payload"),null)}catch(s){return tr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _p(t){const e=ti(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mt&&vp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mn(t,gp(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wp(i.providerUserInfo):[],c=Ep(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function bp(t){const e=_t(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ep(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wp(t){return t.map(e=>{var{providerId:n}=e,r=Qs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ip(t,e){const n=await uc(t,{},async()=>{const r=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=fc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",lc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_p(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ip(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mp(this,e)}reload(){return bp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mn(this,pp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,M=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:O,isAnonymous:H,providerData:j,stsTokenManager:se}=n;U(B&&se,e,"internal-error");const de=xn.fromJSON(this.name,se);U(typeof B=="string",e,"internal-error"),rt(h,e.name),rt(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof H=="boolean",e,"internal-error"),rt(v,e.name),rt(R,e.name),rt(A,e.name),rt(L,e.name),rt(x,e.name),rt(M,e.name);const me=new Pt({uid:B,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:H,photoURL:R,phoneNumber:v,tenantId:A,stsTokenManager:de,createdAt:x,lastLoginAt:M});return j&&Array.isArray(j)&&(me.providerData=j.map(he=>Object.assign({},he))),L&&(me._redirectEventId=L),me}static async _fromIdTokenResponse(e,n,r=!1){const s=new xn;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Map;function Je(t){Xe(t instanceof Function,"Expected a class definition");let e=wo.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hc.type="NONE";const Io=hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e,n){return`firebase:${t}:${e}:${n}`}class Vt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nr(this.userKey,s.apiKey,i),this.fullPersistenceKey=nr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vt(Je(Io),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Je(Io);const o=nr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Pt._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Vt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Vt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vc(e))return"Blackberry";if(yc(e))return"Webos";if(ni(e))return"Safari";if((e.includes("chrome/")||gc(e))&&!e.includes("edge/"))return"Chrome";if(_c(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pc(t=ge()){return/firefox\//i.test(t)}function ni(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gc(t=ge()){return/crios\//i.test(t)}function mc(t=ge()){return/iemobile/i.test(t)}function _c(t=ge()){return/android/i.test(t)}function vc(t=ge()){return/blackberry/i.test(t)}function yc(t=ge()){return/webos/i.test(t)}function Dr(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Tp(t=ge()){var e;return Dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sp(){return Bd()&&document.documentMode===10}function bc(t=ge()){return Dr(t)||_c(t)||yc(t)||vc(t)||/windows phone/i.test(t)||mc(t)}function Rp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t,e=[]){let n;switch(t){case"Browser":n=To(ge());break;case"Worker":n=`${To(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(t,e={}){return kt(t,"GET","/v2/passwordPolicy",sn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=6;class Op{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ap,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new So(this),this.idTokenSubscription=new So(this),this.beforeStateQueue=new Cp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_t(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pp(this),n=new Op(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Un("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Vt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ip(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function on(t){return _t(t)}class So{constructor(e){this.auth=e,this.observer=null,this.addObserver=zd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Np().appendChild(r)})}function Dp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Mp="https://www.google.com/recaptcha/enterprise.js?render=",xp="recaptcha-enterprise",Lp="NO_RECAPTCHA";class Up{constructor(e){this.type=xp,this.auth=on(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{hp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new rp(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;bo(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Lp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&bo(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wc(Mp+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}async function Ro(t,e,n,r=!1){const s=new Up(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e){const n=rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hr(i,e??{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function Bp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $p(t,e,n){const r=on(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ic(e),{host:o,port:c}=Hp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||jp()}function Ic(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hp(t){const e=Ic(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Co(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Co(o)}}}function Co(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,n){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function Vp(t,e){return kt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return Nr(t,"POST","/v1/accounts:signInWithPassword",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(t,e){return Nr(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}async function Kp(t,e){return Nr(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ri{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ln(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ln(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ro(e,r,"signInWithPassword");return Qr(e,s)}else return Qr(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ro(e,r,"signInWithPassword");return Qr(e,i)}else return Promise.reject(s)});case"emailLink":return Wp(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kp(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return Nr(t,"POST","/v1/accounts:signInWithIdp",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="http://localhost";class Ot extends ri{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ot(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wt(e,n)}buildRequest(){const e={requestUri:zp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gp(t){const e=hn(pn(t)).link,n=e?hn(pn(e)).deep_link_id:null,r=hn(pn(t)).deep_link_id;return(r?hn(pn(r)).link:null)||r||n||e||t}class si{constructor(e){var n,r,s,i,o,c;const a=hn(pn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=qp((s=a.mode)!==null&&s!==void 0?s:null);U(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Gp(e);try{return new si(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,n){return Ln._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=si.parseLink(n);return U(r,"argument-error"),Ln._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Tc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Hn{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ot._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return at.credential(n,r)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Hn{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Hn{constructor(){super("twitter.com")}static credential(e,n){return Ot._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=Po(r);return new Qt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Po(r);return new Qt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Po(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _r(e,n,r,s)}}function Sc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_r._fromErrorAndOperation(t,i,e,r):i})}async function Jp(t,e,n=!1){const r=await Mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Mn(t,Sc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ti(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),Qt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(t,e,n=!1){const r="signIn",s=await Sc(t,r,e),i=await Qt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Xp(t,e){return Rc(on(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qp(t){const e=on(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Zp(t,e,n){return Xp(_t(t),an.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qp(t),r})}function eg(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function tg(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function ng(t){return _t(t).signOut()}const vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(){const t=ge();return ni(t)||Dr(t)}const sg=1e3,ig=10;class Pc extends Cc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rg()&&Rp(),this.fallbackToPolling=bc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Sp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ig):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pc.type="LOCAL";const og=Pc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Cc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ac.type="SESSION";const Oc=Ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Mr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await ag(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ii("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function lg(t){Ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function ug(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dg(){return kc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="firebaseLocalStorageDb",hg=1,yr="firebaseLocalStorage",Dc="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function pg(){const t=indexedDB.deleteDatabase(Nc);return new jn(t).toPromise()}function Is(){const t=indexedDB.open(Nc,hg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yr,{keyPath:Dc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yr)?e(r):(r.close(),await pg(),e(await Is()))})})}async function Ao(t,e,n){const r=xr(t,!0).put({[Dc]:e,value:n});return new jn(r).toPromise()}async function gg(t,e){const n=xr(t,!1).get(e),r=await new jn(n).toPromise();return r===void 0?null:r.value}function Oo(t,e){const n=xr(t,!0).delete(e);return new jn(n).toPromise()}const mg=800,_g=3;class Mc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Is(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_g)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mr._getInstance(dg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ug(),!this.activeServiceWorker)return;this.sender=new cg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await Ao(e,vr,"1"),await Oo(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ao(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xr(s,!1).getAll();return new jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mc.type="LOCAL";const vg=Mc;new $n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e){return e?Je(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends ri{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bg(t){return Rc(t.auth,new oi(t),t.bypassAuthState)}function Eg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Yp(n,new oi(t),t.bypassAuthState)}async function wg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Jp(n,new oi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bg;case"linkViaPopup":case"linkViaRedirect":return wg;case"reauthViaPopup":case"reauthViaRedirect":return Eg;default:xe(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=new $n(2e3,1e4);class Ft extends xc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ft.currentPopupAction&&Ft.currentPopupAction.cancel(),Ft.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ft.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ig.get())};e()}}Ft.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="pendingRedirect",rr=new Map;class Sg extends xc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rr.get(this.auth._key());if(!e){try{const r=await Rg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rr.set(this.auth._key(),e)}return this.bypassAuthState||rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rg(t,e){const n=Ag(e),r=Pg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Cg(t,e){rr.set(t._key(),e)}function Pg(t){return Je(t._redirectPersistence)}function Ag(t){return nr(Tg,t.config.apiKey,t.name)}async function Og(t,e,n=!1){const r=on(t),s=yg(r,e),o=await new Sg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=10*60*1e3;class Ng{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ko(e))}saveEventToCache(e){this.cachedEventUids.add(ko(e)),this.lastProcessedEventTime=Date.now()}}function ko(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(t,e={}){return kt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lg=/^https?/;async function Ug(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mg(t);for(const n of e)try{if(Fg(n))return}catch{}xe(t,"unauthorized-domain")}function Fg(t){const e=ws(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Lg.test(n))return!1;if(xg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new $n(3e4,6e4);function No(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $g(t){return new Promise((e,n)=>{var r,s,i;function o(){No(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{No(),n(je(t,"network-request-failed"))},timeout:Bg.get()})}if(!((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const c=Dp("iframefcb");return Ve()[c]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},wc(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw sr=null,e})}let sr=null;function Hg(t){return sr=sr||$g(t),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new $n(5e3,15e3),Vg="__/auth/iframe",Wg="emulator/auth/iframe",Kg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ei(e,Wg):`https://${t.config.authDomain}/${Vg}`,r={apiKey:e.apiKey,appName:t.name,v:Bn},s=zg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fn(r).slice(1)}`}async function Gg(t){const e=await Hg(t),n=Ve().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:qg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),c=Ve().setTimeout(()=>{i(o)},jg.get());function a(){Ve().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yg=500,Xg=600,Qg="_blank",Zg="http://localhost";class Do{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function em(t,e,n,r=Yg,s=Xg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Jg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ge().toLowerCase();n&&(c=gc(l)?Qg:n),pc(l)&&(e=e||Zg,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[v,R])=>`${p}${v}=${R},`,"");if(Tp(l)&&c!=="_self")return tm(e||"",c),new Do(null);const h=window.open(e||"",c,f);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Do(h)}function tm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="__/auth/handler",rm="emulator/auth/handler",sm=encodeURIComponent("fac");async function Mo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bn,eventId:s};if(e instanceof Tc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Hn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${sm}=${encodeURIComponent(a)}`:"";return`${im(t)}?${Fn(c).slice(1)}${l}`}function im({config:t}){return t.emulator?ei(t,rm):`https://${t.authDomain}/${nm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="webStorageSupport";class om{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=Og,this._overrideRedirectResult=Cg}async _openPopup(e,n,r,s){var i;Xe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Mo(e,n,r,ws(),s);return em(e,o,ii())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Mo(e,n,r,ws(),s);return lg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Gg(e),r=new Ng(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zr,{type:Zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ug(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bc()||ni()||Dr()}}const am=om;var xo="@firebase/auth",Lo="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function um(t){Nn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ec(t)},l=new kp(r,s,i,a);return Bp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new Xt("auth-internal",e=>{const n=on(e.getProvider("auth").getImmediate());return(r=>new cm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(xo,Lo,lm(t)),jt(xo,Lo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=5*60,dm=Za("authIdTokenMaxAge")||fm;let Uo=null;const hm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dm)return;const s=n==null?void 0:n.token;Uo!==s&&(Uo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pm(t=Kh()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fp(t,{popupRedirectResolver:am,persistence:[vg,og,Oc]}),r=Za("authTokenSyncURL");if(r){const i=hm(r);tg(n,i,()=>i(n.currentUser)),eg(n,o=>i(o))}const s=Md("auth");return s&&$p(n,`http://${s}`),n}um("Browser");const gm={apiKey:"AIzaSyCx4YrLqPeMcgTiIYQ-GabCWWrpu-2EojA",authDomain:"login-123-a47fa.firebaseapp.com",projectId:"login-123-a47fa",storageBucket:"login-123-a47fa.appspot.com",messagingSenderId:"354568694882",appId:"1:354568694882:web:b7b005fc01520e06f8353b",measurementId:"G-VEKJZY96P1"};sc(gm);const ai=pm(),mm=[{path:"/",component:()=>Yi(()=>Promise.resolve().then(()=>Rm),void 0),beforeEnter:t=>{ai.currentUser?t():t({path:"/login"})}},{path:"/login",component:()=>Yi(()=>Promise.resolve().then(()=>Nm),void 0)}],ci=Sd({history:Hf(),routes:mm});var _m=!1;/*!
  * pinia v2.0.0-rc.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */let Uc;const Lr=t=>Uc=t,Fc=Symbol();function Fo(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wn||(wn={}));function vm(){const t=Go(!0),e=t.run(()=>Sn({}));let n=[];const r=[],s=zt({install(i){Lr(s),s._a=i,i.provide(Fc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o))},use(i){return!this._a&&!_m?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}function Bo(t,e,n){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&t.splice(s,1)};return!n&&Na()&&Hs(r),r}function $o(t,...e){t.forEach(n=>{n(...e)})}function ir(t,e){for(const n in e){const r=e[n],s=t[n];Fo(s)&&Fo(r)&&!ce(r)&&!ft(r)?t[n]=ir(s,r):t[n]=r}return t}const{assign:Tt}=Object;function ym(t){return t&&t.effect}function bm(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const f=xl(n.state.value[t]);return Tt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=zt(ke(()=>{Lr(n);const v=n._s.get(t);return o[p].call(v,v)})),h),{}))}return a=Bc(t,l,e,n),a.$reset=function(){const h=s?s():{};this.$patch(p=>{Tt(p,h)})},a}const es=()=>{};function Bc(t,e,n={},r,s){let i;const o=n.state,c={actions:{},...n},a={deep:!0};let l,f=zt([]),h=zt([]),p;const v=r.state.value[t];v||(r.state.value[t]={}),Sn({});function R(H){let j;l=!1,typeof H=="function"?(H(r.state.value[t]),j={type:wn.patchFunction,storeId:t,events:p}):(ir(r.state.value[t],H),j={type:wn.patchObject,payload:H,storeId:t,events:p}),l=!0,$o(f,j,r.state.value[t])}const A=es;function L(){i.stop(),f=[],h=[],r._s.delete(t)}function x(H,j){return function(){Lr(r);const se=Array.from(arguments);let de=es,me=es;function he(ie){de=ie}function Se(ie){me=ie}$o(h,{args:se,name:H,store:B,after:he,onError:Se});let ve;try{ve=j.apply(this&&this.$id===t?this:B,se)}catch(ie){if(me(ie)!==!1)throw ie}if(ve instanceof Promise)return ve.then(ie=>{const Ze=de(ie);return Ze===void 0?ie:Ze}).catch(ie=>{if(me(ie)!==!1)return Promise.reject(ie)});const Ke=de(ve);return Ke===void 0?ve:Ke}}const M={_p:r,$id:t,$onAction:Bo.bind(null,h),$patch:R,$reset:A,$subscribe(H,j={}){const se=Bo(f,H,j.detached),de=i.run(()=>mn(()=>r.state.value[t],(he,Se)=>{l&&H({storeId:t,type:wn.direct,events:p},he)},Tt({},a,j)));return()=>{de(),se()}},$dispose:L},B=nn(Tt({},M));r._s.set(t,B);const O=r._e.run(()=>(i=Go(),i.run(()=>e())));for(const H in O){const j=O[H];if(ce(j)&&!ym(j)||ft(j))o||(v&&(ce(j)?j.value=v[H]:ir(j,v[H])),r.state.value[t][H]=j);else if(typeof j=="function"){const se=x(H,j);O[H]=se,c.actions[H]=j}}return Tt(B,O),Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:H=>{R(j=>{Tt(j,H)})}}),r._p.forEach(H=>{Tt(B,i.run(()=>H({store:B,app:r._a,pinia:r,options:c})))}),v&&o&&(n.hydrate||ir)(B,v),l=!0,B}function Em(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,a){const l=Na();return c=c||l&&He(Fc),c&&Lr(c),c=Uc,c._s.has(r)||(i?Bc(r,e,s,c):bm(r,s,c)),c._s.get(r)}return o.$id=r,o}const $c=Em({id:"user",state:()=>({userId:"",userName:""}),actions:{setUser(t,e){this.userId=t,this.userName=e},logout(){this.userId="",this.userName=""}}}),wm={name:"Dashboard",setup(){const t=$c(),e=async()=>{try{await ng(ai),t.logout(),ci.push("/login")}catch(n){console.error("Error signing out:",n)}};return{userName:t.userName,logout:e}}},li=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Im={class:"flex flex-col justify-center items-center h-3/4"},Tm={class:"text-3xl font-semibold mb-4"};function Sm(t,e,n,r,s,i){return Ws(),Ks("div",Im,[$e("button",{onClick:e[0]||(e[0]=(...o)=>r.logout&&r.logout(...o)),class:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"},"Logout"),$e("h1",Tm,"Welcome, "+tl(r.userName),1)])}const Hc=li(wm,[["render",Sm]]),Rm=Object.freeze(Object.defineProperty({__proto__:null,default:Hc},Symbol.toStringTag,{value:"Module"})),Cm={name:"Login",setup(){const t=Sn(""),e=Sn(""),n=$c();return{email:t,password:e,login:async()=>{try{const i=(await Zp(ai,t.value,e.value)).user;n.setUser(i.uid||"",i.displayName||""),ci.push("/")}catch(s){console.error("Error signing in:",s)}}}}},Pm={class:"m-20 p-8"},Am={class:"m-20"},Om=$e("button",{type:"submit",class:"m-20"},"Login",-1);function km(t,e,n,r,s,i){return Ws(),Ks("div",null,[$e("form",{onSubmit:e[2]||(e[2]=mf((...o)=>r.login&&r.login(...o),["prevent"])),class:"flex flex-col"},[$e("div",Pm,[Si($e("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Email"},null,512),[[qi,r.email]])]),$e("div",Am,[Si($e("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>r.password=o),placeholder:"Password"},null,512),[[qi,r.password]])]),Om],32)])}const jc=li(Cm,[["render",km]]),Nm=Object.freeze(Object.defineProperty({__proto__:null,default:jc},Symbol.toStringTag,{value:"Module"})),Dm=$s({name:"App",components:{Dashboard:Hc,Login:jc}}),Mm={id:"app"};function xm(t,e,n,r,s,i){const o=du("router-view");return Ws(),Ks("div",Mm,[Te(o)])}const Lm=li(Dm,[["render",xm]]);const ui=yf(Lm);ui.use(ci);ui.use(vm());ui.mount("#app");
