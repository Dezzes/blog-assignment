import { Post } from "../../../model/Post";

export enum PostActionTypes {
  ADD_POST = "ADD_POST",
  REMOVE_POST = "REMOVE_POST",
  UPDATE_POST = "UPDATE_POST",
}

export interface PostState {
  posts: Post[];
}

interface AddPostAction {
  type: PostActionTypes.ADD_POST;
  payload: Post;
}

interface RemovePostAction {
  type: PostActionTypes.REMOVE_POST;
  payload: Post;
}

interface UpdatePostAction {
  type: PostActionTypes.UPDATE_POST;
  payload: Post;
}

export type ActionState = AddPostAction | RemovePostAction | UpdatePostAction;
