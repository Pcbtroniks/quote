import{_ as r}from"./AppLayout.169b377a.js";import p from"./PickupList.7a3bf55f.js";import{o as l,c as d,w as a,a as t,t as u,b as _}from"./app.e8722f67.js";import"./_plugin-vue_export-helper.cdc0426e.js";const m={class:"font-semibold text-xl text-gray-800 leading-tight"},x={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},f={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},v={__name:"Index",props:{pickups:Object,tours:Object},setup(c){const o=c;console.log(o.pickups);const i=e=>{var s;return(s={1:"Cancun",2:"Riviera Maya",3:"Playa del Carmen"}[e])!=null?s:"N/A"};return(e,n)=>(l(),d(r,{title:"Pickups"},{header:a(()=>{var s;return[t("h2",m," Pickups - "+u(i((s=o.pickups[0])==null?void 0:s.zone_id)),1)]}),default:a(()=>[t("div",x,[t("div",h,[t("div",f,[_(p,{pickups:o.pickups,tours:o.tours},null,8,["pickups","tours"])])])])]),_:1}))}};export{v as default};
