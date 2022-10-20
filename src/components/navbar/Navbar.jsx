import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

export default function Navbar() {
	const itemsCount = useSelector((state) => state.cart.cartCounter);

	return (
		<nav className='navbar navbar-dark navbar-expand-lg bg-dark mb-5 position-fixed top-0'>
			<div className='container-fluid d-flex flex-row justify-content-between'>
				<Link className='navbar-brand fw-bold logo'>Mohammed Nasif</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex w-100 flex-row justify-content-end align-items-center'>
						<li className='nav-item'>
							<Link className='nav-link' aria-current='page' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/counter'>
								Counter
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/shop'>
								Shop
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/cart'>
								<span className='counter'>{itemsCount}</span>
								<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' className='bi bi-cart' viewBox='0 0 16 16'>
									<path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
								</svg>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/signup'>
								Signup
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
