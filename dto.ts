export type User = {
	id: number;
	username: string;
	first_name: string;
	last_name: string;
}

export type Client = {
	id: number;
	user: User;
	restaurant: Restaurant;
	phone: string;
	reward_points: number;
};

export type Order = {
	id: number;
	client: Client;
	products: {
		quantity: number;
		mealId: number;
		notes: string[];
	}[];
};

export type Ingredient = {
	id: number;
	name: string;
};

export type Category = {
	id: number;
	name: string;
};

export type Meal = {
	id: number;
	name: string;
	description: string;
	ingredients: Ingredient[];
	image: string;
	price: number;
	category: Category[];
};

export type Restaurant = {
  categories: any;
	id: number;
	name: string;
	description: string;
	category: Category[];
	image: string;
	ordersCount: number;
	meals: Meal[];
	address: string;
};
