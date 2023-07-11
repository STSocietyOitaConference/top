import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import {
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from "@mui/material";

import { format, parse } from "date-fns";
import { Box } from "@mui/system";

function formatDate(inputDate: any) {
  const formatday = format(
    parse(inputDate, "yyyyMMdd", new Date()),
    "yyyy年.MM.dd"
  );
  return formatday;
}
const informations = [
  [formatDate(20230710), "参加登録の案内が公開されました。"],
  [formatDate(20230701), "SNSを開設しました。"],
  [formatDate(20230619), "演題募集要項が公開されました。"],
  [formatDate(20230601), "ホームページを公開いたしました。"],
];
function WhatNew() {
  const { ref } = useInView({
    // オプション
    rootMargin: "-200px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  const myStyleList = {
    MuiCssBaseline: {
      styleOverrides: `
      ::-webkit-scrollbar{
          width: 15px;
      },
      ::-webkit-scrollbar-thumb {
          background-color: #276976;
          border-radius: 10px;
      }
      `,
    },
  };
  return (
    <Box className="WhatNew" ref={ref}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={20}
        className="animate__animated animate__fadeInUp animate__delay-3s"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" mb={3}>
            お知らせ
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component={"div"} id="content-wrap" minWidth={"35vw"}>
            <Box sx={{ height: "25vh", overflowY: "scroll", myStyleList }}>
              {informations.map((item: any, _index) => {
                return (
                  <ListItem disablePadding key={_index} sx={myStyleList}>
                    <ListItemButton
                      sx={{
                        textAlign: "left",
                        borderBottom: 0.5,
                        borderColor: "#e6e6e6",
                      }}
                      disableRipple
                    >
                      <Grid item container flexDirection={"column"}>
                        <Grid item>
                          <ListItemText
                            primary={item[0]}
                            primaryTypographyProps={{
                              color: "secondary",
                            }}
                          />
                        </Grid>
                        <Grid>
                          <ListItemText
                            primary={item[1]}
                            primaryTypographyProps={{
                              color: "secondary",
                            }}
                          />
                        </Grid>
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhatNew;
