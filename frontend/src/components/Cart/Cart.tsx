import customClasses from "../../lib/customClasses/customClasses.ts";
import style from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem.tsx";
const Cart = () => {
	interface cartItems {
		name: string;
		ingredients: string;
		img: string,
		price: number
	}
	
	let cartList = [
		{
			name: "Паста Карбонара",
			ingredients: "спагетти, гуанчиале, яйца, сыр пармезан, соль, перец",
			img: "https://images.app.goo.gl/VNpMtPcakwkSj9WXA",
			price: 350,
		},
		{
			name: "Цезарь с курицей",
			ingredients:
				"куриное филе, салат ромэн, гренки, сыр пармезан, соус Цезарь",
			img: "https://images.app.goo.gl/5BAirzRQhVrjEy1t8",
			price: 250,
		},
		{
			name: "Салат Греческий",
			ingredients:
				"томаты, огурцы, перец болгарский, красный лук, оливки, фета, оливковое масло",
			img: "https://images.app.goo.gl/W7UkrfWsGx1uCF5U6",
			price: 200,
		},
	];
	return (
		<div className={customClasses(style.cart)}>
			<h1>Корзина</h1>
			<div className={style.itemCont}>
				{cartList.map((el, id) => (
					<CartItem el={el} key={id} />
				))}
			</div>
		</div>
	);
};

export default Cart;
