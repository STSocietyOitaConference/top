import React from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Link,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "animate.css";

//クリップボードにコピー関数
const copyToClipboard = async () => {
  await global.navigator.clipboard.writeText("2024.9510.oita@gmail.com");
};

function Inquiry() {
  return (
    <Box id="item_10" className="Inquiry" mb={10}>
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
          <Typography
            variant="h6"
            color="secondary"
            onClick={() => copyToClipboard()}
          >
            2024.9510.oita@gmail.com
            <Tooltip title="クリックしてコピー" placement="top" arrow>
              <IconButton
                color="primary"
                size="small"
                onClick={() => copyToClipboard()}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
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
    </Box>
  );
}

export default Inquiry;
