import{u as f,c as g,K as b,w as m,o as v,b as a,f as l,g as s,n as h,a as t,t as d}from"./app.38eb1eac.js";import{_ as x}from"./ActionMessage.6c90d4a3.js";import{_ as w}from"./FormSection.7bac172b.js";import{_ as u}from"./InputError.f996994c.js";import{_ as c}from"./InputLabel.7313490f.js";import{_ as N}from"./PrimaryButton.fd39d208.js";import{_ as p}from"./TextInput.f823959f.js";import"./SectionTitle.ebefa126.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6"},y={class:"flex items-center mt-2"},T=["src","alt"],U={class:"ml-4 leading-tight"},$={class:"text-gray-700 text-sm"},j={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S=t("span",{class:"text-xs"},"Este porcentaje representa el precio minimo de venta a partir de su costo.",-1),P={__name:"UpdateTeamNameForm",props:{team:Object,permissions:Object},setup(o){const r=o,e=f({name:r.team.name,sale_amount_percentage:r.team.sale_amount_percentage}),_=()=>{e.put(route("teams.update",r.team),{errorBag:"updateTeamName",preserveScroll:!0})};return(B,n)=>(v(),g(w,{onSubmitted:_},b({title:m(()=>[l(" Nombre de la agencia ")]),description:m(()=>[l(" Nombre de la agencia y la informaci\xF3n del propietario. ")]),form:m(()=>[t("div",V,[a(c,{value:"Administrador"}),t("div",y,[t("img",{class:"w-12 h-12 rounded-full object-cover",src:o.team.owner.profile_photo_url,alt:o.team.owner.name},null,8,T),t("div",U,[t("div",null,d(o.team.owner.name),1),t("div",$,d(o.team.owner.email),1)])])]),t("div",j,[a(c,{for:"name",value:"Nombre de la agencia"}),a(p,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":n[0]||(n[0]=i=>s(e).name=i),type:"text",class:"mt-1 block w-full",disabled:!o.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),a(u,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),t("div",k,[a(c,{for:"name",value:"Porcentaje minimo de venta '%'"}),a(p,{id:"name",modelValue:s(e).sale_amount_percentage,"onUpdate:modelValue":n[1]||(n[1]=i=>s(e).sale_amount_percentage=i),type:"number",class:"mt-1 block w-full",placeholder:"%",disabled:!o.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),S,a(u,{message:s(e).errors.sale_amount_percentage,class:"mt-2"},null,8,["message"])])]),_:2},[o.permissions.canUpdateTeam?{name:"actions",fn:m(()=>[a(x,{on:s(e).recentlySuccessful,class:"mr-3"},{default:m(()=>[l(" Guardado. ")]),_:1},8,["on"]),a(N,{class:h({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:m(()=>[l(" Guardar ")]),_:1},8,["class","disabled"])]),key:"0"}:void 0]),1024))}};export{P as default};