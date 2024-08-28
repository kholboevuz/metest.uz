import level2 from '@/assets/images//icons/leavel2.png'
import level3 from '@/assets/images//icons/leavel3.png'
import level1 from '@/assets/images//icons/leaver1.png'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
export default function LeaderBoard() {
	return (
		<div className='border rounded-lg p-5 mt-5 '>
			<h1 className='text-2xl font-bold mb-5'>Leader Board</h1>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell className='font-medium'>
							<img src={level1} alt='level1' />
						</TableCell>
						<TableCell>
							<Avatar>
								<AvatarFallback className='bg-yellow-600 dark:bg-yellow-500 text-white font-bold'>
									DN
								</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>Davron Nigmatov</TableCell>
						<TableCell className='text-right'>2.1Kxp</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>
							<img src={level2} alt='level1' />
						</TableCell>
						<TableCell>
							<Avatar>
								<AvatarFallback className='bg-yellow-600 dark:bg-yellow-500 text-white font-bold'>
									DN
								</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>Davron Nigmatov</TableCell>
						<TableCell className='text-right'>2.1Kxp</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className='font-medium'>
							<img src={level3} alt='level1' />
						</TableCell>
						<TableCell>
							<Avatar>
								<AvatarFallback className='bg-yellow-600 dark:bg-yellow-500 text-white font-bold'>
									DN
								</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>Davron Nigmatov</TableCell>
						<TableCell className='text-right'>2.1Kxp</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}
