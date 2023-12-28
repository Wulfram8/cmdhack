const Cart = () => {
	return (
		<div>
			<h1>Корзина</h1>
			<div className="cartItem">
				<img src="" alt="" className="meal-img" />
				<div className="meal-text">
					<h2 className="meal-name">Salsa</h2>
					<p className="meal-ingredients">Lorem ipsum dolor sit amet</p>
				</div>
				<div className="meal-count">
					<button className="count-decr">-</button>
          <span className="count-text">1</span>
					<button className="count-incr">+</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
