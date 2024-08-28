import grid from '@/assets/grids/grid.png'
import demoImg from '@/assets/images/icons/demo.png'
import Gold from '@/assets/images/icons/gold.png'
import premium from '@/assets/images/icons/premium.png'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import ModalSubs from './ModalSubs'
export default function Subscriber() {
	return (
		<>
			<div className='max-w-6xl m-auto pt-10 mb-16'>
				<div className='mb-5'>
					<h1 className='text-4xl font-bold'>Obunalar</h1>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					<Card
						style={{ backgroundImage: `url(${grid})` }}
						className='bg-bgCard dark:bg-slate-800'
					>
						<div className='flex justify-between items-center'>
							<CardTitle>
								<div className='flex gap-5 justify-between '>
									<div className=' pl-5'>
										<p className='text-2xl font-bold'>DEMO</p>
										<CardDescription>To'plam 50</CardDescription>
									</div>
								</div>
							</CardTitle>
							<img src={demoImg} alt='demo' width={100} height={100} />
						</div>

						<CardContent>
							<p className='text-lg'>TO'PLAM NARXI: 20000 so'm</p>
						</CardContent>
						<CardFooter>
							<p>
								<ModalSubs message="'DEMO' to'plamni narxi: 20000 so'm" />
							</p>
						</CardFooter>
					</Card>
					<Card
						style={{ backgroundImage: `url(${grid})` }}
						className='bg-bgCardTwo dark:bg-slate-800'
					>
						<div className='flex justify-between items-center'>
							<CardTitle>
								<div className='flex gap-5 justify-between '>
									<div className=' pl-5'>
										<p className='text-2xl font-bold'>PREMIUM</p>
										<CardDescription>To'plam 100</CardDescription>
									</div>
								</div>
							</CardTitle>
							<img src={premium} alt='demo' width={100} height={100} />
						</div>

						<CardContent>
							<p className='text-lg'>TO'PLAM NARXI: 30000 so'm</p>
						</CardContent>
						<CardFooter>
							<p>
								<ModalSubs message="'PREMIUM' to'plamni narxi: 30000 so'm" />
							</p>
						</CardFooter>
					</Card>
					<Card
						style={{ backgroundImage: `url(${grid})` }}
						className='bg-bgCard dark:bg-slate-800'
					>
						<div className='flex justify-between items-center'>
							<CardTitle>
								<div className='flex gap-5 justify-between '>
									<div className=' pl-5'>
										<p className='text-2xl font-bold'>GOLD</p>
										<CardDescription>To'plam 100</CardDescription>
									</div>
								</div>
							</CardTitle>
							<img src={Gold} alt='demo' width={100} height={100} />
						</div>

						<CardContent>
							<p className='text-lg'>TO'PLAM NARXI: 50000 so'm</p>
						</CardContent>
						<CardFooter>
							<p>
								<ModalSubs message="'GOLD' to'plamni narxi: 50000 so'm" />
							</p>
						</CardFooter>
					</Card>
				</div>
				<div>
					<Card className='mt-10'>
						<CardHeader>
							<CardTitle> Tarix</CardTitle>
						</CardHeader>

						<CardFooter className='flex justify-center mt-5'>
							<p className='text-center'>
								<span className='font-bold'>
									Hali ko'rish uchun hech narsa yo'q
								</span>
								<br />
								Tarixni ko'rish uchun obuna bo'ling!
							</p>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	)
}
