import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css"; // 스타일 분리

export default function Join() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (pw.length < 6) {
      alert("비밀번호는 6자 이상 입력해주세요.");
      return;
    }
    if (!agree) {
      alert("이용약관 및 개인정보 처리방침에 동의해주세요.");
      return;
    }

    // TODO: 실제 회원가입 API 연동
    alert(`회원가입 완료!\nID: ${id}`);
  };

  return (
    <div className="join-page">
      {/* 왼쪽 - 회원가입 폼 */}
      <div className="join-left">
        <div className="form-card">
          <h2 className="form-title">회원가입</h2>

          <form onSubmit={handleSubmit} className="form">
            {/* 아이디 */}
            <div className="input-group">
              <span className="material-icons input-icon">person</span>
              <input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="input"
                autoFocus
              />
            </div>

            {/* 비밀번호 */}
            <div className="input-group mt-16">
              <span className="material-icons input-icon">lock</span>
              <input
                type={showPw ? "text" : "password"}
                placeholder="비밀번호"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="input"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="eye-btn"
                aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
                title={showPw ? "비밀번호 숨기기" : "비밀번호 보기"}
              >
                <span className="material-icons">
                  {showPw ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>

            {/* 약관 동의 */}
            <label className="check-row">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span className="check-text">
                이용약관 및 개인정보 처리방침에 동의합니다.
              </span>
            </label>

            {/* 하단 링크 */}
            <div className="links">
              <Link to="/login" className="link">
                로그인
              </Link>
              <span className="dot">|</span>
              <Link to="/find-id" className="link">
                아이디 찾기
              </Link>
              <span className="dot">|</span>
              <Link to="/find-password" className="link">
                비밀번호 찾기
              </Link>
            </div>

            {/* 가입 버튼 */}
            <button type="submit" className="submit-btn">
              회원가입
            </button>
          </form>
        </div>
      </div>

      {/* 오른쪽 - 브랜드 영역 */}
      <div className="join-right">
        <div className="brand-card">
          <div className="brand-title">멍출멍출</div>
          <div className="brand-sub">오늘의 멍청 비용 지출 가계부</div>
        </div>
      </div>
    </div>
  );
}
