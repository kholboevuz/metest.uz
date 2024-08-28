import logo from '@/assets/images/logo/logo.png'
import looWhite from '@/assets/images/logo/logo_white.png'
import { Link } from 'react-router-dom'
import { useTheme } from '../provider/theme-provider'
export default function Footer() {
	const { theme } = useTheme()
	return (
		<div>
			<footer className='bg-slate-100 dark:bg-gray-900'>
				<div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
					<div className='md:flex md:justify-between'>
						<div className='mb-6 md:mb-0'>
							<Link to={'/'} className='flex items-center'>
								{theme === 'dark' ? (
									<img src={looWhite} width={200} height={200} alt='logo' />
								) : (
									<img src={logo} width={200} height={200} alt='logo' />
								)}
							</Link>
							<p className='text-2xl mt-3 font-semibold whitespace-nowrap dark:text-white'>
								Chet tilini bilish darajasi <br /> imtihonlariga tayyorgarlik
							</p>
						</div>
						<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
							<div>
								<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
									Bizning takliflar
								</h2>
								<ul className='text-gray-500 dark:text-gray-400 font-medium'>
									<li className='mb-4'>Maktablar uchun</li>
									<li> O'quv markazlar uchun</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
									Manbalar
								</h2>
								<ul className='text-gray-500 dark:text-gray-400 font-medium'>
									<li className='mb-4'>Ingliz tili</li>
									<li>Turk tili</li>
								</ul>
							</div>
							<div>
								<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
									Huquqiy
								</h2>
								<ul className='text-gray-500 dark:text-gray-400 font-medium'>
									<li className='mb-4'>
										<a href='#' className='hover:underline'>
											Maxfiylik siyosati
										</a>
									</li>
									<li>
										<a href='#' className='hover:underline'>
											Foydalanish shartlari
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
					<div className='sm:flex sm:items-center sm:justify-between'>
						<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
							© {new Date().getFullYear()} Metest.uz™ . Barcha huquqlar
							himoyalangan.
						</span>
						<div className='flex mt-4 sm:justify-center sm:mt-0'>
							<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
								Sayt ishlab chiquvchisi: Sevinchbek Kholboev
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
