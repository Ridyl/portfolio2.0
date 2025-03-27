import { MenuButton } from '@/components/MenuButton';

export default function Services() {
	return (
		<div className='flex flex-col justify-between p-4 h-[90dvh] lg:w-[50%] lg:ml-auto lg:mr-auto'>
			<div className='flex flex-col mt-auto mb-auto text-end lg:text-center'>
				<h1 className='text-primary text-5xl font-semibold drop-shadow-md text-end lg:text-center'>
					Services
				</h1>
				<p className='text-lg mt-3 font-light'>
					I specialize in building{' '}
					<span className='text-primary font-bold'>
						full-stack applications and websites
					</span>{' '}
					tailored to your unique needs. Whether you're starting from scratch or
					looking to enhance an existing project, I{' '}
					<span className='text-primary font-bold'>bring ideas to life</span>{' '}
					using a wide range of modern technologies from intuitive front-end
					interfaces built with React, to powerful and scalable back-end
					systems. My goal is to create fast, accessible, and secure web
					experiences that not only{' '}
					<span className='text-primary font-bold'>look great</span> but also{' '}
					<span className='text-primary font-bold'>perform reliably</span> under
					the hood. Whether it's a dynamic single-page app, a custom dashboard,
					or a full-featured web platform, I&apos;m here to turn your vision
					into a fully functional digital solution.
				</p>
			</div>
			<div className='flex justify-end'>
				<MenuButton />
			</div>
		</div>
	);
}
