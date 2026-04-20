"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "서비스", href: "#services" },
  { name: "프로세스", href: "#process" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "고객 후기", href: "#testimonials" },
];

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E2E8F0" }}
      aria-label="메인 네비게이션"
    >
      <div className="max-w-5xl xl:max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 lg:px-10 xl:px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* 로고 */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold tracking-[0.2em]"
            style={{ fontFamily: "var(--font-cormorant), 'Noto Serif KR', serif", color: "#1E293B", letterSpacing: "0.2em" }}
          >
            SPACE <span style={{ color: "#B8864E" }}>ON</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-[#1E293B]"
                style={{ color: "#64748B" }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-[10px] rounded-[4px] transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#B8864E", color: "#fff", boxShadow: "0 2px 8px rgba(184,134,78,0.35)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#9B6E3A"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#B8864E"; }}
            >
              무료 상담 신청
            </a>
          </div>

          {/* 모바일 토글 */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" style={{ color: "#1E293B" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "#1E293B" }} />
            )}
          </button>
        </div>
      </div>

      {/* 모바일 드로어 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t"
            style={{ borderColor: "#E2E8F0", background: "#fff" }}
          >
            <div className="max-w-5xl xl:max-w-[1200px] mx-auto px-6 sm:px-8 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block py-3 text-base font-medium border-b transition-colors hover:text-[#1E293B]"
                  style={{ color: "#64748B", borderColor: "#F1F5F9" }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="mt-3 block text-center py-3 rounded-[4px] font-semibold text-sm"
                style={{ background: "#B8864E", color: "#fff" }}
              >
                무료 상담 신청
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
