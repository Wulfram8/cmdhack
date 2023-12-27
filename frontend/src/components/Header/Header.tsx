import styles from './Header.module.scss'
import {FC} from "react";
import Navbar from "../UI/Navbar/Navbar.tsx";
import {classNames} from "../../lib/classNames.ts";
import {Button} from "../UI/button/Button.tsx";
import Logo from '../../assets/logo.png'

interface iHeaderProps {
    className?: string
}

export const Header: FC<iHeaderProps> = (props) => {
    const {className} = props

    return (
        <header className={classNames(styles.Header, {}, [className!])}>
            <div className={styles.headerLogo}>
                <img src={Logo} alt=""/>
            </div>
            <Navbar />
            <Button>Order now</Button>
        </header>
    );
};