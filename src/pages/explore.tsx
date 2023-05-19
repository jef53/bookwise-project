import { PageTitle } from "@/components/PageTitle";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { ArrowUpRight, Binoculars, MagnifyingGlass } from "@phosphor-icons/react";
import { NextPageWithLayout } from "./_app";
import styles from "../styles/pages/explore/styles.module.scss"
import { Input } from "@/components/Input";
import { BookList } from "@/components/BookList";
import { useQuery } from "@tanstack/react-query";
import { Category, Book } from "@prisma/client";
import { api } from "@/lib/axios";
import { useState } from "react";

export type BookWithAvgRating = Book & {
  avgRating: number,
  alreadyRead: boolean,
}

const ExplorePage: NextPageWithLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: categories } = useQuery<Category[]>(["categories"], async () => {
    const { data } = await api.get("/books/categories")
    return data.categories ?? [];
  })

  const { data: books } = useQuery<BookWithAvgRating[]>(["books", selectedCategory], async () => {
    const { data } = await api.get("/books", {
      params: {
        category: selectedCategory,
      }
    });
    return data?.books ?? [];
  })

  return (
    <>
      <div className={styles.header}>
        <PageTitle icon={<Binoculars />} title="Explorar" />
        <Input placeholder="Buscar livro ou autor" icon={<MagnifyingGlass />} />
      </div>


      <nav className={styles.navBar}>
        <span className={null === selectedCategory ? styles.onActive : styles.inactive} onClick={() => setSelectedCategory(null)}>Tudo</span>
        {categories?.map(category =>
          <span key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={category.id === selectedCategory ? styles.onActive : styles.inactive}
          >

            {category.name}
          </span>

        )}

      </nav>

      <BookList books={books} />


    </>
  )
}

ExplorePage.getLayout = (page) => {
  return (
    <div>
      <DefaultLayout title="Explorar">
        {page}
      </DefaultLayout>
    </div >
  )
}

export default ExplorePage;