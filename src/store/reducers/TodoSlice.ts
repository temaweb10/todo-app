import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITodo from "../../model/ITodo";
import ITodoSlice, { FilterActions } from "../../model/ITodoSlice";
const initialState: ITodoSlice = {
  todos: [],
  filter: FilterActions.ALL,
  searchTerm: null,
};

const updateLocalStorage = (todos: ITodo[]) => {
  window.localStorage.setItem("todos", JSON.stringify(todos));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos = [...state.todos, action.payload];
      updateLocalStorage(state.todos);
    },
    updateSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    changeFilter(state, action: PayloadAction<Pick<ITodoSlice, "filter">>) {
      state.filter = action.payload.filter;
    },
    markAllCompleted(state) {
      const markedTodos = state.todos.map((todo) => ({
        ...todo,
        completed: true,
      }));
      state.todos = markedTodos;
      updateLocalStorage(markedTodos);
    },
    markCompleted(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );
    },
    markIncompleted(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: false } : todo
      );
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    uploadTodosFromLocalStorage(state) {
      state.todos =
        window.localStorage.getItem("todos") !== null
          ? // @ts-ignore
            [...JSON.parse(window.localStorage.getItem("todos"))]
          : [];
    },
  },
});

export const {
  addTodo,
  uploadTodosFromLocalStorage,
  updateSearchTerm,
  changeFilter,
  markAllCompleted,
  markCompleted,
  markIncompleted,
  removeTodo,
} = todoSlice.actions;
