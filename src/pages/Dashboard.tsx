import Card from "../components/Card";
import { gridStyle } from "../styles/layout";


function Dashboard() {
  return (
    <div>
      {/* 1. Welcome Section */}
      <div style={gridStyle}>
        <h1>Welcome back 👋</h1>
        <p>Here is your AI-Pass workspace overview</p>
      </div>

      {/* 2. Quick Actions */}
      <h3>Quick Actions</h3>
<div style={gridStyle}>
        <Card
          name="Run AI Task"
          description="Execute AI automation tasks"
          category="Action"
          status="Live"
        />

        <Card
          name="Open Invoice AI"
          description="Process invoices automatically"
          category="Finance"
          status="Live"
        />

        <Card
          name="Open Analysis Studio"
          description="Analyze datasets and insights"
          category="Analytics"
          status="Live"
        />

        <Card
          name="View Marketplace Apps"
          description="Explore available AI applications"
          category="Apps"
          status="Coming Soon"
        />
      </div>

      {/* 3. Recent Activity */}
      <h3>Recent Activity</h3>

      <div style={gridStyle}>
        <ul>
          <li>✔ Invoice processed - Amazon</li>
          <li>✔ AI task completed - Summary generation</li>
          <li>✔ Dataset analyzed - Sales report</li>
        </ul>
      </div>

      {/* 4. Shortcuts */}
      <h3>Shortcuts</h3>

      <div style={gridStyle}>
        <Card
          name="AI Apps"
          description="Go to all AI applications"
          category="Navigation"
          status="Live"
        />

        <Card
          name="Usage"
          description="Check your plan usage"
          category="Billing"
          status="Live"
        />

        <Card
          name="Settings"
          description="Manage system settings"
          category="System"
          status="Coming Soon"
        />
      </div>
    </div>
  );
}

export default Dashboard;