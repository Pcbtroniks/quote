import{r as B,o as l,d as c,a as t,f,t as d,b as _,F as v,h as x,y as C,P as N,M as P}from"./app.cc4f2bf6.js";import{_ as b}from"./InputText.c73af3e2.js";import{_ as T}from"./ModernSwitch.26bff7c4.js";import{v as z,f as F}from"./Utils.91184964.js";import{B as y,s as j}from"./Alerts.c2eef86f.js";import"./sweetalert2.all.96c022d7.js";const H={class:"w-full antialiased bg-gray-100 text-gray-600"},L={class:"flex flex-col justify-center h-full"},D={class:"w-full mx-auto bg-white shadow-lg rounded-sm"},I={class:"px-5 pt-4 py-4 pb-8 border-b border-gray-100"},K={class:"font-bold text-sky-500 text-2xl border-b border-gray-100 pb-4"},O=t("br",{class:"md:hidden"},null,-1),S={class:"capitalize"},V={class:"my-4"},q={class:"md:mt-8 md:flex md:gap-3 md:items-center"},E={class:"md:w-2/6"},M=t("label",{for:"hotel",class:"mb-3 block text-base font-medium text-gray-700"}," Cambiar hotel ",-1),$=t("option",{value:"null",selected:"",disabled:""},"-- Hotel --",-1),A=["value"],U={key:1},G=t("div",{class:"h-4 md:hidden"},null,-1),J={class:"md:w-2/6"},Q=t("label",{for:"valueFilter",class:"mb-3 block text-base font-medium text-gray-700"}," Tour ",-1),R={class:"p-3"},W={class:"overflow-x-auto"},X={class:"table-auto w-full"},Y=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[t("tr",null,[t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Parque")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Hora del pickup")]),t("th",{class:"lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-400"},[t("svg",{color:"currentColor",class:"w-6 text-right fill-current text-grey-dark",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",fill:"CurrentColor",viewBox:"0 0 20 20"},[t("path",{d:"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"})])])])],-1),Z={class:"text-sm divide-y divide-gray-100"},tt={class:"h-12 hover:bg-sky-300"},et={class:"p-2 whitespace-nowrap"},st={class:"flex items-center"},ot={class:"font-medium text-gray-800"},at={class:"p-2 whitespace-nowrap"},it={class:"flex items-center"},lt={class:"font-medium text-gray-800 hover:text-green-500"},ct={class:"font-medium text-gray-800"},rt=t("td",{class:"p-2 whitespace-nowrap"},[t("div",{class:"flex items-center"},[t("div",{class:"font-medium text-gray-400"},"...")])],-1),nt={key:1,class:"h-12 hover:bg-sky-300 text-center"},dt=t("td",{colspan:"3",class:"p-2 whitespace-nowrap text-center"},[t("div",{class:"flex items-center justify-center text-center"},[t("div",{class:"text-center font-bold text-sky-400"}," No hay informaci\xF3n dispobible")])],-1),pt=[dt],ut={class:"text-xs"},bt={__name:"PickupListByHotel",props:{pickups:Object,hotels:Object,params:Object},setup(g){const a=g,h=async(s,e,n)=>{if(e==a.pickups[n].pickup_time.slice(0,5)||e==null||e=="")return null;if(!z(e))return y();try{const i=F(e),p=await P.post(route("pickups.update",s),{pickup_time:i});a.pickups[n].pickup_time=i,await j().fire({icon:"success",title:"Hora de pickup actualizada"})}catch(i){console.log(i),y()}},w=s=>{const e=s!=null?s:11;C.Inertia.visit(route("pickups.by.hotel",{hotel:e}),{preserveState:!0,preserveScroll:!0})},r=B([]),k=s=>{if(s==null||s=="")return null;s.length<3&&(r.value=a.pickups),r.value=a.pickups.filter(e=>e.activity.toLowerCase().includes(s.toLowerCase()))};return(s,e)=>{var n,i,p;return l(),c("section",H,[t("div",L,[t("div",D,[t("header",I,[t("h1",K,[f("Hotel"),O,f(" -"),t("span",S,d((i=(n=a.pickups[0])==null?void 0:n.hotel)!=null?i:"N/D"),1)]),t("div",V,[_(T,{option:"opt-2"})]),t("div",q,[t("div",E,[M,t("select",{id:"hotel",onChange:e[0]||(e[0]=o=>w(o.target.value)),name:"hotel",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[$,a.hotels?(l(!0),c(v,{key:0},x(a.hotels,o=>(l(),c("option",{class:"capitalize",value:o.id},d(o.name),9,A))),256)):(l(),c("option",U,"No disponible"))],32)]),G,t("div",J,[Q,_(b,{id:"valueFilter",onInput:e[1]||(e[1]=o=>k(o.target.value)),placeholder:"buscar tour...",class:"w-full"})])])]),t("div",R,[t("div",W,[t("table",X,[Y,t("tbody",Z,[((p=a.pickups)==null?void 0:p.length)>0?(l(!0),c(v,{key:0},x(r.value.length>0?r.value:a.pickups,(o,m)=>(l(),c("tr",tt,[t("td",et,[t("div",st,[t("div",ot,d(o.activity),1)])]),t("td",at,[t("div",it,[t("div",lt,[t("div",ct,[_(b,{placeholder:"00:00",value:o.pickup_time.slice(0,5),id:"PickupTime",name:"PickupTime",onBlur:u=>h(o.id,u.target.value,m),onKeydown:N(u=>h(o.id,u.target.value,m),["enter"])},null,8,["value","onBlur","onKeydown"])])])])]),rt]))),256)):(l(),c("tr",nt,pt))])])]),t("div",ut,[t("p",null," pickups: "+d(r.value.length>0?r.value.length:a.pickups.length),1)])])])])])}}};export{bt as default};
