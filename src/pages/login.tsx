import styles from "../styles/Login.module.css";
import React, { useState } from "react";
import apiSevice from "../services/api";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    
    if (email !== "" || password !== "") {
      try {
        const response = await apiSevice.post("/auth/login", {
          email,
          password,
        });
        localStorage.setItem("list@token", JSON.stringify(response.data.token));
        router.push("/");
      } catch (error) {
        setErrorMessage("Login ou senha incorretos.");
      }
    }
  }

  return (
    <div className={styles.page}>
      <form className={styles.formLogin} onSubmit={handleLogin}>
        <h1>MyList</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <label htmlFor="email">E-mail</label>
        <input
          id="login"
          type="email"
          placeholder="Digite seu e-mail"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className={styles.aviso}>{errorMessage}</p>}
        <div>
          <Link href="/">Esqueci minha senha</Link>
          <Link className={styles.insc} href="/newUser">
            Me cadastrar
          </Link>
        </div>
        <input type="submit" value="Acessar" className={styles.btn} />
      </form>
    </div>
  );
}
