import{_ as m}from"./AppLayout.14a4f3e4.js";import i from"./CreateBranchForm.9d8ed59f.js";import{S as c}from"./SectionBorder.8cf8450a.js";import n from"./BranchUserManager.ff57ac96.js";import{o,c as p,w as s,a as t,b as e,d as l,F as u,e as _}from"./app.2461e4c8.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Permissions.1965abcb.js";import"./FormSection.45b9e3ba.js";import"./SectionTitle.48ad2ed7.js";import"./InputError.9a8cc298.js";import"./InputLabel.b7b5df00.js";import"./PrimaryButton.5bb572a4.js";import"./TextInput.d25749dd.js";import"./ActionSection.11eacf60.js";import"./Checkbox.030d01f3.js";import"./ConfirmationModal.b02bd74b.js";import"./Modal.099e7675.js";import"./DangerButton.5c7e8a60.js";import"./DialogModal.4e0d31b2.js";import"./SecondaryButton.74a755aa.js";const h=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Nueva sucursal ",-1),d={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},H={__name:"Show",props:{branches:Array,users:Array},setup(a){const r=a;return console.log(r.branches),console.log(r.users),(f,x)=>(o(),p(m,{title:"Gestinar sucursales"},{header:s(()=>[h]),default:s(()=>[t("div",null,[t("div",d,[e(i),r.branches.length>0?(o(),l(u,{key:0},[e(c),e(n,{branches:r.branches,users:r.users},null,8,["branches","users"])],64)):_("",!0)])])]),_:1}))}};export{H as default};