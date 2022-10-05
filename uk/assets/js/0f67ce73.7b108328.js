"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[716],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9436:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_label:"\u0406\u043d\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043d\u043d\u044f Celestia"},s="\u0406\u043d\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043d\u043d\u044f Celestia",c={unversionedId:"developers/integrate-celestia",id:"developers/integrate-celestia",title:"\u0406\u043d\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043d\u043d\u044f Celestia",description:"\u0426\u0435\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0456\u0445 \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0456\u0432 \u043f\u043e\u0441\u043b\u0443\u0433, \u0442\u0430\u043a\u0438\u0445 \u044f\u043a \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0447\u0456 \u0442\u0430 \u0434\u043e\u0441\u043b\u0456\u0434\u043d\u0438\u043a\u0438, \u044f\u043a\u0456 \u0456\u043d\u0442\u0435\u0433\u0440\u0443\u044e\u0442\u044c \u043c\u0435\u0440\u0435\u0436\u0443 Celestia.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/developers/integrate-celestia.md",sourceDirName:"developers",slug:"/developers/integrate-celestia",permalink:"/uk/developers/integrate-celestia",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/integrate-celestia.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u0406\u043d\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043d\u043d\u044f Celestia"},sidebar:"developers",previous:{title:"\u0420\u0435\u0441\u0443\u0440\u0441\u0438 CosmWasm",permalink:"/uk/developers/cosmwasm-resources"}},u={},p=[{value:"\u041d\u043e\u0442\u0430\u0442\u043a\u0438 \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0430 \u043f\u043e\u0441\u043b\u0443\u0433 Celestia",id:"\u043d\u043e\u0442\u0430\u0442\u043a\u0438-\u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0430-\u043f\u043e\u0441\u043b\u0443\u0433-celestia",level:2},{value:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0431\u0435\u0437\u043f\u0435\u043a\u0438 \u0442\u0430 \u043a\u043b\u044e\u0447\u0456\u0432",id:"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c-\u0431\u0435\u0437\u043f\u0435\u043a\u0438-\u0442\u0430-\u043a\u043b\u044e\u0447\u0456\u0432",level:3},{value:"RPC \u0456 \u0437\u0430\u043f\u0438\u0442\u0438",id:"rpc-\u0456-\u0437\u0430\u043f\u0438\u0442\u0438",level:3},{value:"\u0421\u0443\u043c\u0456\u0441\u043d\u0456\u0441\u0442\u044c",id:"\u0441\u0443\u043c\u0456\u0441\u043d\u0456\u0441\u0442\u044c",level:3},{value:"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044f",id:"\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044f",level:3},{value:"\u041f\u043e\u043c\u0456\u0442\u043d\u0456 \u0432\u0438\u043d\u044f\u0442\u043a\u0438 \u0449\u043e\u0434\u043e \u0456\u043d\u0448\u0438\u0445 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0456\u0432",id:"\u043f\u043e\u043c\u0456\u0442\u043d\u0456-\u0432\u0438\u043d\u044f\u0442\u043a\u0438-\u0449\u043e\u0434\u043e-\u0456\u043d\u0448\u0438\u0445-\u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0456\u0432",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u0456\u043d\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043d\u043d\u044f-celestia"},"\u0406\u043d\u0442\u0435\u0433\u0440\u0443\u0432\u0430\u043d\u043d\u044f Celestia"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u0426\u0435\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0456\u0445 \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0456\u0432 \u043f\u043e\u0441\u043b\u0443\u0433, \u0442\u0430\u043a\u0438\u0445 \u044f\u043a \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0447\u0456 \u0442\u0430 \u0434\u043e\u0441\u043b\u0456\u0434\u043d\u0438\u043a\u0438, \u044f\u043a\u0456 \u0456\u043d\u0442\u0435\u0433\u0440\u0443\u044e\u0442\u044c \u043c\u0435\u0440\u0435\u0436\u0443 Celestia.")),(0,i.kt)("h2",{id:"\u043d\u043e\u0442\u0430\u0442\u043a\u0438-\u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0430-\u043f\u043e\u0441\u043b\u0443\u0433-celestia"},"\u041d\u043e\u0442\u0430\u0442\u043a\u0438 \u043f\u043e\u0441\u0442\u0430\u0447\u0430\u043b\u044c\u043d\u0438\u043a\u0430 \u043f\u043e\u0441\u043b\u0443\u0433 Celestia"),(0,i.kt)("p",null,"Celestia \u2014 \u0446\u0435 \u0434\u043e\u0441\u0438\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430 \u043c\u0435\u0440\u0435\u0436\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 Cosmos-SDK. \u041c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u043e\u0441\u0442\u0430\u043d\u043d\u044e \u0432\u0435\u0440\u0441\u0456\u044e Tendermint \u0456 Cosmos-SDK \u043b\u0438\u0448\u0435 \u0437 \u043d\u0435\u0437\u043d\u0430\u0447\u043d\u0438\u043c\u0438 \u0437\u043c\u0456\u043d\u0430\u043c\u0438. \u0426\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0454, \u0449\u043e \u043c\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u043c\u043e\u0434\u0443\u043b\u0456 Cosmos-SDK: auth, bank, distribution, staking, slashing, mint, kriza, ibchost, genutil, evidence, ibctransfer, params, gov (\u043e\u0431\u043c\u0435\u0436\u0435\u043d\u0456 \u0432 \u0434\u0435\u044f\u043a\u0438\u0445 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u044f\u0445, \u0449\u043e \u043f\u0456\u0434\u043b\u044f\u0433\u0430\u044e\u0442\u044c \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u043d\u044e), upgrade, vesting, feegrant, capability \u0442\u0430 payment."),(0,i.kt)("li",{parentName:"ul"},"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0456 \u0441\u0445\u0435\u043c\u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u0438\u0445 \u043a\u043b\u044e\u0447\u0456\u0432, \u043d\u0430\u0434\u0430\u043d\u0456 Cosmos-SDK \u0456 Tendermint, \u0442\u043e\u0431\u0442\u043e secp256k1 \u0434\u043b\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0456 tm-ed25519 \u0434\u043b\u044f \u043f\u0456\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u0442\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441\u043d\u0438\u0445 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u044c.")),(0,i.kt)("p",null,"\u0425\u043e\u0447\u0430 \u0441\u0430\u043c\u0435 \u0442\u0435, \u044f\u043a\u0456 \u043c\u043e\u0434\u0443\u043b\u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f, \u043c\u043e\u0436\u0435 \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438\u0441\u044f, Celestia \u043f\u0440\u0430\u0433\u043d\u0435 \u0434\u043e \u0449\u043e\u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u043e\u0457 \u043c\u0456\u043d\u0456\u043c\u0456\u0437\u0430\u0446\u0456\u0457."),(0,i.kt)("h3",{id:"\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c-\u0431\u0435\u0437\u043f\u0435\u043a\u0438-\u0442\u0430-\u043a\u043b\u044e\u0447\u0456\u0432"},"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u0431\u0435\u0437\u043f\u0435\u043a\u0438 \u0442\u0430 \u043a\u043b\u044e\u0447\u0456\u0432"),(0,i.kt)("p",null,"Celestia \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u0431\u0430\u0433\u0430\u0442\u043e \u0432\u0436\u0435 \u0456\u0441\u043d\u0443\u044e\u0447\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u043a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u043a\u043b\u044e\u0447\u0430\u043c\u0438, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438 Cosmos-SDK \u0456 Tendermint \u0434\u043b\u044f \u043f\u0456\u0434\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u0442\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0439. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/basics/accounts.html#keys-accounts-addresses-and-signatures"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044f Cosmos-SDK")),(0,i.kt)("h3",{id:"rpc-\u0456-\u0437\u0430\u043f\u0438\u0442\u0438"},"RPC \u0456 \u0437\u0430\u043f\u0438\u0442\u0438"),(0,i.kt)("p",null,"\u0423 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0456 celestia \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u043b\u0438\u0448\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0456 \u043a\u0456\u043d\u0446\u0435\u0432\u0456 \u0442\u043e\u0447\u043a\u0438 RPC \u0434\u043b\u044f Tendermint \u0456 Cosmos-SDK. \u041d\u0430\u0440\u0430\u0437\u0456 \u043c\u0438 \u043d\u0435 \u0434\u043e\u0434\u0430\u0454\u043c\u043e \u0442\u0430 \u043d\u0435 \u0437\u0430\u0431\u0438\u0440\u0430\u0454\u043c\u043e \u0436\u043e\u0434\u043d\u043e\u0457 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0457 \u0444\u0443\u043d\u043a\u0446\u0456\u0457, \u0430\u043b\u0435 \u0446\u0435 \u043c\u043e\u0436\u0435 \u0437\u043c\u0456\u043d\u0438\u0442\u0438\u0441\u044f \u0432 \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u044c\u043e\u043c\u0443. \u0422\u0435 \u0441\u0430\u043c\u0435 \u0441\u0442\u043e\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u0437\u0430\u043f\u0438\u0442\u0443 \u0434\u0430\u043d\u0438\u0445 \u0456\u0437 \u043b\u0430\u043d\u0446\u044e\u0436\u043a\u0430."),(0,i.kt)("p",null,"\u0423 celestia-node, \u043a\u043b\u0456\u0454\u043d\u0442\u0456 \u043d\u043e\u0434\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0434\u0430\u043d\u0438\u0445, \u0454 API JSON-RPC, \u044f\u043a\u0438\u0439 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0432\u0430\u043c \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044f\u0442\u0438 \u0437 \u0440\u0456\u0432\u043d\u0435\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0434\u0430\u043d\u0438\u0445 Celestia. \u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u0438\u0439 \u043f\u043e\u0441\u0456\u0431\u043d\u0438\u043a \u043c\u043e\u0436\u043d\u0430 \u0437\u043d\u0430\u0439\u0442\u0438 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial"},"\u0442\u0443\u0442"),"."),(0,i.kt)("h3",{id:"\u0441\u0443\u043c\u0456\u0441\u043d\u0456\u0441\u0442\u044c"},"\u0421\u0443\u043c\u0456\u0441\u043d\u0456\u0441\u0442\u044c"),(0,i.kt)("p",null,"\u041b\u0456\u043d\u0443\u043a\u0441, \u043e\u0441\u043e\u0431\u043b\u0438\u0432\u043e Ubuntu 20.04 LTS, \u0454 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u0430\u043d\u0438\u043c. \u041f\u043e\u0442\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u044e \u0454 \u0441\u0443\u043c\u0456\u0441\u043d\u0456\u0441\u0442\u044c \u0456 \u0437 \u0456\u043d\u0448\u0438\u043c\u0438 \u041e\u0421, \u0430\u043b\u0435 \u043d\u0430\u0440\u0430\u0437\u0456 \u0432\u043e\u043d\u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043d\u0456. \u0414\u0435\u044f\u043a\u0456 \u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u0456 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438, \u044f\u043a\u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0441\u0442\u0438\u0440\u0430\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445, \u043d\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u043e\u0432\u0430\u043d\u043e \u043f\u0440\u0430\u0446\u044e\u044e\u0442\u044c \u043d\u0430 \u0456\u043d\u0448\u0438\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445."),(0,i.kt)("h3",{id:"\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044f"},"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044f"),(0,i.kt)("p",null,"\u041e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043c\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e Tendermint \u0456 Cosmos-SDK, \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044e \u043b\u0430\u043d\u0446\u044e\u0436\u043a\u0430 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043c, \u044f\u043a\u0438\u0439 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f \u0446\u0438\u043c\u0438 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430\u043c\u0438. \u0426\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0448\u0432\u0438\u0434\u043a\u0443 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044e, \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044e \u0441\u0442\u0430\u043d\u0443 \u0442\u0430 \u0448\u0432\u0438\u0434\u043a\u0443 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0430\u0446\u0456\u044e."),(0,i.kt)("h3",{id:"\u043f\u043e\u043c\u0456\u0442\u043d\u0456-\u0432\u0438\u043d\u044f\u0442\u043a\u0438-\u0449\u043e\u0434\u043e-\u0456\u043d\u0448\u0438\u0445-\u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0456\u0432"},"\u041f\u043e\u043c\u0456\u0442\u043d\u0456 \u0432\u0438\u043d\u044f\u0442\u043a\u0438 \u0449\u043e\u0434\u043e \u0456\u043d\u0448\u0438\u0445 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0456\u0432"),(0,i.kt)("p",null,"\u041f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043e \u0437 \u0456\u043d\u0448\u0438\u043c\u0438 \u043c\u0435\u0440\u0435\u0436\u0430\u043c\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 Tendermint, Celestia \u043c\u0430\u0442\u0438\u043c\u0435 \u0437\u043d\u0430\u0447\u043d\u043e \u0434\u043e\u0432\u0448\u0438\u0439 \u0447\u0430\u0441 \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u2013 \u0431\u043b\u0438\u0437\u044c\u043a\u043e 30* \u0441\u0435\u043a\u0443\u043d\u0434. \u041f\u0440\u0438\u0447\u0438\u043d\u0430 \u0446\u044c\u043e\u0433\u043e \u0447\u0430\u0441\u0443 \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u043e\u043b\u044f\u0433\u0430\u0454 \u0432 \u043e\u043f\u0442\u0438\u043c\u0456\u0437\u0430\u0446\u0456\u0457 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u043e\u0457 \u0437\u0434\u0430\u0442\u043d\u043e\u0441\u0442\u0456, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u043b\u0435\u0433\u043a\u0438\u043c\u0438 \u043a\u043b\u0456\u0454\u043d\u0442\u0430\u043c\u0438, \u044f\u043a\u0456 \u0432\u0456\u0434\u0431\u0438\u0440\u0430\u044e\u0442\u044c \u043b\u0430\u043d\u0446\u044e\u0436\u043e\u043a, \u0430 \u043d\u0435 \u0442\u043e\u043c\u0443, \u0449\u043e \u043c\u0438 \u0441\u0443\u0442\u0442\u0454\u0432\u043e \u0437\u043c\u0456\u043d\u0438\u043b\u0438 \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441 Tendermint. \u0412\u0430\u043b\u0456\u0434\u0430\u0442\u043e\u0440\u0438, \u0448\u0432\u0438\u0434\u0448\u0435 \u0437\u0430 \u0432\u0441\u0435, \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438\u043c\u0443\u0442\u044c/\u0432\u0438\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438\u043c\u0443\u0442\u044c \u0432\u0456\u0434\u043d\u043e\u0441\u043d\u043e \u0432\u0435\u043b\u0438\u043a\u0456 \u0431\u043b\u043e\u043a\u0438. \u0421\u043b\u0456\u0434 \u0437\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u0438, \u0449\u043e, \u043d\u0435\u0437\u0432\u0430\u0436\u0430\u044e\u0447\u0438 \u043d\u0430 \u0442\u0435, \u0449\u043e \u0446\u0456 \u0431\u043b\u043e\u043a\u0438 \u0432\u0435\u043b\u0438\u043a\u0456, \u043d\u0430 Celestia \u0444\u0430\u043a\u0442\u0438\u0447\u043d\u043e \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u0443\u0436\u0435 \u043c\u0430\u043b\u043e \u0442\u0438\u043f\u043e\u0432\u043e\u0433\u043e \u0441\u0442\u0430\u043d\u0443 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0443. \u0426\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0454, \u0449\u043e \u0432\u0438\u043c\u043e\u0433\u0438 \u0434\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u043e\u0457 \u0437\u0434\u0430\u0442\u043d\u043e\u0441\u0442\u0456, \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u043e, \u0431\u0443\u0434\u0443\u0442\u044c \u0431\u0456\u043b\u044c\u0448\u0438\u043c\u0438, \u043d\u0456\u0436 \u0443 \u0442\u0438\u043f\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0432\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d-\u0432\u0443\u0437\u043b\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 Cosmos-SDK, \u0432\u0438\u043c\u043e\u0433\u0438 \u0434\u043e \u043e\u0431\u0447\u0438\u0441\u043b\u0435\u043d\u044c \u043c\u0430\u044e\u0442\u044c \u0431\u0443\u0442\u0438 \u043f\u043e\u0434\u0456\u0431\u043d\u0438\u043c\u0438 \u0437\u0430 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u043e\u044e."),(0,i.kt)("p",null,"*\u041c\u043e\u0436\u0435\u043c\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438\u0441\u044f"))}m.isMDXComponent=!0}}]);