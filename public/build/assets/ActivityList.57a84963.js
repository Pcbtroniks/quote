import{_ as v}from"./Pagination.5cb127b0.js";import x from"./Filters.b672cf3c.js";import g from"./Modal.87ea71d5.js";import{r as w,o,d as c,c as k,b as i,z as y,a as s,F as m,h as $,t as e}from"./app.32117761.js";import"./FormError.bc1a1c2b.js";const A={class:"w-full antialiased bg-gray-100 text-gray-600"},j={class:"flex flex-col justify-center h-full"},B={class:"w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"},T={class:"px-5 py-4 border-b border-gray-100 flex items-center"},N=s("h2",{class:"font-semibold text-gray-800"},null,-1),C={class:"m-2"},E={class:"p-3"},F={class:"overflow-x-auto"},L={class:"table-auto w-full"},O=s("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[s("tr",null,[s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Actividad")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Adulto (Baja)")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Ni\xF1o (Baja)")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Adulto (Alta)")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Ni\xF1o (Alta)")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Entrada")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Tour (Solo)")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Tour (Paquete)")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"2 Tours")]),s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"3 o mas Tours")])])],-1),S={class:"text-sm divide-y divide-gray-100"},V={class:"hover:cursor-pointer hover:text-white hover:bg-sky-400 h-10"},q={class:"p-2 whitespace-nowrap"},z={class:"flex items-center"},D=["onClick"],M={class:"p-2 whitespace-nowrap"},P={class:"p-2 whitespace-nowrap"},G={class:"p-2 whitespace-nowrap"},H={class:"p-2 whitespace-nowrap cursor-default"},I={class:"p-2 whitespace-nowrap cursor-default"},J={class:"p-2 whitespace-nowrap cursor-default"},K={class:"p-2 whitespace-nowrap"},Q={class:"p-2 whitespace-nowrap"},R={class:"p-2 whitespace-nowrap"},U={class:"flex justify-center"},es={__name:"ActivityList",props:{activities:Object,filters:Object},setup(a){const n=a,d=w({}),l=w(!1),b=r=>{d.value=r,l.value=!0};return(r,p)=>(o(),c(m,null,[(o(),k(y,{to:"body"},[i(g,{fields:d.value,show:l.value,onClose:p[0]||(p[0]=t=>l.value=!1)},null,8,["fields","show"])])),s("section",A,[s("div",j,[s("div",B,[s("header",T,[N,s("div",C,[i(x,{filters:a.filters},null,8,["filters"])])]),s("div",E,[s("div",F,[s("table",L,[O,s("tbody",S,[(o(!0),c(m,null,$(n.activities.data,t=>{var h,_,f,u;return o(),c("tr",V,[s("td",q,[s("div",z,[s("div",{onClick:W=>b(t),class:"font-medium"},e(t.name),9,D)])]),s("td",M," $"+e((h=t.filter_prices.low)==null?void 0:h.adult[0].amount),1),s("td",P," $"+e((_=t.filter_prices.low)==null?void 0:_.kid[0].amount),1),s("td",G," $"+e((f=t.filter_prices.high)==null?void 0:f.adult[0].amount),1),s("td",H," $"+e((u=t.filter_prices.high)==null?void 0:u.kid[0].amount),1),s("td",I," %"+e(t.agency_discounts.entrance),1),s("td",J," %"+e(t.agency_discounts.tour),1),s("td",K," %"+e(t.agency_discounts.pack),1),s("td",Q," %"+e(t.agency_discounts.pack_double),1),s("td",R," %"+e(t.agency_discounts.pack_multiple),1)])}),256))])])]),s("div",U,[i(v,{data:n.filters,links:a.activities},null,8,["data","links"])])])])])])],64))}};export{es as default};
