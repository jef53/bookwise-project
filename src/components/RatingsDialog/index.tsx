import { ReactNode } from "react";
import * as Dialog from '@radix-ui/react-dialog'
import styles from './styles.module.scss'
import { X } from "@phosphor-icons/react";
import { RatingStars } from "../RatingStars";
import { Input } from "../Input";

type RatingsDialogProps = {
  children: ReactNode;
}

export const RatingsDialog = ({ children }: RatingsDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.Overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Close className={styles.Close} >
            <X size={24} />
          </Dialog.Close>

          <div className={styles.main}>
            <div className={styles.bookContainer}>
              <div className={styles.upperInfo}>
                <img src="images/books/o-hobbit.png" alt="capa" className={styles.bookCover} />
                <div>
                  <h2>14 Hábitos de Desenvolvedores Altamente Produtivos</h2>
                  <h3>Zeno Rocha</h3>
                  <RatingStars rating={4} />
                  <h6>3 avaliações</h6>
                </div>
              </div>

              <div className={styles.footer}>
                <div className={styles.footerContainer}>
                  <img src="/images/icons/bookmark.svg" />
                  <div className={styles.footerContainerInfo}>
                    <h4>Categoria</h4>
                    <p>Computação, educação</p>
                  </div>

                </div>

                <div className={styles.footerContainer}>
                  <img src="/images/icons/pages.svg" />
                  <div className={styles.footerContainerInfo}>
                    <h4>Páginas</h4>
                    <p>160</p>
                  </div>

                </div>

              </div>
            </div>

            <div>
              <h6>Avaliações</h6>
              <div className={styles.reviews}>
                <div className={styles.reviewsHeader}>
                  <img src="/images/card/avatar.svg" alt="avatar" />
                  <div>
                    <h3>Cristofer Rosser</h3>
                    <h4>Hoje</h4>
                  </div>
                  <RatingStars rating={4} className={styles.ratingStars} />
                </div>
                <div className={styles.writeYourReview}>
                  <textarea placeholder="Escreva sua avaliação" className={styles.reviewInput} />
                </div>

              </div>


              <div className={styles.reviews}>
                <div className={styles.reviewsHeader}>
                  <img src="/images/card/avatar.svg" alt="avatar" />
                  <div>
                    <h3>Cristofer Rosser</h3>
                    <h4>Hoje</h4>
                  </div>
                  <RatingStars rating={4} className={styles.ratingStars} />
                </div>
                <p>
                  Tortor sed elementum dolor sed nunc elementum enim viverra. Massa tempus ac a adipiscing at cursus senectus dui libero.
                  Elementum lacus enim viverra arcu at ut amet convallis.
                  Maecenas ac fringilla blandit risus nibh praesent sagittis dapibus netus.
                  Dignissim sed congue sed vel faucibus purus dapibus pellentesque.
                </p>

              </div>
            </div>


          </div>
        </Dialog.Content>
      </Dialog.Portal>

    </Dialog.Root>


  )
}