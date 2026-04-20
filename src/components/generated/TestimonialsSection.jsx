"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "김민지",
    role: "서울 서초구 · 아파트 리모델링",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=88&q=75",
    body: "3D 시뮬레이션 덕분에 완공 전에 이미 만족했어요. 추가 비용 한 푼 없이 견적 그대로 마무리됐습니다.",
  },
  {
    name: "박준혁",
    role: "경기 분당 · 주택 리모델링",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=88&q=75",
    body: "상담부터 A/S까지 한 팀이 담당해줘서 소통이 너무 편했어요. 이사 전 리모델링인데 일정도 딱 맞춰줬습니다.",
  },
  {
    name: "이수연",
    role: "서울 성수 · 카페 인테리어",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=88&q=75",
    body: "브랜드 컨셉을 정확히 이해하고 공간으로 표현해줬어요. 오픈 후 인스타 성지가 됐습니다.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32" style={{ background: "#F8F7F5" }}>
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
            Reviews
          </span>
          <h2
            className="font-bold leading-tight"
            style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0F172A" }}
          >
            고객이 직접<br />전하는 말
          </h2>
        </motion.header>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-[8px] p-8"
              style={{ background: "#fff", boxShadow: "0 4px 24px rgba(30,41,59,0.07)" }}
            >
              {/* 큰따옴표 장식 */}
              <span
                className="absolute top-4 left-6 font-serif leading-none select-none"
                style={{ fontSize: "5rem", color: "#B8864E", opacity: 0.18, fontFamily: "Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* 별점 */}
              <div className="flex gap-0.5 mb-4" aria-label="별점 5점">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" style={{ color: "#B8864E" }} aria-hidden="true" />
                ))}
              </div>

              {/* 후기 본문 */}
              <p className="text-[0.93rem] leading-relaxed mb-6 relative z-10" style={{ color: "#64748B" }}>
                &ldquo;{review.body}&rdquo;
              </p>

              {/* 작성자 */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid #1E293B" }}>
                  <Image src={review.avatar} alt={`고객 ${review.name} 프로필 사진`} fill className="object-cover" sizes="44px" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{review.name}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>{review.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
