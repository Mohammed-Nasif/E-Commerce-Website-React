import './Cartitem.css';
import { FaPlusSquare, FaMinusSquare, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeFromCart, deleteAllFromCart, addToCart } from '../../redux/cartslice/cartSlice';

export default function Cartitem({ item }) {
	const dispatch = useDispatch();

	const addItem = (item) => {
		dispatch(addToCart(item));
	};
	const removeItem = (item) => {
		dispatch(removeFromCart(item));
	};
	const deleteAllItem = (item) => {
		dispatch(deleteAllFromCart(item));
	};

	return (
		<div className='card rounded-3 mb-4'>
			<div className='card-body p-4'>
				<div className='row d-flex justify-content-between align-items-center'>
					<div className='col-md-1 col-lg-1 col-xl-1'>
						<img src={item.image} className='img-fluid rounded-3' alt={item.title} />
					</div>
					<div className='col-md-3 col-lg-3 col-xl-3'>
						<p className='lead fw-normal mb-2 item-name' data-toggle='tooltip' data-placement='top' title='item.name'>
							{item.title}
						</p>
					</div>
					<div className='col-md-3 col-lg-3 col-xl-2 d-flex p-0'>
						<button className='btn btn-link px-2 fs-5' onClick={() => removeItem(item)}>
							<FaMinusSquare />
						</button>
						<input
							id='form1'
							min='1'
							max='10'
							value={item.purchasedValue}
							name='quantity'
							type='number'
							className='text-center fs-5 p-0 text-bg-secondary form-control form-control-sm w-100'
							readOnly
						/>
						<button className='btn btn-link px-2 fs-5' onClick={() => addItem(item)}>
							<FaPlusSquare />
						</button>
					</div>
					<div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
						<h5 className='mb-0'> {item.totalPurchasedPrice} EGP </h5>
					</div>
					<div className='col-md-1 col-lg-1 col-xl-1 text-end'>
						<button className='btn btn-link px-2 text-danger removeBtn fs-3' onClick={() => deleteAllItem(item)}>
							<FaTrash />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
