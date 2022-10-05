"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4399],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9674:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={sidebar_label:"\u7c7b\u578b"},p="Wordle \u7c7b\u578b",c={unversionedId:"developers/wordle-types",id:"developers/wordle-types",title:"Wordle \u7c7b\u578b",description:"\u5728\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6211\u4eec\u521b\u5efa\u7684\u6d88\u606f\u521b\u5efa\u8981\u4f7f\u7528\u7684\u7c7b\u578b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/wordle-types.md",sourceDirName:"developers",slug:"/developers/wordle-types",permalink:"/zh/developers/wordle-types",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-types.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u7c7b\u578b"},sidebar:"developers",previous:{title:"\u4fe1\u606f",permalink:"/zh/developers/wordle-messages"},next:{title:"Keeper",permalink:"/zh/developers/wordle-keeper"}},s={},u=[{value:"\u62fc\u5199 Wordle \u7c7b\u578b",id:"\u62fc\u5199-wordle-\u7c7b\u578b",level:2}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wordle-\u7c7b\u578b"},"Wordle \u7c7b\u578b"),(0,l.kt)("p",null,"\u5728\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6211\u4eec\u521b\u5efa\u7684\u6d88\u606f\u521b\u5efa\u8981\u4f7f\u7528\u7684\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"\u62fc\u5199-wordle-\u7c7b\u578b"},"\u62fc\u5199 Wordle \u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold map wordle word submitter --no-message\n")),(0,l.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u662f\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Wordle")," \u7684\u6620\u5c04\uff0c\u5177\u6709\u4e24\u4e2a\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"word")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"submitter"),"\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"submitter")," \u662f\u63d0\u4ea4\u8005\u7684\u5730\u5740\u63d0\u4ea4 Wordle \u7684\u4eba\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Guess")," \u7c7b\u578b\u3002 \u7b2c\u4e8c\u79cd\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Guess")," \u7c7b\u578b\u3002\u5b83\u5141\u8bb8\u6211\u4eec\u4fdd\u5b58\u5bf9\u4e8e\u63d0\u4ea4\u89e3\u51b3\u65b9\u6848\u7684\u6bcf\u4e2a\u5730\u5740\u7684\u6700\u65b0\u731c\u6d4b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold map guess word submitter count --no-message\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u8fd8\u5b58\u50a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"count")," \u6765\u8ba1\u7b97\u8fd9\u4e2a\u5730\u5740submit\u4e86\u591a\u5c11\u731c\u6d4b"))}f.isMDXComponent=!0}}]);