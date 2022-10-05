"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3509],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return A}});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(a),A=l,m=p["".concat(i,".").concat(A)]||p[A]||c[A]||r;return a?t.createElement(m,o(o({ref:n},u),{},{components:a})):t.createElement(m,o({ref:n},u))}));function A(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9924:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return A},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var t=a(7462),l=a(3366),r=(a(7294),a(3905)),o=["components"],s={},i=void 0,d={unversionedId:"developers/node-tutorial",id:"developers/node-tutorial",title:"node-tutorial",description:"- - -",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/node-tutorial.md",sourceDirName:"developers",slug:"/developers/node-tutorial",permalink:"/es/developers/node-tutorial",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/node-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"celestia-node",permalink:"/es/developers/celestia-node"},next:{title:"light-node-video",permalink:"/es/developers/light-node-video"}},u={},c=[{value:"Requisitos de hardware",id:"requisitos-de-hardware",level:2},{value:"Actualizando las dependencias",id:"actualizando-las-dependencias",level:2},{value:"Instalando Golang",id:"instalando-golang",level:3},{value:"Nodo Celestia",id:"nodo-celestia",level:2},{value:"Instalar el nodo Celestia",id:"instalar-el-nodo-celestia",level:3},{value:"Instanciar Nodo Celestia Light",id:"instanciar-nodo-celestia-light",level:3},{value:"Conectar a un Public Core Endpoint",id:"conectar-a-un-public-core-endpoint",level:3},{value:"Claves y wallets",id:"claves-y-wallets",level:3},{value:"API Calls de Nodo",id:"api-calls-de-nodo",level:2},{value:"Balance",id:"balance",level:3},{value:"Obtener encabezado de bloque",id:"obtener-encabezado-de-bloque",level:3},{value:"Enviar una Transacci\xf3n PFD",id:"enviar-una-transacci\xf3n-pfd",level:3},{value:"Soluci\xf3n de problemas",id:"soluci\xf3n-de-problemas",level:4},{value:"Consigue espacios de nombres compartidos por altura de bloque",id:"consigue-espacios-de-nombres-compartidos-por-altura-de-bloque",level:3}],p={toc:c};function A(e){var n=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"sidebar_label : Tutorial de v\xeddeo del nodo"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"obtener-y-enviar-transacciones-con-celestia-node"},"Obtener y enviar transacciones con Celestia Node"),(0,r.kt)("p",null,"En este tutorial cubriremos c\xf3mo utilizar la API del nodo Celestia para enviar y recuperar mensajes de la Capa de Disponibilidad de Datos por tu espacio de nombres ID."),(0,r.kt)("p",null,"Este tutorial asumi\xf3 que est\xe1 trabajando en un entorno Linux."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para ver un video tutorial para configurar un nodo Light Celestia, haz clic ",(0,r.kt)("a",{parentName:"p",href:"/es/developers/light-node-video"},"aqu\xed"))),(0,r.kt)("h2",{id:"requisitos-de-hardware"},"Requisitos de hardware"),(0,r.kt)("p",null,"Se recomiendan los siguientes requisitos m\xednimos de hardware para ejecutar un light node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memoria: 2 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: N\xfacleo \xfanico"),(0,r.kt)("li",{parentName:"ul"},"Disco: 5 GB de almacenamiento SSD"),(0,r.kt)("li",{parentName:"ul"},"Ancho de banda: 56 Gbps descarga/56 Mbps subida")),(0,r.kt)("h2",{id:"actualizando-las-dependencias"},"Actualizando las dependencias"),(0,r.kt)("p",null,"Primero, aseg\xfarate de actualizar el sistema operativo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Si est\xe1s usando el gestor de paquetes APT\nsudo apt update && sudo apt upgrade -y\n\n# Si est\xe1s usando el gestor de paquetes YUM\nsudo yum update\n")),(0,r.kt)("p",null,"Estos son paquetes esenciales que son necesarios para ejecutar muchas tareas como descargar archivos, compilar y monitorear el nodo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# Si est\xe1s usando el gestor de paquetes APT\nsudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n\n# Si est\xe1s usando el gestor de paquetes YUM\nsudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n")),(0,r.kt)("h3",{id:"instalando-golang"},"Instalando Golang"),(0,r.kt)("p",null,"Celestia-app y celestia-node est\xe1n escritos en ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang")," por lo que debemos instalar Golang para compilarlos y ejecutarlos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,r.kt)("p",null,"Ahora necesitamos a\xf1adir el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,r.kt)("p",null,"Para comprobar si Go fue instalado correctamente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"El resultado debe ser la versi\xf3n instalada:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n")),(0,r.kt)("h2",{id:"nodo-celestia"},"Nodo Celestia"),(0,r.kt)("h3",{id:"instalar-el-nodo-celestia"},"Instalar el nodo Celestia"),(0,r.kt)("p",null,"Instala el binario celestia-node ejecutando los siguientes comandos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.1\nmake install\nmake cel-key\n")),(0,r.kt)("p",null,"Verifica que el binario est\xe1 funcionando y comprueba la versi\xf3n con el comando de versi\xf3n celestia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ celestia version\nSemantic version: v0.3.1\nCommit: 8bce8d023f9d0a1929e56885e439655717aea4e4\nBuild Date: Thu Sep 22 15:15:43 UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n")),(0,r.kt)("h3",{id:"instanciar-nodo-celestia-light"},"Instanciar Nodo Celestia Light"),(0,r.kt)("p",null,"Ahora, instanciemos un nodo Celestia Light:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Nota: los Endpoints RPC est\xe1n expuestos en todos los tipos de nodos Celestia como los  Light, Bridge y Full Nodes.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\n")),(0,r.kt)("h3",{id:"conectar-a-un-public-core-endpoint"},"Conectar a un Public Core Endpoint"),(0,r.kt)("p",null,"Ahora ejecutemos el nodo Celestia Light con una conexi\xf3n GRPC a un ejemplo de public Core Endpoint."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Nota: Tambi\xe9n se te recomienda encontrar un endpoint API de ejecuci\xf3n comunitaria y hay varios en Discord. Este se utiliza solo para fines de demostraci\xf3n. Puedes encontrar una lista de los endpoints RPC ",(0,r.kt)("a",{parentName:"p",href:"/es/nodes/arabica-devnet#rpc-endpoints"},"aqu\xed"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --core.grpc.port <port>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTA: El ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc. ort")," es por defecto 9090, as\xed que si no lo especificas en la l\xednea de comandos, se establecer\xe1 por defecto en ese puerto. Puede utilizar la bandera para especificar otro puerto si lo prefiere.")),(0,r.kt)("p",null,"Por ejemplo, el comando junto con un endpoint RPC podr\xeda verse as\xed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090\n")),(0,r.kt)("h3",{id:"claves-y-wallets"},"Claves y wallets"),(0,r.kt)("p",null,"Puedes crear tu clave para tu nodo ejecutando el siguiente comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type light\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --core.grpc.port <port> --keyring.accname <key_name> \n")),(0,r.kt)("p",null,"Una vez que inicies el Light Node, se generar\xe1 una clave de wallet para ti. Tendr\xe1s que enviar a esa direcci\xf3n los tokens de Mamaki Testnet para pagar por transacciones de PayForData."),(0,r.kt)("p",null,"Puedes encontrar la direcci\xf3n ejecutando el siguiente comando en el directorio ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type light --keyring-backend test\n")),(0,r.kt)("p",null,"Si desea agregar fondos a su wallet con tokens de la testnet, dir\xedjete al canal Celestia Discord ",(0,r.kt)("inlineCode",{parentName:"p"},"#arabica-faucet"),"."),(0,r.kt)("p",null,"Puedes solicitar fondos a tu direcci\xf3n de wallet usando el siguiente comando en Discord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$request <Wallet-Address>\n")),(0,r.kt)("p",null,"Donde ",(0,r.kt)("inlineCode",{parentName:"p"},"<Wallet-Address>")," es la direcci\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia1******")," generada al crear la wallet."),(0,r.kt)("p",null,"Una vez que est\xe9s listo, \xa1puedes pasar al siguiente paso."),(0,r.kt)("h2",{id:"api-calls-de-nodo"},"API Calls de Nodo"),(0,r.kt)("p",null,"Abre otra ventana de terminal para comenzar a consultar la API. ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," expone su endpoint RPC en el puerto ",(0,r.kt)("inlineCode",{parentName:"p"},"26658")," por defecto."),(0,r.kt)("h3",{id:"balance"},"Balance"),(0,r.kt)("p",null,"Ahora, vamos a consultar nuestro nodo por el saldo de su cuenta predeterminada (que es la cuenta asociada con la clave de ",(0,r.kt)("inlineCode",{parentName:"p"},"desarrollador")," que generamos anteriormente):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:26658/balance\n")),(0,r.kt)("p",null,"Deber\xeda generar el siguiente resultado:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "denom":"utia",\n   "amount":"999995000000000"\n}\n')),(0,r.kt)("p",null,"Esto te muestra el saldo de esa wallet."),(0,r.kt)("h3",{id:"obtener-encabezado-de-bloque"},"Obtener encabezado de bloque"),(0,r.kt)("p",null,"Ahora, vamos a obtener la informaci\xf3n de la cabecera del bloque."),(0,r.kt)("p",null,"Aqu\xed obtendremos la cabecera del bloque 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET http://127.0.0.1:26658/header/1\n")),(0,r.kt)("p",null,"Deber\xe1 verse de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "header":{\n      "version":{\n         "block":11\n      },\n      "chain_id":"devnet-2",\n      "height":1,\n      "time":"2021-11-23T02:24:05.965728875Z",\n      "last_block_id":{\n         "hash":"",\n         "parts":{\n            "total":0,\n            "hash":""\n         }\n      },\n      "last_commit_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "data_hash":"7B578B351B1B0BBD70BB350019EBC964C44A140A37EF715B552A7F8F315ACD19",\n      "validators_hash":"7F4EA93A134DEDBDA6A1FDD30D05760DD98A2B5FBA95DB3EFFFE7FCE4B361855",\n      "next_validators_hash":"7F4EA93A134DEDBDA6A1FDD30D05760DD98A2B5FBA95DB3EFFFE7FCE4B361855",\n      "consensus_hash":"048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",\n      "app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "last_results_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "evidence_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",\n      "proposer_address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E"\n   },\n   "commit":{\n      "height":1,\n      "round":1,\n      "block_id":{\n         "hash":"4632277C441CA6155C4374AC56048CF4CFE3CBB2476E07A548644435980D5E17",\n         "parts":{\n            "total":1,\n            "hash":"BE1B789969938DB061B7723BE45C8A7B4B27192339A8E0A4E216775B2CB58D97"\n         }\n      },\n      "signatures":[\n         {\n            "block_id_flag":2,\n            "validator_address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n            "timestamp":"2021-11-23T11:53:56.123958759Z",\n            "signature":"q/XF7Nc2ThcQgWfqi6LYOUEqLcU+sgVPY1nB2CLWdjRo80WwI6xy6QaYx1B0lmcKAkWR0YMxbc7vJzKF70qwBA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E",\n            "timestamp":"2021-11-23T11:53:56.036027188Z",\n            "signature":"0bbxeviCvgLlyIF47JoY1CMN2e/MhHtFzhdgV0zCM+P3qeO/rkh+0TSxoRVUB1MDvMCoA8hyffCw3amxympMAA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"31711F367349D1BD619BD0A39568A69614B8A048",\n            "timestamp":"2021-11-23T11:53:56.135943844Z",\n            "signature":"gT23rZ8+XcG5rQ9QS+uh+Wn5eAiJDVy8bh23Fb8hevnHsuO1er2892MXAohaLRF6TTWs/C6dItYph4B/k3b6DQ=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"5A253EC2A9AB20AFD48C7BED2AFCA53F5C80BCA6",\n            "timestamp":"2021-11-23T11:53:56.081698742Z",\n            "signature":"nMngIlJ7PPPtu0N20YwKhWt/H3/JrEKJC3rnS5KG/8J3IppTacuwjGDUqIuHpRlrD0MmWa1mlY+6+ulbytt2AA=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"79BEB39F4B396F9278DA03F1C97F9BE3B10B12D3",\n            "timestamp":"2021-11-23T11:53:56.037896319Z",\n            "signature":"wPAL/sK4YXSU7iRXl00GDLvi4IItVlkY2zRkxIUeV9VA3Tq8Tke6wGE0N6pXKmtMcKUMoyjm03RWHv4mrtj1BA=="\n         },\n         {\n            "block_id_flag":1,\n            "validator_address":"",\n            "timestamp":"0001-01-01T00:00:00Z",\n            "signature":null\n         },\n         {\n            "block_id_flag":1,\n            "validator_address":"",\n            "timestamp":"0001-01-01T00:00:00Z",\n            "signature":null\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"D345D62BBD18C301B843DF7C65F10E57AB17BD98",\n            "timestamp":"2021-11-23T11:53:56.123499237Z",\n            "signature":"puj5Epw3yPGjSsJk6aQI74S2prgL7+cuiEpCxXYzQxOi0kNIqh8UMZLYf+AVHDQNJXehSmrAK6+VsIt9NF0DDg=="\n         },\n         {\n            "block_id_flag":2,\n            "validator_address":"DEC2642E786A941511A401090D21621E7F08A36D",\n            "timestamp":"2021-11-23T11:53:56.123136439Z",\n            "signature":"J/lnFqARXj42Lfx5MGY0FO/wug+AyQRxTnQp1u1HyczvV+0hXXuk06Uosi61jQKgJG6JBJF2VidqA41/uKMEDw=="\n         }\n      ]\n   },\n   "validator_set":{\n      "validators":[\n         {\n            "address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n            "pub_key":"sMcFgSIzlD77eZYgV7H4akyxoHCPc2oIQW05qWEB6b4=",\n            "voting_power":5000,\n            "proposer_priority":-40000\n         },\n         {\n            "address":"04881EB0A0A4C1DB414C708249CEEC2FCF348F3E",\n            "pub_key":"WdqZ8hoyc1HxZCJfQrAGKm2fFJZFg7PngPNGkA1RWXc=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"31711F367349D1BD619BD0A39568A69614B8A048",\n            "pub_key":"pvwSRksq3ekXIiYK7IzjQJ870BxLqEma8zRr9n9VnXI=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"5A253EC2A9AB20AFD48C7BED2AFCA53F5C80BCA6",\n            "pub_key":"RnmnTlKoKxNoh2TpohBDP3cKlx4ATiPOCvQFk/6xpUU=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"79BEB39F4B396F9278DA03F1C97F9BE3B10B12D3",\n            "pub_key":"oh/N+GOIennBOAa/gPNCso1mDlqaHQNn7Op/X8opbeY=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"7F1105B7B219481810C49730AECB1A83036BCA3A",\n            "pub_key":"Ow/AHP/Q3guPGymUKpvhnwae+QoCOpGztpVnP179IG8=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"87265CC17922E01497F40B701EC9F05373B83467",\n            "pub_key":"MNi0Z+uNF5X1Bxj988IDXVl0BKUcLs7LItoMnX6dbg4=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"D345D62BBD18C301B843DF7C65F10E57AB17BD98",\n            "pub_key":"4g3hhdyU4IIgWW/4sR0nax8bsC/M/fDbt1N8s/QanF8=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         },\n         {\n            "address":"DEC2642E786A941511A401090D21621E7F08A36D",\n            "pub_key":"b+Vv6Lcp0bhIjOQncr+OYBHixCvU5+k34y4RqyvpluE=",\n            "voting_power":5000,\n            "proposer_priority":5000\n         }\n      ],\n      "proposer":{\n         "address":"03F1044A6DF782189C7061FF89146B3D33608F17",\n         "pub_key":"sMcFgSIzlD77eZYgV7H4akyxoHCPc2oIQW05qWEB6b4=",\n         "voting_power":5000,\n         "proposer_priority":-40000\n      }\n   },\n   "dah":{\n      "row_roots":[\n         "//////////7//////////uyLCVMJmAItYqbOqgHXm3OwHsq1xQiAX1kZV2Tgcobm",\n         "/////////////////////ykyWNfDJZfigziZC5BN5L00KKuoyDPduwynDywauskL"\n      ],\n      "column_roots":[\n         "//////////7//////////uyLCVMJmAItYqbOqgHXm3OwHsq1xQiAX1kZV2Tgcobm",\n         "/////////////////////ykyWNfDJZfigziZC5BN5L00KKuoyDPduwynDywauskL"\n      ]\n   }\n}\n')),(0,r.kt)("h3",{id:"enviar-una-transacci\xf3n-pfd"},"Enviar una Transacci\xf3n PFD"),(0,r.kt)("p",null,"En este ejemplo, enviaremos una transacci\xf3n de PayForData al endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/submit_pfd")," del nodo."),(0,r.kt)("p",null,"Algunas cosas a considerar:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PFD es un mensaje de PayForData."),(0,r.kt)("li",{parentName:"ul"},"El endpoint tambi\xe9n toma valores de ",(0,r.kt)("inlineCode",{parentName:"li"},"namespace_id")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"."),(0,r.kt)("li",{parentName:"ul"},"El ID del espacio de nombres debe ser de 8 bytes."),(0,r.kt)("li",{parentName:"ul"},"Los datos est\xe1n en bytes codificados por hexadecimal del mensaje raw."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gas_limit")," es el l\xedmite de gas a usar para la transacci\xf3n")),(0,r.kt)("p",null,"Utilizamos el siguiente ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace_id")," de ",(0,r.kt)("inlineCode",{parentName:"p"},"0000010000000100")," y el valor `",(0,r.kt)("inlineCode",{parentName:"p"},"de datos de"),"f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5`."),(0,r.kt)("p",null,"Puedes generar tu propio ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace_id")," y tus valores de datos usando este \xfatil Playground de Golang que creamos ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/play/p/7ltvaj8lhRl"},"aqu\xed"),"."),(0,r.kt)("p",null,"Ejecuta las siguientes instrucciones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -d \'{"namespace_id": "0c204d39600fddd3",\n  "data": "f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5",\n  "gas_limit": 60000}\' http://localhost:26658/submit_pfd\n')),(0,r.kt)("p",null,"Obtenemos la siguiente salida:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "height":2452,\n   "txhash":"04A79AF9DA62FDB41ACD7D82EB0B9004AE4E4ED603B280A65816560B4F38A999",\n   "data":"12200A1E2F7061796D656E742E4D7367506179466F7244617461526573706F6E7365",\n   "raw_log":"[{\\"msg_index\\":0,\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"/payment.MsgPayForData\\"}]},{\\"type\\":\\"payfordata\\",\\"attributes\\":[{\\"key\\":\\"signer\\",\\"value\\":\\"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw\\"},{\\"key\\":\\"size\\",\\"value\\":\\"27\\"}]}]}]",\n   "logs":[\n      {\n         "msg_index":0,\n         "events":[\n            {\n               "type":"message",\n               "attributes":[\n                  {\n                     "key":"action",\n                     "value":"/payment.MsgPayForData"\n                  }\n               ]\n            },\n            {\n               "type":"payfordata",\n               "attributes":[\n                  {\n                     "key":"signer",\n                     "value":"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw"\n                  },\n                  {\n                     "key":"size",\n                     "value":"27"\n                  }\n               ]\n            }\n         ]\n      }\n   ],\n   "events":[\n      {\n         "type":"coin_spent",\n         "attributes":[\n            {\n               "key":"spender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"coin_received",\n         "attributes":[\n            {\n               "key":"receiver",\n               "value":"celestia17xpfvakm2amg962yls6f84z3kell8c5lpnjs3s",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"transfer",\n         "attributes":[\n            {\n               "key":"recipient",\n               "value":"celestia17xpfvakm2amg962yls6f84z3kell8c5lpnjs3s",\n               "index":true\n            },\n            {\n               "key":"sender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            },\n            {\n               "key":"amount",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"message",\n         "attributes":[\n            {\n               "key":"sender",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"1utia",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia10jhckjxxymsufflglvypxscnmggetwh0gfasws/267",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"JMNihnKS/MtYJDprqEFGJuXh16tVADsDDxXaFFpvv2te57btl4LbiRzwRRiN2rvwkJ2zlAApu2ImT22MZBi5+A==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia13zx48t96zauht0kpcn0kcfykc9wn8fehzcp9wq/1024",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"mIZIjbzN0/RQAlQN7TDWzqtey3vVBPe7IO3+IIDhJstIH8QU9vsHfl0Rql9qWMZQG4dM+77w9WmUcnCeS7edfw==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"fee",\n               "value":"",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"acc_seq",\n               "value":"celestia1h36gnnwzneu0csqzn2waph5y983hf3dkaznlgz/0",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"tx",\n         "attributes":[\n            {\n               "key":"signature",\n               "value":"sfy+XyP7iWU+V9q3zEIOWxbGihvhzUKRLNVeXP+a+5oRefIA/Pyqfm13A5NU9I27hhfvpqo9vhXW1waRgcI9OA==",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"message",\n         "attributes":[\n            {\n               "key":"action",\n               "value":"/payment.MsgPayForData",\n               "index":true\n            }\n         ]\n      },\n      {\n         "type":"payfordata",\n         "attributes":[\n            {\n               "key":"signer",\n               "value":"celestia1vdjkcetnw35kzvtgxvmxwmnwwaaxuet4xp3hxut6dce8wctsdq6hjwfcxd5xvvmyddsh5mnvvaaq6776xw",\n               "index":true\n            },\n            {\n               "key":"size",\n               "value":"27",\n               "index":true\n            }\n         ]\n      }\n   ]\n}\n')),(0,r.kt)("p",null,"Puedes observar en la salida anterior, que devuelve un ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," de ",(0,r.kt)("inlineCode",{parentName:"p"},"2452")," que usaremos para el siguiente comando."),(0,r.kt)("h4",{id:"soluci\xf3n-de-problemas"},"Soluci\xf3n de problemas"),(0,r.kt)("p",null,"Si encuentras un error como:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ curl -X POST -d \'{"namespace_id": "c14da9d459dc57f5", "data": "4f7a3f1aadd83255b8410fef4860c0cd2eba82e24a", "gas_limit": 60000}\'  localhost:26658/submit_pfd\n"rpc error: code = NotFound desc = account celestia1krkle0n547u0znz3unnln8paft2dq4z3rznv86 not found"\n')),(0,r.kt)("p",null,"Es posible que la cuenta desde la que est\xe1s intentando enviar un PayForData no tenga tokens de testnet todav\xeda. Aseg\xfarese de que el faucet de la testnet ha enviado a tu cuenta tokens y luego vuelve a intentarlo."),(0,r.kt)("h3",{id:"consigue-espacios-de-nombres-compartidos-por-altura-de-bloque"},"Consigue espacios de nombres compartidos por altura de bloque"),(0,r.kt)("p",null,"Despu\xe9s de enviar su transacci\xf3n PFD, una vez realizada con \xe9xito, el nodo devolver\xe1 la altura del bloque para la cual se incluy\xf3 la transacci\xf3n PFD. Entonces puedes usar la altura del bloque y el ID del espacio de nombres con el que enviaste tu transacci\xf3n PFD para que los mensajes compartidos te sean devueltos. En este ejemplo, la altura del bloque que obtuvimos era de 589 que usaremos para el siguiente comando."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -X GET \\\n  http://localhost:26658/namespaced_shares/0c204d39600fddd3/height/2452\n")),(0,r.kt)("p",null,"Obtenemos la siguiente salida:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "shares":[\n      "DCBNOWAP3dMb8fIMqAB+kQo7+LLmHaDya8oH73hxem6lQWX1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="\n   ],\n   "height":2452\n}\n')),(0,r.kt)("p",null,"La salida aqu\xed es base64-codificada."))}A.isMDXComponent=!0}}]);