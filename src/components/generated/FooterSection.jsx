export default function FooterSection() {
  const serviceLinks = [
    "아파트·주택 리모델링",
    "상업 인테리어",
    "오피스 공간 설계",
    "부분 인테리어",
  ];
  const companyLinks = [
    { label: "시공 프로세스", href: "#process" },
    { label: "포트폴리오",   href: "#portfolio" },
    { label: "고객 후기",   href: "#testimonials" },
    { label: "무료 상담",   href: "#contact" },
  ];

  return (
    <footer style={{ background: "#080E1A" }}>
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* 브랜드 */}
          <div>
            <p
              className="text-xl font-bold tracking-[0.2em] mb-3"
              style={{ fontFamily: "var(--font-cormorant), 'Noto Serif KR', serif", color: "#fff" }}
            >
              SPACE <span style={{ color: "#B8864E" }}>ON</span>
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)", maxWidth: "280px" }}>
              15년의 경험으로 완성한 공간, 스페이스온이 함께합니다. 처음부터 끝까지 투명하고 믿을 수 있는 인테리어를 약속드립니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              서비스
            </p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200 hover:text-[#B8864E]"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              회사
            </p>
            <ul className="flex flex-col gap-2">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200 hover:text-[#B8864E]"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 스페이스온. All rights reserved. | 사업자등록번호 000-00-00000
          </p>
          <div className="flex gap-2">
            {["투명 견적 보장", "2년 A/S 보증", "3D 사전 확인"].map((badge) => (
              <span
                key={badge}
                className="text-[10px] px-3 py-1 rounded-full"
                style={{ border: "1px solid rgba(184,134,78,0.35)", color: "#B8864E" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
