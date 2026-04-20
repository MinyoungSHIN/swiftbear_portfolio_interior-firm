"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 1200, suffix: "+", label: "누적 시공 완료" },
  { value: 98,   suffix: "%", label: "고객 만족도" },
  { value: 15,   suffix: "년", label: "업력·전문 경험" },
  { value: 2,    suffix: "년", label: "무상 A/S 보증" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="block font-bold leading-none mb-2"
      style={{ fontFamily: "var(--font-cormorant), 'Noto Serif KR', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#B8864E" }}
    >
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function TrustSection() {
  return (
    <section aria-label="신뢰 지표" style={{ background: "#0F172A", padding: "64px 0" }}>
      <div className="max-w-5xl xl:max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 lg:px-10 xl:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <span className="text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.65)" }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
