import { MenuButton } from './MenuButton';

export function Hero() {
	return (
		<div className='flex flex-col p-4 h-[90dvh]'>
			<div className='flex-col mt-auto text-end lg:text-center'>
				<h1 className='text-3xl'>
					I'm
					<span className='font-bold text-primary'> Joey D'Alatri,</span>
				</h1>
				<h1 className='text-2xl mb-3'>
					A <span className='font-bold text-primary underline'>Full-Stack</span>{' '}
					Developer With a Focus on{' '}
					<span className='font-bold text-primary underline'>Front-End</span>
				</h1>
			</div>
			<MenuButton />
		</div>
	);
}
