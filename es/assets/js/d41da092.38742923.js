"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7449],{3905:function(e,n,o){o.d(n,{Zo:function(){return c},kt:function(){return m}});var r=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function d(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=r.createContext({}),i=function(e){var n=r.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},c=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=i(o),m=t,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(f,l(l({ref:n},c),{},{components:o})):r.createElement(f,l({ref:n},c))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,l=new Array(a);l[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:t,l[1]=d;for(var i=2;i<a;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5973:function(e,n,o){o.r(n),o.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return i},toc:function(){return u}});var r=o(7462),t=o(3366),a=(o(7294),o(3905)),l=["components"],d={sidebar_label:"M\xf3dulo"},s="Creando el m\xf3dulo Wordle",i={unversionedId:"developers/wordle-module",id:"developers/wordle-module",title:"Creando el m\xf3dulo Wordle",description:"Para el m\xf3dulo Wordle, podemos a\xf1adir dependencias ofrecidas por Cosmos-SDK.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/wordle-module.md",sourceDirName:"developers",slug:"/developers/wordle-module",permalink:"/es/developers/wordle-module",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-module.md",tags:[],version:"current",frontMatter:{sidebar_label:"M\xf3dulo"},sidebar:"developers",previous:{title:"Instalando Optimint",permalink:"/es/developers/install-optimint"},next:{title:"Mensajes",permalink:"/es/developers/wordle-messages"}},c={},u=[{value:"Andamiaje (Scaffolding) de un M\xf3dulo",id:"andamiaje-scaffolding-de-un-m\xf3dulo",level:2}],p={toc:u};function m(e){var n=e.components,o=(0,t.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creando-el-m\xf3dulo-wordle"},"Creando el m\xf3dulo Wordle"),(0,a.kt)("p",null,"Para el m\xf3dulo Wordle, podemos a\xf1adir dependencias ofrecidas por Cosmos-SDK."),(0,a.kt)("p",null,"De los documentos Cosmos-SDK, un ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ignite.com/guide/nameservice#cosmos-sdk-modules"},"m\xf3dulo")," se define como lo siguiente:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En una blockchain de Cosmos SDK, la l\xf3gica espec\xedfica de la aplicaci\xf3n se implementa en m\xf3dulos separados. Los m\xf3dulos mantienen el c\xf3digo f\xe1cil de entender y reutilizar. Cada m\xf3dulo contiene su propio mensaje y procesador de transacciones, mientras que el SDK de Cosmos es responsable de enrutar cada mensaje a su m\xf3dulo correspondiente.")),(0,a.kt)("p",null,"Existen muchos m\xf3dulos para particionar, validar, autenticar."),(0,a.kt)("h2",{id:"andamiaje-scaffolding-de-un-m\xf3dulo"},"Andamiaje (Scaffolding) de un M\xf3dulo"),(0,a.kt)("p",null,"Utilizaremos la dependencia del m\xf3dulo ",(0,a.kt)("inlineCode",{parentName:"p"},"bank")," para las transacciones."),(0,a.kt)("p",null,"De los documentos Cosmos-SDK, un m\xf3dulo ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/modules/bank/"},(0,a.kt)("inlineCode",{parentName:"a"},"bank"))," se define como lo siguiente:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"El m\xf3dulo bank es responsable de manejar transferencias de monedas de m\xfaltiples activos entre cuentas y el seguimiento de pseudo-transferencias especiales que deben funcionar de forma diferente con tipos particulares de cuentas (principalmente delegando/deseleccionando para cuentas de inversi\xf3n). Expone varias interfaces con capacidades variables para una interacci\xf3n segura con otros m\xf3dulos que deben modificar el balance del usuario.")),(0,a.kt)("p",null,"Construiremos el m\xf3dulo con la dependencia del ",(0,a.kt)("inlineCode",{parentName:"p"},"bank")," con el siguiente comando:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold module wordle --dep bank\n")),(0,a.kt)("p",null,"Esto crear\xe1 el andamiaje (scaffold) del m\xf3dulo de Wordle a nuestro proyecto Wordle Chain."))}m.isMDXComponent=!0}}]);