import{r as h,d,b as f,K as x,w as v,n as P,o as m,a,t as s,F as C,h as w,e as A,f as S,M as k}from"./app.4c9a3f20.js";import{_ as $}from"./Button.6685f3e0.js";import{_ as q}from"./DialogModal.65df1808.js";import{_ as z}from"./PrimaryButton.dd051f86.js";const W=o=>({1:"cancun",2:"rm",3:"pdc"})[o],X=new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),N=o=>{var l;return(l=["no especificada","entrance","tour","pack"][o])!=null?l:"invalida"},Y=(o,e)=>Number(Number(o)+Number(e)).toFixed(2),M=o=>o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),Z=o=>o>0?"$"+M(o):"",T=a("p",{class:"font-bold text-gray-700"}," Resumen de la cotizaci\xF3n actual ",-1),F={class:"text-gray-700"},D={class:"text-gray-700"},L=a("div",{class:"h-8"},null,-1),B={key:0},V=a("p",{class:"font-bold text-xl text-gray-700"}," Actividades ",-1),j=a("div",{class:"h-4"},null,-1),I=a("div",{class:"h-8"},null,-1),O=a("p",{class:"font-bold text-xl text-gray-700"}," Importes totales ",-1),E=a("div",{class:"h-4"},null,-1),Q=a("div",{class:"h-8"},null,-1),R={class:"font-bold text-xl text-gray-700"},K={__name:"ShowCostsModal",props:{activities:{type:Object},activityList:{type:Array}},setup(o){const e=o,l=h([]),t=h({show:!1,totalPublicPrice:0,totalAgencyCost:0,quotes:[]}),g=()=>{if(N(e.activities.tipoReservacion)=="entrance"){const r={activity:e.activities.actividad,adults:e.activities.adultos,minors:e.activities.menores,season:e.activities.season,zone:e.activities.nacionales?4:5,type:"entrance"};return l.value=[r],null}return l.value=[...e.activityList],null},y=()=>{t.value.totalPublicPrice=0,t.value.totalAgencyCost=0,t.value.quotes=[],g(),l.value.forEach(({activity:r,adults:n,minors:i,season:u,zone:p,type:_})=>{n=e.activities.adultos,i=e.activities.menores,l.value.length==2?_="pack_double":l.value.length>=3&&(_="pack_multiple"),k.get(route("quoter.calculate"),{params:{activity:r,adults:n,minors:i,season:u,zone:p,type:_}}).then(c=>(t.value.quotes=[...t.value.quotes,c.data],t.value.totalPublicPrice+=c.data.summary.totalPublicPrice,t.value.totalAgencyCost+=c.data.summary.totalAgencyCost,!0)).catch(c=>{console.log(c)})}),console.clear(),console.log(e.activities),console.log(t.value),t.value.show=!0};function b(){y()}return(r,n)=>(m(),d("div",null,[f(q,{show:t.value.show,onClose:n[1]||(n[1]=i=>t.value.show=!1)},x({title:v(()=>[T,a("p",F," Fecha: "+s(new Date().toLocaleDateString()),1)]),footer:v(()=>[f(z,{class:"ml-2",onClick:n[0]||(n[0]=i=>t.value.show=!1)},{default:v(()=>[S(" Aceptar ")]),_:1})]),_:2},[t.value.quotes?{name:"content",fn:v(()=>{var i,u;return[a("div",D,[a("div",null,[a("p",null," Nombre: "+s((i=e.activities.nombreTitular)!=null?i:"Ingrese el nomber por favor."),1),a("p",null," Adultos: "+s(e.activities.adultos)+" - Menor: "+s(e.activities.menores)+" - Infante: "+s(e.activities.infantes),1)]),L,t.value.quotes?(m(),d("div",B,[V,j,a("ul",null,[(m(!0),d(C,null,w(t.value.quotes,p=>(m(),d("li",null,s(p.description),1))),256))])])):A("",!0),I,a("div",null,[O,E,a("p",null,"Precio publico: $"+s(t.value.totalPublicPrice),1),a("p",null,"Precio a pagar: $"+s(t.value.totalAgencyCost),1),Q,a("p",R," Comision: $"+s((u=(t.value.totalPublicPrice-t.value.totalAgencyCost).toFixed(2))!=null?u:"0"),1)])])]}),key:"0"}:void 0]),1032,["show"]),f($,{onClick:b,msg:"Calcular costos",class:P("btn btn-primary")})]))}},tt=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{tt as S,X as T,K as _,Y as f,Z as h,N as p,W as z};
