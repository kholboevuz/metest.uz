import grid from '@/assets/grids/grid.png'
import click from '@/assets/images/payment/Click-01.png'
import clickOld from '@/assets/images/payment/click.svg'
import paymeOld from '@/assets/images/payment/payme.svg'
import payme from '@/assets/images/payment/payme_01.png'
import paynet from '@/assets/images/payment/paynet.svg'
import uzum from '@/assets/images/payment/Uzum-01.png'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { SetStateAction, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
export default function Payment() {
	const [amount, setAmount] = useState('')
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { toast } = useToast()

	const handleAmountChange = (e: {
		target: { value: SetStateAction<string> }
	}) => {
		setAmount(e.target.value)
	}

	const handlePaymentClick = () => {
		if (!amount || parseInt(amount) < 1000) {
			setIsModalOpen(false)
			toast({
				title: "To'lovni o'tkazishda xatolik!",
				description: "1000 so'mdan kam miqdorda to'lov qabul qilinmaydi",
				variant: 'destructive',
			})
			return
		}
		setIsModalOpen(true)
	}

	return (
		<div className='max-w-6xl m-auto pt-10 mb-16 '>
			<div>
				<Card
					style={{ backgroundImage: `url(${grid})` }}
					className='bg-yellow-600 dark:bg-slate-700 border-b-4 h-full'
				>
					<CardHeader>
						<CardTitle className='text-3xl font-bold text-white'>
							Hisobni to'ldirish
						</CardTitle>
						<CardDescription className='text-white'>
							Eng kam miqdor <span className='font-bold'>1000</span> so'm
						</CardDescription>
					</CardHeader>
					<CardContent className='flex items-center justify-beetween'>
						<div className='grid w-full max-w-sm items-center '>
							<Label htmlFor='money' className='text-white font-bold text-lg'>
								To'lov miqdorini kiriting:
							</Label>
							<Input
								type='number'
								id='money'
								placeholder="To'lov miqdori"
								value={amount}
								className='mt-4 w-full h-12 text-lg'
								onChange={handleAmountChange}
							/>
						</div>
						<div className='ml-10'>
							<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white'>
								To‘lov qilish juda qulay.
							</h1>
							<p className='text-lg font-normal text-white'>
								Keltirilgan barcha to‘lov tizimlarida to‘lovlarni qabul qilamiz.
							</p>
							<p className='mt-10 flex items-center justify-between gap-5'>
								<img src={paynet} alt='paynet' width={150} />
								<img src={clickOld} alt='click' width={150} />
								<img src={paymeOld} alt='payme' width={150} />
							</p>
						</div>
					</CardContent>
					<CardFooter>
						<p>
							<Button onClick={handlePaymentClick}>To'lovni o'tkazish</Button>
						</p>
					</CardFooter>
				</Card>
				<div>
					{isModalOpen && (
						<div
							id='default-modal'
							tabIndex={-1}
							aria-hidden='true'
							className='  fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm'
						>
							<div className='relative p-4 w-full max-w-2xl max-h-full'>
								{/* Modal content */}
								<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
									{/* Modal header */}
									<div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
										<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
											To'lov turini tanlang
										</h3>
										<button
											type='button'
											onClick={() => setIsModalOpen(false)}
											className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
											data-modal-hide='default-modal'
										>
											<svg
												className='w-3 h-3'
												aria-hidden='true'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 14 14'
											>
												<path
													stroke='currentColor'
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
												/>
											</svg>
											<span className='sr-only'>Close modal</span>
										</button>
									</div>
									{/* Modal body */}
									<div className='p-4 md:p-5 space-y-4 '>
										<div className='grid grid-cols-3 gap-5'>
											<Card className='flex justify-center items-center h-full dark:bg-slate-200'>
												<CardContent className='flex justify-center items-center h-40'>
													<img
														src={click}
														alt='Click'
														className='max-w-full max-h-full object-contain'
													/>
												</CardContent>
											</Card>
											<Card className='flex justify-center items-center h-full dark:bg-slate-200'>
												<CardContent className='flex justify-center items-center h-40'>
													<img
														src={payme}
														alt='Payme'
														className='max-w-full max-h-full object-contain'
													/>
												</CardContent>
											</Card>
											<Card className='flex justify-center items-center h-full dark:bg-slate-200'>
												<CardContent className='flex justify-center items-center h-40'>
													<img
														src={uzum}
														alt='Uzum'
														className='max-w-full max-h-full object-contain'
													/>
												</CardContent>
											</Card>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<div>
				<Card className='mt-10'>
					<CardHeader>
						<CardTitle>To'lovlar tarixi</CardTitle>
					</CardHeader>

					<CardFooter className='flex justify-center mt-5'>
						<p className='text-center'>
							<span className='font-bold'>
								Hali ko'rish uchun hech narsa yo'q
							</span>
							<br />
							To'lov uchun barcha urunishlaringizni ko'rishingiz mumkin.
						</p>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
