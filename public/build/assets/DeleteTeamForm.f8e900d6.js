import{r as _,u as p,c as w,w as e,o as y,f as t,a as i,b as o,n as T,g as r}from"./app.38eb1eac.js";import{_ as g}from"./ActionSection.276ec7cf.js";import{_ as h}from"./ConfirmationModal.73e2db1c.js";import{_ as n}from"./DangerButton.ae3602f4.js";import{_ as v}from"./SecondaryButton.c8f62d6e.js";import"./SectionTitle.ebefa126.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.ed6066b4.js";const x=i("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),C={class:"mt-5"},j={__name:"DeleteTeamForm",props:{team:Object},setup(m){const d=m,a=_(!1),l=p(),c=()=>{a.value=!0},f=()=>{l.delete(route("teams.destroy",d.team),{errorBag:"deleteTeam"})};return(D,s)=>(y(),w(g,null,{title:e(()=>[t(" Delete Team ")]),description:e(()=>[t(" Permanently delete this team. ")]),content:e(()=>[x,i("div",C,[o(n,{onClick:c},{default:e(()=>[t(" Delete Team ")]),_:1})]),o(h,{show:a.value,onClose:s[1]||(s[1]=u=>a.value=!1)},{title:e(()=>[t(" Delete Team ")]),content:e(()=>[t(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. ")]),footer:e(()=>[o(v,{onClick:s[0]||(s[0]=u=>a.value=!1)},{default:e(()=>[t(" Cancel ")]),_:1}),o(n,{class:T(["ml-3",{"opacity-25":r(l).processing}]),disabled:r(l).processing,onClick:f},{default:e(()=>[t(" Delete Team ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{j as default};