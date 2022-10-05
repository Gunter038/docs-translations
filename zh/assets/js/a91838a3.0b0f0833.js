"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4063],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7452:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],l={sidebar_label:"\u4fe1\u606f"},i="\u4fe1\u606f",u={unversionedId:"developers/wordle-messages",id:"developers/wordle-messages",title:"\u4fe1\u606f",description:"\u6d88\u606f\u5141\u8bb8\u6211\u4eec\u5904\u7406\u4fe1\u606f\u5e76\u5c06\u4fe1\u606f\u63d0\u4ea4\u5230\u7279\u5b9a\u6a21\u5757\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/wordle-messages.md",sourceDirName:"developers",slug:"/developers/wordle-messages",permalink:"/zh/developers/wordle-messages",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-messages.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u4fe1\u606f"},sidebar:"developers",previous:{title:"\u6a21\u5757",permalink:"/zh/developers/wordle-module"},next:{title:"\u7c7b\u578b",permalink:"/zh/developers/wordle-types"}},c={},p=[{value:"\u642d\u5efa\u4fe1\u606f",id:"\u642d\u5efa\u4fe1\u606f",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u4fe1\u606f"},"\u4fe1\u606f"),(0,s.kt)("p",null,"\u6d88\u606f\u5141\u8bb8\u6211\u4eec\u5904\u7406\u4fe1\u606f\u5e76\u5c06\u4fe1\u606f\u63d0\u4ea4\u5230\u7279\u5b9a\u6a21\u5757\u3002"),(0,s.kt)("p",null,"From the Cosmos-SDK docs, ",(0,s.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/building-modules/messages-and-queries.html#messages"},"messages")," are:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"In the Cosmos SDK, messages are objects that are contained in transactions to trigger state transitions. Each Cosmos SDK module defines a list of messages and how to handle them.")),(0,s.kt)("p",null,"For messages for Wordle, given our initial design, we will make 2 messages with ignite."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The first one is: ",(0,s.kt)("inlineCode",{parentName:"li"},"SubmitWordle")," and it only passes the Wordle of the Day."),(0,s.kt)("li",{parentName:"ul"},"The second one is: ",(0,s.kt)("inlineCode",{parentName:"li"},"SubmitGuess")," and it attempts to guess the submitted wordle. \u5b83\u8fd8\u4f20\u9012\u4e00\u4e2a\u5355\u8bcd\u4f5c\u4e3a\u731c\u6d4b\u3002")),(0,s.kt)("p",null,"\u6709\u4e86\u8fd9\u4e9b\u521d\u59cb\u8bbe\u8ba1\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u521b\u5efa\u6d88\u606f\u4e86\uff01"),(0,s.kt)("h2",{id:"\u642d\u5efa\u4fe1\u606f"},"\u642d\u5efa\u4fe1\u606f"),(0,s.kt)("p",null,"To create the ",(0,s.kt)("inlineCode",{parentName:"p"},"SubmitWordle")," message, we run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-wordle word\n")),(0,s.kt)("p",null,"This creates the ",(0,s.kt)("inlineCode",{parentName:"p"},"submit-wordle")," message that takes in ",(0,s.kt)("inlineCode",{parentName:"p"},"word")," as a parameter."),(0,s.kt)("p",null,"We now create the final message, ",(0,s.kt)("inlineCode",{parentName:"p"},"SubmitGuess"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-guess word\n")),(0,s.kt)("p",null,"Here, we are passing a word as a guess with ",(0,s.kt)("inlineCode",{parentName:"p"},"submit-guess"),"."))}m.isMDXComponent=!0}}]);