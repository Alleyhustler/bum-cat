(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9848)}])},9848:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V},fonts:function(){return G}});var r=n(5893),o=n(2031);let a=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),i=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function l(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return a.has(t.script)}let t=e.split("-")[0];return i.has(t)}var u=n(7294);let c={prefix:String(Math.round(1e10*Math.random())),current:0},s=(u.createContext(c),u.createContext(!1));function d(){return!1}function f(){return!0}function m(e){return()=>{}}"undefined"!=typeof window&&window.document&&window.document.createElement,new WeakMap,u.useId;let h=Symbol.for("react-aria.i18n.locale");function v(){let e="undefined"!=typeof window&&window[h]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:l(e)?"rtl":"ltr"}}let g=v(),y=new Set;function p(){for(let e of(g=v(),y))e(g)}let w=u.createContext(null);function b(e){let{locale:t,children:n}=e,r=function(){let e="function"==typeof u.useSyncExternalStore?u.useSyncExternalStore(m,d,f):(0,u.useContext)(s),[t,n]=(0,u.useState)(g);return((0,u.useEffect)(()=>(0===y.size&&window.addEventListener("languagechange",p),y.add(n),()=>{y.delete(n),0===y.size&&window.removeEventListener("languagechange",p)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}(),o=u.useMemo(()=>t?{locale:t,direction:l(t)?"rtl":"ltr"}:r,[r,t]);return u.createElement(w.Provider,{value:o},n)}var E=n(2433);n(3935);let _=u.createContext(null);function S(e){let{children:t}=e,n=(0,u.useContext)(_),[r,o]=(0,u.useState)(0),a=(0,u.useMemo)(()=>({parent:n,modalCount:r,addModal(){o(e=>e+1),n&&n.addModal()},removeModal(){o(e=>e-1),n&&n.removeModal()}}),[n,r]);return u.createElement(_.Provider,{value:a},t)}function x(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,u.useContext)(_))&&t.modalCount>0||null}};return u.createElement("div",{"data-overlay-container":!0,...e,...n})}function C(e){return u.createElement(S,null,u.createElement(x,e))}let T={skipAnimations:!1};var k=({children:e,navigate:t,useHref:n,disableAnimation:a=!1,disableRipple:i=!1,skipFramerMotionAnimations:l=a,validationBehavior:c="aria",locale:s="en-US",defaultDates:d,createCalendar:f,...m})=>{let h=e;t&&(h=(0,r.jsx)(E.pG,{navigate:t,useHref:n,children:h}));let v=(0,u.useMemo)(()=>(a&&l&&(T.skipAnimations=!0),{createCalendar:f,defaultDates:d,disableAnimation:a,disableRipple:i,validationBehavior:c}),[f,null==d?void 0:d.maxDate,null==d?void 0:d.minDate,a,i,c]);return(0,r.jsx)(o.a,{value:v,children:(0,r.jsx)(b,{locale:s,children:(0,r.jsx)(C,{...m,children:h})})})};let A=["light","dark"],$="(prefers-color-scheme: dark)",L="undefined"==typeof window,M=(0,u.createContext)(void 0),K=e=>(0,u.useContext)(M)?u.createElement(u.Fragment,null,e.children):u.createElement(N,e),P=["light","dark"],N=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:o="theme",themes:a=P,defaultTheme:i=n?"system":"light",attribute:l="data-theme",value:c,children:s,nonce:d})=>{let[f,m]=(0,u.useState)(()=>F(o,i)),[h,v]=(0,u.useState)(()=>F(o)),g=c?Object.values(c):a,y=(0,u.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&n&&(o=O());let a=c?c[o]:o,u=t?H():null,s=document.documentElement;if("class"===l?(s.classList.remove(...g),a&&s.classList.add(a)):a?s.setAttribute(l,a):s.removeAttribute(l),r){let e=A.includes(i)?i:null,t=A.includes(o)?o:e;s.style.colorScheme=t}null==u||u()},[]),p=(0,u.useCallback)(e=>{m(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),w=(0,u.useCallback)(t=>{v(O(t)),"system"===f&&n&&!e&&y("system")},[f,e]);(0,u.useEffect)(()=>{let e=window.matchMedia($);return e.addListener(w),w(e),()=>e.removeListener(w)},[w]),(0,u.useEffect)(()=>{let e=e=>{e.key===o&&p(e.newValue||i)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[p]),(0,u.useEffect)(()=>{y(null!=e?e:f)},[e,f]);let b=(0,u.useMemo)(()=>({theme:f,setTheme:p,forcedTheme:e,resolvedTheme:"system"===f?h:f,themes:n?[...a,"system"]:a,systemTheme:n?h:void 0}),[f,p,e,h,n,a]);return u.createElement(M.Provider,{value:b},u.createElement(I,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:o,themes:a,defaultTheme:i,attribute:l,value:c,children:s,attrs:g,nonce:d}),s)},I=(0,u.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:o,defaultTheme:a,value:i,attrs:l,nonce:c})=>{let s="system"===a,d="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${l.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?A.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(e,t=!1,r=!0)=>{let a=i?i[e]:e,l=t?e+"|| ''":`'${a}'`,u="";return o&&r&&!t&&A.includes(e)&&(u+=`d.style.colorScheme = '${e}';`),"class"===n?u+=t||a?`c.add(${l})`:"null":a&&(u+=`d[s](n,${l})`),u},h=e?`!function(){${d}${m(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${s})){var t='${$}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${m(i?"x[e]":"e",!0)}}${s?"":"else{"+m(a,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${m(i?"x[e]":"e",!0)}}else{${m(a,!1,!1)};}${f}}catch(t){}}();`;return u.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:h}})},()=>!0),F=(e,t)=>{let n;if(!L){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},H=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},O=e=>(e||(e=window.matchMedia($)),e.matches?"dark":"light");var j=n(1163),z=n(9556),D=n.n(z),U=n(6510),W=n.n(U);function V(e){let{Component:t,pageProps:n}=e,o=(0,j.useRouter)();return(0,r.jsx)(k,{navigate:o.push,children:(0,r.jsx)(K,{children:(0,r.jsx)(t,{...n})})})}n(9311);let G={sans:D().style.fontFamily,mono:W().style.fontFamily}},9311:function(){},6510:function(e){e.exports={style:{fontFamily:"'__Fira_Code_74c79e', '__Fira_Code_Fallback_74c79e'",fontStyle:"normal"},className:"__className_74c79e",variable:"__variable_74c79e"}},9556:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},1163:function(e,t,n){e.exports=n(9090)},2031:function(e,t,n){"use strict";n.d(t,{a:function(){return o},w:function(){return a}});var r=n(7294),[o,a]=function(e={}){let{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:o}=e,a=r.createContext(void 0);return a.displayName=o,[a.Provider,function e(){var o;let i=r.useContext(a);if(!i&&t){let t=Error(n);throw t.name="ContextError",null==(o=Error.captureStackTrace)||o.call(Error,t,e),t}return i},a]}({name:"ProviderContext",strict:!1})},7604:function(e,t,n){"use strict";function r(e){if(function(){if(null==o){o=!1;try{document.createElement("div").focus({get preventScroll(){return o=!0,!0}})}catch(e){}}return o}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}n.d(t,{A:function(){return r}});let o=null},2433:function(e,t,n){"use strict";n.d(t,{b0:function(){return c},eY:function(){return f},nG:function(){return s},pG:function(){return l},tv:function(){return u}});var r=n(7604),o=n(8806),a=n(7294);let i=(0,a.createContext)({isNative:!0,open:function(e,t){d(e,e=>s(e,t))},useHref:e=>e});function l(e){let{children:t,navigate:n,useHref:r}=e,o=(0,a.useMemo)(()=>({isNative:!1,open:(e,t,r,o)=>{d(e,e=>{c(e,t)?n(r,o):s(e,t)})},useHref:r||(e=>e)}),[n,r]);return a.createElement(i.Provider,{value:o},t)}function u(){return(0,a.useContext)(i)}function c(e,t){let n=e.getAttribute("target");return(!n||"_self"===n)&&e.origin===location.origin&&!e.hasAttribute("download")&&!t.metaKey&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}function s(e,t,n=!0){var a,i;let{metaKey:l,ctrlKey:u,altKey:c,shiftKey:d}=t;(0,o.vU)()&&(null===(i=window.event)||void 0===i?void 0:null===(a=i.type)||void 0===a?void 0:a.startsWith("key"))&&"_blank"===e.target&&((0,o.V5)()?l=!0:u=!0);let f=(0,o.Pf)()&&(0,o.V5)()&&!(0,o.zc)()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:u,altKey:c,shiftKey:d}):new MouseEvent("click",{metaKey:l,ctrlKey:u,altKey:c,shiftKey:d,bubbles:!0,cancelable:!0});s.isOpening=n,(0,r.A)(e),e.dispatchEvent(f),s.isOpening=!1}function d(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}function f(e){let t=u();return{href:(null==e?void 0:e.href)?t.useHref(null==e?void 0:e.href):void 0,target:null==e?void 0:e.target,rel:null==e?void 0:e.rel,download:null==e?void 0:e.download,ping:null==e?void 0:e.ping,referrerPolicy:null==e?void 0:e.referrerPolicy}}s.isOpening=!1},8806:function(e,t,n){"use strict";function r(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function o(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function a(){return o(/^Mac/i)}function i(){return o(/^iPad/i)||a()&&navigator.maxTouchPoints>1}function l(){return o(/^iPhone/i)||i()}function u(){return r(/AppleWebKit/i)&&!r(/Chrome/i)}function c(){return r(/Android/i)}function s(){return r(/Firefox/i)}n.d(t,{Dt:function(){return c},Pf:function(){return u},V5:function(){return a},gn:function(){return l},vU:function(){return s},zc:function(){return i}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);