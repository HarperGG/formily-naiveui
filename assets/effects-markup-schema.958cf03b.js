import{_ as d,f as F,o as x,i as f,w as r,a as o,u as e,e as C}from"./app.cedf735c.js";import{e as _,a as A,f as I,m as y,c as h,o as v,l as S,i as b,d as B}from"./index.0f9c5494.js";const D=C("\u63D0\u4EA4"),q=F({setup(g){const{SchemaField:c,SchemaArrayField:u,SchemaObjectField:l,SchemaVoidField:a,SchemaStringField:n}=_({components:{FormItem:A,Input:I,ArrayCollapse:y}}),s=h({effects:()=>{v("array.*.aa",["value"],(t,m)=>{m.setFieldState(t.query(".bb"),i=>{i.visible=t.value!="123"})}),S("array.*.dd",t=>{t.visible=t.query(".cc").get("value")!="123"})}}),p=t=>{console.log(t)};return(t,m)=>(x(),f(e(B),{form:e(s)},{default:r(()=>[o(e(c),null,{default:r(()=>[o(e(u),{name:"array",maxItems:3,"x-component":"ArrayCollapse","x-decorator":"FormItem","x-component-props":{title:"\u5BF9\u8C61\u6570\u7EC4"}},{default:r(()=>[o(e(l),{"x-component":"ArrayCollapse.Item","x-decorator":"FormItem","x-component-props":{title:"\u5BF9\u8C61\u6570\u7EC4"}},{default:r(()=>[o(e(a),{"x-component":"ArrayCollapse.Index"}),o(e(n),{name:"aa","x-decorator":"FormItem",title:"AA",required:"",description:"AA\u8F93\u5165123\u65F6\u9690\u85CFBB","x-component":"Input"}),o(e(n),{name:"bb","x-decorator":"FormItem",title:"BB",required:"","x-component":"Input"}),o(e(n),{name:"cc","x-decorator":"FormItem",title:"CC",required:"",description:"CC\u8F93\u5165123\u65F6\u9690\u85CFDD","x-component":"Input"}),o(e(n),{name:"dd","x-decorator":"FormItem",title:"DD",required:"","x-component":"Input"}),o(e(a),{"x-component":"ArrayCollapse.Remove"}),o(e(a),{"x-component":"ArrayCollapse.MoveUp"}),o(e(a),{"x-component":"ArrayCollapse.MoveDown"})]),_:1}),o(e(a),{"x-component":"ArrayCollapse.Addition",title:"\u6DFB\u52A0\u6761\u76EE"})]),_:1})]),_:1}),o(e(b),{onSubmit:p},{default:r(()=>[D]),_:1})]),_:1},8,["form"]))}});var w=d(q,[["__file","effects-markup-schema.vue"]]);export{w as default};
