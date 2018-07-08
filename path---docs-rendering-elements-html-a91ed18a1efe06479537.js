webpackJsonp([0xb9e875748989],{955:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Elements are the smallest building blocks of React apps.</p>\n<p>An element describes what you want to see on the screen:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.</p>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>One might confuse elements with a more widely known concept of “components”. We will introduce components in the <a href="/docs/components-and-props.html">next section</a>. Elements are what components are “made of”, and we encourage you to read this section before jumping ahead.</p>\n</blockquote>\n<h2 id="rendering-an-element-into-the-dom"><a href="#rendering-an-element-into-the-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rendering an Element into the DOM</h2>\n<p>Let’s say there is a <code class="gatsby-code-text">&lt;div&gt;</code> somewhere in your HTML file:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>We call this a “root” DOM node because everything inside it will be managed by React DOM.</p>\n<p>Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.</p>\n<p>To render a React element into a root DOM node, pass both to <code class="gatsby-code-text">ReactDOM.render()</code>:</p>\n<p><div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n        </div></p>\n<p><a href="/redirect-to-codepen/rendering-elements/render-an-element" target="_blank" rel="noreferrer"><b>Try it on CodePen</b></a></p>\n<p>It displays “Hello, world” on the page.</p>\n<h2 id="updating-the-rendered-element"><a href="#updating-the-rendered-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Updating the Rendered Element</h2>\n<p>React elements are <a href="https://en.wikipedia.org/wiki/Immutable_object">immutable</a>. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.</p>\n<p>With our knowledge so far, the only way to update the UI is to create a new element, and pass it to <code class="gatsby-code-text">ReactDOM.render()</code>.</p>\n<p>Consider this ticking clock example:</p>\n<p><div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>It is <span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleTimeString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line">  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="token punctuation">}</span>\n\n<span class="token function">setInterval</span><span class="token punctuation">(</span>tick<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n        </div></p>\n<p><a href="/redirect-to-codepen/rendering-elements/update-rendered-element" target="_blank" rel="noreferrer"><b>Try it on CodePen</b></a></p>\n<p>It calls <code class="gatsby-code-text">ReactDOM.render()</code> every second from a <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval"><code class="gatsby-code-text">setInterval()</code></a> callback.</p>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>In practice, most React apps only call <code class="gatsby-code-text">ReactDOM.render()</code> once. In the next sections we will learn how such code gets encapsulated into <a href="/docs/state-and-lifecycle.html">stateful components</a>.</p>\n<p>We recommend that you don’t skip topics because they build on each other.</p>\n</blockquote>\n<h2 id="react-only-updates-whats-necessary"><a href="#react-only-updates-whats-necessary" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Only Updates What’s Necessary</h2>\n<p>React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.</p>\n<p>You can verify by inspecting the <a href="/redirect-to-codepen/rendering-elements/update-rendered-element" target="_blank" rel="noreferrer">last example</a> with the browser tools:</p>\n<p><img src="/granular-dom-updates-c158617ed7cc0eac8f58330e49e48224.gif" alt="DOM inspector showing granular updates"></p>\n<p>Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.</p>\n<p>In our experience, thinking about how the UI should look at any given moment rather than how to change it over time eliminates a whole class of bugs.</p>',frontmatter:{title:"Rendering Elements",next:"components-and-props.html",prev:"introducing-jsx.html"},fields:{path:"docs/rendering-elements.md",slug:"docs/rendering-elements.html"}}},pathContext:{slug:"docs/rendering-elements.html"}}}});
//# sourceMappingURL=path---docs-rendering-elements-html-a91ed18a1efe06479537.js.map