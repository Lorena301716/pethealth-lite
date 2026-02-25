import { useEffect, useState } from "react";

function Listagem() {
  const [pets, setPets] = useState([]);
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const petsSalvos = JSON.parse(localStorage.getItem("pets")) || [];
    const consultasSalvas =
      JSON.parse(localStorage.getItem("consultas")) || [];

    setPets(petsSalvos);
    setConsultas(consultasSalvas);
  }, []);

  return (
    <div className="container">
      <h2>Lista de Pets</h2>

      <ul>
        {pets.map((pet, index) => (
          <li key={index}>
            {pet.nomePet} - Tutor: {pet.nomeTutor}
          </li>
        ))}
      </ul>

      <h2>Consultas Agendadas</h2>

      <ul>
        {consultas.map((consulta, index) => (
          <li key={index}>
            {consulta.pet} - {consulta.data} - {consulta.motivo} - Médico:{" "}
            {consulta.medico}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listagem;