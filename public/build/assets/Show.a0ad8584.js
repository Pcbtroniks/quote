import{_ as i}from"./AppLayout.3f968704.js";import o from"./DeleteTeamForm.e095f597.js";import{S as r}from"./SectionBorder.59604b99.js";import l from"./TeamMemberManager.b30839e3.js";import n from"./UpdateTeamNameForm.98784b21.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.f2462099.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.7d09410b.js";import"./SectionTitle.490b5162.js";import"./ConfirmationModal.99bd7f41.js";import"./DangerButton.c8775f6a.js";import"./SecondaryButton.04b9ed1a.js";import"./ActionMessage.ec553a68.js";import"./DialogModal.7b1c175c.js";import"./FormSection.a8ac0ce3.js";import"./TextInput.b593bb8f.js";import"./InputLabel.a8b86840.js";import"./PrimaryButton.2cf4dcb6.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Agency Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};
