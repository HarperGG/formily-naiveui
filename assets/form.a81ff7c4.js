var F=Object.defineProperty;var l=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var u=(t,e,o)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))S.call(e,o)&&u(t,o,e[o]);if(l)for(var o of l(e))b.call(e,o)&&u(t,o,e[o]);return t};import{c as h,e as x,f as g,g as v,a as B,j as I,i as A,k}from"./index.0f9c5494.js";import{_ as w,r,o as G,i as q,w as m,a as n,e as C}from"./app.cedf735c.js";const N=h(),V=x({components:{Input:g,Select:v,FormItem:B}}),$={components:s({FormButtonGroup:I,Submit:A,Form:k},V),data(){return{form:N}},methods:{log(t){console.log(t)}}},j=C("\u63D0\u4EA4");function T(t,e,o,y,i,a){const c=r("SchemaStringField"),_=r("SchemaField"),p=r("Submit"),d=r("FormButtonGroup"),f=r("Form",!0);return G(),q(f,{form:i.form,"label-col":6,"wrapper-col":10,onAutoSubmit:a.log,onAutoSubmitFailed:a.log},{default:m(()=>[n(_,null,{default:m(()=>[n(c,{name:"input",title:"\u8F93\u5165\u6846","x-decorator":"FormItem","x-component":"Input",required:!0}),n(c,{name:"select",title:"\u9009\u62E9\u6846","x-decorator":"FormItem","x-component":"Select",enum:[{label:"\u9009\u98791",value:1},{label:"\u9009\u98792",value:2}],required:!0})]),_:1}),n(d,{"align-form-item":""},{default:m(()=>[n(p,null,{default:m(()=>[j]),_:1})]),_:1})]),_:1},8,["form","onAutoSubmit","onAutoSubmitFailed"])}var H=w($,[["render",T],["__file","form.vue"]]);export{H as default};
