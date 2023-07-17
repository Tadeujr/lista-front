import styles from "../styles/Login.module.css";


interface LoginProps {
  tipo: "text";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  className?: string;
  valorMudou?: (valor: any) => void;
}

export default function Entrada(props: LoginProps) {
  return <>
  <div className={styles.page}>
  <form method="POST"  className={styles.formLogin}>
      <h1>MyList</h1>
      <p>Digite os seus dados de acesso no campo abaixo.</p>
      <label form="email">E-mail</label>
      <input type="email" placeholder="Digite seu e-mail" autoFocus />
      <label form="password">Senha</label>
      <input type="password" placeholder="Digite seu e-mail" />
      <div>
        <a href="/">Esqueci minha senha</a>
        <a className={styles.insc} href="/">Me cadastrar</a>
      </div>
      <input type="submit" value="Acessar" className={styles.btn} />
  </form>
</div>
</>;
}
