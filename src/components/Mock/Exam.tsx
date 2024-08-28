import music from '@/assets/musics/nova.mp3'
import sound from '@/assets/musics/sound.m4a'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Player } from '@lottiefiles/react-lottie-player'
import { useEffect, useRef, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { Visualizer } from 'react-sound-visualizer'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
export default function Exam() {
	const [audio, setAudio] = useState<MediaStream | null>(null)
	const [isStartExam, setIsStartExam] = useState<boolean>(false)

	// const [exam, setExam] = useState<ExamData[]>([])
	const audioRef = useRef<HTMLAudioElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const audioContextRef = useRef<AudioContext | null>(null)
	const analyserRef = useRef<AnalyserNode | null>(null)

	const startRecordingRef = useRef<(() => void) | undefined>(undefined)

	const startRecorder = () => {
		const startSound = new Audio(sound)
		startSound
			.play()
			.then(() => {
				startRecordingRef.current!()
			})
			.catch(error => {
				console.error('Failed to play the start sound:', error)
				startRecordingRef.current!()
			})
		if (startRecordingRef.current) {
			startRecordingRef.current()
		}
	}
	useEffect(() => {
		// setExam(examData)
		navigator.mediaDevices
			.getUserMedia({
				audio: true,
				video: false,
			})
			.then(setAudio)
	}, [])

	useEffect(() => {
		if (audioRef.current && canvasRef.current) {
			if (!audioContextRef.current) {
				audioContextRef.current = new window.AudioContext()
				analyserRef.current = audioContextRef.current.createAnalyser()

				const source = audioContextRef.current.createMediaElementSource(
					audioRef.current
				)
				source.connect(analyserRef.current)
				analyserRef.current.connect(audioContextRef.current.destination)
				analyserRef.current.fftSize = 256
			}

			const analyser = analyserRef.current
			const bufferLength = analyser!.frequencyBinCount
			const dataArray = new Uint8Array(bufferLength)

			const canvas = canvasRef.current
			const canvasCtx = canvas.getContext('2d')

			const renderVisualizer = () => {
				requestAnimationFrame(renderVisualizer)

				analyser!.getByteFrequencyData(dataArray)

				if (canvasCtx) {
					canvasCtx.clearRect(0, 0, canvas.width, canvas.height)

					const barWidth = (canvas.width / bufferLength) * 2.5
					let barHeight
					let x = 0

					for (let i = 0; i < bufferLength; i++) {
						barHeight = dataArray[i] / 2

						const red = barHeight + 25 * (i / bufferLength)
						const green = 250 * (i / bufferLength)
						const blue = 50

						canvasCtx.fillStyle = `rgb(${red},${green},${blue})`
						canvasCtx.fillRect(
							x,
							canvas.height - barHeight,
							barWidth,
							barHeight
						)

						x += barWidth + 1
					}
				}
			}

			renderVisualizer()
		}
	}, [])

	const playAudio = () => {
		audioRef.current?.play()
	}

	const startExam = () => {
		playAudio()
	}

	const endAudio = () => {
		setIsStartExam(true)
	}

	audioRef.current?.addEventListener('ended', endAudio)

	const [fontSize, setFontSize] = useState(18)

	const increaseFontSize = () => {
		setFontSize(prevSize => prevSize + 2)
	}

	const decreaseFontSize = () => {
		setFontSize(prevSize => Math.max(prevSize - 2, 10))
	}

	return (
		<div className='max-w-6xl m-auto pt-10 mb-16 '>
			<div className='flex justify-center mb-10 lg:mb-32'>
				<ol className='flex items-center w-full justify-center max-w-md'>
					<li className="flex w-full items-center text-green-600 dark:text-green-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-green-100 after:border-4 after:inline-block dark:after:border-green-800">
						<span className='flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 dark:bg-green-800 shrink-0 font-bold text-lg'>
							1.1
						</span>
					</li>
					<li className="flex w-full items-center text-green-600 dark:text-green-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-green-100 after:border-4 after:inline-block dark:after:border-green-800">
						<span className='flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 dark:bg-green-800 shrink-0 font-bold text-lg'>
							1.2
						</span>
					</li>
					<li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-yellow-100 after:border-4 after:inline-block dark:after:border-yellow-700">
						<span className='flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full lg:h-12 lg:w-12 dark:bg-yellow-700 shrink-0 font-bold text-lg'>
							2
						</span>
					</li>
					<li className='flex items-center w-full'>
						<span className='flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full lg:h-12 lg:w-12 dark:bg-yellow-700 shrink-0 font-bold text-lg'>
							3
						</span>
					</li>
				</ol>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-between'>
				<div>
					<Card>
						<CardHeader className='bg-slate-200'>
							<CardTitle>
								<Badge className='p-2 font-bold bg-blue-600 dark:text-white hover:bg-blue-700'>
									PART 1.1
								</Badge>
							</CardTitle>
						</CardHeader>
						<hr />
						<CardContent>
							<div>
								<audio className='hidden' ref={audioRef} controls src={music} />
							</div>
							<canvas
								ref={canvasRef}
								className='w-full h-32 mt-4 bg-slate-300'
							/>
						</CardContent>
						<CardFooter className='flex-col'>
							<div>
								<div className='flex justify-center gap-4 mb-4'>
									<Button variant={'outline'} onClick={increaseFontSize}>
										A +
									</Button>
									<Button variant={'outline'} onClick={decreaseFontSize}>
										A -
									</Button>
								</div>
							</div>
							<p
								className='text-center text-lg'
								style={{ fontSize: `${fontSize}px` }}
							>
								Please tell me about your best friend.
							</p>
						</CardFooter>
					</Card>
				</div>
				<div className='flex justify-center'>
					{isStartExam ? (
						<div className='text-6xl font-bold text-yellow-700'>
							<CountdownCircleTimer
								isPlaying
								duration={7}
								onComplete={startRecorder}
								colors={['#004777', '#F7B801', '#A30000', '#A30000']}
								colorsTime={[7, 5, 2, 0]}
							>
								{({ remainingTime }) => remainingTime}
							</CountdownCircleTimer>
						</div>
					) : (
						<Button onClick={startExam}>Boshlash</Button>
					)}
				</div>
				<div>
					<Card>
						<CardHeader className='bg-blue-600 text-white text-center'>
							<CardTitle className='font-bold'>Speaking</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='flex justify-center mt-5'>
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
							<div className='flex flex-col items-center mt-5 dark:bg-zinc-300 rounded-lg'>
								<Visualizer audio={audio}>
									{({ canvasRef, start }) => {
										startRecordingRef.current = start
										return (
											<canvas
												ref={canvasRef}
												width={500}
												height={100}
												className='w-full max-w-full h-auto'
											/>
										)
									}}
								</Visualizer>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
