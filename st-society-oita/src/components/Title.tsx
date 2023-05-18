import { Grid, ListItemText, CardMedia } from "@mui/material";
import PosterImage from "../assets/poster/sample2.jpg";
import { Box } from "@mui/system";

function Title() {
  return (
    <Box>
      <Grid
        id="item_0"
        className="Title"
        container
        textAlign="center"
        alignItems="center"
        flexDirection={"column"}
        mb={12}
      >
        <Grid item className="animate__animated animate__fadeIn">
          <ListItemText
            primary="大会タイトル"
            primaryTypographyProps={{
              variant: "h4",
              fontWeight: "bold",
              textAlign: "center",
            }}
            secondary="YYYY年MM月DD日〜DD日"
            secondaryTypographyProps={{
              variant: "h6",
              textAlign: "center",
              color: "secondary",
            }}
          />
        </Grid>
        <Grid
          item
          className="animate__animated animate__fadeIn animate__delay-1s"
          mb={6}
        >
          <ListItemText
            primary="メインタイトル"
            primaryTypographyProps={{
              variant: "h3",
              fontWeight: "bold",
              textAlign: "center",
            }}
            secondary="〜サブタイトル〜"
            secondaryTypographyProps={{
              variant: "h6",
              textAlign: "center",
              color: "secondary",
            }}
          />
        </Grid>
        <Grid className="animate__animated animate__fadeIn animate__delay-2s">
          <CardMedia
            component="img"
            image={PosterImage}
            title={"学会ポスター"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Title;
