import { useState } from "react";
import Card from "../components/Card";

function TaskRunner() {
  const [task, setTask] = useState("summarize document");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  const runTask = () => {
    // Mock JSON response (simulating AI output)
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
    <div>
      {/* Title */}
      <h1>AI Task Runner</h1>

      {/* Task Selector */}
      <h3>Select Task Type</h3>
      <select
        value={task}
        onChange={(e) => setTask(e.target.value)}style={{padding: "10px",width: "100%",marginBottom: "15px",}}>
        <option>summarize document</option>
        <option>analyze invoice</option>
        <option>classify request</option>
      </select>

      {/* Input Section */}
      <h3>Input</h3>
      <textarea
        placeholder="Enter text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%",  height: "120px",  padding: "10px",  marginBottom: "15px", }} />

      {/* Run Button */}
      <button
        onClick={runTask}
        style={{  padding: "10px 20px", background: "black",  color: "white", border: "none", cursor: "pointer", marginBottom: "20px",}}>
        Run Task
      </button>

      {/* Output Section */}
      {result && (
        <div>
          <h3>Output</h3>

          <div style={{ display: "grid", gap: "15px" }}>
            <Card  name="Result" description={result.result}   category="Output" status="Live"/>

            <Card
              name="Explanation"
              description={result.explanation}
              category="AI Reasoning"
              status="Live"
            />

            <Card
              name="Confidence"
              description={result.confidence}
              category="Metric"
              status="Live"
            />

            <Card
              name="Steps"
              description={result.steps.join(" → ")}
              category="Process"
              status="Live"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskRunner;