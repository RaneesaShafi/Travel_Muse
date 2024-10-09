import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import About from "./assets/pages/About";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Login from "./assets/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
