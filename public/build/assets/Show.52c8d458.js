import{_ as i}from"./AppLayout.5bdd181a.js";import o from"./DeleteTeamForm.490e1742.js";import{S as r}from"./SectionBorder.b515fdd1.js";import l from"./TeamMemberManager.914ae93c.js";import n from"./UpdateTeamNameForm.ea944539.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app.c0ec2a52.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.845901f9.js";import"./SectionTitle.c566a8bb.js";import"./ConfirmationModal.f74b953e.js";import"./DangerButton.cba6232c.js";import"./SecondaryButton.8cc5f766.js";import"./ActionMessage.e605b180.js";import"./DialogModal.4ac88b89.js";import"./FormSection.7d8da002.js";import"./TextInput.65cc3680.js";import"./InputLabel.bc799382.js";import"./PrimaryButton.f55c08af.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Agency Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{D as default};
