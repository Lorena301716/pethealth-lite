import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { medicoFixo } from "../services/medico";

const schema = z.object({
  petId: z.string().min(1, "Selecione um pet"),
  data: z.string().min(1, "Data é obrigatória"),
  motivo: z.string().min(3, "Descreva o motivo"),
});

function Consultas() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const petsSalvos = JSON.parse(localStorage.getItem("pets")) || [];
    setPets(petsSalvos);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    const consultasSalvas =
      JSON.parse(localStorage.getItem("consultas")) || [];

    const petSelecionado = pets[data.petId];

    const novaConsulta = {
      pet: petSelecionado.nomePet,
      tutor: petSelecionado.nomeTutor,
      data: data.data,
      motivo: data.motivo,
      medico: medicoFixo.nome,
    };

    consultasSalvas.push(novaConsulta);
    localStorage.setItem("consultas", JSON.stringify(consultasSalvas));

    alert("Consulta agendada com sucesso!");
    reset();
  }

  return (
    <div className="container">
      <h2>Agendamento de Consultas</h2>

      <p>
        Médico responsável: <strong>{medicoFixo.nome}</strong> -{" "}
        {medicoFixo.especialidade}
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <select {...register("petId")}>
            <option value="">Selecione um Pet</option>
            {pets.map((pet, index) => (
              <option key={index} value={index}>
                {pet.nomePet}
              </option>
            ))}
          </select>
          {errors.petId && <p>{errors.petId.message}</p>}
        </div>

        <div>
          <input type="date" {...register("data")} />
          {errors.data && <p>{errors.data.message}</p>}
        </div>

        <div>
          <input placeholder="Motivo da consulta" {...register("motivo")} />
          {errors.motivo && <p>{errors.motivo.message}</p>}
        </div>

        <button type="submit">Agendar</button>
      </form>
    </div>
  );
}

export default Consultas;