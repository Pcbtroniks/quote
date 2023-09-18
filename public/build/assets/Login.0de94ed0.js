import{u as b,o as n,d,b as a,g as s,w as m,F as w,H as h,t as k,e as c,a as t,c as x,f as u,L as v,n as y,l as V}from"./app.0b07f6ec.js";import{A as $}from"./AuthenticationCard.63430805.js";import{_ as B}from"./LogoFreeTraveler.018665b0.js";import{_ as C}from"./Checkbox.7f3081c1.js";import{_ as f}from"./InputError.4290ceaf.js";import{_ as p}from"./InputLabel.1d14b62c.js";import{_ as L}from"./PrimaryButton.e6de1109.js";import{_}from"./TextInput.407ed52b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],S={class:"mt-4"},q={class:"block mt-4"},H={class:"flex items-center"},R=t("span",{class:"ml-2 text-sm text-gray-600"},"Rercordarme",-1),U={class:"flex items-center justify-end mt-4"},I={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=b({email:"",password:"",remember:!1}),g=()=>{e.transform(i=>({...i,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(i,o)=>(n(),d(w,null,[a(s(h),{title:"Log in"}),a($,null,{logo:m(()=>[a(B)]),default:m(()=>[l.status?(n(),d("div",F,k(l.status),1)):c("",!0),t("form",{onSubmit:V(g,["prevent"])},[t("div",null,[a(p,{for:"email",value:"Email"}),a(_,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",S,[a(p,{for:"password",value:"Contrase\xF1a"}),a(_,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(f,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[t("label",H,[a(C,{checked:s(e).remember,"onUpdate:checked":o[2]||(o[2]=r=>s(e).remember=r),name:"remember"},null,8,["checked"]),R])]),t("div",U,[l.canResetPassword?(n(),x(s(v),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[u(" \xBFHa olvidado su contrase\xF1a? ")]),_:1},8,["href"])):c("",!0),a(L,{class:y(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[u(" Log in ")]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{I as default};
