import{u,o as f,c as p,O as h,w as t,b as o,f as m,n as v,a as s,t as c,h as n}from"./app.210a94f9.js";import{_ as b}from"./ActionMessage.f33a1361.js";import{_ as g}from"./FormSection.b915c436.js";import{_ as w,a as T}from"./TextInput.1bb984d1.js";import{_ as l}from"./InputLabel.48847704.js";import{_ as x}from"./PrimaryButton.4225de8c.js";import"./SectionTitle.5a80c831.js";import"./_plugin-vue_export-helper.cdc0426e.js";const N=n(" Team Name "),S=n(" The team's name and owner information. "),y={class:"col-span-6"},V={class:"flex items-center mt-2"},$=["src","alt"],k={class:"ml-4 leading-tight"},B={class:"text-gray-700 text-sm"},O={class:"col-span-6 sm:col-span-4"},U=n(" Saved. "),j=n(" Save "),I={__name:"UpdateTeamNameForm",props:{team:Object,permissions:Object},setup(e){const i=e,a=u({name:i.team.name}),d=()=>{a.put(route("teams.update",i.team),{errorBag:"updateTeamName",preserveScroll:!0})};return(C,r)=>(f(),p(g,{onSubmitted:d},h({title:t(()=>[N]),description:t(()=>[S]),form:t(()=>[s("div",y,[o(l,{value:"Team Owner"}),s("div",V,[s("img",{class:"w-12 h-12 rounded-full object-cover",src:e.team.owner.profile_photo_url,alt:e.team.owner.name},null,8,$),s("div",k,[s("div",null,c(e.team.owner.name),1),s("div",B,c(e.team.owner.email),1)])])]),s("div",O,[o(l,{for:"name",value:"Team Name"}),o(w,{id:"name",modelValue:m(a).name,"onUpdate:modelValue":r[0]||(r[0]=_=>m(a).name=_),type:"text",class:"mt-1 block w-full",disabled:!e.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),o(T,{message:m(a).errors.name,class:"mt-2"},null,8,["message"])])]),_:2},[e.permissions.canUpdateTeam?{name:"actions",fn:t(()=>[o(b,{on:m(a).recentlySuccessful,class:"mr-3"},{default:t(()=>[U]),_:1},8,["on"]),o(x,{class:v({"opacity-25":m(a).processing}),disabled:m(a).processing},{default:t(()=>[j]),_:1},8,["class","disabled"])]),key:"0"}:void 0]),1024))}};export{I as default};