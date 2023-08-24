import Link from "next/link";
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  TableCellsIcon,
  ArrowLeftIcon,
  UserIcon,
  ChartBarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

interface HeaderProps {
  page?: string;
}

export default function Header(props: HeaderProps) {
  const router = useRouter();
  
  function clearLocalStorage() {
    localStorage.removeItem("mylist@idUser");
    localStorage.removeItem("mylist@token");
    localStorage.clear();
    router.push("/login"); // Redirecione para a página de login
    
  }

  return (
    <>
      <div className={styles.menu}>
        <Link href="/home">
          <a>
            <HomeIcon />
            <span>Home</span>
          </a>
        </Link>
        <Link href="/cadList">
          <a>
            <ClipboardDocumentListIcon />
            <span>Cadastro de Produto</span>
          </a>
        </Link>
        <Link href="/table">
          <a>
            <TableCellsIcon />
            <span>Lista de Compras</span>
          </a>
        </Link>
        <Link href="/analitic">
          <a>
            <ChartBarIcon />
            <span>Gastos</span>
          </a>
        </Link>
        <Link href="/">
          <a onClick={clearLocalStorage} className={styles.exitLink}>
            <XMarkIcon />
            <span>Sair</span>
          </a>
        </Link>
      </div>
      <h1 className={styles.page}>{props.page}</h1>
      <div className={styles.content}></div>
    </>
  );
}
