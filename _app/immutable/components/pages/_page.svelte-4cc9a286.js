import{S as F,i as G,s as H,C as U,k,l as $,m as g,h as d,n as K,b as m,I as Q,D as R,E as V,F as W,f as E,t as I,J as X,e as T,d as Y,H as Z,g as x,q as _,a as j,r as p,c as z,G as b,u as D,B as v,w as ee,x as te,y as ne,z as oe}from"../../chunks/index-c465cad3.js";import{w as se}from"../../chunks/index-96c4e005.js";function re(n){let e,t,o,r;const i=n[3].default,a=U(i,n,n[2],null);return{c(){e=k("button"),a&&a.c(),this.h()},l(c){e=$(c,"BUTTON",{class:!0});var s=g(e);a&&a.l(s),s.forEach(d),this.h()},h(){K(e,"class",n[0])},m(c,s){m(c,e,s),a&&a.m(e,null),t=!0,o||(r=Q(e,"click",n[4]),o=!0)},p(c,[s]){a&&a.p&&(!t||s&4)&&R(a,i,c,c[2],t?W(i,c[2],s,null):V(c[2]),null)},i(c){t||(E(a,c),t=!0)},o(c){I(a,c),t=!1},d(c){c&&d(e),a&&a.d(c),o=!1,r()}}}function ae(n,e,t){let{$$slots:o={},$$scope:r}=e,{disable:i=!1}=e;const a="bg-blue-500 text-white font-bold py-2 px-4 rounded"+(i?" opacity-50 cursor-not-allowed":"");function c(s){X.call(this,n,s)}return n.$$set=s=>{"disable"in s&&t(1,i=s.disable),"$$scope"in s&&t(2,r=s.$$scope)},[a,i,r,o,c]}class ce extends F{constructor(e){super(),G(this,e,ae,re,H,{disable:1})}}function q(){if(!window.ethereum)return[];const n=window.ethereum;return[n.isMetaMask?"metamask":n.isOpera?"opera":"other"]}const N=se({state:"disconnected"});function A(){if(!window.ethereum)return{state:"disconnected"};const n=window.ethereum;return q().length===0?{state:"disconnected"}:n.isConnected()&&n.selectedAddress&&n.chainId?{state:"connected",provider:n}:{state:"disconnected"}}const J=n=>N.set(n),P=()=>J(A()),O=(n,e)=>(n.on("chainChanged",P),n.on("accountsChanged",P),n.on("connect",P),n.on("disconnect",P),J(e)),ie=async()=>{if(!window.ethereum)return;const n=window.ethereum;let e=A();return e.state==="connected"||(N.set({state:"loading"}),await n.request({method:"eth_requestAccounts",jsonrpc:"2.0",id:1}),e=A(),e.state==="connected")?O(n,e):de()},le=async()=>{if(!window.ethereum)return;const n=window.ethereum,e=A();if(e.state==="connected")return O(n,e)},de=()=>{N.set({state:"disconnected"})};le();function ue(n){let e,t,o=q()[0]+"",r,i,a,c,s,f=n[0].provider.chainId+"",h,S,w,B,C=n[0].provider.selectedAddress+"",y;return{c(){e=k("p"),t=_("Connected to "),r=_(o),i=_("!"),a=j(),c=k("p"),s=_("Chain id: "),h=_(f),S=j(),w=k("p"),B=_("Selected address: "),y=_(C)},l(l){e=$(l,"P",{});var u=g(e);t=p(u,"Connected to "),r=p(u,o),i=p(u,"!"),u.forEach(d),a=z(l),c=$(l,"P",{});var L=g(c);s=p(L,"Chain id: "),h=p(L,f),L.forEach(d),S=z(l),w=$(l,"P",{});var M=g(w);B=p(M,"Selected address: "),y=p(M,C),M.forEach(d)},m(l,u){m(l,e,u),b(e,t),b(e,r),b(e,i),m(l,a,u),m(l,c,u),b(c,s),b(c,h),m(l,S,u),m(l,w,u),b(w,B),b(w,y)},p(l,u){u&1&&f!==(f=l[0].provider.chainId+"")&&D(h,f),u&1&&C!==(C=l[0].provider.selectedAddress+"")&&D(y,C)},i:v,o:v,d(l){l&&d(e),l&&d(a),l&&d(c),l&&d(S),l&&d(w)}}}function fe(n){let e,t;return e=new ce({props:{disable:n[2],$$slots:{default:[me]},$$scope:{ctx:n}}}),e.$on("click",ie),{c(){ee(e.$$.fragment)},l(o){te(e.$$.fragment,o)},m(o,r){ne(e,o,r),t=!0},p(o,r){const i={};r&4&&(i.disable=o[2]),r&8&&(i.$$scope={dirty:r,ctx:o}),e.$set(i)},i(o){t||(E(e.$$.fragment,o),t=!0)},o(o){I(e.$$.fragment,o),t=!1},d(o){oe(e,o)}}}function _e(n){let e,t;return{c(){e=k("p"),t=_("Loading...")},l(o){e=$(o,"P",{});var r=g(e);t=p(r,"Loading..."),r.forEach(d)},m(o,r){m(o,e,r),b(e,t)},p:v,i:v,o:v,d(o){o&&d(e)}}}function pe(n){let e,t;return{c(){e=k("p"),t=_("No providers available")},l(o){e=$(o,"P",{});var r=g(e);t=p(r,"No providers available"),r.forEach(d)},m(o,r){m(o,e,r),b(e,t)},p:v,i:v,o:v,d(o){o&&d(e)}}}function me(n){let e;return{c(){e=_("Connect")},l(t){e=p(t,"Connect")},m(t,o){m(t,e,o)},d(t){t&&d(e)}}}function be(n){let e,t,o,r;const i=[pe,_e,fe,ue],a=[];function c(s,f){return s[2]?0:s[0].state==="loading"?1:s[1]?2:3}return e=c(n),t=a[e]=i[e](n),{c(){t.c(),o=T()},l(s){t.l(s),o=T()},m(s,f){a[e].m(s,f),m(s,o,f),r=!0},p(s,[f]){let h=e;e=c(s),e===h?a[e].p(s,f):(x(),I(a[h],1,1,()=>{a[h]=null}),Y(),t=a[e],t?t.p(s,f):(t=a[e]=i[e](s),t.c()),E(t,1),t.m(o.parentNode,o))},i(s){r||(E(t),r=!0)},o(s){I(t),r=!1},d(s){a[e].d(s),s&&d(o)}}}function he(n,e,t){let o,r,i;return Z(n,N,a=>t(0,i=a)),n.$$.update=()=>{n.$$.dirty&1&&t(1,r=q().length>0&&i.state==="disconnected")},t(2,o=q().length===0),[i,r,o]}class ke extends F{constructor(e){super(),G(this,e,he,be,H,{})}}export{ke as default};
