(function(e){function t(t){for(var n,i,r=t[0],a=t[1],s=t[2],m=0,b=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,s||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],n=!0,r=1;r<c.length;r++){var a=c[r];0!==o[a]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=c[0]))}return e}var n={},o={app:0},l=[];function i(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(c,n,function(t){return e[t]}.bind(null,n));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var d=a;l.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"23d1":function(e,t,c){},"469a":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function o(e,t,c,o,l,i){var r=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(r)])}var l={data:function(){return{userTheme:"light-theme"}},methods:{setTheme:function(e){localStorage.setItem("user-theme",e),this.userTheme=e,document.documentElement.className=e},toggleTheme:function(){var e=localStorage.getItem("user-theme");"light-theme"===e?this.setTheme("dark-theme"):this.setTheme("light-theme")}}},i=(c("7a78"),c("6b0d")),r=c.n(i);const a=r()(l,[["render",o]]);var s=a,d=c("6c02"),m=c("f8ac"),b=c.n(m),u={class:"box"},p={class:"loadingWindow"},f=Object(n["createElementVNode"])("div",{class:"logo"},[Object(n["createElementVNode"])("div",{class:"logoChem"},[Object(n["createElementVNode"])("img",{src:b.a})]),Object(n["createElementVNode"])("div",{class:"logoName"},[Object(n["createElementVNode"])("h2",{class:"appName"},"ChemBook 3D"),Object(n["createElementVNode"])("h2",{style:{color:"red","font-size":"16px"}},"demo"),Object(n["createElementVNode"])("h4",null,"Карманный справочник")])],-1),O={class:"bgBlock"},j=Object(n["createElementVNode"])("div",{class:"colorWavy"},null,-1),h=Object(n["createElementVNode"])("button",{class:"logInBtn"},[Object(n["createTextVNode"])(" Начать! "),Object(n["createElementVNode"])("i",{class:"fa-regular fa-chevron-right fa-lg",style:{"margin-left":"15px"}})],-1);function E(e,t){var c=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",u,[Object(n["createElementVNode"])("div",p,[f,Object(n["createElementVNode"])("div",O,[j,Object(n["createVNode"])(c,{to:"app"},{default:Object(n["withCtx"])((function(){return[h]})),_:1})])])])}const v={},S=r()(v,[["render",E]]);var k=S,g=(c("b0c0"),c("c5d4")),V=c.n(g),N=c("c949"),y=c.n(N),w={class:"appWindow"},I={class:"frame"},A=Object(n["createElementVNode"])("button",{class:"menu"},[Object(n["createElementVNode"])("i",{class:"fa-regular fa-bars fa-xl",style:{color:"var(--icon-color-primary)",position:"absolute"}})],-1),B={class:"window"},C={id:"left"},x={id:"select"},R={key:0,class:"fa-solid fa-angles-left"},K={key:1,class:"fa-solid fa-angles-right"},T={key:0,class:"notification"},F=Object(n["createElementVNode"])("img",{src:V.a,class:"arrow",width:"100",height:"100"},null,-1),Z=Object(n["createElementVNode"])("h3",null,"Выберите соединение из списка слева.",-1),J=Object(n["createElementVNode"])("img",{src:y.a,class:"pap",width:"200",height:"200"},null,-1),P=[F,Z,J],X={key:1,class:"notification"},M=Object(n["createElementVNode"])("h3",null,"Разверните список слева.",-1),D=Object(n["createElementVNode"])("img",{src:y.a,class:"pap",width:"200",height:"200"},null,-1),W=[M,D],z={key:2,class:"compoundWindow"},U={key:0,class:"model"},q={key:0,class:"fa-solid fa-angles-left"},L={key:1,class:"fa-solid fa-angles-right"},G={key:1,id:"right"},H={key:0,id:"listInfo"},Y={key:0},Q={class:"compound"},_=Object(n["createElementVNode"])("h6",{class:"description"},"Название соединения:",-1),$=Object(n["createElementVNode"])("h3",{style:{margin:"15px","font-size":"14px",color:"var(--contrast-color-dark)"}}," Физические свойства: ",-1),ee={class:"compound"},te=Object(n["createElementVNode"])("h6",{class:"description"},"Агрегатное состояние:",-1),ce={class:"compound"},ne=Object(n["createElementVNode"])("h6",{class:"description"},"Цвет:",-1),oe={class:"compound"},le=Object(n["createElementVNode"])("h6",{class:"description"},"Запах:",-1),ie={class:"compound"},re=Object(n["createElementVNode"])("h6",{class:"description"},"Растворимость в воде:",-1),ae=Object(n["createElementVNode"])("h3",{style:{margin:"15px","font-size":"14px",color:"var(--contrast-color-dark)"}}," Химические свойства: ",-1),se={class:"compound"},de=Object(n["createElementVNode"])("h6",{class:"description"},"Агрегатное состояние:",-1),me={class:"compound"},be=Object(n["createElementVNode"])("h6",{class:"description"},"Цвет:",-1),ue={class:"compound"},pe=Object(n["createElementVNode"])("h6",{class:"description"},"Запах:",-1),fe={class:"compound"},Oe=Object(n["createElementVNode"])("h6",{class:"description"},"Растворимость в воде:",-1),je=Object(n["createElementVNode"])("button",{class:"btnBack"},[Object(n["createElementVNode"])("i",{class:"fa-duotone fa-arrow-left-from-line fa-lg"})],-1);function he(e,t,c,o,l,i){var r=Object(n["resolveComponent"])("v-select"),a=Object(n["resolveComponent"])("v-model"),s=Object(n["resolveComponent"])("router-link"),d=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("div",I,[A,Object(n["createElementVNode"])("div",B,[Object(n["withDirectives"])(Object(n["createElementVNode"])("div",C,[Object(n["createElementVNode"])("div",x,[Object(n["createVNode"])(r,{options:l.compounds,label:"title",reduce:function(e){return e.id},modelValue:l.selected,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.selected=e}),searchable:!1,style:{width:"90%"}},null,8,["options","reduce","modelValue"])])],512),[[n["vShow"],1==l.visibleSelect]]),Object(n["createElementVNode"])("button",{class:Object(n["normalizeClass"])(["show showSelect",{isShowSelect:0==l.visibleSelect}]),onClick:t[1]||(t[1]=Object(n["withModifiers"])((function(){return i.showSelect&&i.showSelect.apply(i,arguments)}),["prevent"]))},[1==l.visibleSelect?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",R)):Object(n["createCommentVNode"])("",!0),0==l.visibleSelect?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",K)):Object(n["createCommentVNode"])("",!0)],2),null==l.selected&&1==l.visibleSelect?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",T,P)):0==l.visibleSelect&&null==l.selected?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",X,W)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",z,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.compounds,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"compList",key:t},[e.id==l.selected?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",U,[Object(n["createVNode"])(a,{"gltf-file":e.gltfFile},null,8,["gltf-file"])])):Object(n["createCommentVNode"])("",!0)])})),128))]),null!=l.selected?(Object(n["openBlock"])(),Object(n["createElementBlock"])("button",{key:0,class:Object(n["normalizeClass"])(["show showInfo",{isShowInfo:0==l.visibleInfo}]),onClick:t[2]||(t[2]=Object(n["withModifiers"])((function(){return i.showInfo&&i.showInfo.apply(i,arguments)}),["prevent"]))},[0==l.visibleInfo?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",q)):Object(n["createCommentVNode"])("",!0),1==l.visibleInfo?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",L)):Object(n["createCommentVNode"])("",!0)],2)):Object(n["createCommentVNode"])("",!0),1==l.visibleInfo?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",G,[null!=l.selected?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",H,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(l.compounds,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"compList",key:t},[e.id==l.selected?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Y,[Object(n["createElementVNode"])("div",Q,[_,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.name),1)]),$,Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",ee,[te,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.agregate),1)]),Object(n["createElementVNode"])("div",ce,[ne,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.color),1)]),Object(n["createElementVNode"])("div",oe,[le,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.smell),1)]),Object(n["createElementVNode"])("div",ie,[re,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.solubility),1)])]),ae,Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",se,[de,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.agregate),1)]),Object(n["createElementVNode"])("div",me,[be,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.color),1)]),Object(n["createElementVNode"])("div",ue,[pe,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.smell),1)]),Object(n["createElementVNode"])("div",fe,[Oe,Object(n["createElementVNode"])("h5",null,Object(n["toDisplayString"])(e.info.solubility),1)])])])):Object(n["createCommentVNode"])("",!0)])})),128))])):Object(n["createCommentVNode"])("",!0)])):Object(n["createCommentVNode"])("",!0)])]))])])]),Object(n["createVNode"])(s,{to:"/"},{default:Object(n["withCtx"])((function(){return[je]})),_:1}),Object(n["createVNode"])(d)])}var Ee={data:function(){return{compounds:[{id:1,title:"Метан",gltfFile:"models/untitled.gltf",info:{name:"Метан",agregate:"Газ",color:"Бесцветное вещество",smell:"Без запаха",solubility:"Малорастворим"}},{id:2,title:"Метанол",gltfFile:"models/untitled.gltf",info:{name:"Метанол",agregate:"Жидкость",color:"Бесцетное вещество",smell:"Похож на запах этилового спирта, но более слабый",solubility:"Хорошо растворим"}},{id:3,title:"Уксусная кислота",gltfFile:"models/untitled.gltf",info:{name:"Уксусная кислота",agregate:"Жидкость",color:"Бесцветное вещество",smell:"Резкий",solubility:"Неограниченно растворима в воде"}},{id:4,title:"Диметиловый эфир",gltfFile:"models/untitled.gltf",info:{name:"Диметиловый эфир",agregate:"Газ",color:"Бесцветное вещество",smell:"Эфирный запах, напоминающий хлороформ",solubility:"Хорошо растворим"}},{id:5,title:"Этанол",gltfFile:"models/untitled.gltf",info:{name:"Этанол",agregate:"Жидкость",color:"Бесцветное вещество",smell:"Характерный спиртовой запах",solubility:"Хорошо растворим"}}],visibleSelect:!0,visibleInfo:!0,selected:null}},methods:{showSelect:function(){1==this.visibleSelect?this.visibleSelect=!1:this.visibleSelect=!0},showInfo:function(){1==this.visibleInfo?this.visibleInfo=!1:this.visibleInfo=!0}}};const ve=r()(Ee,[["render",he]]);var Se=ve,ke=[{path:"/",name:"loading",component:k},{path:"/app",name:"main",component:Se}],ge=Object(d["a"])({history:Object(d["b"])("/"),routes:ke}),Ve=ge,Ne=c("5502"),ye=Object(Ne["a"])({state:{},mutations:{},actions:{},modules:{}}),we=c("4a7a"),Ie=c.n(we),Ae={class:"container"};function Be(e,t,c,o,l,i){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ae)}var Ce=c("5a89"),xe=c("34ad"),Re=c("4721"),Ke={props:{gltfFile:String},data:function(){return{}},methods:{init:function(){var e=this,t=document.querySelector(".container");this.scene=new Ce["ab"],this.camera=new Ce["S"](5,1.93,.5,1e3),this.camera.position.z=70,this.camera.position.y=30,this.camera.position.x=15,this.renderer=new Ce["pb"]({alpha:!0,antialias:!0}),this.renderer.setSize(1160,600),t.appendChild(this.renderer.domElement);var c=new Re["a"](this.camera,this.renderer.domElement);c.update(),c.enableDamping=!0,c.minDistance=10,c.maxDistance=40;var n=new Ce["a"](16777215,.3);this.scene.add(n);var o=new Ce["T"](12895428,.5);o.position.set(0,300,500),this.scene.add(o);var l=new Ce["T"](12895428,.5);l.position.set(500,300,500),this.scene.add(l);var i=new Ce["T"](12895428,.5);i.position.set(0,300,-500),this.scene.add(i);var r=new Ce["T"](12895428,.5);r.position.set(-500,300,500),this.scene.add(r);var a=new xe["a"];function s(){this.camera.aspect=1.93,this.camera.updateProjectionMatrix(),this.renderer.setSize(1160,600)}a.load(this.gltfFile,(function(t){e.scene.add(t.scene)}),(function(e){console.log("Error: "+e)})),window.addEventListener("resize",s,!1)},animate:function(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()}};c("799e");const Te=r()(Ke,[["render",Be],["__scopeId","data-v-7af26fd1"]]);var Fe=Te;Object(n["createApp"])(s).component("v-select",Ie.a).component("v-model",Fe).use(ye).use(Ve).mount("#app")},"799e":function(e,t,c){"use strict";c("469a")},"7a78":function(e,t,c){"use strict";c("23d1")},c5d4:function(e,t){e.exports="data:image/png;base64,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"},c949:function(e,t,c){e.exports=c.p+"img/pa.f391d1dc.png"},f8ac:function(e,t,c){e.exports=c.p+"img/atom-svgrepo-com.e981595c.svg"}});
//# sourceMappingURL=app.79edd1ed.js.map