import { useState } from "react";
import Card from "../components/Card";
import { gridStyle } from "../styles/layout";

function TaskRunner() {
  const [task, setTask] = useState("summarize document");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  const runTask = () => {
    setResult({
      result: "This is a mocked AI output based on your input.",
      explanation: "The system analyzed the text and generated a response.",
      confidence: "92%",
      steps: [
        "Input received",
        "Text analyzed",
        "AI model processed request",
        "Result generated",
      ],
    });
  };

  return (
    <div style={{ marginLeft: "260px", padding: "20px" }}>

      {/* Title */}
      <h1 style={{ fontSize: "26px", marginBottom: "10px" }}>
        AI Task Runner
      </h1>

      <p style={{ color: "#6b7280", marginBottom: "20px" }}>
        Select a task type, enter input, and run AI processing.
      </p>

      {/* Task Selector */}
      <h3>Select Task Type</h3>
      <select
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px",
          borderRadius: "10px",
          color: "#111827",
          border: "1px solid #e5e7eb",
          background: "#fff",
        }}
      >
        <option>summarize document</option>
        <option>analyze invoice</option>
        <option>classify request</option>
      </select>

      {/* Input */}
      <h3>Input</h3>
      <textarea
        placeholder="Enter text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "140px",
          padding: "14px",
          marginBottom: "15px",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          background: "#f9fafb",
          color: "#111827",
          fontSize: "14px",
          outline: "none",
          resize: "none",
          transition: "0.2s",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}
      />

      {/* Button */}
      <button
        onClick={runTask}
        style={{
          padding: "10px 20px",
          background: "#111827",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "25px",
        }}
      >
        Run Task
      </button>

      {/* Output */}
      {result && (
        <div>
          <h3 style={{ marginBottom: "15px" }}>Output</h3>

          <div style={gridStyle}>
            <Card name="Result" description={result.result} category="Output" status="Live" />
            <Card name="Explanation" description={result.explanation} category="AI Reasoning" status="Live" />
            <Card name="Confidence" description={result.confidence} category="Metric" status="Live" />
            <Card name="Steps" description={result.steps.join(" → ")} category="Process" status="Live" />
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskRunner;