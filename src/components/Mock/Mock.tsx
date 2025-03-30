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
	const [micError, setMicError] = useState<string | null>(null)
	const handleStartRecording = async () => {
		try {
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
			setMicError(null)
		} catch {
			setIsModalOpen(false)
			setMicError(`Mikrofon yo'q yoki ulanmagan. Iltimos, mikrofonni ulang va qayta urinib ko'ring.`,)
			setIsRecording(false)
		}
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
			<div className="max-w-6xl mx-auto pt-5 md:pt-10 pb-10 md:pb-16 px-4 md:px-0">
				<Link to={'/dashboard'} className=" top-4 left-4">
					<p className="flex items-center gap-2 mb-5 md:mb-10 text-sm md:text-base">
						<IoArrowBackOutline className="text-lg" />
						Ortga qaytish
					</p>
				</Link>

				<div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center text-sm md:text-lg text-center md:text-left">
					<p>
						<span className="font-bold">Gapirish</span> imtihoni davomida:
					</p>
					<div>
						<ul className="list-disc list-inside text-left">
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

				<div className="mt-5 space-y-3 md:space-y-4 text-sm md:text-lg text-center">
					<p>
						Ushbu qoidalarini buzgan talabgorlar imtihondan chetlashtiriladi va test natijalari bekor qilinadi.
					</p>
					<p>
						Imtihon boshlashdan avval, quloqchin va mikrofonlar ishlayotganligiga ishonch hosil qiling. Gapirish bo'limi 3 ta topshiriqdan iborat.
					</p>
					<p>
						Ushbu bo'limda oldingi savolga yoki oldingi qismga qaytishning imkoni yo'q. Mikrofon avtomatik ravishda yoqiladi va o'chiriladi.
					</p>
					<p>
						Savol uchun ajratilgan vaqt tugagach, keyingi savol avtomatik tarzda ochiladi.
					</p>
				</div>

				<div className="mt-5 md:mt-10">
					<div
						className="p-3 md:p-4 text-sm md:text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 text-center dark:text-red-400"
						role="alert"
					>
						<span className="font-medium">
							Imtihonni boshlashdan avval mikrofon sozligini tekshirib oling!
						</span>
					</div>
				</div>

				{/* Microphone Error Message */}
				{micError && (
					<div className="mt-5">
						<div
							className="p-3 md:p-4 text-sm md:text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 text-center dark:text-red-400"
							role="alert"
						>
							<span className="font-medium">{micError}</span>
						</div>
					</div>
				)}

				<div className="mt-5 space-y-4">
					<Button
						className="bg-blue-600 hover:bg-blue-700 text-sm md:text-lg w-full py-3 md:py-5"
						onClick={() => setIsModalOpen(true)}
						disabled={!!micError} // Disable if there's a mic error
					>
						<p className="flex items-center justify-center gap-2 text-white">
							<FaHeadset /> Mikrafon va ovozni tekshirish
						</p>
					</Button>

					{isExam && !micError && (
						<div
							className={`p-3 md:p-4 text-sm md:text-lg text-center ${isStartExam
								? 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-300'
								: 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300'
								} rounded-lg `}
							role="alert"
						>
							<div className="flex justify-center items-center gap-2 ">
								<input
									type="checkbox"
									onChange={() => setIsStartExam(!isStartExam)}
								/>
								<span className="font-medium">
									Mikrofonning soz holatdaligini tasdiqlayman
								</span>
							</div>
						</div>
					)}

					{isStartExam && !micError ? (
						<Link to={'/dashboard/mock/exam'}>
							<Button
								className="bg-button hover:bg-buttonOff text-sm md:text-lg w-full py-3 md:py-5 mt-2"
								disabled={!isStartExam}
							>
								<p className="flex items-center justify-center gap-2 text-white">
									<FaHome /> Imtihonni boshlash
								</p>
							</Button>
						</Link>
					) : (
						<Button
							className="bg-button hover:bg-buttonOff text-sm md:text-lg w-full py-3 md:py-5 "
							disabled={!isStartExam || !!micError} // Disable if no mic
						>
							<p className="flex items-center justify-center gap-2 text-white">
								<FaHome /> Imtihonni boshlash
							</p>
						</Button>
					)}
				</div>

				{/* Modal */}
				{isModalOpen && (
					<div
						id="default-modal"
						tabIndex={-1}
						aria-hidden="true"
						className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"
					>
						<div className="relative p-4 w-full max-w-md md:max-w-2xl max-h-full">
							<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
								<div className="flex items-center bg-blue-600 text-white justify-between p-3 md:p-5 border-b rounded-t dark:border-gray-600">
									<div>
										<h3 className="text-lg md:text-xl font-semibold">
											Quyidagi kiritilgan matinni o'qing
										</h3>
										<p className="text-sm md:text-base">
											Ovoz yozish uchun "Ovoz yozish" tugmasini bosing
										</p>
									</div>
								</div>

								<div className="p-4 md:p-5 space-y-4">
									<p className="text-sm md:text-lg text-center text-dark">
										O’zbek tilining paydo bo’lishi va rivojlanishi tarixi uning ona tilida so’zlashuvchilarning tarixi bilan chambarchas bog’liqdir. O‘zbek xalqi kabi bir millatning paydo bo‘lishi turkiy va eron tillarini birlashtiruvchi bir qator etnik guruhlarning birlashishi bilan bog‘liq edi.
									</p>

									<div className="flex flex-col md:flex-row justify-center gap-3 md:gap-5">
										<Button
											className="bg-green-500 hover:bg-green-600 w-full text-white disabled:bg-gray-400 disabled:cursor-not-allowed py-2 md:py-3"
											onClick={handleStartRecording}
											disabled={isRecording || !!micError}
										>
											Ovoz yozish
										</Button>
										<Button
											className="bg-red-500 hover:bg-red-600 w-full text-white disabled:bg-gray-400 disabled:cursor-not-allowed py-2 md:py-3"
											onClick={handleStopRecording}
											disabled={!isRecording}
										>
											To'xtatish
										</Button>
									</div>

									{isRecording && (
										<div className="flex justify-center">
											<div className="bg-red-200 p-3 rounded-lg inline-block">
												<Player
													src="https://lottie.host/dfd993ab-cd85-44de-8abd-b900bd9f2c40/Y7Pf4lLklJ.json"
													background="transparent"
													speed={2}
													style={{ width: '20px', height: '20px', margin: 'auto' }}
													loop
													autoplay
												/>
											</div>
										</div>
									)}

									{audioChunks.length > 0 && (
										<div className="flex justify-center">
											<audio src={URL.createObjectURL(new Blob(audioChunks))} controls />
										</div>
									)}

									{!isRecording && audioChunks.length > 0 && (
										<div className="mt-4 text-center">
											<p className="text-green-600 text-sm md:text-base">
												Ovoz yozildi. Imtihonni boshlashingiz mumkin.
											</p>
										</div>
									)}
								</div>

								<hr />

								<div className="p-5 flex justify-end">
									<Button
										disabled={!isExam}
										className="bg-green-600 hover:bg-green-700 py-2 md:py-3 px-4 md:px-6"
										onClick={() => setIsModalOpen(false)}
									>
										Yakunlash
									</Button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	)
}