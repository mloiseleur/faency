import{a as g,j as e}from"./jsx-runtime-WuQMLw89.js";import{R as b}from"./index-Dl6G-zuu.js";import{m as O}from"./modifyVariantsForStory-D3vOGtQO.js";import{L as u}from"./Label-CazOnMFe.js";import{i as s}from"./ignoreArgType-DG8_8Mu6.js";import{B as f}from"./Box-CsPUZVXZ.js";import"./extends-CCbyfPlC.js";import"./index-D1o5GlT1.js";import"./index-D1_ZHIBm.js";import"./index-Cy-whKHn.js";import"./stitches.config-CKE6G7UO.js";import"./Text-BL7FJXgP.js";const V=a=>e(u,{...a}),q=O(V),sa={title:"Components/Label",component:q},d=({id:a,...m})=>g(f,{children:[e(u,{htmlFor:a,css:{mr:"$2"},...m,children:"Email field"}),e("input",{id:a,name:"email",type:"email"})]}),r=d.bind({});r.args={id:"basic"};s("id",r);const n=d.bind({});n.args={id:"capitalize"};s("id",n);const i=d.bind({});i.args={id:"capitalize-words",transform:"capitalizeWords"};s("id",i);const o=d.bind({});o.args={id:"uppercase",transform:"uppercase"};s("id",o);const t=d.bind({});t.args={id:"invalidvariant",variant:"invalid"};s("id",t);const l=({id:a,...m})=>g(f,{children:[e(u,{htmlFor:a,css:{mr:"$2"},variant:"subtle",...m,children:"Email field"}),e("input",{id:a,name:"email",type:"email",disabled:!0})]});l.args={id:"subtledisabled"};s("id",l);const c=({id:a,...m})=>{const[U,p]=b.useState(!1),w=b.useCallback(()=>{p(!0)},[p]),A=b.useCallback(()=>{p(!1)},[p]);return g(f,{children:[e(u,{variant:U?"contrast":"default",htmlFor:a,css:{mr:"$2"},...m,children:"Email field"}),e("input",{id:a,name:"email",type:"email",onFocus:w,onBlur:A})]})};c.args={id:"focuscontrastvariants"};s("id",c);var F,B,L;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`({
  id,
  ...args
}) => <Box>
    <Label htmlFor={id} css={{
    mr: '$2'
  }} {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" />
  </Box>`,...(L=(B=r.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var h,x,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  id,
  ...args
}) => <Box>
    <Label htmlFor={id} css={{
    mr: '$2'
  }} {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" />
  </Box>`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,C,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`({
  id,
  ...args
}) => <Box>
    <Label htmlFor={id} css={{
    mr: '$2'
  }} {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" />
  </Box>`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var S,$,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`({
  id,
  ...args
}) => <Box>
    <Label htmlFor={id} css={{
    mr: '$2'
  }} {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" />
  </Box>`,...(z=($=o.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,R,k;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`({
  id,
  ...args
}) => <Box>
    <Label htmlFor={id} css={{
    mr: '$2'
  }} {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" />
  </Box>`,...(k=(R=t.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var j,W,_;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`({
  id,
  ...args
}) => <Box>
    <Label htmlFor={id} css={{
    mr: '$2'
  }} variant="subtle" {...args}>
      Email field
    </Label>
    <input id={id} name="email" type="email" disabled />
  </Box>`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var D,I,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`({
  id,
  ...args
}) => {
  const [hasFocus, setHasFocus] = React.useState(false);
  const onFocus = React.useCallback(() => {
    setHasFocus(true);
  }, [setHasFocus]);
  const onBlur = React.useCallback(() => {
    setHasFocus(false);
  }, [setHasFocus]);
  return <Box>
      <Label variant={hasFocus ? 'contrast' : 'default'} htmlFor={id} css={{
      mr: '$2'
    }} {...args}>
        Email field
      </Label>
      <input id={id} name="email" type="email" onFocus={onFocus} onBlur={onBlur} />
    </Box>;
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const ra=["Basic","Capitalized","CapitalizedWords","Uppercased","Invalid","Disabled","FocusContrast"];export{r as Basic,n as Capitalized,i as CapitalizedWords,l as Disabled,c as FocusContrast,t as Invalid,o as Uppercased,ra as __namedExportsOrder,sa as default};
