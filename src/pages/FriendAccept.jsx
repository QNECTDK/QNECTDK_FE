import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Button from "../components/Button";
import { getProfileByPublicCode } from "../api/profile";
import { addFriend } from "../api/friend";
import { getCharacterImage } from "../utils/characterMap";

// 백엔드는 gender를 "MALE"/"FEMALE"로 내려줌 → 화면 표시용 한글로 변환
const genderLabel = (gender) => {
  if (gender === "MALE") return "남성";
  if (gender === "FEMALE") return "여성";
  return "";
};

function FriendAccept() {
  const location = useLocation();
  const navigate = useNavigate();

  const publicCode = location.state?.publicCode;

  const [friend, setFriend] = useState(null);
  const [isLoading, setIsLoading] = useState(!!publicCode);
  const [errorMessage, setErrorMessage] = useState(
    publicCode ? "" : "QR 정보를 찾을 수 없습니다",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultStatus, setResultStatus] = useState(null); // "added" | null

  useEffect(() => {
    if (!publicCode) {
      return;
    }

    let isCancelled = false;

    const fetchData = async () => {
      try {
        const profileResult = await getProfileByPublicCode(publicCode);
        if (isCancelled) return;
        setFriend(profileResult.data);
      } catch (err) {
        console.error("정보 조회 실패", err);
        if (!isCancelled) {
          setErrorMessage("친구 정보를 불러오지 못했습니다");
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [publicCode]);

  // 수락 → 상호 친구 등록(+첫 만남 퀴즈 알림). 거절은 그냥 화면을 벗어나면 됨(서버 호출 없음).
  const handleAccept = async () => {
    setIsSubmitting(true);
    try {
      await addFriend(friend.userId);
      setResultStatus("added");
    } catch (err) {
      console.error("친구 추가 실패", err);
      setErrorMessage("처리에 실패했습니다");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <p style={{ textAlign: "center", marginTop: "40px" }}>불러오는 중...</p>
      </PageLayout>
    );
  }

  if (errorMessage && !friend) {
    return (
      <PageLayout>
        <p style={{ textAlign: "center", marginTop: "40px", color: "red" }}>
          {errorMessage}
        </p>
      </PageLayout>
    );
  }

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
            src={getCharacterImage(friend.characterId)}
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
          {friend.age}세 &nbsp;|&nbsp; {friend.school} &nbsp;|&nbsp;{" "}
          {genderLabel(friend.gender)}
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
          {resultStatus === "added" ? (
            <>친구가 되었습니다!</>
          ) : (
            <>
              QR을 스캔했습니다.
              <br />
              {friend.name}님을 친구로 추가하시겠습니까?
            </>
          )}
        </p>

        {errorMessage && (
          <p style={{ color: "red", fontSize: "13px", marginBottom: "12px" }}>
            {errorMessage}
          </p>
        )}

        <div style={{ width: "200px" }}>
          {resultStatus ? (
            <Button
              label="홈으로"
              onClick={() => navigate("/home")}
              variant="primary"
              size="full"
            />
          ) : (
            <>
              <Button
                label={isSubmitting ? "처리 중..." : "수락"}
                onClick={handleAccept}
                variant="primary"
                size="full"
                disabled={isSubmitting}
              />
              <div style={{ height: "10px" }} />
              <Button
                label="거절"
                onClick={() => navigate(-1)}
                variant="secondary"
                size="full"
              />
            </>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default FriendAccept;
