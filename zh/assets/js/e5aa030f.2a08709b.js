"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9971],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8915:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],c={sidebar_label:"CosmWasm \u8d44\u6599"},i="CosmWasm \u8d44\u6599",l={unversionedId:"developers/cosmwasm-resources",id:"developers/cosmwasm-resources",title:"CosmWasm \u8d44\u6599",description:"\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u4f7f\u7528CosmWasm\u5728Celestia\u4e0a\u521b\u5efa\u667a\u80fd\u5408\u7ea6\u7684\u8d44\u6599\u6e90\uff0c\u8bf7\u67e5\u770b\u4ee5\u4e0b\u8d44\u6599\u6e05\u5355\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/cosmwasm-resources.md",sourceDirName:"developers",slug:"/developers/cosmwasm-resources",permalink:"/zh/developers/cosmwasm-resources",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-resources.md",tags:[],version:"current",frontMatter:{sidebar_label:"CosmWasm \u8d44\u6599"},sidebar:"developers",previous:{title:"\u5408\u7ea6\u4ea4\u4e92",permalink:"/zh/developers/cosmwasm-contract-interaction"},next:{title:"\u96c6\u6210Celestia",permalink:"/zh/developers/integrate-celestia"}},u={},m=[{value:"\u4ee3\u5e01",id:"\u4ee3\u5e01",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],p={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmwasm-\u8d44\u6599"},"CosmWasm \u8d44\u6599"),(0,o.kt)("p",null,"\u83b7\u53d6\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u4f7f\u7528CosmWasm\u5728Celestia\u4e0a\u521b\u5efa\u667a\u80fd\u5408\u7ea6\u7684\u8d44\u6599\u6e90\uff0c\u8bf7\u67e5\u770b\u4ee5\u4e0b\u8d44\u6599\u6e05\u5355\u3002"),(0,o.kt)("h2",{id:"\u4ee3\u5e01"},"\u4ee3\u5e01"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/cw20-atomic-swap/latest/cw20_atomic_swap/"},"\u539f\u5b50\u4ea4\u6362")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/cw20-staking/latest/cw20_staking/"},"\u8d28\u62bc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/cw20-bonding/latest/cw20_bonding/"},"\u503a\u5238")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/cw20-escrow/latest/cw20_escrow/"},"\u6258\u7ba1"))),(0,o.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cw-nfts/tree/main/contracts"},"NFTs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/cosmwasm-storage"},"\u5b58\u50a8\u7a7a\u95f4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/DA0-DA0/dao-contracts/tree/main/contracts"},"\u53bb\u4e2d\u5fc3\u5316\u81ea\u6cbb\u7ec4\u7ec7\uff08DAOs\uff09"))),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u4e5f\u8bf7\u67e5\u770bCosmWasm Awesome\u6e05\u5355\u83b7\u53d6",(0,o.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-awesome/"},"\u66f4\u591a\u8d44\u6599")))}f.isMDXComponent=!0}}]);