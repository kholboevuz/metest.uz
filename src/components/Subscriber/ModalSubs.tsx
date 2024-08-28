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

export default function ModalSubs({ message }: { message: string }) {
	return (
		<div>
			<AlertDialog>
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
						<AlertDialogAction>Sotib olish</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	)
}
