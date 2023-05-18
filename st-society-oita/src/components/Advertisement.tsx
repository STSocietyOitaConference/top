import React from "react";
import { Typography, CardMedia, Grid, Link, Box } from "@mui/material";
import SampleImage1 from "../assets/advertisement/sample1.jpg";
import SampleImage2 from "../assets/advertisement/banner_sample.png";
import { useInView } from "react-intersection-observer";
import "animate.css";
function Advertisement() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  const adList = [
    {
      name: "SampleImage",
      image: SampleImage2,
      url: "http://www.oita-st.com/",
    },
    {
      name: "SampleImage",
      image: SampleImage2,
      url: "http://www.oita-st.com/",
    },
    {
      name: "SampleImage",
      image: SampleImage2,
      url: "http://www.oita-st.com/",
    },
    {
      name: "SampleImage",
      image: SampleImage2,
      url: "http://www.oita-st.com/",
    },
    {
      name: "SampleImage",
      image: SampleImage2,
      url: "http://www.oita-st.com/",
    },
    {
      name: "SampleImage",
      image: SampleImage2,
      url: "http://www.oita-st.com/",
    },
  ];
  return (
    <Box className="Advertisement" ref={ref}>
      {/* {inView && ( */}
      <Grid
        id="item_10"
        container
        flexDirection={"column"}
        alignItems="center"
        className="animate__animated animate__fadeInUp"
      >
        <Grid item>
          <Typography variant="h4" mb={3}>
            広告
          </Typography>
        </Grid>
        <Grid item container spacing={{ xs: `30`, md: `50` }}>
          {adList.map((_item, _index) => (
            <Grid item key={_index} xs={6} md={4}>
              <Link href={_item.url}>
                <CardMedia
                  component="img"
                  image={_item.image}
                  title={"広告" + _index}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* )} */}
    </Box>
  );
}

export default Advertisement;
