import{_ as l,f as d,o as f,i as x,w as o,a as r,u as e,I as n,e as s}from"./app.95cea80d.js";import{e as _,a as S,H as a,f as B,c as F,j as b,i as C,b as I,d as y}from"./index.5ab1b1ab.js";const E=s(" \u4E0A\u4E00\u6B65 "),v=s(" \u4E0B\u4E00\u6B65 "),h=s(" \u63D0\u4EA4 "),k=d({setup(g){const{SchemaField:m}=_({components:{FormItem:S,FormStep:a,Input:B}}),u={type:"object",properties:{collapse:{type:"void","x-component":"FormStep","x-component-props":{formStep:"{{formStep}}"},properties:{step1:{type:"void","x-component":"FormStep.StepPane","x-component-props":{title:"\u7B2C\u4E00\u6B65"},properties:{aaa:{type:"string",title:"AAA",required:!0,"x-decorator":"FormItem","x-component":"Input"}}},step2:{type:"void","x-component":"FormStep.StepPane","x-component-props":{title:"\u7B2C\u4E8C\u6B65"},properties:{bbb:{type:"string",title:"BBB",required:!0,"x-decorator":"FormItem","x-component":"Input"}}},step3:{type:"void","x-component":"FormStep.StepPane","x-component-props":{title:"\u7B2C\u4E09\u6B65"},properties:{ccc:{type:"string",title:"CCC",required:!0,"x-decorator":"FormItem","x-component":"Input"}}}}}}},c=F(),t=a.createFormStep(),i=()=>{t.submit(console.log)};return(w,p)=>(f(),x(e(y),{form:e(c)},{default:o(()=>[r(e(m),{schema:u,scope:{formStep:e(t)}},null,8,["scope"]),r(e(I),null,{default:o(()=>[r(e(b),null,{default:o(()=>[r(e(n),{disabled:!e(t).allowBack,onClick:p[0]||(p[0]=()=>{e(t).back()})},{default:o(()=>[E]),_:1},8,["disabled"]),r(e(n),{disabled:!e(t).allowNext,onClick:p[1]||(p[1]=()=>{e(t).next()})},{default:o(()=>[v]),_:1},8,["disabled"]),r(e(C),{disabled:e(t).allowNext,onSubmit:i},{default:o(()=>[h]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["form"]))}});var j=l(k,[["__file","json-schema.vue"]]);export{j as default};
