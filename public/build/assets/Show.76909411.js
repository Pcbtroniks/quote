import{_ as c}from"./AppLayout.b70f9ff5.js";import p from"./DeleteUserForm.ae62361a.js";import l from"./LogoutOtherBrowserSessionsForm.ed0238c4.js";import{S as s}from"./SectionBorder.1fa917a8.js";import f from"./TwoFactorAuthenticationForm.d47eb120.js";import u from"./UpdatePasswordForm.6874d4f6.js";import d from"./UpdateProfileInformationForm.b5097d7e.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app.8314e660.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.4056532f.js";import"./SectionTitle.850fc425.js";import"./DangerButton.c8f7c666.js";import"./DialogModal.af308cfe.js";import"./TextInput.c2ce2e0b.js";import"./SecondaryButton.7af0bdac.js";import"./ActionMessage.e90821ae.js";import"./PrimaryButton.1320e158.js";import"./InputLabel.480ce534.js";import"./FormSection.88417357.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(d,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};