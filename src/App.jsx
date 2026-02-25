import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Consultas from "./pages/Consultas";
import Listagem from "./pages/Listagem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;