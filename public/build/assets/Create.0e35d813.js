import{u as d,E as r,o as g,c as y,w as e,y as b,b as t,f as n}from"./app.f2462099.js";import{_ as C}from"./AppLayout.3f968704.js";import{_ as V}from"./DangerButton.c8775f6a.js";import{_ as j}from"./FormSection.a8ac0ce3.js";import{_ as x,a as J}from"./TextInput.b593bb8f.js";import{_ as I}from"./PrimaryButton.2cf4dcb6.js";import{_ as S}from"./InputLabel.a8b86840.js";import{_ as $}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.490b5162.js";const B={components:{JetLabel:S,JetInput:x,JetButton:I,AppLayout:C,JetInputError:J,JetDangerButton:V,FormSection:j},props:{errors:Object},setup(){const s=d({title:null,slug:null});function o(){b.Inertia.post(route("category.store"),s)}return{form:s,submit:o}}};function E(s,o,m,a,F,L){const _=r("jet-label"),u=r("jet-input"),i=r("JetInputError"),p=r("jet-button"),c=r("FormSection"),f=r("AppLayout");return g(),y(f,{title:"Create Team"},{default:e(()=>[t(c,null,{title:e(()=>[n(" Create Category ")]),description:e(()=>[n(" Create a Category ")]),form:e(()=>[t(_,{for:"title"},{default:e(()=>[n("Title")]),_:1}),t(u,{type:"text",modelValue:a.form.title,"onUpdate:modelValue":o[0]||(o[0]=l=>a.form.title=l)},null,8,["modelValue"]),t(i,{message:m.errors.title},null,8,["message"]),t(_,{for:"slug"},{default:e(()=>[n("Slug")]),_:1}),t(u,{type:"text",modelValue:a.form.slug,"onUpdate:modelValue":o[1]||(o[1]=l=>a.form.slug=l)},null,8,["modelValue"]),t(i,{message:m.errors.slug},null,8,["message"]),t(p,null,{default:e(()=>[n("Send")]),_:1})]),_:1})]),_:1})}const q=$(B,[["render",E]]);export{q as default};