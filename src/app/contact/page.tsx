"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const treatmentOptions = [
  "선택해주세요",
  "임플란트",
  "치아교정",
  "심미치료",
  "충치/보존치료",
  "소아치과",
  "구강외과",
  "검진/스케일링",
  "기타",
];

const faqItems = [
  {
    question: "첫 방문 시 무엇을 준비하면 되나요?",
    answer:
      "신분증과 건강보험증을 지참해 주시면 됩니다. 현재 복용 중인 약이 있으시면 약 이름을 메모해 오시거나 약 봉투를 가져오시면 진료에 도움이 됩니다. 예약 시간 10분 전에 도착하시면 접수와 문진표 작성을 여유 있게 하실 수 있습니다.",
  },
  {
    question: "임플란트 시술 기간은 얼마나 걸리나요?",
    answer:
      "일반적으로 임플란트 식립 후 최종 보철물 장착까지 약 3~6개월 정도 소요됩니다. 환자분의 골 상태와 치유 속도에 따라 다를 수 있으며, 즉시 임플란트의 경우 수술 당일 임시 치아 장착이 가능합니다. 정확한 기간은 CT 촬영 후 상담 시 안내해 드립니다.",
  },
  {
    question: "교정 비용은 어떻게 되나요?",
    answer:
      "교정 비용은 교정 방법(투명교정, 세라믹, 설측 등)과 치아 상태에 따라 달라집니다. 정확한 비용은 교정 전문의 상담 후 안내드리며, 무이자 분할 납부가 가능합니다. 첫 상담 시 교정 방법별 예상 비용을 자세히 안내해 드립니다.",
  },
  {
    question: "주차가 가능한가요?",
    answer:
      "건물 지하 주차장을 이용하실 수 있습니다. 진료 시간 동안 주차비가 지원되며, 접수 시 주차권을 받으실 수 있습니다. 대중교통 이용 시 강남역 5번 출구에서 도보 3분 거리입니다.",
  },
  {
    question: "응급 진료도 가능한가요?",
    answer:
      "진료 시간 내에 응급 상황 발생 시 가능한 빠르게 진료해 드립니다. 갑작스러운 치통, 외상으로 인한 치아 손상, 보철물 탈락 등의 경우 전화(02-555-2080)로 먼저 연락 주시면 신속하게 안내해 드리겠습니다.",
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const treatmentParam = searchParams.get("treatment") || "";

  const defaultTreatment = treatmentOptions.includes(treatmentParam)
    ? treatmentParam
    : "선택해주세요";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: defaultTreatment,
    date: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "상담 신청이 접수되었습니다. 빠른 시간 내에 연락드리겠습니다."
    );
  };

  return (
    <>
      {/* 히어로 */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal-light pt-32 pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            예약 / 상담
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            편안한 진료를 위해 사전 예약을 권장합니다
          </p>
        </div>
      </section>

      {/* 예약 폼 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* 폼 영역 */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                온라인 상담 예약
              </h2>
              <p className="text-gray-500 mb-8">
                아래 양식을 작성해 주시면 빠른 시간 내에 연락드리겠습니다.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-all text-gray-900"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-all text-gray-900"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="treatment"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      진료 과목
                    </label>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-all text-gray-900 bg-white"
                    >
                      {treatmentOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      희망 날짜
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-all text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    증상 / 메모
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none transition-all text-gray-900 resize-none"
                    placeholder="현재 증상이나 궁금한 점을 자유롭게 적어주세요"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-teal text-white font-bold rounded-xl hover:bg-teal-light transition-colors text-lg"
                >
                  상담 예약 신청하기
                </button>

                <p className="text-gray-400 text-xs text-center">
                  * 상담 예약 신청 후 확인 전화를 드리며, 전화 확인 후 예약이
                  확정됩니다.
                </p>
              </form>
            </div>

            {/* 연락 수단 카드 */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                다른 방법으로 예약
              </h2>

              {/* 전화 예약 */}
              <a
                href="tel:02-555-2080"
                className="block p-6 bg-warm rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors">
                    <svg
                      className="w-6 h-6 text-teal group-hover:text-white transition-colors"
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
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">전화 예약</p>
                    <p className="text-teal font-semibold text-lg">
                      02-555-2080
                    </p>
                  </div>
                </div>
              </a>

              {/* 카카오톡 상담 */}
              <a
                href="#"
                className="block p-6 bg-warm rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                    <svg
                      className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3c-5.2 0-9.4 3.3-9.4 7.4 0 2.6 1.7 4.9 4.3 6.2l-1.1 4 4.6-3c.5.1 1 .1 1.6.1 5.2 0 9.4-3.3 9.4-7.4S17.2 3 12 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">카카오톡 상담</p>
                    <p className="text-gray-500 text-sm">
                      실시간 채팅 상담 가능
                    </p>
                  </div>
                </div>
              </a>

              {/* 방문 상담 */}
              <div className="p-6 bg-warm rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center">
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
                    <p className="font-bold text-gray-900">방문 상담</p>
                    <p className="text-gray-500 text-sm">
                      강남역 5번 출구 도보 3분
                    </p>
                  </div>
                </div>
              </div>

              {/* 진료시간 미니 안내 */}
              <div className="p-6 bg-sky-light rounded-2xl border border-sky/30">
                <h3 className="font-bold text-teal-dark mb-3">
                  진료시간 안내
                </h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-sky/30">
                    <tr>
                      <td className="py-2 text-gray-700 font-medium">
                        월 ~ 금
                      </td>
                      <td className="py-2 text-teal-dark text-right font-semibold">
                        09:30 ~ 18:30
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-700 font-medium">
                        토요일
                      </td>
                      <td className="py-2 text-teal-dark text-right font-semibold">
                        09:30 ~ 14:00
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-700 font-medium">
                        점심시간
                      </td>
                      <td className="py-2 text-gray-400 text-right">
                        13:00 ~ 14:00
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 text-gray-700 font-medium">
                        일/공휴일
                      </td>
                      <td className="py-2 text-gray-400 text-right">휴진</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
              Location
            </p>
            <h2 className="text-3xl font-bold text-gray-900">오시는 길</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* 지도 placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-[350px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg
                  className="w-12 h-12 mx-auto mb-2"
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
                <p className="text-sm">카카오맵/네이버 지도 영역</p>
              </div>
            </div>

            {/* 주소 및 교통 안내 */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  주소
                </h3>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal mt-0.5 shrink-0"
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
                  <div>
                    <p className="text-gray-700 font-medium">
                      서울특별시 강남구 강남대로 396 미소빌딩 3층
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      (우) 06241
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  교통 안내
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      M
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">지하철</p>
                      <p className="text-gray-500 text-sm">
                        2호선/신분당선 강남역 5번 출구 도보 3분
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      B
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">버스</p>
                      <p className="text-gray-500 text-sm">
                        강남역 정류장 하차 (140, 144, 145, 471)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-500 rounded text-white text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                      P
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">주차</p>
                      <p className="text-gray-500 text-sm">
                        건물 지하 주차장 이용 가능 (진료 시 주차비 지원)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-warm transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-gray-400">로딩 중...</div>
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
