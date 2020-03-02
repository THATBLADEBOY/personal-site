import React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'

import Card from './Card'

const BlogCardStyle = styled.div`
  margin: -20px 0;
  h3 {
    color: var(--textTitle);
    margin: 0px;
    font-size: 27px;
    line-height: 32px;
  }
  h4 {
    color: var(--textTitle);
    margin: 0;
    font-size: 17px;
  }
  a {
    color: #0a0a0a;
  }
  .postDate {
    color: var(--textTitle);
  }
  .article-engagement-count {
    font-family: 'HelveticaNeue-CondensedBold', 'HelveticaNeueBoldCondensed',
      'HelveticaNeue-Bold-Condensed', 'Helvetica Neue Bold Condensed',
      'HelveticaNeueBold', 'HelveticaNeue-Bold', 'Helvetica Neue Bold',
      'HelveticaNeue', 'Helvetica Neue', 'TeXGyreHerosCnBold', 'Helvetica',
      'Tahoma', 'Geneva', 'Arial Narrow', 'Arial', sans-serif;
    display: inline-block;
    margin-right: 20px;
    margin-top: 10px;
    color: var(--textTitle);
    img {
      height: 20px;
      min-width: 26px;
      vertical-align: -5px;
      margin-right: 7px;
    }
    .engagement-count-number {
      color: var(--textTitle);
      font-size: 15px;
      font-weight: 400;
    }
  }
`

const BlogCard = ({ post }) => (
  <Card padding={30}>
    <BlogCardStyle>
      <Link to={post.slug}>
        <div className="content">
          <h3>{post.title}</h3>
        </div>
      </Link>
      <h4>
        <Link className="postDate" to="/">
          {post.readable_publish_date}
        </Link>
      </h4>
      <div className="article-engagement-count reactions-count">
        <Link to={post.slug}>
          <img src="/assets/reactions-stack.svg" alt="Reactions" />
          <span
            id={`engagement-count-number-${post.id}`}
            className="engagement-count-number"
          >
            {post.positive_reactions_count}
          </span>
        </Link>
      </div>
      {post.comments_count ? (
        <div className="article-engagement-count comments-count">
          <Link to={post.slug}>
            <img src="/assets/comments-bubble.svg" alt="chat" />
            <span className="engagement-count-number">
              {post.comments_count}
            </span>
          </Link>
        </div>
      ) : (
        ''
      )}
    </BlogCardStyle>
  </Card>
)

export default BlogCard
