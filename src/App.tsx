import Sidebar from "./components/Sidebar.tsx";
import Header from "./components/Header.tsx";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import AIApps from "./pages/AIApps.tsx";
import Usage from "./pages/Usage.tsx";
import AnalysisStudio from "./pages/AnalysisStudio.tsx";
import TaskRunner from "./pages/TaskRunner";
function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Header */}
        <Header />
        <main style={{ padding: "20px", background: "#f5f5f5", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apps" element={<AIApps />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/analysis" element={<AnalysisStudio />} /> 
            <Route path="/task" element={<TaskRunner />} />   
            </Routes>
        </main>
                  {/* Content */}
        <main style={{ padding: "20px", background: "#f5f5f5", flex: 1 }}>
          <h1>Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default App;