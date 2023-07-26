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

interface HeaderProps {
  page?: string;
}

function clearLocalStorage() {
  localStorage.clear();
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className={styles.menu}>
        <Link href="/">
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
        <Link href="/profile">
          <a>
            <UserIcon />
            <span>Perfil</span>
          </a>
        </Link>
        <Link href="/login">
          <a onClick={clearLocalStorage} className={styles.exitLink}>
            <XMarkIcon />{" "}
            {/* Não é necessário adicionar a classe "exit-icon" */}
            <span>Sair</span>
          </a>
        </Link>
      </div>
      <h1 className={styles.page}>{props.page}</h1>
      <div className={styles.content}>{/* Conteúdo do componente */}</div>
    </>
  );
}
