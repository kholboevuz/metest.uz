'use client'

// Adjust import based on ShadCN UI documentation
import * as React from 'react'
import { Calendar } from '../ui/calendar'

export function CalendarDemo() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<div className=''>
			<Calendar mode='single' selected={date} onSelect={setDate} />
		</div>
	)
}
