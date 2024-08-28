import { useAuthStore } from '@/hook'
import { useMask } from '@react-input/mask'
export default function RegisterForm() {
	const inputRef = useMask({
		mask: '+998 (__) ___-__-__',
		replacement: { _: /\d/ },
	})

	const { setIsLoggedIn } = useAuthStore()
	return (
		<>
			<form className='space-y-2 md:space-y-2' action='#'>
				<div>
					<label
						htmlFor='lastname'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Ism
					</label>
					<input
						type='text'
						name='lastname'
						placeholder='Ismingiz'
						className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='fristname'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Familiya
					</label>
					<input
						type='text'
						name='fristname'
						placeholder='Familiyangiz'
						className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Telefon raqam
					</label>
					<input
						ref={inputRef}
						className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='+998 (__) ___-__-__'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Parol
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Parol tasdiqlash
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<button
					type='submit'
					className='w-full text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-primary-800'
				>
					Ro'yxatdan o'tish
				</button>
				<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
					Sizda akkaunt mavjudmi?{' '}
					<a
						href='#'
						onClick={() => setIsLoggedIn(0)}
						className='font-medium text-primary-600 hover:underline dark:text-primary-500'
					>
						Kirish
					</a>
				</p>
			</form>
		</>
	)
}
