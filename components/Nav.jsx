import Link from 'next/link';

export default function Nav() {
	return (
		<div className='flex justify-around shadow-xl shadow-sky-200 bg-sky-200 backdrop-blur-2xl backdrop-opacity-80'>
			<div className='p-3 text-sm'>
				<p className='font-light text-xs text-secondary mb-1'>Name</p>
				<p className=''>Joey D'Alatri</p>
				<Link href={'/contact'}>
					<p className='text-secondary no-underline hover:underline'>
						joey@dalatri.com
					</p>
				</Link>
			</div>
			<div className='p-3 text-sm text-wrap w-45'>
				<p className='font-light text-xs text-secondary mb-1'>Status</p>
				<p>Available for freelance or permanent positions</p>
			</div>
			<div className='p-3 text-sm text-wrap w-45 hidden lg:block'>
				<p className='font-light text-xs text-secondary mb-1'>Connect</p>
				<a
					href='https://docs.google.com/document/d/1SsZI9msOR0ALeJ790sT7mvVDAyBQwJXu/export?format=pdf'
					target='_blank'
				>
					<span className='no-underline hover:underline'>Resume</span>,{' '}
				</a>
				<a
					href='https://www.linkedin.com/in/joeydalatri'
					target='_blank'
					key={'linkedItem'}
				>
					<span className='no-underline hover:underline'>LinkedIn</span>,{' '}
				</a>
				<Link href={'/contact'}>
					<span className='no-underline hover:underline'>Email</span>
				</Link>
			</div>
		</div>
	);
}
