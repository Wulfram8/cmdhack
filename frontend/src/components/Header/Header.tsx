import styles from './Header.module.scss'
import {FC} from "react";
import {Button} from "../UI/button/Button.tsx";
import Input from "../UI/input/Input.tsx";
import CallingIcon from '../../assets/icons/calling-icon.svg'
import customClasses from "../../lib/customClasses/customClasses.ts";

interface iHeaderProps {
    className?: string
}

export const Header: FC<iHeaderProps> = (props) => {
    const {className} = props

    return (
        <header className={customClasses(styles.Header, {}, [className!])}>
            <div className={styles.headerLogo}>
                Logos
            </div>
            <Input className={'input'} placeholder={'Введите адрес доставки'} />
            <div className={styles.contacts}>
                <img className={styles.contactsIcon} src={CallingIcon} alt=""/>
                <div className={styles.contactsInfo}>
                    <h4 className={styles.title}>Контакты</h4>
                    <span id={styles.phoneNumber}>+7 (917) 510-57-79</span>
                </div>
            </div>
            <div style={{display: 'flex', gap: 10}}>
                <Button>Cart</Button>
                <Button>Login</Button>
            </div>
        </header>
    );
};