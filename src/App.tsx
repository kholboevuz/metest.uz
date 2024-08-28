import { Toaster } from '@/components/ui/toaster'

import { Route, Routes } from 'react-router-dom'
import Page404 from './components/404/404'
import Battle from './components/Battle/Battle'
import Challenges from './components/Challenges/challenges'
import Dashboard from './components/Dashboard/Dashboard'
import Home from './components/Home/Home'
import Exam from './components/Mock/Exam'
import Mock from './components/Mock/Mock'
import Footer from './components/Partials/Footer'
import Navbar from './components/Partials/Navbar'
import Payment from './components/Payment/Payment'
import Recommendation from './components/Recommendation/recommendation'
import Subscriber from './components/Subscriber/Subscriber'

function App() {
	return (
		<>
			<Routes>
				<Route
					path='*'
					element={
						<>
							<Navbar />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/recommendation' element={<Recommendation />} />
								<Route path='/challenges' element={<Challenges />} />
								<Route path='/challenges/battle' element={<Battle />} />
								<Route path='/dashboard' element={<Dashboard />} />
								<Route path='/dashboard/payment' element={<Payment />} />
								<Route path='/dashboard/subscriber' element={<Subscriber />} />
								<Route path='*' element={<Page404 />} />
							</Routes>
							<Footer />
						</>
					}
				/>

				{/* Mock */}
				<Route path='/dashboard/mock/:examType' element={<Mock />} />
				<Route path='/dashboard/mock/exam' element={<Exam />} />
				{/* End */}
			</Routes>
			<Toaster />
		</>
	)
}

export default App
