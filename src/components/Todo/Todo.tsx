import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../../hooks/redux";
import ITodo from "../../model/ITodo";
import {
  markCompleted,
  markIncompleted,
  removeTodo,
} from "../../store/reducers/TodoSlice";
import "./Todo.css";
const Todo = ({ name, completed, date, index, id }: ITodo) => {
  const dispatch = useAppDispatch();

  return (
    <li className="todo">
      <div className="todo-content">
        <div>
          <span className="todo-index">{(index as number) + 1}. </span>
          <span className="todo-text">{completed ? <s>{name}</s> : name}</span>
        </div>

        <span className="todo-date">{date}</span>
      </div>
      <div className="todo-content__buttons">
        <button
          className="todo-button button-delete"
          onClick={() => dispatch(removeTodo(id))}
        >
          <AiOutlineDelete />
        </button>
        {completed ? (
          <button
            className="todo-button button-incomplete"
            onClick={() => dispatch(markIncompleted(id))}
          >
            <FaTimes />
          </button>
        ) : (
          <button
            className="todo-button button-complete"
            onClick={() => dispatch(markCompleted(id))}
          >
            <FaCheck />
          </button>
        )}
      </div>
    </li>
  );
};

export default Todo;
