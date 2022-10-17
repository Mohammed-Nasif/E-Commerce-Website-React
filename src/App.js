import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import ProductDetails from './pages/productdetails/index';
import Navbar from './components/navbar';
import { useState } from 'react';

export default function App() {
	const [count, setCount] = useState(0);

	const increaceCount = () => {
		console.log('clicked');
		const newCount = count + 1;
		setCount(newCount);
	};

	return (
		<>
			<Navbar count={count} />
			<Routes>
				<Route path='/' element={<Home countUp={increaceCount} />} />
				<Route path='/home' element={<Home countUp={increaceCount} />} />
				<Route path='/product/:id' element={<ProductDetails />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	);
}
