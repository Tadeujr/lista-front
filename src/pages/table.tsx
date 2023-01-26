import { json } from "node:stream/consumers";
import Header from "../components/header";
import styles from "../styles/Table.module.css";

export default function Table() {
  const list2 =     {
    "store": "Carrefour",
    "productName": "Arroz",
    "price": 15.99,
    "buyDate": "12/12/2012",
    "unity": 1,
    "wasAcquired": true,
    "listId": 10
}
console.log(list2.store)
 
  const lista = {
    Feijao: {
      info: {
        loja:"Carrefour",
        produto: "Feijão",
        marca: "juju",
        preco: "4.99",
        DataCompra: "27/05/2022",
        unidade: "1 kg",
        qtd: "20",
        comprado: false,
      },
    },

    Arroz: {
      info: {
        loja:"Carrefour",
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
              <th>Loja</th>
              <th>Produto</th>
              <th>Marca</th>
              <th>Preço</th>
              <th>Data de Compra</th>
              <th>Medida</th>
              <th>Quantidade</th>
              <th>Comprado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{list2.store}</td>
              <td>{list2.productName}</td>
              <td>{'Sepe'}</td>
              <td>{list2.price}</td>
              <td>{list2.buyDate}</td>
              <td>{list2.unity}</td>
              <td>{"2"}</td>
              <td><input className={styles.container} type="checkbox" checked={list2.wasAcquired} name="bought"/></td>
            </tr>

            <tr>
            <td>{lista.Feijao.info.loja}</td>
              <td>{lista.Feijao.info.produto}</td>
              <td>{lista.Feijao.info.marca}</td>
              <td>{lista.Feijao.info.preco}</td>
              <td>{lista.Feijao.info.DataCompra}</td>
              <td>{lista.Feijao.info.unidade}</td>
              <td>{lista.Feijao.info.qtd}</td>
              <td><input className={styles.container} type="checkbox"  checked={lista.Feijao.info.comprado} name="bought"/></td>
            </tr>
            <tr>
              <td>{lista.Arroz.info.loja}</td>
              <td>{lista.Arroz.info.produto}</td>
              <td>{lista.Arroz.info.marca}</td>
              <td>{lista.Arroz.info.preco}</td>
              <td>{lista.Arroz.info.DataCompra}</td>
              <td>{lista.Arroz.info.unidade}</td>
              <td>{lista.Arroz.info.qtd}</td>
              <td><input className={styles.container} type="checkbox"  name="bought"/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
