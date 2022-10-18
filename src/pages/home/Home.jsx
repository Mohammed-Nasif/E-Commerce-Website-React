import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from '../../components/navbar/Navbar';
import Productlist from '../../components/productlist/Productlist';
import Cart from '../cart/Cart';
import ProductDetails from '../productdetails/Productdetails';

export default function Home({ countUp }) {
	const [products, setProducts] = useState(null);
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetchApiData();
	}, []);
	const fetchApiData = () => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts((products) => (products = json)));
	};

	const increaceCount = () => {
		console.log('clicked');
		setCount((count) => count + 1);
	};

	if (!products) {
		return <h1>Loading Data</h1>;
	} else {
		console.log(products);
	}

	return (
		<>
			<Navbar count={count} />
			<Routes>
				<Route>
					<Route index element={<Productlist products={products} countUp={increaceCount} />} />
					<Route path='/product/:id' element={<ProductDetails />} />
					<Route path='/cart' element={<Cart />} />
				</Route>
			</Routes>
		</>
	);
}
