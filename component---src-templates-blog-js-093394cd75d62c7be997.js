webpackJsonp([36733297554888],{232:function(e,t,a){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=a(6),n=r(o),l=a(3),i=(r(l),a(54)),d=r(i),c=a(40),u=function(e){return[{title:"Recent Posts",items:e.edges.map(function(e){var t=e.node;return{id:t.fields.slug,title:t.frontmatter.title}}).concat({id:"/blog/all.html",title:"All posts ..."})}]},s=function(t){var a=t.data,r=t.location;return e.createElement(d.default,{authors:a.markdownRemark.frontmatter.author,createLink:c.createLinkBlog,date:a.markdownRemark.fields.date,location:r,ogDescription:a.markdownRemark.excerpt,markdownRemark:a.markdownRemark,sectionList:u(a.allMarkdownRemark),titlePostfix:" - React Blog"})};s.propTypes={data:n.default.object.isRequired};t.pageQuery="** extracted graphql fragment **";t.default=s}).call(t,a(4))}});
//# sourceMappingURL=component---src-templates-blog-js-093394cd75d62c7be997.js.map