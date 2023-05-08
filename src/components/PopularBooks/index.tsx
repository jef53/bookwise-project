import { BookCard } from "../BookCard"
import styles from './styles.module.scss'

export const PopularBooks = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Livros populares</h1>
        <p>Ver todos </p>
      </div>
      <div>
        {Array.from({ length: 4 }).map((_, i) => (
          <BookCard key={i} />
        ))}
      </div>
    </div>
  )
}