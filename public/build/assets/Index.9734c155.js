import{_ as r}from"./AppLayout.0be37e65.js";import{S as u}from"./SectionBorder.84beb91d.js";import l from"./QuotePDF.a2688f75.js";import d from"./AddConfirmationKeyForm.15cac060.js";import p from"./CouponQuoteActions.187a47be.js";import f from"./SendCouponEmailForm.b4b7187d.js";import{o as e,c as s,w as m,a as t,b as a,e as n}from"./app.cc4f2bf6.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./FormSection.c415fe61.js";import"./SectionTitle.309d525c.js";import"./InputError.bc14f421.js";import"./InputLabel.f008e33e.js";import"./TextInput.5a23c54c.js";import"./Button.b74e30b2.js";import"./BodySection.85767dc5.js";const x=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Cotizaci\xF3n ",-1),_=t("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},null,-1),h={class:"py-12"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},D={__name:"Index",props:{quote:Object},setup(o){return(w,b)=>(e(),s(r,{title:"Previzulizar Cotizaci\xF3n"},{header:m(()=>[x]),default:m(()=>{var i,c;return[_,t("div",h,[t("div",q,[a(p,{quote:o.quote},null,8,["quote"]),a(u),((i=o.quote.coupon)==null?void 0:i.status)=="created"?(e(),s(d,{key:0,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):n("",!0),((c=o.quote.coupon)==null?void 0:c.status)=="confirmed"?(e(),s(f,{key:1,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):n("",!0),t("div",g,[a(l,{quote:o.quote},null,8,["quote"])])])])]}),_:1}))}};export{D as default};