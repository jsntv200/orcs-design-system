"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[3504],{"./node_modules/@fortawesome/react-fontawesome/index.es.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G:function(){return FontAwesomeIcon}});var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.es.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function camelize(string){return function _isNumerical(obj){return(obj-=0)==obj}(string)?string:(string=string.replace(/[\-_\s]+(.)?/g,(function(match,chr){return chr?chr.toUpperCase():""}))).substr(0,1).toLowerCase()+string.substr(1)}var _excluded$1=["style"];var PRODUCTION=!1;try{PRODUCTION=!0}catch(e){}function normalizeIconArgs(icon){return icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName&&icon.icon?icon:_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.Qc.icon?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.Qc.icon(icon):null===icon?null:icon&&"object"===_typeof(icon)&&icon.prefix&&icon.iconName?icon:Array.isArray(icon)&&2===icon.length?{prefix:icon[0],iconName:icon[1]}:"string"==typeof icon?{prefix:"fas",iconName:icon}:void 0}function objectWithKey(key,value){return Array.isArray(value)&&value.length>0||!Array.isArray(value)&&value?_defineProperty({},key,value):{}}var _excluded=["forwardedRef"];function FontAwesomeIcon(_ref){var forwardedRef=_ref.forwardedRef,props=_objectWithoutProperties(_ref,_excluded),iconArgs=props.icon,maskArgs=props.mask,symbol=props.symbol,className=props.className,title=props.title,titleId=props.titleId,maskId=props.maskId,iconLookup=normalizeIconArgs(iconArgs),classes=objectWithKey("classes",[].concat(_toConsumableArray(function classList(props){var _classes,beat=props.beat,fade=props.fade,beatFade=props.beatFade,bounce=props.bounce,shake=props.shake,flash=props.flash,spin=props.spin,spinPulse=props.spinPulse,spinReverse=props.spinReverse,pulse=props.pulse,fixedWidth=props.fixedWidth,inverse=props.inverse,border=props.border,listItem=props.listItem,flip=props.flip,size=props.size,rotation=props.rotation,pull=props.pull,classes=(_defineProperty(_classes={"fa-beat":beat,"fa-fade":fade,"fa-beat-fade":beatFade,"fa-bounce":bounce,"fa-shake":shake,"fa-flash":flash,"fa-spin":spin,"fa-spin-reverse":spinReverse,"fa-spin-pulse":spinPulse,"fa-pulse":pulse,"fa-fw":fixedWidth,"fa-inverse":inverse,"fa-border":border,"fa-li":listItem,"fa-flip":!0===flip,"fa-flip-horizontal":"horizontal"===flip||"both"===flip,"fa-flip-vertical":"vertical"===flip||"both"===flip},"fa-".concat(size),null!=size),_defineProperty(_classes,"fa-rotate-".concat(rotation),null!=rotation&&0!==rotation),_defineProperty(_classes,"fa-pull-".concat(pull),null!=pull),_defineProperty(_classes,"fa-swap-opacity",props.swapOpacity),_classes);return Object.keys(classes).map((function(key){return classes[key]?key:null})).filter((function(key){return key}))}(props)),_toConsumableArray(className.split(" ")))),transform=objectWithKey("transform","string"==typeof props.transform?_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.Qc.transform(props.transform):props.transform),mask=objectWithKey("mask",normalizeIconArgs(maskArgs)),renderedIcon=(0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qv)(iconLookup,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},classes),transform),mask),{},{symbol:symbol,title:title,titleId:titleId,maskId:maskId}));if(!renderedIcon)return function log(){var _console;!PRODUCTION&&console&&"function"==typeof console.error&&(_console=console).error.apply(_console,arguments)}("Could not find icon",iconLookup),null;var abstract=renderedIcon.abstract,extraProps={ref:forwardedRef};return Object.keys(props).forEach((function(key){FontAwesomeIcon.defaultProps.hasOwnProperty(key)||(extraProps[key]=props[key])})),convertCurry(abstract[0],extraProps)}FontAwesomeIcon.displayName="FontAwesomeIcon",FontAwesomeIcon.propTypes={beat:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,border:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,beatFade:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,bounce:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,fade:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,flash:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,mask:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),maskId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,fixedWidth:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,inverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,flip:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([!0,!1,"horizontal","vertical","both"]),icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().object,prop_types__WEBPACK_IMPORTED_MODULE_2___default().array,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),listItem:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,pull:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["right","left"]),pulse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,rotation:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf([0,90,180,270]),shake:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,spinPulse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,spinReverse:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,symbol:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,prop_types__WEBPACK_IMPORTED_MODULE_2___default().string]),title:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,titleId:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,transform:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,prop_types__WEBPACK_IMPORTED_MODULE_2___default().object]),swapOpacity:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool},FontAwesomeIcon.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var convertCurry=function convert(createElement,element){var extraProps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof element)return element;var children=(element.children||[]).map((function(child){return convert(createElement,child)})),mixins=Object.keys(element.attributes||{}).reduce((function(acc,key){var val=element.attributes[key];switch(key){case"class":acc.attrs.className=val,delete element.attributes.class;break;case"style":acc.attrs.style=function styleToObject(style){return style.split(";").map((function(s){return s.trim()})).filter((function(s){return s})).reduce((function(acc,pair){var i=pair.indexOf(":"),prop=camelize(pair.slice(0,i)),value=pair.slice(i+1).trim();return prop.startsWith("webkit")?acc[function capitalize(val){return val.charAt(0).toUpperCase()+val.slice(1)}(prop)]=value:acc[prop]=value,acc}),{})}(val);break;default:0===key.indexOf("aria-")||0===key.indexOf("data-")?acc.attrs[key.toLowerCase()]=val:acc.attrs[camelize(key)]=val}return acc}),{attrs:{}}),_extraProps$style=extraProps.style,existingStyle=void 0===_extraProps$style?{}:_extraProps$style,remaining=_objectWithoutProperties(extraProps,_excluded$1);return mixins.attrs.style=_objectSpread2(_objectSpread2({},mixins.attrs.style),existingStyle),createElement.apply(void 0,[element.tag,_objectSpread2(_objectSpread2({},mixins.attrs),remaining)].concat(_toConsumableArray(children)))}.bind(null,react__WEBPACK_IMPORTED_MODULE_1__.createElement)},"./lib/components/Flex/FlexItem.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},basicFlexItem:function(){return basicFlexItem}});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./lib/components/Flex/index.js"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/components/Button/index.js"),_Icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/components/Icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Components/FlexItem",component:___WEBPACK_IMPORTED_MODULE_2__.B};var basicFlexItem=function basicFlexItem(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.B,{mx:"s",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_3__.Z,{iconRight:!0,children:["Right aligned icon",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:["fas","download"]})]})})};basicFlexItem.displayName="basicFlexItem",basicFlexItem.storyName="Basic Flex Item",basicFlexItem.__docgenInfo={description:"",methods:[],displayName:"basicFlexItem"},basicFlexItem.parameters={...basicFlexItem.parameters,docs:{...basicFlexItem.parameters?.docs,source:{originalSource:'() => <FlexItem mx="s">\n    <Button iconRight>\n      Right aligned icon\n      <Icon icon={["fas", "download"]} />\n    </Button>\n  </FlexItem>',...basicFlexItem.parameters?.docs?.source}}};const __namedExportsOrder=["basicFlexItem"]},"./lib/components/Flex/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return FlexItem},Z:function(){return Flex}});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var FlexStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.GQ),FlexWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"Flex__FlexWrapper",componentId:"sc-1f3kfw7-0"}).attrs((function(props){return{"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null}}))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({boxSizing:"border-box"}),FlexStyles),FlexItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({displayName:"Flex__FlexItem",componentId:"sc-1f3kfw7-1"})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({boxSizing:"border-box"}),FlexStyles);function Flex(_ref){var children=_ref.children,theme=_ref.theme,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FlexWrapper,_objectSpread(_objectSpread({},props),{},{children:children}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FlexWrapper,_objectSpread(_objectSpread({},props),{},{children:children}))}):theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}Flex.propTypes=_objectSpread(_objectSpread(_objectSpread({children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,theme:prop_types__WEBPACK_IMPORTED_MODULE_9___default().object},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.space),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.layout),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.flexbox),Flex.defaultProps={display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"stretch"},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]}},"./lib/components/Icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Icon}});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js")),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["border","mask","fixedWidth","inverse","flip","icon","listitem","pull","pulse","rotation","size","spin","symbol","transform","color","theme","title"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var IconStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_3__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_3__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_3__.$_,styled_system__WEBPACK_IMPORTED_MODULE_3__.cp),IconWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)("span").withConfig({displayName:"Icon__IconWrapper",componentId:"sc-xeqnbo-0"})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_6__.iv)({lineHeight:"0",display:"inline-block"}),IconStyles);function Icon(_ref){var border=_ref.border,mask=_ref.mask,fixedWidth=_ref.fixedWidth,inverse=_ref.inverse,flip=_ref.flip,icon=_ref.icon,listitem=_ref.listitem,pull=_ref.pull,pulse=_ref.pulse,rotation=_ref.rotation,size=_ref.size,spin=_ref.spin,symbol=_ref.symbol,transform=_ref.transform,color=_ref.color,theme=_ref.theme,title=_ref.title,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_7__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconWrapper,_objectSpread(_objectSpread({color:color},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,{border:border,mask:mask,fixedWidth:fixedWidth,inverse:inverse,flip:flip,listitem:listitem,pull:pull,rotation:rotation,icon:icon,pulse:pulse,size:size,spin:spin,symbol:symbol,transform:transform,title:title&&"Icon-".concat(title)})}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.f6,{theme:theme,children:component}):component}Icon.propTypes={color:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,border:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,mask:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,fixedWidth:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,inverse:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,flip:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(["horizontal","vertical","both"]),icon:prop_types__WEBPACK_IMPORTED_MODULE_8___default().array,listitem:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,pull:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(["left","right"]),pulse:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,rotation:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOf(["90","180","270"]),size:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,spin:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,symbol:prop_types__WEBPACK_IMPORTED_MODULE_8___default().any,transform:prop_types__WEBPACK_IMPORTED_MODULE_8___default().any,theme:prop_types__WEBPACK_IMPORTED_MODULE_8___default().object,title:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{color:{description:"Colours the icon using colours from the system colour palette",type:{name:"string"},required:!1},border:{description:"Set a border around the icon",type:{name:"bool"},required:!1},mask:{description:"Set an icon as a clipping mask around another icon",type:{name:"string"},required:!1},fixedWidth:{description:"Set icon to display as fixed width",type:{name:"bool"},required:!1},inverse:{description:"Invert the icon for use on dark backgrounds",type:{name:"bool"},required:!1},flip:{description:"Flip horizontally, vertically, or both",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1},{value:'"both"',computed:!1}]},required:!1},icon:{description:"Set the Font Awesome style/weight, and icon",type:{name:"array"},required:!1},listitem:{description:"Set icon to render in the style of a list bullet",type:{name:"bool"},required:!1},pull:{description:"Pull an icon to float to the left or right of the element's other contents",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},pulse:{description:"Set a slow pulse animation on the icon",type:{name:"bool"},required:!1},rotation:{description:"Rotate the icon by the specified degree",type:{name:"enum",value:[{value:'"90"',computed:!1},{value:'"180"',computed:!1},{value:'"270"',computed:!1}]},required:!1},size:{description:"Set the icon size based on FontAwesome usage for size",type:{name:"string"},required:!1},spin:{description:"Set an 8-frame spinning animation on the icon",type:{name:"bool"},required:!1},symbol:{description:"Set an icon as a symbol to use with the SVG Sprites technique",type:{name:"any"},required:!1},transform:{description:"Power transforms to scale and position the icon",type:{name:"any"},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1},title:{description:"Set an accessabilty title for screen readers.",type:{name:"string"},required:!1}}},Icon.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{color:{description:"Colours the icon using colours from the system colour palette",type:{name:"string"},required:!1},border:{description:"Set a border around the icon",type:{name:"bool"},required:!1},mask:{description:"Set an icon as a clipping mask around another icon",type:{name:"string"},required:!1},fixedWidth:{description:"Set icon to display as fixed width",type:{name:"bool"},required:!1},inverse:{description:"Invert the icon for use on dark backgrounds",type:{name:"bool"},required:!1},flip:{description:"Flip horizontally, vertically, or both",type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1},{value:'"both"',computed:!1}]},required:!1},icon:{description:"Set the Font Awesome style/weight, and icon",type:{name:"array"},required:!1},listitem:{description:"Set icon to render in the style of a list bullet",type:{name:"bool"},required:!1},pull:{description:"Pull an icon to float to the left or right of the element's other contents",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},pulse:{description:"Set a slow pulse animation on the icon",type:{name:"bool"},required:!1},rotation:{description:"Rotate the icon by the specified degree",type:{name:"enum",value:[{value:'"90"',computed:!1},{value:'"180"',computed:!1},{value:'"270"',computed:!1}]},required:!1},size:{description:"Set the icon size based on FontAwesome usage for size",type:{name:"string"},required:!1},spin:{description:"Set an 8-frame spinning animation on the icon",type:{name:"bool"},required:!1},symbol:{description:"Set an icon as a symbol to use with the SVG Sprites technique",type:{name:"any"},required:!1},transform:{description:"Power transforms to scale and position the icon",type:{name:"any"},required:!1},theme:{description:"Specifies the system design theme.",type:{name:"object"},required:!1},title:{description:"Set an accessabilty title for screen readers.",type:{name:"string"},required:!1}}}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};__webpack_exports__.ZP={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.$_.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.bK.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.cp.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Cg.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.FK.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.eC.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.AF.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.jn.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.YK.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.ui.propNames)}}}]);