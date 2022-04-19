import React, { useState } from 'react';
import PostForm from '../../PostForm/PostForm';
import PostList from '../../PostList/PostList';
import Modal from '../../UI/Modal/Modal';
import { useTypedSelector } from '../../../hooks/reduxHooks';
import classes from "./Posts.module.css"

const Posts = () => {

  const { posts } = useTypedSelector(state => state.post)
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={classes.postsWrapper}>
      <div className={classes.postContent}>
        <h1 className={classes.title}>Блог</h1>
        <Modal visible={modal} setVisible={setModal}><PostForm setVisible={setModal} /></Modal>
        <PostList posts={posts} />
      </div>
      <footer className={classes.footer}>
        <button
          className={classes.createPostBtn}
          onClick={() => setModal(true)}
        >
          + Добавить
        </button>
      </footer>
    </div>
  );
};

export default Posts;
