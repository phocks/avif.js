parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"XP93":[function(require,module,exports) {
!function(){const t=8,e=1718909296,n=1835365473,i=1768714083,r=1768977008,s=1768973167,o=1769173093,a=function(){const t=new Uint32Array([469762048,1887007846,1836020585,131072,1836020585,846164841,825520237,1140981760,1987014509,1811939328,1684567661,0,0,0,3892510720,704643072,256,1,0,0,256,0,0,0,256,0,0,0,64,0,0,0,0,0,0,33554432,3489726464,1801548404,1543503872,1684564852,50331648,0,0,16777216,0,704643072,0,0,0,0,256,0,0,0,256,0,0,0,64,32775,14340,1812004864,1634296941,536870912,1684563053,0,0,0,3227320320,3909287936,50261,553648128,1919706216,0,0,1701079414,0,0,0,16777216,1852402979,102,1752004116,100,1,0,0,1852400676,102,1701995548,102,0,1,1819440396,32,1,1651799011,108,1937011583,100,0,1,813064559,49,0,1,0,0,0,75499264,4718648,4718592,0,65536,0,0,0,0,0,0,0,0,16776984,1629028352,2168664438,167775240,11,3284118338,31915895,402653184,1937011827,0,16777216,16777216,3909287936,469762048,1668510835,0,16777216,16777216,16777216,16777216,335544320,2054386803,0,0,16777216,335544320,1868788851,0,16777216,1744961536,0,1952539757]);return new Uint8Array(t.buffer)}(),c=a.byteLength,u=568,f=608,d=234,h=437,l={};let w=0;function g(t,e){if(!t)throw new Error(e)}function p(l){return function({width:e,height:n,data:i}){const r=c+i.byteLength,s=new ArrayBuffer(r),o=new DataView(s),l=new Uint8Array(s);return l.set(a),l.set(i,c),o.setUint32(u+t+4,i.byteLength),o.setUint32(f,i.byteLength+t),o.setUint32(d,e),o.setUint32(d+4,n),o.setUint16(h,e),o.setUint16(h+2,n),s}(function(a){function c(){const t=d.getUint8(l);return l+=1,t}function u(){const t=d.getUint16(l);return l+=2,t}function f(){const t=d.getUint32(l);return l+=4,t}const d=new DataView(a),h=a.byteLength;let l=0,w=!1,p=0,y=0,b=null;for(;l<h;){const d=f(),h=f(),U=l+d-t;switch(g(d>=t,"corrupted file"),h){case e:w=!0;break;case n:l+=1,l+=3;continue;case r:case s:continue;case o:l+=1,l+=3,p=f(),y=f();break;case i:l+=1,l+=3;const U=c(),m=U>>>4;g(m<8,"unsupported offset size");const v=15&U;g(v<8,"unsupported length size");const A=c()>>>4;g(A<8,"unsupported base offset size"),g(u()>=1,"bad iloc items number"),l+=2,l+=2;const L=4===A?f():0;l+=2;const B=4===m?f():0,E=4===v?f():0,k=L+B;b=new Uint8Array(a).subarray(k,k+E)}l=U}return g(w,"bad brands"),g(p&&y,"bad image width or height"),g(b,"picture data not found"),{width:p,height:y,data:b}}(l))}self.addEventListener("message",t=>{const e=t.data;if(e&&"avif-update"===e.type)skipWaiting();else if(e&&"avif-rgba"===e.type){const t=function(t,e,n){function i(t){u.setUint16(l,t,!0),l+=2}function r(t){u.setUint32(l,t,!0),l+=4}const s=3*Math.floor((32*e+31)/32),o=s*n,a=54+o,c=new ArrayBuffer(a),u=new DataView(c),f=new Uint32Array(t),d=3*e;let h=0,l=0,w=0;for(i(19778),r(a),l+=4,r(54),r(40),r(e),r(-n>>>0),i(1),i(24),r(0),r(o),r(2835),r(2835);w<n;){const t=54+w*s;let e=0;for(;e<d;){const n=f[h++],i=n>>8&65535,r=255&n;u.setUint16(t+e,i),u.setUint8(t+e+2,r),e+=3}w++}return c}(e.data,e.width,e.height),n=new Blob([t],{type:"image/bmp"}),i=new Response(n);l[e.id]&&l[e.id].resolve(i)}else e&&"avif-error"===e.type&&l[e.id]&&l[e.id].reject(new Error(e.data))}),self.addEventListener("fetch",t=>{if(t.clientId&&t.request.url.match(/\.avif$/i)){const e=w++;t.respondWith(new Promise((n,i)=>{l[e]={resolve:n,reject:i},clients.get(t.clientId).then(n=>(function(t,e,n){return fetch(e.url,{credentials:"same-origin"}).then(t=>t.arrayBuffer()).then(e=>{const i=p(e);n.postMessage({id:t,type:"avif-mov",data:i},[i])})})(e,t.request,n)).catch(i)}).then(t=>(delete l[e],t),t=>{throw delete l[e],t}))}})}();
},{}]},{},["XP93"], null)
//# sourceMappingURL=avif-sw.map