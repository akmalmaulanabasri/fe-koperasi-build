(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9673],{18377:function(e,n,t){"use strict";var r=t(61354);let i=(0,r.Z)();n.Z=i},84725:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pengurus",function(){return t(1217)}])},37140:function(e,n){"use strict";n.Z={baseUrl:"https://be-koperasi.dytech.my.id/api"}},1217:function(e,n,t){"use strict";t.r(n);var r=t(85893),i=t(15861),a=t(11057),s=t(90629),o=t(58468),l=t(6154),u=t(67294),c=t(37140),d=t(1954),h=t(18377),p=t(11163);let f=[{flex:.1,field:"name",minWidth:220,headerName:"Name",renderCell:e=>{let{row:n}=e,{name:t,date:a}=n;return(0,r.jsx)(i.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:t})}},{flex:.1,field:"phone_number",minWidth:220,headerName:"No Telp",renderCell:e=>{let{row:n}=e;return(0,r.jsx)(i.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:n.phone_number})}},{flex:.1,field:"role_name",minWidth:220,headerName:"Role Akses",renderCell:e=>{let{row:n}=e;return(0,r.jsx)(i.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:n.role.name})}},{flex:.1,minWidth:100,sortable:!1,field:"actions",headerName:"Actions",renderCell:()=>(0,r.jsx)(a.Z,{variant:"contained",children:(0,r.jsx)(d.JO,{icon:"eva:edit-outline"})})}],x=()=>{let e=(0,p.useRouter)(),[n,t]=(0,u.useState)([]),d=localStorage.getItem("accessToken"),x=async()=>{await l.Z.get(c.Z.baseUrl+"/user/user-pengurus",{headers:{Authorization:"Bearer "+d}}).then(e=>{t(e.data.users)}).catch(()=>{})};return(0,u.useEffect)(()=>{x()},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.Z,{sx:{my:5,display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(i.Z,{sx:{fontSize:20},children:"Daftar pengurus koperasi"}),(0,r.jsx)(a.Z,{variant:"contained",onClick:()=>e.push("/pengurus/tambah"),children:"Tambah pengurus koperasi"})]})," ",(0,r.jsx)(s.Z,{sx:{p:5},children:(0,r.jsx)(o._,{sx:{mt:3,border:"1px solid #00000020"},autoHeight:!0,pagination:!0,rows:n,rowHeight:62,columns:f,disableRowSelectionOnClick:!0,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5,10]})})]})};n.default=x}},function(e){e.O(0,[9230,8468,9774,2888,179],function(){return e(e.s=84725)}),_N_E=e.O()}]);