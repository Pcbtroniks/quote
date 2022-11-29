import{I as Z,o as i,d as r,a as o,t as p,u as E,N as T,f as v,g as e,b as u,w as _,v as x,A as L,e as f,O as $,P as g,F as w,h as y,Q as O,R as G,S as J}from"./app.925ffcad.js";import{_ as K}from"./FormSection.6c9a4e66.js";import V from"./InputNumber.065ccbe5.js";import h from"./InputLabel.2f1bb939.js";import F from"./InputText.dd283c1e.js";import W from"./Summary.778e1cff.js";import S from"./InputDate.ec0ad9b6.js";import{_ as X}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.938fb9e4.js";const n=Z({season:"low",hotels:{cancun:null,pdc:null,rm:null},cancunHotels:null,rmHotels:null,tours:[],nPackTours:0,nTours:[],tour:{activity:0,pickup:null,hotel:null},resume:{total:{adults:0,minors:0}},prices:{totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:5,amount:0}}}),Y=async(a,m=null)=>await(await fetch(a,m)).json(),N=async()=>{const a=await fetch(route("tours"));n.tours=await a.json()},P=async a=>await Y(route("hotels",{zone:a})),ee=async a=>n.hotels=await P(a),te=async(a,m)=>await(await fetch(route("nd.pickup.get",{activity:a,hotel:m}))).json(),C=async(a,m)=>await te(a,m),oe=async(a,m,t)=>{var k;if(!m||!t)return console.warn(`acticity( ${m} )  or hotel( ${t} ) invalid:`),"00:00:00";n.nTours[a].pickup=(k=await C(m,t).then(A=>A.pickup_time))!=null?k:"00:00:00"},se=a=>["2022-12-26","2022-12-27","2022-12-28","2022-12-29","2022-12-30","2022-12-31"].includes(a)?"high":"low",z=async(a,m,t)=>await(await fetch(route("prices",{activity:a,zone:m,season:t}))).json(),ne=async a=>a==1&&!n.hotels.cancun?(n.hotels.cancun=[...await P(1)],n):a==1&&n.hotels.cancun?n:a==2&&!n.hotels.rm?(n.hotels.rm=[...await P(2)],n):a==2&&n.hotels.rm?n:a==3&&!n.hotels.pdc?(n.hotels.pdc=[...await P(3)],n):(a==3&&n.hotels.pdc,n),B=a=>({1:"cancun",2:"rm",3:"pdc"})[a],le=new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),I=a=>{var t;return(t=["no especificada","entrada","tour","paquete"][a])!=null?t:"invalida"},U=(a,m)=>Number(Number(a)+Number(m)).toFixed(2),ae=a=>a>0?"$"+a:"",ie={class:"flex flex-col p-2 bg-white shadow-md hover:shodow-lg rounded-2xl"},re={class:"flex items-center justify-between"},de={class:"flex items-center"},ce=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),ue={class:"flex flex-col ml-3"},pe={class:"text-sm text-gray-600 leading-none mt-1"},me={__name:"Alert",props:{msg:String},setup(a){return(m,t)=>(i(),r("div",ie,[o("div",re,[o("div",de,[ce,o("div",ue,[o("p",pe,p(a.msg),1)])])])]))}};const c=a=>(G("data-v-34ca76c3"),a=a(),J(),a),_e={class:"p-6 sm:px-20 bg-white border-b border-gray-200"},fe={class:"mt-4 text-2xl text-center"},ve={class:"text-lg"},he=c(()=>o("div",{class:"md:mx-14 md:my-10 font-bold"},"Resumen de la reserva.",-1)),be={class:"mb-4"},xe=c(()=>o("br",null,null,-1)),we=c(()=>o("br",null,null,-1)),ye=c(()=>o("br",null,null,-1)),ge=c(()=>o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600"}," Por favor llene el siguiente formulario para poder realizar su cotizaci\xF3n. ")],-1)),ke={class:"flex items-center justify-center px-12 pt-4 col-span-6 sm:col-span-4"},Ve={class:"mx-auto w-full max-w-[550px]"},Pe={key:0,class:"mb-5"},Ae=c(()=>o("small",{class:"text-gray-400"},"Descuento para mexicanos, presentar INE o pasaporte.",-1)),Te={for:"nacionalesId",class:"flex items-center cursor-pointer text-base font-medium text-[#07074D]"},$e={class:"mr-2"},ze={class:"relative"},Ue=c(()=>o("div",{class:"toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"},null,-1)),Re=c(()=>o("div",{class:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"},null,-1)),Fe={class:"mb-5"},Se=c(()=>o("label",{class:"mb-3 block text-base font-medium text-[#07074D]"}," Tipo de reservaci\xF3n? ",-1)),Ne={class:"flex items-center space-x-6"},Be={class:"flex items-center"},Ie=c(()=>o("label",{for:"radioButton1",class:"pl-3 text-base font-medium text-[#07074D]"}," Entrada ",-1)),Ce={class:"flex items-center"},De=c(()=>o("label",{for:"radioButton2",class:"pl-3 text-base font-medium text-[#07074D]"}," Tour ",-1)),He={class:"flex items-center"},je=c(()=>o("label",{for:"radioButton3",class:"pl-3 text-base font-medium text-[#07074D]"}," Paquete ",-1)),qe={key:1,class:"-mx-3 flex flex-wrap"},Me={class:"w-full px-3"},Qe={class:"mb-5"},Ze={key:0,class:"text-red-500"},Ee={class:"-mx-3 flex flex-wrap"},Le={class:"w-full px-3"},Oe={class:"mb-5"},Ge={class:"flex flex-wrap justify-between"},Je={class:"mb-5 w-28"},Ke={class:"mb-5 w-28"},We=c(()=>o("br",null,null,-1)),Xe=c(()=>o("br",null,null,-1)),Ye={class:"mb-5 w-28"},et={key:2,class:"-mx-3 flex flex-wrap"},tt={class:"w-full px-3"},ot={class:"mb-5"},st=c(()=>o("option",{value:"null",disabled:"",selected:""},"-- Seleccione un parque --",-1)),nt=["value"],lt={key:3,class:"-mx-3 flex flex-wrap"},at={class:"w-full px-3"},it={class:"mb-5"},rt=c(()=>o("label",{for:"fName",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),dt=c(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un tour --",-1)),ct=["value"],ut={key:4,class:"-mx-3 flex flex-wrap"},pt={class:"mb-5 w-28"},mt={key:5,class:"-mx-3 flex flex-wrap"},_t={class:"w-full px-3"},ft={class:"mb-5"},vt=c(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),ht=["value"],bt={key:6,class:"-mx-3 flex flex-wrap"},xt={class:"w-full px-3"},wt={key:0,class:"mb-5"},yt=c(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel --",-1)),gt=["value"],kt={key:7,class:"-mx-3 flex flex-wrap"},Vt={key:8,class:"-mx-3 flex flex-wrap"},Pt={class:"w-full px-3"},At={class:"mb-5"},Tt=c(()=>o("label",{for:"fName",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),$t=["onUpdate:modelValue"],zt=c(()=>o("option",{value:"null",selected:"",disabled:""}," -- Seleccione un tour -- ",-1)),Ut=["value"],Rt={class:"mb-5"},Ft={key:0,class:"text-red-500"},St={class:"mb-5"},Nt=["onUpdate:modelValue"],Bt=c(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),It=["value"],Ct={class:"mb-5"},Dt=["onInput","onFocusout","onUpdate:modelValue"],Ht=c(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel --",-1)),jt=["value"],qt={key:0,class:"mb-5"},Mt=c(()=>o("hr",null,null,-1)),Qt=c(()=>o("br",null,null,-1)),Zt={class:"-mx-3 flex flex-wrap"},Et={class:"w-full px-3"},Lt={class:"mb-5"},Ot=c(()=>o("button",{class:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Enviar Cotizaci\xF3n ",-1)),Gt={__name:"FormQuote",props:{parks:Array,zones:Array},setup(a){const m=a,t=E({fechaReservacion:new Date().toISOString().split("T")[0],fechaActividad:null,precioPublico:0,tipoReservacion:1,nacionales:!1,nombreTitular:"",importeVenta:0,pickUp:null,infantes:0,notas:null,adultos:1,menores:0,zona:null,season:"low",actividad:null}),k=()=>{n.resume.total.adults=t.adultos*n.prices.cost.adult,n.resume.total.minors=t.menores*n.prices.cost.minor,n.prices.totalPublicPrice=U(n.resume.total.adults,n.resume.total.minors),t.precioPublico=n.prices.totalPublicPrice,t.importeVenta=A().toFixed(2),n.prices.totalAgencyPrice=t.importeVenta,n.prices.reference=(n.prices.totalPublicPrice-n.prices.totalAgencyPrice).toFixed(2),console.log(n)},A=()=>n.prices.totalPublicPrice*((100-n.prices.profit.percentage)/100),D=async()=>{const b=await z(t.actividad,t.nacionales?4:5,t.season);n.prices.cost.adult=b.adult.amount,n.prices.cost.minor=b.minor.amount,k()},H=async(b,l,s)=>{const d=await z(b,l,s);n.prices.cost.adult=d.adult.amount,n.prices.cost.minor=d.minor.amount,k()};T(()=>{t.nacionales=t.tipoReservacion!=1?!1:t.nacionales}),T(()=>{t.season=se(t.fechaActividad)}),T(()=>{for(var b=[],l=n.nPackTours,s=0;s<l;s++)b.push({key:s+1,activity:null,zone:null,hotel:null,pickup:null,activity_date:null,public_price:null,agency_price:null});n.nTours=b});const j=async(b,l,s,d)=>{const R=await z(b,l,s);n.nTours[d].public_price=U(t.adultos*Number(R.adult.amount),t.menores*Number(R.minor.amount)),t.precioPublico=U(t.precioPublico,n.nTours[d].public_price),t.importeVenta+=t.precioPublico*((100-n.prices.profit.percentage)/100),console.log(n.nTours),console.log(t)},q=async(b,l)=>{var s;n.tour.pickup=(s=await C(b,l).then(d=>d.pickup_time))!=null?s:"00:00:00",t.actividad=n.tour,console.log("se ha a\xF1adido el pickup y seteado la actividad tour")};function M(){t.tipoReservacion==3&&(t.actividad=n.nTours),t.tipoReservacion=I(t.tipoReservacion)}function Q(){M(),t.post(route("quote.store")),location.reload()}return(b,l)=>(i(),r("div",null,[o("div",_e,[o("div",fe,[v(" Nueva reservaci\xF3n "),o("p",ve,"Fecha de hoy: "+p(e(le)),1)])]),u(K,{onSubmitted:Q},{title:_(()=>[he]),description:_(()=>[u(W,null,{header:_(()=>[v(" Precio al publico "+p(e(ae)(e(n).prices.totalPublicPrice)),1)]),content:_(()=>[o("p",be,"( Temporada "+p(e(t).season=="low"?"Baja":"Alta")+", Tarifa "+p(e(t).nacionales?"Nacional":"Internacional")+")",1),o("p",null,"A nombre de: "+p(e(t).nombreTitular),1),xe,o("p",null,"Adultos: "+p(`${e(t).adultos} x $${e(n).prices.cost.adult} = $${e(t).adultos*e(n).prices.cost.adult}`),1),o("p",null,"Menores: "+p(`${e(t).menores} x $${e(n).prices.cost.minor} = $${e(t).menores*e(n).prices.cost.minor}`),1),o("p",null,"Infantes: "+p(`${e(t).infantes}`)+" - no pagan",1),we,o("p",null,"Tipo de reserva: "+p(e(I)(e(t).tipoReservacion)),1),ye,o("p",null,"Precio sugerido al publico: $"+p(e(n).prices.totalPublicPrice),1),o("p",null,"Costo para la agencia: $"+p(e(n).prices.totalAgencyPrice),1)]),_:1})]),form:_(()=>[ge,o("div",ke,[o("div",Ve,[e(t).tipoReservacion==1?(i(),r("div",Pe,[Ae,o("label",Te,[o("span",$e,"Nacionales? "+p(e(t).nacionales?"Si":"No"),1),o("div",ze,[x(o("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>e(t).nacionales=s),id:"nacionalesId",type:"checkbox",class:"hidden"},null,512),[[L,e(t).nacionales]]),Ue,Re])])])):f("",!0),o("div",Fe,[Se,o("div",Ne,[o("div",Be,[x(o("input",{value:"1",type:"radio",name:"tipoReservacion",id:"radioButton1",checked:"",class:"h-5 w-5","onUpdate:modelValue":l[1]||(l[1]=s=>e(t).tipoReservacion=s)},null,512),[[$,e(t).tipoReservacion]]),Ie]),o("div",Ce,[x(o("input",{onClick:l[2]||(l[2]=()=>e(N)()),value:"2",type:"radio",name:"tipoReservacion",id:"radioButton2",class:"h-5 w-5","onUpdate:modelValue":l[3]||(l[3]=s=>e(t).tipoReservacion=s)},null,512),[[$,e(t).tipoReservacion]]),De]),o("div",He,[x(o("input",{onClick:l[4]||(l[4]=()=>e(N)()),value:"3",type:"radio",name:"tipoReservacion",id:"radioButton3",class:"h-5 w-5","onUpdate:modelValue":l[5]||(l[5]=s=>e(t).tipoReservacion=s)},null,512),[[$,e(t).tipoReservacion]]),je])])]),e(t).tipoReservacion?(i(),r("div",qe,[o("div",Me,[o("div",Qe,[u(h,{for:"fechaAvtidad"},{default:_(()=>[v(" Fecha de actividad "),e(t).errors.fechaActividad?(i(),r("span",Ze,"* Por favor llene este campo")):f("",!0)]),_:1}),u(S,{required:"",modelValue:e(t).fechaActividad,"onUpdate:modelValue":l[6]||(l[6]=s=>e(t).fechaActividad=s),"id-name":"fechaActividad"},null,8,["modelValue"])])])])):f("",!0),o("div",Ee,[o("div",Le,[o("div",Oe,[u(h,{for:"QuoteTitular"},{default:_(()=>[v(" Nombre del titular ")]),_:1}),u(F,{placeholder:"Aa",id:"QuoteTitular",name:"nombreTitular",modelValue:e(t).nombreTitular,"onUpdate:modelValue":l[7]||(l[7]=s=>e(t).nombreTitular=s)},null,8,["modelValue"])])])]),o("div",Ge,[o("div",Je,[u(h,{for:"adultos"},{default:_(()=>[v(" Adultos ")]),_:1}),u(V,{"id-name":"adultos",modelValue:e(t).adultos,"onUpdate:modelValue":l[8]||(l[8]=s=>e(t).adultos=s)},null,8,["modelValue"])]),o("div",Ke,[u(h,{for:"menores"},{default:_(()=>[v(" Menores ")]),_:1}),u(V,{"id-name":"menores",modelValue:e(t).menores,"onUpdate:modelValue":l[9]||(l[9]=s=>e(t).menores=s)},null,8,["modelValue"])]),We,Xe,o("div",Ye,[u(h,{for:"infantes"},{default:_(()=>[v(" Infantes ")]),_:1}),u(V,{"id-name":"infantes",modelValue:e(t).infantes,"onUpdate:modelValue":l[10]||(l[10]=s=>e(t).infantes=s)},null,8,["modelValue"])])]),e(t).tipoReservacion==1?(i(),r("div",et,[o("div",tt,[o("div",ot,[u(h,{for:"park"},{default:_(()=>[v(" Parque ")]),_:1}),x(o("select",{onChange:l[11]||(l[11]=s=>D()),"onUpdate:modelValue":l[12]||(l[12]=s=>e(t).actividad=s),id:"park",name:"parque",ref:"park",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[st,(i(!0),r(w,null,y(m.parks,s=>(i(),r("option",{class:"capitalize",value:s.id},p(s.name),9,nt))),256))],544),[[g,e(t).actividad]])])])])):f("",!0),e(t).tipoReservacion==2?(i(),r("div",lt,[o("div",at,[o("div",it,[rt,e(n).tours?x((i(),r("select",{key:0,"onUpdate:modelValue":l[13]||(l[13]=s=>e(n).tour.activity=s),name:"parque",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[dt,(i(!0),r(w,null,y(e(n).tours,s=>(i(),r("option",{class:"capitalize",value:s.id},p(s.name),9,ct))),256))],512)),[[g,e(n).tour.activity]]):f("",!0)])])])):f("",!0),e(t).tipoReservacion==3?(i(),r("div",ut,[o("div",pt,[u(h,{for:"number_of_activitys"},{default:_(()=>[v(" Numero de actividades ")]),_:1}),u(V,{modelValue:e(n).nPackTours,"onUpdate:modelValue":l[14]||(l[14]=s=>e(n).nPackTours=s),modelModifiers:{number:!0},"id-name":"number_of_activitys"},null,8,["modelValue"])])])):f("",!0),e(t).tipoReservacion==2?(i(),r("div",mt,[o("div",_t,[o("div",ft,[u(h,{for:"zone"},{default:_(()=>[v(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":l[15]||(l[15]=s=>e(t).zona=s),onChange:l[16]||(l[16]=s=>e(ee)(s.target.value)),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[vt,(i(!0),r(w,null,y(a.zones,s=>(i(),r("option",{value:s.id},p(s.name),9,ht))),256))],544),[[g,e(t).zona]])])])])):f("",!0),e(t).zona!==null&&e(t).tipoReservacion==2?(i(),r("div",bt,[o("div",xt,[e(n).tour.activity?(i(),r("div",wt,[u(h,{for:"pickUpZone"},{default:_(()=>[v(" Hotel del pickup ")]),_:1}),e(n).hotels?x((i(),r("select",{key:0,onInput:l[17]||(l[17]=s=>q(e(n).tour.activity,s.target.value)),onChange:l[18]||(l[18]=s=>H(e(n).tour.activity,e(t).zona,e(t).season)),"onUpdate:modelValue":l[19]||(l[19]=s=>e(n).tour.hotel=s),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[yt,Array.isArray(e(n).hotels)?(i(!0),r(w,{key:0},y(e(n).hotels,s=>(i(),r("option",{class:"capitalize",value:s.id},p(s.name),9,gt))),256)):f("",!0)],544)),[[g,e(n).tour.hotel]]):f("",!0)])):f("",!0)])])):f("",!0),e(t).tipoReservacion==2&&e(n).tour.pickup?(i(),r("div",kt,[u(me,{msg:e(n).tour.pickup=="00:00:00"?"Lo sentimos, por el momento no tenemos un pickup disponible, estamos trabajando en ello.":`Su pickup sera a las: ${e(n).tour.pickup.slice(0,5)} hrs. en el hotel especificado, procure tener al menos 15 minutos de antelaci\xF3n.`},null,8,["msg"])])):f("",!0),e(t).tipoReservacion==3&&e(n).nTours!=0?(i(),r("div",Vt,[(i(!0),r(w,null,y(e(n).nTours,s=>(i(),r("div",Pt,[o("h2",null,"Actividad "+p(s.key),1),o("div",At,[Tt,e(n).tours?x((i(),r("select",{key:0,"onUpdate:modelValue":d=>s.activity=d,name:"Activity",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[zt,(i(!0),r(w,null,y(e(n).tours,d=>(i(),r("option",{class:"capitalize",value:d.id},p(d.name),9,Ut))),256))],8,$t)),[[g,s.activity]]):f("",!0)]),o("div",Rt,[u(h,{for:"fechaAvtidad"+s.key},{default:_(()=>[v(" Fecha de actividad "),e(t).errors.fechaActividad?(i(),r("span",Ft,"* Por favor llene este campo")):f("",!0)]),_:2},1032,["for"]),u(S,{required:"",modelValue:s.activity_date,"onUpdate:modelValue":d=>s.activity_date=d,"id-name":"fechaActividad"+s.key},null,8,["modelValue","onUpdate:modelValue","id-name"])]),o("div",St,[u(h,{for:"zone"},{default:_(()=>[v(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":d=>s.zone=d,onInput:l[20]||(l[20]=d=>e(ne)(d.target.value)),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Bt,(i(!0),r(w,null,y(a.zones,d=>(i(),r("option",{value:d.id},p(d.name),9,It))),256))],40,Nt),[[g,s.zone]])]),o("div",Ct,[u(h,{for:"pickUpZone"},{default:_(()=>[v(" Hotel del pickup ")]),_:1}),e(n).hotels?x((i(),r("select",{key:0,onInput:d=>j(s.activity,s.zone,e(t).season,s.key-1),onFocusout:d=>e(oe)(s.key-1,s.activity,s.hotel),"onUpdate:modelValue":d=>s.hotel=d,name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Ht,e(n).hotels[e(B)(s.zone)]?(i(!0),r(w,{key:0},y(e(n).hotels[e(B)(s.zone)],d=>(i(),r("option",{class:"capitalize",value:d.id},p(d.name),9,jt))),256)):f("",!0)],40,Dt)),[[g,s.hotel]]):f("",!0)]),s.pickup?(i(),r("div",qt,[u(h,null,{default:_(()=>[v(" Hora de su pickup ")]),_:1}),u(F,{disabled:"","aria-disabled":"true",value:s.pickup.slice(0,5)},null,8,["value"])])):f("",!0),Mt,Qt]))),256))])):f("",!0),o("div",Zt,[o("div",Et,[o("div",Lt,[u(h,{for:"notes"},{default:_(()=>[v(" Notas ")]),_:1}),x(o("textarea",{"onUpdate:modelValue":l[21]||(l[21]=s=>e(t).notas=s),class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",name:"note",id:"notes",cols:"30",rows:"10"},null,512),[[O,e(t).notas]])])])])])])]),actions:_(()=>[Ot]),_:1})]))}},no=X(Gt,[["__scopeId","data-v-34ca76c3"]]);export{no as default};