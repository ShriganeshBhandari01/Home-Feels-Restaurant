import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <div className="px-3 sm:px-[5vw] lg:px-[9vw]">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
