import React from "react";
import { ListItemText, Grid, CardMedia, Typography } from "@mui/material";
import "animate.css";
import { Box } from "@mui/system";
import Performer1 from "../assets/program/hujita_ikuyo.png";
import Performer2 from "../assets/program/kariyasu.jpg";
import Performer3 from "../assets/program/ogata_yuko.png";

type Record = {
  textType: number;
  text: string;
};
type LectureContent = {
  performerImage: string;
  programInfo: Record[];
};
const Programs: LectureContent[] = [
  {
    performerImage: Performer1,
    programInfo: [
      { textType: 0, text: "大会講演" },
      { textType: 1, text: "わが国の言語聴覚療法の歴史を紡ぐ" },

      {
        textType: 3,
        text: "藤田　郁代（国際医療福祉大学大学院福祉学研究科 言語聴覚分野）",
      },
    ],
  },
  {
    performerImage: Performer2,
    programInfo: [
      { textType: 0, text: "教育講演" },
      { textType: 1, text: "発声発語を診るための課題とその臨床活用" },

      {
        textType: 3,
        text: "苅安 誠（潤和リハビリテーション診療研究所）",
      },
    ],
  },
  {
    performerImage: Performer3,
    programInfo: [
      { textType: 0, text: "教育講演" },
      {
        textType: 1,
        text: "小児構音の言語療法～アプローチポイントと連携を考える～",
      },
      {
        textType: 3,
        text: "緒方 祐子（倉重こどもクリニック）",
      },
    ],
  },
];

const MoldingText = (textType: number, text: string): JSX.Element => {
  switch (textType) {
    // 講演種類
    case 0:
      return <Typography color="secondary">{text}</Typography>;
    // タイトル
    case 1:
      return <Typography color="primary">{text}</Typography>;

    // 座長
    case 2:
      return <Typography color="secondary">{`座長：` + text}</Typography>;
    // 演者
    case 3:
      return (
        <ListItemText
          primary={`演者：` + text}
          primaryTypographyProps={{
            color: "secondary",
          }}
        />
      );
    default:
      return <Grid item></Grid>;
  }
};

function Program() {
  return (
    <Box component="div" id="item_2" className="program">
      <Grid
        id="program_container"
        container
        flexDirection="column"
        textAlign="center"
        alignItems="center"
        sx={{ mx: "auto" }}
        className="animate__animated animate__fadeInUp"
      >
        <Grid id="title" item mb={1}>
          <ListItemText
            primary="講演内容"
            primaryTypographyProps={{
              variant: "h4",
            }}
          />
        </Grid>
        <Grid item mb={1} md={12}>
          <Box
            sx={{
              width: { xs: "380px", md: "700px" },
            }}
          >
            {Programs.map((infos, _programIndex) => {
              return (
                <Grid container textAlign={"left"} key={_programIndex} mb={3}>
                  <Grid id="performer" item xs={2} md={2} pt={1}>
                    <CardMedia
                      component="img"
                      image={infos.performerImage}
                      title="演者画像"
                      sx={{
                        height: { xs: "50px", md: "80px" },
                        width: { xs: "50px", md: "80px" },
                      }}
                    />
                  </Grid>
                  <Grid id="lecture_content" item xs={10} md={10}>
                    <Box component={"div"}>
                      {infos.programInfo.map(
                        (info: Record, _infoIndex: number) => {
                          return (
                            <Box key={_infoIndex}>
                              {MoldingText(info.textType, info.text)}
                            </Box>
                          );
                        }
                      )}
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Program;
