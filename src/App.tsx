import React, { useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import FilterTodo from "./components/FilterTodo/FilterTodo";
import TodoList from "./components/TodoList/TodoList";
import { useAppDispatch } from "./hooks/redux";
import { uploadTodosFromLocalStorage } from "./store/reducers/TodoSlice";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(uploadTodosFromLocalStorage());
  }, []);
  return (
    <div className="App">
      <div className="todo-block">
        <CreateTodo />

        <FilterTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
