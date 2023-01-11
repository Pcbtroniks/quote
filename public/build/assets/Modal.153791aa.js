import{u as w,D as y,o as v,d as V,a as e,t as m,l as j,v as i,E as r,b as a,g as n,n as _,e as A}from"./app.9e9fa62b.js";import u from"./FormError.047939b3.js";const T={key:0,class:"overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-50"},B={id:"content",role:"main",class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl mx-auto p-6 my-10"},U={class:"mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"},C={class:"p-4 sm:p-7"},S={class:"text-center"},M={class:"block text-2xl font-bold text-gray-800 dark:text-white"},P=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},null,-1),D={class:"mt-5"},N=["onSubmit"],$={class:"grid gap-y-4"},q={for:"name",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},z={class:"relative"},E=e("p",{class:"hidden mt-2 text-sm text-gray-600 dark:text-gray-400"},"Precios por temporada",-1),F=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Temporada baja",-1),O={class:"flex justify-between flex-col items-center"},G={class:"w-full mb-4"},L=e("label",{for:"adult_low",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Adulto (Temporada Baja)",-1),H={class:"relative"},I={class:"w-full"},J=e("label",{for:"minor_low",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Menor (Temporada Baja)",-1),K={class:"relative w-full"},Q=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Temporada Alta",-1),R={class:"flex justify-between flex-col"},W={class:"mb-4"},X=e("label",{for:"adult_high",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Adulto (Temporada Alta)",-1),Y={class:"relative"},Z=e("label",{for:"minor_high",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Menor (Temporada Alta)",-1),ee={class:"relative"},te=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Porcentajes de Descuento",-1),se={class:"flex justify-between flex-col items-center"},oe={class:"w-full"},le=e("label",{for:"tour",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Tour (Solo)",-1),de={class:"relative w-full"},ie={class:"flex justify-between flex-col"},re={class:"mb-4"},ae=e("label",{for:"pack",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Tour (Paquete)",-1),ne={class:"relative"},ue=e("label",{for:"pack_double",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Paquete #2",-1),ce={class:"relative"},me=e("label",{for:"pack_multiple",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Paquete #3 o mas",-1),be={class:"relative"},fe=e("button",{type:"submit",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"},"Guardar Cambios",-1),he={__name:"Modal",props:{fields:Object,show:Boolean},emits:["close"],setup(b,{emit:h}){const t=b,l=w({name:null,adult_low:null,child_low:null,adult_high:null,child_high:null,entrance:null,tour:null,pack:null,pack_double:null,pack_multiple:null}),d=y({prices:!1,discounts:!0}),g=c=>{(c==="prices"||c==="discounts")&&(d.prices=!d.prices,d.discounts=!d.discounts)},x=()=>{l.name=t.fields.name,l.entrance=t.fields.discounts.entrance,l.tour=t.fields.discounts.tour,l.pack=t.fields.discounts.pack,l.pack_double=t.fields.discounts.pack_double,l.pack_multiple=t.fields.discounts.pack_multiple},k=()=>{x(),l.post(route("activities.update",t.fields.id),{preserveScroll:!0,onSuccess:()=>{Swal.fire({title:"\xA1Actualizado!",text:"La actividad ha sido actualizada correctamente.",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#3B82F6"}).then(c=>{c.isConfirmed&&h("close")})}})};return(c,s)=>{var f,p;return b.show?(v(),V("section",T,[e("main",B,[e("div",U,[e("div",C,[e("div",S,[e("h1",M,"Editando "+m((f=t.fields.name)!=null?f:"Actividad"),1),P]),e("div",D,[e("form",{onSubmit:j(k,["prevent"])},[e("div",$,[e("div",null,[e("label",q,"Nombre de la actividad: "+m((p=t.fields.name)!=null?p:"Actividad"),1),e("div",z,[i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.fields.name=o),type:"text",id:"name",name:"name",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm","aria-describedby":"email-error"},null,512),[[r,t.fields.name]])]),a(u,{msg:n(l).errors.name},null,8,["msg"])]),E,e("button",{type:"button",onClick:s[1]||(s[1]=o=>g("prices")),class:"hidden text-white font-bold bg-sky-400 py-4"},m(d.prices?"Ocultar precios -":"Mostrar precios +"),1),e("div",{class:_([d.prices==!1?"h-0 overflow-y-hidden":"h-full overflow-y-auto","hidden"])},[F,e("div",O,[e("div",G,[L,e("div",H,[i(e("input",{step:"0.01","onUpdate:modelValue":s[2]||(s[2]=o=>t.fields.filter_prices.low.adult[0].amount=o),type:"number",name:"adult_low",id:"adult_low",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.filter_prices.low.adult[0].amount]])]),a(u,{msg:n(l).errors.adult_low},null,8,["msg"])]),e("div",I,[J,e("div",K,[i(e("input",{step:"0.01","onUpdate:modelValue":s[3]||(s[3]=o=>t.fields.filter_prices.low.kid[0].amount=o),type:"number",name:"minor_low",id:"minor_low",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.filter_prices.low.kid[0].amount]])]),a(u,{msg:n(l).errors.minor_low},null,8,["msg"])])]),Q,e("div",R,[e("div",W,[X,e("div",Y,[i(e("input",{step:"0.01","onUpdate:modelValue":s[4]||(s[4]=o=>t.fields.filter_prices.high.adult[0].amount=o),type:"number",name:"adult_high",id:"adult_high",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.filter_prices.high.adult[0].amount]])]),a(u,{msg:n(l).errors.adult_high},null,8,["msg"])]),e("div",null,[Z,e("div",ee,[i(e("input",{step:"0.01","onUpdate:modelValue":s[5]||(s[5]=o=>t.fields.filter_prices.high.kid[0].amount=o),type:"number",name:"minor_high",id:"minor_high",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.filter_prices.high.kid[0].amount]])]),a(u,{msg:n(l).errors.minor_high},null,8,["msg"])])])],2),te,e("div",{class:_(d.discounts==!1?"h-0 overflow-y-hidden":"h-full overflow-y-auto")},[e("div",se,[e("div",oe,[le,e("div",de,[i(e("input",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.fields.discounts.tour=o),type:"number",name:"tour",id:"tour",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.discounts.tour]])]),a(u,{msg:n(l).errors.tour},null,8,["msg"])])]),e("div",ie,[e("div",re,[ae,e("div",ne,[i(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.fields.discounts.pack=o),type:"number",name:"pack",id:"pack",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.discounts.pack]])]),a(u,{msg:n(l).errors.pack},null,8,["msg"])]),e("div",null,[ue,e("div",ce,[i(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.fields.discounts.pack_double=o),type:"number",name:"pack_double",id:"pack_double",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.discounts.pack_double]])]),a(u,{msg:n(l).errors.pack_double},null,8,["msg"])]),e("div",null,[me,e("div",be,[i(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>t.fields.discounts.pack_multiple=o),type:"number",name:"pack_multiple",id:"pack_multiple",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[r,t.fields.discounts.pack_multiple]])]),a(u,{msg:n(l).errors.pack_multiple},null,8,["msg"])])])],2),fe,e("button",{onClick:s[10]||(s[10]=o=>c.$emit("close")),type:"button",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"},"Cerrar Modal")])],40,N)])])])])])):A("",!0)}}};export{he as default};
