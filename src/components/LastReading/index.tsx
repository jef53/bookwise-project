import styles from './styles.module.scss'

export const LastReading = () => {
  return (
    <div className={styles.main}>
      <h1>Sua última leitura</h1>
      <div className={styles.bookMain}>
        <img className={styles.bookPic} src="/images/card/book.svg" alt="livro" />
        <div>
          <div className={styles.dateAndRating}>
            <h3>Há 2 dias</h3>
            <img src="/images/card/rating.svg" alt="rating2" />
          </div>

          <div>
            <h2>O Hobbit</h2>
            <h3>J.R.R. Tolkien</h3>
          </div>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices.
            Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh
            Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh
            Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh
          </p>
        </div>
      </div>
    </div>
  )
}