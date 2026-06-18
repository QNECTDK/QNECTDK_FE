function Button({ label, onClick, variant = "primary", size = "full" }) {
  const styles = {
    primary: { backgroundColor: "var(--color-primary)", color: "white" },
    secondary: { backgroundColor: "#EEEEEE", color: "#333" },
  };

  const sizes = {
    full: { width: "100%", padding: "14px" },
    small: { width: "auto", padding: "8px 16px" },
  };

  return (
    <div
      onClick={onClick}
      style={{
        ...styles[variant],
        ...sizes[size],
        borderRadius: "8px",
        fontSize: "16px",
        textAlign: "center",
        cursor: "pointer",
        boxSizing: "border-box",
        display: "block",
        lineHeight: "1.5",
      }}
    >
      {label}
    </div>
  );
}

export default Button;
