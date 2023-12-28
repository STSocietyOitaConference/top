import React from "react";
import {
  Typography,
  ListItemText,
  Button,
  Link,
  Grid,
  Box,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import "animate.css";

function AbstractRegistration() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div
      id="item_8"
      className="AbstractRegistration"
      style={{ maxHeight: "40vh" }}
      ref={ref}
    >
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
              primary="感染症対策について"
              primaryTypographyProps={{
                variant: "h4",
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
              <Grid container flexDirection={"row"}>
                <Grid item>
                  <Box id="bullet">
                    <Grid container textAlign="start">
                      <Grid item xs={2} sm={4} md={1}>
                        <Typography
                          variant="h6"
                          color="secondary"
                          textAlign={"start"}
                        >
                          （1）
                        </Typography>
                      </Grid>
                      <Grid item xs={2} sm={4} md={11}>
                        <Typography
                          variant="h6"
                          color="secondary"
                          textAlign={"start"}
                        >
                          発熱（37.5度以上）、体調不良・倦怠感のある方は参加をご遠慮ください。
                          ※登壇予定がある場合には学会事務局メールまでご連絡ください。
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid container textAlign="start">
                  <Grid item xs={2} sm={4} md={1}>
                    <Typography
                      variant="h6"
                      color="secondary"
                      textAlign={"start"}
                    >
                      （2）
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={4} md={11}>
                    <Typography
                      variant="h6"
                      color="secondary"
                      textAlign={"start"}
                    >
                      こまめな手洗い・消毒液による消毒をお願いいたします。{" "}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  variant="h6"
                  color="secondary"
                  textAlign={"start"}
                ></Typography>
                <Typography
                  variant="h6"
                  color="secondary"
                  textAlign={"start"}
                ></Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default AbstractRegistration;
