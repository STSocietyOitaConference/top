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
    <Box id="item_9" className="Inquiry" style={{ height: "50vh" }} ref={ref}>
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
              ***@gmail.com
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large">
              <Link href="src\dawnload\img.png" download="img.png">
                <Typography style={{ color: "white" }}>ダウンロード</Typography>
              </Link>
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Inquiry;
