import{_ as i}from"./AppLayout.a0ccd857.js";import o from"./DeleteTeamForm.0b45b60b.js";import{S as r}from"./SectionBorder.0f8e8f07.js";import l from"./TeamMemberManager.2d039adf.js";import n from"./UpdateTeamNameForm.ef433908.js";import c from"./AddTeamLogoForm.71a50f73.js";import{c as p,w as a,o as s,a as m,b as t,d,F as u,e as f}from"./app.38eb1eac.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Permissions.1965abcb.js";import"./ActionSection.276ec7cf.js";import"./SectionTitle.ebefa126.js";import"./ConfirmationModal.73e2db1c.js";import"./Modal.ed6066b4.js";import"./DangerButton.ae3602f4.js";import"./SecondaryButton.c8f62d6e.js";import"./ActionMessage.6c90d4a3.js";import"./DialogModal.0950ee9d.js";import"./FormSection.7bac172b.js";import"./InputError.f996994c.js";import"./InputLabel.7313490f.js";import"./PrimaryButton.fd39d208.js";import"./TextInput.f823959f.js";import"./TeamHelpers.62921a96.js";const x=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Ajustes de la agencia ",-1),b={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},H={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(g,h)=>(s(),p(i,{title:"Ajustes de la agencia"},{header:a(()=>[x]),default:a(()=>[m("div",null,[m("div",b,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(c,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(s(),d(u,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{H as default};