"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[2465],{"./lib/components/Box/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme","dataTestId"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cg),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((function(props){return{"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null}}))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(function(props){return(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.greyLighter")(props)}}})}),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref,ref){var children=_ref.children,theme=_ref.theme,dataTestId=_ref.dataTestId,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BoxWrapper,_objectSpread(_objectSpread({ref:ref,dataTestId:dataTestId},props),{},{children:children}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}},__webpack_exports__.Z=Box,Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_9___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/ButtonGroup/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return ButtonGroupContainer},r:function(){return ButtonGroupItem}});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),styled_components__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),_Flex___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./lib/components/Flex/index.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme","controlLabel","labelDark"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ButtonGroupControlLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)("div").withConfig({displayName:"ButtonGroup__ButtonGroupControlLabel",componentId:"sc-g7627n-0"})((function(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_5__.iv)({color:props.labelDark?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.greyDark"):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.white")(props),fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("fontSizes.1")(props),fontWeight:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("fontWeights.1")(props),marginRight:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("space.3")(props)})})),ButtonGroupWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)("div").withConfig({displayName:"ButtonGroup__ButtonGroupWrapper",componentId:"sc-g7627n-1"})((function(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_5__.iv)({display:"flex",alignItems:"center",background:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.greyDarker")(props),borderRadius:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("radii.2")(props),padding:"4px",height:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("appScale.inputHeightDefault")(props)})})),ButtonGroupRadio=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.input.attrs({type:"radio"}).withConfig({displayName:"ButtonGroup__ButtonGroupRadio",componentId:"sc-g7627n-2"})((function(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_5__.iv)({opacity:"0",position:"absolute",margin:"0",zIndex:"-1",width:"0",height:"0",overflow:"hidden",pointerEvents:"none","&:checked + label":{cursor:"default",color:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.greyDarker")(props),backgroundColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.white")(props),"&:hover":{backgroundColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.white")(props)}}})})),ButtonGroupLabel=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)("label").withConfig({displayName:"ButtonGroup__ButtonGroupLabel",componentId:"sc-g7627n-3"})((function(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_5__.iv)({height:"100%",borderRadius:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("radii.2")(props),display:"flex",alignItems:"center",padding:"0 ".concat((0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("space.3")(props)),transition:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("transition.transitionDefault")(props),fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("fontSizes.1")(props),fontWeight:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("fontWeights.2")(props),cursor:props.checked?"default":"pointer",color:props.checked?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.greyDarker")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.white")(props),backgroundColor:props.checked?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.white")(props):"#5e686d","&:hover":{backgroundColor:props.checked?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.white")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__.R)("colors.primary")(props)},"&:not(:last-of-type)":{marginRight:"4px"}})})),ButtonGroupContainer=function ButtonGroupContainer(_ref){var children=_ref.children,theme=_ref.theme,controlLabel=_ref.controlLabel,labelDark=_ref.labelDark,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_6__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Flex___WEBPACK_IMPORTED_MODULE_7__.Z,_objectSpread(_objectSpread({alignItems:"center"},props),{},{children:[controlLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonGroupControlLabel,{labelDark:labelDark,children:controlLabel}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonGroupWrapper,{children:children})]}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.f6,{theme:theme,children:component}):component},ButtonGroupItem=function ButtonGroupItem(_ref2){var label=_ref2.label,name=_ref2.name,value=_ref2.value,checked=_ref2.checked,onChange=_ref2.onChange,theme=_ref2.theme,component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonGroupRadio,{id:label,name:name,value:value,checked:checked,onChange:onChange}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonGroupLabel,{checked:checked,htmlFor:label,children:label})]});return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.f6,{theme:theme,children:component}):component};ButtonGroupContainer.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_8___default().node,controlLabel:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,labelDark:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,theme:prop_types__WEBPACK_IMPORTED_MODULE_8___default().object},ButtonGroupItem.propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,value:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,checked:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_8___default().func,theme:prop_types__WEBPACK_IMPORTED_MODULE_8___default().object},ButtonGroupContainer.__docgenInfo={description:"To do: look at renaming this to ButtonGroup, add a container component that can accept space and layout props",methods:[],displayName:"ButtonGroupContainer",props:{children:{description:"",type:{name:"node"},required:!1},controlLabel:{description:"",type:{name:"string"},required:!1},labelDark:{description:"",type:{name:"bool"},required:!1},theme:{description:"",type:{name:"object"},required:!1}}},ButtonGroupItem.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{label:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},checked:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},theme:{description:"",type:{name:"object"},required:!1}}},ButtonGroupContainer.__docgenInfo={description:"To do: look at renaming this to ButtonGroup, add a container component that can accept space and layout props",methods:[],displayName:"ButtonGroupContainer",props:{children:{description:"",type:{name:"node"},required:!1},controlLabel:{description:"",type:{name:"string"},required:!1},labelDark:{description:"",type:{name:"bool"},required:!1},theme:{description:"",type:{name:"object"},required:!1}}},ButtonGroupItem.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{label:{description:"",type:{name:"string"},required:!1},name:{description:"",type:{name:"string"},required:!1},value:{description:"",type:{name:"string"},required:!1},checked:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},theme:{description:"",type:{name:"object"},required:!1}}}},"./lib/components/Flex/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return FlexItem},Z:function(){return Flex}});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var FlexStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.GQ),FlexWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"Flex__FlexWrapper",componentId:"sc-1f3kfw7-0"}).attrs((function(props){return{"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null}}))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({boxSizing:"border-box"}),FlexStyles),FlexItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({displayName:"Flex__FlexItem",componentId:"sc-1f3kfw7-1"})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({boxSizing:"border-box"}),FlexStyles);function Flex(_ref){var children=_ref.children,theme=_ref.theme,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FlexWrapper,_objectSpread(_objectSpread({},props),{},{children:children}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FlexWrapper,_objectSpread(_objectSpread({},props),{},{children:children}))}):theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}Flex.propTypes=_objectSpread(_objectSpread(_objectSpread({children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,theme:prop_types__WEBPACK_IMPORTED_MODULE_9___default().object},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.space),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.layout),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.flexbox),Flex.defaultProps={display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"stretch"},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};__webpack_exports__.ZP={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.$_.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.bK.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.cp.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Cg.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.FK.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.eC.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.AF.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.jn.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.YK.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.ui.propNames)}}}]);