'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import Link from 'next/link';
import useWindowSize from './hooks/useWindowSize';

const navigationLinks = [
	{
		section: 'Sitemap',
		links: ['Home', 'About', 'Projects', 'Services', 'Contact'],
	},
	// {
	// 	section: 'Connect',
	// 	links: ['Resume', 'LinkedIn', 'Email'],
	// },
];

const menuVariant = {
	hidden: { y: '100%' },
	show: {
		y: 0,
		transition: {
			duration: 1.4,
			type: 'spring',
			bounce: 0,
			delayChildren: 1,
		},
	},
	exit: {
		x: '100%',
		opacity: 0,
		transition: {
			delay: 0.7,
			duration: 0.3,
		},
	},
};

const containerTitleVariants = {
	hidden: { opacity: 0, x: '100%' },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			delay: 0.5,
		},
	},
	exit: { opacity: 0, x: '100%' },
};

const listVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			delayChildren: 0.5,
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
			staggerChildren: 0.1,
		},
	},
};

const itemsVariants = {
	hidden: { x: '-50%', opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 100,
			mass: 0.3,
		},
	},
	exit: {
		x: '50%',
		opacity: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			mass: 0.3,
		},
	},
};

export function MenuButton() {
	const { height, width } = useWindowSize();
	const [open, setOpen] = useState(false);
	const toggleOpen = () => setOpen(!open);

	return (
		<>
			<AnimatePresence key='presence' exitBeforeEnter>
				{open ? (
					<motion.div
						variants={menuVariant}
						initial='hidden'
						animate='show'
						exit='exit'
						style={{
							top: '0px',
							left: '0px',
							width: width,
							height: height,
						}}
						key='box'
						className='absolute z-10 overflow-hidden backdrop-blur-md'
					>
						<motion.div key='links'>
							{navigationLinks.map((section, index) => {
								return (
									<div key={section + index} className='p-3 mt-8'>
										<motion.div
											variants={containerTitleVariants}
											initial='hidden'
											animate='show'
											exit='exit'
											className='border-b-1 pb-2 border-secondary mb-3 text-end'
											key={index + 2}
										>
											<h1 key={index} className='text-2xl text-secondary mb-2'>
												{section.section}
											</h1>
										</motion.div>
										<div key='break'>
											<motion.ul
												variants={listVariants}
												initial='hidden'
												animate='show'
												exit='exit'
												className='flex flex-col gap-5 text-3xl font-semibold w-[100%] text-end'
												key={index + 1}
											>
												{section.links.map((link) => {
													return (
														<motion.li variants={itemsVariants} key={link}>
															{link === 'Home' ? (
																<Link href={'/'} onClick={toggleOpen}>
																	{link}
																</Link>
															) : (
																<Link
																	href={`/${link.toLowerCase()}`}
																	onClick={toggleOpen}
																>
																	{link}
																</Link>
															)}
														</motion.li>
													);
												})}
											</motion.ul>
											<motion.div
												variants={containerTitleVariants}
												initial='hidden'
												animate='show'
												exit='exit'
												className='border-b-1 pb-2 border-secondary mb-3 text-end'
												key={index + 2}
											>
												<h1 className='text-2xl text-secondary mb-2 mt-5'>
													Connect
												</h1>
											</motion.div>
											<motion.ul
												variants={listVariants}
												initial='hidden'
												animate='show'
												exit='exit'
												className='flex flex-col gap-5 text-3xl font-semibold w-[100%] text-end'
												key={index + 1}
											>
												<motion.li variants={itemsVariants} key={'resumeList'}>
													<a
														download='@/components/downloads/Resume_JosephDalatr.pdf'
														onClick={toggleOpen}
														key={'resumeItem'}
													>
														Resume
													</a>
												</motion.li>
												<motion.li variants={itemsVariants} key={'linkedList'}>
													<a
														href='https://www.linkedin.com/in/joeydalatri/'
														target='_blank'
														onClick={toggleOpen}
														key={'linkedItem'}
													>
														LinkedIn
													</a>
												</motion.li>
												<motion.li variants={itemsVariants} key={'emailList'}>
													<Link
														href='/email'
														onClick={toggleOpen}
														key={'emailItem'}
													>
														Email
													</Link>
												</motion.li>
											</motion.ul>
										</div>
									</div>
								);
							})}
						</motion.div>
					</motion.div>
				) : null}
			</AnimatePresence>
			<Button
				variant='default'
				className='mt-auto w-20 ml-auto z-20 shadow-md block lg:invisible'
				onClick={toggleOpen}
				key='button'
			>
				Menu
			</Button>
		</>
	);
}
