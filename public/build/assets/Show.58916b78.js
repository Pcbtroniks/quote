import{_ as i}from"./AppLayout.61f9fba1.js";import o from"./DeleteTeamForm.6e4deb4b.js";import{S as r}from"./SectionBorder.499d3935.js";import l from"./TeamMemberManager.68fb6dae.js";import n from"./UpdateTeamNameForm.4040e1a4.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.606b6dd9.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.01221713.js";import"./SectionTitle.29988d65.js";import"./ConfirmationModal.a24fcafd.js";import"./DangerButton.f541818b.js";import"./SecondaryButton.4e81443e.js";import"./ActionMessage.c62a9db4.js";import"./DialogModal.b0916933.js";import"./FormSection.7e64d2c9.js";import"./TextInput.3bdf4c56.js";import"./InputLabel.3c0ff504.js";import"./PrimaryButton.e8013977.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};