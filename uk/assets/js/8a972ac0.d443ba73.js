"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6287],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),a=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},d=function(e){var r=a(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=a(t),m=s,k=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(k,u(u({ref:r},d),{},{components:t})):n.createElement(k,u({ref:r},d))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,u[1]=i;for(var a=2;a<o;a++)u[a]=t[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5387:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c}});var n=t(7462),s=t(3366),o=(t(7294),t(3905)),u=["components"],i={sidebar_label:"Keeper"},l="\u0424\u0443\u043d\u043a\u0446\u0456\u0457 Keeper",a={unversionedId:"developers/wordle-keeper",id:"developers/wordle-keeper",title:"\u0424\u0443\u043d\u043a\u0446\u0456\u0457 Keeper",description:"\u0422\u0435\u043f\u0435\u0440 \u043d\u0430\u0441\u0442\u0430\u0432 \u0447\u0430\u0441 \u0440\u0435\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 Keeper \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f. \u0423 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0445 Cosmos-SDK Keeper \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0454\u0442\u044c\u0441\u044f \u0442\u0430\u043a:",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/developers/wordle-keeper.md",sourceDirName:"developers",slug:"/developers/wordle-keeper",permalink:"/uk/developers/wordle-keeper",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-keeper.md",tags:[],version:"current",frontMatter:{sidebar_label:"Keeper"},sidebar:"developers",previous:{title:"\u0422\u0438\u043f\u0438",permalink:"/uk/developers/wordle-types"},next:{title:"\u0417\u0430\u043f\u0443\u0441\u0442\u0456\u0442\u044c \u043b\u0430\u043d\u0446\u044e\u0436\u043e\u043a Wordle",permalink:"/uk/developers/run-wordle"}},d={},c=[{value:"\u0424\u0443\u043d\u043a\u0446\u0456\u044f SubmitWordle",id:"\u0444\u0443\u043d\u043a\u0446\u0456\u044f-submitwordle",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0456\u044f SubmitWordle",id:"\u0444\u0443\u043d\u043a\u0446\u0456\u044f-submitwordle-1",level:2},{value:"\u0424\u0430\u0439\u043b Protobuf",id:"\u0444\u0430\u0439\u043b-protobuf",level:2}],p={toc:c};function m(e){var r=e.components,t=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0444\u0443\u043d\u043a\u0446\u0456\u0457-keeper"},"\u0424\u0443\u043d\u043a\u0446\u0456\u0457 Keeper"),(0,o.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440 \u043d\u0430\u0441\u0442\u0430\u0432 \u0447\u0430\u0441 \u0440\u0435\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 Keeper \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f. \u0423 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0445 Cosmos-SDK ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/building-modules/keeper.html"},"Keeper")," \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0454\u0442\u044c\u0441\u044f \u0442\u0430\u043a:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'\u041e\u0441\u043d\u043e\u0432\u043d\u0438\u043c \u044f\u0434\u0440\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u044f \u041a\u043e\u0441\u043c\u043e\u0441 SDK \u0454 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442, \u0449\u043e \u043d\u0430\u0437\u0438\u0432\u0430\u0454\u0442\u044c\u0441\u044f "keeper"(\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c). Keeper \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0454 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044e \u0437\u0456 \u0441\u0445\u043e\u0432\u0438\u0449\u0435\u043c, \u043c\u0430\u0454 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0456\u043d\u0448\u0438\u0445 \u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u0456\u0432 \u0434\u043b\u044f \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0457 \u043c\u0456\u0436 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438 \u0442\u0430 \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0431\u0456\u043b\u044c\u0448\u0456\u0441\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0456\u0439 \u043c\u043e\u0434\u0443\u043b\u044f.')),(0,o.kt)("p",null,"Keeper \u2014 \u0446\u0435 \u0430\u0431\u0441\u0442\u0440\u0430\u043a\u0446\u0456\u044f \u0432 Cosmos, \u044f\u043a\u0430 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u043d\u0430\u043c \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u044f\u0442\u0438 \u0437\u0456 \u0441\u0445\u043e\u0432\u0438\u0449\u0435\u043c \u043a\u043b\u044e\u0447\u0456\u0432 \u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u044c \u0456 \u0437\u043c\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u0441\u0442\u0430\u043d \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0443."),(0,o.kt)("p",null,"\u0422\u0443\u0442 \u0432\u0456\u043d \u0434\u043e\u043f\u043e\u043c\u043e\u0436\u0435 \u043d\u0430\u043c \u043e\u043a\u0440\u0435\u0441\u043b\u0438\u0442\u0438 \u043b\u043e\u0433\u0456\u043a\u0443 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u043c\u0438 \u0441\u0442\u0432\u043e\u0440\u0438\u043b\u0438."),(0,o.kt)("h2",{id:"\u0444\u0443\u043d\u043a\u0446\u0456\u044f-submitwordle"},"\u0424\u0443\u043d\u043a\u0446\u0456\u044f SubmitWordle"),(0,o.kt)("p",null,"\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043c\u0438 \u043f\u043e\u0447\u0438\u043d\u0430\u0454\u043c\u043e \u0437 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitWordle"),"."),(0,o.kt)("p",null,"\u0412\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0444\u0430\u0439\u043b: ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wordle/keeper/msg_server_submit_wordle.go")),(0,o.kt)("p",null,"\u0412\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0443 \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u043a\u043e\u0434, \u044f\u043a\u0438\u0439 \u043c\u0438 \u0440\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package keeper\n\nimport (\n  "context"\n  "crypto/sha256"\n  "encoding/hex"\n  "github.com/YazzyYaz/wordle/x/wordle/types"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n  sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"\n  "time"\n  "unicode"\n)\n\nfunc (k msgServer) SubmitWordle(goCtx context.Context, msg *types.MsgSubmitWordle) (*types.MsgSubmitWordleResponse, error) {\n  ctx := sdk.UnwrapSDKContext(goCtx)\n  // Check to See the Wordle is 5 letters\n  if len(msg.Word) != 5 {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle Must Be A 5 Letter Word")\n  }\n  // Check to See Only Alphabets Are Passed for the Wordle\n  if !(IsLetter(msg.Word)) {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle Must Only Consist Of Letters In The Alphabet")\n  }\n\n  // Use Current Day to Create The Index of the Newly-Submitted Wordle of the Day\n  currentTime := time.Now().Local()\n  var currentTimeBytes = []byte(currentTime.Format("2006-01-02"))\n  var currentTimeHash = sha256.Sum256(currentTimeBytes)\n  var currentTimeHashString = hex.EncodeToString(currentTimeHash[:])\n  // Hash The Newly-Submitted Wordle of the Day\n  var submittedSolutionHash = sha256.Sum256([]byte(msg.Word))\n  var submittedSolutionHashString = hex.EncodeToString(submittedSolutionHash[:])\n\n  var wordle = types.Wordle{\n    Index:     currentTimeHashString,\n    Word:      submittedSolutionHashString,\n    Submitter: msg.Creator,\n  }\n\n  // Try to Get Wordle From KV Store Using Current Day as Key\n  // This Helps ensure only one Wordle is submitted per day\n  _, isFound := k.GetWordle(ctx, currentTimeHashString)\n  if isFound {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle of the Day is Already Submitted")\n  }\n  // Write Wordle to KV Store\n  k.SetWordle(ctx, wordle)\n  return &types.MsgSubmitWordleResponse{}, nil\n}\n\nfunc IsLetter(s string) bool {\n  for _, r := range s {\n    if !unicode.IsLetter(r) {\n      return false\n    }\n  }\n  return true\n}\n')),(0,o.kt)("p",null,"\u0422\u0443\u0442, \u0443 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 Keeper ",(0,o.kt)("inlineCode",{parentName:"p"},"SubmitWordle"),", \u043c\u0438 \u0440\u043e\u0431\u0438\u043c\u043e \u043a\u0456\u043b\u044c\u043a\u0430 \u0440\u0435\u0447\u0435\u0439:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043c\u0438 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u0454\u043c\u043e\u0441\u044f, \u0449\u043e \u0441\u043b\u043e\u0432\u043e, \u043f\u043e\u0434\u0430\u043d\u0435 \u043d\u0430 Wordle of the Day, \u043c\u0456\u0441\u0442\u0438\u0442\u044c 5 \u043b\u0456\u0442\u0435\u0440 \u0456 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u043b\u0438\u0448\u0435 \u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0438. \u0426\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0454, \u0449\u043e \u0432 \u0440\u044f\u0434\u043a\u0443 \u043d\u0435 \u043c\u043e\u0436\u043d\u0430 \u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0438 \u0446\u0456\u043b\u0456 \u0447\u0438\u0441\u043b\u0430."),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0442\u0456\u043c \u043c\u0438 \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u043c\u043e \u0445\u0435\u0448 \u0456\u0437 \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0434\u043d\u044f, \u043a\u043e\u043b\u0438 \u0431\u0443\u043b\u043e \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e Wordle. \u041c\u0438 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0446\u0435\u0439 \u0445\u0435\u0448 \u0432 \u0456\u043d\u0434\u0435\u043a\u0441\u0456 \u0442\u0438\u043f\u0443 Wordle. \u0426\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u043d\u0430\u043c \u0448\u0443\u043a\u0430\u0442\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u043f\u0440\u0438\u043f\u0443\u0449\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e Wordle \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u043f\u0440\u0438\u043f\u0443\u0449\u0435\u043d\u044c, \u044f\u043a\u0456 \u043c\u0438 \u0440\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0434\u0430\u043b\u0456."),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0442\u0456\u043c \u043c\u0438 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454\u043c\u043e, \u0447\u0438 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439 \u0456\u043d\u0434\u0435\u043a\u0441 \u0434\u043b\u044f \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456\u0448\u043d\u044c\u043e\u0457 \u0434\u0430\u0442\u0438. \u042f\u043a\u0449\u043e \u0432\u0456\u043d \u043d\u0435 \u043f\u043e\u0440\u043e\u0436\u043d\u0456\u0439, \u0446\u0435 \u043e\u0437\u043d\u0430\u0447\u0430\u0454, \u0449\u043e Wordle \u0443\u0436\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e. \u041f\u0430\u043c\u2019\u044f\u0442\u0430\u0439\u0442\u0435, \u0449\u043e \u043d\u0430 \u0434\u0435\u043d\u044c \u043c\u043e\u0436\u043d\u0430 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u043e\u0434\u043d\u0435 \u0441\u043b\u043e\u0432\u043e. \u0406\u043d\u0448\u0456 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0432\u0433\u0430\u0434\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u0435 \u0441\u043b\u043e\u0432\u043e."),(0,o.kt)("li",{parentName:"ul"},"\u0423 \u043d\u0430\u0441 \u0442\u0430\u043a\u043e\u0436 \u0454 \u0434\u043e\u043f\u043e\u043c\u0456\u0436\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f, \u044f\u043a\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454, \u0447\u0438 \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0440\u044f\u0434\u043e\u043a \u043b\u0438\u0448\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0438 \u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0443.")),(0,o.kt)("h2",{id:"\u0444\u0443\u043d\u043a\u0446\u0456\u044f-submitwordle-1"},"\u0424\u0443\u043d\u043a\u0446\u0456\u044f SubmitWordle"),(0,o.kt)("p",null,"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f Keeper, \u044f\u043a\u0443 \u043c\u0438 \u0434\u043e\u0434\u0430\u043c\u043e - \u0446\u044f: ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wordle/keeper/msg_server_submit_guess.go")),(0,o.kt)("p",null,"\u0412\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0443 \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u043a\u043e\u0434, \u044f\u043a\u0438\u0439 \u043c\u0438 \u0440\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package keeper\n\nimport (\n  "context"\n  "crypto/sha256"\n  "encoding/hex"\n  "github.com/YazzyYaz/wordle/x/wordle/types"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n  sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"\n  "strconv"\n  "time"\n  "github.com/tendermint/tendermint/crypto"\n)\n\nfunc (k msgServer) SubmitGuess(goCtx context.Context, msg *types.MsgSubmitGuess) (*types.MsgSubmitGuessResponse, error) {\n  ctx := sdk.UnwrapSDKContext(goCtx)\n  // Check Word is 5 Characters Long\n  if len(msg.Word) != 5 {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Guess Must Be A 5 Letter Word!")\n  }\n\n  // Check String Contains Alphabet Letters Only\n  if !(IsLetter(msg.Word)) {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Guess Must Only Consist of Alphabet Letters!")\n  }\n\n  // Get Current Day to Pull Up Wordle of That Day As A Hash\n  currentTime := time.Now().Local()\n  var currentTimeBytes = []byte(currentTime.Format("2006-01-02"))\n  var currentTimeHash = sha256.Sum256(currentTimeBytes)\n  var currentTimeHashString = hex.EncodeToString(currentTimeHash[:])\n  wordle, isFound := k.GetWordle(ctx, currentTimeHashString)\n  if !isFound {\n    return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wordle of The Day Hasn\'t Been Submitted Yet. Feel Free to Submit One!")\n  }\n\n  // We Convert Current Day and Guesser to A Hash To Use As An Index For Today\'s Guesses For That Guesser\n  // That Way, A Person Can Guess 6 Times A Day For Each New Wordle Created\n  var currentTimeGuesserBytes = []byte(currentTime.Format("2006-01-02") + msg.Creator)\n  var currentTimeGuesserHash = sha256.Sum256(currentTimeGuesserBytes)\n  var currentTimeGuesserHashString = hex.EncodeToString(currentTimeGuesserHash[:])\n  // Hash The Guess To The Wordle\n  var submittedSolutionHash = sha256.Sum256([]byte(msg.Word))\n  var submittedSolutionHashString = hex.EncodeToString(submittedSolutionHash[:])\n\n  // Get the Latest Guess entry for this Submitter for the current Wordle of the Day\n  var count int\n  guess, isFound := k.GetGuess(ctx, currentTimeGuesserHashString)\n  if isFound {\n    // Check if Submitter Reached 6 Tries\n    if guess.Count == strconv.Itoa(6) {\n      return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "You Have Guessed The Maximum Amount of Times for The Day! Try Again Tomorrow With A New Wordle.")\n    }\n    currentCount, err := strconv.Atoi(guess.Count)\n    if err != nil {\n      panic(err)\n    }\n    count = currentCount\n  } else {\n    // Initialize Count Value If No Entry Exists for this Submitter for Today\'s Wordle\n    count = 0\n  }\n  // Increment Guess Count\n  count += 1\n  var newGuess = types.Guess{\n    Index:     currentTimeGuesserHashString,\n    Submitter: msg.Creator,\n    Word:      submittedSolutionHashString,\n    Count:     strconv.Itoa(count),\n  }\n  // Remove Current Guess Entry to be Updated With New Entry\n  k.RemoveGuess(ctx, currentTimeGuesserHashString)\n  // Add New Guess Entry\n  k.SetGuess(ctx, newGuess)\n  // Setup Reward \n  reward := sdk.Coins{sdk.NewInt64Coin("WORDLE", 100)}\n  if !(wordle.Word == submittedSolutionHashString) {\n    return &types.MsgSubmitGuessResponse{Title: "Wrong Answer", Body: "Your Guess Was Wrong. Try Again"}, nil\n  } else {\n    // If Submitter Guesses Correctly\n    guesserAddress, _ := sdk.AccAddressFromBech32(msg.Creator)\n    moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))\n    // Send Reward\n    k.bankKeeper.SendCoins(ctx, guesserAddress, moduleAcct, reward) \n    return &types.MsgSubmitGuessResponse{Title: "Correct", Body: "You Guessed The Wordle Correctly!"}, nil\n  }\n}\n')),(0,o.kt)("p",null,"\u0423 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u043e\u043c\u0443 \u0432\u0438\u0449\u0435 \u043a\u043e\u0434\u0456 \u043c\u0438 \u0440\u043e\u0431\u0438\u043c\u043e \u0442\u0430\u043a\u0456 \u0440\u0435\u0447\u0456:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0422\u0443\u0442 \u043c\u0438 \u0437\u043d\u043e\u0432\u0443 \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u043c\u043e \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0456 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0441\u043b\u043e\u0432\u0430, \u0449\u043e\u0431 \u043f\u0435\u0440\u0435\u043a\u043e\u043d\u0430\u0442\u0438\u0441\u044f, \u0449\u043e \u0432\u043e\u043d\u043e \u043c\u0456\u0441\u0442\u0438\u0442\u044c 5 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432 \u0456 \u0432 \u043d\u044c\u043e\u043c\u0443 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0438 \u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0443, \u044f\u043a\u0456 \u043c\u043e\u0436\u043d\u0430 \u0431\u0443\u0434\u0435 \u043e\u043d\u043e\u0432\u0438\u0442\u0438 \u0432 \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u044c\u043e\u043c\u0443 \u0430\u0431\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445 CLI."),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0442\u0456\u043c \u043c\u0438 \u043e\u0442\u0440\u0438\u043c\u0443\u0454\u043c\u043e \u0441\u043b\u043e\u0432\u043e \u0434\u043d\u044f, \u043e\u0442\u0440\u0438\u043c\u0443\u044e\u0447\u0438 \u0445\u0435\u0448-\u0440\u044f\u0434\u043e\u043a \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0434\u043d\u044f."),(0,o.kt)("li",{parentName:"ul"},"\u0414\u0430\u043b\u0456 \u043c\u0438 \u0441\u0442\u0432\u043e\u0440\u0438\u043c\u043e \u0445\u0435\u0448-\u0440\u044f\u0434\u043e\u043a \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0434\u043d\u044f \u0456 Submitter. \u0426\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u043d\u0430\u043c \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0442\u0438\u043f Guess \u0437 \u0456\u043d\u0434\u0435\u043a\u0441\u043e\u043c, \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u043f\u043e\u0442\u043e\u0447\u043d\u0438\u0439 \u0434\u0435\u043d\u044c \u0456 \u0430\u0434\u0440\u0435\u0441\u0443 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043d\u0438\u043a\u0430. \u0426\u0435 \u0434\u043e\u043f\u043e\u043c\u0430\u0433\u0430\u0454 \u043d\u0430\u043c, \u043a\u043e\u043b\u0438 \u043c\u0438 \u0441\u0442\u0438\u043a\u0430\u0454\u043c\u043e\u0441\u044f \u0437 \u043d\u043e\u0432\u0438\u043c \u0434\u043d\u0435\u043c \u0456 \u0430\u0434\u0440\u0435\u0441\u0430 \u0445\u043e\u0447\u0435 \u0432\u0433\u0430\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043d\u044f. \u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0456\u043d\u0434\u0435\u043a\u0441\u0443 \u0433\u0430\u0440\u0430\u043d\u0442\u0443\u0454, \u0449\u043e \u0432\u043e\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0443\u0432\u0430\u0442\u0438 \u0432\u0433\u0430\u0434\u0443\u0432\u0430\u0442\u0438 \u043d\u043e\u0432\u0435 \u0441\u043b\u043e\u0432\u043e \u0449\u043e\u0434\u043d\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0434\u043e 6 \u0441\u043f\u0440\u043e\u0431 \u043d\u0430 \u0434\u0435\u043d\u044c."),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0442\u0456\u043c \u043c\u0438 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454\u043c\u043e, \u0447\u0438 \u0446\u0435\u0439 \u0442\u0438\u043f \u043f\u0440\u0438\u043f\u0443\u0449\u0435\u043d\u043d\u044f \u0434\u043b\u044f Submitter \u0434\u043b\u044f \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e Wordle \u0434\u043e\u0441\u044f\u0433 6 \u043e\u0434\u0438\u043d\u0438\u0446\u044c. \u042f\u043a\u0449\u043e \u043d\u0456, \u043c\u0438 \u0437\u0431\u0456\u043b\u044c\u0448\u0438\u043c\u043e \u0440\u0430\u0445\u0443\u043d\u043e\u043a. \u041f\u043e\u0442\u0456\u043c \u043c\u0438 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454\u043c\u043e, \u0447\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0435 \u0447\u0438\u0441\u043b\u043e. \u041c\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043c\u043e \u0442\u0438\u043f Guess \u0437 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u043c \u043f\u0456\u0434\u0440\u0430\u0445\u0443\u043d\u043a\u043e\u043c \u0441\u0442\u0430\u043d\u0443.")),(0,o.kt)("h2",{id:"\u0444\u0430\u0439\u043b-protobuf"},"\u0424\u0430\u0439\u043b Protobuf"),(0,o.kt)("p",null,"  \u0414\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0444\u0430\u0439\u043b\u0456\u0432 \u0434\u043b\u044f \u0446\u0456\u0454\u0457 \u0440\u043e\u0431\u043e\u0442\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0431\u0443\u0434\u0435 \u0437\u043c\u0456\u043d\u0438\u0442\u0438."),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0448\u0438\u0439 \u0456\u0437 \u043d\u0438\u0445 - ",(0,o.kt)("inlineCode",{parentName:"p"},"proto/wordle/tx.proto"),"."),(0,o.kt)("p",null,"\u0412\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u0446\u044c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0443 \u0437\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c \u043f\u0443\u0441\u0442\u0438\u0439 ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSubmitGuessResponse")," \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u043a\u043e\u0434\u043e\u043c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"message MsgSubmitGuessResponse {\n  string title = 1;\n  string body = 2;\n}\n")),(0,o.kt)("p",null,"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0444\u0430\u0439\u043b - ",(0,o.kt)("inlineCode",{parentName:"p"},"x/wordle/types/expected_keepers.go")),(0,o.kt)("p",null,"\u0422\u0443\u0442 \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0434\u043e\u0434\u0430\u0442\u0438 \u043c\u0435\u0442\u043e\u0434 SendCoins \u0434\u043e \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 BankKeeper, \u0449\u043e\u0431 \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u0438 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0442\u0438 \u0432\u0438\u043d\u0430\u0433\u043e\u0440\u043e\u0434\u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c\u0443 \u0432\u0433\u0430\u0434\u0443\u0432\u0430\u0447\u0443."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type BankKeeper interface {\n  SendCoins(ctx sdk.Context, fromAddr sdk.AccAddress, toAddr sdk.AccAddress, amt sdk.Coins) error\n}\n")),(0,o.kt)("p",null,"\u0417\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0446\u044c\u043e\u0433\u043e \u043c\u0438 \u0440\u0435\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u043b\u0438 \u0432\u0441\u0456 \u043d\u0430\u0448\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 Keeper! \u0427\u0430\u0441 \u043a\u043e\u043c\u043f\u0456\u043b\u044e\u0432\u0430\u0442\u0438 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d \u0456 \u0437\u0430\u0431\u0440\u0430\u0442\u0438 \u0439\u043e\u0433\u043e \u043d\u0430 \u0442\u0435\u0441\u0442-\u0434\u0440\u0430\u0439\u0432."))}m.isMDXComponent=!0}}]);