const w=n=>s("2023-07-01","2023-08-15",n)?"high":"low";function s(n,r,a){const c=new Date(n),t=new Date(r),u=new Date(a);return u>=c&&u<=t}const f=async(n,r=null,a)=>{try{return await(await fetch(n,r)).json()}catch{alert("Error al cargar los datos, por favor recargue la pagina")}finally{a&&a()}},e=async n=>await f(route("hotels",{zone:n})),p=async(n,r={})=>n==1&&!r.cancun?(r.cancun=await e(1),r):n==1&&r.cancun?r:n==2&&!r.rm?(r.rm=await e(2),r):n==2&&r.rm?r:n==3&&!r.pdc?(r.pdc=await e(3),r):(n==3&&r.pdc,r);export{w as g,p as l};