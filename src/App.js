import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Work from "./components/work/Work.js";
import Contact from "./components/contact/Contact.js";
import Home from "./components/home/Home.js";

function App() {
  return (
    <BrowserRouter>
      <div className="div-container">
        <div className="div-center">
          <Header />
        </div>
        <div style={{ flex: 1, padding: "50px" }} className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="div-center div-center-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
