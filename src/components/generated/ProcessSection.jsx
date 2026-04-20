"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "무료 상담", desc: "방문 또는 화상 상담으로 공간 현황과 요구사항을 파악합니다." },
  { num: "02", title: "3D 설계",  desc: "실제 완공 모습을 3D로 미리 확인 후 원하는 방향으로 수정합니다." },
  { num: "03", title: "투명 견적", desc: "항목별 세부 견적서를 제공하며, 계약 후 추가 비용은 없습니다." },
  { num: "04", title: "전문 시공", desc: "검증된 자사 시공팀이 직접 작업하며 진행 상황을 실시간 공유합니다." },
  { num: "05", title: "2년 A/S",  desc: "완공 후 2년간 하자 발생 시 무상으로 신속하게 처리합니다." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32" style={{ background: "#F8F7F5" }}>
      <div className="max-w-5xl xl:max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 lg:px-10 xl:px-6">
        {/* 헤더 */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.14em] uppercase mb-3" style={{ color: "#B8864E" }}>
            How We Work
          </span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0F172A" }}
          >
            처음부터 끝까지<br />투명하게 진행합니다
          </h2>
          <p style={{ color: "#64748B", maxWidth: "440px", margin: "0 auto" }}>
            5단계 체계적 프로세스로 불안 없이 완공까지
          </p>
        </motion.header>

        {/* 데스크톱: 가로 스텝 */}
        <ol className="hidden lg:grid grid-cols-5 gap-0 relative">
          <div
            className="absolute top-7 left-[calc(10%+28px)] right-[calc(10%+28px)] h-[1px]"
            style={{ background: "#CBD5E1", opacity: 0.8 }}
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <motion.li
              key={step.num}
              className="relative z-10 flex flex-col items-center text-center px-3"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-base text-white mb-5 flex-shrink-0"
                style={{
                  background: "#1E293B",
                  border: "3px solid #F8F7F5",
                  boxShadow: "0 0 0 2px #B8864E",
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                }}
                aria-hidden="true"
              >
                {step.num}
              </div>
              <h3 className="font-bold text-[0.95rem] mb-2" style={{ color: "#0F172A" }}>
                {step.title}
              </h3>
              <p className="text-[0.85rem] leading-relaxed" style={{ color: "#64748B" }}>
                {step.desc}
              </p>
            </motion.li>
          ))}
        </ol>

        {/* 모바일: 세로 스텝 */}
        <ol className="flex lg:hidden flex-col gap-8">
          {steps.map((step, i) => (
            <motion.li
              key={step.num}
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                style={{
                  background: "#1E293B",
                  boxShadow: "0 0 0 2px #B8864E",
                  fontFamily: "var(--font-cormorant), serif",
                }}
                aria-hidden="true"
              >
                {step.num}
              </div>
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: "#0F172A" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                  {step.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
