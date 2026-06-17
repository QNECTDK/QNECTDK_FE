import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import mouseImg from "../assets/animals/mouse.png";
import dragonImg from "../assets/animals/dragon.png";
import sheepImg from "../assets/animals/sheep.png";
import pigImg from "../assets/animals/pig.png";
import roosterImg from "../assets/animals/rooster.png";
import tigerImg from "../assets/animals/tiger.png";

const dummyQuiz = {
  optionA: { label: "바다", emoji: "🌊" },
  optionB: { label: "산", emoji: "⛰️" },
  votes: {
    바다: [
      { name: "이서현", img: roosterImg },
      { name: "구서연", img: tigerImg },
    ],
    산: [
      { name: "이무영", img: mouseImg },
      { name: "김민혁", img: dragonImg },
      { name: "강민정", img: sheepImg },
      { name: "김경민", img: pigImg },
    ],
  },
};

function VoteResult() {
  const [tab, setTab] = useState(dummyQuiz.optionB.label); // 기본은 둘 중 하나

  const options = [dummyQuiz.optionB.label, dummyQuiz.optionA.label];

  return (
    <PageLayout>
      <Header title="퀴즈" onBack={() => window.history.back()} />

      <div style={{ display: "flex", borderBottom: "1px solid #eee" }}>
        {options.map((label) => (
          <button
            key={label}
            onClick={() => setTab(label)}
            style={{
              flex: 1,
              padding: "12px 0",
              border: "none",
              background: "none",
              fontWeight: tab === label ? "bold" : "normal",
              borderBottom:
                tab === label ? "2px solid var(--color-primary)" : "none",
              color: tab === label ? "var(--color-primary)" : "#888",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "16px" }}>
        {dummyQuiz.votes[tab].map((friend, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 0",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#f5f5f5",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={friend.img}
                alt={friend.name}
                style={{ width: "48px", height: "48px", objectFit: "contain" }}
              />
            </div>
            <span>{friend.name}</span>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default VoteResult;
