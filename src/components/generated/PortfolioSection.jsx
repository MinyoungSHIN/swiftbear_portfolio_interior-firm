"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    cat: "주거",
    title: "강남구 아파트 42평 전체 리모델링",
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=75",
    alt: "강남구 아파트 42평 전체 리모델링 완공 사진",
  },
  {
    id: 2,
    cat: "상업",
    title: "홍대 카페 80㎡ 브랜드 인테리어",
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=75",
    alt: "홍대 카페 80㎡ 브랜드 인테리어 완공 사진",
  },
  {
    id: 3,
    cat: "오피스",
    title: "역삼동 스타트업 오피스 200㎡",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75",
    alt: "역삼동 스타트업 오피스 200㎡ 완공 사진",
  },
  {
    id: 4,
    cat: "부분",
    title: "마포구 빌라 욕실·주방 부분 시공",
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75",
    alt: "마포구 빌라 욕실·주방 부분 시공 완공 사진",
  },
  {
    id: 5,
    cat: "오피스",
    title: "판교 IT기업 본사 리뉴얼",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=75",
    alt: "판교 IT기업 본사 리뉴얼 완공 사진",
  },
  {
    id: 6,
    cat: "상업",
    title: "성수동 복합문화공간 인테리어",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=75",
    alt: "성수동 복합문화공간 인테리어 완공 사진",
  },
];

const filters = ["전체", "주거", "상업", "오피스", "부분"];

export default function PortfolioSection() {
  const [active, setActive] = useState("전체");

  const filtered =
    active === "전체"
      ? portfolioItems
      : portfolioItems.filter((item) => item.cat === active);

  return (
    <section id="portfolio" className="py-24 md:py-32" style={{ background: "#fff" }}>
      <div className="max-w-5xl xl:max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 lg:px-10 xl:px-6">
        {/* 헤더 */}
        <motion.header
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.14em] uppercase mb-3" style={{ color: "#B8864E" }}>
            Portfolio
          </span>
          <h2
            className="font-bold leading-tight mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0F172A" }}
          >
            우리가 완성한<br />공간들
          </h2>
          <p style={{ color: "#64748B", maxWidth: "440px", margin: "0 auto" }}>
            1,200건 이상의 시공 사례 중 엄선한 포트폴리오
          </p>
        </motion.header>

        {/* 필터 탭 */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: active === f ? "#1E293B" : "transparent",
                color: active === f ? "#fff" : "#64748B",
                border: active === f ? "1px solid #1E293B" : "1px solid #CBD5E1",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 그리드 */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-[8px] overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(15,23,42,0.90) 0%, transparent 55%)",
                  }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#B8864E" }}>
                    {item.cat}
                  </p>
                  <p className="text-sm font-semibold leading-snug text-white">
                    {item.title}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 하단 CTA */}
        <motion.footer
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-[14px] rounded-[4px] font-semibold text-sm tracking-wide transition-all duration-200"
            style={{ border: "2px solid #1E293B", color: "#1E293B" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1E293B"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1E293B"; }}
          >
            전체 포트폴리오 보기
          </a>
        </motion.footer>
      </div>
    </section>
  );
}
