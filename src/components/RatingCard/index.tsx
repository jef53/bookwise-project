import styles from "./styles.module.scss"

export const RatingCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <div ><img src="/images/card/avatar.svg" alt="avatar" /></div>
          <div className={styles.nameAndDate}>
            <h2>Jaxson Dias</h2>
            <h3>Hoje</h3>
          </div>
        </div>
        <div className={styles.rightHeader}><img src="/images/card/rating.svg" alt="rating" /></div>


      </div>
      <div className={styles.bookMain}>
        <img src="/images/card/book.svg" alt="livro" />
        <div>
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