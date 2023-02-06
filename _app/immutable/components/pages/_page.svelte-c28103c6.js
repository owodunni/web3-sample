import{S as B,i as A,s as L,C as O,k as v,l as g,m as k,h as u,n as T,b as h,I as j,D as z,E as D,F,f as C,t as y,J as G,e as N,d as H,H as J,g as U,q as p,a as K,r as m,c as Q,G as w,u as R,B as b,w as V,x as W,y as X,z as Y}from"../../chunks/index-c465cad3.js";import{w as Z}from"../../chunks/index-96c4e005.js";function x(n){let e,t,o,a;const i=n[3].default,r=O(i,n,n[2],null);return{c(){e=v("button"),r&&r.c(),this.h()},l(c){e=g(c,"BUTTON",{class:!0});var s=k(e);r&&r.l(s),s.forEach(u),this.h()},h(){T(e,"class",n[0])},m(c,s){h(c,e,s),r&&r.m(e,null),t=!0,o||(a=j(e,"click",n[4]),o=!0)},p(c,[s]){r&&r.p&&(!t||s&4)&&z(r,i,c,c[2],t?F(i,c[2],s,null):D(c[2]),null)},i(c){t||(C(r,c),t=!0)},o(c){y(r,c),t=!1},d(c){c&&u(e),r&&r.d(c),o=!1,a()}}}function ee(n,e,t){let{$$slots:o={},$$scope:a}=e,{disable:i=!1}=e;const r="bg-blue-500 text-white font-bold py-2 px-4 rounded"+(i?" opacity-50 cursor-not-allowed":"");function c(s){G.call(this,n,s)}return n.$$set=s=>{"disable"in s&&t(1,i=s.disable),"$$scope"in s&&t(2,a=s.$$scope)},[r,i,a,o,c]}class te extends B{constructor(e){super(),A(this,e,ee,x,L,{disable:1})}}function P(){if(!window.ethereum)return[];const n=window.ethereum;return[n.isMetaMask?"metamask":n.isOpera?"opera":"other"]}const E=Z({state:"disconnected"});function S(){if(!window.ethereum)return{state:"disconnected"};const n=window.ethereum;return P().length===0?{state:"disconnected"}:n.isConnected()&&n.selectedAddress&&n.chainId?{state:"connected",provider:n}:{state:"disconnected"}}const M=n=>E.set(n),$=()=>M(S()),q=(n,e)=>(n.on("chainChanged",$),n.on("accountsChanged",$),n.on("connect",$),n.on("disconnect",$),M(e)),ne=async()=>{if(!window.ethereum)return;const n=window.ethereum;let e=S();return e.state==="connected"||(E.set({state:"loading"}),await n.request({method:"eth_requestAccounts",jsonrpc:"2.0",id:1}),e=S(),e.state==="connected")?q(n,e):se()},oe=async()=>{if(!window.ethereum)return;const n=window.ethereum,e=S();if(e.state==="connected")return q(n,e)},se=()=>{E.set({state:"disconnected"})};oe();function ae(n){let e,t,o=P()[0]+"",a,i,r,c,s,d=n[0].provider.chainId+"",_;return{c(){e=v("p"),t=p("Connected to "),a=p(o),i=p("!"),r=K(),c=v("p"),s=p("Chain id: "),_=p(d)},l(l){e=g(l,"P",{});var f=k(e);t=m(f,"Connected to "),a=m(f,o),i=m(f,"!"),f.forEach(u),r=Q(l),c=g(l,"P",{});var I=k(c);s=m(I,"Chain id: "),_=m(I,d),I.forEach(u)},m(l,f){h(l,e,f),w(e,t),w(e,a),w(e,i),h(l,r,f),h(l,c,f),w(c,s),w(c,_)},p(l,f){f&1&&d!==(d=l[0].provider.chainId+"")&&R(_,d)},i:b,o:b,d(l){l&&u(e),l&&u(r),l&&u(c)}}}function re(n){let e,t;return e=new te({props:{disable:n[2],$$slots:{default:[le]},$$scope:{ctx:n}}}),e.$on("click",ne),{c(){V(e.$$.fragment)},l(o){W(e.$$.fragment,o)},m(o,a){X(e,o,a),t=!0},p(o,a){const i={};a&4&&(i.disable=o[2]),a&8&&(i.$$scope={dirty:a,ctx:o}),e.$set(i)},i(o){t||(C(e.$$.fragment,o),t=!0)},o(o){y(e.$$.fragment,o),t=!1},d(o){Y(e,o)}}}function ce(n){let e,t;return{c(){e=v("p"),t=p("Loading...")},l(o){e=g(o,"P",{});var a=k(e);t=m(a,"Loading..."),a.forEach(u)},m(o,a){h(o,e,a),w(e,t)},p:b,i:b,o:b,d(o){o&&u(e)}}}function ie(n){let e,t;return{c(){e=v("p"),t=p("No providers available")},l(o){e=g(o,"P",{});var a=k(e);t=m(a,"No providers available"),a.forEach(u)},m(o,a){h(o,e,a),w(e,t)},p:b,i:b,o:b,d(o){o&&u(e)}}}function le(n){let e;return{c(){e=p("Connect")},l(t){e=m(t,"Connect")},m(t,o){h(t,e,o)},d(t){t&&u(e)}}}function ue(n){let e,t,o,a;const i=[ie,ce,re,ae],r=[];function c(s,d){return s[2]?0:s[0].state==="loading"?1:s[1]?2:3}return e=c(n),t=r[e]=i[e](n),{c(){t.c(),o=N()},l(s){t.l(s),o=N()},m(s,d){r[e].m(s,d),h(s,o,d),a=!0},p(s,[d]){let _=e;e=c(s),e===_?r[e].p(s,d):(U(),y(r[_],1,1,()=>{r[_]=null}),H(),t=r[e],t?t.p(s,d):(t=r[e]=i[e](s),t.c()),C(t,1),t.m(o.parentNode,o))},i(s){a||(C(t),a=!0)},o(s){y(t),a=!1},d(s){r[e].d(s),s&&u(o)}}}function de(n,e,t){let o,a,i;return J(n,E,r=>t(0,i=r)),n.$$.update=()=>{n.$$.dirty&1&&t(1,a=P().length>0&&i.state==="disconnected")},t(2,o=P().length===0),[i,a,o]}class pe extends B{constructor(e){super(),A(this,e,de,ue,L,{})}}export{pe as default};
