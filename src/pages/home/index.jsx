import Productlist from '../../components/productlist';
import { useState, useEffect } from 'react';

export default function Home({ countUp }) {
	const [products, setProducts] = useState(null);
	useEffect(() => {
		fetchApiData();
	}, []);

	const fetchApiData = () => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts((products) => (products = json)));
	};

	if (!products) {
		return <h1>Loading Data</h1>;
	} else {
		console.log(products);
	}

	return <Productlist products={products} countUp={countUp} />;
}
