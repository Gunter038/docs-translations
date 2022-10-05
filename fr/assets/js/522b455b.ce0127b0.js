"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6314],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7943:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_label:"Interaction de Contrat"},i="Interaction de contrat avec Celestia sur CosmWasm",l={unversionedId:"developers/cosmwasm-contract-interaction",id:"developers/cosmwasm-contract-interaction",title:"Interaction de contrat avec Celestia sur CosmWasm",description:"Dans les \xe9tapes pr\xe9c\xe9dentes, nous avons stock\xe9 le hash de la transaction du contrat dans un environnement variable pour un usage ult\xe9rieur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/cosmwasm-contract-interaction.md",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-interaction",permalink:"/fr/developers/cosmwasm-contract-interaction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-interaction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Interaction de Contrat"},sidebar:"developers",previous:{title:"D\xe9ploiement de contrat",permalink:"/fr/developers/cosmwasm-contract-deployment"},next:{title:"Ressources CosmWasm",permalink:"/fr/developers/cosmwasm-resources"}},u={},p=[{value:"Interrogation du contrat",id:"interrogation-du-contrat",level:2},{value:"Instanciation du contrat",id:"instanciation-du-contrat",level:2},{value:"Interaction avec le contrat",id:"interaction-avec-le-contrat",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interaction-de-contrat-avec-celestia-sur-cosmwasm"},"Interaction de contrat avec Celestia sur CosmWasm"),(0,o.kt)("p",null,"Dans les \xe9tapes pr\xe9c\xe9dentes, nous avons stock\xe9 le hash de la transaction du contrat dans un environnement variable pour un usage ult\xe9rieur."),(0,o.kt)("p",null,"Because of the longer time periods of submitting transactions via Optimint due to waiting on Celestia's Data Availability Layer to confirm block inclusion, we will need to query our  tx hash directly to get information about it."),(0,o.kt)("h2",{id:"interrogation-du-contrat"},"Interrogation du contrat"),(0,o.kt)("p",null,"Commen\xe7ons par questionner notre hash de transaction pour son code d'identification:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"CODE_ID=$(wasmd query tx --type=hash $TX_HASH $NODE --output json | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,o.kt)("p",null,"Cela va nous retourner le code d'identification du contrat d\xe9ploy\xe9."),(0,o.kt)("p",null,"Dans notre cas, puisque c'est le premier contrat d\xe9ploy\xe9 sur notre r\xe9seau local, la valeur est ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("p",null,"Maintenant, nous pouvons jeter un \u0153il aux contrats g\xe9n\xe9r\xe9s par ce code d'identification\xa0:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n")),(0,o.kt)("p",null,"Nous obtenons le r\xe9sultat suivant :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"contracts":[],"pagination":{"next_key":null,"total":"0"}}\n')),(0,o.kt)("h2",{id:"instanciation-du-contrat"},"Instanciation du contrat"),(0,o.kt)("p",null,"Nous commen\xe7ons \xe0 instancier le contrat en \xe9crivant le message ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT")," pour le contrat nameservice. Ici nous sp\xe9cifions que le ",(0,o.kt)("inlineCode",{parentName:"p"},"purchase_price")," (prix d'achat) d'un nom est de ",(0,o.kt)("inlineCode",{parentName:"p"},"100uwasm")," et que le ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_price")," (prix de transfert) est de ",(0,o.kt)("inlineCode",{parentName:"p"},"999uwasm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'INIT=\'{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}\'\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from $KEY_NAME --keyring-backend test --label "name service" $TXFLAG -y --no-admin\n')),(0,o.kt)("h2",{id:"interaction-avec-le-contrat"},"Interaction avec le contrat"),(0,o.kt)("p",null,"Maintenant que nous l'avons instanci\xe9, nous pouvons interagir davantage avec le contrat :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')\necho $CONTRACT\n\nwasmd query wasm contract $CONTRACT $NODE\nwasmd query bank balances $CONTRACT $NODE\n")),(0,o.kt)("p",null,"Cela nous permet de voir l'adresse du contrat, les d\xe9tails de celui-ci et des soldes bancaires."),(0,o.kt)("p",null,"Maintenant, inscrivons un nom au contrat de notre adresse de portefeuille :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'REGISTER=\'{"register":{"name":"fred"}}\'\nwasmd tx wasm execute $CONTRACT "$REGISTER" --amount 100uwasm --from $KEY_NAME $TXFLAG -y\n\n# Query the owner of the name record\nNAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json\n')),(0,o.kt)("p",null,"Gr\xe2ce \xe0 cela, nous avons g\xe9n\xe9r\xe9 des exemples et interagi avec le contrat intelligent du nom de domaine CosmWasm en utilisant Celestia !"))}m.isMDXComponent=!0}}]);