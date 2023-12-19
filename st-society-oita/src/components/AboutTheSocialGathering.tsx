import React from "react";
import ImageDialog from "../dialog/ImageDialog";
import { Box, Grid, ListItemText, Typography } from "@mui/material";
import SocialGathering from "../assets/socialGathering/socialGathering.jpg";
import { useInView } from "react-intersection-observer";
import "animate.css";
export interface bookParam {
  id: number;
  image: string;
}
const bookList = [
  {
    id: 1,
    image: SocialGathering,
  },
];
function AboutTheSocialGathering() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box className="Schedule" id="item_5" ref={ref} mb={10}>
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
              primary="懇親会について"
              primaryTypographyProps={{
                variant: "h4",
              }}
              secondary=""
              secondaryTypographyProps={{ color: "secondary", variant: "h6" }}
            />
            <Box>
              <Typography variant="h6" color="secondary" textAlign={"start"}>
                会場：ホテル日航オアシスタワー
              </Typography>
              <Typography variant="h6" color="secondary" textAlign={"start"}>
                日時：1 月 27 日(土)　 18:30~20:30
              </Typography>
              <Typography variant="h6" color="secondary" textAlign={"start"}>
                定員：80 名
              </Typography>
              <Typography variant="h6" color="secondary" textAlign={"start"}>
                費用：6000 円
              </Typography>
            </Box>
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

export default AboutTheSocialGathering;
