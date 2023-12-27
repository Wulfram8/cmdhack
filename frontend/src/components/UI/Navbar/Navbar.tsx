import {NavLink} from "react-router-dom";
import styles from './Navbar.module.scss'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li><NavLink to="/" className={styles.navLink}>Домой</NavLink></li>
                <li><NavLink to="/posts" className={styles.navLink}>Посты</NavLink></li>
                <li><NavLink to="about" className={styles.navLink}>О сайте</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;