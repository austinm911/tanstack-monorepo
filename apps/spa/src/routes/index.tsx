import { Button } from '@repo/ui/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	beforeLoad: (context) => {
		console.log('beforeLoad', context)
	},
	component: Home,
})

function Home() {
	return (
		<div className='p-2 flex flex-col gap-2'>
			<h3>Welcome Home!</h3>
			<Button className='w-fit'>Shadcn Button from @repo/ui</Button>
		</div>
	)
}
