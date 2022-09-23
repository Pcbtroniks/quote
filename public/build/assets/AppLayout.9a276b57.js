import{o,d as n,r as C,i as x,j as M,k as N,f as a,n as f,a as e,e as h,t as y,l as k,m as D,p as F,q as g,s as j,v as L,x as B,b as c,w as i,T as E,c as _,L as S,H as I,h as p,F as $,g as z,y as P}from"./app.40ba4836.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";const V={},H={src:"/assets/freetravelers-logo.jpg"};function R(l,r){return o(),n("img",H)}const q=O(V,[["render",R]]),U={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},G={class:"flex items-center justify-between flex-wrap"},J={class:"w-0 flex-1 flex items-center min-w-0"},K={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),W=[Q],X={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),Z=[Y],ee={class:"ml-3 font-medium text-sm text-white truncate"},te={class:"shrink-0 sm:ml-3"},se=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),oe=[se],re={__name:"Banner",setup(l){const r=C(!0),s=x(()=>{var t;return((t=M().props.value.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),u=x(()=>{var t;return((t=M().props.value.jetstream.flash)==null?void 0:t.banner)||""});return N(u,async()=>{r.value=!0}),(t,v)=>(o(),n("div",null,[r.value&&a(u)?(o(),n("div",{key:0,class:f({"bg-indigo-500":a(s)=="success","bg-red-700":a(s)=="danger"})},[e("div",U,[e("div",G,[e("div",J,[e("span",{class:f(["flex p-2 rounded-lg",{"bg-indigo-600":a(s)=="success","bg-red-600":a(s)=="danger"}])},[a(s)=="success"?(o(),n("svg",K,W)):h("",!0),a(s)=="danger"?(o(),n("svg",X,Z)):h("",!0)],2),e("p",ee,y(a(u)),1)]),e("div",te,[e("button",{type:"button",class:f(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":a(s)=="success","hover:bg-red-600 focus:bg-red-600":a(s)=="danger"}]),"aria-label":"Dismiss",onClick:v[0]||(v[0]=k(d=>r.value=!1,["prevent"]))},oe,2)])])])],2)):h("",!0)]))}},ne={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(l){const r=l;let s=C(!1);const u=d=>{s.value&&d.key==="Escape"&&(s.value=!1)};D(()=>document.addEventListener("keydown",u)),F(()=>document.removeEventListener("keydown",u));const t=x(()=>({48:"w-48"})[r.width.toString()]),v=x(()=>r.align==="left"?"origin-top-left left-0":r.align==="right"?"origin-top-right right-0":"origin-top");return(d,m)=>(o(),n("div",ne,[e("div",{onClick:m[0]||(m[0]=T=>j(s)?s.value=!a(s):s=!a(s))},[g(d.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=T=>j(s)?s.value=!1:s=!1)},null,512),[[B,a(s)]]),c(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:i(()=>[L(e("div",{class:f(["absolute z-50 mt-2 rounded-md shadow-lg",[a(t),a(v)]]),style:{display:"none"},onClick:m[2]||(m[2]=T=>j(s)?s.value=!1:s=!1)},[e("div",{class:f(["rounded-md ring-1 ring-black ring-opacity-5",l.contentClasses])},[g(d.$slots,"content")],2)],2),[[B,a(s)]])]),_:3})]))}},ae={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ie=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(l){return(r,s)=>(o(),n("div",null,[l.as=="button"?(o(),n("button",ae,[g(r.$slots,"default")])):l.as=="a"?(o(),n("a",{key:1,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[g(r.$slots,"default")],8,ie)):(o(),_(a(S),{key:2,href:l.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:i(()=>[g(r.$slots,"default")]),_:3},8,["href"]))]))}},le={__name:"NavLink",props:{href:String,active:Boolean},setup(l){const r=l,s=x(()=>r.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(u,t)=>(o(),_(a(S),{href:l.href,class:f(a(s))},{default:i(()=>[g(u.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(l){const r=l,s=x(()=>r.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(u,t)=>(o(),n("div",null,[l.as=="button"?(o(),n("button",{key:0,class:f([a(s),"w-full text-left"])},[g(u.$slots,"default")],2)):(o(),_(a(S),{key:1,href:l.href,class:f(a(s))},{default:i(()=>[g(u.$slots,"default")]),_:3},8,["href","class"]))]))}},de={class:"min-h-screen bg-gray-100"},ce={class:"bg-white border-b border-gray-100"},ue={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},he={class:"flex justify-between h-16"},pe={class:"flex"},fe={class:"shrink-0 flex items-center"},ge={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},me=p(" Dashboard "),_e={class:"hidden sm:flex sm:items-center sm:ml-6"},ve={class:"ml-3 relative"},be={class:"inline-flex rounded-md"},ye={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},we=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),xe={class:"w-60"},ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),$e=p(" Team Settings "),Se=p(" Create New Team "),je=e("div",{class:"border-t border-gray-100"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Te=["onSubmit"],Me={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Be=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Pe={class:"ml-3 relative"},Ae={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ne=["src","alt"],De={key:1,class:"inline-flex rounded-md"},Fe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ie=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Oe=p(" Profile "),Ve=p(" API Tokens "),He=e("div",{class:"border-t border-gray-100"},null,-1),Re=["onSubmit"],qe=p(" Log Out "),Ue={class:"-mr-2 flex items-center sm:hidden"},Ge={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Je={class:"pt-2 pb-3 space-y-1"},Ke=p(" Dashboard "),Qe={class:"pt-4 pb-1 border-t border-gray-200"},We={class:"flex items-center px-4"},Xe={key:0,class:"shrink-0 mr-3"},Ye=["src","alt"],Ze={class:"font-medium text-base text-gray-800"},et={class:"font-medium text-sm text-gray-500"},tt={class:"mt-3 space-y-1"},st=p(" Profile "),ot=p(" API Tokens "),rt=["onSubmit"],nt=p(" Log Out "),at=e("div",{class:"border-t border-gray-200"},null,-1),it=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),lt=p(" Team Settings "),dt=p(" Create New Team "),ct=e("div",{class:"border-t border-gray-200"},null,-1),ut=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ht=["onSubmit"],pt={class:"flex items-center"},ft={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},gt=e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),mt=[gt],_t={key:0,class:"bg-white shadow"},vt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},wt={__name:"AppLayout",props:{title:String},setup(l){const r=C(!1),s=t=>{P.Inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},u=()=>{P.Inertia.post(route("logout"))};return(t,v)=>(o(),n("div",null,[c(a(I),{title:l.title},null,8,["title"]),c(re),e("div",de,[e("nav",ce,[e("div",ue,[e("div",he,[e("div",pe,[e("div",fe,[c(a(S),{href:t.route("dashboard")},{default:i(()=>[c(q,{class:"block h-10 w-auto"})]),_:1},8,["href"])]),e("div",ge,[c(le,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[me]),_:1},8,["href","active"])])]),e("div",_e,[e("div",ve,[t.$page.props.jetstream.hasTeamFeatures?(o(),_(A,{key:0,align:"right",width:"60"},{trigger:i(()=>[e("span",be,[e("button",ye,[p(y(t.$page.props.user.current_team.name)+" ",1),we])])]),content:i(()=>[e("div",xe,[t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:0},[ke,c(w,{href:t.route("teams.show",t.$page.props.user.current_team)},{default:i(()=>[$e]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(o(),_(w,{key:0,href:t.route("teams.create")},{default:i(()=>[Se]),_:1},8,["href"])):h("",!0),je,Ce,(o(!0),n($,null,z(t.$page.props.user.all_teams,d=>(o(),n("form",{key:d.id,onSubmit:k(m=>s(d),["prevent"])},[c(w,{as:"button"},{default:i(()=>[e("div",Me,[d.id==t.$page.props.user.current_team_id?(o(),n("svg",Le,ze)):h("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,Te))),128))],64)):h("",!0)])]),_:1})):h("",!0)]),e("div",Pe,[c(A,{align:"right",width:"48"},{trigger:i(()=>[t.$page.props.jetstream.managesProfilePhotos?(o(),n("button",Ae,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ne)])):(o(),n("span",De,[e("button",Fe,[p(y(t.$page.props.user.name)+" ",1),Ee])]))]),content:i(()=>[Ie,c(w,{href:t.route("profile.show")},{default:i(()=>[Oe]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(w,{key:0,href:t.route("api-tokens.index")},{default:i(()=>[Ve]),_:1},8,["href"])):h("",!0),He,e("form",{onSubmit:k(u,["prevent"])},[c(w,{as:"button"},{default:i(()=>[qe]),_:1})],40,Re)]),_:1})])]),e("div",Ue,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:v[0]||(v[0]=d=>r.value=!r.value)},[(o(),n("svg",Ge,[e("path",{class:f({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:f({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:f([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",Je,[c(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:i(()=>[Ke]),_:1},8,["href","active"])]),e("div",Qe,[e("div",We,[t.$page.props.jetstream.managesProfilePhotos?(o(),n("div",Xe,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.name},null,8,Ye)])):h("",!0),e("div",null,[e("div",Ze,y(t.$page.props.user.name),1),e("div",et,y(t.$page.props.user.email),1)])]),e("div",tt,[c(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:i(()=>[st]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(o(),_(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:i(()=>[ot]),_:1},8,["href","active"])):h("",!0),e("form",{method:"POST",onSubmit:k(u,["prevent"])},[c(b,{as:"button"},{default:i(()=>[nt]),_:1})],40,rt),t.$page.props.jetstream.hasTeamFeatures?(o(),n($,{key:1},[at,it,c(b,{href:t.route("teams.show",t.$page.props.user.current_team),active:t.route().current("teams.show")},{default:i(()=>[lt]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(o(),_(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:i(()=>[dt]),_:1},8,["href","active"])):h("",!0),ct,ut,(o(!0),n($,null,z(t.$page.props.user.all_teams,d=>(o(),n("form",{key:d.id,onSubmit:k(m=>s(d),["prevent"])},[c(b,{as:"button"},{default:i(()=>[e("div",pt,[d.id==t.$page.props.user.current_team_id?(o(),n("svg",ft,mt)):h("",!0),e("div",null,y(d.name),1)])]),_:2},1024)],40,ht))),128))],64)):h("",!0)])])],2)]),t.$slots.header?(o(),n("header",_t,[e("div",vt,[g(t.$slots,"header")])])):h("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{wt as _};
