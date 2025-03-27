import Link from 'next/link';
// import { Link } from 'next-transition-router';

export default function Nav() {
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
			<div className='p-3 text-sm text-wrap w-45 hidden lg:block'>
				<p className='font-light text-xs text-secondary mb-1'>Site Map</p>
				<Link href={'/'}>Home</Link>, <Link href={'/about'}>About</Link>,{' '}
				<Link href={'/projects'}>Projects</Link>,{' '}
				<Link href={'/services'}>Services</Link>,{' '}
				<Link href={'/contact'}>Contact</Link>
			</div>
			<div className='p-3 text-sm text-wrap w-45 hidden lg:block'>
				<p className='font-light text-xs text-secondary mb-1'>Connect</p>
				<a
					href='https://docs.google.com/document/d/1SsZI9msOR0ALeJ790sT7mvVDAyBQwJXu/export?format=pdf'
					target='_blank'
				>
					Resume,{' '}
				</a>
				<a
					href='https://www.linkedin.com/in/joeydalatri'
					target='_blank'
					key={'linkedItem'}
				>
					LinkedIn,{' '}
				</a>
				<Link href={'/contact'}>Email</Link>
			</div>
		</div>
	);
}
