var te=Object.defineProperty;var oe=(n,a,e)=>a in n?te(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var P=(n,a,e)=>(oe(n,typeof a!="symbol"?a+"":a,e),e);import{D as M,o as c,d as u,t as v,j as B,u as se,P as T,a as o,f as b,g as i,b as m,w as _,v as x,A as ie,e as h,Q as $,K as A,F as w,h as k,E as ae,R as ne,S as le}from"./app.d2e247bb.js";import{_ as re}from"./FormSection.d58522d8.js";import L from"./InputNumber.c2a27950.js";import g from"./InputLabel.b5c7a764.js";import ce from"./InputText.b41c79ac.js";import ue from"./Summary.f0e244ba.js";import{_ as H}from"./Alert.58ca8a4d.js";import D from"./InputDate.cd3313c7.js";import de from"./ShowCosts.4404137f.js";import{_ as pe}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.944eed67.js";import"./Button.d58f3abd.js";const r=M({season:"low",hotels:{cancun:null,pdc:null,rm:null},cancunHotels:null,rmHotels:null,tours:[],nPackTours:2,nTours:[],tour:{activity:0,pickup:null,hotel:null},resume:{total:{adults:0,minors:0}},prices:{totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:5,amount:0}}}),S=async(n,a=null,e)=>{try{return await(await fetch(n,a)).json()}catch{alert("Error al cargar los datos, por favor recargue la pagina")}finally{e&&e()}},Z=async()=>{r.tours=await S(route("tours"))},R=async n=>await S(route("hotels",{zone:n})),me=async(n,a)=>await S(route("nd.pickup.get",{activity:n,hotel:a})),fe=n=>["2022-12-26","2022-12-27","2022-12-28","2022-12-29","2022-12-30","2022-12-31"].includes(n)?"high":"low",I=async(n,a,e)=>await S(route("prices",{activity:n,zone:a,season:e})),ve=async(n,a={})=>n==1&&!a.cancun?(a.cancun=[...await R(1)],a):n==1&&a.cancun?a:n==2&&!a.rm?(a.rm=[...await R(2)],a):n==2&&a.rm?a:n==3&&!a.pdc?(a.pdc=[...await R(3)],a):(n==3&&a.pdc,a),V=n=>({1:"cancun",2:"rm",3:"pdc"})[n],_e=new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),U=n=>{var e;return(e=["no especificada","entrance","tour","pack"][n])!=null?e:"invalida"},q=(n,a)=>Number(Number(n)+Number(a)).toFixed(2),he=n=>n>0?"$"+n:"",be={class:"text-red-500 text-sm font-bold"},N={__name:"TextError",props:{message:String},setup(n){return(a,e)=>(c(),u("span",be,v(n.message),1))}};const f=n=>(ne("data-v-5b7e9fc6"),n=n(),le(),n),ye={class:"p-6 sm:px-20 bg-white border-b border-gray-200"},ge={class:"mt-4 text-2xl text-center"},xe={class:"text-lg"},we=f(()=>o("div",{class:"md:mx-14 md:my-10 font-bold"},"Resumen de la reserva.",-1)),ke={class:"mb-4"},Pe=f(()=>o("br",null,null,-1)),Ae=f(()=>o("br",null,null,-1)),Te=f(()=>o("br",null,null,-1)),Ve=f(()=>o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600"}," Por favor llene el siguiente formulario para poder realizar su cotizaci\xF3n. ")],-1)),ze={class:"flex items-center justify-center px-12 pt-4 col-span-6 sm:col-span-4"},Fe={class:"mx-auto w-full max-w-[550px]"},Le={key:0,class:"mb-5"},Se=f(()=>o("small",{class:"text-gray-400"},"Descuento para mexicanos, presentar INE o pasaporte.",-1)),$e={for:"nacionalesId",class:"flex items-center cursor-pointer text-base font-medium text-[#07074D]"},Re={class:"mr-2"},Ue={class:"relative"},Ne=f(()=>o("div",{class:"toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"},null,-1)),Ce=f(()=>o("div",{class:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"},null,-1)),Be={class:"mb-5"},He=f(()=>o("label",{class:"mb-3 block text-base font-medium text-[#07074D]"}," Tipo de reservaci\xF3n? ",-1)),De={class:"flex items-center space-x-6"},Ze={class:"flex items-center"},Ie=f(()=>o("label",{for:"radioButton1",class:"pl-3 text-base font-medium text-[#07074D]"}," Entrada ",-1)),qe={class:"flex items-center"},Me=f(()=>o("label",{for:"radioButton2",class:"pl-3 text-base font-medium text-[#07074D]"}," Tour ",-1)),Ee={class:"flex items-center"},Qe=f(()=>o("label",{for:"radioButton3",class:"pl-3 text-base font-medium text-[#07074D]"}," Paquete ",-1)),je={key:1,class:"-mx-3 flex flex-wrap"},Oe={class:"w-full px-3"},Ge={class:"mb-5"},Ke={key:0,class:"text-red-500"},Je={class:"-mx-3 flex flex-wrap"},We={class:"w-full px-3"},Xe={class:"mb-5"},Ye={class:"flex flex-wrap justify-between"},et={class:"mb-5 w-28"},tt={class:"mb-5 w-28"},ot=f(()=>o("br",null,null,-1)),st=f(()=>o("br",null,null,-1)),it={class:"mb-5 w-28"},at={key:2,class:"-mx-3 flex flex-wrap"},nt={class:"w-full px-3"},lt={class:"mb-5"},rt=f(()=>o("option",{value:"null",disabled:"",selected:""},"-- Seleccione un parque --",-1)),ct=["value"],ut={key:3,class:"-mx-3 flex flex-wrap"},dt={class:"w-full px-3"},pt={class:"mb-5"},mt=f(()=>o("label",{for:"parque",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),ft=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un tour --",-1)),vt=["value"],_t={key:0,class:"w-full px-3"},ht={class:"mb-5"},bt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),yt=["value"],gt={class:"w-full px-3"},xt={key:0,class:"mb-5"},wt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel para su pickup --",-1)),kt=["value"],Pt={key:1,class:"-mx-3 flex flex-wrap"},At={key:4,class:"-mx-3 flex flex-wrap"},Tt={class:"mb-5 w-28"},Vt={key:5,class:"-mx-3 flex flex-wrap"},zt={class:"w-full px-3"},Ft={class:"mb-5"},Lt=f(()=>o("label",{for:"fName",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),St=["onUpdate:modelValue","onChange"],$t=f(()=>o("option",{value:"null",selected:"",disabled:""}," -- Seleccione un tour -- ",-1)),Rt=["value"],Ut={class:"mb-5"},Nt={key:0,class:"text-red-500"},Ct={class:"mb-5"},Bt=["onUpdate:modelValue"],Ht=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),Dt=["value"],Zt={class:"mb-5"},It=["onUpdate:modelValue","onChange"],qt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel --",-1)),Mt=["value"],Et={key:0,class:"mb-5"},Qt=f(()=>o("hr",null,null,-1)),jt=f(()=>o("br",null,null,-1)),Ot={class:"-mx-3 flex flex-wrap"},Gt={class:"w-full px-3"},Kt={class:"mb-5"},Jt=f(()=>o("button",{class:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Guardar Cotizaci\xF3n ",-1)),Wt={__name:"CreateFormQuote",props:{parks:Array,zones:Array,errors:Object},setup(n){const a=n;r.prices.profit.percentage=B().props.value.user.current_team.sale_amount_percentage;const e=se({fechaReservacion:new Date().toISOString().split("T")[0],fechaActividad:null,precioPublico:0,tipoReservacion:1,nacionales:!1,nombreTitular:"",importeVenta:0,pickUp:null,infantes:0,notas:null,adultos:1,menores:0,zona:5,season:"low",actividad:null}),z=()=>{r.resume.total.adults=e.adultos*r.prices.cost.adult,r.resume.total.minors=e.menores*r.prices.cost.minor,r.prices.totalPublicPrice=q(r.resume.total.adults,r.resume.total.minors),e.precioPublico=r.prices.totalPublicPrice,e.importeVenta=E().toFixed(2),r.prices.totalAgencyPrice=e.importeVenta,r.prices.reference=(r.prices.totalPublicPrice-r.prices.totalAgencyPrice).toFixed(2),console.log(r)},E=()=>r.prices.totalPublicPrice*((100-r.prices.profit.percentage)/100),C=async()=>{const y=await I(e.actividad,e.nacionales?4:5,e.season);r.prices.cost.adult=y.adult.amount,r.prices.cost.minor=y.minor.amount,z()};T(()=>{e.season=fe(e.fechaActividad),e.actividad&&z()}),T(()=>(e.tipoReservacion==3&&d.activityList.length==0&&d.setMinTourPackage(),e.actividad&&e.tipoReservacion==1&&C(),[e.adultos,e.menores])),T(()=>{e.nacionales=e.tipoReservacion!=1?!1:e.nacionales}),T(()=>(F(),[e.tipoReservacion])),T(()=>{const y=[],t=r.nPackTours;for(let l=0;l<t;l++)y.push({key:l+1,activity:null,zone:null,hotel:null,pickup:null,activity_date:null,public_price:0,agency_price:0});r.nTours=y});function Q(){e.tipoReservacion!=1&&(e.actividad=d.activityList,e.precioPublico=d.calculatePublicPrice()),e.tipoReservacion=U(e.tipoReservacion),F()}function j(){Q(),e.post(route("quoter.store"),{preserveScroll:!0,onSuccess:y=>{console.log(y),Swal.fire("Nueva cotizacion generada","Hemos guardado la cotizacion","success").then(function(){location.reload()})},onError:y=>{Swal.fire("Ups! Algo salio mal","No hemos podido guardar la cotizacion, por favor intenta de nuevo.","error").then(function(){location.reload()}),console.log(y)}}),a.errors&&console.log(a.errors)}function F(){r.prices={totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:B().props.value.user.current_team.sale_amount_percentage,amount:0}}}function O(){location.reload()}function G(y,t=5){return Number(y*((100-t)/100)).toFixed(2)}function K(){return alert("Lo sentimos actualmente no tenemos pickups disponibles"),"Lo sentimos, por el momento no tenemos un pickup disponible, porfavor pongase en contacto con uno de nuestros agentes al: 998-168-9378."}class J{constructor(){P(this,"activityList");P(this,"NumberOfActivities");P(this,"hotelList");P(this,"publicPrice");P(this,"minTourPackage");this.activityList=[],this.NumberOfActivities=1,this.hotelList={},this.publicPrice=0,this.minTourPackage=2}getFirstTour(t=0){var l;return(l=this.activityList[t])!=null?l:!1}setTour(t){this.getFirstTour()&&(this.activityList.pop(),F()),this.addActivity(1,t,e.season,1)}async setTourHotel(t,l=0){var s;this.activityList[l].hotel=t,this.activityList[l].pickup=(s=await me(this.activityList[l].activity,t).then(p=>p.pickup_time))!=null?s:"00:00:00",this.activityList[l].public_price=await this.getActivityPublicPrice(l),r.prices.totalPublicPrice=this.calculatePublicPrice()}async getActivityPublicPrice(t){var s;const l=(s=await I(this.activityList[t].activity,this.activityList[t].zone,e.season).then(p=>p))!=null?s:0;return q(e.adultos*Number(l.adult.amount),e.menores*Number(l.minor.amount))}setMinTourPackage(t=2){this.minTourPackage=t,this.resetActivities();for(let l=0;l<this.minTourPackage;l++)this.addActivity()}setActivity(t,l){this.activityList[t].activity=l}setActivityZone(t,l){this.activityList[t].zone=l}addActivity(t=this.activityList.length+1,l,s=e.season,p=null,W=null,X=null,Y=e.fechaActividad){const ee={key:t,activity:l,season:s,zone:p,hotel:W,pickup:X,activity_date:Y,type:U(e.tipoReservacion),adults:e.adultos,minors:e.menores,infants:e.infantes,public_price:0};this.activityList.push(ee)}resetActivities(){this.activityList=[],F()}async loadHotels(t){return this.hotelList=await ve(t,this.hotelList),this.hotelList}describe(){return console.log({length:this.activityList.length,"Number of tours":r.nPackTours,activities:this.activityList,hotels:this.hotelList})}calculatePublicPrice(){return this.activityList.reduce((t,{public_price:l})=>t+Number(l),0)}async applyAgencyCost(t){e.adultos*await this.getActivityPublicPrice(this.activityList[t].activity,e.zona,e.season).then(l=>l.adult.amount),e.menores*await this.getActivityPublicPrice(this.activityList[t].activity,e.zona,e.season).then(l=>l.minor.amount)}activityAt(t){if(t=Math.trunc(t)||0,t<0&&(t+=this.length),!(t<0||t>=this.length))return this.activityList[t]}async isHotelListByZoneLoaded(t){var l;return((l=this.hotelList[V(t)])==null?void 0:l.length)&&this.hotelList[V(t)].length>0||await this.loadHotels(t),!0}async getHotelListByZone(t){return await this.hotelList[V(t)]}}const d=M(new J);return(y,t)=>(c(),u("div",null,[o("div",ye,[o("div",ge,[b(" Nueva Cotizaci\xF3n "),o("p",xe,"Fecha de hoy: "+v(i(_e)),1)])]),m(re,{onSubmitted:j},{title:_(()=>[we]),description:_(()=>[m(ue,null,{header:_(()=>[b(" Precio al publico "+v(i(he)(i(r).prices.totalPublicPrice)),1)]),content:_(()=>[o("p",ke,"( Temporada "+v(i(e).season=="low"?"Baja":"Alta")+", Tarifa "+v(i(e).nacionales?"Nacional":"Internacional")+")",1),o("p",null,"A nombre de: "+v(i(e).nombreTitular),1),Pe,o("p",null,"Adultos: "+v(`${i(e).adultos} x $${i(r).prices.cost.adult} = $${i(e).adultos*i(r).prices.cost.adult}`),1),o("p",null,"Menores: "+v(`${i(e).menores} x $${i(r).prices.cost.minor} = $${i(e).menores*i(r).prices.cost.minor}`),1),o("p",null,"Infantes: "+v(`${i(e).infantes}`)+" - no pagan",1),Ae,o("p",null,"Tipo de reserva: "+v(i(U)(i(e).tipoReservacion)),1),Te,o("p",null,"Precio sugerido al publico: $"+v(i(r).prices.totalPublicPrice),1),o("p",null,"Precio Publico con el descuento: $"+v(i(r).prices.totalAgencyPrice),1)]),_:1}),m(de,{activities:d.activityList,class:"p-4"},null,8,["activities"])]),form:_(()=>{var l;return[Ve,o("div",ze,[o("div",Fe,[i(e).tipoReservacion==1?(c(),u("div",Le,[Se,o("label",$e,[o("span",Re,"Nacionales? "+v(i(e).nacionales?"Si":"No"),1),o("div",Ue,[x(o("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i(e).nacionales=s),id:"nacionalesId",type:"checkbox",class:"hidden"},null,512),[[ie,i(e).nacionales]]),Ne,Ce])])])):h("",!0),o("div",Be,[He,o("div",De,[o("div",Ze,[x(o("input",{value:"1",type:"radio",name:"tipoReservacion",id:"radioButton1",checked:"",class:"h-5 w-5","onUpdate:modelValue":t[1]||(t[1]=s=>i(e).tipoReservacion=s)},null,512),[[$,i(e).tipoReservacion]]),Ie]),o("div",qe,[x(o("input",{onClick:t[2]||(t[2]=()=>i(Z)()),value:"2",type:"radio",name:"tipoReservacion",id:"radioButton2",class:"h-5 w-5","onUpdate:modelValue":t[3]||(t[3]=s=>i(e).tipoReservacion=s)},null,512),[[$,i(e).tipoReservacion]]),Me]),o("div",Ee,[x(o("input",{onClick:t[4]||(t[4]=()=>i(Z)()),value:"3",type:"radio",name:"tipoReservacion",id:"radioButton3",class:"h-5 w-5","onUpdate:modelValue":t[5]||(t[5]=s=>i(e).tipoReservacion=s)},null,512),[[$,i(e).tipoReservacion]]),Qe])]),m(N,{message:a.errors.tipoReservacion},null,8,["message"])]),i(e).tipoReservacion?(c(),u("div",je,[o("div",Oe,[o("div",Ge,[m(g,{for:"fechaAvtidad"},{default:_(()=>[b(" Fecha de actividad "),i(e).errors.fechaActividad?(c(),u("span",Ke,"* Por favor llene este campo")):h("",!0)]),_:1}),m(D,{required:"",modelValue:i(e).fechaActividad,"onUpdate:modelValue":t[6]||(t[6]=s=>i(e).fechaActividad=s),min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"},null,8,["modelValue","min"])])])])):h("",!0),o("div",Je,[o("div",We,[o("div",Xe,[m(g,{for:"QuoteTitular"},{default:_(()=>[b(" Nombre del titular ")]),_:1}),m(ce,{required:"",placeholder:"Aa",id:"QuoteTitular",name:"nombreTitular",modelValue:i(e).nombreTitular,"onUpdate:modelValue":t[7]||(t[7]=s=>i(e).nombreTitular=s)},null,8,["modelValue"]),m(N,{message:a.errors.nombreTitular},null,8,["message"])])])]),o("div",Ye,[o("div",et,[m(g,{for:"adultos"},{default:_(()=>[b(" Adultos ")]),_:1}),m(L,{"id-name":"adultos",modelValue:i(e).adultos,"onUpdate:modelValue":t[8]||(t[8]=s=>i(e).adultos=s)},null,8,["modelValue"]),m(N,{message:a.errors.adultos},null,8,["message"])]),o("div",tt,[m(g,{for:"menores"},{default:_(()=>[b(" Menores ")]),_:1}),m(L,{"id-name":"menores",modelValue:i(e).menores,"onUpdate:modelValue":t[9]||(t[9]=s=>i(e).menores=s)},null,8,["modelValue"])]),ot,st,o("div",it,[m(g,{for:"infantes"},{default:_(()=>[b(" Infantes ")]),_:1}),m(L,{"id-name":"infantes",modelValue:i(e).infantes,"onUpdate:modelValue":t[10]||(t[10]=s=>i(e).infantes=s)},null,8,["modelValue"])])]),i(e).tipoReservacion==1?(c(),u("div",at,[o("div",nt,[o("div",lt,[m(g,{for:"park"},{default:_(()=>[b(" Parque ")]),_:1}),x(o("select",{onChange:t[11]||(t[11]=s=>C()),"onUpdate:modelValue":t[12]||(t[12]=s=>i(e).actividad=s),id:"park",name:"parque",ref:"park",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[rt,(c(!0),u(w,null,k(a.parks,s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,ct))),256))],544),[[A,i(e).actividad]])])])])):h("",!0),i(e).tipoReservacion==2?(c(),u("div",ut,[o("div",dt,[o("div",pt,[mt,i(r).tours?(c(),u("select",{key:0,onChange:t[13]||(t[13]=s=>d.setTour(s.target.value)),name:"parque",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[ft,(c(!0),u(w,null,k(i(r).tours,s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,vt))),256))],32)):h("",!0)])]),d.getFirstTour()?(c(),u("div",_t,[o("div",ht,[m(g,{for:"zone"},{default:_(()=>[b(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":t[14]||(t[14]=s=>d.getFirstTour().zone=s),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[bt,(c(!0),u(w,null,k(n.zones,s=>(c(),u("option",{value:s.id},v(s.name),9,yt))),256))],512),[[A,d.getFirstTour().zone]])])])):h("",!0),o("div",gt,[(l=d.getFirstTour())!=null&&l.zone?(c(),u("div",xt,[m(g,{for:"pickUpZone"},{default:_(()=>[b(" Hotel del pickup ")]),_:1}),x(o("select",{onChange:t[15]||(t[15]=s=>d.setTourHotel(s.target.value)),"onUpdate:modelValue":t[16]||(t[16]=s=>d.getFirstTour().hotel=s),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[wt,d.isHotelListByZoneLoaded(d.getFirstTour().zone)?(c(!0),u(w,{key:0},k(d.hotelList[i(V)(d.getFirstTour().zone)],s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,kt))),256)):h("",!0)],544),[[A,d.getFirstTour().hotel]])])):h("",!0)]),d.getFirstTour().pickup?(c(),u("div",Pt,[m(H,{msg:d.getFirstTour().pickup=="00:00:00"?"Lo sentimos, por el momento no tenemos un pickup disponible, estamos trabajando en ello.":`Su pickup sera a las: ${d.getFirstTour().pickup.slice(0,5)} hrs. en el hotel especificado, procure tener al menos 15 minutos de antelaci\xF3n.`},null,8,["msg"])])):h("",!0)])):h("",!0),i(e).tipoReservacion==3?(c(),u("div",At,[o("div",Tt,[m(g,{for:"number_of_activitys"},{default:_(()=>[b(" Numero de actividades ")]),_:1}),m(L,{onInput:t[17]||(t[17]=s=>d.setMinTourPackage(s.target.value)),value:d.minTourPackage,min:"2","id-name":"number_of_activitys"},null,8,["value"])])])):h("",!0),i(e).tipoReservacion==3?(c(),u("div",Vt,[(c(!0),u(w,null,k(d.activityList,s=>(c(),u("div",zt,[o("h2",null,"Actividad "+v(s.key),1),o("div",Ft,[Lt,i(r).tours?x((c(),u("select",{key:0,"onUpdate:modelValue":p=>s.activity=p,onChange:p=>d.setActivity(s.key-1,p.target.value),name:"Activity",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[$t,(c(!0),u(w,null,k(i(r).tours,p=>(c(),u("option",{class:"capitalize",value:p.id},v(p.name),9,Rt))),256))],40,St)),[[A,s.activity]]):h("",!0)]),o("div",Ut,[m(g,{for:"fechaAvtidad"+s.key},{default:_(()=>[b(" Fecha de actividad "),i(e).errors.fechaActividad?(c(),u("span",Nt,"* Por favor llene este campo")):h("",!0)]),_:2},1032,["for"]),m(D,{required:"",modelValue:s.activity_date,"onUpdate:modelValue":p=>s.activity_date=p,min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"+s.key},null,8,["modelValue","onUpdate:modelValue","min","id-name"])]),o("div",Ct,[m(g,{for:"zone"},{default:_(()=>[b(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":p=>s.zone=p,onChange:t[18]||(t[18]=p=>d.isHotelListByZoneLoaded(p.target.value)),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Ht,(c(!0),u(w,null,k(n.zones,p=>(c(),u("option",{value:p.id},v(p.name),9,Dt))),256))],40,Bt),[[A,s.zone]])]),o("div",Zt,[m(g,{for:"pickUpZone"},{default:_(()=>[b(" Hotel del pickup ")]),_:1}),d.isHotelListByZoneLoaded(s.zone)?x((c(),u("select",{key:0,"onUpdate:modelValue":p=>s.hotel=p,onChange:p=>d.setTourHotel(p.target.value,s.key-1),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[qt,(c(!0),u(w,null,k(d.hotelList[i(V)(s.zone)],p=>(c(),u("option",{class:"capitalize",value:p.id},v(p.name),9,Mt))),256))],40,It)),[[A,s.hotel]]):h("",!0)]),s.pickup?(c(),u("div",Et,[m(H,{msg:s.pickup=="00:00:00"?K():`Su pickup sera a las: ${s.pickup.slice(0,5)}.
 Precio publico de la actividad ${s.key}: $${s.public_price}, su precio de agencia: ${G(s.public_price)}`},null,8,["msg"])])):h("",!0),Qt,jt]))),256))])):h("",!0),o("div",Ot,[o("div",Gt,[o("div",Kt,[m(g,{for:"notes"},{default:_(()=>[b(" Notas ")]),_:1}),x(o("textarea",{"onUpdate:modelValue":t[19]||(t[19]=s=>i(e).notas=s),class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",name:"note",id:"notes",cols:"30",rows:"10"},null,512),[[ae,i(e).notas]])])])])])])]}),actions:_(()=>[o("button",{type:"button",onClick:t[20]||(t[20]=l=>O()),class:"hover:shadow-form rounded-md mr-16 bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Reiniciar Cotizaci\xF3n "),Jt]),_:1})]))}},po=pe(Wt,[["__scopeId","data-v-5b7e9fc6"]]);export{po as default};