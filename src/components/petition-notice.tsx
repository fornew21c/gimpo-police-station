import Link from "next/link";
import { Container } from "./ui";
import { CopyBlock } from "./copy-block";
import {
  EPEOPLE,
  NOTICE,
  PETITION_BODY,
  PETITION_TITLE,
} from "@/data/action";

/**
 * 홈 상단 공지 블록 — 접속 직후 바로 민원 문안을 보고 참여할 수 있게 합니다.
 * 데이터 영역(차분한 톤)과 구분되도록 브랜드 틴트 배경을 씁니다.
 */
export function PetitionNotice() {
  return (
    <section
      id="petition"
      className="border-b border-border bg-brand-soft"
      aria-labelledby="petition-heading"
    >
      <Container className="py-12 sm:py-14">
        {/* 머리말 */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            {NOTICE.badge}
          </span>
          <span className="text-xs font-semibold text-brand-strong">
            {NOTICE.deadline}
          </span>
        </div>

        <h2
          id="petition-heading"
          className="mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
        >
          {NOTICE.headline}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
          {NOTICE.lead}
        </p>

        {/* 본문: 문안 + 참여 패널 */}
        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_310px] lg:items-start">
          <div className="grid gap-3">
            <CopyBlock label="민원 제목" text={PETITION_TITLE} rows="short" />
            <CopyBlock label="민원 내용" text={PETITION_BODY} />
          </div>

          <div className="grid gap-3 lg:sticky lg:top-24">
            {/* 참여 버튼 */}
            <div className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
              <p className="text-sm font-bold text-ink">국민신문고 바로가기</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                처리기관을 <strong className="text-brand">경기도</strong>로 지정하고 위 문안을
                붙여넣으세요.
              </p>
              <a
                href={EPEOPLE.web}
                target="_blank"
                rel="noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-strong"
              >
                민원 넣기 ↗
              </a>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href={EPEOPLE.android}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-border-strong px-3 py-2 text-center text-xs font-bold text-ink transition-colors hover:bg-surface-2"
                >
                  Android 앱
                </a>
                <a
                  href={EPEOPLE.ios}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-border-strong px-3 py-2 text-center text-xs font-bold text-ink transition-colors hover:bg-surface-2"
                >
                  iOS 앱
                </a>
              </div>
              <Link
                href="/action"
                className="mt-3 block text-center text-xs font-bold text-brand hover:underline"
              >
                기관별 우선순위·상세 가이드 →
              </Link>
            </div>

            {/* 3줄 요약 */}
            <ul className="grid gap-2">
              {NOTICE.steps.map((s) => (
                <li
                  key={s.label}
                  className="rounded-xl border border-border bg-surface/70 px-4 py-3"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-xs font-semibold text-ink-muted">{s.label}</span>
                    <span className="text-sm font-extrabold text-brand">{s.value}</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-ink-muted">
          ※ 문안에 인용된 사실은 모두{" "}
          <Link href="/resources" className="font-bold text-brand hover:underline">
            자료실
          </Link>
          에 출처와 함께 공개돼 있습니다. 그대로 쓰셔도 되지만, 각자의 언어로 이동 사정을
          적어 보내는 편이 언제나 더 낫습니다.
        </p>
      </Container>
    </section>
  );
}
