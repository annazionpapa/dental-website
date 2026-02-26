"use client";

import { usePathname } from "next/navigation";

export default function MobileBottomCTA() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 h-16">
        <a
          href="tel:02-555-2080"
          className="flex flex-col items-center justify-center gap-0.5 text-teal active:bg-gray-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xs font-medium">전화예약</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center justify-center gap-0.5 text-teal border-x border-gray-200 active:bg-gray-50"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-5.2 0-9.4 3.3-9.4 7.4 0 2.6 1.7 4.9 4.3 6.2l-1.1 4 4.6-3c.5.1 1 .1 1.6.1 5.2 0 9.4-3.3 9.4-7.4S17.2 3 12 3z" />
          </svg>
          <span className="text-xs font-medium">카카오상담</span>
        </a>
        <a
          href="/contact"
          className="flex flex-col items-center justify-center gap-0.5 bg-teal text-white active:bg-teal-light"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-medium">온라인예약</span>
        </a>
      </div>
    </div>
  );
}
