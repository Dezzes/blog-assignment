import { combineReducers } from "redux";
import { postReducer } from "./postReducer/post";

export const rootReducer = combineReducers({
  post: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>; // types for root reducer
