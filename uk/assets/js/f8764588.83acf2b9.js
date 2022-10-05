"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2939],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={},p="Optimint",c={unversionedId:"developers/optimint",id:"developers/optimint",title:"Optimint",description:"optimint",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/developers/optimint.md",sourceDirName:"developers",slug:"/developers/optimint",permalink:"/uk/developers/optimint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/optimint.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Node API",permalink:"/uk/developers/node-api"},next:{title:"Wordle",permalink:"/uk/category/wordle"}},u={},s=[{value:"\u041d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0456 \u043f\u043e\u0441\u0456\u0431\u043d\u0438\u043a\u0438",id:"\u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0456-\u043f\u043e\u0441\u0456\u0431\u043d\u0438\u043a\u0438",level:2}],m={toc:s};function f(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optimint"},"Optimint"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"optimint",src:n(2944).Z,width:"1440",height:"1024"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimint"},"Optimint")," \u2013 \u0446\u0435 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044f ABCI (\u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438) \u0434\u043b\u044f \u0441\u0443\u0432\u0435\u0440\u0435\u043d\u043d\u0438\u0445 \u0440\u043e\u043b\u0430\u043f\u0456\u0432 \u0434\u043b\u044f \u0440\u043e\u0437\u0433\u043e\u0440\u0442\u0430\u043d\u043d\u044f \u043f\u043e\u0432\u0435\u0440\u0445 Celestia."),(0,i.kt)("p",null,"\u0419\u043e\u0433\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0448\u043b\u044f\u0445\u043e\u043c \u0437\u0430\u043c\u0456\u043d\u0438 Tendermint, \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441\u043d\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f Cosmos-SDK, \u0437\u0430\u043c\u0456\u043d\u0430 \u044f\u043a\u043e\u0433\u043e \u0431\u0435\u0437\u043f\u043e\u0441\u0435\u0440\u0435\u0434\u043d\u044c\u043e \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0454 \u0437 \u0440\u0456\u0432\u043d\u0435\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0434\u0430\u043d\u0438\u0445 Celestia."),(0,i.kt)("p",null,"\u0412\u0456\u043d \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454 \u0441\u0443\u0432\u0435\u0440\u0435\u043d\u043d\u0438\u0439 \u0440\u043e\u043b\u0430\u043f, \u044f\u043a\u0438\u0439 \u0437\u0431\u0438\u0440\u0430\u0454 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457 \u0432 \u0431\u043b\u043e\u043a\u0438 \u0442\u0430 \u043f\u0443\u0431\u043b\u0456\u043a\u0443\u0454 \u0457\u0445 \u0443 Celestia \u0434\u043b\u044f \u043a\u043e\u043d\u0441\u0435\u043d\u0441\u0443\u0441\u0443 \u0442\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0434\u0430\u043d\u0438\u0445."),(0,i.kt)("p",null,"\u041c\u0435\u0442\u0430 Optimint \u2014 \u0434\u0430\u0442\u0438 \u0431\u0443\u0434\u044c-\u043a\u043e\u043c\u0443 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u0440\u043e\u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0442\u0430 \u0440\u043e\u0437\u0433\u043e\u0440\u043d\u0443\u0442\u0438 \u0441\u0443\u0432\u0435\u0440\u0435\u043d\u043d\u0438\u0439 \u0440\u043e\u043b\u0430\u043f \u043d\u0430 Celestia \u0437\u0430 \u043b\u0456\u0447\u0435\u043d\u0456 \u0445\u0432\u0438\u043b\u0438\u043d\u0438."),(0,i.kt)("p",null,"\u041a\u0440\u0456\u043c \u0442\u043e\u0433\u043e, \u0445\u043e\u0447\u0430 Optimint \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438 \u0441\u0443\u0432\u0435\u0440\u0435\u043d\u043d\u0456 \u0440\u043e\u043b\u0430\u043f\u0438 \u043d\u0430 Celestia, \u043d\u0430\u0440\u0430\u0437\u0456 \u0432\u0456\u043d \u0449\u0435 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u0434\u043e\u043a\u0430\u0437\u0456\u0432 \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u0430, \u0442\u043e\u043c\u0443 \u043f\u0440\u0430\u0446\u044e\u0454 \u0432 \xab\u043f\u0435\u0441\u0438\u043c\u0456\u0441\u0442\u0438\u0447\u043d\u043e\u043c\u0443\xbb \u0440\u0435\u0436\u0438\u043c\u0456, \u0434\u0435 \u043d\u043e\u0434\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0456\u0457, \u0449\u043e\u0431 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0434\u0456\u0439\u0441\u043d\u0456\u0441\u0442\u044c \u043b\u0430\u043d\u0446\u044e\u0436\u043a\u0430 (\u043c\u043e\u0432\u0430 \u043f\u0440\u043e \u043f\u043e\u0432\u043d\u0443 \u043d\u043e\u0434\u0443). \u041a\u0440\u0456\u043c \u0442\u043e\u0433\u043e, \u043d\u0430\u0440\u0430\u0437\u0456 Optimint \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 \u043b\u0438\u0448\u0435 \u043e\u0434\u0438\u043d \u0441\u0435\u043a\u0432\u0435\u043d\u0441\u0435\u0440."),(0,i.kt)("h2",{id:"\u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0456-\u043f\u043e\u0441\u0456\u0431\u043d\u0438\u043a\u0438"},"\u041d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0456 \u043f\u043e\u0441\u0456\u0431\u043d\u0438\u043a\u0438"),(0,i.kt)("p",null,"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0456 \u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0456 \u043f\u043e\u0441\u0456\u0431\u043d\u0438\u043a\u0438 \u0434\u043e\u043f\u043e\u043c\u043e\u0436\u0443\u0442\u044c \u0432\u0430\u043c \u0440\u043e\u0437\u043f\u043e\u0447\u0430\u0442\u0438 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c Cosmos-SDK, \u044f\u043a\u0456 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u044c\u0441\u044f \u0434\u043e \u0440\u0456\u0432\u043d\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0456 \u0434\u0430\u043d\u0438\u0445 Celestia \u0447\u0435\u0440\u0435\u0437 Optimint. \u041c\u0438 \u043d\u0430\u0437\u0438\u0432\u0430\u0454\u043c\u043e \u0446\u0456 \u043b\u0430\u043d\u0446\u044e\u0433\u0438 Sovereign Rollups."),(0,i.kt)("p",null,"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0447\u0430\u0442\u0438 \u0437 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u043f\u0456\u0434\u0440\u0443\u0447\u043d\u0438\u043a\u0456\u0432:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uk/developers/wordle"},"\u0413\u0440\u0430 Wordle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/uk/developers/cosmwasm"},"\u041f\u043e\u0441\u0456\u0431\u043d\u0438\u043a CosmWasm"))))}f.isMDXComponent=!0},2944:function(e,t,n){t.Z=n.p+"assets/images/optimint-b128a23d02ceb733f25ac12a6feccba1.png"}}]);