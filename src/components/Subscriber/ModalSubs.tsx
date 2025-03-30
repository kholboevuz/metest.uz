import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '../ui/button'
import { axiosClient } from '@/http/axios'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { IsUser } from '@/types/type'
import { useToast } from '../ui/use-toast'
import React from 'react'
import { useRefreshUserSession } from '@/utils/refreshUserSession'

export default function ModalSubs({ message, id }: { message: string, id: string }) {
	const auth = useAuthUser() as IsUser | null
	const [isModalOpen, setIsModalOpen] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)
	const { toast } = useToast()
	const refreshUserSession = useRefreshUserSession;

	const buySubscription = async () => {
		setIsLoading(true)
		const response = await axiosClient.post("/metest/subscribe", {
			phonenumber: auth?.phonenumber,
			subsId: id
		})

		if (response.data.status) {
			await refreshUserSession({ id: auth?._id ?? '' })
			toast({
				title: "To'plam muvaffaqiyatli  sotib olindi",
			})
			setIsLoading(false)
			setIsModalOpen(false)
		} else {

			toast({
				title: response.data.message,
				variant: 'destructive',
			})
			setIsLoading(false)
			setIsModalOpen(false)
		}

	}
	return (
		<div>
			<AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<AlertDialogTrigger>
					<Button>Sotib olish</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Siz to'plamni sotib olishni tasdiqlaysizmi
						</AlertDialogTitle>
						<AlertDialogDescription className='text-yellow-600 dark:text-yellow-500 font-bold text-2xl'>
							{message}
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Bekor qilish</AlertDialogCancel>
						<AlertDialogAction onClick={buySubscription}>
							{isLoading ? (
								<div className='w-full'>
									<p className='flex items-center justify-center gap-2 '>
										<svg
											className='animate-spin h-5 w-5 text-yellow-600 dark:text-yellow-500'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											/>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											/>
										</svg>
										<span className='sr-only'>Loading...</span>
									</p>
								</div>
							) : (
								<div className='w-full'>Sotib olish</div>
							)}
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}
