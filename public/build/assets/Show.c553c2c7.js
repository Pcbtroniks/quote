import{_ as c}from"./AppLayout.a78f30ea.js";import p from"./DeleteUserForm.2ce10078.js";import l from"./LogoutOtherBrowserSessionsForm.476bc585.js";import{S as s}from"./SectionBorder.ddcb046b.js";import f from"./TwoFactorAuthenticationForm.485b73eb.js";import u from"./UpdatePasswordForm.4cace9e3.js";import d from"./UpdateProfileInformationForm.6764507a.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app.925ffcad.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.4f272232.js";import"./SectionTitle.938fb9e4.js";import"./DangerButton.821b4b9c.js";import"./DialogModal.ef893882.js";import"./TextInput.cc6312c5.js";import"./SecondaryButton.fe1ec993.js";import"./ActionMessage.f46dfcb1.js";import"./PrimaryButton.d6e50bb3.js";import"./InputLabel.bc2cfd1a.js";import"./FormSection.6c9a4e66.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};