"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2777],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],a={},l=void 0,c={unversionedId:"concepts/how-celestia-works/monolithic-vs-modular",id:"concepts/how-celestia-works/monolithic-vs-modular",title:"monolithic-vs-modular",description:"- - -",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/concepts/how-celestia-works/monolithic-vs-modular.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/monolithic-vs-modular",permalink:"/fr/concepts/how-celestia-works/monolithic-vs-modular",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/monolithic-vs-modular.md",tags:[],version:"current",frontMatter:{},sidebar:"concepts",previous:{title:"Introduction",permalink:"/fr/concepts/how-celestia-works/introduction"},next:{title:"data-availability-layer",permalink:"/fr/concepts/how-celestia-works/data-availability-layer"}},u={},p=[],d={toc:p};function m(e){var t=e.components,a=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"sidebar_label : Blockchains Monolithique vs Modulaires"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"blockchains-monolithiques-vs-modulaires"},"Blockchains monolithiques vs modulaires"),(0,o.kt)("p",null,"Les Blockchains instancient ",(0,o.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/abs/10.1145/98163.98167"},"les machines d'\xe9tat r\xe9pliqu\xe9es"),": les n\u0153uds dans un r\xe9seau distribu\xe9 permissionless appliquent une s\xe9quence ordonn\xe9e de transactions d\xe9terministes \xe0 un \xe9tat initial donnant lieu \xe0 un \xe9tat final commun. Cela signifie que les blockchains n\xe9cessitent les quatre fonctions suivantes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"L'ex\xe9cution")," implique l'ex\xe9cution de transactions qui mettent \xe0 jour l'\xe9tat correctement. Ainsi, l'ex\xe9cution doit s'assurer que seules les transactions valides sont ex\xe9cut\xe9es, c'est-\xe0-dire, des transactions qui entra\xeenent des transitions d'\xe9tat de machine valides."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Le r\xe8glement")," implique un environnement pour les couches d'ex\xe9cution pour v\xe9rifier les preuves, r\xe9soudre les litiges de fraude et faire le lien entre les autres couches d'ex\xe9cution."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Le consensus")," consiste \xe0 se mettre d'accord sur l'ordre des transactions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"La disponibilit\xe9 des donn\xe9es")," (DA : Data Availability) implique de rendre les donn\xe9es de transaction disponibles. Notez que l'ex\xe9cution, le r\xe8glement et le consensus requi\xe8rent une DA.")),(0,o.kt)("p",null,"Les blockchains traditionnels, c'est-\xe0-dire ",(0,o.kt)("em",{parentName:"p"},"les blockchains monolithiques"),", impl\xe9mentent les quatre fonctions ensemble dans une seule couche de consensus de base (consensus layer). Le probl\xe8me avec les blockchains monolithiques est que la couche de consensus doit effectuer beaucoup de t\xe2ches diff\xe9rentes et ne peut pas \xeatre optimis\xe9e pour une seule de ces fonctions. En cons\xe9quence, le paradigme monolithique limite le d\xe9bit du syst\xe8me."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Modulaire VS Monolithique",src:n(5847).Z,width:"1428",height:"578"})),(0,o.kt)("p",null,"En guise de solution, les blockchains modulaires d\xe9couplent ces fonctions parmi plusieurs couches sp\xe9cialis\xe9es dans le cadre d'une pile modulaire. Gr\xe2ce \xe0 la flexibilit\xe9 qu'offre la sp\xe9cialisation, il y a de nombreuses possibilit\xe9s dans lesquelles cette pile peut \xeatre organis\xe9e. Par exemple, l'une de ces modalit\xe9s est la s\xe9paration des quatre fonctions en trois couches sp\xe9cialis\xe9es."),(0,o.kt)("p",null,"La couche de base (base layer) se compose de la DA et du consensus et est donc appel\xe9e la couche de Consensus et de DA (ou, par souci de concision, la couche de DA), tandis que le r\xe8glement et l'ex\xe9cution sont plac\xe9s au-dessus dans leurs propres couches. Par cons\xe9quent, chaque couche peut \xeatre sp\xe9cialis\xe9e pour n'ex\xe9cuter que sa fonction de mani\xe8re optimale et ainsi, augmenter le d\xe9bit du syst\xe8me. En outre, ce paradigme modulaire permet plusieurs couches d'ex\xe9cution, c'est-\xe0-dire ",(0,o.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/01/05/rollup.html"},"rollups"),", d'utiliser les m\xeames couches de r\xe8glement et de DA."))}m.isMDXComponent=!0},5847:function(e,t,n){t.Z=n.p+"assets/images/monolithic-modular-d2ebbbc814c3338adf1cdd8b91eef221.png"}}]);