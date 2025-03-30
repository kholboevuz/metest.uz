import grid from '@/assets/grids/grid.png';
import click from '@/assets/images/payment/Click-01.png';
import clickOld from '@/assets/images/payment/click.svg';
import paymeOld from '@/assets/images/payment/payme.svg';
import payme from '@/assets/images/payment/payme_01.png';


import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { SetStateAction, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import PaymentHistory from './PaymentHistory';

export default function Payment() {
	const [amount, setAmount] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { toast } = useToast();

	const handleAmountChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setAmount(e.target.value);
	};

	const handlePaymentClick = () => {
		if (!amount || parseInt(amount) < 1000) {
			setIsModalOpen(false);
			toast({
				title: "To'lovni o'tkazishda xatolik!",
				description: "1000 so'mdan kam miqdorda to'lov qabul qilinmaydi",
				variant: 'destructive',
			});
			return;
		}
		setIsModalOpen(true);
	};

	return (
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 mb-12 sm:mb-16">
			<div>
				<Card
					style={{ backgroundImage: `url(${grid})` }}
					className="bg-yellow-600 dark:bg-slate-700 border-b-4"
				>
					<CardHeader>
						<CardTitle className="text-2xl sm:text-3xl font-bold text-white">
							Hisobni to'ldirish
						</CardTitle>
						<CardDescription className="text-white text-sm sm:text-base">
							Eng kam miqdor <span className="font-bold">1000</span> so'm
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
						<div className="w-full max-w-sm">
							<Label htmlFor="money" className="text-white font-bold text-base sm:text-lg">
								To'lov miqdorini kiriting:
							</Label>
							<Input
								type="number"
								id="money"
								placeholder="To'lov miqdori"
								value={amount}
								className="mt-3 sm:mt-4 w-full h-11 sm:h-12 text-base sm:text-lg"
								onChange={handleAmountChange}
							/>
						</div>
						<div className="mt-4 md:mt-0">
							<h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
								To‘lov qilish juda qulay.
							</h1>
							<p className="text-sm sm általában: sm:text-base md:text-lg font-normal text-white">
								Keltirilgan barcha to‘lov tizimlarida to‘lovlarni qabul qilamiz.
							</p>
							<p className="mt-6 sm:mt-8 flex flex-wrap items-center justify-between gap-3 sm:gap-5">

								<img src={clickOld} alt="click" className="w-24 sm:w-32 md:w-36" />
								<img src={paymeOld} alt="payme" className="w-24 sm:w-32 md:w-36" />
							</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button onClick={handlePaymentClick} className="w-full sm:w-auto">
							To'lovni o'tkazish
						</Button>
					</CardFooter>
				</Card>

				{isModalOpen && (
					<div
						id="default-modal"
						tabIndex={-1}
						aria-hidden="true"
						className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
					>
						<div className="relative p-4 w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-full">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
								<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
									<h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
										To'lov turini tanlang
									</h3>
									<button
										type="button"
										onClick={() => setIsModalOpen(false)}
										className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
									>
										<svg
											className="w-3 h-3"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 14"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
											/>
										</svg>
										<span className="sr-only">Close modal</span>
									</button>
								</div>
								<div className="p-4 md:p-5">
									<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
										<Card className="flex justify-center items-center h-full dark:bg-slate-200">
											<CardContent className="flex justify-center items-center h-32 sm:h-40">
												<img
													src={click}
													alt="Click"
													className="max-w-full max-h-full object-contain"
												/>
											</CardContent>
										</Card>
										<Card className="flex justify-center items-center h-full dark:bg-slate-200">
											<CardContent className="flex justify-center items-center h-32 sm:h-40">
												<img
													src={payme}
													alt="Payme"
													className="max-w-full max-h-full object-contain"
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

			<div className='mt-6'>
				<PaymentHistory />
			</div>
		</div>
	);
}