import { FC } from 'react';
import { RestaurantCard } from './RestaurantCard';
import styles from './RestaurantsList.module.scss';
import customClasses from '../../lib/customClasses/customClasses.ts';
import { Restaurant } from '@root/dto.ts';

interface iRestaurantsListProps {
  className?: string;
  restaurans: Restaurant[];
}

export const RestaurantsList: FC<iRestaurantsListProps> = (props) => {
  const { className, restaurans } = props;
  console.log(restaurans);
  return (
    <div className={customClasses(styles.RestListContainer, {}, [className!])}>
      <div className={styles.titleWrapper}>
        <div className={styles.verticalLine} />
        <h1 className={styles.title}>Список ресторанов</h1>
      </div>
      <div className={customClasses(styles.RestList, {}, [className!])}>
        {restaurans.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
