import{_ as x}from"./FormSection.c3f4378d.js";import{_ as u}from"./Pagination.7090689c.js";import{o as s,c as f,w as l,f as o,a as e,d as a,h,t as r,e as m,F as _,b as w}from"./app.589ffece.js";import"./SectionTitle.c439006b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y={class:"col-span-6 w-full"},g={class:"relative flex flex-col min-w-0 break-wordsw-full"},v=e("div",{class:"rounded-t mb-0 px-4 py-3 border-0"},[e("div",{class:"flex flex-wrap items-center"},[e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Invoices")]),e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},[e("button",{class:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button"},"See all")])])],-1),G={class:"block w-full overflow-x-auto"},k={class:"items-center bg-transparent w-full border-collapse"},N=e("thead",null,[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Folio "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Provider "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Status "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Created at ")])],-1),B={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},C=["href"],V={key:0,class:"bg-sky-400 rounded-full p-1 pr-2 text-white"},F={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},I={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},L={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},S={class:"w-full text-center"},P={__name:"InvoiceList",props:{invoices:Object},setup(d){return(p,$)=>(s(),f(x,null,{title:l(()=>[o(" Invoice List ")]),description:l(()=>[o(" Check the invoices created. ")]),form:l(()=>[e("div",y,[e("div",g,[v,e("div",G,[e("table",k,[N,e("tbody",null,[(s(!0),a(_,null,h(d.invoices.data,t=>{var i,n,c,b;return s(),a("tr",null,[e("th",B,[e("a",{href:p.route("invoices.coupons",{invoice:t.id})},[o(r(t.folio)+" ",1),(i=t.coupons)!=null&&i.length?(s(),a("span",V,"#"+r((n=t.coupons)==null?void 0:n.length),1)):m("",!0)],8,C)]),e("th",F,r((b=(c=t.provider)==null?void 0:c.name)!=null?b:"N/A"),1),e("td",I,r(t.status),1),e("td",L,r(t.created_at.slice(0,10)),1)])}),256))])])])]),e("div",S,[w(u,{links:d.invoices},null,8,["links"])])])]),_:1}))}};export{P as default};
