import React from "react";
import "./index.css";
import start from "./assets/start.png";
import make from "./assets/make.png";
import face from "./assets/face.png";
import story from "./assets/story.png";
import place from "./assets/place.png";
import ship from "./assets/ship.png";
import remember from "./assets/remember.png";
import think from "./assets/think.png";
import pick from "./assets/pick.png";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  PlayCircle,
  Sparkles,
  Brain,
  Camera,
  Heart,
  Shield,
  MapPin,
  Image,
  Zap,
} from "lucide-react";



const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const floatAnim = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};



const ImgSlot = ({ src, alt }) => (
  <motion.div
    className="relative w-full h-100 rounded-2xl overflow-hidden flex items-center justify-center bg-muted"
    initial={{ opacity: 0, scale: 0.97 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {src ? (
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        variants={floatAnim}
        animate="animate"
      />
    ) : (
      <>
        <Image className="w-10 h-10 text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">이미지 자리: {alt}</span>
      </>
    )}
  </motion.div>
);



const FeatureCard = ({ icon: Icon, title, desc, img, alt, delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 15px rgba(100,180,255,0.4)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 15 }}
      className="rounded-2xl border border-sky-100/50 bg-white/70 backdrop-blur-md p-1"
    >
      <Card className="rounded-2xl bg-gradient-to-br from-white to-sky-50 shadow-sm hover:shadow-md transition-all">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-semibold text-sky-800">
            <Icon className="w-5 h-5 text-sky-500" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          {img && (
            <motion.img
              src={img}
              alt={alt}
              className="w-full h-40 object-cover rounded-lg border"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 180, damping: 10 }}
            />
          )}
        </CardContent>
      </Card>
    </motion.div>
  </motion.div>
);



export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-pink-50 text-foreground overflow-hidden">
      {/* 💞 Hero Section */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-50 animate-pulse"
          style={{
            background:
              "radial-gradient(1000px 400px at 20% 0%, rgba(135,206,250,0.4), transparent), radial-gradient(800px 400px at 80% 20%, rgba(255,182,193,0.4), transparent)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-12 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp()}
            className="flex flex-col items-center gap-6"
          >
            <motion.div variants={fadeUp(0.1)}>
              <Badge className="rounded-full px-3 py-1" variant="secondary">
                <Sparkles className="w-4 h-4 mr-1" /> AI-동적 미연시 서비스
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp(0.2)}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-sky-500 via-pink-400 to-violet-500 text-transparent bg-clip-text drop-shadow-sm"
            >
              정해진 스토리가 아닌,  
              <br />
              <span className="text-sky-600 drop-shadow">
                실시간으로 변하는 사랑
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.3)}
              className="max-w-2xl text-base md:text-lg text-muted-foreground"
            >
              AI가 당신의 대화, 취향, 일정, 날씨까지 반영해 매번 다른 연애 경험을
              빚어냅니다. 직접 플레이해야만 느낄 수 있는 몰입형 시뮬레이션.
            </motion.p>

            <motion.div
              variants={fadeUp(0.4)}
              className="h-full w-full max-w-4xl drop-shadow-md"
            >
              <ImgSlot alt="히어로 스크린샷" src={start} />
            </motion.div>
          </motion.div>
        </div>
      </header>



      <section className="mx-auto max-w-6xl px-4 py-16" id="features">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-sky-700"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          핵심 기능
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Brain}
            title="AI 실시간 스토리 창작"
            alt="실시간 스토리"
            desc="플레이어 대화/행동/선호를 반영해 즉석에서 스토리를 생성하고 분기합니다."
            delay={0.1}
            img={story}
          />
          <FeatureCard
            icon={Camera}
            title="얼굴 감정 인식"
            alt="감정 인식"
            desc="표정/감정 추정을 통해 반응, 대사 톤, 호감도 변화를 연동합니다."
            img={face}
            delay={0.2}
          />
          <FeatureCard
            icon={PlayCircle}
            title="취향 기반 연애 시뮬레이션"
            alt="맞춤형"
            desc="성격부터 장르까지, 선택에 따라 제작합니다."
            img={make}
            delay={0.3}
          />
          <FeatureCard
            icon={MapPin}
            title="취향 기반 장소 추천"
            alt="장소 추천"
            desc="선호 데이터를 학습해 매 회차 최적의 데이트 코스를 구성합니다."
            delay={0.4}
            img={place}
          />
          <FeatureCard
            icon={Heart}
            title="친밀도 시스템"
            alt="친밀도"
            desc="행동/대화 감정에 따른 실시간 호감도 및 이벤트 해금."
            delay={0.5}
            img={ship}
          />
          <FeatureCard
            icon={Shield}
            title="개인화 & 기억"
            alt="개인화"
            desc="개인정보 동의 기반 장기 기억으로 더 현실적인 대화와 지속성 제공."
            delay={0.6}
            img={remember}
          />
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-4 py-20" id="showcase">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-sky-700"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          쇼케이스
        </motion.h2>

        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid grid-cols-2 rounded-2xl">
            <TabsTrigger value="story">동적 스토리</TabsTrigger>
            <TabsTrigger value="voice">감정</TabsTrigger>
          </TabsList>

          <motion.div
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mt-8"
          >
            <TabsContent value="story">
              <motion.div
                variants={fadeUp(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-sky-700">
                    재플레이 때마다 달라지는 전개
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    선택, 타이밍, 감정 상태, 외부 환경을 조합하여 매번 새로운
                    경험을 제공합니다.
                  </p>
                  <ul className="text-sm list-disc pl-5 text-muted-foreground space-y-1">
                    <li>분기 예측 / 서프라이즈 이벤트</li>
                    <li>동적 배경 이미지 교체</li>
                    <li>개인 취향 기반 시나리오 시드</li>
                  </ul>
                </div>
                <ImgSlot alt="동적 스토리 갤러리" src={pick} />
              </motion.div>
            </TabsContent>

            <TabsContent value="voice">
              <motion.div
                variants={fadeUp(0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-start"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-sky-700">
                    표정 인식
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    표정이 캐릭터 반응과 호감도에 직접 반영됩니다.
                  </p>
                  <ul className="text-sm list-disc pl-5 text-muted-foreground space-y-1">
                    <li>감정에 따른 대사 생성</li>
                    <li>호감도/긴장도 시각화</li>
                    <li>방해 요소(잡음) 대응</li>
                  </ul>
                </div>
                <ImgSlot alt="보이스/감정 데모"  src={think} />
              </motion.div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </section>



      <section className="mx-auto max-w-6xl px-4 pb-20" id="tech">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-sky-700"
          variants={fadeUp()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          기술 & 개인정보 보호
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 10 }}
          >
            <Card className="rounded-2xl backdrop-blur-md bg-white/70 border border-sky-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sky-700">
                  <Zap className="w-5 h-5 text-sky-500" /> 기술 스택
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>React</li>
                  <li>FastApi</li>
                  <li>LLM 기반 실시간 스토리 생성 엔진(Gemini)</li>
                  <li>표정 인식 모델(WebCam)</li>
                  <li>개인화 메모리 계층</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 10 }}
          >
            <Card className="rounded-2xl backdrop-blur-md bg-white/70 border border-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-600">
                  <Shield className="w-5 h-5 text-pink-400" /> 개인정보 보호
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>명시적 동의 후 데이터 수집/학습</li>
                  <li>민감 데이터 로컬 보관 및 암호화</li>
                  <li>카메라/마이크 사용 시 표시</li>
                  <li>데이터 삭제/옵트아웃 지원</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>


      {/* 🪩 Footer */}
      <footer className="border-t border-sky-100">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>project while</span>
          </div>
          <div className="flex items-center gap-3">
            <a className="hover:text-sky-600" href="#features">기능</a>
            <a className="hover:text-sky-600" href="#showcase">쇼케이스</a>
            <a className="hover:text-sky-600" href="#tech">기술</a>
          </div>
          <div>made by © {new Date().getFullYear()}</div>
        </div>
      </footer>
    </div>
  );
}
