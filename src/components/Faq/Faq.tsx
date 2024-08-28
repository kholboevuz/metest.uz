import React, { useState } from 'react'

const Faq: React.FC = () => {
	const [openItem, setOpenItem] = useState<number | null>(null)

	const handleToggle = (item: number) => {
		setOpenItem(openItem === item ? null : item)
	}

	return (
		<div className='mb-10'>
			<div id='accordion-collapse' data-accordion='collapse'>
				<h2 id='accordion-collapse-heading-1'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-1'
						aria-expanded={openItem === 1}
						aria-controls='accordion-collapse-body-1'
						onClick={() => handleToggle(1)}
					>
						<span className='text-2xl'>
							Metest.uz qanday xizmatlarni taklif qiladi?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 1 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-1'
					className={`${openItem === 1 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-1'
				>
					<div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
							Metest.uz platformasi chet tilini bilish darajasi imtihonlariga
							tayyorgarlik ko‘rishda yordam beradi. Bu platforma orqali siz
							testlarni yechishingiz, bilim darajangizni baholashingiz va o‘z
							mahoratingizni oshirishingiz mumkin.
						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-2'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-2'
						aria-expanded={openItem === 2}
						aria-controls='accordion-collapse-body-2'
						onClick={() => handleToggle(2)}
					>
						<span className='text-2xl'>
							Metest.uz orqali qaysi tillarni o‘rganish mumkin?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 2 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-2'
					className={`${openItem === 2 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-2'
				>
					<div className='p-5 border border-b-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
							Metest.uz platformasi hozirda ingliz tili, rus tili, va boshqa
							xalqaro tillarni o‘rganish va ularga doir imtihonlarga
							tayyorgarlik ko‘rishni taklif etadi.
						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-3'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-3'
						aria-expanded={openItem === 3}
						aria-controls='accordion-collapse-body-3'
						onClick={() => handleToggle(3)}
					>
						<span className='text-2xl'>Platformadan foydalanish bepulmi?</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 3 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-3'
					className={`${openItem === 3 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-3'
				>
					<div className='p-5 border border-t-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
							Metest.uz platformasi turli xizmatlarni taklif qiladi, ularning
							ba'zilari bepul bo‘lishi mumkin, lekin ko‘proq xizmatlar pullik
							asosda taqdim etiladi. Batafsil ma'lumotni sayt orqali olishingiz
							mumkin.
						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-4'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-3'
						aria-expanded={openItem === 4}
						aria-controls='accordion-collapse-body-3'
						onClick={() => handleToggle(4)}
					>
						<span className='text-2xl'>
							Metest.uz orqali qanday qilib bilim darajamni aniqlashim mumkin?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 3 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-3'
					className={`${openItem === 4 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-3'
				>
					<div className='p-5 border border-t-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
							Metest.uz platformasida siz testlarni yechib, darajangizni
							aniqlash imkoniyatiga egasiz. Natijalar darhol ko‘rsatiladi va
							ular asosida sizga tegishli maslahatlar beriladi.
						</p>
					</div>
				</div>

				<h2 id='accordion-collapse-heading-5'>
					<button
						type='button'
						className='flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3'
						data-accordion-target='#accordion-collapse-body-3'
						aria-expanded={openItem === 5}
						aria-controls='accordion-collapse-body-3'
						onClick={() => handleToggle(5)}
					>
						<span className='text-2xl'>
							Platformada o‘quvchilar qanday reyting tizimi mavjud?
						</span>
						<svg
							data-accordion-icon=''
							className={`w-3 h-3 shrink-0 ${
								openItem === 5 ? 'rotate-180' : ''
							}`}
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 10 6'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5L5 1 1 5'
							/>
						</svg>
					</button>
				</h2>
				<div
					id='accordion-collapse-body-3'
					className={`${openItem === 5 ? '' : 'hidden'}`}
					aria-labelledby='accordion-collapse-heading-3'
				>
					<div className='p-5 border border-t-0 border-gray-200 dark:border-gray-700'>
						<p className='mb-2 text-gray-500 dark:text-gray-400 text-lg'>
							Metest.uz reyting tizimi o‘quvchilarni ularning natijalari asosida
							baholaydi. Ushbu tizim orqali siz o‘z o‘rningizni ko‘rishingiz va
							boshqalar bilan raqobatlashishingiz mumkin.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq
