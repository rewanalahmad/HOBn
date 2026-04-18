import { gridStyle } from "../styles/layout";

const cardStyle = {
  background: "#ae571a",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #e5e5e5",
  cursor: "pointer",
  transition: "0.2s",
};

export default function Usage() {
  return (
    <div>
      {/* Title */}
      <h1>Usage & Plan</h1>

      {/* Current Plan */}
      <div style={cardStyle}>
        <h3>Current Plan</h3>
        <p>Free Tier</p>
      </div>

      {/* Stats Section */}
      <div style={gridStyle}>
        <div style={cardStyle}>
          <h3>Requests Used</h3>
          <p>24</p>
        </div>

        <div style={cardStyle}>
          <h3>Remaining</h3>
          <p>76</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Limit</h3>
          <p>100</p>
        </div>
      </div>

      {/* Upgrade Button */}
      <div style={{ marginTop: "20px" }}>
        <button
          style={{   padding: "10px 20px",     cursor: "pointer",    background: "#970606",   color: "white", border: "none", borderRadius: "5px", }}>
          Upgrade Plan
        </button>
      </div>
    </div>
  );
}