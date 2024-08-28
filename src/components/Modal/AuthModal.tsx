import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog'

import { useAuthStore } from '@/hook'
import LoginForm from '../Form/Login'
import RegisterForm from '../Form/Register'
import RestPassForm from '../Form/RestPass'
import { Button } from '../ui/button'

export default function AuthModal() {
	const { isPage } = useAuthStore()

	return (
		<div>
			<Dialog>
				{/* Ensure DialogTrigger does not create a button inside another button */}
				<DialogTrigger asChild>
					<Button
						variant='outline'
						className='rounded-lg bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'
					>
						Kirish
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogDescription asChild>
							<div>
								<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto '>
									<div className='w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 '>
										<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
											<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
												{isPage === 0
													? 'Shaxsiy akkauntingizga kiring'
													: isPage === 1
													? 'Akkaunt yaratish'
													: 'Parolingizni tiklang'}
											</h1>
											{isPage === 0 ? (
												<LoginForm />
											) : isPage === 1 ? (
												<RegisterForm />
											) : (
												<RestPassForm />
											)}
										</div>
									</div>
								</div>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}
