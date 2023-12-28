import {FC} from "react";
import styles from './RestaurantCard.module.scss'
import customClasses from "../../../lib/customClasses/customClasses.ts";
import { Restaurant } from "@root/dto.ts";

interface iRestaurantCardProps {
    className?: string,
    restaurant: Restaurant
}

export const RestaurantCard: FC<iRestaurantCardProps> = (props) => {
    const {className, restaurant} = props
    return (
        <div className={customClasses(styles.RestCard, {}, [className!])}>
            <img width={'100%'} src={restaurant.image} alt=""/>
            <h2>{restaurant.name}</h2>
            <span>{restaurant.category.map(item => item.name).join(', ')}</span>
        </div>
    );
};