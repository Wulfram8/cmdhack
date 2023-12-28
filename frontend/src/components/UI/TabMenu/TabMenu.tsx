import styles from './TabMenu.module.scss'
import {classNames} from "../../../lib/classNames.ts";
import {FC} from "react";

interface iTabMenuProps {
    className?: string
}



export const TabMenu: FC<iTabMenuProps> = (props) => {
    const {className} = props

    return (
        <div className={classNames(styles.TabMenu, {}, [className!])}>

        </div>
    );
};