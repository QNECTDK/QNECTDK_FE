function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <h1 style={{ color: "var(--color-primary)", fontSize: "22px" }}>Qnect</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <span>🔔</span>
        <span>📷</span>
      </div>
    </div>
  );
}

export default TopBar;
