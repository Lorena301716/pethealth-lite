import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h2>Sistema de Gestão - PetHealth Lite</h2>

      <div>
        <Link to="/pets">
          <button>Cadastro de Pets</button>
        </Link>
      </div>

      <div>
        <Link to="/consultas">
          <button>Agendar Consulta</button>
        </Link>
      </div>

      <div>
        <Link to="/listagem">
          <button>Lista de Pets</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;