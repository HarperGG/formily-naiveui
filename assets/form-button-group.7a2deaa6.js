var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var s=(o,e,t)=>e in o?x(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,u=(o,e)=>{for(var t in e||(e={}))g.call(e,t)&&s(o,t,e[t]);if(c)for(var t of c(e))b.call(e,t)&&s(o,t,e[t]);return o};import{e as v,a as B,f as I,g as G,d as R,h as w,i as y,R as L,j as P,c as k}from"./index.0f9c5494.js";import{_ as q,r,o as C,i as N,w as m,a as n,e as _}from"./app.cedf735c.js";const V=v({components:{FormItem:B,Input:I,Select:G}}),$={components:u({FormProvider:R,FormLayout:w,Submit:y,Reset:L,FormButtonGroup:P},V),data(){return{form:k()}},methods:{log(o){console.log(o)}}},j=_(" \u63D0\u4EA4 "),T=_("\u91CD\u7F6E");function z(o,e,t,A,l,i){const a=r("SchemaStringField"),p=r("SchemaField"),d=r("Submit"),f=r("Reset"),F=r("FormButtonGroup",!0),S=r("FormLayout"),h=r("FormProvider");return C(),N(h,{form:l.form},{default:m(()=>[n(S,{"label-col":6,"wrapper-col":10},{default:m(()=>[n(p,null,{default:m(()=>[n(a,{required:"",title:"\u8F93\u5165\u6846","x-decorator":"FormItem","x-component":"Input"}),n(a,{required:"",title:"\u8F93\u5165\u6846","x-decorator":"FormItem","x-component":"Input"})]),_:1}),n(F,{"align-form-item":""},{default:m(()=>[n(d,{onSubmit:i.log},{default:m(()=>[j]),_:1},8,["onSubmit"]),n(f,null,{default:m(()=>[T]),_:1})]),_:1})]),_:1})]),_:1},8,["form"])}var J=q($,[["render",z],["__file","form-button-group.vue"]]);export{J as default};
