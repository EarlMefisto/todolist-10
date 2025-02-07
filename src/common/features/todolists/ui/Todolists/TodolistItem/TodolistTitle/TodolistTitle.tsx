import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { EditableSpan } from "@/common/components/EditableSpan/EditableSpan";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todolist } from "@/app/App";
import styles from "./TodolistTitle.module.css";
import {
  changeTodolistTitleAC,
  deleteTodolistAC,
} from "@/features/todolists/model/todolists-reducer";

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
    <div className={styles.container}>
      <h3>
        <EditableSpan value={title} onChange={changeTodolistTitle} />
      </h3>
      <IconButton onClick={deleteTodolist}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
