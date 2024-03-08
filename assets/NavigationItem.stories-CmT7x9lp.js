import{j as n}from"./jsx-runtime-WuQMLw89.js";import{D as N,G as I,P as f,Q as D}from"./react-icons.esm-C3slgq7o.js";import{N as r,a as i}from"./Navigation-pfmf8lzH.js";import{B as b}from"./Badge-nC8BjyEy.js";import"./index-Dl6G-zuu.js";import"./stitches.config-CKE6G7UO.js";import"./Flex-Dyi1HvDT.js";import"./Elevation-CQxWisSY.js";import"./index-Cy-whKHn.js";import"./extends-CCbyfPlC.js";const L={title:"Components/NavigationItem",component:r,argTypes:{as:{options:["a","button"]},href:{control:"text"},startAdornment:{options:["Dashboard","Gear","Person","Question"],mapping:{Dashboard:n(N,{}),Gear:n(I,{}),Person:n(f,{}),Question:n(D,{})}},endAdornment:{control:"number"},active:{control:"boolean"}}},x=o=>n(i,{css:{height:"200px"},children:n(r,{...o,endAdornment:!!o.endAdornment&&n(b,{css:{height:"$3",borderRadius:"$pill",fontSize:"$0",fontWeight:"$medium",color:"$hiContrast"},children:o.endAdornment}),children:"Navigation Item"})}),e=x.bind({});e.args={as:"a",href:"#",startAdornment:"Gear",endAdornment:1,active:!1};const t=o=>{const s=()=>{};return n(i,{css:{height:"200px"},children:n(r,{...o,onClick:s,onMouseEnter:s,onMouseLeave:s,children:"Navigation Item"})})},a=o=>n(i,{css:{height:"200px"},children:n(r,{as:"a",href:"https://traefik.io",children:"Navigation Item"})});a.args={as:"a"};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => <NavigationDrawer css={{
  height: '200px'
}}>
    <NavigationItem {...args} endAdornment={!!args.endAdornment && <Badge css={{
    height: '$3',
    borderRadius: '$pill',
    fontSize: '$0',
    fontWeight: '$medium',
    color: '$hiContrast'
  }}>
            {args.endAdornment}
          </Badge>}>
      Navigation Item
    </NavigationItem>
  </NavigationDrawer>`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const noop = () => undefined;
  return <NavigationDrawer css={{
    height: '200px'
  }}>
      <NavigationItem {...args} onClick={noop} onMouseEnter={noop} onMouseLeave={noop}>
        Navigation Item
      </NavigationItem>
    </NavigationDrawer>;
  ButtonProps.args = {
    as: 'button'
  };
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,l,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <NavigationDrawer css={{
  height: '200px'
}}>
    <NavigationItem as="a" href="https://traefik.io">
      Navigation Item
    </NavigationItem>
  </NavigationDrawer>`,...(v=(l=a.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};const Q=["Basic","ButtonProps","LinkProps"];export{e as Basic,t as ButtonProps,a as LinkProps,Q as __namedExportsOrder,L as default};
