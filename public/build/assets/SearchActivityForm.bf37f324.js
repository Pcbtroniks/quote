import{r as l,o as c,c as d,w as s,f as m,a as i,b as v,v as w,x as g,d as y,h as L,g as b,L as x,t as B,F as k}from"./app.41475ec4.js";import{_ as C}from"./FormSection.6e0346af.js";import{_ as F}from"./InputLabel.18a27fe1.js";import{_ as $}from"./TextInput.962611d4.js";import"./SectionTitle.6d82243d.js";import"./_plugin-vue_export-helper.cdc0426e.js";const N={class:"col-span-6 sm:col-span-4"},D={class:"relative"},S={class:"w-full flex flex-col gap-2 absolute bg-white border shadow-md max-h-80 overflow-auto"},V={class:"hover:bg-sky-500 hover:text-white p-4 cursor-pointer"},q={__name:"SearchActivityForm",props:{activities:Array},setup(f){const r=f,n=l(!1),u=l(r.activities),o=l(u),p=(t="")=>{const a=[{id:null,name:"No se encontraron actividades. Crear una nueva"}];if(t.length==0||t.length<3){o.value=r.activities,console.log(t);return}const e=u.value.filter(h=>h.name.toLowerCase().includes(t.toLowerCase()));e.length==0?o.value=a:o.value=e},_=(t=3e3)=>{setTimeout(()=>{n.value=!1},t)};return(t,a)=>(c(),d(C,null,{title:s(()=>[m(" Buscar actividad por nombre ")]),description:s(()=>[m(" Introducta el nombre de la actividad, si no se encuentra en la lista puede crear una nueva. ")]),form:s(()=>[i("div",N,[v(F,{for:"activity_name",value:"Buscar actividad por nombre"}),v($,{placeholder:"tour...","aria-autocomplete":"none",autocomplete:"off",id:"activity_name",type:"text",class:"mt-1 block w-full",onInput:a[0]||(a[0]=e=>p(e.target.value)),onFocus:a[1]||(a[1]=e=>n.value=!0),onBlur:a[2]||(a[2]=e=>_())}),w(i("div",D,[i("ul",S,[(c(!0),y(k,null,L(o.value,e=>(c(),d(b(x),{href:t.route("activity.create",e.id)},{default:s(()=>[i("li",V,B(e.name),1)]),_:2},1032,["href"]))),256))])],512),[[g,n.value&&r.activities.length>0]])])]),_:1}))}};export{q as default};