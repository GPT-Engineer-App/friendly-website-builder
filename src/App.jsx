import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SidebarPage from "./pages/SidebarPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/sidebar" element={<SidebarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
