import { Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/home/Home';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='*' element={<h1>Page Not Found</h1>} />
			</Routes>
		</>
	);
}
