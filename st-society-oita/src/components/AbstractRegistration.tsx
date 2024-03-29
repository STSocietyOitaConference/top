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

function AbstractRegistration() {
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
            primary="演題登録"
            primaryTypographyProps={{
              variant: "h4",
            }}
            secondary="演題募集要項がダウンロードできます。"
            secondaryTypographyProps={{
              color: "secondary",
              variant: "h6",
            }}
          />
        </Grid>
        <Grid
          item
          mb={"4vh"}
          container
          direction={"column"}
          alignItems="center" //左寄せよせの場合はflex-start
        >
          <Box>
            <Typography variant="h6" color="secondary">
              <s>演題登録期間：2023年6月１日(木)～10月31日(木)まで</s>
            </Typography>
            <Typography variant="h6" color="primary" textAlign={"start"}>
              演題登録は終了致しました。ご登録ありがとうございました。
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Button variant="contained" size="large">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1iVKZytHb8DqxW73Yq-FzH_gP4mdnN4b3"
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

export default AbstractRegistration;
