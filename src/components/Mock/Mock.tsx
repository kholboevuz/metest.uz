import { Player } from '@lottiefiles/react-lottie-player'
import { useRef, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { FaHeadset } from 'react-icons/fa6'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
export default function Mock() {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isRecording, setIsRecording] = useState<boolean>(false)
	const mediaRecorderRef = useRef<MediaRecorder | null>(null)
	const [audioChunks, setAudioChunks] = useState<Blob[]>([])
	const [isExam, setIsExam] = useState<boolean>(false)
	const [isStartExam, setIsStartExam] = useState<boolean>(false)
	const handleStartRecording = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

		const mediaRecorder = new MediaRecorder(stream)
		mediaRecorderRef.current = mediaRecorder
		mediaRecorder.ondataavailable = (event: BlobEvent) => {
			if (event.data.size > 0) {
				setAudioChunks(prev => [...prev, event.data])
			}
		}

		mediaRecorder.start()
		setIsRecording(true)
	}

	const handleStopRecording = () => {
		if (mediaRecorderRef.current) {
			mediaRecorderRef.current.stop()
			setIsRecording(false)
			setIsExam(true)
		}
	}

	return (
		<>
			<div className='max-w-6xl m-auto pt-10 mb-16'>
				<Link to={'/dashboard'} className='fixed'>
					<p className='flex items-center gap-2 mb-10'>
						<IoArrowBackOutline className='text-lg' />
						Ortga qaytish
					</p>
				</Link>
				<div className='flex gap-10 justify-center items-center text-lg '>
					<p>
						<span className='font-bold'>Gapirish</span> imtihoni davomida:
					</p>
					<div>
						<ul className='list-disc list-inside'>
							<li>brauzerdan chiqish;</li>
							<li>boshqa dasturlarni ochish;</li>
							<li>texnik jihozlarga tegish;</li>
							<li>aloqa vositalaridan foydalanish;</li>
							<li>lug'at yoki shporgalka ishlatish;</li>
							<li>yot-atrofga o'girilish;</li>
							<li>boshqa nomzodlar bilan gaplashish;</li>
							<li>yordam so'rash va yordam berish</li>
						</ul>
					</div>
					<p>taqiqlanadi</p>
				</div>
				<div className='mt-5'>
					<p className='text-lg pt-3 text-center '>
						Ushbu qoidalarini buzgan talabgorlar imtihondan chetlashtirildi va
						test natijalari bekor qilinadi.
					</p>
					<p className='text-lg pt-3 text-center '>
						Imtihon boshlashdan avval, quloqchin va mikrofonlar
						ishlayotganligiga ishonch hosil qiling.Gapirish bo'limi 3 ta
						topshiriqdan iborat
					</p>

					<p className='text-lg pt-3 text-center '>
						Ushbu bo'limda oldingi savolga yoki oldingi qismga qaytishning
						imkoni yo'q. Mikrofon avtomatik ravishda yoqiladi va o'chiriladi.
					</p>
					<p className='text-lg pt-3 text-center '>
						Savol uchun ajratilgan vaqt tugagach, keyingi savol avtomatik tarzda
						ochiladi.
					</p>
				</div>
				<div className='mt-10  justify-center'>
					<div
						className='p-4 mb-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 text-center dark:text-red-400 '
						role='alert'
					>
						<span className='font-medium'>
							Imtihonni boshlashdan avval mikrofon sozligini tekshirib oling!
						</span>
					</div>
				</div>
				<div>
					<div className='mb-5'>
						<Button
							className='bg-blue-600 hover:bg-blue-700 text-lg w-full '
							onClick={() => setIsModalOpen(true)}
						>
							<p className='p-5 flex items-center justify-center gap-2 dark:text-white '>
								{' '}
								<FaHeadset /> Mikrafon va ovozni tekshirish
							</p>
						</Button>
					</div>
					{isExam && (
						<div className='justify-center'>
							<div
								className={`p-4 mb-4 text-lg text-center ${
									isStartExam
										? 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-300'
										: 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 '
								} rounded-lg `}
								role='alert'
							>
								<div className='flex justify-center items-center gap-2'>
									<input
										type='checkbox'
										onChange={() => setIsStartExam(!isStartExam)}
									/>
									<span className='font-medium '>
										Mikrofonning soz holatdaligini tasdiqlayman
									</span>
								</div>
							</div>
						</div>
					)}

					<div className='mt-5'>
						<Link to={'/dashboard/mock/exam'}>
							<Button
								className='bg-button hover:bg-buttonOff text-lg w-full '
								disabled={!isStartExam}
							>
								<p className='p-5 flex items-center justify-center gap-2 dark:text-white '>
									{' '}
									<FaHome /> Imtihonni boshlash
								</p>
							</Button>
						</Link>
					</div>
				</div>

				{/* Modal */}
				<div>
					{isModalOpen && (
						<div
							id='default-modal'
							tabIndex={-1}
							aria-hidden='true'
							className='  fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm'
						>
							<div className='relative p-4 w-full max-w-2xl max-h-full'>
								{/* Modal content */}
								<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
									{/* Modal header */}
									<div className='flex items-center bg-blue-600 text-white justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
										<div>
											<h3 className='text-xl font-semibold text-white'>
												Quyidagi kiritilgan matinni o'qing
											</h3>
											<p>Ovoz yozish uchun "Ovoz yozish" tugmasini bosing</p>
										</div>
									</div>
									{/* Modal body */}
									<div className='p-4 md:p-5 space-y-4 '>
										<p className='text-lg text-center text-dark'>
											O’zbek tilining paydo bo’lishi va rivojlanishi tarixi
											uning ona tilida so’zlashuvchilarning tarixi bilan
											chambarchas bog’liqdir. O‘zbek xalqi kabi bir millatning
											paydo bo‘lishi turkiy va eron tillarini birlashtiruvchi
											bir qator etnik guruhlarning birlashishi bilan bog‘liq
											edi.
										</p>

										<div className='flex justify-center gap-5'>
											<Button
												className='bg-green-500 hover:bg-green-600 w-full text-white disabled:bg-gray-400 disabled:cursor-not-allowed'
												onClick={handleStartRecording}
												disabled={isRecording}
											>
												Ovoz yozish
											</Button>
											<Button
												className='bg-red-500 hover:bg-red-600 w-full text-white disabled:bg-gray-400 disabled:cursor-not-allowed'
												onClick={handleStopRecording}
												disabled={!isRecording}
											>
												To'xtatish
											</Button>
										</div>
										{isRecording && (
											<div className='flex justify-center '>
												<div className='bg-red-200 p-3 rounded-lg inline-block  '>
													<Player
														src='https://lottie.host/dfd993ab-cd85-44de-8abd-b900bd9f2c40/Y7Pf4lLklJ.json'
														background='transparent'
														speed={2}
														style={{
															width: '20px',
															height: '20px',
															margin: 'auto',
														}}
														loop
														autoplay
													/>
												</div>
											</div>
										)}

										{audioChunks.length > 0 && (
											<div className='flex justify-center '>
												<audio
													src={URL.createObjectURL(new Blob(audioChunks))}
													controls
												/>
											</div>
										)}

										{/* Display a message when recording is complete */}
										{!isRecording && audioChunks.length > 0 && (
											<div className='mt-4 text-center'>
												<p className='text-green-600'>
													Ovoz yozildi. Imtihonni boshlashingiz mumkin.
												</p>
											</div>
										)}
									</div>
									<hr />
									<div className='p-5 flex justify-end'>
										<Button
											disabled={!isExam}
											className='bg-green-600 hover:bg-green-700'
											onClick={() => setIsModalOpen(false)}
										>
											{' '}
											Yakunlash{' '}
										</Button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	)
}
