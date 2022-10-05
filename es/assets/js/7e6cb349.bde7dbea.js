"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1515],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6869:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_label:"Contrato de interacci\xf3n"},i="Contrato de interacci\xf3n en CosmWasm con Celestia",l={unversionedId:"developers/cosmwasm-contract-interaction",id:"developers/cosmwasm-contract-interaction",title:"Contrato de interacci\xf3n en CosmWasm con Celestia",description:"En los pasos anteriores, hemos almacenado el hash tx del contrato en una variable de entorno para su uso posterior.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/cosmwasm-contract-interaction.md",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-interaction",permalink:"/es/developers/cosmwasm-contract-interaction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-interaction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Contrato de interacci\xf3n"},sidebar:"developers",previous:{title:"Despliegue del contrato",permalink:"/es/developers/cosmwasm-contract-deployment"},next:{title:"Recursos de CosmWasm",permalink:"/es/developers/cosmwasm-resources"}},u={},p=[{value:"Consulta de Contrato",id:"consulta-de-contrato",level:2},{value:"Contrato Instanciaci\xf3n",id:"contrato-instanciaci\xf3n",level:2},{value:"Contrato de interacci\xf3n",id:"contrato-de-interacci\xf3n",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contrato-de-interacci\xf3n-en-cosmwasm-con-celestia"},"Contrato de interacci\xf3n en CosmWasm con Celestia"),(0,o.kt)("p",null,"En los pasos anteriores, hemos almacenado el hash tx del contrato en una variable de entorno para su uso posterior."),(0,o.kt)("p",null,"Debido a los periodos m\xe1s largos de env\xedo de transacciones a trav\xe9s de Optimint debido a la espera de la disponibilidad de datos de Celestia para confirmar la inclusi\xf3n de bloques, necesitaremos consultar nuestro hash tx directamente para obtener informaci\xf3n sobre \xe9l."),(0,o.kt)("h2",{id:"consulta-de-contrato"},"Consulta de Contrato"),(0,o.kt)("p",null,"Empecemos por consultar nuestro hash de transacci\xf3n para su ID de c\xf3digo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"CODE_ID=$(wasmd query tx --type=hash $TX_HASH $NODE --output json | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,o.kt)("p",null,"Esto nos devolver\xe1 el C\xf3digo ID del contrato desplegado."),(0,o.kt)("p",null,"En nuestro caso, ya que es el primer contrato implementado en nuestra red local, el valor es ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("p",null,"Ahora, podemos echar un vistazo a los contratos instanciados por este c\xf3digo ID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n")),(0,o.kt)("p",null,"Obtenemos la siguiente salida:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"contracts":[],"pagination":{"next_key":null,"total":"0"}}\n')),(0,o.kt)("h2",{id:"contrato-instanciaci\xf3n"},"Contrato Instanciaci\xf3n"),(0,o.kt)("p",null,"Empezamos a instanciar el contrato escribiendo el siguiente ",(0,o.kt)("inlineCode",{parentName:"p"},"mensaje")," INIT para el contrato nameservice. Aqu\xed, especificamos que ",(0,o.kt)("inlineCode",{parentName:"p"},"purchase_price")," de un nombre es ",(0,o.kt)("inlineCode",{parentName:"p"},"100uwasm")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_price")," es ",(0,o.kt)("inlineCode",{parentName:"p"},"999uwasm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'INIT=\'{"purchase_price":{"amount":"100","denom":"uwasm"},"transfer_price":{"amount":"999","denom":"uwasm"}}\'\nwasmd tx wasm instantiate $CODE_ID "$INIT" --from $KEY_NAME --keyring-backend test --label "name service" $TXFLAG -y --no-admin\n')),(0,o.kt)("h2",{id:"contrato-de-interacci\xf3n"},"Contrato de interacci\xf3n"),(0,o.kt)("p",null,"Ahora que lo instanciamos, podemos interactuar m\xe1s con el contrato:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r '.contracts[-1]')\necho $CONTRACT\n\nwasmd query wasm contract $CONTRACT $NODE\nwasmd query bank balances $CONTRACT $NODE\n")),(0,o.kt)("p",null,"Esto nos permite ver la direcci\xf3n del contrato, los detalles del contrato y saldos bancarios."),(0,o.kt)("p",null,"Ahora, vamos a registrar un nombre al contrato para nuestra direcci\xf3n de wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'REGISTER=\'{"register":{"name":"fred"}}\'\nwasmd tx wasm execute $CONTRACT "$REGISTER" --amount 100uwasm --from $KEY_NAME $TXFLAG -y\n\n# Query the owner of the name record\nNAME_QUERY=\'{"resolve_record": {"name": "fred"}}\'\nwasmd query wasm contract-state smart $CONTRACT "$NAME_QUERY" $NODE --output json\n')),(0,o.kt)("p",null,"\xa1Con eso, hemos instanciado e interactuado con el smart contract de nameservice de CosmWasm usando Celestia!"))}m.isMDXComponent=!0}}]);