import{_ as c}from"./AppLayout.e4bc295f.js";import p from"./DeleteUserForm.a4cf3771.js";import l from"./LogoutOtherBrowserSessionsForm.e49fabc0.js";import{S as s}from"./SectionBorder.0f6e2013.js";import f from"./TwoFactorAuthenticationForm.43fa0b6d.js";import u from"./UpdatePasswordForm.f7f95169.js";import d from"./UpdateProfileInformationForm.c4e6cf53.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app.cfd1cd6b.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.a7256f71.js";import"./SectionTitle.0c9fa611.js";import"./DangerButton.b65b8546.js";import"./DialogModal.b0935b00.js";import"./TextInput.269b6f90.js";import"./SecondaryButton.bb38945b.js";import"./ActionMessage.653b862a.js";import"./PrimaryButton.c434eb03.js";import"./InputLabel.77c9ff3b.js";import"./FormSection.00a6294e.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};