import{w as u}from"./index-96c4e005.js";let _="",f="",b="";function E(e){f=e.base,_=e.assets||f}function R(e){b=e}const k="sveltekit:scroll",A="sveltekit:index",d={tap:1,hover:2,viewport:3,eager:4,off:-1};function I(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function y(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const p={...d,"":d.hover};function g(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function x(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=g(e)}}function S(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!a||m(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:o,target:a}}function T(e){let t=null,n=null,a=null,o=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=l(s,"preload-code")),a===null&&(a=l(s,"preload-data")),t===null&&(t=l(s,"noscroll")),o===null&&(o=l(s,"reload")),s=g(s);return{preload_code:p[n??"off"],preload_data:p[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function h(e){const t=u(e);let n=!0;function a(){n=!0,t.update(r=>r)}function o(r){n=!1,t.set(r)}function s(r){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&r(i=c)})}return{notify:a,set:o,subscribe:s}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);const o=await fetch(`${_}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const r=(await o.json()).version!==b;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:a}}function m(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function U(e){e.client}const L={url:h({}),page:h({}),navigating:u(null),updated:v()};export{A as I,d as P,k as S,S as a,T as b,y as c,E as d,U as e,x as f,I as g,R as h,m as i,L as s};
