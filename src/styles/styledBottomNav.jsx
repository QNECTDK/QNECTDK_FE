import styled from "styled-components";

// 네비게이션바 기본 바탕
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid #f0f0f0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 393px;
  height: 75px;
  background-color: white;
  box-sizing: border-box;
  z-index: 10;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
`;

// 네비게이션바 아이콘 (홈, 친구, qr, 프로필)
export const NavBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 50;

  width: 52px;
  height: 52px;
  border-radius: 50%;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fbc9bc;
  }
`;

// 네비게이션바 아이콘 이미지 크기
export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

// 가운데 주황색 QR 버튼
export const QrBtn = styled.button`
  width: 64px;
  height: 64px;
  background-color: #ff8e73;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transform: translateY(-16px);

  z-index: 11;
  transition: all 0.2s ease;
  &:hover {
    background-color: #ff7253;
    transform: translateY(-20px) scale(1.05);
  }
`;
