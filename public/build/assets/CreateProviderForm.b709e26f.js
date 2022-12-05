import{u as f,o as p,c as u,w as o,f as l,a as m,b as a,g as s,n as _}from"./app.104b2e89.js";import{_ as v}from"./FormSection.38654182.js";import{_ as c,a as n}from"./TextInput.a2b64808.js";import{_ as i}from"./InputLabel.573898d4.js";import{_ as g}from"./PrimaryButton.f30b6e13.js";import"./SectionTitle.bf935f43.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"col-span-6 sm:col-span-4"},b={class:"col-span-6 sm:col-span-4"},F={__name:"CreateProviderForm",setup(x){const e=f({name:"",rfc:""}),d=()=>{e.post(route("providers.store"),{errorBag:"createInvoice",preserveScroll:!0}),e.reset()};return(w,r)=>(p(),u(v,{onSubmitted:d},{title:o(()=>[l(" Add Provider ")]),description:o(()=>[l(" Create a new provider to start assigning it to invoices. ")]),form:o(()=>[m("div",V,[a(i,{for:"name",value:"Provider name"}),a(c,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":r[0]||(r[0]=t=>s(e).name=t),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),a(n,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),m("div",b,[a(i,{for:"rfc",value:"Provider rfc (opcional)"}),a(c,{id:"rfc",modelValue:s(e).rfc,"onUpdate:modelValue":r[1]||(r[1]=t=>s(e).rfc=t),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),a(n,{message:s(e).errors.rfc,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[a(g,{class:_({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:o(()=>[l(" Create ")]),_:1},8,["class","disabled"])]),_:1}))}};export{F as default};
