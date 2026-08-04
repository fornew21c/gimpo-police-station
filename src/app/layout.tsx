import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// 도메인 구매·연결 후 아래를 실제 도메인으로 변경 (배포 시 Vercel URL로도 교체)
const SITE_URL = "https://gimpo-police-station.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "5호선 김포경찰서역 신설 데이터 플랫폼",
    template: "%s · 5호선 김포경찰서역",
  },
  description:
    "구호가 아닌 데이터로. 서울 5호선 김포·검단 연장은 확정됐습니다. 감정~장기 3.5km 무정차 구간에 김포경찰서역 신설을 공공데이터로 촉구하는 정치적 중립 시민 플랫폼입니다.",
  keywords: [
    "5호선 김포연장",
    "김포경찰서역",
    "김포한강선",
    "김포·검단 연장",
    "김포시 교통",
    "교통복지",
    "장기동",
    "김포골드라인",
    "교통 데이터",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "5호선 김포경찰서역 신설 추진",
    title: "5호선 김포경찰서역 신설 데이터 플랫폼",
    description:
      "본선은 확정됐다, 이제 역이다. 감정~장기 3.5km 무정차 구간에 김포경찰서역 신설을 공공데이터로 촉구하는 시민 플랫폼.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "5호선 김포경찰서역 신설 — 시민 데이터 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5호선 김포경찰서역 신설 데이터 플랫폼",
    description:
      "본선은 확정됐다, 이제 역이다. 김포경찰서역 신설을 공공데이터로 촉구하는 시민 플랫폼.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* 한국어 웹 표준 서체 Pretendard */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
