"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import { BrandLockup } from "./brand";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandLockup />

        {/* 데스크톱 내비 */}
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="주요 메뉴">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "text-brand"
                    : "text-ink-soft hover:text-ink hover:bg-surface-2"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 모바일·태블릿 탭바 (가로 스크롤) */}
      <nav
        className="border-t border-border lg:hidden"
        aria-label="주요 메뉴"
      >
        <ul className="scroll-x mx-auto flex max-w-6xl gap-1 px-2">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative flex whitespace-nowrap px-3 py-3 text-sm font-semibold transition-colors ${
                    active ? "text-brand" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
