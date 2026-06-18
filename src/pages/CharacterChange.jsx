import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import roosterImg from "../assets/animals/rooster.png";
import mouseImg from "../assets/animals/mouse.png";
import dragonImg from "../assets/animals/dragon.png";
import snakeImg from "../assets/animals/snake.png";

function CharacterChange() {
  const navigate = useNavigate();
  const currentCharacter = roosterImg;

  const ownedCharacters = [mouseImg, dragonImg, snakeImg];
  const [selected, setSelected] = useState(0);

  const handleChange = () => {
    console.log("캐릭터 변경:", ownedCharacters[selected]);
    navigate(-1);
  };

  return (
    <PageLayout>
      <Header title="프로필" onBack={() => window.history.back()} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {/* 현재 캐릭터 */}
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: "#fde3e3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <img
              src={currentCharacter}
              alt="현재 캐릭터"
              style={{ width: "90px", height: "90px", objectFit: "contain" }}
            />
          </div>
          <p
            style={{ marginTop: "16px", fontWeight: "bold", fontSize: "16px" }}
          >
            현재 캐릭터
          </p>
        </div>

        <div>
          <div style={{ borderTop: "1px solid #eee", marginBottom: "20px" }} />
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "16px",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            보유 캐릭터
          </p>

          <div
            style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            {ownedCharacters.map((char, i) => {
              const bgColors = ["#fde3d8", "#dff0d8", "#d6e7fb"];
              return (
                <div
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    width: "92px",
                    height: "92px",
                    borderRadius: "50%",
                    backgroundColor: bgColors[i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border:
                      selected === i
                        ? "3px solid var(--color-primary)"
                        : "3px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  {/* 보유 캐릭터 */}
                  <img
                    src={char}
                    alt={`캐릭터${i}`}
                    style={{
                      width: "56px",
                      height: "56px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <Button
          label="캐릭터 변경"
          onClick={handleChange}
          variant="primary"
          size="full"
        />
      </div>
    </PageLayout>
  );
}

export default CharacterChange;
