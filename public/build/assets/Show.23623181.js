import{_ as i}from"./AppLayout.047178cb.js";import o from"./DeleteTeamForm.b75e61ca.js";import{S as r}from"./SectionBorder.ba3ef125.js";import l from"./TeamMemberManager.94e9ef14.js";import n from"./UpdateTeamNameForm.87a318ba.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.4496a592.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.2d5a7938.js";import"./SectionTitle.4287c245.js";import"./ConfirmationModal.208e9bbd.js";import"./DangerButton.e5367ad3.js";import"./SecondaryButton.301898d5.js";import"./ActionMessage.6a95b7ab.js";import"./DialogModal.7cdf5934.js";import"./FormSection.41af750c.js";import"./TextInput.a95ee3fe.js";import"./InputLabel.0d506b86.js";import"./PrimaryButton.b25bc4ad.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Agency Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};