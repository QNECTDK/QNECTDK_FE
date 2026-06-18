import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Button from "../components/Button";
import mouseImg from "../assets/animals/mouse.png";

function FriendAccept() {
  const location = useLocation();
  const navigate = useNavigate();

  // QrScan에서 넘겨준 qrData를 파싱
  let friend = {
    name: "알 수 없음",
    birthYear: "",
    school: "",
    gender: "",
  };

  if (location.state?.qrData) {
    try {
      friend = JSON.parse(location.state.qrData);
    } catch (e) {
      console.error("QR 데이터 파싱 실패", e);
    }
  }

  const handleAccept = () => {
    console.log("친구 수락", friend);
    navigate("/home");
  };

  return (
    <PageLayout>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "#dde6fb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={mouseImg}
            alt={friend.name}
            style={{ width: "90px", height: "90px", objectFit: "contain" }}
          />
        </div>

        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            margin: "16px 0 12px",
          }}
        >
          {friend.name}
        </p>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "13px",
            color: "#555",
            marginBottom: "32px",
          }}
        >
          {friend.birthYear} &nbsp;|&nbsp; {friend.school} &nbsp;|&nbsp;{" "}
          {friend.gender}
        </div>

        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "24px",
          }}
        >
          QR을 스캔했습니다.
          <br />
          친구로 추가하시겠습니까?
        </p>

        <div style={{ width: "200px" }}>
          <Button
            label="수락"
            onClick={handleAccept}
            variant="primary"
            size="full"
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default FriendAccept;
