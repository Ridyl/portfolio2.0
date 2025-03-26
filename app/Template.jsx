'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useContext, useRef } from 'react';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import useWindowSize from '@/components/hooks/useWindowSize';
import Nav from '@/components/Nav';
import Cloud1 from '@/components/svg/clouds/LeftFront';
import Cloud2 from '@/components/svg/clouds/LeftBack';
import Cloud3 from '@/components/svg/clouds/RightFront';
import Cloud4 from '@/components/svg/clouds/RightBack';

const MotionCloud1 = motion(Cloud1);
const MotionCloud2 = motion(Cloud2);
const MotionCloud3 = motion(Cloud3);
const MotionCloud4 = motion(Cloud4);

export default function Template({ children }) {
	const { height, width } = useWindowSize();
	const pathname = usePathname();

	const cloudAnim = (delay) => ({
		initial: { x: '-100%' },
		animate: {
			x: '100%',
			transition: { duration: 1.2, ease: 'easeInOut', delay },
		},
	});

	const variants = {
		hidden: { opacity: 0 },
		enter: { opacity: 1 },
		exit: { opacity: 0 },
	};

	function FrozenRouter(props) {
		const context = useContext(LayoutRouterContext ?? {});
		const frozen = useRef(context).current;

		if (!frozen) {
			return <>{props.children}</>;
		}

		return (
			<LayoutRouterContext.Provider value={frozen}>
				{props.children}
			</LayoutRouterContext.Provider>
		);
	}

	return (
		<div
			className='relative overflow-hidden'
			style={{ height: height, width: width }}
		>
			<Nav />
			<AnimatePresence mode='popLayout'>
				<motion.div key={pathname} className='relative z-10'>
					<MotionCloud1
						key='cloud1'
						className='absolute top-0 left-0 w-full h-auto z-50 opacity-90 pointer-events-none'
						{...cloudAnim(0.3)}
					/>
					<MotionCloud2
						key='cloud2'
						className='absolute top-10 left-0 w-full h-auto z-50 opacity-90 pointer-events-none'
						{...cloudAnim(0.5)}
					/>
					<MotionCloud3
						key='cloud3'
						className='absolute bottom-10 left-0 w-full h-auto z-50 opacity-90 pointer-events-none'
						{...cloudAnim(0.7)}
					/>
					<MotionCloud4
						key='cloud4'
						className='absolute bottom-0 left-0 w-full h-auto z-50 opacity-90 pointer-events-none'
						{...cloudAnim(0.9)}
					/>
					<motion.div
						initial='hidden'
						animate='enter'
						exit='exit'
						variants={variants}
						transition={{ ease: 'linear', duration: 1 }}
						className='relative z-10'
					>
						<FrozenRouter>
							<motion.div
								initial='hidden'
								animate='enter'
								exit='exit'
								variants={variants}
								transition={{ ease: 'linear', duration: 1, delay: 1.7 }}
								className='relative z-10'
							>
								{children}
							</motion.div>
						</FrozenRouter>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
