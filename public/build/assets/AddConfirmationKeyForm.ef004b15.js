import{u,o as p,c as _,w as t,f as r,a as c,b as n,g as m}from"./app.8314e660.js";import{_ as d}from"./FormSection.88417357.js";import{_ as k,a as y}from"./TextInput.c2ce2e0b.js";import{_ as g}from"./InputLabel.480ce534.js";import{_ as v}from"./Button.b14380aa.js";import"./SectionTitle.850fc425.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x={class:"col-span-6 sm:col-span-4"},V={class:"flex gap-4"},A={__name:"AddConfirmationKeyForm",props:{coupon:Object},setup(l){const s=l,e=u({confirmation_key:null}),f=a=>{e.confirmation_key=s.coupon.confirmation_key,e.post(route("coupon.key.confirm",{coupon:a}),{preserveScroll:!0,onSuccess:o=>{alert("Success"),console.log(o)}}),e.reset()};return(a,o)=>(p(),_(d,{onSubmitted:o[1]||(o[1]=i=>f(s.coupon.id))},{title:t(()=>[r(" Confirmation key ")]),description:t(()=>[r(" Add a confirmation key to the current coupon. ")]),form:t(()=>[c("div",x,[n(g,{for:"folio",value:"Confirmation key code"}),c("div",V,[n(k,{id:"folio",modelValue:s.coupon.confirmation_key,"onUpdate:modelValue":o[0]||(o[0]=i=>s.coupon.confirmation_key=i),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),n(v,{type:"submit",class:"inline",msg:"Guardar",isLoading:m(e).processing},null,8,["isLoading"])]),n(y,{message:m(e).errors.folio,class:"mt-2"},null,8,["message"])])]),_:1}))}};export{A as default};
