import{u as A,D as P,d as S,a as e,t as p,l as B,v as d,E as a,b as n,g as u,n as k,e as V,o as j}from"./app.cc7fb2e5.js";import c from"./FormError.34236ba7.js";const C={key:0,class:"overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-50"},T={id:"content",role:"main",class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl mx-auto p-6 my-10"},M={class:"mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"},U={class:"p-4 sm:p-7"},z={class:"text-center"},$={class:"block text-2xl font-bold text-gray-800 dark:text-white"},E={class:"mt-5"},D=["onSubmit"],N={class:"grid gap-y-4"},q={for:"name",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},F={class:"relative"},H=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Modo edici\xF3n",-1),L=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Temporada baja",-1),K={class:"flex justify-between flex-col items-center"},O={class:"w-full mb-4"},G=e("label",{for:"adult_low",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Adulto (Temporada Baja)",-1),I={class:"relative"},J={class:"w-full"},Q=e("label",{for:"minor_low",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Menor (Temporada Baja)",-1),R={class:"relative w-full"},W=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Temporada Alta",-1),X={class:"flex justify-between flex-col"},Y={class:"mb-4"},Z=e("label",{for:"adult_high",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Adulto (Temporada Alta)",-1),ee={class:"relative"},te=e("label",{for:"minor_high",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Menor (Temporada Alta)",-1),se={class:"relative"},le={class:"flex justify-between flex-col items-center"},oe={class:"w-full"},ie=e("label",{for:"tour",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Tour (Solo)",-1),re={class:"relative w-full"},de={class:"flex justify-between flex-col"},ae={class:"mb-4"},ne=e("label",{for:"pack",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Tour (Paquete)",-1),ue={class:"relative"},ce=e("label",{for:"pack_double",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Paquete #2",-1),me={class:"relative"},fe=e("label",{for:"pack_multiple",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Paquete #3 o mas",-1),pe={class:"relative"},be={class:"text-sm text-gray-600 dark:text-gray-400"},_e=e("button",{type:"submit",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"},"Guardar Cambios",-1),we={__name:"Modal",props:{fields:Object,show:Boolean,filters:Object},emits:["close"],setup(b,{emit:w}){const t=b,l=A({activity_id:null,zone_id:null,name:null,adult_low:null,kid_low:null,adult_high:null,kid_high:null,entrance:null,tour:null,pack:null,pack_double:null,pack_multiple:null}),i=P({prices:!1,discounts:!0}),x=r=>{(r==="prices"||r==="discounts")&&(i.prices=!i.prices,i.discounts=!i.discounts)},y=()=>{l.activity_id=t.fields.id,l.name=t.fields.name,l.entrance=t.fields.discounts.entrance,l.tour=t.fields.discounts.tour,l.pack=t.fields.discounts.pack,l.pack_double=t.fields.discounts.pack_double,l.pack_multiple=t.fields.discounts.pack_multiple,l.adult_low=t.fields.filter_prices.low.adult[0].amount,l.kid_low=t.fields.filter_prices.low.kid[0].amount,l.adult_high=t.fields.filter_prices.high.adult[0].amount,l.kid_high=t.fields.filter_prices.high.kid[0].amount,l.zone_id=t.filters.zone},v=()=>{y(),l.post(route("activities.update",t.fields.id),{preserveScroll:!0,onSuccess:()=>{Swal.fire({title:"\xA1Actualizado!",text:"La actividad ha sido actualizada correctamente.",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#3B82F6"}).then(r=>{r.isConfirmed&&w("close")})},onError:r=>{console.log(r),Swal.fire({title:"\xA1Error!",text:"Ha ocurrido un error al intentar actualizar la actividad.",icon:"error",confirmButtonText:"Aceptar",confirmButtonColor:"#3B82F6"})}})};return(()=>{var o,_,h,g;const r=(o=t.fields.filter_prices.low)==null?void 0:o.kid,s=(_=t.fields.filter_prices.high)==null?void 0:_.kid,m=((h=t.fields.filter_prices.low)==null?void 0:h.adult)!=null,f=(g=t.fields.filter_prices.high)==null?void 0:g.adult;r||(t.fields.filter_prices.low={kid:[{amount:0}],...t.fields.filter_prices.low}),m||(t.fields.filter_prices.low={adult:[{amount:0}],...t.fields.filter_prices.low}),s||(t.fields.filter_prices.high={kid:[{amount:0}],...t.fields.filter_prices.high}),f||(t.fields.filter_prices.high={adult:[{amount:0}],...t.fields.filter_prices.high})})(),(r,s)=>{var m,f;return b.show?(j(),S("section",C,[e("main",T,[e("div",M,[e("div",U,[e("div",z,[e("h1",$,"Editando "+p((m=t.fields.name)!=null?m:"Actividad"),1)]),e("div",E,[e("form",{onSubmit:B(v,["prevent"])},[e("div",N,[e("div",null,[e("label",q,"Nombre de la actividad: "+p((f=t.fields.name)!=null?f:"Actividad"),1),e("div",F,[d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.fields.name=o),type:"text",id:"name",name:"name",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm","aria-describedby":"email-error"},null,512),[[a,t.fields.name]])]),n(c,{msg:u(l).errors.name},null,8,["msg"])]),H,e("button",{type:"button",onClick:s[1]||(s[1]=o=>x("prices")),class:"text-white font-bold bg-sky-400 py-4"},p(i.prices?"Cambiar a modificar % descuentos":"Cambiar a modificar $ Precios"),1),e("div",{class:k(i.prices==!1?"h-0 overflow-y-hidden":"h-full overflow-y-auto")},[L,e("div",K,[e("div",O,[G,e("div",I,[d(e("input",{step:"0.01","onUpdate:modelValue":s[2]||(s[2]=o=>t.fields.filter_prices.low.adult[0].amount=o),type:"number",name:"adult_low",id:"adult_low",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.filter_prices.low.adult[0].amount]])]),n(c,{msg:u(l).errors.adult_low},null,8,["msg"])]),e("div",J,[Q,e("div",R,[d(e("input",{step:"0.01","onUpdate:modelValue":s[3]||(s[3]=o=>t.fields.filter_prices.low.kid[0].amount=o),type:"number",name:"minor_low",id:"minor_low",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.filter_prices.low.kid[0].amount]])]),n(c,{msg:u(l).errors.minor_low},null,8,["msg"])])]),W,e("div",X,[e("div",Y,[Z,e("div",ee,[d(e("input",{step:"0.01","onUpdate:modelValue":s[4]||(s[4]=o=>t.fields.filter_prices.high.adult[0].amount=o),type:"number",name:"adult_high",id:"adult_high",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.filter_prices.high.adult[0].amount]])]),n(c,{msg:u(l).errors.adult_high},null,8,["msg"])]),e("div",null,[te,e("div",se,[d(e("input",{step:"0.01","onUpdate:modelValue":s[5]||(s[5]=o=>t.fields.filter_prices.high.kid[0].amount=o),type:"number",name:"minor_high",id:"minor_high",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.filter_prices.high.kid[0].amount]])]),n(c,{msg:u(l).errors.minor_high},null,8,["msg"])])])],2),e("div",{class:k(i.discounts==!1?"h-0 overflow-y-hidden":"h-full overflow-y-auto")},[e("div",le,[e("div",oe,[ie,e("div",re,[d(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.fields.discounts.tour=o),type:"number",name:"tour",id:"tour",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.discounts.tour]])]),n(c,{msg:u(l).errors.tour},null,8,["msg"])])]),e("div",de,[e("div",ae,[ne,e("div",ue,[d(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.fields.discounts.pack=o),type:"number",name:"pack",id:"pack",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.discounts.pack]])]),n(c,{msg:u(l).errors.pack},null,8,["msg"])]),e("div",null,[ce,e("div",me,[d(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.fields.discounts.pack_double=o),type:"number",name:"pack_double",id:"pack_double",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.discounts.pack_double]])]),n(c,{msg:u(l).errors.pack_double},null,8,["msg"])]),e("div",null,[fe,e("div",pe,[d(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>t.fields.discounts.pack_multiple=o),type:"number",name:"pack_multiple",id:"pack_multiple",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[a,t.fields.discounts.pack_multiple]])]),n(c,{msg:u(l).errors.pack_multiple},null,8,["msg"])])])],2),e("p",be,"Actualizando: "+p(i.prices?"Precios ($)":"Descuentos (%)"),1),_e,e("button",{onClick:s[10]||(s[10]=o=>r.$emit("close")),type:"button",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"},"Cerrar Modal")])],40,D)])])])])])):V("",!0)}}};export{we as default};
