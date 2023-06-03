import React from "react";
import { Typography, ListItemText, Button, Link, Grid } from "@mui/material";
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
      id="item_2"
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
          mb={12}
          className="animate__animated animate__fadeInUp"
        >
          <Grid item mb={"4vh"}>
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
            mb={"8vh"}
            container
            direction={"column"}
            alignItems="canter" //左寄せよせの場合はflex-start
          >
            <Typography variant="h6" color="secondary">
              演題登録期間：2023年　6 月１日(木)～ 8月 31 日(木)まて
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button variant="contained" size="large">
                  <Link
                    href="https://drive.google.com/uc?export=download&id=1z1rzUYR1sXOgIpXwB4NZmV0sfuQpUITJ"
                    download="演題募集要項.pdf"
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
      )}
    </div>
  );
}

export default AbstractRegistration;
