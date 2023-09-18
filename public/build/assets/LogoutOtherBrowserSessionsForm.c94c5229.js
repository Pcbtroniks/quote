import{r as f,u as k,o as a,c as y,w as o,f as r,d as n,F as x,h as C,a as s,t as c,e as b,b as i,g as l,P as S,n as B}from"./app.0b07f6ec.js";import{_ as V}from"./ActionMessage.59e7580d.js";import{_ as M}from"./ActionSection.29700365.js";import{_ as $}from"./DialogModal.5b418fe8.js";import{_ as F}from"./InputError.4290ceaf.js";import{_ as v}from"./PrimaryButton.e6de1109.js";import{_ as L}from"./SecondaryButton.d4aff10d.js";import{_ as z}from"./TextInput.407ed52b.js";import"./SectionTitle.9627eda6.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.af5a4b1a.js";const N=s("div",{class:"max-w-xl text-sm text-gray-600"}," Si es necesario, puede cerrar sesi\xF3n en todas sus otras sesiones de navegador en todos sus dispositivos. A continuaci\xF3n se muestran algunas de sus sesiones recientes; sin embargo, esta lista puede no ser exhaustiva. Si cree que su cuenta ha sido comprometida, tambi\xE9n debe actualizar su contrase\xF1a. ",-1),U={key:0,class:"mt-5 space-y-6"},A={key:0,fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-8 h-8 text-gray-500"},E=s("path",{d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},null,-1),H=[E],K={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"w-8 h-8 text-gray-500"},j=s("path",{d:"M0 0h24v24H0z",stroke:"none"},null,-1),q=s("rect",{x:"7",y:"4",width:"10",height:"16",rx:"1"},null,-1),I=s("path",{d:"M11 5h2M12 17v.01"},null,-1),O=[j,q,I],P={class:"ml-3"},T={class:"text-sm text-gray-600"},D={class:"text-xs text-gray-500"},G={key:0,class:"text-green-500 font-semibold"},J={key:1},Q={class:"flex items-center mt-5"},R={class:"mt-4"},ls={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(_){const d=f(!1),u=f(null),t=k({password:""}),g=()=>{d.value=!0,setTimeout(()=>u.value.focus(),250)},p=()=>{t.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>u.value.focus(),onFinish:()=>t.reset()})},m=()=>{d.value=!1,t.reset()};return(W,h)=>(a(),y(M,null,{title:o(()=>[r(" Sessione de otros navegadores ")]),description:o(()=>[r(" Administrar y cerrar sesi\xF3n en sus sesiones activas en otros navegadores y dispositivos. ")]),content:o(()=>[N,_.sessions.length>0?(a(),n("div",U,[(a(!0),n(x,null,C(_.sessions,(e,w)=>(a(),n("div",{key:w,class:"flex items-center"},[s("div",null,[e.agent.is_desktop?(a(),n("svg",A,H)):(a(),n("svg",K,O))]),s("div",P,[s("div",T,c(e.agent.platform?e.agent.platform:"Unknown")+" - "+c(e.agent.browser?e.agent.browser:"Unknown"),1),s("div",null,[s("div",D,[r(c(e.ip_address)+", ",1),e.is_current_device?(a(),n("span",G,"Este dispositivo")):(a(),n("span",J,"Ultima activa "+c(e.last_active),1))])])])]))),128))])):b("",!0),s("div",Q,[i(v,{onClick:g},{default:o(()=>[r(" Cerrar sesi\xF3n en otros navegadores ")]),_:1}),i(V,{on:l(t).recentlySuccessful,class:"ml-3"},{default:o(()=>[r(" Hecho. ")]),_:1},8,["on"])]),i($,{show:d.value,onClose:m},{title:o(()=>[r(" Cerrar sesi\xF3n en otros navegadores ")]),content:o(()=>[r(" Por favor ingrese su contrase\xF1a para confirmar que desea cerrar sesi\xF3n en sus otras sesiones de navegador en todos sus dispositivos. "),s("div",R,[i(z,{ref_key:"passwordInput",ref:u,modelValue:l(t).password,"onUpdate:modelValue":h[0]||(h[0]=e=>l(t).password=e),type:"password",class:"mt-1 block w-3/4",placeholder:"Contrase\xF1a",onKeyup:S(p,["enter"])},null,8,["modelValue","onKeyup"]),i(F,{message:l(t).errors.password,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[i(L,{onClick:m},{default:o(()=>[r(" Cancelar ")]),_:1}),i(v,{class:B(["ml-3",{"opacity-25":l(t).processing}]),disabled:l(t).processing,onClick:p},{default:o(()=>[r(" Cerrar sesi\xF3n en otros navegadores ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ls as default};
