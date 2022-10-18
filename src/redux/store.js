import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartslice/cartSlice';
import counterReducer from './counterslice/counterSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		cart: cartReducer,
	},
});
