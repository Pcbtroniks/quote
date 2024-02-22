import{u as _,o as c,d as m,a as e,v as l,N as f,g as o,E as r,F as p}from"./app.7feac651.js";const x={class:"flex gap-4 flex-col md:flex-row px-2"},h={class:"w-full"},v=e("label",{for:"coupon_status",class:"text-sm text-gray-400"},"Estatus de cupon",-1),g=e("option",{value:"none",selected:""},"Todos",-1),b=e("option",{value:"created"},"Creado",-1),y=e("option",{value:"pending"},"Pendiente",-1),w=e("option",{value:"confirmed"},"Confirmado",-1),F=[g,b,y,w],k={class:"w-full"},C=e("label",{for:"from_date",class:"text-sm text-gray-400"},"Desde la fecha",-1),V=["max"],B={class:"w-full"},E=e("label",{for:"to_date",class:"text-sm text-gray-400"},"Hasta la fecha",-1),U=["min"],j={class:"w-full flex gap-4 flex-col md:flex-row justify-end items-end px-2 pt-2 pb-4"},q=["href"],M={__name:"FilterForm",props:{params:Object},setup(i){const d=i,t=_({coupon_status:d.params.coupon_status,from_date:d.params.from_date,to_date:d.params.to_date}),n=()=>{t.get(route("quote.index",t.data))};return(u,s)=>(c(),m(p,null,[e("div",x,[e("div",h,[v,l(e("select",{onChange:n,"onUpdate:modelValue":s[0]||(s[0]=a=>o(t).coupon_status=a),class:"w-full border-2 border-sky-500 rounded-xl",name:"coupon_status",id:"coupon_status"},F,544),[[f,o(t).coupon_status]])]),e("div",k,[C,l(e("input",{max:o(t).to_date,type:"date",onChange:n,"onUpdate:modelValue":s[1]||(s[1]=a=>o(t).from_date=a),class:"w-full rounded-xl border-2 border-sky-500",name:"from_date",id:"from_date"},null,40,V),[[r,o(t).from_date]])]),e("div",B,[E,l(e("input",{min:o(t).from_date,onChange:n,"onUpdate:modelValue":s[2]||(s[2]=a=>o(t).to_date=a),class:"w-full rounded-xl border-2 border-sky-500",type:"date",name:"to_date",id:"to_date"},null,40,U),[[r,o(t).to_date]])])]),e("div",j,[e("div",null,[e("a",{href:u.route("quote.index"),class:"text-gray-400 underline underline-offset-2 hover:text-sky-600"},"Limpiar filtros",8,q)])])],64))}};export{M as default};
