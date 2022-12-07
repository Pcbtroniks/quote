import{_ as x}from"./BodySection.dcd5597e.js";import{_ as u}from"./Button.b14380aa.js";import{_ as f}from"./Pagination.b1fc2a54.js";import{o as l,c as m,w as a,f as i,a as e,d as n,h as _,t as r,b as c,F as h,y as w}from"./app.8314e660.js";import"./SectionTitle.850fc425.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y={class:"col-span-6 w-full"},g={class:"relative flex flex-col min-w-0 break-wordsw-full"},v=e("div",{class:"rounded-t mb-0 px-4 py-3 border-0"},[e("div",{class:"flex flex-wrap items-center"},[e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Coupons")]),e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"})])],-1),G={class:"block w-full overflow-x-auto"},k={class:"items-center bg-transparent w-full border-collapse"},C=e("thead",null,[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Code "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Status "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Agency "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Created at "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Action ")])],-1),B={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},L=["href"],$={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},N={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},S={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},V={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},j={class:"w-full text-center"},I={__name:"CouponList",props:{coupons:Object,invoice:Object},setup(b){const s=b,p=async(d,o)=>{if(!o)return!1;try{const t=await axios.post(route("invoices.unsync.coupon",{invoice:d}),{coupon:o});console.log(t),w.Inertia.reload()}catch(t){alert("Ha ocurrido un error: "+t.message)}finally{}};return(d,o)=>(l(),m(x,null,{title:a(()=>[i(" Coupons List ")]),description:a(()=>[i(" Look at the coupons that are currently on this bill. ")]),content:a(()=>[e("div",y,[e("div",g,[v,e("div",G,[e("table",k,[C,e("tbody",null,[(l(!0),n(h,null,_(s.coupons.data,t=>(l(),n("tr",null,[e("th",B,[e("a",{href:t.quote.url},r(t.code),9,L)]),e("td",$,r(t.status),1),e("td",N,r(t.quote.team.name),1),e("td",S,r(t.created_at.slice(0,10)),1),e("td",V,[c(u,{msg:"Eliminar",class:"bg-red-500 hover:bg-red-700",onClick:q=>p(s.invoice.id,t.id)},null,8,["onClick"])])]))),256))])])])]),e("div",j,[c(f,{links:s.coupons},null,8,["links"])])])]),_:1}))}};export{I as default};