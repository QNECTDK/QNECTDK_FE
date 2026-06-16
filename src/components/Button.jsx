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
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        ...sizes[size],
        borderRadius: "8px",
        border: "none",
        fontSize: "16px",
      }}
    >
      {label}
    </button>
  );
}

export default Button;
