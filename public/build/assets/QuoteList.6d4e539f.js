import{o as c,d as i,h as r,c as p,n as h,D as _,g as f,L as u,F as l,a as t,t as s,b as m}from"./app.f87a2719.js";const x={__name:"Pagination",props:{links:Object},setup(a){return console.log(a.links),(d,e)=>(c(!0),i(l,null,r(a.links.links,o=>(c(),p(_(o.active?"span":f(u)),{key:o,class:h("ml-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-sm text-gray-500"+(o.active?" cursor-pointer text-gray-300":" ")),href:o.url,innerHTML:o.label},null,8,["class","href","innerHTML"]))),128))}},w={class:"w-full antialiased bg-gray-100 text-gray-600"},g={class:"flex flex-col justify-center h-full"},v={class:"w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"},b=t("header",{class:"px-5 py-4 border-b border-gray-100"},[t("h2",{class:"font-semibold text-gray-800"},"Cotizaciones")],-1),y={class:"p-3"},k={class:"overflow-x-auto"},L={class:"table-auto w-full"},P=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[t("tr",null,[t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Fecha")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"No. Cupon")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Titular")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Pax")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Tipo Act.")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Precio agencia")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Precio Publico")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Zona")])])],-1),$={class:"text-sm divide-y divide-gray-100"},j={class:"p-2 whitespace-nowrap"},B={class:"flex items-center"},C={class:"font-medium text-gray-800"},F={class:"p-2 whitespace-nowrap"},T={class:"flex items-center"},z={class:"font-medium text-gray-800 hover:text-green-500"},D=["href"],N={class:"p-2 whitespace-nowrap"},H={class:"flex items-center"},M={class:"font-medium text-gray-800"},O={class:"p-2 whitespace-nowrap"},V={class:"text-left"},A={class:"p-2 whitespace-nowrap"},E={class:"text-left font-medium text-green-500 capitalize"},Q={class:"p-2 whitespace-nowrap"},S=["title"],Z={class:"p-2 whitespace-nowrap"},G={class:"text-left font-medium text-green-500"},I=t("td",{class:"p-2 whitespace-nowrap"},[t("div",{class:"text-lg text-center"},"??")],-1),J={class:"flex justify-center"},R={__name:"QuoteList",props:{quotes:Object},setup(a){return(n,d)=>(c(),i(l,null,[t("h1",null,s(n.$page.props.flash.message),1),t("section",w,[t("div",g,[t("div",v,[b,t("div",y,[t("div",k,[t("table",L,[P,t("tbody",$,[(c(!0),i(l,null,r(a.quotes.data,e=>(c(),i("tr",null,[t("td",j,[t("div",B,[t("div",C,s(e.created_at),1)])]),t("td",F,[t("div",T,[t("div",z,[t("a",{href:n.route("quote.preview",e.uuid)},s(e.coupon.code),9,D)])])]),t("td",N,[t("div",H,[t("div",M,s(e.holder_name),1)])]),t("td",O,[t("div",V,s(e.adults)+"."+s(e.minors)+"."+s(e.infants),1)]),t("td",A,[t("div",E,s(e.type),1)]),t("td",Q,[t("div",{class:"text-left font-medium text-green-500",title:"$"+(e.coupon.public_price-e.coupon.agency_price).toFixed(2)},"$"+s(e.coupon.agency_price),9,S)]),t("td",Z,[t("div",G,"$"+s(e.coupon.public_price),1)]),I]))),256))])])]),t("div",J,[m(x,{links:a.quotes},null,8,["links"])])])])])])],64))}};export{R as default};
