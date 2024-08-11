import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addTodo } from "../../store/reducers/TodoSlice";
const CreateTodo = () => {
  const [todoName, setTodoName] = useState("");
  const dispatch = useAppDispatch();

  const handleCreateTodo = () =>
    dispatch(
      addTodo({
        name: todoName,
        completed: false,
        date: new Date().toLocaleString("ru-RU", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        id: Math.random().toString(16).slice(2),
      })
    );

  return (
    <div className="form create-todo-block">
      <input
        type="text"
        placeholder="Создать задачу"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCreateTodo();
          }
        }}
        className="input"
        style={{ width: "100%" }}
      />
      <button onClick={handleCreateTodo} style={{ marginLeft: 10 }}>
        +
      </button>
    </div>
  );
};

export default CreateTodo;
