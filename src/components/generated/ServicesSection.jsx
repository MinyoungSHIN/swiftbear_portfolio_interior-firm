"use client";

import { motion } from "framer-motion";
import { Home, Coffee, Briefcase, Bath } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "아파트·주택 리모델링",
    description: "오래된 주거 공간을 새로운 라이프스타일에 맞게 전면 재구성합니다. 구조 변경부터 마감재까지 원스톱.",
  },
  {
    icon: Coffee,
    title: "상업 인테리어",
    description: "카페·레스토랑·리테일 매장의 브랜드 아이덴티티를 공간으로 구현합니다. 매출을 높이는 동선 설계 포함.",
  },
  {
    icon: Briefcase,
    title: "오피스 공간 설계",
    description: "업무 효율과 직원 만족도를 동시에 높이는 오피스 환경을 만듭니다. 협업 존·집중 존 최적화.",
  },
  {
    icon: Bath,
    title: "부분 인테리어",
    description: "욕실·주방·현관 등 원하는 공간만 선택적으로 개선합니다. 예산 부담 없이 효과 극대화.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32" style={{ background: "#fff" }}>
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
            Our Services
          </span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0F172A" }}
          >
            어떤 공간이든<br />맞춤 설계합니다
          </h2>
          <p className="text-base mx-auto" style={{ color: "#64748B", maxWidth: "480px" }}>
            주거부터 상업공간까지, 목적에 맞는 전문 솔루션
          </p>
        </motion.header>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <motion.article
              key={svc.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-[8px] p-10 border transition-all duration-300 cursor-default"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                borderBottom: "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(30,41,59,0.10)";
                e.currentTarget.style.borderBottom = "3px solid #B8864E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderBottom = "3px solid transparent";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#F8F7F5" }}
                aria-hidden="true"
              >
                <svc.icon className="w-6 h-6" style={{ color: "#1E293B" }} />
              </div>
              <h3
                className="font-bold mb-3 text-[1.2rem]"
                style={{ fontFamily: "'Noto Serif KR', serif", color: "#0F172A" }}
              >
                {svc.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "#64748B" }}>
                {svc.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* 하단 CTA */}
        <motion.footer
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-[14px] rounded-[4px] font-semibold text-sm tracking-wide transition-all duration-200"
            style={{ border: "2px solid #1E293B", color: "#1E293B" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E293B"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1E293B"; }}
          >
            전체 서비스 알아보기
          </a>
        </motion.footer>
      </div>
    </section>
  );
}
