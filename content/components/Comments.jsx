import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

// NOTE: make sure to check the identifier before each post 

const Comments = ({ post }) => {
  let disqusConfig = {
    url: `https://kolharsam.dev/${post.identifier}`,
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
