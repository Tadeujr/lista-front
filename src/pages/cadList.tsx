import { useState } from "react";
import apiService from "../services/api";
import styles from "../styles/CadList.module.css";
import Header from "../components/header";
import appUtil from '../util/util';

export default function RegistrationList() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [unity, setUnity] = useState(0.0);
  const [commercialUnit, setCommercialUnit] = useState("");
  const [price, setPrice] = useState(0.0);
  const [store, setStore] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [wasAcquired, setWasAcquired] = useState(false);
  const [list, setList] = useState("");
  const [dateList, setDateList] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const listId = await appUtil.findList(list);
      const newProduct = {
        productName,
        category,
        brand,
        unity,
        commercialUnit,
        price,
        store,
        buyDate,
        wasAcquired,
        list: listId,
      };

      const response = await apiService.post("/product", [newProduct]);
      setProductName("");
      setCategory("");
      setBrand("");
      setUnity(0.0);
      setCommercialUnit("");
      setPrice(0.0);
      setStore("");
      setBuyDate("");
      setWasAcquired(false);
      setList("");
      alert("Produto cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar produto ", error);
    }
  };

  const handleNewListSubmit = async (e) => {
    e.preventDefault();
    const formattedDateList = await appUtil.formatDate(dateList);

    try {
      const listId = await appUtil.findList(formattedDateList);

      if (listId) {
        setErrorMessage("Já existe uma lista com essa data.");
        return;
      }

      const newList = {
        total: 0,
        dateList: formattedDateList,
        user: localStorage.getItem("mylist@idUser"),
      };

      const response = await apiService.post("/shoppinglist/newlist", newList);
      setList(response.data.id);
      setDateList("");
      setErrorMessage("");
      alert("Nova lista cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar nova lista: ", error);
    }
  };

  return (
    <>
      <Header page="Cadastro de Produtos" />
      <div>
        <form onSubmit={handleNewListSubmit} className={styles.formCadList}>
          <div className={styles.formItem}>
            <label htmlFor="dateList">Data da Lista</label>
            <input
              type="text"
              id="dateList"
              placeholder="Insira a data da lista (formato dd/mm/aaaa)"
              value={dateList}
              onChange={(e) => {
                setDateList(appUtil.formatDate(e.target.value));
                setErrorMessage("");
              }}
            />
            {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
          </div>
          <div className={styles.formItem}>
            <button id="btnNewList" className={styles.btn} type="submit">
              Criar Nova Lista
            </button>
          </div>
        </form>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.formCadList}>
            <div className={styles.formItem}>
              <label htmlFor="productName">Nome do Produto</label>
              <input
                type="text"
                id="productName"
                placeholder="Insira o nome do produto"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="category">Categoria</label>
              <input
                type="text"
                id="category"
                placeholder="Insira a categoria do produto"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="brand">Marca</label>
              <input
                type="text"
                id="brand"
                placeholder="Insira a marca do produto"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="unity">Unidade</label>
              <input
                type="number"
                id="unity"
                placeholder="Insira a unidade do produto"
                value={unity}
                onChange={(e) => setUnity(parseFloat(e.target.value))}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="commercialUnit">Unidade Comercial</label>
              <input
                type="text"
                id="commercialUnit"
                placeholder="Insira a unidade comercial do produto"
                value={commercialUnit}
                onChange={(e) => setCommercialUnit(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                id="price"
                placeholder="Insira o preço do produto"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="store">Loja</label>
              <input
                type="text"
                id="store"
                placeholder="Insira a loja onde foi adquirido o produto"
                value={store}
                onChange={(e) => setStore(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="buyDate">Data da Lista</label>
              <input
                type="text"
                id="buyDate"
                placeholder="Insira a data lista de compra (formato dd/mm/aaaa)"
                value={list}
                onChange={(e) => setList(appUtil.formatDate(e.target.value))}
              />
            </div>
            <div className={styles.formItem}>
              <button id="btnCadProduct" className={styles.btn} type="submit">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
