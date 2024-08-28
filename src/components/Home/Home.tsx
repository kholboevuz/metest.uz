import hero from '@/assets/gifs/hero-2.webm'
import grid from '@/assets/grids/grid.png'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { CiMicrophoneOn } from 'react-icons/ci'
import { FaInfoCircle } from 'react-icons/fa'
import { MdQuiz } from 'react-icons/md'
import { SlEarphones } from 'react-icons/sl'
import { TiPencil } from 'react-icons/ti'
import Faq from '../Faq/Faq'
import { Badge } from '../ui/badge'
export default function Home() {
	return (
		<>
			<div className='mt-10 mb-16'>
				<div
					className='flex items-center justify-center'
					style={{ backgroundImage: `url(${grid})` }}
				>
					<div className='max-w-2xl px-4 sm:px-6 lg:px-8'>
						<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
							Chet tilini bilish{' '}
							<span className='text-yellow-600 dark:text-yellow-500'>
								darajasi imtihonlariga
							</span>{' '}
							tayyorgarlik
						</h1>
						<p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
							Metest.uz bilan chet tilini bilish darajasi imtihonlariga
							tayyorgarlikni yangi bosqichga olib chiqing va orzu qilgan
							sertifikatingizga ega bo‘ling!
						</p>
					</div>
					<div>
						<video className='w-50 rounded-lg' autoPlay loop muted>
							<source src={hero} type='video/webm' />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			</div>

			<div className='max-w-6xl m-auto pt-10'>
				<div>
					<Badge className='p-2 text-sm'>O'ZINGIZGA MOS JOYDA</Badge>
				</div>
				<div>
					<h1 className='text-4xl font-bold mt-5 flex gap-3 items-center'>
						O'zingizga qulay vaqtda{' '}
						<MdQuiz className='text-yellow-600 dark:text-yellow-500' />{' '}
						tayyorlaning
					</h1>
					<p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-3'>
						Bu sinov imtihonlari sizning bilimingizni mustahkamlash va yangi
						narsalarni o'rganishingizga yordam beradi. Har kuni ma'lum bir
						vaqtni ajratib, sinov imtihonlarini ishlashni odat qiling.
					</p>
				</div>
				<div className='flex gap-5 mt-10'>
					<div>
						<Card style={{ backgroundImage: `url(${grid})` }}>
							<CardHeader>
								<CardTitle>GAPIRISH BO‘LIMI</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='flex items-center'>
									<p>
										Og‘zaki nutq bo‘limining maqsadi nomzodning fikrini chet
										tilida og‘zaki tarzda to‘g‘ri va ravon ifodalay olish
										qobiliyatini tekshirishdir. Ushbu bo‘lim uchun ajratilgan
										vaqt 15 daqiqani tashkil etadi.
									</p>
									<p>
										<CiMicrophoneOn className='text-yellow-600  dark:text-yellow-500 text-8xl font-bold opacity-50' />
									</p>
								</div>
							</CardContent>
							<CardFooter>
								<p>Metest.uz</p>
							</CardFooter>
						</Card>
					</div>
					<div>
						<Card style={{ backgroundImage: `url(${grid})` }}>
							<CardHeader>
								<CardTitle>YOZISH BO‘LIMI</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='flex items-center'>
									<p>
										Yozma nutq bo‘limining maqsadi nomzodning fikrini chet
										tilida yozma ravishda to‘g‘ri va ravon ifodalay olish
										qobiliyatini tekshirishdir. Ushbu bo‘lim ikkita topshiriqdan
										iborat bo‘lib, ajratilgan vaqt javob varaqasini to‘ldirish
										bilan birga 60 daqiqani tashkil etadi.
									</p>
									<p>
										<TiPencil className='text-yellow-600  dark:text-yellow-500 text-8xl font-bold opacity-50' />
									</p>
								</div>
							</CardContent>
							<CardFooter>
								<p>Metest.uz</p>
							</CardFooter>
						</Card>
					</div>
				</div>
				<div className='flex gap-5 mt-5'>
					<div>
						<Card style={{ backgroundImage: `url(${grid})` }}>
							<CardHeader>
								<CardTitle>O‘QISH BO‘LIMI.</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='flex items-center'>
									<p>
										Ushbu bo‘limning maqsadi ommabop, ilmiy-ommabop hamda ilmiy
										matnlarning umumiy mazmunini, ulardagi asosiy fikrlar va
										detallarni tushunishni, aniq ma’lumot olish ochiq aytilmagan
										ma’lumotlarni tushunish ko‘nikmalarini tekshirishdir. Ushbu
										bo‘lim uchun ajratilgan vaqt javob vaqarasini to‘ldirish
										bilan birga 60 daqiqani tashkil etadi.
									</p>
								</div>
							</CardContent>
							<CardFooter>
								<p>Metest.uz</p>
							</CardFooter>
						</Card>
					</div>
					<div>
						<Card style={{ backgroundImage: `url(${grid})` }}>
							<CardHeader>
								<CardTitle>TINGLAB TUSHUNISH BO‘LIMI</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='flex items-center gap-2'>
									<p>
										Ushbu bo‘limning maqsadi autentik va yarim autentik
										audiomatnlarning umumiy mazmunini, ulardagi asosiy fikrlar
										va detallarni tushunishni, aniq ma’lumot olish, ochiq
										aytilmagan ma’lumotlarni tushunish ko‘nikmalarini
										tekshirishdir. Tinglab tushunish bo‘limida har bir matn ikki
										martadan eshittiriladi va matn eshittirilishidan oldin
										matnga oid savollar bilan tanishib chiqish uchun 15-30
										soniya vaqt beriladi. Audiomatnlarning umumiy davomiyligi
										tahminan 35 daqiqani tashkil etadi. Javob varaqasini
										to‘ldirish uchun qo‘shimcha 10 daqiqa vaqt belgilanadi.
									</p>
									<p>
										<SlEarphones className='text-yellow-600  dark:text-yellow-500 text-8xl font-bold opacity-50' />
									</p>
								</div>
							</CardContent>
							<CardFooter>
								<p>Metest.uz</p>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>

			<div className='max-w-6xl m-auto pt-10'>
				<h1 className='mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white'>
					Tizimdan foydalanish bo'yicha <br /> yo'riqnoma
				</h1>
				<p className='mb-6 text-lg text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
					<iframe
						className='max-w-6xl m-auto w-full'
						width={560}
						height={400}
						src='https://www.youtube.com/embed/aLP4JPzphnY?si=HplvFt-dkfwALm4a'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen
					></iframe>
				</p>
			</div>

			<div className='max-w-6xl m-auto pt-10'>
				<div className='mb-10'>
					<h1 className='text-4xl font-bold mt-5 flex gap-3 items-center'>
						Ko'p uchraydigan savollar{' '}
						<FaInfoCircle className='text-yellow-600 dark:text-yellow-500' />{' '}
					</h1>
					<p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-3'>
						Metest.uz Shaxsiy tavsiyalarni berishda o'quvchi uchun barchasi
						mavjud
					</p>
				</div>
				<Faq />
			</div>
		</>
	)
}
