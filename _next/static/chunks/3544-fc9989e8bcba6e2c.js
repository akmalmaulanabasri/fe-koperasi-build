"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3544],{43544:function(e,s,n){var i=n(85893),r=n(67294),c=n(41664),t=n.n(c),l=n(86886),x=n(46901),o=n(7906),d=n(67720),a=n(53816),h=n(53184),j=n(295),Z=n(15861),m=n(99226),p=n(90948),y=n(2734),f=n(98102),u=n(6154),g=n(17562);let b=(0,p.ZP)(m.Z)(e=>{let{theme:s}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between","&:not(:last-of-type)":{marginBottom:s.spacing(2)}}}),v=(0,p.ZP)(f.Z)(e=>{let{theme:s}=e;return{borderBottom:0,paddingLeft:"0 !important",paddingRight:"0 !important",paddingTop:"".concat(s.spacing(1)," !important"),paddingBottom:"".concat(s.spacing(1)," !important")}}),w=e=>{let{id:s}=e,[n,c]=(0,r.useState)(!1),[p,w]=(0,r.useState)(null),P=(0,y.Z)();if((0,r.useEffect)(()=>{setTimeout(()=>{window.print()},100)},[]),(0,r.useEffect)(()=>{u.Z.get("/apps/invoice/single-invoice",{params:{id:s}}).then(e=>{w(e.data),c(!1)}).catch(()=>{w(null),c(!0)})},[s]),p){let{invoice:e,paymentDetails:s}=p;return(0,i.jsxs)(m.Z,{sx:{p:12,pb:6},children:[(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsx)(l.ZP,{item:!0,xs:8,sx:{mb:{sm:0,xs:4}},children:(0,i.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,i.jsxs)(m.Z,{sx:{mb:6,display:"flex",alignItems:"center"},children:[(0,i.jsxs)("svg",{width:34,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:P.palette.primary.main,d:"M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"}),(0,i.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"}),(0,i.jsx)("path",{fill:"#161616",opacity:.06,fillRule:"evenodd",clipRule:"evenodd",d:"M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",fill:P.palette.primary.main,d:"M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"})]}),(0,i.jsx)(Z.Z,{variant:"h4",sx:{ml:2.5,fontWeight:700,lineHeight:"24px"},children:g.Z.templateName})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(Z.Z,{sx:{mb:1,color:"text.secondary"},children:"Office 149, 450 South Brand Brooklyn"}),(0,i.jsx)(Z.Z,{sx:{mb:1,color:"text.secondary"},children:"San Diego County, CA 91905, USA"}),(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]})}),(0,i.jsx)(l.ZP,{item:!0,xs:4,children:(0,i.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{sm:"flex-end",xs:"flex-start"}},children:[(0,i.jsx)(Z.Z,{variant:"h4",sx:{mb:2},children:"Invoice #".concat(e.id)}),(0,i.jsxs)(m.Z,{sx:{mb:2,display:"flex"},children:[(0,i.jsx)(Z.Z,{sx:{mr:3,color:"text.secondary"},children:"Date Issued:"}),(0,i.jsx)(Z.Z,{sx:{fontWeight:600,color:"text.secondary"},children:e.issuedDate})]}),(0,i.jsxs)(m.Z,{sx:{display:"flex"},children:[(0,i.jsx)(Z.Z,{sx:{mr:3,color:"text.secondary"},children:"Date Due:"}),(0,i.jsx)(Z.Z,{sx:{fontWeight:600,color:"text.secondary"},children:e.dueDate})]})]})})]}),(0,i.jsx)(d.Z,{sx:{my:e=>"".concat(e.spacing(6)," !important")}}),(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsxs)(l.ZP,{item:!0,xs:7,md:8,sx:{mb:{lg:0,xs:4}},children:[(0,i.jsx)(Z.Z,{variant:"h6",sx:{mb:3.5,fontWeight:600},children:"Invoice To:"}),(0,i.jsx)(Z.Z,{sx:{mb:2,color:"text.secondary"},children:e.name}),(0,i.jsx)(Z.Z,{sx:{mb:2,color:"text.secondary"},children:e.company}),(0,i.jsx)(Z.Z,{sx:{mb:2,color:"text.secondary"},children:e.address}),(0,i.jsx)(Z.Z,{sx:{mb:2,color:"text.secondary"},children:e.contact}),(0,i.jsx)(Z.Z,{sx:{mb:2,color:"text.secondary"},children:e.companyEmail})]}),(0,i.jsxs)(l.ZP,{item:!0,xs:5,md:4,children:[(0,i.jsx)(Z.Z,{variant:"h6",sx:{mb:3.5,fontWeight:600},children:"Bill To:"}),(0,i.jsx)(o.Z,{children:(0,i.jsxs)(j.Z,{children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(v,{sx:{color:"text.secondary"},children:"Total Due:"}),(0,i.jsx)(v,{sx:{fontWeight:500,color:"text.secondary"},children:s.totalDue})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(v,{sx:{color:"text.secondary"},children:"Bank name:"}),(0,i.jsx)(v,{sx:{color:"text.secondary"},children:s.bankName})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(v,{sx:{color:"text.secondary"},children:"Country:"}),(0,i.jsx)(v,{sx:{color:"text.secondary"},children:s.country})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(v,{sx:{color:"text.secondary"},children:"IBAN:"}),(0,i.jsx)(v,{sx:{color:"text.secondary"},children:s.iban})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(v,{sx:{color:"text.secondary"},children:"SWIFT code:"}),(0,i.jsx)(v,{sx:{color:"text.secondary"},children:s.swiftCode})]})]})})]})]}),(0,i.jsx)(d.Z,{sx:{mt:e=>"".concat(e.spacing(6)," !important"),mb:"0 !important"}}),(0,i.jsxs)(o.Z,{sx:{mb:6},children:[(0,i.jsx)(h.Z,{children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(f.Z,{children:"Item"}),(0,i.jsx)(f.Z,{children:"Description"}),(0,i.jsx)(f.Z,{children:"hours"}),(0,i.jsx)(f.Z,{children:"qty"}),(0,i.jsx)(f.Z,{children:"Total"})]})}),(0,i.jsxs)(j.Z,{sx:{"& .MuiTableCell-root":{py:"".concat(P.spacing(2.5)," !important"),fontSize:P.typography.body1.fontSize}},children:[(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(f.Z,{children:"Premium Branding Package"}),(0,i.jsx)(f.Z,{children:"Branding & Promotion"}),(0,i.jsx)(f.Z,{children:"48"}),(0,i.jsx)(f.Z,{children:"1"}),(0,i.jsx)(f.Z,{children:"$32"})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(f.Z,{children:"Social Media"}),(0,i.jsx)(f.Z,{children:"Social media templates"}),(0,i.jsx)(f.Z,{children:"42"}),(0,i.jsx)(f.Z,{children:"1"}),(0,i.jsx)(f.Z,{children:"$28"})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(f.Z,{children:"Web Design"}),(0,i.jsx)(f.Z,{children:"Web designing package"}),(0,i.jsx)(f.Z,{children:"46"}),(0,i.jsx)(f.Z,{children:"1"}),(0,i.jsx)(f.Z,{children:"$24"})]}),(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(f.Z,{children:"SEO"}),(0,i.jsx)(f.Z,{children:"Search engine optimization"}),(0,i.jsx)(f.Z,{children:"40"}),(0,i.jsx)(f.Z,{children:"1"}),(0,i.jsx)(f.Z,{children:"$22"})]})]})]}),(0,i.jsxs)(l.ZP,{container:!0,children:[(0,i.jsxs)(l.ZP,{item:!0,xs:8,sm:7,lg:9,children:[(0,i.jsxs)(m.Z,{sx:{mb:2,display:"flex",alignItems:"center"},children:[(0,i.jsx)(Z.Z,{sx:{mr:2,fontWeight:500,color:"text.secondary"},children:"Salesperson:"}),(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Tommy Shelby"})]}),(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Thanks for your business"})]}),(0,i.jsxs)(l.ZP,{item:!0,xs:4,sm:5,lg:3,children:[(0,i.jsxs)(b,{children:[(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Subtotal:"}),(0,i.jsx)(Z.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"$1800"})]}),(0,i.jsxs)(b,{children:[(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Discount:"}),(0,i.jsx)(Z.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"$28"})]}),(0,i.jsxs)(b,{children:[(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Tax:"}),(0,i.jsx)(Z.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"21%"})]}),(0,i.jsx)(d.Z,{}),(0,i.jsxs)(b,{children:[(0,i.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"Total:"}),(0,i.jsx)(Z.Z,{sx:{fontWeight:500,color:"text.secondary"},children:"$1690"})]})]})]}),(0,i.jsx)(d.Z,{sx:{my:"".concat(P.spacing(6)," !important")}}),(0,i.jsxs)(Z.Z,{sx:{color:"text.secondary"},children:[(0,i.jsx)("strong",{children:"Note:"})," It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"]})]})}return n?(0,i.jsx)(m.Z,{sx:{p:5},children:(0,i.jsx)(l.ZP,{container:!0,spacing:6,children:(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsxs)(x.Z,{severity:"error",children:["Invoice with the id: ",s," does not exist. Please check the list of invoices:"," ",(0,i.jsx)(t(),{href:"/apps/invoice/list",children:"Invoice List"})]})})})}):null};s.Z=w}}]);