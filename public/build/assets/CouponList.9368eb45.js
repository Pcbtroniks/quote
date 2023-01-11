<<<<<<<< HEAD:public/build/assets/CouponList.9368eb45.js
import{_ as u}from"./BodySection.0578c9e5.js";import{_ as x}from"./Button.85b64e06.js";import{_ as f}from"./Pagination.78717d68.js";import{o as s,c as h,w as n,f as c,a as e,d,e as m,h as _,t as l,b,F as w,y}from"./app.9e9fa62b.js";import"./SectionTitle.db3de90f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g={class:"col-span-6 w-full"},v={class:"relative flex flex-col min-w-0 break-wordsw-full"},G={class:"rounded-t mb-0 px-4 py-3 border-0"},k={class:"flex flex-wrap items-center"},C=e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Coupons")],-1),I={key:0,class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},B=["href"],D=["href"],L={class:"block w-full overflow-x-auto"},N={class:"items-center bg-transparent w-full border-collapse"},S=e("thead",null,[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Code "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Status "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Agency "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Created at "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Action ")])],-1),V={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},$=["href"],j={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},q={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},A={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},E={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},F={class:"w-full text-center"},P={__name:"CouponList",props:{coupons:Object,invoice:Object},setup(a){const r=a,p=async(o,i)=>{if(!i)return!1;try{const t=await axios.post(route("invoices.unsync.coupon",{invoice:o}),{coupon:i});console.log(t),y.Inertia.reload()}catch(t){alert("Ha ocurrido un error: "+t.message)}finally{}};return(o,i)=>(s(),h(u,null,{title:n(()=>[c(" Coupons List ")]),description:n(()=>[c(" Look at the coupons that are currently on this bill. ")]),content:n(()=>[e("div",g,[e("div",v,[e("div",G,[e("div",k,[C,r.coupons.data.length?(s(),d("div",I,[e("a",{class:"bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",href:o.route("exports.manifest.byInvoiceId",{invoiceID:a.invoice.id})},"Download manifest",8,B),e("a",{class:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",href:o.route("exports.view.manifest.byInvoiceId",{invoiceID:a.invoice.id})},"See manifest",8,D)])):m("",!0)])]),e("div",L,[e("table",N,[S,e("tbody",null,[(s(!0),d(w,null,_(r.coupons.data,t=>(s(),d("tr",null,[e("th",V,[e("a",{href:t.quote.url},l(t.code),9,$)]),e("td",j,l(t.status),1),e("td",q,l(t.quote.team.name),1),e("td",A,l(t.created_at.slice(0,10)),1),e("td",E,[b(x,{msg:"Eliminar",class:"bg-red-500 hover:bg-red-700",onClick:O=>p(r.invoice.id,t.id)},null,8,["onClick"])])]))),256))])])])]),e("div",F,[b(f,{links:r.coupons},null,8,["links"])])])]),_:1}))}};export{P as default};
========
import{_ as u}from"./BodySection.353994ae.js";import{_ as x}from"./Button.c52934b5.js";import{_ as f}from"./Pagination.38c7f0ea.js";import{o as s,c as h,w as n,f as c,a as e,d,e as m,h as _,t as l,b,F as w,y}from"./app.8df7766f.js";import"./SectionTitle.a0ab45ff.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g={class:"col-span-6 w-full"},v={class:"relative flex flex-col min-w-0 break-wordsw-full"},G={class:"rounded-t mb-0 px-4 py-3 border-0"},k={class:"flex flex-wrap items-center"},C=e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Coupons")],-1),I={key:0,class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},B=["href"],D=["href"],L={class:"block w-full overflow-x-auto"},N={class:"items-center bg-transparent w-full border-collapse"},S=e("thead",null,[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Code "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Status "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Agency "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Created at "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Action ")])],-1),V={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},$=["href"],j={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},q={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},A={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},E={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},F={class:"w-full text-center"},P={__name:"CouponList",props:{coupons:Object,invoice:Object},setup(a){const r=a,p=async(o,i)=>{if(!i)return!1;try{const t=await axios.post(route("invoices.unsync.coupon",{invoice:o}),{coupon:i});console.log(t),y.Inertia.reload()}catch(t){alert("Ha ocurrido un error: "+t.message)}finally{}};return(o,i)=>(s(),h(u,null,{title:n(()=>[c(" Coupons List ")]),description:n(()=>[c(" Look at the coupons that are currently on this bill. ")]),content:n(()=>[e("div",g,[e("div",v,[e("div",G,[e("div",k,[C,r.coupons.data.length?(s(),d("div",I,[e("a",{class:"bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",href:o.route("exports.manifest.byInvoiceId",{invoiceID:a.invoice.id})},"Download manifest",8,B),e("a",{class:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",href:o.route("exports.view.manifest.byInvoiceId",{invoiceID:a.invoice.id})},"See manifest",8,D)])):m("",!0)])]),e("div",L,[e("table",N,[S,e("tbody",null,[(s(!0),d(w,null,_(r.coupons.data,t=>(s(),d("tr",null,[e("th",V,[e("a",{href:t.quote.url},l(t.code),9,$)]),e("td",j,l(t.status),1),e("td",q,l(t.quote.team.name),1),e("td",A,l(t.created_at.slice(0,10)),1),e("td",E,[b(x,{msg:"Eliminar",class:"bg-red-500 hover:bg-red-700",onClick:O=>p(r.invoice.id,t.id)},null,8,["onClick"])])]))),256))])])])]),e("div",F,[b(f,{links:r.coupons},null,8,["links"])])])]),_:1}))}};export{P as default};
>>>>>>>> 534ec1f332eed5940b72fae7e053d75692f12026:public/build/assets/CouponList.d56f76f7.js
