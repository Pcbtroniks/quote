import{_ as r}from"./AppLayout.2201e181.js";import{S as u}from"./SectionBorder.30cf6592.js";import l from"./QuotePDF.a89d01d1.js";import d from"./AddConfirmationKeyForm.1b820460.js";import p from"./CouponQuoteActions.687e54f6.js";import f from"./SendCouponEmailForm.31a7dbfd.js";import{o as e,c as s,w as m,a as t,b as a,e as n}from"./app.03a44190.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./FormSection.04845bb4.js";import"./SectionTitle.d4c1e2ce.js";import"./InputError.c25152b4.js";import"./InputLabel.64fb379d.js";import"./TextInput.3dc0c1fb.js";import"./Button.a3e700f9.js";import"./BodySection.a873e9c1.js";const x=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Cotizaci\xF3n ",-1),_=t("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},null,-1),h={class:"py-12"},q={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},D={__name:"Index",props:{quote:Object},setup(o){return(w,b)=>(e(),s(r,{title:"Previzulizar Cotizaci\xF3n"},{header:m(()=>[x]),default:m(()=>{var i,c;return[_,t("div",h,[t("div",q,[a(p,{quote:o.quote},null,8,["quote"]),a(u),((i=o.quote.coupon)==null?void 0:i.status)=="created"?(e(),s(d,{key:0,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):n("",!0),((c=o.quote.coupon)==null?void 0:c.status)=="confirmed"?(e(),s(f,{key:1,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):n("",!0),t("div",g,[a(l,{quote:o.quote},null,8,["quote"])])])])]}),_:1}))}};export{D as default};