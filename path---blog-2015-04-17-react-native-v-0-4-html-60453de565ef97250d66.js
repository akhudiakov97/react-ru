webpackJsonp([24885951540962],{817:function(e,t){e.exports={data:{markdownRemark:{html:'<p>It’s been three weeks since we open sourced React Native and there’s been some insane amount of activity already: over 12.5k stars, 1000 commits, 500 issues, 380 pull requests, and 100 contributors, plus <a href="http://react.parts/native-ios">35 plugins</a> and <a href="http://herman.asia/building-a-flashcard-app-with-react-native">1 app in the app store</a>! We were expecting some buzz around the project but this is way beyond anything we imagined. Thank you!</p>\n<p>I’d especially like to thank community members Brent Vatne and James Ide who have both already contributed meaningfully to the project and have been extremely helpful on IRC and with issues and pull requests</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<p>The main focus of the past few weeks has been to make React Native the best possible experience for people outside of Facebook. Here’s a high level summary of what’s happened since we open sourced:</p>\n<ul>\n<li><strong>Error messages and documentation</strong>: We want React Native to be the absolute best developer experience for building mobile apps. We’ve added a lot of warnings, improved the documentation, and fixed many bugs. If you encounter anything, and I really mean anything, that is not expected or clear, please create an issue - we want to hear about it and fix it.</li>\n<li><strong>NPM modules compatibility</strong>: There are a lot of libraries on NPM that do not depend on node/browser internals that would be really useful in React Native, such as superagent, underscore, parse, and many others.  The packager is now a lot more faithful to node/browserify/webpack dependency resolution. If your favorite library doesn’t work out of the box, please open up an issue.</li>\n<li><strong>Infrastructure</strong>: We are refactoring the internals of React Native to make it easier to plug in to existing iOS codebases, as well as improve performance by removing redundant views and shadow views, supporting multiple root views and manually registering classes to reduce startup time.</li>\n<li><strong>Components</strong>: The API for a lot of UI components and APIs, especially the ones we’re not using heavily inside of Facebook, has dramatically improved thanks to many of your pull requests.</li>\n<li><strong>Tests</strong>: We ported JavaScript tests, iOS Snapshot tests, and End to End tests to Travis CI. We have broken GitHub master a couple of times (whoops!) when syncing and we hope that with this growing suite of tests it’s going to become harder and harder to do so.</li>\n<li><strong>Patent Grant</strong>: Many of you had concerns and questions around the PATENTS file. We pushed <a href="https://code.facebook.com/posts/1639473982937255/updating-our-open-source-patent-grant/">a new version of the grant</a>.</li>\n<li><strong>Per commit history</strong>: In order to synchronize from Facebook to GitHub, we used to do one giant commit every few days. We improved our tooling and now have per commit history that maintains author information (both internal and external from pull requests), and we retroactively applied this to historical diffs to provide proper attribution.</li>\n</ul>\n<h2 id="where-are-we-going"><a href="#where-are-we-going" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where are we going?</h2>\n<p>In addition to supporting pull requests, issues, and general improvements, we’re also working hard on our internal React Native integrations and on React Native for Android.</p>',excerpt:"It’s been three weeks since we open sourced React Native and there’s been some insane amount of activity already: over 12.5k stars, 1000 commits, 500 issues, 380 pull requests, and 100 contributors, plus  35 plugins  and  1 app in the app store ! We were expecting some buzz around the project but this is way beyond anything we imagined. Thank you! I’d especially like to thank community members Brent Vatne and James Ide who have both already contributed meaningfully to the project and have been…",frontmatter:{title:"React Native v0.4",next:null,prev:null,author:[{frontmatter:{name:"Vjeux",url:"https://twitter.com/vjeux"}}]},fields:{date:"April 16, 2015",path:"blog/2015-04-17-react-native-v0.4.md",slug:"/blog/2015/04/17/react-native-v0.4.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2015/04/17/react-native-v0.4.html"}}}});
//# sourceMappingURL=path---blog-2015-04-17-react-native-v-0-4-html-60453de565ef97250d66.js.map