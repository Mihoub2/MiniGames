import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Memory from "./pages/Memory";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory" element={<Memory />} />
      </Routes>
    </Router>
  );
}

export default App;
