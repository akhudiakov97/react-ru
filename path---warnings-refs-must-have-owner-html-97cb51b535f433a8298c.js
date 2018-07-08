webpackJsonp([0xeb7f0defff36],{1049:function(n,a){n.exports={data:{markdownRemark:{html:'<p>You are probably here because you got one of the following error messages:</p>\n<p><em>React 16.0.0+</em></p>\n<blockquote>\n<p>Warning:</p>\n<p>Element ref was specified as a string (myRefName) but no owner was set. You may have multiple copies of React loaded. (details: <a href="https://fb.me/react-refs-must-have-owner">https://fb.me/react-refs-must-have-owner</a>).</p>\n</blockquote>\n<p><em>earlier versions of React</em></p>\n<blockquote>\n<p>Warning:</p>\n<p>addComponentAsRefTo(…): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component’s <code class="gatsby-code-text">render</code> method, or you have multiple copies of React loaded.</p>\n</blockquote>\n<p>This usually means one of three things:</p>\n<ul>\n<li>You are trying to add a <code class="gatsby-code-text">ref</code> to a functional component.</li>\n<li>You are trying to add a <code class="gatsby-code-text">ref</code> to an element that is being created outside of a component’s render() function.</li>\n<li>You have multiple (conflicting) copies of React loaded (eg. due to a misconfigured npm dependency)</li>\n</ul>\n<h2 id="refs-on-functional-components"><a href="#refs-on-functional-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Refs on Functional Components</h2>\n<p>If <code class="gatsby-code-text">&lt;Foo&gt;</code> is a functional component, you can’t add a ref to it:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Doesn\'t work if Foo is a function!</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Foo</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>foo<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>If you need to add a ref to a component, convert it to a class first, or consider not using refs as they are <a href="/docs/refs-and-the-dom.html#when-to-use-refs">rarely necessary</a>.</p>\n<h2 id="strings-refs-outside-the-render-method"><a href="#strings-refs-outside-the-render-method" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Strings Refs Outside the Render Method</h2>\n<p>This usually means that you’re trying to add a ref to a component that doesn’t have an owner (that is, was not created inside of another component’s <code class="gatsby-code-text">render</code> method). For example, this won’t work:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Doesn\'t work!</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> el<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Try rendering this component inside of a new top-level component which will hold the ref. Alternatively, you may use a callback ref:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">let</span> app<span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>inst <span class="token operator">=></span> <span class="token punctuation">{</span>\n    app <span class="token operator">=</span> inst<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  el\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Consider if you <a href="/docs/refs-and-the-dom.html#when-to-use-refs">really need a ref</a> before using this approach.</p>\n<h2 id="multiple-copies-of-react"><a href="#multiple-copies-of-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Multiple copies of React</h2>\n<p>Bower does a good job of deduplicating dependencies, but npm does not. If you aren’t doing anything (fancy) with refs, there is a good chance that the problem is not with your refs, but rather an issue with having multiple copies of React loaded into your project. Sometimes, when you pull in a third-party module via npm, you will get a duplicate copy of the dependency library, and this can create problems.</p>\n<p>If you are using npm… <code class="gatsby-code-text">npm ls</code> or <code class="gatsby-code-text">npm ls react</code> might help illuminate.</p>',frontmatter:{title:"Refs Must Have Owner Warning",next:null,prev:null},fields:{path:"warnings/refs-must-have-owner.md",slug:"warnings/refs-must-have-owner.html"}}},pathContext:{slug:"warnings/refs-must-have-owner.html"}}}});
//# sourceMappingURL=path---warnings-refs-must-have-owner-html-97cb51b535f433a8298c.js.map