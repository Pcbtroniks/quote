var ie=Object.defineProperty;var ne=(a,n,e)=>n in a?ie(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var P=(a,n,e)=>(ne(a,typeof n!="symbol"?n+"":n,e),e);import{D as q,o as c,d as u,t as v,j as H,u as ae,P as T,a as o,f as b,g as i,b as m,w as h,v as x,A as le,e as _,Q as R,J as A,F as w,h as k,E as re,R as ce,S as ue}from"./app.888ab847.js";import{_ as de}from"./FormSection.f9c52f48.js";import L from"./InputNumber.77e0a022.js";import g from"./InputLabel.06dab92f.js";import pe from"./InputText.f61201f8.js";import me from"./Summary.5689d209.js";import{_ as D}from"./Alert.cfa9e401.js";import Z from"./InputDate.c2de15a8.js";import{_ as fe}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.681e7add.js";const r=q({season:"low",hotels:{cancun:null,pdc:null,rm:null},cancunHotels:null,rmHotels:null,tours:[],nPackTours:2,nTours:[],tour:{activity:0,pickup:null,hotel:null},resume:{total:{adults:0,minors:0}},prices:{totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:5,amount:0}}}),S=async(a,n=null,e)=>{try{return await(await fetch(a,n)).json()}catch{alert("Error al cargar los datos, por favor recargue la pagina")}finally{e&&e()}},M=async()=>{r.tours=await S(route("tours"))},$=async a=>await S(route("hotels",{zone:a})),ve=async(a,n)=>await S(route("nd.pickup.get",{activity:a,hotel:n})),he=a=>["2022-12-26","2022-12-27","2022-12-28","2022-12-29","2022-12-30","2022-12-31"].includes(a)?"high":"low",U=async(a,n,e)=>await S(route("prices",{activity:a,zone:n,season:e})),_e=async(a,n={})=>a==1&&!n.cancun?(n.cancun=[...await $(1)],n):a==1&&n.cancun?n:a==2&&!n.rm?(n.rm=[...await $(2)],n):a==2&&n.rm?n:a==3&&!n.pdc?(n.pdc=[...await $(3)],n):(a==3&&n.pdc,n),V=a=>({1:"cancun",2:"rm",3:"pdc"})[a],be=new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),C=a=>{var e;return(e=["no especificada","entrance","tour","pack"][a])!=null?e:"invalida"},I=(a,n)=>Number(Number(a)+Number(n)).toFixed(2),ye=a=>a>0?"$"+a:"",ge={class:"text-red-500 text-sm font-bold"},N={__name:"TextError",props:{message:String},setup(a){return(n,e)=>(c(),u("span",ge,v(a.message),1))}};const f=a=>(ce("data-v-91cd7ca5"),a=a(),ue(),a),xe={class:"p-6 sm:px-20 bg-white border-b border-gray-200"},we={class:"mt-4 text-2xl text-center"},ke={class:"text-lg"},Pe=f(()=>o("div",{class:"md:mx-14 md:my-10 font-bold"},"Resumen de la reserva.",-1)),Ae={class:"mb-4"},Te=f(()=>o("br",null,null,-1)),Ve=f(()=>o("br",null,null,-1)),ze=f(()=>o("br",null,null,-1)),Fe=f(()=>o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600"}," Por favor llene el siguiente formulario para poder realizar su cotizaci\xF3n. ")],-1)),Le={class:"flex items-center justify-center px-12 pt-4 col-span-6 sm:col-span-4"},Se={class:"mx-auto w-full max-w-[550px]"},Re={key:0,class:"mb-5"},$e=f(()=>o("small",{class:"text-gray-400"},"Descuento para mexicanos, presentar INE o pasaporte.",-1)),Ue={for:"nacionalesId",class:"flex items-center cursor-pointer text-base font-medium text-[#07074D]"},Ce={class:"mr-2"},Ne={class:"relative"},Be=f(()=>o("div",{class:"toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"},null,-1)),He=f(()=>o("div",{class:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"},null,-1)),De={class:"mb-5"},Ze=f(()=>o("label",{class:"mb-3 block text-base font-medium text-[#07074D]"}," Tipo de reservaci\xF3n? ",-1)),Me={class:"flex items-center space-x-6"},Ie={class:"flex items-center"},qe=f(()=>o("label",{for:"radioButton1",class:"pl-3 text-base font-medium text-[#07074D]"}," Entrada ",-1)),Qe={class:"flex items-center"},Ee=f(()=>o("label",{for:"radioButton2",class:"pl-3 text-base font-medium text-[#07074D]"}," Tour ",-1)),je={class:"flex items-center"},Oe=f(()=>o("label",{for:"radioButton3",class:"pl-3 text-base font-medium text-[#07074D]"}," Paquete ",-1)),Ge={key:1,class:"-mx-3 flex flex-wrap"},Je={class:"w-full px-3"},Ke={class:"mb-5"},We={key:0,class:"text-red-500"},Xe={class:"-mx-3 flex flex-wrap"},Ye={class:"w-full px-3"},et={class:"mb-5"},tt={class:"flex flex-wrap justify-between"},ot={class:"mb-5 w-28"},st={class:"mb-5 w-28"},it=f(()=>o("br",null,null,-1)),nt=f(()=>o("br",null,null,-1)),at={class:"mb-5 w-28"},lt={key:2,class:"-mx-3 flex flex-wrap"},rt={class:"w-full px-3"},ct={class:"mb-5"},ut=f(()=>o("option",{value:"null",disabled:"",selected:""},"-- Seleccione un parque --",-1)),dt=["value"],pt={key:3,class:"-mx-3 flex flex-wrap"},mt={class:"w-full px-3"},ft={class:"mb-5"},vt=f(()=>o("label",{for:"parque",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),ht=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un tour --",-1)),_t=["value"],bt={key:0,class:"w-full px-3"},yt={class:"mb-5"},gt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),xt=["value"],wt={class:"w-full px-3"},kt={key:0,class:"mb-5"},Pt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel para su pickup --",-1)),At=["value"],Tt={key:1,class:"-mx-3 flex flex-wrap"},Vt={key:4,class:"-mx-3 flex flex-wrap"},zt={class:"mb-5 w-28"},Ft={key:5,class:"-mx-3 flex flex-wrap"},Lt={class:"w-full px-3"},St={class:"mb-5"},Rt=f(()=>o("label",{for:"fName",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),$t=["onUpdate:modelValue","onChange"],Ut=f(()=>o("option",{value:"null",selected:"",disabled:""}," -- Seleccione un tour -- ",-1)),Ct=["value"],Nt={class:"mb-5"},Bt={key:0,class:"text-red-500"},Ht={class:"mb-5"},Dt=["onUpdate:modelValue"],Zt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),Mt=["value"],It={class:"mb-5"},qt=["onUpdate:modelValue","onChange"],Qt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel --",-1)),Et=["value"],jt={key:0,class:"mb-5"},Ot=f(()=>o("hr",null,null,-1)),Gt=f(()=>o("br",null,null,-1)),Jt={class:"-mx-3 flex flex-wrap"},Kt={class:"w-full px-3"},Wt={class:"mb-5"},Xt=f(()=>o("button",{class:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Guardar Cotizaci\xF3n ",-1)),Yt={__name:"CreateFormQuote",props:{parks:Array,zones:Array,errors:Object},setup(a){const n=a;r.prices.profit.percentage=H().props.value.user.current_team.sale_amount_percentage;const e=ae({fechaReservacion:new Date().toISOString().split("T")[0],fechaActividad:null,precioPublico:0,tipoReservacion:1,nacionales:!1,nombreTitular:"",importeVenta:0,pickUp:null,infantes:0,notas:null,adultos:1,menores:0,zona:5,season:"low",actividad:null}),z=()=>{r.resume.total.adults=e.adultos*r.prices.cost.adult,r.resume.total.minors=e.menores*r.prices.cost.minor,r.prices.totalPublicPrice=I(r.resume.total.adults,r.resume.total.minors),e.precioPublico=r.prices.totalPublicPrice,e.importeVenta=Q().toFixed(2),r.prices.totalAgencyPrice=e.importeVenta,r.prices.reference=(r.prices.totalPublicPrice-r.prices.totalAgencyPrice).toFixed(2),console.log(r)},Q=()=>r.prices.totalPublicPrice*((100-r.prices.profit.percentage)/100),B=async()=>{const y=await U(e.actividad,e.nacionales?4:5,e.season);r.prices.cost.adult=y.adult.amount,r.prices.cost.minor=y.minor.amount,z()};T(()=>{e.season=he(e.fechaActividad),e.actividad&&z()}),T(()=>(e.tipoReservacion==3&&p.activityList.length==0&&p.setMinTourPackage(),e.actividad&&e.tipoReservacion==1&&B(),[e.adultos,e.menores])),T(()=>{e.nacionales=e.tipoReservacion!=1?!1:e.nacionales}),T(()=>(F(),[e.tipoReservacion])),T(()=>{const y=[],t=r.nPackTours;for(let l=0;l<t;l++)y.push({key:l+1,activity:null,zone:null,hotel:null,pickup:null,activity_date:null,public_price:0,agency_price:0});r.nTours=y});function E(){e.tipoReservacion!=1&&(e.actividad=p.activityList,e.precioPublico=p.calculatePublicPrice()),e.tipoReservacion=C(e.tipoReservacion),F()}function j(){E(),e.post(route("quoter.store"),{preserveScroll:!0,onSuccess:y=>{console.log(y),Swal.fire("Nueva cotizacion generada","Hemos guardado la cotizacion","success").then(function(){location.reload()})},onError:y=>{Swal.fire("Ups! Algo salio mal","No hemos podido guardar la cotizacion, por favor intenta de nuevo.","error").then(function(){location.reload()}),console.log(y)}}),n.errors&&console.log(n.errors)}function F(){r.prices={totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:H().props.value.user.current_team.sale_amount_percentage,amount:0}}}function O(){location.reload()}function G(y,t=5){return Number(y*((100-t)/100)).toFixed(2)}function J(){return alert("Lo sentimos actualmente no tenemos pickups disponibles"),"Lo sentimos, por el momento no tenemos un pickup disponible, porfavor pongase en contacto con uno de nuestros agentes al: 998-168-9378."}class K{constructor(){P(this,"activityList");P(this,"NumberOfActivities");P(this,"hotelList");P(this,"publicPrice");P(this,"minTourPackage");this.activityList=[],this.NumberOfActivities=1,this.hotelList={},this.publicPrice=0,this.minTourPackage=2}getFirstTour(t=0){var l;return(l=this.activityList[t])!=null?l:!1}setTour(t){this.getFirstTour()&&(this.activityList.pop(),F()),this.addActivity(1,t,e.season,1)}async setTourHotel(t,l=0){var s;this.activityList[l].hotel=t,this.activityList[l].pickup=(s=await ve(this.activityList[l].activity,t).then(d=>d.pickup_time))!=null?s:"00:00:00",this.activityList[l].public_price=await this.getActivityPublicPrice(l),r.prices.totalPublicPrice=this.calculatePublicPrice(),console.info(await U(this.activityList[l].activity,this.activityList[l].zone,e.season).then(d=>d))}async getActivityPublicPrice(t){var s;const l=(s=await U(this.activityList[t].activity,this.activityList[t].zone,e.season).then(d=>d))!=null?s:0;return I(e.adultos*Number(l.adult.amount),e.menores*Number(l.minor.amount))}setMinTourPackage(t=2){this.minTourPackage=t,this.resetActivities();for(let l=0;l<this.minTourPackage;l++)this.addActivity()}setActivity(t,l){this.activityList[t].activity=l}setActivityZone(t,l){this.activityList[t].zone=l}addActivity(t=this.activityList.length+1,l,s=e.season,d=null,ee=null,te=null,oe=e.fechaActividad){const se={key:t,activity:l,season:s,zone:d,hotel:ee,pickup:te,activity_date:oe,type:C(e.tipoReservacion),adults:e.adultos,minors:e.menores,infants:e.infantes,public_price:0};this.activityList.push(se)}resetActivities(){this.activityList=[],F()}async loadHotels(t){return this.hotelList=await _e(t,this.hotelList),this.hotelList}describe(){return console.log({length:this.activityList.length,"Number of tours":r.nPackTours,activities:this.activityList,hotels:this.hotelList})}calculatePublicPrice(){return this.activityList.reduce((t,{public_price:l})=>t+Number(l),0)}async applyAgencyCost(t){e.adultos*await this.getActivityPublicPrice(this.activityList[t].activity,e.zona,e.season).then(l=>l.adult.amount),e.menores*await this.getActivityPublicPrice(this.activityList[t].activity,e.zona,e.season).then(l=>l.minor.amount)}activityAt(t){if(t=Math.trunc(t)||0,t<0&&(t+=this.length),!(t<0||t>=this.length))return this.activityList[t]}async isHotelListByZoneLoaded(t){var l;return((l=this.hotelList[V(t)])==null?void 0:l.length)&&this.hotelList[V(t)].length>0||await this.loadHotels(t),!0}async getHotelListByZone(t){return await this.hotelList[V(t)]}}const p=q(new K),W=()=>console.log(p),X=()=>console.log(r),Y=()=>console.log(e);return(y,t)=>(c(),u("div",null,[o("div",xe,[o("div",we,[b(" Nueva Cotizaci\xF3n "),o("p",ke,"Fecha de hoy: "+v(i(be)),1)])]),m(de,{onSubmitted:j},{title:h(()=>[Pe]),description:h(()=>[m(me,null,{header:h(()=>[b(" Precio al publico "+v(i(ye)(i(r).prices.totalPublicPrice)),1)]),content:h(()=>[o("p",Ae,"( Temporada "+v(i(e).season=="low"?"Baja":"Alta")+", Tarifa "+v(i(e).nacionales?"Nacional":"Internacional")+")",1),o("p",null,"A nombre de: "+v(i(e).nombreTitular),1),Te,o("p",null,"Adultos: "+v(`${i(e).adultos} x $${i(r).prices.cost.adult} = $${i(e).adultos*i(r).prices.cost.adult}`),1),o("p",null,"Menores: "+v(`${i(e).menores} x $${i(r).prices.cost.minor} = $${i(e).menores*i(r).prices.cost.minor}`),1),o("p",null,"Infantes: "+v(`${i(e).infantes}`)+" - no pagan",1),Ve,o("p",null,"Tipo de reserva: "+v(i(C)(i(e).tipoReservacion)),1),ze,o("p",null,"Precio sugerido al publico: $"+v(i(r).prices.totalPublicPrice),1),o("p",null,"Precio Publico con el descuento: $"+v(i(r).prices.totalAgencyPrice),1)]),_:1})]),form:h(()=>{var l;return[Fe,o("div",Le,[o("div",Se,[i(e).tipoReservacion==1?(c(),u("div",Re,[$e,o("label",Ue,[o("span",Ce,"Nacionales? "+v(i(e).nacionales?"Si":"No"),1),o("div",Ne,[x(o("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i(e).nacionales=s),id:"nacionalesId",type:"checkbox",class:"hidden"},null,512),[[le,i(e).nacionales]]),Be,He])])])):_("",!0),o("div",De,[Ze,o("div",Me,[o("div",Ie,[x(o("input",{value:"1",type:"radio",name:"tipoReservacion",id:"radioButton1",checked:"",class:"h-5 w-5","onUpdate:modelValue":t[1]||(t[1]=s=>i(e).tipoReservacion=s)},null,512),[[R,i(e).tipoReservacion]]),qe]),o("div",Qe,[x(o("input",{onClick:t[2]||(t[2]=()=>i(M)()),value:"2",type:"radio",name:"tipoReservacion",id:"radioButton2",class:"h-5 w-5","onUpdate:modelValue":t[3]||(t[3]=s=>i(e).tipoReservacion=s)},null,512),[[R,i(e).tipoReservacion]]),Ee]),o("div",je,[x(o("input",{onClick:t[4]||(t[4]=()=>i(M)()),value:"3",type:"radio",name:"tipoReservacion",id:"radioButton3",class:"h-5 w-5","onUpdate:modelValue":t[5]||(t[5]=s=>i(e).tipoReservacion=s)},null,512),[[R,i(e).tipoReservacion]]),Oe])]),m(N,{message:n.errors.tipoReservacion},null,8,["message"])]),i(e).tipoReservacion?(c(),u("div",Ge,[o("div",Je,[o("div",Ke,[m(g,{for:"fechaAvtidad"},{default:h(()=>[b(" Fecha de actividad "),i(e).errors.fechaActividad?(c(),u("span",We,"* Por favor llene este campo")):_("",!0)]),_:1}),m(Z,{required:"",modelValue:i(e).fechaActividad,"onUpdate:modelValue":t[6]||(t[6]=s=>i(e).fechaActividad=s),min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"},null,8,["modelValue","min"])])])])):_("",!0),o("div",Xe,[o("div",Ye,[o("div",et,[m(g,{for:"QuoteTitular"},{default:h(()=>[b(" Nombre del titular ")]),_:1}),m(pe,{required:"",placeholder:"Aa",id:"QuoteTitular",name:"nombreTitular",modelValue:i(e).nombreTitular,"onUpdate:modelValue":t[7]||(t[7]=s=>i(e).nombreTitular=s)},null,8,["modelValue"]),m(N,{message:n.errors.nombreTitular},null,8,["message"])])])]),o("div",tt,[o("div",ot,[m(g,{for:"adultos"},{default:h(()=>[b(" Adultos ")]),_:1}),m(L,{"id-name":"adultos",modelValue:i(e).adultos,"onUpdate:modelValue":t[8]||(t[8]=s=>i(e).adultos=s)},null,8,["modelValue"]),m(N,{message:n.errors.adultos},null,8,["message"])]),o("div",st,[m(g,{for:"menores"},{default:h(()=>[b(" Menores ")]),_:1}),m(L,{"id-name":"menores",modelValue:i(e).menores,"onUpdate:modelValue":t[9]||(t[9]=s=>i(e).menores=s)},null,8,["modelValue"])]),it,nt,o("div",at,[m(g,{for:"infantes"},{default:h(()=>[b(" Infantes ")]),_:1}),m(L,{"id-name":"infantes",modelValue:i(e).infantes,"onUpdate:modelValue":t[10]||(t[10]=s=>i(e).infantes=s)},null,8,["modelValue"])])]),i(e).tipoReservacion==1?(c(),u("div",lt,[o("div",rt,[o("div",ct,[m(g,{for:"park"},{default:h(()=>[b(" Parque ")]),_:1}),x(o("select",{onChange:t[11]||(t[11]=s=>B()),"onUpdate:modelValue":t[12]||(t[12]=s=>i(e).actividad=s),id:"park",name:"parque",ref:"park",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[ut,(c(!0),u(w,null,k(n.parks,s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,dt))),256))],544),[[A,i(e).actividad]])])])])):_("",!0),i(e).tipoReservacion==2?(c(),u("div",pt,[o("div",mt,[o("div",ft,[vt,i(r).tours?(c(),u("select",{key:0,onChange:t[13]||(t[13]=s=>p.setTour(s.target.value)),name:"parque",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[ht,(c(!0),u(w,null,k(i(r).tours,s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,_t))),256))],32)):_("",!0)])]),p.getFirstTour()?(c(),u("div",bt,[o("div",yt,[m(g,{for:"zone"},{default:h(()=>[b(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":t[14]||(t[14]=s=>p.getFirstTour().zone=s),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[gt,(c(!0),u(w,null,k(a.zones,s=>(c(),u("option",{value:s.id},v(s.name),9,xt))),256))],512),[[A,p.getFirstTour().zone]])])])):_("",!0),o("div",wt,[(l=p.getFirstTour())!=null&&l.zone?(c(),u("div",kt,[m(g,{for:"pickUpZone"},{default:h(()=>[b(" Hotel del pickup ")]),_:1}),x(o("select",{onChange:t[15]||(t[15]=s=>p.setTourHotel(s.target.value)),"onUpdate:modelValue":t[16]||(t[16]=s=>p.getFirstTour().hotel=s),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Pt,p.isHotelListByZoneLoaded(p.getFirstTour().zone)?(c(!0),u(w,{key:0},k(p.hotelList[i(V)(p.getFirstTour().zone)],s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,At))),256)):_("",!0)],544),[[A,p.getFirstTour().hotel]])])):_("",!0)]),p.getFirstTour().pickup?(c(),u("div",Tt,[m(D,{msg:p.getFirstTour().pickup=="00:00:00"?"Lo sentimos, por el momento no tenemos un pickup disponible, estamos trabajando en ello.":`Su pickup sera a las: ${p.getFirstTour().pickup.slice(0,5)} hrs. en el hotel especificado, procure tener al menos 15 minutos de antelaci\xF3n.`},null,8,["msg"])])):_("",!0)])):_("",!0),i(e).tipoReservacion==3?(c(),u("div",Vt,[o("div",zt,[m(g,{for:"number_of_activitys"},{default:h(()=>[b(" Numero de actividades ")]),_:1}),m(L,{onInput:t[17]||(t[17]=s=>p.setMinTourPackage(s.target.value)),value:p.minTourPackage,min:"2","id-name":"number_of_activitys"},null,8,["value"])])])):_("",!0),i(e).tipoReservacion==3?(c(),u("div",Ft,[(c(!0),u(w,null,k(p.activityList,s=>(c(),u("div",Lt,[o("h2",null,"Actividad "+v(s.key),1),o("div",St,[Rt,i(r).tours?x((c(),u("select",{key:0,"onUpdate:modelValue":d=>s.activity=d,onChange:d=>p.setActivity(s.key-1,d.target.value),name:"Activity",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Ut,(c(!0),u(w,null,k(i(r).tours,d=>(c(),u("option",{class:"capitalize",value:d.id},v(d.name),9,Ct))),256))],40,$t)),[[A,s.activity]]):_("",!0)]),o("div",Nt,[m(g,{for:"fechaAvtidad"+s.key},{default:h(()=>[b(" Fecha de actividad "),i(e).errors.fechaActividad?(c(),u("span",Bt,"* Por favor llene este campo")):_("",!0)]),_:2},1032,["for"]),m(Z,{required:"",modelValue:s.activity_date,"onUpdate:modelValue":d=>s.activity_date=d,min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"+s.key},null,8,["modelValue","onUpdate:modelValue","min","id-name"])]),o("div",Ht,[m(g,{for:"zone"},{default:h(()=>[b(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":d=>s.zone=d,onChange:t[18]||(t[18]=d=>p.isHotelListByZoneLoaded(d.target.value)),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Zt,(c(!0),u(w,null,k(a.zones,d=>(c(),u("option",{value:d.id},v(d.name),9,Mt))),256))],40,Dt),[[A,s.zone]])]),o("div",It,[m(g,{for:"pickUpZone"},{default:h(()=>[b(" Hotel del pickup ")]),_:1}),p.isHotelListByZoneLoaded(s.zone)?x((c(),u("select",{key:0,"onUpdate:modelValue":d=>s.hotel=d,onChange:d=>p.setTourHotel(d.target.value,s.key-1),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Qt,(c(!0),u(w,null,k(p.hotelList[i(V)(s.zone)],d=>(c(),u("option",{class:"capitalize",value:d.id},v(d.name),9,Et))),256))],40,qt)),[[A,s.hotel]]):_("",!0)]),s.pickup?(c(),u("div",jt,[m(D,{msg:s.pickup=="00:00:00"?J():`Su pickup sera a las: ${s.pickup.slice(0,5)}.
 Precio publico de la actividad ${s.key}: $${s.public_price}, su precio de agencia: ${G(s.public_price)}`},null,8,["msg"])])):_("",!0),Ot,Gt]))),256))])):_("",!0),o("div",Jt,[o("div",Kt,[o("div",Wt,[m(g,{for:"notes"},{default:h(()=>[b(" Notas ")]),_:1}),x(o("textarea",{"onUpdate:modelValue":t[19]||(t[19]=s=>i(e).notas=s),class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",name:"note",id:"notes",cols:"30",rows:"10"},null,512),[[re,i(e).notas]])])])])])])]}),actions:h(()=>[o("button",{type:"button",onClick:X,class:"hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Mostrar Cotizaci\xF3n "),o("button",{type:"button",onClick:Y,class:"hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Mostrar Form "),o("button",{type:"button",onClick:W,class:"hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Mostrar Actividades "),o("button",{type:"button",onClick:t[20]||(t[20]=l=>O()),class:"hover:shadow-form rounded-md mr-16 bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Reiniciar Cotizaci\xF3n "),Xt]),_:1})]))}},po=fe(Yt,[["__scopeId","data-v-91cd7ca5"]]);export{po as default};