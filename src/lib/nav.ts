export type NavItem = {
  href: string;
  label: string;
  desc: string;
};

/** 전역 메뉴 — 헤더/푸터/사이트맵 공용 */
export const NAV: NavItem[] = [
  { href: "/", label: "홈", desc: "오늘의 데이터와 핵심 요약" },
  { href: "/action", label: "민원 참여", desc: "어디에 · 무엇을 · 어떻게 넣는가" },
  { href: "/progress", label: "진행현황", desc: "정책 타임라인과 추진 단계" },
  { href: "/route-map", label: "노선도", desc: "확정 노선과 김포경찰서역 위치" },
  { href: "/transit", label: "교통 데이터", desc: "혼잡도·배차·철도 접근성" },
  { href: "/analysis", label: "데이터 분석", desc: "인구·경제효과·통행시간 절감" },
  { href: "/news", label: "뉴스", desc: "관련 보도와 발표 모음" },
  { href: "/resources", label: "자료실", desc: "원본 데이터·보고서 다운로드" },
];

/** 홈(/)을 제외한 주요 섹션 */
export const SECTIONS = NAV.filter((n) => n.href !== "/");
