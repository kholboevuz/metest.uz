import grid from '@/assets/grids/grid.png'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CalendarDemo } from '../Calendar/Calendar'
import { ChartChallenges } from '../Chart/ChartChallenges'
import PageLoading from '../Loading/pageLoading'
import MenuNavbar from '../Partials/MenuNavbar'
import LeaderBoard from '../Tables/LeaderBoard'
import { Badge } from '../ui/badge'
export default function Challenges() {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])
	return (
		<div>
			{loading ? (
				<div>
					<PageLoading />
				</div>
			) : (
				<>
					<div className='max-w-6xl m-auto pt-10 mb-16'>
						<h1 className='text-4xl font-bold'>Sinovlarga xush kelibsiz</h1>
						<MenuNavbar />
						{/* challenges */}
						<div className='flex gap-3 grid-cols-2 justify-between  mt-10'>
							<div>
								<div className='flex gap-5 flex-wrap'>
									<div>
										<Card
											style={{
												backgroundImage: `url(${grid})`,
											}}
											className='bg-bgCard dark:bg-slate-700 border-b-4'
										>
											<CardHeader>
												<CardTitle>
													<h1 className='text-2xl font-bold '>Kunlik</h1>
												</CardTitle>
												<CardDescription className=''>
													{' '}
													Siz bugun kechagidan ko'ra 10 coins taga ko'proq Coin
													ishladingiz
												</CardDescription>
											</CardHeader>

											<CardFooter>
												<p className='flex items-center gap-2 mt-5  hover:cursor-pointer '>
													<div className='flex items-center space-x-2 bg-green-100 p-4 rounded-full'>
														<FaPlay className='text-lg text-green-600 ' />
													</div>
													<p className='text-lg text-green-600'>Boshlash</p>
												</p>
											</CardFooter>
										</Card>
									</div>
									<div>
										<Card
											style={{
												backgroundImage: `url(${grid})`,
											}}
											className='border-b-4 bg-bgCardTwo dark:bg-slate-700'
										>
											<CardHeader>
												<CardTitle>
													<h1 className='text-2xl font-bold '>Musobaqa</h1>
												</CardTitle>
												<CardDescription className=''>
													{' '}
													Siz bugun <br /> 1 ta o'yinchini mag'lub etdingiz
												</CardDescription>
											</CardHeader>

											<CardFooter>
												<Link to={'/challenges/battle'}>
													<p className='flex items-center gap-2 hover:cursor-pointer '>
														<div className='flex items-center space-x-2 bg-blue-100 p-4 rounded-full'>
															<FaPlay className='text-lg text-blue-600 ' />
														</div>
														<p className='text-lg text-blue-600'>Tanlash</p>
													</p>
												</Link>
											</CardFooter>
										</Card>
									</div>
								</div>
								<div className='relative rounded-lg border w-full overflow-hidden pointer-events-none mt-6'>
									<div className='absolute inset-0 flex items-center justify-center'>
										<Badge variant='default' className='text-2xl font-bold '>
											Tez kunda
										</Badge>
									</div>
									<div className='blur-sm'>
										<ChartChallenges />
									</div>
								</div>
							</div>
							<div>
								<div className='rounded-lg border flex justify-center'>
									<CalendarDemo />
								</div>
								<div>
									<LeaderBoard />
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	)
}
