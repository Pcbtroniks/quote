import{r as n,m as r,o as l,d as i}from"./app.cc4f2bf6.js";const d=["value"],p={__name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(u,{expose:t}){const e=n(null);return r(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(s,o)=>(l(),i("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:u.modelValue,onInput:o[0]||(o[0]=a=>s.$emit("update:modelValue",a.target.value))},null,40,d))}};export{p as _};
