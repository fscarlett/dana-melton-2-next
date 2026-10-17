import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className='container'>
          <h1>Dana Melton Photography</h1>
          <p>behold, hella photos</p>
        </div>
      </main>
    </div>
  )
}
