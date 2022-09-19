import Link from 'next/link';
import {HomeIcon,ClipboardDocumentListIcon,ArrowLeftIcon,UserIcon,ChartBarIcon} from '@heroicons/react/24/outline';
import styles from '../styles/Teste.module.css';



interface TesteProps{
    page?: string

}


export default function Teste(props:TesteProps){

    return (<>
        <div className={styles.menu}>
                <div className={styles.icon}><Link href="/home"><a><HomeIcon/>Teste</a></Link></div>
                <div className={styles.icon}><Link href="/analitic"><a><ChartBarIcon/>Gastos</a></Link></div>
                <div className={styles.icon}><Link href="/table"><a><ClipboardDocumentListIcon/>Tabela</a></Link></div>
                <div className={styles.icon}><Link href="/profile"><a><UserIcon/>Perfil</a></Link></div>
                <div className={styles.icon}><Link href="/login"><a><ArrowLeftIcon/>Sair</a></Link></div>
        </div>
        <h1 className={styles.page}>{props.page}</h1>
        </>)
}