import type { Metadata } from "next";
import { Section, Card, PageHeader, SectionTitle, StatCard, Callout, PendingData } from "@/components/ui";
import { CommuteSimulator } from "@/components/commute-simulator";
import { POP_HEADLINE, PENDING_ANALYSIS, COMMERCE } from "@/data/analysis";
import { SourceTag } from "@/components/ui";
import { DATA_NOTE } from "@/data/overview";

export const metadata: Metadata = {
  title: "데이터 분석",
  description: "인구 현황, 통행시간 개선 시뮬레이션, 그리고 확보 예정 분석 지표(경제효과·교통 소외지수).",
};

export default function AnalysisPage() {
  return (
    <>
      <PageHeader
        eyebrow="데이터 분석"
        title="숫자를 근거로 바꾸다"
        lead="검증된 인구 지표와 개통 효과 시뮬레이션을 제공합니다. 정밀 산정이 필요한 지표는 임의값 대신 산정 방법과 출처를 밝히고 '자료 확보 중'으로 표시합니다."
      />

      {/* 인구 현황 (실데이터) */}
      <Section id="population">
        <SectionTitle desc="주민등록·예타·보도 기준">핵심 지표</SectionTitle>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {POP_HEADLINE.map((p) => (
            <StatCard key={p.label} label={p.label} value={p.value} unit={p.unit} sub={p.sub} tone={p.tone} />
          ))}
        </div>
      </Section>

      {/* 출퇴근 시뮬레이터 */}
      <Section className="pt-0" id="simulator">
        <SectionTitle desc="목적지를 골라 개통 전후 통행시간을 비교해 보세요. (추정 시뮬레이션)">
          출퇴근 시뮬레이터
        </SectionTitle>
        <CommuteSimulator />
      </Section>

      {/* 라베니체 등 상권 활성화 기대효과 */}
      <Section className="pt-0" id="commerce">
        <SectionTitle desc="공실률이 오른 라베니체 등 인근 상권 — 역 신설로 유동인구 개선 기대">
          상권 활성화 기대효과
        </SectionTitle>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card>
            <h3 className="font-bold text-ink">김포한강(구래) 상권 공실률 추이</h3>
            <p className="mt-1 mb-5 text-sm text-ink-soft">{COMMERCE.vacancySource}</p>
            <div className="space-y-4">
              {COMMERCE.vacancy.map((v) => (
                <div key={v.period}>
                  <div className="mb-1 flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-ink">{v.period}</span>
                    <span className="tabular text-sm font-bold text-signal">{v.rate}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-signal"
                      style={{ width: `${(v.rate / 20) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <SourceTag source={COMMERCE.source} date={COMMERCE.asOf} />
          </Card>
          <div className="space-y-4">
            {COMMERCE.facts.map((f) => (
              <Card key={f.label}>
                <p className="text-sm font-semibold text-ink-soft">{f.label}</p>
                <p className="tabular mt-1 text-2xl font-extrabold text-brand">{f.value}</p>
                <p className="mt-1 text-xs text-ink-muted">{f.sub}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Callout title="김포경찰서역 신설 기대효과" tone="teal">
            {COMMERCE.desc}
          </Callout>
        </div>
      </Section>

      {/* 자료 확보 중 분석 지표 */}
      <Section className="pt-0" id="transit-poverty">
        <SectionTitle desc="공인된 방법론과 공공데이터로 산정 후 공개합니다">확보 예정 분석</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-3">
          <PendingData title={PENDING_ANALYSIS.economic.title} source={PENDING_ANALYSIS.economic.source}>
            {PENDING_ANALYSIS.economic.desc}
          </PendingData>
          <PendingData title={PENDING_ANALYSIS.poverty.title} source={PENDING_ANALYSIS.poverty.source}>
            {PENDING_ANALYSIS.poverty.desc}
          </PendingData>
          <PendingData title={PENDING_ANALYSIS.commuteRatio.title} source={PENDING_ANALYSIS.commuteRatio.source}>
            {PENDING_ANALYSIS.commuteRatio.desc}
          </PendingData>
        </div>
        <div className="mt-4">
          <Callout title="핵심 메시지" tone="brand">
            본선은 확정됐지만 <strong>감정~장기 3.5km 무정차 구간</strong>의 장기동 주민은 역
            도보권 밖에 놓입니다. 김포경찰서역 신설은 집값이 아니라 <strong>이동권 격차</strong>를
            줄이는 균형발전 정책입니다. 정확한 경제효과·소외지수는 공인 방법론으로 산정해 순차 공개합니다.
          </Callout>
        </div>
        <p className="mt-4 text-xs text-ink-muted">※ {DATA_NOTE}</p>
      </Section>
    </>
  );
}
