import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CombinedPage from "./pages/CombinedPage.jsx"; // Import the CombinedPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CombinedPage />} />
      </Routes>
    </Router>
  );
}

export default App;