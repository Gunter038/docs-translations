"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1383],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return A}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),A=l,h=c["".concat(s,".").concat(A)]||c[A]||p[A]||r;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function A(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1972:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return A},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),o=["components"],i={sidebar_label:"Node Tutorial"},s="Getting and Sending Transactions with Celestia Node",u={unversionedId:"developers/node-tutorial",id:"developers/node-tutorial",title:"Getting and Sending Transactions with Celestia Node",description:"In this tutorial, we will cover how to use the Celestia Node API to submit and",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/node-tutorial.md",sourceDirName:"developers",slug:"/developers/node-tutorial",permalink:"/zh/developers/node-tutorial",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/node-tutorial.md",tags:[],version:"current",frontMatter:{sidebar_label:"Node Tutorial"},sidebar:"developers",previous:{title:"Installing Celestia Node",permalink:"/zh/developers/celestia-node"},next:{title:"Node Video Tutorial",permalink:"/zh/developers/light-node-video"}},d={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setting Up Dependencies",id:"setting-up-dependencies",level:2},{value:"Install Golang",id:"install-golang",level:3},{value:"Celestia Node",id:"celestia-node",level:2},{value:"Install Celestia Node",id:"install-celestia-node",level:3},{value:"Instantiate Celestia Light Node",id:"instantiate-celestia-light-node",level:3},{value:"Connect To A Public Core Endpoint",id:"connect-to-a-public-core-endpoint",level:3},{value:"Keys and wallets",id:"keys-and-wallets",level:3},{value:"Node API Calls",id:"node-api-calls",level:2},{value:"Balance",id:"balance",level:3},{value:"Get Block Header",id:"get-block-header",level:3},{value:"Submit a PFD Transaction",id:"submit-a-pfd-transaction",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Get Namespaced Shares by Block Height",id:"get-namespaced-shares-by-block-height",level:3}],c={toc:p};function A(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-and-sending-transactions-with-celestia-node"},"Getting and Sending Transactions with Celestia Node"),(0,r.kt)("p",null,"In this tutorial, we will cover how to use the Celestia Node API to submit and\nretrieve messages from the Data Availability Layer by their namespace ID."),(0,r.kt)("p",null,"This tutorial was assumes you are working in a Linux environment."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To view a video tutorial for setting up a Celestia Light Node, click ",(0,r.kt)("a",{parentName:"p",href:"/zh/developers/light-node-video"},"here"))),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"The following minimum hardware requirements are recommended for running a light node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 2 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Single Core"),(0,r.kt)("li",{parentName:"ul"},"Disk: 5 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 56 Kbps for Download/56 Kbps for Upload")),(0,r.kt)("h2",{id:"setting-up-dependencies"},"Setting Up Dependencies"),(0,r.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# If you are using the APT package manager\nsudo apt update && sudo apt upgrade -y\n\n# If you are using the YUM package manager\nsudo yum update\n")),(0,r.kt)("p",null,"These are essential packages that are necessary to execute many tasks like downloading files, compiling, and monitoring the node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# If you are using the APT package manager\nsudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n\n# If you are using the YUM package manager\nsudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n")),(0,r.kt)("h3",{id:"install-golang"},"Install Golang"),(0,r.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang")," so we must install Golang to build and run them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,r.kt)("p",null,"Now we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,r.kt)("p",null,"To check if Go was installed correctly run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"The output should be the version installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n")),(0,r.kt)("h2",{id:"celestia-node"},"Celestia Node"),(0,r.kt)("h3",{id:"install-celestia-node"},"Install Celestia Node"),(0,r.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\n")),(0,r.kt)("p",null,"Verify that the binary is working and check the version with the celestia version command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n")),(0,r.kt)("h3",{id:"instantiate-celestia-light-node"},"Instantiate Celestia Light Node"),(0,r.kt)("p",null,"Now, let's instantiate a Celestia Light node:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: RPC Endpoints are exposed in all Celestia Node types\nsuch as Light, Bridge and Full Nodes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\n")),(0,r.kt)("h3",{id:"connect-to-a-public-core-endpoint"},"Connect To A Public Core Endpoint"),(0,r.kt)("p",null,"Let's now run the Celestia Light node with a GRPC connection to\nan example public Core Endpoint."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You are also encouraged to find a community-run API endpoint\nand there are several in the Discord. This one is used for demonstration\npurposes. You can find a list of RPC endpoints ",(0,r.kt)("a",{parentName:"p",href:"../nodes/mamaki-testnet#rpc-endpoints"},"here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc http://<ip-address>:9090\n")),(0,r.kt)("p",null,"For example, your command along with an RPC endpoint might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc https://rpc-mamaki.pops.one:9090\n")),(0,r.kt)("h3",{id:"keys-and-wallets"},"Keys and wallets"),(0,r.kt)("p",null,"You can create your key for your node by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make cel-key\n")),(0,r.kt)("p",null,"Once you start the Light Node, a wallet key will be generated for you. You will need to fund that address with Mamaki Testnet tokens to pay for PayForData transactions."),(0,r.kt)("p",null,"You can find the address by running the following command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type light --keyring-backend test\n")),(0,r.kt)("p",null,"If you would like to fund your wallet with testnet tokens, head over to the Celestia Discord channel ",(0,r.kt)("inlineCode",{parentName:"p"},"#faucet"),"."),(0,r.kt)("p",null,"You can request funds to your wallet address using the following command in Discord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$request <Wallet-Address>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<Wallet-Address>")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia1******")," address generated\nwhen you created the wallet."),(0,r.kt)("p",null,"With your wallet funded, you can move on to the next step."),(0,r.kt)("h2",{id:"node-api-calls"},"Node API Calls"),(0,r.kt)("p",null,"Open up another terminal window in order to begin querying the API.\n",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," exposes its RPC endpoint on port ",(0,r.kt)("inlineCode",{parentName:"p"},"26658")," by default."),(0,r.kt)("h3",{id:"balance"},"Balance"),(0,r.kt)("p",null,"Now, let's query our node for the balance of its default account\n(which is the account associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"developer")," key we generated earlier):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:26658/balance\n")),(0,r.kt)("p",null,"It will output the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "denom":"utia",\n   "amount":"999995000000000"\n}\n')),(0,r.kt)("p",null,"This shows you the balance in that wallet."),(0,r.kt)("h3",{id:"get-block-header"},"Get Block Header"),(0,r.kt)("p",null,"Now, let's get the block header information."),(0,r.kt)("p",null,"Here we will get the header from Block 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:26658/header/1\n")),(0,r.kt)("p",null,"It will output something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "header":{\n      "version":{\n         "block":11\n      },\n      "chain_id":"devnet-2",\n      "height":1,\n      "time":"2021-11-23T02:24:05.965728875Z",\n      "last_block_id":{\n         "hash":"",\n         "parts":{\n            "total":0,\n            "hash":""\n         }\n      },\n      "last_commit_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "data_hash":"7B578B351B1B0BBD70BB350019EBC964C44A140A37EF715B552A7F8F315ACD19",\n      "validators_hash":"7F4EA93A134DEDBDA6A1FDD30D05760DD98A2B5FBA95DB3EFFFE7FCE4B361855",\n      "next_validators_hash":"7F4EA93A134DEDBDA6A1FDD30D05760DD98A2B5FBA95DB3EFFFE7FCE4B361855",\n      "consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",\n      "app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "last_results_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "evidence_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "proposer_address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E"\n   },\n   "commit":{\n      "height":1,\n      "round":1,\n      "block_id":{\n         "hash":"4632277C441CA6155C4374AC56048CF4CFE3CBB2476E07A548644435980D5E17",\n         "parts":{\n            "total":1,\n            "hash":"BE1B789969938DB061B7723BE45C8A7B4B27192339A8E0A4E216775B2CB58D97"\n         }\n      },\n      "signatures":[\n         {\n            "block_id_flag":2,\n            "validator_address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n            "timestamp":"2021-11-23T11:53:56.123958759Z",\n            "signature":"q/XF7Nc2ThcQgWfqi6LYOUEqLcU+sgVPY1nB2CLWdjRo80WwI6xy6QaYx1B0lmcKAkWR0YMxbc7vJzKF70qwBA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E",\n            "timestamp":"2021-11-23T11:53:56.036027188Z",\n            "signature":"0bbxeviCvgLlyIF47JoY1CMN2e/MhHtFzhdgV0zCM+P3qeO/rkh+0TSxoRVUB1MDvMCoA8hyffCw3amxympMAA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"31711F367349D1BD619BD0A39568A69614B8A048",\n            "timestamp":"2021-11-23T11:53:56.135943844Z",\n            "signature":"gT23rZ8+XcG5rQ9QS+uh+Wn5eAiJDVy8bh23Fb8hevnHsuO1er2892MXAohaLRF6TTWs/C6dItYph4B/k3b6DQ=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"5A253EC2A9AB20AFD48C7BED2AFCA53F5C80BCA6",\n            "timestamp":"2021-11-23T11:53:56.081698742Z",\n            "signature":"nMngIlJ7PPPtu0N20YwKhWt/H3/JrEKJC3rnS5KG/8J3IppTacuwjGDUqIuHpRlrD0MmWa1mlY+6+ulbytt2AA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"79BEB39F4B396F9278DA03F1C97F9BE3B10B12D3",\n            "timestamp":"2021-11-23T11:53:56.037896319Z",\n            "signature":"wPAL/sK4YXSU7iRXl00GDLvi4IItVlkY2zRkxIUeV9VA3Tq8Tke6wGE0N6pXKmtMcKUMoyjm03RWHv4mrtj1BA=="\n         },\n         {\n            "block_id_flag":1,\n            "validator_address":"",\n            "timestamp":"0001-01-01T00:00:00Z",\n            "signature":null\n         },\n         {\n            "block_id_flag":1,\n            "validator_address":"",\n            "timestamp":"0001-01-01T00:00:00Z",\n            "signature":null\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"D345D62BBD18C301B843DF7C65F10E57AB17BD98",\n            "timestamp":"2021-11-23T11:53:56.123499237Z",\n            "signature":"puj5Epw3yPGjSsJk6aQI74S2prgL7+cuiEpCxXYzQxOi0kNIqh8UMZLYf+AVHDQNJXehSmrAK6+VsIt9NF0DDg=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"DEC2642E786A941511A401090D21621E7F08A36D",\n            "timestamp":"2021-11-23T11:53:56.123136439Z",\n            "signature":"J/lnFqARXj42Lfx5MGY0FO/wug+AyQRxTnQp1u1HyczvV+0hXXuk06Uosi61jQKgJG6JBJF2VidqA41/uKMEDw=="\n         }\n      ]\n   },\n   "validator_set":{\n      "validators":[\n         {\n            "address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n            "pub_key":"sMcFgSIzlD77eZYgV7H4akyxoHCPc2oIQW05qWEB6b4=",\n            "voting_power":5000,\n            "proposer_priority":-40000\n         },\n         {\n            "address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E",\n            "pub_key":"WdqZ8hoyc1HxZCJfQrAGKm2fFJZFg7PngPNGkA1RWXc=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"31711F367349D1BD619BD0A39568A69614B8A048",\n            "pub_key":"pvwSRksq3ekXIiYK7IzjQJ870BxLqEma8zRr9n9VnXI=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"5A253EC2A9AB20AFD48C7BED2AFCA53F5C80BCA6",\n            "pub_key":"RnmnTlKoKxNoh2TpohBDP3cKlx4ATiPOCvQFk/6xpUU=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"79BEB39F4B396F9278DA03F1C97F9BE3B10B12D3",\n            "pub_key":"oh/N+GOIennBOAa/gPNCso1mDlqaHQNn7Op/X8opbeY=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"7F1105B7B219481810C49730AECB1A83036BCA3A",\n            "pub_key":"Ow/AHP/Q3guPGymUKpvhnwae+QoCOpGztpVnP179IG8=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"87265CC17922E01497F40B701EC9F05373B83467",\n            "pub_key":"MNi0Z+uNF5X1Bxj988IDXVl0BKUcLs7LItoMnX6dbg4=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"D345D62BBD18C301B843DF7C65F10E57AB17BD98",\n            "pub_key":"4g3hhdyU4IIgWW/4sR0nax8bsC/M/fDbt1N8s/QanF8=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"DEC2642E786A941511A401090D21621E7F08A36D",\n            "pub_key":"b+Vv6Lcp0bhIjOQncr+OYBHixCvU5+k34y4RqyvpluE=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         }\n      ],\n      "proposer":{\n         "address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n         "pub_key":"sMcFgSIzlD77eZYgV7H4akyxoHCPc2oIQW05qWEB6b4=",\n         "voting_power":5000,\n         "proposer_priority":-40000\n      }\n   },\n   "dah":{\n      "row_roots":[\n         "//////////7//////////uyLCVMJmAItYqbOqgHXm3OwHsq1xQiAX1kZV2Tgcobm",\n         "/////////////////////ykyWNfDJZfigziZC5BN5L00KKuoyDPduwynDywauskL"\n      ],\n      "column_roots":[\n         "//////////7//////////uyLCVMJmAItYqbOqgHXm3OwHsq1xQiAX1kZV2Tgcobm",\n         "/////////////////////ykyWNfDJZfigziZC5BN5L00KKuoyDPduwynDywauskL"\n      ]\n   }\n}\n')),(0,r.kt)("h3",{id:"submit-a-pfd-transaction"},"Submit a PFD Transaction"),(0,r.kt)("p",null,"In this example, we will be submitting a PayForData\ntransaction to the node's ",(0,r.kt)("inlineCode",{parentName:"p"},"/submit_pfd")," endpoint."),(0,r.kt)("p",null,"Some things to consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PFD is a PayForData Message."),(0,r.kt)("li",{parentName:"ul"},"The endpoint also takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," values."),(0,r.kt)("li",{parentName:"ul"},"Namespace ID should be 8 bytes."),(0,r.kt)("li",{parentName:"ul"},"Data is in hex-encoded bytes of the raw message."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gas_limit")," is the limit of gas to use for the transaction")),(0,r.kt)("p",null,"We use the following ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace_id")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"0000010000000100")," and\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," value of ",(0,r.kt)("inlineCode",{parentName:"p"},"f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5"),"."),(0,r.kt)("p",null,"You can generate your own ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace_id")," and data values using this\nuseful Golang Playground we created ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/play/p/7ltvaj8lhRl"},"here"),"."),(0,r.kt)("p",null,"We run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -d \'{"namespace_id": "0c204d39600fddd3",\n  "data": "f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5",\n  "gas_limit": 60000}\' http://localhost:26658/submit_pfd\n')),(0,r.kt)("p",null,"We get the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "height":2452,\n   "txhash":"04A79AF9DA62FDB41ACD7D82EB0B9004AE4E4ED603B280A65816560B4F38A999",\n   "data":"12200A1E2F7061796D656E742E4D7367506179466F7244617461526573706F6E7365",\n   "raw_log":"[{\\"msg_index\\":0,\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"/payment.MsgPayForData\\"}]},{\\"type\\":\\"payfordata\\",\\"attributes\\":[{\\"key\\":\\"signer\\",\\"value\\":\\"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw\\"},{\\"key\\":\\"size\\",\\"value\\":\\"27\\"}]}]}]",\n   "logs":[\n      {\n         "msg_index":0,\n         "events":[\n            {\n               "type":"message",\n               "attributes":[\n                  {\n                     "key":"action",\n                     "value":"/payment.MsgPayForData"\n                  }\n               ]\n            },\n            {\n               "type":"payfordata",\n               "attributes":[\n                  {\n                     "key":"signer",\n                     "value":"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw"\n                  },\n                  {\n                     "key":"size",\n                     "value":"27"\n                  }\n               ]\n            }\n         ]\n      }\n   ],\n   "events":[\n      {\n         "type":"coin_spent",\n         "attributes":[\n            {\n               "key":"spender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"coin_received",\n         "attributes":[\n            {\n               "key":"receiver",\n               "value":"celestia17xpfvakm2amg962yls6f84z3kell8c5lpnjs3s",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"transfer",\n         "attributes":[\n            {\n               "key":"recipient",\n               "value":"celestia17xpfvakm2amg962yls6f84z3kell8c5lpnjs3s",\n               "index":true\n            },\n            {\n               "key":"sender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"message",\n         "attributes":[\n            {\n               "key":"sender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws/267",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"JMNihnKS/MtYJDprqEFGJuXh16tVADsDDxXaFFpvv2te57btl4LbiRzwRRiN2rvwkJ2zlAApu2ImT22MZBi5+A==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia13zx48t96zauht0kpcn0kcfykc9wn8fehzcp9wq/1024",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"mIZIjbzN0/RQAlQN7TDWzqtey3vVBPe7IO3+IIDhJstIH8QU9vsHfl0Rql9qWMZQG4dM+77w9WmUcnCeS7edfw==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia1h36gnnwzneu0csqzn2waph5y983hf3dkaznlgz/0",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"sfy+XyP7iWU+V9q3zEIOWxbGihvhzUKRLNVeXP+a+5oRefIA/Pyqfm13A5NU9I27hhfvpqo9vhXW1waRgcI9OA==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"message",\n         "attributes":[\n            {\n               "key":"action",\n               "value":"/payment.MsgPayForData",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"payfordata",\n         "attributes":[\n            {\n               "key":"signer",\n               "value":"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw",\n               "index":true\n            },\n            {\n               "key":"size",\n               "value":"27",\n               "index":true\n            }\n         ]\n      }\n   ]\n}\n')),(0,r.kt)("p",null,"If you notice from the above output, it returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," of\n",(0,r.kt)("inlineCode",{parentName:"p"},"2452")," which we will use for the next command."),(0,r.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you encounter an error like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ curl -X POST -d \'{"namespace_id": "c14da9d459dc57f5", "data": "4f7a3f1aadd83255b8410fef4860c0cd2eba82e24a", "gas_limit": 60000}\'  localhost:26658/submit_pfd\n"rpc error: code = NotFound desc = account celestia1krkle0n547u0znz3unnln8paft2dq4z3rznv86 not found"\n')),(0,r.kt)("p",null,"It is possible that the account you are trying to submit a PayForData from\ndoesn't have testnet tokens yet. Ensure the testnet faucet has funded your\naccount with tokens and then try again."),(0,r.kt)("h3",{id:"get-namespaced-shares-by-block-height"},"Get Namespaced Shares by Block Height"),(0,r.kt)("p",null,"After submitting your PFD transaction, upon success, the node will return\nthe block height for which the PFD transaction was included. You can then\nuse that block height and the namespace ID with which you submitted your\nPFD transaction to get your message shares returned to you. In this example,\nthe block height we got was 589 which we will use for the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \\\n  http://localhost:26658/namespaced_shares/0c204d39600fddd3/height/2452\n")),(0,r.kt)("p",null,"Will generate the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "shares":[\n      "DCBNOWAP3dMb8fIMqAB+kQo7+LLmHaDya8oH73hxem6lQWX1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="\n   ],\n   "height":2452\n}\n')),(0,r.kt)("p",null,"The output here is base64-encoded."))}A.isMDXComponent=!0}}]);