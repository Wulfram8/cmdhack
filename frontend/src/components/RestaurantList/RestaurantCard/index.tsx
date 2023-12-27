import {classNames} from "../../../lib/classNames.ts";
import {FC} from "react";
import {restaurant} from "../../../pages/HomePage";
import styles from './RestaurantCard.module.scss'

interface iRestaurantCardProps {
    className?: string,
    restaurant: restaurant
}

export const RestaurantCard: FC<iRestaurantCardProps> = (props) => {
    const {className, restaurant} = props
    return (
        <div className={classNames(styles.RestCard, {}, [className!])}>
            <img width={'100%'} src={restaurant.imgUrl} alt=""/>
            <h2>{restaurant.title}</h2>
            <span>{restaurant.tags.join(', ')}</span>
        </div>
    );
};