var ie=Object.defineProperty;var ne=(a,n,e)=>n in a?ie(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var P=(a,n,e)=>(ne(a,typeof n!="symbol"?n+"":n,e),e);import{D as q,o as c,d as u,t as v,j as B,u as ae,P as T,a as o,f as b,g as i,b as m,w as _,v as x,A as le,e as h,Q as $,J as A,F as w,h as k,E as re,R as ce,S as ue}from"./app.e1d43eb0.js";import{_ as de}from"./FormSection.9b52bc04.js";import L from"./InputNumber.403b3cd0.js";import g from"./InputLabel.eec098fc.js";import pe from"./InputText.9fb6c446.js";import me from"./Summary.fccb5c5c.js";import{_ as H}from"./Alert.d37c7d98.js";import D from"./InputDate.452c9544.js";import fe from"./ShowCosts.7cc75d1b.js";import{_ as ve}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.04ac8687.js";import"./Button.a0af48f9.js";const r=q({season:"low",hotels:{cancun:null,pdc:null,rm:null},cancunHotels:null,rmHotels:null,tours:[],nPackTours:2,nTours:[],tour:{activity:0,pickup:null,hotel:null},resume:{total:{adults:0,minors:0}},prices:{totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:5,amount:0}}}),S=async(a,n=null,e)=>{try{return await(await fetch(a,n)).json()}catch{alert("Error al cargar los datos, por favor recargue la pagina")}finally{e&&e()}},Z=async()=>{r.tours=await S(route("tours"))},R=async a=>await S(route("hotels",{zone:a})),_e=async(a,n)=>await S(route("nd.pickup.get",{activity:a,hotel:n})),he=a=>["2022-12-26","2022-12-27","2022-12-28","2022-12-29","2022-12-30","2022-12-31"].includes(a)?"high":"low",M=async(a,n,e)=>await S(route("prices",{activity:a,zone:n,season:e})),be=async(a,n={})=>a==1&&!n.cancun?(n.cancun=[...await R(1)],n):a==1&&n.cancun?n:a==2&&!n.rm?(n.rm=[...await R(2)],n):a==2&&n.rm?n:a==3&&!n.pdc?(n.pdc=[...await R(3)],n):(a==3&&n.pdc,n),V=a=>({1:"cancun",2:"rm",3:"pdc"})[a],ye=new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),U=a=>{var e;return(e=["no especificada","entrance","tour","pack"][a])!=null?e:"invalida"},I=(a,n)=>Number(Number(a)+Number(n)).toFixed(2),ge=a=>a>0?"$"+a:"",xe={class:"text-red-500 text-sm font-bold"},C={__name:"TextError",props:{message:String},setup(a){return(n,e)=>(c(),u("span",xe,v(a.message),1))}};const f=a=>(ce("data-v-76cec6e9"),a=a(),ue(),a),we={class:"p-6 sm:px-20 bg-white border-b border-gray-200"},ke={class:"mt-4 text-2xl text-center"},Pe={class:"text-lg"},Ae=f(()=>o("div",{class:"md:mx-14 md:my-10 font-bold"},"Resumen de la reserva.",-1)),Te={class:"mb-4"},Ve=f(()=>o("br",null,null,-1)),ze=f(()=>o("br",null,null,-1)),Fe=f(()=>o("br",null,null,-1)),Le=f(()=>o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600"}," Por favor llene el siguiente formulario para poder realizar su cotizaci\xF3n. ")],-1)),Se={class:"flex items-center justify-center px-12 pt-4 col-span-6 sm:col-span-4"},$e={class:"mx-auto w-full max-w-[550px]"},Re={key:0,class:"mb-5"},Ue=f(()=>o("small",{class:"text-gray-400"},"Descuento para mexicanos, presentar INE o pasaporte.",-1)),Ce={for:"nacionalesId",class:"flex items-center cursor-pointer text-base font-medium text-[#07074D]"},Ne={class:"mr-2"},Be={class:"relative"},He=f(()=>o("div",{class:"toggle-path bg-gray-200 w-9 h-5 rounded-full shadow-inner"},null,-1)),De=f(()=>o("div",{class:"toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"},null,-1)),Ze={class:"mb-5"},Me=f(()=>o("label",{class:"mb-3 block text-base font-medium text-[#07074D]"}," Tipo de reservaci\xF3n? ",-1)),Ie={class:"flex items-center space-x-6"},qe={class:"flex items-center"},Qe=f(()=>o("label",{for:"radioButton1",class:"pl-3 text-base font-medium text-[#07074D]"}," Entrada ",-1)),Ee={class:"flex items-center"},je=f(()=>o("label",{for:"radioButton2",class:"pl-3 text-base font-medium text-[#07074D]"}," Tour ",-1)),Oe={class:"flex items-center"},Ge=f(()=>o("label",{for:"radioButton3",class:"pl-3 text-base font-medium text-[#07074D]"}," Paquete ",-1)),Je={key:1,class:"-mx-3 flex flex-wrap"},Ke={class:"w-full px-3"},We={class:"mb-5"},Xe={key:0,class:"text-red-500"},Ye={class:"-mx-3 flex flex-wrap"},et={class:"w-full px-3"},tt={class:"mb-5"},ot={class:"flex flex-wrap justify-between"},st={class:"mb-5 w-28"},it={class:"mb-5 w-28"},nt=f(()=>o("br",null,null,-1)),at=f(()=>o("br",null,null,-1)),lt={class:"mb-5 w-28"},rt={key:2,class:"-mx-3 flex flex-wrap"},ct={class:"w-full px-3"},ut={class:"mb-5"},dt=f(()=>o("option",{value:"null",disabled:"",selected:""},"-- Seleccione un parque --",-1)),pt=["value"],mt={key:3,class:"-mx-3 flex flex-wrap"},ft={class:"w-full px-3"},vt={class:"mb-5"},_t=f(()=>o("label",{for:"parque",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),ht=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un tour --",-1)),bt=["value"],yt={key:0,class:"w-full px-3"},gt={class:"mb-5"},xt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),wt=["value"],kt={class:"w-full px-3"},Pt={key:0,class:"mb-5"},At=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel para su pickup --",-1)),Tt=["value"],Vt={key:1,class:"-mx-3 flex flex-wrap"},zt={key:4,class:"-mx-3 flex flex-wrap"},Ft={class:"mb-5 w-28"},Lt={key:5,class:"-mx-3 flex flex-wrap"},St={class:"w-full px-3"},$t={class:"mb-5"},Rt=f(()=>o("label",{for:"fName",class:"mb-3 block text-base font-medium text-[#07074D]"}," Tour ",-1)),Ut=["onUpdate:modelValue","onChange"],Ct=f(()=>o("option",{value:"null",selected:"",disabled:""}," -- Seleccione un tour -- ",-1)),Nt=["value"],Bt={class:"mb-5"},Ht={key:0,class:"text-red-500"},Dt={class:"mb-5"},Zt=["onUpdate:modelValue"],Mt=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione su zona --",-1)),It=["value"],qt={class:"mb-5"},Qt=["onUpdate:modelValue","onChange"],Et=f(()=>o("option",{value:"null",selected:"",disabled:""},"-- Seleccione un hotel --",-1)),jt=["value"],Ot={key:0,class:"mb-5"},Gt=f(()=>o("hr",null,null,-1)),Jt=f(()=>o("br",null,null,-1)),Kt={class:"-mx-3 flex flex-wrap"},Wt={class:"w-full px-3"},Xt={class:"mb-5"},Yt=f(()=>o("button",{class:"hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Guardar Cotizaci\xF3n ",-1)),eo={__name:"CreateFormQuote",props:{parks:Array,zones:Array,errors:Object},setup(a){const n=a;r.prices.profit.percentage=B().props.value.user.current_team.sale_amount_percentage;const e=ae({fechaReservacion:new Date().toISOString().split("T")[0],fechaActividad:null,precioPublico:0,tipoReservacion:1,nacionales:!1,nombreTitular:"",importeVenta:0,pickUp:null,infantes:0,notas:null,adultos:1,menores:0,zona:5,season:"low",actividad:null}),z=()=>{r.resume.total.adults=e.adultos*r.prices.cost.adult,r.resume.total.minors=e.menores*r.prices.cost.minor,r.prices.totalPublicPrice=I(r.resume.total.adults,r.resume.total.minors),e.precioPublico=r.prices.totalPublicPrice,e.importeVenta=Q().toFixed(2),r.prices.totalAgencyPrice=e.importeVenta,r.prices.reference=(r.prices.totalPublicPrice-r.prices.totalAgencyPrice).toFixed(2),console.log(r)},Q=()=>r.prices.totalPublicPrice*((100-r.prices.profit.percentage)/100),N=async()=>{const y=await M(e.actividad,e.nacionales?4:5,e.season);r.prices.cost.adult=y.adult.amount,r.prices.cost.minor=y.minor.amount,z()};T(()=>{e.season=he(e.fechaActividad),e.actividad&&z()}),T(()=>(e.tipoReservacion==3&&d.activityList.length==0&&d.setMinTourPackage(),e.actividad&&e.tipoReservacion==1&&N(),[e.adultos,e.menores])),T(()=>{e.nacionales=e.tipoReservacion!=1?!1:e.nacionales}),T(()=>(F(),[e.tipoReservacion])),T(()=>{const y=[],t=r.nPackTours;for(let l=0;l<t;l++)y.push({key:l+1,activity:null,zone:null,hotel:null,pickup:null,activity_date:null,public_price:0,agency_price:0});r.nTours=y});function E(){e.tipoReservacion!=1&&(e.actividad=d.activityList,e.precioPublico=d.calculatePublicPrice()),e.tipoReservacion=U(e.tipoReservacion),F()}function j(){E(),e.post(route("quoter.store"),{preserveScroll:!0,onSuccess:y=>{console.log(y),Swal.fire("Nueva cotizacion generada","Hemos guardado la cotizacion","success").then(function(){location.reload()})},onError:y=>{Swal.fire("Ups! Algo salio mal","No hemos podido guardar la cotizacion, por favor intenta de nuevo.","error").then(function(){location.reload()}),console.log(y)}}),n.errors&&console.log(n.errors)}function F(){r.prices={totalPublicPrice:0,totalAgencyPrice:0,reference:0,cost:{adult:0,minor:0},profit:{percentage:B().props.value.user.current_team.sale_amount_percentage,amount:0}}}function O(){location.reload()}function G(y,t=5){return Number(y*((100-t)/100)).toFixed(2)}function J(){return alert("Lo sentimos actualmente no tenemos pickups disponibles"),"Lo sentimos, por el momento no tenemos un pickup disponible, porfavor pongase en contacto con uno de nuestros agentes al: 998-168-9378."}class K{constructor(){P(this,"activityList");P(this,"NumberOfActivities");P(this,"hotelList");P(this,"publicPrice");P(this,"minTourPackage");this.activityList=[],this.NumberOfActivities=1,this.hotelList={},this.publicPrice=0,this.minTourPackage=2}getFirstTour(t=0){var l;return(l=this.activityList[t])!=null?l:!1}setTour(t){this.getFirstTour()&&(this.activityList.pop(),F()),this.addActivity(1,t,e.season,1)}async setTourHotel(t,l=0){var s;this.activityList[l].hotel=t,this.activityList[l].pickup=(s=await _e(this.activityList[l].activity,t).then(p=>p.pickup_time))!=null?s:"00:00:00",this.activityList[l].public_price=await this.getActivityPublicPrice(l),r.prices.totalPublicPrice=this.calculatePublicPrice()}async getActivityPublicPrice(t){var s;const l=(s=await M(this.activityList[t].activity,this.activityList[t].zone,e.season).then(p=>p))!=null?s:0;return I(e.adultos*Number(l.adult.amount),e.menores*Number(l.minor.amount))}setMinTourPackage(t=2){this.minTourPackage=t,this.resetActivities();for(let l=0;l<this.minTourPackage;l++)this.addActivity()}setActivity(t,l){this.activityList[t].activity=l}setActivityZone(t,l){this.activityList[t].zone=l}addActivity(t=this.activityList.length+1,l,s=e.season,p=null,ee=null,te=null,oe=e.fechaActividad){const se={key:t,activity:l,season:s,zone:p,hotel:ee,pickup:te,activity_date:oe,type:U(e.tipoReservacion),adults:e.adultos,minors:e.menores,infants:e.infantes,public_price:0};this.activityList.push(se)}resetActivities(){this.activityList=[],F()}async loadHotels(t){return this.hotelList=await be(t,this.hotelList),this.hotelList}describe(){return console.log({length:this.activityList.length,"Number of tours":r.nPackTours,activities:this.activityList,hotels:this.hotelList})}calculatePublicPrice(){return this.activityList.reduce((t,{public_price:l})=>t+Number(l),0)}async applyAgencyCost(t){e.adultos*await this.getActivityPublicPrice(this.activityList[t].activity,e.zona,e.season).then(l=>l.adult.amount),e.menores*await this.getActivityPublicPrice(this.activityList[t].activity,e.zona,e.season).then(l=>l.minor.amount)}activityAt(t){if(t=Math.trunc(t)||0,t<0&&(t+=this.length),!(t<0||t>=this.length))return this.activityList[t]}async isHotelListByZoneLoaded(t){var l;return((l=this.hotelList[V(t)])==null?void 0:l.length)&&this.hotelList[V(t)].length>0||await this.loadHotels(t),!0}async getHotelListByZone(t){return await this.hotelList[V(t)]}}const d=q(new K),W=()=>console.log(d),X=()=>console.log(r),Y=()=>console.log(e);return(y,t)=>(c(),u("div",null,[o("div",we,[o("div",ke,[b(" Nueva Cotizaci\xF3n "),o("p",Pe,"Fecha de hoy: "+v(i(ye)),1)])]),m(de,{onSubmitted:j},{title:_(()=>[Ae]),description:_(()=>[m(me,null,{header:_(()=>[b(" Precio al publico "+v(i(ge)(i(r).prices.totalPublicPrice)),1)]),content:_(()=>[o("p",Te,"( Temporada "+v(i(e).season=="low"?"Baja":"Alta")+", Tarifa "+v(i(e).nacionales?"Nacional":"Internacional")+")",1),o("p",null,"A nombre de: "+v(i(e).nombreTitular),1),Ve,o("p",null,"Adultos: "+v(`${i(e).adultos} x $${i(r).prices.cost.adult} = $${i(e).adultos*i(r).prices.cost.adult}`),1),o("p",null,"Menores: "+v(`${i(e).menores} x $${i(r).prices.cost.minor} = $${i(e).menores*i(r).prices.cost.minor}`),1),o("p",null,"Infantes: "+v(`${i(e).infantes}`)+" - no pagan",1),ze,o("p",null,"Tipo de reserva: "+v(i(U)(i(e).tipoReservacion)),1),Fe,o("p",null,"Precio sugerido al publico: $"+v(i(r).prices.totalPublicPrice),1),o("p",null,"Precio Publico con el descuento: $"+v(i(r).prices.totalAgencyPrice),1)]),_:1}),m(fe,{activities:d.activityList,class:"p-4"},null,8,["activities"])]),form:_(()=>{var l;return[Le,o("div",Se,[o("div",$e,[i(e).tipoReservacion==1?(c(),u("div",Re,[Ue,o("label",Ce,[o("span",Ne,"Nacionales? "+v(i(e).nacionales?"Si":"No"),1),o("div",Be,[x(o("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i(e).nacionales=s),id:"nacionalesId",type:"checkbox",class:"hidden"},null,512),[[le,i(e).nacionales]]),He,De])])])):h("",!0),o("div",Ze,[Me,o("div",Ie,[o("div",qe,[x(o("input",{value:"1",type:"radio",name:"tipoReservacion",id:"radioButton1",checked:"",class:"h-5 w-5","onUpdate:modelValue":t[1]||(t[1]=s=>i(e).tipoReservacion=s)},null,512),[[$,i(e).tipoReservacion]]),Qe]),o("div",Ee,[x(o("input",{onClick:t[2]||(t[2]=()=>i(Z)()),value:"2",type:"radio",name:"tipoReservacion",id:"radioButton2",class:"h-5 w-5","onUpdate:modelValue":t[3]||(t[3]=s=>i(e).tipoReservacion=s)},null,512),[[$,i(e).tipoReservacion]]),je]),o("div",Oe,[x(o("input",{onClick:t[4]||(t[4]=()=>i(Z)()),value:"3",type:"radio",name:"tipoReservacion",id:"radioButton3",class:"h-5 w-5","onUpdate:modelValue":t[5]||(t[5]=s=>i(e).tipoReservacion=s)},null,512),[[$,i(e).tipoReservacion]]),Ge])]),m(C,{message:n.errors.tipoReservacion},null,8,["message"])]),i(e).tipoReservacion?(c(),u("div",Je,[o("div",Ke,[o("div",We,[m(g,{for:"fechaAvtidad"},{default:_(()=>[b(" Fecha de actividad "),i(e).errors.fechaActividad?(c(),u("span",Xe,"* Por favor llene este campo")):h("",!0)]),_:1}),m(D,{required:"",modelValue:i(e).fechaActividad,"onUpdate:modelValue":t[6]||(t[6]=s=>i(e).fechaActividad=s),min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"},null,8,["modelValue","min"])])])])):h("",!0),o("div",Ye,[o("div",et,[o("div",tt,[m(g,{for:"QuoteTitular"},{default:_(()=>[b(" Nombre del titular ")]),_:1}),m(pe,{required:"",placeholder:"Aa",id:"QuoteTitular",name:"nombreTitular",modelValue:i(e).nombreTitular,"onUpdate:modelValue":t[7]||(t[7]=s=>i(e).nombreTitular=s)},null,8,["modelValue"]),m(C,{message:n.errors.nombreTitular},null,8,["message"])])])]),o("div",ot,[o("div",st,[m(g,{for:"adultos"},{default:_(()=>[b(" Adultos ")]),_:1}),m(L,{"id-name":"adultos",modelValue:i(e).adultos,"onUpdate:modelValue":t[8]||(t[8]=s=>i(e).adultos=s)},null,8,["modelValue"]),m(C,{message:n.errors.adultos},null,8,["message"])]),o("div",it,[m(g,{for:"menores"},{default:_(()=>[b(" Menores ")]),_:1}),m(L,{"id-name":"menores",modelValue:i(e).menores,"onUpdate:modelValue":t[9]||(t[9]=s=>i(e).menores=s)},null,8,["modelValue"])]),nt,at,o("div",lt,[m(g,{for:"infantes"},{default:_(()=>[b(" Infantes ")]),_:1}),m(L,{"id-name":"infantes",modelValue:i(e).infantes,"onUpdate:modelValue":t[10]||(t[10]=s=>i(e).infantes=s)},null,8,["modelValue"])])]),i(e).tipoReservacion==1?(c(),u("div",rt,[o("div",ct,[o("div",ut,[m(g,{for:"park"},{default:_(()=>[b(" Parque ")]),_:1}),x(o("select",{onChange:t[11]||(t[11]=s=>N()),"onUpdate:modelValue":t[12]||(t[12]=s=>i(e).actividad=s),id:"park",name:"parque",ref:"park",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[dt,(c(!0),u(w,null,k(n.parks,s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,pt))),256))],544),[[A,i(e).actividad]])])])])):h("",!0),i(e).tipoReservacion==2?(c(),u("div",mt,[o("div",ft,[o("div",vt,[_t,i(r).tours?(c(),u("select",{key:0,onChange:t[13]||(t[13]=s=>d.setTour(s.target.value)),name:"parque",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[ht,(c(!0),u(w,null,k(i(r).tours,s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,bt))),256))],32)):h("",!0)])]),d.getFirstTour()?(c(),u("div",yt,[o("div",gt,[m(g,{for:"zone"},{default:_(()=>[b(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":t[14]||(t[14]=s=>d.getFirstTour().zone=s),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[xt,(c(!0),u(w,null,k(a.zones,s=>(c(),u("option",{value:s.id},v(s.name),9,wt))),256))],512),[[A,d.getFirstTour().zone]])])])):h("",!0),o("div",kt,[(l=d.getFirstTour())!=null&&l.zone?(c(),u("div",Pt,[m(g,{for:"pickUpZone"},{default:_(()=>[b(" Hotel del pickup ")]),_:1}),x(o("select",{onChange:t[15]||(t[15]=s=>d.setTourHotel(s.target.value)),"onUpdate:modelValue":t[16]||(t[16]=s=>d.getFirstTour().hotel=s),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[At,d.isHotelListByZoneLoaded(d.getFirstTour().zone)?(c(!0),u(w,{key:0},k(d.hotelList[i(V)(d.getFirstTour().zone)],s=>(c(),u("option",{class:"capitalize",value:s.id},v(s.name),9,Tt))),256)):h("",!0)],544),[[A,d.getFirstTour().hotel]])])):h("",!0)]),d.getFirstTour().pickup?(c(),u("div",Vt,[m(H,{msg:d.getFirstTour().pickup=="00:00:00"?"Lo sentimos, por el momento no tenemos un pickup disponible, estamos trabajando en ello.":`Su pickup sera a las: ${d.getFirstTour().pickup.slice(0,5)} hrs. en el hotel especificado, procure tener al menos 15 minutos de antelaci\xF3n.`},null,8,["msg"])])):h("",!0)])):h("",!0),i(e).tipoReservacion==3?(c(),u("div",zt,[o("div",Ft,[m(g,{for:"number_of_activitys"},{default:_(()=>[b(" Numero de actividades ")]),_:1}),m(L,{onInput:t[17]||(t[17]=s=>d.setMinTourPackage(s.target.value)),value:d.minTourPackage,min:"2","id-name":"number_of_activitys"},null,8,["value"])])])):h("",!0),i(e).tipoReservacion==3?(c(),u("div",Lt,[(c(!0),u(w,null,k(d.activityList,s=>(c(),u("div",St,[o("h2",null,"Actividad "+v(s.key),1),o("div",$t,[Rt,i(r).tours?x((c(),u("select",{key:0,"onUpdate:modelValue":p=>s.activity=p,onChange:p=>d.setActivity(s.key-1,p.target.value),name:"Activity",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Ct,(c(!0),u(w,null,k(i(r).tours,p=>(c(),u("option",{class:"capitalize",value:p.id},v(p.name),9,Nt))),256))],40,Ut)),[[A,s.activity]]):h("",!0)]),o("div",Bt,[m(g,{for:"fechaAvtidad"+s.key},{default:_(()=>[b(" Fecha de actividad "),i(e).errors.fechaActividad?(c(),u("span",Ht,"* Por favor llene este campo")):h("",!0)]),_:2},1032,["for"]),m(D,{required:"",modelValue:s.activity_date,"onUpdate:modelValue":p=>s.activity_date=p,min:new Date().toISOString().split("T")[0],"id-name":"fechaActividad"+s.key},null,8,["modelValue","onUpdate:modelValue","min","id-name"])]),o("div",Dt,[m(g,{for:"zone"},{default:_(()=>[b(" Zona ")]),_:1}),x(o("select",{"onUpdate:modelValue":p=>s.zone=p,onChange:t[18]||(t[18]=p=>d.isHotelListByZoneLoaded(p.target.value)),id:"zone",name:"zone",class:"capitalize w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Mt,(c(!0),u(w,null,k(a.zones,p=>(c(),u("option",{value:p.id},v(p.name),9,It))),256))],40,Zt),[[A,s.zone]])]),o("div",qt,[m(g,{for:"pickUpZone"},{default:_(()=>[b(" Hotel del pickup ")]),_:1}),d.isHotelListByZoneLoaded(s.zone)?x((c(),u("select",{key:0,"onUpdate:modelValue":p=>s.hotel=p,onChange:p=>d.setTourHotel(p.target.value,s.key-1),name:"pickUpZone",id:"pickUpZone",class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},[Et,(c(!0),u(w,null,k(d.hotelList[i(V)(s.zone)],p=>(c(),u("option",{class:"capitalize",value:p.id},v(p.name),9,jt))),256))],40,Qt)),[[A,s.hotel]]):h("",!0)]),s.pickup?(c(),u("div",Ot,[m(H,{msg:s.pickup=="00:00:00"?J():`Su pickup sera a las: ${s.pickup.slice(0,5)}.
 Precio publico de la actividad ${s.key}: $${s.public_price}, su precio de agencia: ${G(s.public_price)}`},null,8,["msg"])])):h("",!0),Gt,Jt]))),256))])):h("",!0),o("div",Kt,[o("div",Wt,[o("div",Xt,[m(g,{for:"notes"},{default:_(()=>[b(" Notas ")]),_:1}),x(o("textarea",{"onUpdate:modelValue":t[19]||(t[19]=s=>i(e).notas=s),class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md",name:"note",id:"notes",cols:"30",rows:"10"},null,512),[[re,i(e).notas]])])])])])])]}),actions:_(()=>[o("button",{type:"button",onClick:X,class:"hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Mostrar Cotizaci\xF3n "),o("button",{type:"button",onClick:Y,class:"hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Mostrar Form "),o("button",{type:"button",onClick:W,class:"hover:shadow-form rounded-md mr-16 bg-amber-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Mostrar Actividades "),o("button",{type:"button",onClick:t[20]||(t[20]=l=>O()),class:"hover:shadow-form rounded-md mr-16 bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"}," Reiniciar Cotizaci\xF3n "),Yt]),_:1})]))}},vo=ve(eo,[["__scopeId","data-v-76cec6e9"]]);export{vo as default};
