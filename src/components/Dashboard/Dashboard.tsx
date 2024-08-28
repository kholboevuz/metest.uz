import tr from '@/assets/images/flag/tr.png'
import uk from '@/assets/images/flag/uk.png'
import badge1 from '@/assets/images/icons/badge1.CegM95sz.png'
import badge2 from '@/assets/images/icons/badge2.DkeRjbXw.png'
import badge3 from '@/assets/images/icons/badge3.C2_Hy4Ld.png'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { BsBarChart } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { ChartDashboard } from '../Chart/ChartDashboard'
import { ChartLangue } from '../Chart/ChartLangue'
import PageLoading from '../Loading/pageLoading'
import MenuNavbar from '../Partials/MenuNavbar'
import { Button } from '../ui/button'
export default function Dashboard() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])

	return (
		<>
			{loading ? (
				<PageLoading />
			) : (
				<div className='max-w-6xl m-auto pt-10 mb-16'>
					<h1 className='text-4xl font-bold'>Salom Sevinchbek</h1>
					<MenuNavbar />

					<div>
						<div className='grid grid-cols-2 gap-5 mb-5 mt-5'>
							<div>
								<Card className='bg-gradient-to-l from-red-700 to-transparent dark:bg-slate-700 bg-blue-700 bg-opacity-90'>
									<CardHeader>
										<CardTitle className='mb-7'>
											<img src={uk} alt='uk' width={100} height={100} />
										</CardTitle>
										<CardDescription className='dark:text-white'>
											<p className='text-2xl font-bold text-white'>
												Ingliz tili namunaviy test topshiriqlari
											</p>
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className='text-lg text-white'>
											Bu sizga eng yaxshi ko'nikmalada shug'ullanishingiz uchun
											yordam beradi.
										</p>
									</CardContent>
									<CardFooter>
										<Link to={`/dashboard/mock/${uuidv4()}`}>
											<Button>Boshlash</Button>
										</Link>
									</CardFooter>
								</Card>
							</div>

							<div>
								<Card className='bg-gradient-to-l from-red-700 to-transparent dark:bg-slate-700 bg-white bg-opacity-90'>
									<CardHeader>
										<CardTitle className='mb-7'>
											<img src={tr} alt='tr' width={100} height={100} />
										</CardTitle>
										<CardDescription className='dark:text-white'>
											<p className='text-2xl font-bold text-slate-700 dark:text-white'>
												Turk tili namunaviy test topshiriqlari
											</p>
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className='text-lg text-slate-700 dark:text-white'>
											Bu sizga eng yaxshi ko'nikmalada shug'ullanishingiz uchun
											yordam beradi.
										</p>
									</CardContent>
									<CardFooter>
										<Link to={`/dashboard/mock/${uuidv4()}`}>
											<Button>Boshlash</Button>
										</Link>
									</CardFooter>
								</Card>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-5 mb-5 mt-5'>
							<div>
								<Card className='bg-gradient-to-l from-yellow-500 to-transparent dark:bg-slate-700 bg-slate-200 bg-opacity-90'>
									<CardHeader>
										<CardTitle className='mb-7'>
											<BsBarChart className='text-5xl text-dark dark:text-yellow-500' />
										</CardTitle>
										<CardDescription className='dark:text-white'>
											<p>Real-vaqt bilim tahlilchisi</p>
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p>
											Bu bizga eng yaxshi ko'nikmalarni siz shug'ullanishingiz
											uchun tavsiya etishga yordam beradi.
										</p>
									</CardContent>
									<CardFooter>
										<Button>Diagnostika</Button>
									</CardFooter>
								</Card>
							</div>

							<Card>
								<CardHeader>
									<CardTitle>
										<div className='flex gap-5 items-center justify-between'>
											<img src={badge1} alt='badge1' />
											<img src={badge2} alt='badge2' />
											<img src={badge3} alt='badge3' />
										</div>
									</CardTitle>
									<CardDescription className='text-lg font-bold dark:text-white'>
										mening bedjim: 3
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p>
										Bu bizga eng yaxshi ko'nikmalarni siz shug'ullanishingiz
										uchun tavsiya etishga yordam beradi.
									</p>
								</CardContent>
								<CardFooter>
									<Button>Batafsil</Button>
								</CardFooter>
							</Card>
						</div>

						<div className='flex justify-between gap-5'>
							<ChartDashboard />
							<ChartLangue />
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
									Tarixni ko'rish uchun topshiriqlarda qatnashing
								</p>
							</CardFooter>
						</Card>
					</div>
				</div>
			)}
		</>
	)
}
