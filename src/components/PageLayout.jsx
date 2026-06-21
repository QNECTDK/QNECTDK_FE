function PageLayout({ children }) {
  return (
    <div
      style={{
        padding: "24px",
        boxSizing: "border-box",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        minHeight: 0,
      }}
    >
      {children}
    </div>
  );
}

export default PageLayout;
