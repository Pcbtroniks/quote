<<<<<<<< HEAD:public/build/assets/SyncInvoiceCoupon.043332c7.js
import{D as x,o as c,c as u,w as r,f as g,a as e,t as n,b as l,M as b,d as p,n as w,e as f,g as k,L as C,N as $,y as q}from"./app.9e9fa62b.js";import{_ as L}from"./BodySection.0578c9e5.js";import{_ as S,a as V}from"./TextInput.85cfa3b1.js";import{_ as N}from"./InputLabel.37dcafe6.js";import{_}from"./Button.85b64e06.js";import"./SectionTitle.db3de90f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const j={class:"col-span-6"},B={class:"text-lg font-medium text-gray-900"},z={class:"col-span-6 sm:col-span-4"},I={class:"relative flex items-center gap-1"},D=e("div",null,null,-1),H={class:"absolute hidden xl:block xl:left-2/3"},M={version:"1.1",class:"h-4 text-dark",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 52.966 52.966",style:{"enable-background":"new 0 0 52.966 52.966"},"xml:space":"preserve"},A=e("path",{d:`M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21\r
========
import{E as x,o as c,c as u,w as r,f as g,a as e,t as n,b as l,O as b,d as p,n as w,e as f,g as k,L as C,J as $,y as q}from"./app.8df7766f.js";import{_ as L}from"./BodySection.353994ae.js";import{_ as S,a as V}from"./TextInput.39a27708.js";import{_ as j}from"./InputLabel.63e42e79.js";import{_}from"./Button.c52934b5.js";import"./SectionTitle.a0ab45ff.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B={class:"col-span-6"},N={class:"text-lg font-medium text-gray-900"},z={class:"col-span-6 sm:col-span-4"},I={class:"relative flex items-center gap-1"},E=e("div",null,null,-1),H={class:"absolute hidden xl:block xl:left-2/3"},A={version:"1.1",class:"h-4 text-dark",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 52.966 52.966",style:{"enable-background":"new 0 0 52.966 52.966"},"xml:space":"preserve"},D=e("path",{d:`M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21\r
>>>>>>>> 534ec1f332eed5940b72fae7e053d75692f12026:public/build/assets/SyncInvoiceCoupon.3006d701.js
                        c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279\r
                        C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19\r
                        S32.459,40,21.983,40z`},null,-1),K=[D],M={key:0},O={class:"mt-4 xl:w-[31rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50"},T={key:0,class:"bg-sky-500 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl"},G={class:"grid grid-cols-6 p-5 gap-y-2"},J={class:"col-span-5 md:col-span-4 ml-4"},P=["href"],R={class:"text-sky-500 font-bold text-xs capitalize"},U={class:"text-gray-600 font-bold"},F={class:"text-gray-400"},Q={class:"text-gray-400"},W={class:"col-span-6 xl:col-auto flex xl:flex-col justify-between"},X={class:"flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end"},Y={class:"rounded-lg text-sky-500 font-bold bg-sky-100 py-1 px-3 text-sm w-fit h-fit"},co={__name:"SyncInvoiceCoupon",props:{invoice:Object},setup(y){const d=y,o=x({coupon:null,error:null,couponCode:null,processing:!1,syncing:!1}),m=async t=>{if(!t)return!1;o.coupon=null,o.processing=!0;const s=await v(route("coupon.search.code",{code:t}));s.status==404?(o.processing=!1,o.error="No se ha encontrado un cupon",setTimeout(()=>{o.error=null},3e3)):(o.processing=!1,o.coupon=s,console.log(s))},h=async(t,s)=>{if(!s)return!1;o.syncing=!0;try{const a=await $.post(route("invoices.sync.coupon",{invoice:t}),{coupon:s});o.coupon.invoice_id=t,q.Inertia.reload()}catch(a){alert("Ha ocurrido un error: "+a.message)}finally{o.syncing=!1}},v=async(t,s)=>{try{return await(await fetch(t,s)).json()}catch(a){console.error(await a.json())}};return(t,s)=>(c(),u(L,null,{title:r(()=>[g(" Invoice Details ")]),description:r(()=>[g(" Sync invoice with coupons searching by coupon code. ")]),content:r(()=>{var a;return[e("div",B,[e("div",N,n(`Invoice: ${d.invoice.folio} - status: ${d.invoice.status}`),1)]),e("div",z,[l(j,{for:"folio",value:"Search a coupon"}),e("div",I,[l(S,{onKeyup:s[0]||(s[0]=b(i=>m(o.couponCode),["enter"])),id:"folio",modelValue:o.couponCode,"onUpdate:modelValue":s[1]||(s[1]=i=>o.couponCode=i),type:"text",class:"inline w-3/4",placeholder:"Search by code...",autofocus:""},null,8,["modelValue"]),E,e("div",H,[(c(),p("svg",A,K))]),l(_,{onClick:s[2]||(s[2]=i=>m(o.couponCode)),class:w({"opacity-25":o.processing}),disabled:!o.couponCode,isLoading:o.processing,msg:"SEARCH"},null,8,["class","disabled","isLoading"])]),l(V,{message:o.error,class:"mt-2"},null,8,["message"]),o.coupon?(c(),p("div",M,[e("div",O,[o.coupon.quote.national!=0?(c(),p("p",T," Promomex ")):f("",!0),e("div",G,[e("div",J,[e("a",{target:"_blank",href:o.coupon.quote.url},[e("p",R,n(o.coupon.quote.team.name)+" "+n(o.coupon.quote.type)+n(o.coupon.quote.type=="paquete"?"#"+o.coupon.quote.listed_activities.length:"")+" "+n((a=o.coupon.invoice)==null?void 0:a.folio),1)],8,P),e("p",U,n(o.coupon.quote.listed_activity.activity.name),1),e("p",F,n(o.coupon.quote.listed_activity.date),1),e("p",Q,n(o.coupon.quote.holder_name),1)]),e("div",W,[e("div",X,[e("p",Y,"$"+n(o.coupon.sale_amount),1)]),e("div",null,[o.coupon.invoice_id?(c(),u(k(C),{key:1,href:t.route("invoices.coupons",{invoice:o.coupon.invoice_id})},{default:r(()=>[l(_,{type:"button",isLoading:o.syncing,class:"bg-amber-500 hover:bg-amber-700",msg:"Ver factura..."},null,8,["isLoading"])]),_:1},8,["href"])):(c(),u(_,{key:0,onClick:s[3]||(s[3]=i=>h(d.invoice.id,o.coupon.id)),isLoading:o.syncing,msg:"Agregar"},null,8,["isLoading"]))])])])])])):f("",!0)])]}),_:1}))}};export{co as default};
