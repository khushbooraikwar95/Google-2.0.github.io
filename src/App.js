import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<h1>This is search page</h1>}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* Home (the one with the search on)  */}

        {/* SearchPage (The results page)}  */}
      </Router>
    </div>
  );
}

export default App;
