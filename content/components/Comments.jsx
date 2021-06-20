import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

const Comments = ({ post }) => {
  let disqusConfig = {
    url: `https://kolharsam.dev/${window.location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </>
  )
}

export default Comments;
