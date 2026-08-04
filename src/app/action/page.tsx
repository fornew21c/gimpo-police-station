import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  Card,
  PageHeader,
  SectionTitle,
  Badge,
  Callout,
  ButtonLink,
  SourceTag,
} from "@/components/ui";
import { CopyBlock } from "@/components/copy-block";
import {
  AGENCIES,
  EPEOPLE,
  HOW_TO,
  PETITION_BODY,
  PETITION_TIPS,
  PETITION_TITLE,
} from "@/data/action";
import { BAEKSEO } from "@/data/civic";
import { PRE_FEASIBILITY } from "@/data/route";

export const metadata: Metadata = {
  title: "민원 참여",
  description:
    "김포경찰서역을 경기도 기본계획에 반영시키기 위한 민원 가이드. 어느 기관에, 어떤 제목과 내용으로, 어떻게 넣는지 정리했습니다.",
};

const priorityTone = {
  최우선: "signal",
  중요: "brand",
  권장: "teal",
} as const;

export default function ActionPage() {
  return (
    <>
      <PageHeader
        eyebrow="민원 참여"
        title="데이터는 모았습니다. 이제 전달할 차례입니다."
        lead="김포경찰서역이 반영될지는 경기도가 주관하는 기본계획에서 결정됩니다. 그 과정에 주민 의견이 얼마나 접수됐는지가 '정책적 타당성'의 근거가 됩니다. 5분이면 됩니다."
      />

      {/* ---------------- 왜 지금인가 ---------------- */}
      <Section>
        <Callout title="왜 지금, 왜 경기도인가" tone="signal">
          김포시 인수위 활동백서는 <strong>2026년 하반기에 경기도가 기본계획 수립 용역을 발주할 예정</strong>이라고
          적고 있습니다. 용역 과업이 정해지고 나면 추가역을 끼워 넣기는 훨씬 어려워집니다.
          같은 백서는 추가 역사 신설을{" "}
          <strong>&ldquo;경제적 타당성(B/C) 외의 정책적 타당성 자료로 적극 활용&rdquo;</strong>하라고 당부합니다.
          주민 민원은 그 정책적 타당성을 구성하는 가장 직접적인 자료입니다.
        </Callout>
      </Section>

      {/* ---------------- 어디에 넣는가 ---------------- */}
      <Section className="pt-0" id="where">
        <SectionTitle desc="세 기관 모두에 넣되, 경기도가 가장 중요합니다. 기본계획을 주관하는 곳이 경기도이기 때문입니다.">
          어디에 넣는가
        </SectionTitle>
        <div className="grid gap-4">
          {AGENCIES.map((a) => (
            <Card key={a.id}>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={priorityTone[a.priority]}>{a.priority}</Badge>
                <h3 className="text-lg font-extrabold text-ink">{a.name}</h3>
                <span className="text-sm text-ink-muted">{a.role}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.why}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {a.channels.map((c) => (
                  <li
                    key={c.href + c.label}
                    className="rounded-xl border border-border bg-surface-2/60 p-3"
                  >
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-brand hover:underline"
                    >
                      {c.label} ↗
                    </a>
                    {c.note && (
                      <p className="mt-1 text-xs leading-relaxed text-ink-muted">{c.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------------- 어떻게 넣는가 ---------------- */}
      <Section className="bg-surface" id="how">
        <SectionTitle desc="국민신문고 하나로 세 기관 모두에 접수할 수 있습니다.">
          어떻게 넣는가
        </SectionTitle>
        <div className="grid gap-5 lg:grid-cols-[1fr_320px] lg:items-start">
          <ol className="grid gap-3">
            {HOW_TO.map((s) => (
              <li
                key={s.step}
                className="flex gap-4 rounded-[var(--radius-card)] border border-border bg-background p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                  {s.step}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Card>
            <h3 className="font-bold text-ink">국민신문고 바로가기</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{EPEOPLE.note}</p>
            <div className="mt-4 grid gap-2">
              <ButtonLink href={EPEOPLE.web}>웹으로 민원 넣기 ↗</ButtonLink>
              <ButtonLink href={EPEOPLE.ios} variant="ghost">
                iOS 앱 내려받기 ↗
              </ButtonLink>
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              안드로이드는 Play 스토어에서 &lsquo;국민신문고&rsquo;로 검색하세요. 전화 문의 {EPEOPLE.tel}
            </p>
          </Card>
        </div>
      </Section>

      {/* ---------------- 무엇을 쓰는가 ---------------- */}
      <Section id="what">
        <SectionTitle desc="아래를 복사해 쓰되, '2. 신청인' 항목만은 본인의 이동 사정을 직접 적어주세요.">
          무엇을 쓰는가
        </SectionTitle>
        <div className="grid gap-4">
          <CopyBlock label="민원 제목" text={PETITION_TITLE} rows="short" />
          <CopyBlock label="민원 내용" text={PETITION_BODY} />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-muted">
          ※ 본문에 인용된 사실(역간거리 4.2km, 골드라인 혼잡률 289%, B/C {PRE_FEASIBILITY.bc.value} · AHP{" "}
          {PRE_FEASIBILITY.ahp.value}, 백서 문구)은 모두 이 사이트{" "}
          <Link href="/resources" className="font-bold text-brand hover:underline">
            자료실
          </Link>
          에 출처와 함께 공개돼 있습니다.
        </p>
      </Section>

      {/* ---------------- 지켜야 할 원칙 ---------------- */}
      <Section className="bg-surface pt-0">
        <SectionTitle desc="민원의 힘은 숫자가 아니라 진정성에서 나옵니다">작성 시 유의할 점</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {PETITION_TIPS.map((t) => (
            <Card key={t.title}>
              <h3 className="font-bold text-ink">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ---------------- 근거 문서 ---------------- */}
      <Section id="evidence">
        <SectionTitle desc="민원에 인용한 내용은 모두 공개된 공식 문서에서 나옵니다">
          민원의 근거
        </SectionTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <Badge tone="brand">공문서</Badge>
            <h3 className="mt-3 font-bold text-ink">{BAEKSEO.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              {BAEKSEO.org} · {BAEKSEO.publishedAt} · 김포경찰서역 부분은 {BAEKSEO.pages}
            </p>
            <div className="mt-4 space-y-3">
              {BAEKSEO.quotes.slice(1, 3).map((q) => (
                <blockquote
                  key={q.text}
                  className="border-l-2 border-brand pl-3 text-sm leading-relaxed text-ink-soft"
                >
                  &ldquo;{q.text}&rdquo;
                  <footer className="mt-1 text-xs text-ink-muted">— {q.label}</footer>
                </blockquote>
              ))}
            </div>
            <Link
              href="/progress#baekseo"
              className="mt-4 inline-block text-sm font-bold text-brand hover:underline"
            >
              백서 원문 지면 보기 →
            </Link>
          </Card>

          <Card>
            <Badge tone="teal">보고서</Badge>
            <h3 className="mt-3 font-bold text-ink">예비타당성조사 결과</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[PRE_FEASIBILITY.bc, PRE_FEASIBILITY.ahp].map((m) => (
                <div key={m.label} className="rounded-xl bg-surface-2 p-3">
                  <p className="text-xs font-semibold text-ink-soft">{m.label}</p>
                  <p className="tabular mt-1 text-2xl font-extrabold text-brand">{m.value}</p>
                  <p className="mt-0.5 text-[0.65rem] text-ink-muted">{m.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{PRE_FEASIBILITY.reason}</p>
            <SourceTag source={PRE_FEASIBILITY.source} date={PRE_FEASIBILITY.asOf} />
          </Card>
        </div>
      </Section>

      {/* ---------------- 중립 고지 ---------------- */}
      <Section className="pt-0">
        <Callout title="이 페이지에 대하여" tone="good">
          이 플랫폼은 특정 정당·후보·이해관계와 무관한 시민 자율 플랫폼입니다. 위 민원 문안은
          공개된 공공데이터와 공문서만을 근거로 작성했으며, 누구를 비판하거나 지지하기 위한
          것이 아닙니다. 문안을 그대로 쓰실 필요도 없습니다. 각자의 언어로, 각자의 이동
          사정을 적어 보내는 편이 언제나 더 낫습니다.
        </Callout>
      </Section>
    </>
  );
}
