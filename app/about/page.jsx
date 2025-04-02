export default function About() {
	return (
		<div className='flex flex-col justify-between p-4 h-[80dvh] lg:w-[50%] lg:ml-auto lg:mr-auto'>
			<div className='flex flex-col mt-auto mb-auto text-end lg:text-center'>
				<h1 className='text-primary text-5xl font-semibold drop-shadow-md'>
					About Me!
				</h1>
				<p className='text-lg mt-3 font-light'>
					I'm a dedicated and future-focused individual with a{' '}
					<span className='text-primary font-bold'> strong passion </span>
					for technology, problem-solving, and creative innovation. I enjoy
					learning new tools, experimenting with ideas, and working toward a
					career where I can make a{' '}
					<span className='text-primary font-bold'>meaningful impact</span>{' '}
					through tech. Whether it's refining user experiences or exploring how
					AI can improve lives, I&apos;m all about creating{' '}
					<span className='text-primary font-bold'>solutions that matter</span>.
				</p>
			</div>
			<div className='flex justify-end'></div>
		</div>
	);
}
