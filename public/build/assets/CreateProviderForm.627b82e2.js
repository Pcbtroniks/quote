import{u as f,o as p,c as u,w as a,f as l,a as m,b as o,g as s,n as _}from"./app.2461e4c8.js";import{_ as v}from"./FormSection.45b9e3ba.js";import{_ as c}from"./InputError.9a8cc298.js";import{_ as n}from"./InputLabel.b7b5df00.js";import{_ as g}from"./PrimaryButton.5bb572a4.js";import{_ as i}from"./TextInput.d25749dd.js";import"./SectionTitle.48ad2ed7.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-4"},b={class:"col-span-6 sm:col-span-4"},S={__name:"CreateProviderForm",setup(x){const e=f({name:"",rfc:""}),d=()=>{e.post(route("providers.store"),{errorBag:"createInvoice",preserveScroll:!0}),e.reset()};return(w,r)=>(p(),u(v,{onSubmitted:d},{title:a(()=>[l(" Add Provider ")]),description:a(()=>[l(" Create a new provider to start assigning it to invoices. ")]),form:a(()=>[m("div",V,[o(n,{for:"name",value:"Provider name"}),o(i,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":r[0]||(r[0]=t=>s(e).name=t),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),o(c,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),m("div",b,[o(n,{for:"rfc",value:"Provider rfc (opcional)"}),o(i,{id:"rfc",modelValue:s(e).rfc,"onUpdate:modelValue":r[1]||(r[1]=t=>s(e).rfc=t),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),o(c,{message:s(e).errors.rfc,class:"mt-2"},null,8,["message"])])]),actions:a(()=>[o(g,{class:_({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:a(()=>[l(" Create ")]),_:1},8,["class","disabled"])]),_:1}))}};export{S as default};