import { Post } from "../../model/Post";
import { PostActionTypes } from "../reducers/postReducer/types";

export const addNewPostAction = (payload: Post) => {
  return { type: PostActionTypes.ADD_POST, payload };
};

export const removePostAction = (payload: Post) => {
  return { type: PostActionTypes.REMOVE_POST, payload };
};

export const updatePostAction = (payload: Post) => {
  return { type: PostActionTypes.UPDATE_POST, payload };
};
