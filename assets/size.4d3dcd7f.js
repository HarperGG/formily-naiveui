import{f as p,o as s,i as f,w as l,a,u as e,_ as x}from"./app.cedf735c.js";import{c as F,o as I,e as S,a as v,f as h,g as _,C as b,D as z,B as C,I as D,G as k,k as q}from"./index.0f9c5494.js";var w=p({setup(g){const c=(o,{slots:r})=>a("div",o,[r==null?void 0:r.default()]),n=F({values:{size:"default"},effects:()=>{I("size",["value"],(o,r)=>{r.setFieldState("sizeWrap.*",m=>{m.decorator[1]&&(m.decorator[1].size=o.value)})})}}),{SchemaField:i,SchemaStringField:t,SchemaVoidField:u,SchemaBooleanField:d}=S({components:{FormItem:v,Input:h,Select:_,Cascader:b,DatePicker:z,Switch:C,InputNumber:D,Radio:k,Div:c}});return(o,r)=>(s(),f(e(q),{form:e(n)},{default:l(()=>[a(e(i),null,{default:l(()=>[a(e(t),{name:"size",title:"Radio.Group","x-decorator":"FormItem","x-component":"Radio.Group",enum:[{value:"small",label:"Small"},{value:"default",label:"Default"},{value:"large",label:"Large"}]}),a(e(u),{name:"sizeWrap","x-component":"Div"},{default:l(()=>[a(e(t),{name:"input",title:"Input","x-decorator":"FormItem","x-component":"Input",required:""}),a(e(t),{name:"select1",title:"Multiple Select","x-decorator":"FormItem","x-component":"Select",enum:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2}],"x-component-props":{multiple:!0,placeholder:"\u8BF7\u9009\u62E9"},required:""}),a(e(t),{name:"select2",title:"Select","x-decorator":"FormItem","x-component":"Select",enum:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2}],"x-component-props":{placeholder:"\u8BF7\u9009\u62E9"},required:""}),a(e(t),{name:"Cascader",title:"Cascader","x-decorator":"FormItem","x-component":"Cascader",required:""}),a(e(t),{name:"DatePicker",title:"DatePicker","x-decorator":"FormItem","x-component":"DatePicker",required:""}),a(e(t),{name:"InputNumber",title:"InputNumber","x-decorator":"FormItem","x-component":"InputNumber",required:""}),a(e(d),{name:"Switch",title:"Switch","x-decorator":"FormItem","x-component":"Switch",required:""})]),_:1})]),_:1})]),_:1},8,["form"]))}}),P=x(w,[["__file","size.vue"]]);export{P as default};