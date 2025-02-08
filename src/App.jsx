import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div className="px-3 sm:px-[5vw] lg:px-[9vw]">
      <Navbar/>
    </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
