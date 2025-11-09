import React from "react";
import "./index.css";
import start from "./assets/start.png";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, Sparkles, Brain, Mic, Camera, CloudSun, CalendarClock, Puzzle, Heart, Trophy, LineChart, Shield, MapPin, Image, Music, Zap } from "lucide-react";

const ImgSlot = ({ src, alt }) => (
  <div className="relative w-full h-100 rounded-2xl overflow-hidden flex items-center justify-center bg-muted">
    {src ? (
      <img src={src} alt={alt} className="object-cover w-full h-full" />
    ) : (
      <>
        <Image className="w-10 h-10" />
        <span className="ml-2 text-muted-foreground">이미지 자리: {alt}</span>
      </>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc, alt }) => (
  <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <CardHeader className="pb-3">
      <CardTitle className="flex items-center gap-2 text-lg">
        <Icon className="w-5 h-5" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <ImgSlot alt={alt} />
    </CardContent>
  </Card>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white text-foreground">
      {/* Header / Hero */}
      <header className="relative">
        <div className="absolute inset-0 -z-10 opacity-30" style={{background:"radial-gradient(1000px 400px at 20% 0%, rgba(135,206,250,0.6), transparent), radial-gradient(800px 400px at 80% 20%, rgba(173,216,230,0.5), transparent)"}}/>
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:.6}} className="flex flex-col items-center text-center gap-6">
            <Badge className="rounded-full px-3 py-1" variant="secondary">
              <Sparkles className="w-4 h-4 mr-1"/> AI-동적 미연시 서비스
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              정해진 스토리가 아닌,
              <span className="text-sky-500"> 실시간으로 변하는 사랑</span>
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
              AI가 당신의 대화, 취향, 일정, 날씨까지 반영해 매번 다른 연애 경험을 빚어냅니다. 
              스트리밍으로 대신 볼 수 없는, 직접 플레이해야만 하는 몰입형 연애 시뮬레이션.
            </p>
            <div className="h-full w-full max-w-4xl">
              <ImgSlot alt="히어로 스크린샷" src={start} />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Differentiators */}
      <section className="mx-auto max-w-6xl px-4 py-12" id="why">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>반복적 스토리의 한계 극복</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              기존 미연시는 정적인 루트로 금방 지루해집니다. 우리의 AI는 매 회차 다른 전개로 <b>재플레이 가치</b>를 극대화합니다.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>시청형이 아닌 체험형</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              스트리머의 클리어 영상을 보는 것만으로는 맛볼 수 없는 <b>동적 상호작용</b>이 핵심입니다.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>현실과 연결된 몰입감</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              달력, 날씨, 표정 인식 등 현실 데이터를 스토리에 반영해 <b>진짜 데이트</b>에 가까운 감각을 제공합니다.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4" id="features">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">핵심 기능</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard icon={Brain} title="AI 실시간 스토리 창작" alt="실시간 스토리" desc="플레이어 대화/행동/선호를 반영해 즉석에서 스토리를 생성하고 분기합니다." />
          <FeatureCard icon={Camera} title="얼굴 감정 인식" alt="감정 인식" desc="표정/감정 추정을 통해 반응, 대사 톤, 호감도 변화를 연동합니다." />          <FeatureCard icon={CloudSun} title="날씨 연동" alt="날씨 연동" desc="실시간 날씨/기온을 반영해 데이트 장소, 복장, 이벤트가 변화합니다." />
          <FeatureCard icon={MapPin} title="취향 기반 장소 추천" alt="장소 추천" desc="선호 데이터를 학습해 매 회차 최적의 데이트 코스를 구성합니다." />
          <FeatureCard icon={Heart} title="친밀도 시스템" alt="친밀도" desc="행동/대화 감정에 따른 실시간 호감도 및 이벤트 해금." />
          <FeatureCard icon={Shield} title="개인화 & 기억" alt="개인화" desc="개인정보 동의 기반 장기 기억으로 더 현실적인 대화와 지속성 제공." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12" id="showcase">
        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid grid-cols-2 rounded-2xl">
            <TabsTrigger value="story">동적 스토리</TabsTrigger>
            <TabsTrigger value="voice">감정</TabsTrigger>
          </TabsList>
          <TabsContent value="story" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">재플레이 때마다 달라지는 전개</h3>
                <p className="text-muted-foreground text-sm">선택, 타이밍, 감정 상태, 외부 환경을 조합하여 매번 새로운 경험을 제공합니다.</p>
                <ul className="text-sm list-disc pl-5 text-muted-foreground space-y-1">
                  <li>분기 예측/서프라이즈 이벤트</li>
                  <li>동적 배경 이미지 교체</li>
                  <li>개인 취향 기반 시나리오 시드</li>
                </ul>
              </div>
              <ImgSlot alt="동적 스토리 갤러리"/>
            </div>
          </TabsContent>
          <TabsContent value="voice" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">표정 인식</h3>
                <p className="text-muted-foreground text-sm">표정이 캐릭터 반응과 호감도에 직접 반영됩니다.</p>
                <ul className="text-sm list-disc pl-5 text-muted-foreground space-y-1">
                  <li>감정에 따른 대사 생성</li>
                  <li>호감도/긴장도 시각화</li>
                  <li>방해 요소(잡음) 대응</li>
                </ul>
              </div>
              <ImgSlot alt="보이스/감정 데모"/>
            </div>
          </TabsContent>

        </Tabs>
      </section>


      <section className="mx-auto max-w-6xl px-4 pb-12" id="tech">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Zap className="w-5 h-5"/> 기술 스택</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>LLM 기반 실시간 스토리 생성 엔진</li>
                <li>ASR/TTS 보이스 파이프라인, VAD/노이즈 억제</li>
                <li>표정/감정 추정 모델(WebCam), 온디바이스 추론 옵션</li>
                <li>캘린더/날씨 API 연동</li>
                <li>개인화 메모리 계층(동의 기반)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield className="w-5 h-5"/> 개인정보 보호</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>명시적 동의 후 데이터 수집/학습</li>
                <li>민감 데이터 로컬 보관/암호화 옵션</li>
                <li>카메라/마이크 사용 시 항상 온스크린 표시</li>
                <li>데이터 삭제/이동권, 옵트아웃 지원</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA / Newsletter */}


      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4"/>
            <span>project while</span>
          </div>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href="#features">기능</a>
            <a className="hover:underline" href="#showcase">쇼케이스</a>
            <a className="hover:underline" href="#tech">기술</a>
          </div>
          <div>made by © {new Date().getFullYear()} </div>
        </div>
      </footer>
    </div>
  );
}
