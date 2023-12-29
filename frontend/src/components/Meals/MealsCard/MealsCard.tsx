import { Ingredient, Meal } from '@root/dto.ts';
import styles from './MealsCard.module.scss';
import { BsCart4 } from 'react-icons/bs';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import { useAppDispatch, useTypedSelector } from '@/store';
import { addCartProduct } from '@/store/cart/cartSlice.ts';

export type MealsCardProps = {
  meal: Meal;
};

const MealsCard = (props: MealsCardProps) => {
  const { meal } = props;
  const cartMeals = useTypedSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();
  console.log(cartMeals);
  const [selectIngredients, setSelectIngredients] = useState<Ingredient[]>(meal.ingredients || []);

  const addIngredientHandler = (ingredient: Ingredient) => {
    setSelectIngredients((prev) => {
      const existIndex = prev.findIndex((item) => item.id === ingredient.id);
      if (existIndex !== -1) {
        const newState = [...prev];
        newState.splice(existIndex, 1);
        return newState;
      }
      return [...prev, ingredient];
    });
  };

  const handleClickOnMealBtn = () => {
    dispatch(
      addCartProduct({
        meal,
        quantity: 1,
      }),
    );
  };

  return (
    <div className={styles.mealsCard}>
      <div className={styles.imgContainer}>
        <img width={'100%'} src={meal.image} alt='' />
      </div>
      <div className={styles.mealsCardInfo}>
        <h2>{meal.name}</h2>
        <p>{meal.description}</p>
        <p>
          {meal.ingredients.map((ingredient) => (
            <Chip
              label={`${ingredient.name}`}
              component='a'
              onClick={() => addIngredientHandler(ingredient)}
              href='#basic-chip'
              className={
                selectIngredients.some((item) => item.id === ingredient.id)
                  ? undefined
                  : styles['selected']
              }
              clickable
            />
          ))}
        </p>
      </div>
      <div className={styles.mealAddCart}>
        <span>{meal.price}₽</span>
        <button onClick={handleClickOnMealBtn}>
          <span>В корзину</span>
          <BsCart4 className={styles.cartIcon} />
        </button>
      </div>
    </div>
  );
};

export default MealsCard;
