import styles from "./headBook.module.css";
import Book from "../../assets/books/book.png";
import ButtonBook from "../buttonBook/ButtonBook";
import readIcon from "../../assets/icons/folded-newspaper.svg";
import listenIcon from "../../assets/icons/audio-headphones.svg";
import libraryIcon from "../../assets/icons/bookmark.svg";
import buyIcon from "../../assets/icons/cart.svg";
import { book, bookButtons, genreButton } from "../../constants/mocks";
import GenreButton from "../genreButton/GenreButton";

const HeadBook = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.imageBook}>
        <img src={Book} alt={book.title} className={styles.img} />
      </div>
      <div className={styles.description}>
        <span className={styles.title}>{book.title}</span>
        <span className={styles.ganre}>{book.ganre}</span>
        <span className={styles.author}>{book.author}</span>
        <hr className={styles.lineTop} />
        <div className={styles.buttons}>
          <ButtonBook
            icon={readIcon}
            title={bookButtons.read}
            altName={bookButtons.read}
          />
          <ButtonBook
            icon={listenIcon}
            title={bookButtons.listen}
            altName={bookButtons.listen}
          />
          <ButtonBook
            icon={libraryIcon}
            title={bookButtons.library}
            altName={bookButtons.library}
          />
          <ButtonBook
            icon={buyIcon}
            title={bookButtons.buy}
            altName={bookButtons.buy}
          />
        </div>
        <hr className={styles.lineBottom} />
        <div className={styles.buttons}>
          <GenreButton title={genreButton} />
          <GenreButton title={genreButton} />
        </div>
      </div>
    </div>
  </div>
);

export default HeadBook;
