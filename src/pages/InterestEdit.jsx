import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import travelIcon from "../assets/categories/travel.png";
import exerciseIcon from "../assets/categories/exercise.png";
import musicIcon from "../assets/categories/music.png";
import gameIcon from "../assets/categories/game.png";
import cookingIcon from "../assets/categories/cooking.png";
import photoIcon from "../assets/categories/photo.png";
import artIcon from "../assets/categories/art.png";
import techIcon from "../assets/categories/tech.png";
import fashionIcon from "../assets/categories/fashion.png";
import businessIcon from "../assets/categories/business.png";
import selfDevIcon from "../assets/categories/self-dev.png";
import petIcon from "../assets/categories/pet.png";
import bookIcon from "../assets/categories/book.png";

const addedInterests = [
  { label: "여행", icon: travelIcon },
  { label: "운동", icon: exerciseIcon },
  { label: "음악", icon: musicIcon },
  { label: "게임", icon: gameIcon },
  { label: "요리", icon: cookingIcon },
  { label: "자기계발", icon: selfDevIcon },
  { label: "반려동물", icon: petIcon },
  { label: "독서", icon: bookIcon },
];

const allInterests = [
  { label: "사진", icon: photoIcon },
  { label: "예술", icon: artIcon },
  { label: "기술/IT", icon: techIcon },
  { label: "패션", icon: fashionIcon },
  { label: "비즈니스", icon: businessIcon },
];

function InterestEdit() {
  const navigate = useNavigate();
  const [added, setAdded] = useState(addedInterests.map((i) => i.label));

  const toggleAdd = (label) => {
    setAdded((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };

  return (
    <PageLayout>
      <Header title="프로필" onBack={() => window.history.back()} />

      <p
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "8px",
          marginBottom: "20px",
        }}
      >
        관심사 수정
      </p>

      <p style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "14px" }}>
        추가된 관심사
      </p>
      <div
        className="tag-scroll"
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          marginBottom: "28px",
          paddingBottom: "4px",
        }}
      >
        {addedInterests
          .filter((i) => added.includes(i.label))
          .map((item) => (
            <div
              key={item.label}
              style={{ textAlign: "center", flexShrink: 0 }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#fdf3e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 8px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: "26px", height: "26px" }}
                />
              </div>
              <p style={{ fontSize: "13px" }}>{item.label}</p>
            </div>
          ))}
      </div>

      <p style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "14px" }}>
        전체 관심사
      </p>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
      >
        {allInterests.map((item) => {
          const isAdded = added.includes(item.label);
          return (
            <div
              key={item.label}
              onClick={() => toggleAdd(item.label)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ddd",
                borderRadius: "20px",
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  style={{ width: "18px", height: "18px" }}
                />
                <span style={{ fontSize: "14px" }}>{item.label}</span>
              </div>
              <span
                style={{
                  fontSize: "16px",
                  color: isAdded ? "var(--color-primary)" : "#aaa",
                  fontWeight: "bold",
                }}
              >
                {isAdded ? "✓" : "+"}
              </span>
            </div>
          );
        })}
      </div>
    </PageLayout>
  );
}

export default InterestEdit;
