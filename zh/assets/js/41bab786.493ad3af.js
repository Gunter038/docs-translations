"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5535],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8954:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={},s=void 0,p={unversionedId:"developers/celestia-app-commands",id:"developers/celestia-app-commands",title:"celestia-app-commands",description:"- - -",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/celestia-app-commands.md",sourceDirName:"developers",slug:"/developers/celestia-app-commands",permalink:"/zh/developers/celestia-app-commands",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app-commands.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"instantiate-testnet",permalink:"/zh/developers/instantiate-testnet"},next:{title:"Celestia Node",permalink:"/zh/category/celestia-node"}},c={},d=[{value:"\u521b\u5efa\u94b1\u5305",id:"\u521b\u5efa\u94b1\u5305",level:2},{value:"\u5bc6\u94a5\u7ba1\u7406",id:"\u5bc6\u94a5\u7ba1\u7406",level:2},{value:"\u5bfc\u5165\u548c\u5bfc\u51fa",id:"\u5bfc\u5165\u548c\u5bfc\u51fa",level:3},{value:"\u67e5\u8be2\u5b50\u547d\u4ee4",id:"\u67e5\u8be2\u5b50\u547d\u4ee4",level:2},{value:"\u4ee3\u5e01\u7ba1\u7406",id:"\u4ee3\u5e01\u7ba1\u7406",level:2},{value:"Governance",id:"governance",level:2},{value:"Claim validator rewards",id:"claim-validator-rewards",level:2},{value:"Delegate &amp; undelegate tokens",id:"delegate--undelegate-tokens",level:2},{value:"Unjailing the validator",id:"unjailing-the-validator",level:2},{value:"How to export logs with SystemD",id:"how-to-export-logs-with-systemd",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"sidebar_label: \u6709\u7528\u7684 CLI \u547d\u4ee4"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6709\u7528\u7684-cli-\u547d\u4ee4"},"\u6709\u7528\u7684 CLI \u547d\u4ee4"),(0,r.kt)("p",null,"\u67e5\u770b\u6240\u6709\u9009\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia-appd --help\nStart celestia app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, \n  and application configuration files\n  keys                Manage your application's keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default \n  location or at the location passed as an arg\n  version             Print the application binary version information\n")),(0,r.kt)("h2",{id:"\u521b\u5efa\u94b1\u5305"},"\u521b\u5efa\u94b1\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"keyring-backend"),"\u914d\u7f6e\u5b58\u50a8\u5bc6\u94a5\u7684keyring\u7684\u540e\u53f0\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u9009\u9879\u662f:",(0,r.kt)("inlineCode",{parentName:"p"},"os|file|kwallet|pass|test|memory"),"\u3002"),(0,r.kt)("h2",{id:"\u5bc6\u94a5\u7ba1\u7406"},"\u5bc6\u94a5\u7ba1\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# listing keys\ncelestia-appd keys list\n\n# adding keys\ncelestia-appd keys add <KEY_NAME>\n\n# deleting keys\ncelestia-appd keys delete <KEY_NAME>\n\n# renaming keys\ncelestia-appd keys rename <CURRENT_KEY_NAME> <NEW_KEY_NAME>\n")),(0,r.kt)("h3",{id:"\u5bfc\u5165\u548c\u5bfc\u51fa"},"\u5bfc\u5165\u548c\u5bfc\u51fa"),(0,r.kt)("p",null,"\u5bfc\u5165\u52a0\u5bc6\u7684 ASCII-armored \u79c1\u94a5\u5230\u672c\u5730\u5bc6\u94a5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <KEY_NAME> <KEY_FILE>\n")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import amanda ./keyfile.txt\n")),(0,r.kt)("p",null,"\u7528\u52a0\u5bc6\u683c\u5f0f\u548c ASCII-armored \u683c\u5f0f\u4ece\u672c\u5730\u5bc6\u94a5\u4e2d\u5bfc\u51fa\u79c1\u94a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys export <KEY_NAME>\n\n# you will then be prompted to set a password for the encrypted private key:\nEnter passphrase to encrypt the exported key:\n")),(0,r.kt)("p",null,"\u5728\u60a8\u8bbe\u7f6e\u5bc6\u7801\u540e\uff0c\u60a8\u7684\u52a0\u5bc6\u5bc6\u94a5\u5c06\u4f1a\u663e\u793a\u3002"),(0,r.kt)("h2",{id:"\u67e5\u8be2\u5b50\u547d\u4ee4"},"\u67e5\u8be2\u5b50\u547d\u4ee4"),(0,r.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd query <FLAGS> | <COMMAND>\n\n# alias q\ncelestia-appd q <FLAGS> | <COMMAND>\n")),(0,r.kt)("p",null,"\u67e5\u770b\u6240\u6709\u9009\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q --help\n")),(0,r.kt)("h2",{id:"\u4ee3\u5e01\u7ba1\u7406"},"\u4ee3\u5e01\u7ba1\u7406"),(0,r.kt)("p",null,"\u83b7\u53d6\u4ee3\u5e01\u4f59\u989d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances <ADDRESS> --node <NODE_URI>\n")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances celestia1czpgn3hdh9sodm06d5qk23xzgpq2uyc8ggdqgw \\\n--node https://rpc-mamaki.pops.one\n")),(0,r.kt)("p",null,"\u5c06\u4ee3\u5e01\u4ece\u94b1\u5305\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u94b1\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n<amount> --node <NODE_URI> --chain-id <CHAIN_ID>\n")),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n19000000utia --node https://rpc-mamaki.pops.one/ --chain-id mamaki\n")),(0,r.kt)("p",null,"\u67e5\u770b\u9009\u9879:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send --help\n")),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("p",null,"You can vote on a governance proposal with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx gov vote <proposal id> <yes or no> --from <wallet> --chain-id <chain-id>\n")),(0,r.kt)("h2",{id:"claim-validator-rewards"},"Claim validator rewards"),(0,r.kt)("p",null,"You can claim your validator rewards with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx distribution withdraw-rewards <validator valoper>\\\n    --commission --from=<validator wallet> --chain-id <chain-id> --gas auto -y\n")),(0,r.kt)("h2",{id:"delegate--undelegate-tokens"},"Delegate & undelegate tokens"),(0,r.kt)("p",null,"You can ",(0,r.kt)("inlineCode",{parentName:"p"},"delegate")," your tokens to a validator with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking delegate <validator valoper> <amount>\\\n    --from <wallet> --chain-id <chain-id>\n")),(0,r.kt)("p",null,"You can undelegate tokens to a validator with the ",(0,r.kt)("inlineCode",{parentName:"p"},"unbond")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking unbond <validator valoper> <amount>\\\n    --from <wallet> --chain-id <chain-id>\n")),(0,r.kt)("h2",{id:"unjailing-the-validator"},"Unjailing the validator"),(0,r.kt)("p",null,"You can unjail your validator with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx slashing unjail --from <validator wallet>\\\n    --chain-id <chain-id> --gas auto -y\n")),(0,r.kt)("h2",{id:"how-to-export-logs-with-systemd"},"How to export logs with SystemD"),(0,r.kt)("p",null,"You can export your logs if you are running a SystemD service with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -u <your systemd service> -S yesterday > node_logs.txt\nsudo journalctl -u <your systemd service> -S today > node_logs.txt\n# This command outputs the last 1 million lines!\nsudo journalctl -u <your systemd service> -n 1000000 > node_logs.txt\n")))}m.isMDXComponent=!0}}]);