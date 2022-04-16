import { Link, NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo/logo.png";
import Arrow from "../../assets/figures/arrow.png";

const NavBar = () => {
  return (
    <div className={styles.wrapperNav}>
      <nav className={styles.navigation}>
        <div className={styles.wrapperLink}>
          <Link to="/" className={styles.title}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            Instaread
          </Link>
        </div>
        <div className={styles.wrapperLink}>
          <NavLink to="/discover" className={styles.button}>
            Discover
          </NavLink>
          <NavLink to="/search" className={styles.button}>
            Search
          </NavLink>
          <NavLink
            to="/"
            className={styles.button}
            style={{ color: "#009aeb" }}
          >
            Try Instaread
          </NavLink>
          <NavLink to="/login" className={styles.button}>
            Login
            <img src={Arrow} alt="Logo" className={styles.arrow} />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
