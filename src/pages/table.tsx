import Header from "../components/header";
import styles from "../styles/Table.module.css";

export default function Table() {
  const lista = {
    Feijao: {
      info: {
        produto: "Feijão",
        marca: "juju",
        preco: "4.99",
        DataCompra: "27/05/2022",
        unidade: "1 kg",
        qtd: "20",
        comprado: true,
      },
    },

    Arroz: {
      info: {
        produto: "Arroz",
        marca: "Sepé",
        preco: "17.90",
        DataCompra: "27/05/2022",
        unidade: "1 kg",
        qtd: "2",
        comprado: true,
      },
    },
  };

  return (
    <>
      <Header page="Lista" />
      
      <div className={styles.option}>
        {/* <div className={styles.value}>R$ {199999}</div> */}
        <table  className={styles.tbZebra}>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Marca</th>
              <th>Preço</th>
              <th>Data de Compra</th>
              <th>Unidade</th>
              <th>Quantidade</th>
              <th>Comprado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lista.Arroz.info.produto}</td>
              <td>{lista.Arroz.info.marca}</td>
              <td>{lista.Arroz.info.preco}</td>
              <td>{lista.Arroz.info.unidade}</td>
              <td>{lista.Arroz.info.qtd}</td>
              <td>{lista.Arroz.info.DataCompra}</td>
              <td><input className={styles.container} type="checkbox"  name="bought"/></td>
            </tr>

            <tr>
              <td>{lista.Feijao.info.produto}</td>
              <td>{lista.Feijao.info.marca}</td>
              <td>{lista.Feijao.info.preco}</td>
              <td>{lista.Feijao.info.unidade}</td>
              <td>{lista.Feijao.info.qtd}</td>
              <td>{lista.Feijao.info.DataCompra}</td>
              <td><input className={styles.container} type="checkbox"  name="bought"/></td>
            </tr>
            <tr>
              <td>{lista.Arroz.info.produto}</td>
              <td>{lista.Arroz.info.marca}</td>
              <td>{lista.Arroz.info.preco}</td>
              <td>{lista.Arroz.info.unidade}</td>
              <td>{lista.Arroz.info.qtd}</td>
              <td>{lista.Arroz.info.DataCompra}</td>
              <td><input className={styles.container} type="checkbox"  name="bought"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
