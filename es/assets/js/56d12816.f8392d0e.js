"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5953],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2303:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,p={unversionedId:"developers/celestia-app",id:"developers/celestia-app",title:"celestia-app",description:"- - -",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/celestia-app.md",sourceDirName:"developers",slug:"/developers/celestia-app",permalink:"/es/developers/celestia-app",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Celestia App",permalink:"/es/category/celestia-app"},next:{title:"wallet",permalink:"/es/developers/wallet"}},c={},u=[{value:"Instalar celestia-app",id:"instalar-celestia-app",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"sidebar_label : Instalar la aplicaci\xf3n Celestia"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"celestia-app"},"Celestia App"),(0,o.kt)("p",null,"Este tutorial te guiar\xe1 a trav\xe9s de la construcci\xf3n de Celestia App. Este tutorial presupone que completaste los pasos para configurar tu propio entorno ",(0,o.kt)("a",{parentName:"p",href:"/es/developers/environment"},"aqu\xed"),"."),(0,o.kt)("h2",{id:"instalar-celestia-app"},"Instalar celestia-app"),(0,o.kt)("p",null,"Los siguientes pasos crear\xe1n un archivo binario llamado ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd")," dentro de la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," que se utilizar\xe1 m\xe1s tarde para ejecutar el nodo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf celestia-app\ngit clone https://github.com/celestiaorg/celestia-app.git\ncd celestia-app/\nAPP_VERSION=$(curl -s \\\n  https://api.github.com/repos/celestiaorg/celestia-app/releases/latest \\\n  | jq -r ".tag_name")\ngit checkout tags/$APP_VERSION -b $APP_VERSION\nmake install\n')),(0,o.kt)("p",null,"Para comprobar si el binario fue compilado con \xe9xito, puedes ejecutar el binario usando el par\xe1metro ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,o.kt)("p",null,"Deber\xedas ver una salida similar (con comandos de ejemplo \xfatiles):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Start celestia app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, and application configuration files\n  keys                Manage your application\'s keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default location or at the location passed as an arg\n  version             Print the application binary version information\n\nFlags:\n  -h, --help                help for celestia-appd\n      --home string         directory for config and data (default "/root/.celestia-app")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "celestia-appd [command] --help" for more information about a command.\n')))}m.isMDXComponent=!0}}]);