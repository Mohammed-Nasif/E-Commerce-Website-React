import { useSelector } from "react-redux";

export default function Counter() {
	const count = useSelector((state) => state.counter.counterValue);
	console.log(count)
	return <h1 className='text-white my-4'>{count}</h1>;
}
