import{_ as i}from"./AppLayout.84fc9fac.js";import o from"./DeleteTeamForm.aebf680a.js";import{S as r}from"./SectionBorder.2af7c682.js";import l from"./TeamMemberManager.c42d1c33.js";import n from"./UpdateTeamNameForm.792bfc60.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.7c307b2d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.22944170.js";import"./SectionTitle.1c08c4b3.js";import"./ConfirmationModal.297a011f.js";import"./DangerButton.91e78ee9.js";import"./SecondaryButton.89f2fb39.js";import"./ActionMessage.185386d4.js";import"./DialogModal.9de322cf.js";import"./FormSection.3ca34760.js";import"./TextInput.11077f3a.js";import"./InputLabel.f3331831.js";import"./PrimaryButton.94055d8e.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Agency Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};
