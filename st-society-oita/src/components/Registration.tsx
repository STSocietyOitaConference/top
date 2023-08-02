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

function Registration() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <div
      id="item_4"
      className="Registration"
      ref={ref}
      style={{ height: "40vh" }}
    >
      {inView && (
        <Grid
          container
          flexDirection="column"
          textAlign="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          className="animate__animated animate__fadeInUp"
        >
          <Grid item mb={"4vh"}>
            <ListItemText
              primary="参加登録"
              primaryTypographyProps={{
                variant: "h4",
              }}
              secondary="案内のダウンロードと、大会の参加登録ができます。"
              secondaryTypographyProps={{
                color: "secondary",
                variant: "h6",
              }}
            />
          </Grid>
          <Grid
            item
            mb={"8vh"}
            container
            direction={"column"}
            alignItems="canter" //左寄せよせの場合はflex-start
          >
            <Typography variant="h6" color="secondary">
              演題登録期間：2023年7月1日(木)～12月28日(木)まで
            </Typography>
          </Grid>
          <Grid item>
            <Box component={"div"}>
              <Grid container>
                <Grid item>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ marginRight: "3vw" }}
                  >
                    <Link
                      href="https://drive.google.com/uc?export=download&id=1fC5YrSNjdrEN1kX6OfyVqDmUcdn5Uqyg"
                      download="演題募集要項.pdf"
                      underline={"none"}
                    >
                      <Typography style={{ color: "white" }}>
                        ダウンロード
                      </Typography>
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" size="large">
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeJNTv6bXjrYWkEv3F1oX6kq_XclmdbOGnLa5isXo8fwn_5DQ/viewform?pli=1"
                      underline={"none"}
                      target="_blank"
                    >
                      <Typography style={{ color: "white" }}>
                        　参加登録　
                      </Typography>
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Registration;
