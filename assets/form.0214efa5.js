import{f as w,a as e,am as C,an as D,o as P,i as j,w as F,u as r,m as y,l as G,e as S,_ as B}from"./app.cedf735c.js";import{w as V,x as g,k as E,c as N,e as O,f as z,g as L,D as Q,a as T,d as A,y as U,j as u,z as _,i as W,R as q}from"./index.0f9c5494.js";function f(c){return typeof c=="function"||Object.prototype.toString.call(c)==="[object Object]"&&!C(c)}var H=w({setup(c){const I=a=>{const o=g.createFormGrid({maxColumns:4,maxWidth:240,maxRows:a,shouldVisible:(n,t)=>n.index===t.childSize-1||t.maxRows===1/0?!0:n.shadowRow<a+1}),i=y(!1),m=y(""),x=(n,t)=>n<a+1?"incomplete-wrap":t>a?"collapsible":"complete-wrap",d=U(()=>{i.value=o.maxRows===1/0;const n=o.shadowRows,t=o.fullnessLastColumn?o.shadowRows-1:o.shadowRows;m.value=x(n,t)});return G(d),{grid:o,expanded:i,toggle:()=>{o.maxRows===1/0?o.maxRows=a:o.maxRows=1/0},type:m}},h=V(w({setup(a,{slots:o}){const{grid:i,expanded:m,toggle:x,type:d}=I(1),p=()=>e(_,null,{default:()=>[e(W,{onSubmit:console.log},{default:()=>[S("\u67E5\u8BE2")]}),e(q,null,{default:()=>[S("\u91CD\u7F6E")]})]}),n=()=>{let t;if(d.value==="incomplete-wrap"){let s;return e(u.FormItem,null,{default:()=>[e(u,null,f(s=p())?s:{default:()=>[s]})]})}if(d.value==="collapsible"){let s;return e(_,null,{default:()=>[e(u,null,{default:()=>[e("a",{href:"",onClick:R=>{R.preventDefault(),x()}},[m.value?"\u6536\u8D77":"\u5C55\u5F00"])]}),e(u,{align:"right"},f(s=p())?s:{default:()=>[s]})]})}return e(u,{align:"right",style:{display:"flex",width:"100%"}},f(t=p())?t:{default:()=>[t]})};return()=>{let t;return e(E,D(a,{layout:"vertical",feedbackLayout:"terse"}),{default:()=>[e(g,{grid:i},{default:()=>[o.default(),e(g.GridColumn,{gridSpan:-1,style:{display:"flex",justifyContent:"space-between"}},f(t=n())?t:{default:()=>[t]})]})]})}}})),b=N(),{SchemaField:v,SchemaObjectField:k,SchemaStringField:l}=O({components:{QueryForm:h,Input:z,Select:L,DatePicker:Q,FormItem:T}});return(a,o)=>(P(),j(r(A),{form:r(b)},{default:F(()=>[e(r(v),null,{default:F(()=>[e(r(k),{"x-component":"QueryForm"},{default:F(()=>[e(r(l),{name:"input1",title:"Input 1","x-component":"Input","x-decorator":"FormItem"}),e(r(l),{name:"input2",title:"Input 2","x-component":"Input","x-decorator":"FormItem"}),e(r(l),{name:"select1",title:"Select 1","x-component":"Select","x-decorator":"FormItem"}),e(r(l),{name:"select2",title:"Select 2","x-component":"Select","x-decorator":"FormItem"}),e(r(l),{name:"date",title:"DatePicker","x-component":"DatePicker","x-decorator":"FormItem"}),e(r(l),{name:"dateRange",title:"DatePicker","x-component":"DatePicker","x-decorator":"FormItem","x-decorator-props":{gridSpan:"span 2"},"x-component-props":{type:"daterange"}}),e(r(l),{name:"select3",title:"Select 3","x-component":"Select","x-decorator":"FormItem"})]),_:1})]),_:1})]),_:1},8,["form"]))}}),M=B(H,[["__file","form.vue"]]);export{M as default};