import{_ as i}from"./AppLayout.bcba5b86.js";import o from"./DeleteTeamForm.6aceac87.js";import{S as r}from"./SectionBorder.598e165d.js";import l from"./TeamMemberManager.11e3cd94.js";import n from"./UpdateTeamNameForm.2e443441.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.81b5edb9.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.4f239d7c.js";import"./SectionTitle.9fe34b0b.js";import"./ConfirmationModal.0e402f6f.js";import"./DangerButton.2c86fcea.js";import"./SecondaryButton.b14bf713.js";import"./ActionMessage.5bca3036.js";import"./DialogModal.03bb0541.js";import"./FormSection.e53b8520.js";import"./TextInput.a2b1e7e7.js";import"./InputLabel.a6debd82.js";import"./PrimaryButton.2f013448.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Agency Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};