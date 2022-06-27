import{_ as r,r as t,o as l,c,a as s,d as a,F as i,b as p,e as n}from"./app.95cea80d.js";const k={},u=p('<h1 id="formdialog" tabindex="-1"><a class="header-anchor" href="#formdialog" aria-hidden="true">#</a> FormDialog</h1><blockquote><p>\u5F39\u7A97\u8868\u5355\uFF0C\u4E3B\u8981\u7528\u5728\u7B80\u5355\u7684\u4E8B\u4EF6\u6253\u5F00\u8868\u5355\u573A\u666F</p></blockquote><h2 id="markup-schema-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#markup-schema-\u6848\u4F8B" aria-hidden="true">#</a> Markup Schema \u6848\u4F8B</h2><p>\u4EE5\u4E0B\u4F8B\u5B50\u6F14\u793A\u4E86 FormDialog \u7684\u51E0\u4E2A\u80FD\u529B\uFF1A</p><ul><li>\u5FEB\u901F\u6253\u5F00\uFF0C\u5173\u95ED\u80FD\u529B</li><li>\u4E2D\u95F4\u4EF6\u80FD\u529B\uFF0C\u81EA\u52A8\u51FA\u73B0\u52A0\u8F7D\u6001</li><li>\u6E32\u67D3\u51FD\u6570\u5185\u53EF\u4EE5\u54CD\u5E94\u5F0F\u80FD\u529B</li><li>\u4E0A\u4E0B\u6587\u5171\u4EAB\u80FD\u529B</li></ul>',5),d=a("h2",{id:"json-schema-\u6848\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#json-schema-\u6848\u4F8B","aria-hidden":"true"},"#"),n(" JSON Schema \u6848\u4F8B")],-1),m=a("h2",{id:"template-\u6848\u4F8B",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#template-\u6848\u4F8B","aria-hidden":"true"},"#"),n(" Template \u6848\u4F8B")],-1),h=p(`<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="formdialog-1" tabindex="-1"><a class="header-anchor" href="#formdialog-1" aria-hidden="true">#</a> FormDialog</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IFormProps<span class="token punctuation">,</span> Form <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@formily/core&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">FormDialogContentProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span> form<span class="token operator">:</span> Form <span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">FormDialogContent</span> <span class="token operator">=</span> Component <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token operator">:</span> FormDialogContentProps<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode<span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token class-name">DialogTitle</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> Component <span class="token operator">|</span> VNode <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode<span class="token punctuation">)</span>

<span class="token keyword">type</span> <span class="token class-name">IFormDialogProps</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>DialogProps<span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  title<span class="token operator">?</span><span class="token operator">:</span> DialogTitle
  footer<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> Component <span class="token operator">|</span> VNode <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode<span class="token punctuation">)</span>
  okButtonProps<span class="token operator">?</span><span class="token operator">:</span> ButtonProps
  cancelButtonProps<span class="token operator">?</span><span class="token operator">:</span> ButtonProps
  loadingText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFormDialog</span> <span class="token punctuation">{</span>
  <span class="token function">forOpen</span><span class="token punctuation">(</span>middleware<span class="token operator">:</span> IMiddleware<span class="token operator">&lt;</span>IFormProps<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> IFormDialog
  <span class="token function">forConfirm</span><span class="token punctuation">(</span>middleware<span class="token operator">:</span> IMiddleware<span class="token operator">&lt;</span>IFormProps<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> IFormDialog
  <span class="token function">forCancel</span><span class="token punctuation">(</span>middleware<span class="token operator">:</span> IMiddleware<span class="token operator">&lt;</span>IFormProps<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> IFormDialog
  <span class="token function">open</span><span class="token punctuation">(</span>props<span class="token operator">?</span><span class="token operator">:</span> IFormProps<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FormDialog</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>title<span class="token operator">:</span> IFormDialogProps<span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> content<span class="token operator">:</span> FormDialogContent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">IFormDialog</span>
  <span class="token punctuation">(</span>title<span class="token operator">:</span> IFormDialogProps<span class="token punctuation">,</span> id<span class="token operator">:</span> FormDialogContent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">IFormDialog</span>
  <span class="token punctuation">(</span>title<span class="token operator">:</span> DialogTitle<span class="token punctuation">,</span> id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> content<span class="token operator">:</span> FormDialogContent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">IFormDialog</span>
  <span class="token punctuation">(</span>title<span class="token operator">:</span> DialogTitle<span class="token punctuation">,</span> id<span class="token operator">:</span> FormDialogContent<span class="token punctuation">)</span><span class="token operator">:</span> IFormDialog
<span class="token punctuation">}</span>
</code></pre></div>`,3),g=a("code",null,"DialogProps",-1),f=n("\u7C7B\u578B\u5B9A\u4E49\u53C2\u8003 "),_={href:"https://www.naiveui.com/zh-CN/os-theme/components/dialog#dialog-%E5%B1%9E%E6%80%A7",target:"_blank",rel:"noopener noreferrer"},F=n("Naive-Ui Dialog API"),D=a("h3",{id:"formdialog-footer",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#formdialog-footer","aria-hidden":"true"},"#"),n(" FormDialog.Footer")],-1),I=a("p",null,"\u65E0\u5C5E\u6027\uFF0C\u53EA\u63A5\u6536\u5B50\u8282\u70B9",-1),P=a("h3",{id:"formdialog-portal",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#formdialog-portal","aria-hidden":"true"},"#"),n(" FormDialog.Portal")],-1),w=a("p",null,"\u63A5\u6536\u53EF\u9009\u7684 id \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u503C\u4E3A form-dialog\uFF0C\u5982\u679C\u4E00\u4E2A\u5E94\u7528\u5B58\u5728\u591A\u4E2A prefixCls\uFF0C\u4E0D\u540C\u533A\u57DF\u7684\u5F39\u7A97\u5185\u90E8 prefixCls \u4E0D\u4E00\u6837\uFF0C\u90A3\u63A8\u8350\u6307\u5B9A id \u4E3A\u533A\u57DF\u7EA7 id",-1);function b(x,y){const o=t("dumi-previewer"),e=t("ExternalLinkIcon");return l(),c(i,null,[u,s(o,{demoPath:"guide/form-dialog/markup-schema"}),d,s(o,{demoPath:"guide/form-dialog/json-schema"}),m,s(o,{demoPath:"guide/form-dialog/template"}),h,a("p",null,[g,f,a("a",_,[F,s(e)])]),D,I,P,w],64)}var N=r(k,[["render",b],["__file","form-dialog.html.vue"]]);export{N as default};
