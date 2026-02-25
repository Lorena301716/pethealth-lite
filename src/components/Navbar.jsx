import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  function active(path) {
    return location.pathname === path ? "active" : "";
  }

  return (
    <nav className="navbar">
      <div className="logo">🐾 PetHealth Lite</div>

      <div className="links">
        <Link className={active("/")} to="/">Home</Link>
        <Link className={active("/pets")} to="/pets">Pacientes</Link>
        <Link className={active("/consultas")} to="/consultas">Consultas</Link>
        <Link className={active("/listagem")} to="/listagem">Listagem</Link>
      </div>
    </nav>
  );
}

export default Navbar;