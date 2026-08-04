import Link from "next/link";
import {
  Container,
  Section,
  Card,
  StatCard,
  Badge,
  Callout,
  ButtonLink,
  SectionTitle,
  SourceTag,
} from "@/components/ui";
import { TODAY, VISION, PHILOSOPHY, FEATURES, DATA_NOTE } from "@/data/overview";
import { POP_FACTS, POP_SOURCE, COMMUTE_CLAIM } from "@/data/transit";
import { PROMISES } from "@/data/civic";
import { StageBadge } from "@/components/stage-badge";
import { BannerSlogans } from "@/components/banner-slogans";
import { PetitionNotice } from "@/components/petition-notice";

export default function HomePage() {
  return (
    <>
      {/* ---------------- 히어로 ---------------- */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 85% 0%, var(--brand-soft) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, var(--teal-soft) 0%, transparent 55%)",
          }}
        />
        <Container className="relative py-16 sm:py-24">
          <div className="rise max-w-3xl">
            <Badge tone="brand">5호선 김포경찰서역 신설 · 시민 데이터 플랫폼</Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-6xl">
              {VISION.headline}
              <br />
              <span className="text-brand">{VISION.sub}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {VISION.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/analysis">데이터 근거 보기 →</ButtonLink>
              <ButtonLink href="/route-map" variant="ghost">
                노선도 보기
              </ButtonLink>
            </div>
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-good" /> 정치적 중립
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" /> 공공데이터 기반
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> 원자료 공개
              </span>
            </p>
          </div>
        </Container>
      </section>

      {/* ---------------- 민원 공지 (접속 직후 바로 참여) ---------------- */}
      <PetitionNotice />

      {/* ---------------- 요구 · 슬로건 (현수막 스타일) ---------------- */}
      <BannerSlogans />

      {/* ---------------- 오늘의 데이터 ---------------- */}
      <Section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionTitle desc="김포경찰서역이 필요한 이유를 숫자로. 매일 갱신을 목표로 합니다.">
            오늘의 데이터
          </SectionTitle>
          <span className="hidden shrink-0 text-xs text-ink-muted sm:block">
            {TODAY.asOf} 기준
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {TODAY.stats.map((s) => (
            <StatCard
              key={s.key}
              label={s.label}
              value={s.value}
              unit={s.unit}
              sub={s.sub}
              tone={s.tone}
            />
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-muted">※ {DATA_NOTE}</p>
      </Section>

      {/* ---------------- 핵심 철학 ---------------- */}
      <Section className="bg-surface">
        <SectionTitle desc="우리가 지키는 네 가지 원칙">
          무엇을 말하고, 무엇을 말하지 않는가
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PHILOSOPHY.map((p) => (
            <Card key={p.title}>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <PhilosophyIcon name={p.icon} />
              </div>
              <h3 className="font-bold text-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------------- 데이터 하이라이트 ---------------- */}
      <Section>
        <SectionTitle desc="검증된 지표를 미리 봅니다. 자세한 분석은 각 섹션에서.">
          데이터가 말하는 것
        </SectionTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h3 className="font-bold text-ink">본선은 확정, 장기동엔 무정차 3.5km</h3>
            <p className="mt-1 mb-4 text-sm text-ink-soft">
              김포 교통 핵심 지표
            </p>
            <div className="grid grid-cols-3 gap-3">
              {POP_FACTS.map((p) => (
                <div key={p.label} className="rounded-xl bg-surface-2 p-3">
                  <p className="text-xs font-semibold text-ink-soft">{p.label}</p>
                  <p className="tabular mt-1 text-xl font-extrabold text-brand">
                    {p.value}
                    <span className="text-xs text-ink-muted"> {p.unit}</span>
                  </p>
                  <p className="mt-0.5 text-[0.65rem] text-ink-muted">{p.sub}</p>
                </div>
              ))}
            </div>
            <SourceTag source={POP_SOURCE.source} date={POP_SOURCE.asOf} />
            <Link
              href="/analysis"
              className="mt-3 inline-block text-sm font-bold text-brand hover:underline"
            >
              인구·분석 자세히 →
            </Link>
          </Card>
          <Card>
            <h3 className="font-bold text-ink">연장되면 얼마나 빨라지나</h3>
            <p className="mt-1 mb-5 text-sm text-ink-soft">{COMMUTE_CLAIM.label}</p>
            <div className="space-y-4">
              <BeforeAfterBar label="현재" value={COMMUTE_CLAIM.now} max={COMMUTE_CLAIM.now} color="var(--signal)" />
              <BeforeAfterBar label="개통 시" value={COMMUTE_CLAIM.after} max={COMMUTE_CLAIM.now} color="var(--good)" />
            </div>
            <SourceTag source={COMMUTE_CLAIM.source} />
            <Link
              href="/transit"
              className="mt-3 inline-block text-sm font-bold text-brand hover:underline"
            >
              교통 데이터 자세히 →
            </Link>
          </Card>
        </div>
      </Section>

      {/* ---------------- 공약 추적기 ---------------- */}
      <Section className="bg-surface">
        <div className="mb-6 flex items-end justify-between gap-4">
          <SectionTitle desc="김포경찰서역 관련 공약·발언과 이행 상태를 중립적으로 기록합니다.">
            공약 추적기
          </SectionTitle>
          <Link
            href="/progress#promises"
            className="hidden shrink-0 text-sm font-bold text-brand hover:underline sm:block"
          >
            전체 보기 →
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1fr_330px] lg:items-start">
          <Card className="p-0">
            <ul className="divide-y divide-border">
              {PROMISES.map((p) => (
                <li key={p.who + p.what} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-ink">{p.who}</span>
                      <StageBadge stage={p.status} />
                    </div>
                    <p className="mt-0.5 text-sm text-ink-soft">{p.what}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* 대통령 김포 공약 (제21대 대선) */}
          <figure className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pledge-president-gimpo.jpg"
              alt="이재명 제21대 대통령선거 김포 공약 — 공약 1: 서울 5호선·인천 2호선 김포 연장, 풍무·김포경찰서·김포북부(통진) 역사 신설 지원"
              width={600}
              height={1206}
              className="h-auto w-full"
              loading="lazy"
            />
            <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-ink-muted">
              <span className="font-bold text-ink">이재명 대통령 김포 공약</span> (제21대 대선) — 공약 ①에{" "}
              <strong className="text-brand">5호선 김포연장·김포경찰서 역사 신설 지원</strong>이 명시돼 있습니다. 공개 공약을 사실로 기록합니다.
            </figcaption>
          </figure>
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          ※ 특정 정당·후보를 지지·반대하지 않으며, 공개된 계획·발언만을 사실로 기록합니다. 정부(본선 추진)와 추가역(김포시·지역 정치권 건의)을 구분합니다.
        </p>
        <Link
          href="/progress#promises"
          className="mt-3 inline-block text-sm font-bold text-brand hover:underline sm:hidden"
        >
          전체 보기 →
        </Link>
      </Section>

      {/* ---------------- 기능 그리드 ---------------- */}
      <Section>
        <SectionTitle desc="데이터를 정책으로 잇는 도구들">플랫폼이 하는 일</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group rounded-[var(--radius-card)] border border-border bg-surface p-6 transition-all hover:border-brand hover:shadow-sm"
            >
              <h3 className="font-bold text-ink group-hover:text-brand">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.body}</p>
              <span className="mt-3 inline-block text-sm font-bold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                바로가기 →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ---------------- 촉구 CTA ---------------- */}
      <Section>
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-brand text-white">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white/70">
                기본계획 반영 촉구
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                본선은 확정됐다. 이제 김포경찰서역이다.
              </h2>
              <p className="mt-3 max-w-lg text-white/85">
                감정~장기 3.5km 무정차 구간, 그 중간에 김포경찰서역을 신설해야
                장기동 주민의 이동권이 보장됩니다. 반영 여부는 <strong>2026년 하반기
                경기도 기본계획 용역</strong>에서 갈립니다. 그 전에 의견이 닿아야 합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink
                  href="/action"
                  className="!bg-white !text-brand hover:!bg-white/90"
                >
                  민원 참여하기 →
                </ButtonLink>
                <ButtonLink
                  href="/progress"
                  variant="ghost"
                  className="!border-white/40 !text-white hover:!bg-white/10"
                >
                  진행현황 보기
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <div className="flex items-baseline justify-between">
                <span className="tabular text-4xl font-extrabold">3.5</span>
                <span className="text-white/70">km 무정차</span>
              </div>
              <p className="mt-1 text-sm text-white/80">감정역 ~ 장기역</p>
              <div className="mt-4 border-t border-white/20 pt-4">
                <div className="flex items-baseline justify-between">
                  <span className="tabular text-4xl font-extrabold">9</span>
                  <span className="text-white/70">개역 확정</span>
                </div>
                <p className="mt-1 text-sm text-white/80">예타 통과 · 김포경찰서역은 미포함</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------- 중립 성명 ---------------- */}
      <Section className="pt-0">
        <Callout title="정치적 중립 원칙" tone="good">
          이 플랫폼은 특정 정당·후보·이해관계와 무관한 시민 자율 플랫폼입니다. 우리는
          성과를 다투지 않고, 주민의 이동권이라는 사실만을 다룹니다. 모든 지표는
          출처와 기준시점을 밝히며 원자료를{" "}
          <Link href="/resources" className="font-bold underline">
            자료실
          </Link>
          에서 공개합니다.
        </Callout>
      </Section>
    </>
  );
}

function BeforeAfterBar({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) {
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

function PhilosophyIcon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "data":
      return (
        <svg {...common}>
          <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
        </svg>
      );
    case "welfare":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
        </svg>
      );
    case "neutral":
      return (
        <svg {...common}>
          <path d="M12 3v18M5 8h14M6 8l-3 6a3 3 0 0 0 6 0zM18 8l-3 6a3 3 0 0 0 6 0z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 3l9 4-9 4-9-4 9-4zM3 12l9 4 9-4M3 17l9 4 9-4" />
        </svg>
      );
  }
}
