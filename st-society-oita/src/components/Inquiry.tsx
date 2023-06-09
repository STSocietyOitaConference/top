import React from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Link,
  ListItemText,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import "animate.css";

function Inquiry() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });

  return (
    <Box id="item_4" className="Inquiry" mb={10} ref={ref}>
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
              primary="お問い合わせ"
              primaryTypographyProps={{
                variant: "h4",
              }}
              secondary="お手数ですが以下のメールアドレスからお送りください"
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
              2024.9510.oita@gmail.com
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large">
              <Link
                href="mailto:2024.9510.oita@gmail.com?subject=大会についての問い合わせ"
                underline="none"
              >
                <Typography style={{ color: "white" }}>
                  お問い合わせを送る
                </Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Inquiry;
