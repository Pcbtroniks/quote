import{_ as p}from"./AppLayout.14a4f3e4.js";import c from"./DeleteUserForm.b08a6684.js";import l from"./LogoutOtherBrowserSessionsForm.c2340f86.js";import{S as s}from"./SectionBorder.8cf8450a.js";import f from"./TwoFactorAuthenticationForm.35d6ba20.js";import u from"./UpdatePasswordForm.0713055f.js";import d from"./UpdateProfileInformationForm.cb814d66.js";import{o as e,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app.2461e4c8.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Permissions.1965abcb.js";import"./ActionSection.11eacf60.js";import"./SectionTitle.48ad2ed7.js";import"./DangerButton.5c7e8a60.js";import"./DialogModal.4e0d31b2.js";import"./Modal.099e7675.js";import"./InputError.9a8cc298.js";import"./SecondaryButton.74a755aa.js";import"./TextInput.d25749dd.js";import"./ActionMessage.a664a5e8.js";import"./PrimaryButton.5bb572a4.js";import"./InputLabel.b7b5df00.js";import"./FormSection.45b9e3ba.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Perfil ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),_(p,{title:"Perfil"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(d,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{K as default};