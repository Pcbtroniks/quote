import{r as _,u as p,o as w,c as y,w as e,f as t,a as i,b as o,n as T,g as r}from"./app.cc4f2bf6.js";import{_ as g}from"./ActionSection.352345ca.js";import{_ as h}from"./ConfirmationModal.03b7a392.js";import{_ as n}from"./DangerButton.83055112.js";import{_ as v}from"./SecondaryButton.6253472a.js";import"./SectionTitle.309d525c.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.ea422280.js";const x=i("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),C={class:"mt-5"},j={__name:"DeleteTeamForm",props:{team:Object},setup(m){const d=m,a=_(!1),l=p(),c=()=>{a.value=!0},f=()=>{l.delete(route("teams.destroy",d.team),{errorBag:"deleteTeam"})};return(D,s)=>(w(),y(g,null,{title:e(()=>[t(" Delete Team ")]),description:e(()=>[t(" Permanently delete this team. ")]),content:e(()=>[x,i("div",C,[o(n,{onClick:c},{default:e(()=>[t(" Delete Team ")]),_:1})]),o(h,{show:a.value,onClose:s[1]||(s[1]=u=>a.value=!1)},{title:e(()=>[t(" Delete Team ")]),content:e(()=>[t(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")]),footer:e(()=>[o(v,{onClick:s[0]||(s[0]=u=>a.value=!1)},{default:e(()=>[t(" Cancel ")]),_:1}),o(n,{class:T(["ml-3",{"opacity-25":r(l).processing}]),disabled:r(l).processing,onClick:f},{default:e(()=>[t(" Delete Team ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{j as default};
