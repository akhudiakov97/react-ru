webpackJsonp([0x999404895e08],{814:function(a,n){a.exports={data:{markdownRemark:{html:'<p>At React.js Conf in January we gave a preview of Relay, a new framework for building data-driven applications in React. In this post, we’ll describe the process of creating a Relay application. This post assumes some familiarity with the concepts of Relay and GraphQL, so if you haven’t already we recommend reading <a href="/blog/2015/02/20/introducing-relay-and-graphql.html">our introductory blog post</a> or watching <a href="https://www.youtube-nocookie.com/v/9sc8Pyc51uU">the conference talk</a>.</p>\n<p>We’re working hard to prepare GraphQL and Relay for public release. In the meantime, we’ll continue to provide information about what you can expect.</p>\n<br/>\n<h2 id="the-relay-architecture"><a href="#the-relay-architecture" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Relay Architecture</h2>\n<p>The diagram below shows the main parts of the Relay architecture on the client and the server:</p>\n\n  <a class="gatsby-resp-image-link" href="/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-448cb.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAABO0lEQVQoz2MIOvAy6CBZ6MBLBhB1CIQC9j7y3/MQjvx23PFaf8l783XfbbeRxQP2PoaoB2oEaQ459DLywPOwHXeBZOCB5/67Hwbufxp98Gn8/gdAFHXwCVT1oZdRR5+F778HJEMPv4Bq9pp9QUynF4iUzCd7rjlnN3mD29JjhxpS/mXo/EvXOdyU5r3hMlDEZ/P1wMOFfofyfA/lhR45gkUz3JLdE2o/VHh8KHMFMuCCYUfrAw5VBhyuCj9yEqFZ3mSivvNMZM2eay94rDrjv+sBXASCfLfeRPEzVpuBjvRadwkYQiFrzrhkNwCRd1EbAc3AEHaet89zzXmgIp8t14HIb+Y2G99Yr8hMW784H3Dgo2gO3vM0YNVNIApacwso6r3pKjDM4U4I2fsodN15IArbcBHFCyDNFCQSAOFmaONKg7d7AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Relay Architecture" title="" src="/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-acf85.png" srcset="/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-c1418.png 210w,\n/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-5d5d8.png 420w,\n/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-acf85.png 840w,\n/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-de0cd.png 1260w,\n/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-bd6c2.png 1680w,\n/react-ru/static/relay-architecture-1c7e934642028c84d5af545a945394ef-448cb.png 2400w" sizes="(max-width: 840px) 100vw, 840px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>The main pieces are as follows:</p>\n<ul>\n<li>Relay Components: React components annotated with declarative data descriptions.</li>\n<li>Actions: Descriptions of how data should change in response to user actions.</li>\n<li>Relay Store: A client-side data store that is fully managed by the framework.</li>\n<li>Server: An HTTP server with GraphQL endpoints (one for reads, one for writes) that respond to GraphQL queries.</li>\n</ul>\n<p>This post will focus on <strong>Relay components</strong> that describe encapsulated units of UI and their data dependencies. These components form the majority of a Relay application.</p>\n<br/>\n<h2 id="a-relay-application"><a href="#a-relay-application" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Relay Application</h2>\n<p>To see how components work and can be composed, let’s implement a basic version of the Facebook News Feed in Relay. Our application will have two components: a <code class="gatsby-code-text">&lt;NewsFeed&gt;</code> that renders a list of <code class="gatsby-code-text">&lt;Story&gt;</code> items. We’ll introduce the plain React version of each component first and then convert it to a Relay component. The goal is something like the following:</p>\n\n  <a class="gatsby-resp-image-link" href="/react-ru/static/sample-newsfeed-75bc0f3653210df5df2c21a706cab9eb-c777a.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 720px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 125%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAIAAAC+dZmEAAAACXBIWXMAAAsSAAALEgHS3X78AAACVklEQVQ4y9VUvW7aUBjNE3XoxkM0Egpbh2ah6tStz9CtD9CqU8pQQaQOpcImJDb4HxuMcYztYGMSMGD+IUVlqNoDISKkVEmaqUcC+376zr1859zDzmQy+fFPAHEHj2azecRwrut+vzdmsxmIC3L6hHr68s1B/JAgUrFYjCTTHz+8TyQS9ln18i8Af0XGmZ8Ov+i6fnlvrMlBp2OfLeDV667rOI5br9e9mrdAreZUneXTXTR4XrfbxbTgr8jNRoPO5goFRZQknuOkvJzLZkVRlPN5OgvkeJ4TRFHgBZ7nQd44GYJlaYphWEEQTNOUZUWW5UKxkJckBlWW5VhOFISyprEMo2ma3/TX5Ha7nc9L6LBtWxBEVVU5llEURdPKN+ecTqdbZp7P5w81+YryH/vc6XRKqmpZNqQyDMO2rGKxiL3MSqWgKJZlmWYFFwFLy7YrhlGreWufGxcXNAyls9+SSYqGa1Sj0YAQsLTV8uEFdh8MBkEQ+K0W3vv9/vpkTH9TjOFw+ADBHmUV1H7y/NXB5zhNUwRBCKKUSMRJkqyfn98tGC7T67fvMscnvV4PVx/TYmbf9zHb3WSIMVwCccE3thiPx6PhCIJdFQFsNBqNlstxsAzW2ipk6CidzmSOmVyO47ivySSuCop4R6wymQyRSlEUTRKkChuLahB0r/McdJDhChxcfAzEo1zWkF79VHfdWqmkImrVqnOq6+hA1Dd+9s9NwE/qD6B4q21F/rUJmqZDodCz3d39/RfRaDQcDmOJ4q227WRJkvaWiEQie9dAcQv5Mf/bvwHFDjKOrZ0ezAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Sample News Feed" title="" src="/react-ru/static/sample-newsfeed-75bc0f3653210df5df2c21a706cab9eb-c777a.png" srcset="/react-ru/static/sample-newsfeed-75bc0f3653210df5df2c21a706cab9eb-befde.png 210w,\n/react-ru/static/sample-newsfeed-75bc0f3653210df5df2c21a706cab9eb-66a82.png 420w,\n/react-ru/static/sample-newsfeed-75bc0f3653210df5df2c21a706cab9eb-c777a.png 720w" sizes="(max-width: 720px) 100vw, 720px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br/>\n<h2 id="the-story-begins"><a href="#the-story-begins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The <code class="gatsby-code-text">&lt;Story&gt;</code> Begins</h2>\n<p>The first step is a React <code class="gatsby-code-text">&lt;Story&gt;</code> component that accepts a <code class="gatsby-code-text">story</code> prop with the story’s text and author information. Note that all examples uses ES6 syntax and elide presentation details to focus on the pattern of data access.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Story.react.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Story</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> story <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>story<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Image</span> <span class="token attr-name">uri</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>story<span class="token punctuation">.</span>author<span class="token punctuation">.</span>profilePicture<span class="token punctuation">.</span>uri<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>story<span class="token punctuation">.</span>author<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>story<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<br/>\n<h2 id="whats-the-story"><a href="#whats-the-story" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What’s the <code class="gatsby-code-text">&lt;Story&gt;</code>?</h2>\n<p>Relay automates the process of fetching data for components by wrapping existing React components in Relay containers (themselves React components):</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Story.react.js</span>\n<span class="token keyword">class</span> <span class="token class-name">Story</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Relay<span class="token punctuation">.</span><span class="token function">createContainer</span><span class="token punctuation">(</span>Story<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  fragments<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    story<span class="token punctuation">:</span> <span class="token comment">/* TODO */</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Before adding the GraphQL fragment, let’s look at the component hierarchy this creates:</p>\n\n  <a class="gatsby-resp-image-link" href="/react-ru/static/relay-containers-4e4a71a85b278968b8719601692bc18c-cc651.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 795px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 132.70440251572327%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAIAAADzvTiPAAAACXBIWXMAAAsSAAALEgHS3X78AAABWUlEQVQ4y2MI2Pcy8ACZiAGIgw6hoNgDj1ecuIyGkg8+RFMGRFg0Jx54eB4MtmzZsn79egg7++B9ojRHHXwy6eh1EDpyrX//eQg7/uBjojTDUeCB5z5bbuCSJaA5YN8T703XCGgOX7TfM78FC8pr9shpwCoVPncXVHPghFVGLqFwZOMbV97cV97UV1DTUdnSn1HalFPZ6hCYgKwmoHMxds1AZO4ZaeUd4xycbO0dY+EZ5RKSjKYAn2aCCKfmzNKGqXMWo6H86jaiNHdOnAlMFSdOHN+6devmzZtPnToF5E6evZAozc29U48ePwFBx06chDB6p84lzc/GrmEOgYmk+Zl8zY7JSW4VaRDkVZ0Z0JgP5zqlJhPQ7DEh035vElbkOT2TLpq9DuZUX5xUcK7L71AufW0mR7NdZLxLRgpWZB+VQOOMQZrmiGVHfConkISAhQ+BMowgokgzANLCDkvw3gjgAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="React Container Data Flow" title="" src="/react-ru/static/relay-containers-4e4a71a85b278968b8719601692bc18c-cc651.png" srcset="/react-ru/static/relay-containers-4e4a71a85b278968b8719601692bc18c-6f857.png 210w,\n/react-ru/static/relay-containers-4e4a71a85b278968b8719601692bc18c-41ce2.png 420w,\n/react-ru/static/relay-containers-4e4a71a85b278968b8719601692bc18c-cc651.png 795w" sizes="(max-width: 795px) 100vw, 795px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>Most props will be passed through from the container to the original component. However, Relay will return the query results for a prop whenever a fragment is defined. In this case we’ll add a GraphQL fragment for <code class="gatsby-code-text">story</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Story.react.js</span>\n<span class="token keyword">class</span> <span class="token class-name">Story</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Relay<span class="token punctuation">.</span><span class="token function">createContainer</span><span class="token punctuation">(</span>Story<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  fragments<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    story<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Relay<span class="token punctuation">.</span><span class="token constant">QL</span><span class="token template-string"><span class="token string">`\n      fragment on Story {\n        author {\n          name\n          profilePicture {\n            uri\n          }\n        }\n        text\n      }\n    `</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Queries use ES6 template literals tagged with the <code class="gatsby-code-text">Relay.QL</code> function. Similar to how JSX transpiles to plain JavaScript objects and function calls, these template literals transpile to plain objects that describe fragments. Note that the fragment’s structure closely matches the object structure that we expected in <code class="gatsby-code-text">&lt;Story&gt;</code>’s render function.</p>\n<br/>\n<h2 id="storys-on-demand"><a href="#storys-on-demand" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">&lt;Story&gt;</code>s on Demand</h2>\n<p>We can render a Relay component by providing Relay with the component (<code class="gatsby-code-text">&lt;Story&gt;</code>) and the ID of the data (a story ID). Given this information, Relay will first fetch the results of the query and then <code class="gatsby-code-text">render()</code> the component. The value of <code class="gatsby-code-text">props.story</code> will be a plain JavaScript object such as the following:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n  author<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">"Greg"</span><span class="token punctuation">,</span>\n    profilePicture<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      uri<span class="token punctuation">:</span> <span class="token string">"https://…"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  text<span class="token punctuation">:</span> <span class="token string">"The first Relay blog post is up…"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Relay guarantees that all data required to render a component will be available before it is rendered. This means that <code class="gatsby-code-text">&lt;Story&gt;</code> does not need to handle a loading state; the <code class="gatsby-code-text">story</code> is <em>guaranteed</em> to be available before <code class="gatsby-code-text">render()</code> is called. We have found that this invariant simplifies our application code <em>and</em> improves the user experience. Of course, Relay also has options to delay the fetching of some parts of our queries.</p>\n<p>The diagram below shows how Relay containers make data available to our React components:</p>\n\n  <a class="gatsby-resp-image-link" href="/react-ru/static/relay-containers-data-flow-46e660a80043eb9e7a4ea27b3562d4a7-eb423.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 69.18032786885246%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsSAAALEgHS3X78AAABTklEQVQoz2MIOvAy6CAIJR98Unn4HhCVHLoPESGIGEDUIRCqO3J3zb4j6w8cW3r4LESEIEJohiD/XfeJ1AnSHLLpmlNWPRB5FLT4l3UFlnb6FLVDRHz7ViIr3dtTfq4+DoL2d5eCNAevOWfkEgpENr6xvrE5npEZ7uFpEBHX8n7/XQ+81l302nA58MDz5wUO/2JkIOhlvh2K5vyqlv7pcyfMmDdh+jwr72igiEtJD1AzBPntvPc83/5fnPy/Cpd/sXLomqtaemfMXbRo+ZoFS1dZ+8SCNBd3AbV5rjnvvfEqkAHWLAfSjGkzBFn7xsLZQGcj+xmns22iYl03pgOR26YMIOnSmYqp+WJj4tNCZwi63BCHpDk2zn5vks/B3LCjpUCG08RkTM1YogpZMxyRptnYNczKNwaOzD0jidIcsvGKfUIxVuTTsYi05EkSAgDE+dAJn7CgiwAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Relay Container Data Flow" title="" src="/react-ru/static/relay-containers-data-flow-46e660a80043eb9e7a4ea27b3562d4a7-acf85.png" srcset="/react-ru/static/relay-containers-data-flow-46e660a80043eb9e7a4ea27b3562d4a7-c1418.png 210w,\n/react-ru/static/relay-containers-data-flow-46e660a80043eb9e7a4ea27b3562d4a7-5d5d8.png 420w,\n/react-ru/static/relay-containers-data-flow-46e660a80043eb9e7a4ea27b3562d4a7-acf85.png 840w,\n/react-ru/static/relay-containers-data-flow-46e660a80043eb9e7a4ea27b3562d4a7-de0cd.png 1260w,\n/react-ru/static/relay-containers-data-flow-46e660a80043eb9e7a4ea27b3562d4a7-eb423.png 1525w" sizes="(max-width: 840px) 100vw, 840px">\n    </span>\n  </span>\n  \n  </a>\n    \n<br/>\n<h2 id="newsfeed-worthy"><a href="#newsfeed-worthy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">&lt;NewsFeed&gt;</code> Worthy</h2>\n<p>Now that the <code class="gatsby-code-text">&lt;Story&gt;</code> is over we can continue with the <code class="gatsby-code-text">&lt;NewsFeed&gt;</code> component. Again, we’ll start with a React version:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// NewsFeed.react.js</span>\n<span class="token keyword">class</span> <span class="token class-name">NewsFeed</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> stories <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>viewer<span class="token punctuation">.</span>stories<span class="token punctuation">;</span> <span class="token comment">// `viewer` is the active user</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>stories<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>story <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Story</span> <span class="token attr-name">story</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>story<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Load More<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// TODO: fetch more stories</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> NewsFeed<span class="token punctuation">;</span></code></pre>\n      </div>\n<br/>\n<h2 id="all-the-news-fit-to-be-relayed"><a href="#all-the-news-fit-to-be-relayed" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>All the News Fit to be Relayed</h2>\n<p><code class="gatsby-code-text">&lt;NewsFeed&gt;</code> has two new requirements: it composes <code class="gatsby-code-text">&lt;Story&gt;</code> and requests more data at runtime.</p>\n<p>Just as React views can be nested, Relay components can compose query fragments from child components. Composition in GraphQL uses ES6 template literal substitution: <code class="gatsby-code-text">${Component.getFragment(&#39;prop&#39;)}</code>. Pagination can be accomplished with a variable, specified with <code class="gatsby-code-text">$variable</code> (as in <code class="gatsby-code-text">stories(first: $count)</code>):</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// NewsFeed.react.js</span>\n<span class="token keyword">class</span> <span class="token class-name">NewsFeed</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Relay<span class="token punctuation">.</span><span class="token function">createContainer</span><span class="token punctuation">(</span>NewsFeed<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  initialVariables<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    count<span class="token punctuation">:</span> <span class="token number">3</span>                                <span class="token comment">/* default to 3 stories */</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  fragments<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    viewer<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Relay<span class="token punctuation">.</span><span class="token constant">QL</span><span class="token template-string"><span class="token string">`\n      fragment on Viewer {\n        stories(first: $count) {            /* fetch viewer\'s stories */\n          edges {                           /* traverse the graph */\n            node {\n              </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Story<span class="token punctuation">.</span><span class="token function">getFragment</span><span class="token punctuation">(</span><span class="token string">\'story\'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> /* compose child fragment */\n            }\n          }\n        }\n      }\n    `</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Whenever <code class="gatsby-code-text">&lt;NewsFeed&gt;</code> is rendered, Relay will recursively expand all the composed fragments and fetch the queries in a single trip to the server. In this case, the <code class="gatsby-code-text">text</code> and <code class="gatsby-code-text">author</code> data will be fetched for each of the 3 story nodes.</p>\n<p>Query variables are available to components as <code class="gatsby-code-text">props.relay.variables</code> and can be modified with <code class="gatsby-code-text">props.relay.setVariables(nextVariables)</code>. We can use these to implement pagination:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// NewsFeed.react.js</span>\n<span class="token keyword">class</span> <span class="token class-name">NewsFeed</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>\n\n  <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// read current params</span>\n    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>relay<span class="token punctuation">.</span>variables<span class="token punctuation">.</span>count<span class="token punctuation">;</span>\n    <span class="token comment">// update params</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>relay<span class="token punctuation">.</span><span class="token function">setVariables</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      count<span class="token punctuation">:</span> count <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Now when <code class="gatsby-code-text">loadMore()</code> is called, Relay will send a GraphQL request for the additional five stories. When these stories are fetched, the component will re-render with the new stories available in <code class="gatsby-code-text">props.viewer.stories</code> and the updated count reflected in <code class="gatsby-code-text">props.relay.variables.count</code>.</p>\n<br/>\n<h2 id="in-conclusion"><a href="#in-conclusion" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>In Conclusion</h2>\n<p>These two components form a solid core for our application. With the use of Relay containers and GraphQL queries, we’ve enabled the following benefits:</p>\n<ul>\n<li>Automatic and efficient pre-fetching of data for an entire view hierarchy in a single network request.</li>\n<li>Trivial pagination with automatic optimizations to fetch only the additional items.</li>\n<li>View composition and reusability, so that <code class="gatsby-code-text">&lt;Story&gt;</code> can be used on its own or within <code class="gatsby-code-text">&lt;NewsFeed&gt;</code>, without any changes to either component.</li>\n<li>Automatic subscriptions, so that components will re-render if their data changes. Unaffected components will not re-render unnecessarily.</li>\n<li>Exactly <em>zero</em> lines of imperative data fetching logic. Relay takes full advantage of React’s declarative component model.</li>\n</ul>\n<p>But Relay has many more tricks up its sleeve. For example, it’s built from the start to handle reads and writes, allowing for features like optimistic client updates with transactional rollback. Relay can also defer fetching select parts of queries, and it uses a local data store to avoid fetching the same data twice. These are all powerful features that we hope to explore in future posts.</p>',
excerpt:"At React.js Conf in January we gave a preview of Relay, a new framework for building data-driven applications in React. In this post, we’ll describe the process of creating a Relay application. This post assumes some familiarity with the concepts of Relay and GraphQL, so if you haven’t already we recommend reading  our introductory blog post  or watching  the conference talk . We’re working hard to prepare GraphQL and Relay for public release. In the meantime, we’ll continue to provide…",frontmatter:{title:"Building The Facebook News Feed With Relay",next:null,prev:null,author:[{frontmatter:{name:"Joseph Savona",url:"https://twitter.com/en_JS"}}]},fields:{date:"March 18, 2015",path:"blog/2015-03-19-building-the-facebook-news-feed-with-relay.md",slug:"/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html"}}}});
//# sourceMappingURL=path---blog-2015-03-19-building-the-facebook-news-feed-with-relay-html-d1fedf7b77497b4b8c2e.js.map