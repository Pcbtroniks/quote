import{_ as n}from"./AppLayout.14a4f3e4.js";import{S as r}from"./SectionBorder.8cf8450a.js";import l from"./QuotePDF.5e193684.js";import d from"./AddConfirmationKeyForm.3ae2455c.js";import p from"./CouponQuoteActions.d5a29a80.js";import f from"./SendCouponEmailForm.032f88da.js";import{o as e,c as a,w as m,a as t,b as i,e as u}from"./app.2461e4c8.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Permissions.1965abcb.js";import"./FormSection.45b9e3ba.js";import"./SectionTitle.48ad2ed7.js";import"./InputError.9a8cc298.js";import"./InputLabel.b7b5df00.js";import"./TextInput.d25749dd.js";import"./Button.6b7ecc39.js";import"./BodySection.3d850653.js";const x=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Cotizaci\xF3n ",-1),_=t("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},null,-1),q={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},g={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},E={__name:"Index",props:{quote:Object},setup(o){return(w,b)=>(e(),a(n,{title:"Previzulizar Cotizaci\xF3n"},{header:m(()=>[x]),default:m(()=>{var s,c;return[_,t("div",q,[t("div",h,[i(p,{quote:o.quote},null,8,["quote"]),i(r),((s=o.quote.coupon)==null?void 0:s.status)=="created"?(e(),a(d,{key:0,coupon:o.quote.coupon,class:"mb-4"},null,8,["coupon"])):u("",!0),((c=o.quote.coupon)==null?void 0:c.status)=="confirmed"?(e(),a(f,{key:1,coupon:o.quote.coupon,quote:o.quote,class:"mb-4"},null,8,["coupon","quote"])):u("",!0),t("div",g,[i(l,{quote:o.quote},null,8,["quote"])])])])]}),_:1}))}};export{E as default};