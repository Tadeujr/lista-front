import Link from 'next/link';
import {HomeIcon,ClipboardDocumentListIcon,ArrowLeftIcon,UserIcon,ChartBarIcon} from '@heroicons/react/24/outline';
import styles from '../styles/Header.module.css';



interface TesteProps{
    page?: string

}


export default function Teste(props:TesteProps){

    return (<>
        <div className={styles.menu}>
                <div className={styles.icon}><a href="/home"><HomeIcon/>Home</a></div>
                <div className={styles.icon}><Link href="/analitic"><a><ChartBarIcon/>Gastos</a></Link></div>
                <div className={styles.icon}><Link href="/table"><a><ClipboardDocumentListIcon/>Tabela</a></Link></div>
                <div className={styles.icon}><Link href="/profile"><a><UserIcon/>Perfil</a></Link></div>
                <div className={styles.icon}><Link href="/login"><a><ArrowLeftIcon/>Sair</a></Link></div>
        </div>
        <h1 className={styles.page}>{props.page}</h1>
        <div className={styles.content}>
        </div>
        </>)
}
   
