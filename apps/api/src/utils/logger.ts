export function customLogger(message: string, ...rest: string[]) {
	const date = new Date()
	const formattedDate = date
		.toLocaleString('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: true,
			timeZone: 'America/Los_Angeles',
		})
		.replace(/(\d+)\/(\d+)\/(\d+),/, '$3-$1-$2')
	console.log(`[${formattedDate}] ${message}`, ...rest)
}
