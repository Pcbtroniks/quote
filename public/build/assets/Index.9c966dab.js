import{_ as r}from"./AppLayout.88171a9a.js";import{S as u}from"./SectionBorder.ba9837d0.js";import l from"./QuotePDF.915f3eb9.js";import d from"./AddConfirmationKeyForm.2a1ea9e2.js";import p from"./CouponQuoteActions.3d6d305a.js";import f from"./SendCouponEmailForm.e51d6755.js";import{o as e,c as s,w as m,a as t,b as a,e as n}from"./app.d2e247bb.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./FormSection.d58522d8.js";import"./SectionTitle.944eed67.js";import"./TextInput.8f020c26.js";import"./InputLabel.1a6939e1.js";import"./Button.d58f3abd.js";import"./BodySection.1d13fbb2.js";const x=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Cotizaci\xF3n ",-1),_=t("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},null,-1),h={class:"py-12"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},A={__name:"Index",props:{quote:Object},setup(o){return(w,b)=>(e(),s(r,{title:"Previzulizar Cotizaci\xF3n"},{header:m(()=>[x]),default:m(()=>{var i,c;return[_,t("div",h,[t("div",q,[a(p,{quote:o.quote},null,8,["quote"]),a(u),((i=o.quote.coupon)==null?void 0:i.status)=="created"?(e(),s(d,{key:0,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):n("",!0),((c=o.quote.coupon)==null?void 0:c.status)=="confirmed"?(e(),s(f,{key:1,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):n("",!0),t("div",g,[a(l,{quote:o.quote},null,8,["quote"])])])])]}),_:1}))}};export{A as default};