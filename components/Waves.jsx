import Image from 'next/image';
import firstWave from '@/components/svg/firstWave.svg';
import secondWave from '@/components/svg/secondWave.svg';
import thirdWave from '@/components/svg/thirdWave.svg';

export default function Waves() {
	return (
		<div className='absolute bottom-0 left-0 h-screen w-screen z-[-1] overflow-hidden repeat-infinite'>
			<div className='relative w-screen h-screen'>
				<Image
					src={firstWave}
					alt='waves'
					className='waves animate-waves absolute bottom-0 left-0 rotate-180 max-w-none opacity-90'
				/>
				<Image
					src={secondWave}
					alt='waves'
					className='waves2 animate-waves2 absolute bottom-0 right-0 rotate-180 max-w-none opacity-75 repeat-infinite'
				/>
				<Image
					src={thirdWave}
					alt='waves'
					className='waves3 animate-waves3 absolute bottom-0 left-0 rotate-180 max-w-none opacity-50 repeat-infinite'
				/>
			</div>
		</div>
	);
}
