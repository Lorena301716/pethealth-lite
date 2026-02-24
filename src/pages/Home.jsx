import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>PetHealth Lite</h2>

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