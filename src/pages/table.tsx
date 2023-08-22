import React, { useState, useEffect } from "react";
import apiService from "../services/api";
import Header from "../components/header";
import styles from "../styles/Table.module.css";
import appUtil from '../util/util';
import dynamic from "next/dynamic";
import { Suspense } from "react";
import "react-calendar/dist/Calendar.css";

export default function Table() {
  const [list, setList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [listId, setListId] = useState(null);
  const [returnList, setReturnList] = useState("");
  const [markedDates, setMarkedDates] = useState([]);

  const checkDatabaseUpdates = async () => {
    try {
      const response = await apiService.get(`/product/${listId}`);
      setList(response.data);

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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setListId(null);
  };

  const handleSearchList = async () => {
    const formattedDate = appUtil.formatDateForServer(selectedDate);
  
    try {
      const lists = await appUtil.findAllList();
      const formattedDates = lists.map(list => list.dateList);
      setMarkedDates(formattedDates);
  
      const filteredLists = lists.filter(list => {
        const listFormattedDate = list.dateList.split('/').join('/');
        return listFormattedDate === formattedDate;
      });
  
      if (filteredLists.length > 0) {
        setListId(filteredLists[0].id);
        setReturnList("");
      } else {
        setListId(null);
        setReturnList("Não existe lista para essa data!");
      }
    } catch (error) {
      console.error("Erro ao buscar listas: ", error);
    }
  };
  

  const DynamicCalendar = dynamic(() => import("react-calendar"), {
    ssr: false,
    loading: () => <p>Carregando...</p>,
  });

  useEffect(() => {
    if (listId !== null) {
      checkDatabaseUpdates();
      const interval = setInterval(checkDatabaseUpdates, 90 * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [listId]);

  useEffect(() => {
    const loadMarkedDates = async () => {
      try {
        const lists = await appUtil.findAllList();
        const formattedDates = lists.map(list => list.dateList);
        setMarkedDates(formattedDates);
      } catch (error) {
        console.error("Erro ao carregar as datas marcadas: ", error);
      }
    };

    loadMarkedDates();
  }, []);

  return (
    <>
      <Header page="Lista" />

      <div className={styles.option}>
        <div className={styles.container}>
          <div className={styles.calendarContainer}>
            <Suspense fallback={<p>Carregando...</p>}>
              <DynamicCalendar
                onChange={handleDateChange}
                value={selectedDate}
                calendarType="gregory"
                tileContent={({ date }) =>
                  markedDates.includes(appUtil.formatDateForServer(date)) ? (
                    <div className={styles.registeredDate}></div>
                  ) : null
                }
              />
            </Suspense>
          </div>
          <button className={styles.btn} onClick={handleSearchList}>
            Buscar Lista
          </button>
        </div>

        {listId !== null && (
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
        )}

        {listId === null && (
          <p>{returnList}</p>
        )}
      </div>
    </>
  );
}
