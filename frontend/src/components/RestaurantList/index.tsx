import { FC } from 'react';
import { RestaurantCard } from './RestaurantCard';
import styles from './RestaurantsList.module.scss';
import customClasses from '../../lib/customClasses/customClasses.ts';
import { Restaurant } from '../../../../dto.ts';

interface iRestaurantsListProps {
  className?: string;
  restaurans: Restaurant[];
}

export const RestaurantsList: FC<iRestaurantsListProps> = (props) => {
  const { className, restaurans } = props;

  return (
    <div className={customClasses(styles.RestListContainer, {}, [className!])}>
      <h1>Рестораны</h1>
      <div className={customClasses(styles.RestList, {}, [className!])}>
        {restaurans.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
