"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { Consultation } from "@/lib/supabase";

const statusLabels: Record<string, string> = {
  new: "새 접수",
  in_progress: "확인중",
  completed: "완료",
};

const statusColors: Record<string, string> = {
  new: "bg-red-100 text-red-700",
  in_progress: "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
};

const statusIcons: Record<string, string> = {
  new: "🔴",
  in_progress: "🟡",
  completed: "✅",
};

// ─── 로그인 화면 ────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        onLogin();
      } else {
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch {
      setError("서버 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-teal rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">관리자 로그인</h1>
          <p className="text-gray-500 text-sm mt-1">미소플러스치과 상담 관리</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/20 focus:border-teal outline-none text-gray-900"
              placeholder="관리자 비밀번호 입력"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-teal text-white font-bold rounded-xl hover:bg-teal-light transition-colors disabled:opacity-50"
          >
            {loading ? "확인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── 통계 카드 ────────────────────────────────
function StatCards({ data }: { data: Consultation[] }) {
  const total = data.length;
  const newCount = data.filter((d) => d.status === "new").length;
  const inProgressCount = data.filter((d) => d.status === "in_progress").length;
  const completedCount = data.filter((d) => d.status === "completed").length;

  const cards = [
    { label: "전체 접수", value: total, color: "bg-teal/10 text-teal", icon: "📋" },
    { label: "새 접수", value: newCount, color: "bg-red-50 text-red-600", icon: "🔴" },
    { label: "확인중", value: inProgressCount, color: "bg-yellow-50 text-yellow-600", icon: "🟡" },
    { label: "완료", value: completedCount, color: "bg-green-50 text-green-600", icon: "✅" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cards.map((card) => (
        <div key={card.label} className={`${card.color} rounded-2xl p-5`}>
          <div className="text-2xl mb-1">{card.icon}</div>
          <p className="text-3xl font-bold">{card.value}</p>
          <p className="text-sm opacity-70">{card.label}</p>
        </div>
      ))}
    </div>
  );
}

// ─── 월별 통계 ────────────────────────────────
function MonthlyStats({ data }: { data: Consultation[] }) {
  const monthCounts: Record<string, number> = {};
  data.forEach((d) => {
    const month = d.created_at.slice(0, 7); // "2026-02"
    monthCounts[month] = (monthCounts[month] || 0) + 1;
  });

  const months = Object.entries(monthCounts)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-6);

  const maxCount = Math.max(...months.map(([, c]) => c), 1);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-4">월별 접수 현황</h3>
      {months.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-8">데이터가 없습니다</p>
      ) : (
        <div className="flex items-end gap-3 h-32">
          {months.map(([month, count]) => (
            <div key={month} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-xs font-bold text-teal">{count}</span>
              <div
                className="w-full bg-teal/20 rounded-t-lg transition-all"
                style={{ height: `${(count / maxCount) * 100}%`, minHeight: 4 }}
              >
                <div
                  className="w-full bg-teal rounded-t-lg h-full"
                  style={{ opacity: 0.8 }}
                />
              </div>
              <span className="text-xs text-gray-400">{month.slice(5)}월</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── 진료과목별 통계 ─────────────────────────
function TreatmentStats({ data }: { data: Consultation[] }) {
  const treatmentCounts: Record<string, number> = {};
  data.forEach((d) => {
    treatmentCounts[d.treatment] = (treatmentCounts[d.treatment] || 0) + 1;
  });

  const sorted = Object.entries(treatmentCounts).sort(([, a], [, b]) => b - a);
  const maxCount = Math.max(...sorted.map(([, c]) => c), 1);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-4">진료과목별 현황</h3>
      {sorted.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-8">데이터가 없습니다</p>
      ) : (
        <div className="space-y-3">
          {sorted.map(([treatment, count]) => (
            <div key={treatment} className="flex items-center gap-3">
              <span className="text-sm text-gray-700 w-24 shrink-0">{treatment}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-teal h-full rounded-full flex items-center justify-end pr-2 transition-all"
                  style={{ width: `${(count / maxCount) * 100}%`, minWidth: 32 }}
                >
                  <span className="text-xs text-white font-bold">{count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── 대시보드 ─────────────────────────────────
function Dashboard() {
  const [data, setData] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const fetchData = useCallback(async () => {
    const { data: consultations, error } = await supabase
      .from("consultations")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && consultations) {
      setData(consultations as Consultation[]);
    }
    setLoading(false);
  }, []);

  // 초기 데이터 로드
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 실시간 구독
  useEffect(() => {
    const channel = supabase
      .channel("consultations-changes")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "consultations" },
        (payload) => {
          const newItem = payload.new as Consultation;
          setData((prev) => [newItem, ...prev]);

          // 브라우저 알림
          if (notificationsEnabled && Notification.permission === "granted") {
            new Notification("📋 새 상담 접수", {
              body: `${newItem.name}님 - ${newItem.treatment}`,
              icon: "/favicon.ico",
            });
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "consultations" },
        (payload) => {
          const updated = payload.new as Consultation;
          setData((prev) => prev.map((d) => (d.id === updated.id ? updated : d)));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [notificationsEnabled]);

  // 알림 권한 요청
  const toggleNotifications = async () => {
    if (!notificationsEnabled) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setNotificationsEnabled(true);
        new Notification("🔔 알림 활성화", {
          body: "새 상담 접수 시 알림을 받습니다.",
        });
      }
    } else {
      setNotificationsEnabled(false);
    }
  };

  // 상태 변경
  const updateStatus = async (id: string, newStatus: string) => {
    await supabase.from("consultations").update({ status: newStatus }).eq("id", id);
  };

  const filteredData = filter === "all" ? data : data.filter((d) => d.status === filter);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };

  const formatPreferredDate = (dateStr: string | null) => {
    if (!dateStr) return "-";
    const [y, m, d] = dateStr.split("-");
    return `${y}년 ${parseInt(m)}월 ${parseInt(d)}일`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-teal rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-gray-900">상담 예약 관리</h1>
              <p className="text-xs text-gray-400">미소플러스치과</p>
            </div>
          </div>

          <button
            onClick={toggleNotifications}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              notificationsEnabled
                ? "bg-teal text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {notificationsEnabled ? "알림 ON" : "알림 OFF"}
          </button>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 통계 카드 */}
        <StatCards data={data} />

        {/* 통계 차트 */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <MonthlyStats data={data} />
          <TreatmentStats data={data} />
        </div>

        {/* 필터 */}
        <div className="flex items-center gap-2 mb-4">
          {["all", "new", "in_progress", "completed"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === s
                  ? "bg-teal text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {s === "all" ? `전체 (${data.length})` : `${statusLabels[s]} (${data.filter((d) => d.status === s).length})`}
            </button>
          ))}
        </div>

        {/* 상담 목록 - 테이블 */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="w-10 px-3 py-3"></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">이름</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">연락처</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">진료과목</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">희망날짜</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">증상/메모</th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">접수일</th>
                <th className="px-3 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">상태</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-12 text-center text-gray-400">
                    접수된 상담이 없습니다
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${
                      item.status === "new" ? "bg-red-50/30" : ""
                    }`}
                  >
                    {/* 상태 아이콘 */}
                    <td className="px-3 py-3 text-center text-base">{statusIcons[item.status]}</td>

                    {/* 이름 */}
                    <td className="px-3 py-3 font-semibold text-gray-900 text-sm whitespace-nowrap">{item.name}</td>

                    {/* 연락처 */}
                    <td className="px-3 py-3 text-sm text-gray-600 whitespace-nowrap">{item.phone}</td>

                    {/* 진료과목 */}
                    <td className="px-3 py-3">
                      <span className="inline-block bg-teal/10 text-teal px-2 py-0.5 rounded-md text-xs font-medium whitespace-nowrap">
                        {item.treatment}
                      </span>
                    </td>

                    {/* 희망날짜 */}
                    <td className="px-3 py-3 text-sm text-gray-600 whitespace-nowrap">{formatPreferredDate(item.preferred_date)}</td>

                    {/* 증상/메모 */}
                    <td className="px-3 py-3 text-sm text-gray-500 max-w-xs truncate" title={item.message || ""}>
                      {item.message || <span className="text-gray-300">-</span>}
                    </td>

                    {/* 접수일 */}
                    <td className="px-3 py-3 text-xs text-gray-400 whitespace-nowrap">{formatDate(item.created_at)}</td>

                    {/* 상태 변경 버튼 */}
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5 justify-center">
                        {item.status !== "new" && (
                          <button
                            onClick={() => updateStatus(item.id, "new")}
                            className="px-2 py-1 text-[11px] rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-medium whitespace-nowrap"
                          >
                            접수
                          </button>
                        )}
                        {item.status !== "in_progress" && (
                          <button
                            onClick={() => updateStatus(item.id, "in_progress")}
                            className="px-2 py-1 text-[11px] rounded-md bg-yellow-50 text-yellow-600 hover:bg-yellow-100 transition-colors font-medium whitespace-nowrap"
                          >
                            확인
                          </button>
                        )}
                        {item.status !== "completed" && (
                          <button
                            onClick={() => updateStatus(item.id, "completed")}
                            className="px-2 py-1 text-[11px] rounded-md bg-green-50 text-green-600 hover:bg-green-100 transition-colors font-medium whitespace-nowrap"
                          >
                            완료
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// ─── 메인 ─────────────────────────────────────
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("/api/admin/verify")
      .then((res) => {
        if (res.ok) setAuthenticated(true);
      })
      .finally(() => setChecking(false));
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400">확인 중...</div>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginScreen onLogin={() => setAuthenticated(true)} />;
  }

  return <Dashboard />;
}
