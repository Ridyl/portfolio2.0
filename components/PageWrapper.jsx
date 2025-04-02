'use client';

import { motion } from 'framer-motion';

const PageWrapper = (props) => {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.7 }}
				{...props}
			/>
		</div>
	);
};

export default PageWrapper;
