import type { Metadata } from "next";
import { Section, Card, PageHeader, SectionTitle, StatCard, Callout, SourceTag, PendingData } from "@/components/ui";
import { RouteDiagram } from "@/components/route-diagram";
import { LINE, LINE_FACTS, CATCHMENT } from "@/data/route";

export const metadata: Metadata = {
  title: "노선도",
  description: "서울 5호선 김포·검단 연장(확정) 노선과 감정~장기 사이 김포경찰서역 신설 위치.",
};

export default function RouteMapPage() {
  return (
    <>
      <PageHeader
        eyebrow="노선도"
        title="방화에서 한강2지구, 그 사이 김포경찰서역"
        lead="서울 5호선 김포·검단 연장(방화~한강2지구, 25.8km, 9개역)은 2026년 3월 예비타당성조사를 통과해 확정됐습니다. 다만 감정역~장기역 3.5km 구간엔 정차역이 없어, 그 중간에 김포경찰서역 신설이 촉구되고 있습니다."
      />

      {/* 노선 핵심 팩트 */}
      <Section>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {LINE_FACTS.map((f) => (
            <StatCard key={f.label} label={f.label} value={f.value} unit={f.unit} sub={f.sub} tone={f.tone} />
          ))}
        </div>
      </Section>

      {/* 개념도 */}
      <Section className="pt-0">
        <Card>
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-extrabold text-ink">{LINE.name} 노선 개념도</h2>
            <span className="text-xs text-ink-muted">개념도 · 일부 중간역 생략, 역명 가칭·미확정</span>
          </div>
          <RouteDiagram />
          <SourceTag source={LINE.source} date={LINE.asOf} />
        </Card>
      </Section>

      {/* 연장 근거 (실데이터) + 역세권 상세는 확보 중 */}
      <Section className="pt-0">
        <SectionTitle desc="김포경찰서역 신설을 뒷받침하는 검증된 지표">신설 근거</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {CATCHMENT.map((c) => (
            <StatCard key={c.label} label={c.label} value={c.value} unit={c.note} tone={c.tone} />
          ))}
        </div>
        <div className="mt-4">
          <PendingData
            title="역세권 상세 분석 — 자료 확보 중"
            source="통계청 · 김포시 통계 · 지도 API"
          >
            김포경찰서역(가칭) 반경 배후인구·세대수·학교 분포는 역 위치가 확정되는 대로 실측 기반으로 공개합니다.
          </PendingData>
        </div>
      </Section>

      {/* 추진 상황 콜아웃 */}
      <Section className="pt-0">
        <div className="grid gap-4 lg:grid-cols-2">
          <Callout title="왜 김포경찰서역인가" tone="brand">
            확정된 <strong>감정역과 장기역 사이 3.5km에는 정차역이 없어</strong>, 그 중간 장기동 주민이
            역 도보권 밖에 놓입니다. <strong>김포경찰서 인근(장기동)</strong>이 중간역으로
            적정하다는 분석이 제기되며, 역간거리 과다를 해소해 노선 효율과 이동권을 함께 높입니다.
          </Callout>
          <Callout title="현재 추진 단계" tone="teal">
            본선은 <strong>2026년 3월 예타를 통과해 확정</strong>됐고, 경기도 주관으로{" "}
            <strong>타당성·기본계획 수립</strong>에 들어갑니다(2026 하반기 용역 발주 전망).
            김포시는 <strong>풍무2·김포경찰서·통진역 3개 추가역</strong> 신설을 대광위에 건의 중이며,
            반영 여부는 기본계획 단계에서 결정됩니다.
          </Callout>
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          ※ 김포경찰서역은 확정된 9개 역에 포함되지 않은 추가 건의역이며, 정확한 선형·역 위치·역명은 기본계획에서 확정됩니다.
        </p>
      </Section>

      <Section className="pt-0">
        <Card className="flex flex-col items-center gap-2 border-dashed py-10 text-center">
          <p className="font-bold text-ink">지도 API 연동 예정</p>
          <p className="max-w-md text-sm text-ink-soft">
            정식 공개 시 카카오맵/브이월드 레이어로 실제 선형·역 위치·역세권 폴리곤을
            지도 위에 표시합니다.
          </p>
        </Card>
      </Section>
    </>
  );
}
