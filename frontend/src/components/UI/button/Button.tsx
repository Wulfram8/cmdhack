import styles from './Button.module.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import {classNames} from "../../../lib/classNames.ts";

type tButtonType = 'submit' | 'reset' | undefined
interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    children?: ReactNode,
    type?: tButtonType
}

export const Button:FC<iButtonProps> = (props) => {
    const {className, children, type, ...buttonProps } = props
    return (
        <button type={type} {...buttonProps} className={classNames(styles.Button, {}, [className!])}>
            {children}
        </button>
    );
};