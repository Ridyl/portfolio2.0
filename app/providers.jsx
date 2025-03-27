'use client';
import { useRef } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { animate } from 'framer-motion';
import Nav from '@/components/Nav';

export default function Providers({ children }) {
	const wrapperRef = useRef(null);

	return (
		<TransitionRouter
			auto
			leave={(next) => {
				animate(
					wrapperRef.current,
					{ opacity: [1, 0] },
					{ duration: 1, onComplete: next }
				);
			}}
			enter={(next) => {
				animate(
					wrapperRef.current,
					{ opacity: [0, 1] },
					{ duration: 1, onComplete: next }
				);
			}}
		>
			<Nav />
			<div ref={wrapperRef}>{children}</div>
		</TransitionRouter>
	);
}
