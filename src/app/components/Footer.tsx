'use client'

import styles from './Footer.module.css'
import '@/app/globals.css'

export default function Footer() {
  const currentYear = '2026'
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles['footer-wrapper']}>
          <div className={styles['footer-left']}>
            <p>&copy; 2000 - {currentYear} Dana Melton</p>
          </div>
          <div className={styles['footer-right']}>info</div>
        </div>
      </div>
    </footer>
  )
}
