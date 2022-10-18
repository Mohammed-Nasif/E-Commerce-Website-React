import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterslice/counterSlice';



export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
