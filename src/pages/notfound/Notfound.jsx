import notFoundImg from '../../assets/images/not-found.svg';
export default function Notfound() {
	return (
		<div className='d-flex align-items-center justify-content-center w-50 h-50 m-auto mt-5'>
			<img src={notFoundImg} alt='Not-found' />
		</div>
	);
}
