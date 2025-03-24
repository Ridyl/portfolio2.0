import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Nav from '@/components/Nav';
import Waves from '@/components/Waves';
import './globals.css';

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
				className={`${geistSans.variable} ${geistMono.variable} antialiased rounded-full bg-radial-[at_50%_90%] from-sky via-sky-100 to-sky-200 to-100% overflow-y-hidden`}
				suppressHydrationWarning
			>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<Nav />
					{children}
					<Waves />
				</ThemeProvider>
			</body>
		</html>
	);
}
