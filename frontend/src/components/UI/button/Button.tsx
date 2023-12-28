import styles from './Button.module.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import customClasses from "../../../lib/customClasses/customClasses.ts";

type tButtonType = 'submit' | 'reset' | undefined
interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children?: ReactNode,
    type?: tButtonType
}

export const Button:FC<iButtonProps> = (props) => {
    const {className, children, type, ...buttonProps } = props
    return (
        <button type={type} {...buttonProps} className={customClasses(styles.Button, {}, [className!])}>
            {children}
        </button>
    );
};