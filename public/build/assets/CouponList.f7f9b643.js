import{_ as x}from"./BodySection.0b4aac8c.js";import{_ as u}from"./Button.f97913a8.js";import{_ as f}from"./Pagination.b5a9612b.js";import{o as l,c as m,w as a,f as i,a as e,d as n,h as _,t as r,b as c,F as h}from"./app.925ffcad.js";import"./SectionTitle.938fb9e4.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w={class:"col-span-6 w-full"},y={class:"relative flex flex-col min-w-0 break-wordsw-full"},g=e("div",{class:"rounded-t mb-0 px-4 py-3 border-0"},[e("div",{class:"flex flex-wrap items-center"},[e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Coupons")]),e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"})])],-1),v={class:"block w-full overflow-x-auto"},G={class:"items-center bg-transparent w-full border-collapse"},k=e("thead",null,[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Code "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Status "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Agency "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Created at "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Action ")])],-1),C={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},B=["href"],L={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},$={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},N={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},S={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},V={class:"w-full text-center"},H={__name:"CouponList",props:{coupons:Object,invoice:Object},setup(b){const o=b,p=async(d,s)=>{if(!s)return!1;try{const t=await axios.post(route("invoices.unsync.coupon",{invoice:d}),{coupon:s});console.log(t)}catch(t){alert("Ha ocurrido un error: "+t.message)}finally{}};return(d,s)=>(l(),m(x,null,{title:a(()=>[i(" Coupons List ")]),description:a(()=>[i(" Look at the coupons that are currently on this bill. ")]),content:a(()=>[e("div",w,[e("div",y,[g,e("div",v,[e("table",G,[k,e("tbody",null,[(l(!0),n(h,null,_(o.coupons.data,t=>(l(),n("tr",null,[e("th",C,[e("a",{href:t.quote.url},r(t.code),9,B)]),e("td",L,r(t.status),1),e("td",$,r(t.quote.team.name),1),e("td",N,r(t.created_at.slice(0,10)),1),e("td",S,[c(u,{msg:"Eliminar",class:"bg-red-500 hover:bg-red-700",onClick:j=>p(o.invoice.id,t.id)},null,8,["onClick"])])]))),256))])])])]),e("div",V,[c(f,{links:o.coupons},null,8,["links"])])])]),_:1}))}};export{H as default};
