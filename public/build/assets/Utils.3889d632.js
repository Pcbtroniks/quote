const r=n=>{var e;const a=[{id:1,name:"Cancun"},{id:2,name:"Riviera Maya"},{id:3,name:"Playa del Carmen"}];return n?(e=a[n])!=null?e:a[1]:a},o=n=>n=n==2?1:n,c=n=>{var e;return(e={1:"Cancun",2:"Riviera Maya",3:"Playa del Carmen"}[n])!=null?e:"N/D"},d=(n,a)=>{var t;const e=a.find(s=>s.id==n);return(t=e==null?void 0:e.name)!=null?t:"N/D"},u=n=>{if(n===void 0||n==="")return"";n=n.trim();const[a,e]=n.split(":"),t=a.length===1?`0${a}`:a,s=e.length===1?`0${e}`:e;return`${t}:${s}`},i=n=>/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(n);export{o as P,r as a,u as f,d as g,i as v,c as z};
