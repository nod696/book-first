(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0217fda2"],{"057f":function(t,i,r){var e=r("c6b6"),o=r("fc6a"),s=r("241c").f,n=r("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return s(t)}catch(i){return n(a)}};t.exports.f=function(t){return a&&"Window"==e(t)?u(t):s(o(t))}},"0b42":function(t,i,r){var e=r("da84"),o=r("e8b5"),s=r("68ee"),n=r("861d"),a=r("b622"),u=a("species"),c=e.Array;t.exports=function(t){var i;return o(t)&&(i=t.constructor,s(i)&&(i===c||o(i.prototype))?i=void 0:n(i)&&(i=i[u],null===i&&(i=void 0))),void 0===i?c:i}},"428f":function(t,i,r){var e=r("da84");t.exports=e},"4dae":function(t,i,r){var e=r("da84"),o=r("23cb"),s=r("07fa"),n=r("8418"),a=e.Array,u=Math.max;t.exports=function(t,i,r){for(var e=s(t),c=o(i,e),f=o(void 0===r?e:r,e),D=a(u(f-c,0)),d=0;c<f;c++,d++)n(D,d,t[c]);return D.length=d,D}},"65f0":function(t,i,r){var e=r("0b42");t.exports=function(t,i){return new(e(t))(0===i?0:i)}},6951:function(t,i,r){"use strict";r.r(i);r("b0c0"),r("a4d3"),r("e01a"),r("e9c4");var e=r("7a23"),o={class:"main__wrappist"},s=Object(e["h"])("h2",{class:"main__subtitle"},"Птицы",-1),n={class:"main__list"},a=Object(e["i"])("Обратно");function u(t,i,r,u,c,f){var D=Object(e["z"])("router-link");return Object(e["u"])(),Object(e["g"])("div",o,[s,Object(e["h"])("div",n,[(Object(e["u"])(!0),Object(e["g"])(e["a"],null,Object(e["y"])(c.DataBirds,(function(t){return Object(e["u"])(),Object(e["g"])("li",{class:"main__item",key:t},[Object(e["j"])(D,{class:"main__link",to:{name:"SpeciesPage",params:{itemRout:"".concat(t.routing),itemName:"".concat(t.name),itemDescription:"".concat(t.description),itemImg:"".concat(t.img),itemNumber:"".concat(t.number),itemCoord:"".concat(JSON.stringify(t.coordinates)),itemPrevious:"/birds",itemRef:t.ref,itemInfo:t.status}}},{default:Object(e["F"])((function(){return[Object(e["i"])(Object(e["C"])(t.name),1)]})),_:2},1032,["to"])])})),128))]),Object(e["j"])(D,{class:"back",to:"/"},{default:Object(e["F"])((function(){return[a]})),_:1})])}var c=[{routing:"ixobrychus-minutus",name:"Малая выпь",img:"../assets/birds/ixobrychus-minutus.jpg",description:"Птица семейства цаплевых, самая мелкая цапля. Малая выпь гнездится на берегах крупных и мелких водоёмов со стоячей водой, заросших растительностью.",coordinates:{first:{bottom:"10%",left:"10%"},second:{bottom:"15%",left:"10%"},third:{bottom:"14%",left:"22%"},fourth:{bottom:"60%",left:"14%"},fifth:{bottom:"80%",left:"25%"},sixth:{bottom:"50%",left:"70%"}},status:"II категория",ref:"https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F_%D0%B2%D1%8B%D0%BF%D1%8C"},{routing:"melanitta-fusca",name:"Турпан",img:"../assets/birds/melanitta-fusca.jpg",description:"Водоплавающая птица семейства утиных. Питается моллюсками и мелкой рыбой. За кормом ныряет в воду на глубину до 10 м, оставаясь под водой 1 минуту.",coordinates:{first:{bottom:"7%",left:"30%"},second:{bottom:"80%",left:"45%"}},status:"1 категория, исчезающий вид",ref:"https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D1%80%D0%BF%D0%B0%D0%BD"},{routing:"falco-columbarius",name:"Дербник",img:"../assets/birds/falco-columbarius.jpg",description:"Хищная птица, мелкий сокол.",coordinates:{first:{bottom:"85%",left:"25%"},second:{bottom:"65%",left:"26%"},third:{bottom:"75%",left:"24%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%B1%D0%BD%D0%B8%D0%BA"},{routing:"falco-vespertinus",name:"Кобчик",img:"../assets/birds/falco-vespertinus.jpg",description:"Вид хищных птиц рода соколов.",coordinates:{first:{bottom:"50%",left:"50%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B1%D1%87%D0%B8%D0%BA"},{routing:"cygnus",name:"Лебедь-кликун",img:"../assets/birds/cygnus.jpg",description:"Водоплавающая птица из семейства утиных. Лебедь-кликун является национальным символом Финляндии.",coordinates:{first:{bottom:"10%",left:"40%"},second:{bottom:"80%",left:"30%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D1%8C-%D0%BA%D0%BB%D0%B8%D0%BA%D1%83%D0%BD"},{routing:"olor",name:"Лебедь-шипун",img:"../assets/birds/olor.jpg",description:"Птица из семейства утиных. По образу жизни шипун во многом сходен с кликуном. Населяет заросшие водной растительностью водоёмы — лиманы, озёра иногда болота. ",coordinates:{first:{bottom:"10%",left:"10%"},second:{bottom:"15%",left:"25%"},third:{bottom:"85%",left:"30%"}},status:"5 категория, восстанавливаемый вид",ref:"https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D1%8C-%D1%88%D0%B8%D0%BF%D1%83%D0%BD"},{routing:"pernis-apivorus",name:"Обыкновенный осоед",img:"../assets/birds/pernis-apivorus.jpg",description:"Дневной хищник семейства ястребиных отряда ястребообразных. Птица средних размеров, размах крыльев около 1,2 м. Распространён на большей части Европы и на западе Азии, на восток — до Алтая. В целом довольно редкая птица. Наиболее обычен в средней и южной тайге. ",coordinates:{first:{bottom:"14%",left:"22%"},second:{bottom:"70%",left:"23%"},third:{bottom:"8%",left:"50%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%BE%D0%B5%D0%B4"},{routing:"circus-pygargus",name:"Луговой лунь",img:"../assets/birds/circus-pygargus.jpg",description:"Хищная птица семейства ястребиных, распространённая в западной Палеарктике; один из 5-и видов луней, гнездящихся на территории России. Перелётная птица, зимует в тропической Азии и Африке южнее Сахары.",coordinates:{first:{bottom:"14%",left:"26%"},second:{bottom:"15%",left:"70%"},third:{bottom:"24%",left:"24%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D0%B3%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BB%D1%83%D0%BD%D1%8C"},{routing:"lagopus-muta",name:"Тундряная куропатка",img:"../assets/birds/lagopus-muta.jpg",description:"Птица из трибы тетеревиных семейства фазановых. Предпочитает голые скалы, не покрытые кустарником, и держится недалеко от снежной линии.",coordinates:{first:{bottom:"90%",left:"24%"},second:{bottom:"75%",left:"27%"},third:{bottom:"60%",left:"23%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%BD%D0%B4%D1%80%D1%8F%D0%BD%D0%B0%D1%8F_%D0%BA%D1%83%D1%80%D0%BE%D0%BF%D0%B0%D1%82%D0%BA%D0%B0"},{routing:"charadrius-morinellus",name:"Хрустан",img:"../assets/birds/charadrius-morinellus.jpg",description:"Мелкий кулик, птица семейства ржанковых. Гнездится в Евразии в зоне возвышенной каменистой тундры к востоку от Норвегии, а также местами в альпийском поясе горных районов. Зимует в узкой полосе полупустынь в Северной Африке и на Ближнем Востоке от Марокко до Ирака. Питается насекомыми и другими беспозвоночными, главным образом жуками, мухами, червями и улитками. ",coordinates:{first:{bottom:"90%",left:"24%"},second:{bottom:"75%",left:"27%"},third:{bottom:"60%",left:"23%"}},status:"2 категория, очень редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D1%83%D1%81%D1%82%D0%B0%D0%BD"},{routing:"numenius-arquata",name:"Большой кроншнеп",img:"../assets/birds/numenius-arquata.jpg",description:"Большой кроншнеп достигает величины от 50 до 60 см и весит от 600 до 1000 г[2]. Его размах крыльев составляет от 80 до 100 см. Они являются самыми крупными представителями семейства бекасовых и наиболее часто встречающимися в Европе кроншнепами. Характерной чертой большого кроншнепа является длинный и выгнутый вниз клюв.",coordinates:{first:{bottom:"85%",left:"50%"},second:{bottom:"30%",left:"70%"}},status:"2 категория, очень редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%BA%D1%80%D0%BE%D0%BD%D1%88%D0%BD%D0%B5%D0%BF"},{routing:"glaucidium-passerinum",name:"Воробьиный сыч",img:"../assets/birds/glaucidium-passerinum.jpg",description:"Очень маленькая сова, как и все представители рода воробьиных сычей.",coordinates:{first:{bottom:"20%",left:"25%"},second:{bottom:"14%",left:"15%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%B1%D1%8C%D0%B8%D0%BD%D1%8B%D0%B9_%D1%81%D1%8B%D1%87"},{routing:"surnia-ulula",name:"Ястребиная сова",img:"../assets/birds/surnia-ulula.jpg",description:"Среднего размера длиннохвостая сова, сверху шоколадно-бурая с белыми пятнами, снизу почти белая с резкими тонкими поперечными полосками. Глаза и клюв жёлтые, «ушек» нет. Полёт быстрый, прямолинейный, обычно невысоко над землёй.",coordinates:{first:{bottom:"20%",left:"30%"},second:{bottom:"20%",left:"55%"},third:{bottom:"60%",left:"17%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%AF%D1%81%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D0%BD%D0%B0%D1%8F_%D1%81%D0%BE%D0%B2%D0%B0"},{routing:"strix-aluco",name:"Серая неясыть",img:"../assets/birds/strix-aluco.jpg",description:"Птица средней величины из семейства совиных, распространённая на большей части территории Европы, а также в Центральной Азии.",coordinates:{first:{bottom:"20%",left:"30%"},second:{bottom:"20%",left:"55%"}},status:"2 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B0%D1%8F_%D0%BD%D0%B5%D1%8F%D1%81%D1%8B%D1%82%D1%8C"},{routing:"strix-nebulosa",name:"Бородатая неясыть",img:"../assets/birds/strix-nebulosa.jpg",description:"Крупная (размах крыльев до полутора метров) птица из рода неясытей.",coordinates:{first:{bottom:"50%",left:"50%"}},status:"5 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%D1%82%D0%B0%D1%8F_%D0%BD%D0%B5%D1%8F%D1%81%D1%8B%D1%82%D1%8C"},{routing:"alcedo-atthis",name:"Зимородок",img:"../assets/birds/alcedo-atthis.jpg",description:"Мелкая птица семейства зимородковых, немного крупнее воробья. Питается мелкой рыбой (уклейка, бычок-подкаменщик), реже водными беспозвоночными (например, пресноводными креветками).",coordinates:{first:{bottom:"20%",left:"15%"},second:{bottom:"10%",left:"45%"},third:{bottom:"40%",left:"60%"}},status:"4 категория, малоизученный вид",ref:"https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B8%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA"},{routing:"picus-canus",name:"Седой дятел",img:"../assets/birds/picus-canus.jpg",description:"Лесная птица из семейства дятловых, близкий родственник зелёного дятла. Распространён в полосе лесов Евразии от центральных районов Европы на восток до тихоокеанского побережья, Малайского полуострова и Суматры. В зимнее время часто ведёт кочевой образ жизни в пределах гнездового ареала, в тропиках живёт оседло. Почти повсюду редкая птица, однако, по всей видимости, это не связано с антропогенным фактором",coordinates:{first:{bottom:"50%",left:"50%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B4%D0%BE%D0%B9_%D0%B4%D1%8F%D1%82%D0%B5%D0%BB"},{routing:"motacilla-flava",name:"Желтолобая трясогузка",img:"../assets/birds/motacilla-flava.jpg",description:"Небольшая стройная птица семейства трясогузковых, обитающая на обширной территории Европы, Азии, Африки и Аляски. Как и другие виды трясогузок, выделяется своим длинным хвостом, которым постоянно покачивает, а также ярким жёлтым оперением брюшка у взрослых птиц.",coordinates:{first:{bottom:"20%",left:"30%"},second:{bottom:"10%",left:"10%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%96%D1%91%D0%BB%D1%82%D0%B0%D1%8F_%D1%82%D1%80%D1%8F%D1%81%D0%BE%D0%B3%D1%83%D0%B7%D0%BA%D0%B0"},{routing:"cinclus",name:"Оляпка",img:"../assets/birds/cinclus.jpg",description:"Птица отряда воробьинообразных. Её также называют водяной дрозд, или водяной воробей. Птица размером со скворца. Оперение имеет тёмно-бурое с ярким белым передником, густое, несмачивающееся.",coordinates:{first:{bottom:"70%",left:"40%"},second:{bottom:"10%",left:"30%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D1%8F%D0%BF%D0%BA%D0%B0"},{routing:"prunella-atrogularis",name:"Черногорлая завирушка",img:"../assets/birds/prunella-atrogularis.jpg",description:"В Свердловской области вид зарегистрирован в заповеднике «Денежкин Камень».",coordinates:{first:{bottom:"40%",left:"45%"},second:{bottom:"70%",left:"23%"}},status:"3 категория, редкий вид",ref:"https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D0%BB%D0%B0%D1%8F_%D0%B7%D0%B0%D0%B2%D0%B8%D1%80%D1%83%D1%88%D0%BA%D0%B0"}],f={name:"BirdsData",data:function(){return{DataBirds:c}},methods:{}},D=r("6b0d"),d=r.n(D);const b=d()(f,[["render",u]]);i["default"]=b},"746f":function(t,i,r){var e=r("428f"),o=r("1a2d"),s=r("e538"),n=r("9bf2").f;t.exports=function(t){var i=e.Symbol||(e.Symbol={});o(i,t)||n(i,t,{value:s.f(t)})}},8418:function(t,i,r){"use strict";var e=r("a04b"),o=r("9bf2"),s=r("5c6c");t.exports=function(t,i,r){var n=e(i);n in t?o.f(t,n,s(0,r)):t[n]=r}},a4d3:function(t,i,r){"use strict";var e=r("23e7"),o=r("da84"),s=r("d066"),n=r("2ba4"),a=r("c65b"),u=r("e330"),c=r("c430"),f=r("83ab"),D=r("4930"),d=r("d039"),b=r("1a2d"),m=r("e8b5"),l=r("1626"),B=r("861d"),p=r("3a9b"),g=r("d9b5"),h=r("825a"),v=r("7b0b"),w=r("fc6a"),y=r("a04b"),j=r("577e"),k=r("5c6c"),O=r("7c73"),F=r("df75"),A=r("241c"),E=r("057f"),S=r("7418"),_=r("06cf"),x=r("9bf2"),C=r("37e8"),P=r("d1e7"),N=r("f36a"),J=r("6eeb"),I=r("5692"),$=r("f772"),R=r("d012"),q=r("90e3"),z=r("b622"),M=r("e538"),Q=r("746f"),T=r("d44e"),W=r("69f3"),G=r("b727").forEach,H=$("hidden"),K="Symbol",L="prototype",U=z("toPrimitive"),V=W.set,X=W.getterFor(K),Y=Object[L],Z=o.Symbol,tt=Z&&Z[L],it=o.TypeError,rt=o.QObject,et=s("JSON","stringify"),ot=_.f,st=x.f,nt=E.f,at=P.f,ut=u([].push),ct=I("symbols"),ft=I("op-symbols"),Dt=I("string-to-symbol-registry"),dt=I("symbol-to-string-registry"),bt=I("wks"),mt=!rt||!rt[L]||!rt[L].findChild,lt=f&&d((function(){return 7!=O(st({},"a",{get:function(){return st(this,"a",{value:7}).a}})).a}))?function(t,i,r){var e=ot(Y,i);e&&delete Y[i],st(t,i,r),e&&t!==Y&&st(Y,i,e)}:st,Bt=function(t,i){var r=ct[t]=O(tt);return V(r,{type:K,tag:t,description:i}),f||(r.description=i),r},pt=function(t,i,r){t===Y&&pt(ft,i,r),h(t);var e=y(i);return h(r),b(ct,e)?(r.enumerable?(b(t,H)&&t[H][e]&&(t[H][e]=!1),r=O(r,{enumerable:k(0,!1)})):(b(t,H)||st(t,H,k(1,{})),t[H][e]=!0),lt(t,e,r)):st(t,e,r)},gt=function(t,i){h(t);var r=w(i),e=F(r).concat(jt(r));return G(e,(function(i){f&&!a(vt,r,i)||pt(t,i,r[i])})),t},ht=function(t,i){return void 0===i?O(t):gt(O(t),i)},vt=function(t){var i=y(t),r=a(at,this,i);return!(this===Y&&b(ct,i)&&!b(ft,i))&&(!(r||!b(this,i)||!b(ct,i)||b(this,H)&&this[H][i])||r)},wt=function(t,i){var r=w(t),e=y(i);if(r!==Y||!b(ct,e)||b(ft,e)){var o=ot(r,e);return!o||!b(ct,e)||b(r,H)&&r[H][e]||(o.enumerable=!0),o}},yt=function(t){var i=nt(w(t)),r=[];return G(i,(function(t){b(ct,t)||b(R,t)||ut(r,t)})),r},jt=function(t){var i=t===Y,r=nt(i?ft:w(t)),e=[];return G(r,(function(t){!b(ct,t)||i&&!b(Y,t)||ut(e,ct[t])})),e};if(D||(Z=function(){if(p(tt,this))throw it("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,i=q(t),r=function(t){this===Y&&a(r,ft,t),b(this,H)&&b(this[H],i)&&(this[H][i]=!1),lt(this,i,k(1,t))};return f&&mt&&lt(Y,i,{configurable:!0,set:r}),Bt(i,t)},tt=Z[L],J(tt,"toString",(function(){return X(this).tag})),J(Z,"withoutSetter",(function(t){return Bt(q(t),t)})),P.f=vt,x.f=pt,C.f=gt,_.f=wt,A.f=E.f=yt,S.f=jt,M.f=function(t){return Bt(z(t),t)},f&&(st(tt,"description",{configurable:!0,get:function(){return X(this).description}}),c||J(Y,"propertyIsEnumerable",vt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!D,sham:!D},{Symbol:Z}),G(F(bt),(function(t){Q(t)})),e({target:K,stat:!0,forced:!D},{for:function(t){var i=j(t);if(b(Dt,i))return Dt[i];var r=Z(i);return Dt[i]=r,dt[r]=i,r},keyFor:function(t){if(!g(t))throw it(t+" is not a symbol");if(b(dt,t))return dt[t]},useSetter:function(){mt=!0},useSimple:function(){mt=!1}}),e({target:"Object",stat:!0,forced:!D,sham:!f},{create:ht,defineProperty:pt,defineProperties:gt,getOwnPropertyDescriptor:wt}),e({target:"Object",stat:!0,forced:!D},{getOwnPropertyNames:yt,getOwnPropertySymbols:jt}),e({target:"Object",stat:!0,forced:d((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),et){var kt=!D||d((function(){var t=Z();return"[null]"!=et([t])||"{}"!=et({a:t})||"{}"!=et(Object(t))}));e({target:"JSON",stat:!0,forced:kt},{stringify:function(t,i,r){var e=N(arguments),o=i;if((B(i)||void 0!==t)&&!g(t))return m(i)||(i=function(t,i){if(l(o)&&(i=a(o,this,t,i)),!g(i))return i}),e[1]=i,n(et,null,e)}})}if(!tt[U]){var Ot=tt.valueOf;J(tt,U,(function(t){return a(Ot,this)}))}T(Z,K),R[H]=!0},b727:function(t,i,r){var e=r("0366"),o=r("e330"),s=r("44ad"),n=r("7b0b"),a=r("07fa"),u=r("65f0"),c=o([].push),f=function(t){var i=1==t,r=2==t,o=3==t,f=4==t,D=6==t,d=7==t,b=5==t||D;return function(m,l,B,p){for(var g,h,v=n(m),w=s(v),y=e(l,B),j=a(w),k=0,O=p||u,F=i?O(m,j):r||d?O(m,0):void 0;j>k;k++)if((b||k in w)&&(g=w[k],h=y(g,k,v),t))if(i)F[k]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:c(F,g)}else switch(t){case 4:return!1;case 7:c(F,g)}return D?-1:o||f?f:F}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},e01a:function(t,i,r){"use strict";var e=r("23e7"),o=r("83ab"),s=r("da84"),n=r("e330"),a=r("1a2d"),u=r("1626"),c=r("3a9b"),f=r("577e"),D=r("9bf2").f,d=r("e893"),b=s.Symbol,m=b&&b.prototype;if(o&&u(b)&&(!("description"in m)||void 0!==b().description)){var l={},B=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),i=c(m,this)?new b(t):void 0===t?b():b(t);return""===t&&(l[i]=!0),i};d(B,b),B.prototype=m,m.constructor=B;var p="Symbol(test)"==String(b("test")),g=n(m.toString),h=n(m.valueOf),v=/^Symbol\((.*)\)[^)]+$/,w=n("".replace),y=n("".slice);D(m,"description",{configurable:!0,get:function(){var t=h(this),i=g(t);if(a(l,t))return"";var r=p?y(i,7,-1):w(i,v,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:B})}},e538:function(t,i,r){var e=r("b622");i.f=e},e8b5:function(t,i,r){var e=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},e9c4:function(t,i,r){var e=r("23e7"),o=r("da84"),s=r("d066"),n=r("2ba4"),a=r("e330"),u=r("d039"),c=o.Array,f=s("JSON","stringify"),D=a(/./.exec),d=a("".charAt),b=a("".charCodeAt),m=a("".replace),l=a(1..toString),B=/[\uD800-\uDFFF]/g,p=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,h=function(t,i,r){var e=d(r,i-1),o=d(r,i+1);return D(p,t)&&!D(g,o)||D(g,t)&&!D(p,e)?"\\u"+l(b(t,0),16):t},v=u((function(){return'"\\udf06\\ud834"'!==f("\udf06\ud834")||'"\\udead"'!==f("\udead")}));f&&e({target:"JSON",stat:!0,forced:v},{stringify:function(t,i,r){for(var e=0,o=arguments.length,s=c(o);e<o;e++)s[e]=arguments[e];var a=n(f,null,s);return"string"==typeof a?m(a,B,h):a}})}}]);
//# sourceMappingURL=chunk-0217fda2.75827d03.js.map