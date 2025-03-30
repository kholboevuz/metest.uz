import grid from '@/assets/grids/grid.png';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from '@/components/ui/card';
import ModalSubs from './ModalSubs';
import { axiosClient } from '@/http/axios';
import { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface DataType {
	_id: string;
	name: string;
	balance: number;
	attempts: number;
}

export default function Subscriber() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<DataType[]>([]);

	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			try {
				const res = await axiosClient.get('/admin/metest/subscribe');
				if (res.data.status) {
					setData(res.data.data);
				}
			} catch (error) {
				setLoading(false);
				console.error('Failed to fetch users', error);
			} finally {
				setLoading(false);
			}
		};
		fetchUsers();
	}, []);

	return (
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 mb-12 sm:mb-16 min-h-[calc(60vh-60px)]">
			<div className="mb-4 sm:mb-5">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Obunalar</h1>
			</div>
			{loading ? (
				<div className="flex justify-center items-center h-64 sm:h-80">
					<FaSpinner className="animate-spin text-4xl sm:text-5xl text-slate-500" />
				</div>
			) : (
				<>
					{data.length === 0 ? (
						<div className="flex justify-center items-center h-64 sm:h-80">
							<p className="text-sm sm:text-base text-gray-500">Hozircha obunalar mavjud emas</p>
						</div>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
							{data.map((item) => (
								<Card
									key={item._id}
									style={{ backgroundImage: `url(${grid})` }}
									className="bg-bgCard dark:bg-slate-800"
								>
									<div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-0">
										<CardTitle className="w-full sm:w-auto pt-4 sm:pt-5">
											<div className="pl-0 sm:pl-5">
												<p className="text-xl sm:text-2xl font-bold">{item.name}</p>
												<CardDescription className="text-sm sm:text-base">
													To'plam {item.attempts}
												</CardDescription>
											</div>
										</CardTitle>
									</div>
									<CardContent className="mt-2 sm:mt-0">
										<p className="text-sm sm:text-lg">TO'PLAM NARXI: {item.balance} so'm</p>
									</CardContent>
									<CardFooter>
										<ModalSubs message={`${item.name} to'plamni narxi: ${item.balance} so'm`} id={item._id} />
									</CardFooter>
								</Card>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
}