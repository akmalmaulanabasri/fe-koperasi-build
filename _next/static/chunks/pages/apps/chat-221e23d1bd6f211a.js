(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5099],{18987:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var o=r(63366),a=r(87462),n=r(67294),i=r(86010),s=r(94780),l=r(59773),c=r(90948),d=r(71657),p=r(1588),x=r(34867);function h(e){return(0,x.Z)("MuiListItemAvatar",e)}(0,p.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var u=r(85893);let m=["className"],g=e=>{let{alignItems:t,classes:r}=e;return(0,s.Z)({root:["root","flex-start"===t&&"alignItemsFlexStart"]},h,r)},b=(0,c.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})(({ownerState:e})=>(0,a.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})),f=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiListItemAvatar"}),{className:s}=r,c=(0,o.Z)(r,m),p=n.useContext(l.Z),x=(0,a.Z)({},r,{alignItems:p.alignItems}),h=g(x);return(0,u.jsx)(b,(0,a.Z)({className:(0,i.Z)(h.root,s),ownerState:x,ref:t},c))});var j=f},59334:function(e,t,r){"use strict";var o=r(63366),a=r(87462),n=r(67294),i=r(86010),s=r(94780),l=r(15861),c=r(59773),d=r(71657),p=r(90948),x=r(26336),h=r(85893);let u=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],m=e=>{let{classes:t,inset:r,primary:o,secondary:a,dense:n}=e;return(0,s.Z)({root:["root",r&&"inset",n&&"dense",o&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},x.L,t)},g=(0,p.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${x.Z.primary}`]:t.primary},{[`& .${x.Z.secondary}`]:t.secondary},t.root,r.inset&&t.inset,r.primary&&r.secondary&&t.multiline,r.dense&&t.dense]}})(({ownerState:e})=>(0,a.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),b=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiListItemText"}),{children:s,className:p,disableTypography:x=!1,inset:b=!1,primary:f,primaryTypographyProps:j,secondary:Z,secondaryTypographyProps:y}=r,v=(0,o.Z)(r,u),{dense:w}=n.useContext(c.Z),C=null!=f?f:s,S=Z,I=(0,a.Z)({},r,{disableTypography:x,inset:b,primary:!!C,secondary:!!S,dense:w}),k=m(I);return null==C||C.type===l.Z||x||(C=(0,h.jsx)(l.Z,(0,a.Z)({variant:w?"body2":"body1",className:k.primary,component:null!=j&&j.variant?void 0:"span",display:"block"},j,{children:C}))),null==S||S.type===l.Z||x||(S=(0,h.jsx)(l.Z,(0,a.Z)({variant:"body2",className:k.secondary,color:"text.secondary",display:"block"},y,{children:S}))),(0,h.jsxs)(g,(0,a.Z)({className:(0,i.Z)(k.root,p),ownerState:I,ref:t},v,{children:[C,S]}))});t.Z=b},42427:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/chat",function(){return r(77228)}])},66476:function(e,t,r){"use strict";var o=r(85893),a=r(67294),n=r(90948),i=r(50135);let s=(0,n.ZP)(i.Z)(e=>{let{theme:t}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:t.spacing(1),fontSize:t.typography.body2.fontSize,color:"".concat(t.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(t.palette.customColors.main,", 0.2)"),transition:t.transitions.create(["border-color","box-shadow"],{duration:t.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(t.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:t.palette.error.main},"&.Mui-focused":{boxShadow:t.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:t.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:t.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:t.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:t.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:t.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:t.palette.error.main},"&.Mui-error":{borderColor:t.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(t.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:t.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:t.spacing(1,0,0),color:t.palette.text.secondary,fontSize:t.typography.body2.fontSize,"&.Mui-error":{color:t.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),l=(0,a.forwardRef)((e,t)=>{let{size:r="small",InputLabelProps:a,...n}=e;return(0,o.jsx)(s,{size:r,inputRef:t,...n,variant:"filled",InputLabelProps:{...a,shrink:!0}})});t.Z=l},90934:function(e,t,r){"use strict";var o=r(85893),a=r(67294),n=r(84808),i=r(99226);let s=e=>{let{sx:t,show:r,direction:s,children:l,hideBackdrop:c,onOpen:d,onClose:p,backDropClick:x}=e,h=()=>{x&&x()};return(0,a.useEffect)(()=>{r&&d&&d(),!1===r&&p&&p()},[p,d,r]),(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(i.Z,{sx:{top:0,height:"100%",zIndex:"drawer",position:"absolute",transition:"all 0.25s ease-in-out",backgroundColor:"background.paper",...r?{opacity:1}:{opacity:0},..."right"===s?{left:"auto",right:r?0:"-100%"}:{right:"auto",left:r?0:"-100%"},...t},children:l}),c?null:(0,o.jsx)(n.Z,{open:r,transitionDuration:250,onClick:h,sx:{position:"absolute",zIndex:e=>e.zIndex.drawer-1}})]})};t.Z=s,s.defaultProps={direction:"left"}},34167:function(e,t,r){"use strict";r.d(t,{N:function(){return s},mf:function(){return i},oS:function(){return a},tE:function(){return l}});let o=e=>{let t=new Date;return new Date(e).getDate()===t.getDate()&&new Date(e).getMonth()===t.getMonth()&&new Date(e).getFullYear()===t.getFullYear()},a=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=new Date(e),a={month:"short",day:"numeric"};return t&&o(r)&&(a={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",a).format(new Date(e))},n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\D+/g,"")},i=(e,t)=>{let r;if(!e)return e;let o=t.fns.cardType(e),a=n(e);switch(o){case"amex":r="".concat(a.slice(0,4)," ").concat(a.slice(4,10)," ").concat(a.slice(10,15));break;case"dinersclub":r="".concat(a.slice(0,4)," ").concat(a.slice(4,10)," ").concat(a.slice(10,14));break;default:r="".concat(a.slice(0,4)," ").concat(a.slice(4,8)," ").concat(a.slice(8,12)," ").concat(a.slice(12,19))}return r.trim()},s=e=>{let t=e.replace(/^([1-9]\/|[2-9])$/g,"0$1/").replace(/^(0[1-9]|1[0-2])$/g,"$1/").replace(/^([0-1])([3-9])$/g,"0$1/$2").replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g,"$1/$2").replace(/^([0]+)\/|[0]+$/g,"0").replace(/[^\d\/]|^[\/]*$/g,"").replace(/\/\//g,"/");return t},l=(e,t,r)=>{let o=n(e),a=r.fns.cardType(t);return o.slice(0,"amex"===a?4:3)}},77228:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ee}});var o=r(85893),a=r(67294),n=r(99226),i=r(2734),s=r(98396),l=r(9473),c=r(60273),d=r(28756),p=r(12470),x=r(34167),h=r(11163),u=r(78462),m=r(87918),g=r(90263),b=r(58826),f=r(87952),j=r(19294),Z=r(93946),y=r(15861),v=r(59334),w=r(18987),C=r(98619),S=r(87109),I=r(51964),k=r.n(I),P=r(79878),M=r(42563),z=r(10410),T=r(66476),R=r(49033),B=r(11057),L=r(72852),N=r(68061),D=r(48885),A=r(50480),O=r(90934);let W=e=>{let{store:t,hidden:r,statusObj:i,userStatus:s,sidebarWidth:l,setUserStatus:c,userProfileLeftOpen:d,handleUserProfileLeftSidebarToggle:p}=e,x=e=>{c(e.target.value)},h=e=>{let{children:t}=e;return r?(0,o.jsx)(n.Z,{sx:{height:"100%",overflowY:"auto",overflowX:"hidden"},children:t}):(0,o.jsx)(k(),{options:{wheelPropagation:!1},children:t})};return(0,o.jsx)(O.Z,{show:d,backDropClick:p,sx:{zIndex:9,height:"100%",width:l,borderTopLeftRadius:e=>e.shape.borderRadius,borderBottomLeftRadius:e=>e.shape.borderRadius,"& + .MuiBackdrop-root":{zIndex:8,borderRadius:1}},children:t&&t.userProfile?(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(Z.Z,{size:"small",onClick:p,sx:{top:"0.5rem",right:"0.5rem",position:"absolute",color:"text.disabled"},children:(0,o.jsx)(P.Z,{icon:"tabler:x"})}),(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"column",p:e=>e.spacing(11.25,6,4.5)},children:[(0,o.jsx)(n.Z,{sx:{mb:3.5,display:"flex",justifyContent:"center"},children:(0,o.jsx)(g.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,o.jsx)(n.Z,{component:"span",sx:{width:10,height:10,borderRadius:"50%",color:"".concat(i[s],".main"),backgroundColor:"".concat(i[s],".main"),boxShadow:e=>"0 0 0 2px ".concat(e.palette.background.paper)}}),children:(0,o.jsx)(f.Z,{sx:{width:80,height:80},src:t.userProfile.avatar,alt:t.userProfile.fullName})})}),(0,o.jsx)(y.Z,{variant:"h5",sx:{textAlign:"center"},children:t.userProfile.fullName}),(0,o.jsx)(y.Z,{sx:{textAlign:"center",color:"text.secondary",textTransform:"capitalize"},children:t.userProfile.role})]}),(0,o.jsx)(n.Z,{sx:{height:"calc(100% - 13.3125rem)"},children:(0,o.jsx)(h,{children:(0,o.jsxs)(n.Z,{sx:{p:6},children:[(0,o.jsx)(y.Z,{variant:"body2",sx:{mb:3.5,color:"text.disabled",textTransform:"uppercase",lineHeight:"normal"},children:"About"}),(0,o.jsx)(T.Z,{multiline:!0,fullWidth:!0,minRows:4,sx:{mb:6},defaultValue:t.userProfile.about}),(0,o.jsx)(y.Z,{variant:"body2",sx:{mb:3.5,color:"text.disabled",textTransform:"uppercase",lineHeight:"normal"},children:"Status"}),(0,o.jsxs)(N.Z,{value:s,sx:{mb:6,ml:.8},onChange:x,children:[(0,o.jsx)("div",{children:(0,o.jsx)(A.Z,{value:"online",label:"Online",control:(0,o.jsx)(R.Z,{color:"success",sx:{p:1.5}})})}),(0,o.jsx)("div",{children:(0,o.jsx)(A.Z,{value:"away",label:"Away",control:(0,o.jsx)(R.Z,{color:"warning",sx:{p:1.5}})})}),(0,o.jsx)("div",{children:(0,o.jsx)(A.Z,{value:"busy",label:"Do not Disturb",control:(0,o.jsx)(R.Z,{color:"error",sx:{p:1.5}})})}),(0,o.jsx)("div",{children:(0,o.jsx)(A.Z,{value:"offline",label:"Offline",control:(0,o.jsx)(R.Z,{color:"secondary",sx:{p:1.5}})})})]}),(0,o.jsx)(y.Z,{variant:"body2",sx:{mb:3.5,color:"text.disabled",textTransform:"uppercase",lineHeight:"normal"},children:"Settings"}),(0,o.jsxs)(u.Z,{dense:!0,sx:{p:0,mb:3.5,"& .MuiListItemButton-root:hover":{backgroundColor:"action.hover","& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:"inherit"}}},children:[(0,o.jsx)(j.ZP,{disablePadding:!0,secondaryAction:(0,o.jsx)(L.Z,{}),children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2,color:"text.primary"},children:(0,o.jsx)(P.Z,{icon:"tabler:message-dots"})}),(0,o.jsx)(v.Z,{primary:"Two-step Verification",primaryTypographyProps:{variant:"body1"}})]})}),(0,o.jsx)(j.ZP,{disablePadding:!0,secondaryAction:(0,o.jsx)(L.Z,{defaultChecked:!0}),children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2,color:"text.primary"},children:(0,o.jsx)(P.Z,{icon:"tabler:bell"})}),(0,o.jsx)(v.Z,{primary:"Notification",primaryTypographyProps:{variant:"body1"}})]})}),(0,o.jsx)(j.ZP,{disablePadding:!0,children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2,color:"text.primary"},children:(0,o.jsx)(P.Z,{icon:"tabler:user-plus"})}),(0,o.jsx)(v.Z,{primary:"Invite Friends",primaryTypographyProps:{variant:"body1"}})]})}),(0,o.jsx)(j.ZP,{disablePadding:!0,children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2,color:"text.primary"},children:(0,o.jsx)(P.Z,{icon:"tabler:trash"})}),(0,o.jsx)(v.Z,{primary:"Delete Account",primaryTypographyProps:{variant:"body1"}})]})})]}),(0,o.jsx)(B.Z,{variant:"contained",children:"Logout"})]})})})]}):null})},F=e=>{let{children:t,hidden:r}=e;return r?(0,o.jsx)(n.Z,{sx:{height:"100%",overflow:"auto"},children:t}):(0,o.jsx)(k(),{options:{wheelPropagation:!1},children:t})},_=e=>{let{store:t,hidden:r,mdAbove:i,dispatch:s,statusObj:l,userStatus:c,selectChat:d,getInitials:p,sidebarWidth:x,setUserStatus:I,leftSidebarOpen:k,removeSelectedChat:R,userProfileLeftOpen:B,formatDateToMonthShort:L,handleLeftSidebarToggle:N,handleUserProfileLeftSidebarToggle:D}=e,[A,O]=(0,a.useState)(""),[_,E]=(0,a.useState)([]),[$,H]=(0,a.useState)([]),[U,X]=(0,a.useState)(null),Y=(0,h.useRouter)(),G=(e,t)=>{s(d(t)),X({type:e,id:t}),i||N()};(0,a.useEffect)(()=>{t&&t.chats&&null!==U&&"contact"===U.type&&U.id===t.chats[0].id&&X({type:"chat",id:U.id})},[t,U]),(0,a.useEffect)(()=>(Y.events.on("routeChangeComplete",()=>{X(null),s(R())}),()=>{X(null),s(R())}),[]);let Q=e=>{if(null!==t.chats){let r=t.chats.filter(t=>t.id===e);return!!r.length}},V=e=>{if(O(e.target.value),null!==t.chats&&null!==t.contacts){let r=t=>t.fullName.toLowerCase().includes(e.target.value.toLowerCase()),o=t.chats.filter(r),a=t.contacts.filter(r);E(o),H(a)}};return(0,o.jsxs)("div",{children:[(0,o.jsxs)(b.ZP,{open:k,onClose:N,variant:i?"permanent":"temporary",ModalProps:{disablePortal:!0,keepMounted:!0},sx:{zIndex:7,height:"100%",display:"block",position:i?"static":"absolute","& .MuiDrawer-paper":{boxShadow:"none",width:x,position:i?"static":"absolute",borderTopLeftRadius:e=>e.shape.borderRadius,borderBottomLeftRadius:e=>e.shape.borderRadius},"& > .MuiBackdrop-root":{borderRadius:1,position:"absolute",zIndex:e=>e.zIndex.drawer-1}},children:[(0,o.jsxs)(n.Z,{sx:{py:3,px:5,display:"flex",alignItems:"center",borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:[t&&t.userProfile?(0,o.jsx)(g.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{mr:3},onClick:D,badgeContent:(0,o.jsx)(n.Z,{component:"span",sx:{width:8,height:8,borderRadius:"50%",color:"".concat(l[c],".main"),backgroundColor:"".concat(l[c],".main"),boxShadow:e=>"0 0 0 2px ".concat(e.palette.background.paper)}}),children:(0,o.jsx)(f.Z,{src:t.userProfile.avatar,alt:t.userProfile.fullName,sx:{width:"2.375rem",height:"2.375rem",cursor:"pointer"}})}):null,(0,o.jsx)(T.Z,{fullWidth:!0,value:A,onChange:V,placeholder:"Search for contact...",sx:{"& .MuiInputBase-root":{borderRadius:"30px !important"}},InputProps:{startAdornment:(0,o.jsx)(S.Z,{position:"start",sx:{color:"text.secondary"},children:(0,o.jsx)(P.Z,{fontSize:"1.25rem",icon:"tabler:search"})})}}),i?null:(0,o.jsx)(Z.Z,{sx:{p:1,ml:1},onClick:N,children:(0,o.jsx)(P.Z,{icon:"tabler:x"})})]}),(0,o.jsx)(n.Z,{sx:{height:"calc(100% - 4.0625rem)"},children:(0,o.jsx)(F,{hidden:r,children:(0,o.jsxs)(n.Z,{sx:{p:e=>e.spacing(5,3,3)},children:[(0,o.jsx)(y.Z,{variant:"h5",sx:{ml:3,mb:3.5,color:"primary.main"},children:"Chats"}),(0,o.jsx)(u.Z,{sx:{mb:5,p:0},children:(()=>{if(t&&t.chats&&t.chats.length){if(A.length&&!_.length)return(0,o.jsx)(j.ZP,{children:(0,o.jsx)(y.Z,{sx:{color:"text.secondary"},children:"No Chats Found"})});{let e=A.length&&_.length?_:t.chats;return e.map((e,t)=>{let{lastMessage:r}=e.chat,a=null!==U&&U.id===e.id&&"chat"===U.type;return(0,o.jsx)(j.ZP,{disablePadding:!0,sx:{"&:not(:last-child)":{mb:1}},children:(0,o.jsxs)(C.Z,{disableRipple:!0,onClick:()=>G("chat",e.id),sx:{py:2,px:3,width:"100%",borderRadius:1,alignItems:"flex-start","&.MuiListItemButton-root:hover":{backgroundColor:"action.hover"},...a&&{background:e=>"linear-gradient(72.47deg, ".concat(e.palette.primary.main," 22.16%, ").concat((0,M.E)(e.palette.primary.main,.7)," 76.47%) !important")}},children:[(0,o.jsx)(w.Z,{sx:{m:0,alignSelf:"center"},children:(0,o.jsx)(g.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,o.jsx)(n.Z,{component:"span",sx:{width:8,height:8,borderRadius:"50%",color:"".concat(l[e.status],".main"),backgroundColor:"".concat(l[e.status],".main"),boxShadow:e=>"0 0 0 2px ".concat(a?e.palette.common.white:e.palette.background.paper)}}),children:e.avatar?(0,o.jsx)(f.Z,{src:e.avatar,alt:e.fullName,sx:{width:38,height:38,outline:e=>"2px solid ".concat(a?e.palette.common.white:"transparent")}}):(0,o.jsx)(z.Z,{color:e.avatarColor,skin:a?"light-static":"light",sx:{width:38,height:38,fontSize:e=>e.typography.body1.fontSize,outline:e=>"2px solid ".concat(a?e.palette.common.white:"transparent")},children:p(e.fullName)})})}),(0,o.jsx)(v.Z,{sx:{my:0,ml:3,mr:1.5,"& .MuiTypography-root":{...a&&{color:"common.white"}}},primary:(0,o.jsx)(y.Z,{noWrap:!0,variant:"h6",children:e.fullName}),secondary:(0,o.jsx)(y.Z,{noWrap:!0,sx:{...!a&&{color:"text.secondary"}},children:r?r.message:null})}),(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"flex-end",flexDirection:"column",justifyContent:"flex-start"},children:[(0,o.jsx)(y.Z,{variant:"body2",sx:{whiteSpace:"nowrap",color:a?"common.white":"text.disabled"},children:(0,o.jsx)(o.Fragment,{children:r?L(r.time,!0):new Date})}),e.chat.unseenMsgs&&e.chat.unseenMsgs>0?(0,o.jsx)(m.Z,{color:"error",label:e.chat.unseenMsgs,sx:{mt:.5,height:18,fontWeight:600,fontSize:"0.75rem","& .MuiChip-label":{pt:.25,px:1.655}}}):null]})]})},t)})}}})()}),(0,o.jsx)(y.Z,{variant:"h5",sx:{ml:3,mb:3.5,color:"primary.main"},children:"Contacts"}),(0,o.jsx)(u.Z,{sx:{p:0},children:(()=>{if(t&&t.chats&&t.chats.length){if(A.length&&!$.length)return(0,o.jsx)(j.ZP,{children:(0,o.jsx)(y.Z,{sx:{color:"text.secondary"},children:"No Contacts Found"})});{let e=A.length&&$.length?$:t.contacts;return null!==e?e.map((e,t)=>{let r=null!==U&&U.id===e.id&&"contact"===U.type&&!Q(e.id);return(0,o.jsx)(j.ZP,{disablePadding:!0,sx:{"&:not(:last-child)":{mb:1}},children:(0,o.jsxs)(C.Z,{disableRipple:!0,onClick:()=>G(Q(e.id)?"chat":"contact",e.id),sx:{py:2,px:3,width:"100%",borderRadius:1,"&.MuiListItemButton-root:hover":{backgroundColor:"action.hover"},...r&&{background:e=>"linear-gradient(72.47deg, ".concat(e.palette.primary.main," 22.16%, ").concat((0,M.E)(e.palette.primary.main,.7)," 76.47%) !important")}},children:[(0,o.jsx)(w.Z,{sx:{m:0},children:e.avatar?(0,o.jsx)(f.Z,{alt:e.fullName,src:e.avatar,sx:{width:38,height:38,outline:e=>"2px solid ".concat(r?e.palette.common.white:"transparent")}}):(0,o.jsx)(z.Z,{color:e.avatarColor,skin:r?"light-static":"light",sx:{width:38,height:38,fontSize:e=>e.typography.body1.fontSize,outline:e=>"2px solid ".concat(r?e.palette.common.white:"transparent")},children:p(e.fullName)})}),(0,o.jsx)(v.Z,{sx:{my:0,ml:3,...r&&{"& .MuiTypography-root":{color:"common.white"}}},primary:(0,o.jsx)(y.Z,{variant:"h6",children:e.fullName}),secondary:(0,o.jsx)(y.Z,{noWrap:!0,sx:{...!r&&{color:"text.secondary"}},children:e.about})})]})},t)}):null}}})()})]})})})]}),(0,o.jsx)(W,{store:t,hidden:r,statusObj:l,userStatus:c,sidebarWidth:x,setUserStatus:I,userProfileLeftOpen:B,handleUserProfileLeftSidebarToggle:D})]})};var E=r(90948);let $=(0,E.ZP)(k())(e=>{let{theme:t}=e;return{padding:t.spacing(5)}}),H=e=>{let{data:t,hidden:r}=e,i=(0,a.useRef)(null),s=()=>{i.current&&(r?i.current.scrollTop=i.current.scrollHeight:i.current._container.scrollTop=i.current._container.scrollHeight)},l=()=>{let e=[];t.chat&&(e=t.chat.chat);let r=[],o=e[0]?e[0].senderId:11,a={senderId:o,messages:[]};return e.forEach((t,n)=>{o===t.senderId?a.messages.push({time:t.time,msg:t.message,feedback:t.feedback}):(o=t.senderId,r.push(a),a={senderId:t.senderId,messages:[{time:t.time,msg:t.message,feedback:t.feedback}]}),n===e.length-1&&r.push(a)}),r},c=(e,t)=>{if(e)return t.isSent&&!t.isDelivered?(0,o.jsx)(n.Z,{component:"span",sx:{display:"flex","& svg":{mr:1.5,color:"text.secondary"}},children:(0,o.jsx)(P.Z,{icon:"tabler:check",fontSize:"1.125rem"})}):t.isSent&&t.isDelivered?(0,o.jsx)(n.Z,{component:"span",sx:{display:"flex","& svg":{mr:1.5,color:t.isSeen?"success.main":"text.secondary"}},children:(0,o.jsx)(P.Z,{icon:"tabler:checks",fontSize:"1.125rem"})}):null};(0,a.useEffect)(()=>{t&&t.chat&&t.chat.chat.length&&s()},[t]);let d=e=>{let{children:t}=e;return r?(0,o.jsx)(n.Z,{ref:i,sx:{p:5,height:"100%",overflowY:"auto",overflowX:"hidden"},children:t}):(0,o.jsx)($,{ref:i,options:{wheelPropagation:!1},children:t})};return(0,o.jsx)(n.Z,{sx:{height:"calc(100% - 8.875rem)"},children:(0,o.jsx)(d,{children:l().map((e,r)=>{let a=e.senderId===t.userContact.id;return(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:a?"row-reverse":"row",mb:r!==l().length-1?4:void 0},children:[(0,o.jsx)("div",{children:(0,o.jsx)(z.Z,{skin:"light",color:t.contact.avatarColor?t.contact.avatarColor:void 0,sx:{width:32,height:32,ml:a?3:void 0,mr:a?void 0:3,fontSize:e=>e.typography.body1.fontSize},...t.contact.avatar&&!a?{src:t.contact.avatar,alt:t.contact.fullName}:{},...a?{src:t.userContact.avatar,alt:t.userContact.fullName}:{},children:t.contact.avatarColor?(0,p.Q)(t.contact.fullName):null})}),(0,o.jsx)(n.Z,{className:"chat-body",sx:{maxWidth:["calc(100% - 5.75rem)","75%","65%"]},children:e.messages.map((e,t,r)=>{let{length:i}=r,s=new Date(e.time);return(0,o.jsxs)(n.Z,{sx:{"&:not(:last-of-type)":{mb:3}},children:[(0,o.jsx)("div",{children:(0,o.jsx)(y.Z,{sx:{boxShadow:1,borderRadius:1,maxWidth:"100%",width:"fit-content",wordWrap:"break-word",p:e=>e.spacing(2.25,4),ml:a?"auto":void 0,borderTopLeftRadius:a?void 0:0,borderTopRightRadius:a?0:void 0,color:a?"common.white":"text.primary",backgroundColor:a?"primary.main":"background.paper"},children:e.msg})}),t+1===i?(0,o.jsxs)(n.Z,{sx:{mt:1,display:"flex",alignItems:"center",justifyContent:a?"flex-end":"flex-start"},children:[c(a,e.feedback),(0,o.jsx)(y.Z,{variant:"body2",sx:{color:"text.disabled"},children:s?new Date(s).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):null})]}):null]},t)})})]},r)})})})},U=(0,E.ZP)(n.Z)(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",padding:t.spacing(2.5),boxShadow:t.shadows[1],justifyContent:"space-between",borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper}}),X=(0,E.ZP)("form")(e=>{let{theme:t}=e;return{padding:t.spacing(0,5,5)}}),Y=e=>{let{store:t,dispatch:r,sendMsg:i}=e,[s,l]=(0,a.useState)(""),c=e=>{e.preventDefault(),t&&t.selectedChat&&s.trim().length&&r(i({...t.selectedChat,message:s})),l("")};return(0,o.jsx)(X,{onSubmit:c,children:(0,o.jsxs)(U,{children:[(0,o.jsx)(n.Z,{sx:{flexGrow:1,display:"flex",alignItems:"center"},children:(0,o.jsx)(T.Z,{fullWidth:!0,value:s,placeholder:"Type your message here…",onChange:e=>l(e.target.value),sx:{"& .Mui-focused":{boxShadow:"none !important"},"& .MuiInputBase-input:not(textarea).MuiInputBase-inputSizeSmall":{p:e=>e.spacing(1.875,2.5)},"& .MuiInputBase-root":{border:"0 !important"}}})}),(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(Z.Z,{size:"small",sx:{color:"text.primary"},children:(0,o.jsx)(P.Z,{icon:"tabler:microphone"})}),(0,o.jsxs)(Z.Z,{size:"small",component:"label",htmlFor:"upload-img",sx:{mr:3,color:"text.primary"},children:[(0,o.jsx)(P.Z,{icon:"tabler:photo"}),(0,o.jsx)("input",{hidden:!0,type:"file",id:"upload-img"})]}),(0,o.jsx)(B.Z,{type:"submit",variant:"contained",children:"Send"})]})]})})};var G=r(6834),Q=r(53457);let V=e=>{let{store:t,hidden:r,statusObj:i,getInitials:s,sidebarWidth:l,userProfileRightOpen:c,handleUserProfileRightSidebarToggle:d}=e,p=e=>{let{children:t}=e;return r?(0,o.jsx)(n.Z,{sx:{height:"100%",overflowY:"auto",overflowX:"hidden"},children:t}):(0,o.jsx)(k(),{options:{wheelPropagation:!1},children:t})};return(0,o.jsx)(O.Z,{direction:"right",show:c,backDropClick:d,sx:{zIndex:9,height:"100%",width:l,borderTopRightRadius:e=>e.shape.borderRadius,borderBottomRightRadius:e=>e.shape.borderRadius,"& + .MuiBackdrop-root":{zIndex:8,borderRadius:1}},children:t&&t.selectedChat?(0,o.jsxs)(a.Fragment,{children:[(0,o.jsxs)(n.Z,{sx:{position:"relative"},children:[(0,o.jsx)(Z.Z,{size:"small",onClick:d,sx:{top:"0.5rem",right:"0.5rem",position:"absolute",color:"text.disabled"},children:(0,o.jsx)(P.Z,{icon:"tabler:x"})}),(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"column",p:e=>e.spacing(11.25,6,4.5)},children:[(0,o.jsx)(n.Z,{sx:{mb:3.5,display:"flex",justifyContent:"center"},children:(0,o.jsx)(g.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:(0,o.jsx)(n.Z,{component:"span",sx:{width:10,height:10,borderRadius:"50%",color:"".concat(i[t.selectedChat.contact.status],".main"),boxShadow:e=>"0 0 0 2px ".concat(e.palette.background.paper),backgroundColor:"".concat(i[t.selectedChat.contact.status],".main")}}),children:t.selectedChat.contact.avatar?(0,o.jsx)(f.Z,{sx:{width:"5rem",height:"5rem"},src:t.selectedChat.contact.avatar,alt:t.selectedChat.contact.fullName}):(0,o.jsx)(z.Z,{skin:"light",color:t.selectedChat.contact.avatarColor,sx:{width:"5rem",height:"5rem",fontWeight:500,fontSize:"2rem"},children:s(t.selectedChat.contact.fullName)})})}),(0,o.jsx)(y.Z,{variant:"h5",sx:{textAlign:"center"},children:t.selectedChat.contact.fullName}),(0,o.jsx)(y.Z,{sx:{textAlign:"center",color:"text.secondary"},children:t.selectedChat.contact.role})]})]}),(0,o.jsx)(n.Z,{sx:{height:"calc(100% - 13.3125rem)"},children:(0,o.jsx)(p,{children:(0,o.jsxs)(n.Z,{sx:{p:6},children:[(0,o.jsxs)(Q.Z,{sx:{mb:6.5},children:[(0,o.jsx)(y.Z,{variant:"body2",sx:{mb:3.5,color:"text.disabled",textTransform:"uppercase",lineHeight:"normal"},children:"About"}),(0,o.jsx)(y.Z,{sx:{color:"text.secondary"},children:t.selectedChat.contact.about})]}),(0,o.jsxs)(n.Z,{sx:{mb:6},children:[(0,o.jsx)(y.Z,{variant:"body2",sx:{mb:3.5,color:"text.disabled",textTransform:"uppercase",lineHeight:"normal"},children:"Personal Information"}),(0,o.jsxs)(u.Z,{dense:!0,sx:{p:0},children:[(0,o.jsxs)(j.ZP,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:mail",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{sx:{textTransform:"lowercase"},primaryTypographyProps:{variant:"body1"},primary:"".concat(t.selectedChat.contact.fullName.replace(/\s/g,"_"),"@email.com")})]}),(0,o.jsxs)(j.ZP,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:phone-call",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{primaryTypographyProps:{variant:"body1"},primary:"+1(123) 456 - 7890"})]}),(0,o.jsxs)(j.ZP,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:clock",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{primaryTypographyProps:{variant:"body1"},primary:"Mon - Fri 10AM - 8PM"})]})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(y.Z,{variant:"body2",sx:{mb:3.5,color:"text.disabled",textTransform:"uppercase",lineHeight:"normal"},children:"Options"}),(0,o.jsxs)(u.Z,{dense:!0,sx:{p:0,"& .MuiListItemButton-root:hover":{backgroundColor:"action.hover","& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:"inherit"}}},children:[(0,o.jsx)(j.ZP,{disablePadding:!0,children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:badge",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{primary:"Add Tag",primaryTypographyProps:{variant:"body1"}})]})}),(0,o.jsx)(j.ZP,{disablePadding:!0,children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:star",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{primary:"Important Contact",primaryTypographyProps:{variant:"body1"}})]})}),(0,o.jsx)(j.ZP,{disablePadding:!0,children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:photo",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{primary:"Shared Media",primaryTypographyProps:{variant:"body1"}})]})}),(0,o.jsx)(j.ZP,{disablePadding:!0,children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:trash",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{primary:"Delete Contact",primaryTypographyProps:{variant:"body1"}})]})}),(0,o.jsx)(j.ZP,{disablePadding:!0,children:(0,o.jsxs)(C.Z,{sx:{px:2},children:[(0,o.jsx)(D.Z,{sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:ban",fontSize:"1.5rem"})}),(0,o.jsx)(v.Z,{primary:"Block Contact",primaryTypographyProps:{variant:"body1"}})]})})]})]})]})})})]}):null})},q=(0,E.ZP)(n.Z)(e=>{let{theme:t}=e;return{flexGrow:1,height:"100%",display:"flex",borderRadius:1,alignItems:"center",flexDirection:"column",justifyContent:"center",backgroundColor:t.palette.action.hover}}),J=e=>{let{store:t,hidden:r,sendMsg:i,mdAbove:s,dispatch:l,statusObj:c,getInitials:d,sidebarWidth:p,userProfileRightOpen:x,handleLeftSidebarToggle:h,handleUserProfileRightSidebarToggle:u}=e,m=()=>{s||h()};return(()=>{if(!t)return null;{let e=t.selectedChat;return e?(0,o.jsxs)(n.Z,{sx:{width:0,flexGrow:1,height:"100%",backgroundColor:"action.hover"},children:[(0,o.jsxs)(n.Z,{sx:{px:5,py:2.5,display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"background.paper",borderBottom:e=>"1px solid ".concat(e.palette.divider)},children:[(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[s?null:(0,o.jsx)(Z.Z,{onClick:h,sx:{mr:2},children:(0,o.jsx)(P.Z,{icon:"tabler:menu-2"})}),(0,o.jsxs)(n.Z,{onClick:u,sx:{display:"flex",alignItems:"center",cursor:"pointer"},children:[(0,o.jsx)(g.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},sx:{mr:3},badgeContent:(0,o.jsx)(n.Z,{component:"span",sx:{width:8,height:8,borderRadius:"50%",color:"".concat(c[e.contact.status],".main"),boxShadow:e=>"0 0 0 2px ".concat(e.palette.background.paper),backgroundColor:"".concat(c[e.contact.status],".main")}}),children:e.contact.avatar?(0,o.jsx)(f.Z,{sx:{width:38,height:38},src:e.contact.avatar,alt:e.contact.fullName}):(0,o.jsx)(z.Z,{skin:"light",color:e.contact.avatarColor,sx:{width:38,height:38,fontSize:e=>e.typography.body1.fontSize},children:d(e.contact.fullName)})}),(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)(y.Z,{variant:"h6",children:e.contact.fullName}),(0,o.jsx)(y.Z,{sx:{color:"text.disabled"},children:e.contact.role})]})]})]}),(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[s?(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(Z.Z,{size:"small",sx:{color:"text.secondary"},children:(0,o.jsx)(P.Z,{icon:"tabler:phone-call"})}),(0,o.jsx)(Z.Z,{size:"small",sx:{color:"text.secondary"},children:(0,o.jsx)(P.Z,{icon:"tabler:video"})}),(0,o.jsx)(Z.Z,{size:"small",sx:{color:"text.secondary"},children:(0,o.jsx)(P.Z,{icon:"tabler:search"})})]}):null,(0,o.jsx)(G.Z,{menuProps:{sx:{mt:2}},icon:(0,o.jsx)(P.Z,{icon:"tabler:dots-vertical"}),iconButtonProps:{size:"small",sx:{color:"text.secondary"}},options:["View Contact","Mute Notifications","Block Contact","Clear Chat","Report"]})]})]}),e&&t.userProfile?(0,o.jsx)(H,{hidden:r,data:{...e,userContact:t.userProfile}}):null,(0,o.jsx)(Y,{store:t,dispatch:l,sendMsg:i}),(0,o.jsx)(V,{store:t,hidden:r,statusObj:c,getInitials:d,sidebarWidth:p,userProfileRightOpen:x,handleUserProfileRightSidebarToggle:u})]}):(0,o.jsxs)(q,{sx:{...s?{borderTopLeftRadius:0,borderBottomLeftRadius:0}:{}},children:[(0,o.jsx)(f.Z,{sx:{mb:6,pt:8,pb:7,px:7.5,width:110,height:110,boxShadow:3,backgroundColor:"background.paper"},children:(0,o.jsx)(P.Z,{icon:"tabler:message",fontSize:"3.125rem"})}),(0,o.jsx)(n.Z,{onClick:m,sx:{py:2,px:6,boxShadow:3,borderRadius:5,backgroundColor:"background.paper",cursor:s?"default":"pointer"},children:(0,o.jsx)(y.Z,{sx:{fontWeight:500,fontSize:"1.125rem",lineHeight:"normal"},children:"Start Conversation"})})]})}})()},K=()=>{let[e,t]=(0,a.useState)("online"),[r,h]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!1),[g,b]=(0,a.useState)(!1),f=(0,i.Z)(),{settings:j}=(0,d.r)(),Z=(0,l.I0)(),y=(0,s.Z)(f.breakpoints.down("lg")),v=(0,l.v9)(e=>e.chat),{skin:w}=j,C=(0,s.Z)(f.breakpoints.up("sm")),S=C?360:300,I=(0,s.Z)(f.breakpoints.up("md")),k={busy:"error",away:"warning",online:"success",offline:"secondary"};(0,a.useEffect)(()=>{Z((0,c.YI)()),Z((0,c.Pu)())},[Z]);let P=()=>h(!r),M=()=>m(!u),z=()=>b(!g);return(0,o.jsxs)(n.Z,{className:"app-chat",sx:{width:"100%",display:"flex",borderRadius:1,overflow:"hidden",position:"relative",backgroundColor:"background.paper",boxShadow:"bordered"===w?0:6,..."bordered"===w&&{border:"1px solid ".concat(f.palette.divider)}},children:[(0,o.jsx)(_,{store:v,hidden:y,mdAbove:I,dispatch:Z,statusObj:k,userStatus:e,selectChat:c.Z1,getInitials:p.Q,sidebarWidth:S,setUserStatus:t,leftSidebarOpen:r,removeSelectedChat:c.sr,userProfileLeftOpen:u,formatDateToMonthShort:x.oS,handleLeftSidebarToggle:P,handleUserProfileLeftSidebarToggle:M}),(0,o.jsx)(J,{store:v,hidden:y,sendMsg:c.g_,mdAbove:I,dispatch:Z,statusObj:k,getInitials:p.Q,sidebarWidth:S,userProfileRightOpen:g,handleLeftSidebarToggle:P,handleUserProfileRightSidebarToggle:z})]})};K.contentHeightFixed=!0;var ee=K}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=42427)}),_N_E=e.O()}]);