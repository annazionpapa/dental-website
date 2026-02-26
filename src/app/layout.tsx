import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://dental-website.vercel.app"),
  title: {
    default: "미소플러스치과의원 | 건강한 미소가 시작되는 곳",
    template: "%s | 미소플러스치과의원",
  },
  description:
    "임플란트, 치아교정, 심미치료, 충치치료 전문. 20년 경력 보철 전문의가 직접 진료합니다. 강남역 5번 출구 도보 3분.",
  keywords:
    "치과, 임플란트, 치아교정, 심미치료, 충치치료, 강남치과, 치과의원, 강남역치과",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "미소플러스치과의원",
    title: "미소플러스치과의원 | 건강한 미소가 시작되는 곳",
    description:
      "임플란트, 치아교정, 심미치료, 충치치료 전문. 20년 경력 보철 전문의가 직접 진료합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dental-website.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
