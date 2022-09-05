"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[33],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},465:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return d}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),o=["components"],s={sidebar_label:"Helpful CLI commands"},p="Helpful CLI commands",i={unversionedId:"developers/celestia-app-commands",id:"developers/celestia-app-commands",title:"Helpful CLI commands",description:"View all options:",source:"@site/docs/developers/celestia-app-commands.md",sourceDirName:"developers",slug:"/developers/celestia-app-commands",permalink:"/developers/celestia-app-commands",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app-commands.md",tags:[],version:"current",frontMatter:{sidebar_label:"Helpful CLI commands"},sidebar:"developers",previous:{title:"Create A Celestia Testnet",permalink:"/developers/instantiate-testnet"},next:{title:"Celestia Node",permalink:"/category/celestia-node"}},c={},d=[{value:"Creating a wallet",id:"creating-a-wallet",level:2},{value:"Key management",id:"key-management",level:2},{value:"Importing and exporting keys",id:"importing-and-exporting-keys",level:3},{value:"Querying subcommands",id:"querying-subcommands",level:2},{value:"Token management",id:"token-management",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"helpful-cli-commands"},"Helpful CLI commands"),(0,l.kt)("p",null,"View all options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia-appd --help\nStart celestia app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, \n  and application configuration files\n  keys                Manage your application's keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default \n  location or at the location passed as an arg\n  version             Print the application binary version information\n")),(0,l.kt)("h2",{id:"creating-a-wallet"},"Creating a wallet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keyring-backend")," configures the keyring's backend, where the keys are stored."),(0,l.kt)("p",null,"Options are: ",(0,l.kt)("inlineCode",{parentName:"p"},"os|file|kwallet|pass|test|memory"),"."),(0,l.kt)("h2",{id:"key-management"},"Key management"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# listing keys\ncelestia-appd keys list\n\n# adding keys\ncelestia-appd keys add <KEY_NAME>\n\n# deleting keys\ncelestia-appd keys delete <KEY_NAME>\n\n# renaming keys\ncelestia-appd keys rename <CURRENT_KEY_NAME> <NEW_KEY_NAME>\n")),(0,l.kt)("h3",{id:"importing-and-exporting-keys"},"Importing and exporting keys"),(0,l.kt)("p",null,"Import an encrypted and ASCII-armored private key into the local keybase."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <KEY_NAME> <KEY_FILE>\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import amanda ./keyfile.txt\n")),(0,l.kt)("p",null,"Export a private key from the local keyring in encrypted and ASCII-armored format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys export <KEY_NAME>\n\n# you will then be prompted to set a password for the encrypted private key:\nEnter passphrase to encrypt the exported key:\n")),(0,l.kt)("p",null,"After you set a password, your encrypted key will be displayed."),(0,l.kt)("h2",{id:"querying-subcommands"},"Querying subcommands"),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd query <FLAGS> | <COMMAND>\n\n# alias q\ncelestia-appd q <FLAGS> | <COMMAND>\n")),(0,l.kt)("p",null,"To see all options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q --help\n")),(0,l.kt)("h2",{id:"token-management"},"Token management"),(0,l.kt)("p",null,"Get token balances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances <ADDRESS> --node <NODE_URI>\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances celestia1czpgn3hdh9sodm06d5qk23xzgpq2uyc8ggdqgw \\\n--node https://rpc-mamaki.pops.one\n")),(0,l.kt)("p",null,"Transfer tokens from one wallet to another:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n<amount> --node <NODE_URI> --chain-id <CHAIN_ID>\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send <FROM_ADDRESS> <TO_ADDRESS> \\\n19000000utia --node https://rpc-mamaki.pops.one/ --chain-id mamaki\n")),(0,l.kt)("p",null,"To see options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx bank send --help\n")))}m.isMDXComponent=!0}}]);