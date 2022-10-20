import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import './Signup.css';

export default function Signup() {
	const jobOptions = [
		{ value: 1, label: 'Front-End Developer' },
		{ value: 2, label: 'Back-End Developer' },
		{ value: 3, label: 'FullStack Developer' },
	];

	// const hoppiesOptions = [{'Reading'}, {'Watching Movies'}, {'Cooking'}, {'Playing Lol'}];
	const hoppiesOptions = [
		{ value: 1, label: 'Reading' },
		{ value: 2, label: 'Watching Movies' },
		{ value: 3, label: 'Cooking' },
		{ value: 4, label: 'Playing Lol' },
	];

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
	} = useForm();

	const onSubmit = (userData) => {
		alert('Check The Submitted Data In Console');
		console.table(userData);
	};

	console.log(errors);

	return (
		<div className='signup_form'>
			<Form onSubmit={handleSubmit(onSubmit)} id='signUp'>
				{/*Name*/}
				<Form.Group className='mb-3' controlId='formBasicName'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Your Name'
						{...register('name', {
							required: true,
							maxLength: 20,
						})}
					/>
					{errors?.name?.type === 'required' && <p className='font-weight text-danger mt-2'>Name is required</p>}
					{errors?.name?.type === 'maxLength' && <p className='font-weight text-danger mt-2'>Name must contain maximum 20 letters</p>}
				</Form.Group>

				{/*Username*/}
				<Form.Group className='mb-3' controlId='formBasicUsername'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type='text'
						placeholder='Username'
						{...register('username', {
							required: true,
							pattern: /^[a-zA-Z0-9_-]{3,16}$/,
						})}
					/>
					{errors?.username?.type === 'required' && <p className='font-weight text-danger mt-2'>Username is required</p>}
					{errors?.username?.type === 'pattern' && (
						<p className='font-weight text-danger mt-2'>Username must contain 3 - 16 Characters includes (0-9 and _-)</p>
					)}
				</Form.Group>

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

				{/*Confirm Password*/}
				<Form.Group className='mb-3' controlId='formBasicConfPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Confirm Password'
						{...register('confirmPassword', {
							required: true,
							validate: (value) => value === watch('password'),
						})}
					/>
					{errors?.confirmPassword?.type === 'required' && <p className='font-weight text-danger mt-2'>Confirm Password is required</p>}
					{errors?.confirmPassword?.type === 'validate' && <p className='font-weight text-danger mt-2'>Password Not Matched !</p>}
				</Form.Group>

				{/*Phone Number*/}
				<Form.Group className='mb-3' controlId='formBasicConfirmPassword'>
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type='tel'
						placeholder='Phone Number'
						{...register('phone', {
							pattern: /^\+?(\d.*){11}$/,
						})}
					/>
					{errors?.phone?.type === 'pattern' && <p className='font-weight text-danger mt-2'>Phone Number Must Contains 11 Nums</p>}
				</Form.Group>

				{/*Select Your Job Title*/}
				<Form.Group className='mb-3' controlId='formBasicSelect'>
					<Form.Label>Job Title</Form.Label>
					<Controller name='select' control={control} render={({ field }) => <Select {...field} options={jobOptions} />} rules={{ required: true }} />
					{errors?.select?.type === 'required' && <p className='font-weight text-danger mt-2'>Please select your title</p>}
				</Form.Group>

				{/*Hobbies Check Box*/}
				<Form.Group className='mb-3' controlId='formBasicCheckBox'>
					<Form.Label>Your Hobbies</Form.Label>
					<div className='border border-dark p-2 pb-0 rounded-3 w-50'>
						{hoppiesOptions.map((hoppie) => (
							<div key={hoppie.value} className='mb-3'>
								<Form.Check type='checkbox' value={hoppie.value} id={`default-${hoppie.value}`} label={`${hoppie.label}`} {...register('hoppies')} />
							</div>
						))}
					</div>
				</Form.Group>

				{/*Agree To Terms And Conditions CheckBox*/}
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check
						type='checkbox'
						label='Agree To Terms And Conditions CheckBox'
						{...register('agreeTerms', {
							required: true,
						})}
					/>
					{errors?.agreeTerms?.type === 'required' && <p className='font-weight text-danger mt-2'>You must agree on Terms and Conditions</p>}
				</Form.Group>

				{/*Submit Button*/}
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

