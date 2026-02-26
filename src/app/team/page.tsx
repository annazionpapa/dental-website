import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개",
  description:
    "미소플러스치과의원의 전문 의료진을 소개합니다. 각 분야 전문의가 최선의 진료를 약속합니다.",
};

interface Doctor {
  name: string;
  role: string;
  specialty: string;
  emoji: string;
  highlight: string;
  credentials: string[];
}

const doctors: Doctor[] = [
  {
    name: "김민수",
    role: "대표원장",
    specialty: "치과보철과 전문의",
    emoji: "👨‍⚕️",
    highlight: "임플란트 3,000건+",
    credentials: [
      "서울대학교 치과대학 졸업",
      "서울대학교병원 치과보철과 수련",
      "치과보철과 전문의 취득",
      "임플란트 시술 3,000건 이상",
      "대한치과보철학회 정회원",
      "대한구강악안면임플란트학회 정회원",
    ],
  },
  {
    name: "박서연",
    role: "부원장",
    specialty: "치과교정과 전문의",
    emoji: "👩‍⚕️",
    highlight: "투명교정 전문",
    credentials: [
      "연세대학교 치과대학 졸업",
      "연세대학교 세브란스병원 치과교정과 수련",
      "치과교정과 전문의 취득",
      "투명교정(인비절라인) 인증의",
      "대한치과교정학회 정회원",
      "대한설측교정학회 정회원",
    ],
  },
  {
    name: "이하은",
    role: "진료의",
    specialty: "소아치과 / 보존치료",
    emoji: "👩‍⚕️",
    highlight: "아이 눈높이 진료",
    credentials: [
      "서울대학교 치과대학 졸업",
      "소아치과 진료 전문",
      "보존치료(충치/신경치료) 전문",
      "아이 눈높이에 맞춘 친근한 진료",
      "대한소아치과학회 회원",
    ],
  },
  {
    name: "최준혁",
    role: "진료의",
    specialty: "심미치료 / 보존치료",
    emoji: "👨‍⚕️",
    highlight: "디지털 스마일 디자인",
    credentials: [
      "경희대학교 치과대학 졸업",
      "심미치료(라미네이트, 미백) 전문",
      "보존치료(레진, 인레이) 전문",
      "디지털 스마일 디자인(DSD) 전문",
      "대한심미치과학회 회원",
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-teal-dark via-teal to-teal-light overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Our Team
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            의료진 소개
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            각 분야의 전문 의료진이 환자분의 건강한 미소를 위해
            <br className="hidden sm:block" />
            최선의 진료를 약속합니다
          </p>
        </div>
      </section>

      {/* 의료진 프로필 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
              Doctors
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              전문 의료진
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              풍부한 임상 경험과 꾸준한 학술 활동으로 최신 치료 기술을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="group rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
              >
                {/* 사진 placeholder */}
                <div className="relative bg-gradient-to-br from-teal/5 to-sky-light p-8 flex items-center justify-center aspect-[4/3]">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-teal/10 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-4xl">{doctor.emoji}</span>
                    </div>
                  </div>
                  {/* 하이라이트 뱃지 */}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-teal text-white text-xs font-semibold rounded-full">
                    {doctor.highlight}
                  </span>
                </div>

                {/* 정보 */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {doctor.name}
                      <span className="text-sm font-normal text-gray-400 ml-2">
                        {doctor.role}
                      </span>
                    </h3>
                    <p className="text-teal font-medium text-sm mt-1">
                      {doctor.specialty}
                    </p>
                  </div>

                  {/* 학력/경력 */}
                  <ul className="space-y-2">
                    {doctor.credentials.map((cred, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-500 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-teal/60 mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진료 철학 */}
      <section className="py-20 lg:py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
              Philosophy
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              우리의 진료 철학
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "소통하는 진료",
                desc: "환자분의 이야기에 충분히 귀 기울이고, 치료 과정을 알기 쉽게 설명합니다. 환자와 의료진이 함께 최적의 치료 방법을 결정합니다.",
              },
              {
                icon: "🔍",
                title: "정밀한 진단",
                desc: "3D CT, 구강스캐너 등 최신 디지털 장비를 활용하여 정확한 진단을 제공합니다. 정밀한 진단이 좋은 치료의 시작입니다.",
              },
              {
                icon: "🌱",
                title: "지속적인 성장",
                desc: "국내외 학회 참석과 연수를 통해 최신 치료 기술을 습득합니다. 끊임없는 연구와 노력으로 환자분들께 더 나은 진료를 제공합니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-sky-light rounded-xl flex items-center justify-center text-2xl mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-dark to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            전문 의료진과 상담해 보세요
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            각 분야 전문의가 환자분의 상태에 맞는 최적의 치료 계획을 안내해 드립니다.
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
