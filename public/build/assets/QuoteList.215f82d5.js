import{_ as v}from"./Pagination.74dbcb61.js";import g from"./FilterForm.183633cc.js";import{o as i,d as o,a as t,b as m,F as b,h as k,t as s,f as w,e as u,I as y}from"./app.888ab847.js";import"./InputDate.3b94ca57.js";import"./InputLabel.727736ad.js";import"./Button.546fdb5f.js";const C={class:"w-full antialiased bg-gray-100 text-gray-600"},A={class:"flex flex-col justify-center h-full"},B={class:"w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"},L={class:"px-5 py-4 border-b border-gray-100"},N=t("h2",{class:"font-semibold text-gray-800"},"Cotizaciones",-1),P={class:"p-3"},$={class:"overflow-x-auto"},S={class:"table-auto w-full"},j=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[t("tr",null,[t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Fecha")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"No. Cupon")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Agencia")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Titular")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Pax")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Fecha Act.")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Tipo Act.")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Actividad")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Costo A.")]),t("th",{class:"p-2 whitespace-nowrap hidden"},[t("div",{class:"font-semibold text-left",title:"Precio Minimo Agencia"},"P.M. Agencia")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Precio Publico")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left",title:"Hora del pickup"},"Hr. pickup")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left",title:"Hotel del pickup"},"Htl. pickup")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Zona")])])],-1),H={class:"text-sm divide-y divide-gray-100"},z={class:"h-12 hover:bg-sky-300"},M={class:"p-2 whitespace-nowrap"},T={class:"flex items-center"},V={class:"font-medium text-gray-800"},E={class:"p-2 whitespace-nowrap"},F={class:"flex items-center"},I={class:"font-medium text-gray-800 hover:text-green-500"},D=["href"],O=t("svg",{class:"inline",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},[t("path",{d:"M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676",stroke:"#22C55E","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333",stroke:"#22C55E","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Q=["onClick"],Z={class:"p-2 whitespace-nowrap"},G={class:"flex items-center"},J={class:"font-medium text-gray-800"},K={class:"p-2 whitespace-nowrap"},R={class:"flex items-center"},U={class:"font-medium text-gray-800"},W={class:"p-2 whitespace-nowrap cursor-default"},X=["title"],Y={class:"p-2 whitespace-nowrap cursor-default"},q={class:"p-2 whitespace-nowrap"},tt=["title"],et={key:0},st={key:1},it=t("svg",{title:"Promomex",class:"inline",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},[t("path",{d:"M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667",stroke:"#52525B","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"}),t("circle",{cx:"7.50004",cy:"7.49967",r:"1.66667",stroke:"#52525B","stroke-width":"1.25","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ot=[it],at={class:"p-2 whitespace-nowrap"},ct={class:"text-left font-medium capitalize"},nt={class:"p-2 whitespace-nowrap cursor-default"},lt={class:"text-left font-medium text-green-500",title:"Precio de venta"},dt={class:"p-2 whitespace-nowrap cursor-default hidden"},rt={class:"text-left font-medium text-green-500",title:"Precio de venta"},pt={class:"p-2 whitespace-nowrap cursor-default"},ht={class:"text-left font-medium text-green-500"},_t={class:"p-2 whitespace-nowrap cursor-default"},ft={class:"text-left font-medium text-green-500 truncate w-20",title:"Hora del pickup"},mt={class:"p-2 whitespace-nowrap cursor-default"},wt=["title"],ut={class:"p-2 whitespace-nowrap"},xt={class:"text-center capitalize"},vt={class:"flex justify-center"},Lt={__name:"QuoteList",props:{quotes:Object,agencies:Array},setup(a){const x=c=>{Swal.fire({title:"Solicitar cupon?",text:"Se generara tu cupon para poder usarlo posteriormente!",icon:"question",showCancelButton:!0,confirmButtonColor:"#38bdf8",cancelButtonColor:"#d33",confirmButtonText:"Si, Solicitar!",cancelButtonText:"Cancelar"}).then(n=>{n.isConfirmed&&(y.post(route("coupon.request.code",c)).then(e=>{console.log(e)}).catch(e=>{console.log(e)}),Swal.fire("Confirmado!","Estamos generando tu cupon.","success").then(function(){location.reload()}))})};return(c,n)=>(i(),o("section",C,[t("div",A,[t("div",B,[t("header",L,[N,t("div",null,[m(g,{agencies:a.agencies,class:"grid grid-cols-6 gap-4"},null,8,["agencies"])])]),t("div",P,[t("div",$,[t("table",S,[j,t("tbody",H,[(i(!0),o(b,null,k(a.quotes.data,e=>{var l,d,r,p,h,_,f;return i(),o("tr",z,[t("td",M,[t("div",T,[t("div",V,s(e.created_at),1)])]),t("td",E,[t("div",F,[t("div",I,[(l=e==null?void 0:e.coupon)!=null&&l.code?(i(),o("a",{key:0,href:c.route("quote.preview",e.uuid)},[t("div",null,[w(s(e.coupon.code)+" ",1),O])],8,D)):(i(),o("button",{key:1,onClick:gt=>x(e),class:"px-3 py-2 rounded-md text-sm font-medium border focus:outline-none focus:ring transition text-sky-600 border-sky-600 hover:text-white hover:bg-sky-600 active:bg-sky-700 focus:ring-sky-300",type:"button"}," Solicitar ",8,Q))])])]),t("td",Z,[t("div",G,[t("div",J,s(e.team.name),1)])]),t("td",K,[t("div",R,[t("div",U,s(e.holder_name),1)])]),t("td",W,[t("div",{class:"text-left",title:`Adultos ${e.adults}, Ni\xF1os: ${e.minors}, Infantes: ${e.infants}`},s(e.adults)+"."+s(e.minors)+"."+s(e.infants),9,X)]),t("td",Y,s(e.listed_activities[0].date),1),t("td",q,[t("div",{class:"text-left font-medium text-green-500 capitalize",title:e.type=="entrada"&&e.national=="1"?"Promomex":""},[w(s(e.type)+" ",1),e.type=="paquete"?(i(),o("span",et,"#"+s(e.listed_activities.length),1)):u("",!0),e.type=="entrada"&&e.national=="1"?(i(),o("span",st,ot)):u("",!0)],8,tt)]),t("td",at,[t("div",ct,s(e.listed_activities[0].activity.name.toLowerCase()),1)]),t("td",nt,[t("div",lt,"$"+s(e.cost_amount),1)]),t("td",dt,[t("div",rt,"$"+s(e.sale_amount),1)]),t("td",pt,[t("div",ht,"$"+s(e.public_price),1)]),t("td",_t,[t("div",ft,s(e.listed_activities[0].pickup_time==null?"N/A":e.listed_activities[0].pickup_time.slice(0,5)),1)]),t("td",mt,[t("div",{class:"text-left font-medium text-green-500 truncate w-20",title:(r=(d=e.listed_activities[0].hotel)==null?void 0:d.name)!=null?r:"No Aplica"},s((h=(p=e.listed_activities[0].hotel)==null?void 0:p.name)!=null?h:"N/A"),9,wt)]),t("td",ut,[t("div",xt,s((f=(_=e.listed_activities[0].hotel)==null?void 0:_.zone.name)!=null?f:"N/A"),1)])])}),256))])])]),t("div",vt,[m(v,{links:a.quotes},null,8,["links"])])])])])]))}};export{Lt as default};
