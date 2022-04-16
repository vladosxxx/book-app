import { Routes, Route } from "react-router-dom";
import HeadBook from "./components/headBook/HeadBook";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HeadBook />} />
      </Routes>
    </div>
  );
}

export default App;
