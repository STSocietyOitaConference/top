import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import tubeStyle from "../css/Youtube.module.css";
import { Grid, Typography, Link } from "@mui/material";
import { useInView } from "react-intersection-observer";
import "animate.css";

function IntroVideo() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  const smallOpts: YouTubeProps["opts"] = {
    height: "195",
    width: "320",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };
  const largeOpts: YouTubeProps["opts"] = {
    height: "480",
    width: "854",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };
  const myStyleYoutubeSmall = {
    display: { xs: "block", sm: "none" },
  };
  const myStyleYoutubeLarge = {
    display: { xs: "none", sm: "block" },
  };
  return (
    <div className="IntroVideo" id="item_1" ref={ref}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb={6}
        className="animate__animated animate__fadeInUp"
      >
        <Grid item>
          {inView && (
            <Typography variant="h4" mb={3}>
              紹介ビデオ
            </Typography>
          )}
        </Grid>
        <Grid item sx={myStyleYoutubeSmall}>
          <YouTube videoId="lTRiuFIWV54" opts={smallOpts} />
        </Grid>
        <Grid item sx={myStyleYoutubeLarge}>
          <YouTube videoId="lTRiuFIWV54" opts={largeOpts} />
        </Grid>
      </Grid>
    </div>
  );
}

export default IntroVideo;
