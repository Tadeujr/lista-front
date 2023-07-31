// Arquivo: CadList.tsx
import { useState } from "react";
import apiSevice from "../services/api";
import styles from "../styles/CadList.module.css";
import Header from "../components/header";

export default function RegistrationList() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [unity, setUnity] = useState("");
  const [commercialUnit, setCommercialUnit] = useState("");
  const [price, setPrice] = useState(0); // Alterado para o tipo number
  const [store, setStore] = useState("");
  const [buyDate, setBuyDate] = useState("");
  const [wasAcquired, setWasAcquired] = useState(false);
  const [list, setList] = useState("");

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
      const response = await apiSevice.post("/product", [newProduct]);
      console.log("Produto cadastrado ", response.data);
      // Limpar campos após o cadastro bem-sucedido
      setProductName("");
      setCategory("");
      setBrand("");
      setUnity("");
      setCommercialUnit("");
      setPrice(0);
      setStore("");
      setBuyDate("");
      setWasAcquired(false);
      setList("");
    } catch (error) {
      console.error("Erro ao cadastrar produto ", error);
    }
  };

  return (
    <>
      <Header page="Cadastro de Produtos" />
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
              type="text"
              id="unity"
              placeholder="Insira a unidade do produto"
              value={unity}
              onChange={(e) => setUnity(e.target.value)}
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
              step="0.01"
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
            <div className={styles.checkboxWrapper}>
              <label htmlFor="wasAcquired">Produto Adquirido</label>
              <input
                type="checkbox"
                id="wasAcquired"
                checked={wasAcquired}
                onChange={(e) => setWasAcquired(e.target.checked)}
              />
            </div>
          </div>
          <div className={styles.formItem}>
            <button id="btnCadProduct" className={styles.btn} type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};