import homeImg from '../../assets/images/homepage.svg';

export default function Homecontent() {
	return (
		<div className='row p-0 w-100'>
			<div className='col-7 mt-5'>
				<h1 className='mb-3' >Hi, I am Mohammed Nasif.</h1>
				<h3 style={{ color: '#FD9A28' }} className="mb-4">Nice To See You here 😊</h3>
				<p className='bg-info fs-5 fw-normal w-75 p-3 rounded-3 m-auto'>
					Passionate Front-End Developer with an excellent experience in JS, HTML, CSS | SASS | BootStrap, and Good knowledge of React JS and React's
					Third-party libraries, And Always Love to Create cool stuff using a lot of them, I also have a basic knowledge and a bit of experience in
					Backend and Databases Using NodeJS and PSQL. I aim to learn more about other JavaScript frameworks with time. I always look forward to
					learning new skills and technologies in order to be always up to date as well as enhance my expertise.
				</p>
			</div>
			<div class='col-5 p-0'>
				<img className='w-100' src={homeImg} alt='Not-found' />
			</div>
		</div>
	);
}
