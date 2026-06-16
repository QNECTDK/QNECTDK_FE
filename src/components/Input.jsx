function Input({ label, type = "text", value, onChange, error }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          border: error ? "1px solid red" : "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          width: "100%",
        }}
      />
      {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
    </div>
  );
}

export default Input;
