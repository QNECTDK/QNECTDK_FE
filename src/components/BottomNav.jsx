function BottomNav() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "12px 0",
        borderTop: "1px solid #eee",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <button>홈</button>
      <button>친구</button>
      <button>퀴즈</button>
      <button>프로필</button>
    </div>
  );
}

export default BottomNav;
