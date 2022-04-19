import React from 'react';
import classes from './Modal.module.css'

interface Props {
  children: React.ReactNode,
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<Props> = ({ children, visible }) => {
  //default style for modal
  const rootClasses = [classes.modal]
  //check if modal needs to be shown
  if (visible) {
    rootClasses.push(classes.active)
  }

  return (
    // concat the classes together
    <div className={rootClasses.join(' ')}>
      <div className={classes.modalContent}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
