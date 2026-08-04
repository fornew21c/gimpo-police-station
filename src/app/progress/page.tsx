import type { Metadata } from "next";
import Link from "next/link";
import { Section, Card, PageHeader, SectionTitle, Badge, Callout, ButtonLink } from "@/components/ui";
import { StageBadge } from "@/components/stage-badge";
import { STAGES, TIMELINE, PROMISES, PROMISES_NOTE, BAEKSEO } from "@/data/civic";

export const metadata: Metadata = {
  title: "진행현황",
  description: "5호선 김포·검단 연장 예타 통과와 김포경찰서역 신설 추진 단계, 정책 타임라인, 공약 이행 추적.",
};

export default function ProgressPage() {
  const doneCount = STAGES.filter((s) => s.stage === "완료").length;

  return (
    <>
      <PageHeader
        eyebrow="진행현황"
        title="지금 어디까지 왔나"
        lead="필요성 제기부터 계획 반영까지, 추진 단계를 투명하게 추적합니다. 성과가 아니라 사실을 기록합니다."
      />

      {/* 추진 단계 */}
      <Section>
        <SectionTitle desc={`전체 ${STAGES.length}단계 중 ${doneCount}단계 완료`}>
          추진 단계
        </SectionTitle>
        <div className="grid gap-3">
          {STAGES.map((s, i) => (
            <Card key={s.name} className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-sm font-extrabold text-ink-soft">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-ink">{s.name}</h3>
                  <StageBadge stage={s.stage} />
                </div>
                <p className="mt-1 text-sm text-ink-soft">{s.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 백서 원문 근거 */}
      <Section className="bg-surface pt-0" id="baekseo">
        <SectionTitle desc="주장이 아니라 김포시가 스스로 발간한 공식 문서의 지면입니다. 원문 그대로 싣습니다.">
          김포시 공식 문서에 적힌 김포경찰서역
        </SectionTitle>

        <Callout title="이 두 쪽이 말하는 것" tone="brand">
          첫째, <strong>김포경찰서역이 민선9기 공약으로 명문화</strong>돼 있습니다. 둘째,{" "}
          <strong>이 사업의 사업주체와 기본계획 주관은 경기도</strong>이며 김포시는 협조 기관입니다.
          셋째, 김포시는 추가 역사의 근거를{" "}
          <strong>&ldquo;경제적 타당성(B/C) 외의 정책적 타당성 자료&rdquo;</strong>로 확보하겠다고
          적었습니다. 이 플랫폼이 모으는 데이터가 정확히 그 자료입니다.
        </Callout>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {BAEKSEO.images.map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                width={1111}
                height={1506}
                className="h-auto w-full"
                loading="lazy"
              />
              <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-ink-muted">
                <span className="font-bold text-ink">{BAEKSEO.title} {img.page}</span> — {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 grid gap-3">
          {BAEKSEO.quotes.map((q) => (
            <Card key={q.label + q.text} className="border-l-4 border-l-brand">
              <p className="text-xs font-bold uppercase tracking-wider text-brand">{q.label}</p>
              <blockquote className="mt-2 text-sm leading-relaxed text-ink">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <p className="mt-2 text-xs text-ink-muted">{q.note}</p>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={BAEKSEO.pageUrl}>백서 원문 페이지 ↗</ButtonLink>
          <ButtonLink href={BAEKSEO.pdfUrl} variant="ghost">
            PDF 내려받기 (약 15MB) ↗
          </ButtonLink>
        </div>
        <p className="mt-4 text-xs text-ink-muted">
          출처: {BAEKSEO.org} 「{BAEKSEO.title}」 {BAEKSEO.pages} · {BAEKSEO.publishedAt} 발간 ·
          해당 지면은 원문 PDF에서 그대로 추출했습니다.
        </p>
      </Section>

      {/* 정책 타임라인 */}
      <Section id="timeline">
        <SectionTitle desc="최근 활동과 발표를 시간순으로">정책 타임라인</SectionTitle>
        <ol className="relative ml-3 border-l-2 border-border">
          {TIMELINE.map((t) => (
            <li key={t.date + t.title} className="mb-8 ml-6 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-surface bg-brand" />
              <div className="flex flex-wrap items-center gap-2">
                <time className="tabular text-sm font-bold text-brand">{t.date}</time>
                <Badge tone="neutral">{t.tag}</Badge>
              </div>
              <h3 className="mt-1 font-bold text-ink">{t.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 공약 추적기 */}
      <Section className="bg-surface" id="promises">
        <SectionTitle desc="김포경찰서역 관련 공약·발언과 이행 상태를 중립적으로 기록합니다.">
          공약 추적기
        </SectionTitle>
        <Card className="p-0">
          <div className="scroll-x">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border text-ink-muted">
                  <th className="px-5 py-3 font-semibold">주체</th>
                  <th className="px-5 py-3 font-semibold">내용</th>
                  <th className="px-5 py-3 font-semibold">상태</th>
                  <th className="px-5 py-3 font-semibold">비고</th>
                </tr>
              </thead>
              <tbody>
                {PROMISES.map((p) => (
                  <tr key={p.what} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-semibold text-ink">{p.who}</td>
                    <td className="px-5 py-4 text-ink-soft">{p.what}</td>
                    <td className="px-5 py-4">
                      <StageBadge stage={p.status} />
                    </td>
                    <td className="px-5 py-4 text-ink-muted">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <p className="mt-4 text-xs text-ink-muted">
          ※ 특정 정당·후보를 지지·반대하지 않으며, 공개된 계획·발언만을 사실로 기록합니다. {PROMISES_NOTE}
        </p>
      </Section>

      {/* 다음 단계 안내 */}
      <Section>
        <Card className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-ink">다음 결정은 경기도 기본계획입니다</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
              2026년 하반기 용역 발주 전에 의견이 접수돼야 검토 대상에 들어갑니다.
              민원 넣는 법을 5분 분량으로 정리해뒀습니다.
            </p>
          </div>
          <Link
            href="/action"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-strong"
          >
            민원 참여하기 →
          </Link>
        </Card>
      </Section>
    </>
  );
}
