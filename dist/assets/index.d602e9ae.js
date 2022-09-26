(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Jf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var et={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),qf=Symbol.for("react.portal"),Zf=Symbol.for("react.fragment"),eh=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),nh=Symbol.for("react.provider"),rh=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),sh=Symbol.for("react.memo"),lh=Symbol.for("react.lazy"),ma=Symbol.iterator;function ah(t){return t===null||typeof t!="object"?null:(t=ma&&t[ma]||t["@@iterator"],typeof t=="function"?t:null)}var Ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qu=Object.assign,Zu={};function Un(t,e,n){this.props=t,this.context=e,this.refs=Zu,this.updater=n||Ju}Un.prototype.isReactComponent={};Un.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Un.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ec(){}ec.prototype=Un.prototype;function ll(t,e,n){this.props=t,this.context=e,this.refs=Zu,this.updater=n||Ju}var al=ll.prototype=new ec;al.constructor=ll;qu(al,Un.prototype);al.isPureReactComponent=!0;var ga=Array.isArray,tc=Object.prototype.hasOwnProperty,ul={current:null},nc={key:!0,ref:!0,__self:!0,__source:!0};function rc(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)tc.call(e,r)&&!nc.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Or,type:t,key:o,ref:s,props:i,_owner:ul.current}}function uh(t,e){return{$$typeof:Or,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Or}function ch(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var va=/\/+/g;function Po(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ch(""+t.key):e.toString(36)}function li(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Or:case qf:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Po(s,0):r,ga(i)?(n="",t!=null&&(n=t.replace(va,"$&/")+"/"),li(i,e,n,"",function(u){return u})):i!=null&&(cl(i)&&(i=uh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(va,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ga(t))for(var l=0;l<t.length;l++){o=t[l];var a=r+Po(o,l);s+=li(o,e,n,a,i)}else if(a=ah(t),typeof a=="function")for(t=a.call(t),l=0;!(o=t.next()).done;)o=o.value,a=r+Po(o,l++),s+=li(o,e,n,a,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Vr(t,e,n){if(t==null)return t;var r=[],i=0;return li(t,r,"","",function(o){return e.call(n,o,i++)}),r}function dh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var de={current:null},ai={transition:null},fh={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:ai,ReactCurrentOwner:ul};D.Children={map:Vr,forEach:function(t,e,n){Vr(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Vr(t,function(){e++}),e},toArray:function(t){return Vr(t,function(e){return e})||[]},only:function(t){if(!cl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=Un;D.Fragment=Zf;D.Profiler=th;D.PureComponent=ll;D.StrictMode=eh;D.Suspense=oh;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qu({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=ul.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)tc.call(e,a)&&!nc.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Or,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:rh,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nh,_context:t},t.Consumer=t};D.createElement=rc;D.createFactory=function(t){var e=rc.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:ih,render:t}};D.isValidElement=cl;D.lazy=function(t){return{$$typeof:lh,_payload:{_status:-1,_result:t},_init:dh}};D.memo=function(t,e){return{$$typeof:sh,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=ai.transition;ai.transition={};try{t()}finally{ai.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return de.current.useCallback(t,e)};D.useContext=function(t){return de.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return de.current.useDeferredValue(t)};D.useEffect=function(t,e){return de.current.useEffect(t,e)};D.useId=function(){return de.current.useId()};D.useImperativeHandle=function(t,e,n){return de.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return de.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return de.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return de.current.useMemo(t,e)};D.useReducer=function(t,e,n){return de.current.useReducer(t,e,n)};D.useRef=function(t){return de.current.useRef(t)};D.useState=function(t){return de.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return de.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return de.current.useTransition()};D.version="18.2.0";(function(t){t.exports=D})(et);const hh=Jf(et.exports);var ls={},ic={exports:{}},Ee={},oc={exports:{}},sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,P){var R=k.length;k.push(P);e:for(;0<R;){var G=R-1>>>1,J=k[G];if(0<i(J,P))k[G]=P,k[R]=J,R=G;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var P=k[0],R=k.pop();if(R!==P){k[0]=R;e:for(var G=0,J=k.length,Br=J>>>1;G<Br;){var Mt=2*(G+1)-1,No=k[Mt],Ut=Mt+1,Hr=k[Ut];if(0>i(No,R))Ut<J&&0>i(Hr,No)?(k[G]=Hr,k[Ut]=R,G=Ut):(k[G]=No,k[Mt]=R,G=Mt);else if(Ut<J&&0>i(Hr,R))k[G]=Hr,k[Ut]=R,G=Ut;else break e}}return P}function i(k,P){var R=k.sortIndex-P.sortIndex;return R!==0?R:k.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var a=[],u=[],p=1,m=null,h=3,y=!1,_=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=k)r(u),P.sortIndex=P.expirationTime,e(a,P);else break;P=n(u)}}function g(k){if(w=!1,f(k),!_)if(n(a)!==null)_=!0,To(S);else{var P=n(u);P!==null&&Co(g,P.startTime-k)}}function S(k,P){_=!1,w&&(w=!1,d(C),C=-1),y=!0;var R=h;try{for(f(P),m=n(a);m!==null&&(!(m.expirationTime>P)||k&&!De());){var G=m.callback;if(typeof G=="function"){m.callback=null,h=m.priorityLevel;var J=G(m.expirationTime<=P);P=t.unstable_now(),typeof J=="function"?m.callback=J:m===n(a)&&r(a),f(P)}else r(a);m=n(a)}if(m!==null)var Br=!0;else{var Mt=n(u);Mt!==null&&Co(g,Mt.startTime-P),Br=!1}return Br}finally{m=null,h=R,y=!1}}var I=!1,T=null,C=-1,F=5,O=-1;function De(){return!(t.unstable_now()-O<F)}function jn(){if(T!==null){var k=t.unstable_now();O=k;var P=!0;try{P=T(!0,k)}finally{P?$n():(I=!1,T=null)}}else I=!1}var $n;if(typeof c=="function")$n=function(){c(jn)};else if(typeof MessageChannel<"u"){var pa=new MessageChannel,Xf=pa.port2;pa.port1.onmessage=jn,$n=function(){Xf.postMessage(null)}}else $n=function(){M(jn,0)};function To(k){T=k,I||(I=!0,$n())}function Co(k,P){C=M(function(){k(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,To(S))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var R=h;h=P;try{return k()}finally{h=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,P){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var R=h;h=k;try{return P()}finally{h=R}},t.unstable_scheduleCallback=function(k,P,R){var G=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?G+R:G):R=G,k){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,k={id:p++,callback:P,priorityLevel:k,startTime:R,expirationTime:J,sortIndex:-1},R>G?(k.sortIndex=R,e(u,k),n(a)===null&&k===n(u)&&(w?(d(C),C=-1):w=!0,Co(g,R-G))):(k.sortIndex=J,e(a,k),_||y||(_=!0,To(S))),k},t.unstable_shouldYield=De,t.unstable_wrapCallback=function(k){var P=h;return function(){var R=h;h=P;try{return k.apply(this,arguments)}finally{h=R}}}})(sc);(function(t){t.exports=sc})(oc);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=et.exports,Se=oc.exports;function v(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ac=new Set,cr={};function rn(t,e){Nn(t,e),Nn(t+"Capture",e)}function Nn(t,e){for(cr[t]=e,t=0;t<e.length;t++)ac.add(e[t])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),as=Object.prototype.hasOwnProperty,ph=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ya={},_a={};function mh(t){return as.call(_a,t)?!0:as.call(ya,t)?!1:ph.test(t)?_a[t]=!0:(ya[t]=!0,!1)}function gh(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vh(t,e,n,r){if(e===null||typeof e>"u"||gh(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fe(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){re[t]=new fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];re[e]=new fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){re[t]=new fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){re[t]=new fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){re[t]=new fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){re[t]=new fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){re[t]=new fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){re[t]=new fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){re[t]=new fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function fl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dl,fl);re[e]=new fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dl,fl);re[e]=new fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dl,fl);re[e]=new fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){re[t]=new fe(t,1,!1,t.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){re[t]=new fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function hl(t,e,n,r){var i=re.hasOwnProperty(e)?re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vh(e,n,i,r)&&(n=null),r||i===null?mh(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lt=lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),ln=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),ml=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),ds=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),dc=Symbol.for("react.offscreen"),wa=Symbol.iterator;function Bn(t){return t===null||typeof t!="object"?null:(t=wa&&t[wa]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,Ro;function Yn(t){if(Ro===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ro=e&&e[1]||""}return`
`+Ro+t}var Oo=!1;function Do(t,e){if(!t||Oo)return"";Oo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=s&&0<=l);break}}}finally{Oo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yn(t):""}function yh(t){switch(t.tag){case 5:return Yn(t.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return t=Do(t.type,!1),t;case 11:return t=Do(t.type.render,!1),t;case 1:return t=Do(t.type,!0),t;default:return""}}function fs(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case an:return"Fragment";case ln:return"Portal";case us:return"Profiler";case pl:return"StrictMode";case cs:return"Suspense";case ds:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cc:return(t.displayName||"Context")+".Consumer";case uc:return(t._context.displayName||"Context")+".Provider";case ml:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gl:return e=t.displayName||null,e!==null?e:fs(t.type)||"Memo";case dt:e=t._payload,t=t._init;try{return fs(t(e))}catch{}}return null}function _h(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(e);case 8:return e===pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ot(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wh(t){var e=fc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kr(t){t._valueTracker||(t._valueTracker=wh(t))}function hc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fc(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ki(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hs(t,e){var n=e.checked;return W({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Sa(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ot(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pc(t,e){e=e.checked,e!=null&&hl(t,"checked",e,!1)}function ps(t,e){pc(t,e);var n=Ot(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ms(t,e.type,n):e.hasOwnProperty("defaultValue")&&ms(t,e.type,Ot(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ea(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ms(t,e,n){(e!=="number"||ki(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xn=Array.isArray;function _n(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ot(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gs(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(v(91));return W({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ka(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(v(92));if(Xn(n)){if(1<n.length)throw Error(v(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ot(n)}}function mc(t,e){var n=Ot(e.value),r=Ot(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ia(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gc(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gc(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gr,vc=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function dr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sh=["Webkit","ms","Moz","O"];Object.keys(Zn).forEach(function(t){Sh.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zn[e]=Zn[t]})});function yc(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zn.hasOwnProperty(t)&&Zn[t]?(""+e).trim():e+"px"}function _c(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yc(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Eh=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(t,e){if(e){if(Eh[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(v(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(v(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(v(61))}if(e.style!=null&&typeof e.style!="object")throw Error(v(62))}}function _s(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=null;function vl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ss=null,wn=null,Sn=null;function Ta(t){if(t=Lr(t)){if(typeof Ss!="function")throw Error(v(280));var e=t.stateNode;e&&(e=oo(e),Ss(t.stateNode,t.type,e))}}function wc(t){wn?Sn?Sn.push(t):Sn=[t]:wn=t}function Sc(){if(wn){var t=wn,e=Sn;if(Sn=wn=null,Ta(t),e)for(t=0;t<e.length;t++)Ta(e[t])}}function Ec(t,e){return t(e)}function kc(){}var Ao=!1;function Ic(t,e,n){if(Ao)return t(e,n);Ao=!0;try{return Ec(t,e,n)}finally{Ao=!1,(wn!==null||Sn!==null)&&(kc(),Sc())}}function fr(t,e){var n=t.stateNode;if(n===null)return null;var r=oo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(v(231,e,typeof n));return n}var Es=!1;if(nt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Es=!1}function kh(t,e,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(p){this.onError(p)}}var er=!1,Ii=null,Ti=!1,ks=null,Ih={onError:function(t){er=!0,Ii=t}};function Th(t,e,n,r,i,o,s,l,a){er=!1,Ii=null,kh.apply(Ih,arguments)}function Ch(t,e,n,r,i,o,s,l,a){if(Th.apply(this,arguments),er){if(er){var u=Ii;er=!1,Ii=null}else throw Error(v(198));Ti||(Ti=!0,ks=u)}}function on(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ca(t){if(on(t)!==t)throw Error(v(188))}function Nh(t){var e=t.alternate;if(!e){if(e=on(t),e===null)throw Error(v(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ca(i),t;if(o===r)return Ca(i),e;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?t:e}function Cc(t){return t=Nh(t),t!==null?Nc(t):null}function Nc(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nc(t);if(e!==null)return e;t=t.sibling}return null}var Pc=Se.unstable_scheduleCallback,Na=Se.unstable_cancelCallback,Ph=Se.unstable_shouldYield,Rh=Se.unstable_requestPaint,Q=Se.unstable_now,Oh=Se.unstable_getCurrentPriorityLevel,yl=Se.unstable_ImmediatePriority,Rc=Se.unstable_UserBlockingPriority,Ci=Se.unstable_NormalPriority,Dh=Se.unstable_LowPriority,Oc=Se.unstable_IdlePriority,to=null,He=null;function Ah(t){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(to,t,void 0,(t.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Mh,Lh=Math.log,xh=Math.LN2;function Mh(t){return t>>>=0,t===0?32:31-(Lh(t)/xh|0)|0}var Qr=64,br=4194304;function Jn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ni(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Jn(l):(o&=s,o!==0&&(r=Jn(o)))}else s=n&~i,s!==0?r=Jn(s):o!==0&&(r=Jn(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ue(e),i=1<<n,r|=t[n],e&=~i;return r}function Uh(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zh(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Ue(o),l=1<<s,a=i[s];a===-1?((l&n)===0||(l&r)!==0)&&(i[s]=Uh(l,e)):a<=e&&(t.expiredLanes|=l),o&=~l}}function Is(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dc(){var t=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),t}function Lo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dr(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ue(e),t[e]=n}function Fh(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ue(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function _l(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ue(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var x=0;function Ac(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Lc,wl,xc,Mc,Uc,Ts=!1,Yr=[],wt=null,St=null,Et=null,hr=new Map,pr=new Map,ht=[],jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(t,e){switch(t){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":hr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(e.pointerId)}}function Vn(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Lr(e),e!==null&&wl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $h(t,e,n,r,i){switch(e){case"focusin":return wt=Vn(wt,t,e,n,r,i),!0;case"dragenter":return St=Vn(St,t,e,n,r,i),!0;case"mouseover":return Et=Vn(Et,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return hr.set(o,Vn(hr.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,pr.set(o,Vn(pr.get(o)||null,t,e,n,r,i)),!0}return!1}function zc(t){var e=$t(t.target);if(e!==null){var n=on(e);if(n!==null){if(e=n.tag,e===13){if(e=Tc(n),e!==null){t.blockedOn=e,Uc(t.priority,function(){xc(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ui(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cs(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ws=r,n.target.dispatchEvent(r),ws=null}else return e=Lr(n),e!==null&&wl(e),t.blockedOn=n,!1;e.shift()}return!0}function Ra(t,e,n){ui(t)&&n.delete(e)}function Bh(){Ts=!1,wt!==null&&ui(wt)&&(wt=null),St!==null&&ui(St)&&(St=null),Et!==null&&ui(Et)&&(Et=null),hr.forEach(Ra),pr.forEach(Ra)}function Wn(t,e){t.blockedOn===e&&(t.blockedOn=null,Ts||(Ts=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Bh)))}function mr(t){function e(i){return Wn(i,t)}if(0<Yr.length){Wn(Yr[0],t);for(var n=1;n<Yr.length;n++){var r=Yr[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wt!==null&&Wn(wt,t),St!==null&&Wn(St,t),Et!==null&&Wn(Et,t),hr.forEach(e),pr.forEach(e),n=0;n<ht.length;n++)r=ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ht.length&&(n=ht[0],n.blockedOn===null);)zc(n),n.blockedOn===null&&ht.shift()}var En=lt.ReactCurrentBatchConfig,Pi=!0;function Hh(t,e,n,r){var i=x,o=En.transition;En.transition=null;try{x=1,Sl(t,e,n,r)}finally{x=i,En.transition=o}}function Vh(t,e,n,r){var i=x,o=En.transition;En.transition=null;try{x=4,Sl(t,e,n,r)}finally{x=i,En.transition=o}}function Sl(t,e,n,r){if(Pi){var i=Cs(t,e,n,r);if(i===null)Vo(t,e,r,Ri,n),Pa(t,r);else if($h(i,t,e,n,r))r.stopPropagation();else if(Pa(t,r),e&4&&-1<jh.indexOf(t)){for(;i!==null;){var o=Lr(i);if(o!==null&&Lc(o),o=Cs(t,e,n,r),o===null&&Vo(t,e,r,Ri,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vo(t,e,r,null,n)}}var Ri=null;function Cs(t,e,n,r){if(Ri=null,t=vl(r),t=$t(t),t!==null)if(e=on(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tc(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ri=t,null}function Fc(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Oh()){case yl:return 1;case Rc:return 4;case Ci:case Dh:return 16;case Oc:return 536870912;default:return 16}default:return 16}}var yt=null,El=null,ci=null;function jc(){if(ci)return ci;var t,e=El,n=e.length,r,i="value"in yt?yt.value:yt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return ci=i.slice(t,1<r?1-r:void 0)}function di(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xr(){return!0}function Oa(){return!1}function ke(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xr:Oa,this.isPropagationStopped=Oa,this}return W(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),e}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=ke(zn),Ar=W({},zn,{view:0,detail:0}),Wh=ke(Ar),xo,Mo,Kn,no=W({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kn&&(Kn&&t.type==="mousemove"?(xo=t.screenX-Kn.screenX,Mo=t.screenY-Kn.screenY):Mo=xo=0,Kn=t),xo)},movementY:function(t){return"movementY"in t?t.movementY:Mo}}),Da=ke(no),Kh=W({},no,{dataTransfer:0}),Gh=ke(Kh),Qh=W({},Ar,{relatedTarget:0}),Uo=ke(Qh),bh=W({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Yh=ke(bh),Xh=W({},zn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jh=ke(Xh),qh=W({},zn,{data:0}),Aa=ke(qh),Zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function np(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tp[t])?!!e[t]:!1}function Il(){return np}var rp=W({},Ar,{key:function(t){if(t.key){var e=Zh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=di(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ep[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(t){return t.type==="keypress"?di(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?di(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ip=ke(rp),op=W({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),La=ke(op),sp=W({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),lp=ke(sp),ap=W({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),up=ke(ap),cp=W({},no,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dp=ke(cp),fp=[9,13,27,32],Tl=nt&&"CompositionEvent"in window,tr=null;nt&&"documentMode"in document&&(tr=document.documentMode);var hp=nt&&"TextEvent"in window&&!tr,$c=nt&&(!Tl||tr&&8<tr&&11>=tr),xa=String.fromCharCode(32),Ma=!1;function Bc(t,e){switch(t){case"keyup":return fp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var un=!1;function pp(t,e){switch(t){case"compositionend":return Hc(e);case"keypress":return e.which!==32?null:(Ma=!0,xa);case"textInput":return t=e.data,t===xa&&Ma?null:t;default:return null}}function mp(t,e){if(un)return t==="compositionend"||!Tl&&Bc(t,e)?(t=jc(),ci=El=yt=null,un=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $c&&e.locale!=="ko"?null:e.data;default:return null}}var gp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ua(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gp[t.type]:e==="textarea"}function Vc(t,e,n,r){wc(r),e=Oi(e,"onChange"),0<e.length&&(n=new kl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var nr=null,gr=null;function vp(t){ed(t,0)}function ro(t){var e=fn(t);if(hc(e))return t}function yp(t,e){if(t==="change")return e}var Wc=!1;if(nt){var zo;if(nt){var Fo="oninput"in document;if(!Fo){var za=document.createElement("div");za.setAttribute("oninput","return;"),Fo=typeof za.oninput=="function"}zo=Fo}else zo=!1;Wc=zo&&(!document.documentMode||9<document.documentMode)}function Fa(){nr&&(nr.detachEvent("onpropertychange",Kc),gr=nr=null)}function Kc(t){if(t.propertyName==="value"&&ro(gr)){var e=[];Vc(e,gr,t,vl(t)),Ic(vp,e)}}function _p(t,e,n){t==="focusin"?(Fa(),nr=e,gr=n,nr.attachEvent("onpropertychange",Kc)):t==="focusout"&&Fa()}function wp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ro(gr)}function Sp(t,e){if(t==="click")return ro(e)}function Ep(t,e){if(t==="input"||t==="change")return ro(e)}function kp(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fe=typeof Object.is=="function"?Object.is:kp;function vr(t,e){if(Fe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!as.call(e,i)||!Fe(t[i],e[i]))return!1}return!0}function ja(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $a(t,e){var n=ja(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ja(n)}}function Gc(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gc(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qc(){for(var t=window,e=ki();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ki(t.document)}return e}function Cl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ip(t){var e=Qc(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gc(n.ownerDocument.documentElement,n)){if(r!==null&&Cl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=$a(n,o);var s=$a(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Tp=nt&&"documentMode"in document&&11>=document.documentMode,cn=null,Ns=null,rr=null,Ps=!1;function Ba(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ps||cn==null||cn!==ki(r)||(r=cn,"selectionStart"in r&&Cl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&vr(rr,r)||(rr=r,r=Oi(Ns,"onSelect"),0<r.length&&(e=new kl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cn)))}function Jr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dn={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},jo={},bc={};nt&&(bc=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function io(t){if(jo[t])return jo[t];if(!dn[t])return t;var e=dn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bc)return jo[t]=e[n];return t}var Yc=io("animationend"),Xc=io("animationiteration"),Jc=io("animationstart"),qc=io("transitionend"),Zc=new Map,Ha="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function At(t,e){Zc.set(t,e),rn(e,[t])}for(var $o=0;$o<Ha.length;$o++){var Bo=Ha[$o],Cp=Bo.toLowerCase(),Np=Bo[0].toUpperCase()+Bo.slice(1);At(Cp,"on"+Np)}At(Yc,"onAnimationEnd");At(Xc,"onAnimationIteration");At(Jc,"onAnimationStart");At("dblclick","onDoubleClick");At("focusin","onFocus");At("focusout","onBlur");At(qc,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function Va(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ch(r,e,void 0,t),t.currentTarget=null}function ed(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Va(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Va(i,l,u),o=a}}}if(Ti)throw t=ks,Ti=!1,ks=null,t}function j(t,e){var n=e[Ls];n===void 0&&(n=e[Ls]=new Set);var r=t+"__bubble";n.has(r)||(td(e,t,2,!1),n.add(r))}function Ho(t,e,n){var r=0;e&&(r|=4),td(n,t,r,e)}var qr="_reactListening"+Math.random().toString(36).slice(2);function yr(t){if(!t[qr]){t[qr]=!0,ac.forEach(function(n){n!=="selectionchange"&&(Pp.has(n)||Ho(n,!1,t),Ho(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qr]||(e[qr]=!0,Ho("selectionchange",!1,e))}}function td(t,e,n,r){switch(Fc(e)){case 1:var i=Hh;break;case 4:i=Vh;break;default:i=Sl}n=i.bind(null,e,n,t),i=void 0,!Es||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vo(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=$t(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Ic(function(){var u=o,p=vl(n),m=[];e:{var h=Zc.get(t);if(h!==void 0){var y=kl,_=t;switch(t){case"keypress":if(di(n)===0)break e;case"keydown":case"keyup":y=ip;break;case"focusin":_="focus",y=Uo;break;case"focusout":_="blur",y=Uo;break;case"beforeblur":case"afterblur":y=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Da;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=lp;break;case Yc:case Xc:case Jc:y=Yh;break;case qc:y=up;break;case"scroll":y=Wh;break;case"wheel":y=dp;break;case"copy":case"cut":case"paste":y=Jh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=La}var w=(e&4)!==0,M=!w&&t==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=fr(c,d),g!=null&&w.push(_r(c,g,f)))),M)break;c=c.return}0<w.length&&(h=new y(h,_,null,n,p),m.push({event:h,listeners:w}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==ws&&(_=n.relatedTarget||n.fromElement)&&($t(_)||_[rt]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?$t(_):null,_!==null&&(M=on(_),_!==M||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(w=Da,g="onMouseLeave",d="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(w=La,g="onPointerLeave",d="onPointerEnter",c="pointer"),M=y==null?h:fn(y),f=_==null?h:fn(_),h=new w(g,c+"leave",y,n,p),h.target=M,h.relatedTarget=f,g=null,$t(p)===u&&(w=new w(d,c+"enter",_,n,p),w.target=f,w.relatedTarget=M,g=w),M=g,y&&_)t:{for(w=y,d=_,c=0,f=w;f;f=sn(f))c++;for(f=0,g=d;g;g=sn(g))f++;for(;0<c-f;)w=sn(w),c--;for(;0<f-c;)d=sn(d),f--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=sn(w),d=sn(d)}w=null}else w=null;y!==null&&Wa(m,h,y,w,!1),_!==null&&M!==null&&Wa(m,M,_,w,!0)}}e:{if(h=u?fn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var S=yp;else if(Ua(h))if(Wc)S=Ep;else{S=wp;var I=_p}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=Sp);if(S&&(S=S(t,u))){Vc(m,S,n,p);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&ms(h,"number",h.value)}switch(I=u?fn(u):window,t){case"focusin":(Ua(I)||I.contentEditable==="true")&&(cn=I,Ns=u,rr=null);break;case"focusout":rr=Ns=cn=null;break;case"mousedown":Ps=!0;break;case"contextmenu":case"mouseup":case"dragend":Ps=!1,Ba(m,n,p);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":Ba(m,n,p)}var T;if(Tl)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else un?Bc(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&($c&&n.locale!=="ko"&&(un||C!=="onCompositionStart"?C==="onCompositionEnd"&&un&&(T=jc()):(yt=p,El="value"in yt?yt.value:yt.textContent,un=!0)),I=Oi(u,C),0<I.length&&(C=new Aa(C,t,null,n,p),m.push({event:C,listeners:I}),T?C.data=T:(T=Hc(n),T!==null&&(C.data=T)))),(T=hp?pp(t,n):mp(t,n))&&(u=Oi(u,"onBeforeInput"),0<u.length&&(p=new Aa("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=T))}ed(m,e)})}function _r(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oi(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=fr(t,n),o!=null&&r.unshift(_r(t,o,i)),o=fr(t,e),o!=null&&r.push(_r(t,o,i))),t=t.return}return r}function sn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wa(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=fr(n,o),a!=null&&s.unshift(_r(n,a,l))):i||(a=fr(n,o),a!=null&&s.push(_r(n,a,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Rp=/\r\n?/g,Op=/\u0000|\uFFFD/g;function Ka(t){return(typeof t=="string"?t:""+t).replace(Rp,`
`).replace(Op,"")}function Zr(t,e,n){if(e=Ka(e),Ka(t)!==e&&n)throw Error(v(425))}function Di(){}var Rs=null,Os=null;function Ds(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var As=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,Ap=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(t){return Ga.resolve(null).then(t).catch(Lp)}:As;function Lp(t){setTimeout(function(){throw t})}function Wo(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),mr(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);mr(e)}function kt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qa(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fn=Math.random().toString(36).slice(2),Be="__reactFiber$"+Fn,wr="__reactProps$"+Fn,rt="__reactContainer$"+Fn,Ls="__reactEvents$"+Fn,xp="__reactListeners$"+Fn,Mp="__reactHandles$"+Fn;function $t(t){var e=t[Be];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rt]||n[Be]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qa(t);t!==null;){if(n=t[Be])return n;t=Qa(t)}return e}t=n,n=t.parentNode}return null}function Lr(t){return t=t[Be]||t[rt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(v(33))}function oo(t){return t[wr]||null}var xs=[],hn=-1;function Lt(t){return{current:t}}function $(t){0>hn||(t.current=xs[hn],xs[hn]=null,hn--)}function z(t,e){hn++,xs[hn]=t.current,t.current=e}var Dt={},le=Lt(Dt),me=Lt(!1),bt=Dt;function Pn(t,e){var n=t.type.contextTypes;if(!n)return Dt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ge(t){return t=t.childContextTypes,t!=null}function Ai(){$(me),$(le)}function ba(t,e,n){if(le.current!==Dt)throw Error(v(168));z(le,e),z(me,n)}function nd(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(v(108,_h(t)||"Unknown",i));return W({},n,r)}function Li(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dt,bt=le.current,z(le,t),z(me,me.current),!0}function Ya(t,e,n){var r=t.stateNode;if(!r)throw Error(v(169));n?(t=nd(t,e,bt),r.__reactInternalMemoizedMergedChildContext=t,$(me),$(le),z(le,t)):$(me),z(me,n)}var be=null,so=!1,Ko=!1;function rd(t){be===null?be=[t]:be.push(t)}function Up(t){so=!0,rd(t)}function xt(){if(!Ko&&be!==null){Ko=!0;var t=0,e=x;try{var n=be;for(x=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}be=null,so=!1}catch(i){throw be!==null&&(be=be.slice(t+1)),Pc(yl,xt),i}finally{x=e,Ko=!1}}return null}var pn=[],mn=0,xi=null,Mi=0,Te=[],Ce=0,Yt=null,Xe=1,Je="";function zt(t,e){pn[mn++]=Mi,pn[mn++]=xi,xi=t,Mi=e}function id(t,e,n){Te[Ce++]=Xe,Te[Ce++]=Je,Te[Ce++]=Yt,Yt=t;var r=Xe;t=Je;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var o=32-Ue(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xe=1<<32-Ue(e)+i|n<<i|r,Je=o+t}else Xe=1<<o|n<<i|r,Je=t}function Nl(t){t.return!==null&&(zt(t,1),id(t,1,0))}function Pl(t){for(;t===xi;)xi=pn[--mn],pn[mn]=null,Mi=pn[--mn],pn[mn]=null;for(;t===Yt;)Yt=Te[--Ce],Te[Ce]=null,Je=Te[--Ce],Te[Ce]=null,Xe=Te[--Ce],Te[Ce]=null}var we=null,_e=null,B=!1,Me=null;function od(t,e){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xa(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,we=t,_e=kt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,we=t,_e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yt!==null?{id:Xe,overflow:Je}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,we=t,_e=null,!0):!1;default:return!1}}function Ms(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Us(t){if(B){var e=_e;if(e){var n=e;if(!Xa(t,e)){if(Ms(t))throw Error(v(418));e=kt(n.nextSibling);var r=we;e&&Xa(t,e)?od(r,n):(t.flags=t.flags&-4097|2,B=!1,we=t)}}else{if(Ms(t))throw Error(v(418));t.flags=t.flags&-4097|2,B=!1,we=t}}}function Ja(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;we=t}function ei(t){if(t!==we)return!1;if(!B)return Ja(t),B=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ds(t.type,t.memoizedProps)),e&&(e=_e)){if(Ms(t))throw sd(),Error(v(418));for(;e;)od(t,e),e=kt(e.nextSibling)}if(Ja(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_e=kt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_e=null}}else _e=we?kt(t.stateNode.nextSibling):null;return!0}function sd(){for(var t=_e;t;)t=kt(t.nextSibling)}function Rn(){_e=we=null,B=!1}function Rl(t){Me===null?Me=[t]:Me.push(t)}var zp=lt.ReactCurrentBatchConfig;function Le(t,e){if(t&&t.defaultProps){e=W({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ui=Lt(null),zi=null,gn=null,Ol=null;function Dl(){Ol=gn=zi=null}function Al(t){var e=Ui.current;$(Ui),t._currentValue=e}function zs(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function kn(t,e){zi=t,Ol=gn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(pe=!0),t.firstContext=null)}function Re(t){var e=t._currentValue;if(Ol!==t)if(t={context:t,memoizedValue:e,next:null},gn===null){if(zi===null)throw Error(v(308));gn=t,zi.dependencies={lanes:0,firstContext:t}}else gn=gn.next=t;return e}var Bt=null;function Ll(t){Bt===null?Bt=[t]:Bt.push(t)}function ld(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ll(e)):(n.next=i.next,i.next=n),e.interleaved=n,it(t,r)}function it(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ft=!1;function xl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ad(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function It(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(L&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,it(t,n)}return i=r.interleaved,i===null?(e.next=e,Ll(r)):(e.next=i.next,i.next=e),r.interleaved=e,it(t,n)}function fi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_l(t,n)}}function qa(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fi(t,e,n,r){var i=t.updateQueue;ft=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=a))}if(o!==null){var m=i.baseState;s=0,p=u=a=null,l=o;do{var h=l.lane,y=l.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,w=l;switch(h=e,y=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){m=_.call(y,m,h);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(y,m,h):_,h==null)break e;m=W({},m,h);break e;case 2:ft=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=y,a=m):p=p.next=y,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(p===null&&(a=m),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Jt|=s,t.lanes=s,t.memoizedState=m}}function Za(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var ud=new lc.Component().refs;function Fs(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:W({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lo={isMounted:function(t){return(t=t._reactInternals)?on(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ce(),i=Ct(t),o=tt(r,i);o.payload=e,n!=null&&(o.callback=n),e=It(t,o,i),e!==null&&(ze(e,t,i,r),fi(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ce(),i=Ct(t),o=tt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=It(t,o,i),e!==null&&(ze(e,t,i,r),fi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ce(),r=Ct(t),i=tt(n,r);i.tag=2,e!=null&&(i.callback=e),e=It(t,i,r),e!==null&&(ze(e,t,r,n),fi(e,t,r))}};function eu(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!vr(n,r)||!vr(i,o):!0}function cd(t,e,n){var r=!1,i=Dt,o=e.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=ge(e)?bt:le.current,r=e.contextTypes,o=(r=r!=null)?Pn(t,i):Dt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function tu(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lo.enqueueReplaceState(e,e.state,null)}function js(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ud,xl(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=ge(e)?bt:le.current,i.context=Pn(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Fs(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lo.enqueueReplaceState(i,i.state,null),Fi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gn(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;l===ud&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,t))}return t}function ti(t,e){throw t=Object.prototype.toString.call(e),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nu(t){var e=t._init;return e(t._payload)}function dd(t){function e(d,c){if(t){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!t)return null;for(;c!==null;)e(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=Nt(d,c),d.index=0,d.sibling=null,d}function o(d,c,f){return d.index=f,t?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,g){return c===null||c.tag!==6?(c=qo(f,d.mode,g),c.return=d,c):(c=i(c,f),c.return=d,c)}function a(d,c,f,g){var S=f.type;return S===an?p(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dt&&nu(S)===c.type)?(g=i(c,f.props),g.ref=Gn(d,c,f),g.return=d,g):(g=yi(f.type,f.key,f.props,null,d.mode,g),g.ref=Gn(d,c,f),g.return=d,g)}function u(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Zo(f,d.mode,g),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function p(d,c,f,g,S){return c===null||c.tag!==7?(c=Kt(f,d.mode,g,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=qo(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Wr:return f=yi(c.type,c.key,c.props,null,d.mode,f),f.ref=Gn(d,null,c),f.return=d,f;case ln:return c=Zo(c,d.mode,f),c.return=d,c;case dt:var g=c._init;return m(d,g(c._payload),f)}if(Xn(c)||Bn(c))return c=Kt(c,d.mode,f,null),c.return=d,c;ti(d,c)}return null}function h(d,c,f,g){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:l(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:return f.key===S?a(d,c,f,g):null;case ln:return f.key===S?u(d,c,f,g):null;case dt:return S=f._init,h(d,c,S(f._payload),g)}if(Xn(f)||Bn(f))return S!==null?null:p(d,c,f,g,null);ti(d,f)}return null}function y(d,c,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,l(c,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wr:return d=d.get(g.key===null?f:g.key)||null,a(c,d,g,S);case ln:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,S);case dt:var I=g._init;return y(d,c,f,I(g._payload),S)}if(Xn(g)||Bn(g))return d=d.get(f)||null,p(c,d,g,S,null);ti(c,g)}return null}function _(d,c,f,g){for(var S=null,I=null,T=c,C=c=0,F=null;T!==null&&C<f.length;C++){T.index>C?(F=T,T=null):F=T.sibling;var O=h(d,T,f[C],g);if(O===null){T===null&&(T=F);break}t&&T&&O.alternate===null&&e(d,T),c=o(O,c,C),I===null?S=O:I.sibling=O,I=O,T=F}if(C===f.length)return n(d,T),B&&zt(d,C),S;if(T===null){for(;C<f.length;C++)T=m(d,f[C],g),T!==null&&(c=o(T,c,C),I===null?S=T:I.sibling=T,I=T);return B&&zt(d,C),S}for(T=r(d,T);C<f.length;C++)F=y(T,d,C,f[C],g),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?C:F.key),c=o(F,c,C),I===null?S=F:I.sibling=F,I=F);return t&&T.forEach(function(De){return e(d,De)}),B&&zt(d,C),S}function w(d,c,f,g){var S=Bn(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var I=S=null,T=c,C=c=0,F=null,O=f.next();T!==null&&!O.done;C++,O=f.next()){T.index>C?(F=T,T=null):F=T.sibling;var De=h(d,T,O.value,g);if(De===null){T===null&&(T=F);break}t&&T&&De.alternate===null&&e(d,T),c=o(De,c,C),I===null?S=De:I.sibling=De,I=De,T=F}if(O.done)return n(d,T),B&&zt(d,C),S;if(T===null){for(;!O.done;C++,O=f.next())O=m(d,O.value,g),O!==null&&(c=o(O,c,C),I===null?S=O:I.sibling=O,I=O);return B&&zt(d,C),S}for(T=r(d,T);!O.done;C++,O=f.next())O=y(T,d,C,O.value,g),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?C:O.key),c=o(O,c,C),I===null?S=O:I.sibling=O,I=O);return t&&T.forEach(function(jn){return e(d,jn)}),B&&zt(d,C),S}function M(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===an&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Wr:e:{for(var S=f.key,I=c;I!==null;){if(I.key===S){if(S=f.type,S===an){if(I.tag===7){n(d,I.sibling),c=i(I,f.props.children),c.return=d,d=c;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dt&&nu(S)===I.type){n(d,I.sibling),c=i(I,f.props),c.ref=Gn(d,I,f),c.return=d,d=c;break e}n(d,I);break}else e(d,I);I=I.sibling}f.type===an?(c=Kt(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=yi(f.type,f.key,f.props,null,d.mode,g),g.ref=Gn(d,c,f),g.return=d,d=g)}return s(d);case ln:e:{for(I=f.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else e(d,c);c=c.sibling}c=Zo(f,d.mode,g),c.return=d,d=c}return s(d);case dt:return I=f._init,M(d,c,I(f._payload),g)}if(Xn(f))return _(d,c,f,g);if(Bn(f))return w(d,c,f,g);ti(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=qo(f,d.mode,g),c.return=d,d=c),s(d)):n(d,c)}return M}var On=dd(!0),fd=dd(!1),xr={},Ve=Lt(xr),Sr=Lt(xr),Er=Lt(xr);function Ht(t){if(t===xr)throw Error(v(174));return t}function Ml(t,e){switch(z(Er,e),z(Sr,t),z(Ve,xr),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vs(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vs(e,t)}$(Ve),z(Ve,e)}function Dn(){$(Ve),$(Sr),$(Er)}function hd(t){Ht(Er.current);var e=Ht(Ve.current),n=vs(e,t.type);e!==n&&(z(Sr,t),z(Ve,n))}function Ul(t){Sr.current===t&&($(Ve),$(Sr))}var H=Lt(0);function ji(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Go=[];function zl(){for(var t=0;t<Go.length;t++)Go[t]._workInProgressVersionPrimary=null;Go.length=0}var hi=lt.ReactCurrentDispatcher,Qo=lt.ReactCurrentBatchConfig,Xt=0,V=null,Y=null,q=null,$i=!1,ir=!1,kr=0,Fp=0;function ie(){throw Error(v(321))}function Fl(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fe(t[n],e[n]))return!1;return!0}function jl(t,e,n,r,i,o){if(Xt=o,V=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hi.current=t===null||t.memoizedState===null?Hp:Vp,t=n(r,i),ir){o=0;do{if(ir=!1,kr=0,25<=o)throw Error(v(301));o+=1,q=Y=null,e.updateQueue=null,hi.current=Wp,t=n(r,i)}while(ir)}if(hi.current=Bi,e=Y!==null&&Y.next!==null,Xt=0,q=Y=V=null,$i=!1,e)throw Error(v(300));return t}function $l(){var t=kr!==0;return kr=0,t}function $e(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=t:q=q.next=t,q}function Oe(){if(Y===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=Y.next;var e=q===null?V.memoizedState:q.next;if(e!==null)q=e,Y=t;else{if(t===null)throw Error(v(310));Y=t,t={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?V.memoizedState=q=t:q=q.next=t}return q}function Ir(t,e){return typeof e=="function"?e(t):e}function bo(t){var e=Oe(),n=e.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=Y,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var p=u.lane;if((Xt&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=m,s=r):a=a.next=m,V.lanes|=p,Jt|=p}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Fe(r,e.memoizedState)||(pe=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,V.lanes|=o,Jt|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yo(t){var e=Oe(),n=e.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Fe(o,e.memoizedState)||(pe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function pd(){}function md(t,e){var n=V,r=Oe(),i=e(),o=!Fe(r.memoizedState,i);if(o&&(r.memoizedState=i,pe=!0),r=r.queue,Bl(yd.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Tr(9,vd.bind(null,n,r,i,e),void 0,null),ee===null)throw Error(v(349));(Xt&30)!==0||gd(n,e,i)}return i}function gd(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vd(t,e,n,r){e.value=n,e.getSnapshot=r,_d(e)&&wd(t)}function yd(t,e,n){return n(function(){_d(e)&&wd(t)})}function _d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fe(t,n)}catch{return!0}}function wd(t){var e=it(t,1);e!==null&&ze(e,t,1,-1)}function ru(t){var e=$e();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:t},e.queue=t,t=t.dispatch=Bp.bind(null,V,t),[e.memoizedState,t]}function Tr(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=V.updateQueue,e===null?(e={lastEffect:null,stores:null},V.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Sd(){return Oe().memoizedState}function pi(t,e,n,r){var i=$e();V.flags|=t,i.memoizedState=Tr(1|e,n,void 0,r===void 0?null:r)}function ao(t,e,n,r){var i=Oe();r=r===void 0?null:r;var o=void 0;if(Y!==null){var s=Y.memoizedState;if(o=s.destroy,r!==null&&Fl(r,s.deps)){i.memoizedState=Tr(e,n,o,r);return}}V.flags|=t,i.memoizedState=Tr(1|e,n,o,r)}function iu(t,e){return pi(8390656,8,t,e)}function Bl(t,e){return ao(2048,8,t,e)}function Ed(t,e){return ao(4,2,t,e)}function kd(t,e){return ao(4,4,t,e)}function Id(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Td(t,e,n){return n=n!=null?n.concat([t]):null,ao(4,4,Id.bind(null,e,t),n)}function Hl(){}function Cd(t,e){var n=Oe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fl(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Nd(t,e){var n=Oe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fl(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Pd(t,e,n){return(Xt&21)===0?(t.baseState&&(t.baseState=!1,pe=!0),t.memoizedState=n):(Fe(n,e)||(n=Dc(),V.lanes|=n,Jt|=n,t.baseState=!0),e)}function jp(t,e){var n=x;x=n!==0&&4>n?n:4,t(!0);var r=Qo.transition;Qo.transition={};try{t(!1),e()}finally{x=n,Qo.transition=r}}function Rd(){return Oe().memoizedState}function $p(t,e,n){var r=Ct(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Od(t))Dd(e,n);else if(n=ld(t,e,n,r),n!==null){var i=ce();ze(n,t,r,i),Ad(n,e,r)}}function Bp(t,e,n){var r=Ct(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Od(t))Dd(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Fe(l,s)){var a=e.interleaved;a===null?(i.next=i,Ll(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=ld(t,e,i,r),n!==null&&(i=ce(),ze(n,t,r,i),Ad(n,e,r))}}function Od(t){var e=t.alternate;return t===V||e!==null&&e===V}function Dd(t,e){ir=$i=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ad(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_l(t,n)}}var Bi={readContext:Re,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Hp={readContext:Re,useCallback:function(t,e){return $e().memoizedState=[t,e===void 0?null:e],t},useContext:Re,useEffect:iu,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pi(4194308,4,Id.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pi(4194308,4,t,e)},useInsertionEffect:function(t,e){return pi(4,2,t,e)},useMemo:function(t,e){var n=$e();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$e();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$p.bind(null,V,t),[r.memoizedState,t]},useRef:function(t){var e=$e();return t={current:t},e.memoizedState=t},useState:ru,useDebugValue:Hl,useDeferredValue:function(t){return $e().memoizedState=t},useTransition:function(){var t=ru(!1),e=t[0];return t=jp.bind(null,t[1]),$e().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=V,i=$e();if(B){if(n===void 0)throw Error(v(407));n=n()}else{if(n=e(),ee===null)throw Error(v(349));(Xt&30)!==0||gd(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,iu(yd.bind(null,r,o,t),[t]),r.flags|=2048,Tr(9,vd.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=$e(),e=ee.identifierPrefix;if(B){var n=Je,r=Xe;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=kr++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fp++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vp={readContext:Re,useCallback:Cd,useContext:Re,useEffect:Bl,useImperativeHandle:Td,useInsertionEffect:Ed,useLayoutEffect:kd,useMemo:Nd,useReducer:bo,useRef:Sd,useState:function(){return bo(Ir)},useDebugValue:Hl,useDeferredValue:function(t){var e=Oe();return Pd(e,Y.memoizedState,t)},useTransition:function(){var t=bo(Ir)[0],e=Oe().memoizedState;return[t,e]},useMutableSource:pd,useSyncExternalStore:md,useId:Rd,unstable_isNewReconciler:!1},Wp={readContext:Re,useCallback:Cd,useContext:Re,useEffect:Bl,useImperativeHandle:Td,useInsertionEffect:Ed,useLayoutEffect:kd,useMemo:Nd,useReducer:Yo,useRef:Sd,useState:function(){return Yo(Ir)},useDebugValue:Hl,useDeferredValue:function(t){var e=Oe();return Y===null?e.memoizedState=t:Pd(e,Y.memoizedState,t)},useTransition:function(){var t=Yo(Ir)[0],e=Oe().memoizedState;return[t,e]},useMutableSource:pd,useSyncExternalStore:md,useId:Rd,unstable_isNewReconciler:!1};function An(t,e){try{var n="",r=e;do n+=yh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Xo(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function $s(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kp=typeof WeakMap=="function"?WeakMap:Map;function Ld(t,e,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vi||(Vi=!0,Xs=r),$s(t,e)},n}function xd(t,e,n){n=tt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$s(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$s(t,e),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function ou(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Kp;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=om.bind(null,t,e,n),e.then(t,t))}function su(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lu(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tt(-1,1),e.tag=2,It(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var Gp=lt.ReactCurrentOwner,pe=!1;function ue(t,e,n,r){e.child=t===null?fd(e,null,n,r):On(e,t.child,n,r)}function au(t,e,n,r,i){n=n.render;var o=e.ref;return kn(e,i),r=jl(t,e,n,r,o,i),n=$l(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ot(t,e,i)):(B&&n&&Nl(e),e.flags|=1,ue(t,e,r,i),e.child)}function uu(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Xl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Md(t,e,o,r,i)):(t=yi(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(s,r)&&t.ref===e.ref)return ot(t,e,i)}return e.flags|=1,t=Nt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Md(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(vr(o,r)&&t.ref===e.ref)if(pe=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(pe=!0);else return e.lanes=t.lanes,ot(t,e,i)}return Bs(t,e,n,r,i)}function Ud(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(yn,ye),ye|=n;else{if((n&1073741824)===0)return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,z(yn,ye),ye|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(yn,ye),ye|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,z(yn,ye),ye|=r;return ue(t,e,i,n),e.child}function zd(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bs(t,e,n,r,i){var o=ge(n)?bt:le.current;return o=Pn(e,o),kn(e,i),n=jl(t,e,n,r,o,i),r=$l(),t!==null&&!pe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ot(t,e,i)):(B&&r&&Nl(e),e.flags|=1,ue(t,e,n,i),e.child)}function cu(t,e,n,r,i){if(ge(n)){var o=!0;Li(e)}else o=!1;if(kn(e,i),e.stateNode===null)mi(t,e),cd(e,n,r),js(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Re(u):(u=ge(n)?bt:le.current,u=Pn(e,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&tu(e,s,r,u),ft=!1;var h=e.memoizedState;s.state=h,Fi(e,r,s,i),a=e.memoizedState,l!==r||h!==a||me.current||ft?(typeof p=="function"&&(Fs(e,n,p,r),a=e.memoizedState),(l=ft||eu(e,n,l,r,h,a,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ad(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Le(e.type,l),s.props=u,m=e.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Re(a):(a=ge(n)?bt:le.current,a=Pn(e,a));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||h!==a)&&tu(e,s,r,a),ft=!1,h=e.memoizedState,s.state=h,Fi(e,r,s,i);var _=e.memoizedState;l!==m||h!==_||me.current||ft?(typeof y=="function"&&(Fs(e,n,y,r),_=e.memoizedState),(u=ft||eu(e,n,u,r,h,_,a)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,a)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),s.props=r,s.state=_,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Hs(t,e,n,r,o,i)}function Hs(t,e,n,r,i,o){zd(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Ya(e,n,!1),ot(t,e,o);r=e.stateNode,Gp.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=On(e,t.child,null,o),e.child=On(e,null,l,o)):ue(t,e,l,o),e.memoizedState=r.state,i&&Ya(e,n,!0),e.child}function Fd(t){var e=t.stateNode;e.pendingContext?ba(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ba(t,e.context,!1),Ml(t,e.containerInfo)}function du(t,e,n,r,i){return Rn(),Rl(i),e.flags|=256,ue(t,e,n,r),e.child}var Vs={dehydrated:null,treeContext:null,retryLane:0};function Ws(t){return{baseLanes:t,cachePool:null,transitions:null}}function jd(t,e,n){var r=e.pendingProps,i=H.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),z(H,i&1),t===null)return Us(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=fo(s,r,0,null),t=Kt(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ws(n),e.memoizedState=Vs,t):Vl(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Qp(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Nt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Nt(l,o):(o=Kt(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Ws(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Vs,r}return o=t.child,t=o.sibling,r=Nt(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Vl(t,e){return e=fo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ni(t,e,n,r){return r!==null&&Rl(r),On(e,t.child,null,n),t=Vl(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qp(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Xo(Error(v(422))),ni(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=fo({mode:"visible",children:r.children},i,0,null),o=Kt(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&On(e,t.child,null,s),e.child.memoizedState=Ws(s),e.memoizedState=Vs,o);if((e.mode&1)===0)return ni(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(v(419)),r=Xo(o,r,void 0),ni(t,e,s,r)}if(l=(s&t.childLanes)!==0,pe||l){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,it(t,i),ze(r,t,i,-1))}return Yl(),r=Xo(Error(v(421))),ni(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sm.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,_e=kt(i.nextSibling),we=e,B=!0,Me=null,t!==null&&(Te[Ce++]=Xe,Te[Ce++]=Je,Te[Ce++]=Yt,Xe=t.id,Je=t.overflow,Yt=e),e=Vl(e,r.children),e.flags|=4096,e)}function fu(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zs(t.return,e,n)}function Jo(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $d(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ue(t,e,r.children,n),r=H.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fu(t,n,e);else if(t.tag===19)fu(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(z(H,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ji(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Jo(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ji(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Jo(e,!0,n,null,o);break;case"together":Jo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mi(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ot(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jt|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(v(153));if(e.child!==null){for(t=e.child,n=Nt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bp(t,e,n){switch(e.tag){case 3:Fd(e),Rn();break;case 5:hd(e);break;case 1:ge(e.type)&&Li(e);break;case 4:Ml(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;z(Ui,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(z(H,H.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?jd(t,e,n):(z(H,H.current&1),t=ot(t,e,n),t!==null?t.sibling:null);z(H,H.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return $d(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(H,H.current),r)break;return null;case 22:case 23:return e.lanes=0,Ud(t,e,n)}return ot(t,e,n)}var Bd,Ks,Hd,Vd;Bd=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ks=function(){};Hd=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ht(Ve.current);var o=null;switch(n){case"input":i=hs(t,i),r=hs(t,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=gs(t,i),r=gs(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Di)}ys(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&j("scroll",t),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Vd=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qn(t,e){if(!B)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function oe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Yp(t,e,n){var r=e.pendingProps;switch(Pl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(e),null;case 1:return ge(e.type)&&Ai(),oe(e),null;case 3:return r=e.stateNode,Dn(),$(me),$(le),zl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ei(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Me!==null&&(Zs(Me),Me=null))),Ks(t,e),oe(e),null;case 5:Ul(e);var i=Ht(Er.current);if(n=e.type,t!==null&&e.stateNode!=null)Hd(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(v(166));return oe(e),null}if(t=Ht(Ve.current),ei(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Be]=e,r[wr]=o,t=(e.mode&1)!==0,n){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<qn.length;i++)j(qn[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":Sa(r,o),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},j("invalid",r);break;case"textarea":ka(r,o),j("invalid",r)}ys(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Zr(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Zr(r.textContent,l,t),i=["children",""+l]):cr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&j("scroll",r)}switch(n){case"input":Kr(r),Ea(r,o,!0);break;case"textarea":Kr(r),Ia(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Di)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gc(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Be]=e,t[wr]=r,Bd(t,e,!1,!1),e.stateNode=t;e:{switch(s=_s(n,r),n){case"dialog":j("cancel",t),j("close",t),i=r;break;case"iframe":case"object":case"embed":j("load",t),i=r;break;case"video":case"audio":for(i=0;i<qn.length;i++)j(qn[i],t);i=r;break;case"source":j("error",t),i=r;break;case"img":case"image":case"link":j("error",t),j("load",t),i=r;break;case"details":j("toggle",t),i=r;break;case"input":Sa(t,r),i=hs(t,r),j("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),j("invalid",t);break;case"textarea":ka(t,r),i=gs(t,r),j("invalid",t);break;default:i=r}ys(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?_c(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vc(t,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&dr(t,a):typeof a=="number"&&dr(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(cr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&j("scroll",t):a!=null&&hl(t,o,a,s))}switch(n){case"input":Kr(t),Ea(t,r,!1);break;case"textarea":Kr(t),Ia(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ot(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?_n(t,!!r.multiple,o,!1):r.defaultValue!=null&&_n(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return oe(e),null;case 6:if(t&&e.stateNode!=null)Vd(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(v(166));if(n=Ht(Er.current),Ht(Ve.current),ei(e)){if(r=e.stateNode,n=e.memoizedProps,r[Be]=e,(o=r.nodeValue!==n)&&(t=we,t!==null))switch(t.tag){case 3:Zr(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zr(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Be]=e,e.stateNode=r}return oe(e),null;case 13:if($(H),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(B&&_e!==null&&(e.mode&1)!==0&&(e.flags&128)===0)sd(),Rn(),e.flags|=98560,o=!1;else if(o=ei(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(v(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[Be]=e}else Rn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;oe(e),o=!1}else Me!==null&&(Zs(Me),Me=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(H.current&1)!==0?X===0&&(X=3):Yl())),e.updateQueue!==null&&(e.flags|=4),oe(e),null);case 4:return Dn(),Ks(t,e),t===null&&yr(e.stateNode.containerInfo),oe(e),null;case 10:return Al(e.type._context),oe(e),null;case 17:return ge(e.type)&&Ai(),oe(e),null;case 19:if($(H),o=e.memoizedState,o===null)return oe(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Qn(o,!1);else{if(X!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=ji(t),s!==null){for(e.flags|=128,Qn(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return z(H,H.current&1|2),e.child}t=t.sibling}o.tail!==null&&Q()>Ln&&(e.flags|=128,r=!0,Qn(o,!1),e.lanes=4194304)}else{if(!r)if(t=ji(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!B)return oe(e),null}else 2*Q()-o.renderingStartTime>Ln&&n!==1073741824&&(e.flags|=128,r=!0,Qn(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Q(),e.sibling=null,n=H.current,z(H,r?n&1|2:n&1),e):(oe(e),null);case 22:case 23:return bl(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ye&1073741824)!==0&&(oe(e),e.subtreeFlags&6&&(e.flags|=8192)):oe(e),null;case 24:return null;case 25:return null}throw Error(v(156,e.tag))}function Xp(t,e){switch(Pl(e),e.tag){case 1:return ge(e.type)&&Ai(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Dn(),$(me),$(le),zl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Ul(e),null;case 13:if($(H),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Rn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $(H),null;case 4:return Dn(),null;case 10:return Al(e.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var ri=!1,se=!1,Jp=typeof WeakSet=="function"?WeakSet:Set,E=null;function vn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(t,e,r)}else n.current=null}function Gs(t,e,n){try{n()}catch(r){K(t,e,r)}}var hu=!1;function qp(t,e){if(Rs=Pi,t=Qc(),Cl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,p=0,m=t,h=null;t:for(;;){for(var y;m!==n||i!==0&&m.nodeType!==3||(l=s+i),m!==o||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===t)break t;if(h===n&&++u===i&&(l=s),h===o&&++p===r&&(a=s),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Os={focusedElem:t,selectionRange:n},Pi=!1,E=e;E!==null;)if(e=E,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,E=t;else for(;E!==null;){e=E;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,M=_.memoizedState,d=e.stateNode,c=d.getSnapshotBeforeUpdate(e.elementType===e.type?w:Le(e.type,w),M);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=e.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){K(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,E=t;break}E=e.return}return _=hu,hu=!1,_}function or(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gs(e,n,o)}i=i.next}while(i!==r)}}function uo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qs(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wd(t){var e=t.alternate;e!==null&&(t.alternate=null,Wd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Be],delete e[wr],delete e[Ls],delete e[xp],delete e[Mp])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kd(t){return t.tag===5||t.tag===3||t.tag===4}function pu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bs(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Di));else if(r!==4&&(t=t.child,t!==null))for(bs(t,e,n),t=t.sibling;t!==null;)bs(t,e,n),t=t.sibling}function Ys(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ys(t,e,n),t=t.sibling;t!==null;)Ys(t,e,n),t=t.sibling}var te=null,xe=!1;function ut(t,e,n){for(n=n.child;n!==null;)Gd(t,e,n),n=n.sibling}function Gd(t,e,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(to,n)}catch{}switch(n.tag){case 5:se||vn(n,e);case 6:var r=te,i=xe;te=null,ut(t,e,n),te=r,xe=i,te!==null&&(xe?(t=te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(xe?(t=te,n=n.stateNode,t.nodeType===8?Wo(t.parentNode,n):t.nodeType===1&&Wo(t,n),mr(t)):Wo(te,n.stateNode));break;case 4:r=te,i=xe,te=n.stateNode.containerInfo,xe=!0,ut(t,e,n),te=r,xe=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Gs(n,e,s),i=i.next}while(i!==r)}ut(t,e,n);break;case 1:if(!se&&(vn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){K(n,e,l)}ut(t,e,n);break;case 21:ut(t,e,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,ut(t,e,n),se=r):ut(t,e,n);break;default:ut(t,e,n)}}function mu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jp),e.forEach(function(r){var i=lm.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ae(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:te=l.stateNode,xe=!1;break e;case 3:te=l.stateNode.containerInfo,xe=!0;break e;case 4:te=l.stateNode.containerInfo,xe=!0;break e}l=l.return}if(te===null)throw Error(v(160));Gd(o,s,i),te=null,xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){K(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qd(e,t),e=e.sibling}function Qd(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ae(e,t),je(t),r&4){try{or(3,t,t.return),uo(3,t)}catch(w){K(t,t.return,w)}try{or(5,t,t.return)}catch(w){K(t,t.return,w)}}break;case 1:Ae(e,t),je(t),r&512&&n!==null&&vn(n,n.return);break;case 5:if(Ae(e,t),je(t),r&512&&n!==null&&vn(n,n.return),t.flags&32){var i=t.stateNode;try{dr(i,"")}catch(w){K(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&pc(i,o),_s(l,s);var u=_s(l,o);for(s=0;s<a.length;s+=2){var p=a[s],m=a[s+1];p==="style"?_c(i,m):p==="dangerouslySetInnerHTML"?vc(i,m):p==="children"?dr(i,m):hl(i,p,m,u)}switch(l){case"input":ps(i,o);break;case"textarea":mc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?_n(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?_n(i,!!o.multiple,o.defaultValue,!0):_n(i,!!o.multiple,o.multiple?[]:"",!1))}i[wr]=o}catch(w){K(t,t.return,w)}}break;case 6:if(Ae(e,t),je(t),r&4){if(t.stateNode===null)throw Error(v(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){K(t,t.return,w)}}break;case 3:if(Ae(e,t),je(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(e.containerInfo)}catch(w){K(t,t.return,w)}break;case 4:Ae(e,t),je(t);break;case 13:Ae(e,t),je(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Gl=Q())),r&4&&mu(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(se=(u=se)||p,Ae(e,t),se=u):Ae(e,t),je(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!p&&(t.mode&1)!==0)for(E=t,p=t.child;p!==null;){for(m=E=p;E!==null;){switch(h=E,y=h.child,h.tag){case 0:case 11:case 14:case 15:or(4,h,h.return);break;case 1:vn(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){K(r,n,w)}}break;case 5:vn(h,h.return);break;case 22:if(h.memoizedState!==null){vu(m);continue}}y!==null?(y.return=h,E=y):vu(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=yc("display",s))}catch(w){K(t,t.return,w)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){K(t,t.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(e,t),je(t),r&4&&mu(t);break;case 21:break;default:Ae(e,t),je(t)}}function je(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kd(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(dr(i,""),r.flags&=-33);var o=pu(t);Ys(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=pu(t);bs(t,l,s);break;default:throw Error(v(161))}}catch(a){K(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zp(t,e,n){E=t,bd(t)}function bd(t,e,n){for(var r=(t.mode&1)!==0;E!==null;){var i=E,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ri;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||se;l=ri;var u=se;if(ri=s,(se=a)&&!u)for(E=i;E!==null;)s=E,a=s.child,s.tag===22&&s.memoizedState!==null?yu(i):a!==null?(a.return=s,E=a):yu(i);for(;o!==null;)E=o,bd(o),o=o.sibling;E=i,ri=l,se=u}gu(t)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,E=o):gu(t)}}function gu(t){for(;E!==null;){var e=E;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:se||uo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Le(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Za(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Za(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&mr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}se||e.flags&512&&Qs(e)}catch(h){K(e,e.return,h)}}if(e===t){E=null;break}if(n=e.sibling,n!==null){n.return=e.return,E=n;break}E=e.return}}function vu(t){for(;E!==null;){var e=E;if(e===t){E=null;break}var n=e.sibling;if(n!==null){n.return=e.return,E=n;break}E=e.return}}function yu(t){for(;E!==null;){var e=E;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uo(4,e)}catch(a){K(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){K(e,i,a)}}var o=e.return;try{Qs(e)}catch(a){K(e,o,a)}break;case 5:var s=e.return;try{Qs(e)}catch(a){K(e,s,a)}}}catch(a){K(e,e.return,a)}if(e===t){E=null;break}var l=e.sibling;if(l!==null){l.return=e.return,E=l;break}E=e.return}}var em=Math.ceil,Hi=lt.ReactCurrentDispatcher,Wl=lt.ReactCurrentOwner,Pe=lt.ReactCurrentBatchConfig,L=0,ee=null,b=null,ne=0,ye=0,yn=Lt(0),X=0,Cr=null,Jt=0,co=0,Kl=0,sr=null,he=null,Gl=0,Ln=1/0,Qe=null,Vi=!1,Xs=null,Tt=null,ii=!1,_t=null,Wi=0,lr=0,Js=null,gi=-1,vi=0;function ce(){return(L&6)!==0?Q():gi!==-1?gi:gi=Q()}function Ct(t){return(t.mode&1)===0?1:(L&2)!==0&&ne!==0?ne&-ne:zp.transition!==null?(vi===0&&(vi=Dc()),vi):(t=x,t!==0||(t=window.event,t=t===void 0?16:Fc(t.type)),t)}function ze(t,e,n,r){if(50<lr)throw lr=0,Js=null,Error(v(185));Dr(t,n,r),((L&2)===0||t!==ee)&&(t===ee&&((L&2)===0&&(co|=n),X===4&&pt(t,ne)),ve(t,r),n===1&&L===0&&(e.mode&1)===0&&(Ln=Q()+500,so&&xt()))}function ve(t,e){var n=t.callbackNode;zh(t,e);var r=Ni(t,t===ee?ne:0);if(r===0)n!==null&&Na(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Na(n),e===1)t.tag===0?Up(_u.bind(null,t)):rd(_u.bind(null,t)),Ap(function(){(L&6)===0&&xt()}),n=null;else{switch(Ac(r)){case 1:n=yl;break;case 4:n=Rc;break;case 16:n=Ci;break;case 536870912:n=Oc;break;default:n=Ci}n=nf(n,Yd.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yd(t,e){if(gi=-1,vi=0,(L&6)!==0)throw Error(v(327));var n=t.callbackNode;if(In()&&t.callbackNode!==n)return null;var r=Ni(t,t===ee?ne:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Ki(t,r);else{e=r;var i=L;L|=2;var o=Jd();(ee!==t||ne!==e)&&(Qe=null,Ln=Q()+500,Wt(t,e));do try{rm();break}catch(l){Xd(t,l)}while(1);Dl(),Hi.current=o,L=i,b!==null?e=0:(ee=null,ne=0,e=X)}if(e!==0){if(e===2&&(i=Is(t),i!==0&&(r=i,e=qs(t,i))),e===1)throw n=Cr,Wt(t,0),pt(t,r),ve(t,Q()),n;if(e===6)pt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!tm(i)&&(e=Ki(t,r),e===2&&(o=Is(t),o!==0&&(r=o,e=qs(t,o))),e===1))throw n=Cr,Wt(t,0),pt(t,r),ve(t,Q()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(v(345));case 2:Ft(t,he,Qe);break;case 3:if(pt(t,r),(r&130023424)===r&&(e=Gl+500-Q(),10<e)){if(Ni(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ce(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=As(Ft.bind(null,t,he,Qe),e);break}Ft(t,he,Qe);break;case 4:if(pt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Ue(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*em(r/1960))-r,10<r){t.timeoutHandle=As(Ft.bind(null,t,he,Qe),r);break}Ft(t,he,Qe);break;case 5:Ft(t,he,Qe);break;default:throw Error(v(329))}}}return ve(t,Q()),t.callbackNode===n?Yd.bind(null,t):null}function qs(t,e){var n=sr;return t.current.memoizedState.isDehydrated&&(Wt(t,e).flags|=256),t=Ki(t,e),t!==2&&(e=he,he=n,e!==null&&Zs(e)),t}function Zs(t){he===null?he=t:he.push.apply(he,t)}function tm(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fe(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pt(t,e){for(e&=~Kl,e&=~co,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ue(e),r=1<<n;t[n]=-1,e&=~r}}function _u(t){if((L&6)!==0)throw Error(v(327));In();var e=Ni(t,0);if((e&1)===0)return ve(t,Q()),null;var n=Ki(t,e);if(t.tag!==0&&n===2){var r=Is(t);r!==0&&(e=r,n=qs(t,r))}if(n===1)throw n=Cr,Wt(t,0),pt(t,e),ve(t,Q()),n;if(n===6)throw Error(v(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ft(t,he,Qe),ve(t,Q()),null}function Ql(t,e){var n=L;L|=1;try{return t(e)}finally{L=n,L===0&&(Ln=Q()+500,so&&xt())}}function qt(t){_t!==null&&_t.tag===0&&(L&6)===0&&In();var e=L;L|=1;var n=Pe.transition,r=x;try{if(Pe.transition=null,x=1,t)return t()}finally{x=r,Pe.transition=n,L=e,(L&6)===0&&xt()}}function bl(){ye=yn.current,$(yn)}function Wt(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dp(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(Pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ai();break;case 3:Dn(),$(me),$(le),zl();break;case 5:Ul(r);break;case 4:Dn();break;case 13:$(H);break;case 19:$(H);break;case 10:Al(r.type._context);break;case 22:case 23:bl()}n=n.return}if(ee=t,b=t=Nt(t.current,null),ne=ye=e,X=0,Cr=null,Kl=co=Jt=0,he=sr=null,Bt!==null){for(e=0;e<Bt.length;e++)if(n=Bt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Bt=null}return t}function Xd(t,e){do{var n=b;try{if(Dl(),hi.current=Bi,$i){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$i=!1}if(Xt=0,q=Y=V=null,ir=!1,kr=0,Wl.current=null,n===null||n.return===null){X=1,Cr=e,b=null;break}e:{var o=t,s=n.return,l=n,a=e;if(e=ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=l,m=p.tag;if((p.mode&1)===0&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=su(s);if(y!==null){y.flags&=-257,lu(y,s,l,o,e),y.mode&1&&ou(o,u,e),e=y,a=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(a),e.updateQueue=w}else _.add(a);break e}else{if((e&1)===0){ou(o,u,e),Yl();break e}a=Error(v(426))}}else if(B&&l.mode&1){var M=su(s);if(M!==null){(M.flags&65536)===0&&(M.flags|=256),lu(M,s,l,o,e),Rl(An(a,l));break e}}o=a=An(a,l),X!==4&&(X=2),sr===null?sr=[o]:sr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Ld(o,a,e);qa(o,d);break e;case 1:l=a;var c=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Tt===null||!Tt.has(f)))){o.flags|=65536,e&=-e,o.lanes|=e;var g=xd(o,l,e);qa(o,g);break e}}o=o.return}while(o!==null)}Zd(n)}catch(S){e=S,b===n&&n!==null&&(b=n=n.return);continue}break}while(1)}function Jd(){var t=Hi.current;return Hi.current=Bi,t===null?Bi:t}function Yl(){(X===0||X===3||X===2)&&(X=4),ee===null||(Jt&268435455)===0&&(co&268435455)===0||pt(ee,ne)}function Ki(t,e){var n=L;L|=2;var r=Jd();(ee!==t||ne!==e)&&(Qe=null,Wt(t,e));do try{nm();break}catch(i){Xd(t,i)}while(1);if(Dl(),L=n,Hi.current=r,b!==null)throw Error(v(261));return ee=null,ne=0,X}function nm(){for(;b!==null;)qd(b)}function rm(){for(;b!==null&&!Ph();)qd(b)}function qd(t){var e=tf(t.alternate,t,ye);t.memoizedProps=t.pendingProps,e===null?Zd(t):b=e,Wl.current=null}function Zd(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Yp(n,e,ye),n!==null){b=n;return}}else{if(n=Xp(n,e),n!==null){n.flags&=32767,b=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{X=6,b=null;return}}if(e=e.sibling,e!==null){b=e;return}b=e=t}while(e!==null);X===0&&(X=5)}function Ft(t,e,n){var r=x,i=Pe.transition;try{Pe.transition=null,x=1,im(t,e,n,r)}finally{Pe.transition=i,x=r}return null}function im(t,e,n,r){do In();while(_t!==null);if((L&6)!==0)throw Error(v(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(v(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Fh(t,o),t===ee&&(b=ee=null,ne=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ii||(ii=!0,nf(Ci,function(){return In(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Pe.transition,Pe.transition=null;var s=x;x=1;var l=L;L|=4,Wl.current=null,qp(t,n),Qd(n,t),Ip(Os),Pi=!!Rs,Os=Rs=null,t.current=n,Zp(n),Rh(),L=l,x=s,Pe.transition=o}else t.current=n;if(ii&&(ii=!1,_t=t,Wi=i),o=t.pendingLanes,o===0&&(Tt=null),Ah(n.stateNode),ve(t,Q()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vi)throw Vi=!1,t=Xs,Xs=null,t;return(Wi&1)!==0&&t.tag!==0&&In(),o=t.pendingLanes,(o&1)!==0?t===Js?lr++:(lr=0,Js=t):lr=0,xt(),null}function In(){if(_t!==null){var t=Ac(Wi),e=Pe.transition,n=x;try{if(Pe.transition=null,x=16>t?16:t,_t===null)var r=!1;else{if(t=_t,_t=null,Wi=0,(L&6)!==0)throw Error(v(331));var i=L;for(L|=4,E=t.current;E!==null;){var o=E,s=o.child;if((E.flags&16)!==0){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(E=u;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:or(8,p,o)}var m=p.child;if(m!==null)m.return=p,E=m;else for(;E!==null;){p=E;var h=p.sibling,y=p.return;if(Wd(p),p===u){E=null;break}if(h!==null){h.return=y,E=h;break}E=y}}}var _=o.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}E=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,E=s;else e:for(;E!==null;){if(o=E,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:or(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,E=d;break e}E=o.return}}var c=t.current;for(E=c;E!==null;){s=E;var f=s.child;if((s.subtreeFlags&2064)!==0&&f!==null)f.return=s,E=f;else e:for(s=c;E!==null;){if(l=E,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:uo(9,l)}}catch(S){K(l,l.return,S)}if(l===s){E=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,E=g;break e}E=l.return}}if(L=i,xt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(to,t)}catch{}r=!0}return r}finally{x=n,Pe.transition=e}}return!1}function wu(t,e,n){e=An(n,e),e=Ld(t,e,1),t=It(t,e,1),e=ce(),t!==null&&(Dr(t,1,e),ve(t,e))}function K(t,e,n){if(t.tag===3)wu(t,t,n);else for(;e!==null;){if(e.tag===3){wu(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){t=An(n,t),t=xd(e,t,1),e=It(e,t,1),t=ce(),e!==null&&(Dr(e,1,t),ve(e,t));break}}e=e.return}}function om(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ce(),t.pingedLanes|=t.suspendedLanes&n,ee===t&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>Q()-Gl?Wt(t,0):Kl|=n),ve(t,e)}function ef(t,e){e===0&&((t.mode&1)===0?e=1:(e=br,br<<=1,(br&130023424)===0&&(br=4194304)));var n=ce();t=it(t,e),t!==null&&(Dr(t,e,n),ve(t,n))}function sm(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ef(t,n)}function lm(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(e),ef(t,n)}var tf;tf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||me.current)pe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return pe=!1,bp(t,e,n);pe=(t.flags&131072)!==0}else pe=!1,B&&(e.flags&1048576)!==0&&id(e,Mi,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mi(t,e),t=e.pendingProps;var i=Pn(e,le.current);kn(e,n),i=jl(null,e,r,t,i,n);var o=$l();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ge(r)?(o=!0,Li(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xl(e),i.updater=lo,e.stateNode=i,i._reactInternals=e,js(e,r,t,n),e=Hs(null,e,r,!0,o,n)):(e.tag=0,B&&o&&Nl(e),ue(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mi(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=um(r),t=Le(r,t),i){case 0:e=Bs(null,e,r,t,n);break e;case 1:e=cu(null,e,r,t,n);break e;case 11:e=au(null,e,r,t,n);break e;case 14:e=uu(null,e,r,Le(r.type,t),n);break e}throw Error(v(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),Bs(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),cu(t,e,r,i,n);case 3:e:{if(Fd(e),t===null)throw Error(v(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ad(t,e),Fi(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=An(Error(v(423)),e),e=du(t,e,r,n,i);break e}else if(r!==i){i=An(Error(v(424)),e),e=du(t,e,r,n,i);break e}else for(_e=kt(e.stateNode.containerInfo.firstChild),we=e,B=!0,Me=null,n=fd(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),r===i){e=ot(t,e,n);break e}ue(t,e,r,n)}e=e.child}return e;case 5:return hd(e),t===null&&Us(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ds(r,i)?s=null:o!==null&&Ds(r,o)&&(e.flags|=32),zd(t,e),ue(t,e,s,n),e.child;case 6:return t===null&&Us(e),null;case 13:return jd(t,e,n);case 4:return Ml(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=On(e,null,r,n):ue(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),au(t,e,r,i,n);case 7:return ue(t,e,e.pendingProps,n),e.child;case 8:return ue(t,e,e.pendingProps.children,n),e.child;case 12:return ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,z(Ui,r._currentValue),r._currentValue=s,o!==null)if(Fe(o.value,s)){if(o.children===i.children&&!me.current){e=ot(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=tt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zs(o.return,n,e),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(v(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zs(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ue(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,kn(e,n),i=Re(i),r=r(i),e.flags|=1,ue(t,e,r,n),e.child;case 14:return r=e.type,i=Le(r,e.pendingProps),i=Le(r.type,i),uu(t,e,r,i,n);case 15:return Md(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Le(r,i),mi(t,e),e.tag=1,ge(r)?(t=!0,Li(e)):t=!1,kn(e,n),cd(e,r,i),js(e,r,i,n),Hs(null,e,r,!0,t,n);case 19:return $d(t,e,n);case 22:return Ud(t,e,n)}throw Error(v(156,e.tag))};function nf(t,e){return Pc(t,e)}function am(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(t,e,n,r){return new am(t,e,n,r)}function Xl(t){return t=t.prototype,!(!t||!t.isReactComponent)}function um(t){if(typeof t=="function")return Xl(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ml)return 11;if(t===gl)return 14}return 2}function Nt(t,e){var n=t.alternate;return n===null?(n=Ne(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yi(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Xl(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case an:return Kt(n.children,i,o,e);case pl:s=8,i|=8;break;case us:return t=Ne(12,n,e,i|2),t.elementType=us,t.lanes=o,t;case cs:return t=Ne(13,n,e,i),t.elementType=cs,t.lanes=o,t;case ds:return t=Ne(19,n,e,i),t.elementType=ds,t.lanes=o,t;case dc:return fo(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uc:s=10;break e;case cc:s=9;break e;case ml:s=11;break e;case gl:s=14;break e;case dt:s=16,r=null;break e}throw Error(v(130,t==null?t:typeof t,""))}return e=Ne(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Kt(t,e,n,r){return t=Ne(7,t,r,e),t.lanes=n,t}function fo(t,e,n,r){return t=Ne(22,t,r,e),t.elementType=dc,t.lanes=n,t.stateNode={isHidden:!1},t}function qo(t,e,n){return t=Ne(6,t,null,e),t.lanes=n,t}function Zo(t,e,n){return e=Ne(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lo(0),this.expirationTimes=Lo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jl(t,e,n,r,i,o,s,l,a){return t=new cm(t,e,n,l,a),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ne(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(o),t}function dm(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rf(t){if(!t)return Dt;t=t._reactInternals;e:{if(on(t)!==t||t.tag!==1)throw Error(v(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(v(171))}if(t.tag===1){var n=t.type;if(ge(n))return nd(t,n,e)}return e}function of(t,e,n,r,i,o,s,l,a){return t=Jl(n,r,!0,t,i,o,s,l,a),t.context=rf(null),n=t.current,r=ce(),i=Ct(n),o=tt(r,i),o.callback=e!=null?e:null,It(n,o,i),t.current.lanes=i,Dr(t,i,r),ve(t,r),t}function ho(t,e,n,r){var i=e.current,o=ce(),s=Ct(i);return n=rf(n),e.context===null?e.context=n:e.pendingContext=n,e=tt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=It(i,e,s),t!==null&&(ze(t,i,s,o),fi(t,i,s)),s}function Gi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Su(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ql(t,e){Su(t,e),(t=t.alternate)&&Su(t,e)}function fm(){return null}var sf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zl(t){this._internalRoot=t}po.prototype.render=Zl.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(v(409));ho(t,e,null,null)};po.prototype.unmount=Zl.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qt(function(){ho(null,t,null,null)}),e[rt]=null}};function po(t){this._internalRoot=t}po.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mc();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ht.length&&e!==0&&e<ht[n].priority;n++);ht.splice(n,0,t),n===0&&zc(t)}};function ea(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function hm(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Gi(s);o.call(u)}}var s=of(e,r,t,0,null,!1,!1,"",Eu);return t._reactRootContainer=s,t[rt]=s.current,yr(t.nodeType===8?t.parentNode:t),qt(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Gi(a);l.call(u)}}var a=Jl(t,0,!1,null,null,!1,!1,"",Eu);return t._reactRootContainer=a,t[rt]=a.current,yr(t.nodeType===8?t.parentNode:t),qt(function(){ho(e,a,n,r)}),a}function go(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Gi(s);l.call(a)}}ho(e,s,t,i)}else s=hm(n,e,t,i,r);return Gi(s)}Lc=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jn(e.pendingLanes);n!==0&&(_l(e,n|1),ve(e,Q()),(L&6)===0&&(Ln=Q()+500,xt()))}break;case 13:qt(function(){var r=it(t,1);if(r!==null){var i=ce();ze(r,t,1,i)}}),ql(t,1)}};wl=function(t){if(t.tag===13){var e=it(t,134217728);if(e!==null){var n=ce();ze(e,t,134217728,n)}ql(t,134217728)}};xc=function(t){if(t.tag===13){var e=Ct(t),n=it(t,e);if(n!==null){var r=ce();ze(n,t,e,r)}ql(t,e)}};Mc=function(){return x};Uc=function(t,e){var n=x;try{return x=t,e()}finally{x=n}};Ss=function(t,e,n){switch(e){case"input":if(ps(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oo(r);if(!i)throw Error(v(90));hc(r),ps(r,i)}}}break;case"textarea":mc(t,n);break;case"select":e=n.value,e!=null&&_n(t,!!n.multiple,e,!1)}};Ec=Ql;kc=qt;var pm={usingClientEntryPoint:!1,Events:[Lr,fn,oo,wc,Sc,Ql]},bn={findFiberByHostInstance:$t,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mm={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Cc(t),t===null?null:t.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||fm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{to=oi.inject(mm),He=oi}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pm;Ee.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ea(e))throw Error(v(200));return dm(t,e,null,n)};Ee.createRoot=function(t,e){if(!ea(t))throw Error(v(299));var n=!1,r="",i=sf;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jl(t,1,!1,null,null,n,!1,r,i),t[rt]=e.current,yr(t.nodeType===8?t.parentNode:t),new Zl(e)};Ee.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=Cc(e),t=t===null?null:t.stateNode,t};Ee.flushSync=function(t){return qt(t)};Ee.hydrate=function(t,e,n){if(!mo(e))throw Error(v(200));return go(null,t,e,!0,n)};Ee.hydrateRoot=function(t,e,n){if(!ea(t))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=sf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=of(e,null,t,1,n!=null?n:null,i,!1,o,s),t[rt]=e.current,yr(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new po(e)};Ee.render=function(t,e,n){if(!mo(e))throw Error(v(200));return go(null,t,e,!1,n)};Ee.unmountComponentAtNode=function(t){if(!mo(t))throw Error(v(40));return t._reactRootContainer?(qt(function(){go(null,null,t,!1,function(){t._reactRootContainer=null,t[rt]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ql;Ee.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!mo(n))throw Error(v(200));if(t==null||t._reactInternals===void 0)throw Error(v(38));return go(t,e,n,!1,r)};Ee.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Ee})(ic);var ku=ic.exports;ls.createRoot=ku.createRoot,ls.hydrateRoot=ku.hydrateRoot;const gm="/assets/User.4bac1a25.png";/**
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
 */const lf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vm=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],a=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let h=(l&15)<<2|u>>6,y=u&63;a||(y=64,s||(h=64)),r.push(n[p],n[m],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||m==null)throw Error();const h=o<<2|l>>4;if(r.push(h),u!==64){const y=l<<4&240|u>>2;if(r.push(y),m!==64){const _=u<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ym=function(t){const e=lf(t);return af.encodeByteArray(e,!0)},uf=function(t){return ym(t).replace(/\./g,"")},_m=function(t){try{return af.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class wm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function Em(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function km(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Im(){const t=ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tm(){return typeof indexedDB=="object"}function Cm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Nm="FirebaseError";class at extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nm,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Pm(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new at(i,l,r)}}function Pm(t,e){return t.replace(Rm,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Rm=/\{\$([^}]+)}/g;function Om(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Iu(o)&&Iu(s)){if(!Qi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Iu(t){return t!==null&&typeof t=="object"}/**
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
 */function Ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dm(t,e){const n=new Am(t,e);return n.subscribe.bind(n)}class Am{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=es),i.error===void 0&&(i.error=es),i.complete===void 0&&(i.complete=es);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function es(){}/**
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
 */function vo(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class xm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Um(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mm(t){return t===jt?void 0:t}function Um(t){return t.instantiationMode==="EAGER"}/**
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
 */class zm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));const Fm={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},jm=U.INFO,$m={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Bm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$m[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ta{constructor(e){this.name=e,this._logLevel=jm,this._logHandler=Bm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Hm=(t,e)=>e.some(n=>t instanceof n);let Tu,Cu;function Vm(){return Tu||(Tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wm(){return Cu||(Cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cf=new WeakMap,el=new WeakMap,df=new WeakMap,ts=new WeakMap,na=new WeakMap;function Km(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Pt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&cf.set(n,t)}).catch(()=>{}),na.set(e,t),e}function Gm(t){if(el.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||df.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qm(t){tl=t(tl)}function bm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ns(this),e,...n);return df.set(r,e.sort?e.sort():[e]),Pt(r)}:Wm().includes(t)?function(...e){return t.apply(ns(this),e),Pt(cf.get(this))}:function(...e){return Pt(t.apply(ns(this),e))}}function Ym(t){return typeof t=="function"?bm(t):(t instanceof IDBTransaction&&Gm(t),Hm(t,Vm())?new Proxy(t,tl):t)}function Pt(t){if(t instanceof IDBRequest)return Km(t);if(ts.has(t))return ts.get(t);const e=Ym(t);return e!==t&&(ts.set(t,e),na.set(e,t)),e}const ns=t=>na.get(t);function Xm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=Pt(s);return r&&s.addEventListener("upgradeneeded",a=>{r(Pt(s.result),a.oldVersion,a.newVersion,Pt(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),l.then(a=>{o&&a.addEventListener("close",()=>o()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Jm=["get","getKey","getAll","getAllKeys","count"],qm=["put","add","delete","clear"],rs=new Map;function Nu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rs.get(e))return rs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jm.includes(n)))return;const o=async function(s,...l){const a=this.transaction(s,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return rs.set(e,o),o}Qm(t=>({...t,get:(e,n,r)=>Nu(e,n)||t.get(e,n,r),has:(e,n)=>!!Nu(e,n)||t.has(e,n)}));/**
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
 */class Zm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",Pu="0.7.33";/**
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
 */const en=new ta("@firebase/app"),tg="@firebase/app-compat",ng="@firebase/analytics-compat",rg="@firebase/analytics",ig="@firebase/app-check-compat",og="@firebase/app-check",sg="@firebase/auth",lg="@firebase/auth-compat",ag="@firebase/database",ug="@firebase/database-compat",cg="@firebase/functions",dg="@firebase/functions-compat",fg="@firebase/installations",hg="@firebase/installations-compat",pg="@firebase/messaging",mg="@firebase/messaging-compat",gg="@firebase/performance",vg="@firebase/performance-compat",yg="@firebase/remote-config",_g="@firebase/remote-config-compat",wg="@firebase/storage",Sg="@firebase/storage-compat",Eg="@firebase/firestore",kg="@firebase/firestore-compat",Ig="firebase",Tg="9.10.0";/**
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
 */const ff="[DEFAULT]",Cg={[nl]:"fire-core",[tg]:"fire-core-compat",[rg]:"fire-analytics",[ng]:"fire-analytics-compat",[og]:"fire-app-check",[ig]:"fire-app-check-compat",[sg]:"fire-auth",[lg]:"fire-auth-compat",[ag]:"fire-rtdb",[ug]:"fire-rtdb-compat",[cg]:"fire-fn",[dg]:"fire-fn-compat",[fg]:"fire-iid",[hg]:"fire-iid-compat",[pg]:"fire-fcm",[mg]:"fire-fcm-compat",[gg]:"fire-perf",[vg]:"fire-perf-compat",[yg]:"fire-rc",[_g]:"fire-rc-compat",[wg]:"fire-gcs",[Sg]:"fire-gcs-compat",[Eg]:"fire-fst",[kg]:"fire-fst-compat","fire-js":"fire-js",[Ig]:"fire-js-all"};/**
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
 */const bi=new Map,rl=new Map;function Ng(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(rl.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;rl.set(e,t);for(const n of bi.values())Ng(n,t);return!0}function ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Pg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tn=new Mr("app","Firebase",Pg);/**
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
 */class Rg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=Tg;function Og(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ff,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw tn.create("bad-app-name",{appName:String(r)});const i=bi.get(r);if(i){if(Qi(t,i.options)&&Qi(n,i.config))return i;throw tn.create("duplicate-app",{appName:r})}const o=new zm(r);for(const l of rl.values())o.addComponent(l);const s=new Rg(t,n,o);return bi.set(r,s),s}function hf(t=ff){const e=bi.get(t);if(!e)throw tn.create("no-app",{appName:t});return e}function Rt(t,e,n){var r;let i=(r=Cg[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}xn(new Zt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Dg="firebase-heartbeat-database",Ag=1,Nr="firebase-heartbeat-store";let is=null;function pf(){return is||(is=Xm(Dg,Ag,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nr)}}}).catch(t=>{throw tn.create("idb-open",{originalErrorMessage:t.message})})),is}async function Lg(t){var e;try{return(await pf()).transaction(Nr).objectStore(Nr).get(mf(t))}catch(n){if(n instanceof at)en.warn(n.message);else{const r=tn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});en.warn(r.message)}}}async function Ru(t,e){var n;try{const i=(await pf()).transaction(Nr,"readwrite");return await i.objectStore(Nr).put(e,mf(t)),i.done}catch(r){if(r instanceof at)en.warn(r.message);else{const i=tn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});en.warn(i.message)}}}function mf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xg=1024,Mg=30*24*60*60*1e3;class Ug{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ou();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Mg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ou(),{heartbeatsToSend:n,unsentEntries:r}=zg(this._heartbeatsCache.heartbeats),i=uf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ou(){return new Date().toISOString().substring(0,10)}function zg(t,e=xg){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Du(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Du(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tm()?Cm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ru(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ru(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Du(t){return uf(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jg(t){xn(new Zt("platform-logger",e=>new Zm(e),"PRIVATE")),xn(new Zt("heartbeat",e=>new Ug(e),"PRIVATE")),Rt(nl,Pu,t),Rt(nl,Pu,"esm2017"),Rt("fire-js","")}jg("");function ia(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function gf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $g=gf,vf=new Mr("auth","Firebase",gf());/**
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
 */const Au=new ta("@firebase/auth");function _i(t,...e){Au.logLevel<=U.ERROR&&Au.error(`Auth (${zr}): ${t}`,...e)}/**
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
 */function Ge(t,...e){throw oa(t,...e)}function We(t,...e){return oa(t,...e)}function yf(t,e,n){const r=Object.assign(Object.assign({},$g()),{[e]:n});return new Mr("auth","Firebase",r).create(e,{appName:t.name})}function Bg(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(t,"argument-error"),yf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oa(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vf.create(t,...e)}function N(t,e,...n){if(!t)throw oa(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _i(e),new Error(e)}function st(t,e){t||qe(e)}/**
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
 */const Lu=new Map;function Ze(t){st(t instanceof Function,"Expected a class definition");let e=Lu.get(t);return e?(st(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lu.set(t,e),e)}/**
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
 */function Hg(t,e){const n=ra(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Qi(o,e!=null?e:{}))return i;Ge(i,"already-initialized")}return n.initialize({options:e})}function Vg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wg(){return xu()==="http:"||xu()==="https:"}function xu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Kg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wg()||Em()||"connection"in navigator)?navigator.onLine:!0}function Gg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fr{constructor(e,n){this.shortDelay=e,this.longDelay=n,st(n>e,"Short delay should be less than long delay!"),this.isMobile=Sm()||km()}get(){return Kg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sa(t,e){st(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _f{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const bg=new Fr(3e4,6e4);function Yg(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yo(t,e,n,r,i={}){return wf(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=Ur(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),_f.fetch()(Sf(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},o))})}async function wf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qg),e);try{const i=new Jg(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw si(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw si(t,"credential-already-in-use",s);if(a==="EMAIL_EXISTS")throw si(t,"email-already-in-use",s);if(a==="USER_DISABLED")throw si(t,"user-disabled",s);const p=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yf(t,p,u);Ge(t,p)}}catch(i){if(i instanceof at)throw i;Ge(t,"network-request-failed")}}async function Xg(t,e,n,r,i={}){const o=await yo(t,e,n,r,i);return"mfaPendingCredential"in o&&Ge(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Sf(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sa(t.config,i):`${t.config.apiScheme}://${i}`}class Jg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),bg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function si(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=We(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function qg(t,e){return yo(t,"POST","/v1/accounts:delete",e)}async function Zg(t,e){return yo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ar(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ev(t,e=!1){const n=vo(t),r=await n.getIdToken(e),i=la(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ar(os(i.auth_time)),issuedAtTime:ar(os(i.iat)),expirationTime:ar(os(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function os(t){return Number(t)*1e3}function la(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return _i("JWT malformed, contained fewer than 3 sections"),null;try{const o=_m(r);return o?JSON.parse(o):(_i("Failed to decode base64 JWT payload"),null)}catch(o){return _i("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function tv(t){const e=la(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof at&&nv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ef{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ar(this.lastLoginAt),this.creationTime=ar(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Pr(t,Zg(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?sv(o.providerUserInfo):[],l=ov(t.providerData,s),a=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),p=a?u:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ef(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function iv(t){const e=vo(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ov(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sv(t){return t.map(e=>{var{providerId:n}=e,r=ia(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lv(t,e){const n=await wf(t,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Sf(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_f.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await lv(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Rr;return r&&(N(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(N(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
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
 */function ct(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=ia(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ef(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ev(this,e)}reload(){return iv(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pr(this,qg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,l,a,u,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:f,emailVerified:g,isAnonymous:S,providerData:I,stsTokenManager:T}=n;N(f&&T,e,"internal-error");const C=Rr.fromJSON(this.name,T);N(typeof f=="string",e,"internal-error"),ct(m,e.name),ct(h,e.name),N(typeof g=="boolean",e,"internal-error"),N(typeof S=="boolean",e,"internal-error"),ct(y,e.name),ct(_,e.name),ct(w,e.name),ct(M,e.name),ct(d,e.name),ct(c,e.name);const F=new Gt({uid:f,auth:e,email:h,emailVerified:g,displayName:m,isAnonymous:S,photoURL:_,phoneNumber:y,tenantId:w,stsTokenManager:C,createdAt:d,lastLoginAt:c});return I&&Array.isArray(I)&&(F.providerData=I.map(O=>Object.assign({},O))),M&&(F._redirectEventId=M),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Rr;i.updateFromServerResponse(n);const o=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yi(o),o}}/**
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
 */class kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kf.type="NONE";const Mu=kf;/**
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
 */function wi(t,e,n){return`firebase:${t}:${e}:${n}`}class Tn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=wi(this.userKey,i.apiKey,o),this.fullPersistenceKey=wi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Tn(Ze(Mu),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ze(Mu);const s=wi(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const p=await u._get(s);if(p){const m=Gt._fromJSON(e,p);u!==o&&(l=m),o=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!a.length?new Tn(o,e,r):(o=a[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Tn(o,e,r))}}/**
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
 */function Uu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(If(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pf(e))return"Blackberry";if(Rf(e))return"Webos";if(aa(e))return"Safari";if((e.includes("chrome/")||Tf(e))&&!e.includes("edge/"))return"Chrome";if(Nf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function If(t=ae()){return/firefox\//i.test(t)}function aa(t=ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tf(t=ae()){return/crios\//i.test(t)}function Cf(t=ae()){return/iemobile/i.test(t)}function Nf(t=ae()){return/android/i.test(t)}function Pf(t=ae()){return/blackberry/i.test(t)}function Rf(t=ae()){return/webos/i.test(t)}function _o(t=ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function av(t=ae()){var e;return _o(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uv(){return Im()&&document.documentMode===10}function Of(t=ae()){return _o(t)||Nf(t)||Rf(t)||Pf(t)||/windows phone/i.test(t)||Cf(t)}function cv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Df(t,e=[]){let n;switch(t){case"Browser":n=Uu(ae());break;case"Worker":n=`${Uu(ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class dv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const a=e(o);s(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class fv{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zu(this),this.idTokenSubscription=new zu(this),this.beforeStateQueue=new dv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ze(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===l)&&(a==null?void 0:a.user)&&(i=a.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Yi(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vo(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ze(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ze(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Tn.create(this,[Ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return N(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Df(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ua(t){return vo(t)}class zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dm(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Af{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}/**
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
 */async function Cn(t,e){return Xg(t,"POST","/v1/accounts:signInWithIdp",Yg(t,e))}/**
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
 */const hv="http://localhost";class nn extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=ia(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new nn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Cn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cn(e,n)}buildRequest(){const e={requestUri:hv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ur(n)}return e}}/**
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
 */class ca{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends ca{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends jr{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class Ye extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nn._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ye.credential(n,r)}catch{return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com";Ye.PROVIDER_ID="google.com";/**
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
 */class gt extends jr{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class vt extends jr{constructor(){super("twitter.com")}static credential(e,n){return nn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Gt._fromIdTokenResponse(e,r,i),s=Fu(r);return new Mn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fu(r);return new Mn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xi extends at{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xi(e,n,r,i)}}function Lf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(t,o,e,r):o})}async function pv(t,e,n=!1){const r=await Pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mn._forOperation(t,"link",r)}/**
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
 */async function mv(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const s=await Pr(t,Lf(i,o,e,t),n);N(s.idToken,i,"internal-error");const l=la(s.idToken);N(l,i,"internal-error");const{sub:a}=l;return N(t.uid===a,i,"user-mismatch"),Mn._forOperation(t,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ge(i,"user-mismatch"),s}}/**
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
 */async function gv(t,e,n=!1){const r="signIn",i=await Lf(t,r,e),o=await Mn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}const Ji="__sak";/**
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
 */class xf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vv(){const t=ae();return aa(t)||_o(t)}const yv=1e3,_v=10;class Mf extends xf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vv()&&cv(),this.fallbackToPolling=Of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,a)=>{this.notifyListeners(s,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);uv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_v):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mf.type="LOCAL";const wv=Mf;/**
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
 */class Uf extends xf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uf.type="SESSION";const zf=Uf;/**
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
 */function Sv(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async u=>u(n.origin,o)),a=await Sv(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wo.receivers=[];/**
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
 */function da(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ev{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,a)=>{const u=da("",20);i.port1.start();const p=setTimeout(()=>{a(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const h=m;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(h.data.response);break;default:clearTimeout(p),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Ke(){return window}function kv(t){Ke().location.href=t}/**
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
 */function Ff(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Iv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cv(){return Ff()?self:null}/**
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
 */const jf="firebaseLocalStorageDb",Nv=1,qi="firebaseLocalStorage",$f="fbase_key";class $r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function So(t,e){return t.transaction([qi],e?"readwrite":"readonly").objectStore(qi)}function Pv(){const t=indexedDB.deleteDatabase(jf);return new $r(t).toPromise()}function ol(){const t=indexedDB.open(jf,Nv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qi,{keyPath:$f})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qi)?e(r):(r.close(),await Pv(),e(await ol()))})})}async function ju(t,e,n){const r=So(t,!0).put({[$f]:e,value:n});return new $r(r).toPromise()}async function Rv(t,e){const n=So(t,!1).get(e),r=await new $r(n).toPromise();return r===void 0?null:r.value}function $u(t,e){const n=So(t,!0).delete(e);return new $r(n).toPromise()}const Ov=800,Dv=3;class Bf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Dv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ff()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wo._getInstance(Cv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Iv(),!this.activeServiceWorker)return;this.sender=new Ev(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await ju(e,Ji,"1"),await $u(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ju(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$u(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=So(i,!1).getAll();return new $r(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bf.type="LOCAL";const Av=Bf;/**
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
 */function Lv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=We("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Lv().appendChild(r)})}function Mv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Fr(3e4,6e4);/**
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
 */function Hf(t,e){return e?Ze(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fa extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uv(t){return gv(t.auth,new fa(t),t.bypassAuthState)}function zv(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),mv(n,new fa(t),t.bypassAuthState)}async function Fv(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),pv(n,new fa(t),t.bypassAuthState)}/**
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
 */class Vf{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uv;case"linkViaPopup":case"linkViaRedirect":return Fv;case"reauthViaPopup":case"reauthViaRedirect":return zv;default:Ge(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jv=new Fr(2e3,1e4);async function $v(t,e,n){const r=ua(t);Bg(t,e,ca);const i=Hf(r,n);return new Vt(r,"signInViaPopup",e,i).executeNotNull()}class Vt extends Vf{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jv.get())};e()}}Vt.currentPopupAction=null;/**
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
 */const Bv="pendingRedirect",Si=new Map;class Hv extends Vf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Si.get(this.auth._key());if(!e){try{const r=await Vv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Si.set(this.auth._key(),e)}return this.bypassAuthState||Si.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vv(t,e){const n=Gv(e),r=Kv(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wv(t,e){Si.set(t._key(),e)}function Kv(t){return Ze(t._redirectPersistence)}function Gv(t){return wi(Bv,t.config.apiKey,t.name)}async function Qv(t,e,n=!1){const r=ua(t),i=Hf(r,e),s=await new Hv(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const bv=10*60*1e3;class Yv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wf(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bu(e))}saveEventToCache(e){this.cachedEventUids.add(Bu(e)),this.lastProcessedEventTime=Date.now()}}function Bu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wf(t);default:return!1}}/**
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
 */async function Jv(t,e={}){return yo(t,"GET","/v1/projects",e)}/**
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
 */const qv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zv=/^https?/;async function ey(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jv(t);for(const n of e)try{if(ty(n))return}catch{}Ge(t,"unauthorized-domain")}function ty(t){const e=il(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Zv.test(n))return!1;if(qv.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ny=new Fr(3e4,6e4);function Hu(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ry(t){return new Promise((e,n)=>{var r,i,o;function s(){Hu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hu(),n(We(t,"network-request-failed"))},timeout:ny.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ke().gapi)===null||o===void 0)&&o.load)s();else{const l=Mv("iframefcb");return Ke()[l]=()=>{gapi.load?s():n(We(t,"network-request-failed"))},xv(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Ei=null,e})}let Ei=null;function iy(t){return Ei=Ei||ry(t),Ei}/**
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
 */const oy=new Fr(5e3,15e3),sy="__/auth/iframe",ly="emulator/auth/iframe",ay={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cy(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sa(e,ly):`https://${t.config.authDomain}/${sy}`,r={apiKey:e.apiKey,appName:t.name,v:zr},i=uy.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ur(r).slice(1)}`}async function dy(t){const e=await iy(t),n=Ke().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:cy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ay,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=We(t,"network-request-failed"),l=Ke().setTimeout(()=>{o(s)},oy.get());function a(){Ke().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{o(s)})}))}/**
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
 */const fy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hy=500,py=600,my="_blank",gy="http://localhost";class Vu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vy(t,e,n,r=hy,i=py){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},fy),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ae().toLowerCase();n&&(l=Tf(u)?my:n),If(u)&&(e=e||gy,a.scrollbars="yes");const p=Object.entries(a).reduce((h,[y,_])=>`${h}${y}=${_},`,"");if(av(u)&&l!=="_self")return yy(e||"",l),new Vu(null);const m=window.open(e||"",l,p);N(m,t,"popup-blocked");try{m.focus()}catch{}return new Vu(m)}function yy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _y="__/auth/handler",wy="emulator/auth/handler";function Wu(t,e,n,r,i,o){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(e instanceof ca){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Om(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(o||{}))s[a]=u}if(e instanceof jr){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(s.scopes=a.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Sy(t)}?${Ur(l).slice(1)}`}function Sy({config:t}){return t.emulator?sa(t,wy):`https://${t.authDomain}/${_y}`}/**
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
 */const ss="webStorageSupport";class Ey{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zf,this._completeRedirectFn=Qv,this._overrideRedirectResult=Wv}async _openPopup(e,n,r,i){var o;st((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Wu(e,n,r,il(),i);return vy(e,s,da())}async _openRedirect(e,n,r,i){return await this._originValidation(e),kv(Wu(e,n,r,il(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(st(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dy(e),r=new Yv(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ss,{type:ss},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ss];s!==void 0&&n(!!s),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ey(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Of()||aa()||_o()}}const ky=Ey;var Ku="@firebase/auth",Gu="0.20.7";/**
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
 */class Iy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ty(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cy(t){xn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((l,a)=>{N(o&&!o.includes(":"),"invalid-api-key",{appName:l.name}),N(!(s!=null&&s.includes(":")),"argument-error",{appName:l.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Df(t)},p=new fv(l,a,u);return Vg(p,n),p})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new Zt("auth-internal",e=>{const n=ua(e.getProvider("auth").getImmediate());return(r=>new Iy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Ku,Gu,Ty(t)),Rt(Ku,Gu,"esm2017")}/**
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
 */function Ny(t=hf()){const e=ra(t,"auth");return e.isInitialized()?e.getImmediate():Hg(t,{popupRedirectResolver:ky,persistence:[Av,wv,zf]})}Cy("Browser");var Py="firebase",Ry="9.10.0";/**
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
 */Rt(Py,Ry,"app");/**
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
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
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
 */let Eo="9.10.0";/**
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
 */const Zi=new ta("@firebase/firestore");function Oy(t,...e){if(Zi.logLevel<=U.DEBUG){const n=e.map(Kf);Zi.debug(`Firestore (${Eo}): ${t}`,...n)}}function Dy(t,...e){if(Zi.logLevel<=U.ERROR){const n=e.map(Kf);Zi.error(`Firestore (${Eo}): ${t}`,...n)}}function Kf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Ay(t="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+t;throw Dy(e),new Error(e)}function ha(t,e){t||Ay()}/**
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
 */const ur="invalid-argument",Qu="failed-precondition";class Qt extends at{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ly{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ie.UNAUTHENTICATED))}shutdown(){}}class My{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(ha(typeof e.accessToken=="string"),new Ly(e.accessToken,new Ie(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Uy{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(ha(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class zy{constructor(e,n,r,i){this.t=e,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new Uy(this.t,this.i,this.o,this.u))}start(e,n){e.enqueueRetryable(()=>n(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jy{constructor(e){this.m=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(ha(typeof e.token=="string"),new Fy(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof eo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var bu,A;/**
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
 */(A=bu||(bu={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Yu=new Map;class Xu{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Qt(ur,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Qt(ur,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,i,o,s){if(i===!0&&s===!0)throw new Qt(ur,`${r} and ${o} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class $y{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Qt(Qu,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Qt(Qu,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xu(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xy;switch(n.type){case"gapi":const r=n.client;return new zy(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Qt(ur,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Yu.get(e);n&&(Oy("ComponentProvider","Removing Datastore"),Yu.delete(e),n.terminate())}(this),Promise.resolve()}}function By(t,e){const n=typeof t=="object"?t:hf(),r=typeof t=="string"?t:e||"(default)";return ra(n,"firestore/lite").getImmediate({identifier:r})}(function(t){Eo=t})(`${zr}_lite`),xn(new Zt("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),i=new $y(new My(t.getProvider("auth-internal")),new jy(t.getProvider("app-check-internal")),function(o,s){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new Qt(ur,'"projectId" not provided in firebase.initializeApp.');return new eo(o.options.projectId,s)}(r,e),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),Rt("firestore-lite","3.5.0",""),Rt("firestore-lite","3.5.0","esm2017");const Hy={apiKey:"AIzaSyBuWY0dVxYw8rubYpJoOFZP0N2yUW9jj_k",authDomain:"sing-38b76.firebaseapp.com",projectId:"sing-38b76",storageBucket:"sing-38b76.appspot.com",messagingSenderId:"34368054888",appId:"1:34368054888:web:3f69bdaa087bf962b37ddd"},Gf=Og(Hy),Vy=Ny(Gf);By(Gf);const Wy=new Ye,Ky=async()=>{try{const t=await $v(Vy,Wy),{displayName:e,email:n,photoURL:r,uid:i}=t.user;return{ok:!0,displayName:e,email:n,photoURL:r,uid:i}}catch(t){t.code;const e=t.message;return{ok:!1,errorMessague:e}}},Qf=et.exports.createContext({auth:void 0,login:()=>null,logout:()=>null}),bf=()=>et.exports.useContext(Qf);var ko={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy=et.exports,Qy=Symbol.for("react.element"),by=Symbol.for("react.fragment"),Yy=Object.prototype.hasOwnProperty,Xy=Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jy={key:!0,ref:!0,__self:!0,__source:!0};function Yf(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Yy.call(e,r)&&!Jy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Qy,type:t,key:o,ref:s,props:i,_owner:Xy.current}}Io.Fragment=by;Io.jsx=Yf;Io.jsxs=Yf;(function(t){t.exports=Io})(ko);const qy=ko.exports.Fragment,Z=ko.exports.jsx,sl=ko.exports.jsxs,Zy=()=>{const{login:t}=bf();return Z(qy,{children:Z("div",{className:"container-log",children:sl("div",{className:"login-box",children:[Z("h3",{children:"Iniciar sesion"}),sl("div",{className:"logo",children:[Z("div",{children:Z("img",{src:gm})}),Z("div",{children:Z("button",{onClick:async()=>{const n=await Ky();t(n)},children:"Iniciar sesion"})})]})]})})})};const e0=()=>{const{auth:t,logout:e}=bf(),n=t.email,r=t.name,i=t.photo;return Z("div",{className:"containersesion",children:sl("div",{className:"User",children:[Z("h3",{children:`BIENVENIDO ${r}`}),Z("div",{children:Z("img",{src:i})}),Z("div",{children:Z("p",{children:n})})]})})},t0=()=>{const[t,e]=et.exports.useState(void 0);et.exports.useEffect(()=>{e(null)},[]);const n=i=>{i.ok&&(console.log(i),e({name:i.displayName,email:i.email,photo:i.photoURL,id:i.uid}))},r=et.exports.useMemo(()=>({auth:t,login:n,logout:()=>null}),[t]);return t===void 0?null:Z(Qf.Provider,{value:r,children:t?Z(e0,{}):Z(Zy,{})})};ls.createRoot(document.getElementById("root")).render(Z(hh.StrictMode,{children:Z(t0,{})}));
