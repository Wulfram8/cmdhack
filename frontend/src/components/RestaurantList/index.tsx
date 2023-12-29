import { FC } from 'react';
import { RestaurantCard } from './RestaurantCard';
import styles from './RestaurantsList.module.scss';
import customClasses from '../../lib/customClasses/customClasses.ts';
import { Restaurant } from '../../../../dto.ts';
import { useGetFilteredRestaurantsQuery } from '@/store/services/restaurantApi.ts';
import { useTypedSelector } from '@/store/index.ts';
import { changeFilterValue } from '@/store/filter/filterSlice.ts';

interface iRestaurantsListProps {
  className?: string;
  restaurans: Restaurant[];
}

export const RestaurantsList: FC<iRestaurantsListProps> = (props) => {
  let getfilterId = useTypedSelector(changeFilterValue);
  let filterId = getfilterId.payload.filter.value;
  const { className, restaurans } = props;
  const getFilteredList = useGetFilteredRestaurantsQuery(filterId);
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
