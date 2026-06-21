import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import PageLayout from "../components/PageLayout";
import logo from "../assets/logo.png";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 24px;
  border: 3px solid var(--color-border, #e5e5e5);
  border-top-color: var(--color-primary, #4a8fff);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // 스플래시를 잠깐 보여준 뒤 자동 이동: 로그인 상태면 홈, 아니면 로그인 화면
    const timer = setTimeout(() => {
      const hasToken = Boolean(localStorage.getItem("accessToken"));
      navigate(hasToken ? "/home" : "/login", { replace: true });
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <img src={logo} alt="Qnect 로고" width={200} />
        <Spinner role="status" aria-label="로딩 중" />
      </div>
    </PageLayout>
  );
}

export default Splash;
