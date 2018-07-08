webpackJsonp([59481382998942],{825:function(e,t){e.exports={data:{markdownRemark:{html:'<h1 id="relay"><a href="#relay" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Relay</h1>\n<p>Today we’re excited to share an update on Relay - the technical preview is now open-source and <a href="http://github.com/facebook/relay">available on GitHub</a>.</p>\n<h2 id="why-relay"><a href="#why-relay" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why Relay</h2>\n<p>While React simplified the process of developing complex user-interfaces, it left open the question of how to interact with data on the server. It turns out that this was a significant source of friction for our developers; fragile coupling between client and server caused data-related bugs and made iteration harder. Furthermore, developers were forced to constantly re-implement complex async logic instead of focusing on their apps. Relay addresses these concerns by borrowing important lessons from React: it provides <em>declarative, component-oriented data fetching for React applications</em>.</p>\n<p>Declarative data-fetching means that Relay applications specify <em>what</em> data they need, not <em>how</em> to fetch that data. Just as React uses a description of the desired UI to manage view updates, Relay uses a data description in the form of GraphQL queries. Given these descriptions, Relay coalesces queries into batches for efficiency, manages error-prone asynchronous logic, caches data for performance, and automatically updates views as data changes.</p>\n<p>Relay is also component-oriented, extending the notion of a React component to include a description of what data is necessary to render it. This colocation allows developers to reason locally about their application and eliminates bugs such as under- or over-fetching data.</p>\n<p>Relay is in use at Facebook in production apps, and we’re using it more and more because <em>Relay lets developers focus on their products and move fast</em>. It’s working for us and we’d like to share it with the community.</p>\n<h2 id="whats-included"><a href="#whats-included" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s Included</h2>\n<p>We’re open-sourcing a technical preview of Relay - the core framework that we use internally, with some modifications for use outside Facebook. As this is the first release, it’s good to keep in mind that there may be some incomplete or missing features. We’ll continue to develop Relay and are working closely with the GraphQL community to ensure that Relay tracks updates during GraphQL’s RFC period. But we couldn’t wait any longer to get this in your hands, and we’re looking forward to your feedback and contributions.</p>\n<p>Relay is available on <a href="http://github.com/facebook/relay">GitHub</a> and <a href="https://www.npmjs.com/package/react-relay">npm</a>.</p>\n<h2 id="whats-next"><a href="#whats-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s Next</h2>\n<p>The team is super excited to be releasing Relay - and just as excited about what’s next. Here are some of the things we’ll be focusing on:</p>\n<ul>\n<li>Offline support. This will allow applications to fulfill queries and enqueue updates without connectivity.</li>\n<li>Real-time updates. In collaboration with the GraphQL community, we’re working to define a specification for subscriptions and provide support for them in Relay.</li>\n<li>A generic Relay. Just as the power of React was never about the virtual DOM, Relay is much more than a GraphQL client. We’re working to extend Relay to provide a unified interface for interacting not only with server data, but also in-memory and native device data (and, even better, a mix of all three).</li>\n<li>Finally, it’s all too easy as developers to focus on those people with the newest devices and fastest internet connections. We’re working to make it easier to build applications that are robust in the face of slow or intermittent connectivity.</li>\n</ul>\n<p>Thanks!</p>',excerpt:"Relay Today we’re excited to share an update on Relay - the technical preview is now open-source and  available on GitHub . Why Relay While React simplified the process of developing complex user-interfaces, it left open the question of how to interact with data on the server. It turns out that this was a significant source of friction for our developers; fragile coupling between client and server caused data-related bugs and made iteration harder. Furthermore, developers were forced to…",frontmatter:{title:"Relay Technical Preview",next:null,prev:null,author:[{frontmatter:{name:"Joseph Savona",url:"https://twitter.com/en_JS"}}]},fields:{date:"August 10, 2015",path:"blog/2015-08-11-relay-technical-preview.md",slug:"/blog/2015/08/11/relay-technical-preview.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2015/08/11/relay-technical-preview.html"}}}});
//# sourceMappingURL=path---blog-2015-08-11-relay-technical-preview-html-715bcc7a32585749ac42.js.map