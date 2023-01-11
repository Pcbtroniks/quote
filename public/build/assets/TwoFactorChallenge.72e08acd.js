import{r as d,u as x,o as s,d as a,b as o,g as t,w as m,F as c,H as h,a as i,f as n,l as y,n as C,G as w}from"./app.198591f6.js";import{A as V}from"./AuthenticationCard.4d5dfa83.js";import{_ as $}from"./AuthenticationCardLogo.932e80e6.js";import{_ as p,a as v}from"./TextInput.10beb686.js";import{_ as g}from"./InputLabel.e3f6b5e2.js";import{_ as F}from"./PrimaryButton.c11bd238.js";import"./_plugin-vue_export-helper.cdc0426e.js";const I={class:"mb-4 text-sm text-gray-600"},T=["onSubmit"],U={key:0},B={key:1},N={class:"flex items-center justify-end mt-4"},A=["onClick"],M={__name:"TwoFactorChallenge",setup(H){const r=d(!1),e=x({code:"",recovery_code:""}),f=d(null),_=d(null),k=async()=>{r.value^=!0,await w(),r.value?(f.value.focus(),e.code=""):(_.value.focus(),e.recovery_code="")},b=()=>{e.post(route("two-factor.login"))};return(P,l)=>(s(),a(c,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o($)]),default:m(()=>[i("div",I,[r.value?(s(),a(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(s(),a(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:y(b,["prevent"])},[r.value?(s(),a("div",B,[o(g,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=u=>t(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(s(),a("div",U,[o(g,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:_,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=u=>t(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",N,[i("button",{type:"button",class:"text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",onClick:y(k,["prevent"])},[r.value?(s(),a(c,{key:1},[n(" Use an authentication code ")],64)):(s(),a(c,{key:0},[n(" Use a recovery code ")],64))],8,A),o(F,{class:C(["ml-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],40,T)]),_:1})],64))}};export{M as default};
