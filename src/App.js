import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/about" element={About()} />
        <Route path="/contact" element={Contact()} />
      </Routes>
    </>
  );
}

export default App;
