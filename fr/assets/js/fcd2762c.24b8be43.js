"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5067],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return x}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),x=l,f=d["".concat(u,".").concat(x)]||d[x]||p[x]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function x(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6697:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return x},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),l=r(3366),a=(r(7294),r(3905)),o=["components"],i={},u=void 0,c={unversionedId:"developers/wallet",id:"developers/wallet",title:"wallet",description:"- - -",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/wallet.md",sourceDirName:"developers",slug:"/developers/wallet",permalink:"/fr/developers/wallet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wallet.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"celestia-app",permalink:"/fr/developers/celestia-app"},next:{title:"instantiate-testnet",permalink:"/fr/developers/instantiate-testnet"}},s={},p=[{value:"Cr\xe9er un Wallet (Portefeuille)",id:"cr\xe9er-un-wallet-portefeuille",level:2},{value:"Financer un Wallet",id:"financer-un-wallet",level:2}],d={toc:p};function x(e){var t=e.components,r=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"sidebar_label : Cr\xe9ation d'un Wallet"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"wallet"},"Wallet"),(0,a.kt)("h2",{id:"cr\xe9er-un-wallet-portefeuille"},"Cr\xe9er un Wallet (Portefeuille)"),(0,a.kt)("p",null,"Tout d'abord, cr\xe9ez un fichier de configuration CLI de l'application :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,a.kt)("p",null,'Vous pouvez choisir le nom de Wallet que vous voulez. Pour notre exemple, nous avons utilis\xe9 "validator" comme nom de wallet :'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys add validator\n")),(0,a.kt)("p",null,"Enregistrez la sortie mn\xe9monique car c'est la seule fa\xe7on de r\xe9cup\xe9rer votre wallet de validateur en cas de perte !"),(0,a.kt)("p",null,"Pour v\xe9rifier tous vos portefeuilles, vous pouvez ex\xe9cuter :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys list\n")),(0,a.kt)("h2",{id:"financer-un-wallet"},"Financer un Wallet"),(0,a.kt)("p",null,"Pour l'adresse publique de Celestia, vous pouvez financer le portefeuille pr\xe9c\xe9demment cr\xe9\xe9 via ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/celestiacommunity"},"Discord")," en envoyant ce message au canal #faucet :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"$request celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,a.kt)("p",null,"Attendez de voir si vous obtenez une confirmation que les tokens (jetons) ont \xe9t\xe9 envoy\xe9s avec succ\xe8s. Pour v\xe9rifier si les tokens sont arriv\xe9s avec succ\xe8s \xe0 destination du wallet ex\xe9cutez la commande ci-dessous en rempla\xe7ant l'adresse publique avec la v\xf4tre :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\ncelestia-appd query bank balances celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")))}x.isMDXComponent=!0}}]);