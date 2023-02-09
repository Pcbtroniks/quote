import{_ as g}from"./Pagination.74dbcb61.js";import y from"./Filters.f3c5d08b.js";import $ from"./Modal.f2f44570.js";import j from"./ModalEntrance.72a793b2.js";import{r as v,o,d as l,c as b,C as A,z as B,a as s,b as x,e as n,F as d,h as C,t as e,j as N}from"./app.888ab847.js";import"./FormError.b1cef6ab.js";const T={class:"w-full antialiased bg-gray-100 text-gray-600"},E={class:"flex flex-col justify-center h-full"},F={class:"w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200"},V={class:"px-5 py-4 border-b border-gray-100 flex items-center"},D=s("h2",{class:"font-semibold text-gray-800"},null,-1),L={class:"m-2"},O={class:"p-3"},P={class:"overflow-x-auto"},S={class:"table-auto w-full"},q={class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},z=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Actividad")],-1),M=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Adulto (Baja)")],-1),G=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Ni\xF1o (Baja)")],-1),H=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Adulto (Alta)")],-1),I=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Ni\xF1o (Alta)")],-1),J={key:0,class:"p-2 whitespace-nowrap"},K=s("div",{class:"font-semibold text-left"},"Entrada",-1),Q=[K],R=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Tour (Solo)")],-1),U=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"Tour (Paquete)")],-1),W=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"2 Tours")],-1),X=s("th",{class:"p-2 whitespace-nowrap"},[s("div",{class:"font-semibold text-left"},"3 o mas Tours")],-1),Y={class:"text-sm divide-y divide-gray-100"},Z={class:"hover:cursor-pointer hover:text-white hover:bg-sky-400 h-10"},ss={class:"p-2 whitespace-nowrap"},ts={class:"flex items-center"},es=["onClick"],os={class:"p-2 whitespace-nowrap"},as={class:"p-2 whitespace-nowrap"},ls={class:"p-2 whitespace-nowrap"},is={class:"p-2 whitespace-nowrap cursor-default"},cs={key:0,class:"p-2 whitespace-nowrap cursor-default"},rs={class:"p-2 whitespace-nowrap cursor-default"},ns={class:"p-2 whitespace-nowrap"},ds={class:"p-2 whitespace-nowrap"},ps={class:"p-2 whitespace-nowrap"},_s={class:"flex justify-center"},xs={__name:"ActivityList",props:{activities:Object,filters:Object},setup(p){const a=p,h=v({}),_=v(!1),k=c=>{if(!N().props.value.user.is_freetraveler_admin)return null;h.value=c,_.value=!0},i=(c,r)=>c==r;return(c,r)=>(o(),l(d,null,[(o(),b(B,{to:"body"},[(o(),b(A(a.filters.type=="park"?j:$),{fields:h.value,show:_.value,onClose:r[0]||(r[0]=t=>_.value=!1)},null,40,["fields","show"]))])),s("section",T,[s("div",E,[s("div",F,[s("header",V,[D,s("div",L,[x(y,{filters:p.filters},null,8,["filters"])])]),s("div",O,[s("div",P,[s("table",S,[s("thead",q,[s("tr",null,[z,M,G,H,I,i(a.filters.type,"park")?(o(),l("th",J,Q)):n("",!0),i(a.filters.type,"tour")?(o(),l(d,{key:1},[R,U,W,X],64)):n("",!0)])]),s("tbody",Y,[(o(!0),l(d,null,C(a.activities.data,t=>{var u,f,w,m;return o(),l("tr",Z,[s("td",ss,[s("div",ts,[s("div",{onClick:hs=>k(t),class:"font-medium"},e(t.name),9,es)])]),s("td",os," $"+e((u=t.filter_prices.low)==null?void 0:u.adult[0].amount),1),s("td",as," $"+e((f=t.filter_prices.low)==null?void 0:f.kid[0].amount),1),s("td",ls," $"+e((w=t.filter_prices.high)==null?void 0:w.adult[0].amount),1),s("td",is," $"+e((m=t.filter_prices.high)==null?void 0:m.kid[0].amount),1),i(a.filters.type,"park")?(o(),l("td",cs," %"+e(t.discounts.entrance),1)):n("",!0),i(a.filters.type,"tour")?(o(),l(d,{key:1},[s("td",rs," %"+e(t.discounts.tour),1),s("td",ns," %"+e(t.discounts.pack),1),s("td",ds," %"+e(t.discounts.pack_double),1),s("td",ps," %"+e(t.discounts.pack_multiple),1)],64)):n("",!0)])}),256))])])]),s("div",_s,[x(g,{data:a.filters,links:p.activities},null,8,["data","links"])])])])])])],64))}};export{xs as default};