import{o as s,d as n,r as M,i as k,j as L,k as F,g as i,n as f,a as t,e as c,t as w,l as $,m as D,p as I,q as m,s as j,v as B,x as z,b as d,w as r,T as V,c as g,L as C,H as q,f as l,F as x,h as A,y as P}from"./app.7c307b2d.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";const O={},H={src:"/assets/freetravelers-logo.jpg"};function R(u,a){return s(),n("img",H)}const U=E(O,[["render",R]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},K={class:"w-0 flex-1 flex items-center min-w-0"},Q={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},W=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),X=[W],Y={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Z=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),ee=[Z],te={class:"ml-3 font-medium text-sm text-white truncate"},se={class:"shrink-0 sm:ml-3"},oe=t("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),re=[oe],ne={__name:"Banner",setup(u){const a=M(!0),o=k(()=>{var e;return((e=L().props.value.jetstream.flash)==null?void 0:e.bannerStyle)||"success"}),h=k(()=>{var e;return((e=L().props.value.jetstream.flash)==null?void 0:e.banner)||""});return F(h,async()=>{a.value=!0}),(e,b)=>(s(),n("div",null,[a.value&&i(h)?(s(),n("div",{key:0,class:f({"bg-indigo-500":i(o)=="success","bg-red-700":i(o)=="danger"})},[t("div",G,[t("div",J,[t("div",K,[t("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":i(o)=="success","bg-red-600":i(o)=="danger"}])},[i(o)=="success"?(s(),n("svg",Q,X)):c("",!0),i(o)=="danger"?(s(),n("svg",Y,ee)):c("",!0)],2),t("p",te,w(i(h)),1)]),t("div",se,[t("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":i(o)=="success","hover:bg-red-600 focus:bg-red-600":i(o)=="danger"}]),"aria-label":"Dismiss",onClick:b[0]||(b[0]=$(p=>a.value=!1,["prevent"]))},re,2)])])])],2)):c("",!0)]))}},ae={class:"relative"},N={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(u){const a=u;let o=M(!1);const h=p=>{o.value&&p.key==="Escape"&&(o.value=!1)};D(()=>document.addEventListener("keydown",h)),I(()=>document.removeEventListener("keydown",h));const e=k(()=>({48:"w-48"})[a.width.toString()]),b=k(()=>a.align==="left"?"origin-top-left left-0":a.align==="right"?"origin-top-right right-0":"origin-top");return(p,_)=>(s(),n("div",ae,[t("div",{onClick:_[0]||(_[0]=T=>j(o)?o.value=!i(o):o=!i(o))},[m(p.$slots,"trigger")]),B(t("div",{class:"fixed inset-0 z-40",onClick:_[1]||(_[1]=T=>j(o)?o.value=!1:o=!1)},null,512),[[z,i(o)]]),d(V,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[B(t("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[i(e),i(b)]]),style:{display:"none"},onClick:_[2]||(_[2]=T=>j(o)?o.value=!1:o=!1)},[t("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[m(p.$slots,"content")],2)],2),[[z,i(o)]])]),_:3})]))}},ie={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},le=["href"],y={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(a,o)=>(s(),n("div",null,[u.as=="button"?(s(),n("button",ie,[m(a.$slots,"default")])):u.as=="a"?(s(),n("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[m(a.$slots,"default")],8,le)):(s(),g(i(C),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:r(()=>[m(a.$slots,"default")]),_:3},8,["href"]))]))}},S={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const a=u,o=k(()=>a.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(h,e)=>(s(),g(i(C),{href:u.href,class:f(i(o))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))}},v={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(u){const a=u,o=k(()=>a.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(h,e)=>(s(),n("div",null,[u.as=="button"?(s(),n("button",{key:0,class:f([i(o),"w-full text-left"])},[m(h.$slots,"default")],2)):(s(),g(i(C),{key:1,href:u.href,class:f(i(o))},{default:r(()=>[m(h.$slots,"default")]),_:3},8,["href","class"]))]))}},de={class:"min-h-screen bg-gray-100"},ue={class:"bg-white border-b border-gray-100"},ce={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},pe={class:"flex justify-between h-16"},he={class:"flex"},fe={class:"shrink-0 flex items-center"},ge={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},me={class:"hidden sm:flex sm:items-center sm:ml-6"},ve={class:"ml-3 relative"},_e={class:"inline-flex rounded-md"},ye={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},be=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),we={class:"w-60"},ke=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Invoices ",-1),xe=t("div",{class:"border-t border-gray-100"},null,-1),$e=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Agency ",-1),Ce=t("div",{class:"border-t border-gray-100"},null,-1),je=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Agency ",-1),Se=["onSubmit"],Me={class:"flex items-center"},Te={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Le=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Be=[Le],ze={class:"ml-3 relative"},Ae={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Pe=["src","alt"],Ne={key:1,class:"inline-flex rounded-md"},Fe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},De=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ie=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=t("div",{class:"border-t border-gray-100"},null,-1),qe=["onSubmit"],Ee={class:"-mr-2 flex items-center sm:hidden"},Oe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},He={class:"pt-2 pb-3 space-y-1"},Re={class:"pt-4 pb-1 border-t border-gray-200"},Ue={class:"flex items-center px-4"},Ge={key:0,class:"shrink-0 mr-3"},Je=["src","alt"],Ke={class:"font-medium text-base text-gray-800"},Qe={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=t("div",{class:"border-t border-gray-200"},null,-1),Ze=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),et=t("div",{class:"border-t border-gray-200"},null,-1),tt=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),st=["onSubmit"],ot={class:"flex items-center"},rt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},nt=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),at=[nt],it={key:0,class:"bg-white shadow"},lt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ct={__name:"AppLayout",props:{title:String},setup(u){const a=M(!1),o=e=>{P.Inertia.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},h=()=>{P.Inertia.post(route("logout"))};return(e,b)=>(s(),n("div",null,[d(i(q),{title:u.title},null,8,["title"]),d(ne),t("div",de,[t("nav",ue,[t("div",ce,[t("div",pe,[t("div",he,[t("div",fe,[d(i(C),{href:e.route("dashboard")},{default:r(()=>[d(U,{class:"block h-10 w-auto"})]),_:1},8,["href"])]),t("div",ge,[d(S,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[l(" Mis cotizaciones ")]),_:1},8,["href","active"]),d(S,{href:e.route("quote"),active:e.route().current("quote")},{default:r(()=>[l(" Cotizador ")]),_:1},8,["href","active"]),d(S,{href:e.route("activities"),active:e.route().current("activities")},{default:r(()=>[l(" Ver Costos ")]),_:1},8,["href","active"])])]),t("div",me,[t("div",ve,[e.$page.props.jetstream.hasTeamFeatures?(s(),g(N,{key:0,align:"right",width:"60"},{trigger:r(()=>[t("span",_e,[t("button",ye,[l(w(e.$page.props.user.current_team.name)+" ",1),be])])]),content:r(()=>[t("div",we,[e.$page.props.jetstream.hasTeamFeatures?(s(),n(x,{key:0},[e.$page.props.user.is_freetraveler_admin?(s(),n(x,{key:0},[ke,e.$page.props.jetstream.canCreateTeams?(s(),g(y,{key:0,href:e.route("invoices",e.$page.props.user.current_team)},{default:r(()=>[l(" My Invoices ")]),_:1},8,["href"])):c("",!0),e.$page.props.jetstream.canCreateTeams?(s(),g(y,{key:1,href:e.route("providers")},{default:r(()=>[l(" Providers ")]),_:1},8,["href"])):c("",!0)],64)):c("",!0),xe,$e,d(y,{href:e.route("teams.show",e.$page.props.user.current_team)},{default:r(()=>[l(" Agency Settings ")]),_:1},8,["href"]),e.$page.props.jetstream.canCreateTeams?(s(),g(y,{key:1,href:e.route("teams.create")},{default:r(()=>[l(" Create New Agency ")]),_:1},8,["href"])):c("",!0),Ce,je,(s(!0),n(x,null,A(e.$page.props.user.all_teams,p=>(s(),n("form",{key:p.id,onSubmit:$(_=>o(p),["prevent"])},[d(y,{as:"button"},{default:r(()=>[t("div",Me,[p.id==e.$page.props.user.current_team_id?(s(),n("svg",Te,Be)):c("",!0),t("div",null,w(p.name),1)])]),_:2},1024)],40,Se))),128))],64)):c("",!0)])]),_:1})):c("",!0)]),t("div",ze,[d(N,{align:"right",width:"48"},{trigger:r(()=>[e.$page.props.jetstream.managesProfilePhotos?(s(),n("button",Ae,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Pe)])):(s(),n("span",Ne,[t("button",Fe,[l(w(e.$page.props.user.name)+" ",1),De])]))]),content:r(()=>[Ie,d(y,{href:e.route("profile.show")},{default:r(()=>[l(" Profile ")]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(s(),g(y,{key:0,href:e.route("api-tokens.index")},{default:r(()=>[l(" API Tokens ")]),_:1},8,["href"])):c("",!0),Ve,t("form",{onSubmit:$(h,["prevent"])},[d(y,{as:"button"},{default:r(()=>[l(" Log Out ")]),_:1})],40,qe)]),_:1})])]),t("div",Ee,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:b[0]||(b[0]=p=>a.value=!a.value)},[(s(),n("svg",Oe,[t("path",{class:f({hidden:a.value,"inline-flex":!a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:f({hidden:!a.value,"inline-flex":a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:f([{block:a.value,hidden:!a.value},"sm:hidden"])},[t("div",He,[d(v,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[l(" Mis cotizaciones ")]),_:1},8,["href","active"]),d(v,{href:e.route("quote"),active:e.route().current("quote")},{default:r(()=>[l(" Cotizador ")]),_:1},8,["href","active"]),d(v,{href:e.route("activities"),active:e.route().current("activities")},{default:r(()=>[l(" Ver Costos ")]),_:1},8,["href","active"])]),t("div",Re,[t("div",Ue,[e.$page.props.jetstream.managesProfilePhotos?(s(),n("div",Ge,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Je)])):c("",!0),t("div",null,[t("div",Ke,w(e.$page.props.user.name),1),t("div",Qe,w(e.$page.props.user.email),1)])]),t("div",We,[d(v,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:r(()=>[l(" Profile ")]),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?(s(),g(v,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:r(()=>[l(" API Tokens ")]),_:1},8,["href","active"])):c("",!0),t("form",{method:"POST",onSubmit:$(h,["prevent"])},[d(v,{as:"button"},{default:r(()=>[l(" Log Out ")]),_:1})],40,Xe),e.$page.props.jetstream.hasTeamFeatures?(s(),n(x,{key:1},[Ye,Ze,d(v,{href:e.route("teams.show",e.$page.props.user.current_team),active:e.route().current("teams.show")},{default:r(()=>[l(" Team Settings ")]),_:1},8,["href","active"]),e.$page.props.jetstream.canCreateTeams?(s(),g(v,{key:0,href:e.route("teams.create"),active:e.route().current("teams.create")},{default:r(()=>[l(" Create New Team ")]),_:1},8,["href","active"])):c("",!0),et,tt,(s(!0),n(x,null,A(e.$page.props.user.all_teams,p=>(s(),n("form",{key:p.id,onSubmit:$(_=>o(p),["prevent"])},[d(v,{as:"button"},{default:r(()=>[t("div",ot,[p.id==e.$page.props.user.current_team_id?(s(),n("svg",rt,at)):c("",!0),t("div",null,w(p.name),1)])]),_:2},1024)],40,st))),128))],64)):c("",!0)])])],2)]),e.$slots.header?(s(),n("header",it,[t("div",lt,[m(e.$slots,"header")])])):c("",!0),t("main",null,[m(e.$slots,"default")])])]))}};export{ct as _};
