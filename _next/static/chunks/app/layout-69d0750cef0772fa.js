(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9053:(e,t,r)=>{Promise.resolve().then(r.bind(r,6187)),Promise.resolve().then(r.t.bind(r,347,23)),Promise.resolve().then(r.t.bind(r,8820,23))},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(306),o=r(5155),a=n._(r(2115)),l=r(180),i=r(1394),s=r(4116),c=r(4445),u=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}r(2363);let m=a.default.forwardRef(function(e,t){let r,n;let{href:l,as:m,children:g,prefetch:b=null,passHref:y,replace:A,shallow:x,scroll:v,onClick:w,onMouseEnter:j,onTouchStart:E,legacyBehavior:k=!1,...P}=e;r=g,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let C=a.default.useContext(i.AppRouterContext),N=!1!==b,_=null===b?c.PrefetchKind.AUTO:c.PrefetchKind.FULL,{href:O,as:M}=a.default.useMemo(()=>{let e=h(l);return{href:e,as:m?h(m):e}},[l,m]),S=a.default.useRef(O),I=a.default.useRef(M);k&&(n=a.default.Children.only(r));let U=k?n&&"object"==typeof n&&n.ref:t,[T,D,R]=(0,s.useIntersection)({rootMargin:"200px"}),F=a.default.useCallback(e=>{(I.current!==M||S.current!==O)&&(R(),I.current=M,S.current=O),T(e)},[M,O,R,T]),B=(0,u.useMergedRef)(F,U);a.default.useEffect(()=>{C&&D&&N&&p(C,O,{kind:_})},[M,O,D,N,C,_]);let z={ref:B,onClick(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),C&&!e.defaultPrevented&&function(e,t,r,n,o,l,i){let{nodeName:s}=e.currentTarget;"A"===s.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),a.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,C,O,M,A,x,v)},onMouseEnter(e){k||"function"!=typeof j||j(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),C&&N&&p(C,O,{kind:_})},onTouchStart:function(e){k||"function"!=typeof E||E(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),C&&N&&p(C,O,{kind:_})}};return(0,f.isAbsoluteUrl)(M)?z.href=M:k&&!y&&("a"!==n.type||"href"in n.props)||(z.href=(0,d.addBasePath)(M)),k?a.default.cloneElement(n,z):(0,o.jsx)("a",{...P,...z,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(2115),o=r(8571),a="function"==typeof IntersectionObserver,l=new Map,i=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!a,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(a){if(c||u)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),l.set(r,t),t}(r);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,u,d.current]),[p,u,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return i},urlObjectKeys:function(){return l}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",l=e.pathname||"",i=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let u=e.search||s&&"?"+s||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==c?(c="//"+(c||""),l&&"/"!==l[0]&&(l="/"+l)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),""+a+c+(l=l.replace(/[?#]/g,encodeURIComponent))+(u=u.replace("#","%23"))+i}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return a(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return b},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return s},getLocationOrigin:function(){return l},getURL:function(){return i},isAbsoluteUrl:function(){return a},isResSent:function(){return c},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return A}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=l();return e.substring(t.length)}function s(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Error('"'+s(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function A(e){return JSON.stringify({message:e.message,stack:e.stack})}},7246:(e,t,r)=>{"use strict";r.d(t,{d:()=>s,A:()=>c});var n=r(5155);let o={src:"/lyly-croitorie/_next/static/media/go-down-arrow.e4bb2081.svg",height:102,width:100,blurWidth:0,blurHeight:0},a={src:"/lyly-croitorie/_next/static/media/go-up-arrow.ef64f6cb.svg",height:50,width:50,blurWidth:0,blurHeight:0},l={src:"/lyly-croitorie/_next/static/media/go-left-arrow.4ec29214.svg",height:143,width:143,blurWidth:0,blurHeight:0};var i=r(5565),s=function(e){return e.UP="up",e.DOWN="down",e.LEFT="left",e}({});let c=e=>{let{className:t,onClick:r,direction:s}=e;return(0,n.jsx)("button",{onClick:r,className:"transform scale-75 hover:scale-100 hover:brightness-75 transition-all duration-300 ease-in-out ".concat(t),children:(0,n.jsx)(i.default,{src:s?"up"===s?a:"left"===s?l:o:o,alt:"Go ".concat(s," arrow"),className:"md:w-20 w-14"})})}},6187:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var n=r(5155),o=r(8173),a=r.n(o);let l={src:"/lyly-croitorie/_next/static/media/LOGO.2ab3d116.png",height:130,width:130,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAFBQUAAAAHBgcNCw4QDhEAAAAJCAkMCw0AAAAUzTxUAAAACnRSTlMDUBYqQzYMXX9qtwNmowAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwFwYcBADAMwjADWf3/4UpA1zYw7F0xRKXqDWN37AHTmYGyJEsc95Z7bHVWyQcfjADq0gAsuwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};var i=r(5565);let s={src:"/lyly-croitorie/_next/static/media/drawer.c4973ba3.svg",height:81,width:88,blurWidth:0,blurHeight:0};var c=r(6565),u=r(2115),f=r(7246);let d=e=>{let{isOpen:t,onCloseSidebar:r}=e,o=e=>(0,n.jsx)("li",{onClick:()=>{let t="";switch(e){case"Acasă":t="acasa";break;case"Cum procedăm?":t="despre-ce-e-vorba";break;case"Despre noi":t="despre-noi";break;case"Servicii":t="servicii";break;case"Programări":t="programari";break;default:t=""}t&&((0,c.Y)(t),r())},children:(0,n.jsx)("p",{children:e})});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("aside",{className:"fixed top-0 left-0 bg-peach shadow-lg h-screen w-3/4 z-50 text-black duration-300 ease-in-out ".concat(t?"translate-x-0":"-translate-x-full"),children:(0,n.jsxs)("div",{className:"flex flex-col justify-between h-full py-20",children:[(0,n.jsxs)("div",{className:"px-8",children:[(0,n.jsx)(f.A,{direction:f.d.LEFT,onClick:r}),(0,n.jsxs)("ul",{className:"flex flex-col gap-10 mt-10",children:[o("Acasă"),o("Cum procedăm?"),o("Despre noi"),o("Servicii"),o("Programări")]})]}),(0,n.jsx)("div",{className:"h-20 text-center w-full flex items-center justify-center",children:(0,n.jsx)(i.default,{src:l,alt:"logo",className:"h-full object-contain"})})]})})})},p=()=>{let[e,t]=(0,u.useState)(!1),r=e=>(0,n.jsx)("li",{onClick:()=>{let t="";switch(e){case"Acasă":t="acasa";break;case"Cum procedăm?":t="despre-ce-e-vorba";break;case"Despre noi":t="despre-noi";break;case"Servicii":t="servicii";break;case"Programări":t="programari";break;default:t=""}t&&(0,c.Y)(t)},children:(0,n.jsx)("p",{className:"hover:text-brownHover transition duration-300 text-xl cursor-pointer",children:e})});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("nav",{className:"fixed top-0 left-0 bg-peach text-black shadow-md h-16 md:h-24 flex justify-between items-center w-full lg:px-20 z-50 box-border",children:[(0,n.jsx)("button",{className:"lg:hidden hover:cursor-pointer z-40 h-16 md:h-24",onClick:()=>t(e=>!e),children:(0,n.jsx)(i.default,{src:s,alt:"drawer",className:"h-8 md:h-10"})}),(0,n.jsx)(a(),{href:"/",className:"h-16 md:h-24 flex-1 lg:flex-none text-center lg:text-left absolute inset-0 flex justify-center items-center lg:static lg:justify-start",children:(0,n.jsx)(i.default,{src:l,alt:"logo",className:"h-full object-contain"})}),(0,n.jsxs)("ul",{className:"hidden lg:flex space-x-12",children:[r("Acasă"),r("Cum procedăm?"),r("Despre noi"),r("Servicii"),r("Programări")]})]}),e&&(0,n.jsx)(d,{isOpen:e,onCloseSidebar:()=>t(e=>!e)})]})}},6565:(e,t,r)=>{"use strict";r.d(t,{Y:()=>n});let n=e=>{let t=document.getElementById(e);null==t||t.scrollIntoView({behavior:"smooth"})}},347:()=>{},8820:e=>{e.exports={style:{fontFamily:"'Poppins', 'Poppins Fallback'",fontStyle:"normal"},className:"__className_3b46d5"}}},e=>{var t=t=>e(e.s=t);e.O(0,[766,565,441,517,358],()=>t(9053)),_N_E=e.O()}]);