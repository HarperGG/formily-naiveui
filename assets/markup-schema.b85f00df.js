import{_ as s,f as d,o as p,i as x,w as u,a as t,u as e,e as F}from"./app.cedf735c.js";import{e as _,a as f,f as h,D as v,E as B,c as E,i as b,j as I,d as S}from"./index.0f9c5494.js";const k=F("\u63D0\u4EA4"),D=d({setup(P){const{SchemaField:n,SchemaStringField:a,SchemaVoidField:c,SchemaObjectField:m}=_({components:{FormItem:f,Input:h,DatePicker:v,Editable:B}}),i=E(),l=r=>{console.log(r)};return(r,g)=>(p(),x(e(S),{form:e(i)},{default:u(()=>[t(e(n),null,{default:u(()=>[t(e(a),{name:"date",title:"\u65E5\u671F","x-decorator":"Editable","x-component":"DatePicker"}),t(e(a),{name:"input",title:"\u8F93\u5165\u6846","x-decorator":"Editable","x-component":"Input"}),t(e(c),{name:"void",title:"\u865A\u62DF\u8282\u70B9\u5BB9\u5668","x-component":"Editable.Popover","x-reactions":o=>{o.title=o.query(".void.date2").get("value")||o.title}},{default:u(()=>[t(e(a),{name:"date2",title:"\u65E5\u671F","x-decorator":"FormItem","x-component":"DatePicker"}),t(e(a),{name:"input2",title:"\u8F93\u5165\u6846","x-decorator":"FormItem","x-component":"Input"})]),_:1},8,["x-reactions"]),t(e(m),{name:"object",title:"\u5BF9\u8C61\u8282\u70B9\u5BB9\u5668","x-component":"Editable.Popover","x-reactions":o=>{o.title=o.value&&o.value.date||o.title}},{default:u(()=>[t(e(a),{name:"date",title:"\u65E5\u671F","x-decorator":"FormItem","x-component":"DatePicker"}),t(e(a),{name:"input",title:"\u8F93\u5165\u6846","x-decorator":"FormItem","x-component":"Input"})]),_:1},8,["x-reactions"])]),_:1}),t(e(I),null,{default:u(()=>[t(e(b),{onSubmit:l},{default:u(()=>[k]),_:1})]),_:1})]),_:1},8,["form"]))}});var V=s(D,[["__file","markup-schema.vue"]]);export{V as default};