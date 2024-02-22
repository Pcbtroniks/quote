import{u as p,o as a,d as r,a as e,t,f as o,F as h,h as g,n as u,J as m}from"./app.36052058.js";const v={class:"min-h-screen flex items-center justify-center px-4"},x={class:"max-w-7xlxl bg-white w-full rounded-lg shadow-xl"},b={class:"p-4 border-b"},y=e("h2",{class:"text-2xl"}," Detalles de la cotizaci\xF3n ",-1),f={class:"text-sm text-gray-500"},w={class:"capitalize font-bold text-sm text-gray-500"},q={class:"font-bold text-sm text-gray-500"},k={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},z=e("p",{class:"text-gray-600"}," Realizada por ",-1),C={class:"capitalize"},V={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},j=e("p",{class:"text-gray-600"}," Correo electr\xF3nico ",-1),S={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},B=e("p",{class:"text-gray-600"}," Titular ",-1),R={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},A=e("p",{class:"text-gray-600"}," Pax ",-1),D=e("span",{class:"font-bold text-sm text-gray-500"},"Adultos",-1),M=e("br",null,null,-1),F=e("span",{class:"font-bold text-sm text-gray-500"},"Menores",-1),G=e("br",null,null,-1),N=e("span",{class:"font-bold text-sm text-gray-500"},"Infantes",-1),L=e("br",null,null,-1),T={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},E=e("p",{class:"text-gray-600"}," Costo ",-1),H={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},I=e("p",{class:"text-gray-600"}," Actividades ",-1),J=m('<svg class="mr-2" width="12px" height="12px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 12H20M12 4V20" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1),O={class:"capitalize"},P={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4"},Q=e("p",{class:"text-gray-600"}," Adjuntos ",-1),$={class:"space-y-2 flex flex-col gap-2"},K={class:"border-2 flex items-center p-2 rounded justify-between space-x-2"},U=e("div",{class:"space-x-2 truncate"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"fill-current inline text-gray-500",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{d:"M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z"})]),e("span",null," freetraveler_coupon.pdf ")],-1),W=["href"],X={class:"border-t-2"},Y={class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},Z=e("p",{class:"text-gray-600"}," Realizar acciones ",-1),ee={class:"capitalize"},ae={__name:"QuoteDetail",props:{quote:Object},setup(l){const s=l,d=p({quote:s.quote}),n=()=>{d.post(route("quote.archive",{id:s.quote.id}),{onSuccess:()=>{d.reset()}})};return console.log(s.quote),(_,se)=>{var c;return a(),r("div",v,[e("div",x,[e("div",b,[y,e("p",f,[e("span",w,t(s.quote.type)+" -",1),o(),e("span",q,t(s.quote.team.name),1),o(", "+t(s.quote.listed_activities[0].date_string_formatted),1)])]),e("div",null,[e("div",k,[z,e("p",C,t(s.quote.user.name),1)]),e("div",V,[j,e("p",null,t(s.quote.user.email),1)]),e("div",S,[B,e("p",null,t(s.quote.holder_name),1)]),e("div",R,[A,e("p",null,[D,o(" "+t(s.quote.adults)+" ",1),M,F,o(" "+t(s.quote.minors)+" ",1),G,N,o(" "+t(s.quote.infants)+" ",1),L])]),e("div",T,[E,e("p",null," $"+t(s.quote.cost_amount),1)]),e("div",H,[I,e("p",null,[(a(!0),r(h,null,g((c=s.quote)==null?void 0:c.listed_activities,(i,te)=>(a(),r("span",{class:"flex items-baseline",key:i.id},[J,e("span",O,t(i.activity.name.toLowerCase()),1)]))),128))])]),e("div",P,[Q,e("div",$,[e("div",K,[U,e("a",{href:_.route("export.pdf.quote.download",s.quote.id),class:"text-purple-700 hover:underline"}," Descargar ",8,W)])])])]),e("div",X,[e("div",Y,[Z,e("div",ee,[e("div",null,[e("button",{onClick:n,class:u([{"bg-amber-500 text-white":s.quote.status=="archived"},"border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white py-2 px-4 rounded-xl duration-150 hover:shadow-md hover:shadow-amber-600"])},"Archivar",2)])])])])])])}}};export{ae as default};
