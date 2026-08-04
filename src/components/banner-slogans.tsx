import { Container } from "./ui";
import { CAMPAIGN } from "@/data/overview";

/* 현수막 형광 강조색 (배경 대비용) */
const YELLOW = "#F2C200";

/**
 * 캠페인 홍보 이미지 구역.
 * 오프라인 홍보물과 동일한 캠페인 비주얼(김포경찰서역 신설 요구)을 그대로 노출합니다.
 * 이 구역에만 강렬한 톤을 쓰고, 데이터 영역은 차분한 톤을 유지합니다.
 */
export function BannerSlogans({ eyebrow = true }: { eyebrow?: boolean }) {
  return (
    <section className="bg-[#0d0d0d]">
      <Container className="py-14 sm:py-16">
        {eyebrow && (
          <p className="mb-5 text-sm font-extrabold tracking-wide" style={{ color: YELLOW }}>
            우리의 요구
          </p>
        )}

        <figure className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/campaign-main.png"
            alt="김포경찰서역 신설을 요구합니다! — 5호선 연장, 김포의 필수 인프라. 서울 접근성 향상·라베니체 상권 활성화·이음시티(한강신도시) 직접 연결·김포경찰서 접근성 향상. 김포경찰서역 추진위원회"
            width={1852}
            height={849}
            className="h-auto w-full"
          />
        </figure>

        <p className="mt-6 text-center text-xs text-white/50">
          {CAMPAIGN.org} · {CAMPAIGN.who} · 오프라인 홍보물과 같은 메시지입니다.
        </p>
      </Container>
    </section>
  );
}
