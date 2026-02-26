"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "병원 소개" },
  { href: "/team", label: "의료진" },
  { href: "/treatments", label: "진료 안내" },
  { href: "/cases", label: "치료 사례" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-teal-dark" : "text-white"}`}>
                미소플러스치과
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-teal bg-teal/5"
                      : "text-accent"
                    : isScrolled
                    ? "text-gray-600 hover:text-teal hover:bg-gray-50"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-6 py-2.5 text-base font-bold rounded-lg transition-colors ${
                isScrolled
                  ? "bg-teal text-white hover:bg-teal-light"
                  : "bg-white text-teal-dark hover:bg-gray-100"
              }`}
            >
              예약 상담
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              isMobileMenuOpen
                ? "text-teal-dark bg-teal/5"
                : isScrolled
                ? "text-teal-dark hover:bg-gray-50"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMobileMenuOpen ? "닫기" : "메뉴"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 bg-white shadow-xl" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-teal bg-teal/5"
                  : "text-gray-600 hover:text-teal hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 px-4 py-3 bg-teal text-white text-center text-sm font-semibold rounded-lg"
          >
            예약 상담
          </Link>
        </nav>
      </div>
    </header>
  );
}
