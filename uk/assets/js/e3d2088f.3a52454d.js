"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4436],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(i,".").concat(g)]||d[g]||s[g]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3407:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],u={},i=void 0,p={unversionedId:"developers/environment",id:"developers/environment",title:"environment",description:"- - -",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/developers/environment.md",sourceDirName:"developers",slug:"/developers/environment",permalink:"/uk/developers/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/environment.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"overview",permalink:"/uk/developers/overview"},next:{title:"Celestia App",permalink:"/uk/category/celestia-app"}},c={},s=[{value:"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0435\u0439",id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0435\u0439",level:2},{value:"\u0406\u043d\u0441\u0442\u0430\u043b\u044e\u0432\u0430\u0442\u0438 Golang",id:"\u0456\u043d\u0441\u0442\u0430\u043b\u044e\u0432\u0430\u0442\u0438-golang",level:2}],d={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"sidebar_label : \u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"\u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0435-\u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438"},"\u0421\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0435 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438"),(0,a.kt)("p",null,"\u0423 \u0446\u044c\u043e\u043c\u0443 \u043f\u0456\u0434\u0440\u0443\u0447\u043d\u0438\u043a\u0443 \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430 \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043d\u043e\u0433\u043e \u0437\u0430\u0431\u0435\u0437\u043f\u0435\u0447\u0435\u043d\u043d\u044f Celestia. \u0426\u0435 \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0435 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0434\u043b\u044f \u0440\u043e\u0437\u0440\u043e\u0431\u043a\u0438, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0434\u0432\u0456\u0439\u043a\u043e\u0432\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u0456 \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0432\u0443\u0437\u043b\u0456\u0432."),(0,a.kt)("h2",{id:"\u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f-\u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0435\u0439"},"\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0435\u0439"),(0,a.kt)("p",null,"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0432\u0448\u0438 \u0441\u0432\u0456\u0439 \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440, \u0437\u0430\u043f\u0443\u0441\u0442\u0456\u0442\u044c ssh \u0432 \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440, \u0449\u043e\u0431 \u043f\u043e\u0447\u0430\u0442\u0438 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0435\u0439, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0445 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u043d\u043e\u0434\u0438."),(0,a.kt)("p",null,"\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u0439\u0442\u0435\u0441\u044f, \u0449\u043e \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u043e\u043d\u043e\u0432\u0438\u0442\u0438 \u0442\u0430 \u043f\u043e\u043a\u0440\u0430\u0449\u0438\u0442\u0438 \u041e\u0421:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u0456\u0432 APT\nsudo apt update && sudo apt upgrade -y\n\n# \u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u0456\u0432 YUM\nsudo yum update\n")),(0,a.kt)("p",null,"\u0426\u0435 \u0432\u0430\u0436\u043b\u0438\u0432\u0456 \u043f\u0430\u043a\u0435\u0442\u0438, \u044f\u043a\u0456 \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0456 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0431\u0430\u0433\u0430\u0442\u044c\u043e\u0445 \u0437\u0430\u0432\u0434\u0430\u043d\u044c, \u0442\u0430\u043a\u0438\u0445 \u044f\u043a \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0456\u0432, \u043a\u043e\u043c\u043f\u0456\u043b\u044e\u0432\u0430\u043d\u043d\u044f \u0456 \u043c\u043e\u043d\u0456\u0442\u043e\u0440\u0438\u043d\u0433 \u043d\u043e\u0434\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# \u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u0456\u0432 APT\nsudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n\n# \u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u0456\u0432 YUM\nsudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n")),(0,a.kt)("h2",{id:"\u0456\u043d\u0441\u0442\u0430\u043b\u044e\u0432\u0430\u0442\u0438-golang"},"\u0406\u043d\u0441\u0442\u0430\u043b\u044e\u0432\u0430\u0442\u0438 Golang"),(0,a.kt)("p",null,"Celestia-app \u0456 celestia-node \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0456 \u043c\u043e\u0432\u043e\u044e ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang"),", \u0442\u043e\u043c\u0443 \u043c\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 Golang, \u0449\u043e\u0431 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0442\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0457\u0445."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,a.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440 \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0434\u043e\u0434\u0430\u0442\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," \u0434\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,a.kt)("p",null,"\u0429\u043e\u0431 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438, \u0447\u0438 \u0431\u0443\u0432 Go \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,a.kt)("p",null,"\u0412\u0438\u0445\u0456\u0434 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e\u044e \u0432\u0435\u0440\u0441\u0456\u0454\u044e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 linux/amd64\n")))}g.isMDXComponent=!0}}]);