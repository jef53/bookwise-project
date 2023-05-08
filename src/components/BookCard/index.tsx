import styles from "./styles.module.scss"

export const BookCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bookMain}>
        <img src="/images/card/book.svg" alt="livro2" />
        <div>
          <div>
            <h2>A revolução dos bichos</h2>
            <h3>George Orwell</h3>
          </div>
          <img src="/images/card/rating.svg" alt="rating" />
        </div>
      </div>
    </div>
  )
}