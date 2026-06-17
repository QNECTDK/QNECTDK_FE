import logoSmall from "../assets/logo-small.png";
import bellIcon from "../assets/icon-bell.png";
import scanIcon from "../assets/icon-scan.png";

function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      <img src={logoSmall} alt="Qnect" style={{ height: "28px" }} />
      <div style={{ display: "flex", gap: "16px" }}>
        <img
          src={bellIcon}
          alt="알림"
          style={{ width: "22px", height: "22px" }}
        />
        <img
          src={scanIcon}
          alt="QR 스캔"
          style={{ width: "22px", height: "22px" }}
        />
      </div>
    </div>
  );
}

export default TopBar;
