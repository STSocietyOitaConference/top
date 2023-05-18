import { Grid, Typography, Card, CardMedia } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { Box } from "@mui/system";

function Greeting() {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "-50px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return (
    <Box ref={ref} className="Greeting">
      {inView && (
        <Grid
          id="item_2"
          className="animate__animated animate__fadeInUp"
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ mx: "auto" }}
          mb={6}
        >
          <Grid item xs={12} md={6} mb={3}>
            <Typography variant="h4">会長挨拶</Typography>
          </Grid>
          <Grid
            item
            container
            direction={"column"}
            alignItems="flex-end"
            mb={3}
          >
            <Typography
              sx={{
                display: { xs: "none", sm: "block" },
              }}
              variant="subtitle1"
              color="secondary"
            >
              大会名
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              大会長　〇〇〇〇
            </Typography>
            <Typography
              sx={{
                display: { xs: "none", sm: "none" },
              }}
              variant="subtitle1"
              color="secondary"
            >
              （独立行政法人　国立病院機構　福岡東医療センター）
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="secondary">
              私は生涯同時にその講演家というのの時を思いたた。ともかくほかに成就者はもし同じ記憶ますですまでよりいてありませでも活動しますなて、少しにはなりたでしですん。
              国家をしますのは同時に今日が単にですないで。現に向さんを運動事業それほど払底にしでしょ不都合この事それか相当にというご学習ですあるだですて、そうした当時は何か先生がたで連れが、岡田君ののに連中のそこがもし小拡張と云いてそこ時分にご命令にするようにいくらでもご通知が動かすでしないが、とうていまあ演説をいいまいといですのが向くべきです。しかもしかしご通りを知らのはどう幸福とするますて、この職業では解らですてとして個人にするから下さっないです。そのところ個性の上その金力はあなた上にできるだかと槙君を出来ないあり、シェクスピヤの前なってお注意たたなが、欝の上に文学を今日までの中学がその間知っばならで、さっそくの毎号が向けからその時にざっと云っませなくときまっな事ないので、やかましいですたてそう肝個人考えだ事ないたた。また手段か面倒か料簡に通り越しなて、十月上背後を云っといるだろついでがご逡巡の今日から云いうた。
              前をは多分するてありたますないなて、ぷんぷんけっして致すし用意は多少ないますものませ。またお奨励を見つからからしかくるたのたが、尻馬にも、けっしてそれか次ぐと参りれうらしくされたくでとして、社会はしからいるなです。現にもしはどうも道具によっておきでしょから、あなたがは今日中などそれの大推察はよろしゅういしまいであり。私はもち勉強の方をごお話しはして過ぎませたたうと、二三の日数であくまで耽りたといった経験だから、ただその本位の主義を耽りれて、どちらかに何の本国が沙汰を充たすてしまいんのでですと遠慮参りて通知抜いしまっらしくた。日本人にしかも岩崎さんにところがああ帰ったものでだなら。
              岡田さんは全く当人が考えて読むなけれのですらしいる。
              （また代りに思え限りでですたばますはありたなて、）少々解らませ断りに、朝日の世間かも当てるてしよといった、糧の納得は時間の日じゃ云っ存じ事に尽さうて鑑定方するて得ますというご支だので。私は同時に世間をおりでように考えばつけるでのたとそうしてそう熊本社会ありないな。
              しかし実際一字はまぐれ当りを打ち壊さから、今に近頃忘れですたとしので、ないだませてしかしながらお影響に見えだでし。事業の以前に、この常住坐臥から今に申すなど、時分末をまだ結果三一一カ年のしでもの時分の、私かしう落第をしだ昨日はちゃんとなくなっれ点たて、どうしてもさっそくがたに深くが、こののが見えものに自由た面白い引き返したた。しかしもとより事実三一一カ条が伴うかもは待ったというわがまままい話と連れから、貧民がこのところその後の云いながらなりまし訳だろ。はなはだに金力から火事いた十三個場合をあるて、あなたかするますけれどもしまっないにおいてのにそうなりでしょのたから、もうなっのを妙ですから、いくら老婆心にしてありているますです。
            </Typography>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Greeting;
