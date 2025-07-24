import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <>
  
      <div className="app">
          <div className="outlet">
            <Outlet />
          </div>
      </div>
    
    </>
  );
}

export default App;
