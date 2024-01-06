import React from "react";
import { Typography, CardMedia, Grid, Link, Box } from "@mui/material";
import Banner1 from "../assets/advertisement/banner_1.jpg";
import Banner2 from "../assets/advertisement/banner_2.jpg";
import Banner3 from "../assets/advertisement/banner_3.jpg";
import "animate.css";
function Advertisement() {
  const adList = [
    {
      name: "玖珠郡医師会立老人保健施設 はね",
      image: Banner1,
      url: "https://hane.in/",
    },
    {
      name: "ヘルメット潜水株式会社",
      image: Banner2,
      url: "https://www.cloz.co.jp/",
    },
    {
      name: "フードケア",
      image: Banner3,
      url: "https://www.food-care.co.jp/",
    },
  ];
  return (
    <Box className="Advertisement">
      <Grid
        id="item_10"
        container
        flexDirection={"column"}
        alignItems="center"
        className="animate__animated animate__fadeInUp"
        mb={10}
      >
        <Grid item>
          <Typography variant="h4" mb={3}>
            広告
          </Typography>
        </Grid>
        <Grid item container spacing={{ xs: `30`, md: `50` }}>
          {adList.map((_item, _index) => (
            <Grid item key={_index} xs={6} md={4}>
              <Link href={_item.url} target="_blank">
                <CardMedia
                  component="img"
                  image={_item.image}
                  title={_item.name}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Advertisement;
