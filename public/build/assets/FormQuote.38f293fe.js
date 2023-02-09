import{D as X,j as B,u as Y,P,o as l,d as r,a as s,f as b,t as m,g as o,b as p,w as _,v as x,A as ee,e as v,Q as z,J as k,F as y,h as w,x as oe,E as te,R as se,S as ne}from"./app.888ab847.js";import{_ as ie}from"./FormSection.f9c52f48.js";import V from"./InputNumber.8ed75914.js";import h from"./InputLabel.727736ad.js";import ae from"./InputText.56636cd5.js";import le from"./Summary.757de283.js";import{_ as D}from"./Alert.cfa9e401.js";import I from"./InputDate.3b94ca57.js";import{_ as re}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.681e7add.js";const t=X({season:"low",hotels:{cancun:null,pdc:null,rm:null},cancunHotels:null,rmHotels:null,tours:[],nPackTours:2,nTours:[],tour:{activity:0,pickup:null,hotel:null},resume:{total:{adults:0,minors:0}},prices:{totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:5,amount:0}}}),de=async(a,f=null)=>await(await fetch(a,f)).json(),H=async()=>{const a=await fetch(route("tours"));t.tours=await a.json()},A=async a=>await de(route("hotels",{zone:a})),ue=async a=>t.hotels=await A(a),ce=async(a,f)=>await(await fetch(route("nd.pickup.get",{activity:a,hotel:f}))).json(),Z=async(a,f)=>await ce(a,f),pe=async(a,f,e)=>{var g;if(!f||!e)return console.warn(`acticity( ${f} )  or hotel( ${e} ) invalid:`),"00:00:00";t.nTours[a].pickup=(g=await Z(f,e).then(T=>T.pickup_time))!=null?g:"00:00:00"},me=a=>["2022-12-26","2022-12-27","2022-12-28","2022-12-29","2022-12-30","2022-12-31"].includes(a)?"high":"low",R=async(a,f,e)=>await(await fetch(route("prices",{activity:a,zone:f,season:e}))).json(),fe=async a=>a==1&&!t.hotels.cancun?(t.hotels.cancun=[...await A(1)],t):a==1&&t.hotels.cancun?t:a==2&&!t.hotels.rm?(t.hotels.rm=[...await A(2)],t):a==2&&t.hotels.rm?t:a==3&&!t.hotels.pdc?(t.hotels.pdc=[...await A(3)],t):(a==3&&t.hotels.pdc,t),j=a=>({1:"cancun",2:"rm",3:"pdc"})[a],_e=new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),q=a=>{var e;return(e=["no especificada","entrada","tour","paquete"][a])!=null?e:"invalida"},Q=(a,f)=>Number(Number(a)+Number(f)).toFixed(2),ve=a=>a>0?"$"+a:"";const u=a=>(se("data-v-61f46d54"),a=a(),ne(),a),be={class:"p-6 sm:px-20 bg-white border-b border-gray-200"},he={class:"mt-4 text-2xl text-center"},xe={class:"text-lg"},ye=u(()=>s("div",{class:"md:mx-14 md:my-10 font-bold"},"Resumen de la reserva.",-1)),we={class:"mb-4"},ge=u(()=>s("br",null,null,-1)),ke=u(()=>s("br",null,null,-1)),Pe=u(()=>s("br",null,null,-1)),Ve=u(()=>s("div",{class:"col-span-6"},[s("div",{class:"max-w-xl text-sm text-gray-600"}," Por favor llene el siguiente formulario para poder realizar su cotizaci\xF3n. ")],-1)),Ae={class:"flex items-center justify-center px-12 pt-4 col-span-6 sm:col-span-4"},Te={class:"mx-auto w-full max-w-[550px]"},$e={key:0,class:"mb-5"},ze=u(()=>s("small",{class:"text-gray-400"},"Descuento para mexicanos, presentar INE o pasaporte.",-1)),Re={for:"nacionalesId",class:"flex items-center cursor-pointer text-base font-medium text-[#07074D]"},Ue={class:"mr-2"},Se={class:"relative"},Fe=u(()=>s("div",{class:"toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"},null,-1)),Ne=u(()=>s("div",{class:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"},null,-1)),Ce={class:"mb-5"},Be=u(()=>s("label",{class:"mb-3 block text-base font-medium text-[#07074D]"}," Tipo de reservaci\xF3n? ",-1)),De={class:"flex items-center space-x-6"},Ie={class:"flex items-center"},He=u(()=>s("label",{for:"radioButton1",class:"pl-3 text-base font-medium text-[#07074D]"}," Entrada ",-1)),je={class:"flex items-center"},qe=u(()=>s("label",{for:"radioButton2",class:"pl-3 text-base font-medium text-[#07074D]"}," Tour ",-1)),Qe={class:"flex items-center"},Ze=u(()=>s("label",{for:"radioButton3",class:"pl-3 text-base font-medium text-[#07074D]"}," Paquete ",-1)),Ee={key:1,class:"-mx-3 flex flex-wrap"},Me={class:"w-full px-3"},Le={class:"mb-5"},Oe={key:0,class:"text-red-500"},Ge={class:"-mx-3 flex flex-wrap"},Je={class:"w-full px-3"},Ke={class:"mb-5"},We={class:"flex flex-wrap justify-between"},Xe={class:"mb-5 w-28"},Ye={class:"mb-5 w-28"},eo=u(()=>s("br",null,null,-1)),oo=u(()=>s("br",null,null,-1)),to={class:"mb-5 w-28"},so={key:2,class:"-mx-3 flex flex-wrap"},no={class:"w-full px-3"},io={class:"mb-5"},ao=u(()=>s("option",{value:"null",disabled:"",selected:""},"-- Seleccione un parque --",-1)),lo=["value"],ro={key:3,class:"-mx-3 flex flex-wrap"},uo={class:"w-full px-3"},co={class:"mb-5"},po=u(()=>s("label",{for:"fName",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),mo=u(()=>s("option",{value:"null",selected:"",disabled:""},"-- Seleccione un tour --",-1)),fo=["value"],_o={key:4,class:"-mx-3 flex flex-wrap"},vo={class:"mb-5 w-28"},bo={key:5,class:"-mx-3 flex flex-wrap"},ho={class:"w-full px-3"},xo={class:"mb-5"},yo=u(()=>s("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),wo=["value"],go={key:6,class:"-mx-3 flex flex-wrap"},ko={class:"w-full px-3"},Po={key:0,class:"mb-5"},Vo=u(()=>s("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel --",-1)),Ao=["value"],To={key:7,class:"-mx-3 flex flex-wrap"},$o={key:8,class:"-mx-3 flex flex-wrap"},zo={class:"w-full px-3"},Ro={class:"mb-5"},Uo=u(()=>s("label",{for:"fName",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),So=["onUpdate:modelValue","onChange"],Fo=u(()=>s("option",{value:"null",selected:"",disabled:""}," -- Seleccione un tour -- ",-1)),No=["value"],Co={class:"mb-5"},Bo={key:0,class:"text-red-500"},Do={class:"mb-5"},Io=["onUpdate:modelValue"],Ho=u(()=>s("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),jo=["value"],qo={class:"mb-5"},Qo=["onUpdate:modelValue","onChange"],Zo=u(()=>s("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel --",-1)),Eo=["value"],Mo={key:0,class:"mb-5"},Lo=u(()=>s("hr",null,null,-1)),Oo=u(()=>s("br",null,null,-1)),Go={class:"-mx-3 flex flex-wrap"},Jo={class:"w-full px-3"},Ko={class:"mb-5"},Wo=u(()=>s("button",{class:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Guardar Cotizaci\xF3n ",-1)),Xo={__name:"FormQuote",props:{parks:Array,zones:Array},setup(a){const f=a;t.prices.profit.percentage=B().props.value.user.current_team.sale_amount_percentage;const e=Y({fechaReservacion:new Date().toISOString().split("T")[0],fechaActividad:null,precioPublico:0,tipoReservacion:1,nacionales:!1,nombreTitular:"",importeVenta:0,pickUp:null,infantes:0,notas:null,adultos:1,menores:0,zona:null,season:"low",actividad:null}),g=()=>{t.resume.total.adults=e.adultos*t.prices.cost.adult,t.resume.total.minors=e.menores*t.prices.cost.minor,t.prices.totalPublicPrice=Q(t.resume.total.adults,t.resume.total.minors),e.precioPublico=t.prices.totalPublicPrice,e.importeVenta=T().toFixed(2),t.prices.totalAgencyPrice=e.importeVenta,t.prices.reference=(t.prices.totalPublicPrice-t.prices.totalAgencyPrice).toFixed(2),console.log(t)},T=()=>t.prices.totalPublicPrice*((100-t.prices.profit.percentage)/100),U=async()=>{const c=await R(e.actividad,e.nacionales?4:5,e.season);t.prices.cost.adult=c.adult.amount,t.prices.cost.minor=c.minor.amount,g()},S=async(c,i,n)=>{const d=await R(c,i,n);t.prices.cost.adult=d.adult.amount,t.prices.cost.minor=d.minor.amount,g()};P(()=>{e.season=me(e.fechaActividad),e.actividad&&g()}),P(()=>(e.actividad&&e.tipoReservacion==1&&U(),e.actividad&&e.tipoReservacion==2&&S(t.tour.activity,e.zona,e.season),t.nTours.length>0&&e.tipoReservacion==3&&t.nTours.forEach(c=>{$(c)}),[e.adultos,e.menores])),P(()=>{e.nacionales=e.tipoReservacion!=1?!1:e.nacionales}),P(()=>(F(),[e.tipoReservacion,t.nTours])),P(()=>{for(var c=[],i=t.nPackTours,n=0;n<i;n++)c.push({key:n+1,activity:null,zone:null,hotel:null,pickup:null,activity_date:null,public_price:0,agency_price:0});t.nTours=c});const E=async(c,i,n,d)=>{const C=await R(c,i,n);t.nTours[d].public_price=Q(e.adultos*Number(C.adult.amount),e.menores*Number(C.minor.amount)),e.precioPublico=t.prices.totalPublicPrice=t.nTours.reduce((K,{public_price:W})=>K+Number(W),0),e.importeVenta=N(e.precioPublico),console.group(),console.log("Quote"),console.info(t.nTours),console.log("Form"),console.table(e),console.groupEnd()},M=async(c,i)=>{var n;t.tour.pickup=(n=await Z(c,i).then(d=>d.pickup_time))!=null?n:"00:00:00",e.actividad=t.tour,console.log("se ha a\xF1adido el pickup y seteado la actividad tour")};function L(){e.tipoReservacion==3&&(e.actividad=t.nTours),e.tipoReservacion=q(e.tipoReservacion),F()}function O(){L(),e.post(route("quote.store")),location.reload()}function F(){t.prices={totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:B().props.value.user.current_team.sale_amount_percentage,amount:0}}}function G(){location.reload()}function N(c,i=5){return Number(c*((100-i)/100)).toFixed(2)}function J(){return alert("Lo sentimos actualmente no tenemos pickups disponibles"),"Lo sentimos, por el momento no tenemos un pickup disponible, porfavor pongase en contacto con uno de nuestros agentes al: 998-168-9378."}function $(c){if(!c.activity||!c.zone)return null;e.precioPublico=0,E(c.activity,c.zone,e.season,c.key-1),pe(c.key-1,c.activity,c.hotel)}return(c,i)=>(l(),r("div",null,[s("div",be,[s("div",he,[b(" Nueva reservaci\xF3n "),s("p",xe,"Fecha de hoy: "+m(o(_e)),1)])]),p(ie,{onSubmitted:O},{title:_(()=>[ye]),description:_(()=>[p(le,null,{header:_(()=>[b(" Precio al publico "+m(o(ve)(o(t).prices.totalPublicPrice)),1)]),content:_(()=>[s("p",we,"( Temporada "+m(o(e).season=="low"?"Baja":"Alta")+", Tarifa "+m(o(e).nacionales?"Nacional":"Internacional")+")",1),s("p",null,"A nombre de: "+m(o(e).nombreTitular),1),ge,s("p",null,"Adultos: "+m(`${o(e).adultos} x $${o(t).prices.cost.adult} = $${o(e).adultos*o(t).prices.cost.adult}`),1),s("p",null,"Menores: "+m(`${o(e).menores} x $${o(t).prices.cost.minor} = $${o(e).menores*o(t).prices.cost.minor}`),1),s("p",null,"Infantes: "+m(`${o(e).infantes}`)+" - no pagan",1),ke,s("p",null,"Tipo de reserva: "+m(o(q)(o(e).tipoReservacion)),1),Pe,s("p",null,"Precio sugerido al publico: $"+m(o(t).prices.totalPublicPrice),1),s("p",null,"Precio Publico con el descuento: $"+m(o(t).prices.totalAgencyPrice),1)]),_:1})]),form:_(()=>[Ve,s("div",Ae,[s("div",Te,[o(e).tipoReservacion==1?(l(),r("div",$e,[ze,s("label",Re,[s("span",Ue,"Nacionales? "+m(o(e).nacionales?"Si":"No"),1),s("div",Se,[x(s("input",{"onUpdate:modelValue":i[0]||(i[0]=n=>o(e).nacionales=n),id:"nacionalesId",type:"checkbox",class:"hidden"},null,512),[[ee,o(e).nacionales]]),Fe,Ne])])])):v("",!0),s("div",Ce,[Be,s("div",De,[s("div",Ie,[x(s("input",{value:"1",type:"radio",name:"tipoReservacion",id:"radioButton1",checked:"",class:"h-5 w-5","onUpdate:modelValue":i[1]||(i[1]=n=>o(e).tipoReservacion=n)},null,512),[[z,o(e).tipoReservacion]]),He]),s("div",je,[x(s("input",{onClick:i[2]||(i[2]=()=>o(H)()),value:"2",type:"radio",name:"tipoReservacion",id:"radioButton2",class:"h-5 w-5","onUpdate:modelValue":i[3]||(i[3]=n=>o(e).tipoReservacion=n)},null,512),[[z,o(e).tipoReservacion]]),qe]),s("div",Qe,[x(s("input",{onClick:i[4]||(i[4]=()=>o(H)()),value:"3",type:"radio",name:"tipoReservacion",id:"radioButton3",class:"h-5 w-5","onUpdate:modelValue":i[5]||(i[5]=n=>o(e).tipoReservacion=n)},null,512),[[z,o(e).tipoReservacion]]),Ze])])]),o(e).tipoReservacion?(l(),r("div",Ee,[s("div",Me,[s("div",Le,[p(h,{for:"fechaAvtidad"},{default:_(()=>[b(" Fecha de actividad "),o(e).errors.fechaActividad?(l(),r("span",Oe,"* Por favor llene este campo")):v("",!0)]),_:1}),p(I,{required:"",modelValue:o(e).fechaActividad,"onUpdate:modelValue":i[6]||(i[6]=n=>o(e).fechaActividad=n),min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"},null,8,["modelValue","min"])])])])):v("",!0),s("div",Ge,[s("div",Je,[s("div",Ke,[p(h,{for:"QuoteTitular"},{default:_(()=>[b(" Nombre del titular ")]),_:1}),p(ae,{placeholder:"Aa",id:"QuoteTitular",name:"nombreTitular",modelValue:o(e).nombreTitular,"onUpdate:modelValue":i[7]||(i[7]=n=>o(e).nombreTitular=n)},null,8,["modelValue"])])])]),s("div",We,[s("div",Xe,[p(h,{for:"adultos"},{default:_(()=>[b(" Adultos ")]),_:1}),p(V,{"id-name":"adultos",modelValue:o(e).adultos,"onUpdate:modelValue":i[8]||(i[8]=n=>o(e).adultos=n)},null,8,["modelValue"])]),s("div",Ye,[p(h,{for:"menores"},{default:_(()=>[b(" Menores ")]),_:1}),p(V,{"id-name":"menores",modelValue:o(e).menores,"onUpdate:modelValue":i[9]||(i[9]=n=>o(e).menores=n)},null,8,["modelValue"])]),eo,oo,s("div",to,[p(h,{for:"infantes"},{default:_(()=>[b(" Infantes ")]),_:1}),p(V,{"id-name":"infantes",modelValue:o(e).infantes,"onUpdate:modelValue":i[10]||(i[10]=n=>o(e).infantes=n)},null,8,["modelValue"])])]),o(e).tipoReservacion==1?(l(),r("div",so,[s("div",no,[s("div",io,[p(h,{for:"park"},{default:_(()=>[b(" Parque ")]),_:1}),x(s("select",{onChange:i[11]||(i[11]=n=>U()),"onUpdate:modelValue":i[12]||(i[12]=n=>o(e).actividad=n),id:"park",name:"parque",ref:"park",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[ao,(l(!0),r(y,null,w(f.parks,n=>(l(),r("option",{class:"capitalize",value:n.id},m(n.name),9,lo))),256))],544),[[k,o(e).actividad]])])])])):v("",!0),o(e).tipoReservacion==2?(l(),r("div",ro,[s("div",uo,[s("div",co,[po,o(t).tours?x((l(),r("select",{key:0,"onUpdate:modelValue":i[13]||(i[13]=n=>o(t).tour.activity=n),name:"parque",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[mo,(l(!0),r(y,null,w(o(t).tours,n=>(l(),r("option",{class:"capitalize",value:n.id},m(n.name),9,fo))),256))],512)),[[k,o(t).tour.activity]]):v("",!0)])])])):v("",!0),o(e).tipoReservacion==3?(l(),r("div",_o,[s("div",vo,[p(h,{for:"number_of_activitys"},{default:_(()=>[b(" Numero de actividades ")]),_:1}),p(V,{modelValue:o(t).nPackTours,"onUpdate:modelValue":i[14]||(i[14]=n=>o(t).nPackTours=n),modelModifiers:{number:!0},min:"2","id-name":"number_of_activitys"},null,8,["modelValue"])])])):v("",!0),o(e).tipoReservacion==2?(l(),r("div",bo,[s("div",ho,[s("div",xo,[p(h,{for:"zone"},{default:_(()=>[b(" Zona ")]),_:1}),x(s("select",{"onUpdate:modelValue":i[15]||(i[15]=n=>o(e).zona=n),onChange:i[16]||(i[16]=n=>o(ue)(n.target.value)),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[yo,(l(!0),r(y,null,w(a.zones,n=>(l(),r("option",{value:n.id},m(n.name),9,wo))),256))],544),[[k,o(e).zona]])])])])):v("",!0),o(e).zona!==null&&o(e).tipoReservacion==2?(l(),r("div",go,[s("div",ko,[o(t).tour.activity?(l(),r("div",Po,[p(h,{for:"pickUpZone"},{default:_(()=>[b(" Hotel del pickup ")]),_:1}),o(t).hotels?x((l(),r("select",{key:0,onInput:i[17]||(i[17]=n=>M(o(t).tour.activity,n.target.value)),onChange:i[18]||(i[18]=n=>S(o(t).tour.activity,o(e).zona,o(e).season)),"onUpdate:modelValue":i[19]||(i[19]=n=>o(t).tour.hotel=n),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Vo,Array.isArray(o(t).hotels)?(l(!0),r(y,{key:0},w(o(t).hotels,n=>(l(),r("option",{class:"capitalize",value:n.id},m(n.name),9,Ao))),256)):v("",!0)],544)),[[k,o(t).tour.hotel]]):v("",!0)])):v("",!0)])])):v("",!0),o(e).tipoReservacion==2&&o(t).tour.pickup?(l(),r("div",To,[p(D,{msg:o(t).tour.pickup=="00:00:00"?"Lo sentimos, por el momento no tenemos un pickup disponible, estamos trabajando en ello.":`Su pickup sera a las: ${o(t).tour.pickup.slice(0,5)} hrs. en el hotel especificado, procure tener al menos 15 minutos de antelaci\xF3n.`},null,8,["msg"])])):v("",!0),o(e).tipoReservacion==3&&o(t).nTours!=0?(l(),r("div",$o,[(l(!0),r(y,null,w(o(t).nTours,n=>(l(),r("div",zo,[s("h2",null,"Actividad "+m(n.key),1),s("div",Ro,[Uo,o(t).tours?x((l(),r("select",{key:0,"onUpdate:modelValue":d=>n.activity=d,onChange:d=>$(n),name:"Activity",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Fo,(l(!0),r(y,null,w(o(t).tours,d=>(l(),r("option",{class:"capitalize",value:d.id},m(d.name),9,No))),256))],40,So)),[[k,n.activity]]):v("",!0)]),s("div",Co,[p(h,{for:"fechaAvtidad"+n.key},{default:_(()=>[b(" Fecha de actividad "),o(e).errors.fechaActividad?(l(),r("span",Bo,"* Por favor llene este campo")):v("",!0)]),_:2},1032,["for"]),p(I,{required:"",modelValue:n.activity_date,"onUpdate:modelValue":d=>n.activity_date=d,min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"+n.key},null,8,["modelValue","onUpdate:modelValue","min","id-name"])]),s("div",Do,[p(h,{for:"zone"},{default:_(()=>[b(" Zona ")]),_:1}),x(s("select",{"onUpdate:modelValue":d=>n.zone=d,onInput:i[20]||(i[20]=d=>o(fe)(d.target.value)),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Ho,(l(!0),r(y,null,w(a.zones,d=>(l(),r("option",{value:d.id},m(d.name),9,jo))),256))],40,Io),[[k,n.zone]])]),s("div",qo,[p(h,{for:"pickUpZone"},{default:_(()=>[b(" Hotel del pickup ")]),_:1}),x(s("select",{"onUpdate:modelValue":d=>n.hotel=d,onChange:d=>$(n),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Zo,o(t).hotels[o(j)(n.zone)]?(l(!0),r(y,{key:0},w(o(t).hotels[o(j)(n.zone)],d=>(l(),r("option",{class:"capitalize",value:d.id},m(d.name),9,Eo))),256)):v("",!0)],40,Qo),[[k,n.hotel],[oe,o(t).hotels]])]),n.pickup?(l(),r("div",Mo,[p(D,{msg:n.pickup=="00:00:00"?J():`Su pickup sera a las: ${n.pickup.slice(0,5)}.
 Precio publico de la actividad ${n.key}: $${n.public_price}, su precio de agencia: ${N(n.public_price)}`},null,8,["msg"])])):v("",!0),Lo,Oo]))),256))])):v("",!0),s("div",Go,[s("div",Jo,[s("div",Ko,[p(h,{for:"notes"},{default:_(()=>[b(" Notas ")]),_:1}),x(s("textarea",{"onUpdate:modelValue":i[21]||(i[21]=n=>o(e).notas=n),class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",name:"note",id:"notes",cols:"30",rows:"10"},null,512),[[te,o(e).notas]])])])])])])]),actions:_(()=>[s("button",{type:"button",onClick:i[22]||(i[22]=n=>G()),class:"hover:shadow-form rounded-md mr-16 bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Reiniciar Cotizaci\xF3n "),Wo]),_:1})]))}},dt=re(Xo,[["__scopeId","data-v-61f46d54"]]);export{dt as default};
