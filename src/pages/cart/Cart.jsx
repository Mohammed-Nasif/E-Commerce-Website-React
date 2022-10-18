import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartEmpty from '../../assets/images/cartEmpty.svg';
import Cartitem from '../../components/cartitem/Cartitem';
import './Cart.css';
// import cartEmpty from '../../logo.svg';
export default function Cart() {
	const [totalPrice, setTotalPrice] = useState(0);
	const itemsCount = useSelector((state) => state.cart.cartList).length;
	const cartItems = useSelector((state) => state.cart.cartList);

	useEffect(() => {
		setTotalPrice(0);
		cartItems.forEach((item) => {
			console.log(item);
			setTotalPrice((totalPrice) => totalPrice + +item.totalPurchasedPrice);
		});
	}, [cartItems]);

	if (itemsCount === 0) {
		return (
			<div className='container-fluid' style={{ marginTop: 100 + 'px' }}>
				<div className='d-flex align-items-center justify-content-center m-auto' style={{ width: 40 + '%' }}>
					<Link to='/shop'>
						<img src={cartEmpty} style={{ cursor: 'pointer', width: 500 + 'px' }} alt='Empty-Cart' />
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div className='container-fluid' style={{ marginTop: 100 + 'px' }}>
			<div className='row'>
				<div className='col-md-12'>
					<div className='card'>
						<div className='card-header'>
							<h5>Shopping Cart</h5>
						</div>
						<div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
							<div className='col-10'>
								<div className='pt-5'>
									{cartItems.map((item) => {
										return (
											<div key={item.id}>
												<Cartitem item={item} />
											</div>
										);
									})}
								</div>
							</div>
							<div className='row w-100 bg-light py-3'>
								<div className='col-10 m-auto d-flex flex-row align-items-center justify-content-between'>
									<button type='button' className='btn btn-warning btn-block btn-md w-25'>
										Proceed to Pay
									</button>
									<h4>Total: {totalPrice.toFixed(2)} </h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
