import {NavLink} from "react-router-dom";
import styles from './Navbar.module.scss'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li><NavLink to="/" className={styles.navLink}>HOME</NavLink></li>
                <li><NavLink to="/about" className={styles.navLink}>ABOUT</NavLink></li>
                <li><NavLink to="/menu" className={styles.navLink}>MENU</NavLink></li>
                <li><NavLink to="/orders" className={styles.navLink}>ORDERS</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;