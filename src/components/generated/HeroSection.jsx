"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.05) translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ height: "93svh", minHeight: "640px" }}
      aria-label="히어로 섹션"
    >
      {/* 배경 이미지 */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')",
          transform: "scale(1.05)",
          willChange: "transform",
        }}
        role="img"
        aria-label="고급 인테리어 공간 배경"
      />
      {/* 오버레이 — 딥 슬레이트 톤 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.52) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-[700px]">
          {/* 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-7"
            style={{
              background: "rgba(184,134,78,0.18)",
              border: "1px solid rgba(184,134,78,0.55)",
              color: "#B8864E",
            }}
          >
            ✦ 15년 경력 · 1,200건 이상 완공
          </motion.div>

          {/* 헤드라인 */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-bold leading-[1.15] text-white mb-5"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
            }}
          >
            공간이 바뀌면
            <br />
            <em className="not-italic" style={{ color: "#B8864E" }}>
              삶이 달라집니다
            </em>
          </motion.h1>

          {/* 서브헤드 */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg font-medium mb-3"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            믿을 수 있는 시공, 투명한 견적, 2년 A/S 보증
          </motion.p>

          {/* 본문 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="text-base leading-relaxed mb-9"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            아파트 리모델링부터 상업공간 인테리어까지
            <br />
            15년 경력의 전문 팀이 처음부터 끝까지 함께합니다.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-[14px] rounded-[4px] font-semibold text-[15px] tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#B8864E",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(184,134,78,0.45)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#9B6E3A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#B8864E"; }}
            >
              무료 상담 신청하기
            </a>
            <a
              href="#portfolio"
              className="inline-block px-8 py-[14px] rounded-[4px] font-semibold text-[15px] tracking-wide transition-all duration-200 hover:bg-white/15"
              style={{
                border: "2px solid rgba(255,255,255,0.6)",
                color: "#fff",
              }}
            >
              시공 사례 보기
            </a>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-[11px] tracking-[0.12em] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
          SCROLL
        </span>
        <div className="w-px h-10" style={{ background: "rgba(255,255,255,0.3)" }} />
      </motion.div>
    </section>
  );
}
