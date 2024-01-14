import React from "react";
import ImageDialog from "../dialog/ImageDialog";
import { Box, Grid, ListItemText, Typography } from "@mui/material";
import SocialGathering from "../assets/socialGathering/socialGathering.jpg";
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
  return (
    <Box className="Schedule" id="item_7" mb={10}>
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
            primary="クローク"
            primaryTypographyProps={{
              variant: "h4",
            }}
            secondary=""
            secondaryTypographyProps={{ color: "secondary", variant: "h6" }}
          />
          <Box>
            <Typography variant="h6" color="secondary" textAlign={"start"}>
              日時：１月27日(土)9:15 〜 18:30
            </Typography>
            <Typography variant="h6" color="secondary" textAlign={"start"}>
              場所：J:COMホルトホール大分　３F(301号室)
            </Typography>
            <Typography variant="h6" color="secondary" textAlign={"start"}>
              ※クロークでお預かり出来るのは、お荷物のみです。上着のお預かりはできません。名
            </Typography>
            <Typography variant="h6" color="secondary" textAlign={"start"}>
              ※お荷物は18:30までには必ず受け取りに来てください。
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutTheSocialGathering;
