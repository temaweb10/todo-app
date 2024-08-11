import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./reducers/TodoSlice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});
const store = configureStore({ reducer: rootReducer });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
