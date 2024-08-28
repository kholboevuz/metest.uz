import noNotifications from '@/assets/images/icons/noNotification.png'
import logoDark from '@/assets/images/logo/logo.png'
import logoWhite from '@/assets/images/logo/logo_white.png'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'

import { useEffect, useState } from 'react'
import { CiLogout } from 'react-icons/ci'
import { IoNotifications } from 'react-icons/io5'
import { MdDarkMode, MdLightMode, MdPayments } from 'react-icons/md'
import { PiArrowCounterClockwiseFill } from 'react-icons/pi'
import { RiAccountCircleLine, RiPriceTag2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useTheme } from '../provider/theme-provider'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Badge } from '../ui/badge'

export default function Navbar() {
	const { setTheme, theme } = useTheme()

	const [isFullScreen, setIsFullScreen] = useState(false)

	useEffect(() => {
		if (isFullScreen) {
			document.documentElement.requestFullscreen()
		}
	}, [isFullScreen])
	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	const handleFullScreen = () => {
		if (document.fullscreenElement) {
			document.exitFullscreen()
			setIsFullScreen(false)
		} else {
			document.documentElement.requestFullscreen()
			setIsFullScreen(true)
		}
	}

	return (
		<div className='shadow-sm mt-5'>
			<div
				style={{ width: '90%', margin: 'auto' }}
				className='flex justify-between items-center pb-5 '
			>
				<div className='flex gap-7 items-center'>
					<Link to={'/'}>
						{theme === 'dark' ? (
							<img src={logoWhite} alt='logo-white' width={200} height={200} />
						) : (
							<img src={logoDark} alt='logo-dark' width={200} height={200} />
						)}
					</Link>

					<ul
						style={{
							fontFamily: 'Ubuntu, sans-serif',
							fontWeight: 500,
							fontStyle: 'normal',
						}}
						className='flex gap-16 font-ubuntu text-xl pl-5'
					>
						{' '}
						<Link to={'/dashboard'}>
							{' '}
							<li className='hover:cursor-pointer'>Boshqaruv paneli</li>
						</Link>
						<Link to={'/challenges'}>
							<div className='relative inline-block hover:cursor-pointer'>
								<p className='inline-block'>Musoboqalar</p>
								<Badge
									variant={'destructive'}
									className='absolute top-0 right-0 transform translate-x-full -translate-y-1/2 '
								>
									<span className='font-semibold'>Test</span>
								</Badge>
							</div>
						</Link>
						<Link to={'/recommendation'}>
							{' '}
							<li className='hover:cursor-pointer'>Tavsiyalar</li>
						</Link>
					</ul>
				</div>
				<div className='flex gap-5 items-center'>
					<Badge className='flex gap-2 items-center'>
						<PiArrowCounterClockwiseFill className='text-2xl' />
						<span className='font-bold'>·</span>
						<p className='font-bold text-lg'> 3</p>
					</Badge>
					<Badge
						className='flex gap-2 items-center bg-yellow-600
					dark:bg-yellow-500 text-white'
					>
						<MdPayments className='text-lg' />
						<span className='font-bold'>·</span>
						<p className='font-bold text-lg'> 3000 so'm</p>
					</Badge>
					<DropdownMenu>
						<DropdownMenuTrigger className='hover:cursor-pointer outline-none'>
							{' '}
							<IoNotifications className='text-2xl' />
						</DropdownMenuTrigger>
						<DropdownMenuContent className='mt-6'>
							<DropdownMenuLabel>Xabarnomalar</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem className='hover:bg-none'>
								<div className='flex gap-5 justify-center items-center'>
									<img
										src={noNotifications}
										alt='notNotifications'
										width={100}
										height={100}
										className='flex justify-center'
									/>
									<div>
										<p className='text-center font-bold'>
											Hali ko'rish uchun hech narsa yo'q
										</p>
										<p className='text-center'>
											Yangi xabarnomalarni shu yerdan olasiz
										</p>
									</div>
								</div>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<div onClick={toggleTheme} className='hover:cursor-pointer'>
						{theme === 'dark' ? (
							<MdLightMode className='text-2xl' />
						) : (
							<MdDarkMode className='text-2xl' />
						)}
					</div>

					<div>
						{isFullScreen ? (
							<AiOutlineFullscreenExit
								className='text-2xl hover:cursor-pointer'
								onClick={handleFullScreen}
							/>
						) : (
							<AiOutlineFullscreen
								className='text-2xl hover:cursor-pointer'
								onClick={handleFullScreen}
							/>
						)}
					</div>

					{/* <AuthModal /> */}

					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar>
								<AvatarFallback className='bg-yellow-600 dark:bg-yellow-500 text-white outline-none'>
									SX
								</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='mr-5'>
							<DropdownMenuLabel className='text-lg p-2 '>
								Sevinchbek Xolboyev
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<Link to={'/dashboard'}>
								<DropdownMenuItem className='flex gap-2 items-center text-lg hover:cursor-pointer '>
									{' '}
									<RiAccountCircleLine className='text-lg' /> Profil
								</DropdownMenuItem>
							</Link>
							<DropdownMenuSeparator />
							<Link to={'/dashboard/payment'}>
								<DropdownMenuItem className='flex gap-2 items-center text-lg hover:cursor-pointer '>
									{' '}
									<MdPayments className='text-lg' /> To'lov
								</DropdownMenuItem>
							</Link>
							<DropdownMenuSeparator />
							<Link to={'/dashboard/subscriber'}>
								<DropdownMenuItem className='flex gap-2 items-center text-lg hover:cursor-pointer '>
									{' '}
									<RiPriceTag2Line className='text-lg' /> Obunalar
								</DropdownMenuItem>
							</Link>
							<DropdownMenuSeparator className='border-red-600 border' />
							<DropdownMenuItem className='flex gap-2 items-center text-red-700 text-lg hover:cursor-pointer '>
								{' '}
								<CiLogout className='text-lg' /> Chiqish
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
			<hr />
		</div>
	)
}
