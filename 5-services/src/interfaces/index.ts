export interface Book {
	title: string;
	author: string;
	price: number;
	rating: number;
}

export interface Item {
	name: string;
	qty: number;
	price: number;
}

export interface Cart {
	items: Item[];
	totalPrice: number;
}