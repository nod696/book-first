(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e3eff8a"],{"057f":function(t,e,r){var n=r("c6b6"),i=r("fc6a"),a=r("241c").f,o=r("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return a(t)}catch(e){return o(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?u(t):a(i(t))}},"0b42":function(t,e,r){var n=r("da84"),i=r("e8b5"),a=r("68ee"),o=r("861d"),c=r("b622"),u=c("species"),s=n.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,a(e)&&(e===s||i(e.prototype))?e=void 0:o(e)&&(e=e[u],null===e&&(e=void 0))),void 0===e?s:e}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4dae":function(t,e,r){var n=r("da84"),i=r("23cb"),a=r("07fa"),o=r("8418"),c=n.Array,u=Math.max;t.exports=function(t,e,r){for(var n=a(t),s=i(e,n),f=i(void 0===r?n:r,n),b=c(u(f-s,0)),d=0;s<f;s++,d++)o(b,d,t[s]);return b.length=d,b}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),i=r("1a2d"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),i=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var o=n(e);o in t?i.f(t,o,a(0,r)):t[o]=r}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("2ba4"),c=r("c65b"),u=r("e330"),s=r("c430"),f=r("83ab"),b=r("4930"),d=r("d039"),D=r("1a2d"),l=r("e8b5"),p=r("1626"),m=r("861d"),v=r("3a9b"),g=r("d9b5"),h=r("825a"),y=r("7b0b"),B=r("fc6a"),O=r("a04b"),w=r("577e"),j=r("5c6c"),S=r("7c73"),k=r("df75"),A=r("241c"),_=r("057f"),F=r("7418"),x=r("06cf"),P=r("9bf2"),N=r("37e8"),E=r("d1e7"),J=r("f36a"),C=r("6eeb"),I=r("5692"),$=r("f772"),R=r("d012"),T=r("90e3"),z=r("b622"),M=r("e538"),Q=r("746f"),W=r("d44e"),q=r("69f3"),G=r("b727").forEach,H=$("hidden"),K="Symbol",L="prototype",U=z("toPrimitive"),V=q.set,X=q.getterFor(K),Y=Object[L],Z=i.Symbol,tt=Z&&Z[L],et=i.TypeError,rt=i.QObject,nt=a("JSON","stringify"),it=x.f,at=P.f,ot=_.f,ct=E.f,ut=u([].push),st=I("symbols"),ft=I("op-symbols"),bt=I("string-to-symbol-registry"),dt=I("symbol-to-string-registry"),Dt=I("wks"),lt=!rt||!rt[L]||!rt[L].findChild,pt=f&&d((function(){return 7!=S(at({},"a",{get:function(){return at(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=it(Y,e);n&&delete Y[e],at(t,e,r),n&&t!==Y&&at(Y,e,n)}:at,mt=function(t,e){var r=st[t]=S(tt);return V(r,{type:K,tag:t,description:e}),f||(r.description=e),r},vt=function(t,e,r){t===Y&&vt(ft,e,r),h(t);var n=O(e);return h(r),D(st,n)?(r.enumerable?(D(t,H)&&t[H][n]&&(t[H][n]=!1),r=S(r,{enumerable:j(0,!1)})):(D(t,H)||at(t,H,j(1,{})),t[H][n]=!0),pt(t,n,r)):at(t,n,r)},gt=function(t,e){h(t);var r=B(e),n=k(r).concat(wt(r));return G(n,(function(e){f&&!c(yt,r,e)||vt(t,e,r[e])})),t},ht=function(t,e){return void 0===e?S(t):gt(S(t),e)},yt=function(t){var e=O(t),r=c(ct,this,e);return!(this===Y&&D(st,e)&&!D(ft,e))&&(!(r||!D(this,e)||!D(st,e)||D(this,H)&&this[H][e])||r)},Bt=function(t,e){var r=B(t),n=O(e);if(r!==Y||!D(st,n)||D(ft,n)){var i=it(r,n);return!i||!D(st,n)||D(r,H)&&r[H][n]||(i.enumerable=!0),i}},Ot=function(t){var e=ot(B(t)),r=[];return G(e,(function(t){D(st,t)||D(R,t)||ut(r,t)})),r},wt=function(t){var e=t===Y,r=ot(e?ft:B(t)),n=[];return G(r,(function(t){!D(st,t)||e&&!D(Y,t)||ut(n,st[t])})),n};if(b||(Z=function(){if(v(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,e=T(t),r=function(t){this===Y&&c(r,ft,t),D(this,H)&&D(this[H],e)&&(this[H][e]=!1),pt(this,e,j(1,t))};return f&&lt&&pt(Y,e,{configurable:!0,set:r}),mt(e,t)},tt=Z[L],C(tt,"toString",(function(){return X(this).tag})),C(Z,"withoutSetter",(function(t){return mt(T(t),t)})),E.f=yt,P.f=vt,N.f=gt,x.f=Bt,A.f=_.f=Ot,F.f=wt,M.f=function(t){return mt(z(t),t)},f&&(at(tt,"description",{configurable:!0,get:function(){return X(this).description}}),s||C(Y,"propertyIsEnumerable",yt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!b,sham:!b},{Symbol:Z}),G(k(Dt),(function(t){Q(t)})),n({target:K,stat:!0,forced:!b},{for:function(t){var e=w(t);if(D(bt,e))return bt[e];var r=Z(e);return bt[e]=r,dt[r]=e,r},keyFor:function(t){if(!g(t))throw et(t+" is not a symbol");if(D(dt,t))return dt[t]},useSetter:function(){lt=!0},useSimple:function(){lt=!1}}),n({target:"Object",stat:!0,forced:!b,sham:!f},{create:ht,defineProperty:vt,defineProperties:gt,getOwnPropertyDescriptor:Bt}),n({target:"Object",stat:!0,forced:!b},{getOwnPropertyNames:Ot,getOwnPropertySymbols:wt}),n({target:"Object",stat:!0,forced:d((function(){F.f(1)}))},{getOwnPropertySymbols:function(t){return F.f(y(t))}}),nt){var jt=!b||d((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:jt},{stringify:function(t,e,r){var n=J(arguments),i=e;if((m(e)||void 0!==t)&&!g(t))return l(e)||(e=function(t,e){if(p(i)&&(e=c(i,this,t,e)),!g(e))return e}),n[1]=e,o(nt,null,n)}})}if(!tt[U]){var St=tt.valueOf;C(tt,U,(function(t){return c(St,this)}))}W(Z,K),R[H]=!0},b727:function(t,e,r){var n=r("0366"),i=r("e330"),a=r("44ad"),o=r("7b0b"),c=r("07fa"),u=r("65f0"),s=i([].push),f=function(t){var e=1==t,r=2==t,i=3==t,f=4==t,b=6==t,d=7==t,D=5==t||b;return function(l,p,m,v){for(var g,h,y=o(l),B=a(y),O=n(p,m),w=c(B),j=0,S=v||u,k=e?S(l,w):r||d?S(l,0):void 0;w>j;j++)if((D||j in B)&&(g=B[j],h=O(g,j,y),t))if(e)k[j]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:s(k,g)}else switch(t){case 4:return!1;case 7:s(k,g)}return b?-1:i||f?f:k}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),a=r("da84"),o=r("e330"),c=r("1a2d"),u=r("1626"),s=r("3a9b"),f=r("577e"),b=r("9bf2").f,d=r("e893"),D=a.Symbol,l=D&&D.prototype;if(i&&u(D)&&(!("description"in l)||void 0!==D().description)){var p={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=s(l,this)?new D(t):void 0===t?D():D(t);return""===t&&(p[e]=!0),e};d(m,D),m.prototype=l,l.constructor=m;var v="Symbol(test)"==String(D("test")),g=o(l.toString),h=o(l.valueOf),y=/^Symbol\((.*)\)[^)]+$/,B=o("".replace),O=o("".slice);b(l,"description",{configurable:!0,get:function(){var t=h(this),e=g(t);if(c(p,t))return"";var r=v?O(e,7,-1):B(e,y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e9c4:function(t,e,r){var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("2ba4"),c=r("e330"),u=r("d039"),s=i.Array,f=a("JSON","stringify"),b=c(/./.exec),d=c("".charAt),D=c("".charCodeAt),l=c("".replace),p=c(1..toString),m=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,h=function(t,e,r){var n=d(r,e-1),i=d(r,e+1);return b(v,t)&&!b(g,i)||b(g,t)&&!b(v,n)?"\\u"+p(D(t,0),16):t},y=u((function(){return'"\\udf06\\ud834"'!==f("\udf06\ud834")||'"\\udead"'!==f("\udead")}));f&&n({target:"JSON",stat:!0,forced:y},{stringify:function(t,e,r){for(var n=0,i=arguments.length,a=s(i);n<i;n++)a[n]=arguments[n];var c=o(f,null,a);return"string"==typeof c?l(c,m,h):c}})},ed07:function(t,e,r){"use strict";r.r(e);r("b0c0"),r("a4d3"),r("e01a"),r("e9c4");var n=r("7a23"),i={class:"main__wrappist"},a=Object(n["h"])("h2",{class:"main__subtitle"},"Амфибии",-1),o={class:"main__list"},c=Object(n["i"])("Обратно");function u(t,e,r,u,s,f){var b=Object(n["z"])("router-link");return Object(n["u"])(),Object(n["g"])("div",i,[a,Object(n["h"])("div",o,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["y"])(s.DataAmphibia,(function(t){return Object(n["u"])(),Object(n["g"])("li",{class:"main__item",key:t},[Object(n["j"])(b,{class:"main__link",to:{name:"SpeciesPage",params:{itemRout:"".concat(t.routing),itemName:"".concat(t.name),itemDescription:"".concat(t.description),itemImg:"".concat(t.img),itemNumber:"".concat(t.number),itemCoord:"".concat(JSON.stringify(t.coordinates)),itemPrevious:"/amphibia",itemRef:t.ref,itemInfo:t.status}}},{default:Object(n["F"])((function(){return[Object(n["i"])(Object(n["C"])(t.name),1)]})),_:2},1032,["to"])])})),128))]),Object(n["j"])(b,{class:"back",to:"/"},{default:Object(n["F"])((function(){return[c]})),_:1})])}var s=[{routing:"salamandrella-keyserlingii",name:"Сибирский углозуб",img:"../assets/amphibia/salamandrella-keyserlingii.jpg",description:"Вид тритонов, хвостатых земноводных из семейства углозубов. Единственный вид земноводных, хорошо приспособленный к жизни в зоне вечной мерзлоты.",coordinates:{first:{bottom:"15%",left:"27%"},second:{bottom:"10%",left:"35%"}},status:"4 категория, малоизученный вид",ref:"https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%B3%D0%BB%D0%BE%D0%B7%D1%83%D0%B1"},{routing:"triturus-cristatus",name:"Гребенчатый тритон",img:"../assets/amphibia/triturus-cristatus.jpg",description:"Вид тритонов из рода Triturus отряда хвостатых земноводных. Своё название данный вид тритонов получил благодаря высокому гребню вдоль спины и хвоста, который появляется у самцов в брачный период.",coordinates:{first:{bottom:"10%",left:"10%"}},status:"2 категория, очень редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D1%87%D0%B0%D1%82%D1%8B%D0%B9_%D1%82%D1%80%D0%B8%D1%82%D0%BE%D0%BD"},{routing:"pelobates-fuscus",name:"Обыкновенная чесночница",img:"../assets/amphibia/pelobates-fuscus.jpg",description:"Предпочитает смешанные и широколиственные леса, пойменные луга, сады. Рацион: жуки, муравьи, пауки, гусеницы, черви. Кормится ночью. Чесночница обыкновенная — наземный вид, придерживается мест с лёгкими и рыхлыми почвами. ",coordinates:{first:{bottom:"10%",left:"40%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D1%87%D0%B5%D1%81%D0%BD%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0"},{routing:"rana-amurensis",name:"Сибирская лягушка",img:"../assets/amphibia/rana-amurensis.jpg",description:"Встречается в хвойных, смешанных и лиственных лесах, проникает в тундру и лесостепную зону. Это происходит чаще всего в открытых, влажных местах, таких как влажные луга, болота, заросшие берега озёр, рек, и на открытых площадках в лесу с обильной растительностью и древесным мусором.",coordinates:{first:{bottom:"60%",left:"55%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BB%D1%8F%D0%B3%D1%83%D1%88%D0%BA%D0%B0"}],f={name:"AmphibiaData",data:function(){return{DataAmphibia:s}},methods:{}},b=r("6b0d"),d=r.n(b);const D=d()(f,[["render",u]]);e["default"]=D}}]);
//# sourceMappingURL=chunk-6e3eff8a.1ac4dc1a.js.map