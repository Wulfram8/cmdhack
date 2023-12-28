import {classNames} from "../../lib/classNames.ts";
import {FC} from "react";
import {RestaurantCard} from "./RestaurantCard";
import {restaurant} from "../../pages/HomePage";
import styles from './RestaurantsList.module.scss'

interface iRestaurantsListProps {
    className?: string,
    restaurans: restaurant[]

}

export const RestaurantsList: FC<iRestaurantsListProps> = (props) => {
    const {className, restaurans} = props

    return (
        <div className={classNames(styles.RestListContainer, {}, [className!])}>
            <h1>Рестораны</h1>
            <div className={classNames(styles.RestList, {}, [className!])}>
                {restaurans.map(restaurant => (<RestaurantCard key={restaurant.title} restaurant={restaurant}/>))}
            </div>
        </div>
    );
};