import{o as d,d as l,a as t,t as s,f as o}from"./app.ae36ff1f.js";const i={class:"QuotePDF px-[69px] py-[48px]",spellcheck:"false"},h={class:"flex justify-between",spellcheck:"false"},r=t("div",null,[t("img",{class:"w-[350px]",src:"/assets/freetravelers-logo.jpg",alt:"Logo Freetravelers"})],-1),n={class:"border-collapse border w-[517px] text-center",style:{width:"517px"},border:"1"},a=t("thead",null,null,-1),c=t("tr",{style:{height:"30px"}},[t("td",{style:{height:"30px"},class:"border"},"C\xFApon de servicio / service coupon")],-1),x={style:{height:"40px"}},p={style:{height:"40px"},class:"border"},g=t("tr",{style:{height:"30px"}},[t("td",{style:{height:"30px"},class:"border"},"Lugar y fecha / Date and place")],-1),_={style:{height:"40px"}},y={style:{height:"40px"},class:"border"},b={class:"flex mt-4"},u={class:"border-collapse border",style:{width:"1084px"}},f={style:{height:"60px","text-align":"center"}},m=t("td",{style:{height:"60px",border:"1px solid",width:"301px"},spellcheck:"false"},"Nombre / Name",-1),w={style:{height:"60px",border:"1px solid"},colspan:"3"},v=t("tr",{style:{height:"26.5px","text-align":"center"}},[t("td",{style:{height:"58.5px",border:"1px solid"},rowspan:"2"},"Pasajeros / Passengers"),t("td",{style:{height:"26.5px",border:"1px solid",width:"258.66px","font-size":"x-small"}},"Adultos ( 12 a\xF1os o mas ) / Adults ( ages 12 and more )"),t("td",{style:{height:"26.5px",border:"1px solid",width:"258.66px","font-size":"x-small"}},"Menores (5 a 11 a\xF1os)/Minors (ages 5 to 11)"),t("td",{style:{height:"26.5px",border:"1px solid",width:"258.66px","font-size":"x-small"}},"Infantes (0 a 4 a\xF1os)/Infants (ages 0 to 4)")],-1),q={style:{height:"32px","text-align":"center"}},k={style:{height:"32px",border:"1px solid"}},P={style:{height:"32px",border:"1px solid"}},D={style:{height:"32px",border:"1px solid"}},E={class:"mt-4 flex flex-col"},A=t("div",null,[t("p",{class:"font-bold"},"Descripci\xF3n del servicio / Description of the service:")],-1),C={style:{width:"1077",border:"solid 1px"}},j={style:{height:"59px","text-align":"center"},spellcheck:"false"},F=t("td",{style:{height:"59px",border:"1px solid",width:"301px"}},"Fecha Actividad/ Date of the activity:",-1),M={style:{height:"59px",border:"1px solid",width:"474.98px","max-width":"1px"},colspan:"2"},N=t("td",{style:{height:"59px",border:"1px solid",width:"301.2px","text-align":"left"}},[o("Horario /"),t("br"),o("Schedule "),t("span",{style:{"padding-left":"24px"}})],-1),z=t("tr",{style:{height:"59px","text-align":"center"}},[t("td",{style:{height:"59px",border:"1px solid"}},"Lugar de Pick up"),t("td",{style:{height:"59px",border:"1px solid",width:"474.98px","max-width":"1px"},colspan:"2"},"\xA0\xA0"),t("td",{style:{height:"59px",border:"1px solid",width:"301.2px","text-align":"left","font-style":"bold"}},[o("Cuarto /"),t("br"),o("Room "),t("span",{style:{"padding-left":"24px"}})])],-1),B={style:{height:"59px","text-align":"center"}},L=t("td",{style:{height:"59px",border:"1px solid"}},"Entrada/ Entrance",-1),O={style:{height:"59px",border:"1px solid",width:"474.98px","max-width":"1px"},colspan:"2"},Q={style:{height:"59px",border:"1px solid"}},T=t("tr",{style:{height:"59px","text-align":"center"}},[t("td",{style:{height:"59px",border:"1px solid"}},"Tour"),t("td",{style:{height:"59px",border:"1px solid","max-width":"11.27px"},colspan:"2"},"\xA0\xA0"),t("td",{style:{height:"59px",border:"1px solid"}},"\xA0")],-1),I=t("tr",{style:{height:"59px"}},[t("td",{style:{height:"59px",border:"1px solid","text-align":"center"}},"PAQUETE/ PACKAGE"),t("td",{style:{height:"59px"},colspan:"3"},"\xA0\xA0\xA0")],-1),R=t("tr",{style:{height:"59px"}},[t("td",{style:{height:"59px"},colspan:"4"},"\xA0\xA0\xA0\xA0")],-1),S=t("div",{class:"self-end flex"},[t("p",{class:"font-bold"},[o("Clave de confirmacion / "),t("br"),o(" Confirmation code")]),t("div",{class:"w-[576px] h-[59px] border border-black border-t-0"})],-1),U={__name:"QuotePDF",props:{quote:Object},setup(e){return console.log(e.quote),(G,H)=>(d(),l("div",i,[t("div",h,[r,t("div",null,[t("table",n,[a,t("tbody",null,[c,t("tr",x,[t("td",p,s(e.quote.coupon.code),1)]),g,t("tr",_,[t("td",y,s(e.quote.created_at),1)])])])])]),t("div",b,[t("table",u,[t("tbody",null,[t("tr",f,[m,t("td",w,s(e.quote.holder_name),1)]),v,t("tr",q,[t("td",k,s(e.quote.adults),1),t("td",P,s(e.quote.minors),1),t("td",D,s(e.quote.infants),1)])])])]),t("div",E,[A,t("table",C,[t("tbody",null,[t("tr",j,[F,t("td",M,s(e.quote.activity_date),1),N]),z,t("tr",B,[L,t("td",O,s(e.quote.activity.name),1),t("td",Q,s(e.quote.national==1?"PROMOMEX":""),1)]),T,I,R])]),S])]))}};export{U as default};