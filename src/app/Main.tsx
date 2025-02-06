import { useAppDispatch } from "@/common/hooks/useAppDispatch";

import { CreateItemForm } from "@/common/components/CreateItemForm/CreateItemForm";

import { createTodolistAC } from "@/model/todolists-reducer";

import { Container, Grid } from "@mui/material";

export const Main = () => {
  const dispatch = useAppDispatch();

  const createTodolist = (title: string) => {
    dispatch(createTodolistAC(title));
  };

  return (
    <Container maxWidth={"lg"}>
      <Grid container sx={{ mb: "30px" }}>
        <CreateItemForm onCreateItem={createTodolist} />
      </Grid>
      <Grid container spacing={4}></Grid>
    </Container>
  );
};
