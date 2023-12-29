import { Meal } from '@root/dto.ts';
import MealsCard from '@/components/Meals/MealsCard/MealsCard.tsx';
import styles from './MealsList.module.scss';

export type MealsListProps = {
  meals?: Meal[];
};
const MealsList = (props: MealsListProps) => {
  const { meals } = props;
  return (
    <div className={styles.mealsList}>
      <h1>Блюда</h1>
      <div className={styles.listContainer}>
        {meals?.map((meal) => <MealsCard key={meal.id} meal={meal} />)}
      </div>
    </div>
  );
};

export default MealsList;
