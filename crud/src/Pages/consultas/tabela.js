import { Table } from "react-bootstrap";
import "./consultas.css";
function Tabela({
  vetor,
  selecionar,
  altCantor,
  rmvCantor,
  vetorMus,
  selecionarMus,
}) {
  return (
    <>
      <section className="tabelaCantor">
     
        <table className="tabela">
        <h3>Cantores</h3>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Idade</th>
              <th>Selecionar</th>
            </tr>
          </thead>

          <tbody>
            {vetor.map((obj, indice) => (
              <tr key={indice}>
                <td>{indice + 1}</td>
                <td>{obj.nome_cantor}</td>
                <td>{obj.idade_cantor}</td>
                <td>
                  <button
                    className="btnSelecionar"
                    onClick={() => {
                      selecionar(indice);
                    }}
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
    </>
  );
}

export default Tabela;
