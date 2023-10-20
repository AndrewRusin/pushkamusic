
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import Logo from '../../public/logo.svg'
import { Menu } from '../Menu/Menu';


export const Header = (className:HeaderProps): JSX.Element => {
    return (
      <header  className={styles.header}>
            <div className="container">
              <div className={styles.wrapper}>
                <Logo/>
                <Menu/>
              </div>        
            </div>
      </header>
    )
}