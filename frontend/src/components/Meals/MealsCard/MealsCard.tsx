import { Meal } from '@root/dto.ts';
import styles from './MealsCard.module.scss';
import { BsCart4 } from 'react-icons/bs';

export type MealsCardProps = {
  meal: Meal;
};

const MealsCard = (props: MealsCardProps) => {
  const { meal } = props;

  return (
    <div className={styles.mealsCard}>
      <div className={styles.imgContainer}>
        <img width={'100$'} src={meal.image} alt='' />
      </div>
      <div className={styles.mealsCardInfo}>
        <h2>{meal.name}</h2>
        <p>{meal.description}</p>
      </div>
      <div className={styles.mealAddCart}>
        <span>620rub</span>
        <button>
          <span>В корзину</span>
          <BsCart4 />
        </button>
      </div>
    </div>
  );
};

export default MealsCard;
