import { useState, useEffect } from "react";
import apiService from "../services/api";
import Header from "../components/header";
import styles from "../styles/Table.module.css";

export default function Table() {
  const [list, setList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  // Função para verificar o banco de dados e atualizar os itens verificados
  const checkDatabaseUpdates = async () => {
    try {
      const response = await apiService.get("/product/1");
      setList(response.data);
      localStorage.setItem("shopping@List", JSON.stringify(response.data));

      // Atualizar o estado local de checkedItems após obter os dados
      const newCheckedItems = response.data.reduce((obj, product, index) => {
        obj[product.id] = product.wasAcquired;
        return obj;
      }, {});
      setCheckedItems(newCheckedItems);
      localStorage.setItem(
        "boughtCheckbox",
        JSON.stringify({ checkedItems: newCheckedItems })
      );
    } catch (error) {
      console.error("Erro ao obter os dados do banco de dados ", error);
    }
  };

  // Função para atualizar o valor do checkbox no localStorage e na rota quando o usuário clicar no checkbox
  const handleCheckboxChange = async (productId, index) => {
    try {
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [productId]: !prevCheckedItems[productId],
      }));
      localStorage.setItem(
        "boughtCheckbox",
        JSON.stringify({
          checkedItems: {
            ...checkedItems,
            [productId]: !checkedItems[productId],
          },
        })
      );

      await apiService.put(`/product/${productId}`, {
        ...list[index],
        wasAcquired: !checkedItems[productId],
      });
    } catch (error) {
      console.error("Erro ao atualizar o produto no banco de dados ", error);
    }
  };

  useEffect(() => {
    // Verificar o banco de dados inicialmente
    checkDatabaseUpdates();

    // Definir o intervalo para verificar o banco de dados a cada 1.5 minutos (90 segundos)
    const interval = setInterval(checkDatabaseUpdates, 90 * 1000);

    return () => {
      // Limpar o intervalo quando o componente for desmontado
      clearInterval(interval);
    };
  }, []);

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
            {list.map((product, index) => {
              return (
                <tr key={product.id}>
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
                      checked={checkedItems[product.id] || false}
                      onChange={() => handleCheckboxChange(product.id, index)}
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
