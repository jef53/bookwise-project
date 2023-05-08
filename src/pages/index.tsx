import { DefaultLayout } from "@/layouts/DefaultLayout"
import { signOut, useSession } from "next-auth/react"
import { NextPageWithLayout } from "./_app"
import styles from "../styles/Home.module.scss"
import { LatestRatings } from "@/components/LatestRatings"
import { PopularBooks } from "@/components/PopularBooks"


const HomePage: NextPageWithLayout = () => {
  const { data } = useSession()
  return (
    <div className={styles.bg}>
      <LatestRatings />
      <PopularBooks />
    </div>
  )
}

HomePage.getLayout = (page) => {
  return (
    <div>
      <DefaultLayout title="Início">
        {page}
      </DefaultLayout>
    </div >
  )
}

export default HomePage;