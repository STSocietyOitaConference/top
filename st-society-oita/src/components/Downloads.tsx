import React from "react";

import {
  Typography,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Link,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useInView } from "react-intersection-observer";
import "animate.css";

const dowonloadInfo = [
  [
    "展示・広告掲載 申込用紙",
    "展示・広告掲載用の申込用紙がダウンロードできます。",
  ],
];
function Downloads() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box id="item_3" ref={ref} className="Downloads">
      <Grid
        className="animate__animated animate__fadeInUp"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={12}
      >
        <Grid item>
          {inView && (
            <Typography variant="h4" align="center" mb={3}>
              各種ダウンロード
            </Typography>
          )}
        </Grid>
        <Grid item>
          <Box component={"div"}>
            <Grid container mx="auto">
              {dowonloadInfo.map((item: any, _index) => {
                return (
                  <ListItem disablePadding key={_index}>
                    <ListItemButton
                      sx={{
                        borderBottom: 0.5,
                        borderColor: "#e6e6e6",
                      }}
                      disableRipple
                    >
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <Box component="div">
                            <ListItemText
                              primary={item[0]}
                              primaryTypographyProps={{
                                color: "secondary",
                              }}
                            />
                            <ListItemText
                              primary={item[1]}
                              primaryTypographyProps={{
                                color: "secondary",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item>
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                          >
                            <Link
                              href="https://drive.google.com/uc?export=download&id=1wnIt0CCwJ91WPr8hgpdqSZ2TrFR1MfpN"
                              download="展示・広告掲載 申込用紙.pdf"
                            >
                              <FileDownloadOutlinedIcon />
                            </Link>
                          </IconButton>
                        </Grid>
                      </Grid>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Downloads;
