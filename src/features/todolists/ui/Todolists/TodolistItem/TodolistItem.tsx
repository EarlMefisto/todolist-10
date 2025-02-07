import type { Todolist } from "@/app/App";
import { CreateItemForm } from "@/common/components/CreateItemForm/CreateItemForm";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { createTaskAC } from "../../../model/tasks-reducer";
import { FilterButtons } from "./FilterButtons/FilterButtons";
import { TodolistTitle } from "./TodolistTitle/TodolistTitle";

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
