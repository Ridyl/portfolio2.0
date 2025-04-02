'use client';
import Link from 'next/link';
import { MenuButton } from './MenuButton';

export default function Nav() {
	const links = [
		{
			label: 'Home',
			url: '/',
		},
		{
			label: 'Projects',
			url: '/projects',
		},
		{
			label: 'Services',
			url: '/services',
		},
		{
			label: 'Contact',
			url: '/contact',
		},
	];

	return (
		<div className='flex justify-around shadow-xl shadow-sky-200 bg-sky-200 backdrop-blur-2xl backdrop-opacity-80'>
			<div className='p-3 text-sm'>
				<p className='font-light text-xs text-secondary mb-1'>Name</p>
				<p className=''>Joey D'Alatri</p>
				<p className='text-secondary'>joey@dalatri.com</p>
			</div>
			<div className='p-3 text-sm text-wrap w-45'>
				<p className='font-light text-xs text-secondary mb-1'>Status</p>
				<p>Available for freelance or permanent positions</p>
			</div>
			{/* <div className='p-3 text-sm text-wrap w-45 hidden lg:block'>
				<p className='font-light text-xs text-secondary mb-1'>Site Map</p>
				{links.map((route) => {
					return (
						<>
							<Link href={route.url}>{route.label} </Link>
						</>
					);
				})}
			</div> */}
			<div className='p-3 text-sm text-wrap w-45 hidden lg:block'>
				<p className='font-light text-xs text-secondary mb-1'>Connect</p>
				<a
					href='https://docs.google.com/document/d/1SsZI9msOR0ALeJ790sT7mvVDAyBQwJXu/export?format=pdf'
					target='_blank'
				>
					Resume{' '}
				</a>
				<a
					href='https://www.linkedin.com/in/joeydalatri'
					target='_blank'
					key={'linkedItem'}
				>
					LinkedIn{' '}
				</a>
				<Link href={'/contact'}>Email</Link>
			</div>
		</div>
	);
}
