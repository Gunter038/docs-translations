"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5435],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s="Optimint",c={unversionedId:"developers/optimint",id:"developers/optimint",title:"Optimint",description:"optimint",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/optimint.md",sourceDirName:"developers",slug:"/developers/optimint",permalink:"/zh/developers/optimint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/optimint.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Node API",permalink:"/zh/developers/node-api"},next:{title:"Wordle",permalink:"/zh/category/wordle"}},p={},u=[{value:"Tutorials",id:"tutorials",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optimint"},"Optimint"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"optimint",src:n(2944).Z,width:"1440",height:"1024"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimint"},"Optimint")," is an Optimistic-Rollup\nimplementation of ABCI (Application Blockchain Interface) in\norder to build sovereign chains using the Cosmos-SDK for Celestia."),(0,o.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,o.kt)("p",null,"It spins up an optimistic rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,o.kt)("p",null,"The goal of Optimint is to enable anyone to design and deploy a Cosmos Zone\non Celestia in minutes."),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Optimint. We call those chains Sovereign Rollups."),(0,o.kt)("p",null,"You can get started with the following tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/developers/wordle"},"Wordle Game")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/developers/cosmwasm"},"CosmWasm Tutorial"))))}d.isMDXComponent=!0},2944:function(e,t,n){t.Z=n.p+"assets/images/optimint-b128a23d02ceb733f25ac12a6feccba1.png"}}]);