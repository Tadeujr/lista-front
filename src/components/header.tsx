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

    return (<>
        <div className={styles.menu}>
                <div className={styles.icon}><a href="/home"><HomeIcon/>Home</a></div>
                <div className={styles.icon}><Link href="/analitic"><a><ChartBarIcon/>Gastos</a></Link></div>
                <div className={styles.icon}><Link href="/table"><a><ClipboardDocumentListIcon/>Tabela</a></Link></div>
                <div className={styles.icon}><Link href="/profile"><a><UserIcon/>Perfil</a></Link></div>
                <div className={styles.icon}><Link href="/login" ><a className={styles.out} onClick={clearLocalStorage}><XMarkIcon/>Sair</a></Link></div>
        </div>
        <h1 className={styles.page}>{props.page}</h1>
        <div className={styles.content}>
        </div>
        </>)
}
   
