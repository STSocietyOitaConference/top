import React from "react";
import Title from "./components/Title";
import WhatNew from "./components/WhatNew";
import IntroVideo from "./components/IntroVideo";
import Greeting from "./components/Greeting";
import Summary from "./components/Summary";
import Program from "./components/Program";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Downloads from "./components/Downloads";
import AbstractRegistration from "./components/AbstractRegistration";
import Inquiry from "./components/Inquiry";
import Advertisement from "./components/Advertisement";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useInView } from "react-intersection-observer";

const drawerWidth = 240;
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function Main(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#fcfaea", height: "100%" }}>
      <Toolbar />
      <List>
        {[
          "TOP",
          "紹介VTR",
          "会長挨拶",
          "概要",
          "プログラム",
          "スケジュール",
          "参加登録",
          "演題登録",
          "各種ダウンロード",
          "問い合わせ",
          "広告",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={`#item_${index}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div style={{ backgroundColor: "#fcfaea" }}>
      <Box sx={{ display: "flex" }}>
        <AppBar
          style={{ backgroundColor: "#fcfaea" }}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Grid container sx={{ display: { sm: "none" } }} ml={1}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Box sx={{ width: { xs: `100%`, md: `60%` }, mx: `auto` }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              mx={"auto"}
            >
              <Grid item xs={2} sm={4} md={8}>
                <Title />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <WhatNew />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <IntroVideo />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Greeting />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Summary />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Program />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Schedule />
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Registration />
              </Grid>
              <Grid item>
                <AbstractRegistration />
              </Grid>
              <Grid item>
                <Downloads />
              </Grid>
              <Grid item mb={12}>
                <Inquiry />
              </Grid>
              <Grid item>
                <Advertisement />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Main;
