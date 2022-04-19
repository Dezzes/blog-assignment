import React, { useState } from 'react';
import * as _ from "lodash";
import { useDispatch } from 'react-redux';
import { addNewPostAction } from '../../store/action-creators/Post';
import classes from "./PostForm.module.css"
import { Post } from '../../model/Post';

interface PostFormProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PostForm: React.FC<PostFormProps> = ({ setVisible }) => {

  const dispatch = useDispatch()

  // state for a new post
  const [post, setPost] = useState<Post>({
    id: "",
    content: "",
    title: ""
  });

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // check if the user filled form inputs
    if (post.content === "" || post.title === "") return
    const newPost = {
      ...post,
      id: _.uniqueId("100"),
    }
    // dispatch a new post
    dispatch(addNewPostAction(newPost))
    //set default post values
    setPost({
      id: "",
      content: "",
      title: ""
    })
    setVisible(false) // close modal window
  }
  // close modal window
  const cancelBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setVisible(false)
  }

  return (
    <form>
      {/* input for creating the title */}
      <input
        value={post.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.target.value })}
        className={classes.inputTitle} type="text" placeholder='title'
      />
      {/* text area for creating the content */}
      <textarea
        value={post.content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPost({ ...post, content: e.target.value })}
        className={classes.inputContent} placeholder='content'
      />
      <div className={classes.formBtns}>
        <button
          className={classes.formBtn}
          onClick={cancelBtnHandler}
        >
          Отмена
        </button>
        <button
          className={classes.formBtn}
          onClick={addNewPost}
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};

export default PostForm;
