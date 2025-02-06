import type { Todolist } from "@/app/App";
import { CreateItemForm } from "../../../../../components/CreateItemForm/CreateItemForm";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { createTaskAC } from "../../../../../../model/tasks-reducer";
import { TodolistTitle } from "../../../../../../app/TodolistTitle";
import { FilterButtons } from "../../../../../../app/FilterButtons";

type Props = {
  todolist: Todolist;

  changeTaskStatus: (
    todolistId: string,
    taskId: string,
    isDone: boolean
  ) => void;
  changeTaskTitle: (todolistId: string, taskId: string, title: string) => void;
};

export const TodolistItem = ({ todolist }: Props) => {
  const dispatch = useAppDispatch();

  const createTask = (title: string) => {
    dispatch(createTaskAC({ todolistId: todolist.id, title }));
  };

  return (
    <div>
      <TodolistTitle todolist={todolist} />
      <CreateItemForm onCreateItem={createTask} />

      <FilterButtons todolist={todolist} />
    </div>
  );
};
