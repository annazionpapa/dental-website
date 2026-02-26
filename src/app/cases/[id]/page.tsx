import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, resultColors, categoryToPractice } from "@/data/cases";
import type { Metadata } from "next";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return cases.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const caseItem = cases.find((c) => c.id === id);
  if (!caseItem) {
    return { title: "사례를 찾을 수 없습니다" };
  }
  return {
    title: `${caseItem.title} - 치료 사례`,
    description: caseItem.summary,
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const caseItem = cases.find((c) => c.id === id);

  if (!caseItem) {
    notFound();
  }

  const relatedCases = cases
    .filter((c) => c.category === caseItem.category && c.id !== caseItem.id)
    .slice(0, 3);

  // 부족하면 다른 카테고리에서 추가
  if (relatedCases.length < 3) {
    const remaining = cases
      .filter(
        (c) =>
          c.id !== caseItem.id &&
          !relatedCases.some((rc) => rc.id === c.id)
      )
      .slice(0, 3 - relatedCases.length);
    relatedCases.push(...remaining);
  }

  const practice = categoryToPractice[caseItem.category] || caseItem.category;

  return (
    <>
      {/* 히어로 */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal-light pt-32 pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/cases"
            className="inline-flex items-center text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            치료 사례 목록
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-3 py-1 bg-white/20 text-white rounded-full font-medium">
              {caseItem.category}
            </span>
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                resultColors[caseItem.result] || "bg-gray-100 text-gray-600"
              }`}
            >
              {caseItem.result}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            {caseItem.title}
          </h1>
          <p className="text-white/70 text-lg">{caseItem.summary}</p>
        </div>
      </section>

      {/* 상세 내용 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* 환자 상태/배경 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  환자 상태 및 배경
                </h2>
              </div>
              <div className="bg-warm rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  {caseItem.background}
                </p>
              </div>
            </div>

            {/* 치료 과정 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">치료 과정</h2>
              </div>
              <div className="space-y-3">
                {caseItem.procedure.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-warm rounded-xl p-4 border border-gray-100"
                  >
                    <div className="w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 사용 재료 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">사용 재료</h2>
              </div>
              <div className="bg-sky-light rounded-2xl p-6 border border-sky/30">
                <p className="text-teal-dark font-medium">
                  {caseItem.materials}
                </p>
              </div>
            </div>

            {/* 치료 결과 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">치료 결과</h2>
              </div>
              <div className="bg-warm rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  {caseItem.outcome}
                </p>
              </div>
            </div>

            {/* 담당 의료진 */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  담당 의료진
                </h2>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      {caseItem.dentist} {caseItem.dentistRole}
                    </p>
                    <p className="text-teal text-sm">미소플러스치과의원</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 면책 문구 */}
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-xs leading-relaxed">
                * 개인에 따라 치료 결과가 다를 수 있으며, 부작용이 발생할 수
                있습니다. 치료 전 반드시 전문 의료진과 상담하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - 비슷한 고민 */}
      <section className="py-12 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-dark to-teal rounded-2xl p-8 lg:p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">
              비슷한 고민이 있으신가요?
            </h3>
            <p className="text-white/70 mb-6">
              전문 의료진이 직접 상담하여 환자분에게 최적의 치료 방법을 안내해
              드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={`/contact?treatment=${encodeURIComponent(practice)}`}
                className="px-8 py-3.5 bg-white text-teal-dark font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                {practice} 상담 예약하기
              </Link>
              <a
                href="tel:02-555-2080"
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                전화 상담: 02-555-2080
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 관련 사례 */}
      {relatedCases.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              관련 치료 사례
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCases.map((rc) => (
                <Link
                  key={rc.id}
                  href={`/cases/${rc.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-all duration-300 overflow-hidden p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-0.5 bg-teal/10 text-teal rounded-full">
                        {rc.category}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          resultColors[rc.result] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {rc.result}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal transition-colors">
                      {rc.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                      {rc.summary}
                    </p>
                    <span className="text-teal text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      자세히 보기
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
