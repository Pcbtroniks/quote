import{_ as y}from"./Pagination.a2f00f37.js";import g from"./Filters.7d5967c8.js";import $ from"./Modal.885222f0.js";import j from"./ModalEntrance.f3febe00.js";import{r as v,o as e,d as a,c as b,C as A,z as B,a as s,b as x,e as c,F as d,h as C,f as N,t as o,j as T}from"./app.9645caa1.js";import"./FormError.1519aaaa.js";const E={class:"w-full antialiased bg-gray-100 text-gray-600"},V={class:"flex flex-col justify-center h-full"},F={class:"w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"},D={class:"px-5 py-4 border-b border-gray-100 flex items-center"},L=s("h2",{class:"font-semibold text-gray-800"},null,-1),O={class:"m-2"},P={class:"p-3"},S={class:"overflow-x-auto"},q={class:"table-auto w-full"},z={class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},I=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Actividad")],-1),M=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Adulto (Baja)")],-1),G=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Ni\xF1o (Baja)")],-1),H=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Adulto (Alta)")],-1),J=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Ni\xF1o (Alta)")],-1),K={key:0,class:"p-2 whitespace-nowrap"},Q=s("div",{class:"font-semibold text-left"},"Entrada",-1),R=[Q],U=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Tour (Solo)")],-1),W=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Tour (Paquete)")],-1),X=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"2 Tours")],-1),Y=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"3 o mas Tours")],-1),Z={class:"text-sm divide-y divide-gray-100"},ss={class:"hover:cursor-pointer hover:text-white hover:bg-sky-400 h-10"},ts={class:"p-2 whitespace-nowrap"},es={class:"flex items-center"},os=["onClick"],as={key:0,class:"w-3 inline mr-1 stroke-sky-500 fill-sky-500 text-sky-500",src:"/assets/icons/edit-icon.svg",alt:"Edit Icon"},is={class:"p-2 whitespace-nowrap"},ls={class:"p-2 whitespace-nowrap"},cs={class:"p-2 whitespace-nowrap"},rs={class:"p-2 whitespace-nowrap cursor-default"},ns={key:0,class:"p-2 whitespace-nowrap cursor-default"},ds={class:"p-2 whitespace-nowrap cursor-default"},ps={class:"p-2 whitespace-nowrap"},_s={class:"p-2 whitespace-nowrap"},hs={class:"p-2 whitespace-nowrap"},us={class:"flex justify-center"},ys={__name:"ActivityList",props:{activities:Object,filters:Object},setup(p){const i=p,h=v({}),_=v(!1),k=l=>{if(!T().props.value.user.is_freetraveler_admin)return null;h.value=l,_.value=!0},r=(l,n)=>l==n;return(l,n)=>(e(),a(d,null,[(e(),b(B,{to:"body"},[(e(),b(A(i.filters.type=="park"?j:$),{fields:h.value,show:_.value,onClose:n[0]||(n[0]=t=>_.value=!1)},null,40,["fields","show"]))])),s("section",E,[s("div",V,[s("div",F,[s("header",D,[L,s("div",O,[x(g,{filters:p.filters},null,8,["filters"])])]),s("div",P,[s("div",S,[s("table",q,[s("thead",z,[s("tr",null,[I,M,G,H,J,r(i.filters.type,"park")?(e(),a("th",K,R)):c("",!0),r(i.filters.type,"tour")?(e(),a(d,{key:1},[U,W,X,Y],64)):c("",!0)])]),s("tbody",Z,[(e(!0),a(d,null,C(i.activities.data,t=>{var u,f,m,w;return e(),a("tr",ss,[s("td",ts,[s("div",es,[s("div",{onClick:fs=>k(t),class:"font-medium"},[l.$page.props.user.is_freetraveler_admin?(e(),a("img",as)):c("",!0),N(o(t.name),1)],8,os)])]),s("td",is," $"+o((u=t.filter_prices.low)==null?void 0:u.adult[0].amount),1),s("td",ls," $"+o((f=t.filter_prices.low)==null?void 0:f.kid[0].amount),1),s("td",cs," $"+o((m=t.filter_prices.high)==null?void 0:m.adult[0].amount),1),s("td",rs," $"+o((w=t.filter_prices.high)==null?void 0:w.kid[0].amount),1),r(i.filters.type,"park")?(e(),a("td",ns," %"+o(t.discounts.entrance),1)):c("",!0),r(i.filters.type,"tour")?(e(),a(d,{key:1},[s("td",ds," %"+o(t.discounts.tour),1),s("td",ps," %"+o(t.discounts.pack),1),s("td",_s," %"+o(t.discounts.pack_double),1),s("td",hs," %"+o(t.discounts.pack_multiple),1)],64)):c("",!0)])}),256))])])]),s("div",us,[x(y,{data:i.filters,links:p.activities},null,8,["data","links"])])])])])])],64))}};export{ys as default};
