import React from 'react';
import classes from "./Confirm.module.css"

interface ConfirmWindowProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  removePost: () => void
}

const ConfirmWindow: React.FC<ConfirmWindowProps> = ({ setVisible, removePost }) => {
  return (
    <div>
      <h1 className={classes.confirmTitle}>Вы точно хотите удалить пост?</h1>
      <div className={classes.btnWrapper}>
        <button className={classes.cancelBtn} onClick={() => setVisible(false)}>Отмена</button>
        <button className={classes.confirmBtn} onClick={() => removePost()}>Удалить</button>
      </div>
    </div>

  );
};

export default ConfirmWindow;
