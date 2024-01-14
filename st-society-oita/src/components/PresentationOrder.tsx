import React from "react";
import {
  Typography,
  ListItemText,
  Button,
  Link,
  Grid,
  Box,
} from "@mui/material";
import "animate.css";

function PresentationOrder() {
  return (
    <div
      id="item_5"
      className="AbstractRegistration"
      style={{ maxHeight: "40vh" }}
    >
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
            primary="発表順番"
            primaryTypographyProps={{
              variant: "h4",
            }}
            secondary="発表順番がダウンロードできます。"
            secondaryTypographyProps={{
              color: "secondary",
              variant: "h6",
            }}
          />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Button variant="contained" size="large">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1Qqsa41UBNpBEx2gCsnVGCwt3vxa2WkfO"
                  download="演題募集要項.pdf"
                  underline={"none"}
                >
                  <Typography style={{ color: "white" }}>
                    ダウンロード
                  </Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PresentationOrder;
