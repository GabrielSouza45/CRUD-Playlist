import InputLabel from "../../Components/inputLabel/inputLabel";

const CadastroMusica = () => {
  return (
    <section className="cadastro-musica">
      <form className="cadastroMusica">
        <InputLabel
          texto="Nome da música"
          //change={aoDigitar}
          //valor={objMusica.nome_musica}
          nome="nome_musica"
          tipo="text"
          holder="Digite aqui"
        />

        <InputLabel
          texto="Ano de Lançamento"
          //change={aoDigitar}
          //valor={objCantor.nome_cantor}
          nome="ano_musica"
          tipo="number"
          holder="Digite o ano de lançamento"
        />

        <InputLabel
          texto="Cantor"
          //change={aoDigitar}
          //valor={objCantor.nome_cantor}
          nome="nome_cantor"
          tipo="text"
          holder="Digite aqui"
        />
      </form>
    </section>
  );
};

export default CadastroMusica;
