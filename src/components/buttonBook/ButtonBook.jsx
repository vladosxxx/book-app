import styles from "./buttonbook.module.css";

const ButtonBook = ({ icon, altName, title }) => {
  return (
    <a href="/">
      <div className={styles.button}>
        <img src={icon} alt={altName} className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </div>
    </a>
  );
};

export default ButtonBook;
