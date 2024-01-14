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
import "animate.css";
const dowonloadInfo = [
  [
    "参加登録申込書",
    "案内のダウンロードができます。",
    "https://drive.google.com/uc?export=download&id=1tJBljSHAUuKdiG10KvMSmYDb6a7oJ29h",
    "スケジュール.pdf",
  ],
  [
    "スケジュール",
    "変更になる可能性があります",
    "https://drive.google.com/uc?export=download&id=1PcVoOo3moH1dis7vsdhiIzAyrnT0f8Qo",
    "スケジュール.pdf",
  ],
  [
    "演題採択結果",
    "演題結果の一覧をダウンロードできます。",
    "https://drive.google.com/uc?export=download&id=1J0FvTOybfKQk3HyD9y4YA4OYEhnSly2Z",
    "演題採択結果.pdf",
  ],
];
function Downloads() {
  return (
    <Box id="item_9" className="Downloads anchor">
      <Grid
        className="animate__animated animate__fadeInUp"
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={20}
      >
        <Grid item>
          <Typography variant="h4" align="center" mb={3}>
            各種ダウンロード
          </Typography>
        </Grid>
        <Grid item>
          <Box id="contents" component={"div"}>
            <Grid container direction="column">
              {dowonloadInfo.map((item: any, _index: number) => {
                return (
                  <Grid item id="downloadItem" key={_index}>
                    <Box id="content">
                      <ListItem disablePadding>
                        <ListItemButton
                          sx={{
                            borderBottom: 0.5,
                            borderColor: "#e6e6e6",
                          }}
                          disableRipple
                        >
                          <Box id="content">
                            <Grid container>
                              <Grid item xs={10}>
                                <Box
                                  id="docInfo"
                                  sx={{
                                    width: { xs: "340px", md: "650px" },
                                  }}
                                >
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
                                  <Link href={item[2]} download={item[3]}>
                                    <FileDownloadOutlinedIcon />
                                  </Link>
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Box>
                        </ListItemButton>
                      </ListItem>
                    </Box>
                  </Grid>
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
