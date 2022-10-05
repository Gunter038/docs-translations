"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[595],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5858:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_label:"Echafauder la chaine"},u="Ignite et \xe9chafauder la chaine Wordle",s={unversionedId:"developers/scaffold-wordle",id:"developers/scaffold-wordle",title:"Ignite et \xe9chafauder la chaine Wordle",description:"Ignite",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/scaffold-wordle.md",sourceDirName:"developers",slug:"/developers/scaffold-wordle",permalink:"/fr/developers/scaffold-wordle",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/scaffold-wordle.md",tags:[],version:"current",frontMatter:{sidebar_label:"Echafauder la chaine"},sidebar:"developers",previous:{title:"Pr\xe9sentation de Wordle",permalink:"/fr/developers/wordle"},next:{title:"Installer Optimint",permalink:"/fr/developers/install-optimint"}},c={},d=[{value:"Ignite",id:"ignite",level:2},{value:"\xc9chafauder la Chaine Wordle",id:"\xe9chafauder-la-chaine-wordle",level:2},{value:"R\xe9pertoire Wordle",id:"r\xe9pertoire-wordle",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ignite-et-\xe9chafauder-la-chaine-wordle"},"Ignite et \xe9chafauder la chaine Wordle"),(0,l.kt)("h2",{id:"ignite"},"Ignite"),(0,l.kt)("p",null,"Ignite est un outil CLI (Interface de Ligne de Commande) incroyable pour nous aider \xe0 construire nos propres blockchains et applications cosmos-sdk. Il fournit de nombreux outils et \xe9chaufaudages pour ajouter des messages, types et modules avec bon nombre de biblioth\xe8ques cosmos-sdk."),(0,l.kt)("p",null,"Vous pouvez en apprendre davantage sur Ingite ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ignite.com/"},"ici"),"."),(0,l.kt)("p",null,"Pour installer Ignite, vous pouvez ex\xe9cuter cette commande sur votre terminal :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.ignite.com/cli | bash\nsudo mv ignite /usr/local/bin/\n")),(0,l.kt)("p",null,"Cela installe Ignite CLI sur votre machine. Ce tutoriel utilise le syst\xe8me d'exploitation de Mac mais cela devrait fonctionner sur Windows. Pour les utilisateurs de Windows, consultez les documents d'Ignite relatifs \xe0 l'installation sur les machines Windows."),(0,l.kt)("p",null,"Maintenant, actualisez votre terminal en utilisant ",(0,l.kt)("inlineCode",{parentName:"p"},"source")," ou ouvrez un nouveau terminal pour que le changement ait lieu."),(0,l.kt)("p",null,"Si vous ex\xe9cutez la commande suivante :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ignite --help\n")),(0,l.kt)("p",null,"Vous devriez alors voir une invite de commandes signifiant qu'Ignite a \xe9t\xe9 install\xe9 avec succ\xe8s !"),(0,l.kt)("h2",{id:"\xe9chafauder-la-chaine-wordle"},"\xc9chafauder la Chaine Wordle"),(0,l.kt)("p",null,"Maintenant vient la partie amusante : cr\xe9er une nouvelle blockchain ! Avec Ignite, le processus est assez facile et direct."),(0,l.kt)("p",null,"Ignite CLI vient avec plusieurs \xe9chafaudages con\xe7us pour rendre le d\xe9veloppement plus direct, en mettant \xe0 disposition tout ce dont vous avez besoin pour construire votre blockchain."),(0,l.kt)("p",null,"Premi\xe8rement nous allons utiliser Ignite CLI pour construire les fondations d'une nouvelle blockchain Cosmos SDK. Ignite r\xe9duit la quantit\xe9 de code que vous devez \xe9crire vous-m\xeame. Si vous venez du monde d'Ethereum et de sa machine virtuelle, vous pouvez voir Ingite comme la version Cosmos-SDK de la Foundry ou de la Hardhat mais sp\xe9cifiquement con\xe7ue pour cr\xe9er des blockchains."),(0,l.kt)("p",null,"Nous lan\xe7ons d'abord la commande ci-dessous pour configurer notre projet de nouvelle blockchain : Wordle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold chain github.com/YazzyYaz/wordle --no-module\n")),(0,l.kt)("p",null,"Cette commande \xe9chafaude un nouveau r\xe9pertoire appel\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"wordle")," dans votre r\xe9pertoire local duquel vous avez ex\xe9cut\xe9 la commande. Notez que nous avons entr\xe9 le drapeau ",(0,l.kt)("inlineCode",{parentName:"p"},"--no-module"),", c'est parce que nous allons cr\xe9er le module par la suite."),(0,l.kt)("h2",{id:"r\xe9pertoire-wordle"},"R\xe9pertoire Wordle"),(0,l.kt)("p",null,"Maintenant, il est temps d'entrer dans le r\xe9pertoire :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd wordle\n")),(0,l.kt)("p",null,"A l'int\xe9rieur, vous verrez plusieurs r\xe9pertoires et architectures pour votre blockchain cosmos-sdk compatible."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Fichier/r\xe9pertoire"),(0,l.kt)("th",{parentName:"tr",align:null},"D\xe9finition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"app/"),(0,l.kt)("td",{parentName:"tr",align:null},"Ce sont les fichiers qui relient la blockchain. Le fichier le plus important est ",(0,l.kt)("inlineCode",{parentName:"td"},"app.go")," qui contient la d\xe9finition du type de blockchain et les fonctions pour la cr\xe9er et l'initialiser.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cmd/"),(0,l.kt)("td",{parentName:"tr",align:null},"Paquet principal responsable du CLI du binaire compil\xe9.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"docs/"),(0,l.kt)("td",{parentName:"tr",align:null},"R\xe9pertoire pour toute la documentation relative au projet. Par d\xe9faut, une sp\xe9cification OpenAPI est g\xe9n\xe9r\xe9e.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"proto/"),(0,l.kt)("td",{parentName:"tr",align:null},"Fichiers tampon du protocole d\xe9crivant la structure des donn\xe9es.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"testutil/"),(0,l.kt)("td",{parentName:"tr",align:null},"Fonctions d'aide pour les tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vue/"),(0,l.kt)("td",{parentName:"tr",align:null},"Un mod\xe8le d'application web Vue 3.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x/"),(0,l.kt)("td",{parentName:"tr",align:null},"Modules Cosmos SDK et modules personnalis\xe9s.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"config.yml"),(0,l.kt)("td",{parentName:"tr",align:null},"Un fichier de configuration pour personnaliser une chaine en d\xe9veloppement.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readme.md"),(0,l.kt)("td",{parentName:"tr",align:null},"Un fichier lisez-moi pour votre projet de blockchain souveraine et sp\xe9cifique \xe0 une application.")))),(0,l.kt)("p",null,"Parcourir chacun de ces fichiers ne sera pas fait dans ce guide, mais nous vous encourageons \xe0 en lire davantage \xe0 ce sujet ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ignite.com/kb"},"ici"),"."),(0,l.kt)("p",null,"La plupart de ce tutoriel se d\xe9roulera dans le r\xe9pertoire ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."))}m.isMDXComponent=!0}}]);