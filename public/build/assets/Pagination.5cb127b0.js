import{o as a,d as l,h as i,c as u,n as p,C as g,g as m,L as k,F as y}from"./app.32117761.js";const h={__name:"Pagination",props:{links:Object,data:Object},setup(t){const s=t,o=(e,n=null)=>!n||e==null?e:(delete n.page,e+"&"+c(n));function c(e){return Object.keys(e).map(function(n){return n+"="+e[n]}).join("&")}return console.log(s.data),console.log(s.links),(e,n)=>(a(!0),l(y,null,i(t.links.links,r=>(a(),u(g(r.active?"span":m(k)),{key:r,class:p("ml-2 px-3 py-1 rounded-lg hover:bg-gray-100 text-sm text-gray-500"+(r.active?" cursor-pointer text-white bg-sky-500 hover:bg-sky-300":" ")),href:o(r.url,s.data),innerHTML:r.label},null,8,["class","href","innerHTML"]))),128))}};export{h as _};
