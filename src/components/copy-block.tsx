"use client";

import { useState } from "react";

/**
 * 복사 가능한 텍스트 블록 — 민원 제목·본문을 그대로 가져가 쓸 수 있게 합니다.
 * 클립보드 API를 쓸 수 없는 환경에서는 직접 선택해 복사하도록 안내합니다.
 */
export function CopyBlock({
  label,
  text,
  rows = "long",
}: {
  label: string;
  text: string;
  rows?: "short" | "long";
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2500);
  }

  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="text-xs font-bold text-ink-soft">{label}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-brand-strong"
        >
          {state === "copied" ? (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              복사됨
            </>
          ) : state === "failed" ? (
            "직접 선택해 복사"
          ) : (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="9" y="9" width="12" height="12" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
              복사
            </>
          )}
        </button>
      </div>
      {/* 한글 가독성을 위해 monospace 기본값 대신 본문 서체를 씁니다 */}
      <pre
        className={`overflow-auto whitespace-pre-wrap break-words px-4 py-4 font-sans text-sm leading-relaxed text-ink-soft ${
          rows === "long" ? "max-h-96" : ""
        }`}
      >
        {text}
      </pre>
      {rows === "long" && (
        <p className="border-t border-border bg-surface-2 px-4 py-2 text-xs text-ink-muted">
          ↕ 위 상자 안에서 스크롤하면 전문을 볼 수 있습니다. 복사 버튼은 전문을 모두 복사합니다.
        </p>
      )}
    </div>
  );
}
