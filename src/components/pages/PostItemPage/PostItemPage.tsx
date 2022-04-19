import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import classes from "./PostItemPage.module.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePostAction, removePostAction } from '../../../store/action-creators/Post';
import { useTypedSelector } from '../../../hooks/reduxHooks';
import Confirm from '../../UI/ConfirmWindow/ConfirmWindow';
import Modal from '../../UI/Modal/Modal';
import { Post } from '../../../model/Post';

const PostItemPage: React.FC = () => {

  const { posts } = useTypedSelector(state => state.post)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { id } = useParams() as { id: string };
  const postById = getPostById(id)

  const [post, setPost] = useState<Post>(postById);
  const [modal, setModal] = useState<boolean>(false);

  // get post with certain id
  function getPostById(id: string): Post {
    return posts.find((post) => post.id === id) || { id: "0", title: "not found", content: "not found" }
  }
  // change title with input
  function changeTitleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPost({ ...post, title: e.target.value })
  }
  // change content with textarea
  function changeContentHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setPost({ ...post, content: e.target.value })
  }
  //delete post from data
  function removePost() {
    dispatch(removePostAction(post))
    navigate(`/posts`)
    setModal(false)
  }
  //update post with new data
  function updatePostHandler() {
    dispatch(updatePostAction(post))
    navigate(`/posts`)
  }

  return (
    <div className={classes.postItemPage}>
      {/* modal window with confirmation window inside */}
      <Modal visible={modal} setVisible={setModal}><Confirm setVisible={setModal} removePost={removePost} /></Modal>

      <button onClick={() => navigate(`/posts`)} className={classes.backBtn}>Назад</button>

      <h1 className={classes.title}>Запись {postById.title}</h1>
      <input
        className={classes.titleInput}
        type="text"
        placeholder='title'
        value={post.title}
        onChange={(e) => changeTitleHandler(e)}
      />
      <textarea
        className={classes.contentTextarea}
        placeholder='content'
        value={post.content}
        onChange={(e) => changeContentHandler(e)}
      />

      <div className={classes.controlBtns}>
        <button onClick={() => setModal(true)} className={classes.deleteBtn}>Удалить</button>
        <button onClick={updatePostHandler} className={classes.saveBtn}>Сохранить</button>
      </div>
    </div>
  );
};

export default PostItemPage;
