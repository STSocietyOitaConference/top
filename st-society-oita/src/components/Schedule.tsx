import React from "react";
import ImageDialog from "../dialog/ImageDialog";
import { Typography, Box, Grid } from "@mui/material";
import SchedulePdf from "../assets/schedule/timeSchedule.jpg";
import { useInView } from "react-intersection-observer";
import "animate.css";
export interface bookParam {
  id: number;
  image: string;
}
const bookList = [
  {
    id: 1,
    image: SchedulePdf,
  },
];
function Schedule() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box className="Schedule" id="item_5" ref={ref}>
      {inView && (
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          mb={6}
          className="animate__animated animate__fadeInUp"
        >
          <Grid item>
            <Typography variant="h4" style={{ textAlign: "center" }} mb={3}>
              スケジュール
            </Typography>
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
    </Box>
  );
}

export default Schedule;
