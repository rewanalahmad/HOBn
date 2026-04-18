import { NavLink } from "react-router-dom";
import { gridStyle } from "../styles/layout";


function Sidebar() {
 const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    display: "block",
    padding: "10px",
    marginBottom: "8px",
    textDecoration: "none",
    color: isActive ? "white" : "white",
    background: isActive ? "#ae571a" : "transparent",
        borderRadius: "5px",
  });
  return (
    <div style={gridStyle}>
      <h2>AI-Pass</h2>
      <nav  style={gridStyle}>
        <NavLink to="/" style={linkStyle}>
          Workspace
        </NavLink>
        <NavLink to="/apps" style={linkStyle}>
          AI Apps
        </NavLink>
        <NavLink to="/usage" style={linkStyle}>
          Usage
        </NavLink>
        <NavLink to="/analysis" style={linkStyle}>
          Analysis Studio
        </NavLink>  
        <NavLink to="/task" style={linkStyle}>
          AI Task Runner
        </NavLink> 
        <NavLink to="/settings" style={linkStyle}>
          Settings
        </NavLink>  
        </nav>
    </div>
  )
}
export default Sidebar;