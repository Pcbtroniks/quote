import{o as i,d as n,a as t,t as o,F as s}from"./app.03a44190.js";const c=["id","value","name","checked"],d=["for"],g={__name:"InputRadio",props:{name:{type:String,required:!0},label:{type:String,required:!1},modelValue:{type:[String,Number],required:!0},value:{type:[String,Number],required:!1},id:{type:String,required:!1},callback:{type:Function,required:!1}},emits:["update:modelValue"],setup(l,{emit:r}){const e=l,u=a=>{e.callback&&e.callback(a.target.value),r("update:modelValue",a.target.value)};return(a,m)=>(i(),n(s,null,[t("input",{type:"radio",id:e.id,value:e.value,name:e.name,checked:e.value==e.modelValue,onChange:u,class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"},null,40,c),t("label",{for:e.id,class:"w-full py-4 ml-2 text-sm font-medium text-gray-900"},o(e.label),9,d)],64))}};export{g as _};