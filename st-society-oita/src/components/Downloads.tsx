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
  // ["スケジュール", "スケジュールは1部変更になる可能性があります"],
  ["演題採択結果", "演題結果の一覧をダウンロードできます。"],
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
                              href="https://drive.google.com/uc?export=download&id=1WL-WKhNN52Md2UJkUhCNmRK_nIguZJun"
                              download="演題採択結果.pdf"
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
