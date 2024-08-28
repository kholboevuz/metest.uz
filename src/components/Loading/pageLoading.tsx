import { ImSpinner6 } from 'react-icons/im'

export default function PageLoading() {
	return (
		<div className='flex-grow'>
			<div className='flex justify-center items-center h-screen'>
				<ImSpinner6 className='animate-spin text-5xl text-yellow-600 dark:text-yellow-500' />
			</div>
		</div>
	)
}
