"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="bg-teal-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 병원 정보 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">미소플러스치과</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              20년 경력의 전문 의료진이<br />환자 한 분 한 분의 미소를 설계합니다.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center hover:bg-teal-light transition-colors" aria-label="블로그">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center hover:bg-teal-light transition-colors" aria-label="카카오톡">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-5.2 0-9.4 3.3-9.4 7.4 0 2.6 1.7 4.9 4.3 6.2l-1.1 4 4.6-3c.5.1 1 .1 1.6.1 5.2 0 9.4-3.3 9.4-7.4S17.2 3 12 3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center hover:bg-teal-light transition-colors" aria-label="인스타그램">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 진료과목 */}
          <div>
            <h3 className="text-accent font-semibold mb-6">진료과목</h3>
            <ul className="space-y-3">
              {["임플란트", "치아교정", "심미치료", "충치/보존치료", "소아치과", "구강외과"].map((item) => (
                <li key={item}>
                  <Link href="/treatments" className="text-gray-400 text-sm hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-accent font-semibold mb-6">바로가기</h3>
            <ul className="space-y-3">
              {[
                { label: "병원 소개", href: "/about" },
                { label: "의료진 소개", href: "/team" },
                { label: "치료 사례", href: "/cases" },
                { label: "예약/상담", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 text-sm hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-accent font-semibold mb-6">연락처</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 text-sm">서울특별시 강남구 강남대로 396<br />미소빌딩 3층</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:02-555-2080" className="text-gray-400 text-sm hover:text-white transition-colors">02-555-2080</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-gray-400 text-sm">
                  <p>평일 09:30 ~ 18:30</p>
                  <p>토요일 09:30 ~ 14:00</p>
                  <p>점심시간 13:00 ~ 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 법적 필수 기재사항 */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-gray-500 text-xs mb-4">
            <p>의료기관명: 미소플러스치과의원 | 대표자: 김민수 | 사업자등록번호: 123-45-67890</p>
            <p>소재지: 서울특별시 강남구 강남대로 396 미소빌딩 3층 | 대표전화: 02-555-2080</p>
            <p>진료과목: 치과 | 면허번호: 치과의사 제12345호 (김민수)</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">&copy; Since 2004 미소플러스치과의원. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">개인정보처리방침</Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">이용약관</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
