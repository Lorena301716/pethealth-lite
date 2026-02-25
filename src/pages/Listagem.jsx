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
      <h2>Pacientes Cadastrados</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Tutor</th>
          </tr>
        </thead>
        <tbody>
          {pets.length === 0 ? (
            <tr>
              <td colSpan="3">Nenhum paciente cadastrado.</td>
            </tr>
          ) : (
            pets.map((pet, index) => (
              <tr key={index}>
                <td>{pet.nomePet}</td>
                <td>{pet.especie}</td>
                <td>{pet.nomeTutor}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px" }}>Consultas Agendadas</h2>

      <table>
        <thead>
          <tr>
            <th>Pet</th>
            <th>Tutor</th>
            <th>Data</th>
            <th>Motivo</th>
            <th>Médico</th>
          </tr>
        </thead>
        <tbody>
          {consultas.length === 0 ? (
            <tr>
              <td colSpan="5">Nenhuma consulta agendada.</td>
            </tr>
          ) : (
            consultas.map((consulta, index) => (
              <tr key={index}>
                <td>{consulta.pet}</td>
                <td>{consulta.tutor}</td>
                <td>{consulta.data}</td>
                <td>{consulta.motivo}</td>
                <td>{consulta.medico}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Listagem;