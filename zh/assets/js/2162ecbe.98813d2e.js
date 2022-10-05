"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5132],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,s={unversionedId:"nodes/bridge-node",id:"nodes/bridge-node",title:"bridge-node",description:"- - -",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/nodes/bridge-node.md",sourceDirName:"nodes",slug:"/nodes/bridge-node",permalink:"/zh/nodes/bridge-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/bridge-node.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Data Availability",permalink:"/zh/category/data-availability"},next:{title:"full-storage-node",permalink:"/zh/nodes/full-storage-node"}},c={},u=[{value:"\u6865\u63a5\u8282\u70b9\u6982\u8ff0",id:"\u6865\u63a5\u8282\u70b9\u6982\u8ff0",level:2},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u8bbe\u7f6e\u60a8\u7684\u6865\u63a5\u8282\u70b9",id:"\u8bbe\u7f6e\u60a8\u7684\u6865\u63a5\u8282\u70b9",level:2},{value:"\u8bbe\u7f6e\u4f9d\u8d56\u9879",id:"\u8bbe\u7f6e\u4f9d\u8d56\u9879",level:3},{value:"\u90e8\u7f72Celestia\u6865\u63a5\u8282\u70b9",id:"\u90e8\u7f72celestia\u6865\u63a5\u8282\u70b9",level:2},{value:"\u5b89\u88c5Celestia\u8282\u70b9",id:"\u5b89\u88c5celestia\u8282\u70b9",level:3},{value:"\u521d\u59cb\u5316\u6865\u63a5\u8282\u70b9",id:"\u521d\u59cb\u5316\u6865\u63a5\u8282\u70b9",level:3},{value:"\u8fd0\u884c\u6865\u63a5\u8282\u70b9",id:"\u8fd0\u884c\u6865\u63a5\u8282\u70b9",level:3},{value:"\u53ef\u9009\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8fd0\u884c\u6865\u63a5\u8282\u70b9",id:"\u53ef\u9009\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8fd0\u884c\u6865\u63a5\u8282\u70b9",level:4},{value:"\u53ef\u9009\uff1a\u901a\u8fc7SystemD\u542f\u52a8\u6865\u63a5\u8282\u70b9",id:"\u53ef\u9009\u901a\u8fc7systemd\u542f\u52a8\u6865\u63a5\u8282\u70b9",level:3}],d={toc:u};function k(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"sidebar_label : \u6865\u63a5\u8282\u70b9"),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"\u8bbe\u7f6ecelestia\u6865\u63a5\u8282\u70b9"},"\u8bbe\u7f6eCelestia\u6865\u63a5\u8282\u70b9"),(0,l.kt)("p",null,"\u672c\u6559\u7a0b\u5c06\u4ecb\u7ecd\u5982\u4f55\u8bbe\u7f6e Celestia \u6865\u63a5\u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u6865\u63a5\u8282\u70b9\u8fde\u63a5\u6570\u636e\u53ef\u7528\u6027\u5c42\u548c\u5171\u8bc6\u5c42\uff0c\u540c\u65f6\u8fd8\u53ef\u4ee5\u9009\u62e9\u6210\u4e3a\u9a8c\u8bc1\u8005\u3002"),(0,l.kt)("p",null,"\u9a8c\u8bc1\u8005\u4e5f\u53ef\u4ee5\u4e0d\u7528\u8fd0\u884c\u6865\u63a5\u7ed3\u70b9\uff0c\u4f46\u662f\u9f13\u52b1\u8fd9\u6837\u505a\uff0c\u4ee5\u4fbf\u5c06\u533a\u5757\u53d1\u9001\u7ed9\u6570\u636e\u53ef\u7528\u7f51\u7edc\u3002"),(0,l.kt)("h2",{id:"\u6865\u63a5\u8282\u70b9\u6982\u8ff0"},"\u6865\u63a5\u8282\u70b9\u6982\u8ff0"),(0,l.kt)("p",null,"Celestia\u6865\u63a5\u8282\u70b9\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece\u5171\u8bc6\u7f51\u7edc\u4e2d\u7684\u53d7\u4fe1\u4efb\u6838\u5fc3\u8fdb\u7a0b\uff08\u610f\u5473\u7740\u4e0e celestia-core \u8282\u70b9\u7684\u53d7\u4fe1RPC \u8fde\u63a5\uff09\u5bfc\u5165\u548c\u5904\u7406\u201c\u539f\u59cb\u201d\u533a\u5757\u5934\u548c\u5757\u3002 \u6865\u63a5\u8282\u70b9\u53ef\u4ee5\u5728\u5185\u90e8\uff08\u5d4c\u5165\u5f0f\uff09\u8fd0\u884c\u6b64\u6838\u5fc3\u8fdb\u7a0b\uff0c\u4e5f\u53ef\u4ee5\u7b80\u5355\u5730\u8fde\u63a5\u5230\u8fdc\u7a0b\u7aef\u70b9\u3002 \u6865\u63a5\u8282\u70b9\u8fd8\u53ef\u4ee5\u9009\u62e9\u6210\u4e3a\u5171\u8bc6\u7f51\u7edc\u4e2d\u7684\u6d3b\u8dc3\u9a8c\u8bc1\u8005, \u5411 DA \u7f51\u7edc\u4e2d\u7684\u8f7b\u8282\u70b9\u63d0\u4f9b\u5e26\u6709\u6570\u636e\u53ef\u7528\u6027\u6807\u5934\u7684\u5757\u5171\u4eab"),(0,l.kt)("li",{parentName:"ol"},"\u9a8c\u8bc1\u548c\u64e6\u9664\u201c\u539f\u59cb\u201d\u5757\u7684\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ol"},"\u5411 DA \u7f51\u7edc\u4e2d\u7684\u8f7b\u8282\u70b9\u63d0\u4f9b\u5e26\u6709\u6570\u636e\u53ef\u7528\u6027\u6807\u5934\u7684\u5757\u5171\u4eab ",(0,l.kt)("img",{alt:"\u6865\u63a5\u8282\u70b9\u56fe",src:n(1735).Z,width:"2802",height:"700"}))),(0,l.kt)("p",null,"\u4ece\u5b9e\u73b0\u7684\u89d2\u5ea6\u6765\u770b\uff0c\u6865\u63a5\u8282\u70b9\u8fd0\u884c\u4e24\u4e2a\u72ec\u7acb\u7684\u8fdb\u7a0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5e26\u6709 Celestia Core \u7684 Celestia \u5e94\u7528\u7a0b\u5e8f\uff08",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"\u53c2\u89c1 repo"),"\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Celestia App"),"\u662f\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u548c\u6743\u76ca\u8bc1\u660e\u903b\u8f91\u7684\u72b6\u6001\u673a\u3002 Celestia App \u57fa\u4e8e ",(0,l.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/"},"Cosmos SDK"),"\u6784\u5efa\uff0c\u8fd8\u5305\u542b",(0,l.kt)("strong",{parentName:"li"},"Celestia Core"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Celestia Core"),"\u662f\u72b6\u6001\u4ea4\u4e92\u3001\u5171\u8bc6\u548c\u533a\u5757\u751f\u4ea7\u5c42\u3002 Celestia Core \u57fa\u4e8e",(0,l.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/"},"Tendermint Core"),"\u6784\u5efa\uff0c\u7ecf\u8fc7\u4fee\u6539\u4ee5\u5b58\u50a8\u7ea0\u5220\u7801\u5757\u7684\u6570\u636e\u6839\u4ee5\u53ca\u5176\u4ed6\u66f4\u6539\uff08",(0,l.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture"},"\u8bf7\u53c2\u9605 ADR"),"\uff09\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Celestia \u8282\u70b9\uff08",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"\u89c1 repo"),"\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Celestia Node"),"\u901a\u8fc7\u4e00\u4e2a\u5355\u72ec\u7684 libp2p \u7f51\u7edc\u5bf9\u4e0a\u8ff0\u5185\u5bb9\u8fdb\u884c\u4e86\u6269\u5145\uff0c\u8be5\u7f51\u7edc\u670d\u52a1\u4e8e\u6570\u636e\u53ef\u7528\u6027\u91c7\u6837\u8bf7\u6c42\uff0c \u8be5\u56e2\u961f\u6709\u65f6\u5c06\u5176\u79f0\u4e3a\u201c\u5149\u73af\u201d\u7f51\u7edc\u3002")))),(0,l.kt)("h2",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,l.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528\u4ee5\u4e0b\u786c\u4ef6\u6700\u4f4e\u8981\u6c42\u6765\u8fd0\u884c\u6865\u63a5\u8282\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5185\u5b58: 8 GB RAM"),(0,l.kt)("li",{parentName:"ul"},"CPU\uff1a\u56db\u6838"),(0,l.kt)("li",{parentName:"ul"},"\u78c1\u76d8\uff1a250 GB SSD \u5b58\u50a8"),(0,l.kt)("li",{parentName:"ul"},"\u5e26\u5bbd\uff1a 1 Gbps\u4e0b\u8f7d/100 Mbps\u4e0a\u4f20")),(0,l.kt)("h2",{id:"\u8bbe\u7f6e\u60a8\u7684\u6865\u63a5\u8282\u70b9"},"\u8bbe\u7f6e\u60a8\u7684\u6865\u63a5\u8282\u70b9"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u6559\u7a0b\u662f\u5728 Ubuntu Linux 20.04 (LTS) x64 \u5b9e\u4f8b\u673a\u5668\u4e0a\u5b8c\u6210\u7684\u3002"),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u4f9d\u8d56\u9879"},"\u8bbe\u7f6e\u4f9d\u8d56\u9879"),(0,l.kt)("p",null,"\u8bf7\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/developers/environment"},"\u8fd9\u91cc"),"\u7684\u6b65\u9aa4\u5b89\u88c5\u4f9d\u8d56\u9879"),(0,l.kt)("h2",{id:"\u90e8\u7f72celestia\u6865\u63a5\u8282\u70b9"},"\u90e8\u7f72Celestia\u6865\u63a5\u8282\u70b9"),(0,l.kt)("h3",{id:"\u5b89\u88c5celestia\u8282\u70b9"},"\u5b89\u88c5Celestia\u8282\u70b9"),(0,l.kt)("p",null,"\u5b89\u88c5 Celestia Node \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5b83\u5c06\u7528\u4e8e\u8fd0\u884c Bridge \u8282\u70b9\u3002"),(0,l.kt)("p",null,"\u8bf7\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/developers/celestia-node"},"\u8fd9\u91cc"),"\u7684\u6559\u7a0b\u6765\u5b89\u88c5Celestia\u8282\u70b9\u3002"),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316\u6865\u63a5\u8282\u70b9"},"\u521d\u59cb\u5316\u6865\u63a5\u8282\u70b9"),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --core.rpc.port <port>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"--core.rpc\u3002 ort")," \u9ed8\u8ba4\u4e3a 26657 \u5982\u679c\u60a8\u6ca1\u6709\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a \u5b83\uff0c\u5b83\u5c06\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u8be5\u7aef\u53e3\u3002 \u5982\u679c\u4f60\u559c\u6b22\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528flag\u6765\u6307\u5b9a\u53e6\u4e00\u4e2a\u7aef\u53e3\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u8fde\u63a5\u5230\u7684 RPC \u7aef\u70b9\u5217\u8868\uff0c\u53ef\u4ee5\u4ece",(0,l.kt)("a",{parentName:"p",href:"/zh/nodes/mamaki-testnet#rpc-endpoints"},"\u6b64\u5904"),"\u7684\u5217\u8868\u4e2d\u67e5\u770b"),(0,l.kt)("h3",{id:"\u8fd0\u884c\u6865\u63a5\u8282\u70b9"},"\u8fd0\u884c\u6865\u63a5\u8282\u70b9"),(0,l.kt)("p",null,"\u542f\u52a8\u6865\u63a5\u8282\u70b9\u5e76\u8fde\u63a5\u5230\u9a8c\u8bc1\u5668\u8282\u70b9\u7684 gRPC \u7aef\u70b9 (\u901a\u5e38\u5728\u7aef\u53e3 9090\u4e0a\u663e\u793a)\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address> --core.grpc.port <port>\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},"--core.grpc\u3002 ort")," \u9ed8\u8ba4\u4e3a9090\uff0c \u5982\u679c\u60a8\u6ca1\u6709\u5728\u547d\u4ee4\u884c\u4e2d\u6307\u5b9a \u5b83\uff0c\u5b83\u5c06\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u8be5\u7aef\u53e3\u3002 \u5982\u679c\u4f60\u559c\u6b22\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528flag\u6765\u6307\u5b9a\u53e6\u4e00\u4e2a\u7aef\u53e3\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u8fde\u63a5\u5230\u7684 RPC \u7aef\u70b9\u5217\u8868\uff0c\u53ef\u4ee5\u4ece",(0,l.kt)("a",{parentName:"p",href:"/zh/nodes/mamaki-testnet#rpc-endpoints"},"\u6b64\u5904"),"\u7684\u5217\u8868\u4e2d\u67e5\u770b"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/nodes/keys"},"\u8fd9\u91cc"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key"),"\u6307\u793a\u6b65\u9aa4\u4e3a\u60a8\u7684\u8282\u70b9\u521b\u5efa\u5bc6\u94a5"),(0,l.kt)("p",null,"\u542f\u52a8\u6865\u63a5\u8282\u70b9\u540e\uff0c\u5c06\u4e3a\u60a8\u751f\u6210\u4e00\u4e2a\u94b1\u5305\u5bc6\u94a5\u3002 \u4f60\u9700\u8981\u4f7f\u7528\u6d4b\u8bd5\u7f51\u4ee3\u5e01\u4e3a\u8be5\u5730\u5740\u6ce8\u8d44\uff0c\u4ee5\u652f\u4ed8 PayForData \u4ea4\u6613\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u627e\u5230\u5730\u5740\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type bridge --keyring-backend test\n")),(0,l.kt)("p",null,"\u4f60\u6709\u4e24\u4e2a\u7f51\u7edc\u83b7\u53d6\u6d4b\u8bd5\u7f51\u4ee3\u5e01\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/nodes/arabica-devnet#arabica-devnet-faucet"},"Arabica")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/nodes/mamaki-testnet#mamaki-testnet-faucet"},"Mamaki"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u60a8\u6b63\u5728\u8fd0\u884c\u9a8c\u8bc1\u5668\u7684\u6865\u63a5\u8282Mamaki\u6d4b\u8bd5\u7f51testnet\u4ee3\u5e01 \uff0c\u56e0\u4e3a\u8fd9\u662f\u7528\u4e8e\u6d4b\u8bd5\u9a8c\u8bc1\u8005\u64cd\u4f5c\u7684\u6d4b\u8bd5\u7f51\u3002")),(0,l.kt)("h4",{id:"\u53ef\u9009\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8fd0\u884c\u6865\u63a5\u8282\u70b9"},"\u53ef\u9009\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8fd0\u884c\u6865\u63a5\u8282\u70b9"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u5bc6\u94a5\u8fd0\u884c\u6865\u63a5\u8282\u70b9\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u5fc5\u987b\u5b58\u5728\u4e8e celestia \u6865\u63a5\u8282\u70b9\u76ee\u5f55\u4e2d\u7684\u6b63\u786e\u8def\u5f84(\u9ed8\u8ba4: ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.celestia-bridge/keys/keyring-test"),")"),(0,l.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u5bc6\u94a5\u7684\u540d\u79f0\u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u5f00\u59cb"),"\u65f6\u4f20\u9012\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip> --core.grpc.port 9090 --keyring.accname <name_of_custom_key>\n")),(0,l.kt)("h3",{id:"\u53ef\u9009\u901a\u8fc7systemd\u542f\u52a8\u6865\u63a5\u8282\u70b9"},"\u53ef\u9009\uff1a\u901a\u8fc7SystemD\u542f\u52a8\u6865\u63a5\u8282\u70b9"),(0,l.kt)("p",null,"\u8bf7\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/nodes/systemd#celestia-bridge-node"},"\u8fd9\u91cc"),"\u7684\u6559\u7a0b\uff0c\u901a\u8fc7SystemD\uff0c\u5c06\u6865\u63a5\u8282\u70b9\u8bbe\u7f6e\u4e3a\u540e\u53f0\u8fdb\u7a0b\u3002"),(0,l.kt)("p",null,"\u60a8\u5df2\u6210\u529f\u5730\u8bbe\u7f6e\u4e86\u4e0e\u7f51\u7edc\u540c\u6b65\u7684\u6865\u63a5\u8282\u70b9\u3002"))}k.isMDXComponent=!0},1735:function(e,t,n){t.Z=n.p+"assets/images/BridgeNodes-c9d5799bf588d3becaefb313bd03b0c2.png"}}]);