import React from "react";
import { ListItemText, Link, Typography, Button, Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { Box } from "@mui/system";

function Program() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box
      component="div"
      id="item_4"
      className="AbstractRegistration"
      style={{ height: "40vh" }}
      ref={ref}
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
          <Grid item mb={1}>
            <ListItemText
              primary="プログラム"
              primaryTypographyProps={{
                variant: "h4",
              }}
              secondary="大会の概要およびプログラムを下記からダウンロードできます。"
              secondaryTypographyProps={{
                variant: "h6",
                color: "secondary",
              }}
            />
          </Grid>
          <Grid
            item
            mb={8}
            container
            direction={"column"}
            alignItems="canter" //左寄せよせの場合はflex-start
          >
            <Typography variant="h6" color="secondary">
              演題登録期間：2023/2/10 ～2023/3/10
            </Typography>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item mr={"5vw"}>
                <Button variant="contained" size="large">
                  <Link href="src\dawnload\img.png" download="img.png">
                    <Typography style={{ color: "white" }}>
                      ダウンロード
                    </Typography>
                  </Link>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" size="large">
                  <Link href="src\dawnload\img.png" download="img.png">
                    <Typography style={{ color: "white" }}>
                      登録フォーム
                    </Typography>
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Program;
