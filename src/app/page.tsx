import Link from "next/link";
import ScrollRevealCard from "@/components/ScrollRevealCard";
import { treatments } from "@/data/treatments";

const stats = [
  { number: "20년+", label: "진료 경력" },
  { number: "15,000건+", label: "누적 시술" },
  { number: "98%", label: "환자 만족도" },
  { number: "3,000건+", label: "임플란트 시술" },
];

const reviews = [
  { name: "김○○", category: "임플란트", rating: 5, text: "임플란트 시술 후 음식을 편하게 먹을 수 있게 되었습니다. 원장님께서 꼼꼼하게 설명해주셔서 안심하고 치료받았습니다." },
  { name: "이○○", category: "치아교정", rating: 5, text: "투명교정으로 진행했는데 직장에서 아무도 모를 정도로 자연스러웠어요. 결과도 너무 만족합니다." },
  { name: "박○○", category: "심미치료", rating: 5, text: "라미네이트 후 미소가 완전히 달라졌어요. 최소한으로 삭제해주셔서 부담도 적었습니다." },
  { name: "정○○", category: "충치치료", rating: 5, text: "오랫동안 미뤄왔던 충치 치료를 받았는데, 거의 안 아프고 깔끔하게 해주셨어요." },
  { name: "최○○", category: "소아치과", rating: 5, text: "아이가 치과를 무서워했는데, 여기서는 즐겁게 치료받고 또 오고 싶다고 해요." },
  { name: "한○○", category: "임플란트", rating: 5, text: "다른 곳에서 어렵다던 임플란트를 여기서 성공적으로 해주셨습니다. 감사합니다." },
];

export default function Home() {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center bg-teal-dark overflow-hidden">
        <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-dark/60 via-teal-dark/40 to-teal-dark/70" />

        {/* 장식 원형 요소 */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 0 20px rgba(0,0,0,0.3)' }}>
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
            Since 2004 · 강남역 도보 3분
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animate-delay-100">
            건강한 미소가<br />시작되는 곳
          </h1>
          <p className="text-lg sm:text-xl text-white font-semibold max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            20년 경력의 전문 의료진이 환자 한 분 한 분의<br className="hidden sm:block" />
            미소를 정성껏 설계합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-teal-dark font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              무료 상담 예약하기
            </Link>
            <Link
              href="/treatments"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              진료과목 보기
            </Link>
          </div>
        </div>

        {/* 하단 스크롤 안내 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 진료과목 섹션 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">Treatments</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">전문 진료 분야</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">각 분야의 전문 의료진이 최신 장비와 기술로 최적의 치료를 제공합니다</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <ScrollRevealCard key={treatment.id} className={`scroll-card`}>
                <Link href={`/treatments#${treatment.id}`} className="block group">
                  <div className="rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={treatment.image}
                        alt={treatment.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-3 left-4 text-white text-3xl drop-shadow-lg">
                        {treatment.icon}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="card-title text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-teal">
                        {treatment.name}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{treatment.shortDesc}</p>
                      <div className="mt-4 flex items-center text-teal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        자세히 보기
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollRevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 bg-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 의료진 스니펫 */}
      <section className="py-20 lg:py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">Doctor</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">믿을 수 있는 전문 의료진</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                미소플러스치과의원은 각 분야의 전문의가 직접 진료합니다.
                풍부한 임상 경험과 지속적인 학술 활동을 통해 최신 치료 기술을 제공하며,
                환자 한 분 한 분에게 최적의 치료 계획을 수립합니다.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80" alt="김민수 대표원장" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">김민수 대표원장</p>
                    <p className="text-teal text-sm">치과보철과 전문의</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  서울대학교 치과대학 졸업 · 서울대학교병원 수련 · 대한치과보철학회 정회원 · 임플란트 시술 3,000건+
                </p>
              </div>
              <Link href="/team" className="inline-flex items-center text-teal font-semibold hover:text-teal-light transition-colors">
                의료진 전체 보기
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?w=800&q=80"
                alt="치과 진료 모습"
                className="w-full h-full min-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 환자 후기 섹션 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">Reviews</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">환자분들의 소중한 후기</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 rounded-2xl bg-warm border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium text-sm">{review.name} 님</span>
                  <span className="text-xs px-2 py-1 bg-teal/10 text-teal rounded-full">{review.category}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-8">
            * 위 후기는 개인의 치료 경험에 기반한 것으로, 개인에 따라 치료 결과가 다를 수 있습니다.
          </p>
        </div>
      </section>

      {/* 진료 시간 + 오시는 길 */}
      <section className="py-20 lg:py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">Hours</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">진료 시간 안내</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { day: "월 ~ 금", time: "09:30 ~ 18:30", active: true },
                      { day: "토요일", time: "09:30 ~ 14:00", active: true },
                      { day: "점심시간", time: "13:00 ~ 14:00", active: false },
                      { day: "일·공휴일", time: "휴진", active: false },
                    ].map((row) => (
                      <tr key={row.day}>
                        <td className="py-4 font-medium text-gray-900">{row.day}</td>
                        <td className={`py-4 text-right ${row.active ? "text-teal font-semibold" : "text-gray-400"}`}>
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="tel:02-555-2080" className="flex items-center justify-center gap-2 px-6 py-3 bg-teal text-white rounded-xl font-semibold hover:bg-teal-light transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  02-555-2080
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal text-teal rounded-xl font-semibold hover:bg-teal/5 transition-colors">
                  온라인 예약
                </Link>
              </div>
            </div>
            <div>
              <p className="text-teal font-semibold text-sm tracking-widest uppercase mb-3">Location</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">오시는 길</h2>
              <div className="rounded-2xl overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3!2d127.028!3d37.498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a0de0af15%3A0x63d2c6e462a9e7e8!2z6rCV64Ko64yA66GcIDM5Ng!5e0!3m2!1sko!2skr!4v1"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="미소플러스치과의원 위치"
                />
              </div>
              <div className="mt-4 bg-white rounded-xl p-4">
                <p className="text-gray-700 font-medium">서울특별시 강남구 강남대로 396 미소빌딩 3층</p>
                <p className="text-gray-500 text-sm mt-1">강남역 5번 출구 도보 3분 · 주차 가능 (건물 지하 주차장)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-dark to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">건강한 미소, 지금 시작하세요</h2>
          <p className="text-white/70 mb-8 text-lg">부담 없는 무료 상담으로 시작해 보세요. 전문 의료진이 최적의 치료 계획을 안내해 드립니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-teal-dark font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg">
              무료 상담 예약하기
            </Link>
            <a href="tel:02-555-2080" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg">
              전화 상담: 02-555-2080
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
