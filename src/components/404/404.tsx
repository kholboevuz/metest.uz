import { Link } from 'react-router-dom'

export default function Page404() {
	return (
		<div>
			<section className='bg-white dark:bg-gray-900'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
					<div className='mx-auto max-w-screen-sm text-center'>
						<h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
							404
						</h1>
						<p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
							<span className='text-red-600 font-bold'>Oops!</span> Page Not
							Found
						</p>
						<p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
							The page you’re looking for doesn’t exist.
						</p>
						<Link
							to='/'
							className='inline-flex text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900 my-4'
						>
							Go to Homepage
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
