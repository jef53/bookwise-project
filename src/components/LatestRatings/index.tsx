import { RatingCard } from "../RatingCard"
import styles from './styles.module.scss'

export const LatestRatings = () => {
  return (
    <div className={styles.main}>
      <h1>Avaliações mais recentes</h1>
      <div>
        {Array.from({ length: 15 }).map((_, i) => (
          <RatingCard key={i} />
        ))}
      </div>
    </div>
  )
}