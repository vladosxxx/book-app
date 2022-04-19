import styles from "./genrebutton.module.css";

const GenreButton = ({ title }) => {
  return (
    <a href="/book-app">
      <div className={styles.button}>
        <span className={styles.title}>{title}</span>
      </div>
    </a>
  );
};

export default GenreButton;
