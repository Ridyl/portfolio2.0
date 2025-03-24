'use client';
import { useState, useEffect } from 'react';

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		height: undefined,
		width: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return windowSize;
}
