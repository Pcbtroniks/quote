import{u as _,o as g,c as f,w as t,f as m,a,b as s,t as i,g as o,n as v}from"./app.0c9cef89.js";import{_ as b}from"./FormSection.069701c8.js";import{_ as p}from"./InputError.40c3e28e.js";import{_ as c}from"./InputLabel.0e66c81d.js";import{_ as h}from"./PrimaryButton.d3fd6906.js";import{_ as u}from"./TextInput.d8d7dc71.js";import"./SectionTitle.03f43e37.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6"},$={class:"flex items-center mt-2"},y=["src","alt"],w={class:"ml-4 leading-tight"},x={class:"text-sm text-gray-700"},C={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},z={__name:"CreateTeamForm",setup(B){const e=_({name:"",sale_amount_percentage:null}),d=()=>{e.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})};return(l,r)=>(g(),f(b,{onSubmitted:d},{title:t(()=>[m(" Detalles de la agencia ")]),description:t(()=>[m(" Crear una nueva agencia para colaborar con otros en proyectos. ")]),form:t(()=>[a("div",V,[s(c,{value:"Administrador"}),a("div",$,[a("img",{class:"object-cover w-12 h-12 rounded-full",src:l.$page.props.user.profile_photo_url,alt:l.$page.props.user.name},null,8,y),a("div",w,[a("div",null,i(l.$page.props.user.name),1),a("div",x,i(l.$page.props.user.email),1)])])]),a("div",C,[s(c,{for:"name",value:"Nombre de la agencia"}),s(u,{id:"name",modelValue:o(e).name,"onUpdate:modelValue":r[0]||(r[0]=n=>o(e).name=n),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),s(p,{message:o(e).errors.name,class:"mt-2"},null,8,["message"])]),a("div",k,[s(c,{for:"sale_amount_percentage",value:"Porcentaje base de la gencia '%5'"}),s(u,{disabled:"",placeholder:"Lo puedes cambiar en 'Ajustes de la agencia'",id:"sale_amount_percentage",modelValue:o(e).sale_amount_percentage,"onUpdate:modelValue":r[1]||(r[1]=n=>o(e).sale_amount_percentage=n),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),s(p,{message:o(e).errors.sale_amount_percentage,class:"mt-2"},null,8,["message"])])]),actions:t(()=>[s(h,{class:v({"opacity-25":o(e).processing}),disabled:o(e).processing},{default:t(()=>[m(" Crear ")]),_:1},8,["class","disabled"])]),_:1}))}};export{z as default};