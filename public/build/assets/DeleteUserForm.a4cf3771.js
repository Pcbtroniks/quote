import{r as u,u as f,o as y,c as w,w as e,a as c,b as t,f as a,G as h,n as v,h as s}from"./app.cfd1cd6b.js";import{_ as k}from"./Modal.a7256f71.js";import{_}from"./DangerButton.b65b8546.js";import{_ as x}from"./DialogModal.b0935b00.js";import{_ as g,a as C}from"./TextInput.269b6f90.js";import{_ as D}from"./SecondaryButton.bb38945b.js";import"./SectionTitle.0c9fa611.js";import"./_plugin-vue_export-helper.cdc0426e.js";const b=s(" Delete Account "),V=s(" Permanently delete your account. "),$=c("div",{class:"max-w-xl text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),A={class:"mt-5"},U=s(" Delete Account "),B=s(" Delete Account "),F=s(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),K={class:"mt-4"},N=s(" Cancel "),P=s(" Delete Account "),H={__name:"DeleteUserForm",setup(I){const r=u(!1),n=u(null),o=f({password:""}),m=()=>{r.value=!0,setTimeout(()=>n.value.focus(),250)},i=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>l(),onError:()=>n.value.focus(),onFinish:()=>o.reset()})},l=()=>{r.value=!1,o.reset()};return(O,d)=>(y(),w(k,null,{title:e(()=>[b]),description:e(()=>[V]),content:e(()=>[$,c("div",A,[t(_,{onClick:m},{default:e(()=>[U]),_:1})]),t(x,{show:r.value,onClose:l},{title:e(()=>[B]),content:e(()=>[F,c("div",K,[t(g,{ref_key:"passwordInput",ref:n,modelValue:a(o).password,"onUpdate:modelValue":d[0]||(d[0]=p=>a(o).password=p),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:h(i,["enter"])},null,8,["modelValue","onKeyup"]),t(C,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[t(D,{onClick:l},{default:e(()=>[N]),_:1}),t(_,{class:v(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:i},{default:e(()=>[P]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{H as default};