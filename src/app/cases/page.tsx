"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { cases, categories, resultColors } from "@/data/cases";

function CasesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category") || "전체";

  const filteredCases =
    currentCategory === "전체"
      ? cases
      : cases.filter((c) => c.category === currentCategory);

  const handleCategoryChange = (category: string) => {
    if (category === "전체") {
      router.push("/cases");
    } else {
      router.push(`/cases?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <>
      {/* 히어로 */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal-light pt-32 pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Cases
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            치료 사례
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            미소플러스치과의원의 다양한 치료 사례를 확인해 보세요
          </p>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  currentCategory === category
                    ? "bg-teal text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 사례 카드 그리드 */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                해당 카테고리의 사례가 없습니다.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <Link
                  key={caseItem.id}
                  href={`/cases/${caseItem.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-all duration-300 overflow-hidden p-6">
                    {/* 카테고리 + 결과 배지 */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs px-2.5 py-1 bg-teal/10 text-teal rounded-full font-medium">
                        {caseItem.category}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          resultColors[caseItem.result] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {caseItem.result}
                      </span>
                      <span className="ml-auto text-xs text-gray-400">{caseItem.year}년</span>
                    </div>

                    {/* 제목 */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors">
                      {caseItem.title}
                    </h3>

                    {/* 요약 */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                      {caseItem.summary}
                    </p>

                    {/* 하단: 담당의 + 자세히 보기 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-gray-500 text-sm">
                        {caseItem.dentist} {caseItem.dentistRole}
                      </span>
                      <span className="text-teal text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        자세히 보기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 면책 문구 */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-warm rounded-2xl p-8 border border-gray-100">
            <svg
              className="w-8 h-8 text-gray-300 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-gray-500 text-sm leading-relaxed">
              개인에 따라 치료 결과가 다를 수 있으며, 부작용이 발생할 수
              있습니다.
              <br className="hidden sm:block" />
              모든 치료는 전문 의료진과의 상담 후 결정하시기 바랍니다.
            </p>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-dark to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            나에게 맞는 치료가 궁금하신가요?
          </h2>
          <p className="text-white/70 mb-8">
            전문 의료진이 직접 상담하여 최적의 치료 방법을 안내해 드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-teal-dark font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
          >
            무료 상담 예약하기
          </Link>
        </div>
      </section>
    </>
  );
}

export default function CasesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gray-400">로딩 중...</div>
        </div>
      }
    >
      <CasesContent />
    </Suspense>
  );
}
