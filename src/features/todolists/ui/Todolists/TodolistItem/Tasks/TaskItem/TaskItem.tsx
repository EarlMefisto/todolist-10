import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { EditableSpan } from "@/common/components/EditableSpan/EditableSpan";
import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  deleteTaskAC,
} from "@/features/todolists/model/tasks-reducer";
import { ListItem, Checkbox, IconButton } from "@mui/material";
import { ChangeEvent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task, Todolist } from "@/app/App";
import { getListItemSx } from "./TaskItem.styles";

type Props = {
  task: Task;
  todolist: Todolist;
};

export const TaskItem = ({ task, todolist }: Props) => {
  const { id } = todolist;

  const dispatch = useAppDispatch();

  const deleteTask = () => {
    dispatch(deleteTaskAC({ todolistId: id, taskId: task.id }));
  };

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const newStatusValue = e.currentTarget.checked;
    dispatch(
      changeTaskStatusAC({
        todolistId: id,
        taskId: task.id,
        isDone: newStatusValue,
      })
    );
  };

  const changeTaskTitle = (title: string) => {
    dispatch(changeTaskTitleAC({ todolistId: id, taskId: task.id, title }));
  };

  return (
    <ListItem sx={getListItemSx(task.isDone)}>
      <div>
        <Checkbox checked={task.isDone} onChange={changeTaskStatus} />
        <EditableSpan value={task.title} onChange={changeTaskTitle} />
      </div>
      <IconButton onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
