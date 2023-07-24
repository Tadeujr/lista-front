import { useState, useEffect } from 'react';
import Header from "../components/header";
import styles from "../styles/Table.module.css";
import apiService from "../services/api";

export default function Table() {
  const [list2, setList2] = useState([]);

  useEffect(() => {
    apiService.get("/product/1").then((response) => {
      setList2(response.data);
    });
  }, []);

  // Função para obter a data atual formatada (dd/mm/aaaa)
  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Estado local para controlar o valor do checkbox de cada linha
  const [checkedItems, setCheckedItems] = useState({});

  // Função para verificar e atualizar o valor do checkbox no localStorage
  useEffect(() => {
    const storedValue = localStorage.getItem('boughtCheckbox');
    if (storedValue) {
      const { checkedItems, timestamp } = JSON.parse(storedValue);
      const currentDate = new Date().getTime();
      const storedDate = new Date(timestamp).getTime();
      if (currentDate - storedDate < 24 * 60 * 60 * 1000) {
        // Se a data armazenada é inferior a 24 horas, mantemos o valor dos checkboxes
        setCheckedItems(checkedItems);
      } else {
        // Caso contrário, definimos o valor de todos os checkboxes como false
        const initialCheckedItems = list2.reduce((obj, product, index) => {
          obj[index] = false;
          return obj;
        }, {});
        setCheckedItems(initialCheckedItems);
        // E atualizamos o localStorage para a nova data e valor false
        localStorage.setItem(
          'boughtCheckbox',
          JSON.stringify({ checkedItems: initialCheckedItems, timestamp: getCurrentDate() })
        );
      }
    } else {
      // Se não houver valor armazenado, definimos o valor de todos os checkboxes como false
      const initialCheckedItems = list2.reduce((obj, product, index) => {
        obj[index] = false;
        return obj;
      }, {});
      setCheckedItems(initialCheckedItems);
      // E armazenamos o valor false no localStorage com a data atual
      localStorage.setItem(
        'boughtCheckbox',
        JSON.stringify({ checkedItems: initialCheckedItems, timestamp: getCurrentDate() })
      );
    }
  }, [list2]);

  // Função para atualizar o valor do checkbox no localStorage quando o usuário clicar no checkbox
  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [index]: !prevCheckedItems[index],
    }));
    localStorage.setItem(
      'boughtCheckbox',
      JSON.stringify({ checkedItems, timestamp: getCurrentDate() })
    );
  };

  return (
    <>
      <Header page="Lista" />

      <div className={styles.option}>
        <table className={styles.tbZebra}>
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
            {list2.map((product, index) => {
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
                  <td>
                    <input
                      className={styles.container}
                      type="checkbox"
                      name="bought"
                      checked={checkedItems[index] || false}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
