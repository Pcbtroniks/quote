import{u as f,o as g,c as b,U as v,w as o,b as a,f as r,g as s,n as y,a as n,t as d}from"./app.925ffcad.js";import{_ as w}from"./ActionMessage.f46dfcb1.js";import{_ as h}from"./FormSection.6c9a4e66.js";import{_ as u,a as p}from"./TextInput.cc6312c5.js";import{_ as i}from"./InputLabel.bc2cfd1a.js";import{_ as V}from"./PrimaryButton.d6e50bb3.js";import"./SectionTitle.938fb9e4.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x={class:"col-span-6"},N={class:"flex items-center mt-2"},S=["src","alt"],T={class:"ml-4 leading-tight"},U={class:"text-gray-700 text-sm"},$={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},q={__name:"UpdateTeamNameForm",props:{team:Object,permissions:Object},setup(t){const m=t,e=f({name:m.team.name,sale_amount_percentage:m.team.sale_amount_percentage});console.log(m.permissions);const _=()=>{e.put(route("teams.update",m.team),{errorBag:"updateTeamName",preserveScroll:!0})};return(A,l)=>(g(),b(h,{onSubmitted:_},v({title:o(()=>[r(" Agency Name ")]),description:o(()=>[r(" The agency's name and owner information. ")]),form:o(()=>[n("div",x,[a(i,{value:"Agency Owner"}),n("div",N,[n("img",{class:"w-12 h-12 rounded-full object-cover",src:t.team.owner.profile_photo_url,alt:t.team.owner.name},null,8,S),n("div",T,[n("div",null,d(t.team.owner.name),1),n("div",U,d(t.team.owner.email),1)])])]),n("div",$,[a(i,{for:"name",value:"Agency Name"}),a(u,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":l[0]||(l[0]=c=>s(e).name=c),type:"text",class:"mt-1 block w-full",disabled:!t.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),a(p,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),n("div",k,[a(i,{for:"name",value:"Agency Sale Percentage %"}),a(u,{id:"name",modelValue:s(e).sale_amount_percentage,"onUpdate:modelValue":l[1]||(l[1]=c=>s(e).sale_amount_percentage=c),type:"number",class:"mt-1 block w-full",placeholder:"%",disabled:!t.permissions.canUpdateTeam},null,8,["modelValue","disabled"]),a(p,{message:s(e).errors.sale_amount_percentage,class:"mt-2"},null,8,["message"])])]),_:2},[t.permissions.canUpdateTeam?{name:"actions",fn:o(()=>[a(w,{on:s(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[r(" Saved. ")]),_:1},8,["on"]),a(V,{class:y({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:o(()=>[r(" Save ")]),_:1},8,["class","disabled"])]),key:"0"}:void 0]),1024))}};export{q as default};