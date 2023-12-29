import { Link } from 'react-router-dom';
import style from './CartTotal.module.scss';
import customClasses from '../../../lib/customClasses/customClasses.ts';
import { CartProduct, CartState } from '@/store/cart/cartSlice.ts';
import { FC } from 'react';

const CartTotal: FC<CartState> = (props) => {
  const { products } = props;
  const cartTotal = products.reduce(
    (acc: number, val: CartProduct) => acc + val.meal.price * val.quantity,
    0,
  );

  return (
    <div className={style.totalCont}>
      <h3>
        Итого: <span>{cartTotal} руб.</span>
      </h3>
      <Link to='/make-order'>Оформить заказ</Link>
    </div>
  );
};

export default CartTotal;
