import{_ as s,f as i,o as c,i as l,w as t,a as r,u as e,e as u}from"./app.cedf735c.js";import{e as d,a as y,f as x,m as v,c as A,i as C,d as I}from"./index.0f9c5494.js";const f=u("\u63D0\u4EA4"),_=i({setup(F){const{SchemaField:p}=d({components:{FormItem:y,Input:x,ArrayCollapse:v}}),n=A(),a={type:"object",properties:{string_array:{type:"array","x-component":"ArrayCollapse",maxItems:3,"x-decorator":"FormItem",items:{type:"object","x-component":"ArrayCollapse.Item","x-component-props":{title:"\u5B57\u7B26\u4E32\u6570\u7EC4"},properties:{index:{type:"void","x-component":"ArrayCollapse.Index"},input:{type:"string","x-decorator":"FormItem",title:"Input",required:!0,"x-component":"Input"},remove:{type:"void","x-component":"ArrayCollapse.Remove"},moveUp:{type:"void","x-component":"ArrayCollapse.MoveUp"},moveDown:{type:"void","x-component":"ArrayCollapse.MoveDown"}}},properties:{addition:{type:"void",title:"\u6DFB\u52A0\u6761\u76EE","x-component":"ArrayCollapse.Addition"}}},array:{type:"array","x-component":"ArrayCollapse",maxItems:3,"x-decorator":"FormItem",items:{type:"object","x-component":"ArrayCollapse.Item","x-component-props":{title:"\u5BF9\u8C61\u6570\u7EC4"},properties:{index:{type:"void","x-component":"ArrayCollapse.Index"},input:{type:"string","x-decorator":"FormItem",title:"Input",required:!0,"x-component":"Input"},remove:{type:"void","x-component":"ArrayCollapse.Remove"},moveUp:{type:"void","x-component":"ArrayCollapse.MoveUp"},moveDown:{type:"void","x-component":"ArrayCollapse.MoveDown"}}},properties:{addition:{type:"void",title:"\u6DFB\u52A0\u6761\u76EE","x-component":"ArrayCollapse.Addition"}}},array_unshift:{type:"array","x-component":"ArrayCollapse",maxItems:3,"x-decorator":"FormItem",items:{type:"object","x-component":"ArrayCollapse.Item","x-component-props":{title:"\u5BF9\u8C61\u6570\u7EC4"},properties:{index:{type:"void","x-component":"ArrayCollapse.Index"},input:{type:"string","x-decorator":"FormItem",title:"Input",required:!0,"x-component":"Input"},remove:{type:"void","x-component":"ArrayCollapse.Remove"},moveUp:{type:"void","x-component":"ArrayCollapse.MoveUp"},moveDown:{type:"void","x-component":"ArrayCollapse.MoveDown"}}},properties:{addition:{type:"void",title:"\u6DFB\u52A0\u6761\u76EE(unshift)","x-component":"ArrayCollapse.Addition","x-component-props":{method:"unshift"}}}}}},m=o=>{console.log(o)};return(o,h)=>(c(),l(e(I),{form:e(n)},{default:t(()=>[r(e(p),{schema:a}),r(e(C),{onSubmit:m},{default:t(()=>[f]),_:1})]),_:1},8,["form"]))}});var B=s(_,[["__file","json-schema.vue"]]);export{B as default};
