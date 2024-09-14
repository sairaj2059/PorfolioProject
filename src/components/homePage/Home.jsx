import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  DEFAULT_ACTIVE_PAGE,
  DEFAULT_DRAWER_FLAG,
  DEFAULT_SIDE_MENU,
  IconTileMap,
  SECOND_SIDE_MENU,
} from "../../Utils/Constants";
import { Skeleton } from "@mui/material";
import "./homepage.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Home() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = React.useState(DEFAULT_DRAWER_FLAG);
  const [ActivePage, setActivePage] = React.useState(DEFAULT_ACTIVE_PAGE);
  const [dataStatus, setDataStatus] = React.useState(false);
  const [activeSideMenu, setactiveSideMenu] = React.useState(0);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const activeBtnChange = (index) => {
    setDataStatus(true);
    setActivePage(DEFAULT_SIDE_MENU[index].title);
    setactiveSideMenu(index);
  };
  const SecondBtnChange = (index) => {
    setDataStatus(true);
    setActivePage(SECOND_SIDE_MENU[index].title);
    setactiveSideMenu(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={drawerOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(drawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {IconTileMap[ActivePage]} {ActivePage}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={drawerOpen}>
        <DrawerHeader>
          <h1 style={{ marginRight: "auto", marginLeft: "2%" }}>Portfolio</h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DEFAULT_SIDE_MENU.map((data, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              className={index === activeSideMenu ? "activeBtn" : ""}
              onClick={() => activeBtnChange(index)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: drawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  primary={data.title}
                  sx={{ opacity: drawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {SECOND_SIDE_MENU.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              className={index === activeSideMenu ? "activeBtn" : ""}
              onClick={() => SecondBtnChange(index)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: drawerOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.title}
                  sx={{ opacity: drawerOpen ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {dataStatus ? (
          <div>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>

            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a. Consequat mauris nunc congue
              nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam. Pulvinar elementum integer enim neque
              volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed
              viverra tellus. Purus sit amet volutpat consequat mauris.
              Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
              risus sed vulputate odio. Morbi tincidunt ornare massa eget
              egestas purus viverra accumsan in. In hendrerit gravida rutrum
              quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
              tristique sollicitudin nibh sit. Ornare aenean euismod elementum
              nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel
              facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis
              orci a.
            </Typography>
          </div>
        ) : (
          <div style={{ padding: "1%" }}>
            <Skeleton
              sx={{ mb: 1, width: "98%" }}
              variant="rectangular"
              height={80}
            />
            <Skeleton
              sx={{ mb: 1, width: "90%" }}
              variant="rectangular"
              height={100}
            />
            <Skeleton
              sx={{ mb: 1, width: "100%" }}
              variant="rectangular"
              height={210}
            />
          </div>
        )}
      </Box>
    </Box>
  );
}
