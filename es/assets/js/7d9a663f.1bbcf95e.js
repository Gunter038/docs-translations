"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[419],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],s={sidebar_label:"Despliegue del contrato"},i="Despliegue del contrato en CosmWasm con Optimint",l={unversionedId:"developers/cosmwasm-contract-deployment",id:"developers/cosmwasm-contract-deployment",title:"Despliegue del contrato en CosmWasm con Optimint",description:"Compilar el Smart Contract",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/cosmwasm-contract-deployment.md",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-deployment",permalink:"/es/developers/cosmwasm-contract-deployment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-deployment.md",tags:[],version:"current",frontMatter:{sidebar_label:"Despliegue del contrato"},sidebar:"developers",previous:{title:"Configurar el entorno de red",permalink:"/es/developers/cosmwasm-environment"},next:{title:"Contrato de interacci\xf3n",permalink:"/es/developers/cosmwasm-contract-interaction"}},p={},u=[{value:"Compilar el Smart Contract",id:"compilar-el-smart-contract",level:2},{value:"Pruebas unitarias",id:"pruebas-unitarias",level:2},{value:"Contrato inteligente optimizado",id:"contrato-inteligente-optimizado",level:2},{value:"Despliegue del contrato",id:"despliegue-del-contrato",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"despliegue-del-contrato-en-cosmwasm-con-optimint"},"Despliegue del contrato en CosmWasm con Optimint"),(0,o.kt)("h2",{id:"compilar-el-smart-contract"},"Compilar el Smart Contract"),(0,o.kt)("p",null,"Ejecutaremos los siguientes comandos para descargar el smart contract de Nameservice y compilarlo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/InterWasm/cw-contracts\ncd cw-contracts\ncd contracts/nameservice\ncargo wasm\n")),(0,o.kt)("p",null,"El contrato compilado es saldado a: ",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_nameservice.wasm"),"."),(0,o.kt)("h2",{id:"pruebas-unitarias"},"Pruebas unitarias"),(0,o.kt)("p",null,"Si queremos ejecutar pruebas, podemos hacerlo con el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo unit-test\n")),(0,o.kt)("h2",{id:"contrato-inteligente-optimizado"},"Contrato inteligente optimizado"),(0,o.kt)("p",null,"Debido a que estamos desplegando el smart contract compilado a ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd"),", queremos que sea lo m\xe1s peque\xf1o posible."),(0,o.kt)("p",null,"El equipo de CosmWasm proporciona una herramienta llamada ",(0,o.kt)("inlineCode",{parentName:"p"},"rust-optimizer")," para la que necesitamos Docker para poder compilar."),(0,o.kt)("p",null,"Ejecuta el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sudo docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.6\n')),(0,o.kt)("p",null,"Esto colocar\xe1 el bytecode Wasm optimizado en ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice.wasm"),"."),(0,o.kt)("h2",{id:"despliegue-del-contrato"},"Despliegue del contrato"),(0,o.kt)("p",null,"\xa1Vamos a desplegar nuestro smart contract!"),(0,o.kt)("p",null,"Ejecuta las siguientes instrucciones:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"TX_HASH=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from $KEY_NAME --keyring-backend test $TXFLAG --output json -y | jq -r '.txhash') \n")),(0,o.kt)("p",null,"Esto le dar\xe1 el hash de transacci\xf3n para el despliegue de smart contract. Dado que estamos usando Optimint, habr\xe1 un retraso en la transacci\xf3n que se incluye debido a la espera de Optimint en la capa de disponibilidad de datos de Celestia para confirmar que el bloque ha sido incluido antes de enviar un nuevo bloque."))}d.isMDXComponent=!0}}]);