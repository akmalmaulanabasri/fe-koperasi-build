(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8332],{78445:function(e,a,t){"use strict";t.d(a,{Z:function(){return Z}});var r=t(63366),i=t(87462),l=t(67294),n=t(86010),s=t(94780),o=t(15861),d=t(71657),c=t(90948),m=t(1588),u=t(34867);function p(e){return(0,u.Z)("MuiCardHeader",e)}let x=(0,m.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=t(85893);let g=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=e=>{let{classes:a}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,a)},y=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>(0,i.Z)({[`& .${x.title}`]:a.title,[`& .${x.subheader}`]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),_=(0,c.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),j=l.forwardRef(function(e,a){let t=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:l,avatar:s,className:c,component:m="div",disableTypography:u=!1,subheader:p,subheaderTypographyProps:x,title:j,titleTypographyProps:Z}=t,S=(0,r.Z)(t,g),C=(0,i.Z)({},t,{component:m,disableTypography:u}),w=f(C),M=j;null==M||M.type===o.Z||u||(M=(0,h.jsx)(o.Z,(0,i.Z)({variant:s?"body2":"h5",className:w.title,component:"span",display:"block"},Z,{children:M})));let N=p;return null==N||N.type===o.Z||u||(N=(0,h.jsx)(o.Z,(0,i.Z)({variant:s?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:N}))),(0,h.jsxs)(y,(0,i.Z)({className:(0,n.Z)(w.root,c),as:m,ref:a,ownerState:C},S,{children:[s&&(0,h.jsx)(v,{className:w.avatar,ownerState:C,children:s}),(0,h.jsxs)(_,{className:w.content,ownerState:C,children:[M,N]}),l&&(0,h.jsx)(b,{className:w.action,ownerState:C,children:l})]}))});var Z=j},66242:function(e,a,t){"use strict";t.d(a,{Z:function(){return v}});var r=t(87462),i=t(63366),l=t(67294),n=t(86010),s=t(94780),o=t(90948),d=t(71657),c=t(90629),m=t(1588),u=t(34867);function p(e){return(0,u.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var x=t(85893);let h=["className","raised"],g=e=>{let{classes:a}=e;return(0,s.Z)({root:["root"]},p,a)},f=(0,o.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({overflow:"hidden"})),y=l.forwardRef(function(e,a){let t=(0,d.Z)({props:e,name:"MuiCard"}),{className:l,raised:s=!1}=t,o=(0,i.Z)(t,h),c=(0,r.Z)({},t,{raised:s}),m=g(c);return(0,x.jsx)(f,(0,r.Z)({className:(0,n.Z)(m.root,l),elevation:s?8:void 0,ref:a,ownerState:c},o))});var v=y},8603:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tables/data-grid",function(){return t(31245)}])},66476:function(e,a,t){"use strict";var r=t(85893),i=t(67294),l=t(90948),n=t(50135);let s=(0,l.ZP)(n.Z)(e=>{let{theme:a}=e;return{alignItems:"flex-start","& .MuiInputLabel-root":{transform:"none",lineHeight:1.154,position:"relative",marginBottom:a.spacing(1),fontSize:a.typography.body2.fontSize,color:"".concat(a.palette.text.primary," !important")},"& .MuiInputBase-root":{borderRadius:8,backgroundColor:"transparent !important",border:"1px solid rgba(".concat(a.palette.customColors.main,", 0.2)"),transition:a.transitions.create(["border-color","box-shadow"],{duration:a.transitions.duration.shorter}),"&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover":{borderColor:"rgba(".concat(a.palette.customColors.main,", 0.28)")},"&:before, &:after":{display:"none"},"&.MuiInputBase-sizeSmall":{borderRadius:6},"&.Mui-error":{borderColor:a.palette.error.main},"&.Mui-focused":{boxShadow:a.shadows[2],"& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transform:"translateX(4px)"},"&.MuiInputBase-colorPrimary":{borderColor:a.palette.primary.main},"&.MuiInputBase-colorSecondary":{borderColor:a.palette.secondary.main},"&.MuiInputBase-colorInfo":{borderColor:a.palette.info.main},"&.MuiInputBase-colorSuccess":{borderColor:a.palette.success.main},"&.MuiInputBase-colorWarning":{borderColor:a.palette.warning.main},"&.MuiInputBase-colorError":{borderColor:a.palette.error.main},"&.Mui-error":{borderColor:a.palette.error.main}},"&.Mui-disabled":{backgroundColor:"".concat(a.palette.action.selected," !important")},"& .MuiInputAdornment-root":{marginTop:"0 !important"}},"& .MuiInputBase-input":{color:a.palette.text.secondary,"&:not(textarea)":{padding:"15.5px 13px"},"&:not(textarea).MuiInputBase-inputSizeSmall":{padding:"7.5px 13px"},"&:not(.MuiInputBase-readOnly):not([readonly])::placeholder":{transition:a.transitions.create(["opacity","transform"],{duration:a.transitions.duration.shorter})},"&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)":{paddingLeft:0},"&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)":{paddingRight:0}},"& .MuiFormHelperText-root":{lineHeight:1.154,margin:a.spacing(1,0,0),color:a.palette.text.secondary,fontSize:a.typography.body2.fontSize,"&.Mui-error":{color:a.palette.error.main}},"& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus":{backgroundColor:"transparent"},"& .MuiSelect-filled .MuiChip-root":{height:22},"& .MuiAutocomplete-input":{paddingLeft:"6px !important",paddingTop:"7.5px !important",paddingBottom:"7.5px !important","&.MuiInputBase-inputSizeSmall":{paddingLeft:"6px !important",paddingTop:"2.5px !important",paddingBottom:"2.5px !important"}},"& .MuiAutocomplete-inputRoot":{paddingTop:"8px !important",paddingLeft:"8px !important",paddingBottom:"8px !important","&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart":{paddingLeft:"13px !important"},"&.MuiInputBase-sizeSmall":{paddingTop:"5px !important",paddingLeft:"5px !important",paddingBottom:"5px !important","& .MuiAutocomplete-tag":{margin:2,height:22}}},"& .MuiInputBase-multiline":{padding:"15.25px 13px","&.MuiInputBase-sizeSmall":{padding:"7.25px 13px"},"& textarea.MuiInputBase-inputSizeSmall:placeholder-shown":{overflowX:"hidden"}},"& + .react-datepicker__close-icon":{top:11,"&:after":{fontSize:"1.6rem !important"}}}}),o=(0,i.forwardRef)((e,a)=>{let{size:t="small",InputLabelProps:i,...l}=e;return(0,r.jsx)(s,{size:t,inputRef:a,...l,variant:"filled",InputLabelProps:{...i,shrink:!0}})});a.Z=o},46762:function(e,a,t){"use strict";var r=t(85893),i=t(86886);let l=e=>{let{title:a,subtitle:t}=e;return(0,r.jsxs)(i.ZP,{item:!0,xs:12,children:[a,t||null]})};a.Z=l},31245:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ef}});var r=t(85893),i=t(41664),l=t.n(i),n=t(86886),s=t(90948),o=t(15861),d=t(46762),c=t(99226),m=t(66242),u=t(78445),p=t(58468);let x=[{id:1,avatar:"8.png",full_name:"Korrie O'Crevy",post:"Nuclear Power Engineer",email:"kocrevy0@thetimes.co.uk",city:"Krasnosilka",start_date:"09/23/2016",salary:23896.35,age:"61",experience:"1 Year",status:2},{id:7,avatar:"",full_name:"Eileen Diehn",post:"Environmental Specialist",email:"ediehn6@163.com",city:"Lampuyang",start_date:"10/15/2017",salary:18991.67,age:"59",experience:"9 Years",status:3},{id:11,avatar:"",full_name:"De Falloon",post:"Sales Representative",email:"dfalloona@ifeng.com",city:"Colima",start_date:"06/12/2018",salary:19252.12,age:"30",experience:"0 Year",status:4},{id:3,avatar:"7.png",full_name:"Stella Ganderton",post:"Operator",email:"sganderton2@tuttocitta.it",city:"Golcowa",start_date:"03/24/2018",salary:13076.28,age:"66",experience:"6 Years",status:5},{id:5,avatar:"",full_name:"Harmonia Nisius",post:"Senior Cost Accountant",email:"hnisius4@gnu.org",city:"Lucan",start_date:"08/25/2017",salary:10909.52,age:"33",experience:"3 Years",status:2},{id:6,avatar:"",full_name:"Genevra Honeywood",post:"Geologist",email:"ghoneywood5@narod.ru",city:"Maofan",start_date:"06/01/2017",salary:17803.8,age:"61",experience:"1 Year",status:1},{id:4,avatar:"8.png",full_name:"Dorolice Crossman",post:"Cost Accountant",email:"dcrossman3@google.co.jp",city:"Paquera",start_date:"12/03/2017",salary:12336.17,age:"22",experience:"2 Years",status:2},{id:8,avatar:"7.png",full_name:"Richardo Aldren",post:"Senior Sales Associate",email:"raldren7@mtv.com",city:"Skoghall",start_date:"11/05/2016",salary:19230.13,age:"55",experience:"5 Years",status:3},{id:9,avatar:"2.png",full_name:"Allyson Moakler",post:"Safety Technician",email:"amoakler8@shareasale.com",city:"Mogilany",start_date:"12/29/2018",salary:11677.32,age:"39",experience:"9 Years",status:5},{id:10,avatar:"7.png",full_name:"Merline Penhalewick",post:"Junior Executive",email:"mpenhalewick9@php.net",city:"Kanuma",start_date:"04/19/2019",salary:15939.52,age:"23",experience:"3 Years",status:2},{id:12,avatar:"",full_name:"Cyrus Gornal",post:"Senior Sales Associate",email:"cgornalb@fda.gov",city:"Boro Utara",start_date:"12/09/2017",salary:16745.47,age:"22",experience:"2 Years",status:4},{id:13,avatar:"",full_name:"Tallou Balf",post:"Staff Accountant",email:"tbalfc@sina.com.cn",city:"Siliana",start_date:"01/21/2016",salary:15488.53,age:"36",experience:"6 Years",status:4},{id:14,avatar:"",full_name:"Othilia Extill",post:"Associate Professor",email:"oextilld@theatlantic.com",city:"Brzyska",start_date:"02/01/2016",salary:18442.34,age:"43",experience:"3 Years",status:2},{id:15,avatar:"",full_name:"Wilmar Bourton",post:"Administrative Assistant",email:"wbourtone@sakura.ne.jp",city:"B\xedch Động",start_date:"04/25/2018",salary:13304.45,age:"19",experience:"9 Years",status:5},{id:16,avatar:"4.png",full_name:"Robinson Brazenor",post:"General Manager",email:"rbrazenorf@symantec.com",city:"Gendiwu",start_date:"12/23/2017",salary:11953.08,age:"66",experience:"6 Years",status:5},{id:17,avatar:"",full_name:"Nadia Bettenson",post:"Environmental Tech",email:"nbettensong@joomla.org",city:"Chabařovice",start_date:"07/11/2018",salary:20484.44,age:"64",experience:"4 Years",status:1},{id:18,avatar:"",full_name:"Titus Hayne",post:"Web Designer",email:"thayneh@kickstarter.com",city:"Yangon",start_date:"05/25/2019",salary:16871.48,age:"59",experience:"9 Years",status:1},{id:19,avatar:"4.png",full_name:"Roxie Huck",post:"Administrative Assistant",email:"rhucki@ed.gov",city:"Pol\xfdkastro",start_date:"04/04/2019",salary:19653.56,age:"41",experience:"1 Year",status:4},{id:20,avatar:"7.png",full_name:"Latashia Lewtey",post:"Actuary",email:"llewteyj@sun.com",city:"Hougong",start_date:"08/03/2017",salary:18303.87,age:"35",experience:"5 Years",status:1},{id:21,avatar:"",full_name:"Natalina Tyne",post:"Software Engineer",email:"ntynek@merriam-webster.com",city:"Yanguan",start_date:"03/16/2019",salary:15256.4,age:"30",experience:"0 Year",status:2},{id:22,avatar:"",full_name:"Faun Josefsen",post:"Analog Circuit Design manager",email:"fjosefsenl@samsung.com",city:"Wengyang",start_date:"07/08/2017",salary:11209.16,age:"40",experience:"0 Year",status:3},{id:23,avatar:"7.png",full_name:"Rosmunda Steed",post:"Assistant Media Planner",email:"rsteedm@xing.com",city:"Manzanares",start_date:"12/23/2017",salary:13778.34,age:"21",experience:"1 Year",status:5},{id:24,avatar:"",full_name:"Scott Jiran",post:"Graphic Designer",email:"sjirann@simplemachines.org",city:"Pinglin",start_date:"05/26/2016",salary:23081.71,age:"23",experience:"3 Years",status:1},{id:25,avatar:"",full_name:"Carmita Medling",post:"Accountant",email:"cmedlingo@hp.com",city:"Bourges",start_date:"07/31/2019",salary:13602.24,age:"47",experience:"7 Years",status:3},{id:26,avatar:"2.png",full_name:"Morgen Benes",post:"Senior Sales Associate",email:"mbenesp@ted.com",city:"C\xe0 Mau",start_date:"04/10/2016",salary:16969.63,age:"42",experience:"2 Years",status:4},{id:27,avatar:"",full_name:"Onfroi Doughton",post:"Civil Engineer",email:"odoughtonq@aboutads.info",city:"Utrecht (stad)",start_date:"09/29/2018",salary:23796.62,age:"28",experience:"8 Years",status:3},{id:28,avatar:"",full_name:"Kliment McGinney",post:"Chief Design Engineer",email:"kmcginneyr@paginegialle.it",city:"Xiaocheng",start_date:"07/09/2018",salary:24027.81,age:"28",experience:"8 Years",status:4},{id:29,avatar:"",full_name:"Devin Bridgland",post:"Tax Accountant",email:"dbridglands@odnoklassniki.ru",city:"Baoli",start_date:"07/17/2016",salary:13508.15,age:"48",experience:"8 Years",status:3},{id:30,avatar:"6.png",full_name:"Gilbert McFade",post:"Biostatistician",email:"gmcfadet@irs.gov",city:"Deje",start_date:"08/28/2018",salary:21632.3,age:"20",experience:"0 Year",status:2},{id:31,avatar:"",full_name:"Teressa Bleakman",post:"Senior Editor",email:"tbleakmanu@phpbb.com",city:"Žebr\xe1k",start_date:"09/03/2016",salary:24875.41,age:"37",experience:"7 Years",status:5},{id:32,avatar:"",full_name:"Marcelia Alleburton",post:"Safety Technician",email:"malleburtonv@amazon.com",city:"Basail",start_date:"06/02/2016",salary:23888.98,age:"53",experience:"3 Years",status:2},{id:33,avatar:"7.png",full_name:"Aili De Coursey",post:"Environmental Specialist",email:"adew@etsy.com",city:"Łazy",start_date:"09/30/2016",salary:14082.44,age:"27",experience:"7 Years",status:5},{id:34,avatar:"6.png",full_name:"Charlton Chatres",post:"Analyst Programmer",email:"cchatresx@goo.gl",city:"Reguengos de Monsaraz",start_date:"04/07/2016",salary:21386.52,age:"22",experience:"2 Years",status:3},{id:35,avatar:"1.png",full_name:"Nat Hugonnet",post:"Financial Advisor",email:"nhugonnety@wufoo.com",city:"Pimentel",start_date:"09/11/2019",salary:13835.97,age:"46",experience:"6 Years",status:4},{id:36,avatar:"",full_name:"Lorine Hearsum",post:"Payment Adjustment Coordinator",email:"lhearsumz@google.co.uk",city:"Shuiying",start_date:"03/05/2019",salary:22093.91,age:"47",experience:"7 Years",status:4},{id:37,avatar:"5.png",full_name:"Sheila-kathryn Haborn",post:"Environmental Specialist",email:"shaborn10@about.com",city:"Lewolang",start_date:"11/10/2018",salary:24624.23,age:"51",experience:"1 Year",status:3},{id:38,avatar:"3.png",full_name:"Alma Harvatt",post:"Administrative Assistant",email:"aharvatt11@addtoany.com",city:"Ulundi",start_date:"11/04/2016",salary:21782.82,age:"41",experience:"1 Year",status:1},{id:39,avatar:"2.png",full_name:"Beatrix Longland",post:"VP Quality Control",email:"blongland12@gizmodo.com",city:"Damu",start_date:"07/18/2016",salary:22794.6,age:"62",experience:"2 Years",status:2},{id:40,avatar:"4.png",full_name:"Hammad Condell",post:"Project Manager",email:"hcondell13@tiny.cc",city:"Bulung’ur",start_date:"11/04/2018",salary:10872.83,age:"37",experience:"7 Years",status:4},{id:41,avatar:"",full_name:"Parker Bice",post:"Technical Writer",email:"pbice14@ameblo.jp",city:"Shanlian",start_date:"03/02/2016",salary:17471.92,age:"65",experience:"5 Years",status:5},{id:42,avatar:"",full_name:"Lowrance Orsi",post:"Biostatistician",email:"lorsi15@wp.com",city:"Dengteke",start_date:"12/10/2018",salary:24719.51,age:"64",experience:"4 Years",status:1},{id:43,avatar:"8.png",full_name:"Ddene Chaplyn",post:"Environmental Tech",email:"dchaplyn16@nymag.com",city:"Lattes",start_date:"01/23/2019",salary:11958.33,age:"38",experience:"8 Years",status:2},{id:44,avatar:"",full_name:"Washington Bygraves",post:"Human Resources Manager",email:"wbygraves17@howstuffworks.com",city:"Zlat\xe9 Hory",start_date:"09/07/2016",salary:10552.43,age:"37",experience:"7 Years",status:1},{id:45,avatar:"7.png",full_name:"Meghann Bodechon",post:"Operator",email:"mbodechon18@1und1.de",city:"Itō",start_date:"07/23/2018",salary:23024.28,age:"61",experience:"1 Year",status:4},{id:46,avatar:"1.png",full_name:"Moshe De Ambrosis",post:"Recruiting Manager",email:"mde19@purevolume.com",city:"San Diego",start_date:"02/10/2018",salary:10409.9,age:"47",experience:"7 Years",status:5},{id:47,avatar:"4.png",full_name:"Had Chatelot",post:"Cost Accountant",email:"hchatelot1a@usatoday.com",city:"Mercedes",start_date:"11/23/2016",salary:11446.3,age:"64",experience:"4 Years",status:4},{id:48,avatar:"",full_name:"Georgia McCrum",post:"Registered Nurse",email:"gmccrum1b@icio.us",city:"Nggalak",start_date:"04/19/2018",salary:14002.31,age:"63",experience:"3 Years",status:1},{id:49,avatar:"5.png",full_name:"Krishnah Stilldale",post:"VP Accounting",email:"kstilldale1c@chronoengine.com",city:"Slavs’ke",start_date:"03/18/2017",salary:10704.29,age:"56",experience:"6 Years",status:1},{id:50,avatar:"4.png",full_name:"Mario Umbert",post:"Research Assistant",email:"mumbert1d@digg.com",city:"Chorotis",start_date:"05/13/2019",salary:21813.54,age:"43",experience:"3 Years",status:1},{id:95,avatar:"2.png",full_name:"Edwina Ebsworth",post:"Human Resources Assistant",email:"eebsworth2m@sbwire.com",city:"Puzi",start_date:"09/27/2018",salary:19586.23,age:"27",experience:"2 Years",status:1}],h=[{flex:.1,field:"id",minWidth:80,headerName:"ID"},{flex:.25,minWidth:200,field:"full_name",headerName:"Name"},{flex:.25,minWidth:230,field:"email",headerName:"Email"},{flex:.15,type:"date",minWidth:130,headerName:"Date",field:"start_date",valueGetter:e=>new Date(e.value)},{flex:.15,minWidth:120,field:"experience",headerName:"Experience"},{flex:.1,field:"age",minWidth:80,headerName:"Age"}],g=()=>(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{title:"Basic"}),(0,r.jsx)(c.Z,{sx:{height:500},children:(0,r.jsx)(p._,{columns:h,rows:x.slice(0,10)})})]});var f=t(67294),y=t(95600),v=t(10410),b=t(93946),_=t(87462),j=t(63366),Z=t(94780),S=t(28320),C=t(90263),w=t(90198),M=t(14696),N=t(61207),k=t(10269),W=t(27476),z=t(49630),B=t(48836),P=t(73490);let A=["componentsProps"],Y=e=>{let{classes:a}=e;return(0,Z.Z)({root:["toolbarFilterList"]},P.d,a)},D=(0,s.ZP)("ul",{name:"MuiDataGrid",slot:"ToolbarFilterList",overridesResolver:(e,a)=>a.toolbarFilterList})(({theme:e})=>({margin:e.spacing(1,1,.5),padding:e.spacing(0,1)})),I=f.forwardRef(function(e,a){var t,i;let{componentsProps:l={}}=e,n=(0,j.Z)(e,A),s=l.button||{},o=(0,z.l)(),d=(0,B.B)(),c=(0,M.P)(o,N.DY),m=(0,M.P)(o,w.WH),u=(0,M.P)(o,k.e),p=Y(d),x=f.useMemo(()=>{if(u.open)return o.current.getLocaleText("toolbarFiltersTooltipHide");if(0===c.length)return o.current.getLocaleText("toolbarFiltersTooltipShow");let e=e=>m[e.field].filterOperators.find(a=>a.value===e.operator).label||o.current.getLocaleText(`filterOperator${(0,S.Z)(e.operator)}`).toString(),a=e=>{let{getValueAsString:a}=m[e.field].filterOperators.find(a=>a.value===e.operator);return a?a(e.value):e.value};return(0,r.jsxs)("div",{children:[o.current.getLocaleText("toolbarFiltersTooltipActive")(c.length),(0,r.jsx)(D,{className:p.root,ownerState:d,children:c.map((t,i)=>(0,_.Z)({},m[t.field]&&(0,r.jsx)("li",{children:`${m[t.field].headerName||t.field}
                  ${e(t)}
                  ${t.value?a(t):""}`},i)))})]})},[o,d,u.open,c,m,p]),h=e=>{var a;let{open:t,openedPanelValue:r}=u;t&&r===W.y.filters?o.current.hideFilterPanel():o.current.showFilterPanel(),null==(a=s.onClick)||a.call(s,e)};return d.disableColumnFilter?null:(0,r.jsx)(d.slots.baseTooltip,(0,_.Z)({title:x,enterDelay:1e3},n,null==(t=d.slotProps)?void 0:t.baseTooltip,{children:(0,r.jsx)(d.slots.baseButton,(0,_.Z)({ref:a,size:"small","aria-label":o.current.getLocaleText("toolbarFiltersLabel"),startIcon:(0,r.jsx)(C.Z,{badgeContent:c.length,color:"primary",children:(0,r.jsx)(d.slots.openFilterButtonIcon,{})})},s,{onClick:h},null==(i=d.slotProps)?void 0:i.baseButton,{children:o.current.getLocaleText("toolbarFilters")}))}))});var T=t(66476),R=t(79878);let H=e=>(0,r.jsxs)(c.Z,{sx:{gap:2,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",p:e=>e.spacing(2,5,4,5)},children:[(0,r.jsx)(I,{}),(0,r.jsx)(T.Z,{value:e.value,placeholder:"Search…",onChange:e.onChange,InputProps:{startAdornment:(0,r.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(R.Z,{fontSize:"1.25rem",icon:"tabler:search"})}),endAdornment:(0,r.jsx)(b.Z,{size:"small",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(R.Z,{fontSize:"1.25rem",icon:"tabler:x"})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}})]});var E=t(12470);let L=e=>{let{row:a}=e,t=["success","error","warning","info","primary","secondary"][Math.floor(6*Math.random())];return a.avatar.length?(0,r.jsx)(v.Z,{src:"/images/avatars/".concat(a.avatar),sx:{mr:3,width:"1.875rem",height:"1.875rem"}}):(0,r.jsx)(v.Z,{skin:"light",color:t,sx:{mr:3,fontSize:".8rem",width:"1.875rem",height:"1.875rem"},children:(0,E.Q)(a.full_name?a.full_name:"John Doe")})},G={1:{title:"current",color:"primary"},2:{title:"professional",color:"success"},3:{title:"rejected",color:"error"},4:{title:"resigned",color:"warning"},5:{title:"applied",color:"info"}},O=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),F=[{flex:.275,minWidth:290,field:"full_name",headerName:"Name",renderCell:e=>{let{row:a}=e;return(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[L(e),(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(o.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:a.full_name}),(0,r.jsx)(o.Z,{noWrap:!0,variant:"caption",children:a.email})]})]})}},{flex:.2,type:"date",minWidth:120,headerName:"Date",field:"start_date",valueGetter:e=>new Date(e.value),renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.start_date})},{flex:.2,minWidth:110,field:"salary",headerName:"Salary",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.salary})},{flex:.125,field:"age",minWidth:80,headerName:"Age",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.age})},{flex:.2,minWidth:140,field:"status",headerName:"Status",renderCell:e=>{let a=G[e.row.status];return(0,r.jsx)(y.Z,{rounded:!0,size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})}}],J=()=>{let[e]=(0,f.useState)(x),[a,t]=(0,f.useState)(""),[i,l]=(0,f.useState)([]),[n,s]=(0,f.useState)({page:0,pageSize:7}),o=a=>{t(a);let r=RegExp(O(a),"i"),i=e.filter(e=>Object.keys(e).some(a=>r.test(e[a].toString())));a.length?l(i):l([])};return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{title:"Quick Filter"}),(0,r.jsx)(p._,{autoHeight:!0,columns:F,pageSizeOptions:[7,10,25,50],paginationModel:n,slots:{toolbar:H},onPaginationModelChange:s,rows:i.length?i:e,sx:{"& .MuiSvgIcon-root":{fontSize:"1.125rem"}},slotProps:{baseButton:{size:"medium",variant:"outlined"},toolbar:{value:a,clearSearch:()=>o(""),onChange:e=>o(e.target.value)}}})]})};var $=t(11057),Q=t(86501);let K=e=>{let{row:a}=e,t=["success","error","warning","info","primary","secondary"][Math.floor(6*Math.random())];return a.avatar.length?(0,r.jsx)(v.Z,{src:"/images/avatars/".concat(a.avatar),sx:{mr:3,width:"1.875rem",height:"1.875rem"}}):(0,r.jsx)(v.Z,{skin:"light",color:t,sx:{mr:3,fontSize:".8rem",width:"1.875rem",height:"1.875rem"},children:(0,E.Q)(a.full_name?a.full_name:"John Doe")})},X={1:{title:"current",color:"primary"},2:{title:"professional",color:"success"},3:{title:"rejected",color:"error"},4:{title:"resigned",color:"warning"},5:{title:"applied",color:"info"}},U=e=>(0,Q.ZP)((0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[K(e),(0,r.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:(0,r.jsx)(o.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:e.row.full_name})})]})),V=()=>{let[e,a]=(0,f.useState)({page:0,pageSize:7}),[t,i]=(0,f.useState)({full_name:!0});return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{title:"Column",action:(0,r.jsx)("div",{children:(0,r.jsx)($.Z,{size:"medium",variant:"contained",onClick:()=>i({full_name:!t.full_name}),children:"Toggle Name Column"})})}),(0,r.jsx)(p._,{autoHeight:!0,rows:x,columns:[{flex:.25,minWidth:290,field:"full_name",headerName:"Name",renderCell:e=>{let{row:a}=e;return(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[K(e),(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(o.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:a.full_name}),(0,r.jsx)(o.Z,{noWrap:!0,variant:"caption",children:a.email})]})]})}},{flex:.175,type:"date",minWidth:120,headerName:"Date",field:"start_date",valueGetter:e=>new Date(e.value),renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.start_date})},{flex:.15,minWidth:110,field:"salary",headerName:"Salary",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.salary})},{flex:.1,field:"age",minWidth:80,headerName:"Age",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.age})},{flex:.2,minWidth:140,field:"status",headerName:"Status",renderCell:e=>{let a=X[e.row.status];return(0,r.jsx)(y.Z,{rounded:!0,size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})}},{flex:.125,minWidth:140,field:"actions",headerName:"Actions",renderCell:e=>(0,r.jsx)($.Z,{size:"small",variant:"outlined",color:"secondary",onClick:()=>U(e),children:"Get Name"})}],disableRowSelectionOnClick:!0,pageSizeOptions:[7,10,25,50],paginationModel:e,columnVisibilityModel:t,onPaginationModelChange:a,onColumnVisibilityModelChange:e=>i(e)})]})},q=[{flex:.1,field:"id",minWidth:80,headerName:"ID"},{flex:.25,minWidth:200,editable:!0,field:"full_name",headerName:"Name"},{flex:.25,minWidth:230,field:"email",editable:!0,headerName:"Email"},{flex:.15,type:"date",minWidth:130,editable:!0,headerName:"Date",field:"start_date",valueGetter:e=>new Date(e.value)},{flex:.15,minWidth:120,editable:!0,field:"experience",headerName:"Experience"},{flex:.1,field:"age",minWidth:80,type:"number",editable:!0,headerName:"Age"}],ee=()=>(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{title:"Editable"}),(0,r.jsx)(c.Z,{sx:{height:500},children:(0,r.jsx)(p._,{columns:q,rows:x.slice(0,10)})})]}),ea=e=>{let{row:a}=e,t=["success","error","warning","info","primary","secondary"][Math.floor(6*Math.random())];return a.avatar.length?(0,r.jsx)(v.Z,{src:"/images/avatars/".concat(a.avatar),sx:{mr:3,width:"1.875rem",height:"1.875rem"}}):(0,r.jsx)(v.Z,{skin:"light",color:t,sx:{mr:3,fontSize:".8rem",width:"1.875rem",height:"1.875rem"},children:(0,E.Q)(a.full_name?a.full_name:"John Doe")})},et={1:{title:"current",color:"primary"},2:{title:"professional",color:"success"},3:{title:"rejected",color:"error"},4:{title:"resigned",color:"warning"},5:{title:"applied",color:"info"}},er=()=>{let[e,a]=(0,f.useState)(!0),[t,i]=(0,f.useState)({page:0,pageSize:7});return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{title:"Sorting",action:(0,r.jsx)("div",{children:(0,r.jsx)($.Z,{size:"medium",variant:"contained",onClick:()=>a(!e),children:"Disable Sorting: ".concat(!e)})})}),(0,r.jsx)(p._,{autoHeight:!0,rows:x,columns:[{flex:.275,minWidth:290,field:"full_name",headerName:"Name",sortable:e,renderCell:e=>{let{row:a}=e;return(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[ea(e),(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(o.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:a.full_name}),(0,r.jsx)(o.Z,{noWrap:!0,variant:"caption",children:a.email})]})]})}},{flex:.2,type:"date",minWidth:120,headerName:"Date",field:"start_date",sortable:e,valueGetter:e=>new Date(e.value),renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.start_date})},{flex:.2,minWidth:110,field:"salary",headerName:"Salary",sortable:e,renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.salary})},{flex:.125,field:"age",minWidth:80,headerName:"Age",sortable:e,renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.age})},{flex:.2,minWidth:140,field:"status",headerName:"Status",sortable:e,renderCell:e=>{let a=et[e.row.status];return(0,r.jsx)(y.Z,{rounded:!0,size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})}}],pageSizeOptions:[7,10,25,50],paginationModel:t,onPaginationModelChange:i})]})},ei=e=>{let{row:a}=e,t=["success","error","warning","info","primary","secondary"][Math.floor(6*Math.random())];return a.avatar.length?(0,r.jsx)(v.Z,{src:"/images/avatars/".concat(a.avatar),sx:{mr:3,width:"1.875rem",height:"1.875rem"}}):(0,r.jsx)(v.Z,{skin:"light",color:t,sx:{mr:3,fontSize:".8rem",width:"1.875rem",height:"1.875rem"},children:(0,E.Q)(a.full_name?a.full_name:"John Doe")})},el={1:{title:"current",color:"primary"},2:{title:"professional",color:"success"},3:{title:"rejected",color:"error"},4:{title:"resigned",color:"warning"},5:{title:"applied",color:"info"}},en=[{flex:.25,minWidth:290,field:"full_name",headerName:"Name",renderCell:e=>{let{row:a}=e;return(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[ei(e),(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(o.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:a.full_name}),(0,r.jsx)(o.Z,{noWrap:!0,variant:"caption",children:a.email})]})]})}},{flex:.175,type:"date",minWidth:120,headerName:"Date",field:"start_date",valueGetter:e=>new Date(e.value),renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.start_date})},{flex:.175,minWidth:110,field:"salary",headerName:"Salary",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.salary})},{flex:.125,field:"age",minWidth:80,headerName:"Age",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.age})},{flex:.175,minWidth:140,field:"status",headerName:"Status",renderCell:e=>{let a=el[e.row.status];return(0,r.jsx)(y.Z,{rounded:!0,size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})}}],es=()=>{let[e,a]=(0,f.useState)({page:0,pageSize:7});return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{title:"Selection"}),(0,r.jsx)(p._,{autoHeight:!0,rows:x,columns:en,checkboxSelection:!0,pageSizeOptions:[7,10,25,50],paginationModel:e,onPaginationModelChange:a})]})};var eo=t(6154),ed=t(10930);let ec=e=>(0,r.jsxs)(c.Z,{sx:{gap:2,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",p:e=>e.spacing(2,5,4,5)},children:[(0,r.jsx)(ed.Zh,{printOptions:{disableToolbarButton:!0}}),(0,r.jsx)(T.Z,{value:e.value,placeholder:"Search…",onChange:e.onChange,InputProps:{startAdornment:(0,r.jsx)(c.Z,{sx:{mr:2,display:"flex"},children:(0,r.jsx)(R.Z,{fontSize:"1.25rem",icon:"tabler:search"})}),endAdornment:(0,r.jsx)(b.Z,{size:"small",title:"Clear","aria-label":"Clear",onClick:e.clearSearch,children:(0,r.jsx)(R.Z,{fontSize:"1.25rem",icon:"tabler:x"})})},sx:{width:{xs:1,sm:"auto"},"& .MuiInputBase-root > svg":{mr:2}}})]}),em=e=>{let{row:a}=e,t=["success","error","warning","info","primary","secondary"][Math.floor(6*Math.random())];return a.avatar.length?(0,r.jsx)(v.Z,{src:"/images/avatars/".concat(a.avatar),sx:{mr:3,width:"1.875rem",height:"1.875rem"}}):(0,r.jsx)(v.Z,{skin:"light",color:t,sx:{mr:3,fontSize:".8rem",width:"1.875rem",height:"1.875rem"},children:(0,E.Q)(a.full_name?a.full_name:"John Doe")})},eu={1:{title:"current",color:"primary"},2:{title:"professional",color:"success"},3:{title:"rejected",color:"error"},4:{title:"resigned",color:"warning"},5:{title:"applied",color:"info"}},ep=[{flex:.25,minWidth:290,field:"full_name",headerName:"Name",renderCell:e=>{let{row:a}=e;return(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center"},children:[em(e),(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(o.Z,{noWrap:!0,variant:"body2",sx:{color:"text.primary",fontWeight:600},children:a.full_name}),(0,r.jsx)(o.Z,{noWrap:!0,variant:"caption",children:a.email})]})]})}},{flex:.175,type:"date",minWidth:120,headerName:"Date",field:"start_date",valueGetter:e=>new Date(e.value),renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.start_date})},{flex:.175,minWidth:110,field:"salary",headerName:"Salary",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.salary})},{flex:.125,field:"age",minWidth:80,headerName:"Age",renderCell:e=>(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"text.primary"},children:e.row.age})},{flex:.175,minWidth:140,field:"status",headerName:"Status",renderCell:e=>{let a=eu[e.row.status];return(0,r.jsx)(y.Z,{rounded:!0,size:"small",skin:"light",color:a.color,label:a.title,sx:{"& .MuiChip-label":{textTransform:"capitalize"}}})}}],ex=()=>{let[e,a]=(0,f.useState)(0),[t,i]=(0,f.useState)("asc"),[l,n]=(0,f.useState)([]),[s,o]=(0,f.useState)(""),[d,c]=(0,f.useState)("full_name"),[x,h]=(0,f.useState)({page:0,pageSize:7}),g=(0,f.useCallback)(async(e,t,r)=>{await eo.Z.get("/api/table/data",{params:{q:t,sort:e,column:r}}).then(e=>{var t;a(e.data.total),n((t=x.page,e.data.data.slice(t*x.pageSize,(t+1)*x.pageSize)))})},[x]);(0,f.useEffect)(()=>{g(t,s,d)},[g,s,t,d]);let y=e=>{e.length?(i(e[0].sort),c(e[0].field),g(e[0].sort,s,e[0].field)):(i("asc"),c("full_name"))},v=e=>{o(e),g(t,e,d)};return(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(u.Z,{title:"Server Side"}),(0,r.jsx)(p._,{autoHeight:!0,pagination:!0,rows:l,rowCount:e,columns:ep,checkboxSelection:!0,sortingMode:"server",paginationMode:"server",pageSizeOptions:[7,10,25,50],paginationModel:x,onSortModelChange:y,slots:{toolbar:ec},onPaginationModelChange:h,slotProps:{baseButton:{size:"medium",variant:"tonal"},toolbar:{value:s,clearSearch:()=>v(""),onChange:e=>v(e.target.value)}}})]})},eh=(0,s.ZP)(l())(e=>{let{theme:a}=e;return{textDecoration:"none",color:a.palette.primary.main}}),eg=()=>(0,r.jsxs)(n.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(d.Z,{title:(0,r.jsx)(o.Z,{variant:"h4",children:(0,r.jsx)(eh,{href:"https://mui.com/x/react-data-grid/",target:"_blank",children:"Data Grid"})}),subtitle:(0,r.jsx)(o.Z,{sx:{color:"text.secondary"},children:"Data Grid is a fast and extendable react data table and react data grid."})}),(0,r.jsx)(n.ZP,{item:!0,xs:12,children:(0,r.jsx)(g,{})}),(0,r.jsx)(n.ZP,{item:!0,xs:12,children:(0,r.jsx)(ee,{})}),(0,r.jsx)(n.ZP,{item:!0,xs:12,children:(0,r.jsx)(V,{})}),(0,r.jsx)(n.ZP,{item:!0,xs:12,children:(0,r.jsx)(er,{})}),(0,r.jsx)(n.ZP,{item:!0,xs:12,children:(0,r.jsx)(J,{})}),(0,r.jsx)(n.ZP,{item:!0,xs:12,children:(0,r.jsx)(es,{})}),(0,r.jsx)(n.ZP,{item:!0,xs:12,children:(0,r.jsx)(ex,{})})]});var ef=eg}},function(e){e.O(0,[9230,8468,9774,2888,179],function(){return e(e.s=8603)}),_N_E=e.O()}]);