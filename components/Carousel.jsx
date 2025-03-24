'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const items = [
	{
		url: '/change_calculator.png',
		title: 'Change Calculator',
		desc: 'Change calculator calculates change to be given back to a customer and has a visual representation of the amount of currency that needs to be returned. Built using React and Bootstrap.',
	},
	{
		url: '/todo_ui.png',
		title: 'Todo App',
		desc: 'To-Do App created with React and Bootstrap. Allows for creation of items, deletion, and marking completion. Has very basic title and paragraph formatting that is done in JS rather than an API.',
	},
	{
		url: '/weather_app.png',
		title: 'Weather App',
		desc: 'A weather app created using React and Bootstrap. Loads weather for area based off of lat long values of the user and shows a map object using LeafletJS. Uses Google Charts API for the temperature guage.',
	},
];

function Carousel() {
	const [width, setWidth] = useState(0);
	const carousel = useRef(null);

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, [carousel]);

	return (
		<div className='w-full lg:w-[60%]'>
			<motion.div
				ref={carousel}
				drag='x'
				whileDrag={{ scale: 0.95 }}
				dragElastic={0.2}
				dragConstraints={{ right: 0, left: -width }}
				dragTransition={{ bounceDamping: 30 }}
				transition={{ duration: 0.2, ease: 'easeInOut' }}
				className='flex will-change-transform cursor-grab active:cursor-grabbing'
			>
				{items.map((itemData, index) => {
					return (
						<motion.div key={index} className='min-w-[20rem] min-h-[25rem] p-2'>
							<Image
								src={itemData?.url}
								width={400}
								height={500}
								alt='img'
								className='w-full h-full object-cover pointer-events-none rounded-md'
							/>
							<div className='text-center backdrop-blur-md border-white border rounded-b-2xl p-3'>
								<h1 className='text-2xl text-primary underline underline-offset-4 text-bold drop-shadow-md'>
									{itemData.title}
								</h1>
								<div className='text-left'>
									<p>{itemData.desc}</p>
								</div>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}

export default Carousel;
