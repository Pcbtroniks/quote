import{_ as b}from"./FormSection.38654182.js";import{_ as p}from"./Pagination.52866b8d.js";import{o as r,c as u,w as l,f as o,a as e,d as a,h as x,t as s,e as f,F as h,b as m}from"./app.104b2e89.js";import"./SectionTitle.bf935f43.js";import"./_plugin-vue_export-helper.cdc0426e.js";const _={class:"col-span-6 w-full"},w={class:"relative flex flex-col min-w-0 break-wordsw-full"},g=e("div",{class:"rounded-t mb-0 px-4 py-3 border-0"},[e("div",{class:"flex flex-wrap items-center"},[e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1"},[e("h3",{class:"font-semibold text-base text-blueGray-700"},"Invoices")]),e("div",{class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},[e("button",{class:"bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button"},"See all")])])],-1),y={class:"block w-full overflow-x-auto"},v={class:"items-center bg-transparent w-full border-collapse"},G=e("thead",null,[e("tr",null,[e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Folio "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Status "),e("th",{class:"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}," Created at ")])],-1),k={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"},B=["href"],C={key:0,class:"bg-sky-400 rounded-full p-1 pr-2 text-white"},N={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},V={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},F={class:"w-full text-center"},E={__name:"InvoiceList",props:{invoices:Object},setup(d){return(c,I)=>(r(),u(b,null,{title:l(()=>[o(" Invoice List ")]),description:l(()=>[o(" Check the invoices created. ")]),form:l(()=>[e("div",_,[e("div",w,[g,e("div",y,[e("table",v,[G,e("tbody",null,[(r(!0),a(h,null,x(d.invoices.data,t=>{var i,n;return r(),a("tr",null,[e("th",k,[e("a",{href:c.route("invoices.coupons",{invoice:t.id})},[o(s(t.folio)+" ",1),(i=t.coupons)!=null&&i.length?(r(),a("span",C,"#"+s((n=t.coupons)==null?void 0:n.length),1)):f("",!0)],8,B)]),e("td",N,s(t.status),1),e("td",V,s(t.created_at.slice(0,10)),1)])}),256))])])])]),e("div",F,[m(p,{links:d.invoices},null,8,["links"])])])]),_:1}))}};export{E as default};
