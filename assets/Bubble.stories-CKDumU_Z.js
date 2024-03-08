import{a as u,j as a}from"./jsx-runtime-WuQMLw89.js";import{B as r}from"./Bubble-DtPyQcLp.js";import{m as p}from"./modifyVariantsForStory-D3vOGtQO.js";import{F as c}from"./Flex-Dyi1HvDT.js";import"./index-Dl6G-zuu.js";import"./stitches.config-CKE6G7UO.js";const g=e=>a(r,{...e}),B=p(g),F={title:"Components/Bubble",component:B},s=e=>u(c,{css:{gap:"$3"},children:[a(r,{...e,variant:"red"}),a(r,{...e,variant:"green"}),a(r,{...e,variant:"orange"}),a(r,{...e,variant:"blue"}),a(r,{...e,variant:"yellow"}),a(r,{...e,variant:"purple"}),a(r,{...e,variant:"gray"})]});s.args={size:"small",noAnimation:!1};s.argTypes={size:{control:"inline-radio",options:["x-small","small","medium","large","x-large"]},variant:{control:!0}};const n=e=>u(c,{css:{gap:"$3",alignItems:"center"},children:[a(r,{...e,size:"x-small"}),a(r,{...e,size:"small"}),a(r,{...e,size:"medium"}),a(r,{...e,size:"large"}),a(r,{...e,size:"x-large"})]});n.args={variant:"purple"};n.argTypes={size:{control:!1,noAnimation:!1},variant:{control:"select"}};var l,o,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Flex css={{
  gap: '$3'
}}>
    <Bubble {...args} variant="red" />
    <Bubble {...args} variant="green" />
    <Bubble {...args} variant="orange" />
    <Bubble {...args} variant="blue" />
    <Bubble {...args} variant="yellow" />
    <Bubble {...args} variant="purple" />
    <Bubble {...args} variant="gray" />
  </Flex>`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var t,m,b;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`args => <Flex css={{
  gap: '$3',
  alignItems: 'center'
}}>
    <Bubble {...args} size="x-small" />
    <Bubble {...args} size="small" />
    <Bubble {...args} size="medium" />
    <Bubble {...args} size="large" />
    <Bubble {...args} size="x-large" />
  </Flex>`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const S=["Colors","Sizes"];export{s as Colors,n as Sizes,S as __namedExportsOrder,F as default};
