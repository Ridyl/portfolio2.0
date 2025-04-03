'use client';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Define Zod schema
const contactFormSchema = z.object({
	firstName: z.string().min(1, { message: 'First name is required' }),
	lastName: z.string().min(1, { message: 'Last name is required' }),
	email: z.string().email({ message: 'Invalid email address' }),
	message: z
		.string()
		.min(10, { message: 'Message must be at least 10 characters' }),
});

export function ContactForm() {
	const form = useForm({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			message: '',
		},
	});

	const onSubmit = (values) => {
		const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
		const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

		emailjs.send(serviceID, templateID, values).then(
			(response) => {
				toast('Message sent successfully!');
			},
			(error) => {
				toast('Failed to send message. Please try again later.');
			}
		);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-6 max-w-lg mx-auto p-4 border rounded-2xl border-sky-300 shadow-md'
			>
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input placeholder='John' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input placeholder='Doe' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type='email' placeholder='john@example.com' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea placeholder='Type your message here...' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit'>Send Message</Button>
			</form>
		</Form>
	);
}
