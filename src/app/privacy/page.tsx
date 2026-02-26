import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "미소플러스치과의원 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal-light pt-32 pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            개인정보처리방침
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            미소플러스치과의원의 개인정보 처리에 관한 안내입니다
          </p>
        </div>
      </section>

      {/* 본문 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-10">
            {/* 제1조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제1조 (개인정보의 처리 목적)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                미소플러스치과의원(이하 &quot;의원&quot;)은 다음의 목적을 위하여
                개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의
                동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>진료 예약 및 상담 접수</li>
                <li>환자 진료 기록 관리</li>
                <li>진료비 청구 및 수납</li>
                <li>건강보험 청구</li>
                <li>의료 관련 법령에 의한 의무 이행</li>
              </ul>
            </div>

            {/* 제2조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제2조 (개인정보의 처리 및 보유 기간)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                의원은 법령에 따른 개인정보 보유 및 이용 기간 또는 정보주체로부터
                개인정보를 수집 시에 동의받은 개인정보 보유 및 이용 기간 내에서
                개인정보를 처리 및 보유합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>
                  진료 기록: 의료법에 따라 10년간 보존
                </li>
                <li>
                  처방전: 의료법에 따라 2년간 보존
                </li>
                <li>
                  온라인 상담 기록: 상담 완료 후 1년간 보존
                </li>
              </ul>
            </div>

            {/* 제3조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제3조 (처리하는 개인정보의 항목)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                의원은 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>
                  <strong>필수항목:</strong> 성명, 생년월일, 연락처, 주소
                </li>
                <li>
                  <strong>선택항목:</strong> 이메일 주소
                </li>
                <li>
                  <strong>진료 관련:</strong> 주소지, 건강보험 정보, 진료 기록,
                  구강 사진 및 방사선 사진
                </li>
              </ul>
            </div>

            {/* 제4조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제4조 (개인정보의 제3자 제공)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                의원은 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만
                처리하며, 정보주체의 동의, 법률의 특별한 규정 등에 해당하는
                경우에만 개인정보를 제3자에게 제공합니다. 다만, 건강보험 청구 등
                법률에 의해 요구되는 경우에는 관련 기관에 제공될 수 있습니다.
              </p>
            </div>

            {/* 제5조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제5조 (개인정보의 파기)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                의원은 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가
                불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>
                  전자적 파일: 복구 불가능한 방법으로 영구 삭제
                </li>
                <li>
                  종이 문서: 분쇄기로 분쇄하거나 소각
                </li>
              </ul>
            </div>

            {/* 제6조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제6조 (정보주체의 권리 및 의무)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                정보주체는 의원에 대해 언제든지 다음 각 호의 개인정보 보호 관련
                권리를 행사할 수 있습니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리 정지 요구</li>
              </ul>
            </div>

            {/* 제7조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제7조 (개인정보의 안전성 확보 조치)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                의원은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
                있습니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>관리적 조치: 내부 관리 계획 수립 및 시행, 직원 교육</li>
                <li>
                  기술적 조치: 개인정보 처리 시스템 접근 권한 관리, 보안 프로그램
                  설치
                </li>
                <li>
                  물리적 조치: 전산실, 자료 보관실 등의 접근 통제
                </li>
              </ul>
            </div>

            {/* 제8조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제8조 (개인정보 보호 책임자)
              </h2>
              <div className="bg-warm rounded-2xl p-6 border border-gray-100">
                <p className="text-gray-600 leading-relaxed">
                  <strong>개인정보 보호 책임자</strong>
                  <br />
                  성명: 김민수
                  <br />
                  직위: 대표원장
                  <br />
                  연락처: 02-555-2080
                </p>
              </div>
            </div>

            {/* 부칙 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-500 text-sm">
                본 개인정보처리방침은 2024년 1월 1일부터 시행됩니다.
                <br />
                개인정보처리방침이 변경되는 경우 변경 사항을 원내 게시 및 홈페이지를
                통해 공지하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
