import type { Metadata } from "next";
import { Section, Card, PageHeader, SectionTitle, StatCard, SourceTag, Callout, PendingData } from "@/components/ui";
import { POP_FACTS, POP_SOURCE, COMMUTE_CLAIM, RAIL_FACT, PENDING, GOLDLINE_CONGESTION } from "@/data/transit";
import { DATA_NOTE } from "@/data/overview";

export const metadata: Metadata = {
  title: "교통 데이터",
  description: "김포 장기동 철도 접근성 현황과 5호선 개통 시 통행시간 개선, 그리고 확보 예정 지표.",
};

export default function TransitPage() {
  return (
    <>
      <PageHeader
        eyebrow="교통 데이터"
        title="본선은 확정, 장기동엔 무정차 3.5km"
        lead="김포 장기동의 교통 현실을 검증된 지표로 정리합니다. 실측이 필요한 지표는 임의값 대신 '자료 확보 중'으로 투명하게 표시합니다."
      />

      {/* 인구 현황 (실데이터) */}
      <Section>
        <SectionTitle desc="주민등록·예타·보도 기준">핵심 지표</SectionTitle>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {POP_FACTS.map((p) => (
            <StatCard key={p.label} label={p.label} value={p.value} unit={p.unit} sub={p.sub} tone={p.tone} />
          ))}
        </div>
        <SourceTag source={POP_SOURCE.source} date={POP_SOURCE.asOf} />
      </Section>

      {/* 철도 접근성 + 통행시간 */}
      <Section className="pt-0">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="font-bold text-ink">철도 접근성</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{RAIL_FACT}</p>
            <div className="mt-4 flex items-baseline gap-2 rounded-xl bg-signal-soft px-4 py-3">
              <span className="tabular text-3xl font-extrabold text-signal">3.5</span>
              <span className="text-sm font-semibold text-signal">km · 감정~장기 무정차 구간</span>
            </div>
          </Card>
          <Card>
            <h2 className="font-bold text-ink">통행시간 개선 (개통 시)</h2>
            <p className="mt-1 mb-4 text-sm text-ink-soft">{COMMUTE_CLAIM.label}</p>
            <div className="space-y-4">
              <Bar label="현재" value={COMMUTE_CLAIM.now} max={COMMUTE_CLAIM.now} color="var(--signal)" />
              <Bar label="개통 시" value={COMMUTE_CLAIM.after} max={COMMUTE_CLAIM.now} color="var(--good)" />
            </div>
            <p className="mt-3 text-xs text-ink-muted">{COMMUTE_CLAIM.note}</p>
            <SourceTag source={COMMUTE_CLAIM.source} />
          </Card>
        </div>
      </Section>

      {/* 김포골드라인 혼잡도 (실데이터) */}
      <Section className="pt-0" id="congestion">
        <SectionTitle desc="'지옥철'로 불리는 김포골드라인 출근 첨두 혼잡률 — 5호선·김포경찰서역이 필요한 이유">
          김포골드라인 혼잡도
        </SectionTitle>
        <Card>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-ink-soft">{GOLDLINE_CONGESTION.headline.label}</p>
              <p className="tabular mt-1 text-5xl font-extrabold text-signal">
                {GOLDLINE_CONGESTION.headline.value}
                <span className="text-2xl">{GOLDLINE_CONGESTION.headline.unit}</span>
              </p>
              <p className="mt-1 text-xs text-ink-muted">{GOLDLINE_CONGESTION.headline.sub}</p>
            </div>
            <span className="rounded-full bg-signal-soft px-3 py-1 text-xs font-bold text-signal">
              정원 대비 · 최대 289% = 정원의 약 2.9배
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {GOLDLINE_CONGESTION.series.map((s) => (
              <div key={s.period}>
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-ink">
                    {s.period}
                    {s.note && <span className="ml-1.5 text-xs font-normal text-ink-muted">({s.note})</span>}
                  </span>
                  <span className="tabular text-sm font-bold text-ink-soft">
                    {s.avg !== null && <span className="text-ink-muted">평균 {s.avg}% · </span>}최대 {s.max}%
                  </span>
                </div>
                {/* 100% 기준선 대비 최대 혼잡률 막대 (스케일 300%) */}
                <div className="relative h-3.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="absolute inset-y-0 left-1/3 w-px bg-border-strong" title="정원 100%" />
                  <div
                    className="h-full rounded-full bg-signal"
                    style={{ width: `${Math.min((s.max / 300) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">{GOLDLINE_CONGESTION.note}</p>
          <SourceTag source={GOLDLINE_CONGESTION.source} date={GOLDLINE_CONGESTION.asOf} />
        </Card>
      </Section>

      {/* 자료 확보 중 */}
      <Section className="pt-0">
        <SectionTitle desc="공공데이터 연동 후 실측값으로 공개합니다">확보 예정 지표</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          <PendingData title={PENDING.headway.title} source={PENDING.headway.source}>
            {PENDING.headway.desc}
          </PendingData>
          <PendingData title={PENDING.commuteDetail.title} source={PENDING.commuteDetail.source}>
            {PENDING.commuteDetail.desc}
          </PendingData>
        </div>
      </Section>

      <Section className="pt-0">
        <Callout title="핵심 사실" tone="signal">
          서울 5호선 김포·검단 연장은 <strong>예타를 통과해 확정</strong>됐지만, 확정된 9개 역 사이{" "}
          <strong>감정~장기 3.5km 구간엔 정차역이 없습니다</strong>. 그 중간에 위치한{" "}
          <strong>김포경찰서역(장기동 인근)</strong>을 신설해야 장기동 주민의 이동권이 보장됩니다.
        </Callout>
        <p className="mt-4 text-xs text-ink-muted">※ {DATA_NOTE}</p>
      </Section>
    </>
  );
}

function Bar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-sm font-semibold text-ink">{label}</span>
        <span className="tabular text-sm font-bold text-ink-soft">약 {value}분대</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-surface-2">
        <div className="h-full rounded-full" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
    </div>
  );
}
