import{u as y,D as k,o as v,d as j,a as e,t as m,l as A,v as a,E as d,b as n,g as c,n as _,e as B}from"./app.198591f6.js";import u from"./FormError.0411cd7f.js";const V={key:0,class:"overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-50"},C={id:"content",role:"main",class:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl mx-auto p-6 my-10"},T={class:"mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"},M={class:"p-4 sm:p-7"},S={class:"text-center"},U={class:"block text-2xl font-bold text-gray-800 dark:text-white"},E=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},null,-1),D={class:"mt-5"},N=["onSubmit"],$={class:"grid gap-y-4"},z={for:"name",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},F={class:"relative"},O=e("p",{class:"hidden mt-2 text-sm text-gray-600 dark:text-gray-400"},"Precios por temporada",-1),P=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Temporada baja",-1),G={class:"flex justify-between flex-col items-center"},L={class:"w-full mb-4"},q=e("label",{for:"adult_low",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Adulto (Temporada Baja)",-1),H={class:"relative"},I={class:"w-full"},J=e("label",{for:"minor_low",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Menor (Temporada Baja)",-1),K={class:"relative w-full"},Q=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Temporada Alta",-1),R={class:"flex justify-between flex-col"},W={class:"mb-4"},X=e("label",{for:"adult_high",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Adulto (Temporada Alta)",-1),Y={class:"relative"},Z=e("label",{for:"minor_high",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Menor (Temporada Alta)",-1),ee={class:"relative"},te=e("p",{class:"mt-2 text-sm text-gray-600 dark:text-gray-400"},"Porcentajes de Descuento",-1),se={class:"flex justify-between flex-col items-center"},oe={class:"w-full mb-4"},le=e("label",{for:"entrance",class:"block text-sm font-bold ml-1 mb-2 dark:text-white"},"Entrada",-1),ie={class:"relative"},re=e("button",{type:"submit",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"},"Guardar Cambios",-1),ne={__name:"ModalEntrance",props:{fields:Object,show:Boolean},emits:["close"],setup(f,{emit:h}){const t=f,o=y({name:null,adult_low:null,child_low:null,adult_high:null,child_high:null,entrance:null,tour:null,pack:null,pack_double:null,pack_multiple:null}),i=k({prices:!1,discounts:!0}),g=r=>{(r==="prices"||r==="discounts")&&(i.prices=!i.prices,i.discounts=!i.discounts)},x=()=>{o.name=t.fields.name,o.entrance=t.fields.discounts.entrance,o.tour=t.fields.discounts.tour,o.pack=t.fields.discounts.pack,o.pack_double=t.fields.discounts.pack_double,o.pack_multiple=t.fields.discounts.pack_multiple},w=()=>{x(),o.post(route("activities.update",t.fields.id),{preserveScroll:!0,onSuccess:()=>{Swal.fire({title:"\xA1Actualizado!",text:"La actividad ha sido actualizada correctamente.",icon:"success",confirmButtonText:"Aceptar",confirmButtonColor:"#3B82F6"}).then(r=>{r.isConfirmed&&h("close")})}})};return(r,s)=>{var b,p;return f.show?(v(),j("section",V,[e("main",C,[e("div",T,[e("div",M,[e("div",S,[e("h1",U,"Editando "+m((b=t.fields.name)!=null?b:"Actividad"),1),E]),e("div",D,[e("form",{onSubmit:A(w,["prevent"])},[e("div",$,[e("div",null,[e("label",z,"Nombre de la actividad: "+m((p=t.fields.name)!=null?p:"Actividad"),1),e("div",F,[a(e("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>t.fields.name=l),type:"text",id:"name",name:"name",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm","aria-describedby":"email-error"},null,512),[[d,t.fields.name]])]),n(u,{msg:c(o).errors.name},null,8,["msg"])]),O,e("button",{type:"button",onClick:s[1]||(s[1]=l=>g("prices")),class:"hidden text-white font-bold bg-sky-400 py-4"},m(i.prices?"Ocultar precios -":"Mostrar precios +"),1),e("div",{class:_([i.prices==!1?"h-0 overflow-y-hidden":"h-full overflow-y-auto","hidden"])},[P,e("div",G,[e("div",L,[q,e("div",H,[a(e("input",{step:"0.01","onUpdate:modelValue":s[2]||(s[2]=l=>t.fields.filter_prices.low.adult[0].amount=l),type:"number",name:"adult_low",id:"adult_low",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[d,t.fields.filter_prices.low.adult[0].amount]])]),n(u,{msg:c(o).errors.adult_low},null,8,["msg"])]),e("div",I,[J,e("div",K,[a(e("input",{step:"0.01","onUpdate:modelValue":s[3]||(s[3]=l=>t.fields.filter_prices.low.kid[0].amount=l),type:"number",name:"minor_low",id:"minor_low",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[d,t.fields.filter_prices.low.kid[0].amount]])]),n(u,{msg:c(o).errors.minor_low},null,8,["msg"])])]),Q,e("div",R,[e("div",W,[X,e("div",Y,[a(e("input",{step:"0.01","onUpdate:modelValue":s[4]||(s[4]=l=>t.fields.filter_prices.high.adult[0].amount=l),type:"number",name:"adult_high",id:"adult_high",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[d,t.fields.filter_prices.high.adult[0].amount]])]),n(u,{msg:c(o).errors.adult_high},null,8,["msg"])]),e("div",null,[Z,e("div",ee,[a(e("input",{step:"0.01","onUpdate:modelValue":s[5]||(s[5]=l=>t.fields.filter_prices.high.kid[0].amount=l),type:"number",name:"minor_high",id:"minor_high",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[d,t.fields.filter_prices.high.kid[0].amount]])]),n(u,{msg:c(o).errors.minor_high},null,8,["msg"])])])],2),te,e("div",{class:_(i.discounts==!1?"h-0 overflow-y-hidden":"h-full overflow-y-auto")},[e("div",se,[e("div",oe,[le,e("div",ie,[a(e("input",{"onUpdate:modelValue":s[6]||(s[6]=l=>t.fields.discounts.entrance=l),type:"number",name:"entrance",id:"entrance",class:"w-full py-3 px-4 block border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"},null,512),[[d,t.fields.discounts.entrance]])]),n(u,{msg:c(o).errors.entrance},null,8,["msg"])])])],2),re,e("button",{onClick:s[7]||(s[7]=l=>r.$emit("close")),type:"button",class:"py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"},"Cerrar Modal")])],40,N)])])])])])):B("",!0)}}};export{ne as default};
