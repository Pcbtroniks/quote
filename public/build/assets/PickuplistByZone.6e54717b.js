import{r as v,d as i,a as e,f as x,t as n,g as d,b as u,w as k,F as _,h,y as B,o as l,L as z,P as C,M as T}from"./app.5f639f96.js";import{_ as g}from"./InputText.086a8f42.js";import{_ as N}from"./ModernSwitch.c49f2328.js";import{g as F,z as H,b as I,f as P}from"./Utils.91184964.js";import{s as j,B as L}from"./Alerts.bf4c2161.js";import"./sweetalert2.all.66c4878e.js";const Z={class:"w-full antialiased bg-gray-100 text-gray-600"},A={class:"flex flex-col justify-center h-full"},D={class:"w-full mx-auto bg-white shadow-lg rounded-sm"},K={class:"px-5 pt-4 py-4 pb-8 border-b border-gray-100"},O={class:"font-bold text-sky-500 text-2xl border-b border-gray-100 pb-4"},V=e("br",{class:"md:hidden"},null,-1),E=e("button",{class:"bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-sm mt-4"}," Crear pickup ",-1),M={class:"my-4"},$={class:"md:mt-8 md:flex md:gap-3 md:items-center"},q={class:"md:w-2/6"},S=e("label",{for:"tour",class:"mb-3 block text-base font-medium text-gray-700"}," Tour ",-1),U=e("option",{value:"null",selected:"",disabled:""},"-- Tour --",-1),G=["value","selected"],J={key:1},Q=e("div",{class:"h-4 md:hidden"},null,-1),R={class:"md:w-1/6"},W=e("label",{for:"zone",class:"mb-3 block text-base font-medium text-gray-700"}," Zona ",-1),X=e("option",{value:"null",selected:"",disabled:""},"-- Zona --",-1),Y=["value","selected"],ee={key:1},te=e("div",{class:"h-4 md:hidden"},null,-1),se={class:"md:w-2/6"},oe=e("label",{for:"hotelNameFilter",class:"mb-3 block text-base font-medium text-gray-700"}," Hotel ",-1),ae={class:"p-3"},ie={class:"overflow-x-auto"},le={class:"table-auto w-full"},re=e("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[e("tr",null,[e("th",{class:"p-2 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Hotel")]),e("th",{class:"p-2 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Hora del pickup")]),e("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-400"},[e("svg",{color:"currentColor",class:"w-6 text-right fill-current text-grey-dark",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"CurrentColor",viewBox:"0 0 20 20"},[e("path",{d:"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"})])])])],-1),ce={class:"text-sm divide-y divide-gray-100"},ne={class:"h-12 hover:bg-sky-300"},de={class:"p-2 whitespace-nowrap"},ue={class:"flex items-center"},pe={class:"font-medium text-gray-800"},me={class:"p-2 whitespace-nowrap"},_e={class:"flex items-center"},he={class:"font-medium text-gray-800 hover:text-green-500"},fe={class:"font-medium text-gray-800"},be=e("td",{class:"p-2 whitespace-nowrap"},[e("div",{class:"flex items-center"},[e("div",{class:"font-medium text-gray-400"},"...")])],-1),ve={key:1,class:"h-12 hover:bg-sky-300 text-center"},xe=e("td",{colspan:"3",class:"p-2 whitespace-nowrap text-center"},[e("div",{class:"flex items-center justify-center text-center"},[e("div",{class:"text-center font-bold text-sky-400"}," No hay informaci\xF3n dispobible")])],-1),ge=[xe],ye={class:"text-xs"},Ne={__name:"PickuplistByZone",props:{pickups:Object,tours:Object,params:Object},setup(y){const s=y,f=async(a,o,r)=>{if(o==s.pickups[r].pickup_time.slice(0,5)||o==null||o=="")return null;try{const t=P(o),p=await T.post(route("pickups.update",a),{pickup_time:t});s.pickups[r].pickup_time=t,await j().fire({icon:"success",title:"Hora de pickup actualizada"})}catch(t){console.log(t),L()}},b=(a,o)=>{const r=a!=null?a:11,t=o!=null?o:1;B.Inertia.visit(route("pickups.by.zone",{activity:r,zone:t}))};v([]);const c=v([]),w=a=>{a.length<3&&(c.value=s.pickups),c.value=s.pickups.filter(o=>o.hotel.toLowerCase().includes(a.toLowerCase()))};return(a,o)=>{var r;return l(),i("section",Z,[e("div",A,[e("div",D,[e("header",K,[e("h1",O,[x(n(d(F)(s.params.activity,s.tours))+" ",1),V,x(" en "+n(d(H)(s.params.zone)),1)]),e("div",null,[u(d(z),{href:a.route("pickups.create")},{default:k(()=>[E]),_:1},8,["href"])]),e("div",M,[u(N,{option:"opt-1"})]),e("div",$,[e("div",q,[S,e("select",{id:"tour",onChange:o[0]||(o[0]=t=>b(t.target.value,s.params.zone)),name:"tour",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[U,s.tours?(l(!0),i(_,{key:0},h(s.tours,t=>(l(),i("option",{class:"capitalize",value:t.id,selected:s.params.activity==t.id},n(t.name),9,G))),256)):(l(),i("option",J,"Tours no disponibles"))],32)]),Q,e("div",R,[W,e("select",{id:"zone",onChange:o[1]||(o[1]=t=>b(s.params.activity,t.target.value)),name:"zone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[X,s.tours?(l(!0),i(_,{key:0},h(d(I)(),t=>(l(),i("option",{class:"capitalize",value:t.id,selected:s.params.zone==t.id},n(t.name),9,Y))),256)):(l(),i("option",ee,"Tours no disponibles"))],32)]),te,e("div",se,[oe,u(g,{id:"hotelNameFilter",onInput:o[2]||(o[2]=t=>w(t.target.value)),placeholder:"buscar hotel...",class:"w-full"})])])]),e("div",ae,[e("div",ie,[e("table",le,[re,e("tbody",ce,[((r=s.pickups)==null?void 0:r.length)>0?(l(!0),i(_,{key:0},h(c.value.length>0?c.value:s.pickups,(t,p)=>(l(),i("tr",ne,[e("td",de,[e("div",ue,[e("div",pe,n(t.hotel),1)])]),e("td",me,[e("div",_e,[e("div",he,[e("div",fe,[u(g,{placeholder:"00:00",value:t.pickup_time.slice(0,5),id:"PickupTime",name:"PickupTime",onBlur:m=>f(t.id,m.target.value,p),onKeydown:C(m=>f(t.id,m.target.value,p),["enter"])},null,8,["value","onBlur","onKeydown"])])])])]),be]))),256)):(l(),i("tr",ve,ge))])])]),e("div",ye,[e("p",null," pickups: "+n(c.value.length>0?c.value.length:s.pickups.length),1)])])])])])}}};export{Ne as default};