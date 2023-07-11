import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { BookCard } from "../BookCard"
import styles from './styles.module.scss'
import { BookWithAvgRating } from "@/pages/explore";

export const PopularBooks = () => {
  const { data: popularBooks } = useQuery<BookWithAvgRating[]>(["popular-books"], async () => {
    const { data } = await api.get("/books/popular");
    return data?.books ?? [];
  })
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Livros populares</h1>
        <p>Ver todos </p>
      </div>
      <div>

        {popularBooks?.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}