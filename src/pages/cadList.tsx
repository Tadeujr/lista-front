// Arquivo: CadList.tsx
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
  const [price, setPrice] = useState(0.0); // Alterado para o tipo number
  const [store, setStore] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [wasAcquired, setWasAcquired] = useState(false);
  const [list, setList] = useState("");
  const [dateList, setDateList] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      list,
    };

    try {
      console.log(newProduct);
      const response = await apiService.post("/product", [newProduct]);
      console.log("Produto cadastrado ", response.data);
      // Limpar campos após o cadastro bem-sucedido
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
    } catch (error) {
      console.error("Erro ao cadastrar produto ", error);
    }
  };

  const handleNewListSubmit = async (e) => {
    e.preventDefault();
    const formattedDateList = await appUtil.formatDate(dateList);
    const newList = {
      total: 0,
      dateList: formattedDateList,
      user: localStorage.getItem("mylist@idUser"),
    };

    try {
      const response = await apiService.post("/shoppinglist/newlist", newList);
      console.log("Nova lista cadastrada: ", response.data);
      // Limpar campo após o cadastro bem-sucedido
      setList(response.data.id); // Definir o id da nova lista criada
      // Vamos chamar a função findList aqui para obter o id da lista existente
      setDateList("");
    } catch (error) {
      console.error("Erro ao cadastrar nova lista: ", error);
    }
  };

  return (
    <>
      <Header page="Cadastro de Produtos" />
      <div>
        <form onSubmit={handleNewListSubmit} className={styles.formCadList}>
          {/* Campos para cadastrar nova lista */}
          <div className={styles.formItem}>
            <label htmlFor="dateList">Data da Lista</label>
            <input
              type="text"
              id="dateList"
              placeholder="Insira a data da lista (formato dd/mm/aaaa)"
              value={dateList}
              onChange={(e) => setDateList(appUtil.formatDate(e.target.value))}
            />
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
                type="number" // Alterado para o tipo "number"
                id="price"
                placeholder="Insira o preço do produto"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))} // Conversão para número
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
                value={buyDate}
                onChange={(e) => setBuyDate(appUtil.formatDate(e.target.value))}
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
