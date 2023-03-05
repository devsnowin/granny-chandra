import { sequence } from '@sveltejs/kit/hooks';
import { redirect, type Handle } from '@sveltejs/kit';
import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/core/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import prisma from './db.server';

const handleAuth = (async (...args) => {
	const [{ event }] = args;
	return SvelteKitAuth({
		trustHost: true,
		adapter: PrismaAdapter(prisma),
		providers: [
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			GoogleProvider({
				clientId: GOOGLE_CLIENT_ID,
				clientSecret: GOOGLE_CLIENT_SECRET,
			}),
		],
		callbacks: {
			async session({ session, user }) {
				session.user = {
					id: user.id,
					name: user.name,
					username: user.username,
					email: user.email,
					image: user.image,
					settings: user.settings,
				};
				event.locals.session = session;
				return session;
			},
		},
		events: {
			async createUser(message) {
				await prisma.userSettings.create({
					data: {
						userId: message.user.id,
					},
				});
			},
		},
	})(...args);
}) satisfies Handle;

const protectedHandle = (async ({ event, resolve }) => {
	await event.locals.getSession();
	if (!event.locals.session?.user && event.route.id?.includes('protected')) {
		throw redirect(302, '/login');
	}

	return resolve(event);
}) satisfies Handle;

export const handle: Handle = sequence(handleAuth, protectedHandle);
