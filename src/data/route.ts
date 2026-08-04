/**
 * 노선도 데이터
 *
 * 본선(서울 5호선 김포·검단 연장, '김포한강선')은 2026년 3월 예비타당성조사를
 * 통과했습니다: 방화차량기지~김포한강2 공공택지지구 25.8km, 정거장 9개소,
 * 차량기지 1개소, 총사업비 3조5,587억원.
 *
 * '김포경찰서역'은 확정 9개 역에 포함되지 않은 추가 건의역으로, 감정역~장기역
 * 3.5km 무정차 구간의 중간역으로 필요성이 제기됩니다. 아래 개념도는 지리 좌표가
 * 아닌 개념도이며, 일부 중간역은 생략·가칭입니다. 정확한 선형·역 위치·역명은
 * 경기도 주관 기본계획에서 확정됩니다.
 */

export type StationKind = "confirmed" | "extension";

export type Station = {
  id: string;
  name: string;
  kind: StationKind;
  transfer?: string[];
  note?: string;
};

export const LINE = {
  name: "5호선 김포·검단 연장",
  color: "var(--brand)",
  extensionColor: "var(--teal)",
  /**
   * 확정: 방화 기점 → 인천 검단 경유 → 고촌·풍무·감정·장기 → 한강2지구(9개역, U자형)
   * 촉구: 감정~장기 사이 김포경찰서역 신설
   * 개념도이므로 대표 역만 표기하고 일부 중간역은 생략했습니다.
   */
  stations: [
    { id: "s-banghwa", name: "방화", kind: "confirmed", transfer: ["5호선"], note: "서울 기점" },
    { id: "s-geomdan", name: "검단신도시", kind: "confirmed", note: "인천 서구 · 2개역" },
    { id: "s-gochon", name: "고촌", kind: "confirmed", note: "김포 진입" },
    { id: "s-pungmu", name: "풍무", kind: "confirmed", note: "가칭" },
    { id: "s-gamjeong", name: "감정", kind: "confirmed", note: "감정동" },
    { id: "e-police", name: "김포경찰서", kind: "extension", note: "신설 촉구 · 장기동 인근" },
    { id: "s-janggi", name: "장기", kind: "confirmed", note: "한강신도시" },
    { id: "s-hangang2", name: "한강2지구", kind: "confirmed", note: "종점" },
  ] as Station[],
  source: "KDI 예비타당성조사보고서(2026.5) · 기획예산처 재정사업평가위(예타) · 김포시 인수위 활동백서(2026.7) · 경기일보/전기신문 보도 종합",
  asOf: "2026-08",
};

/** 노선 핵심 팩트 (출처 있는 실제 정보) */
export const LINE_FACTS = [
  { label: "본선 연장", value: "25.8", unit: "km", tone: "brand" as const, sub: "방화~한강2지구" },
  { label: "확정 정거장", value: "9", unit: "개소", tone: "teal" as const, sub: "예타 통과 · +차량기지1" },
  { label: "총사업비", value: "3조5,587", unit: "억원", tone: "brand" as const, sub: "예타 통과 기준" },
  { label: "개통 목표", value: "2033", unit: "년", tone: "good" as const, sub: "빠르면 7년 내" },
];

/**
 * 예비타당성조사 결과 (KDI 예타보고서 2026.5.30 · 2026.3 재정사업평가위 의결)
 * B/C가 1에 못 미쳤음에도 정책적 필요를 인정받아 통과한 사업이라는 점이
 * 김포경찰서역 신설 논거의 핵심입니다.
 */
export const PRE_FEASIBILITY = {
  bc: { value: "0.65", label: "B/C (경제성)", note: "기준 1.0 미달" },
  ahp: { value: "0.551", label: "AHP (종합평가)", note: "기준 0.5 초과 · 통과" },
  passedAt: "2026.3",
  body: "기획예산처 재정사업평가위원회",
  reason:
    "경제성(B/C 0.65)은 기준에 미치지 못했지만, 김포골드라인 혼잡 완화와 지역 주민의 이동권이라는 정책적 필요를 인정받아 종합평가(AHP 0.551)로 통과했습니다. 즉 이 사업은 경제성만이 아니라 정책적 타당성으로 통과한 사업이며, 김포경찰서역 신설도 같은 기준으로 판단되어야 합니다.",
  source: "KDI 예비타당성조사보고서(2026.5.30) · 기획예산처 재정사업평가위 의결 보도",
  asOf: "2026-05",
};

/**
 * 김포시 인수위 활동백서(2026.7) p.97 기재 사항.
 * 예타 보도의 '정거장 9개소'와 달리 백서는 '10개소[김포7(장래1 포함), 인천2, 서울1]'로 적고 있습니다.
 * ⚠️ 장래역이 어느 역인지는 백서에 명시돼 있지 않으므로 김포경찰서역이라고 단정하지 않습니다.
 * ⚠️ 백서의 총사업비(37,511억원)는 같은 백서 p.101의 다른 사업과 동일하게 적혀 있어
 *    기재 오류로 보입니다. 따라서 이 사이트는 보도 기준 3조5,587억원을 유지합니다.
 */
export const FUTURE_STATION = {
  headline: "계획에 이미 '장래역' 1개소가 잡혀 있습니다",
  value: "10",
  unit: "개소",
  detail: "김포 7(장래 1 포함) · 인천 2 · 서울 1",
  body: "김포시 인수위 활동백서는 이 사업의 정거장을 '10개소[김포7(장래1포함), 인천2, 서울1]'로 기재하고 있습니다. 예타 통과 보도에서 확정 정거장이 9개소로 알려진 것과 비교하면, 계획 문서상 장래역 1개소의 자리가 남아 있다는 뜻입니다. 다만 그 장래역이 어느 역인지는 백서에 명시돼 있지 않으며, 기본계획에서 결정됩니다.",
  source: "김포시 「민선9기 김포시장직 인수위원회 활동백서」 인쇄 p.97",
  asOf: "2026-07",
};

/** 김포경찰서역 신설 근거 — 검증된 실데이터 */
export const CATCHMENT = [
  { label: "감정~장기 역간거리", value: "3.5", note: "km · 무정차", tone: "signal" as const },
  { label: "김포시 인구", value: "약 50만", note: "명(2026.5)", tone: "brand" as const },
];

export const KIND_META: Record<StationKind, { label: string; color: string }> = {
  confirmed: { label: "확정 정거장 (예타 통과)", color: "var(--brand)" },
  extension: { label: "신설 촉구 (김포경찰서역)", color: "var(--teal)" },
};
