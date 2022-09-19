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
  return <></>;
}
