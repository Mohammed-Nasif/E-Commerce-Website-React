import Counter from '../Counter/Counter';
import CounterBtn from '../CounterBtn/CounterBtn';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../../redux/counterslice/counterSlice';

export default function CounterActions() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.counterValue);
	console.log(count);

	const incrementCount = () => {
		dispatch(increment());
	};
	const decrementCount = () => {
		dispatch(decrement());
	};
	const resetCounter = () => {
		dispatch(reset());
	};
	return (
		<div
			className='d-flex flex-column justify-content-center align-items-center bg-secondary w-25 h-25 rounded-4 p-4 mx-auto'
			style={{ marginTop: 200 + 'px' }}>
			<Counter />
			<div className='w-50 d-flex flex-column align-items-center'>
				<div className='d-flex flex-row gap-5 w-100 m-auto'>
					<CounterBtn isCountUp={false} countDown={decrementCount} />
					<CounterBtn isCountUp={true} countUp={incrementCount} />
				</div>
				<CounterBtn isCountReset={true} countReset={resetCounter} />
			</div>
		</div>
	);
}
