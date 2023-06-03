import { Grid, ListItemText, CardMedia } from "@mui/material";
import PosterImage from "../assets/poster/poster.jpg";
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
        <Grid className="animate__animated animate__fadeIn animate__delay-1s">
          <CardMedia
            component="img"
            image={PosterImage}
            title={"学会ポスター"}
            sx={{ objectFit: "contain" }}
            height={"965"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Title;
