import{_ as u}from"./AppLayout.f98c9a92.js";import{S as n}from"./SectionBorder.6f8bd4b8.js";import l from"./QuotePDF.2d704b5f.js";import d from"./AddConfirmationKeyForm.29b004f3.js";import p from"./CouponQuoteActions.db7d2cfe.js";import f from"./SendCouponEmailForm.6deea59a.js";import{c as e,w as c,o as i,a as t,b as a,e as r}from"./app.5f639f96.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Permissions.1965abcb.js";import"./TeamHelpers.62921a96.js";import"./FormSection.4222404b.js";import"./SectionTitle.34eb2903.js";import"./InputError.5f33b1b1.js";import"./InputLabel.48283910.js";import"./TextInput.ca79c6e3.js";import"./Button.e0330790.js";import"./BodySection.fa20721b.js";const x=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Cotizaci\xF3n ",-1),_=t("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},null,-1),q={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},F={__name:"Index",props:{quote:Object},setup(o){return(w,b)=>(i(),e(u,{title:"Previzulizar Cotizaci\xF3n"},{header:c(()=>[x]),default:c(()=>{var s,m;return[_,t("div",q,[t("div",h,[a(p,{quote:o.quote},null,8,["quote"]),a(n),((s=o.quote.coupon)==null?void 0:s.status)=="created"?(i(),e(d,{key:0,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):r("",!0),((m=o.quote.coupon)==null?void 0:m.status)=="confirmed"?(i(),e(f,{key:1,coupon:o.quote.coupon,quote:o.quote,class:"mb-4"},null,8,["coupon","quote"])):r("",!0),t("div",g,[a(l,{quote:o.quote},null,8,["quote"])])])])]}),_:1}))}};export{F as default};