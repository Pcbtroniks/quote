import{d,o as r}from"./app.a257f5e8.js";const o=["min","max","id","value","name"],c={__name:"InputRange",props:{modelValue:Number,idName:String,name:String,max:Number,min:Number,id:String},emits:["update:modelValue"],setup(e){return(i,a)=>{var n,m,t,u;return r(),d("input",{type:"range",min:(n=e.min)!=null?n:0,max:(m=e.max)!=null?m:100,id:(t=e.idName)!=null?t:e.id,value:e.modelValue,name:(u=e.idName)!=null?u:e.name,onInput:a[0]||(a[0]=l=>i.$emit("update:modelValue",l.target.value)),class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"},null,40,o)}}};export{c as default};
