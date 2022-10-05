"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8380],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?t.createElement(g,o(o({ref:a},c),{},{components:n})):t.createElement(g,o({ref:a},c))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1424:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var t=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={},s=void 0,d={unversionedId:"nodes/light-node",id:"nodes/light-node",title:"light-node",description:"- - -",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/nodes/light-node.md",sourceDirName:"nodes",slug:"/nodes/light-node",permalink:"/es/nodes/light-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/light-node.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"full-storage-node",permalink:"/es/nodes/full-storage-node"},next:{title:"Participar en las Testnets de Celestia",permalink:"/es/nodes/participate"}},c={},u=[{value:"Resumen de los light nodes",id:"resumen-de-los-light-nodes",level:2},{value:"Requisitos de hardware",id:"requisitos-de-hardware",level:2},{value:"Configurando tu light node",id:"configurando-tu-light-node",level:2},{value:"Actualizando las dependencias",id:"actualizando-las-dependencias",level:3},{value:"Instalando Golang",id:"instalando-golang",level:3},{value:"Instalar el nodo Celestia",id:"instalar-el-nodo-celestia",level:3},{value:"Instalaci\xf3n de Arabica Devnet",id:"instalaci\xf3n-de-arabica-devnet",level:4},{value:"Instalaci\xf3n de Mamaki Testnet",id:"instalaci\xf3n-de-mamaki-testnet",level:4},{value:"Inicializa el light node",id:"inicializa-el-light-node",level:2},{value:"Iniciar el light node",id:"iniciar-el-light-node",level:3},{value:"Configuraci\xf3n de Arabica",id:"configuraci\xf3n-de-arabica",level:4},{value:"Configuraci\xf3n de Mamaki",id:"configuraci\xf3n-de-mamaki",level:4},{value:"Claves y wallets",id:"claves-y-wallets",level:3},{value:"Opcional: ejecutar el light node con una tecla personalizada",id:"opcional-ejecutar-el-light-node-con-una-tecla-personalizada",level:3},{value:"Opcional: iniciar light node con SystememD",id:"opcional-iniciar-light-node-con-systememd",level:3},{value:"Muestreo de disponibilidad de datos (DAS)",id:"muestreo-de-disponibilidad-de-datos-das",level:2}],p={toc:u};function m(e){var a=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"sidebar_label : Light Node"),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"configurando-un-celestia-light-node"},"Configurando un Celestia Light Node"),(0,i.kt)("p",null,"Este tutorial te guiar\xe1 a trav\xe9s de la configuraci\xf3n de un nodo light Celestia, que te permitir\xe1 realizar muestreo de disponibilidad de datos en la red de datos de disponibilidad (DA)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Para ver un video tutorial para configurar un nodo Celestia, haz clic ",(0,i.kt)("a",{parentName:"p",href:"/es/developers/light-node-video"},"aqu\xed"))),(0,i.kt)("h2",{id:"resumen-de-los-light-nodes"},"Resumen de los light nodes"),(0,i.kt)("p",null,"Los light nodes garantizan la disponibilidad de datos. Esta es la forma m\xe1s com\xfan de interactuar con la red Celestia."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"light nodes (Nodos ligeros)",src:n(5540).Z,width:"1058",height:"245"})),(0,i.kt)("p",null,"Los light nodes tienen el siguiente comportamiento:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Escuchan ExtendedHeaders, es decir, cabeceras envueltas "raw", que notifican a los nodos Celestia acerca de nuevos encabezados de bloque y metadatos relevantes de DA.'),(0,i.kt)("li",{parentName:"ol"},"Realizan muestreo de disponibilidad de datos (DAS) en los encabezados recibidos")),(0,i.kt)("h2",{id:"requisitos-de-hardware"},"Requisitos de hardware"),(0,i.kt)("p",null,"Se recomiendan los siguientes requisitos m\xednimos de hardware para ejecutar un light node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memoria: 2 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"CPU: N\xfacleo \xfanico"),(0,i.kt)("li",{parentName:"ul"},"Disco: 5 GB de almacenamiento SSD"),(0,i.kt)("li",{parentName:"ul"},"Ancho de banda: 56 Gbps descarga/56 Mbps subida")),(0,i.kt)("h2",{id:"configurando-tu-light-node"},"Configurando tu light node"),(0,i.kt)("p",null,"El siguiente tutorial se ha realizado sobre una versi\xf3n de Ubuntu Linux 20.04 (LTS) x64."),(0,i.kt)("h3",{id:"actualizando-las-dependencias"},"Actualizando las dependencias"),(0,i.kt)("p",null,"Primero, aseg\xfarate de actualizar el sistema operativo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Si est\xe1s usando el gestor de paquetes APT\nsudo apt update && sudo apt upgrade -y\n\n# Si est\xe1s usando el gestor de paquetes YUM\nsudo yum update\n")),(0,i.kt)("p",null,"Estos son paquetes esenciales que son necesarios para ejecutar muchas tareas como descargar archivos, compilar y monitorear el nodo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Si est\xe1 usando el gestor de paquetes APT\nsudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential \\\ngit make ncdu -y\n\n# Si est\xe1 usando el gestor de paquetes YUM\nsudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential \\\ngit make ncdu -y \n")),(0,i.kt)("h3",{id:"instalando-golang"},"Instalando Golang"),(0,i.kt)("p",null,"Celestia-app y celestia-node est\xe1n escritos en ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang")," por lo que debemos instalar Golang para compilarlos y ejecutarlos."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,i.kt)("p",null,"Ahora necesitamos a\xf1adir el directorio ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,i.kt)("p",null,"Para comprobar si Go fue instalado correctamente:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,i.kt)("p",null,"El resultado debe ser la versi\xf3n instalada:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n")),(0,i.kt)("h3",{id:"instalar-el-nodo-celestia"},"Instalar el nodo Celestia"),(0,i.kt)("p",null,"Una cosa a tener en cuenta aqu\xed es decidir qu\xe9 versi\xf3n de celestia-node deseas compilar. Mamaki Testnet requiere v0.3.0-rc2 y Arabica Devnet requiere v0.3.0."),(0,i.kt)("p",null,"Las siguientes secciones indican c\xf3mo instalarlo en las dos redes."),(0,i.kt)("h4",{id:"instalaci\xf3n-de-arabica-devnet"},"Instalaci\xf3n de Arabica Devnet"),(0,i.kt)("p",null,"Instala el binario celestia-node ejecutando los siguientes comandos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.1\nmake install\nmake cel-key\n")),(0,i.kt)("p",null,"Verifica que el binario est\xe1 funcionando y comprueba la versi\xf3n con el comando de versi\xf3n celestia:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ celestia version\nSemantic version: v0.3.1\nCommit: 8bce8d023f9d0a1929e56885e439655717aea4e4\nBuild Date: Thu Sep 22 15:15:43 UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n")),(0,i.kt)("h4",{id:"instalaci\xf3n-de-mamaki-testnet"},"Instalaci\xf3n de Mamaki Testnet"),(0,i.kt)("p",null,"Instala el binario celestia-node ejecutando los siguientes comandos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\nmake cel-key\n")),(0,i.kt)("p",null,"Verifica que el binario est\xe1 funcionando y comprueba la versi\xf3n con el comando de versi\xf3n de celestia:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n")),(0,i.kt)("h2",{id:"inicializa-el-light-node"},"Inicializa el light node"),(0,i.kt)("p",null,"Ejecuta el siguiente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\n")),(0,i.kt)("p",null,"Deber\xe1s ver algo como esto:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-output"},'$ celestia light init\n2022-07-18T02:22:09.449Z INFO node node/init.go:26 Initializing Light Node Store over \'/home/ec2-user/.celestia-light\'\n2022-07-18T02:22:09.449Z INFO node node/init.go:62 Saving config {"path": "/home/ec2-user/.celestia-light/config.toml"}\n2022-07-18T02:22:09.449Z INFO node node/init.go:67 Node Store initialized\n')),(0,i.kt)("h3",{id:"iniciar-el-light-node"},"Iniciar el light node"),(0,i.kt)("p",null,"Inicia el Bridge Node con una conexi\xf3n al endpoint gRPC de un nodo validador (que normalmente est\xe1 en el puerto 9090):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTA: Para acceder a la capacidad de obtener/enviar informaci\xf3n relacionada con el estado, como la posibilidad de enviar transacciones de PayForData o consulta para el saldo de cuenta del nodo un endpoint gRPC de un nodo validador (core) debe ser configurado como indica debajo.")),(0,i.kt)("p",null,"Para los puertos:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTA: El ",(0,i.kt)("inlineCode",{parentName:"p"},"--core.grpc. ort")," es por defecto 9090, as\xed que si no lo especificas en la l\xednea de comandos, se establecer\xe1 por defecto en ese puerto. Puedes utilizar la bandera para especificar otro puerto si lo prefieres.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --core.grpc.port <port>\n")),(0,i.kt)("h4",{id:"configuraci\xf3n-de-arabica"},"Configuraci\xf3n de Arabica"),(0,i.kt)("p",null,"Si necesitas una lista de puertos RPC para conectarte, puedes comprobar la lista ",(0,i.kt)("a",{parentName:"p",href:"/es/nodes/arabica-devnet#rpc-endpoints"},"aqu\xed")),(0,i.kt)("p",null,"Por ejemplo, tu comando podr\xeda verse algo como esto:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090\n")),(0,i.kt)("h4",{id:"configuraci\xf3n-de-mamaki"},"Configuraci\xf3n de Mamaki"),(0,i.kt)("p",null,"Si necesitas una lista de puertos RPC para conectarte, puedes comprobar la lista ",(0,i.kt)("a",{parentName:"p",href:"/es/nodes/mamaki-testnet#rpc-endpoints"},"aqu\xed")),(0,i.kt)("p",null,"Por ejemplo, el comando podr\xeda ser algo como esto:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip https://rpc-mamaki.pops.one --core.grpc.port 9090\n")),(0,i.kt)("h3",{id:"claves-y-wallets"},"Claves y wallets"),(0,i.kt)("p",null,"Puedes crear tu clave para tu nodo ejecutando el siguiente comando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type light\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --core.grpc.port <port> --keyring.accname <key_name>\n")),(0,i.kt)("p",null,"Una vez que inicies el Light Node, se generar\xe1 una clave de wallet para ti. Tendr\xe1s que enviar a esa direcci\xf3n los tokens de Mamaki Testnet para pagar por transacciones de PayForData."),(0,i.kt)("p",null,"Puedes encontrar la direcci\xf3n ejecutando el siguiente comando en el directorio ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type light --keyring-backend test\n")),(0,i.kt)("p",null,"Tienes dos redes desde las que obtener tokens de testnet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/es/nodes/arabica-devnet#arabica-devnet-faucet"},"Arabica")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/es/nodes/mamaki-testnet#mamaki-testnet-faucet"},"Mamaki"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTA: Si est\xe1s ejecutando un light node para su despliegue soberano, es altamente recomendable solicitar Arabica devnet tokens ya que Arabica tiene los \xfaltimos cambios que pueden ser usados para prueba para desarrollar su registro soberano. Tambi\xe9n puedes usar Mamaki Testnet, se utiliza principalmente para operaciones de validador.")),(0,i.kt)("p",null,"Puedes solicitar fondos a tu direcci\xf3n de wallet usando el siguiente comando en Discord:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$request <Wallet-Address>\n")),(0,i.kt)("p",null,"Donde ",(0,i.kt)("inlineCode",{parentName:"p"},"<Wallet-Address>")," es la direcci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia1******")," generada al crear la wallet."),(0,i.kt)("h3",{id:"opcional-ejecutar-el-light-node-con-una-tecla-personalizada"},"Opcional: ejecutar el light node con una tecla personalizada"),(0,i.kt)("p",null,"Para ejecutar un light node usando una clave personalizada:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"La clave personalizada debe existir dentro del directorio de nodos celestia en la ruta correcta (por defecto: ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.celestia-bridge/keys/keyring-test"),")"),(0,i.kt)("li",{parentName:"ol"},"El nombre de la clave personalizada debe pasarse al ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),", as\xed:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --core.grpc.port <port> --keyring.accname <name_of_custom_key>\n")),(0,i.kt)("h3",{id:"opcional-iniciar-light-node-con-systememd"},"Opcional: iniciar light node con SystememD"),(0,i.kt)("p",null,"Sigue el tutorial sobre c\xf3mo configurar Celestia-App como un proceso en segundo plano con SystemD ",(0,i.kt)("a",{parentName:"p",href:"/es/nodes/systemd#celestia-light-node"},"aqu\xed"),"."),(0,i.kt)("h2",{id:"muestreo-de-disponibilidad-de-datos-das"},"Muestreo de disponibilidad de datos (DAS)"),(0,i.kt)("p",null,"Con tu light node en ejecuci\xf3n, puedes revisar este tutorial de enviar ",(0,i.kt)("inlineCode",{parentName:"p"},"transacciones de PayForData")," ",(0,i.kt)("a",{parentName:"p",href:"/es/developers/node-tutorial"},"aqu\xed"),"."))}m.isMDXComponent=!0},5540:function(e,a,n){a.Z=n.p+"assets/images/LightNodes-6e065ce02c37e36a01707b9b1edd36b3.png"}}]);