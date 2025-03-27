'use client';

import { useRef } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { animate } from 'framer-motion/dom';

export default function Providers({ children }) {
	const wrapperRef = useRef(null);

	return (
		<TransitionRouter
			auto
			leave={(next) => {
				animate(
					wrapperRef.current,
					{ opacity: [1, 0] },
					{ duration: 0.3, onComplete: next }
				);
			}}
			enter={(next) => {
				animate(
					wrapperRef.current,
					{ opacity: [0, 1] },
					{ duration: 0.3, onComplete: next }
				);
			}}
		>
			<div ref={wrapperRef}>{children}</div>
		</TransitionRouter>
	);
}
