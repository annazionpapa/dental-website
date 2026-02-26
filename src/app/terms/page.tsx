import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description: "미소플러스치과의원 홈페이지 이용약관",
};

export default function TermsPage() {
  return (
    <>
      {/* 히어로 */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal-light pt-32 pb-16 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            이용약관
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            미소플러스치과의원 홈페이지 이용에 관한 약관입니다
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
                제1조 (목적)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 미소플러스치과의원(이하 &quot;의원&quot;)이 운영하는
                홈페이지(이하 &quot;사이트&quot;)에서 제공하는 온라인 서비스의
                이용과 관련하여 의원과 이용자 간의 권리, 의무 및 책임 사항, 기타
                필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            {/* 제2조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제2조 (정의)
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>&quot;사이트&quot;</strong>란 의원이 서비스를 이용자에게
                  제공하기 위하여 운영하는 가상의 공간을 말합니다.
                </li>
                <li>
                  <strong>&quot;이용자&quot;</strong>란 사이트에 접속하여 본 약관에
                  따라 의원이 제공하는 서비스를 이용하는 자를 말합니다.
                </li>
                <li>
                  <strong>&quot;서비스&quot;</strong>란 사이트를 통해 제공되는 진료
                  정보 안내, 온라인 예약, 상담 등의 서비스를 말합니다.
                </li>
              </ul>
            </div>

            {/* 제3조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제3조 (약관의 게시 및 변경)
              </h2>
              <ul className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>
                  본 약관은 사이트 내에 게시하여 이용자에게 공지합니다.
                </li>
                <li>
                  의원은 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수
                  있습니다.
                </li>
                <li>
                  약관이 변경되는 경우 시행일 7일 전부터 사이트 내에 공지합니다.
                </li>
              </ul>
            </div>

            {/* 제4조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제4조 (서비스의 제공)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                의원은 다음과 같은 서비스를 제공합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>의원 및 진료 안내 정보 제공</li>
                <li>온라인 예약 및 상담 접수</li>
                <li>치료 사례 안내</li>
                <li>의료진 소개</li>
                <li>기타 의원이 정하는 서비스</li>
              </ul>
            </div>

            {/* 제5조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제5조 (서비스의 중단)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                의원은 시스템 점검, 교체, 고장, 통신 두절 등의 사유가 발생한
                경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우
                사전에 공지하며, 불가피한 사유로 사전 공지가 불가능한 경우 사후에
                공지합니다.
              </p>
            </div>

            {/* 제6조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제6조 (이용자의 의무)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                이용자는 다음 행위를 하여서는 안 됩니다.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>신청 또는 변경 시 허위 내용의 등록</li>
                <li>타인의 정보 도용</li>
                <li>사이트에 게시된 정보의 변경</li>
                <li>
                  의원이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는
                  게시
                </li>
                <li>의원 및 기타 제3자의 저작권 등 지적 재산권에 대한 침해</li>
                <li>의원 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              </ul>
            </div>

            {/* 제7조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제7조 (저작권의 귀속)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 영상, 디자인 등)에
                대한 저작권 및 기타 지적 재산권은 의원에 귀속됩니다. 이용자는
                사이트를 이용함으로써 얻은 정보를 의원의 사전 승낙 없이 복제, 송신,
                출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나
                제3자에게 이용하게 하여서는 안 됩니다.
              </p>
            </div>

            {/* 제8조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제8조 (면책 조항)
              </h2>
              <ul className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>
                  사이트에 게시된 정보는 참고 목적으로 제공되며, 의학적 진단이나
                  치료를 대체할 수 없습니다.
                </li>
                <li>
                  의원은 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
                  제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                </li>
                <li>
                  의원은 이용자의 귀책 사유로 인한 서비스 이용의 장애에 대하여는
                  책임을 지지 않습니다.
                </li>
              </ul>
            </div>

            {/* 제9조 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                제9조 (분쟁 해결)
              </h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관에 관한 분쟁은 대한민국 법을 준거법으로 하며, 서비스 이용과
                관련하여 의원과 이용자 간에 분쟁이 발생한 경우 성실히 협의하여
                해결합니다. 협의가 이루어지지 않는 경우 관할 법원에 소를 제기할 수
                있습니다.
              </p>
            </div>

            {/* 부칙 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-500 text-sm">
                본 약관은 2024년 1월 1일부터 시행됩니다.
                <br />
                약관이 변경되는 경우 변경 사항을 원내 게시 및 홈페이지를 통해
                공지하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
