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
    "必要事項記載の上、FAXでお送りください。※期限：令和5年10月31日（木）",
  ],
];
function Downloads() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box id="item_5" ref={ref} className="Downloads anchor">
      <Grid
        className="animate__animated animate__fadeInUp"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={20}
      >
        <Grid item>
          {inView && (
            <Typography variant="h4" align="center" mb={3}>
              各種ダウンロード
            </Typography>
          )}
        </Grid>
        <Grid item>
          <Box id="contents" component={"div"}>
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
                    <Box id="content" component={"div"}>
                      <Grid container justifyContent="space-between">
                        <Grid item xs={10}>
                          <Box id="docInfo" component="div">
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
                        <Grid item xs={1}>
                          <IconButton
                            id="downloadButton"
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                            sx={{
                              marginTop: "20px",
                            }}
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
                    </Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Downloads;
