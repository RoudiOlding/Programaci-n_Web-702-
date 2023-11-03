import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Lista de Videojuegos</h1>
      <ul>
        <li><Link href="/Nintendo"> Nintendo </Link></li>
        <li><Link href="/Playstation"> Playstation </Link></li>
        <li><Link href="/Xbox"> Xbox </Link></li>
      </ul>
    </main>
  )
}