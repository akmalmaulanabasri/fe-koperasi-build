(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4561],{28035:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jurnal-pembelian/[detail]",function(){return r(7650)}])},37140:function(e,t){"use strict";t.Z={baseUrl:"https://be-koperasi.dytech.my.id/api"}},7650:function(e,t,r){"use strict";r.r(t);var n=r(85893),a=r(15861),i=r(90629),l=r(58468),o=r(6154),s=r(37140),d=r(67294);r(1954);var h=r(11163);let c=[{flex:.1,field:"no",minWidth:220,headerName:"NO",renderCell:e=>{let{id:t}=e.row;return(0,n.jsx)(a.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:e.api.getRowIndexRelativeToVisibleRows(e.row.id)+1})}},{flex:.1,field:"nama_produk",minWidth:220,headerName:"Nama Produk",renderCell:e=>{let{row:t}=e;return(0,n.jsx)(a.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:t.nama_barang})}},{flex:.1,field:"tipe_barang",minWidth:220,headerName:"Tipe Produk",renderCell:e=>{let{row:t}=e;return(0,n.jsx)(a.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:t.tipe_barang})}},{flex:.1,field:"harga",minWidth:220,headerName:"Harga",renderCell:e=>{let{row:t}=e,i=r(87642);return(0,n.jsx)(a.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:i.convert(t.harga)})}},{flex:.1,field:"jumlah",minWidth:220,headerName:"Jumlah",renderCell:e=>{let{row:t}=e;return(0,n.jsx)(a.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:t.jumlah})}},{flex:.1,field:"total_harga",minWidth:220,headerName:"Total Harga",renderCell:e=>{let{row:t}=e,i=r(87642);return(0,n.jsx)(a.Z,{noWrap:!0,sx:{color:"text.secondary",fontWeight:500},children:i.convert(t.total_harga)})}}],u=()=>{let[e,t]=(0,d.useState)(null),u=localStorage.getItem("accessToken"),x=(0,h.useRouter)(),p=x.query.detail,f=r(87642),g=async()=>{await o.Z.get(s.Z.baseUrl+"/pembelian/"+p,{headers:{Authorization:"Bearer ".concat(u)}}).then(e=>{t(e.data.data)})};return(0,d.useEffect)(()=>{g()},[]),(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsxs)(i.Z,{sx:{p:5},children:[(0,n.jsx)(a.Z,{sx:{fontSize:20,mb:3},children:"Data Pembelian"}),(0,n.jsxs)(a.Z,{sx:{fontSize:16},children:["Supplier : ",e.pembelian.supplier]}),(0,n.jsxs)(a.Z,{sx:{fontSize:16},children:["Total Transaksi : ",f.convert(e.pembelian.total_harga)]}),(0,n.jsx)(l._,{sx:{mt:3,border:"1px solid #00000020"},autoHeight:!0,pagination:!0,rows:e.itemPembelian,rowHeight:62,columns:c,disableRowSelectionOnClick:!0,initialState:{pagination:{paginationModel:{pageSize:5}}},pageSizeOptions:[5,10]})]})})};t.default=u},87642:function(e){e.exports={convert:e=>{let t=String(e).split("").reverse();for(let e=0;e<t.length;e++)(e+1)%3==0&&e!=t.length-1&&(t[e]=`.${t[e]}`);return`Rp. ${t.reverse().join("")},00`}}}},function(e){e.O(0,[9230,8468,9774,2888,179],function(){return e(e.s=28035)}),_N_E=e.O()}]);