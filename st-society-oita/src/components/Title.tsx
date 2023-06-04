import { Grid, CardMedia } from "@mui/material";
import PosterImage from "../assets/poster/poster.jpg";
import { Box } from "@mui/system";

function Title() {
  return (
    <Box mb={12}>
      <Grid
        id="item_0"
        className="Title"
        container
        textAlign="center"
        alignItems="center"
        flexDirection={"column"}
      >
        <Grid className="animate__animated animate__fadeIn animate__delay-1s">
          <CardMedia
            component="img"
            image={PosterImage}
            title={"学会ポスター"}
            sx={{
              height: { xs: "62vh", md: "920px" },
              mt: { xs: 6, md: "0" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Title;
