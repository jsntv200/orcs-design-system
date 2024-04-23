"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[2228],{"./lib/components/Toggle/Toggle.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Toggle_stories},defaultToggle:function(){return defaultToggle},disabled:function(){return disabled},inverted:function(){return inverted},small:function(){return small}});__webpack_require__("./node_modules/react/index.js");var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),dist_index_esm=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["inverted","id","small","theme","label","checked","disabled","srHide"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Group=styled_components_browser_esm.ZP.div.withConfig({displayName:"Toggle__Group",componentId:"sc-f6l22k-0"})([""," "," display:flex;align-items:center;",";"],index_esm.Dh,index_esm.bK,(function(props){return props.inverted?(0,styled_components_browser_esm.iv)(["input{&:focus{+ label{box-shadow:",";}}}label{&:first-of-type{background:",";}}"],(0,dist_index_esm.R)("shadows.thickOutline")(props)+" "+(0,dist_index_esm.R)("colors.black")(props),(0,dist_index_esm.R)("colors.greyDark")(props)):(0,styled_components_browser_esm.iv)([""])})),Input=styled_components_browser_esm.ZP.input.attrs({type:"checkbox"}).withConfig({displayName:"Toggle__Input",componentId:"sc-f6l22k-1"})(["opacity:0;position:absolute;visibility:",";margin:0;z-index:-1;width:0;height:0;pointer-events:none;&:focus{+ label{box-shadow:",";}}:checked{+ label{background:",";&:after{left:calc(100% - 3px);transform:translateX(-100%);}}&:focus{+ label{box-shadow:",";}}}"],(function(props){return props.srHide?"hidden":"visible"}),(function(props){return(0,dist_index_esm.R)("shadows.thickOutline")(props)+" "+(0,dist_index_esm.R)("colors.black20")(props)}),(function(props){return(0,dist_index_esm.R)("colors.success")(props)}),(function(props){return(0,dist_index_esm.R)("shadows.thinOutline")(props)+" "+(0,dist_index_esm.R)("colors.success30")(props)})),Item=styled_components_browser_esm.ZP.label.withConfig({displayName:"Toggle__Item",componentId:"sc-f6l22k-2"})(["cursor:pointer;flex:0 0 auto;margin:0;display:block;position:relative;transition:",";background:",";width:",";height:",";border-radius:",';&:after{content:"";position:absolute;top:3px;left:3px;background:',";transition:",";width:",";height:",";border-radius:",";}:active{&:after{width:",";}}",";"],(function(props){return(0,dist_index_esm.R)("transition.transitionDefault")(props)}),(function(props){return(0,dist_index_esm.R)("colors.greyDarker")(props)}),(function(props){return props.small?"36px":"44px"}),(function(props){return props.small?"20px":"24px"}),(function(props){return props.small?"10px":"12px"}),(function(props){return(0,dist_index_esm.R)("colors.white")(props)}),(function(props){return(0,dist_index_esm.R)("transition.transitionDefault")(props)}),(function(props){return props.small?"14px":"18px"}),(function(props){return props.small?"14px":"18px"}),(function(props){return props.small?"7px":"9px"}),(function(props){return props.small?"20px":"24px"}),(function(props){return props.disabled?(0,styled_components_browser_esm.iv)(["opacity:0.5;"]):(0,styled_components_browser_esm.iv)([""])})),Label=styled_components_browser_esm.ZP.label.withConfig({displayName:"Toggle__Label",componentId:"sc-f6l22k-3"})(["margin:0;padding-left:8px;cursor:pointer;font-size:",";color:",";"],(function(props){return props.small?(0,dist_index_esm.R)("fontSizes.1")(props):(0,dist_index_esm.R)("fontSizes.2")(props)}),(function(props){return props.disabled?(0,dist_index_esm.R)("colors.grey")(props):props.inverted?(0,dist_index_esm.R)("colors.white")(props):(0,dist_index_esm.R)("colors.greyDarkest")(props)}));function Toggle(_ref){var inverted=_ref.inverted,id=_ref.id,small=_ref.small,theme=_ref.theme,label=_ref.label,checked=_ref.checked,disabled=_ref.disabled,srHide=_ref.srHide,props=(0,objectWithoutProperties.Z)(_ref,_excluded),component=(0,jsx_runtime.jsxs)(Group,{inverted:inverted,children:[(0,jsx_runtime.jsx)(Input,_objectSpread({id:id,checked:checked,disabled:disabled,srHide:srHide},props)),(0,jsx_runtime.jsx)(Item,{htmlFor:id,small:small,disabled:disabled}),(0,jsx_runtime.jsx)(Label,{inverted:inverted,disabled:disabled,htmlFor:id,small:small,children:label})]});return theme?(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:theme,children:component}):component}Toggle.propTypes={id:prop_types_default().string.isRequired,label:prop_types_default().string.isRequired,checked:prop_types_default().bool,inverted:prop_types_default().bool,disabled:prop_types_default().bool,small:prop_types_default().bool,srHide:prop_types_default().bool,theme:prop_types_default().object},Toggle.defaultProps={inverted:!1,small:!1},Toggle.__docgenInfo={description:"`Toggle` should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green).\n\nAs a general rule, the small version should be used in any layout components like `Header`, `Sidebar`, `MobileNav`; whereas the larger one can be used within the page content when required.",methods:[],displayName:"Toggle",props:{inverted:{defaultValue:{value:"false",computed:!1},description:"Changes appearance to suit a dark background.",type:{name:"bool"},required:!1},small:{defaultValue:{value:"false",computed:!1},description:"Makes toggle and label smaller.",type:{name:"bool"},required:!1},id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},label:{description:"Specifies the text for the label.",type:{name:"string"},required:!0},checked:{description:"Specifies whether the `checkbox` for Toggle is on or not.",type:{name:"bool"},required:!1},disabled:{description:"Applies disabled attribute and styles",type:{name:"bool"},required:!1},srHide:{description:"Hides toggle from screen-reader. Only to be used when toggle alters visual presentation, not functional.",type:{name:"bool"},required:!1},theme:{description:"Specifies the theme for component design",type:{name:"object"},required:!1}}},Toggle.__docgenInfo={description:"`Toggle` should be used for when functionality is required to turn something off/on, hide/show or disable/enable. Default is off (left/grey), this works like a checkbox, so clicking or applying a checked attribute with javascript will turn it on (right/green).\n\nAs a general rule, the small version should be used in any layout components like `Header`, `Sidebar`, `MobileNav`; whereas the larger one can be used within the page content when required.",methods:[],displayName:"Toggle",props:{inverted:{defaultValue:{value:"false",computed:!1},description:"Changes appearance to suit a dark background.",type:{name:"bool"},required:!1},small:{defaultValue:{value:"false",computed:!1},description:"Makes toggle and label smaller.",type:{name:"bool"},required:!1},id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},label:{description:"Specifies the text for the label.",type:{name:"string"},required:!0},checked:{description:"Specifies whether the `checkbox` for Toggle is on or not.",type:{name:"bool"},required:!1},disabled:{description:"Applies disabled attribute and styles",type:{name:"bool"},required:!1},srHide:{description:"Hides toggle from screen-reader. Only to be used when toggle alters visual presentation, not functional.",type:{name:"bool"},required:!1},theme:{description:"Specifies the theme for component design",type:{name:"object"},required:!1}}};var Box=__webpack_require__("./lib/components/Box/index.js"),Spacer=__webpack_require__("./lib/components/Spacer/index.js"),Toggle_stories={title:"Components/Toggle",component:Toggle},defaultToggle=function defaultToggle(){return(0,jsx_runtime.jsx)(Toggle,{id:"autosave",label:"Auto save"})};defaultToggle.displayName="defaultToggle",defaultToggle.storyName="Default";var small=function small(){return(0,jsx_runtime.jsx)(Toggle,{id:"autosave2",label:"Auto save",small:!0})};small.displayName="small";var inverted=function inverted(){return(0,jsx_runtime.jsx)(Box.Z,{p:"r",bg:"greyDarkest",children:(0,jsx_runtime.jsxs)(Spacer.Z,{my:"r",children:[(0,jsx_runtime.jsx)(Toggle,{id:"autosave3",label:"Auto save",inverted:!0,small:!0}),(0,jsx_runtime.jsx)(Toggle,{id:"autosave4",label:"Auto save",inverted:!0})]})})};inverted.displayName="inverted";var disabled=function disabled(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Box.Z,{p:"r",children:(0,jsx_runtime.jsxs)(Spacer.Z,{my:"r",children:[(0,jsx_runtime.jsx)(Toggle,{id:"autosave5",label:"Auto save",small:!0,disabled:!0}),(0,jsx_runtime.jsx)(Toggle,{id:"autosave6",label:"Auto save",checked:!0,disabled:!0})]})}),(0,jsx_runtime.jsx)(Box.Z,{p:"r",bg:"greyDarkest",children:(0,jsx_runtime.jsxs)(Spacer.Z,{my:"r",children:[(0,jsx_runtime.jsx)(Toggle,{id:"autosave7",label:"Auto save",inverted:!0,small:!0,disabled:!0}),(0,jsx_runtime.jsx)(Toggle,{id:"autosave8",label:"Auto save",checked:!0,inverted:!0,disabled:!0})]})})]})};defaultToggle.__docgenInfo={description:"",methods:[],displayName:"defaultToggle"},small.__docgenInfo={description:"",methods:[],displayName:"small"},inverted.__docgenInfo={description:"",methods:[],displayName:"inverted"},disabled.__docgenInfo={description:"",methods:[],displayName:"disabled"},defaultToggle.parameters={...defaultToggle.parameters,docs:{...defaultToggle.parameters?.docs,source:{originalSource:'() => <Toggle id="autosave" label="Auto save" />',...defaultToggle.parameters?.docs?.source}}},small.parameters={...small.parameters,docs:{...small.parameters?.docs,source:{originalSource:'() => <Toggle id="autosave2" label="Auto save" small />',...small.parameters?.docs?.source}}},inverted.parameters={...inverted.parameters,docs:{...inverted.parameters?.docs,source:{originalSource:'() => <Box p="r" bg="greyDarkest">\n    <Spacer my="r">\n      <Toggle id="autosave3" label="Auto save" inverted small />\n      <Toggle id="autosave4" label="Auto save" inverted />\n    </Spacer>\n  </Box>',...inverted.parameters?.docs?.source}}},disabled.parameters={...disabled.parameters,docs:{...disabled.parameters?.docs,source:{originalSource:'() => <>\n    <Box p="r">\n      <Spacer my="r">\n        <Toggle id="autosave5" label="Auto save" small disabled />\n        <Toggle id="autosave6" label="Auto save" checked disabled />\n      </Spacer>\n    </Box>\n    <Box p="r" bg="greyDarkest">\n      <Spacer my="r">\n        <Toggle id="autosave7" label="Auto save" inverted small disabled />\n        <Toggle id="autosave8" label="Auto save" checked inverted disabled />\n      </Spacer>\n    </Box>\n  </>',...disabled.parameters?.docs?.source}}};const __namedExportsOrder=["defaultToggle","small","inverted","disabled"]},"./lib/components/Box/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme","dataTestId"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cg),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((function(props){return{"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null}}))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(function(props){return(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.greyLighter")(props)}}})}),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref,ref){var children=_ref.children,theme=_ref.theme,dataTestId=_ref.dataTestId,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BoxWrapper,_objectSpread(_objectSpread({ref:ref,dataTestId:dataTestId},props),{},{children:children}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}},__webpack_exports__.Z=Box,Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_9___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/Spacer/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var SpacerBox=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div.withConfig({displayName:"Spacer__SpacerBox",componentId:"sc-1acikjz-0"})([""," "," line-height:0;"],styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK),Spacer=function Spacer(_ref){var children=_ref.children,theme=_ref.theme,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),clones=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).map((function(child,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SpacerBox,_objectSpread(_objectSpread({},props),{},{children:react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child)}),index)}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_5__.f6,{theme:theme,children:clones}):clones};Spacer.propTypes=_objectSpread(_objectSpread({},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.space),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_3__.ZP.layout),Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]},__webpack_exports__.Z=Spacer,Spacer.__docgenInfo={description:"",methods:[],displayName:"Spacer",composes:["@styled-system/prop-types"]}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};__webpack_exports__.ZP={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.$_.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.bK.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.cp.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Cg.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.FK.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.eC.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.AF.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.jn.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.YK.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.ui.propNames)}}}]);