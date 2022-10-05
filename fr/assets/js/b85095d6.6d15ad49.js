"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4928],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6859:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={sidebar_label:"Installer Optimint"},c="Configurer Optimint",s={unversionedId:"developers/install-optimint",id:"developers/install-optimint",title:"Configurer Optimint",description:"Avant que nous ne continuions de construire notre Wordle App, nous devons configurer Optimint dans notre code base.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/install-optimint.md",sourceDirName:"developers",slug:"/developers/install-optimint",permalink:"/fr/developers/install-optimint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/install-optimint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Installer Optimint"},sidebar:"developers",previous:{title:"Echafauder la chaine",permalink:"/fr/developers/scaffold-wordle"},next:{title:"Module",permalink:"/fr/developers/wordle-module"}},u={},p=[{value:"Installer Optimint",id:"installer-optimint",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configurer-optimint"},"Configurer Optimint"),(0,i.kt)("p",null,"Avant que nous ne continuions de construire notre Wordle App, nous devons configurer Optimint dans notre code base."),(0,i.kt)("h2",{id:"installer-optimint"},"Installer Optimint"),(0,i.kt)("p",null,"Ex\xe9cuter la commande suivante dans le r\xe9pertoire ",(0,i.kt)("inlineCode",{parentName:"p"},"wordle"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk@v0.45.4-optimint-v0.3.5\ngo mod tidy\ngo mod download\n")),(0,i.kt)("p",null,"Gr\xe2ce \xe0 cela, nous avons les changements d'Optimint ajout\xe9s au r\xe9pertoire du projet. Maintenant, construisons la Wordle App !"))}m.isMDXComponent=!0}}]);