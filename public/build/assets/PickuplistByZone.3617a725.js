import{r as v,o as a,d as i,a as e,f as x,t as r,g as m,b as d,F as _,h,y as k,N as z,J as B}from"./app.453e8ea4.js";import{_ as g,a as N}from"./sweetalert2.all.44083dbc.js";import{g as T,z as C,a as F,f as H}from"./Utils.3889d632.js";import I from"./CreateHotelForm.3926209d.js";import{s as j,B as P}from"./Alerts.bf96dbd5.js";import"./Button.40487fc6.js";const Z={class:"w-full antialiased bg-gray-100 text-gray-600"},A={class:"flex flex-col justify-center h-full"},D={class:"w-full mx-auto bg-white shadow-lg rounded-sm"},K={class:"px-5 pt-4 py-4 pb-8 border-b border-gray-100"},L={class:"font-bold text-sky-500 text-2xl border-b border-gray-100 pb-4"},O=e("br",{class:"md:hidden"},null,-1),V={class:"my-4"},$={class:"md:mt-8 md:flex md:gap-3 md:items-center"},E={class:"md:w-2/6"},q=e("label",{for:"tour",class:"mb-3 block text-base font-medium text-gray-700"}," Tour ",-1),J=e("option",{value:"null",selected:"",disabled:""},"-- Tour --",-1),M=["value","selected"],S={key:1},U=e("div",{class:"h-4 md:hidden"},null,-1),G={class:"md:w-1/6"},Q=e("label",{for:"zone",class:"mb-3 block text-base font-medium text-gray-700"}," Zona ",-1),R=e("option",{value:"null",selected:"",disabled:""},"-- Zona --",-1),W=["value","selected"],X={key:1},Y=e("div",{class:"h-4 md:hidden"},null,-1),ee={class:"md:w-2/6"},te=e("label",{for:"hotelNameFilter",class:"mb-3 block text-base font-medium text-gray-700"}," Hotel ",-1),se={class:"p-3"},oe={class:"overflow-x-auto"},ae={class:"table-auto w-full"},ie=e("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[e("tr",null,[e("th",{class:"p-2 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Hotel")]),e("th",{class:"p-2 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Hora del pickup")]),e("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-400"},[e("svg",{color:"currentColor",class:"w-6 text-right fill-current text-grey-dark",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"CurrentColor",viewBox:"0 0 20 20"},[e("path",{d:"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"})])])])],-1),le={class:"text-sm divide-y divide-gray-100"},ne={class:"h-12 hover:bg-sky-300"},ce={class:"p-2 whitespace-nowrap"},re={class:"flex items-center"},de={class:"font-medium text-gray-800"},ue={class:"p-2 whitespace-nowrap"},pe={class:"flex items-center"},me={class:"font-medium text-gray-800 hover:text-green-500"},_e={class:"font-medium text-gray-800"},he=e("td",{class:"p-2 whitespace-nowrap"},[e("div",{class:"flex items-center"},[e("div",{class:"font-medium text-gray-400"},"...")])],-1),fe={key:1,class:"h-12 hover:bg-sky-300 text-center"},be=e("td",{colspan:"3",class:"p-2 whitespace-nowrap text-center"},[e("div",{class:"flex items-center justify-center text-center"},[e("div",{class:"text-center font-bold text-sky-400"}," No hay informaci\xF3n dispobible")])],-1),ve=[be],xe={class:"text-xs"},Ne={__name:"PickuplistByZone",props:{pickups:Object,tours:Object,params:Object},setup(y){const s=y,f=async(l,o,n)=>{if(o==s.pickups[n].pickup_time.slice(0,5)||o==null||o=="")return null;try{const t=H(o),u=await B.post(route("pickups.update",l),{pickup_time:t});s.pickups[n].pickup_time=t,await j().fire({icon:"success",title:"Hora de pickup actualizada"})}catch(t){console.log(t),P()}},b=(l,o)=>{const n=l!=null?l:11,t=o!=null?o:1;k.Inertia.visit(route("pickups.by.zone",{activity:n,zone:t}))};v([]);const c=v([]),w=l=>{l.length<3&&(c.value=s.pickups),c.value=s.pickups.filter(o=>o.hotel.toLowerCase().includes(l.toLowerCase()))};return(l,o)=>{var n;return a(),i("section",Z,[e("div",A,[e("div",D,[e("header",K,[e("h1",L,[x(r(m(T)(s.params.activity,s.tours))+" ",1),O,x(" en "+r(m(C)(s.params.zone)),1)]),e("div",null,[d(I,{zone:s.params.zone},null,8,["zone"])]),e("div",V,[d(N,{option:"opt-1"})]),e("div",$,[e("div",E,[q,e("select",{id:"tour",onChange:o[0]||(o[0]=t=>b(t.target.value,s.params.zone)),name:"tour",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[J,s.tours?(a(!0),i(_,{key:0},h(s.tours,t=>(a(),i("option",{class:"capitalize",value:t.id,selected:s.params.activity==t.id},r(t.name),9,M))),256)):(a(),i("option",S,"Tours no disponibles"))],32)]),U,e("div",G,[Q,e("select",{id:"zone",onChange:o[1]||(o[1]=t=>b(s.params.activity,t.target.value)),name:"zone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[R,s.tours?(a(!0),i(_,{key:0},h(m(F)(),t=>(a(),i("option",{class:"capitalize",value:t.id,selected:s.params.zone==t.id},r(t.name),9,W))),256)):(a(),i("option",X,"Tours no disponibles"))],32)]),Y,e("div",ee,[te,d(g,{id:"hotelNameFilter",onInput:o[2]||(o[2]=t=>w(t.target.value)),placeholder:"buscar hotel...",class:"w-full"})])])]),e("div",se,[e("div",oe,[e("table",ae,[ie,e("tbody",le,[((n=s.pickups)==null?void 0:n.length)>0?(a(!0),i(_,{key:0},h(c.value.length>0?c.value:s.pickups,(t,u)=>(a(),i("tr",ne,[e("td",ce,[e("div",re,[e("div",de,r(t.hotel),1)])]),e("td",ue,[e("div",pe,[e("div",me,[e("div",_e,[d(g,{placeholder:"00:00",value:t.pickup_time.slice(0,5),id:"PickupTime",name:"PickupTime",onBlur:p=>f(t.id,p.target.value,u),onKeydown:z(p=>f(t.id,p.target.value,u),["enter"])},null,8,["value","onBlur","onKeydown"])])])])]),he]))),256)):(a(),i("tr",fe,ve))])])]),e("div",xe,[e("p",null," pickups: "+r(c.value.length>0?c.value.length:s.pickups.length),1)])])])])])}}};export{Ne as default};
