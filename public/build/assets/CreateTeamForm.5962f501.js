import{u as d,o as g,c as f,w as o,f as m,a,b as s,t as i,g as t,n as h}from"./app.1359592a.js";import{_ as v}from"./FormSection.27ffd508.js";import{_ as p,a as u}from"./TextInput.9f58e5b4.js";import{_ as c}from"./InputLabel.2a80e001.js";import{_ as y}from"./PrimaryButton.6fcba47d.js";import"./SectionTitle.f42734b6.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b={class:"col-span-6"},V={class:"flex items-center mt-2"},$=["src","alt"],w={class:"ml-4 leading-tight"},A={class:"text-sm text-gray-700"},x={class:"col-span-6 sm:col-span-4"},C={class:"col-span-6 sm:col-span-4"},U={__name:"CreateTeamForm",setup(k){const e=d({name:"",sale_amount_percentage:null}),_=()=>{e.post(route("teams.store"),{errorBag:"createTeam",preserveScroll:!0})};return(l,r)=>(g(),f(v,{onSubmitted:_},{title:o(()=>[m(" Agency Details ")]),description:o(()=>[m(" Create a new agency to collaborate with others on projects. ")]),form:o(()=>[a("div",b,[s(c,{value:"Freetraveler Administrator"}),a("div",V,[a("img",{class:"object-cover w-12 h-12 rounded-full",src:l.$page.props.user.profile_photo_url,alt:l.$page.props.user.name},null,8,$),a("div",w,[a("div",null,i(l.$page.props.user.name),1),a("div",A,i(l.$page.props.user.email),1)])])]),a("div",x,[s(c,{for:"name",value:"Agency Name"}),s(p,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":r[0]||(r[0]=n=>t(e).name=n),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),s(u,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),a("div",C,[s(c,{for:"sale_amount_percentage",value:"Agency Sale Percentage %5"}),s(p,{disabled:"",placeholder:"At the moment you can only change this in 'Agency settings\\''",id:"sale_amount_percentage",modelValue:t(e).sale_amount_percentage,"onUpdate:modelValue":r[1]||(r[1]=n=>t(e).sale_amount_percentage=n),type:"text",class:"block w-full mt-1",autofocus:""},null,8,["modelValue"]),s(u,{message:t(e).errors.sale_amount_percentage,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(y,{class:h({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:o(()=>[m(" Create ")]),_:1},8,["class","disabled"])]),_:1}))}};export{U as default};