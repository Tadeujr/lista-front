// FormCadastro.tsx
import React, { useState } from "react";
import styles from "../styles/CadList.module.css";
import apiSevice from "../services/api";
import Link from "next/link";
import { useRouter } from "next/router";

const FormCadastro: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    uf: "",
    zipcode: "",
    email: "",
    password: "",
    person: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      await apiSevice.post("/newPerson", formData);

      setFormData({
        name: "",
        city: "",
        uf: "",
        zipcode: "",
        email: "",
        password: "",
        person: "",
      });

      setError("");
      router.push("/"); // Redireciona para a rota "/" após o cadastro com sucesso
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Ocorreu um erro ao enviar o formulário.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit} className={styles.formCadList}>
        <h1>Cadastro MyList</h1>
        <div className={styles.formItem}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Digite sua cidade"
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="uf">Estado</label>
          <input
            type="text"
            id="uf"
            name="uf"
            value={formData.uf}
            onChange={handleChange}
            placeholder="Digite seu estado"
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="zipcode">CEP</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            placeholder="Digite seu CEP"
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password">Senha</label>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Digite sua senha"
              required
            />
            <button
              type="button"
              className={styles.togglePasswordBtn}
              onClick={toggleShowPassword}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
        <div className={styles.errorContainer}>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
        <div className={styles.formItem}>
          <div className={styles.buttonContainer}>
            <button id="btnRegister" className={styles.btn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Cadastrar"}
            </button>
            <Link id="btnBack"  href="/login" className={styles.backLink}>
              <button className={styles.btn} type="button">
                Voltar
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCadastro;
