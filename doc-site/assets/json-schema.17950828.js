import{_ as d,f,o as x,i as _,w as o,a as t,u as e,I as c,e as a}from"./app.95cea80d.js";import{e as F,a as T,J as u,f as A,c as v,i as y,j as C,d as I}from"./index.5ab1b1ab.js";const B=a(" \u663E\u793A/\u9690\u85CF\u6700\u540E\u4E00\u4E2ATab "),E=a(" \u5207\u6362\u7B2C\u4E8C\u4E2ATab "),g=a(" \u63D0\u4EA4 "),h=f({setup(k){const{SchemaField:i}=F({components:{FormItem:T,FormTab:u,Input:A}}),b={type:"object",properties:{collapse:{type:"void","x-component":"FormTab","x-component-props":{formTab:"{{formTab}}"},properties:{tab1:{type:"void","x-component":"FormTab.TabPane","x-component-props":{label:"A1"},properties:{aaa:{type:"string",title:"AAA","x-decorator":"FormItem",required:!0,"x-component":"Input"}}},tab2:{type:"void","x-component":"FormTab.TabPane","x-component-props":{label:"A2"},properties:{bbb:{type:"string",title:"BBB","x-decorator":"FormItem",required:!0,"x-component":"Input"}}},tab3:{type:"void","x-component":"FormTab.TabPane","x-component-props":{label:"A3"},properties:{ccc:{type:"string",title:"CCC","x-decorator":"FormItem",required:!0,"x-component":"Input"}}}}}}},n=v(),s=u.createFormTab(),l=p=>{console.log(p)};return(p,r)=>(x(),_(e(I),{form:e(n)},{default:o(()=>[t(e(i),{schema:b,scope:{formTab:e(s)}},null,8,["scope"]),t(e(C),{"align-form-item":""},{default:o(()=>[t(e(c),{onClick:r[0]||(r[0]=()=>{e(n).query("tab3").take(m=>{m.visible=!m.visible})})},{default:o(()=>[B]),_:1}),t(e(c),{onClick:r[1]||(r[1]=()=>{e(s).setActiveKey("tab2")})},{default:o(()=>[E]),_:1}),t(e(y),{onSubmit:l},{default:o(()=>[g]),_:1})]),_:1})]),_:1},8,["form"]))}});var q=d(h,[["__file","json-schema.vue"]]);export{q as default};
