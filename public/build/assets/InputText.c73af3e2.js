import{o as a,d}from"./app.cc4f2bf6.js";const n=["id","name","value","placeholder"],m={__name:"InputText",props:["modelValue","placeHolder","name","id"],emits:["update:modelValue"],setup(e){return(l,t)=>(a(),d("input",{id:e.id,type:"text",name:e.name,value:e.modelValue,placeholder:e.placeHolder,onInput:t[0]||(t[0]=o=>l.$emit("update:modelValue",o.target.value)),class:"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"},null,40,n))}};export{m as _};
