import { useTypedSelector } from '@/store/index.ts';
import customClasses from '../../lib/customClasses/customClasses.ts';
import style from './Cart.module.scss';
import CartItem from './CartItem/CartItem.tsx';
import { CartProduct, selectCartProducets } from '@/store/cart/cartSlice.ts';
import CartTotal from './CartTotal/CartTotal.tsx';

const Cart = () => {
  let products = useTypedSelector(selectCartProducets);
  return (
    <div className={customClasses(style.cart)}>
      <h1>Корзина</h1>
      <div className={style.itemCont}>
        {products.map((product: CartProduct) => (
          <CartItem product={product} key={product.meal.id} />
        ))}
      </div>
      <CartTotal products={products} />
    </div>
  );
};

export default Cart;
