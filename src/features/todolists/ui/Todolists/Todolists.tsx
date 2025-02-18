import {
  changeTaskStatusAC,
  changeTaskTitleAC,
} from "@/features/todolists/model/tasks-reducer";
import { TodolistItem } from "@/features/todolists/ui/Todolists/TodolistItem/TodolistItem";
import { Grid2, Paper } from "@mui/material";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { selectTodolists } from "@/features/todolists/model/todolists-selectors";

export const Todolists = () => {
  const todolists = useAppSelector(selectTodolists);

  const dispatch = useAppDispatch();

  const changeTaskStatus = (
    todolistId: string,
    taskId: string,
    isDone: boolean
  ) => {
    dispatch(changeTaskStatusAC({ todolistId, taskId, isDone }));
  };

  const changeTaskTitle = (
    todolistId: string,
    taskId: string,
    title: string
  ) => {
    dispatch(changeTaskTitleAC({ todolistId, taskId, title }));
  };

  return (
    <>
      {todolists.map((todolist) => {
        return (
          <Grid2 key={todolist.id}>
            <Paper sx={{ p: "0 20px 20px 20px" }}>
              <TodolistItem
                todolist={todolist}
                changeTaskStatus={changeTaskStatus}
                changeTaskTitle={changeTaskTitle}
              />
            </Paper>
          </Grid2>
        );
      })}
    </>
  );
};
