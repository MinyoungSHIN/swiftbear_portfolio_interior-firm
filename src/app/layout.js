import { Cormorant_Garamond, DM_Sans, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "스페이스온 | 신뢰할 수 있는 인테리어 전문 기업",
  description: "15년 경력 인테리어 전문 기업 스페이스온. 3D 사전 확인·투명 견적·2년 A/S 보증으로 1,200건 이상 완공.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${dmSans.variable} ${notoSerifKR.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
