import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../productdetails/Productdetails.css';
import { BsCartPlusFill } from 'react-icons/bs';
import { addToCart } from '../../redux/cartslice/cartSlice';
import { useDispatch } from 'react-redux';

export default function ProductDetails() {
	const [product, setProduct] = useState(null);
	const param = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${param.id}`)
			.then((res) => res.json())
			.then((json) => setProduct((product) => (product = { ...json, purchasedValue: 0, totalPurchasedPrice: 0 })));
	}, [param.id]);

	if (!product) {
		return <h1>Loading</h1>;
	}

	return (
		<section className='container m-auto d-flex justify-content-center align-items-center details'>
			<div className='container mt-5 m-auto'>
				<div className='row d-flex justify-content-center'>
					<div className='col-md-10'>
						<div className='card'>
							<div className='row'>
								<div className='col-md-5'>
									<div className='images p-3'>
										<div className='p-4 zoom-img'>
											<img id='main-image' alt='' src={product.image} style={{ width: 350 + 'px' }} />
										</div>
									</div>
								</div>
								<div className='col-md-7 p-2'>
									<div className='product p-4'>
										<div className='d-flex justify-content-between align-items-center'>
											<div className='d-flex align-items-center backBtn'>
												<Link className='ml-1 rounded-5' to='/shop'>
													Back To Shop
												</Link>
											</div>
										</div>
										<div className='mt-4 mb-3'>
											<h5 className='text-uppercase mt-2 mb-3'>{product.title}</h5>
											<div className='price d-flex flex-row align-items-center'>
												<span className='me-2 fw-bold'>Price: </span>
												<span className='act-price badge bg-success'> {product.price} EGP </span>
											</div>
										</div>
										<p className='about'>Description: {product.description} </p>
										<p className='about badge bg-warning d-block' style={{ width: 'fit-content' }}>
											{product.rating.count > 0 ? 'In Stock' : 'Out Of Stock'}
										</p>
										<div className='sizes mt-2 row justify-content-between'>
											<h6 className='d-inline col-10'>Category: {product.category} </h6>
											<button className='btn btn-link px-2 fs-3 col-2' onClick={() => dispatch(addToCart(product))}>
												<BsCartPlusFill />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
