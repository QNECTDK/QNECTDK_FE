import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import travelIcon from "../assets/categories/travel.png";
import exerciseIcon from "../assets/categories/exercise.png";
import musicIcon from "../assets/categories/music.png";
import gameIcon from "../assets/categories/game.png";
import cookingIcon from "../assets/categories/cooking.png";
import selfDevIcon from "../assets/categories/self-dev.png";
import petIcon from "../assets/categories/pet.png";
import bookIcon from "../assets/categories/book.png";
import movieIcon from "../assets/categories/movie.png";

const categories = {
  여행: ["동남아", "일본", "중국", "미국", "유럽", "캐나다", "남미", "호주"],
  운동: ["요가", "헬스", "필라테스"],
  음악: ["콘서트", "페스티벌", "락", "밴드"],
  게임: ["롤", "오버워치", "배틀그라운드", "루미큐브", "서든어택"],
  요리: ["한식", "일식", "중식", "양식", "동남아 요리", "맛집투어"],
  자기계발: ["독서", "주식"],
  반려동물: ["강아지", "고양이", "도마뱀"],
  독서: [],
  영화: [],
};

const categoryIcons = {
  여행: travelIcon,
  운동: exerciseIcon,
  음악: musicIcon,
  게임: gameIcon,
  요리: cookingIcon,
  자기계발: selfDevIcon,
  반려동물: petIcon,
  독서: bookIcon,
  영화: movieIcon,
};

function InterestSelect() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <PageLayout>
      <Header title="프로필" onBack={() => window.history.back()} />

      {!activeCategory ? (
        <>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            관심사 선택
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {Object.keys(categoryIcons).map((cat) => (
              <div
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ textAlign: "center", cursor: "pointer" }}
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
                    src={categoryIcons[cat]}
                    alt={cat}
                    style={{ width: "26px", height: "26px" }}
                  />
                </div>
                <p style={{ fontSize: "13px" }}>{cat}</p>
              </div>
            ))}
            <div style={{ textAlign: "center", cursor: "pointer" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  margin: "0 auto",
                }}
              >
                +
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p
            style={{
              color: "var(--color-primary)",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            {activeCategory}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {categories[activeCategory]?.map((tag) => (
              <span
                key={tag}
                onClick={() => toggleTag(tag)}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "20px",
                  width: "calc((100% - 24px) / 4)",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  backgroundColor: selectedTags.includes(tag)
                    ? "var(--color-primary)"
                    : "white",
                  color: selectedTags.includes(tag) ? "white" : "#333",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </>
      )}
    </PageLayout>
  );
}

export default InterestSelect;
