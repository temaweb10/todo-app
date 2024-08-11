import ITodo from "./ITodo";
export enum FilterActions {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  INCOMPLETED = "INCOMPLETED",
}

export default interface ITodoSlice {
  todos: ITodo[];
  filter:
    | FilterActions.ALL
    | FilterActions.COMPLETED
    | FilterActions.INCOMPLETED;
  searchTerm: string | null;
}
