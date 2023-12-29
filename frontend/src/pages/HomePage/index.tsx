import { useGetRestaurantsQuery } from '@/store/services/restaurantApi.ts';
import { RestaurantsList } from '@/components/RestaurantList';
import Filter from '@/components/Filter/Filter';

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
      <Filter />
      <RestaurantsList restaurans={restaurantsQuery.data || []} />
    </div>
  );
};

export default HomePage;
