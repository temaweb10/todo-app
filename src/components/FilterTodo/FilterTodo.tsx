import React, { useRef, useState } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FilterActions } from "../../model/ITodoSlice";
import {
  changeFilter,
  markAllCompleted,
  updateSearchTerm,
} from "../../store/reducers/TodoSlice";
const FilterTodo = () => {
  const filter = useAppSelector((state) => state.todo.filter);
  const dispatch = useAppDispatch();
  const searchInputRef = useRef(null);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeFilter({ filter: e.target.value as FilterActions }));

  const handleUpdateSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateSearchTerm(e.target.value));

  return (
    <div className="form filter-block">
      <div className="form" style={{ display: "flex" }}>
        <select value={filter} onChange={handleChangeFilter}>
          <option value={FilterActions.ALL}>Все</option>
          <option value={FilterActions.COMPLETED}>Завершено</option>
          <option value={FilterActions.INCOMPLETED}>Не завершено</option>
        </select>

        <button
          style={{ marginLeft: 8 }}
          onClick={() => dispatch(markAllCompleted())}
          title="Пометить всё выполненным"
        >
          <IoCheckmarkDoneOutline />
        </button>
      </div>

      <input
        ref={searchInputRef}
        type="text"
        onChange={handleUpdateSearchTerm}
        placeholder="Поиск задач"
        className="input"
      />
    </div>
  );
};
export default FilterTodo;
