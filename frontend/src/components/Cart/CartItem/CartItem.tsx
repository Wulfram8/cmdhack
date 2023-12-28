import React, { useState } from "react";
import customClasses from "../../../lib/customClasses/customClasses.ts";
import style from "./CartItem.module.scss";
import { Meal } from "@root/dto.ts";

export type CartItemProps = {
	meal: Meal;
	quantity: number;
};

const CartItem = () => {
	let [itemCount, setItemCount] = useState<any>(1);

	return (
		<div className={customClasses(style.cartItem)}>
			<div className={style.cartLeft}>
				<img
					src="https://eda.ru/img/eda/1280x-/s1.eda.ru/StaticContent/Photos/150525210126/150601174518/p_O.jpg"
					alt=""
					className="meal-img"
				/>
				<div className={style.cartText}>
					<h2 className="meal-name">Salsa</h2>
					<p>
						Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок,
						базилик, соус песто
					</p>
				</div>
			</div>
			<div className={customClasses(style.mealCount)}>
				<button onClick={() => setItemCount(--itemCount)}>-</button>
				<span className="count-text">{itemCount}</span>
				<button onClick={() => setItemCount(++itemCount)}>+</button>
			</div>
			<p className={style.itemPrice}>1650 rub</p>
			<button className="meal-delete">x</button>
		</div>
	);
};

export default CartItem;
