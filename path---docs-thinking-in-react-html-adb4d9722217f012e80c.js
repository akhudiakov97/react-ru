webpackJsonp([0x624b8861be37],{963:function(e,t){e.exports={data:{markdownRemark:{html:'<p>React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.</p>\n<p>One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.</p>\n<h2 id="start-with-a-mock"><a href="#start-with-a-mock" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Start With A Mock</h2>\n<p>Imagine that we already have a JSON API and a mock from our designer. The mock looks like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 228px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 121.49122807017542%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAABYlAAAWJQFJUiTwAAACQklEQVQ4y6WTC3OaUBCF8///kJkiPsH3IyHoICCODwIqGnxEq6L0E5JMO1XaaXfgzmXvHM65Z3cfwv+IB17P81ar1Xq93mw2rNvt9v1O3AA7jjMYDEaj0TyKIAhu8hwOhxvg/X6/2+1834cf2re3N/ZIYENmuVzyyZ7M8XhE3ZeKK5jjfr9fKpUkSTIMg7VSqWiaVigUGo1GOp1mzefznU7Htm1BEIrFoizLH+Dz+fzvhk0mE5jjO5+jIKkoChmO+Lx8Bvmf91dws9kURTGTySAv/iVnJGu1WjabveffB9iyrGkUw+HQNE3XdVut1mw2WywWkP9Bdr1exwNI2u02/AjGMLRgWCqVihXeBeM2bJCMx2NqHh/gAio4enp6SgK7jtPr9Qxdpxh0yzkIeFChqip4kklg3TCGg4Ghaaau9zRt7fskAVPVl5eX3xvrF7BtWYZtq/2+NplolrXjkpcLMFQgnt5KAlOrkCLlclgXCkIoioHr4mJc6mq1mgTe6npomlhE0a4PmzCMzaNtEqp1Bcv1+rdiUWq3BUkSSiVBlgVR/Nv2tGEZDqeOoyrKzHXn0ylsdAgTxhgxcElg07LUTkd5fl4uFpjMVWk1uoUm6Xa7ObxIAL+77vr1dXU4HGmY+dz3PDixGkHcmf65Rx65jdWZTPj4GKZSoaqG0yk5xrtcLmO1EsVd8Hffv2y3Ib/f732Qp9PVCNvG7Xg8iKQOy+bzcrlckKSZ58UHjCdTyYQwYUnMTOzxM75mKIjiFMW9kf4BfhRE0+hoHcEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mockup"\n        title=""\n        src="/react-ru/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png"\n        srcset="/react-ru/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-13705.png 210w,\n/react-ru/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png 228w"\n        sizes="(max-width: 228px) 100vw, 228px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Our JSON API returns some data that looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">[\n  {category: &quot;Sporting Goods&quot;, price: &quot;$49.99&quot;, stocked: true, name: &quot;Football&quot;},\n  {category: &quot;Sporting Goods&quot;, price: &quot;$9.99&quot;, stocked: true, name: &quot;Baseball&quot;},\n  {category: &quot;Sporting Goods&quot;, price: &quot;$29.99&quot;, stocked: false, name: &quot;Basketball&quot;},\n  {category: &quot;Electronics&quot;, price: &quot;$99.99&quot;, stocked: true, name: &quot;iPod Touch&quot;},\n  {category: &quot;Electronics&quot;, price: &quot;$399.99&quot;, stocked: false, name: &quot;iPhone 5&quot;},\n  {category: &quot;Electronics&quot;, price: &quot;$199.99&quot;, stocked: true, name: &quot;Nexus 7&quot;}\n];</code></pre>\n      </div>\n<h2 id="step-1-break-the-ui-into-a-component-hierarchy"><a href="#step-1-break-the-ui-into-a-component-hierarchy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 1: Break The UI Into A Component Hierarchy</h2>\n<p>The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. If you’re working with a designer, they may have already done this, so go talk to them! Their Photoshop layer names may end up being the names of your React components!</p>\n<p>But how do you know what should be its own component? Just use the same techniques for deciding if you should create a new function or object. One such technique is the <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle">single responsibility principle</a>, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.</p>\n<p>Since you’re often displaying a JSON data model to a user, you’ll find that if your model was built correctly, your UI (and therefore your component structure) will map nicely. That’s because UI and data models tend to adhere to the same <em>information architecture</em>, which means the work of separating your UI into components is often trivial. Just break it up into components that represent exactly one piece of your data model.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 275px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 116.00000000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAABYlAAAWJQFJUiTwAAADb0lEQVQ4y32UaXOzNhDHn+//JdoX7dv0SJ/MtE/sOImDbYLxBQEcx45tboTEfSN1idM4nR6a3+wg2L92tVr0hcGgDW0bsP8DOHyme8nYF5BmMUY4Bzz/Pzk5/EURB5hR+oVShvy0bdskSbI0zTIgy/8+4E3TdKE+xpvkXZyAh+M4hJAoisCV/WPA6hRc/1Vc11UQEtu2fB8RgpHvRVEIEOKHYRCGsGgIGaQp5BfDTs9iz0uLosU4nonScqEo6stkIirKZvO8H4+noijN50+LhaKqL4Kw5PlFnlcI5Z0YlvGCyCSFtndMnBt+hjMK7N3o1Q4gAMlZkDOwOOsegoI5UWWjkHYFYxRTw6nQ12n/bvM4t9SIlWbtT/aLnvyw8p6N1rcYsSg+WZNixELUHilrOzFqTa+sLgf3g+kc2CGiGvZ8u78VF9P1NmEsZjTu7AkaMuZWBqVvYq81D2FwdfnrcjF/GN4/8uMRN5yMuNHDUJGlqiyyNIFinSiyxMkLu9bfI3u1nvi+9rrTdh1724rLYmcYW11fQpX0Y1JVJE2DLOvI89jHbnlo39Ou9UY/rm568mAw7107EM0yVI5b3Q7m/R7aPLM0oQSzgHSEATNMr/gkrrfPT73fj6Ph9u7GFCapIiPu7nDzRzidsI3WqjLVnj5gmuoV+5a9VdtrDHp4RT/+gH6+8H/5Kb64KEecJk6Xtzezfs9ZayxPaUhYFHTEITM/RXZrPbeshp+0stTIUjsVkidp/bqTVktxJm532ziJMcEkIAAOSeI45z1DtY00v7y6uuc4bsLfQ61HnGlbp5ZumraoyrKqToDx6sY5V7sxXB/1b/r8VOAFYSXLPOT8JB9MY3vYm64TZWmQxB9AuzvVR5NUx9rQ5eViI62cw14Vhc1MVPiJwo8X93empjL4K1yn8FwgR26r69457cZgu232/Xd5r1dff8v5cbRWtcmY+/qb2Lt+eeQT/QgnRLHPTgdmGOeCedWR7V7YeMjGDx0zoVHlQBS88QMRJvF8WikSe1nDmb2z1s5H5dd6aZrX19+E8WgmCBHGWRwpkjQcDG77veVMxJ7b3XR1xZqawQWG0Ke0a51FUW5bpesC8GdTQhqESscpbLt2XYoh2+AMiSDZTgxL5qUNer8xOmodnuEbtB16m/pv0890fVFYcAH+CXyT8PimkugUAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Component diagram"\n        title=""\n        src="/react-ru/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png"\n        srcset="/react-ru/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-d08bb.png 210w,\n/react-ru/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png 275w"\n        sizes="(max-width: 275px) 100vw, 275px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You’ll see here that we have five components in our simple app. We’ve italicized the data each component represents.</p>\n<ol>\n<li><strong><code class="gatsby-code-text">FilterableProductTable</code> (orange):</strong> contains the entirety of the example</li>\n<li><strong><code class="gatsby-code-text">SearchBar</code> (blue):</strong> receives all <em>user input</em></li>\n<li><strong><code class="gatsby-code-text">ProductTable</code> (green):</strong> displays and filters the <em>data collection</em> based on <em>user input</em></li>\n<li><strong><code class="gatsby-code-text">ProductCategoryRow</code> (turquoise):</strong> displays a heading for each <em>category</em></li>\n<li><strong><code class="gatsby-code-text">ProductRow</code> (red):</strong> displays a row for each <em>product</em></li>\n</ol>\n<p>If you look at <code class="gatsby-code-text">ProductTable</code>, you’ll see that the table header (containing the “Name” and “Price” labels) isn’t its own component. This is a matter of preference, and there’s an argument to be made either way. For this example, we left it as part of <code class="gatsby-code-text">ProductTable</code> because it is part of rendering the <em>data collection</em> which is <code class="gatsby-code-text">ProductTable</code>’s responsibility. However, if this header grows to be complex (i.e. if we were to add affordances for sorting), it would certainly make sense to make this its own <code class="gatsby-code-text">ProductTableHeader</code> component.</p>\n<p>Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy. This is easy. Components that appear within another component in the mock should appear as a child in the hierarchy:</p>\n<ul>\n<li>\n<p><code class="gatsby-code-text">FilterableProductTable</code></p>\n<ul>\n<li><code class="gatsby-code-text">SearchBar</code></li>\n<li>\n<p><code class="gatsby-code-text">ProductTable</code></p>\n<ul>\n<li><code class="gatsby-code-text">ProductCategoryRow</code></li>\n<li><code class="gatsby-code-text">ProductRow</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="step-2-build-a-static-version-in-react"><a href="#step-2-build-a-static-version-in-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 2: Build A Static Version in React</h2>\n<p data-height="600" data-theme-id="0" data-slug-hash="BwWzwm" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/gaearon/pen/BwWzwm">Thinking In React: Step 2</a> on <a href="http://codepen.io">CodePen</a>.</p>\n<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>\n<p>Now that you have your component hierarchy, it’s time to implement your app. The easiest way is to build a version that takes your data model and renders the UI but has no interactivity. It’s best to decouple these processes because building a static version requires a lot of typing and no thinking, and adding interactivity requires a lot of thinking and not a lot of typing. We’ll see why.</p>\n<p>To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using <em>props</em>. <em>props</em> are a way of passing data from parent to child. If you’re familiar with the concept of <em>state</em>, <strong>don’t use state at all</strong> to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.</p>\n<p>You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with <code class="gatsby-code-text">FilterableProductTable</code>) or with the ones lower in it (<code class="gatsby-code-text">ProductRow</code>). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.</p>\n<p>At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have <code class="gatsby-code-text">render()</code> methods since this is a static version of your app. The component at the top of the hierarchy (<code class="gatsby-code-text">FilterableProductTable</code>) will take your data model as a prop. If you make a change to your underlying data model and call <code class="gatsby-code-text">ReactDOM.render()</code> again, the UI will be updated. It’s easy to see how your UI is updated and where to make changes since there’s nothing complicated going on. React’s <strong>one-way data flow</strong> (also called <em>one-way binding</em>) keeps everything modular and fast.</p>\n<p>Simply refer to the <a href="/docs/">React docs</a> if you need help executing this step.</p>\n<h3 id="a-brief-interlude-props-vs-state"><a href="#a-brief-interlude-props-vs-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A Brief Interlude: Props vs State</h3>\n<p>There are two types of “model” data in React: props and state. It’s important to understand the distinction between the two; skim <a href="/docs/interactivity-and-dynamic-uis.html">the official React docs</a> if you aren’t sure what the difference is.</p>\n<h2 id="step-3-identify-the-minimal-but-complete-representation-of-ui-state"><a href="#step-3-identify-the-minimal-but-complete-representation-of-ui-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 3: Identify The Minimal (but complete) Representation Of UI State</h2>\n<p>To make your UI interactive, you need to be able to trigger changes to your underlying data model. React makes this easy with <strong>state</strong>.</p>\n<p>To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY: <em>Don’t Repeat Yourself</em></a>. Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand. For example, if you’re building a TODO list, just keep an array of the TODO items around; don’t keep a separate state variable for the count. Instead, when you want to render the TODO count, simply take the length of the TODO items array.</p>\n<p>Think of all of the pieces of data in our example application. We have:</p>\n<ul>\n<li>The original list of products</li>\n<li>The search text the user has entered</li>\n<li>The value of the checkbox</li>\n<li>The filtered list of products</li>\n</ul>\n<p>Let’s go through each one and figure out which one is state. Simply ask three questions about each piece of data:</p>\n<ol>\n<li>Is it passed in from a parent via props? If so, it probably isn’t state.</li>\n<li>Does it remain unchanged over time? If so, it probably isn’t state.</li>\n<li>Can you compute it based on any other state or props in your component? If so, it isn’t state.</li>\n</ol>\n<p>The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.</p>\n<p>So finally, our state is:</p>\n<ul>\n<li>The search text the user has entered</li>\n<li>The value of the checkbox</li>\n</ul>\n<h2 id="step-4-identify-where-your-state-should-live"><a href="#step-4-identify-where-your-state-should-live" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 4: Identify Where Your State Should Live</h2>\n<p data-height="600" data-theme-id="0" data-slug-hash="qPrNQZ" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="https://codepen.io/gaearon/pen/qPrNQZ">Thinking In React: Step 4</a> on <a href="http://codepen.io">CodePen</a>.</p>\n<p>OK, so we’ve identified what the minimal set of app state is. Next, we need to identify which component mutates, or <em>owns</em>, this state.</p>\n<p>Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. <strong>This is often the most challenging part for newcomers to understand,</strong> so follow these steps to figure it out:</p>\n<p>For each piece of state in your application:</p>\n<ul>\n<li>Identify every component that renders something based on that state.</li>\n<li>Find a common owner component (a single component above all the components that need the state in the hierarchy).</li>\n<li>Either the common owner or another component higher up in the hierarchy should own the state.</li>\n<li>If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.</li>\n</ul>\n<p>Let’s run through this strategy for our application:</p>\n<ul>\n<li><code class="gatsby-code-text">ProductTable</code> needs to filter the product list based on state and <code class="gatsby-code-text">SearchBar</code> needs to display the search text and checked state.</li>\n<li>The common owner component is <code class="gatsby-code-text">FilterableProductTable</code>.</li>\n<li>It conceptually makes sense for the filter text and checked value to live in <code class="gatsby-code-text">FilterableProductTable</code></li>\n</ul>\n<p>Cool, so we’ve decided that our state lives in <code class="gatsby-code-text">FilterableProductTable</code>. First, add an instance property <code class="gatsby-code-text">this.state = {filterText: &#39;&#39;, inStockOnly: false}</code> to <code class="gatsby-code-text">FilterableProductTable</code>’s <code class="gatsby-code-text">constructor</code> to reflect the initial state of your application. Then, pass <code class="gatsby-code-text">filterText</code> and <code class="gatsby-code-text">inStockOnly</code> to <code class="gatsby-code-text">ProductTable</code> and <code class="gatsby-code-text">SearchBar</code> as a prop. Finally, use these props to filter the rows in <code class="gatsby-code-text">ProductTable</code> and set the values of the form fields in <code class="gatsby-code-text">SearchBar</code>.</p>\n<p>You can start seeing how your application will behave: set <code class="gatsby-code-text">filterText</code> to <code class="gatsby-code-text">&quot;ball&quot;</code> and refresh your app. You’ll see that the data table is updated correctly.</p>\n<h2 id="step-5-add-inverse-data-flow"><a href="#step-5-add-inverse-data-flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Step 5: Add Inverse Data Flow</h2>\n<p data-height="600" data-theme-id="0" data-slug-hash="LzWZvb" data-default-tab="js,result" data-user="rohan10" data-embed-version="2" data-pen-title="Thinking In React: Step 5" class="codepen">See the Pen <a href="https://codepen.io/gaearon/pen/LzWZvb">Thinking In React: Step 5</a> on <a href="http://codepen.io">CodePen</a>.</p>\n<p>So far, we’ve built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it’s time to support data flowing the other way: the form components deep in the hierarchy need to update the state in <code class="gatsby-code-text">FilterableProductTable</code>.</p>\n<p>React makes this data flow explicit to make it easy to understand how your program works, but it does require a little more typing than traditional two-way data binding.</p>\n<p>If you try to type or check the box in the current version of the example, you’ll see that React ignores your input. This is intentional, as we’ve set the <code class="gatsby-code-text">value</code> prop of the <code class="gatsby-code-text">input</code> to always be equal to the <code class="gatsby-code-text">state</code> passed in from <code class="gatsby-code-text">FilterableProductTable</code>.</p>\n<p>Let’s think about what we want to happen. We want to make sure that whenever the user changes the form, we update the state to reflect the user input. Since components should only update their own state, <code class="gatsby-code-text">FilterableProductTable</code> will pass callbacks to <code class="gatsby-code-text">SearchBar</code> that will fire whenever the state should be updated. We can use the <code class="gatsby-code-text">onChange</code> event on the inputs to be notified of it. The callbacks passed by <code class="gatsby-code-text">FilterableProductTable</code> will call <code class="gatsby-code-text">setState()</code>, and the app will be updated.</p>\n<p>Though this sounds complex, it’s really just a few lines of code. And it’s really explicit how your data is flowing throughout the app.</p>\n<h2 id="and-thats-it"><a href="#and-thats-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>And That’s It</h2>\n<p>Hopefully, this gives you an idea of how to think about building components and applications with React. While it may be a little more typing than you’re used to, remember that code is read far more than it’s written, and it’s extremely easy to read this modular, explicit code. As you start to build large libraries of components, you’ll appreciate this explicitness and modularity, and with code reuse, your lines of code will start to shrink. :)</p>',frontmatter:{title:"Thinking in React",next:null,prev:"composition-vs-inheritance.html"},fields:{path:"docs/thinking-in-react.md",slug:"docs/thinking-in-react.html"}}},pathContext:{slug:"docs/thinking-in-react.html"}}}});
//# sourceMappingURL=path---docs-thinking-in-react-html-adb4d9722217f012e80c.js.map