import{_ as f}from"./FormSection.38654182.js";import{_}from"./Button.797f3335.js";import{_ as m}from"./Pagination.52866b8d.js";import{o,c as w,w as l,f as n,a as e,d as c,h as g,t as a,b,F as v,K as p,y as u}from"./app.104b2e89.js";import"./SectionTitle.bf935f43.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y={class:"col-span-6 w-full"},G={class:"relative flex flex-col min-w-0 break-wordsw-full"},k=e("div",{class:"rounded-t mb-0 px-4 py-3 border-0"},[e("div",{class:"flex flex-wrap items-center"},[e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Providers")]),e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},[e("button",{class:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button"},"See all")])])],-1),C={class:"block w-full overflow-x-auto"},B={class:"items-center bg-transparent w-full border-collapse"},L=e("thead",null,[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Name "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," RFC "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Status "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Created at "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Actions ")])],-1),D={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},I={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},N={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 capitalize"},S={class:"relative inline-flex"},$=e("svg",{class:"w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 412 232"},[e("path",{d:"M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z",fill:"#648299","fill-rule":"nonzero"})],-1),z=["onChange"],F=["selected"],P=["selected"],V={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},A={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},H={class:"w-full text-center"},T={__name:"ProviderList",props:{providers:Object},setup(d){const x=(s,r)=>{p.post(route("providers.switch.status",{providerID:s}),{status:r}).then(t=>{u.Inertia.reload()}).catch(t=>{console.log(t),alert("Ha ocurrido un error!")})},h=s=>{p.delete(route("providers.delete",{providerID:s})).then(r=>{u.Inertia.reload()}).catch(r=>{console.log(r),alert("Ha ocurrido un error!")})};return(s,r)=>(o(),w(f,null,{title:l(()=>[n(" Provider List ")]),description:l(()=>[n(" Check the providers created. ")]),form:l(()=>[e("div",y,[e("div",G,[k,e("div",C,[e("table",B,[L,e("tbody",null,[(o(!0),c(v,null,g(d.providers.data,t=>(o(),c("tr",null,[e("th",D,a(t.name),1),e("th",I,a(t.rfc),1),e("td",N,[e("div",S,[$,e("select",{onChange:i=>x(t.id,i.target.value),class:"border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"},[e("option",{value:"active",selected:t.status=="active"},"Active",8,F),e("option",{value:"unactive",selected:t.status=="unactive"},"Unactive",8,P)],40,z)])]),e("td",V,a(t.created_at.slice(0,10)),1),e("td",A,[b(_,{msg:"Delete",onClick:i=>h(t.id),class:"bg-red-500 hover:bg-red-700"},null,8,["onClick"])])]))),256))])])])]),e("div",H,[b(m,{links:d.providers},null,8,["links"])])])]),_:1}))}};export{T as default};
