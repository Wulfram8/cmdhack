import { useParams } from 'react-router-dom';
import styles from './RestaurantPage.module.scss';
import { useGetRestaurantByIdQuery } from '@/store/services/restaurantApi.ts';
import MealsList from '@/components/Meals/MealsList.tsx';

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurantQuery = useGetRestaurantByIdQuery(Number(id));
  const restaurantData = restaurantQuery.data;

  return (
    <div>
      <section className={styles.sectionRestaurant}>
        <img src={restaurantData?.image} alt='img' />
        <div className={styles.restaurantInfo}>
          <h1>{restaurantData?.name}</h1>
          <p>{restaurantData?.description}</p>
        </div>
      </section>

      <section>
        <MealsList meals={restaurantData?.meals} />
      </section>
    </div>
  );
};

export default RestaurantPage;
