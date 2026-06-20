import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import snakeImg from "../assets/animals/snake.png";
import Button from "../components/Button";
import editIcon from "../assets/icon-edit.png";

function FriendProfile() {
  const navigate = useNavigate();
  const location = useLocation();

  // 더미 데이터 - 나중에 API로 친구 정보 받아오면 교체
  const friend = {
    name: "정다연",
    school: "동덕여자대학교",
    birth: "2005.03.16",
    gender: "여성",
    mbti: "INFP",
    drinkCapacity: "맥주 2잔",
    tags: ["여행", "콘서트", "맛집투어", "음악감상", "영화"],
    hobby: "OTT 보기, 음악감상",
    favoriteFood: "한식, 중식, 면요리",
    img: snakeImg,
    bgColor: "#dde6fb",
    quizCompleted: false,
  };

  const [memo, setMemo] = useState("");
  const [isEditingMemo, setIsEditingMemo] = useState(false);

  const tagColors = ["#FFD7B5", "#FFC9C9", "#D7E8FF", "#D7FFD9", "#F0D7FF"];

  const infoFields = [
    { label: "이름", value: friend.name },
    { label: "학교", value: friend.school },
    { label: "생년월일", value: friend.birth },
    { label: "MBTI", value: friend.mbti },
  ];

  const extraFields = [
    { label: "주량", value: friend.drinkCapacity },
    { label: "취미", value: friend.hobby },
    { label: "좋아하는 음식", value: friend.favoriteFood },
  ];

  const handleDelete = () => {
    if (window.confirm("친구를 삭제하시겠습니까?")) {
      console.log("친구 삭제:", friend.name);
      navigate(-1);
    }
  };

  return (
    <PageLayout>
      <Header
        title="친구"
        onBack={() => window.history.back()}
        rightButton={
          <span
            onClick={handleDelete}
            style={{ cursor: "pointer", fontSize: "18px" }}
          >
            🗑
          </span>
        }
      />

      <div
        style={{ textAlign: "center", marginTop: "24px", marginBottom: "20px" }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: friend.bgColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <img
            src={friend.img}
            alt={friend.name}
            style={{ width: "85px", height: "85px", objectFit: "contain" }}
          />
        </div>

        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            margin: "16px 0 10px",
          }}
        >
          {friend.name}
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "227px",
            height: "25px",
            backgroundColor: friend.bgColor,
            border: "1px solid black",
            borderRadius: "20px",
            fontSize: "12px",
            color: "#555",
          }}
        >
          {friend.birth.slice(2, 4)}년생 | {friend.school} | {friend.gender}
        </div>
      </div>

      {/* 태그 - + 버튼 없음 */}
      <div
        className="tag-scroll"
        style={{
          display: "flex",
          gap: "6px",
          alignItems: "center",
          overflowX: "auto",
          minHeight: "32px",
          flexShrink: 0,
          marginBottom: "20px",
          marginTop: "1px",
        }}
      >
        {friend.tags.map((tag, i) => (
          <span
            key={tag}
            style={{
              backgroundColor: tagColors[i % tagColors.length],
              border: "1px solid black",
              borderRadius: "20px",
              width: "61px",
              height: "23px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              flexShrink: 0,
              boxSizing: "border-box",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 메모 입력칸 */}
      <div
        style={{
          border: "1px solid black",
          borderRadius: "12px",
          padding: "12px",
          minHeight: "70px",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        {isEditingMemo ? (
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            onBlur={() => setIsEditingMemo(false)}
            autoFocus
            placeholder="메모"
            style={{
              width: "100%",
              height: "50px",
              border: "none",
              outline: "none",
              resize: "none",
              fontSize: "14px",
              fontFamily: "inherit",
            }}
          />
        ) : (
          <p
            style={{
              fontSize: "14px",
              color: memo ? "#333" : "#aaa",
              margin: 0,
            }}
          >
            {memo || "메모"}
          </p>
        )}
        <img
          src={editIcon}
          alt="편집"
          onClick={() => setIsEditingMemo(true)}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "12px",
            width: "14px",
            height: "14px",
            cursor: "pointer",
          }}
        />
      </div>

      {/* 친구 정보 카드 - 색 다름 */}
      <div
        style={{
          backgroundColor: "#fdeee0",
          border: "1px solid black",
          borderRadius: "16px",
          padding: "16px",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          친구 정보
        </p>
        {infoFields.map((field) => (
          <div
            key={field.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
            }}
          >
            <span style={{ color: "#888", fontSize: "14px" }}>
              {field.label}
            </span>
            <span style={{ fontSize: "14px" }}>{field.value}</span>
          </div>
        ))}
        <div style={{ borderTop: "1px solid #eee", margin: "8px 0" }} />
        {extraFields.map((field) => (
          <div
            key={field.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
            }}
          >
            <span style={{ color: "#888", fontSize: "14px" }}>
              {field.label}
            </span>
            <span style={{ fontSize: "14px" }}>{field.value}</span>
          </div>
        ))}
      </div>

      {/* 퀴즈 완료/풀기 버튼 */}
      <Button
        label={friend.quizCompleted ? "퀴즈 완료" : "퀴즈 풀기"}
        onClick={() => !friend.quizCompleted && navigate("/quiz-solve")}
        variant={friend.quizCompleted ? "secondary" : "primary"}
        size="full"
      />

      <div style={{ height: "90px", flexShrink: 0 }} />
    </PageLayout>
  );
}

export default FriendProfile;
