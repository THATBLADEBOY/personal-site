import React from 'react'
import Parser from 'html-react-parser'
import styled from '@emotion/styled'

import { linkBlock } from './blocks'
import Card from './Card'

const BlogPostStyle = styled.div`
  h1.title {
    margin: 0;
    font-size: calc(1vw + 25px);
    line-height: calc(1vw + 35px);
    font-weight: 500;
    text-decoration: none;
    color: var(--textTitle);
  }
  div.body {
    h1 {
      font-size: 1.85em;
      line-height: 1.14em;
      font-weight: 400;
    }
    div.highlight pre {
      padding: 5% 5% 5% 85px;
      margin: 20px -85px;
      overflow-wrap: normal;
      overflow-x: auto;
    }
    img {
      max-width: 100%;
    }
    iframe {
      margin: 0 auto;
      display: block;
    }
  }
  .content {
    color: var(--textTitle);
  }

  @media only screen and (max-width: 420px) {
    div.body {
      div.highlight pre {
        background: #29292e;
        border-radius: 2px;
        overflow-x: auto;
        color: #eff0f9;
        line-height: 1.42em;
        padding-left: 4%;
        padding-right: 7%;
        font-size: 0.7em;
        width: 97%;
        margin-left: -3%;
        padding-top: 6%;
        padding-bottom: 6%;
        border-radius: 0;
        overflow-wrap: normal;
      }
    }
  }
`

const BlogPost = ({ post }) => {
  const removeWrappers = html => {
    ;['html', 'body'].forEach(tag => {
      html = html.replace(`<${tag}>`, '')
      html = html.replace(`</${tag}>`, '')
    })
    return html
  }
  const Content = Parser(removeWrappers(post.body_html), {
    replace: ({ attribs, children }) => {
      let content
      ;[linkBlock].some(transform => (content = transform(attribs, children)))
      return content
    },
  })
  return (
    <Card>
      <BlogPostStyle>
        <h1 className="title">{post.title}</h1>
        <div className="body content">{Content}</div>
      </BlogPostStyle>
    </Card>
  )
}

export default BlogPost
