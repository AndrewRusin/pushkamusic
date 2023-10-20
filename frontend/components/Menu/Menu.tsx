import { getMenu } from '@/api/menu';
import Link from 'next/link';
import styles from './Menu.module.css'


export async function Menu() {
	const menu = await getMenu();
	return (
		<nav className={styles.nav}>
            
            {menu.map(menuItem => (
                <div key={menuItem._id}>
                    <Link href={menuItem.value} className={styles.links}>{menuItem.title}</Link>
                </div>
            ))}
		</nav>
	)
}