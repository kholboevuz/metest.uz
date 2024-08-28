import { AiOutlineTrophy } from 'react-icons/ai'
import { IoMdTime } from 'react-icons/io'
import { MdOutlineSignalCellularAlt } from 'react-icons/md'
import { RiCoinsFill } from 'react-icons/ri'
import { Badge } from '../ui/badge'

export default function MenuNavbar() {
	return (
		<div>
			<div className=' flex justify-between items-center'>
				<div className='flex items-center gap-2 mt-2'>
					<p className='flex gap-2 items-center'>
						<MdOutlineSignalCellularAlt className='text-lg font-bold opacity-50' />
						Sizning unvoningiz: <span className='font-bold'>1400</span>
					</p>
					<span className='font-bold'>·</span>
					<p className='flex gap-2 items-center'>
						<IoMdTime className='text-lg font-bold opacity-50' />
						Kunlik o'rtacha: <span className='font-bold'>1h 15m</span>
					</p>
				</div>

				<div className='flex gap-5 mt-5 mb-3'>
					<Badge className='p-1 pl-2 pr-2 hover:cursor-pointer bg-yellow-600 dark:bg-yellow-500 dark:text-white gap-2'>
						<AiOutlineTrophy className='text-xl' />{' '}
						<span className='text-sm'> 0 xp</span>
					</Badge>

					<Badge className='p-1 pl-2 pr-2 hover:cursor-pointer bg-yellow-600 dark:bg-yellow-500 dark:text-white gap-2'>
						<RiCoinsFill className='text-xl' />{' '}
						<span className='text-sm'> 0 Coinlar</span>
					</Badge>
				</div>
			</div>
		</div>
	)
}
