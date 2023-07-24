import Link from 'next/link';
import {HomeIcon,ClipboardDocumentListIcon,ArrowLeftIcon,UserIcon,ChartBarIcon,XMarkIcon} from '@heroicons/react/24/outline';
import styles from '../styles/Header.module.css';



interface TesteProps{
    page?: string

}

function clearLocalStorage(){
    localStorage.clear();
}
export default function Header(props:TesteProps){

    return (
        <>
          <div className={styles.menu}>
            <Link href="/" className={styles.menu}><a><HomeIcon />Home</a></Link>
            <Link href="/analitic"><a><ChartBarIcon />Gastos</a></Link>
            <Link href="/table"><a><ClipboardDocumentListIcon />Tabela</a></Link>
            <Link href="/profile"><a><UserIcon />Perfil</a></Link>
            <Link href="/login" ><a className={styles.out} onClick={clearLocalStorage}><XMarkIcon />Sair</a></Link>
          </div>
          <h1 className={styles.page}>{props.page}</h1>
          <div className={styles.content}>
            {/* Conteúdo do componente */}
          </div>
        </>
      )
}
   
