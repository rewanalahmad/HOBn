import Card from "../components/Card";
import { gridStyle, pageLayout } from "../styles/layout";

function Dashboard() {
  return (
    <div style={pageLayout}>

      {/* 1. Welcome Section */}
      <div style={{ marginBottom: "25px" }}>
        <h1 style={{ fontSize: "26px" }}>Welcome back 👋</h1>
        <p style={{ color: "#6b7280" }}>
          Here’s what’s happening with your AI platform today.
        </p>
      </div>

      {/* 2. Quick Actions */}
      <h3>Quick Actions</h3>
      <div style={gridStyle}>
        <Card name="Run AI Task" description="Execute AI automation tasks" category="Action" status="Live" />
        <Card name="Open Invoice AI" description="Process invoices automatically" category="Finance" status="Live" />
        <Card name="Open Analysis Studio" description="Analyze datasets and insights" category="Analytics" status="Live" />
        <Card name="View Marketplace Apps" description="Explore available AI applications" category="Apps" status="Coming Soon" />
      </div>

      {/* 3. Recent Activity */}
      <h3 style={{ marginTop: "25px" }}>Recent Activity</h3>

      <div style={{
        background: "white",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        marginBottom: "25px"
      }}>
        <ul style={{ margin: 0, paddingLeft: "18px", color: "#374151" }}>
          <li>✔ Invoice processed - Amazon</li>
          <li>✔ AI task completed - Summary generation</li>
          <li>✔ Dataset analyzed - Sales report</li>
        </ul>
      </div>

      {/* 4. Shortcuts */}
      <h3>Shortcuts</h3>
      <div style={gridStyle}>
        <Card name="AI Apps" description="Go to all AI applications" category="Navigation" status="Live" />
        <Card name="Usage" description="Check your plan usage" category="Billing" status="Live" />
        <Card name="Settings" description="Manage system settings" category="System" status="Coming Soon" />
      </div>

    </div>
  );
}

export default Dashboard;