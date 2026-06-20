import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import shareIcon from "../assets/icon-share.png";

function AddFriendUrl() {
  const [url, setUrl] = useState("");

  // 임시 더미값 - 나중에 백엔드에서 로그인한 사용자의 고유 URL을 받아와야 함
  const myLink = "https://forms.gle/ruK1P7kak8ghN";

  const handleAdd = () => {
    console.log("URL로 친구 추가:", url);
  };

  return (
    <PageLayout>
      <Header title="URL로 추가" onBack={() => window.history.back()} />

      <div style={{ marginTop: "140px" }}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="친구의 URL을 입력해 주세요"
          style={{
            width: "100%",
            height: "44px",
            border: "1px solid var(--color-primary)",
            borderRadius: "30px",
            padding: "0 16px",
            fontSize: "13px",
            boxSizing: "border-box",
            marginBottom: "16px",
          }}
        />
        <div style={{ width: "60%", margin: "0 auto" }}>
          <Button
            label="추가하기"
            onClick={handleAdd}
            variant="primary"
            size="full"
          />
        </div>
      </div>

      <div style={{ marginTop: "110px" }}>
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "12px",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          나의 URL 공유하기
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "44px",
            border: "1px solid var(--color-primary)",
            borderRadius: "30px",
            padding: "0 16px",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              color: "#555",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
              textAlign: "left",
            }}
          >
            {myLink}
          </span>
          <div
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "#ddd",
              margin: "0 12px",
            }}
          />
          <img
            src={shareIcon}
            alt="공유"
            style={{ width: "16px", height: "16px" }}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default AddFriendUrl;
