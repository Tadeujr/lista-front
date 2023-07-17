import { json } from "node:stream/consumers";
import { useState, useEffect } from 'react';
import Header from "../components/header";
import styles from "../styles/Table.module.css";
import apiService from "../../src/api";

export default function Table() {
  const [list2, setList2] = useState([]);

  useEffect(() => {
    apiService.get("/product/1").then((response) => {
      setList2(response.data);
    });
  }, []);

  return (
    <>
      <Header page="Lista" />
      
      <div className={styles.option}>
        {/* <div className={styles.value}>R$ {199999}</div> */}
        <table  className={styles.tbZebra}>
          <thead>
            <tr>
              <th>Loja</th>
              <th>Categoria</th>
              <th>Produto</th>
              <th>Marca</th>
              <th>Unidade Comercial</th>
              <th>Preço</th>
              <th>Data de Compra</th>
              <th>Unidade</th>
              <th>Comprado</th>

            </tr>
          </thead>
          <tbody>
          {list2.map((product,index) => {
                  return (
                    <tr key={index}>
                    <td>{product.store}</td>
                    <td>{product.category}</td>
                    <td>{product.productName}</td>
                    <td>{product.brand}</td>
                    <td>{product.commercialUnit}</td>
                    <td>{product.price}</td>
                    <td>{product.buyDate}</td>
                    <td>{product.unity}</td>
                    <td><input className={styles.container} type="checkbox"  name="bought"/></td>
                    </tr>
              )
          })}
          </tbody>
        </table>
      </div>
    </>
  );
}
