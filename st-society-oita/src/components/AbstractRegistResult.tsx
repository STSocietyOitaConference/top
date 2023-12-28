import React from "react";
import { Typography, ListItemText, Grid, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import AbstRegistResult_0001 from "../assets/abstResult/abstResult_page-0001.jpg";
import AbstRegistResult_0002 from "../assets/abstResult/abstResult_page-0002.jpg";
import "animate.css";
import ImageDialog from "../dialog/ImageDialog";
export interface bookParam {
  id: number;
  image: string;
}
const bookList = [
  {
    id: 1,
    image: AbstRegistResult_0001,
  },
  {
    id: 2,
    image: AbstRegistResult_0002,
  },
];
function AbstractRegistResult() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div id="item_6" className="AbstractRegistResult" ref={ref}>
      {inView && (
        <Grid
          container
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          mb={20}
          className="animate__animated animate__fadeInUp"
        >
          <Grid item mb={"2vh"}>
            <ListItemText
              primary="演題登録採択結果"
              primaryTypographyProps={{
                variant: "h4",
              }}
            />
          </Grid>
          <Grid item>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                mx="auto"
              >
                {bookList.map((item, index) => (
                  <Grid item key={index} xs={10} md={6}>
                    <ImageDialog {...item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default AbstractRegistResult;
