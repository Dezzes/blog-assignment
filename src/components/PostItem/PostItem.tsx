import React from 'react';
import { useNavigate } from "react-router-dom"
import { Post } from '../../model/Post';
import classes from "./PostItem.module.css"

interface PostItemProps {
  post: Post
}
// a single item
const PostItem: React.FC<PostItemProps> = ({ post }) => {

  const navigate = useNavigate();

  return (
    <div className={classes.postItem}>
      <h2 className={classes.postItemTitle}>{post.title}</h2>
      <div className={classes.postItemContent}>{post.content}</div>
      <button
        className={classes.postItemBtn}
        onClick={() => navigate(`/posts/${post.id}`)}
      >
        Перейти
      </button>
    </div>
  );
};

export default PostItem;
