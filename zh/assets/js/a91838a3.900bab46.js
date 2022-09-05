"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4063],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7452:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),o=["components"],i={sidebar_label:"Messages"},l="Messages",u={unversionedId:"developers/wordle-messages",id:"developers/wordle-messages",title:"Messages",description:"Messages allow us to process and submit information to our specific module.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/wordle-messages.md",sourceDirName:"developers",slug:"/developers/wordle-messages",permalink:"/zh/developers/wordle-messages",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-messages.md",tags:[],version:"current",frontMatter:{sidebar_label:"Messages"},sidebar:"developers",previous:{title:"Module",permalink:"/zh/developers/wordle-module"},next:{title:"Types",permalink:"/zh/developers/wordle-types"}},c={},p=[{value:"Scaffolding A Message",id:"scaffolding-a-message",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("p",null,"Messages allow us to process and submit information to our specific module."),(0,a.kt)("p",null,"From the Cosmos-SDK docs, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/building-modules/messages-and-queries.html#messages"},"messages"),"\nare:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the Cosmos SDK, messages are objects that are contained\nin transactions to trigger state transitions. Each Cosmos SDK\nmodule defines a list of messages and how to handle them.")),(0,a.kt)("p",null,"For messages for Wordle, given our initial design, we will\nmake 2 messages with ignite."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first one is: ",(0,a.kt)("inlineCode",{parentName:"li"},"SubmitWordle")," and it only passes the Wordle of the Day."),(0,a.kt)("li",{parentName:"ul"},"The second one is: ",(0,a.kt)("inlineCode",{parentName:"li"},"SubmitGuess")," and it attempts to guess the submitted\nwordle. It also passes a word as a guess.")),(0,a.kt)("p",null,"With these initial designs, we can start creating our messages!"),(0,a.kt)("h2",{id:"scaffolding-a-message"},"Scaffolding A Message"),(0,a.kt)("p",null,"To create the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubmitWordle")," message, we run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-wordle word\n")),(0,a.kt)("p",null,"This creates the ",(0,a.kt)("inlineCode",{parentName:"p"},"submit-wordle")," message that takes in ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," as a parameter."),(0,a.kt)("p",null,"We now create the final message, ",(0,a.kt)("inlineCode",{parentName:"p"},"SubmitGuess"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-guess word\n")),(0,a.kt)("p",null,"Here, we are passing a word as a guess with ",(0,a.kt)("inlineCode",{parentName:"p"},"submit-guess"),"."))}m.isMDXComponent=!0}}]);