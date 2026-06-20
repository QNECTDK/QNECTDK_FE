import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";

function AddFriend() {
  const navigate = useNavigate();

  const options = [
    { label: "QR코드 스캔하기", path: "/qr-scan" },
    { label: "URL 붙여넣기", path: "/add-friend-url" },
  ];

  return (
    <PageLayout>
      <Header title="친구 추가하기" onBack={() => window.history.back()} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "140px",
        }}
      >
        {options.map((opt) => (
          <div
            key={opt.label}
            onClick={() => navigate(opt.path)}
            style={{
              border: "1px solid var(--color-primary)",
              backgroundColor: "#fdf0ea",
              borderRadius: "12px",
              padding: "18px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default AddFriend;
