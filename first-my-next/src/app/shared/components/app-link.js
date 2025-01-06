import Link from "next/link";
import styles from './app-link.module.css'

export function AppLink({children, href}){
    return <Link href={href} className={styles.root}>{children}</Link>
}