import { Post } from "../../../model/Post";
import { PostState, ActionState, PostActionTypes } from "./types";

const initialState: PostState = {
  posts: [
    { id: "1", title: "title1", content: "content1" },
    { id: "2", title: "title2", content: "content2" },
    { id: "3", title: "title3", content: "content3" },
    { id: "4", title: "title4", content: "content4" },
    { id: "5", title: "title5", content: "content5" },
    { id: "6", title: "title6", content: "content6" },
  ],
};

export const postReducer = (
  state = initialState,
  action: ActionState
): PostState => {
  switch (action.type) {
    case PostActionTypes.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case PostActionTypes.REMOVE_POST:
      return {
        ...state,
        posts: [...state.posts].filter(
          (post: Post) => post.id !== action.payload.id
        ),
      };
    case PostActionTypes.UPDATE_POST:
      return {
        ...state,
        posts: [...state.posts].map((post: Post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          } else {
            return post;
          }
        }),
      };
    default:
      return state;
  }
};
