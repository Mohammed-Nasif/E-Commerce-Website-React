import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Signup from './../signup/Signup';

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = (userData) => {
		console.table(userData);
		navigate('/shop');
	};

	console.log(errors);
	return (
		<div className='login_form'>
			<Form onSubmit={handleSubmit(onSubmit)} id='signUp'>
				{/*Email Address*/}
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						{...register('email', {
							required: true,
							pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
						})}
					/>
					{errors?.email?.type === 'required' && <p className='font-weight text-danger mt-2'>Email is required</p>}
					{errors?.email?.type === 'pattern' && <p className='font-weight text-danger mt-2'>Email enter a valid email</p>}
					<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				{/*Password*/}
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						{...register('password', {
							required: true,
							pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
						})}
					/>
					{errors?.password?.type === 'required' && <p className='font-weight text-danger mt-2'>Password is required</p>}
					{errors?.password?.type === 'pattern' && (
						<p className='font-weight text-danger mt-2'>
							Password must contains Minimum 8 characters, at least one letter, one number and one special character.
						</p>
					)}
				</Form.Group>

				{/*Submit Button*/}
				<Button variant='primary' type='submit'>
					Login
				</Button>
				<p className='text-center'>
					Don't have account{' '}
					<Link to='/signup' className='fw-bolder'>
						Signup
					</Link>{' '}
					<span className='fw-bold'>Now!</span>
				</p>
			</Form>
		</div>
	);
}
