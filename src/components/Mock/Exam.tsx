import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import sound from '@/assets/musics/sound.m4a';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Player } from '@lottiefiles/react-lottie-player';
import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Visualizer } from 'react-sound-visualizer';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { axiosClient } from '@/http/axios';
import { FaSpinner } from 'react-icons/fa';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExamType } from '@/types/type';

type PartKey = 'part1_1' | 'part1_2' | 'part2' | 'part3';
type QuestionType = ExamType['exam']['part1_1'][0] | ExamType['exam']['part2'] | ExamType['exam']['part3'];

// Create a separate audio visualization component
const AudioVisualizer: React.FC<{ audioRef: React.RefObject<HTMLAudioElement> }> = ({ audioRef }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationFrameRef = useRef<number | null>(null);
	const audioContextRef = useRef<AudioContext | null>(null);
	const analyserRef = useRef<AnalyserNode | null>(null);
	const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
	const visualizerSetupDoneRef = useRef<boolean>(false);

	// Set up the visualizer once the component mounts
	useEffect(() => {
		// Check if audio element exists and has loaded
		if (!canvasRef.current || !audioRef.current) return;

		// Only set up the visualizer if it hasn't been set up already
		// and if the audio element is ready
		const setupVisualizer = () => {
			if (visualizerSetupDoneRef.current) return;

			try {
				// Create audio context
				audioContextRef.current = new window.AudioContext();
				analyserRef.current = audioContextRef.current.createAnalyser();
				analyserRef.current.fftSize = 256;

				// Connect the audio element to the analyzer
				if (audioRef.current) {
					sourceNodeRef.current = audioContextRef.current.createMediaElementSource(audioRef.current);
				}
				if (sourceNodeRef.current) {
					sourceNodeRef.current.connect(analyserRef.current);
				}
				analyserRef.current.connect(audioContextRef.current.destination);

				const canvas = canvasRef.current;
				const canvasCtx = canvas ? canvas.getContext('2d') : null;
				if (!canvasCtx) return;
				const bufferLength = analyserRef.current.frequencyBinCount;
				const dataArray = new Uint8Array(bufferLength);

				const renderVisualizer = () => {
					if (!canvasCtx || !analyserRef.current) return;

					animationFrameRef.current = requestAnimationFrame(renderVisualizer);
					analyserRef.current.getByteFrequencyData(dataArray);

					// Make sure canvas dimensions are set correctly
					if (canvas) {
						canvas.width = canvas.clientWidth;
						canvas.height = canvas.clientHeight;
					}

					if (canvas) {
						canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
					}
					const barWidth = canvas ? (canvas.width / bufferLength) * 2.5 : 0;
					let x = 0;

					for (let i = 0; i < bufferLength; i++) {
						const barHeight = dataArray[i] / 2;
						const red = barHeight + 25 * (i / bufferLength);
						const green = 250 * (i / bufferLength);
						const blue = 50;
						canvasCtx.fillStyle = `rgb(${red},${green},${blue})`;
						if (canvas) {
							canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
						}
						x += barWidth + 1;
					}
				};

				renderVisualizer();
				visualizerSetupDoneRef.current = true;

			} catch (err) {
				console.error("Audio visualization error:", err);
			}
		};

		// Set up event listeners
		const handleAudioPlay = () => {
			// Resume AudioContext if it's suspended (browsers often require user interaction)
			if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
				audioContextRef.current.resume();
			}
		};

		// Try to setup the visualizer
		if (audioRef.current.readyState >= 2) {
			setupVisualizer();
		} else {
			// If the audio isn't loaded yet, wait for it
			audioRef.current.addEventListener('canplay', setupVisualizer);
		}

		audioRef.current.addEventListener('play', handleAudioPlay);

		// Cleanup function
		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}

			if (sourceNodeRef.current) {
				sourceNodeRef.current.disconnect();
			}

			if (analyserRef.current) {
				analyserRef.current.disconnect();
			}

			if (audioContextRef.current) {
				audioContextRef.current.close();
			}

			if (audioRef.current) {
				audioRef.current.removeEventListener('canplay', setupVisualizer);
				audioRef.current.removeEventListener('play', handleAudioPlay);
			}
		};
	}, [audioRef]);

	return (
		<canvas ref={canvasRef} className='w-full h-20 mt-4 ' />
	);
};

export default function Exam() {
	const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
	const [isExamStarted, setIsExamStarted] = useState(false);
	const [isRecording, setIsRecording] = useState(false);
	const [isWaiting, setIsWaiting] = useState(false);
	const [currentPart, setCurrentPart] = useState<PartKey>('part1_1');
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [examData, setExamData] = useState<ExamType | undefined>(undefined);
	const [loading, setLoading] = useState(true);
	const [responses, setResponses] = useState<string[]>([]);
	const [fontSize, setFontSize] = useState(18);
	const [error, setError] = useState<string | null>(null);
	const [audioElementMounted, setAudioElementMounted] = useState(false);
	const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
	// Removed unused audioChunks state
	const audioRef = useRef<HTMLAudioElement>(null);
	const startRecordingRef = useRef<(() => void) | undefined>(undefined);
	const { id } = useParams<{ id: string }>();
	const audioChunksRef = useRef<Blob[]>([]);
	// Exam data fetching
	useEffect(() => {
		const fetchExamData = async () => {
			try {
				setLoading(true);
				const response = await axiosClient.post('/metest/exam-id', { id });
				setExamData(response.data.data);
				setError(null);
			} catch (err) {
				console.error('Error fetching exam data:', err);
				setError('Failed to load exam data');
			} finally {
				setLoading(false);
			}
		};
		if (id) fetchExamData();
	}, [id]);

	useEffect(() => {
		let stream: MediaStream | null = null;
		const setupAudioStream = async () => {
			try {
				stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
				console.log('Audio stream tracks:', stream.getAudioTracks());
				setAudioStream(stream);
			} catch (err) {
				console.error('Microphone access error:', err);
				setError('Mikrofonga kirishda xatolik yuz berdi!');
			}
		};
		setupAudioStream();

		return () => {
			if (stream) {
				stream.getTracks().forEach(track => track.stop());
			}
		};
	}, []);

	// Mark audio element as mounted after render
	useEffect(() => {
		if (audioRef.current) {
			setAudioElementMounted(true);
		}
	}, []);

	const getCurrentQuestion = (): QuestionType | null => {
		if (!examData) return null;

		switch (currentPart) {
			case 'part1_1':
				return examData.exam.part1_1[currentQuestionIndex] || null;
			case 'part1_2':
				return examData.exam.part1_2.question[currentQuestionIndex] || null;
			case 'part2':
				return examData.exam.part2;
			case 'part3':
				return examData.exam.part3;
			default:
				return null;
		}
	};

	const startExam = () => {
		setIsExamStarted(true);
		// Give time for the state to update
		setTimeout(() => {
			playAudio();
		}, 100);
	};
	const playAudio = () => {
		const current = getCurrentQuestion();
		console.log('Playing audio for:', currentPart, currentQuestionIndex, 'Audio URL:', current?.audio);

		if (audioRef.current && current?.audio) {
			const audioUrl = current.audio;
			audioRef.current.src = audioUrl;
			audioRef.current.load();

			audioRef.current.oncanplaythrough = () => {
				if (audioRef.current) {
					audioRef.current.play()
						.catch(err => console.error('Audio play error:', err));
				}
			};
		} else {
			console.error('Cannot play audio: audioRef or audio source is missing');
		}
	};

	const handleAudioEnd = () => {

		setIsWaiting(true);
	};

	// startRecording funksiyasini yangilash kerak
	const startRecording = () => {
		audioChunksRef.current = [];

		// MediaRecorder mavjudligini tekshiramiz
		if (!mediaRecorder) {
			console.error('MediaRecorder mavjud emas!');
			setError('Mikrofonni ishga tushirishda xatolik yuz berdi');
			return;
		}

		// MediaRecorder holatini tekshiramiz
		if (mediaRecorder.state === 'recording') {
			console.log('MediaRecorder allaqachon yozib olishni boshlagan');
			return;
		}

		// Avval ovozni chalinishini kutib, keyin yozishni boshlaymiz
		const startSound = new Audio(sound);
		startSound.play()
			.then(() => {
				try {
					mediaRecorder.start();
					console.log('MediaRecorder muvaffaqiyatli boshlandi, holati:', mediaRecorder.state);
					// Start visualizer only if we successfully started recording
					if (startRecordingRef.current) {
						startRecordingRef.current();
					}
				} catch (err) {
					console.error('MediaRecorder ishga tushirish xatosi:', err);
					setError('Yozishni boshlashda xatolik yuz berdi');
				}
			})
			.catch(err => {
				console.error('Start signalini chalib bo\'lmadi:', err);
				// Ovoz chalinmasa ham, yozib olishni boshlashga harakat qilamiz
				try {
					mediaRecorder.start();
					console.log('MediaRecorder ovoz signalisiz boshlandi, holati:', mediaRecorder.state);
					if (startRecordingRef.current) {
						startRecordingRef.current();
					}
				} catch (recErr) {
					console.error('MediaRecorder ishga tushirish xatosi:', recErr);
					setError('Yozishni boshlashda xatolik yuz berdi');
				}
			});
	};
	const handleWaitingComplete = () => {
		setIsWaiting(false);
		setIsRecording(true);
		startRecording();
	};
	useEffect(() => {
		if (audioStream) {
			let mimeType = 'audio/webm'; // WebM ko'proq brauzerlar qo'llab-quvvatlaydi

			if (MediaRecorder.isTypeSupported('audio/webm')) {
				mimeType = 'audio/webm';
			} else if (MediaRecorder.isTypeSupported('audio/mp4')) {
				mimeType = 'audio/mp4';
			} else if (MediaRecorder.isTypeSupported('audio/ogg')) {
				mimeType = 'audio/ogg';
			} else if (MediaRecorder.isTypeSupported('audio/mp3')) {
				mimeType = 'audio/mp3';
			}

			console.log('Ishlatiladigan audio formati:', mimeType);

			try {
				// MediaRecorder sozlamalari
				const recorder = new MediaRecorder(audioStream, {
					mimeType: mimeType,
					audioBitsPerSecond: 32000

				});



				recorder.ondataavailable = (e) => {
					if (e.data && e.data.size > 0) {
						audioChunksRef.current.push(e.data);
					}
				};

				recorder.onstop = () => {
					console.log('Yozib olish to\'xtatildi, audio ma\'lumotlar:', audioChunksRef.current.length);
				};

				recorder.onerror = (e) => {
					console.error('MediaRecorder xatosi:', e);
					setError('Audio yozishda xatolik yuz berdi');
				};

				setMediaRecorder(recorder);
			} catch (err) {
				console.error('MediaRecorder yaratishda xatolik:', err);
				setError('Audio yozib olish funksiyasini ishga tushirishda xatolik');
			}
		}
	}, [audioStream]);

	const handleRecordingComplete = async () => {
		setIsRecording(false);


		if (mediaRecorder) {
			try {
				if (mediaRecorder.state === 'recording') {
					console.log('MediaRecorder to\'xtatilmoqda, joriy holati:', mediaRecorder.state);

					// Yangi Promise yaratamiz va onstop eventini kutamiz
					await new Promise(resolve => {
						const originalOnStop = mediaRecorder.onstop;

						mediaRecorder.onstop = function (event) {
							if (originalOnStop) originalOnStop.call(mediaRecorder, event);
							console.log('MediaRecorder muvaffaqiyatli to\'xtatildi');
							resolve(true);
						};

						mediaRecorder.stop();
					});
				} else {
					console.log('MediaRecorder allaqachon to\'xtatilgan:', mediaRecorder.state);
				}
			} catch (err) {
				console.error('MediaRecorder to\'xtatishda xatolik:', err);
			}
		}


		try {
			console.log('Current audioChunks after stop (ref):', audioChunksRef.current);
			const isMp3Supported = MediaRecorder.isTypeSupported('audio/mp3');
			const audioFormat = isMp3Supported ? 'audio/mp3' : 'audio/mp4';
			const fileExtension = isMp3Supported ? 'mp3' : 'm4a';
			const audioBlob = new Blob(audioChunksRef.current, { type: audioFormat }); // Ref dan foydalanamiz

			console.log('Audio blob size:', audioBlob.size);
			if (audioBlob.size === 0) {
				throw new Error('Audio blob bo‘sh, yozuv amalga oshirilmadi!');
			}

			const formData = new FormData();
			console.log('Audio format:', fileExtension);
			formData.append('file', audioBlob, `recorder_${currentPart}_${currentQuestionIndex}.${fileExtension}`);
			console.log('Form data file:', formData.get('file'));

			const response = await axiosClient.post('/admin/metest/add-file', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});

			if (response.data && response.data.file) {
				const responseKey = `${currentPart}_${currentQuestionIndex}`;
				setResponses(prev => [...prev, response.data.file]);
				console.log(`Response ${responseKey}:`, response.data.file);
			}
		} catch (err) {
			console.error('Error uploading recording:', err);
		}

		audioChunksRef.current = []; // Ref ni tozalash

		if (!examData) return;

		const nextIndex = currentQuestionIndex + 1;
		let totalQuestionsInCurrentPart = 0;

		switch (currentPart) {
			case 'part1_1':
				totalQuestionsInCurrentPart = examData.exam.part1_1.length;
				break;
			case 'part1_2':
				totalQuestionsInCurrentPart = examData.exam.part1_2.question.length;
				break;
			default:
				totalQuestionsInCurrentPart = 1;
		}

		if (nextIndex < totalQuestionsInCurrentPart) {
			setCurrentQuestionIndex(nextIndex);
			// setTimeout o'rniga darhol playAudio chaqiramiz
			playAudio();
		} else {
			moveToNextPart();
		}
	};


	// Add a useEffect to play audio when currentQuestionIndex or currentPart changes
	useEffect(() => {
		if (isExamStarted && !isRecording && !isWaiting) {
			console.log('Question or part changed, playing audio for:', currentPart, currentQuestionIndex);
			playAudio();
		}
	}, [currentPart, currentQuestionIndex, isExamStarted, examData]);
	const moveToNextPart = () => {
		const partsOrder: PartKey[] = ['part1_1', 'part1_2', 'part2', 'part3'];
		const currentIndex = partsOrder.indexOf(currentPart);
		if (currentIndex < partsOrder.length - 1) {
			const nextPart = partsOrder[currentIndex + 1];
			setCurrentPart(nextPart);
			setCurrentQuestionIndex(0);
			// setTimeout o'rniga darhol playAudio chaqiramiz
			playAudio();
		} else {
			console.log('Exam completed. Responses:', responses);
		}
	};

	const increaseFontSize = () => setFontSize(prev => prev + 2);
	const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 10));

	const renderer = ({ minutes, seconds, completed }: { minutes: number; seconds: number; completed: boolean }) => {
		if (completed) return <span>You are good to go!</span>;
		return (
			<div className='text-lg'>
				Qolgan vaqt:
				<span className={`${seconds < 5 ? 'text-red-700' : ''} text-lg pl-1`}>
					0{minutes}:{seconds < 5 ? `0${seconds}` : seconds}
				</span>
			</div>
		);
	};

	const renderContent = () => {
		if (!examData) return null;
		const current = getCurrentQuestion();

		switch (currentPart) {
			case 'part1_1':
			case 'part1_2':
				if (!current) return null;
				return (
					<>
						{currentPart === 'part1_2' && (
							<div className="flex gap-4 mb-4">
								<img src={examData.exam.part1_2.image1} alt="Image 1" className="w-1/2" />
								<img src={examData.exam.part1_2.image2} alt="Image 2" className="w-1/2" />
							</div>
						)}
						<div className='text-center text-lg' style={{ fontSize: `${fontSize}px` }}>
							{Array.isArray(current.question)
								? current.question.map((q, index) => <span key={index}>{q.toString()}</span>)
								: current.question}
						</div>
					</>
				);
			case 'part2':
				return (
					<>
						<div className="flex gap-4 mb-4">
							<img src={examData.exam.part2.image3} alt="Image 1" className="w-1/2" />
						</div>
						<ul className='list-disc pl-5'>
							{examData.exam.part2.question.map((q, index) => (
								<li key={index} style={{ fontSize: `${fontSize}px` }}>
									{q.question}
								</li>
							))}
						</ul>
					</>
				);
			case 'part3':
				return (
					<div>
						<h1 style={{ fontSize: `${fontSize}px` }}>{examData.exam.part3.question}</h1>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="font-bold">FOR</TableHead>
									<TableHead className="font-bold">AGAINST</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{examData.exam.part3.for.map((f, index) => (
									<TableRow key={f._id}>
										<TableCell style={{ fontSize: `${fontSize}px` }}>{f.question}</TableCell>
										<TableCell style={{ fontSize: `${fontSize}px` }}>
											{examData.exam.part3.against[index]?.question || ''}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				);
			default:
				return null;
		}
	};
	console.log('Responses:', examData);
	if (error) {
		return <div className="text-red-600 text-center pt-10">Error: {error}</div>;
	}

	return (
		<div className='max-w-6xl m-auto pt-10 mb-16 '>
			<div className='flex justify-center mb-10'>
				<ol className='flex items-center w-full justify-center max-w-md'>
					{['1.1', '1.2', '2', '3'].map((step, index) => (
						<li
							key={index}
							className={`flex ${index < 3 ? 'w-full' : ''} items-center ${currentPart === `part${step.replace('.', '_')}` ? 'text-green-600' : 'text-yellow-600'
								} after:content-[''] after:w-full after:h-1 after:border-b after:border-4 ${index < 3 ? 'after:inline-block' : ''
								} after:border-yellow-100`}
						>
							<span className='flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-full lg:h-12 lg:w-12 shrink-0 font-bold text-lg'>
								{step}
							</span>
						</li>
					))}
				</ol>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
				<div>
					<Card>
						<CardHeader className='bg-slate-200'>
							<CardTitle>
								<Badge className='p-2 font-bold bg-blue-600 dark:text-white'>
									PART {currentPart.replace('part', '').replace('_', '.').toUpperCase()}
								</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<audio
								controls
								className='hidden'
								ref={audioRef}
								onEnded={handleAudioEnd}
								onError={(e) => console.error('Audio error:', e)}
								crossOrigin="anonymous"
							/>

							{audioElementMounted ? <AudioVisualizer audioRef={audioRef} /> : null}
						</CardContent>
						<CardFooter className='flex-col'>
							<div className='flex justify-center gap-4 mb-4'>
								<Button variant={'outline'} onClick={increaseFontSize}>A +</Button>
								<Button variant={'outline'} onClick={decreaseFontSize}>A -</Button>
							</div>
							{renderContent()}
						</CardFooter>
					</Card>
				</div>

				<div className='flex justify-center'>
					{!isExamStarted ? (
						loading ? (
							<FaSpinner className='animate-spin text-5xl text-yellow-700' />
						) : (
							<Button onClick={startExam}>Boshlash</Button>
						)
					) : isWaiting ? (
						<CountdownCircleTimer
							isPlaying
							duration={5}
							onComplete={handleWaitingComplete}
							colors={['#004777', '#F7B801', '#A30000', '#A30000']}
							colorsTime={[5, 3, 2, 0]}
						>
							{({ remainingTime }) => remainingTime}
						</CountdownCircleTimer>
					) : null}
				</div>

				<div>
					<Card>
						<CardHeader className='bg-blue-600 text-white text-center'>
							<CardTitle className='font-bold'>
								{isRecording ? (
									<Countdown
										date={Date.now() + ((getCurrentQuestion()?.time || 30) * 1000)}
										renderer={renderer}
										onComplete={handleRecordingComplete}
									/>
								) : (
									<div>Speaking</div>
								)}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='flex justify-center mt-5'>
								{isRecording && (
									<div className='bg-red-200 p-3 rounded-lg inline-block'>
										<Player
											src='https://lottie.host/dfd993ab-cd85-44de-8abd-b900bd9f2c40/Y7Pf4lLklJ.json'
											speed={2}
											style={{ width: '20px', height: '20px', margin: 'auto' }}
											loop
											autoplay
										/>
									</div>
								)}
							</div>
							<div className='flex flex-col items-center mt-5 dark:bg-zinc-300 rounded-lg'>
								<Visualizer audio={audioStream}>
									{({ canvasRef, start }) => {
										startRecordingRef.current = start;
										return (
											<canvas
												ref={canvasRef}
												width={500}
												height={100}
												className='w-full max-w-full h-auto'
											/>
										);
									}}
								</Visualizer>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}