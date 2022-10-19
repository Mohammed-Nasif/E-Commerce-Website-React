import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	counterValue: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			console.log(state);
			state.counterValue += 1;
		},
		decrement: (state) => {
			if (state.counterValue > 0) state.counterValue -= 1;
		},
		reset: (state) => {
			state.counterValue = 0;
		},
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
