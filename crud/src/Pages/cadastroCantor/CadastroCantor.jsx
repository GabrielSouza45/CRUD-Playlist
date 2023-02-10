import InputLabel from "../../Components/inputLabel/inputLabel";

const CadastroCantor = () => {
  return (
      <section className="cadastro-Cantor">
        <form className="cadastroCantor">
          <InputLabel
            texto="Nome do cantor"
            //change={aoDigitar}
            //valor={objCantor.nome_cantor}
            nome="nome_cantor"
            tipo="text"
            holder="Digite aqui"
          />

          <InputLabel
            texto="Idade do cantor"
            //change={aoDigitar}
            //valor={objCantor.idade_cantor}
            nome="idade_cantor"
            tipo="number"
            holder="Digite aqui em anos"
          />
        </form>
      </section>
  );
};

export default CadastroCantor;
