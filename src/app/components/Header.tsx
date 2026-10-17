import styles from './Header.module.css'
import '@/app/globals.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles['header-wrapper']}>
          <div className={styles['header-left']}>
            <h1>Dana Melton Photography</h1>
            <p>A unique eye</p>
          </div>
          <div className={styles['header-right']}>bio</div>
        </div>
      </div>
    </header>
  )
}
