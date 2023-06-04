import { Grid, Typography, CardMedia } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import ConferencePresident from "../assets/greeting/conferencePresident.jpg";
import "animate.css";
import { Box } from "@mui/system";

function Greeting() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box ref={ref} className="Greeting" mb={20}>
      {inView && (
        <Grid
          id="item_1"
          className="animate__animated animate__fadeInUp"
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          mb={6}
        >
          <Grid item xs={12} md={6} mb={3}>
            <Typography variant="h4">大会長挨拶</Typography>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            alignItems="flex-end"
            mb={3}
          >
            <Box>
              <Grid
                id="item_2"
                className="animate__animated animate__fadeInUp"
                container
                justifyContent="end"
                alignItems="end"
                sx={{ mx: "auto" }}
                mb={3}
              >
                <Grid item xs={9}>
                  <Typography variant="subtitle1" color="secondary">
                    第12回日本言語聴覚士協会九州地区学術集会大分大会
                  </Typography>
                  <Typography variant="subtitle1" color="secondary">
                    大会長 吉田玲子
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    sx={{
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    公益社団法人 大分県言語聴覚士協会　副会長
                    <br />
                    (医療法人ライフサポート 明和記念病院)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <CardMedia
                    component="img"
                    image={ConferencePresident}
                    title={"大会長画像"}
                    sx={{
                      height: { xs: "100px", md: "150px" },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="secondary">
              　第12回日本言語聴覚士協会九州地区学術集会を2024年１月27日(土)、大分市のJ:COMホルトホール大分にて開催させていただきます。関係の皆様のご支援、ご協力には重ねて心より感謝申し上げます
              <br />
              　2020年から始まった新型コロナウイルス感染により、生活様式や学術集会のあり方・開催方式に大きく制限が続いてきました。本年5月8日から新型コロナウイルス感染症が５類感染症に変更されたことを踏まえ、本大会においては感染対策を講じながら、現地開催とすることといたしました。
              <br />
              　大会テーマは「紡ぐ」といたしました。地域包括ケアシステムの構築に向けた事業を展開されているなか、私たち言語聴覚士の活躍する場は病院や施設、学校領域から地域へと広がりをみせています。その中でニーズに応えるためには、高度な知識・技術に基づいた言語聴覚療法の実践、当事者への充実した支援が求められます。これらを実現するためには、言語聴覚士としての専門性の向上はもとより、関係諸機関との連携・協働が鍵となります。
              <br />
              　内容は、特別講演、教育講演、シンポジウム、症例ディスカッション、一般演題などを予定しています。会場に共につどい、出会い、想いを紡いでいく機会となればと思います。
              <br />
              　皆様のご支援・ご協力をご高配賜りますよう、どうぞ宜しくお願い申し上げます。
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Greeting;
