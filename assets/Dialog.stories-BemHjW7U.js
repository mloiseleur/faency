import{a,j as e,F as v}from"./jsx-runtime-WuQMLw89.js";import{D as u,a as f,b as C,c as q,d as y,S as B}from"./Dialog-BTRNXTZJ.js";import{r as c}from"./index-Dl6G-zuu.js";import{B as m}from"./Button-scdtd1Jr.js";import{B as O}from"./Box-CsPUZVXZ.js";import{T as l}from"./Text-BL7FJXgP.js";import"./stitches.config-CKE6G7UO.js";import"./extends-CCbyfPlC.js";import"./index-COmNUzeK.js";import"./index-D_wDWxb3.js";import"./index-Cy-whKHn.js";import"./index-CKWv3fp9.js";import"./index-CiDhy-qA.js";import"./index-D1o5GlT1.js";import"./index-D1_ZHIBm.js";import"./index-DwXtUxXH.js";import"./index-C0EqwiN4.js";import"./react-icons.esm-C3slgq7o.js";import"./Elevation-CQxWisSY.js";import"./Card-c3mvhibi.js";import"./IconButton-CLMqZr-I.js";import"./modifyVariantsForStory-D3vOGtQO.js";const Q={title:"Components/Dialog",component:u},b=()=>{const[o,t]=c.useState(1);return a(v,{children:[e(l,{size:2,as:"h3",css:{mb:"$3"},children:"Hello, World!"}),[...Array(o)].map((i,n)=>e(l,{css:{mb:"$1"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},n)),e(m,{css:{mt:"$3"},onClick:()=>t(i=>i+1),children:"Add more text"})]})},r=()=>{const[o,t]=c.useState(!1);return a(u,{open:o,onOpenChange:i=>t(i),children:[e(f,{asChild:!0,children:e(m,{onClick:()=>t(!0),children:"Open dialog"})}),e(O,{children:[...Array(10)].map((i,n)=>e(l,{css:{my:"$1"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},n))}),a(C,{children:[e(q,{}),e(y,{children:e(b,{})})]})]})},s=()=>{const[o,t]=c.useState(!1);return a(u,{open:o,onOpenChange:i=>t(i),children:[e(f,{asChild:!0,children:e(m,{onClick:()=>t(!0),children:"Open dialog"})}),e(O,{children:[...Array(10)].map((i,n)=>e(l,{css:{my:"$1"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},n))}),a(C,{children:[e(q,{}),e(B,{children:e(b,{})})]})]})};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Dialog open={open} onOpenChange={isOpen => setOpen(isOpen)}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
      </DialogTrigger>

      <Box>
        {[...Array(10)].map((_, i) => <Text key={i} css={{
        my: '$1'
      }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>)}
      </Box>

      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <Content />
        </DialogContent>
      </DialogPortal>
    </Dialog>;
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,x,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <Dialog open={open} onOpenChange={isOpen => setOpen(isOpen)}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
      </DialogTrigger>

      <Box>
        {[...Array(10)].map((_, i) => <Text key={i} css={{
        my: '$1'
      }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Text>)}
      </Box>

      <DialogPortal>
        <DialogOverlay />
        <StyledContent>
          <Content />
        </StyledContent>
      </DialogPortal>
    </Dialog>;
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const R=["Basic","NoCloseIcon"];export{r as Basic,s as NoCloseIcon,R as __namedExportsOrder,Q as default};
