import{r as l,o as c,d as p,a as s,n as u,y as a}from"./app.4c8f443f.js";const d={class:"tab-container"},b={__name:"ModernSwitch",props:{option:{type:String,default:"opt-1"}},setup(i){const e=l(i.option),n=o=>{o==1?(e.value="opt-1",a.Inertia.visit(route("pickups.by.zone"))):o==2&&(e.value="opt-2",a.Inertia.visit(route("pickups.by.hotel")))};return(o,t)=>(c(),p("div",d,[s("button",{class:"tab tab--1",onClick:t[0]||(t[0]=r=>n(1))},"Hoteles"),s("button",{class:"tab tab--2",onClick:t[1]||(t[1]=r=>n(2))},"Parques"),s("div",{class:u([e.value,"indicator"])},null,2)]))}};export{b as _};
