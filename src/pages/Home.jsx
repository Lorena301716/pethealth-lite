import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Sistema de Gestão - PetHealth Lite</h2>

      <Link to="/pets">
        <button>Cadastro de Pets</button>
      </Link>

      <Link to="/consultas">
        <button>Agendar Consulta</button>
      </Link>

      <Link to="/listagem">
        <button>Lista de Pets</button>
      </Link>
    </div>
  );
}

export default Home;