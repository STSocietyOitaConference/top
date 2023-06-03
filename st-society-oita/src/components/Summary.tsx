import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

function Summary() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box id="item_3" className="Summary" ref={ref}>
      {inView && (
        <Grid
          container
          className="animate__animated animate__fadeInUp"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          mb={6}
        >
          <Grid item mb={3}>
            <Typography variant="h4" mb={3}>
              概要
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            alignItems="flex-start"
            md={8}
          >
            <Typography color="secondary">後日記載</Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Summary;
