"use strict";(self.webpackChunk_easypizi_storybook=self.webpackChunk_easypizi_storybook||[]).push([[438],{"../../libs/ui/src/components/Popover/__stories__/index.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{Playground:()=>a,__namedExportsOrder:()=>b,default:()=>p});var n=r("../../libs/ui/src/components/Popover/index.ts"),o=r("../../../node_modules/react/jsx-runtime.js"),s=r("../../../node_modules/react/index.js"),i=r("../../libs/ui/src/components/inputs/index.ts"),c=r("../../libs/ui/src/components/Button/index.tsx");let l=e=>{let{value:t,onSave:r,onCancel:l}=e,[u,a]=(0,s.useState)(t);return(0,o.jsxs)("div",{children:[(0,o.jsx)(i.ks,{placeholder:"Value",fullWidth:!0,value:u,onChangeText:a}),(0,o.jsxs)(n.j,{children:[(0,o.jsx)(c.$,{size:"xs",color:"base",onClick:l,children:"Cancel"}),(0,o.jsx)(c.$,{size:"xs",onClick:()=>r(u),children:"Accept"})]})]})},u=e=>{let[t,r]=(0,s.useState)(!1),[i,c]=(0,s.useState)("Example Popover"),u=(0,s.useMemo)(()=>(0,o.jsx)(l,{value:i,onSave:e=>{c(e),r(!1)},onCancel:()=>r(!1)}),[i]);return(0,o.jsx)("div",{style:{padding:"140px"},children:(0,o.jsx)(n.A,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,o,s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}({},e),{content:u,isOpen:t,isOpenChange:r,width:"320px",children:(0,o.jsx)("button",{type:"button",children:i})}))})};u.args={title:"Popover title",arrow:!0};let a=u.bind({});a.args=u.args;let p={component:n.A,title:"UI/Feedback/Popover"},b=["Playground"]}}]);