
import styles from './page.module.css'
import { Button, Input } from '@/components'
import Logo from '@/public/next.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
      <Logo />
      <Button appearance='primary' className='button'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <Button appearance='alert'>Кнопка</Button>
      <Logo />
      <span>sdsd44p</span>
      
      </div>
      

    </main>
  )
}
