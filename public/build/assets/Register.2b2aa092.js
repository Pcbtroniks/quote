<<<<<<<< HEAD:public/build/assets/Register.8b955769.js
import{u as _,o as c,d as f,b as e,g as a,w as l,F as g,H as w,a as t,f as d,e as h,L as v,n as y,l as V}from"./app.9e9fa62b.js";import{A as k}from"./AuthenticationCard.94bda89f.js";import{_ as b}from"./Checkbox.13913e13.js";import{_ as u,a as m}from"./TextInput.85cfa3b1.js";import{_ as i}from"./InputLabel.37dcafe6.js";import{_ as x}from"./PrimaryButton.4e3b904e.js";import{_ as $}from"./LogoFreeTraveler.fe8f6a24.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=["onSubmit"],q={class:"mt-4"},C={class:"mt-4"},F={class:"mt-4"},N={key:0,class:"mt-4"},U={class:"flex items-center"},A={class:"ml-2"},B=["href"],R=["href"],S={class:"flex items-center justify-end mt-4"},G={__name:"Register",setup(T){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(n,o)=>(c(),f(g,null,[e(a(w),{title:"Register"}),e(k,null,{logo:l(()=>[e($)]),default:l(()=>[t("form",{onSubmit:V(p,["prevent"])},[t("div",null,[e(i,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=r=>a(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),t("div",q,[e(i,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":o[1]||(o[1]=r=>a(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",C,[e(i,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":o[2]||(o[2]=r=>a(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),t("div",F,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>a(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",N,[e(i,{for:"terms"},{default:l(()=>[t("div",U,[e(b,{id:"terms",checked:a(s).terms,"onUpdate:checked":o[4]||(o[4]=r=>a(s).terms=r),name:"terms",required:""},null,8,["checked"]),t("div",A,[d(" I agree to the "),t("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,B),d(" and "),t("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,R)])]),e(m,{class:"mt-2",message:a(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),t("div",S,[e(a(v),{href:n.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[d(" Already registered? ")]),_:1},8,["href"]),e(x,{class:y(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:l(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{G as default};
========
import{u as _,o as c,d as f,b as e,g as a,w as l,F as g,H as w,a as t,f as d,e as h,L as v,n as y,l as V}from"./app.8df7766f.js";import{A as k}from"./AuthenticationCard.51919f8b.js";import{_ as b}from"./Checkbox.09c89a4c.js";import{_ as u,a as m}from"./TextInput.39a27708.js";import{_ as i}from"./InputLabel.63e42e79.js";import{_ as x}from"./PrimaryButton.416f08fb.js";import{_ as $}from"./LogoFreeTraveler.b627b5f4.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=["onSubmit"],q={class:"mt-4"},C={class:"mt-4"},F={class:"mt-4"},N={key:0,class:"mt-4"},U={class:"flex items-center"},A={class:"ml-2"},B=["href"],R=["href"],S={class:"flex items-center justify-end mt-4"},G={__name:"Register",setup(T){const s=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),p=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(n,o)=>(c(),f(g,null,[e(a(w),{title:"Register"}),e(k,null,{logo:l(()=>[e($)]),default:l(()=>[t("form",{onSubmit:V(p,["prevent"])},[t("div",null,[e(i,{for:"name",value:"Name"}),e(u,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":o[0]||(o[0]=r=>a(s).name=r),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),t("div",q,[e(i,{for:"email",value:"Email"}),e(u,{id:"email",modelValue:a(s).email,"onUpdate:modelValue":o[1]||(o[1]=r=>a(s).email=r),type:"email",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.email},null,8,["message"])]),t("div",C,[e(i,{for:"password",value:"Password"}),e(u,{id:"password",modelValue:a(s).password,"onUpdate:modelValue":o[2]||(o[2]=r=>a(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),t("div",F,[e(i,{for:"password_confirmation",value:"Confirm Password"}),e(u,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>a(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:a(s).errors.password_confirmation},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(c(),f("div",N,[e(i,{for:"terms"},{default:l(()=>[t("div",U,[e(b,{id:"terms",checked:a(s).terms,"onUpdate:checked":o[4]||(o[4]=r=>a(s).terms=r),name:"terms",required:""},null,8,["checked"]),t("div",A,[d(" I agree to the "),t("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,B),d(" and "),t("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,R)])]),e(m,{class:"mt-2",message:a(s).errors.terms},null,8,["message"])]),_:1})])):h("",!0),t("div",S,[e(a(v),{href:n.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:l(()=>[d(" Already registered? ")]),_:1},8,["href"]),e(x,{class:y(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:l(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{G as default};
>>>>>>>> 534ec1f332eed5940b72fae7e053d75692f12026:public/build/assets/Register.2b2aa092.js
