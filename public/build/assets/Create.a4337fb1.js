import{_ as l}from"./AppLayout.a0ccd857.js";import{S as o}from"./SectionBorder.0f8e8f07.js";import d from"./CreateActivityForm.9066975d.js";import n from"./AddPricesForm.2aac18e3.js";import _ from"./AddCostsForm.ebe374d8.js";import{c as v,w as m,o as e,a as s,d as a,b as i,e as r}from"./app.38eb1eac.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Permissions.1965abcb.js";import"./ActionMessage.6c90d4a3.js";import"./FormSection.7bac172b.js";import"./SectionTitle.ebefa126.js";import"./InputError.f996994c.js";import"./InputLabel.7313490f.js";import"./PrimaryButton.fd39d208.js";import"./TextInput.f823959f.js";import"./InputRadio.498c956c.js";import"./Alerts.1d475c31.js";import"./sweetalert2.all.e7476d74.js";import"./Utils.91184964.js";import"./CurrenciesService.6442d304.js";const y=s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Actividad - Crear ",-1),f={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},u={key:0},h={key:1},x={key:2},J={__name:"Create",props:{activity:Object},setup(c){const t=c;return console.log(t.activity),(p,g)=>(e(),v(l,{title:"Actividades - Crear"},{header:m(()=>[y]),default:m(()=>[s("div",null,[s("div",f,[p.$page.props.user.is_freetraveler_admin?(e(),a("div",u,[i(d,{activity:t.activity,class:"mt-10 sm:mt-0"},null,8,["activity"]),i(o)])):r("",!0),t.activity.id?(e(),a("div",h,[i(n,{activity:t.activity,class:"mt-10 sm:mt-0"},null,8,["activity"]),i(o)])):r("",!0),t.activity.id?(e(),a("div",x,[i(_,{activity:t.activity,class:"mt-10 sm:mt-0"},null,8,["activity"]),i(o)])):r("",!0)])])]),_:1}))}};export{J as default};