import{_ as c,f as d,o as m,i as p,w as o,a as r,u as e,e as u}from"./app.cedf735c.js";import{e as l,a as f,f as x,A as y,c as _,i as v,d as h}from"./index.0f9c5494.js";const A=u("\u63D0\u4EA4"),C=d({setup(F){const{SchemaField:a}=l({components:{FormItem:f,Input:x,ArrayCards:y}}),s=_(),n={type:"object",properties:{array:{type:"array","x-component":"ArrayCards",maxItems:3,title:"\u5BF9\u8C61\u6570\u7EC4",items:{type:"object",properties:{index:{type:"void","x-component":"ArrayCards.Index"},aa:{type:"string","x-decorator":"FormItem",title:"AA",required:!0,"x-component":"Input",description:"\u8F93\u5165123"},bb:{type:"string",title:"BB",required:!0,"x-decorator":"FormItem","x-component":"Input","x-reactions":[{dependencies:[".aa"],when:"{{$deps[0] != '123'}}",fulfill:{schema:{title:"BB","x-disabled":!0}},otherwise:{schema:{title:"Changed","x-disabled":!1}}}]},remove:{type:"void","x-component":"ArrayCards.Remove"},moveUp:{type:"void","x-component":"ArrayCards.MoveUp"},moveDown:{type:"void","x-component":"ArrayCards.MoveDown"}}},properties:{addition:{type:"void",title:"\u6DFB\u52A0\u6761\u76EE","x-component":"ArrayCards.Addition"}}}}},i=t=>{console.log(t)};return(t,b)=>(m(),p(e(h),{form:e(s)},{default:o(()=>[r(e(a),{schema:n}),r(e(v),{onSubmit:i},{default:o(()=>[A]),_:1})]),_:1},8,["form"]))}});var w=c(C,[["__file","effects-json-schema.vue"]]);export{w as default};