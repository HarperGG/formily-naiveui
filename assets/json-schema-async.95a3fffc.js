import{_ as p,f as d,o as f,i as _,w as c,a as s,u as o,e as x}from"./app.cedf735c.js";import{c as h,e as y,a as S,g as b,i as g,k as D,q as F}from"./index.0f9c5494.js";const v=x("\u63D0\u4EA4"),A=d({setup(B){const n={type:"object",properties:{linkage:{type:"string",title:"\u8054\u52A8\u9009\u62E9\u6846",enum:[{label:"\u53D1\u8BF7\u6C421",value:1},{label:"\u53D1\u8BF7\u6C422",value:2}],"x-decorator":"FormItem","x-component":"Select","x-component-props":{style:"width: 240px;"}},select:{type:"string",title:"\u5F02\u6B65\u9009\u62E9\u6846","x-decorator":"FormItem","x-component":"Select","x-component-props":{style:"width: 240px;"},"x-reactions":["{{useAsyncDataSource(loadData)}}"]}}},u=t=>e=>{e.loading=!0,t(e).then(F.bound(a=>{e.dataSource=a,e.loading=!1}))},r=async t=>{const e=t.query("linkage").get("value");return e?new Promise(a=>{setTimeout(()=>{e===1?a([{label:"AAA",value:"aaa"},{label:"BBB",value:"ccc"}]):e===2&&a([{label:"CCC",value:"ccc"},{label:"DDD",value:"ddd"}])},1500)}):[]},l=h(),{SchemaField:m}=y({components:{FormItem:S,Select:b}}),i=t=>{console.log(t)};return(t,e)=>(f(),_(o(D),{form:o(l)},{default:c(()=>[s(o(m),{schema:n,scope:{useAsyncDataSource:u,loadData:r}},null,8,["scope"]),s(o(g),{onSubmit:i},{default:c(()=>[v]),_:1})]),_:1},8,["form"]))}});var w=p(A,[["__file","json-schema-async.vue"]]);export{w as default};