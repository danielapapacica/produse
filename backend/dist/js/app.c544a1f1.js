(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},2899:function(e,t,r){},4228:function(e,t,r){"use strict";var n=r("642b"),o=r.n(n);o.a},"55bb":function(e,t,r){"use strict";var n=r("2899"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("5f5b"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Produse")],1)},i=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"produse"},[r("div",{staticClass:"firstline"},[e._m(0),r("div",{staticClass:"right"},[r("b-button",{attrs:{variant:"primary btn-lg"}},[e._v("Adauga produs")])],1)]),r("br"),r("TabelProduse")],1)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"left"},[r("h1",[e._v("Produse")])])}],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tabel"},[r("b-table",{attrs:{hover:"",items:e.items,fields:e.fields}})],1)},u=[],f={name:"TabelProduse",data:function(){return{fields:[{key:"name",label:"Name",sortable:!0},{key:"code",label:"Code",sortable:!0},{key:"weight",label:"Weight",sortable:!0},{key:"price",label:"Price",sortable:!0},{key:"color",label:"Color",sortable:!0}],items:[{isActive:!0,name:"Orez",code:"098",weight:55,price:44,color:"green"},{isActive:!0,name:"Orez",code:"098",weight:55,price:44,color:"green"},{isActive:!0,name:"Orez",code:"098",weight:55,price:44,color:"green"},{isActive:!0,name:"Orez",code:"098",weight:55,price:44,color:"green"},{isActive:!0,name:"Orez",code:"098",weight:55,price:44,color:"green"}]}}},p=f,d=(r("4228"),r("2877")),b=Object(d["a"])(p,s,u,!1,null,"9bebd516",null),v=b.exports,h={name:"Produse",props:{msg:String},components:{TabelProduse:v}},g=h,m=(r("55bb"),Object(d["a"])(g,l,c,!1,null,"657a465c",null)),y=m.exports,O={name:"App",components:{Produse:y}},w=O,_=(r("034f"),Object(d["a"])(w,a,i,!1,null,null,null)),P=_.exports;r("ab8b"),r("2dd8");n["default"].use(o["a"]),new n["default"]({el:"#app",render:function(e){return e(P)}})},"642b":function(e,t,r){},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.c544a1f1.js.map