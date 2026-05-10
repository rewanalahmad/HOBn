import Card from "../components/Card";
import { gridStyle, pageLayout } from "../styles/layout";

function AnalysisStudio() {
  return (
    <div style={pageLayout}>

      {/* Title */}
      <h1 style={{ fontSize: "26px" }}>Analysis Studio</h1>
      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Upload datasets and generate AI-driven insights.
      </p>

      {/* Dataset Upload */}
      <h3>Dataset Upload</h3>
      <div style={gridStyle}>
        <Card
          name="Upload Dataset"
          description="Drop CSV, JSON or Excel file here (mock upload)"
          category="Input"
          status="Live"
        />
      </div>

      {/* Dataset Summary */}
      <h3 style={{ marginTop: "25px" }}>Dataset Summary</h3>
      <div style={gridStyle}>
        <Card name="Total Rows" description="12,450 rows processed" category="Dataset" status="Live" />
        <Card name="Missing Values" description="3.2% missing data detected" category="Dataset" status="Live" />
        <Card name="Data Quality" description="Overall quality: 87% clean data" category="Dataset" status="Live" />
      </div>

      {/* Insights */}
      <h3 style={{ marginTop: "25px" }}>Insights</h3>
      <div style={gridStyle}>
        <Card name="Trend Insight" description="Sales increased by 18% over the last month" category="Insight" status="Live" />
        <Card name="Customer Behavior" description="Users prefer mobile interactions over desktop" category="Insight" status="Live" />
      </div>

      {/* Anomalies */}
      <h3 style={{ marginTop: "25px" }}>Anomaly Detection</h3>
      <div style={gridStyle}>
        <Card name="Anomaly Detected" description="Unusual spike detected in dataset on Day 14" category="Alert" status="Coming Soon" />
      </div>

      {/* Visualization */}
      <h3 style={{ marginTop: "25px" }}>Visualization Suggestions</h3>
      <div style={gridStyle}>
        <Card name="Recommended Chart" description="Line chart for trend analysis" category="Visualization" status="Live" />
        <Card name="Alternative Chart" description="Bar chart for category comparison" category="Visualization" status="Live" />
      </div>

    </div>
  );
}

export default AnalysisStudio;