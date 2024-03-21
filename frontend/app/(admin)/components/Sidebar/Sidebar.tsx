'use client'
import Link from 'next/link';
import styles from './Sidebar.module.css';
import { usePathname } from 'next/navigation'
import { items } from '@/utils/admin_nav'
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import CloseApple from '@/public/icons/closeApple.svg'



export function Sidebar() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };
    const selectedItem = items.find(item => path === item.href);
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);
    useEffect(() => {

        if (isOpen && path === selectedItem?.href) {
            setIsOpen(false);
        }
    }, [path])

    return (
        <>
      
            {isMobile && (
                <>
                    <div className={styles.topbar}>
                        <button className={`${styles.burgerIcon} ${isOpen ? styles.active : ''}`} onClick={handleMenuClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {selectedItem && (<span className={styles.page_title}>{selectedItem.title}</span>)}
                        <div></div>
                    </div>    
              
                         <Transition in={isOpen} timeout={200} unmountOnExit={true}>
                            {(state) => (
                                <ul className={`${styles.mobile_menu} ${state === 'entered' ? styles.active : ''}`}>
                                    <span className={styles.close_sidebar}  onClick={()=>setIsOpen(!isOpen)}><CloseApple/></span>
                                    {items.map((item) => (
                                        <li key={item.id} className={`${path === item.href ? styles.active : ''} ${item?.class}`}>
                                            <Link href={item.href} className={styles.link}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Transition>
                  
                </>
            )}
            {!isMobile && (
                <ul className={styles.wrapper}>
                    {items.map((item) => (
                        <li key={item.id} className={path === item.href ? styles.active : ''}>
                            <Link href={item.href} className={styles.link}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};