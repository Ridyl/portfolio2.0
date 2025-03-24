import { MenuButton } from '@/components/MenuButton';

const projects = [
	{
		title: 'Weather App',
		github: 'https://github.com/Ridyl/weather-app2.0',
		url: '',
	},
	{
		title: 'To-Do App',
		github: 'https://github.com/Ridyl/To-Do-App',
		url: '',
	},
	{
		title: 'Media Finder',
		github: 'https://github.com/Ridyl/movie_finder',
		url: '',
	},
	{
		title: 'Portfolio',
		github: '',
		url: '',
	},
];

export default function Projects() {
	return (
		<div className='flex flex-col justify-between p-4 h-[90dvh] overflow-y-hidden'>
			<div className='flex flex-col text-end lg:text-center'>
				<h1 className='text-primary text-5xl font-semibold drop-shadow-md'>
					Projects
				</h1>
			</div>
			<div className='mt-4 flex justify-center ml-auto mr-auto w-full h-full overflow-hidden'></div>
			<div className='flex justify-end'>
				<MenuButton />
			</div>
		</div>
	);
}
