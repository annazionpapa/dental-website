import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "병원 소개",
  description:
    "미소플러스치과의원은 2004년 개원 이래 환자 중심, 정직한 진료, 최소 침습 원칙을 지켜온 강남 대표 치과입니다.",
};

const history = [
  {
    year: "2004",
    title: "미소플러스치과의원 개원",
    desc: "강남역 인근에서 환자 중심 진료를 시작하다",
  },
  {
    year: "2008",
    title: "확장 이전",
    desc: "증가하는 환자 수요에 맞춰 현 위치로 확장 이전",
  },
  {
    year: "2012",
    title: "디지털 장비 도입",
    desc: "3D CT, 디지털 엑스레이 등 첨단 진단 장비 도입",
  },
  {
    year: "2016",
    title: "교정센터 오픈",
    desc: "교정 전문의 영입 및 교정 전용 진료실 개설",
  },
  {
    year: "2020",
    title: "3D 네비게이션 임플란트 도입",
    desc: "컴퓨터 가이드 임플란트로 안전성과 정확도 향상",
  },
  {
    year: "2024",
    title: "스마트 진료 시스템 구축",
    desc: "AI 기반 진단 보조 및 디지털 차트 시스템 도입",
  },
];

const facilities = [
  {
    name: "3D CT (CBCT)",
    icon: "🔬",
    desc: "3차원 정밀 진단으로 뼈의 형태, 신경 위치, 병변을 정확히 파악합니다. 임플란트, 사랑니 발치 등에 필수적인 장비입니다.",
  },
  {
    name: "구강스캐너 (iTero)",
    icon: "📱",
    desc: "불편한 본뜨기 없이 구강 내부를 디지털로 스캔합니다. 교정 및 보철 치료 시 정밀한 데이터를 빠르게 확보할 수 있습니다.",
  },
  {
    name: "네비게이션 임플란트",
    icon: "🎯",
    desc: "3D CT 데이터를 기반으로 수술 전 시뮬레이션을 진행하여 최적의 위치에 정확하게 임플란트를 식립합니다.",
  },
  {
    name: "CAD/CAM 시스템",
    icon: "🖥️",
    desc: "컴퓨터로 보철물을 설계하고 밀링 머신으로 정밀 제작합니다. 당일 보철 제작이 가능하여 내원 횟수를 줄입니다.",
  },
  {
    name: "멸균 시스템",
    icon: "🛡️",
    desc: "Class B 고압증기멸균기를 사용하여 모든 기구를 철저하게 멸균합니다. 1인 1기구 포장 멸균 원칙을 준수합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-teal-dark via-teal to-teal-light overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            병원 소개
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            2004년 개원 이래, 환자분의 건강한 미소를 위해
            <br className="hidden sm:block" />
            한결같은 마음으로 진료하고 있습니다
          </p>
        </div>
      </section>

      {/* 원장 인사말 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 사진 영역 */}
            <div className="bg-gradient-to-br from-teal/5 to-sky-light rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center text-gray-400">
                <div className="w-32 h-32 bg-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">👨‍⚕️</span>
                </div>
                <p className="text-sm">대표원장 사진 영역</p>
              </div>
            </div>

            {/* 인사말 */}
            <div>
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
                Greetings
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                원장 인사말
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  안녕하세요, 미소플러스치과의원 대표원장 김민수입니다.
                </p>
                <p>
                  저는 치과의사로서 세 가지 원칙을 지키며 진료하고 있습니다.
                </p>
                <div className="bg-sky-light rounded-2xl p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-teal text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">환자 중심 진료</p>
                      <p className="text-sm text-gray-500">
                        환자분의 이야기에 귀 기울이고, 가장 적합한 치료 방법을 함께 찾아갑니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-teal text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">정직한 진료</p>
                      <p className="text-sm text-gray-500">
                        필요하지 않은 치료는 권하지 않습니다. 투명한 진단과 설명으로 신뢰를 쌓아갑니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-teal text-white rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">최소 침습 원칙</p>
                      <p className="text-sm text-gray-500">
                        자연 치아를 최대한 보존하는 것을 가장 중요하게 생각합니다. 꼭 필요한 만큼만 치료합니다.
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  앞으로도 환자 한 분 한 분의 건강한 미소를 위해 최선을 다하겠습니다.
                </p>
                <p className="text-teal-dark font-semibold">
                  미소플러스치과의원 대표원장 김민수
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 타임라인 */}
      <section className="py-20 lg:py-28 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
              History
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              연혁
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              20년간 꾸준히 성장하며 환자분들의 미소를 지켜왔습니다
            </p>
          </div>

          <div className="relative">
            {/* 타임라인 중앙선 */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-teal/20 -translate-x-1/2" />

            <div className="space-y-12">
              {history.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* 도트 */}
                  <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-teal rounded-full border-4 border-white shadow-md -translate-x-1/2 z-10" />

                  {/* 빈 공간 (데스크톱용) */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* 카드 */}
                  <div className="ml-12 lg:ml-0 lg:w-1/2">
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-teal/10 text-teal text-sm font-bold rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 시설/장비 소개 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
              Facilities
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              시설 및 장비
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              최신 디지털 장비와 철저한 감염 관리 시스템으로 안전하고 정밀한 진료를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="p-8 rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 bg-sky-light rounded-xl flex items-center justify-center text-2xl mb-5">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="py-20 lg:py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
              Location
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              오시는 길
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 지도 placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg
                  className="w-16 h-16 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm font-medium">카카오맵 / 네이버 지도 영역</p>
                <p className="text-xs mt-1">지도 API 연동 예정</p>
              </div>
            </div>

            {/* 정보 */}
            <div className="space-y-6">
              {/* 주소 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                    <p className="text-gray-600">
                      서울특별시 강남구 강남대로 396 미소빌딩 3층
                    </p>
                  </div>
                </div>
              </div>

              {/* 교통 안내 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">교통 안내</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded mt-0.5">
                          지하철
                        </span>
                        <span>강남역 5번 출구 도보 3분</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded mt-0.5">
                          버스
                        </span>
                        <span>강남역 정류장 하차 (140, 144, 145, 341, 360 등)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 주차 안내 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">주차 안내</h3>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>건물 지하 주차장 이용 가능 (2시간 무료)</li>
                      <li>주차 공간이 협소할 수 있으니 대중교통 이용을 권장합니다</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 연락처 */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:02-555-2080"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-teal text-white rounded-xl font-semibold hover:bg-teal-light transition-colors"
                >
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  02-555-2080
                </a>
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-teal text-teal rounded-xl font-semibold hover:bg-teal/5 transition-colors"
                >
                  온라인 예약
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-dark to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            미소플러스치과에서 상담받아 보세요
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            정직한 진료, 환자 중심의 치료로 건강한 미소를 함께 만들어 가겠습니다.
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
