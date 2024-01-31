(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1498],{92401:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(87462),i=t(63366),s=t(67294),l=t(86010),o=t(94780),a=t(90948),c=t(71657),d=t(15861),u=t(1588),h=t(34867);function m(e){return(0,h.Z)("MuiAlertTitle",e)}(0,u.Z)("MuiAlertTitle",["root"]);var x=t(85893);let p=["className"],j=e=>{let{classes:n}=e;return(0,o.Z)({root:["root"]},m,n)},v=(0,a.ZP)(d.Z,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>({fontWeight:e.typography.fontWeightMedium,marginTop:-2})),f=s.forwardRef(function(e,n){let t=(0,c.Z)({props:e,name:"MuiAlertTitle"}),{className:s}=t,o=(0,i.Z)(t,p),a=j(t);return(0,x.jsx)(v,(0,r.Z)({gutterBottom:!0,component:"div",ownerState:t,ref:n,className:(0,l.Z)(a.root,s)},o))});var Z=f},46901:function(e,n,t){"use strict";t.d(n,{Z:function(){return z}});var r=t(63366),i=t(87462),s=t(67294),l=t(86010),o=t(94780),a=t(41796),c=t(90948),d=t(71657),u=t(98216),h=t(90629),m=t(1588),x=t(34867);function p(e){return(0,x.Z)("MuiAlert",e)}let j=(0,m.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var v=t(93946),f=t(82066),Z=t(85893),A=(0,f.Z)((0,Z.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),g=(0,f.Z)((0,Z.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,f.Z)((0,Z.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),C=(0,f.Z)((0,Z.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),b=t(34484);let k=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],w=e=>{let{variant:n,color:t,severity:r,classes:i}=e,s={root:["root",`${n}${(0,u.Z)(t||r)}`,`${n}`],icon:["icon"],message:["message"],action:["action"]};return(0,o.Z)(s,p,i)},T=(0,c.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,n[t.variant],n[`${t.variant}${(0,u.Z)(t.color||t.severity)}`]]}})(({theme:e,ownerState:n})=>{let t="light"===e.palette.mode?a._j:a.$n,r="light"===e.palette.mode?a.$n:a._j,s=n.color||n.severity;return(0,i.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===n.variant&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:t(e.palette[s].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${s}StandardBg`]:r(e.palette[s].light,.9),[`& .${j.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:e.palette[s].main}},s&&"outlined"===n.variant&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:t(e.palette[s].light,.6),border:`1px solid ${(e.vars||e).palette[s].light}`,[`& .${j.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:e.palette[s].main}},s&&"filled"===n.variant&&(0,i.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${s}FilledColor`],backgroundColor:e.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[s].dark:e.palette[s].main,color:e.palette.getContrastText(e.palette[s].main)}))}),S=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,n)=>n.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),B=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),I=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),N={success:(0,Z.jsx)(A,{fontSize:"inherit"}),warning:(0,Z.jsx)(g,{fontSize:"inherit"}),error:(0,Z.jsx)(y,{fontSize:"inherit"}),info:(0,Z.jsx)(C,{fontSize:"inherit"})},M=s.forwardRef(function(e,n){var t,s,o,a,c,u;let h=(0,d.Z)({props:e,name:"MuiAlert"}),{action:m,children:x,className:p,closeText:j="Close",color:f,components:A={},componentsProps:g={},icon:y,iconMapping:C=N,onClose:M,role:z="alert",severity:O="success",slotProps:E={},slots:P={},variant:R="standard"}=h,$=(0,r.Z)(h,k),U=(0,i.Z)({},h,{color:f,severity:O,variant:R}),_=w(U),F=null!=(t=null!=(s=P.closeButton)?s:A.CloseButton)?t:v.Z,L=null!=(o=null!=(a=P.closeIcon)?a:A.CloseIcon)?o:b.Z,W=null!=(c=E.closeButton)?c:g.closeButton,D=null!=(u=E.closeIcon)?u:g.closeIcon;return(0,Z.jsxs)(T,(0,i.Z)({role:z,elevation:0,ownerState:U,className:(0,l.Z)(_.root,p),ref:n},$,{children:[!1!==y?(0,Z.jsx)(S,{ownerState:U,className:_.icon,children:y||C[O]||N[O]}):null,(0,Z.jsx)(B,{ownerState:U,className:_.message,children:x}),null!=m?(0,Z.jsx)(I,{ownerState:U,className:_.action,children:m}):null,null==m&&M?(0,Z.jsx)(I,{ownerState:U,className:_.action,children:(0,Z.jsx)(F,(0,i.Z)({size:"small","aria-label":j,title:j,color:"inherit",onClick:M},W,{children:(0,Z.jsx)(L,(0,i.Z)({fontSize:"small"},D))}))}):null]}))});var z=M},66485:function(e){function n(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw n();return navigator.clipboard.writeText(e)}async function r(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let r=window.getSelection(),i=window.document.createRange();r.removeAllRanges(),i.selectNode(t),r.addRange(i);let s=!1;try{s=window.document.execCommand("copy")}finally{r.removeAllRanges(),window.document.body.removeChild(t)}if(!s)throw n()}async function i(e){try{await t(e)}catch(t){try{await r(e)}catch(e){throw e||t||n()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=i},80921:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/alerts",function(){return t(72011)}])},93682:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(85893),i=t(67294),s=t(99226),l=t(66242),o=t(34386),a=t(67720),c=t(57922),d=t(93946),u=t(78445),h=t(44267),m=t(96420),x=t(98396),p=t(33454),j=t(79878),v=t(15660),f=t.n(v),Z=t(86501),A=t(66485),g=t.n(A);let y=e=>e&&("TEXTAREA"===e.nodeName||"INPUT"===e.nodeName);var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,i.useRef)(null),t=()=>{e.onSuccess&&e.onSuccess(),e.selectOnCopy&&y(n.current)&&n.current.select()},r=()=>{e.onError&&e.onError();let t=!1!==e.selectOnError;t&&y(n.current)&&n.current.select()},s=e=>{g()(e).then(t).catch(r)},l=(0,i.useCallback)(e=>{"string"==typeof e?s(e):n.current&&s(n.current.value)},[]);return{copy:l,target:n}};let b=e=>{let{id:n,sx:t,code:v,title:A,children:g,className:y}=e,[b,k]=(0,i.useState)(!1),[w,T]=(0,i.useState)(null!==v.tsx?"tsx":"jsx"),S=C(),B=(0,x.Z)(e=>e.breakpoints.down("md"));(0,i.useEffect)(()=>{f().highlightAll()},[b,w]);let I=()=>null!==v.tsx&&"tsx"===w?v.tsx.props.children.props.children:null!==v.jsx&&"jsx"===w?v.jsx.props.children.props.children:"",N=()=>{S.copy(I()),Z.ZP.success("The source code has been copied to your clipboard.",{duration:2e3})};return(0,r.jsxs)(l.Z,{className:y,sx:{"& .MuiCardHeader-action":{lineHeight:.8},...t},id:n||"card-snippet--".concat(A.toLowerCase().replace(/ /g,"-")),children:[(0,r.jsx)(u.Z,{title:A,...B?{}:{action:(0,r.jsx)(d.Z,{onClick:()=>k(!b),children:(0,r.jsx)(j.Z,{icon:"tabler:code",fontSize:20})})}}),(0,r.jsx)(h.Z,{children:g}),B?null:(0,r.jsxs)(c.Z,{in:b,children:[(0,r.jsx)(a.Z,{sx:{my:"0 !important"}}),(0,r.jsxs)(h.Z,{sx:{position:"relative","& pre":{m:"0 !important",maxHeight:500}},children:[(0,r.jsx)(s.Z,{sx:{mb:4,display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,r.jsxs)(p.Z,{exclusive:!0,size:"small",color:"primary",value:w,onChange:(e,n)=>null!==n?T(n):null,children:[null!==v.tsx?(0,r.jsx)(m.Z,{value:"tsx",children:(0,r.jsx)(j.Z,{icon:"tabler:brand-typescript",fontSize:20})}):null,null!==v.jsx?(0,r.jsx)(m.Z,{value:"jsx",children:(0,r.jsx)(j.Z,{icon:"tabler:brand-javascript",fontSize:20})}):null]})}),(0,r.jsx)(o.Z,{title:"Copy the source",placement:"top",children:(0,r.jsx)(d.Z,{onClick:N,sx:{top:"5rem",color:"grey.100",right:"2.5625rem",position:"absolute"},children:(0,r.jsx)(j.Z,{icon:"tabler:copy",fontSize:20})})}),(0,r.jsx)("div",{children:null!==v[w]?v[w]:null})]})]})]})};var k=b},72011:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var r=t(85893),i=t(86886),s=t(15861),l=t(93682),o=t(46901);let a=()=>(0,r.jsxs)("div",{className:"demo-space-y",children:[(0,r.jsx)(o.Z,{severity:"error",children:"This is an error alert — check it out!"}),(0,r.jsx)(o.Z,{severity:"warning",children:"This is an warning alert — check it out!"}),(0,r.jsx)(o.Z,{severity:"info",children:"This is an info alert — check it out!"}),(0,r.jsx)(o.Z,{severity:"success",children:"This is an success alert — check it out!"})]}),c=()=>(0,r.jsxs)("div",{className:"demo-space-y",children:[(0,r.jsx)(o.Z,{variant:"filled",severity:"error",children:"This is an error alert — check it out!"}),(0,r.jsx)(o.Z,{variant:"filled",severity:"warning",children:"This is an warning alert — check it out!"}),(0,r.jsx)(o.Z,{variant:"filled",severity:"info",children:"This is an info alert — check it out!"}),(0,r.jsx)(o.Z,{variant:"filled",severity:"success",children:"This is an success alert — check it out!"})]});var d=t(11057);let u=()=>(0,r.jsxs)("div",{className:"demo-space-y",children:[(0,r.jsx)(o.Z,{onClose:e=>{e.preventDefault()},children:"This is a success alert — check it out!"}),(0,r.jsx)(o.Z,{action:(0,r.jsx)(d.Z,{color:"inherit",size:"small",children:"Undo"}),variant:"outlined",children:"This is a success alert — check it out!"}),(0,r.jsx)(o.Z,{action:(0,r.jsx)(d.Z,{color:"inherit",size:"small",children:"Undo"}),variant:"filled",children:"This is a success alert — check it out!"})]}),h=()=>(0,r.jsxs)("div",{className:"demo-space-y",children:[(0,r.jsx)(o.Z,{variant:"outlined",severity:"error",children:"This is an error alert — check it out!"}),(0,r.jsx)(o.Z,{variant:"outlined",severity:"warning",children:"This is an warning alert — check it out!"}),(0,r.jsx)(o.Z,{variant:"outlined",severity:"info",children:"This is an info alert — check it out!"}),(0,r.jsx)(o.Z,{variant:"outlined",severity:"success",children:"This is an success alert — check it out!"})]});var m=t(92401);let x=()=>(0,r.jsxs)("div",{className:"demo-space-y",children:[(0,r.jsxs)(o.Z,{severity:"error",children:[(0,r.jsx)(m.Z,{children:"Error"}),"This is an error alert — ",(0,r.jsx)("strong",{children:"check it out!"})]}),(0,r.jsxs)(o.Z,{severity:"warning",children:[(0,r.jsx)(m.Z,{children:"Warning"}),"This is an warning alert — ",(0,r.jsx)("strong",{children:"check it out!"})]}),(0,r.jsxs)(o.Z,{severity:"info",children:[(0,r.jsx)(m.Z,{children:"Info"}),"This is an info alert — ",(0,r.jsx)("strong",{children:"check it out!"})]}),(0,r.jsxs)(o.Z,{severity:"success",children:[(0,r.jsx)(m.Z,{children:"Success"}),"This is an success alert — ",(0,r.jsx)("strong",{children:"check it out!"})]})]});var p=t(67294),j=t(99226),v=t(16628),f=t(96514),Z=t(54776),A=t(57922),g=t(93946),y=t(79878);let C=()=>{let[e,n]=(0,p.useState)(!0),[t,i]=(0,p.useState)(!0),[s,l]=(0,p.useState)(!0),[a,c]=(0,p.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(j.Z,{sx:{mb:6},children:[(0,r.jsx)(A.Z,{in:e,children:(0,r.jsx)(o.Z,{action:(0,r.jsx)(g.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>n(!1),children:(0,r.jsx)(y.Z,{icon:"tabler:x"})}),children:"Close me!"})}),(0,r.jsx)(d.Z,{disabled:e,variant:"outlined",sx:{mt:2},onClick:()=>n(!0),children:"Open Collapse"})]}),(0,r.jsxs)(j.Z,{sx:{mb:6},children:[(0,r.jsx)(v.Z,{in:t,...t?{timeout:700}:{},children:(0,r.jsx)(o.Z,{action:(0,r.jsx)(g.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>i(!1),children:(0,r.jsx)(y.Z,{icon:"tabler:x"})}),children:"Close me!"})}),(0,r.jsx)(d.Z,{disabled:t,variant:"outlined",sx:{mt:2},onClick:()=>i(!0),children:"Open Fade"})]}),(0,r.jsxs)(j.Z,{sx:{mb:6},children:[(0,r.jsx)(f.Z,{in:s,...s?{timeout:700}:{},children:(0,r.jsx)(o.Z,{action:(0,r.jsx)(g.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>l(!1),children:(0,r.jsx)(y.Z,{icon:"tabler:x"})}),children:"Close me!"})}),(0,r.jsx)(d.Z,{disabled:s,variant:"outlined",sx:{mt:2},onClick:()=>l(!0),children:"Open Grow"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Z.Z,{in:a,direction:"left",...a?{timeout:500}:{},children:(0,r.jsx)(o.Z,{action:(0,r.jsx)(g.Z,{size:"small",color:"inherit","aria-label":"close",onClick:()=>c(!1),children:(0,r.jsx)(y.Z,{icon:"tabler:x"})}),children:"Close me!"})}),(0,r.jsx)(d.Z,{disabled:a,variant:"outlined",sx:{mt:2},onClick:()=>c(!0),children:"Open Slide"})]})]})},b=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\n\nconst AlertsBasic = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert severity='error'>This is an error alert — check it out!</Alert>\n      <Alert severity='warning'>This is an warning alert — check it out!</Alert>\n      <Alert severity='info'>This is an info alert — check it out!</Alert>\n      <Alert severity='success'>This is an success alert — check it out!</Alert>\n    </div>\n  )\n}\n\nexport default AlertsBasic\n"})}),k=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport AlertTitle from '@mui/material/AlertTitle'\n\nconst AlertsDescription = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert severity='error'>\n        <AlertTitle>Error</AlertTitle>\n        This is an error alert — <strong>check it out!</strong>\n      </Alert>\n      <Alert severity='warning'>\n        <AlertTitle>Warning</AlertTitle>\n        This is an warning alert — <strong>check it out!</strong>\n      </Alert>\n      <Alert severity='info'>\n        <AlertTitle>Info</AlertTitle>\n        This is an info alert — <strong>check it out!</strong>\n      </Alert>\n      <Alert severity='success'>\n        <AlertTitle>Success</AlertTitle>\n        This is an success alert — <strong>check it out!</strong>\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsDescription\n"})}),w=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\nimport Button from '@mui/material/Button'\n\nconst AlertsBasic = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert\n        onClose={e => {\n          e.preventDefault()\n        }}\n      >\n        This is a success alert — check it out!\n      </Alert>\n      <Alert\n        action={\n          <Button color='inherit' size='small'>\n            Undo\n          </Button>\n        }\n        variant='outlined'\n      >\n        This is a success alert — check it out!\n      </Alert>\n      <Alert\n        action={\n          <Button color='inherit' size='small'>\n            Undo\n          </Button>\n        }\n        variant='filled'\n      >\n        This is a success alert — check it out!\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsBasic\n"})}),T=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** React Imports\nimport { useState } from 'react'\n\n// ** MUI Imports\nimport Box from '@mui/material/Box'\nimport Fade from '@mui/material/Fade'\nimport Grow from '@mui/material/Grow'\nimport Alert from '@mui/material/Alert'\nimport Slide from '@mui/material/Slide'\nimport Button from '@mui/material/Button'\nimport Collapse from '@mui/material/Collapse'\nimport IconButton from '@mui/material/IconButton'\n\n// ** Icon Imports\nimport Icon from 'src/@core/components/icon'\n\nconst AlertsDismissible = () => {\n  // ** States\n  const [open1, setOpen1] = useState(true)\n  const [open2, setOpen2] = useState(true)\n  const [open3, setOpen3] = useState(true)\n  const [open4, setOpen4] = useState(true)\n\n  return (\n    <>\n      <Box sx={{ mb: 6 }}>\n        <Collapse in={open1}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen1(false)}>\n                <Icon icon='tabler:x' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Collapse>\n        <Button disabled={open1} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen1(true)}>\n          Open Collapse\n        </Button>\n      </Box>\n\n      <Box sx={{ mb: 6 }}>\n        <Fade in={open2} {...(open2 ? { timeout: 700 } : {})}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen2(false)}>\n                <Icon icon='tabler:x' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Fade>\n        <Button disabled={open2} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen2(true)}>\n          Open Fade\n        </Button>\n      </Box>\n\n      <Box sx={{ mb: 6 }}>\n        <Grow in={open3} {...(open3 ? { timeout: 700 } : {})}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen3(false)}>\n                <Icon icon='tabler:x' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Grow>\n        <Button disabled={open3} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen3(true)}>\n          Open Grow\n        </Button>\n      </Box>\n\n      <div>\n        <Slide in={open4} direction='left' {...(open4 ? { timeout: 500 } : {})}>\n          <Alert\n            action={\n              <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpen4(false)}>\n                <Icon icon='tabler:x' />\n              </IconButton>\n            }\n          >\n            Close me!\n          </Alert>\n        </Slide>\n        <Button disabled={open4} variant='outlined' sx={{ mt: 2 }} onClick={() => setOpen4(true)}>\n          Open Slide\n        </Button>\n      </div>\n    </>\n  )\n}\n\nexport default AlertsDismissible\n"})}),S=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\n\nconst AlertsOutlined = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert variant='outlined' severity='error'>\n        This is an error alert — check it out!\n      </Alert>\n      <Alert variant='outlined' severity='warning'>\n        This is an warning alert — check it out!\n      </Alert>\n      <Alert variant='outlined' severity='info'>\n        This is an info alert — check it out!\n      </Alert>\n      <Alert variant='outlined' severity='success'>\n        This is an success alert — check it out!\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsOutlined\n"})}),B=(0,r.jsx)("pre",{className:"language-jsx",children:(0,r.jsx)("code",{className:"language-jsx",children:"// ** MUI Imports\nimport Alert from '@mui/material/Alert'\n\nconst AlertsFilled = () => {\n  return (\n    <div className='demo-space-y'>\n      <Alert variant='filled' severity='error'>\n        This is an error alert — check it out!\n      </Alert>\n      <Alert variant='filled' severity='warning'>\n        This is an warning alert — check it out!\n      </Alert>\n      <Alert variant='filled' severity='info'>\n        This is an info alert — check it out!\n      </Alert>\n      <Alert variant='filled' severity='success'>\n        This is an success alert — check it out!\n      </Alert>\n    </div>\n  )\n}\n\nexport default AlertsFilled\n"})}),I=()=>(0,r.jsxs)(i.ZP,{container:!0,spacing:6,className:"match-height",children:[(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(l.Z,{title:"Basic",code:{tsx:null,jsx:b},children:[(0,r.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,r.jsxs)("code",{children:["severity=","{'error' | 'warning' | 'info' | 'success'}"]})," prop with"," ",(0,r.jsx)("code",{children:"<Alert>"})," component for different colored alerts."]}),(0,r.jsx)(a,{})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(l.Z,{title:"Outlined",code:{tsx:null,jsx:S},children:[(0,r.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,r.jsx)("code",{children:"variant='outlined'"})," prop with ",(0,r.jsx)("code",{children:"<Alert>"})," component for outlined alerts."]}),(0,r.jsx)(h,{})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(l.Z,{title:"Filled",code:{tsx:null,jsx:B},children:[(0,r.jsxs)(s.Z,{sx:{mb:4},children:["Use ",(0,r.jsx)("code",{children:"variant='filled'"})," prop with ",(0,r.jsx)("code",{children:"<Alert>"})," component for filled alerts."]}),(0,r.jsx)(c,{})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(l.Z,{title:"Action",code:{tsx:null,jsx:w},children:[(0,r.jsxs)(s.Z,{sx:{mb:4},children:["To add a button, you need to use ",(0,r.jsx)("code",{children:"action"})," prop with ",(0,r.jsx)("code",{children:"<Alert>"})," component and pass a button inside this prop. To add a close button, you need to use ",(0,r.jsx)("code",{children:"onClose"})," prop with"," ",(0,r.jsx)("code",{children:"<Alert>"})," component."]}),(0,r.jsx)(u,{})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(l.Z,{title:"Description",code:{tsx:null,jsx:k},children:[(0,r.jsxs)(s.Z,{sx:{mb:4},children:["You can use the ",(0,r.jsx)("code",{children:"AlertTitle"})," component to display a formatted title above the content."]}),(0,r.jsx)(x,{})]})}),(0,r.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,r.jsxs)(l.Z,{title:"Dismissible",code:{tsx:null,jsx:T},children:[(0,r.jsx)(s.Z,{sx:{mb:4},children:"You need to use one of the transition components (viz. Collapse, Fade, Grow and Slide) to make a dismissible alert."}),(0,r.jsx)(C,{})]})})]});var N=I}},function(e){e.O(0,[5511,9774,2888,179],function(){return e(e.s=80921)}),_N_E=e.O()}]);