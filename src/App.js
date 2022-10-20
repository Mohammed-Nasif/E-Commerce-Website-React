import { Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/home/Home';
import Notfound from './pages/notfound/Notfound';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/404' element={<Notfound />} />
			</Routes>
		</>
	);
}
