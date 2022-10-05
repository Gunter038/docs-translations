"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2611],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),o=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return l.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?l.createElement(g,r(r({ref:t},p),{},{components:n})):l.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var o=2;o<s;o++)r[o]=n[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var l=n(7462),a=n(3366),s=(n(7294),n(3905)),r=["components"],i={},c=void 0,o={unversionedId:"nodes/systemd",id:"nodes/systemd",title:"systemd",description:"- - -",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/nodes/systemd.md",sourceDirName:"nodes",slug:"/nodes/systemd",permalink:"/zh/nodes/systemd",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/systemd.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Resources",permalink:"/zh/category/resources"},next:{title:"keys",permalink:"/zh/nodes/keys"}},p={},u=[{value:"\u5171\u8bc6\u8282\u70b9",id:"\u5171\u8bc6\u8282\u70b9",level:2},{value:"\u901a\u8fc7SystemD\u542f\u52a8Celestia-Appd",id:"\u901a\u8fc7systemd\u542f\u52a8celestia-appd",level:3},{value:"\u6570\u636e\u53ef\u7528\u8282\u70b9",id:"\u6570\u636e\u53ef\u7528\u8282\u70b9",level:2},{value:"Celestia\u5b58\u50a8\u5168\u8282\u70b9",id:"celestia\u5b58\u50a8\u5168\u8282\u70b9",level:3},{value:"Celestia\u6865\u63a5\u8282\u70b9",id:"celestia\u6865\u63a5\u8282\u70b9",level:3},{value:"Celestia\u8f7b\u8282\u70b9",id:"celestia\u8f7b\u8282\u70b9",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("hr",null),(0,s.kt)("p",null,"sidebar_label : SystemD"),(0,s.kt)("hr",null),(0,s.kt)("h1",{id:"\u901a\u8fc7systemd\u8bbe\u7f6e\u60a8\u7684\u8282\u70b9\u4e3a\u540e\u53f0\u8fdb\u7a0b"},"\u901a\u8fc7SystemD\u8bbe\u7f6e\u60a8\u7684\u8282\u70b9\u4e3a\u540e\u53f0\u8fdb\u7a0b"),(0,s.kt)("p",null,"SystemD\u662f\u4e00\u4e2a\u540e\u53f0\u8fdb\u7a0b\u7ba1\u7406\u670d\u52a1\uff0c\u80fd\u65b9\u4fbf\u5730\u4f7f\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u4e3a\u540e\u53f0\u8fdb\u7a0b\u3002"),(0,s.kt)("h2",{id:"\u5171\u8bc6\u8282\u70b9"},"\u5171\u8bc6\u8282\u70b9"),(0,s.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u8fd0\u884c\u9a8c\u8bc1\u8005\u6216\u8005\u8bf4\u53c2\u4e0e\u5171\u8bc6\u7684\u5168\u8282\u70b9\uff0c\u4ee5\u4e0b\u662f\u5c06",(0,s.kt)("inlineCode",{parentName:"p"},"celestia-appd"),"\u8bbe\u7f6e\u4e3a\u540e\u53f0\u8fdb\u7a0b\u7684\u6b65\u9aa4\u3002"),(0,s.kt)("h3",{id:"\u901a\u8fc7systemd\u542f\u52a8celestia-appd"},"\u901a\u8fc7SystemD\u542f\u52a8Celestia-Appd"),(0,s.kt)("p",null,"SystemD\u662f\u4e00\u4e2a\u540e\u53f0\u8fdb\u7a0b\u7ba1\u7406\u670d\u52a1\uff0c\u80fd\u65b9\u4fbf\u5730\u4f7f\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u4e3a\u540e\u53f0\u8fdb\u7a0b\u3002"),(0,s.kt)("p",null,"\u521b\u5efaCelestia-Appd\u7684systemd\u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-appd.service\n[Unit]\nDescription=celestia-appd Cosmos daemon\nAfter=network-online.target\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia-appd start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u88ab\u6210\u529f\u521b\u5efa\uff0c\u60a8\u5c06\u80fd\u591f\u770b\u5230\u5b83\u7684\u5185\u5bb9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-appd.service\n")),(0,s.kt)("p",null,"\u542f\u7528\u5e76\u542f\u52a8celestia-appd\u540e\u53f0\u8fdb\u7a0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-appd\nsystemctl start celestia-appd\n")),(0,s.kt)("p",null,"\u68c0\u67e5\u540e\u53f0\u8fdb\u7a0b\u662f\u5426\u5df2\u6b63\u786e\u542f\u52a8\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status celestia-appd\n")),(0,s.kt)("p",null,"\u5b9e\u65f6\u67e5\u770b\u540e\u53f0\u8fdb\u7a0b\u65e5\u5fd7\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u celestia-appd.service -f\n")),(0,s.kt)("p",null,"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u8282\u70b9\u662f\u5426\u5df2\u5b8c\u6210\u540c\u6b65\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s localhost:26657/status | jq .result | jq .sync_info\n")),(0,s.kt)("p",null,"\u8bf7\u786e\u4fdd\u60a8\u770b\u5230",(0,s.kt)("inlineCode",{parentName:"p"},'"catching_up": false'),", \u5426\u5219\u8bf7\u7b49\u5f85\u5b83\u8fd0\u884c\uff0c\u76f4\u81f3\u8fbe\u5230\u540c\u6b65\u72b6\u6001\u3002"),(0,s.kt)("h2",{id:"\u6570\u636e\u53ef\u7528\u8282\u70b9"},"\u6570\u636e\u53ef\u7528\u8282\u70b9"),(0,s.kt)("h3",{id:"celestia\u5b58\u50a8\u5168\u8282\u70b9"},"Celestia\u5b58\u50a8\u5168\u8282\u70b9"),(0,s.kt)("p",null,"\u521b\u5efaCelestia\u5b58\u50a8\u5168\u8282\u70b9systemd\u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-full.service\n[Unit]\nDescription=celestia-full Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia full start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u88ab\u6210\u529f\u521b\u5efa\uff0c\u60a8\u5c06\u80fd\u591f\u770b\u5230\u5b83\u7684\u5185\u5bb9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-full.service\n")),(0,s.kt)("p",null,"\u542f\u7528\u5e76\u542f\u52a8\u5168\u8282\u70b9\u7684\u540e\u53f0\u8fdb\u7a0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-full\nsystemctl start celestia-full && journalctl -u \\\ncelestia-full.service -f\n")),(0,s.kt)("p",null,"\u60a8\u5e94\u8be5\u80fd\u770b\u5230\u5b58\u50a8\u5168\u8282\u70b9\u6574\u4e2a\u540c\u6b65\u8fc7\u7a0b\u7684\u65e5\u5fd7\u3002"),(0,s.kt)("h3",{id:"celestia\u6865\u63a5\u8282\u70b9"},"Celestia\u6865\u63a5\u8282\u70b9"),(0,s.kt)("p",null,"\u521b\u5efa\u6865\u63a5\u8282\u70b9\u7684systemd\u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-bridge.service\n[Unit]\nDescription=celestia-bridge Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia bridge start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u88ab\u6210\u529f\u521b\u5efa\uff0c\u60a8\u5c06\u80fd\u591f\u770b\u5230\u5b83\u7684\u5185\u5bb9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-bridge.service\n")),(0,s.kt)("p",null,"\u542f\u7528\u5e76\u542f\u52a8\u6865\u63a5\u8282\u70b9\u540e\u53f0\u8fdb\u7a0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-bridge\nsystemctl start celestia-bridge && journalctl -u \\\ncelestia-bridge.service -f\n")),(0,s.kt)("p",null,"\u73b0\u5728\uff0cCelestia\u6865\u63a5\u8282\u70b9\u5c06\u5f00\u59cb\uff0c\u4eceCelestia\u5e94\u7528\u7a0b\u5e8f\u540c\u6b65\u533a\u5757\u5934\uff0c\u5e76\u5b58\u50a8\u533a\u5757\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u6211\u4eec\u53ef\u4ee5\u4eceCelestia\u6865\u63a5\u8282\u70b9\u770b\u5230",(0,s.kt)("inlineCode",{parentName:"p"},"multiaddress"),"\u3002 Note: At startup, we can see the ",(0,s.kt)("inlineCode",{parentName:"p"},"multiaddress")," from Celestia Bridge Node. This is ",(0,s.kt)("strong",{parentName:"p"},"needed for future Light Node")," connections and communication between Celestia Bridge Nodes")),(0,s.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"NODE_IP=<ip-address>\n/ip4/$NODE_IP/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22\n")),(0,s.kt)("p",null,"\u60a8\u5e94\u8be5\u80fd\u770b\u5230\u6865\u63a5\u8282\u70b9\u6574\u4e2a\u540c\u6b65\u8fc7\u7a0b\u7684\u65e5\u5fd7\u3002"),(0,s.kt)("h3",{id:"celestia\u8f7b\u8282\u70b9"},"Celestia\u8f7b\u8282\u70b9"),(0,s.kt)("p",null,"\u628a\u8f7b\u8282\u70b9\u4f5c\u4e3a\u540e\u53f0\u8fdb\u7a0b\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-lightd.service\n[Unit]\nDescription=celestia-lightd Light Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia light start --core.ip <ip-address> --core.grpc.port <port>\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,s.kt)("p",null,"\u5982\u679c\u6587\u4ef6\u88ab\u6210\u529f\u521b\u5efa\uff0c\u60a8\u5c06\u80fd\u591f\u770b\u5230\u5b83\u7684\u5185\u5bb9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-lightd.service\n")),(0,s.kt)("p",null,"\u542f\u7528\u5e76\u542f\u52a8\u8f7b\u8282\u70b9\u7684\u540e\u53f0\u8fdb\u7a0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl enable celestia-lightd\nsystemctl start celestia-lightd\n")),(0,s.kt)("p",null,"\u68c0\u67e5\u540e\u53f0\u8fdb\u7a0b\u662f\u5426\u5df2\u6b63\u786e\u542f\u52a8\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"systemctl status celestia-lightd\n")),(0,s.kt)("p",null,"\u5b9e\u65f6\u67e5\u770b\u540e\u53f0\u8fdb\u7a0b\u65e5\u5fd7\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u celestia-lightd.service -f\n")),(0,s.kt)("p",null,"\u73b0\u5728\uff0cCelestia\u8f7b\u8282\u70b9\u5c06\u5f00\u59cb\u540c\u6b65\u533a\u5757\u5934\u3002 Now, the Celestia Light Node will start syncing headers. After sync is finished, Light Node will do Data Availability Sampling (DAS) from the Bridge Node."))}m.isMDXComponent=!0}}]);