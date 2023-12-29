import { useEffect, useState } from 'react';
import RestarauntService from '../../API/RestarauntService.ts';
import { RestaurantsList } from '../../components/RestaurantList';
import { Restaurant } from '../../../../dto.ts';
import { useGetRestaurantsQuery } from '@/store/services/restaurantApi.ts';

export interface restaurant {
  imgUrl: string;
  title: string;
  tags: string[];
}

const HomePage = () => {
  const restaurantsQuery = useGetRestaurantsQuery();

  if (restaurantsQuery.isLoading) {
    return <h1>Загружаем данные</h1>;
  }

  return (
    <div>
      <RestaurantsList restaurans={restaurantsQuery.data || []} />
    </div>
  );
};

export default HomePage;
