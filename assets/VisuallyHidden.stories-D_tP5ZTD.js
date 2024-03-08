import{j as r,a as y}from"./jsx-runtime-WuQMLw89.js";import{V as a}from"./VisuallyHidden-4vL9NlNc.js";import{G as v}from"./react-icons.esm-C3slgq7o.js";import{s as x}from"./stitches.config-CKE6G7UO.js";import{C as t}from"./Card-c3mvhibi.js";import{f as o,C as d}from"./Table-zf-PRt0R.js";import"./index-Dl6G-zuu.js";import"./index-dNpvnuT6.js";import"./extends-CCbyfPlC.js";import"./index-D1o5GlT1.js";import"./index-D1_ZHIBm.js";import"./index-Cy-whKHn.js";import"./Elevation-CQxWisSY.js";import"./Label-CazOnMFe.js";import"./Text-BL7FJXgP.js";import"./Flex-Dyi1HvDT.js";import"./Box-CsPUZVXZ.js";const V=x("button",{m:0,p:0,color:"$hiContrast",border:"1px dashed $hiContrast",display:"flex",background:"none"}),b=x("div",{color:"$hiContrast"}),w={title:"Components/VisuallyHidden",component:a},e=s=>r(b,{children:r(a,{...s,children:"Hidden visually"})}),n=s=>y(V,{children:[r(v,{}),r(a,{...s,children:"Settings"})]}),i=s=>y(b,{children:[r(t,{children:r(o,{css:{minHeight:50,border:"1px dashed $hiContrast"},children:r(a,{...s,children:r(d,{children:"Hidden visually"})})})}),r(t,{children:r(o,{css:{minHeight:50,border:"1px dashed $hiContrast"},children:r(d,{children:"Not hidden visually"})})})]});i.args={asChild:!0};var l,c,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => <ContrastDiv>
    <VisuallyHidden {...args}>Hidden visually</VisuallyHidden>
  </ContrastDiv>`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => <FlexButton>
    <GearIcon />
    <VisuallyHidden {...args}>Settings</VisuallyHidden>
  </FlexButton>`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var C,H,g;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => <ContrastDiv>
    <Card>
      <Table css={{
      minHeight: 50,
      border: '1px dashed $hiContrast'
    }}>
        <VisuallyHidden {...args}>
          <Caption>Hidden visually</Caption>
        </VisuallyHidden>
      </Table>
    </Card>
    <Card>
      <Table css={{
      minHeight: 50,
      border: '1px dashed $hiContrast'
    }}>
        <Caption>Not hidden visually</Caption>
      </Table>
    </Card>
  </ContrastDiv>`,...(g=(H=i.parameters)==null?void 0:H.docs)==null?void 0:g.source}}};const z=["Basic","HiddenButtonText","AsChild"];export{i as AsChild,e as Basic,n as HiddenButtonText,z as __namedExportsOrder,w as default};
