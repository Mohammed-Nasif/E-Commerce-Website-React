import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartList: [],
	cartCounter: 0,
};

export const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			if (!state.cartList.some((item) => item.id === action.payload.id)) {
				// action.payload.purchasedValue = 1;
				const addedItem = JSON.parse(JSON.stringify(action.payload));
				addedItem.purchasedValue = 1;
				addedItem.totalPurchasedPrice = (+addedItem.totalPurchasedPrice + +addedItem.price).toFixed(2);
				state.cartList.push(addedItem);
			} else {
				const currItem = state.cartList.find((item) => item.id === action.payload.id);
				currItem.purchasedValue += 1;
				currItem.totalPurchasedPrice = (+currItem.totalPurchasedPrice + +currItem.price).toFixed(2)
			}
			state.cartCounter += 1;
		},
		removeFromCart: (state, action) => {
			const removedItem = state.cartList.find((item) => item.id === action.payload.id);
			if (removedItem.purchasedValue > 1) {
				removedItem.purchasedValue -= 1;
				removedItem.totalPurchasedPrice = (+removedItem.totalPurchasedPrice - +removedItem.price).toFixed(2);
				state.cartCounter -= 1;
			}
		},
		deleteAllFromCart: (state, action) => {
			const removedItem = state.cartList.find((item) => item.id === action.payload.id);
			state.cartCounter -= removedItem.purchasedValue;
			state.cartList = state.cartList.filter((cartItem) => cartItem.id !== removedItem.id);
		},
	},
});


export const { addToCart, removeFromCart, deleteAllFromCart } = cartReducer.actions;

export default cartReducer.reducer;
