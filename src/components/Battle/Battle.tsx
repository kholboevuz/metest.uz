import grid from '@/assets/grids/grid.png'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { CiLink, CiSearch } from 'react-icons/ci'
import { FaPlay } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi2'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import MenuNavbar from '../Partials/MenuNavbar'
import { Badge } from '../ui/badge'

export default function Battle() {
	return (
		<div>
			<div className='max-w-6xl m-auto pt-10 mb-16'>
				<Link to={'/challenges'}>
					<p className='flex items-center gap-2 mb-10'>
						<IoArrowBackOutline className='text-lg' />
						Ortga qaytish
					</p>
				</Link>
				<h1 className='text-4xl font-bold'>O'z musobaqangizni tanlang</h1>
				<MenuNavbar />

				{/* Battle */}

				<div>
					<div className='grid grid-cols-3 gap-5 mb-5 mt-5'>
						<div>
							<Card
								style={{ backgroundImage: `url(${grid})` }}
								className='bg-bgCardTwo dark:bg-slate-700'
							>
								<CardContent className='flex justify-center items-center mt-5'>
									<div className='rounded-full border-2 p-10 border-gray-300 bg-slate-100 dark:bg-slate-700 bg-opacity-50'>
										<div className='rounded-full border-2 p-10 border-gray-300 shadow-2xl bg-slate-200 dark:bg-slate-600 bg-opacity-50 transform transition-transform duration-200 hover:scale-105'>
											<div className='text-center border-2 p-10 border-gray-300 rounded-full hover:cursor-pointer bg-white dark:bg-slate-500  transform transition-transform duration-200 hover:scale-105'>
												<p className='font-bold text-yellow-600 text-lg dark:text-white'>
													Tasodify
													<br />
													<span className='dark:text-white text-sm text-black'>
														Mos kelish
													</span>
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
						<div>
							<Card style={{ backgroundImage: `url(${grid})` }}>
								<CardHeader>
									<CardTitle>1 ga 1</CardTitle>
									<CardDescription>
										Ikki ishtirokchi o'rtasidagi yakkama-yakka musobaqa.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='mb-2'>
										<Badge className='gap-2 bg-yellow-600 dark:bg-yellow-500 dark:text-white'>
											<HiOutlineUsers className='text-lg' /> Do'stingizni taklif
											qiling
										</Badge>
									</div>
									<div className='mb-2'>
										<Badge className='gap-2 bg-yellow-600 dark:bg-yellow-500 dark:text-white '>
											{' '}
											<CiSearch className='text-lg' /> Qidiruv bo'yicha
										</Badge>
									</div>
									<div className='mb-2'>
										<Badge className='gap-2 bg-yellow-600 dark:bg-yellow-500 dark:text-white'>
											{' '}
											<CiLink className='text-lg ' /> Musobaqa havolasi bo'yicha
										</Badge>
									</div>
								</CardContent>
								<CardFooter>
									<p className='flex items-center gap-2 mt-8  hover:cursor-pointer '>
										<div className='flex items-center space-x-2 bg-gray-100 p-4 rounded-full'>
											<FaPlay className='text-lg text-gray-600 ' />
										</div>
										<p className='text-lg '>Boshlash</p>
									</p>
								</CardFooter>
							</Card>
						</div>
						<div>
							<Card style={{ backgroundImage: `url(${grid})` }}>
								<CardHeader>
									<CardTitle>Guruh</CardTitle>
									<CardDescription>
										Bir vaqtning o'zida bir nechta ishtirokchilar bilan musobaqa
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='mb-2'>
										<Badge className='gap-2 bg-yellow-600 dark:bg-yellow-500 dark:text-white'>
											<HiOutlineUsers className='text-lg' /> Do'stingizni taklif
											qiling
										</Badge>
									</div>
									<div className='mb-2'>
										<Badge className='gap-2 bg-yellow-600 dark:bg-yellow-500 dark:text-white '>
											{' '}
											<CiSearch className='text-lg' /> Qidiruv bo'yicha
										</Badge>
									</div>
									<div className='mb-2'>
										<Badge className='gap-2 bg-yellow-600 dark:bg-yellow-500 dark:text-white'>
											{' '}
											<CiLink className='text-lg ' /> Musobaqa havolasi bo'yicha
										</Badge>
									</div>
								</CardContent>
								<CardFooter>
									<p className='flex items-center gap-2 mt-8  hover:cursor-pointer '>
										<div className='flex items-center space-x-2 bg-gray-100 p-4 rounded-full'>
											<FaPlay className='text-lg text-gray-600 ' />
										</div>
										<p className='text-lg '>Boshlash</p>
									</p>
								</CardFooter>
							</Card>
						</div>
					</div>

					<div>
						<Card className='mt-10'>
							<CardHeader>
								<CardTitle>Tarix</CardTitle>
							</CardHeader>

							<CardFooter className='flex justify-center mt-5'>
								<p className='text-center'>
									<span className='font-bold'>
										Hali ko'rish uchun hech narsa yo'q
									</span>
									<br />
									Tarixni ko'rish uchun musobaqalarda qatnashing
								</p>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
