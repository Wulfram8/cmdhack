import { FC } from 'react';
import styles from './RestaurantCard.module.scss';
import customClasses from '../../../lib/customClasses/customClasses.ts';
import { Restaurant } from '@root/dto.ts';
import { Link } from 'react-router-dom';
import { AppRoutes } from '@/router/routerConfig.tsx';

interface iRestaurantCardProps {
  className?: string;
  restaurant: Restaurant;
}

export const RestaurantCard: FC<iRestaurantCardProps> = (props) => {
  const { className, restaurant } = props;
  return (
    <Link to={`/${AppRoutes.RESTAURANT}/${restaurant.id}`}>
      <div className={customClasses(styles.RestCard, {}, [className!])}>
        <img width={'100%'} src={restaurant.image} alt='' />
        <h2>{restaurant.name}</h2>
        <span>{restaurant.categories.map((item: any) => item.name).join(', ')}</span>
      </div>
    </Link>
  );
};
