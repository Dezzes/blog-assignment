import React from 'react';
import { Post } from '../../model/Post';
import PostItem from '../PostItem/PostItem';
import classes from "./PostList.module.css"

interface PostListProps {
  posts: Post[]
}
// the list to iterate items
const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={classes.postList}>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div >
  );
};

export default PostList;
