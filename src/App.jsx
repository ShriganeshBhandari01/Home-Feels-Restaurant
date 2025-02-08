import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <div className="px-3 sm:px-[5vw] lg:px-[9vw] ">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
