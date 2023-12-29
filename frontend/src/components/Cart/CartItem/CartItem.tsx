import customClasses from '../../../lib/customClasses/customClasses.ts';
import style from './CartItem.module.scss';
import { CartProduct, decrement, increment, removeCartProduct } from '@/store/cart/cartSlice.ts';
import { useAppDispatch } from '@/store';

export type CartItemProps = {
  product: CartProduct;
};

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={customClasses(style.cartItem)}>
      <div className={style.cartLeft}>
        <img
          src='https://eda.ru/img/eda/1280x-/s1.eda.ru/StaticContent/Photos/150525210126/150601174518/p_O.jpg'
          alt=''
          className='meal-img'
        />
        <div className={style.cartText}>
          <h2 className='meal-name'>{product.meal.name}</h2>
          <p>{product.meal.description}</p>
        </div>
      </div>
      <div className={customClasses(style.mealCount)}>
        <button onClick={() => dispatch(decrement(product.meal.id))}>-</button>
        <span className='count-text'>{product.quantity}</span>
        <button onClick={() => dispatch(increment(product.meal.id))}>+</button>
      </div>
      <p className={style.itemPrice}>{product.meal.price} руб.</p>
      <button className='meal-delete' onClick={() => dispatch(removeCartProduct(product.meal.id))}>
        x
      </button>
    </div>
  );
};

export default CartItem;
