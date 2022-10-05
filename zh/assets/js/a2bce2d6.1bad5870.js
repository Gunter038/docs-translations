"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8070],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_label:"\u8bbe\u7f6e\u7f51\u7edc\u73af\u5883"},l="\u5728 Celestia \u4e0a\u4e3a CosmWasm \u8bbe\u7f6e\u73af\u5883",p={unversionedId:"developers/cosmwasm-environment",id:"developers/cosmwasm-environment",title:"\u5728 Celestia \u4e0a\u4e3a CosmWasm \u8bbe\u7f6e\u73af\u5883",description:"\u73b0\u5728 wasmd \u4e8c\u8fdb\u5236\u6587\u4ef6\u5df2\u7ecf\u6784\u5efa\u597d\u4e86\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u672c\u5730\u7f51\u7edc\uff0c\u5728 wasmd \u548c Optimint \u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/cosmwasm-environment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-environment",permalink:"/zh/developers/cosmwasm-environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-environment.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u8bbe\u7f6e\u7f51\u7edc\u73af\u5883"},sidebar:"developers",previous:{title:"CosmWasm \u4f9d\u8d56\u9879",permalink:"/zh/developers/cosmwasm-dependency"},next:{title:"\u5408\u7ea6\u90e8\u7f72",permalink:"/zh/developers/cosmwasm-contract-deployment"}},c={},m=[{value:"\u6784\u5efa Wasmd \u7f51\u7edc",id:"\u6784\u5efa-wasmd-\u7f51\u7edc",level:2},{value:"\u542f\u52a8 Wasmd \u7f51\u7edc",id:"\u542f\u52a8-wasmd-\u7f51\u7edc",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5728-celestia-\u4e0a\u4e3a-cosmwasm-\u8bbe\u7f6e\u73af\u5883"},"\u5728 Celestia \u4e0a\u4e3a CosmWasm \u8bbe\u7f6e\u73af\u5883"),(0,o.kt)("p",null,"\u73b0\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u5df2\u7ecf\u6784\u5efa\u597d\u4e86\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u672c\u5730\u7f51\u7edc\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," \u548c Optimint \u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u3002"),(0,o.kt)("h2",{id:"\u6784\u5efa-wasmd-\u7f51\u7edc"},"\u6784\u5efa Wasmd \u7f51\u7edc"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_NAME=validator1\nCHAIN_ID=celeswasm\nwasmd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n")),(0,o.kt)("p",null,"\u8fd9\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"celeswasm")," \u7684\u94fe\u3002"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5e2e\u52a9\u6211\u4eec\u8bbe\u7f6e\u521b\u4e16\u94b1\u5305\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"KEY_NAME=celeswasm-key\nwasmd keys add $KEY_NAME --keyring-backend test\n")),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\uff0c\u8bf7\u786e\u4fdd\u5b58\u50a8\u751f\u6210\u7684\u94b1\u5305\u8f93\u51fa\u4ee5\u4f9b\u4ee5\u540e\u53c2\u8003\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\u521b\u4e16\u94b1\u5305\u5e76\u4f7f\u7528\u5b83\u6765\u66f4\u65b0\u6211\u4eec\u7684\u521b\u4e16\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'TOKEN_AMOUNT="10000000000000000000000000uwasm"\nwasmd add-genesis-account $KEY_NAME $TOKEN_AMOUNT --keyring-backend test\nSTAKING_AMOUNT=1000000000uwasm\nwasmd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID --keyring-backend test\n')),(0,o.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a\u672c\u5730\u7f51\u7edc\u521b\u4e16\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e9b\u66f4\u6709\u7528\u7684\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export NODE="--chain-id ${CHAIN_ID}"\nexport TXFLAG="--chain-id ${CHAIN_ID} --gas-prices 0uwasm --gas auto --gas-adjustment 1.3"\n')),(0,o.kt)("h2",{id:"\u542f\u52a8-wasmd-\u7f51\u7edc"},"\u542f\u52a8 Wasmd \u7f51\u7edc"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," \u7f51\u7edc\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'wasmd start --optimint.aggregator true --optimint.da_layer celestia --optimint.da_config=\'{"base_url":"http://XXX.XXX.XXX.XXX:26658","timeout":60000000000,"gas_limit":6000000}\' --optimint.namespace_id 000000000000FFFF --optimint.da_start_height XXXXX\n')),(0,o.kt)("p",null,"\u8bf7\u8003\u8651\u4ee5\u4e0b\u65b9\u9762\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c \u60a8\u9700\u8981\u5c06 Celestia \u8282\u70b9\u7684IP\u5730\u5740 \u4f20\u8f93\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"base_url")," \u4e2d\u4e00\u4e2a\u62e5\u6709Arabica\u5f00\u53d1\u7f51\u4ee3\u5e01\u7684\u8d26\u6237\u3002 \u6309\u7167\u6b64",(0,o.kt)("a",{parentName:"p",href:"/zh/developers/node-tutorial"},"\u6559\u7a0b"),"\u5728 Celestia \u8282\u70b9\u90e8\u5206\u8bbe\u7f6e Celestia \u8f7b\u8282\u70b9\u5e76\u4f7f\u7528\u6d4b\u8bd5\u7f51\u6c34\u9f99\u5934\u8d44\u91d1\u521b\u5efa\u94b1\u5305\u3002")),(0,o.kt)("p",null,"\u8fd8\u8bf7\u8003\u8651\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u91cd\u8981\u63d0\u793a\uff1a\u6b64\u5916\uff0c\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u60a8\u9700\u8981\u5728 Arabica\u5f00\u53d1\u7f51\u4e2d\u6307\u5b9a\u6700\u65b0\u7684 \u533a\u5757\u9ad8\u5ea6\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"da_height")," \u60a8\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://explorer.celestia.observer/arabica"},"\u6d4f\u89c8\u5668")," \u4e2d\u627e\u5230\u6700\u65b0\u7684\u533a\u5757\u7f16\u53f7 \u3002 \u53e6\u5916\uff0c\u5bf9\u4e8e\u6807\u6ce8-- ",(0,o.kt)("inlineCode",{parentName:"p"},"--optimint.namespace_id"),"\uff0c\u4f60\u53ef\u4ee5\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://go.dev/play/p/7ltvaj8lhRl"},"\u8fd9\u91cc")," \u7684\u6d4b\u8bd5\u7248\u751f\u6210\u4e00\u4e2a\u968f\u673a\u7684 Namespace ID \u3002")),(0,o.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5df2\u7ecf\u542f\u52a8\u4e86\u6211\u4eec\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," \u7f51\u7edc\uff01"))}d.isMDXComponent=!0}}]);