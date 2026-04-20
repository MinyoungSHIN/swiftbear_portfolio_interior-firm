"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Phone,         label: "전화 상담",  value: "02-1234-5678" },
  { icon: MessageCircle, label: "카카오톡",   value: "@스페이스온 채널 추가" },
  { icon: Clock,         label: "운영 시간",  value: "평일 09:00 ~ 18:00" },
  { icon: MapPin,        label: "주소",       value: "서울시 강남구 테헤란로 123 스페이스온 빌딩" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", spaceType: "", budget: "", message: "" });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.spaceType) return;
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "6px",
    color: "#fff",
    fontSize: "1rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "#0F172A" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* 왼쪽 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.14em] uppercase mb-4" style={{ color: "#B8864E" }}>
              Free Consultation
            </span>
            <h2
              className="font-bold leading-tight text-white mb-4"
              style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              지금 무료로<br />상담받으세요
            </h2>
            <p className="text-base mb-2" style={{ color: "rgba(255,255,255,0.78)" }}>
              24시간 내 전문 상담사가 연락드립니다
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.52)" }}>
              방문 상담 또는 화상 상담 모두 가능합니다.<br />
              부담 없이 공간 고민을 나눠보세요.
            </p>

            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(184,134,78,0.18)", border: "1px solid rgba(184,134,78,0.4)" }}
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4" style={{ color: "#B8864E" }} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wide uppercase mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {label}
                    </p>
                    <p className="text-[0.92rem] font-medium" style={{ color: "rgba(255,255,255,0.88)" }}>
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 오른쪽: 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl p-8 md:p-10"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4"
                  style={{ background: "#B8864E", color: "#fff" }}
                >
                  ✓
                </div>
                <p className="font-bold text-xl text-white mb-2" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                  신청이 완료되었습니다
                </p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  24시간 내 전문 상담사가 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wide uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)" }} htmlFor="name">
                      이름 *
                    </label>
                    <input
                      id="name" name="name" type="text" placeholder="홍길동"
                      required autoComplete="name"
                      value={form.name} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#B8864E"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; }}
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wide uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)" }} htmlFor="phone">
                      연락처 *
                    </label>
                    <input
                      id="phone" name="phone" type="tel" placeholder="010-0000-0000"
                      required autoComplete="tel"
                      value={form.phone} onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "#B8864E"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wide uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)" }} htmlFor="spaceType">
                      공간 유형 *
                    </label>
                    <select
                      id="spaceType" name="spaceType" required
                      value={form.spaceType} onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "#B8864E"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; }}
                    >
                      <option value="" disabled>선택하세요</option>
                      <option value="아파트">아파트 리모델링</option>
                      <option value="주택">단독주택</option>
                      <option value="상업">상업 인테리어</option>
                      <option value="오피스">오피스</option>
                      <option value="부분">부분 인테리어</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wide uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)" }} htmlFor="budget">
                      예산 범위
                    </label>
                    <select
                      id="budget" name="budget"
                      value={form.budget} onChange={handleChange}
                      style={{ ...inputStyle, appearance: "none" }}
                      onFocus={(e) => { e.target.style.borderColor = "#B8864E"; }}
                      onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; }}
                    >
                      <option value="" disabled>선택하세요</option>
                      <option value="~1000">1,000만원 이하</option>
                      <option value="1000~3000">1,000 ~ 3,000만원</option>
                      <option value="3000~5000">3,000 ~ 5,000만원</option>
                      <option value="5000+">5,000만원 이상</option>
                    </select>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-[11px] font-semibold tracking-wide uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)" }} htmlFor="message">
                    문의 내용
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="공간 규모, 원하는 스타일, 기타 요청사항을 자유롭게 적어주세요."
                    value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => { e.target.style.borderColor = "#B8864E"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.18)"; }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-[4px] font-semibold text-[15px] tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#B8864E", color: "#fff", boxShadow: "0 4px 20px rgba(184,134,78,0.4)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#9B6E3A"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#B8864E"; }}
                >
                  상담 신청 완료하기
                </button>
                <p className="text-center mt-3 text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  개인정보는 상담 목적으로만 사용되며, 상담 완료 후 즉시 파기됩니다.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
