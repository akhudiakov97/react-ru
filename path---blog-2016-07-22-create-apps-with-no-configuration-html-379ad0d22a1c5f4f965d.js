webpackJsonp([0xdaaee5e6d163],{850:function(e,t){e.exports={data:{markdownRemark:{html:'<p><strong><a href="https://github.com/facebookincubator/create-react-app">Create React App</a></strong> is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<p>First, install the global package:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-sh"><code class="gatsby-code-sh">npm install -g create-react-app</code></pre>\n      </div>\n<p>Node.js 4.x or higher is required.</p>\n<h3 id="creating-an-app"><a href="#creating-an-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating an App</h3>\n<p>Now you can use it to create a new app:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-sh"><code class="gatsby-code-sh">create-react-app hello-world</code></pre>\n      </div>\n<p>This will take a while as npm installs the transitive dependencies, but once it’s done, you will see a list of commands you can run in the created folder:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/created-folder-b5996203fe38b91567eaa57139964146-82b8b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.79645191409898%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABlklEQVQoz62Sz07CQBDGq0eNCQZQaUughdpuW0oLQaFVAgfegXMfzkcw8QH4ExNMOBkTTh5J3+FzZjEYQoiSePjSnd3Z38w3W+Vz9jyef7ymq9Vqq9f3VTqbzdL5fJ4uFot0Mpmk0+lUxm8UL5fLnfxvjRVFOVE8z1vbtobb2xKaTRWmeUOqwDCMY7Um4JniCJH5nod6vU7AJjzPhysEgiAAncG2bfi+jzAM5Z7nupQXoFgsolAobJXP5zMCXiiCgK5MCkFr+I0GarWaXDPMcRzwOTmR4CiKoOvaDmwHWKlUssd+H51OB61WC3HcQ/LwgG63i+FwiMFggLv7e/R6PenApGKmacIkm1ysblkolUo/QAqyVrst7TTJFncVx4mMIyrAEL7IX+4uCDYxj4DPWdx9tVrdAC3LyrgzBrFtTuYEIdztRU3bt3jQsmGYGdsajUYIo1B2IpzNo9xcX/8K2gNqup7puo5yuQxVVf8MOAhMEjeLE5uGL2jwFr2ktfdLHAXM5XJPpJd/0BMBz0nKJenqH8Sc0y99Qzc7aE9fKwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="created folder"\n        title=""\n        src="/react-ru/static/created-folder-b5996203fe38b91567eaa57139964146-acf85.png"\n        srcset="/react-ru/static/created-folder-b5996203fe38b91567eaa57139964146-c1418.png 210w,\n/react-ru/static/created-folder-b5996203fe38b91567eaa57139964146-5d5d8.png 420w,\n/react-ru/static/created-folder-b5996203fe38b91567eaa57139964146-acf85.png 840w,\n/react-ru/static/created-folder-b5996203fe38b91567eaa57139964146-82b8b.png 1071w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="starting-the-server"><a href="#starting-the-server" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starting the Server</h3>\n<p>Run <code class="gatsby-code-text">npm start</code> to launch the development server. The browser will open automatically with the created app’s URL.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/compiled-successfully-be1531bce6379ad2d464c28ee4f8b857-82b8b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.79645191409898%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAyklEQVQoz+2MvwqCUBTGb41FYCitKqiJ165k1LM0n4fzDRravf4Hp6DAoVl8h9PRoakGwSkafpzv4zv82FNeztmjgPp2hzRNoaoqyPMCpJR086GXRQkx9TiOIZEJZFk+7EmSQl3X0DRNz5kxNmPOwW6dk4323kLK6BxttISFpmmOpSXhgnmcd5xzNAwDRRCg53m4dV30/d2QhRDY72EYoq7rqGnaR1RV7Ui4YiTqvj2N4S3sw1/460JFUSLiOgERCZcEWxObCeg98xemdR9afqSm1AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="compiled successfully"\n        title=""\n        src="/react-ru/static/compiled-successfully-be1531bce6379ad2d464c28ee4f8b857-acf85.png"\n        srcset="/react-ru/static/compiled-successfully-be1531bce6379ad2d464c28ee4f8b857-c1418.png 210w,\n/react-ru/static/compiled-successfully-be1531bce6379ad2d464c28ee4f8b857-5d5d8.png 420w,\n/react-ru/static/compiled-successfully-be1531bce6379ad2d464c28ee4f8b857-acf85.png 840w,\n/react-ru/static/compiled-successfully-be1531bce6379ad2d464c28ee4f8b857-82b8b.png 1071w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Create React App uses both webpack and Babel under the hood.\nThe console output is tuned to be minimal to help you focus on the problems:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/failed-to-compile-71717aaf13cf34cfdb4e6b7e6742fb64-82b8b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.79645191409898%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABiklEQVQoz62Ry07CQBSGq0uNCYa2FCgILU1LC+VSkUQIgUTgFVjPw/kGLtxT7gkrE01YuCZ9h98zQ8SVQAiLLzPTM/3mXKTv8G00+1qw9ccnm06nbLVasfl8wcIwpHUuzsvFko3pPB6P2SScsNlsLuKTyZSt12u22Ww4I0mSrqTAMrcEqsSzXUC5YCKfz5/DloQ3kuu6kW3bMAwDnufB932xVxQFqqpClmWx5+sRIhLeSa7nRUEQoNVqodPpoNHsoFwuk7iCouOgVCoJ+EPFYhGWZaFSqYg7/MyhpJBKpXZCTdMih37krxi1AI7/CNM0xUXbNGAmtX2mh4jH4zuhLCtRLvcgPiaTSWQyGWSzWbFqiQR0kikUSxwpey9Mp9OR57n7QLPZFOV3X7oYDgdouAX06lX0nhrwc1lYmgozoYqSHdoXMjov909IPYlqtZoYCKdeD9DvD9But8FbwfvDe8gFJ2Wo63rEp/g7yVP6dVDIp3OO4F9hLBZ7Jd4vwCsJbwnpnlAvAPdc/wDO+y2EMiHD1gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="failed to compile"\n        title=""\n        src="/react-ru/static/failed-to-compile-71717aaf13cf34cfdb4e6b7e6742fb64-acf85.png"\n        srcset="/react-ru/static/failed-to-compile-71717aaf13cf34cfdb4e6b7e6742fb64-c1418.png 210w,\n/react-ru/static/failed-to-compile-71717aaf13cf34cfdb4e6b7e6742fb64-5d5d8.png 420w,\n/react-ru/static/failed-to-compile-71717aaf13cf34cfdb4e6b7e6742fb64-acf85.png 840w,\n/react-ru/static/failed-to-compile-71717aaf13cf34cfdb4e6b7e6742fb64-82b8b.png 1071w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>ESLint is also integrated so lint warnings are displayed right in the console:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/compiled-with-warnings-29d85c69eb1a92345d129bd6354cfdd7-82b8b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.79645191409898%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABfUlEQVQoz62SzWrCUBCF0y5bChbFpP5LzDXRWL3aaPzXRbWP4Po+XN+gi+6N/5BVoQUXXUve4XRyuypIIeDiY2YycHLOcJVv722x+doJ/+NTrNdrcTgcxHa7E57nUd3Keb/biyXNy+VSrLyV2Gy2cr9arYXv++J4PIYsFEW5UppN4+Q8GeC8hEajhFYr7A0Ui8WonEjwRrFtO2hwLj+Wywz1eh2VSgWJRCIS8Xg8IME7xXGcoNftYjgaYUS4rotBvw+308FgMIBpmtEEVVUNNE0jdxp0XYNhMFTJYYEch87tmg2L5tA1Y0z+IJVOI5/PI5fLIZPJ/BVkTAuYoeKx9oBCIQnL0mTVdVX2YY3kMGyi3utfwclkEnBuo9v9ZTzmcJwKptM22o6JjtvGfP6CXq9HuwmeZzMMh0OkKfZZQc55kM0mEcYulVSUmYaijFygyBaq1SrdzwK9BnoBDXlHXdfl7qxgKpW6bORYLPZKvF+AVxK8JZR7InkBQp3rH0TqL7QgArwEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="compiled with warnings"\n        title=""\n        src="/react-ru/static/compiled-with-warnings-29d85c69eb1a92345d129bd6354cfdd7-acf85.png"\n        srcset="/react-ru/static/compiled-with-warnings-29d85c69eb1a92345d129bd6354cfdd7-c1418.png 210w,\n/react-ru/static/compiled-with-warnings-29d85c69eb1a92345d129bd6354cfdd7-5d5d8.png 420w,\n/react-ru/static/compiled-with-warnings-29d85c69eb1a92345d129bd6354cfdd7-acf85.png 840w,\n/react-ru/static/compiled-with-warnings-29d85c69eb1a92345d129bd6354cfdd7-82b8b.png 1071w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>We only picked a small subset of lint rules that often lead to bugs.</p>\n<h3 id="building-for-production"><a href="#building-for-production" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building for Production</h3>\n<p>To build an optimized bundle, run <code class="gatsby-code-text">npm run build</code>:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/react-ru/static/npm-run-build-a2138f74bd9969980c35c50936c6217d-82b8b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 57.79645191409898%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABe0lEQVQoz62SzU7CQBSFR5caEwzgAtqSwvQH2um0dWELicW3YN2H4xFMXEuidCMbFyasXJJ5h+u9k2JiqEYSFifTNvd+c85J2efL4+L1oyq32+2Bnjfv5Xq9LlerVVlVVbl52zTO1Vowxs7YbObu8oxDce9AIO/AJaUZuLc52Lb9bw2Hwx0CLxg+KBlFMJlMIMsz8DwPgiAA3/dBSglCCJBxDGEY6hmch06nc6B2u60QeMUGg4GiJc91QSDYH49xyW5c+kvfQASoEB3FsdTOototOUySBDjnMMZLgiBElziHrk3T/B2Iy4oAQkTgokuKrIVAgoahAMdxdGSC00ySpsBHo2agjR3OH+ZQFIXuh1ySIwIY/f7xkTl3FMWUMta3U5/0HkUSsN/jgaZlKcMwdC90WpYF+A366K5JNNPr9WC/cwDMc0dNpx7MCxdS7MZBl+SU4tP/NcKu6Nz3V/9zumdMB91u9yew1WotUU8n0BKBlyh2jbo5gYhz/gUvZjTvzrdI1QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="npm run build"\n        title=""\n        src="/react-ru/static/npm-run-build-a2138f74bd9969980c35c50936c6217d-acf85.png"\n        srcset="/react-ru/static/npm-run-build-a2138f74bd9969980c35c50936c6217d-c1418.png 210w,\n/react-ru/static/npm-run-build-a2138f74bd9969980c35c50936c6217d-5d5d8.png 420w,\n/react-ru/static/npm-run-build-a2138f74bd9969980c35c50936c6217d-acf85.png 840w,\n/react-ru/static/npm-run-build-a2138f74bd9969980c35c50936c6217d-82b8b.png 1071w"\n        sizes="(max-width: 840px) 100vw, 840px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>It is minified, correctly envified, and the assets include content hashes for caching.</p>\n<h3 id="one-dependency"><a href="#one-dependency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>One Dependency</h3>\n<p>Your <code class="gatsby-code-text">package.json</code> contains only a single build dependency and a few scripts:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n  <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"hello-world"</span><span class="token punctuation">,</span>\n  <span class="token string">"dependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"react"</span><span class="token punctuation">:</span> <span class="token string">"^15.2.1"</span><span class="token punctuation">,</span>\n    <span class="token string">"react-dom"</span><span class="token punctuation">:</span> <span class="token string">"^15.2.1"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"devDependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"react-scripts"</span><span class="token punctuation">:</span> <span class="token string">"0.1.0"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token string">"react-scripts start"</span><span class="token punctuation">,</span>\n    <span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"react-scripts build"</span><span class="token punctuation">,</span>\n    <span class="token string">"eject"</span><span class="token punctuation">:</span> <span class="token string">"react-scripts eject"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>We take care of updating Babel, ESLint, and webpack to stable compatible versions so you can update a single dependency to get them all.</p>\n<h3 id="zero-configuration"><a href="#zero-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Zero Configuration</h3>\n<p>It is worth repeating: there are no configuration files or complicated folder structures. The tool only generates the files you need to build your app.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">hello-world/\n  README.md\n  index.html\n  favicon.ico\n  node_modules/\n  package.json\n  src/\n    App.css\n    App.js\n    index.css\n    index.js\n    logo.svg</code></pre>\n      </div>\n<p>All the build settings are preconfigured and can’t be changed. Some features, such as testing, are currently missing. This is an intentional limitation, and we recognize it might not work for everybody. And this brings us to the last point.</p>\n<h3 id="no-lock-in"><a href="#no-lock-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>No Lock-In</h3>\n<p>We first saw this feature in <a href="https://github.com/eanplatter/enclave">Enclave</a>, and we loved it. We talked to <a href="https://twitter.com/EanPlatter">Ean</a>, and he was excited to collaborate with us. He already sent a few pull requests!</p>\n<p>“Ejecting” lets you leave the comfort of Create React App setup at any time. You run a single command, and all the build dependencies, configs, and scripts are moved right into your project. At this point you can customize everything you want, but effectively you are forking our configuration and going your own way. If you’re experienced with build tooling and prefer to fine-tune everything to your taste, this lets you use Create React App as a boilerplate generator.</p>\n<p>We expect that at early stages, many people will “eject” for one reason or another, but as we learn from them, we will make the default setup more and more compelling while still providing no configuration.</p>\n<h2 id="try-it-out"><a href="#try-it-out" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Try It Out!</h2>\n<p>You can find <a href="https://github.com/facebookincubator/create-react-app"><strong>Create React App</strong></a> with additional instructions on GitHub.</p>\n<p>This is an experiment, and only time will tell if it becomes a popular way of creating and building React apps, or fades into obscurity.</p>\n<p>We welcome you to participate in this experiment. Help us build the React tooling that more people can use. We are always <a href="https://github.com/facebookincubator/create-react-app/issues/11">open to feedback</a>.</p>\n<h2 id="the-backstory"><a href="#the-backstory" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Backstory</h2>\n<p>React was one of the first libraries to embrace transpiling JavaScript. As a result, even though you can <a href="https://github.com/facebook/react/blob/3fd582643ef3d222a00a0c756292c15b88f9f83c/examples/basic-jsx/index.html">learn React without any tooling</a>, the React ecosystem has commonly become associated with an overwhelming explosion of tools.</p>\n<p>Eric Clemmons called this phenomenon the “<a href="https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4">JavaScript Fatigue</a>”:</p>\n<blockquote>\n<p>Ultimately, the problem is that by choosing React (and inherently JSX), you’ve unwittingly opted into a confusing nest of build tools, boilerplate, linters, &#x26; time-sinks to deal with before you ever get to create anything.</p>\n</blockquote>\n<p>It is tempting to write code in ES2015 and JSX. It is sensible to use a bundler to keep the codebase modular, and a linter to catch the common mistakes. It is nice to have a development server with fast rebuilds, and a command to produce optimized bundles for production.</p>\n<p>Combining these tools requires some experience with each of them. Even so, it is far too easy to get dragged into fighting small incompatibilities, unsatisfied peerDependencies, and illegible configuration files.</p>\n<p>Many of those tools are plugin platforms and don’t directly acknowledge each other’s existence. They leave it up to the users to wire them together. The tools mature and change independently, and tutorials quickly get out of date.</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Marc was almost ready to implement his &quot;hello world&quot; React app <a href="https://t.co/ptdg4yteF1">pic.twitter.com/ptdg4yteF1</a></p>&mdash; Thomas Fuchs (@thomasfuchs) <a href="https://twitter.com/thomasfuchs/status/708675139253174273">March 12, 2016</a></blockquote>\n<p>This doesn’t mean those tools aren’t great. To many of us, they have become indispensable, and we very much appreciate the effort of their maintainers. They already have too much on their plates to worry about the state of the React ecosystem.</p>\n<p>Still, we knew it was frustrating to spend days setting up a project when all you wanted was to learn React. We wanted to fix this.</p>\n<h2 id="could-we-fix-this"><a href="#could-we-fix-this" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Could We Fix This?</h2>\n<p>We found ourselves in an unusual dilemma.</p>\n<p>So far, <a href="/docs/design-principles.html#dogfooding">our strategy</a> has been to only release the code that we are using at Facebook. This helped us ensure that every project is battle-tested and has clearly defined scope and priorities.</p>\n<p>However, tooling at Facebook is different than at many smaller companies. Linting, transpilation, and packaging are all handled by powerful remote development servers, and product engineers don’t need to configure them. While we wish we could give a dedicated server to every user of React, even Facebook cannot scale that well!</p>\n<p>The React community is very important to us. We knew that we couldn’t fix the problem within the limits of our open source philosophy. This is why we decided to make an exception, and to ship something that we didn’t use ourselves, but that we thought would be useful to the community.</p>\n<h2 id="the-quest-for-a-react-abbr-titlecommand-line-interfacecliabbr"><a href="#the-quest-for-a-react-abbr-titlecommand-line-interfacecliabbr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Quest for a React <abbr title="Command Line Interface">CLI</abbr></h2>\n<p>Having just attended <a href="http://embercamp.com/">EmberCamp</a> a week ago, I was excited about <a href="https://ember-cli.com/">Ember CLI</a>. Ember users have a great “getting started” experience thanks to a curated set of tools united under a single command-line interface. I have heard similar feedback about <a href="https://github.com/elm-lang/elm-reactor">Elm Reactor</a>.</p>\n<p>Providing a cohesive curated experience is valuable by itself, even if the user could in theory assemble those parts themselves. Kathy Sierra <a href="http://seriouspony.com/blog/2013/7/24/your-app-makes-me-fat">explains it best</a>:</p>\n<blockquote>\n<p>If your UX asks the user to make <em>choices</em>, for example, even if those choices are both clear and useful, the act of <em>deciding</em> is a cognitive drain. And not just <em>while</em> they’re deciding… even <em>after</em> we choose, an unconscious cognitive background thread is slowly consuming/leaking resources, “Was <em>that</em> the right choice?”</p>\n</blockquote>\n<p>I never tried to write a command-line tool for React apps, and neither has <a href="https://twitter.com/vjeux">Christopher</a>. We were chatting on Messenger about this idea, and we decided to work together on it for a week as a hackathon project.</p>\n<p>We knew that such projects traditionally haven’t been very successful in the React ecosystem. Christopher told me that multiple “React CLI” projects have started and failed at Facebook. The community tools with similar goals also exist, but so far they have not yet gained enough traction.</p>\n<p>Still, we decided it was worth another shot. Christopher and I created a very rough proof of concept on the weekend, and <a href="https://twitter.com/lacker">Kevin</a> soon joined us.</p>\n<p>We invited some of the community members to collaborate with us, and we have spent this week working on this tool. We hope that you’ll enjoy using it! <a href="https://github.com/facebookincubator/create-react-app/issues/11">Let us know what you think.</a></p>\n<p>We would like to express our gratitude to <a href="https://twitter.com/mxstbr">Max Stoiber</a>, <a href="https://twitter.com/jbscript">Jonny Buchanan</a>, <a href="https://twitter.com/eanplatter">Ean Platter</a>, <a href="https://github.com/tylermcginnis">Tyler McGinnis</a>, <a href="https://github.com/kentcdodds">Kent C. Dodds</a>, and <a href="https://twitter.com/ericclemmons">Eric Clemmons</a> for their early feedback, ideas, and contributions.</p>',excerpt:"Create React App  is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration. Getting Started Installation First, install the global package: Node.js 4.x or higher is required. Creating an App Now you can use it to create a new app: This will take a while as npm installs the transitive dependencies, but once it’s done, you will see a list of commands you can run in the created folder: Starting the Server Run   to launch the…",frontmatter:{title:"Create Apps with No Configuration",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"July 21, 2016",path:"blog/2016-07-22-create-apps-with-no-configuration.md",slug:"/blog/2016/07/22/create-apps-with-no-configuration.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}}]}},pathContext:{slug:"/blog/2016/07/22/create-apps-with-no-configuration.html"}}}});
//# sourceMappingURL=path---blog-2016-07-22-create-apps-with-no-configuration-html-379ad0d22a1c5f4f965d.js.map