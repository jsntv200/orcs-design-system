"use strict";(self.webpackChunkorcs_design_system=self.webpackChunkorcs_design_system||[]).push([[5919],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{GA:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.GA},VZ:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.VZ},Xz:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz},ZX:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ZX},c6:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.c6},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./lib/Colour.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return Colour_stories}});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),systemtheme=__webpack_require__("./lib/systemtheme.js"),Flex=__webpack_require__("./lib/components/Flex/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),index_esm=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),dist_index_esm=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),assets_Colour=(0,styled_components_browser_esm.ZP)("div").withConfig({shouldForwardProp:dist_index_esm.ZP,displayName:"Colour",componentId:"sc-uyvdow-0"})((function(props){return(0,styled_components_browser_esm.iv)({backgroundColor:(0,index_esm.R)("colors.".concat(props.bg))(props),width:"75px",height:"75px"})})),Box=__webpack_require__("./lib/components/Box/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",h3:"h3"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"System/Colour"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"colour",children:"Colour"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["These are the colours used throughout the design system, defined in ",(0,jsx_runtime.jsx)(_components.code,{children:"systemtheme"}),". They can be referenced using the ",(0,jsx_runtime.jsx)(_components.code,{children:"color"})," prop for components that accept this prop, or through referencing the theme object."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"main-palette",children:"Main palette"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<ColorPalette><ColorItem title="Greyscale" subtitle="Greyscale theme colours" colors={[colors.black, colors.greyDarkest, colors.greyDarker, colors.greyDark, colors.grey, colors.greyLight, colors.greyLighter, colors.greyLightest, colors.white]} /><ColorItem title="Primary" subtitle="Main theme colour" colors={[colors.primaryDarkest, colors.primaryDarker, colors.primaryDark, colors.primary, colors.primaryLight, colors.primaryLighter, colors.primaryLightest]} /><ColorItem title="Secondary" subtitle="Secondary theme colour" colors={[colors.secondaryDarkest, colors.secondaryDarker, colors.secondaryDark, colors.secondary, colors.secondaryLight, colors.secondaryLighter, colors.secondaryLightest]} /><ColorItem title="Success" subtitle="Success indicator colour" colors={[colors.successDarkest, colors.successDarker, colors.successDark, colors.success, colors.successLight, colors.successLighter, colors.successLightest]} /><ColorItem title="Warning" subtitle="Warning indicator colour" colors={[colors.warningDarkest, colors.warningDarker, colors.warningDark, colors.warning, colors.warningLight, colors.warningLighter, colors.warningLightest]} /><ColorItem title="Danger" subtitle="Danger indicator colour" colors={[colors.dangerDarkest, colors.dangerDarker, colors.dangerDark, colors.danger, colors.dangerLight, colors.dangerLighter, colors.dangerLightest]} /></ColorPalette>',children:(0,jsx_runtime.jsxs)(dist.VZ,{children:[(0,jsx_runtime.jsx)(dist.c6,{title:"Greyscale",subtitle:"Greyscale theme colours",colors:[systemtheme.O9.black,systemtheme.O9.greyDarkest,systemtheme.O9.greyDarker,systemtheme.O9.greyDark,systemtheme.O9.grey,systemtheme.O9.greyLight,systemtheme.O9.greyLighter,systemtheme.O9.greyLightest,systemtheme.O9.white]}),(0,jsx_runtime.jsx)(dist.c6,{title:"Primary",subtitle:"Main theme colour",colors:[systemtheme.O9.primaryDarkest,systemtheme.O9.primaryDarker,systemtheme.O9.primaryDark,systemtheme.O9.primary,systemtheme.O9.primaryLight,systemtheme.O9.primaryLighter,systemtheme.O9.primaryLightest]}),(0,jsx_runtime.jsx)(dist.c6,{title:"Secondary",subtitle:"Secondary theme colour",colors:[systemtheme.O9.secondaryDarkest,systemtheme.O9.secondaryDarker,systemtheme.O9.secondaryDark,systemtheme.O9.secondary,systemtheme.O9.secondaryLight,systemtheme.O9.secondaryLighter,systemtheme.O9.secondaryLightest]}),(0,jsx_runtime.jsx)(dist.c6,{title:"Success",subtitle:"Success indicator colour",colors:[systemtheme.O9.successDarkest,systemtheme.O9.successDarker,systemtheme.O9.successDark,systemtheme.O9.success,systemtheme.O9.successLight,systemtheme.O9.successLighter,systemtheme.O9.successLightest]}),(0,jsx_runtime.jsx)(dist.c6,{title:"Warning",subtitle:"Warning indicator colour",colors:[systemtheme.O9.warningDarkest,systemtheme.O9.warningDarker,systemtheme.O9.warningDark,systemtheme.O9.warning,systemtheme.O9.warningLight,systemtheme.O9.warningLighter,systemtheme.O9.warningLightest]}),(0,jsx_runtime.jsx)(dist.c6,{title:"Danger",subtitle:"Danger indicator colour",colors:[systemtheme.O9.dangerDarkest,systemtheme.O9.dangerDarker,systemtheme.O9.dangerDark,systemtheme.O9.danger,systemtheme.O9.dangerLight,systemtheme.O9.dangerLighter,systemtheme.O9.dangerLightest]})]})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"monochrome-opacities",children:"Monochrome opacities"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For black and white colours at different opacities, use the following scales."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"black-opacity-scale",children:"Black opacity scale"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<Flex justifyContent="center"><Colour bg="black" /><Colour bg="black90" /><Colour bg="black80" /><Colour bg="black70" /><Colour bg="black60" /><Colour bg="black50" /><Colour bg="black40" /><Colour bg="black30" /><Colour bg="black20" /><Colour bg="black10" /></Flex>',children:(0,jsx_runtime.jsxs)(Flex.Z,{justifyContent:"center",children:[(0,jsx_runtime.jsx)(assets_Colour,{bg:"black"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black90"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black80"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black70"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black60"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black50"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black40"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black30"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black20"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"black10"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"white-opacity-scale",children:"White opacity scale"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<Box bg="greyDarkest" padding="6"><Flex justifyContent="center"><Colour bg="white" /><Colour bg="white90" /><Colour bg="white80" /><Colour bg="white70" /><Colour bg="white60" /><Colour bg="white50" /><Colour bg="white40" /><Colour bg="white30" /><Colour bg="white20" /><Colour bg="white10" /></Flex></Box>',children:(0,jsx_runtime.jsx)(Box.Z,{bg:"greyDarkest",padding:"6",children:(0,jsx_runtime.jsxs)(Flex.Z,{justifyContent:"center",children:[(0,jsx_runtime.jsx)(assets_Colour,{bg:"white"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white90"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white80"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white70"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white60"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white50"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white40"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white30"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white20"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"white10"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"coloured-opacities",children:"Coloured opacities"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"primary-opacity-scale",children:"Primary opacity scale"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<Flex justifyContent="center"><Colour bg="primary" /><Colour bg="primary90" /><Colour bg="primary80" /><Colour bg="primary70" /><Colour bg="primary60" /><Colour bg="primary50" /><Colour bg="primary40" /><Colour bg="primary30" /><Colour bg="primary20" /><Colour bg="primary10" /></Flex>',children:(0,jsx_runtime.jsxs)(Flex.Z,{justifyContent:"center",children:[(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary90"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary80"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary70"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary60"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary50"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary40"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary30"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary20"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"primary10"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"secondary-opacity-scale",children:"Secondary opacity scale"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<Flex justifyContent="center"><Colour bg="secondary" /><Colour bg="secondary90" /><Colour bg="secondary80" /><Colour bg="secondary70" /><Colour bg="secondary60" /><Colour bg="secondary50" /><Colour bg="secondary40" /><Colour bg="secondary30" /><Colour bg="secondary20" /><Colour bg="secondary10" /></Flex>',children:(0,jsx_runtime.jsxs)(Flex.Z,{justifyContent:"center",children:[(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary90"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary80"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary70"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary60"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary50"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary40"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary30"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary20"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"secondary10"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"success-opacity-scale",children:"Success opacity scale"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<Flex justifyContent="center"><Colour bg="success" /><Colour bg="success90" /><Colour bg="success80" /><Colour bg="success70" /><Colour bg="success60" /><Colour bg="success50" /><Colour bg="success40" /><Colour bg="success30" /><Colour bg="success20" /><Colour bg="success10" /></Flex>',children:(0,jsx_runtime.jsxs)(Flex.Z,{justifyContent:"center",children:[(0,jsx_runtime.jsx)(assets_Colour,{bg:"success"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success90"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success80"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success70"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success60"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success50"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success40"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success30"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success20"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"success10"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"warning-opacity-scale",children:"Warning opacity scale"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<Flex justifyContent="center"><Colour bg="warning" /><Colour bg="warning90" /><Colour bg="warning80" /><Colour bg="warning70" /><Colour bg="warning60" /><Colour bg="warning50" /><Colour bg="warning40" /><Colour bg="warning30" /><Colour bg="warning20" /><Colour bg="warning10" /></Flex>',children:(0,jsx_runtime.jsxs)(Flex.Z,{justifyContent:"center",children:[(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning90"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning80"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning70"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning60"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning50"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning40"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning30"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning20"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"warning10"})]})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"danger-opacity-scale",children:"Danger opacity scale"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<Flex justifyContent="center"><Colour bg="danger" /><Colour bg="danger90" /><Colour bg="danger80" /><Colour bg="danger70" /><Colour bg="danger60" /><Colour bg="danger50" /><Colour bg="danger40" /><Colour bg="danger30" /><Colour bg="danger20" /><Colour bg="danger10" /></Flex>',children:(0,jsx_runtime.jsxs)(Flex.Z,{justifyContent:"center",children:[(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger90"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger80"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger70"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger60"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger50"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger40"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger30"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger20"}),(0,jsx_runtime.jsx)(assets_Colour,{bg:"danger10"})]})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"System/Colour",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};var Colour_stories=componentMeta;const __namedExportsOrder=["__page"]},"./lib/components/Box/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme","dataTestId"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var boxStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.$_,styled_system__WEBPACK_IMPORTED_MODULE_2__.Cg),BoxWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"Box__BoxWrapper",componentId:"sc-jr1api-0"}).attrs((function(props){return{"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null}}))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({width:"auto",display:"block",overflow:"visible"}),(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"shadow",variants:{default:{boxShadow:"boxDefault"}}}),(function(props){return(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.bU)({prop:"boxBorder",variants:{default:{borderStyle:"solid",borderWidth:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("borderWidths.1")(props),borderColor:(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_4__.R)("colors.greyLighter")(props)}}})}),boxStyles),Box=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref,ref){var children=_ref.children,theme=_ref.theme,dataTestId=_ref.dataTestId,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BoxWrapper,_objectSpread(_objectSpread({ref:ref,dataTestId:dataTestId},props),{},{children:children}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}));Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}},__webpack_exports__.Z=Box,Box.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,display:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["inline","block","contents","inline-block","none","initial","inherit"]),overflow:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["visible","hidden","scroll","auto"]),p:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),m:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().number,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),bg:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,width:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),height:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().array,prop_types__WEBPACK_IMPORTED_MODULE_9___default().string]),dataTestId:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,theme:prop_types__WEBPACK_IMPORTED_MODULE_9___default().object},Box.defaultProps={bg:"transparent"},Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{bg:{defaultValue:{value:'"transparent"',computed:!1},description:"Sets the background colour of the box.",type:{name:"string"},required:!1},children:{description:"Children of `Box` are taken as node elements",type:{name:"node"},required:!1},display:{description:"Sets `Box` display mode. Default is `block`.",type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"block"',computed:!1},{value:'"contents"',computed:!1},{value:'"inline-block"',computed:!1},{value:'"none"',computed:!1},{value:'"initial"',computed:!1},{value:'"inherit"',computed:!1}]},required:!1},overflow:{description:"Sets behaviour of elements in `Box` that are larger than their container. Default is `visible`.",type:{name:"enum",value:[{value:'"visible"',computed:!1},{value:'"hidden"',computed:!1},{value:'"scroll"',computed:!1},{value:'"auto"',computed:!1}]},required:!1},p:{description:"Sets the inner padding on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},m:{description:"Sets the outer margin on all four sides. Takes values from the `space` array in `systemtheme.js`.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},width:{description:"Sets the width of the box.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},height:{description:"Sets the height of the box. Default is `auto`.",type:{name:"union",value:[{name:"array"},{name:"string"}]},required:!1},dataTestId:{description:"Specifies the `data-testid` attribute for testing.",type:{name:"string"},required:!1},theme:{description:"Specifies the colour theme",type:{name:"object"},required:!1}}}},"./lib/components/Flex/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return FlexItem},Z:function(){return Flex}});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@styled-system/prop-types/dist/index.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","theme"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var FlexStyles=(0,styled_system__WEBPACK_IMPORTED_MODULE_2__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_2__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_2__.bK,styled_system__WEBPACK_IMPORTED_MODULE_2__.GQ),FlexWrapper=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_3__.ZP,displayName:"Flex__FlexWrapper",componentId:"sc-1f3kfw7-0"}).attrs((function(props){return{"data-testid":props.dataTestId?props.dataTestId:props["data-testid"]?props["data-testid"]:null}}))((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({boxSizing:"border-box"}),FlexStyles),FlexItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP)("div").withConfig({displayName:"Flex__FlexItem",componentId:"sc-1f3kfw7-1"})((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_7__.iv)({boxSizing:"border-box"}),FlexStyles);function Flex(_ref){var children=_ref.children,theme=_ref.theme,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__.Z)(_ref,_excluded),component=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FlexWrapper,_objectSpread(_objectSpread({},props),{},{children:children}));return theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(FlexWrapper,_objectSpread(_objectSpread({},props),{},{children:children}))}):theme?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_6__.f6,{theme:theme,children:component}):component}Flex.propTypes=_objectSpread(_objectSpread(_objectSpread({children:prop_types__WEBPACK_IMPORTED_MODULE_9___default().node,theme:prop_types__WEBPACK_IMPORTED_MODULE_9___default().object},_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.space),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.layout),_styled_system_prop_types__WEBPACK_IMPORTED_MODULE_4__.ZP.flexbox),Flex.defaultProps={display:"flex",flexDirection:"row",flexWrap:"nowrap",justifyContent:"flex-start",alignItems:"stretch"},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{display:{defaultValue:{value:'"flex"',computed:!1},required:!1},flexDirection:{defaultValue:{value:'"row"',computed:!1},required:!1},flexWrap:{defaultValue:{value:'"nowrap"',computed:!1},required:!1},justifyContent:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},alignItems:{defaultValue:{value:'"stretch"',computed:!1},required:!1},children:{description:"Children of `Flex` are taken as node elements",type:{name:"node"},required:!1},theme:{description:"",type:{name:"object"},required:!1}},composes:["@styled-system/prop-types"]}},"./node_modules/@styled-system/prop-types/dist/index.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var propType=prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().array,prop_types__WEBPACK_IMPORTED_MODULE_1___default().object]),createPropTypes=function createPropTypes(props){return props.reduce((function(acc,name){var _extends2;return _extends({},acc,((_extends2={})[name]=propType,_extends2))}),{})};__webpack_exports__.ZP={space:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Dh.propNames),color:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.$_.propNames),layout:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.bK.propNames),typography:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.cp.propNames),flexbox:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.GQ.propNames),border:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Cg.propNames),background:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.Oq.propNames),position:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.FK.propNames),grid:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.eC.propNames),shadow:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.AF.propNames),buttonStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.jn.propNames),textStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.YK.propNames),colorStyle:createPropTypes(styled_system__WEBPACK_IMPORTED_MODULE_0__.ui.propNames)}}}]);