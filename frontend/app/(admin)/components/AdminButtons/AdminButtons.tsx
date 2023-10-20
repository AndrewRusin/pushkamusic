
'use client'
import Link from "next/link";
import styles from './AdminButton.module.css';
import { items } from "@/utils/admin_dashboard";

export  function AdminButton(){
return (
    <div className={styles.container}>
     {items.map(item =>(
        <div key={item.id} className={styles.wrapper}> 
            <Link href={item.href} className={styles.admin_link}>{item.title}</Link>
        </div>
     ))}
    </div>
    )
}