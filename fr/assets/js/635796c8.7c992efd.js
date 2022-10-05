"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1445],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s="Introduction",l={unversionedId:"concepts/how-celestia-works/introduction",id:"concepts/how-celestia-works/introduction",title:"Introduction",description:"Celestia est un r\xe9seau de blockchain modulaire dont le but est de construire une couche de disponibilit\xe9 de donn\xe9es scalable, permettant la prochaine g\xe9n\xe9ration d'architectures blockchain scalables - les blockchains modulaires. Celestia scale en d\xe9couplant l'ex\xe9cution du consensus et en introduisant une nouvelle primitive, l'\xe9chantillonnage de la disponibilit\xe9 des donn\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/concepts/how-celestia-works/introduction.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/introduction",permalink:"/fr/concepts/how-celestia-works/introduction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"concepts",previous:{title:"How Celestia Works",permalink:"/fr/category/how-celestia-works"},next:{title:"monolithic-vs-modular",permalink:"/fr/concepts/how-celestia-works/monolithic-vs-modular"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Celestia est un r\xe9seau de blockchain modulaire dont le but est de construire ",(0,i.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-a-scalable-general-purpose-data-availability-layer-for-decentralized-apps-and-trust-minimized-sidechains/"},"une couche de disponibilit\xe9 de donn\xe9es")," scalable, permettant la prochaine g\xe9n\xe9ration d'architectures blockchain scalables - les ",(0,i.kt)("a",{parentName:"p",href:"https://celestia.org/learn/"},"blockchains modulaires"),". Celestia scale en ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.09274"},"d\xe9couplant l'ex\xe9cution du consensus")," et en introduisant une nouvelle primitive, ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"l'\xe9chantillonnage de la disponibilit\xe9 des donn\xe9es"),"."),(0,i.kt)("p",null,"La premi\xe8re implique que Celestia n'est responsable que de l'ordre des transactions et de la garantie de la disponibilit\xe9 des donn\xe9es ; c'est similaire \xe0 ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Atomic_broadcast#Equivalent_to_Consensus"},"r\xe9duire le consensus \xe0 la diffusion atomique"),"."),(0,i.kt)("p",null,"Cette derni\xe8re offre une solution efficace au ",(0,i.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/alexandria/article/what-is-data-availability"},"probl\xe8me de disponibilit\xe9 des donn\xe9es")," en ne demandant qu'aux light nodes aux ressources limit\xe9es d'\xe9chantillonner un petit nombre de morceaux al\xe9atoires de chaque bloc pour v\xe9rifier la disponibilit\xe9 des donn\xe9es."),(0,i.kt)("p",null,"Il est int\xe9ressant de noter qu'un plus grand nombre de light nodes participant \xe0 l'\xe9chantillonnage augmente la quantit\xe9 de donn\xe9es que le r\xe9seau peut traiter en toute s\xe9curit\xe9, permettant \xe0 la taille du bloc d'augmenter sans augmenter \xe9galement le co\xfbt de v\xe9rification de la chain."))}m.isMDXComponent=!0}}]);