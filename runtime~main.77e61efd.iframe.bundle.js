!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({186:"components-Box-Box-stories",424:"components-Popover-Popover-mdx",544:"components-Box-Box-mdx",555:"components-Spacer-Spacer-mdx",783:"components-Loading-Loading-stories",812:"components-Sidebar-Sidebar-mdx",870:"components-Icon-Icon-stories",924:"components-TextInput-TextInput-mdx",1065:"components-Badge-Badge-stories",1120:"components-Avatar-Avatar-mdx",1128:"components-Button-Button-mdx",1314:"components-Header-Header-stories",1374:"components-StyledLink-StyledLink-stories",1423:"components-TextArea-TextArea-stories",1524:"components-Range-Range-mdx",1528:"components-SideNav-SideNav-mdx",1723:"Spacing-stories-mdx",1747:"components-Button-Button-stories",1981:"components-Divider-Divider-mdx",2004:"components-Tabs-Tab-mdx",2129:"components-ActionsMenu-ActionsMenu-mdx",2218:"components-TreeNav-TreeNav-mdx",2228:"components-Toggle-Toggle-stories",2235:"components-Grid-Grid-stories",2395:"components-TextArea-TextArea-mdx",2488:"components-TextInput-TextInput-stories",2559:"components-Modal-Modal-mdx",2607:"components-RadioButton-RadioButton-mdx",2619:"components-ButtonGroup-ButtonGroupItem-stories",2860:"components-Checkbox-Checkbox-mdx",3055:"components-TreeNav-TreeNav-stories",3135:"components-HeaderSimple-HeaderSimple-mdx",3259:"components-DatePicker-DatePicker-mdx",3265:"components-Notification-Notification-mdx",3323:"components-Loading-Loading-mdx",3504:"components-Flex-FlexItem-stories",3668:"components-Modal-Modal-stories",3862:"components-SideNav-SideNav-stories",4002:"components-Tag-Tag-mdx",4034:"components-Select-Select-mdx",4041:"components-Flex-Flex-stories",4042:"components-Header-Header-mdx",4360:"components-ProgressBar-ProgressBar-mdx",4504:"components-Tabs-TabsContainer-stories",4612:"components-Checkbox-Checkbox-stories",4692:"components-Sidebar-Sidebar-stories",4747:"components-Tag-Tag-stories",4819:"components-Toggle-Toggle-mdx",4847:"components-Typography-Typography-stories-mdx",4953:"components-Divider-Divider-stories",5473:"components-Grid-Grid-mdx",5785:"components-Tabs-TabsContainer-mdx",5919:"Colour-stories-mdx",5989:"components-Avatar-Avatar-stories",6144:"components-DatePicker-DatePicker-stories",6332:"components-Icon-Icon-mdx",6885:"01-Intro-stories-mdx",7060:"components-ButtonGroup-ButtonGroupIteam-mdx",7128:"components-ProgressBar-ProgressBar-stories",7518:"components-Card-Card-stories",7531:"components-Select-Select-stories",7935:"components-RadioButton-RadioButton-stories",8150:"components-Expandable-Expandable-mdx",8161:"components-ButtonGroup-ButtonGroup-mdx",8308:"components-Expandable-Expandable-stories",8856:"components-Notification-Notification-stories",8900:"components-HeaderSimple-HeaderSimple-stories",8992:"components-StatusDot-StatusDot-stories",9095:"components-Spacer-Spacer-stories",9189:"components-StyledLink-StyledLink-mdx",9212:"components-ButtonGroup-ButtonGroup-stories",9282:"components-Flex-FlexItem-mdx",9302:"components-StatusDot-StatusDot-mdx",9361:"components-Flex-Flex-mdx",9514:"components-ActionsMenu-ActionsMenu-stories",9529:"components-Range-Range-stories",9532:"components-Card-Card-mdx",9705:"components-Popover-Popover-stories",9719:"components-Tabs-Tab-stories",9753:"components-Badge-Badge-mdx"}[chunkId]||chunkId)+"."+{186:"b16ec8d3",424:"925859ad",544:"a62fe836",555:"8e762945",783:"ba9726c9",812:"86751caf",870:"00dc1187",924:"d093b355",999:"5f9cb5b2",1065:"92e75986",1120:"a928fecb",1128:"79f585b1",1314:"95096414",1374:"0fb8c456",1423:"85e551d1",1524:"1c2fe934",1528:"4bd059b8",1723:"bd2da053",1729:"d3594181",1747:"bf37049a",1888:"73c98eec",1981:"f451015a",2004:"dfbdc596",2129:"af5cab8b",2192:"acf1c939",2210:"2dd89450",2218:"1bce7584",2228:"19ffb765",2235:"3cd40c18",2395:"c5c16c5a",2465:"85c45614",2488:"b0ef6d02",2559:"59f83a32",2607:"0a6ed5c7",2619:"05bacc51",2757:"a24676b1",2809:"9fc7967b",2860:"3e52cb6b",2977:"5d31293a",3055:"e2122eec",3135:"5380ba83",3259:"97d90c24",3265:"d5b7f31d",3323:"0cfcac3e",3333:"b4a17f3b",3426:"082caab7",3504:"b5e55163",3668:"74d4d10b",3862:"e6a137c2",3991:"df46ab30",4002:"5afa7db9",4034:"11251507",4041:"7356b041",4042:"0f18b4e4",4095:"efae9f73",4360:"8b84026b",4504:"02d52e94",4612:"6c01a402",4692:"c437d508",4747:"2de64740",4819:"2168c3bf",4847:"9a59f1f0",4953:"19e280ea",5473:"38677b7f",5513:"6d868e4a",5785:"5b0f523e",5919:"d350eaf5",5989:"6b74a9e4",6144:"bb7bc398",6332:"5ad5fa10",6607:"9dc755fa",6815:"80bf9ca3",6885:"6e7f1d3c",7060:"99baa080",7128:"c6d4a43d",7518:"b2cae852",7531:"62c31105",7880:"2a30dd0a",7935:"b8898842",8035:"9fc560d3",8078:"d694aacc",8150:"ffddde72",8161:"4d752446",8308:"f085f19e",8756:"d417daaf",8797:"cd40f332",8856:"6e454390",8863:"3f1f3d32",8900:"2fb2a73b",8992:"d9b8f9aa",9095:"a6319985",9115:"c6aca68b",9189:"3836ffc4",9212:"84681bd5",9282:"317399cb",9302:"2c027b15",9361:"e11ef1a3",9433:"e0a52e19",9514:"006244aa",9529:"c2c43fd1",9532:"88597a20",9705:"a17a7816",9719:"0efddc12",9753:"eee43a58",9951:"c758e6d3"}[chunkId]+".iframe.bundle.js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="orcs-design-system:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","orcs-design-system:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();