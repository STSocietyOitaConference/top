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
  [formatDate(20230312), "今日は晴れです。"],
  [formatDate(20230311), "明日は台風です。非常時に備えましょう。"],
  [formatDate(20230310), "今日は曇りです。"],
  [formatDate(20230309), "今日の天気は雨です。傘をお持ちください。"],
  [formatDate(20231231), "今日の天気は晴れです"],
];
function WhatNew() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-200px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  const myStyleList = {
    width: { sm: 200, md: "30vw" },
  };
  return (
    <Box className="WhatNew" ref={ref}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={6}
        className="animate__animated animate__fadeInUp animate__delay-3s"
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" mb={3}>
            お知らせ
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhatNew;
