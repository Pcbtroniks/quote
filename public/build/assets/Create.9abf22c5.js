import{u as d,O as r,o as g,c as y,w as e,y as b,b as t,f as n}from"./app.cc4f2bf6.js";import{_ as C}from"./AppLayout.0be37e65.js";import{_ as V}from"./DangerButton.83055112.js";import{_ as j}from"./FormSection.c415fe61.js";import{_ as x}from"./InputError.bc14f421.js";import{_ as J}from"./PrimaryButton.85d121d8.js";import{_ as I}from"./InputLabel.f008e33e.js";import{_ as S}from"./TextInput.5a23c54c.js";import{_ as $}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.309d525c.js";const B={components:{JetLabel:I,JetInput:S,JetButton:J,AppLayout:C,JetInputError:x,JetDangerButton:V,FormSection:j},props:{errors:Object},setup(){const s=d({title:null,slug:null});function o(){b.Inertia.post(route("category.store"),s)}return{form:s,submit:o}}};function F(s,o,l,a,L,A){const _=r("jet-label"),u=r("jet-input"),i=r("JetInputError"),p=r("jet-button"),c=r("FormSection"),f=r("AppLayout");return g(),y(f,{title:"Create Team"},{default:e(()=>[t(c,null,{title:e(()=>[n(" Create Category ")]),description:e(()=>[n(" Create a Category ")]),form:e(()=>[t(_,{for:"title"},{default:e(()=>[n("Title")]),_:1}),t(u,{type:"text",modelValue:a.form.title,"onUpdate:modelValue":o[0]||(o[0]=m=>a.form.title=m)},null,8,["modelValue"]),t(i,{message:l.errors.title},null,8,["message"]),t(_,{for:"slug"},{default:e(()=>[n("Slug")]),_:1}),t(u,{type:"text",modelValue:a.form.slug,"onUpdate:modelValue":o[1]||(o[1]=m=>a.form.slug=m)},null,8,["modelValue"]),t(i,{message:l.errors.slug},null,8,["message"]),t(p,null,{default:e(()=>[n("Send")]),_:1})]),_:1})]),_:1})}const z=$(B,[["render",F]]);export{z as default};