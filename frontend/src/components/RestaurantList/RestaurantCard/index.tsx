import {FC} from "react";
import {restaurant} from "../../../pages/HomePage";
import styles from './RestaurantCard.module.scss'
import customClasses from "../../../lib/customClasses/customClasses.ts";

interface iRestaurantCardProps {
    className?: string,
    restaurant: restaurant
}

export const RestaurantCard: FC<iRestaurantCardProps> = (props) => {
    const {className, restaurant} = props
    return (
        <div className={customClasses(styles.RestCard, {}, [className!])}>
            <img width={'100%'} src={restaurant.imgUrl} alt=""/>
            <h2>{restaurant.title}</h2>
            <span>{restaurant.tags.join(', ')}</span>
        </div>
    );
};