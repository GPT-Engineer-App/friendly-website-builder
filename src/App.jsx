import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SidebarPage from "./pages/SidebarPage.jsx";
import TopBar from "./components/TopBar.jsx"; // Import the TopBar component

function App() {
  return (
    <Router>
      <TopBar /> {/* Add the TopBar component here */}
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/sidebar" element={<SidebarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
