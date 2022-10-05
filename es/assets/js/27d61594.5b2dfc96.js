"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1588],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,s(s({ref:r},c),{},{components:t})):n.createElement(f,s({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9254:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],l={sidebar_label:"Tipos"},i="Tipos de Wordle",p={unversionedId:"developers/wordle-types",id:"developers/wordle-types",title:"Tipos de Wordle",description:"Para los siguientes pasos, crearemos tipos para ser utilizados por los mensajes que creamos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/wordle-types.md",sourceDirName:"developers",slug:"/developers/wordle-types",permalink:"/es/developers/wordle-types",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-types.md",tags:[],version:"current",frontMatter:{sidebar_label:"Tipos"},sidebar:"developers",previous:{title:"Mensajes",permalink:"/es/developers/wordle-messages"},next:{title:"Keeper",permalink:"/es/developers/wordle-keeper"}},c={},u=[{value:"Tipos de Scaffol Wordle",id:"tipos-de-scaffol-wordle",level:2}],d={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tipos-de-wordle"},"Tipos de Wordle"),(0,a.kt)("p",null,"Para los siguientes pasos, crearemos tipos para ser utilizados por los mensajes que creamos."),(0,a.kt)("h2",{id:"tipos-de-scaffol-wordle"},"Tipos de Scaffol Wordle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold map wordle word submitter --no-message\n")),(0,a.kt)("p",null,"Este tipo es un mapa llamado ",(0,a.kt)("inlineCode",{parentName:"p"},"Wordle")," con dos valores ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"submitter"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"submitter")," es la direcci\xf3n de la persona que envi\xf3 la Wordle."),(0,a.kt)("p",null,"El segundo tipo es el tipo ",(0,a.kt)("inlineCode",{parentName:"p"},"Guess"),". Nos permite almacenar la \xfaltima conjetura para cada direcci\xf3n que present\xf3 una soluci\xf3n."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold map guess word submitter count --no-message\n")),(0,a.kt)("p",null,"Aqu\xed tambi\xe9n estamos almacenando ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," para contar cu\xe1ntos supuestos enviaron esta direcci\xf3n."))}m.isMDXComponent=!0}}]);