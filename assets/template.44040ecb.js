import{_ as g,f as x,o as F,i as b,w as i,a as d,u as o,e as k}from"./app.cedf735c.js";import{c as C,a as j,C as v,F as w,i as A,k as S,l as q,q as y}from"./index.0f9c5494.js";const B=k("\u63D0\u4EA4"),E=x({setup(N){const a=(t={})=>Object.entries(t).reduce((e,[s,n])=>{if(typeof n=="string")return e.concat({label:n,value:s});const{name:f,code:_,cities:p,districts:h}=n,r=a(p),c=a(h);return e.concat({label:f,value:_,children:r.length?r:c.length?c:void 0})},[]),l=t=>{q(t,e=>{e.loading=!0,fetch("//unpkg.com/china-location/dist/location.json").then(s=>s.json()).then(y.bound(s=>{e.dataSource=a(s),e.loading=!1}))})},u=C({effects:()=>{l("address")}}),m=t=>{console.log(t)};return(t,e)=>(F(),b(o(S),{form:o(u)},{default:i(()=>[d(o(w),{name:"address",title:"\u5730\u5740\u9009\u62E9",required:"",decorator:[o(j)],component:[o(v),{style:{width:"240px"}}]},null,8,["decorator","component"]),d(o(A),{onSubmit:m},{default:i(()=>[B]),_:1})]),_:1},8,["form"]))}});var I=g(E,[["__file","template.vue"]]);export{I as default};