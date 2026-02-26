import Link from "next/link";
import type { Metadata } from "next";
import { treatments } from "@/data/treatments";

export const metadata: Metadata = {
  title: "진료 안내",
  description:
    "미소플러스치과의원의 진료과목을 안내합니다. 임플란트, 치아교정, 심미치료, 충치치료, 소아치과, 구강외과 전문.",
};

export default function TreatmentsPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-teal-dark overflow-hidden">
        <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-dark/65 via-teal-dark/45 to-teal-dark/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Treatments
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            진료 안내
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            각 분야 전문 의료진이 최신 장비와 기술로
            <br className="hidden sm:block" />
            환자분께 최적의 치료를 제공합니다
          </p>
        </div>
      </section>

      {/* 진료과목 카드 그리드 (퀵 네비게이션) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              진료 과목
            </h2>
            <p className="text-gray-500">
              원하시는 진료 과목을 선택하시면 상세 정보를 확인하실 수 있습니다
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {treatments.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-teal/30 hover:shadow-lg transition-all duration-300 bg-white text-center"
              >
                <div className="w-14 h-14 bg-sky-light rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 group-hover:bg-teal group-hover:scale-110 transition-all duration-300">
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">
                    {t.icon}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm group-hover:text-teal transition-colors">
                  {t.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1 leading-snug">
                  {t.shortDesc.length > 18
                    ? t.shortDesc.slice(0, 18) + "..."
                    : t.shortDesc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 진료과목 상세 섹션 */}
      {treatments.map((treatment, index) => (
        <section
          key={treatment.id}
          id={treatment.id}
          className={`py-20 lg:py-28 ${
            index % 2 === 0 ? "bg-warm" : "bg-white"
          } scroll-mt-24`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* 좌측: 기본 정보 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center text-3xl">
                    {treatment.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                      {treatment.name}
                    </h2>
                    <p className="text-teal font-medium text-sm mt-1">
                      {treatment.shortDesc}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {treatment.description}
                </p>

                {/* 이런 분께 권합니다 */}
                <div className="bg-sky-light rounded-2xl p-6 mb-8">
                  <h3 className="font-bold text-teal-dark mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
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
                    이런 분께 권합니다
                  </h3>
                  <ul className="space-y-2">
                    {treatment.targets.map((target, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <span className="text-teal mt-0.5 shrink-0">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA 버튼 */}
                <Link
                  href={`/contact?treatment=${encodeURIComponent(treatment.name)}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-bold rounded-xl hover:bg-teal-light transition-colors"
                >
                  이 진료 상담받기
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              {/* 우측: 치료 과정 + 주의사항 */}
              <div className="space-y-8">
                {/* 치료 과정 */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
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
                    치료 과정
                  </h3>
                  <div className="space-y-4">
                    {treatment.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-teal text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-700 text-sm font-medium">
                            {step}
                          </p>
                          {idx < treatment.process.length - 1 && (
                            <div className="w-0.5 h-4 bg-teal/20 ml-3 mt-2" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 주의사항 (의료법 필수) */}
                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                  <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2 text-sm">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    주의사항 안내
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    {treatment.caution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 면책 문구 */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400 text-xs space-y-2">
            <p>
              * 위 진료 안내는 일반적인 정보 제공 목적이며, 실제 치료는 환자의 구강 상태에 따라
              달라질 수 있습니다.
            </p>
            <p>
              * 모든 치과 시술은 부작용이 발생할 수 있으며, 개인에 따라 치료 결과가 다를 수
              있으므로 반드시 전문의 상담 후 진행하시기 바랍니다.
            </p>
            <p>
              * 치과 치료에 관한 광고는 의료법 제56조에 의거하여 작성되었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-dark to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            어떤 진료가 필요하신지 모르겠다면?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            부담 없는 무료 상담으로 시작해 보세요. 전문 의료진이 최적의 치료 계획을
            안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-teal-dark font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              무료 상담 예약하기
            </Link>
            <a
              href="tel:02-555-2080"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              전화 상담: 02-555-2080
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
