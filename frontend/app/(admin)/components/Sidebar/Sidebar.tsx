'use client'
import Link from 'next/link';
import styles from './Sidebar.module.css';
import { usePathname } from 'next/navigation'
import { items } from '@/utils/admin_nav'




export   function Sidebar (){
    const path= usePathname()
    return (
      
            <ul className={styles.wrapper}>
            {items.map((item) => (
                <li  key={item.id} className={path === item.href ? styles.active : ''}>  
                <Link
                    href={item.href}
                    className={styles.link}
                >
                    {item.title}
                </Link>
                </li>
                ))}
            </ul> 
        
    );
};



