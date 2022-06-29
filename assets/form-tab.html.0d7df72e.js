import{_ as c,r as o,o as p,c as i,a as n,d as a,F as h,e,b as r}from"./app.cedf735c.js";const d={},l=a("h1",{id:"formtab",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#formtab","aria-hidden":"true"},"#"),e(" FormTab")],-1),m=a("blockquote",null,[a("p",null,"\u9009\u9879\u5361\u8868\u5355"),a("p",null,"\u6CE8\u610F\uFF1A\u8BE5\u7EC4\u4EF6\u53EA\u9002\u7528\u4E8E Schema \u573A\u666F")],-1),u=a("h2",{id:"markup-schema-\u6848\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#markup-schema-\u6848\u4F8B","aria-hidden":"true"},"#"),e(" Markup Schema \u6848\u4F8B")],-1),b=a("h2",{id:"json-schema-\u6848\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#json-schema-\u6848\u4F8B","aria-hidden":"true"},"#"),e(" JSON Schema \u6848\u4F8B")],-1),_=r('<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="formtab-1" tabindex="-1"><a class="header-anchor" href="#formtab-1" aria-hidden="true">#</a> FormTab</h3><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>formTab</td><td>IFormTab</td><td>\u4F20\u5165\u901A\u8FC7 createFormTab \u521B\u5EFA\u51FA\u6765\u7684\u6A21\u578B</td><td></td></tr></tbody></table>',3),k=e("\u5176\u4F59\u53C2\u8003 "),f={href:"https://www.naiveui.com/zh-CN/os-theme/components/tabs",target:"_blank",rel:"noopener noreferrer"},v=e("https://www.naiveui.com/zh-CN/os-theme/components/tabs"),w=a("h3",{id:"formtab-tabpane",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#formtab-tabpane","aria-hidden":"true"},"#"),e(" FormTab.TabPane")],-1),y=e("\u53C2\u8003 "),x={href:"https://www.naiveui.com/zh-CN/os-theme/components/tabs#tab-pane-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},T=e("https://www.naiveui.com/zh-CN/os-theme/components/tabs#tab-pane-\u5C5E\u6027"),F=r(`<h3 id="formtab-createformtab" tabindex="-1"><a class="header-anchor" href="#formtab-createformtab" aria-hidden="true">#</a> FormTab.createFormTab</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ActiveKey</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>

<span class="token keyword">interface</span> <span class="token class-name">createFormTab</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>defaultActiveKey<span class="token operator">?</span><span class="token operator">:</span> ActiveKey<span class="token punctuation">)</span><span class="token operator">:</span> IFormTab
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFormTab</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u6FC0\u6D3B\u4E3B\u952E</span>
  activeKey<span class="token operator">:</span> ActiveKey
  <span class="token comment">//\u8BBE\u7F6E\u6FC0\u6D3B\u4E3B\u952E</span>
  <span class="token function">setActiveKey</span><span class="token punctuation">(</span>key<span class="token operator">:</span> ActiveKey<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre></div>`,2);function g(N,A){const t=o("dumi-previewer"),s=o("ExternalLinkIcon");return p(),i(h,null,[l,m,u,n(t,{demoPath:"guide/form-tab/markup-schema"}),b,n(t,{demoPath:"guide/form-tab/json-schema"}),_,a("p",null,[k,a("a",f,[v,n(s)])]),w,a("p",null,[y,a("a",x,[T,n(s)])]),F],64)}var E=c(d,[["render",g],["__file","form-tab.html.vue"]]);export{E as default};
