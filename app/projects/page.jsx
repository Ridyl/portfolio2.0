import { MenuButton } from '@/components/MenuButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const projects = [
	{
		title: 'Weather App',
		github: 'https://github.com/Ridyl/weather-app2.0',
		url: '',
		desc: "How's the weather in Sydney? Let's find out!",
		tech: ['React', 'TailwindCSS', 'MaterialUI', 'Express'],
	},
	{
		title: 'To-Do App',
		github: 'https://github.com/Ridyl/To-Do-App',
		url: '',
		desc: 'Never let those pesky tasks be forgotten. Track anything and everything in this simple to do app!',
		tech: ['React', 'Bootstrap', 'Express'],
	},
	{
		title: 'Media Finder',
		github: 'https://github.com/Ridyl/movie_finder',
		url: '',
		desc: 'Linked with the OMDb API, find any movie or show with a simple search!',
		tech: ['React', 'ShadCN', 'TailwindCSS', 'Express'],
	},
	{
		title: 'Portfolio',
		github: 'https://github.com/Ridyl/portfolio2.0',
		url: '',
		desc: 'What you are looking at right now. A culmination of my skills!',
		tech: ['NextJS', 'React', 'ShadCN'],
	},
];

export default function Projects() {
	return (
		<div className='flex flex-col justify-between p-4 h-[90dvh]'>
			<div className='flex flex-col justify-center h-full lg:mt-auto lg:mb-auto'>
				<h1 className='text-primary text-5xl font-semibold drop-shadow-md text-end lg:text-center'>
					Projects
				</h1>
				<div className='flex justify-center mt-6'>
					<ScrollArea className='pr-3 rounded-md border border-sky-300 h-[550px] backdrop-blur-sm lg:w-1/2 lg:h-4/5 shadow-2xl'>
						{projects.map((project, index) => {
							return (
								<div
									key={index}
									className='flex flex-col text-center w-full p-2 '
								>
									<h1 className='text-secondary mb-2 text-2xl'>
										{project.title}
									</h1>
									<div className='w-full flex justify-center mb-2'>
										{project.tech.map((techno, index) => {
											return (
												<Badge className='mr-3' key={index}>
													{techno}
												</Badge>
											);
										})}
									</div>
									<div className='mb-3'>
										<p>{project.desc}</p>
									</div>
									<Separator className='my-4' />
								</div>
							);
						})}
					</ScrollArea>
				</div>
			</div>
			<MenuButton />
		</div>
	);
}
