"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[9951],{"./lib/components/Box/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme","dataTestId"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cg),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((function(props){return{"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null}}))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(function(props){return(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.greyLighter")(props)}}})}),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref,ref){var children=_ref.children,theme=_ref.theme,dataTestId=_ref.dataTestId,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BoxWrapper,_objectSpread(_objectSpread({ref:ref,dataTestId:dataTestId},props),{},{children:children}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}},__webpack_exports__.Z=Box,Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_9___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/TextArea/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var WrapperStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK),LabelStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.cp,styled_system__WEBPACK_IMPORTED_MODULE_2__.$_),InputStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.cp,styled_system__WEBPACK_IMPORTED_MODULE_2__.$_),Wrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"TextArea__Wrapper",componentId:"sc-1oyenoa-0"})((function(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({position:"relative",width:props.fullWidth?"100%":"auto"})}),WrapperStyles),Input=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("textarea").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"TextArea__Input",componentId:"sc-1oyenoa-1"}).attrs((function(props){return{"data-testid":props["data-testid"]?props["data-testid"]:null}}))((function(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({display:"block",cursor:"text",appearance:"none",boxShadow:"none",fontFamily:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("fonts.main")(props),fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("fontSizes.2")(props),zIndex:"1",borderRadius:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("radii.2")(props),transition:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("transition.transitionDefault")(props),background:props.disabled?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.greyLightest")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.white")(props),color:props.disabled?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.grey")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.greyDarkest")(props),width:props.fullWidth?"100%":"auto",padding:"between",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("borderWidths.1")(props),borderStyle:"solid",borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.dangerLight")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.successLight")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.black30")(props),"&:hover":{borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.dangerDark")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.successDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.primary")(props)},"&:focus":{outline:"0",boxShadow:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.danger30")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.success30")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("shadows.thickOutline")(props)+" "+(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.primary30")(props),borderColor:props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.dangerDark")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.successDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.primary")(props)}})}),InputStyles),Label=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("label").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"TextArea__Label",componentId:"sc-1oyenoa-2"})((function(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({display:"block",zIndex:"2",textAlign:"left",fontSize:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("fontSizes.1")(props),fontWeight:props.bold?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("fontWeights.2")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("fontWeights.1")(props),transition:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("transition.transitionDefault")(props),mb:props.floating?0:"xs",span:{color:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.danger")(props),fontWeight:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("fontWeights.2")(props)},color:props.inverted?props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.successLightest")(props):props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.dangerLightest")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.white")(props):props.valid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.successDark")(props):props.invalid?(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.dangerDark")(props):(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.greyDarkest")(props)})}),LabelStyles),Asterisk=function Asterisk(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:" *"})};Asterisk.displayName="Asterisk";var TextArea=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){var inverted=props.inverted,id=props.id,value=props.value,disabled=props.disabled,label=props.label,invalid=props.invalid,valid=props.valid,fullWidth=props.fullWidth,mandatory=props.mandatory,bold=props.bold,cols=props.cols,rows=props.rows,onChange=props.onChange,defaultValue=props.defaultValue,autoFocus=props.autoFocus,theme=props.theme,WrapperStyles=props.WrapperStyles,LabelStyles=props.LabelStyles,ariaLabel=props.ariaLabel,InputStyles=props.InputStyles,component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Wrapper,_objectSpread(_objectSpread({fullWidth:fullWidth},WrapperStyles),{},{children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Label,_objectSpread(_objectSpread({inverted:inverted,invalid:invalid,valid:valid,htmlFor:id,mandatory:mandatory,bold:bold},LabelStyles),{},{children:[label," ",mandatory&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Asterisk,{})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input,_objectSpread(_objectSpread({ref:ref,id:id,fullWidth:fullWidth,cols:cols,disabled:disabled,rows:rows,autoFocus:autoFocus,valid:valid,invalid:invalid,onChange:onChange,"data-testid":props["data-testid"],defaultValue:defaultValue,"aria-label":ariaLabel},InputStyles),{},{children:value}))]}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}));TextArea.propTypes={id:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,label:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,ariaLabel:function ariaLabel(props,propName){return props.label||null!=props[propName]&&""!==props[propName]?props[propName]&&"string"!=typeof props[propName]?new Error("Invalid propType `".concat(propName,"` supplied to TextArea component. Expected `string`, received `").concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__.Z)(props[propName]),"`.")):null:new Error("Missing prop `".concat(propName,"` not specified for TextArea component. When `label` is not provided, `").concat(propName,"` is required."))},bold:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,fullWidth:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,cols:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,rows:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,invalid:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,valid:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,mandatory:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,inverted:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,WrapperStyles:prop_types__WEBPACK_IMPORTED_MODULE_8___default().object,LabelStyles:prop_types__WEBPACK_IMPORTED_MODULE_8___default().object,InputStyles:prop_types__WEBPACK_IMPORTED_MODULE_8___default().object,"data-testid":prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,autoFocus:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,onChange:prop_types__WEBPACK_IMPORTED_MODULE_8___default().func,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_8___default().object},TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},value:{description:"Use value to specify text in text area.",type:{name:"string"},required:!1},label:{description:"Specifies the text for the TextArea label.",type:{name:"string"},required:!1},ariaLabel:{description:"Specifies aria-label for TextArea. This is only required if not using the label prop.",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for TextArea component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to TextArea component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},bold:{description:"Set the label text to bold font-weight.",type:{name:"bool"},required:!1},disabled:{description:"Sets disabled attribute and styling",type:{name:"bool"},required:!1},fullWidth:{description:"Makes text box take up full width of parent",type:{name:"bool"},required:!1},cols:{description:"Sets specified width of input area in columns",type:{name:"string"},required:!1},rows:{description:"Sets specified height of input area in rows",type:{name:"string"},required:!1},invalid:{description:'Applies invalid styles (coloured with "warning" colour from design system)',type:{name:"bool"},required:!1},valid:{description:'Applies valid styles (coloured with "success" colour from design system)',type:{name:"bool"},required:!1},mandatory:{description:"Shows asterisk to denote a mandatory field",type:{name:"bool"},required:!1},inverted:{description:"Set inverted styling for dark backgrounds",type:{name:"bool"},required:!1},WrapperStyles:{description:"Set additional styles for the `Wrapper` if needed",type:{name:"object"},required:!1},LabelStyles:{description:"Set additional styles for the `Label` if needed",type:{name:"object"},required:!1},InputStyles:{description:"Set additional styles for the `Input` textarea if needed",type:{name:"object"},required:!1},"data-testid":{description:"Specifies `data-testid` for testing",type:{name:"string"},required:!1},autoFocus:{description:"Specifies whether TextArea should automatically get focus",type:{name:"bool"},required:!1},onChange:{description:"Specifies `onChange` function",type:{name:"func"},required:!1},defaultValue:{description:"Specifies `textarea` default value (different from placeholder)",type:{name:"string"},required:!1},theme:{description:"Specifies the design theme object",type:{name:"object"},required:!1}}},__webpack_exports__.Z=TextArea,TextArea.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{description:"Must be used to specify a unique ID.",type:{name:"string"},required:!0},value:{description:"Use value to specify text in text area.",type:{name:"string"},required:!1},label:{description:"Specifies the text for the TextArea label.",type:{name:"string"},required:!1},ariaLabel:{description:"Specifies aria-label for TextArea. This is only required if not using the label prop.",type:{name:"custom",raw:'(props, propName) => {\n  if (!props.label && (props[propName] == null || props[propName] === "")) {\n    return new Error(\n      `Missing prop \\`${propName}\\` not specified for TextArea component. When \\`label\\` is not provided, \\`${propName}\\` is required.`\n    );\n  }\n  if (props[propName] && typeof props[propName] !== "string") {\n    return new Error(\n      `Invalid propType \\`${propName}\\` supplied to TextArea component. Expected \\`string\\`, received \\`${typeof props[\n        propName\n      ]}\\`.`\n    );\n  }\n  return null;\n}'},required:!1},bold:{description:"Set the label text to bold font-weight.",type:{name:"bool"},required:!1},disabled:{description:"Sets disabled attribute and styling",type:{name:"bool"},required:!1},fullWidth:{description:"Makes text box take up full width of parent",type:{name:"bool"},required:!1},cols:{description:"Sets specified width of input area in columns",type:{name:"string"},required:!1},rows:{description:"Sets specified height of input area in rows",type:{name:"string"},required:!1},invalid:{description:'Applies invalid styles (coloured with "warning" colour from design system)',type:{name:"bool"},required:!1},valid:{description:'Applies valid styles (coloured with "success" colour from design system)',type:{name:"bool"},required:!1},mandatory:{description:"Shows asterisk to denote a mandatory field",type:{name:"bool"},required:!1},inverted:{description:"Set inverted styling for dark backgrounds",type:{name:"bool"},required:!1},WrapperStyles:{description:"Set additional styles for the `Wrapper` if needed",type:{name:"object"},required:!1},LabelStyles:{description:"Set additional styles for the `Label` if needed",type:{name:"object"},required:!1},InputStyles:{description:"Set additional styles for the `Input` textarea if needed",type:{name:"object"},required:!1},"data-testid":{description:"Specifies `data-testid` for testing",type:{name:"string"},required:!1},autoFocus:{description:"Specifies whether TextArea should automatically get focus",type:{name:"bool"},required:!1},onChange:{description:"Specifies `onChange` function",type:{name:"func"},required:!1},defaultValue:{description:"Specifies `textarea` default value (different from placeholder)",type:{name:"string"},required:!1},theme:{description:"Specifies the design theme object",type:{name:"object"},required:!1}}}}}]);