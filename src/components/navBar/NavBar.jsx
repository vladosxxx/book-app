import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo/logo.png";
import Arrow from "../../assets/figures/arrow.png";

const NavBar = () => {
  return (
    <div className={styles.wrapperNav}>
      <nav className={styles.navigation}>
        <div className={styles.wrapperLink}>
          <Link to="/book-app" className={styles.title}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            Instaread
          </Link>
        </div>
        <div className={styles.wrapperLink}>
          <NavLink to="/book-app/discover" className={styles.button}>
            Discover
          </NavLink>
          <NavLink to="/book-app/search" className={styles.button}>
            Search
          </NavLink>
          <NavLink
            to="/book-app"
            className={styles.button}
            style={{ color: "#009aeb" }}
          >
            Try Instaread
          </NavLink>
          <NavLink to="/book-app/login" className={styles.button}>
            Login
            <img src={Arrow} alt="Logo" className={styles.arrow} />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
