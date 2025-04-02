import { Geist, Geist_Mono } from 'next/font/google';
import Waves from '@/components/Waves';

import './globals.css';
import Nav from '@/components/Nav';
import { MenuButton } from '@/components/MenuButton';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: "Joey D'Alatri",
	description: "Created by Joey D'Alatri",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased rounded-full bg-radial-[at_50%_100%] from-sky via-sky-100 to-sky-200 to-100% overflow-y-hidden`}
				suppressHydrationWarning
			>
				<Nav />
				{children}
				<MenuButton className='absolute right-0 bottom-0 lg:invisible' />
				<Waves />
			</body>
		</html>
	);
}
