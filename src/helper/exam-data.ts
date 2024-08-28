export interface Question {
	id: number
	question: string
	audio: string
	photo: string | null
	part: number
}
export interface ExamData {
	id: number
	type: string
	questions: Question[]
}

export const examData: ExamData[] = [
	{
		id: 1,
		type: 'english',
		questions: [
			{
				id: 1,
				question: 'What is your name?',
				part: 1.1,
				audio:
					'https://dl.tonhits.net/mp3/muhammadziyo-shahlo-kuzli-malika.mp3',
				photo: null,
			},
			{
				id: 2,
				question: "What is your best friend's name?",
				part: 1.2,
				audio:
					'https://dl.tonhits.net/mp3/muhammadziyo-shahlo-kuzli-malika.mp3',
				photo: null,
			},
			{
				id: 3,
				part: 2,
				question: "What is your best last's name?",
				audio:
					'https://dl.tonhits.net/mp3/muhammadziyo-shahlo-kuzli-malika.mp3',
				photo: null,
			},
			{
				id: 4,
				part: 3,
				question: 'What is your favorite color?',
				audio:
					'https://dl.tonhits.net/mp3/muhammadziyo-shahlo-kuzli-malika.mp3',
				photo: null,
			},
		],
	},
]
