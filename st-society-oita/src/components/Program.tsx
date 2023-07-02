import React from "react";
import {
  ListItemText,
  ListItem,
  Grid,
  Divider,
  CardMedia,
  List,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { Box } from "@mui/system";
import Performer1 from "../assets/program/performer1.png";
import Performer2 from "../assets/program/performer2.png";

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
      { textType: 0, text: "教育講演" },
      { textType: 1, text: "間接法による吃音に対するアプローチ" },
      { textType: 2, text: "久保　健彦 　 （久保ことばの教室）" },
      { textType: 3, text: "都筑　澄夫 　 （都筑吃音相談室）" },
    ],
  },
  {
    performerImage: Performer2,
    programInfo: [
      { textType: 0, text: "基調講演" },
      {
        textType: 1,
        text: "これからの言語聴覚士に求められる役割　～地域包括ケアへの準備と覚悟はできていますか～",
      },
      {
        textType: 2,
        text: "宮本　恵美　 （熊本保健科学大学 保健科学部 リハビリテーション学科言語聴覚学専攻）",
      },
      {
        textType: 3,
        text: "内山　量史　 （春日居サイバーナイフ・リハビリ病院 / 一般社団法人 山梨県言語聴覚士会 / 一般社団法人 日本言語聴覚士協会）",
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
      return <Typography color="secondary">{`座　長：` + text}</Typography>;
    // 演者
    case 3:
      return (
        <ListItemText
          primary={`演　者：` + text}
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
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box component="div" id="item_4" className="program" ref={ref}>
      {inView && (
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
              primary="プログラム"
              primaryTypographyProps={{
                variant: "h4",
              }}
            />
          </Grid>
          <Grid id="title" item mb={1}>
            <Box>
              {Programs.map((infos, _programIndex) => {
                return (
                  <Grid container textAlign={"left"} key={_programIndex} mb={3}>
                    <Grid id="performer" item xs={2} md={1} pt={4}>
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
                    <Grid id="lecture_content" item xs={10} md={11}>
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
      )}
    </Box>
  );
}

export default Program;
