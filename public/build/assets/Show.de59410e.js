import{_ as i}from"./AppLayout.085ab96c.js";import o from"./DeleteTeamForm.e571b8ef.js";import{S as r}from"./SectionBorder.b71b1cda.js";import l from"./TeamMemberManager.e965ec15.js";import n from"./UpdateTeamNameForm.6f8068f9.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as u}from"./app.5dcb18bc.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Permissions.1965abcb.js";import"./ActionSection.8c0962b4.js";import"./SectionTitle.21b31722.js";import"./ConfirmationModal.427d66da.js";import"./Modal.eb48d3c7.js";import"./DangerButton.4bc041b3.js";import"./SecondaryButton.e78b60c4.js";import"./ActionMessage.e0b571ba.js";import"./DialogModal.1f780d1e.js";import"./FormSection.3048c13d.js";import"./InputError.025587aa.js";import"./InputLabel.75cc7496.js";import"./PrimaryButton.39951410.js";import"./TextInput.9bc4a279.js";const f=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Ajustes de la agencia ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},z={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),c(i,{title:"Ajustes de la agencia"},{header:s(()=>[f]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):u("",!0)])])]),_:1}))}};export{z as default};
