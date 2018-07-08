webpackJsonp([0xbe8fadf36371],{757:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re releasing a gem to make it easier to use React and JSX in Ruby on Rails applications: <a href="https://github.com/facebook/react-rails">react-rails</a>.</p>\n<p>This gem has 2 primary purposes:</p>\n<ol>\n<li>To package <code class="gatsby-code-text">react.js</code> in a way that’s easy to use and easy to update.</li>\n<li>To allow you to write JSX without an external build step to transform that into JS.</li>\n</ol>\n<h2 id="packaging-reactjs"><a href="#packaging-reactjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Packaging react.js</h2>\n<p>To make <code class="gatsby-code-text">react.js</code> available for use client-side, simply add <code class="gatsby-code-text">react</code> to your manifest, and declare the variant you’d like to use in your environment. When you use <code class="gatsby-code-text">:production</code>, the minified and optimized <code class="gatsby-code-text">react.min.js</code> will be used instead of the development version. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-ruby"><code class="gatsby-code-ruby"><span class="token comment"># config/environments/development.rb</span>\n\n<span class="token constant">MyApp</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token constant">Application</span><span class="token punctuation">.</span>configure <span class="token keyword">do</span>\n  config<span class="token punctuation">.</span>react<span class="token punctuation">.</span>variant <span class="token operator">=</span> <span class="token symbol">:development</span>\n  <span class="token comment"># use :production in production.rb</span>\n<span class="token keyword">end</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// app/assets/javascript/application.js</span>\n\n<span class="token comment">//= require react</span></code></pre>\n      </div>\n<h2 id="writing-jsx"><a href="#writing-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing JSX</h2>\n<p>When you name your file with <code class="gatsby-code-text">myfile.js.jsx</code>, <code class="gatsby-code-text">react-rails</code> will automatically try to transform that file. For the time being, we still require that you include the docblock at the beginning of the file. For example, this file will get transformed on request.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">/** @jsx React.DOM */</span>\nReact<span class="token punctuation">.</span><span class="token function">renderComponent</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h2 id="asset-pipeline"><a href="#asset-pipeline" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Asset Pipeline</h2>\n<p><code class="gatsby-code-text">react-rails</code> takes advantage of the <a href="http://guides.rubyonrails.org/asset_pipeline.html">asset pipeline</a> that was introduced in Rails 3.1. A very important part of that pipeline is the <code class="gatsby-code-text">assets:precompile</code> Rake task. <code class="gatsby-code-text">react-rails</code> will ensure that your JSX files will be transformed into regular JS before all of your assets are minified and packaged.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Installation follows the same process you’re familiar with. You can install it globally with <code class="gatsby-code-text">gem install react-rails</code>, though we suggest you add the dependency to your <code class="gatsby-code-text">Gemfile</code> directly.</p>',excerpt:"Today we’re releasing a gem to make it easier to use React and JSX in Ruby on Rails applications:  react-rails . This gem has 2 primary purposes: To package   in a way that’s easy to use and easy to update. To allow you to write JSX without an external build step to transform that into JS. Packaging react.js To make   available for use client-side, simply add   to your manifest, and declare the variant you’d like to use in your environment. When you use  , the minified and optimized   will be…",frontmatter:{title:"Use React and JSX in Ruby on Rails",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"July 29, 2013",path:"blog/2013-07-30-use-react-and-jsx-in-ruby-on-rails.md",slug:"/blog/2013/07/30/use-react-and-jsx-in-ruby-on-rails.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2013/07/30/use-react-and-jsx-in-ruby-on-rails.html"}}}});
//# sourceMappingURL=path---blog-2013-07-30-use-react-and-jsx-in-ruby-on-rails-html-641fdca9a67f87711376.js.map