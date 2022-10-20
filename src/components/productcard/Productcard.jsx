import './Productcard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteAllFromCart } from '../../redux/cartslice/cartSlice';
import { useState, useEffect } from 'react';

export default function Productcard({ product }) {
	const dispatch = useDispatch();
	const [inCart, setInCart] = useState(false);
	const cartItems = useSelector((state) => state.cart.cartList);

	useEffect(() => {
		if (cartItems.some((item) => item.id === product.id)) {
			setInCart(true);
		}
	}, [cartItems, product]);

	const addProduct = (product) => {
		dispatch(addToCart(product));
		setInCart(true);
	};

	const removeProduct = (product) => {
		dispatch(deleteAllFromCart(product));
		setInCart(false);
	};

	return (
		<div
			className='card mb-4 d-flex flex-column justify-content-center'
			style={{ width: 25 + 'rem', minHeight: 18 + 'rem', borderColor: 'rgb(29, 38, 58)' }}>
			<div className='d-flex justify-content-center align-items-center p-2'>
				<img
					src={product.image}
					className='card-img-top m-auto'
					style={{ width: 200 + 'px', height: 200 + 'px', objectfit: 'contain', cursor: 'pointer' }}
					alt='product.name'
				/>
			</div>
			<div className='card-body'>
				<h6 className='card-title my-2' data-toggle='tooltip' data-placement='top' title={product.title}>
					{product.title}
				</h6>
				<p className='card-text fw-semibold'>
					Price: <span className='badge bg-warning'>{product.price} EGP</span>
				</p>
				<div className='btns row justify-content-around'>
					<button
						className={inCart ? 'col-5 btn btn-danger' : 'col-5 btn btn-secondary'}
						onClick={() => (inCart ? removeProduct(product) : addProduct(product))}>
						{inCart ? 'Remove From Cart' : 'Add to cart'}
					</button>
					<Link to={`/product/${product.id}`} className='col-5 btn btn-info'>
						Details
					</Link>
				</div>
			</div>
			<div className='card-footer'>
				<small className='text-muted'>Category: {product.category} </small>
			</div>
		</div>
	);
}
