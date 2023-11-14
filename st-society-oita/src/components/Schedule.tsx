import React from "react";
import ImageDialog from "../dialog/ImageDialog";
import { Box, Grid, ListItemText } from "@mui/material";
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
          textAlign="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          className="animate__animated animate__fadeInUp"
        >
          <Grid item>
            <ListItemText
              primary="スケジュール"
              primaryTypographyProps={{
                variant: "h4",
              }}
              secondary="スケジュールは1部変更になる可能性があります"
              secondaryTypographyProps={{
                color: "secondary",
                variant: "h6",
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
    </Box>
  );
}

export default Schedule;
