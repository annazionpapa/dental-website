-- Supabase SQL Editor에서 실행하세요
-- (Supabase Dashboard > SQL Editor > New query)

-- 1. 상담 예약 테이블 생성
CREATE TABLE consultations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  treatment TEXT DEFAULT '기타',
  preferred_date DATE,
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. RLS(Row Level Security) 활성화
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- 3. 누구나 상담 신청 가능 (INSERT)
CREATE POLICY "Anyone can submit consultation"
  ON consultations FOR INSERT
  TO anon
  WITH CHECK (true);

-- 4. 누구나 조회 가능 (admin 페이지용 - 앱에서 비밀번호 보호)
CREATE POLICY "Anyone can read consultations"
  ON consultations FOR SELECT
  TO anon
  USING (true);

-- 5. 누구나 상태 변경 가능 (admin 페이지용 - 앱에서 비밀번호 보호)
CREATE POLICY "Anyone can update consultations"
  ON consultations FOR UPDATE
  TO anon
  USING (true);

-- 6. Realtime 활성화 (실시간 알림용)
ALTER PUBLICATION supabase_realtime ADD TABLE consultations;

-- 7. 인덱스 (성능 최적화)
CREATE INDEX idx_consultations_status ON consultations(status);
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
