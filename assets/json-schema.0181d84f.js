import{f as m,o as l,i as p,w as d,u as f,I as h,e as n,a as o,_ as x}from"./app.cedf735c.js";import{e as _,a as g,f as F,u as r,h as I}from"./index.0f9c5494.js";const C=n(" \u70B9\u51FB\u6253\u5F00\u8868\u5355 ");var y=m({setup(b){const{SchemaField:a}=_({components:{FormItem:g,Input:F}}),s={data(){return{schema:{type:"object",properties:{aaa:{type:"string",title:"\u8F93\u5165\u68461",required:!0,"x-decorator":"FormItem","x-component":"Input"},bbb:{type:"string",title:"\u8F93\u5165\u68462",required:!0,"x-decorator":"FormItem","x-component":"Input"},ccc:{type:"string",title:"\u8F93\u5165\u68463",required:!0,"x-decorator":"FormItem","x-component":"Input"},ddd:{type:"string",title:"\u8F93\u5165\u68464",required:!0,"x-decorator":"FormItem","x-component":"Input"}}}}},render(){return o(I,{labelCol:6,wrapperCol:10},{default:()=>[o(a,{schema:this.schema},null),o(r.Footer,null,{default:()=>[o("span",{style:{marginLeft:"4px"}},[n("\u6269\u5C55\u6587\u6848")])]})]})}},c={content:"soft",footer:"soft"},i={width:"600px"},u=()=>{r({title:"\u8868\u5355\u5F39\u6846",width:"600px",segmented:c,style:i,size:"huge"},s).forOpen((e,t)=>{setTimeout(()=>{t({initialValues:{aaa:"123"}})},1e3)}).forConfirm((e,t)=>{setTimeout(()=>{console.log(e),t(e)},1e3)}).forCancel((e,t)=>{setTimeout(()=>{console.log(e),t(e)},1e3)}).open().then(console.log).catch(console.error)};return(e,t)=>(l(),p(f(h),{onClick:u},{default:d(()=>[C]),_:1}))}}),T=x(y,[["__file","json-schema.vue"]]);export{T as default};