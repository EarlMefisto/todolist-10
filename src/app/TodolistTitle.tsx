import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { EditableSpan } from "@/common/components/EditableSpan/EditableSpan";
import {
  deleteTodolistAC,
  changeTodolistTitleAC,
} from "@/model/todolists-reducer";
import { IconButton } from "@mui/material";
import { Todolist } from "./App";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  todolist: Todolist;
};

export const TodolistTitle = ({ todolist }: Props) => {
  const { id, title } = todolist;
  const dispatch = useAppDispatch();
  const deleteTodolist = () => {
    dispatch(deleteTodolistAC({ id: todolist.id }));
  };

  const changeTodolistTitle = (title: string) => {
    dispatch(changeTodolistTitleAC({ id, title }));
  };
  return (
    <div className={"container"}>
      <h3>
        <EditableSpan value={title} onChange={changeTodolistTitle} />
      </h3>
      <IconButton onClick={deleteTodolist}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
