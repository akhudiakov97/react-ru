webpackJsonp([34230478123533],{855:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Less than a year ago, we introduced <a href="/blog/2016/07/22/create-apps-with-no-configuration.html">Create React App</a> as an officially supported way to create apps with zero configuration. The project has since enjoyed tremendous growth, with over 950 commits by more than 250 contributors.</p>\n<p>Today, we are excited to announce that many features that have been in the pipeline for the last few months are finally released.</p>\n<p>As usual with Create React App, <strong>you can enjoy these improvements in your existing non-ejected apps by updating a single dependency</strong> and following our <a href="https://github.com/facebookincubator/create-react-app/releases/tag/v1.0.0">migration instructions</a>.</p>\n<p>Newly created apps will get these improvements automatically.</p>\n<h3 id="webpack-2"><a href="#webpack-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack 2</h3>\n<blockquote>\n<p><em>This change was contributed by <a href="https://github.com/Timer">@Timer</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/1291">#1291</a>.</em></p>\n</blockquote>\n<p>We have upgraded to webpack 2 which has been <a href="https://medium.com/webpack/webpack-2-and-beyond-40520af9067f">officially released</a> a few months ago. It is a big upgrade with many bugfixes and general improvements. We have been testing it for a while, and now consider it stable enough to recommend it to everyone.</p>\n<p>While the Webpack configuration format has changed, Create React App users who didn’t eject don’t need to worry about it as we have updated the configuration on our side.</p>\n<p>If you had to eject your app for one reason or another, Webpack provides a <a href="https://webpack.js.org/guides/migrating/">configuration migration guide</a> that you can follow to update your apps. Note that with each release of Create React App, we are working to support more use cases out of the box so that you don’t have to eject in the future.</p>\n<p>The biggest notable webpack 2 feature is the ability to write and import <a href="http://2ality.com/2014/09/es6-modules-final.html">ES6 modules</a> directly without compiling them to CommonJS. This shouldn’t affect how you write code since you likely already use <code class="gatsby-code-text">import</code> and <code class="gatsby-code-text">export</code> statements, but it will help catch more mistakes like missing named exports at compile time:</p>\n<p><img src="/cra-update-exports-d9aaae3589e6a7b6076b64de79f4bd13.gif" alt="Export validation"> </p>\n<p>In the future, as the ecosystem around ES6 modules matures, you can expect more improvements to your app’s bundle size thanks to <a href="https://webpack.js.org/guides/tree-shaking/">tree shaking</a>.</p>\n<h3 id="runtime-error-overlay"><a href="#runtime-error-overlay" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Runtime Error Overlay</h3>\n<blockquote>\n<p><em>This change was contributed by <a href="https://github.com/Timer">@Timer</a> and <a href="https://github.com/nicinabox">@nicinabox</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/1101">#1101</a>, <a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/2201">#2201</a>.</em></p>\n</blockquote>\n<p>Have you ever made a mistake in code and only realized it after the console is flooded with cryptic errors? Or worse, have you ever shipped an app with crashes in production because you accidentally missed an error in development?</p>\n<p>To address these issues, we are introducing an overlay that pops up whenever there is an uncaught error in your application. It only appears in development, and you can dismiss it by pressing Escape. </p>\n<p>A GIF is worth a thousand words:\n<br>\n<img src="/cra-runtime-error-a0c1e436d1ea034c8ecaf48e8bcb2890.gif" alt="Runtime error overlay"> </p>\n<p>(Yes, it integrates with your editor!)</p>\n<p>In the future, we plan to teach the runtime error overlay to understand more about your React app. For example, after React 16 we plan to show React component stacks in addition to the JavaScript stacks when an error is thrown.</p>\n<h3 id="progressive-web-apps-by-default"><a href="#progressive-web-apps-by-default" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Progressive Web Apps by Default</h3>\n<blockquote>\n<p><em>This change was contributed by <a href="https://github.com/jeffposnick">@jeffposnick</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/1728">#1728</a>.</em></p>\n</blockquote>\n<p>Newly created projects are built as <a href="https://developers.google.com/web/progressive-web-apps/">Progressive Web Apps</a> by default. This means that they employ <a href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers">service workers</a> with an <a href="https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network">offline-first caching strategy</a> to minimize the time it takes to serve the app to the users who visit it again. You can opt out of this behavior, but we recommend it both for new and existing apps, especially if you target mobile devices.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/cra-pwa-cff5fa9b92de804e655ea669a53d4d9c-c9445.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 41.40893470790378%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABKElEQVQY03VQyW7CMBT0/39OpUq9oCISQS/0Uji0EAIlC16y2Q7ZsNMJFJRD+04zoxn7vSH6Y0UpDUVVHkOtdZZlnPNctVVVMcaEEEopfp0kSeq6hpimKXSkSBzHRSHBYUIA0tbbge78PcD+cJBSFkWh/hrCOKeUrdbrOD4xxr82XhBGjAuEj0EQRbG/P2y2HpYqpIQTH5RlCR2ANE3T972xtm0NgO06a+0ArDXGjMFgGwHo5MHbdsj09/At9h+4YXKiDDXgia4zQiRaqSzP0yyrtL44r3Y+s2+uWTiX+Uw8P1XTSRCEMKOaYW10CI5mcCSaBMU9uKqevEgeiOidhcvTcZmyT3QR+d/In68DD+lHY6/zux7OcKd24eDn2+fYonOnl3P9MP8AucXBSjgQaVsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Loading assets from service worker"\n        title=""\n        src="/react-ru/static/cra-pwa-cff5fa9b92de804e655ea669a53d4d9c-acf85.png"\n        srcset="/react-ru/static/cra-pwa-cff5fa9b92de804e655ea669a53d4d9c-c1418.png 210w,\n/react-ru/static/cra-pwa-cff5fa9b92de804e655ea669a53d4d9c-5d5d8.png 420w,\n/react-ru/static/cra-pwa-cff5fa9b92de804e655ea669a53d4d9c-acf85.png 840w,\n/react-ru/static/cra-pwa-cff5fa9b92de804e655ea669a53d4d9c-c9445.png 1164w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n     </p>\n<p>New apps automatically have these features, but you can easily convert an existing project to a Progressive Web App  by following <a href="https://github.com/facebookincubator/create-react-app/releases/tag/v1.0.0">our migration guide</a>.</p>\n<p>We will be adding <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app">more documentation</a> on this topic in the coming weeks. Please feel free to <a href="https://github.com/facebookincubator/create-react-app/issues/new">ask any questions</a> on the issue tracker!</p>\n<h3 id="jest-20"><a href="#jest-20" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Jest 20</h3>\n<blockquote>\n<p><em>This change was contributed by <a href="https://github.com/rogeliog">@rogeliog</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/1614">#1614</a> and <a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/2171">#2171</a>.</em></p>\n</blockquote>\n<p>We are now using the latest version of Jest that includes numerous bugfixes and improvements. You can read more about the changes in <a href="https://facebook.github.io/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements.html">Jest 19</a> and <a href="http://facebook.github.io/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner.html">Jest 20</a> blog posts.</p>\n<p>Highlights include a new <a href="https://facebook.github.io/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements.html#immersive-watch-mode">immersive watch mode</a>, <a href="https://facebook.github.io/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements.html#snapshot-updates">a better snapshot format</a>, <a href="https://facebook.github.io/jest/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements.html#improved-printing-of-skipped-tests">improvements to printing skipped tests</a>, and <a href="https://facebook.github.io/jest/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner.html#new-improved-testing-apis">new testing APIs</a>.</p>\n<p><img src="/cra-jest-search-bf7aa2c62ad1f43fca436bfb4d8b3a0f.gif" alt="Immersive test watcher"> </p>\n<p>Additionally, Create React App now support configuring a few Jest options related to coverage reporting.</p>\n<h3 id="code-splitting-with-dynamic-import"><a href="#code-splitting-with-dynamic-import" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code Splitting with Dynamic import()</h3>\n<blockquote>\n<p><em>This change was contributed by <a href="https://github.com/Timer">@Timer</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/1538">#1538</a> and <a href="https://github.com/tharakawj">@tharakawj</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/1801">#1801</a>.</em></p>\n</blockquote>\n<p>It is important to keep the initial JavaScript payload of web apps down to the minimum, and <a href="https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-2-page-load-performance-33b932d97cf2">load the rest of the code on demand</a>. Although Create React App supported <a href="https://webpack.js.org/guides/code-splitting-async/">code splitting</a> using <code class="gatsby-code-text">require.ensure()</code> since the first release, it used a webpack-specific syntax that did not work in Jest or other environments.</p>\n<p>In this release, we are adding support for the <a href="http://2ality.com/2017/01/import-operator.html#loading-code-on-demand">dynamic <code class="gatsby-code-text">import()</code> proposal</a> which aligns with the future web standards. Unlike <code class="gatsby-code-text">require.ensure()</code>, it doesn’t break Jest tests, and should eventually become a part of JavaScript. We encourage you to use <code class="gatsby-code-text">import()</code> to delay loading the code for non-critical component subtrees until you need to render them.</p>\n<p><img src="/cra-dynamic-import-b967396662319e6aa6170dab232f0286.gif" alt="Creating chunks with dynamic import"></p>\n<h3 id="better-console-output"><a href="#better-console-output" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Better Console Output</h3>\n<blockquote>\n<p><em>This change was contributed by <a href="https://github.com/gaearon">@gaearon</a> in <a href="https://github.com/facebookincubator/create-react-app/pull/2120">#2120</a>, <a href="https://github.com/facebookincubator/create-react-app/pull/2125">#2125</a>, and <a href="https://github.com/facebookincubator/create-react-app/pull/2161">#2161</a>.</em></p>\n</blockquote>\n<p>We have improved the console output across the board.</p>\n<p>For example, when you start the development server, we now display the LAN address in additional to the localhost address so that you can quickly access the app from a mobile device on the same network:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/cra-better-output-5d3b4caf2ae115ca4ab1f15e6e19680d-a6f54.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+ElEQVQY041Qy26DMBDkIwJpgzASSmMXsI0xfhBLiCPf0iMRDj3SHHrrN3cbqkqpcsjIWo/WMzsrB8vyNn7N75f5fPH+Y5o/z36ZvPfTNI0/OI3rdfolKweAKIh24TaJwqcwitcTQd08hkDKJr+CUqq1rqrKOccY67oOKqUlu/aV0gih/+YEIeeOGOO/VpHnnPMGoFRrrRBiGIYEJXeSsyyr6xrSYHbf95yz1SylhGTIBG6Mgac7Zmst7Ky0hrVXXdseIZUyplRDCIEpRVFAH5Rpmt6YCXkVtQD1fv9itDYWZLosS8g8YHzI811BY8qeMYkZD8Obv/wG1O5Pc7AJShcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Better console output"\n        title=""\n        src="/react-ru/static/cra-better-output-5d3b4caf2ae115ca4ab1f15e6e19680d-acf85.png"\n        srcset="/react-ru/static/cra-better-output-5d3b4caf2ae115ca4ab1f15e6e19680d-c1418.png 210w,\n/react-ru/static/cra-better-output-5d3b4caf2ae115ca4ab1f15e6e19680d-5d5d8.png 420w,\n/react-ru/static/cra-better-output-5d3b4caf2ae115ca4ab1f15e6e19680d-acf85.png 840w,\n/react-ru/static/cra-better-output-5d3b4caf2ae115ca4ab1f15e6e19680d-a6f54.png 1000w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n     </p>\n<p>When lint errors are reported, we no longer show the warnings so that you can concentrate on more critical issues. Errors and warnings in the production build output are better formatted, and the build error overlay font size now matches the browser font size more closely.</p>\n<h3 id="but-wait-theres-more"><a href="#but-wait-theres-more" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>But Wait… There’s More!</h3>\n<p>You can only fit so much in a blog post, but there are other long-requested features in this release, such as <a href="https://github.com/facebookincubator/create-react-app/pull/1344">environment-specific and local <code class="gatsby-code-text">.env</code> files</a>, <a href="https://github.com/facebookincubator/create-react-app/pull/2130">a lint rule against confusingly named globals</a>, <a href="https://github.com/facebookincubator/create-react-app/pull/1790">support for multiple proxies in development</a>, <a href="https://github.com/facebookincubator/create-react-app/pull/1590">a customizable browser launch script</a>, and many bugfixes.</p>\n<p>You can read the full changelog and the migration guide in the <a href="https://github.com/facebookincubator/create-react-app/releases/tag/v1.0.0">v1.0.0 release notes</a>.</p>\n<h3 id="acknowledgements"><a href="#acknowledgements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acknowledgements</h3>\n<p>This release is a result of months of work from many people in the React community. It is focused on improving both developer and end user experience, as we believe they are complementary and go hand in hand.</p>\n<p>We are grateful to <a href="https://github.com/facebookincubator/create-react-app/graphs/contributors">everyone who has offered their contributions</a>, whether in code, documentation, or by helping other people. We would like to specifically thank <a href="https://github.com/timer">Joe Haddad</a> for his invaluable help maintaining the project.</p>\n<p>We are excited to bring these improvements to everybody using Create React App, and we are looking forward to more of your feedback and contributions.</p>',excerpt:"Less than a year ago, we introduced  Create React App  as an officially supported way to create apps with zero configuration. The project has since enjoyed tremendous growth, with over 950 commits by more than 250 contributors. Today, we are excited to announce that many features that have been in the pipeline for the last few months are finally released. As usual with Create React App,  you can enjoy these improvements in your existing non-ejected apps by updating a single dependency  and…",frontmatter:{title:"What's New in Create React App",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"May 17, 2017",path:"blog/2017-05-18-whats-new-in-create-react-app.md",slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}});
//# sourceMappingURL=path---blog-2017-05-18-whats-new-in-create-react-app-html-81074e70328c071f9bcd.js.map