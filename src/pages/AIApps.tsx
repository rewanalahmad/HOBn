import Card from "../components/Card";
import { gridStyle, pageLayout } from "../styles/layout";

type App = {
  name: string;
  description: string;
  category: string;
  status: "Live" | "Coming Soon";
};

function AIApps() {
  const apps: App[] = [
    {
      name: "Invoice AI",
      description: "Extract invoices automatically",
      category: "Finance",
      status: "Live",
    },
    {
      name: "HR AI",
      description: "HR automation and employee management",
      category: "HR",
      status: "Live",
    },
    {
      name: "Supply Chain AI",
      description: "Optimize logistics and operations",
      category: "Operations",
      status: "Coming Soon",
    },
    {
      name: "Analysis Studio",
      description: "Data insights and analytics tools",
      category: "Analytics",
      status: "Live",
    },
    {
      name: "Presence Audit",
      description: "Data insights and analytics tools",
      category: "Analytics",
      status: "Live",
    },
    {
      name: "Compliance AI",
      description: "Data insights and analytics tools",
      category: "Analytics",
      status: "Live",
    },
  ];

  return (
    <div style={pageLayout}>

      {/* Title */}
      <h1 style={{ fontSize: "26px" }}>AI Apps</h1>
      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Browse available AI applications in your platform.
      </p>

      {/* Grid */}
      <div style={gridStyle}>
        {apps.map((app, i) => (
          <Card
            key={i}
            name={app.name}
            description={app.description}
            category={app.category}
            status={app.status}
            onClick={() => alert(`Opening ${app.name}`)}
          />
        ))}
      </div>

    </div>
  );
}

export default AIApps;