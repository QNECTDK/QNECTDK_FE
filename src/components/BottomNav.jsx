import {
  NavContainer,
  NavBtn,
  NavIcon,
  QrBtn,
} from "../styles/styledBottomNav";

function BottomNav() {
  return (
    <NavContainer>
      <NavBtn>
        <NavIcon src="/images/nav-home.svg" alt="홈" />
      </NavBtn>

      <NavBtn>
        <NavIcon src="/images/nav-friend.svg" alt="친구" />
      </NavBtn>

      <QrBtn>
        <img
          src="/images/nav-qr.svg"
          alt="QR코드"
          style={{ width: "32px", height: "32px" }}
        />
      </QrBtn>

      <NavBtn>
        <NavIcon src="/images/nav-quiz.svg" alt="퀴즈" />
      </NavBtn>

      <NavBtn>
        <NavIcon src="/images/nav-profile.svg" alt="프로필" />
      </NavBtn>
    </NavContainer>
  );
}

export default BottomNav;
