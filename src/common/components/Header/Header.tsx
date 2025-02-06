import { changeThemeModeAC } from "@/app/app-reducer";
import { selectThemeMode } from "@/app/app-selectors";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { getTheme } from "@/common/theme/theme";
import { NavButton } from "@/NavButton";
import { containerSx } from "@/TodolistItem.styles";
import { AppBar, Toolbar, Container, IconButton, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const themeMode = useAppSelector(selectThemeMode);

  const dispatch = useAppDispatch();

  const changeMode = () => {
    dispatch(
      changeThemeModeAC({ themeMode: themeMode == "light" ? "dark" : "light" })
    );
  };

  const theme = getTheme(themeMode);

  return (
    <AppBar position="static" sx={{ mb: "30px" }}>
      <Toolbar>
        <Container maxWidth={"lg"} sx={containerSx}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <div>
            <NavButton>Sign in</NavButton>
            <NavButton>Sign up</NavButton>
            <NavButton background={theme.palette.primary.dark}>Faq</NavButton>
            <Switch color={"default"} onChange={changeMode} />
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};