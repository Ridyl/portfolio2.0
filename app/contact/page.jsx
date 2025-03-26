import { MenuButton } from '@/components/MenuButton';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
	return (
		<div className='flex flex-col justify-between p-4 h-[90dvh]'>
			<h1 className='text-primary text-5xl font-semibold drop-shadow-md mb-4 text-end lg:text-center mt-auto'>
				Contact Me!
			</h1>
			<div className='backdrop-blur-md rounded-2xl mb-auto'>
				<ContactForm />
			</div>
			<MenuButton />
		</div>
	);
}
