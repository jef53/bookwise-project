import { BookWithAvgRating } from "@/pages/explore"
import styles from "./styles.module.scss"

export interface BookProps {
  book: BookWithAvgRating,
}

export const Book = ({ book }: BookProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.bookMain}>
        <img src={book.cover_url} alt="livro2" />
        <div>
          <div>
            <h2>{book.name}</h2>
            <h3>{book.author}</h3>
          </div>
          <img src="/images/card/rating.svg" alt="rating" />
        </div>
      </div>
    </div>
  )
}