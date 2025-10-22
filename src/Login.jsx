import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`로그인 시도: ID=${id}, PW=${password}`);
  };

  return (
    <div className="login-page">
      {/* 왼쪽 - 로그인 폼 */}
      <div className="login-left">
        <div className="form-card">
          <h2 className="form-title">로그인</h2>

          <form onSubmit={handleLogin} className="form">
            <label className="input-group">
              <span className="material-icons input-icon">person</span>
              <input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="input"
              />
            </label>

            <label className="input-group">
              <span className="material-icons input-icon">lock</span>
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </label>

            <button type="submit" className="submit-btn">로그인</button>
          </form>

          <div className="help-links">
            <Link to="/join" className="link">회원가입</Link>
            <span className="sep">|</span>
            <Link to="/find-id" className="link">아이디 찾기</Link>
            <span className="sep">|</span>
            <Link to="/find-password" className="link">비밀번호 찾기</Link>
          </div>
        </div>
      </div>

      {/* 오른쪽 - 브랜드 영역 */}
      <div className="login-right">
        <div className="brand-card">
          <h1 className="brand-title">멍출멍출</h1>
          <p className="brand-subtitle">오늘의 멍청 비용 지출 가계부</p>
        </div>
      </div>
    </div>
  );
}
