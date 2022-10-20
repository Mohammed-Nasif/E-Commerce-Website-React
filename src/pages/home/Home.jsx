import { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Components
import Navbar from '../../components/navbar/Navbar';
import Productlist from '../../components/productlist/Productlist';
import Cart from '../cart/Cart';
import ProductDetails from '../productdetails/Productdetails';
import Signup from '../signup/Signup';
import CounterActions from './../../components/Counter/CounterActions/CounterActions';
import Homecontent from './Homecontent';
// import Notfound from '../notfound/Notfound';

export default function Home({ countUp }) {
	const [products, setProducts] = useState(null);
	const [count, setCount] = useState(0);

	useEffect(() => {
		fetchApiData();
	}, []);

	const fetchApiData = () => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				setProducts(
					json.map((product) => {
						product.purchasedValue = 0;
						product.totalPurchasedPrice = 0;
						return product;
					}),
				);
			});
	};
	const increaceCount = () => {
		console.log('clicked');
		setCount((count) => count + 1);
	};

	if (!products) {
		return <h1>Loading Data</h1>;
	} else {
		// console.log(products);
	}

	return (
		<>
			<Navbar count={count} />
			<Routes>
				<Route
					index
					element={
						<h1 style={{ marginTop: 90 + 'px', textAlign: 'center' }}>
							<Homecontent />
						</h1>
					}
				/>
				<Route path='/counter' element={<CounterActions />} />
				<Route path='/shop' element={<Productlist products={products} countUp={increaceCount} />} />
				<Route path='/product/:id' element={<ProductDetails />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='*' element={<Navigate to='/404' />} />
			</Routes>
		</>
	);
}
