"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8735],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7323:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_label:"\u5408\u7ea6\u4ea4\u4e92"},l="CosmWasm \u4e0e Celestia \u7684\u5408\u7ea6\u4ea4\u4e92",i={unversionedId:"developers/cosmwasm-contract-interaction",id:"developers/cosmwasm-contract-interaction",title:"CosmWasm \u4e0e Celestia \u7684\u5408\u7ea6\u4ea4\u4e92",description:"\u5728\u524d\u9762\u7684\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u5c06\u5408\u7ea6\u7684 tx \u54c8\u5e0c\u5b58\u50a8\u5728\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\u91cc\u4f9b\u4ee5\u540e\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/cosmwasm-contract-interaction.md",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-interaction",permalink:"/zh/developers/cosmwasm-contract-interaction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-interaction.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u5408\u7ea6\u4ea4\u4e92"},sidebar:"developers",previous:{title:"\u5408\u7ea6\u90e8\u7f72",permalink:"/zh/developers/cosmwasm-contract-deployment"},next:{title:"CosmWasm \u8d44\u6599",permalink:"/zh/developers/cosmwasm-resources"}},u={},p=[{value:"\u5408\u7ea6\u67e5\u8be2",id:"\u5408\u7ea6\u67e5\u8be2",level:2},{value:"\u5408\u7ea6\u5b9e\u4f8b\u5316",id:"\u5408\u7ea6\u5b9e\u4f8b\u5316",level:2},{value:"\u5408\u7ea6\u4ea4\u4e92",id:"\u5408\u7ea6\u4ea4\u4e92",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmwasm-\u4e0e-celestia-\u7684\u5408\u7ea6\u4ea4\u4e92"},"CosmWasm \u4e0e Celestia \u7684\u5408\u7ea6\u4ea4\u4e92"),(0,o.kt)("p",null,"\u5728\u524d\u9762\u7684\u6b65\u9aa4\u4e2d\uff0c\u6211\u4eec\u5c06\u5408\u7ea6\u7684 tx \u54c8\u5e0c\u5b58\u50a8\u5728\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\u91cc\u4f9b\u4ee5\u540e\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u9700\u8981\u7b49\u5f85 Celestia \u7684\u6570\u636e\u53ef\u7528\u6027\u5c42\u786e\u8ba4\u6253\u5305\u533a\u5757\uff0c\u901a\u8fc7 Optimint \u63d0\u4ea4\u4ea4\u6613\u7684\u65f6\u95f4\u8f83\u957f\uff0c\u6211\u4eec\u9700\u8981\u76f4\u63a5\u67e5\u8be2\u6211\u4eec\u7684\u4ea4\u6613\u54c8\u5e0c\u503c\u6765\u83b7\u53d6\u76f8\u5173\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"\u5408\u7ea6\u67e5\u8be2"},"\u5408\u7ea6\u67e5\u8be2"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u67e5\u8be2\u4ea4\u6613\u54c8\u5e0c\u4ee3\u7801ID\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"CODE_ID=$(wasmd query tx --type=hash $TX_HASH $NODE --output json | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,o.kt)("p",null,"\u8fd9\u5c06\u4e3a\u6211\u4eec\u8fd4\u56de\u5df2\u90e8\u7f72\u5408\u7ea6\u7684\u4ee3\u7801 ID\u3002"),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u56e0\u4e3a\u5b83\u662f\u90e8\u7f72\u5728\u6211\u4eec\u672c\u5730\u7f51\u7edc\u4e0a\u7684\u7b2c\u4e00\u4e2a\u5408\u7ea6\u6240\u4ee5\u5b83\u7684\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"\u3002\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u770b\u770b\u8fd9\u4e2a\u4ee3\u7801 Id \u5b9e\u4f8b\u5316\u7684\u5408\u7ea6\uff1a"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u770b\u8fd9\u4e2a\u4ee3\u7801 ID \u5b9e\u4f8b\u5316\u7684\u5408\u7ea6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n")),(0,o.kt)("p",null,"\u6211\u4eec\u5f97\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"contracts":[],"pagination":{"next_key":null,"total":"0"}}\n')),(0,o.kt)("h2",{id:"\u5408\u7ea6\u5b9e\u4f8b\u5316"},"\u5408\u7ea6\u5b9e\u4f8b\u5316"),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e3a nameservice \u5408\u7ea6\u7f16\u5199\u4ee5\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT")," \u6d88\u606f\u6765\u5f00\u59cb\u5b9e\u4f8b\u5316\u5408\u7ea6\u3002 \u8fd9\u91cc\uff0c\u6211\u4eec\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"purchase_price")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_price")," \u5206\u522b\u8d4b\u503c ",(0,o.kt)("inlineCode",{parentName:"p"},"100uwasm")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"999uwasm"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'INIT=\'{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}\'\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from $KEY_NAME --keyring-backend test --label "name service" $TXFLAG -y --no-admin\n')),(0,o.kt)("h2",{id:"\u5408\u7ea6\u4ea4\u4e92"},"\u5408\u7ea6\u4ea4\u4e92"),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5b9e\u4f8b\u5316\u4e86\u5b83\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4e0e\u5408\u7ea6\u4ea4\u4e92\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')\necho $CONTRACT\n\nwasmd query wasm contract $CONTRACT $NODE\nwasmd query bank balances $CONTRACT $NODE\n")),(0,o.kt)("p",null,"\u8fd9\u4f7f\u6211\u4eec\u80fd\u591f\u67e5\u770b\u5408\u7ea6\u5730\u5740\u3001\u5408\u7ea6\u8be6\u7ec6\u4fe1\u606f\u4ee5\u53ca\u94b1\u5305\u4f59\u989d\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u4e3a\u6211\u4eec\u7684\u94b1\u5305\u5730\u5740\u6ce8\u518c\u4e00\u4e2a\u540d\u79f0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'REGISTER=\'{"register":{"name":"fred"}}\'\nwasmd tx wasm execute $CONTRACT "$REGISTER" --amount 100uwasm --from $KEY_NAME $TXFLAG -y\n\n# Query the owner of the name record\nNAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json\n')),(0,o.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u5df2\u7ecf\u4f7f\u7528 Celestia \u5b9e\u4f8b\u5316\u4e86 CosmWasm \u540d\u79f0\u670d\u52a1\u5e76\u4e0e\u667a\u80fd\u5408\u7ea6\u4ea4\u4e92\uff01"))}d.isMDXComponent=!0}}]);