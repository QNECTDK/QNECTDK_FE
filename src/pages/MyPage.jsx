import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import roosterImg from "../assets/animals/rooster.png";
import editIcon from "../assets/icon-edit.png";

function MyPage() {
  const navigate = useNavigate();

  // 회원가입 때 받은 정보 (실제로는 로그인한 사용자 데이터로 교체)
  const [profile, setProfile] = useState({
    name: "강지수", // 회원가입 때 받음
    birth: "2003.04.23", // 회원가입 때 받음
    school: "", // 회원가입 때 안 받음 → 빈칸
    mbti: "", // 회원가입 때 안 받음 → 빈칸
    drinkCapacity: "",
    hobby: "",
    favoriteFood: "",
  });

  const [editingField, setEditingField] = useState(null);

  const tags = ["음악감상", "밴드", "카페알바", "드라이브", "영화관람"];
  const tagColors = ["#FFD7B5", "#FFC9C9", "#D7E8FF", "#D7FFD9", "#F0D7FF"];
  const characterBgColor = "#fde3e3";

  const infoFields = [
    { label: "이름", key: "name" },
    { label: "학교", key: "school" },
    { label: "생년월일", key: "birth" },
    { label: "MBTI", key: "mbti" },
  ];

  const extraFields = [
    { label: "주량", key: "drinkCapacity" },
    { label: "취미", key: "hobby" },
    { label: "좋아하는 음식", key: "favoriteFood" },
  ];

  const handleSave = (key, value) => {
    setProfile({ ...profile, [key]: value });
    setEditingField(null);
  };

  const renderField = (field) => {
    const isEditing = editingField === field.key;
    const value = profile[field.key];

    return (
      <div
        key={field.key}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 0",
        }}
      >
        <span style={{ color: "#888", fontSize: "14px" }}>{field.label}</span>
        {isEditing ? (
          <input
            type="text"
            defaultValue={value}
            autoFocus
            onBlur={(e) => handleSave(field.key, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave(field.key, e.target.value);
            }}
            style={{
              fontSize: "14px",
              border: "1px solid var(--color-primary)",
              borderRadius: "6px",
              padding: "2px 8px",
              width: "140px",
              textAlign: "right",
            }}
          />
        ) : (
          <span
            style={{
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span style={{ color: value ? "#333" : "#bbb" }}>
              {value || "입력해주세요"}
            </span>
            <img
              src={editIcon}
              alt="편집"
              onClick={() => setEditingField(field.key)}
              style={{ width: "12px", height: "12px", cursor: "pointer" }}
            />
          </span>
        )}
      </div>
    );
  };

  return (
    <PageLayout>
      <Header title="프로필" onBack={() => window.history.back()} />

      <div
        style={{ textAlign: "center", marginTop: "24px", marginBottom: "20px" }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: characterBgColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={roosterImg}
              alt="캐릭터"
              style={{ width: "85px", height: "85px" }}
            />
          </div>
          <button
            onClick={() => navigate("/character-change")}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "white",
              border: "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img
              src={editIcon}
              alt="편집"
              style={{ width: "16px", height: "16px" }}
            />
          </button>
        </div>

        <p
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            margin: "16px 0 10px",
          }}
        >
          {profile.name}
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "227px",
            height: "25px",
            backgroundColor: characterBgColor,
            border: "1px solid black",
            borderRadius: "20px",
            fontSize: "12px",
            color: "#555",
          }}
        >
          03년생 | {profile.school} | 여성
        </div>
      </div>

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
        <div
          onClick={() => navigate("/interest-select")}
          style={{
            width: "23px",
            height: "23px",
            borderRadius: "50%",
            border: "1px solid black",
            background: "white",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
        >
          +
        </div>
        {tags.map((tag, i) => (
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

      <div
        style={{
          backgroundColor: "#fff7e0",
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
          나의 정보
        </p>
        {infoFields.map(renderField)}
        <div style={{ borderTop: "1px solid #eee", margin: "8px 0" }} />
        {extraFields.map(renderField)}
      </div>

      <Button
        label="퀴즈 생성"
        onClick={() => navigate("/quiz-create")}
        variant="primary"
        size="full"
      />
      <div style={{ height: "120px", flexShrink: 0 }} />
    </PageLayout>
  );
}

export default MyPage;
