import{_ as p,f as F,o as x,i as f,w as o,a,u as e,e as C}from"./app.95cea80d.js";import{e as _,a as A,f as y,A as I,c as h,o as v,l as S,i as b,d as B}from"./index.5ab1b1ab.js";const D=C("\u63D0\u4EA4"),q=F({setup(g){const{SchemaField:m,SchemaArrayField:u,SchemaVoidField:t,SchemaStringField:n,SchemaObjectField:s}=_({components:{FormItem:A,Input:y,ArrayCards:I}}),d=h({effects:()=>{v("array.*.aa",["value"],(r,c)=>{c.setFieldState(r.query(".bb"),l=>{l.visible=r.value!="123"})}),S("array.*.dd",r=>{r.visible=r.query(".cc").get("value")!="123"})}}),i=r=>{console.log(r)};return(r,c)=>(x(),f(e(B),{form:e(d)},{default:o(()=>[a(e(m),null,{default:o(()=>[a(e(u),{name:"array",maxItems:3,"x-component":"ArrayCards","x-decorator":"FormItem","x-component-props":{title:"\u5BF9\u8C61\u6570\u7EC4"}},{default:o(()=>[a(e(s),null,{default:o(()=>[a(e(t),{"x-component":"ArrayCards.Index"}),a(e(n),{name:"aa","x-decorator":"FormItem",title:"AA",required:"",description:"AA\u8F93\u5165123\u65F6\u9690\u85CFBB","x-component":"Input"}),a(e(n),{name:"bb","x-decorator":"FormItem",title:"BB",required:"","x-component":"Input"}),a(e(n),{name:"cc","x-decorator":"FormItem",title:"CC",required:"",description:"CC\u8F93\u5165123\u65F6\u9690\u85CFDD","x-component":"Input"}),a(e(n),{name:"dd","x-decorator":"FormItem",title:"DD",required:"","x-component":"Input"}),a(e(t),{"x-component":"ArrayCards.Remove"}),a(e(t),{"x-component":"ArrayCards.MoveUp"}),a(e(t),{"x-component":"ArrayCards.MoveDown"})]),_:1}),a(e(t),{"x-component":"ArrayCards.Addition",title:"\u6DFB\u52A0\u6761\u76EE"})]),_:1})]),_:1}),a(e(b),{onSubmit:i},{default:o(()=>[D]),_:1})]),_:1},8,["form"]))}});var w=p(q,[["__file","effects-markup-schema.vue"]]);export{w as default};
