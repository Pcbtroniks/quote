import{o as a,d as i,a as t,f as h,t as l,g as d,b as f,F as u,h as p,y as g,P as y,M as v}from"./app.41475ec4.js";import{S as w}from"./sweetalert2.all.f6cce323.js";import{_ as k}from"./InputText.ebe3ee6d.js";import{_ as C}from"./ModernSwitch.ca553feb.js";import{g as z,z as B,P,b as T,f as N}from"./Utils.91184964.js";const j={class:"w-full antialiased bg-gray-100 text-gray-600"},I={class:"flex flex-col justify-center h-full"},A={class:"w-full mx-auto bg-white shadow-lg rounded-sm"},D={class:"px-5 pt-4 py-4 pb-8 border-b border-gray-100"},F={class:"font-bold text-sky-500 text-2xl border-b border-gray-100 pb-4"},L=t("br",{class:"md:hidden"},null,-1),Z={class:"my-4"},H={class:"md:mt-8 md:flex md:gap-3 md:items-center"},K={class:"md:w-2/6"},O=t("label",{for:"tour",class:"mb-3 block text-base font-medium text-gray-700"}," Cambiar Tour ",-1),S=t("option",{value:"null",selected:"",disabled:""},"-- Tour --",-1),V=["value"],M={key:1},$=t("div",{class:"h-4 md:hidden"},null,-1),q={class:"md:w-1/6"},E=t("label",{for:"zone",class:"mb-3 block text-base font-medium text-gray-700"}," Cambiar Zona ",-1),U=t("option",{value:"null",selected:"",disabled:""},"-- Zona --",-1),G=["value"],J={key:1},Q={class:"p-3"},R={class:"overflow-x-auto"},W={class:"table-auto w-full"},X=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[t("tr",null,[t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Hotel")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Hora del pickup")]),t("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-400"},[t("svg",{color:"currentColor",class:"w-6 text-right fill-current text-grey-dark",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"CurrentColor",viewBox:"0 0 20 20"},[t("path",{d:"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"})])])])],-1),Y={class:"text-sm divide-y divide-gray-100"},tt={class:"h-12 hover:bg-sky-300"},et={class:"p-2 whitespace-nowrap"},st={class:"flex items-center"},ot={class:"font-medium text-gray-800"},at={class:"p-2 whitespace-nowrap"},it={class:"flex items-center"},rt={class:"font-medium text-gray-800 hover:text-green-500"},nt={class:"font-medium text-gray-800"},lt=t("td",{class:"p-2 whitespace-nowrap"},[t("div",{class:"flex items-center"},[t("div",{class:"font-medium text-gray-400"},"...")])],-1),ct={key:1,class:"h-12 hover:bg-sky-300 text-center"},dt=t("td",{colspan:"3",class:"p-2 whitespace-nowrap text-center"},[t("div",{class:"flex items-center justify-center text-center"},[t("div",{class:"text-center font-bold text-sky-400"}," No hay informaci\xF3n dispobible")])],-1),ut=[dt],bt={__name:"PickupList",props:{pickups:Object,tours:Object,params:Object},setup(b){const s=b,x=()=>w.mixin({toast:!0,position:"top-right",iconColor:"white",customClass:{popup:"colored-toast"},showConfirmButton:!1,timer:1500,timerProgressBar:!0}),_=async(n,o,e)=>{if(o==s.pickups[e].pickup_time.slice(0,5)||o==null||o=="")return null;try{const r=N(o),c=await v.post(route("pickups.update",n),{pickup_time:r});s.pickups[e].pickup_time=r,await x().fire({icon:"success",title:"Hora de pickup actualizada"})}catch(r){console.log(r),alert("Lo sentimos, ocurrio un error al actualizar la hora del pickup. actualiza la pagina y vuelve a intentarlo.")}},m=(n,o)=>{const e=n!=null?n:11,r=o!=null?o:1;g.Inertia.visit(route("pickups",{activity:e,zone:r}))};return(n,o)=>(a(),i("section",j,[t("div",I,[t("div",A,[t("header",D,[t("h1",F,[h(l(d(z)(s.params.activity,s.tours))+" ",1),L,h(" en "+l(d(B)(s.params.zone)),1)]),t("div",Z,[f(C)]),t("div",H,[t("div",K,[O,t("select",{id:"tour",onChange:o[0]||(o[0]=e=>m(e.target.value,s.params.zone)),name:"tour",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[S,s.tours?(a(!0),i(u,{key:0},p(s.tours,e=>(a(),i("option",{class:"capitalize",value:e.id},l(e.name),9,V))),256)):(a(),i("option",M,"Tours no disponibles"))],32)]),$,t("div",q,[E,t("select",{id:"zone",onChange:o[1]||(o[1]=e=>m(s.params.activity,d(P)(e.target.value))),name:"zone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[U,s.tours?(a(!0),i(u,{key:0},p(d(T)(),e=>(a(),i("option",{class:"capitalize",value:e.id},l(e.name),9,G))),256)):(a(),i("option",J,"Tours no disponibles"))],32)])])]),t("div",Q,[t("div",R,[t("table",W,[X,t("tbody",Y,[s.pickups&&s.pickups.length>0?(a(!0),i(u,{key:0},p(s.pickups,(e,r)=>(a(),i("tr",tt,[t("td",et,[t("div",st,[t("div",ot,l(e.hotel),1)])]),t("td",at,[t("div",it,[t("div",rt,[t("div",nt,[f(k,{placeholder:"00:00",value:e.pickup_time.slice(0,5),id:"PickupTime",name:"PickupTime",onBlur:c=>_(e.id,c.target.value,r),onKeydown:y(c=>_(e.id,c.target.value,r),["enter"])},null,8,["value","onBlur","onKeydown"])])])])]),lt]))),256)):(a(),i("tr",ct,ut))])])])])])])]))}};export{bt as default};