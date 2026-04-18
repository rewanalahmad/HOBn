import Card from "../components/Card";
import { gridStyle } from "../styles/layout";

function AnalysisStudio() {
    return(
        <div>
        <h1>Analysis Studio</h1>
        <h3>Dataset Upload</h3>
        <div style={gridStyle}>
        <Card
          name="Upload Dataset"
          description="Drop CSV, JSON or Excel file here (mock upload)"
          category="Input"
          status="Live"/>
        <h3>Dataset Summary</h3>
      <div  style={{  display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px",}}>
              </div>
        <Card name="Total Rows" description="12,450 rows processed" category="Dataset" status="Live"/>
        <Card name="Missing Values" description="3.2% missing data detected" category="Dataset" status="Live"/>
        <Card name="Data Quality" description="Overall quality: 87% clean data" category="Dataset" status="Live"/>
        </div>
      <h3>Insights</h3>
      <div  style={{  display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px",}}>
        <Card  name="Trend Insight" description="Sales increased by 18% over the last month" category="Insight" status="Live" />
        <Card  name="Trend Insight"  description="Sales increased by 18% over the last month"  category="Insight"  status="Live"      />
        </div>
      <h3>Anomaly Detection</h3>
      <div  style={{  display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px",}}>
        <Card name="Anomaly Detected"  description="Unusual spike detected in dataset on Day 14"  category="Alert"  status="Coming Soon"/>
      </div>
      <h3>Visualization Suggestions</h3>
      <div  style={{  display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px",}}>
        <Card
          name="Recommended Chart"
          description="Line chart for trend analysis"
          category="Visualization"
          status="Live"
        />
        <Card  name="Alternative Chart" description="Bar chart for category comparison" category="Visualization"status="Live"/>
        </div>
    </div>
    );
}

export default AnalysisStudio;