import Card from "../components/Card";

function AIApps() {
  const apps : App[]= [
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
    <div>
      <h1>AI Apps</h1>

      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", }}
      >
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
type App = {
  name: string;
  description: string;
  category: string;
  status: "Live" | "Coming Soon";
};
export default AIApps;