import React, { useState, useEffect } from "react";
import apiService from "../services/api";
import Header from "../components/header";
import styles from "../styles/Table.module.css";
import appUtil from '../util/util';

export default function Table() {
  const [list, setList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [dateList, setDateList] = useState("");
  const [listId, setListId] = useState(null);
  const [returnList, setReturnList] = useState("");

  const checkDatabaseUpdates = async () => {
    try {
      const response = await apiService.get(`/product/${listId}`);
      setList(response.data);

      // Atualizar o estado local de checkedItems após obter os dados
      const newCheckedItems = response.data.reduce((obj, product) => {
        obj[product.id] = product.wasAcquired;
        return obj;
      }, {});
      setCheckedItems(newCheckedItems);
    } catch (error) {
      console.error("Erro ao obter os dados do banco de dados ", error);
    }
  };

  const handleCheckboxChange = async (productId, index) => {
    try {
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [productId]: !prevCheckedItems[productId],
      }));

      await apiService.put(`/product/${productId}`, {
        ...list[index],
        wasAcquired: !checkedItems[productId],
      });
    } catch (error) {
      console.error("Erro ao atualizar o produto no banco de dados ", error);
    }
  };

  const handleSearchList = async () => {
    const formattedDate = appUtil.formatDate(dateList); // Formata a data para YYYY-MM-DD
    const idList = await appUtil.findList(formattedDate);
    setListId(idList); // Armazena o ID da lista no estado
    if (!idList) {
      setReturnList("Lista não encontrada!");
    }
  };

  useEffect(() => {
    if (listId !== null) {
      checkDatabaseUpdates();
      const interval = setInterval(checkDatabaseUpdates, 90 * 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [listId]);

  return (
    <>
      <Header page="Lista" />

      <div className={styles.option}>
        <input
          type="text"
          value={dateList}
          onChange={(e) => setDateList(appUtil.formatDate(e.target.value))}
          placeholder="Digite a data da lista (dd/mm/aaaa)"
        />
        <button className={styles.btn} onClick={handleSearchList}>Buscar Lista</button>

        {listId !== null ? (
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
                const isProductChecked = checkedItems[product.id] || false;
                const rowClass = isProductChecked ? styles.checkedRow : "";

                return (
                  <tr key={product.id} className={rowClass}>
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
                        checked={isProductChecked}
                        onChange={() => handleCheckboxChange(product.id, index)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>{returnList}</p>
        )}
      </div>
    </>
  );
}
