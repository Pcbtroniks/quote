const n=async r=>await axios.get(route("localisation.currencies.api.get",{currency:r})),a=(r,e)=>(r=Number.parseFloat(r),e=Number.parseFloat(e),Number.parseFloat(r*e).toFixed(2)),t=(r,e,s)=>e==s?r:a(r,s),o=(r,e)=>r*e;export{t as A,a as C,n as G,o as M};
