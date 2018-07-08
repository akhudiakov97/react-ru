webpackJsonp([40060392868248],{797:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We are finally ready to share the work we’ve been doing over the past couple months. A lot has gone into this and we want to make sure we iron out any potential issues before we make this final. So, we’re shipping a Release Candidate for React v0.12 today. If you get a chance, please give it a try and report any issues you find! A full changelog will accompany the final release but we’ve highlighted the interesting and breaking changes below.</p>\n<p>The release candidate is available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.12.0-rc1.js">https://fb.me/react-0.12.0-rc1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.12.0-rc1.min.js">https://fb.me/react-0.12.0-rc1.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.12.0-rc1.js">https://fb.me/react-with-addons-0.12.0-rc1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.12.0-rc1.min.js">https://fb.me/react-with-addons-0.12.0-rc1.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.12.0-rc1.js">https://fb.me/JSXTransformer-0.12.0-rc1.js</a></li>\n</ul>\n<p>We’ve also published version <code class="gatsby-code-text">0.12.0-rc1</code> of the <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-tools</code> packages on npm and the <code class="gatsby-code-text">react</code> package on bower.</p>\n<h2 id="react-elements"><a href="#react-elements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Elements</h2>\n<p>The biggest conceptual change we made in v0.12 is the move to React Elements. <a href="/blog/2014/10/14/introducing-react-elements.html">We talked about this topic in depth earlier this week</a>. If you haven’t already, you should read up on the exciting changes in there!</p>\n<h2 id="jsx-changes"><a href="#jsx-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Changes</h2>\n<p>Earlier this year we decided to write <a href="https://facebook.github.io/jsx/">a specification for JSX</a>. This has allowed us to make some changes focused on the React specific JSX and still allow others to innovate in the same space.</p>\n<h3 id="the-jsx-pragma-is-gone"><a href="#the-jsx-pragma-is-gone" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The <code class="gatsby-code-text">@jsx</code> Pragma is Gone!</h3>\n<p>We have wanted to do this since before we even open sourced React. No more <code class="gatsby-code-text">/** @jsx React.DOM */</code>!. The React specific JSX transform assumes you have <code class="gatsby-code-text">React</code> in scope (which had to be true before anyway).</p>\n<p><code class="gatsby-code-text">JSXTransformer</code> and <code class="gatsby-code-text">react-tools</code> have both been updated to account for this.</p>\n<h3 id="jsx-for-function-calls-is-no-longer-supported"><a href="#jsx-for-function-calls-is-no-longer-supported" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX for Function Calls is No Longer Supported</h3>\n<p>The React specific JSX transform no longer transforms to function calls. Instead we use <code class="gatsby-code-text">React.createElement</code> and pass it arguments. This allows us to make optimizations and better support React as a compile target for things like Om. Read more in the <a href="/blog/2014/10/14/introducting-react-elements.html">React Elements introduction</a>.</p>\n<p>The result of this change is that we will no longer support arbitrary function calls. We understand that the ability to do was a convenient shortcut for many people but we believe the gains will be worth it.</p>\n<h3 id="jsx-lower-case-convention"><a href="#jsx-lower-case-convention" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Lower-case Convention</h3>\n<p>We used to have a whitelist of HTML tags that got special treatment in JSX. However as new HTML tags got added to the spec, or we added support for more SVG tags, we had to go update our whitelist. Additionally, there was ambiguity about the behavior. There was always the chance that something new added to the tag list would result in breaking your code. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Is <code class="gatsby-code-text">component</code> an existing HTML tag? What if it becomes one?</p>\n<p>To address this, we decided on a convention: <strong>All JSX tags that start with a lower-case letter or contain a dash are treated as HTML.</strong></p>\n<p>This means that you no longer have to wait for us to upgrade JSX to use new tags. This also introduces the possibility to consume custom elements (Web Components) - although custom attributes are not yet fully supported.</p>\n<p>Currently we still use the whitelist as a sanity check. The transform will fail when it encounters an unknown tag. This allows you to update your code without hitting errors in production.</p>\n<p>In addition, the HTML tags are converted to strings instead of using <code class="gatsby-code-text">React.DOM</code> directly. <code class="gatsby-code-text">&lt;div/&gt;</code> becomes <code class="gatsby-code-text">React.createElement(&#39;div&#39;)</code> instead of <code class="gatsby-code-text">React.DOM.div()</code>.</p>\n<h3 id="jsx-spread-attributes"><a href="#jsx-spread-attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Spread Attributes</h3>\n<p>Previously there wasn’t a way to for you to pass a dynamic or unknown set of properties through JSX. This is now possible using the spread <code class="gatsby-code-text">...</code> operator.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> myProps <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">myProps</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>This merges the properties of the object onto the props of <code class="gatsby-code-text">MyComponent</code>.</p>\n<p><a href="https://gist.github.com/sebmarkbage/07bbe37bc42b6d4aef81">Read More About Spread Attributes</a></p>\n<p>If you used to use plain function calls to pass arbitrary props objects…</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">return</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span>myProps<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>You can now switch to using Spread Attributes instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">myProps</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="breaking-change-key-and-ref-removed-from-thisprops"><a href="#breaking-change-key-and-ref-removed-from-thisprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Change: <code class="gatsby-code-text">key</code> and <code class="gatsby-code-text">ref</code> Removed From <code class="gatsby-code-text">this.props</code></h2>\n<p>The props <code class="gatsby-code-text">key</code> and <code class="gatsby-code-text">ref</code> were already reserved property names. This turned out to be difficult to explicitly statically type since any object can accept these extra props. It also screws up JIT optimizations of React internals in modern VMs.</p>\n<p>These are concepts that React manages from outside the Component before it even gets created so it shouldn’t be part of the props.</p>\n<p>We made this distinction clearer by moving them off the props object and onto the <code class="gatsby-code-text">ReactElement</code> itself. This means that you need to rename:</p>\n<p><code class="gatsby-code-text">someElement.props.key</code> -> <code class="gatsby-code-text">someElement.key</code></p>\n<p>You can no longer access <code class="gatsby-code-text">this.props.ref</code> and <code class="gatsby-code-text">this.props.key</code> from inside the Component instance itself. So you need to use a different name for those props.</p>\n<p>You do NOT need to change the way to define <code class="gatsby-code-text">key</code> and <code class="gatsby-code-text">ref</code>, only if you need to read it. E.g. <code class="gatsby-code-text">&lt;div key=&quot;my-key&quot; /&gt;</code> and <code class="gatsby-code-text">div({ key: &#39;my-key&#39; })</code> still works.</p>\n<h2 id="breaking-change-default-props-resolution"><a href="#breaking-change-default-props-resolution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Change: Default Props Resolution</h2>\n<p>This is a subtle difference but <code class="gatsby-code-text">defaultProps</code> are now resolved at <code class="gatsby-code-text">ReactElement</code> creation time instead of when it’s mounted. This is means that we can avoid allocating an extra object for the resolved props.</p>\n<p>You will primarily see this breaking if you’re also using <code class="gatsby-code-text">transferPropsTo</code>.</p>\n<h2 id="deprecated-transferpropsto"><a href="#deprecated-transferpropsto" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecated: transferPropsTo</h2>\n<p><code class="gatsby-code-text">transferPropsTo</code> is deprecated in v0.12 and will be removed in v0.13. This helper function was a bit magical. It auto-merged a certain whitelist of properties and excluded others. It was also transferring too many properties. This meant that we have to keep a whitelist of valid HTML attributes in the React runtime. It also means that we can’t catch typos on props.</p>\n<p>Our suggested solution is to use the Spread Attributes.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Or, just if you’re not using JSX:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">return</span> <span class="token function">div</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Although to avoid passing too many props down, you’ll probably want to use something like ES7 rest properties. <a href="https://gist.github.com/sebmarkbage/a6e220b7097eb3c79ab7">Read more about upgrading from transferPropsTo</a>.</p>\n<h2 id="deprecated-returning-false-in-event-handlers"><a href="#deprecated-returning-false-in-event-handlers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecated: Returning <code class="gatsby-code-text">false</code> in Event Handlers</h2>\n<p>It used to be possible to return <code class="gatsby-code-text">false</code> from event handlers to preventDefault. We did this because this works in most browsers. This is a confusing API and we might want to use the return value for something else. Therefore, this is deprecated. Use <code class="gatsby-code-text">event.preventDefault()</code> instead.</p>\n<h2 id="renamed-apis"><a href="#renamed-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Renamed APIs</h2>\n<p>As part of the <a href="https://gist.github.com/sebmarkbage/fcb1b6ab493b0c77d589">new React terminology</a> we aliased some existing APIs to use the new naming convention:</p>\n<ul>\n<li><code class="gatsby-code-text">React.renderComponent</code> -> <code class="gatsby-code-text">React.render</code></li>\n<li><code class="gatsby-code-text">React.renderComponentToString</code> -> <code class="gatsby-code-text">React.renderToString</code></li>\n<li><code class="gatsby-code-text">React.renderComponentToStaticMarkup</code> -> <code class="gatsby-code-text">React.renderToStaticMarkup</code></li>\n<li><code class="gatsby-code-text">React.isValidComponent</code> -> <code class="gatsby-code-text">React.isValidElement</code></li>\n<li><code class="gatsby-code-text">React.PropTypes.component</code> -> <code class="gatsby-code-text">React.PropTypes.element</code></li>\n<li><code class="gatsby-code-text">React.PropTypes.renderable</code> -> <code class="gatsby-code-text">React.PropTypes.node</code></li>\n</ul>\n<p>The older APIs will log a warning but work the same. They will be removed in v0.13.</p>',excerpt:"We are finally ready to share the work we’ve been doing over the past couple months. A lot has gone into this and we want to make sure we iron out any potential issues before we make this final. So, we’re shipping a Release Candidate for React v0.12 today. If you get a chance, please give it a try and report any issues you find! A full changelog will accompany the final release but we’ve highlighted the interesting and breaking changes below. The release candidate is available for download…",frontmatter:{title:"React v0.12 RC",next:null,prev:null,author:[{frontmatter:{name:"Sebastian Markbåge",url:"https://twitter.com/sebmarkbage"}}]},fields:{date:"October 15, 2014",path:"blog/2014-10-16-react-v0.12-rc1.md",slug:"/blog/2014/10/16/react-v0.12-rc1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2014/10/16/react-v0.12-rc1.html"}}}});
//# sourceMappingURL=path---blog-2014-10-16-react-v-0-12-rc-1-html-0b3f2d11ac881641ef3c.js.map