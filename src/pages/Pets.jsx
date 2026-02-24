import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nomePet: z.string().min(2, "Nome do pet é obrigatório"),
  nomeTutor: z.string().min(2, "Nome do tutor é obrigatório"),
  especie: z.string().min(2, "Espécie é obrigatória"),
});

function Pets() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function onSubmit(data) {
    const petsSalvos = JSON.parse(localStorage.getItem("pets")) || [];
    petsSalvos.push(data);
    localStorage.setItem("pets", JSON.stringify(petsSalvos));

    alert("Pet cadastrado com sucesso!");
    reset();
  }

  return (
    <div>
      <h2>Cadastro de Pets</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Nome do Pet" {...register("nomePet")} />
          {errors.nomePet && <p>{errors.nomePet.message}</p>}
        </div>

        <div>
          <input placeholder="Nome do Tutor" {...register("nomeTutor")} />
          {errors.nomeTutor && <p>{errors.nomeTutor.message}</p>}
        </div>

        <div>
          <input placeholder="Espécie" {...register("especie")} />
          {errors.especie && <p>{errors.especie.message}</p>}
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Pets;