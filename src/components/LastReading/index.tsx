import { RatingStars } from '../RatingStars'
import styles from './styles.module.scss'

export const LastReading = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <p>Sua última leitura</p>
        <span>Ver todas</span>
      </div>

      <div className={styles.bookMain}>

        <img className={styles.bookPic} src="/images/card/book.svg" alt="livro" />

        <div className={styles.inside}>
          <div className={styles.dateAndRating}>
            <h3>Há 2 dias</h3>
            <div className={styles.rating}>
              <RatingStars rating={4} />
            </div>
          </div>

          <div className={styles.bookInfo}>
            <h2>O Hobbit</h2>
            <h3>J.R.R. Tolkien</h3>
            <p>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices.
              Semper et sapien proin vitae nisi. Feugiat neque integer done

            </p>
          </div>
        </div>
      </div>
    </div>
  )
}