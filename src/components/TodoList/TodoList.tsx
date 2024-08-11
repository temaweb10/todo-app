import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { FilterActions } from "../../model/ITodoSlice";
import Todo from "../Todo/Todo";
import "./TodoList.css";
const TodoList = () => {
  const todos = useAppSelector((state) => {
    const searchTerm =
      state.todo.searchTerm === null ? "" : state.todo.searchTerm;
    const filter = state.todo.filter;

    return state.todo.todos.filter((todo) => {
      const matchesFilter =
        (filter === FilterActions.COMPLETED && todo.completed) ||
        (filter === FilterActions.INCOMPLETED && !todo.completed) ||
        filter === FilterActions.ALL;

      const matchesSearch = todo.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  });

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          name={todo.name}
          completed={todo.completed}
          date={todo.date}
          index={index}
          key={todo.id}
          id={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
