function Header({ title, onBack, rightButton }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {onBack && (
          <button
            onClick={onBack}
            style={{ border: "none", background: "none" }}
          >
            ←
          </button>
        )}
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</span>
      </div>
      {rightButton}
    </div>
  );
}

export default Header;
