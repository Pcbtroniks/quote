import{o as u,d as p,a as e,n as h,b as r,w as i,g as c,f as l,L as n}from"./app.3ae05259.js";const b={class:"sm:flex sm:items-center flex-wrap justify-center xl:justify-start gap-4"},y={class:"flex flex-col sm:flex-row"},k={key:0,class:"grid w-min-content grid-cols-2 space-x-2 rounded-xl bg-gray-200 p-2 mt-2"},x=["checked"],m={for:"1",class:"block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"},v=["checked"],_={for:"2",class:"block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"},g={key:1,class:"grid w-min-content grid-cols-2 space-x-2 rounded-xl bg-gray-200 p-2 mt-2 items-center justify-center"},w={class:"col-span-2 sm:col-span-1"},z=["checked"],j={for:"1",class:"block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"},C={class:"col-span-2 sm:col-span-1"},N=["checked"],B={for:"3",class:"block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"},D={__name:"Filters",props:{filters:Object},setup(a){const t=a,o=function({type:s,zone:f,page:d}){return{type:s,zone:f,page:d!=null?d:t.filters.page}};return(s,f)=>(u(),p("div",b,[e("nav",y,[e("button",{class:h([t.filters.type=="park"?"text-blue-500 border-b-2 ":"","text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500"])},[r(c(n),{href:s.route("activities"),only:["activities","filters"],data:o({type:"park",zone:4}),"preserve-state":""},{default:i(()=>[l("Entradas")]),_:1},8,["href","data"])],2),e("button",{class:h([t.filters.type=="tour"?"text-blue-500 border-b-2 ":"","text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500"])},[r(c(n),{href:s.route("activities"),only:["activities","filters"],data:o({type:"tour",zone:1}),"preserve-state":""},{default:i(()=>[l("Tours")]),_:1},8,["href","data"])],2)]),e("div",null,[t.filters.type=="park"?(u(),p("div",k,[e("div",null,[e("input",{type:"radio",name:"option",id:"1",class:"peer hidden",checked:t.filters.zone==4},null,8,x),e("label",m,[r(c(n),{href:s.route("activities"),only:["activities","filters"],data:o({type:a.filters.type,zone:4})},{default:i(()=>[l("Nacional")]),_:1},8,["href","data"])])]),e("div",null,[e("input",{type:"radio",name:"option",id:"2",class:"peer hidden",checked:t.filters.zone==5},null,8,v),e("label",_,[r(c(n),{href:s.route("activities"),only:["activities","filters"],data:o({type:a.filters.type,zone:5})},{default:i(()=>[l("Internacional")]),_:1},8,["href","data"])])])])):(u(),p("div",g,[e("div",w,[e("input",{type:"radio",name:"option",id:"1",class:"peer hidden",checked:t.filters.zone==1},null,8,z),e("label",j,[r(c(n),{class:"w-full",href:s.route("activities"),only:["activities","filters"],data:o({type:a.filters.type,zone:1})},{default:i(()=>[l("Cancun / Riviera Maya")]),_:1},8,["href","data"])])]),e("div",C,[e("input",{type:"radio",name:"option",id:"3",class:"peer hidden",checked:t.filters.zone==3},null,8,N),e("label",B,[r(c(n),{href:s.route("activities"),only:["activities","filters"],data:o({type:a.filters.type,zone:3})},{default:i(()=>[l("PlayaDelCarmen")]),_:1},8,["href","data"])])])]))])]))}};export{D as default};
