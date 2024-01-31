(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{10789:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/snackbar",function(){return t(49253)}])},93682:function(n,e,t){"use strict";t.d(e,{Z:function(){return B}});var o=t(85893),a=t(67294),s=t(99226),i=t(66242),r=t(34386),l=t(67720),c=t(57922),d=t(93946),u=t(78445),m=t(44267),p=t(96420),h=t(98396),x=t(33454),k=t(79878),g=t(15660),j=t.n(g),f=t(86501),C=t(66485),v=t.n(C);let S=n=>n&&("TEXTAREA"===n.nodeName||"INPUT"===n.nodeName);var Z=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,a.useRef)(null),t=()=>{n.onSuccess&&n.onSuccess(),n.selectOnCopy&&S(e.current)&&e.current.select()},o=()=>{n.onError&&n.onError();let t=!1!==n.selectOnError;t&&S(e.current)&&e.current.select()},s=n=>{v()(n).then(t).catch(o)},i=(0,a.useCallback)(n=>{"string"==typeof n?s(n):e.current&&s(e.current.value)},[]);return{copy:i,target:e}};let b=n=>{let{id:e,sx:t,code:g,title:C,children:v,className:S}=n,[b,B]=(0,a.useState)(!1),[T,I]=(0,a.useState)(null!==g.tsx?"tsx":"jsx"),w=Z(),y=(0,h.Z)(n=>n.breakpoints.down("md"));(0,a.useEffect)(()=>{j().highlightAll()},[b,T]);let F=()=>null!==g.tsx&&"tsx"===T?g.tsx.props.children.props.children:null!==g.jsx&&"jsx"===T?g.jsx.props.children.props.children:"",N=()=>{w.copy(F()),f.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,o.jsxs)(i.Z,{className:S,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:e||"card-snippet--".concat(C.toLowerCase().replace(/ /g,"-")),children:[(0,o.jsx)(u.Z,{title:C,...y?{}:{action:(0,o.jsx)(d.Z,{onClick:()=>B(!b),children:(0,o.jsx)(k.Z,{icon:"tabler:code",fontSize:20})})}}),(0,o.jsx)(m.Z,{children:v}),y?null:(0,o.jsxs)(c.Z,{in:b,children:[(0,o.jsx)(l.Z,{sx:{my:"0 !important"}}),(0,o.jsxs)(m.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,o.jsx)(s.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,o.jsxs)(x.Z,{exclusive:!0,size:"small",color:"primary",value:T,onChange:(n,e)=>null!==e?I(e):null,children:[null!==g.tsx?(0,o.jsx)(p.Z,{value:"tsx",children:(0,o.jsx)(k.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==g.jsx?(0,o.jsx)(p.Z,{value:"jsx",children:(0,o.jsx)(k.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,o.jsx)(r.Z,{title:"Copy the source",placement:"top",children:(0,o.jsx)(d.Z,{onClick:N,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,o.jsx)(k.Z,{icon:"tabler:copy",fontSize:20})})}),(0,o.jsx)("div",{children:null!==g[T]?g[T]:null})]})]})]})};var B=b},49253:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return A}});var o=t(85893),a=t(86886),s=t(15861),i=t(93682),r=t(67294),l=t(46901),c=t(11057),d=t(77651),u=t(28756);let m=()=>{let[n,e]=(0,r.useState)(!1),{settings:t}=(0,u.r)(),{skin:a}=t,s=()=>{e(!0)},i=(n,t)=>{"clickaway"!==t&&e(!1)};return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(c.Z,{variant:"outlined",onClick:s,children:"Open alert snackbar"}),(0,o.jsx)(d.Z,{open:n,onClose:i,autoHideDuration:3e3,children:(0,o.jsx)(l.Z,{variant:"filled",severity:"success",onClose:i,sx:{width:"100%"},elevation:"bordered"===a?0:3,children:"This is a success message!"})})]})};var p=t(93946),h=t(79878);let x=()=>{let[n,e]=(0,r.useState)(!1),t=()=>{e(!0)},a=(n,t)=>{"clickaway"!==t&&e(!1)};return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(c.Z,{variant:"outlined",onClick:t,children:"Open simple snackbar"}),(0,o.jsx)(d.Z,{open:n,onClose:a,message:"Note archived",autoHideDuration:3e3,action:(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(c.Z,{size:"small",onClick:a,children:"Undo"}),(0,o.jsx)(p.Z,{size:"small","aria-label":"close",color:"inherit",onClick:a,children:(0,o.jsx)(h.Z,{icon:"tabler:x",fontSize:20})})]})})]})},k=()=>{let[n,e]=(0,r.useState)({open:!1,vertical:"top",horizontal:"center"}),{vertical:t,horizontal:a,open:s}=n,i=n=>()=>{e({open:!0,...n})},l=()=>{e({...n,open:!1})};return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{className:"demo-space-x",children:[(0,o.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"top",horizontal:"center"}),children:"Top Center"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"top",horizontal:"right"}),children:"Top Right"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"bottom",horizontal:"right"}),children:"Bottom Right"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"bottom",horizontal:"center"}),children:"Bottom Center"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"bottom",horizontal:"left"}),children:"Bottom Left"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:i({vertical:"top",horizontal:"left"}),children:"Top Left"})]}),(0,o.jsx)(d.Z,{open:s,onClose:l,message:"I love snacks",autoHideDuration:3e3,anchorOrigin:{vertical:t,horizontal:a}},t+a)]})};var g=t(96514),j=t(16628),f=t(54776);let C=n=>(0,o.jsx)(g.Z,{...n}),v=n=>(0,o.jsx)(f.Z,{...n,direction:"up"}),S=()=>{let[n,e]=(0,r.useState)({open:!1,Transition:j.Z}),t=n=>()=>{e({open:!0,Transition:n})},a=()=>{e({...n,open:!1})};return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{className:"demo-space-x",children:[(0,o.jsx)(c.Z,{variant:"outlined",onClick:t(C),children:"Grow Transition"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:t(j.Z),children:"Fade Transition"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:t(v),children:"Slide Transition"})]}),(0,o.jsx)(d.Z,{open:n.open,onClose:a,message:"I love snacks",autoHideDuration:3e3,TransitionComponent:n.Transition},n.Transition.name)]})},Z=()=>{let[n,e]=(0,r.useState)(!1),[t,a]=(0,r.useState)([]),[s,i]=(0,r.useState)(void 0);(0,r.useEffect)(()=>{t.length&&!s?(e(!0),a(n=>n.slice(1)),i({...t[0]})):t.length&&s&&n&&e(!1)},[t,s,n]);let u=n=>()=>{a(e=>[...e,{message:n,key:new Date().getTime()}])},m=(n,t)=>{"clickaway"!==t&&e(!1)},p=()=>{i(void 0)};return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{className:"demo-space-x",children:[(0,o.jsx)(c.Z,{variant:"outlined",onClick:u("success"),children:"Success Alert"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:u("error"),children:"Error Alert"})]}),(0,o.jsx)(d.Z,{open:n,onClose:m,autoHideDuration:3e3,TransitionProps:{onExited:p},message:s?s.message:void 0,children:(0,o.jsxs)(l.Z,{elevation:3,variant:"filled",onClose:m,sx:{width:"100%"},severity:(null==s?void 0:s.message)==="success"?"success":"error",children:["This is ",(null==s?void 0:s.message)==="success"?"a success":"an error"," message!"]})},s?s.key:void 0)]})},b=n=>(0,o.jsx)(f.Z,{...n,direction:"left"}),B=n=>(0,o.jsx)(f.Z,{...n,direction:"up"}),T=n=>(0,o.jsx)(f.Z,{...n,direction:"right"}),I=n=>(0,o.jsx)(f.Z,{...n,direction:"down"}),w=()=>{let[n,e]=(0,r.useState)(!1),[t,a]=(0,r.useState)(void 0),s=n=>()=>{a(()=>n),e(!0)},i=()=>{e(!1)};return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)("div",{className:"demo-space-x",children:[(0,o.jsx)(c.Z,{variant:"outlined",onClick:s(b),children:"Right"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:s(B),children:"Up"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:s(T),children:"Left"}),(0,o.jsx)(c.Z,{variant:"outlined",onClick:s(I),children:"Down"})]}),(0,o.jsx)(d.Z,{open:n,onClose:i,message:"I love snacks",autoHideDuration:3e3,TransitionComponent:t},t?t.name:"")]})},y=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\n// ** Hook Import\nimport { useSettings } from 'src/@core/hooks/useSettings'\n\nconst SnackbarAlert = () => {\n  // ** State\n  const [open, setOpen] = useState(false)\n\n  // ** Hook & Var\n  const { settings } = useSettings()\n  const { skin } = settings\n\n  const handleClick = () => {\n    setOpen(true)\n  }\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <Button variant='outlined' onClick={handleClick}>\n        Open alert snackbar\n      </Button>\n      <Snackbar open={open} onClose={handleClose} autoHideDuration={3000}>\n        <Alert\n          variant='filled'\n          severity='success'\n          onClose={handleClose}\n          sx={{ width: '100%' }}\n          elevation={skin === 'bordered' ? 0 : 3}\n        >\n          This is a success message!\n        </Alert>\n      </Snackbar>\n    </Fragment>\n  )\n}\n\nexport default SnackbarAlert\n"})}),F=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useEffect, useState } from 'react'\n\n// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\nconst SnackbarConsecutive = () => {\n  // ** States\n  const [open, setOpen] = useState(false)\n  const [snackPack, setSnackPack] = useState([])\n  const [messageInfo, setMessageInfo] = useState(undefined)\n  useEffect(() => {\n    if (snackPack.length && !messageInfo) {\n      setOpen(true)\n      setSnackPack(prev => prev.slice(1))\n      setMessageInfo({ ...snackPack[0] })\n    } else if (snackPack.length && messageInfo && open) {\n      setOpen(false)\n    }\n  }, [snackPack, messageInfo, open])\n\n  const handleClick = message => () => {\n    setSnackPack(prev => [...prev, { message, key: new Date().getTime() }])\n  }\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  const handleExited = () => {\n    setMessageInfo(undefined)\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick('success')}>\n          Success Alert\n        </Button>\n        <Button variant='outlined' onClick={handleClick('error')}>\n          Error Alert\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        autoHideDuration={3000}\n        TransitionProps={{ onExited: handleExited }}\n        key={messageInfo ? messageInfo.key : undefined}\n        message={messageInfo ? messageInfo.message : undefined}\n      >\n        <Alert\n          elevation={3}\n          variant='filled'\n          onClose={handleClose}\n          sx={{ width: '100%' }}\n          severity={messageInfo?.message === 'success' ? 'success' : 'error'}\n        >\n          This is {messageInfo?.message === 'success' ? 'a success' : 'an error'} message!\n        </Alert>\n      </Snackbar>\n    </Fragment>\n  )\n}\n\nexport default SnackbarConsecutive\n"})}),N=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\n\nconst SnackbarPositioned = () => {\n  // ** States\n  const [state, setState] = useState({\n    open: false,\n    vertical: 'top',\n    horizontal: 'center'\n  })\n  const { vertical, horizontal, open } = state\n\n  const handleClick = newState => () => {\n    setState({ open: true, ...newState })\n  }\n\n  const handleClose = () => {\n    setState({ ...state, open: false })\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>\n          Top Center\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>\n          Top Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>\n          Bottom Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>\n          Bottom Center\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>\n          Bottom Left\n        </Button>\n        <Button variant='outlined' onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>\n          Top Left\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        key={vertical + horizontal}\n        anchorOrigin={{ vertical, horizontal }}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarPositioned\n"})}),z=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport IconButton from '@mui/material/IconButton'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst SnackbarSimple = () => {\n  // ** State\n  const [open, setOpen] = useState(false)\n\n  const handleClick = () => {\n    setOpen(true)\n  }\n\n  const handleClose = (event, reason) => {\n    if (reason === 'clickaway') {\n      return\n    }\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <Button variant='outlined' onClick={handleClick}>\n        Open simple snackbar\n      </Button>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='Note archived'\n        autoHideDuration={3000}\n        action={\n          <Fragment>\n            <Button size='small' onClick={handleClose}>\n              Undo\n            </Button>\n            <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>\n              <Icon icon='tabler:x' fontSize={20} />\n            </IconButton>\n          </Fragment>\n        }\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarSimple\n"})}),O=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport Slide from '@mui/material/Slide'\n\nconst TransitionLeft = props => {\n  return <Slide {...props} direction='left' />\n}\n\nconst TransitionUp = props => {\n  return <Slide {...props} direction='up' />\n}\n\nconst TransitionRight = props => {\n  return <Slide {...props} direction='right' />\n}\n\nconst TransitionDown = props => {\n  return <Slide {...props} direction='down' />\n}\n\nconst SnackbarControlSlideDirection = () => {\n  // ** States\n  const [open, setOpen] = useState(false)\n  const [transition, setTransition] = useState(undefined)\n\n  const handleClick = Transition => () => {\n    setTransition(() => Transition)\n    setOpen(true)\n  }\n\n  const handleClose = () => {\n    setOpen(false)\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick(TransitionLeft)}>\n          Right\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionUp)}>\n          Up\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionRight)}>\n          Left\n        </Button>\n        <Button variant='outlined' onClick={handleClick(TransitionDown)}>\n          Down\n        </Button>\n      </div>\n      <Snackbar\n        open={open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        TransitionComponent={transition}\n        key={transition ? transition.name : ''}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarControlSlideDirection\n"})}),P=(0,o.jsx)("pre",{className:"language-jsx",children:(0,o.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { Fragment, useState } from 'react'\n\n// ** MUI Imports\nimport Button from '@mui/material/Button'\nimport Snackbar from '@mui/material/Snackbar'\nimport Grow from '@mui/material/Grow'\nimport Fade from '@mui/material/Fade'\nimport Slide from '@mui/material/Slide'\n\nconst GrowTransition = props => {\n  return <Grow {...props} />\n}\n\nconst SlideTransition = props => {\n  return <Slide {...props} direction='up' />\n}\n\nconst SnackbarTransition = () => {\n  // ** State\n  const [state, setState] = useState({\n    open: false,\n    Transition: Fade\n  })\n\n  const handleClick = Transition => () => {\n    setState({\n      open: true,\n      Transition\n    })\n  }\n\n  const handleClose = () => {\n    setState({\n      ...state,\n      open: false\n    })\n  }\n\n  return (\n    <Fragment>\n      <div className='demo-space-x'>\n        <Button variant='outlined' onClick={handleClick(GrowTransition)}>\n          Grow Transition\n        </Button>\n        <Button variant='outlined' onClick={handleClick(Fade)}>\n          Fade Transition\n        </Button>\n        <Button variant='outlined' onClick={handleClick(SlideTransition)}>\n          Slide Transition\n        </Button>\n      </div>\n      <Snackbar\n        open={state.open}\n        onClose={handleClose}\n        message='I love snacks'\n        autoHideDuration={3000}\n        key={state.Transition.name}\n        TransitionComponent={state.Transition}\n      />\n    </Fragment>\n  )\n}\n\nexport default SnackbarTransition\n"})}),D=()=>(0,o.jsxs)(a.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,o.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,o.jsxs)(i.Z,{title:"Simple Snackbar",code:{tsx:null,jsx:z},children:[(0,o.jsxs)(s.Z,{sx:{mb:4},children:["Manage ",(0,o.jsx)("code",{children:"open"})," prop with ",(0,o.jsx)("code",{children:"Snackbar"})," component with the help of a state."]}),(0,o.jsx)(x,{})]})}),(0,o.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,o.jsxs)(i.Z,{title:"Alert Snackbar",code:{tsx:null,jsx:y},children:[(0,o.jsxs)(s.Z,{sx:{mb:4},children:["Add ",(0,o.jsx)("code",{children:"Alert"})," component as a children of ",(0,o.jsx)("code",{children:"Snackbar"})," component."]}),(0,o.jsx)(m,{})]})}),(0,o.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,o.jsxs)(i.Z,{title:"Positioned Snackbar",code:{tsx:null,jsx:N},children:[(0,o.jsxs)(s.Z,{children:["Use ",(0,o.jsx)("code",{children:"anchorOrigin"})," prop to change the position of the snackbar."]}),(0,o.jsx)(k,{})]})}),(0,o.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,o.jsxs)(i.Z,{title:"Consecutive Snackbars",code:{tsx:null,jsx:F},children:[(0,o.jsx)(s.Z,{children:"When multiple snackbar updates are necessary, they should appear one at a time."}),(0,o.jsx)(Z,{})]})}),(0,o.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,o.jsxs)(i.Z,{title:"Change Transition",code:{tsx:null,jsx:P},children:[(0,o.jsx)(s.Z,{children:"When multiple snackbar updates are necessary, they should appear one at a time."}),(0,o.jsx)(S,{})]})}),(0,o.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,o.jsxs)(i.Z,{title:"Control Slide Direction",code:{tsx:null,jsx:O},children:[(0,o.jsxs)(s.Z,{children:["You can change the direction of the ",(0,o.jsx)("code",{children:"Slide"})," transition."]}),(0,o.jsx)(w,{})]})})]});var A=D}},function(n){n.O(0,[5511,1739,9774,2888,179],function(){return n(n.s=10789)}),_N_E=n.O()}]);