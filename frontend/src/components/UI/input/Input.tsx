import {FC, HTMLInputTypeAttribute, InputHTMLAttributes} from "react";
import styles from './Input.module.scss'
import LocationIcon from '../../../assets/icons/location-icon.svg'

interface iInputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
    placeholder?: string,
    className?: string | undefined
}

const Input: FC<iInputProps> = (props) => {
    const {placeholder, className} = props

    return (
        <div className={styles.inputContainer}>
            <img src={LocationIcon} alt="search-icon"/>
            <input className={styles[className!]} type="text" placeholder={placeholder}/>
            <img src={'#'} alt="search-icon"/>
        </div>
    );
};

export default Input;