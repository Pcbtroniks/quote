import{_ as i}from"./AppLayout.70c32ea6.js";import o from"./DeleteTeamForm.97cbea29.js";import{S as r}from"./SectionBorder.73ada990.js";import l from"./TeamMemberManager.dd834ec5.js";import n from"./UpdateTeamNameForm.ea211e8a.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.a380200b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.93948a08.js";import"./SectionTitle.de4f8514.js";import"./ConfirmationModal.74199b65.js";import"./DangerButton.7dfc32eb.js";import"./SecondaryButton.b1e54985.js";import"./ActionMessage.6dbbe949.js";import"./DialogModal.df454e85.js";import"./FormSection.a0b974e0.js";import"./TextInput.5c1bfa73.js";import"./InputLabel.c0729eff.js";import"./PrimaryButton.d2e0fe1a.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,h)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};
